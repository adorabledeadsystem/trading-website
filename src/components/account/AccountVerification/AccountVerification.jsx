import Footer from 'components/general/Footer';
import Header from 'components/general//Header';

import AccountNavBar from 'components/account/AccountNavBar/AccountNavBar';
import AccountVerificationBody from 'components/account/AccountVerification/AccountVerificationBody/AccountVerificationBody';

import styles from './AccountVerification.module.scss';

const AccountVerification = () => {
    return (
        <div className={styles.Container}>
            <Header />
            <div className={styles.Body}>
                <AccountNavBar />
                <AccountVerificationBody />
            </div>
            <Footer />
        </div>
    )
}

export default AccountVerification;