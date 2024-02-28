import Footer from 'components/general/Footer';
import Header from 'components/general/Header';

import AccountNavBar from 'components/account/AccountNavBar/AccountNavBar';
import AccountPaymentBody from 'components/account/AccountPayment/AccountPaymentBody/AccountPaymentBody';

import styles from './AccountPayment.module.scss';

const AccountPayment = () => {
    return (
        <div className={styles.Container}>
            <Header />
            <div className={styles.Body}>
                <AccountNavBar />
                <AccountPaymentBody />
            </div>
            <Footer />
        </div>
    )
}

export default AccountPayment;