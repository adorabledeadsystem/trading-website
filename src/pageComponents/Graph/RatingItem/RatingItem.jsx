import styles from './RatingItem.module.scss'
import { numberWithComma } from '../../../helpers';

const RatingItem = ({place, total, icon, username, highlighted}) => {

  const DailyIncome = numberWithComma(total.toFixed(2))

  if (highlighted) {
    return (
      <li className={styles.Container}>
        <div className={styles.ContainerHighlighted}>
          <div className={styles.User}>
            <img src={icon} alt="icon" />
            <h4>{username}</h4>
            <h3>${DailyIncome}</h3>
          </div>
          
          <p>Ваше место: {place}</p>
        </div>
      </li>
    )
  } else {
    return (
      <li className={styles.Container}>
        <div className={styles.User}>
          <p>{place}</p>
          <img src={icon} alt="icon" />
          <h4>{username}</h4>
          <h3>${DailyIncome}</h3>
        </div>
      </li>
    );
  }
};

export default RatingItem;
