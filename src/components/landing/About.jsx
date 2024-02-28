import classNames from "classnames"

import Container from "components/general/Container"
import Icon from "components/general/Icon"

import lines from "assert/lines_2.png"

const AboutCard = ({ className, title, text, icon, point, style="light"}) => {

    const cardClasses = classNames(`bg-gradient-to-b from-[rgba(188,_124,_27,_0)] to-[rgba(188,_124,_27,_0.3)] 
    p-9 flex flex-col gap-5 w-80 h-[415px] rounded-3xl items-center shadow-[25px_25px_75px_rgba(0,_0,_0,_0.25)] text-center`)

    const dividerClasses = classNames('w-11', 'border-t', 'border-solid', {
        'border-dark': style === 'light',
        'border-light': style !== 'light'
    })

    const titleClasses = classNames('font-bold', 'text-base', { 
        'text-dark': style === 'light',
        'text-light': style !== 'light'
    })

    const textClasses = classNames('font-bold', 'text-sm', { 
        'text-grey': style === 'light',
        'text-light': style !== 'light'
    })

    return (
        <div className={className}>
            <div className="text-5xl font-medium text-secondary-2 mb-4">{point}</div>
            <div className={cardClasses}>
                <Icon name={icon} height="57" width="64" />
                <h4 className={titleClasses}>{title}</h4>
                <p className={textClasses}>{text}</p>
            </div>
        </div>
    )
}

const About = () => {
    return (
        <div className="relative">
            <img src={lines} className="hidden lg:block absolute left-0 -bottom-44 w-1/3 -z-10" />
            <Container>
                <div className="pb-16 xl:pb-16">
                    {/* <Title>Почему Oaklion</Title> */}
                    <ul className="flex flex-col xl:grid xl:grid-cols-3 gap-y-16 gap-x-20 items-center justify-center">
                        <li><AboutCard title="Удобный интерфейс, доступ с любого устройства." text="Простой и понятный интерфейс с удобными настройками. Торгуйте всегда и везде, используя любое устройство. Приложение для Apple Store и Google Play находится в разработке." icon="monitor" point="01"/></li>
                        <li><AboutCard className="xl:mt-48" title="Аналитика, трейдбек, обучение и многое другое." text="Профессиональная помощь опытных трейдеров в торговой комнате. Торгуйте и следите за своей позицией в рейтинге среди трейдеров со всего мира. Закрывайте сделку в любой момент времени. Компенсируем убытки за сделки." icon="plot" point="02"/></li>
                        <li><AboutCard className="xl:mt-96" title="Удобное пополнение и вывод средств без комиссии, служба поддержки работает 24/7. " text="Пополняйте счёт множеством способов, выводите прибыль за короткий срок. Получайте оперативную и круглосуточную поддержку. За совершение сделок комиссия не взымается." icon="operator" point="03"/></li>
                    </ul>
                </div>
            </Container>
        </div>
    )
}

export default About