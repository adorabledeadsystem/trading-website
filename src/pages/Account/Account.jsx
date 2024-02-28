import AccountDetails from 'components/account/AccountDetails/AccountDetails';
import AccountNavBar from 'components/account/AccountNavBar/AccountNavBar';
import Footer from 'components/general/Footer';
import Header from 'components/general/Header';

import styles from './Account.module.scss';

const Account = () => {
    return (
        <div className={styles.Container}>
            <Header />
            <div className={styles.Body}>
                <AccountNavBar />
                <AccountDetails />
            </div>
            <Footer />
        </div>
    )
}

export default Account;