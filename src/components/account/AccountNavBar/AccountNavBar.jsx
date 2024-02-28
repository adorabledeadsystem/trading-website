import { NavLink } from 'react-router-dom';
import cn from 'classnames';

import styles from './AccountNavBar.module.scss';

const AccountNavBar = () => {
    return (
        <div className={styles.Container}>
            <h2 className={styles.Title}>Мой аккаунт</h2>
            <div className={styles.BlockBtn}>
                <NavLink 
                 to='/account/personal'
                 className={({ isActive }) => isActive ? cn(styles.Active, styles.Btn) : styles.Btn}>
                    Личный кабинет
                </NavLink>
                <NavLink 
                 to='/account/verification'
                 className={({ isActive }) => isActive ? cn(styles.Active, styles.Btn) : styles.Btn}>
                    Верификация
                </NavLink>
                <NavLink
                 to='/account/payment' 
                 className={({ isActive }) => isActive ? cn(styles.Active, styles.Btn) : styles.Btn}>
                    Оплата
                </NavLink>
            </div>
        </div>
    )
}

export default AccountNavBar;