import React, { FC } from 'react';
import { Editor as MyEditor, RawDraftContentState } from 'react-draft-wysiwyg';
import { Trans } from 'react-i18next';
import { ErrorMessage, useField } from 'formik';
import { FormControl, FormHelperText } from '@material-ui/core';

import { Styled } from '@components/form-components';
import { toolbar } from './Editor.constants';
import { EditorTypes } from './Editor.types';

import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const Editor: FC<EditorTypes> = ({ name, setFieldValue, placeholder }) => {
  const [, meta] = useField(name);
  const hasError = !!(meta.touched && meta.error);

  const onEditorStateChange = (contentState: RawDraftContentState) => {
    setFieldValue('editor', contentState);
  };

  return (
    <FormControl error={hasError}>
      <MyEditor toolbar={toolbar} onChange={onEditorStateChange} placeholder={placeholder} />
      <Styled.ErrorWrapper>
        <ErrorMessage
          component={({ children }) => (
            <FormHelperText>
              <Trans>{children}</Trans>
            </FormHelperText>
          )}
          name={name}
        />
      </Styled.ErrorWrapper>
    </FormControl>
  );
};

export default Editor;
