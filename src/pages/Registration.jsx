import { Link } from 'react-router-dom'

import Container from 'components/general/Container'
import Icon from 'components/general/Icon'

import RegistrationForm from 'components/forms/RegistrationForm'

const Registration = () => {
    return (
        <div className="grid items-center h-full bg-secondary-1">
            <Container className="max-w-md">
                <div className="text-center grow">
                    <Icon name="logo" width="135" height="135" />
                    <div className="font-medium text-base mb-6">Moaklion</div>
                    <div className="text-2xl font-medium mb-4">LEADERS MARKET</div>
                </div>
                <RegistrationForm />
                <div className="text-center text-gray-500 text-sm">
                    Уже есть аккаунт?
                    <Link className="text-primary-700" to="../login"> Войти</Link>
                </div> 
            </Container>
        </div>
    )
}

export default Registration