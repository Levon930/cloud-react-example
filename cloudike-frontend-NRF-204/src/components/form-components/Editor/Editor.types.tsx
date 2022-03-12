import { RawDraftContentState } from 'react-draft-wysiwyg';

export interface EditorTypes {
  name: string;
  placeholder: string;
  setFieldValue: (values: string, contentState: RawDraftContentState) => void;
}
