import React from 'react'
import PlatformTitle from './Elements/PlatformTitle';
import { Formik, Form } from 'formik';
import PlatformInput from './Elements/PlatformInput';
import PlatformButton from './Elements/PlatformButton';

const WithdrawalModal = () => {
  return (
    <>
                <PlatformTitle color="green">Вывод средств</PlatformTitle>
                <Formik>
                    <Form>
                        <PlatformInput
                            name="email"
                            placeholder="..."
                            label="Выберите карту"
                        />
                        <PlatformInput
                            name="email"
                            placeholder="..."
                            label="Введите сумму"
                        />
                        <PlatformButton color="green">Подтвердить</PlatformButton>
                    </Form>
                </Formik>
      </>
  )
}

export default WithdrawalModal