import { animate } from "framer-motion"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

import Container from "components/general/Container"
import Button from "components/general/Button"
import Icon from "components/general/Icon"

import lines from "assert/lines_1.png"
import lines_2 from 'assert/lines_4.png'

const Counter = ({ from, to }) => {
    const [x, setX] = useState(from)

    useEffect(() => {
        const controls = animate(from, to, {
            duration: 3,
            ease: [0.075, 0.820, 0.165, 1.000],
            onUpdate: value => setX(value)
        })

        return () => controls.stop();
    }, [from, to])



    return <>{x.toLocaleString('ru', { maximumFractionDigits: 0 })}</>
}

const Note = ({ iconName, number, note, symbol }) => {
    return (
        <div className="px-5 py-6 flex gap-4 justify-center items-center lg:justify-end">
            <div className="text-right">
                <h4 className="font-bold text-2xl"><Counter from={0} to={number} /> {symbol}</h4>
                <div className="font-medium text-sm">{note}</div>
            </div>
            <Icon name={iconName} width="48" height="48" className="text-dark" />
        </div>
    )
}

const Hero = () => {

    return (
        <div className="relative">
            <img src={lines} className="hidden lg:block w-3/5 max-w-4xl -top-16 absolute right-0 -z-10" />
            <Container className="relative">
                <div className="flex flex-col gap-20 justify-between py-20 lg:flex-row">
                    <div className="lg:text-left text-center">
                        <hgroup>
                            <h1 className="font-bold text-3xl sm:text-4xl md:text-6xl text-dark mb-10">Эффективные инвестиции</h1>
                            <h2 className="font-medium text-2xl sm:text-3xl text-dark mb-10 lg:max-w-lg">
                                Зарегистрируйтесь и получите доступ к самой современной платформе бесплатно. 60 000₽ на демосчете и 100% бонус на первый депозит.
                            </h2>
                        </hgroup>
                        <Link to="registration">
                            <Button className="shadow-[25px_25px_75px_rgba(0,_0,_0,_0.25)]">Бесплатная регистрация</Button>
                        </Link>
                    </div>
                    <ul className="flex flex-col gap-8 lg:pt-48">
                        <li><Note iconName="crowd" number={51289} symbol="+" note="Трейдеров онлайн" /></li>
                        <li><Note iconName="shop" number={1259685} symbol="$" note="Выведено за неделю" /></li>
                        <li><Note iconName="deal" number={657} symbol="сделок"note="Каждый час" /></li>
                    </ul>
                </div>
                <img className="hidden lg:block absolute right-0 bottom-14 w-4/5 -z-10" src={lines_2} />
            </Container>
        </div>
    )
}

export default Hero