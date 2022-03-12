import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  memberName: Yup.string(),
  transferFiles: Yup.boolean(),
});
