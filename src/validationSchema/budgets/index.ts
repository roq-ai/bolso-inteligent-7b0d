import * as yup from 'yup';

export const budgetValidationSchema = yup.object().shape({
  goal: yup.number().integer().required(),
  user_id: yup.string().nullable().required(),
});
