import * as yup from 'yup';

export const validationSchema = yup.object().shape({
  account: yup.string().required('請輸入帳號'),
  password: yup.string().required('請輸入密碼'),
});
