import React from 'react'
import PlatformTitle from './Elements/PlatformTitle';
import { Formik, Form } from 'formik';
import PlatformButton from './Elements/PlatformButton';
import Input from './../../forms/atoms/Input';


const SupportModal = () => {
  return (
    <div className="text-center" >
         <PlatformTitle color="green">Поддержка</PlatformTitle>
        <Formik
        >
            <Form>
                <Input 
                    className="mb-16 mt-8 border border-solid border-green text-left" 
                    name="text" 
                    placeholder="Что случилось?"
                    autoComplete="off"
                />
                <PlatformButton className="" color="green" type="submit">Отправить</PlatformButton>
            </Form>
        </Formik>
    </div>
  )
}

export default SupportModal