import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { format } from 'date-fns';
import { DropzoneArea } from 'material-ui-dropzone';
import { TableBody, TableCell, TableContainer } from '@material-ui/core';

import { useReactiveVar } from '@apollo/client';
import {
  DocumentsViewerPopover,
  ExpandedFile,
  Extension,
  ExtentionFileIcon,
  Pagination,
} from '@components';
import {
  Document as StoreDocument,
  documentCurrentPathVar as setCurrentPath,
  documentExpandedVar,
  documentSelectedVar,
  documentSelectedVar as setSelected,
  documentsItemsPerPageVar as setItemsPerPage,
  documentsOrderByVar as setOrderBy,
  documentsOrderVar as setOrder,
  documentsPageVar as setPage,
  documentVar as setDocument,
} from '@store';
import { SetFavoriteComponent } from './Components';
import { Document, DocumentsTableProps, HeadCell } from './DocumentsTable.types';
import { EnhancedTableHead } from './EnhancedTableHead';
import { EnhancedTableToolbar } from './EnhancedTableToolbar';
import { getLastPath, pathToName, usageHandler } from './utils';

import { Styled } from './DocumentsTable.styled';

/**
 * @deprecated use table in components
 */
const DocumentsTable: React.FC<DocumentsTableProps> = ({
  toolbar = false,
  popover = false,
  rows,
  handleGoMainFolder,
  handleOpen,
  handleChange,
  itemsTotal,
}) => {
  const { t } = useTranslation('documents');
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [popoverIsOpen, setPopoverIsOpen] = useState(false);

  const expanded = useReactiveVar(documentExpandedVar);
  const selected = useReactiveVar(documentSelectedVar);
  const page = useReactiveVar(setPage);
  const perPage = useReactiveVar(setItemsPerPage);
  const order = useReactiveVar(setOrder);
  const orderBy = useReactiveVar(setOrderBy);
  const currentPath = useReactiveVar(setCurrentPath);

  const handleChangeRowsPerPage = (event: React.ChangeEvent<{ value: unknown }>) => {
    setItemsPerPage(Number(event.target.value));
    setPage(0);
  };

  const isSelected = (path: string) => selected.findIndex((item) => item.path === path) !== -1;

  const emptyRows = perPage - Math.min(perPage, itemsTotal - page * perPage);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage - 1);
    setSelected([]);
  };

  const handleRequestSort = (property: 'path' | 'bytes' | 'modified') => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const headCells: HeadCell[] = [
    {
      id: 'path',
      numeric: false,
      disablePadding: true,
      label: 'Name',
    },
    { id: 'bytes', numeric: true, disablePadding: false, label: 'Size' },
    { id: 'modified', numeric: true, disablePadding: false, label: 'Date' },
  ];

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newDocumentSelecteds = rows.map((n: Document) => {
        return { path: n.path, name: pathToName(n.path), type: n.type, extradata: n.extradata };
      });
      setSelected(newDocumentSelecteds);

      return;
    }
    setSelected([]);
  };

  const handleRightClick = (event: React.MouseEvent, document: { path: string; type: string }) => {
    event.preventDefault();
    setPosition({ x: event.pageX, y: event.pageY });
    setPopoverIsOpen((prev) => !prev);
    const name = pathToName(document.path);
    setDocument({ ...document, name });
  };

  const handleClick = (path: string, type: string) => {
    return () => {
      const selectedIndex = selected.findIndex((item) => item.path === path);
      let newDocumentSelected: StoreDocument[] = [];

      if (selectedIndex === -1) {
        newDocumentSelected = newDocumentSelected.concat(selected, {
          path,
          type,
          name: pathToName(path),
        });
      } else if (selectedIndex === 0) {
        newDocumentSelected = newDocumentSelected.concat(selected.slice(1));
      } else if (selectedIndex === selected.length - 1) {
        newDocumentSelected = newDocumentSelected.concat(selected.slice(0, -1));
      } else if (selectedIndex > 0) {
        newDocumentSelected = newDocumentSelected.concat(
          selected.slice(0, selectedIndex),
          selected.slice(selectedIndex + 1),
        );
      }
      setSelected(newDocumentSelected);
    };
  };

  const getAnchorPosition = (): { top: number; left: number } | undefined =>
    position.y !== null && position.x !== null ? { top: position.y, left: position.x } : undefined;

  const onContextMenu = (path: string, type: string) => {
    return (event: React.MouseEvent) =>
      handleRightClick(event, {
        path,
        type,
      });
  };

  const goBack = () => {
    setCurrentPath(getLastPath(currentPath));
  };

  return (
    <TableContainer>
      {toolbar && (
        <EnhancedTableToolbar
          numSelected={selected.length}
          rowsPerPage={perPage}
          expanded={expanded}
          handleChangeRowsPerPage={handleChangeRowsPerPage}
          handleGoMainFolder={handleGoMainFolder}
          setPage={setPage}
        />
      )}
      {itemsTotal ? (
        <>
          {popover && (
            <DocumentsViewerPopover
              isOpen={popoverIsOpen}
              handleToggle={setPopoverIsOpen}
              anchorPosition={getAnchorPosition()}
            />
          )}
          {!expanded ? (
            <>
              <Styled.TableComponent>
                <EnhancedTableHead
                  numSelected={selected.length}
                  order={order}
                  orderBy={orderBy}
                  onSelectAllClick={handleSelectAllClick}
                  onRequestSort={handleRequestSort}
                  rowCount={rows.length}
                  headCells={headCells}
                />
                <TableBody>
                  {currentPath !== '/' && (
                    <Styled.Row>
                      <TableCell colSpan={6} onClick={goBack}>
                        ...
                      </TableCell>
                    </Styled.Row>
                  )}
                  {rows.map(({ path, bytes, modified, type, extradata, isFavorite }, index) => {
                    const isItemSelected = isSelected(path);
                    const labelId = `enhanced-table-checkbox-${index}`;

                    return (
                      <Styled.Row
                        hover
                        role="checkbox"
                        aria-checked={isItemSelected}
                        tabIndex={-1}
                        key={path}
                        selected={isItemSelected}
                        onContextMenu={path ? onContextMenu(path, type) : undefined}
                      >
                        <TableCell padding="checkbox">
                          <Styled.Checkbox
                            checked={isItemSelected}
                            inputProps={{ 'aria-labelledby': labelId }}
                            onClick={handleClick(path, type)}
                          />
                        </TableCell>
                        <Styled.ClickableTableCell
                          component="th"
                          id={labelId}
                          scope="row"
                          padding="none"
                        >
                          <Styled.NameWrapper
                            onClick={handleOpen({
                              path,
                              type,
                              bytes,
                              modified,
                              extradata,
                              isFavorite,
                            })}
                          >
                            <Styled.IconWrapper>
                              <ExtentionFileIcon extension={Extension.jpg} />
                            </Styled.IconWrapper>
                            {pathToName(path)}
                          </Styled.NameWrapper>
                          <SetFavoriteComponent isFavorite={isFavorite} path={path} />
                        </Styled.ClickableTableCell>
                        <TableCell align="right">
                          {type === 'DocumentFile' && usageHandler(bytes)}
                        </TableCell>
                        <TableCell align="right">{format(+modified, 'yyy.MM.dd hh:mm')}</TableCell>
                      </Styled.Row>
                    );
                  })}
                  {!!emptyRows && (
                    <Styled.Row emptyRows={emptyRows}>
                      <TableCell colSpan={6} />
                    </Styled.Row>
                  )}
                </TableBody>
              </Styled.TableComponent>
            </>
          ) : (
            <>
              <Styled.GridComponent itemsPerPage={perPage}>
                <Styled.GridWrapper>
                  {rows.map(({ path, type, modified, bytes, extradata, isFavorite }) => {
                    const isItemSelected = isSelected(path);

                    return (
                      <Styled.Grid
                        item
                        xs={2}
                        key={path}
                        onContextMenu={path ? onContextMenu(path, type) : undefined}
                      >
                        <ExpandedFile
                          extension={Extension.jpg}
                          title={pathToName(path)}
                          folderTitle={format(+modified, 'yyy.MM.dd hh:mm')}
                          name={path}
                          checked={isItemSelected}
                          handleChange={handleClick(path, type)}
                          handleOpen={handleOpen({
                            path,
                            type,
                            bytes,
                            modified,
                            extradata,
                            isFavorite,
                          })}
                          withCheckbox
                        />
                      </Styled.Grid>
                    );
                  })}
                </Styled.GridWrapper>
              </Styled.GridComponent>
            </>
          )}
          <Pagination
            count={Math.ceil(itemsTotal / perPage)}
            onChange={handleChangePage}
            page={page + 1}
            showFirstButton
            showLastButton
          />
        </>
      ) : (
        <Styled.DropzoneWrapper>
          <DropzoneArea
            dropzoneClass="dropzone"
            dropzoneParagraphClass="dropzone-paragraph"
            onChange={handleChange}
            showPreviewsInDropzone={false}
            showAlerts={false}
            dropzoneText=""
            maxFileSize={200000000}
          />
          <Styled.FirstTitle>{t('emptyFolder.title')}</Styled.FirstTitle>
          <Styled.SecondTitle>{t('emptyFolder.description')}</Styled.SecondTitle>
        </Styled.DropzoneWrapper>
      )}
    </TableContainer>
  );
};

export default DocumentsTable;
