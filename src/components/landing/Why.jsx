import Container from "components/general/Container"
import Icon from "components/general/Icon"
import Title from "components/general/Title"

import lines from 'assert/lines_8.png'

const Why = () => {
    return (
        <div>
            <Container className="relative">
                <img className="max-h-80 hidden md:block absolute top-36 left-1/2 -translate-x-1/2" src={lines} />
                <div className="py-16">
                    <Title>Почему Oaklion?</Title>
                    <ul className="grid md:grid-cols-2 gap-y-4 gap-x-16 md:gap-y-8">
                        <li className="text-2xl"><Icon className="align-middle mr-4" name="check" width="19" height="19" />Всестороннее обучение</li>
                        <li className="text-2xl"><Icon className="align-middle mr-4" name="check" width="19" height="19" />Торговая комната</li>
                        <li className="text-2xl"><Icon className="align-middle mr-4" name="check" width="19" height="19" />Разнообразные торговые инстурументы</li>
                        <li className="text-2xl"><Icon className="align-middle mr-4" name="check" width="19" height="19" />Удобное пополнение и вывод средств</li>
                        <li className="text-2xl"><Icon className="align-middle mr-4" name="check" width="19" height="19" />Высокая лояльность клиентам</li>
                        <li className="text-2xl"><Icon className="align-middle mr-4" name="check" width="19" height="19" />Индикаторы и сигналы</li>
                        <li className="text-2xl"><Icon className="align-middle mr-4" name="check" width="19" height="19" />Демо-счет</li>
                        <li className="text-2xl"><Icon className="align-middle mr-4" name="check" width="19" height="19" />Выгодный трейдбек</li>
                    </ul>
                </div>
            </Container>
        </div>
    )
}

export default Why