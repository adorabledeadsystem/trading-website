
import styles from './AccountVerificationBody.module.scss';

const AccountVerificationBody = () => {
    return (
        <div className={styles.Container}>
            <div className={styles.Block}>
                <h2 className={styles.Title}>Почта</h2>
                <div className={styles.Text}>❌ Не подтверждена</div>
            </div>
            <div className={styles.Block}>
                <h2 className={styles.Title}>Документы</h2>
                <div className={styles.Text}>❌ Не подтверждены</div>
            </div>
            <div className={styles.BlockText}>
                <div className={styles.Text}>
                    Процедура верификации пользователей повышает уровень безопастности вашего счета, и помогает быстрее производить операции на вывод средств.
                </div>
                <div className={styles.Text}>
                    Пожайлуйста, подвтверидите адрес <span>электронной почты</span> для лучшей защещенности профиля.
                </div>
                <div className={styles.Text}>
                    Обязательно загрузите <span>документы</span> для безопастности операций и быстрого вывода средств.
                </div>
            </div>
        </div>
    )
}

export default AccountVerificationBody;