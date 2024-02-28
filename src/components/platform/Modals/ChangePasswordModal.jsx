import { Form, Formik } from "formik"
import PlatformButton from "./Elements/PlatformButton"
import PlatformTitle from "./Elements/PlatformTitle"
import PlatformInput from "./Elements/PlatformInput"


const ChangePasswordModal = () => {
    return (
        <>
            <PlatformTitle color="green">Безопасность</PlatformTitle>
            <Formik>
                <Form>
                    <PlatformInput
                        name="email"
                        placeholder="..."
                        label="Введите текущий пароль"
                    />
                    <PlatformInput
                        name="email"
                        placeholder="..."
                        label="Введите новый пароль"
                    />
                    <PlatformInput
                        name="email"
                        placeholder="..."
                        label="Повторите новый пароль"
                    />
                    <PlatformButton color="green">Подтвердить</PlatformButton>
                </Form>
            </Formik>
        </>
    )
}

export default ChangePasswordModal