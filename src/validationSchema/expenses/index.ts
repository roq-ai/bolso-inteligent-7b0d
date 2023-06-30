import * as yup from 'yup';

export const expenseValidationSchema = yup.object().shape({
  amount: yup.number().integer().required(),
  user_id: yup.string().nullable().required(),
});
