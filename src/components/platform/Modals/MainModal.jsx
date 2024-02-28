import React from 'react'
import { Form, Formik } from "formik"
import * as yup from 'yup'
import PlatformAnchor from "./Elements/PlatformAnchor"

import PlatformInput from "./Elements/PlatformInput"
import PlatformModal from "./ModalTypes/PlatformModal"
import PlatformTitle from "./Elements/PlatformTitle"
import VerificationModal from './VerificationModal';
import ChangeEmailModal from './ChangeEmailModal';
import ChangePasswordModal from './ChangePasswordModal';
import WithdrawalModal from "./WithdrawalModal"
import useModal from './../../../hooks/useModal';
import PlatformModalMini from './ModalTypes/PlatformModalMini';

const MainModal = () => {

    const initialValues = {
        name: '',
        surname: '',
        country: ''
    }
    
    const validationSchema = yup.object({
        login: yup.string().required('Введи логин'),
        password: yup.string().required('Введи пароль')
    })

    const verification = useModal()
    const changeEmail = useModal()
    const changePassword = useModal()
    const withdrawal = useModal()

    return (
        <>
            <div className="flex gap-20 ml-6">
                <div className="flex-1">
                    <PlatformTitle color="green">Профиль</PlatformTitle>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                    >
                        <Form>
                            <PlatformInput
                                name="name"
                                placeholder="..."
                                label="Имя"
                                disabled
                            />
                            <PlatformInput
                                name="surname"
                                placeholder="..."
                                label="Фамилия"
                                disabled
                            />
                            <PlatformInput
                                name="country"
                                placeholder="..."
                                label="Страна"
                                disabled
                            />
                        </Form>
                    </Formik>
                    <PlatformAnchor onClick={verification.showModal} color="primary">Пройти верификацию</PlatformAnchor>
                </div>
                <div className="flex-1">
                    <PlatformTitle color="green">Безопасность</PlatformTitle>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                    >
                        <Form>
                            <PlatformInput
                                name="email"
                                placeholder="email@email.com"
                                label="Email"
                                after={<button onClick={changeEmail.showModal} className="text-grey text-sm cursor-pointer ml-3">Изменить</button>}
                                disabled
                            />
                            <PlatformInput
                                name="password"
                                placeholder="обновлен 5 месяцев назад"
                                label="Пароль"
                                after={<button onClick={changePassword.showModal} className="text-grey text-sm cursor-pointer ml-3">Изменить</button>}
                                disabled
                            />
                        </Form>
                    </Formik>
                    <PlatformTitle color="green">Баланс</PlatformTitle>
                    <button className="text-grey text-sm cursor-pointer mb-4" onClick={withdrawal.showModal}>Вывод средств</button>
                    <PlatformTitle color="green">Выход</PlatformTitle>
                </div>


            </div>
            {   
                verification.showing &&
                <PlatformModal  hideModal={verification.hideModal}>
                    <VerificationModal/>
                </PlatformModal>
            }
            {   
                changeEmail.showing &&
                <PlatformModalMini  hideModal={changeEmail.hideModal}>
                    <ChangeEmailModal/>
                </PlatformModalMini>
            }
            {   
                changePassword.showing &&
                <PlatformModalMini  hideModal={changePassword.hideModal}>
                    <ChangePasswordModal/>
                </PlatformModalMini>
            }
            {   
                withdrawal.showing &&
                <PlatformModalMini  hideModal={withdrawal.hideModal}>
                    <WithdrawalModal/>
                </PlatformModalMini>
            }
            
        </>
    )
}

export default MainModal