import React from 'react'
import PlatformTitle from './Elements/PlatformTitle';
import { Formik, Form } from 'formik';
import PlatformInput from './Elements/PlatformInput';
import PlatformButton from './Elements/PlatformButton';


const PayModal = () => {
    const pay =
        {
        "id": "22d6d597-000f-5000-9000-145f6df21d6f",
        "status": "pending",
        "paid": false,
        "amount": {
            "value": "2.00",
            "currency": "RUB"
        },
        "confirmation": {
            "type": "embedded",
            "confirmation_token": "ct-24301ae5-000f-5000-9000-13f5f1c2f8e0"
        },
        "created_at": "2018-07-10T14:25:27.535Z",
        "description": "Заказ №72",
        "metadata": {},
        "recipient": {
            "account_id": "100500",
            "gateway_id": "100700"
        },
        "refundable": false,
        "test": true
    }
  return (
    <>
                <PlatformTitle color="green">Пополнение счета</PlatformTitle>
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
                        <PlatformInput
                            className={'w-1/2'}
                            name="email"
                            placeholder="..."
                            label="Введите код из смс"
                        />
                        <PlatformButton color="green">Подтвердить</PlatformButton>
                    </Form>
                </Formik>
    </>
  )
}
export default PayModal