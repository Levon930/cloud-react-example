/* eslint-disable prettier/prettier */
/* eslint-disable no-console */
import React, { ChangeEvent, useEffect, useState } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import { Form, Formik } from 'formik';
import { Button, FormControl, FormGroup, IconButton, Radio } from '@material-ui/core';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

import { useCreateLinkMutation, useDeleteCreatedLinkMutation } from '@api';
import { FormCheckbox, FormWrapper, Input } from '@components';
import { LinkCopySvg } from '@components/SvgComponents';
import { toaster } from '@helpers';
import { useWindowLocation } from '@hooks';
import { documentVar } from '@store';
import { DatePickers, TimePickers } from '..';
import { getTime, initialValues, linkCopyTimeOut } from './constants';
import { PublicShareProps, requestDataType, TypeOfShare, ValuesType } from './PublicShare.types';
import { useValidationSchema } from './PublicShare.validation';
import usePublicShareTranslation from './usePublicShareTranslation';

import { Styled } from '../ShareModalComponents.styled';

const PublicShare: React.FC<PublicShareProps> = ({ setShareType, shareType, folderName }) => {
  const [createLinkMutation] = useCreateLinkMutation();
  const [deleteCreatedLinkMutation] = useDeleteCreatedLinkMutation();

  const {
    createLinkPlaceholder,
    successDelete,
    errorDeleteMessage,
    errorMessage,
    viaLink,
    onlyDownload,
    onlyUpload,
    expirationDate,
    passwordOfLink,
    options,
    limitOfLink,
    deleteButton,
    applyButton,
  } = usePublicShareTranslation();

  const [state, setState] = useState({
    date: false,
    password: false,
    limit: false,
  });
  const { date, password, limit } = state;
  const [copied, setCopied] = useState(false);
  const [selectedDate, setSelectedDate] = React.useState(new Date());
  const [selectedTime, setSelectedTime] = React.useState(getTime());
  const [link, setLink] = useState(createLinkPlaceholder);
  const { domain, hashHandler } = useWindowLocation();

  useEffect(() => {
    if (domain) {
      setLink(domain);
    }
  }, [domain]);

  const validationSchema = useValidationSchema();
  const dateToString = selectedDate.toString().substring(0, 16);
  const limitTime = new Date(selectedDate.toString()).getTime();
  const timesStamp = +(limitTime / 1000 - Date.now() / 1000).toFixed();
  const documentType = documentVar()?.type;

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const deleteLink = async () => {
    try {
      await deleteCreatedLinkMutation({
        variables: { input: { path: `/${folderName}` } },
      });
      setLink(createLinkPlaceholder);
      toaster(successDelete, 'success');
    } catch (e) {
      toaster(errorDeleteMessage, 'error');
    }
  };

  const handleCreateLink = async (values: ValuesType) => {
    
    
    const requestData: requestDataType = {
      ...(documentType !== 'DocumentFile'
        ? { uploadFolder: shareType !== TypeOfShare.download }
        : {}),
      path: `/${folderName}`,
      ...(state.limit && shareType === TypeOfShare.download ? { downloadMax: +values.limit } : {}),
      ...(state.password && shareType === TypeOfShare.download
        ? { password: values.password }
        : {}),
      ...(state.date && shareType === TypeOfShare.download ? { ttl: timesStamp } : {}),
    };
    console.log(requestData);
    try {
      const val = await createLinkMutation({
        variables: { input: requestData },
      });
      const createdLink = val?.data?.createPublicLink?.publicHash;
      if (createdLink) {
        hashHandler(createdLink);
      }
    } catch (e) {
      toaster(errorMessage, 'error');
    }
  };

  const handleRadioChange = (event: ChangeEvent<HTMLInputElement>) => {
    setShareType(event.target.value as TypeOfShare);
  };

  const copyEvent = () => {
    if (!copied) {
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, linkCopyTimeOut);
    }
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleCreateLink}
        validateOnChange
        validateOnBlur
      >
        {() => (
          <Form>
            <FormWrapper>
              <Styled.Title>
                {viaLink} {folderName}
              </Styled.Title>
              <Styled.LinkRow>
                {link}
                <CopyToClipboard text={link} onCopy={copyEvent}>
                  <IconButton>{copied ? <KeyboardArrowDownIcon /> : <LinkCopySvg />}</IconButton>
                </CopyToClipboard>
              </Styled.LinkRow>
              <Styled.Detailes>
                {options}
                {date ? dateToString : null}
                {date ? selectedTime : null}
              </Styled.Detailes>
              <FormControl component="fieldset">
                <Styled.RadioGroup
                  aria-label="share"
                  name="share"
                  value={shareType}
                  onChange={handleRadioChange}
                >
                  <Styled.RadioButton
                    value={TypeOfShare.download}
                    control={<Radio size="medium" />}
                    label={onlyDownload}
                  />
                  {documentType !== 'DocumentFile' ? (
                    <Styled.RadioButton
                      value={TypeOfShare.upload}
                      control={<Radio />}
                      label={onlyUpload}
                    />
                  ) : null}
                </Styled.RadioGroup>
              </FormControl>
              {shareType === TypeOfShare.download ? (
                <FormGroup>
                  <Styled.DateContent>
                    <FormCheckbox
                      color="primary"
                      label={expirationDate}
                      name="date"
                      checked={date}
                      onChange={handleChange}
                    />
                    {date ? (
                      <>
                        <DatePickers
                          setSelectedDate={setSelectedDate}
                          selectedDate={selectedDate}
                        />
                        <TimePickers
                          setSelectedTime={setSelectedTime}
                          selectedTime={selectedTime}
                        />
                      </>
                    ) : null}
                  </Styled.DateContent>

                  <Styled.PasswordRow>
                    <FormCheckbox
                      color="primary"
                      label={passwordOfLink}
                      name="password"
                      checked={password}
                      onChange={handleChange}
                    />
                    {password ? (
                      <Styled.FormRow>
                        <Input name="password" type="password" />
                      </Styled.FormRow>
                    ) : null}
                  </Styled.PasswordRow>
                  <Styled.PasswordRow>
                    <FormCheckbox
                      color="primary"
                      label={limitOfLink}
                      name="limit"
                      checked={limit}
                      onChange={handleChange}
                    />
                    {limit ? (
                      <Styled.FormRow>
                        <Input name="limit" type="number" />
                      </Styled.FormRow>
                    ) : null}
                  </Styled.PasswordRow>
                </FormGroup>
              ) : null}

              <Styled.ApplyButtonRow>
                <Button color="primary" variant="contained" type="button" onClick={deleteLink}>
                  {deleteButton}
                </Button>
                <Button color="primary" variant="contained" type="submit">
                  {applyButton}
                </Button>
              </Styled.ApplyButtonRow>
            </FormWrapper>
          </Form>
        )}
      </Formik>
    </>
  );
};
export default PublicShare;
