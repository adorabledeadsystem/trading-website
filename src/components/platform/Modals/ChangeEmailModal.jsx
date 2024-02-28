import { Form, Formik } from "formik"
import PlatformButton from "./Elements/PlatformButton"
import PlatformTitle from "./Elements/PlatformTitle"
import PlatformInput from "./Elements/PlatformInput"


const ChangeEmailModal = () => {
    return (
        <>
            <PlatformTitle color="green">Безопасность</PlatformTitle>
            <Formik>
                <Form>
                    <PlatformInput
                        name="email"
                        placeholder="email@email.com"
                        label="Текущий email"
                    />
                    <PlatformInput
                        name="email"
                        placeholder="..."
                        label="Введите новый email"
                    />
                    <PlatformButton color="primary">Отправить код</PlatformButton>
                    <PlatformInput
                        name="email"
                        placeholder="..."
                        label="Введите  код потверждения"
                    />
                    <PlatformButton color="green">Отправить код</PlatformButton>
                </Form>
            </Formik>
        </>
    )
}

export default ChangeEmailModal