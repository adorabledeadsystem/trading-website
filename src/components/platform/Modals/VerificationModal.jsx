import PlatformButton from "./Elements/PlatformButton"
import PlatformInput from "./Elements/PlatformInput"
import { Form, Formik } from "formik"
import PlatformTitle from "./Elements/PlatformTitle"

const VerificationModal = () => {
    return (
        <>
            <Formik>
                <Form className="flex gap-36">
                    <div className="flex-1">
                        <PlatformTitle color="primary">Персональные данные</PlatformTitle>
                        <PlatformInput
                            name="name"
                            placeholder="..."
                            label="Введите имя"
                        />
                        <PlatformInput
                            name="name"
                            placeholder="..."
                            label="Введите фамилию"
                        />
                        <PlatformInput
                            name="name"
                            placeholder="..."
                            label="Введите страну проживания"
                        />
                        <div>Сфотографируйтесь c паспортом, чтобы было видно Ваше лицо и прикрепите фотографию</div>
                    </div>

                    <div className="flex-1">
                        <PlatformTitle color="primary">Паспортные данные</PlatformTitle>
                        <PlatformInput
                            name="name"
                            placeholder="..."
                            label="Введите серию паспорта"
                        />
                        <PlatformInput
                            name="name"
                            placeholder="..."
                            label="Введите номер паспорта"
                        />
                        <PlatformInput
                            name="name"
                            placeholder="..."
                            label="Введите информацию о месте выдачи "
                        />
                        <PlatformInput
                            name="name"
                            placeholder="..."
                            label="Введите адрес регистрации"
                        />
                        <PlatformButton color="green">Отправить на проверку</PlatformButton>
                    </div>
                </Form>
            </Formik>
        </>
    )
}

export default VerificationModal