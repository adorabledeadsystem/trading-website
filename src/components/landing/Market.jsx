import Button from "components/general/Button"
import Container from "components/general/Container"
import Icon from "components/general/Icon"
import Modal from "components/general/Modal"

import { Link } from "react-router-dom"

import lines from 'assert/lines_5.png'
import lines_2 from 'assert/lines_6.png'

import useModal from "hooks/useModal"
import Title from "components/general/Title"

const Row = ({ icon, name, price, diff }) => {
    return (
        <>
            <div>
                <Icon name={icon} width="30" height="30" className="align-top mr-4" />
                <span className="md:text-2xl overflow-hidden overflow-ellipsis">{name}</span>
            </div>
            <div className="md:text-2xl overflow-hidden overflow-ellipsis whitespace-nowrap">{price.toLocaleString('ru')} ₽</div>
            <div className="md:text-2xl overflow-hidden overflow-ellipsis whitespace-nowrap">{diff} %</div>
        </>
    )
}

const Market = () => {
    const moreModal = useModal()

    return (
        <div>
            { moreModal.showing && 
                <Modal hideModal={moreModal.hideModal}>
                    <div className="grid grid-cols-3 text-center gap-y-10 mb-40">
                        <div className="text-secondary-2 font-medium text-lg md:text-3xl overflow-hidden overflow-ellipsis">Валюта</div>
                        <div className="text-secondary-2 font-medium text-lg md:text-3xl overflow-hidden overflow-ellipsis">Последняя цена</div>
                        <div className="text-secondary-2 font-medium text-lg md:text-3xl overflow-hidden overflow-ellipsis">Изменение цены за 24 часа</div>
                        <Row icon="bnb" name="BNB" price={18000} diff="+1,15" />
                        <Row icon="bnb" name="BNB" price={18000} diff="+1,15" />
                        <Row icon="bnb" name="BNB" price={18000} diff="+1,15" />
                        <Row icon="bnb" name="BNB" price={18000} diff="+1,15" />
                        <Row icon="bnb" name="BNB" price={18000} diff="+1,15" />
                        <Row icon="bnb" name="BNB" price={18000} diff="+1,15" />
                        <Row icon="bnb" name="BNB" price={18000} diff="+1,15" />
                        <Row icon="bnb" name="BNB" price={18000} diff="+1,15" />
                        <Row icon="bnb" name="BNB" price={18000} diff="+1,15" />
                        <Row icon="bnb" name="BNB" price={18000} diff="+1,15" />
                        <Row icon="bnb" name="BNB" price={18000} diff="+1,15" />
                        <Row icon="bnb" name="BNB" price={18000} diff="+1,15" />
                        <Row icon="bnb" name="BNB" price={18000} diff="+1,15" />
                        <Row icon="bnb" name="BNB" price={18000} diff="+1,15" />
                        <Row icon="bnb" name="BNB" price={18000} diff="+1,15" />
                    </div>
                </Modal>
            }
            <Container className="relative">
                <Title>Рыночные тренды</Title>
                <div className="grid grid-cols-3 text-center gap-y-10 mb-40">
                    <div className="text-secondary-2 font-medium text-lg md:text-3xl overflow-hidden overflow-ellipsis">Валюта</div>
                    <div className="text-secondary-2 font-medium text-lg md:text-3xl overflow-hidden overflow-ellipsis">Последняя цена</div>
                    <div className="text-secondary-2 font-medium text-lg md:text-3xl overflow-hidden overflow-ellipsis">Изменение цены за 24 часа</div>
                    <Row icon="bnb" name="BNB" price={18000} diff="+1,15" />
                    <Row icon="bnb" name="BNB" price={18000} diff="+1,15" />
                    <Row icon="bnb" name="BNB" price={18000} diff="+1,15" />
                    <button onClick={moreModal.showModal} hierarchy="text" className="cursor-pointer">Посмотреть больше</button>
                 </div>
                 <div className="text-center text-dark font-bold text-2xl hidden sm:block mb-16">Зарегистрируйтесь сейчас и бесплатно создайте свой криптопортфель!</div>
                 <div className="text-center">
                    <Link to="registration"><Button className="shadow-[25px_25px_75px_rgba(0,_0,_0,_0.25)]">Зарегистрироваться</Button></Link>
                </div>
                <img className="hidden lg:block absolute -right-52 top-0 w-4/5" src={lines} />
                <img className="hidden lg:block absolute -left-36 top-32 w-full -z-10" src={lines_2} />
            </Container>

        </div>
    )
}

export default Market