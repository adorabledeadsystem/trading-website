
import { useState } from 'react';
import cn from 'classnames';

import AccountPaymentMake from '../AccountPaymentMake/AccountPaymentMake';
import AccountPaymentTake from '../AccountPaymentTake/AccountPaymentTake';
import AccountPaymentTransactions from '../AccountPaymentTransactions/AccountPaymentTransactions';

import styles from './AccountPaymentBody.module.scss';

const AccountPaymentBody = () => {
    const [active, setActive] = useState('make')

    
    const activeMakeHanlder = () => {
        setActive('make')
    }

    const activeTakeHanlder = () => {
        setActive('take')
    }

    const activeTransactionsHanlder = () => {
        setActive('transactions')
    }
    
    return (
        <div className={styles.Container}>
            <div className={styles.Block}>
                <button 
                 onClick={activeMakeHanlder}
                 className={cn(styles.Btn, {
                    [styles.Active]: active === 'make'
                 })}>
                    Пополнить счет
                </button>
                <button 
                 onClick={activeTakeHanlder}
                 className={cn(styles.Btn, {
                    [styles.Active]: active === 'take'
                 })}>
                    Вывести средства
                </button>
                <button
                 onClick={activeTransactionsHanlder} 
                 className={cn(styles.Btn, {
                    [styles.Active]: active === 'transactions'
                 })}>
                    Транзакции
                </button>
                {active === 'make' && <AccountPaymentMake/>}
                {active === 'take' && <AccountPaymentTake/>}
                {active === 'transactions' && <AccountPaymentTransactions/>}
            </div>
            <div className={styles.BlockText}>
                <div className={styles.Text}>
                    Бонус - это дополнительные средства, которые мы предоставляем для увеличения торгового потенциала.
                </div>
                <div className={styles.Text}>
                    При пополнении баланса, на ваш счет может быть зачислена сумма бонуса, которая зависит от величины вашего депозита.
                </div>
                <div className={styles.Text}>
                    Бонус не ограничивает вывод средств - вы в любой момент можете выводить прибыль, а также сумму вышего депозита. Пожайлуйста учтите, что при выводе средств все бонусные деньги, которые не были использованы в торговле с оборотом x40, получают статус неактивных и списываются со счета.
                </div>
            </div>
        </div>
    )
}

export default AccountPaymentBody;