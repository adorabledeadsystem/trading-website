import { Form, Formik } from "formik"
import * as yup from 'yup'
import {Link, useNavigate} from "react-router-dom"

// import useImagesService from "hooks/useImagesService"
import useAuth from "hooks/useAuth"
import useAuthService from "hooks/useAuthService"

import Input from "components/forms/atoms/Input"
import PasswordInput from "components/forms/atoms/PasswordInput"
import Button from "components/general/Button"
import GeneralError from "components/forms/atoms/GeneralError"

const initialValues = {
    login: '',
    password: ''
}

const validationSchema = yup.object({
    login: yup.string().required('Введи логин'),
    password: yup.string().required('Введи пароль')
})

const LoginForm = ({ className }) => {
    const { setAuth } = useAuth()
    const { login } = useAuthService()
    // const { getImage } = useImagesService()
    const navigate = useNavigate()

    const handleSubmit = async (values, actions) => {
        try {
            // const data = await login(values.login, values.password)

            // const accessToken = data.jwt
            // const user = data.users[0]

            // const ava = await getImage(user.thumbnail)

            // setAuth({ user: { ...user, ava }, jwt: accessToken })
            setAuth({ isAuth: true, Uid: 33 })


            actions.resetForm()
            navigate('/', { replace: true })
        } catch (error) {
            if (error.response.status === 401) {
                actions.setStatus('Неправильный логин или пароль')
            }
        } finally {
            actions.setSubmitting(false)
        }
    }

    return (
        <div className={className}>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                validateOnChange={false}
                onSubmit={handleSubmit}
            >
                <Form className="mb-5">
                    <GeneralError />
                    <Input
                        icon="personInput"
                        name="login"
                        placeholder="Логин"
                        autoComplete="username" />
                    <PasswordInput
                        icon="keyInput"
                        name="password"
                        placeholder="Пароль"
                        autoComplete="current-password"/>
                    <Link to='' className=" text-secondary-2 ">Забыли пароль?</Link>
                    <Button className="w-full mt-5" type="submit">Войти</Button>
                </Form>
            </Formik>
        </div>
    )
}

export default LoginForm