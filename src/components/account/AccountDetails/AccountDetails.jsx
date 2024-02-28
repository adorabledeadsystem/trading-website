import cn from 'classnames';

import styles from './AccountDetails.module.scss';

const AccountDetails = () => {
    return (
        <div className={styles.Container}>
            <h2 className={styles.Title}>Личная информация</h2>
            <div className={styles.Block}>
                <div className={styles.BlockText}>
                    <div className={styles.Text}>Имя</div>
                    <input 
                     type="text"
                     placeholder='Введите ваше имя' />
                </div>
                <div className={styles.BlockText}>
                    <div className={styles.Text}>Фамилия</div>
                    <input 
                     type="text"
                     placeholder='Введите вашу фамилию' />
                </div>
                <div className={styles.BlockText}>
                    <div className={styles.Text}>Никнейм</div>
                    <input 
                     type="text"
                     placeholder='Введите ваш пароль' />
                </div>
                <div className={styles.BlockText}>
                    <div className={styles.Text}>Почта</div>
                    <input 
                     type="text"
                     placeholder='Введите вашу почту' />
                </div>
            </div>
            <h2 className={styles.Title}>Смена пароля</h2>
            <div className={styles.Block}>
                <div className={styles.BlockText}>
                    <div className={styles.Text}>Текущий пароль</div>
                    <input 
                     type="password"
                     placeholder='Введите ваш пароль' />
                </div>
                <div className={styles.BlockText}>
                    <div className={styles.Text}>Новый пароль</div>
                    <input 
                     type="password"
                     placeholder='Введите новый пароль' />
                </div>
                <div className={styles.BlockText}>
                    <div className={styles.Text}>Потверждение пароля</div>
                    <input 
                     type="password"
                     placeholder='Введите новый пароль' />
                </div>
                <div className={styles.BlockBtn}>
                    <button className={styles.Btn}>Сохранить изменения</button>
                    <button className={cn(styles.Btn, styles.Purple)}>Очистить поля</button>
                </div>
            </div>
        </div>
        /* dsf*/
    )
}

export default AccountDetails;