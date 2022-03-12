import React from 'react';
import { ErrorMessage, useField } from 'formik';
import { DropzoneArea } from 'material-ui-dropzone';
import { FormControl, FormHelperText } from '@material-ui/core';

import { DropzoneProps } from './Dropzone.types';

import { Styled } from './Dropzone.styled';

const Dropzone: React.FC<DropzoneProps> = ({ name, setFieldValue }) => {
  // TODO: add regExp rule in eslint to miss _ name of constants
  const [, meta] = useField(name);
  const hasError = !!(meta.touched && meta.error);

  const handleChange = (files: File[]) => {
    setFieldValue('dropzone', files[0]);
  };

  return (
    <FormControl error={hasError}>
      <Styled.DropzoneWrapper>
        <DropzoneArea
          dropzoneClass="dropzone"
          dropzoneParagraphClass="dropzone-paragraph"
          onChange={handleChange}
          filesLimit={1}
          showPreviewsInDropzone
          previewGridClasses={{
            container: 'dropzone-preview-container',
            item: 'dropzone-preview-items',
            image: 'dropzone-preview-image',
          }}
          previewText=""
          showAlerts={false}
          dropzoneText=""
        />
      </Styled.DropzoneWrapper>
      <ErrorMessage
        component={({ children }) => <FormHelperText>{children}</FormHelperText>}
        name={name}
      />
    </FormControl>
  );
};

export default Dropzone;
