import * as yup from 'yup';

export const incomeValidationSchema = yup.object().shape({
  amount: yup.number().integer().required(),
  user_id: yup.string().nullable().required(),
});
