import { EditorState, RawDraftContentState } from 'react-draft-wysiwyg';

export interface TermsModalProps {
  closeModal: () => void;
}

export interface ComponentTypes {
  isApply?: boolean;
}

export interface FormValuesType {
  useTerms: boolean;
  editor: EditorState;
}

export interface SetFieldValueProps {
  setFieldValue: (values: string, contentState: RawDraftContentState) => void;
}
