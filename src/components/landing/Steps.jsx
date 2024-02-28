import Container from "components/general/Container"
import Title from "components/general/Title"

import lines from 'assert/lines_7.png'

const Steps = () => {
    return (
        <div>
            <Container className="relative">
                <img className="hidden lg:block absolute top-[11rem] right-[40rem] w-full" src={lines} />
                <img className="hidden lg:block absolute top-[7rem] left-[40rem] w-full" src={lines} />
                <div className="py-16">
                    <Title>8 простых шагов к вашему<br/>финансовому успеху</Title>
                    <ol className="text-xl list-decimal list-inside text-dark sm:text-3xl">
                        <li className="mb-4">Откройте торговый счёт за пару минут.</li>
                        <li className="mb-4">Сделайте вашу учетную запись персонализированной.</li>
                        <li className="mb-4">Пополните баланс вашего торгового счёта наиболее удобным способом.</li>
                        <li className="mb-4">Выберите интересующий актив.</li>
                        <li className="mb-4">Установите сумму сделки и время ее закрытия.</li>
                        <li className="mb-4">Делаете прогноз по графику на заданное время.</li>
                        <li className="mb-4">Получайте результат транзакции.</li>
                        <li>Размещайте запрос на снятие средств.</li>
                    </ol>
                </div>
            </Container>
        </div>
    )
}

export default Steps