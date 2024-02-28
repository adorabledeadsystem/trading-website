import Container from "components/general/Container"
import Icon from "components/general/Icon"
import  "modalRegistr.css"
import { Link } from "react-router-dom"
import {useState} from "react";
import Modall from "../platform/Modals/ModalTypes/Modall";

const Footer = () => {
    const [modalActive, setModalActive] = useState(false)
    return (
        <div className="bg-secondary-1">
            <Container>
                <div className="grid grid-cols-1 gap-y-8 sm:grid-cols-2 lg:grid-cols-4 lg:place-items-center py-20">
                    <div className="flex flex-col gap-6">
                        <h3 className="font-bold text-2xl text-dark">Get In Touch</h3>
                        <div className="font-medium text-sm text-grey">the quick fox jumps over the lazy dog</div>
                        <ul className="flex gap-5">
                            <li><Icon name="facebook" width="24" height="24" /></li>
                            <li><Icon name="instagram" width="24" height="24" /></li>
                            <li><Icon name="twitter" width="24" height="24" /></li>
                            <li><Icon name="youtube" width="24" height="24" /></li>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-5">
                        <h3 className="font-bold text-2xl text-dark">Company info</h3>
                        <ul className="flex flex-col gap-3">
                            <li className="font-medium text-sm text-grey"><Link to="/">About Us</Link></li>
                            <li className="font-medium text-sm text-grey"><Link to="/">Carrier</Link></li>
                            <li className="font-medium text-sm text-grey"><Link to="/">We are hiring</Link></li>
                            <li className="font-medium text-sm text-grey"><Link to="/">Blog</Link></li>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-5">
                        <h3 className="font-bold text-2xl text-dark">Features</h3>
                        <ul className="flex flex-col gap-3">
                            <li className="font-medium text-sm text-grey"><Link to="/">Business Marketing</Link></li>
                            <li className="font-medium text-sm text-grey"><Link to="/">User Analytic</Link></li>
                            <li className="font-medium text-sm text-grey"><Link to="/">Live Chat</Link></li>
                            <li className="font-medium text-sm text-grey"><Link to="/">Unlimited Support</Link></li>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-5">
                        <h3 className="font-bold text-2xl text-dark">Resources</h3>
                        <ul className="flex flex-col gap-3">
                            <li className="font-medium text-sm text-grey"><Link to="/">IOS & Android</Link></li>
                            <li className="font-medium text-sm text-grey"><Link to="/">Watch a Demo</Link></li>
                            <li className="font-medium text-sm text-grey"><Link to="/" onClick={()=>setModalActive(true)}>Customers</Link></li>
                            <li className="font-medium text-sm text-grey"><Link to="/admin">API</Link></li>
                        </ul>
                    </div>
                </div>
            </Container>
            <div className="bg-primary py-6">
                <div className="font-medium text-sm text-center text-black">© RDX Labs<br />All Right Reserved</div>
            </div>
            <Modall active={modalActive} setActive={setModalActive}>
                <button className="btn-close" onClick={() => setModalActive(false)}>X</button>
                <h1 className="h1"><strong><b>Успешная регистрация</b></strong></h1>
                <p className="p1">Для завершения регистрации необходимо нажать ссылку в письме:</p>
                <p><b>dhsdhdah4e3377@mail.ru</b></p>
                <img className="img1" src="check-circled.svg" alt=""/>
                <p className="p1">Если у вас возникли вопросы,пожалуйста,свяжитесь со службой </p>
                <p className="p1">поддержки Binarium</p>
                <p className="p2">+7(499) 7033581</p>
            </Modall>
        </div>
    )
}

export default Footer