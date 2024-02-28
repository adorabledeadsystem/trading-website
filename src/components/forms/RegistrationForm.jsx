import * as yup from 'yup'
import { Link } from 'react-router-dom'
import { Formik, Form } from 'formik'
import { useNavigate } from 'react-router-dom'

import useAuth from 'hooks/useAuth'
import useAuthService from 'hooks/useAuthService'
// import useImagesService from '../../../hooks/useImagesService'

import Input from 'components/forms/atoms/Input'
import PasswordInput from 'components/forms/atoms/PasswordInput'
import Button from 'components/general/Button'
// import IsLoginAvailable from 'components/forms/IsLoginAvailable'
import Checkbox from 'components/forms/atoms/Checkbox'
import Select from 'components/forms/atoms/Select'

const initialValues = {
    email: '',
    password: '',
    currency: '',
    policy: false
}

const validationSchema = yup.object({
    email: yup
        .string()
        .min(3, 'Имя не должно быть меньше 3-х символов')
        .max(20, 'Имя не должно быть больше 20-х символов')
        .required('Введи имя'),
    passworm: yup
        .string()
        .min(3, 'Логин не должен быть меньше 3-х символов')
        .max(30, 'Логин не должнен быть больше 30-х символов')
        .required('Введи логин'),
    currency: yup
        .string()
        .min(3, 'Пароль не должен быть меньше 3-х символов')
        .max(60, 'Пароль не должнен быть больше 60-х символов')
        .required('Введи пароль'),
    policy: yup
        .boolean()
        .oneOf([ true ], 'Примите пользовательское соглашение')
})

const RegistrationForm = () => {
    const { setAuth } = useAuth()
    const { register } = useAuthService()
    // const { getImage } = useImagesService()
    const navigate = useNavigate()

    
    const handleSubmit = async (values, actions) => {    
        const newUser = [
            values.name,
            values.login,
            values.password
        ]
    
        try {
            // const data = await register(...newUser)

            // const accessToken = data.jwt
            // const user = data.users[0]

            // const ava = await getImage(user.thumbnail)

            // setAuth({ user: { ...user, ava }, jwt: accessToken })
            setAuth({ isAuth: true, Uid: 33 })

            actions.resetForm()
            navigate('/', { replace: true })
        } catch (error) {
            console.log(error)
        } finally {
            actions.setSubmitting(false)
        }
    }

    return (
        <Formik 
            initialValues={initialValues}
            validationSchema={validationSchema}
            validateOnBlur={false}
            onSubmit={handleSubmit}
        >
            <Form className="mb-8">
                <Input 
                    className="mb-6" 
                    name="email" 
                    icon="personInput"
                    placeholder="введите почту"
                    autoComplete="given-name"
                />  
                {/* <IsLoginAvailable /> */}
                <PasswordInput 
                    className="mb-6" 
                    name="password" 
                    icon="keyInput"
                    placeholder="введите пароль"
                    autoComplete="new-password"
                />
                <Select
                    className="mb-4"
                    name="currency"
                    icon="currencyInput"
                    placeholder="выберите валюту"
                    options={[ {value: '1', text: 'first'}, {value: '2', text: 'second'}, {value: '3', text: 'third'} ]}
                >
                    <option value=''>выберите валюту</option>
                    <option value='1'>$ доллар</option>
                    <option value='2'>₽ рубль</option>
                    <option value='3'>€ евро</option>
                </Select>
                <Checkbox 
                    className="mb-8"
                    name="policy" 
                    label={
                        <>
                            Принять условия&nbsp;
                            <Link className="text-secondary-2" to="/agreements">
                                соглашения
                            </Link>
                        </>
                    }
                    autoComplete="off"
                />
                <Button className="w-full" type="submit">Зарегистрироваться</Button>
            </Form>
        </Formik>
    )
}

export default RegistrationForm