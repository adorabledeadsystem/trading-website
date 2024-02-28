import { AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

import Button from "components/general/Button";
import Container from "components/general/Container";
import Icon from 'components/general/Icon'
import Modal from "components/general/Modal";
import Sidebar from "components/general/Sidebar";

import useAuth from 'hooks/useAuth'
import useModal from "hooks/useModal";

import avatar from 'assert/avatar.jpg'
import LoginForm from "components/forms/LoginForm";
import RegistrationForm from "../forms/RegistrationForm";

const Header = () => {
    const loginModal = useModal()
    const sidebar = useModal()
    const { auth, setAuth } = useAuth()

    return (
        <div>
            <Container>
                <div className="flex justify-between py-9">
                    <div className="flex gap-4 items-center">
                        <Icon name="logo" width="52" height="52" />
                        <div className="font-medium text-3xl md:text-4xl">Moaklion</div>
                    </div>
                    <Icon className="cursor-pointer sm:hidden" name="burger" width="24" onClick={sidebar.toggleModal} />
                    { auth.isAuth
                        ? <Icon className="cursor-pointer hidden sm:block" name="burger" width="24" onClick={sidebar.toggleModal} />
                        : <Button onClick={loginModal.showModal} className="hidden sm:block">Войти</Button>
                    }
                    { loginModal.showing &&
                        <Modal hideModal={loginModal.hideModal} className="flex pl-12 pr-24 items-center justify-center max-w-full">
                            <div className="grid items-center h-full  w-full">
                                <Container className="max-w-full">
                                    <div className="text-center grow">
                                        <Icon name="logo" width="135" height="135" />
                                        <div className="font-medium text-base mb-6">Moaklion</div>
                                        <div className="text-2xl font-medium mb-4">LEADERS MARKET</div>
                                    </div>
                                    <LoginForm className="grow w-full" />
                                    <div className="text-center text-gray-500 text-sm mb-8">
                                        <Link className="text-primary-700 mt-5" to="../registration">Регистрация</Link>
                                    </div>
                                </Container>
                            </div>

                        </Modal>
                    }
                </div>
            </Container>
            {/*dfgdfg*/}
            <AnimatePresence>
                {
                    sidebar.showing
                    && <Sidebar toggleModal={sidebar.toggleModal}>
                        {
                            auth.isAuth
                                ? <div className="text-center">
                                    <div className="mb-32">
                                        <img src={avatar} alt="avatar" className="rounded-full h-44 w-44 mb-4" />
                                        <div className="font-bold text-2xl text-dark">Silver Black</div>
                                    </div>
                                    <nav>
                                        <ul className="flex flex-col gap-10">
                                            <Link to = {{pathname: '/platform'}} onClick={sidebar.toggleModal}><Button hierarchy="text">Личный кабинет</Button></Link>
                                            <Link to="/platform" onClick={sidebar.toggleModal}><Button hierarchy="text">Платформа</Button></Link>
                                            <Link to="/" onClick={sidebar.toggleModal}><Button hierarchy="text" onClick={() => setAuth({ isAuth: false })}>Выход</Button></Link>
                                        </ul>
                                    </nav>
                                </div>
                                : <div className="text-center">
                                    <nav>
                                        <ul className="flex flex-col gap-10">
                                            {/* <Link to="login" onClick={sidebar.toggleModal}><Button hierarchy="text" onClick={() => setAuth({ isAuth: true })}>Войти</Button></Link> */}
                                            <Button hierarchy="text" onClick={() => setAuth({ isAuth: true })}>Войти</Button>
                                            <Link to="registration" onClick={sidebar.toggleModal}><Button hierarchy="text">Регистрация</Button></Link>
                                        </ul>
                                    </nav>
                                </div>
                        }
                    </Sidebar>
                }
            </AnimatePresence>
        </div>
    )
}

export default Header