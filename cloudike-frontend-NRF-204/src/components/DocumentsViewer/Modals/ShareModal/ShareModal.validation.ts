import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  member: Yup.string().email('Invalid email'),
  select: Yup.string(),
});
