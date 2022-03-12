import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  login: Yup.string().required(),
});
