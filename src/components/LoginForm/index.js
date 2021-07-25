import React from 'react';
import { Form, Formik, Field } from 'formik';
import Button from 'components/Button';
import InputField from 'components/InputField';
import { initialValues } from './config';
import { validationSchema } from './validation';
import { Container, Title } from './style';

const LoginForm = () => {
  const login = values => {
    console.log(values);
  };

  return (
    <Container>
      <Title>登入</Title>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={login}
      >
        <Form>
          <Field
            name="account"
            label="帳號"
            placeholder="輸入帳號"
            as={InputField}
          />

          <Field
            type="password"
            name="password"
            label="密碼"
            placeholder="輸入密碼"
            as={InputField}
          />

          <Button block type="primary" htmlType="submit">
            登入
          </Button>
        </Form>
      </Formik>
    </Container>
  );
};

export default LoginForm;
