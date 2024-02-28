import RatingItem from '../RatingItem/RatingItem';
import styles from './RatingItems.module.scss'
import userIcon from '../../../assert/Platform/userIcon.svg'
import { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth'

const RatingItems = () => {
  const [users, setUsers] = useState(null)
  const [me, setMe] = useState(null)
  const { auth } = useAuth()

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("http://localhost:3000/User")

        if (response.ok) {
          const users = await response.json();

          users.sort((a, b) => {
            return b.DailyIncome - a.DailyIncome
          })

          users.find((user, index) => {
            if (user.id === auth.Uid) {
              setMe({ place: index + 1, profile: user })
            }

            return false
          })

          setUsers(users);
        }

      } catch (error) {

        console.log(error)
      }
    }

    fetchUsers();
  }, [])

  

  return (
    <>
      <div className={styles.Container}>
        <h2>Самые активные пользователи</h2>
        <div>
        
        </div>
        <ul className={styles.RatingContainer}>
        { me && (
            <RatingItem 
              highlighted
              place={me.place}
              icon={userIcon} 
              total={me.profile.DailyIncome} 
              username={me.profile.Username}/>
        )}

        { users && users.map((user, index) => (
          <RatingItem 
            key={index}
            place={index + 1} 
            icon={userIcon} 
            total={user.DailyIncome} 
            username={user.Username}/>
        ))}

        </ul>
      </div>
    </>
  );
};

export default RatingItems;
