import * as yup from 'yup';

export const parentValidationSchema = yup.object().shape({
  user_id: yup.string().nullable(),
  player_id: yup.string().nullable(),
});
