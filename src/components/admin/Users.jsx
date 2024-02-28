import { useEffect, useState } from "react"

import User from 'components/admin/User'
import useModal from "hooks/useModal"
import Modal from "components/general/Modal"
import QuestionItem from "components/admin/questionItem/QuestionItem";

import styles from 'components/admin/User.module.scss';
  
const Users = () => {
    const [users, setUsers] = useState(null)


    useEffect(() => {
        const fetchUsers = async () => {
          try {
            const response = await fetch("http://localhost:3000/User")
    
            if (response.ok) {
              const users = await response.json();
    
              users.sort((a, b) => {
                let _a, _b

                if (a.IsDoc && !a.IsDocVerified && a.IsEmailVerified) _a = 2
                else if (a.IsDoc && !a.IsDocVerified) _a = 1
                else _a = 0

                if (b.IsDoc && !b.IsDocVerified && b.IsEmailVerified) _b = 2
                else if (b.IsDoc && !b.IsDocVerified) _b = 1
                else _b = 0

                return _b - _a
              })
    
              setUsers(users);
            }
    
          } catch (error) {
    
            console.log(error)
          }
        }
    
        fetchUsers();
      }, [])

      const supportModal = useModal()

      const quest = [
      {title: 'Section 2',},
      {title: 'Section 3',},
      {title: 'Section 1',},
      ]
      const [searchValue, setValue] = useState('');
    
    return (
      <div>
        <div className={styles.adminHeader}>
          <p className={styles.headerTitle}>Админ-панель</p>
          <div className={styles.searchFlex}>
            
            <p>Поиск</p>
            <input type="text" placeholder="имя пользователя" onChange={(event)=> setValue(event.target.value)} />
          </div>
          <button className={styles.headerButton} onClick={supportModal.showModal}>Тех.поддержка</button>
        </div>
          <ul className="flex flex-col gap-2">
          {console.log(users)}
              { 
                  users && users.filter(user => user.Username.toLowerCase().includes(searchValue.toLowerCase())).map((user, index) => 
                  <User 
                      key={index}
                      user={user}
                  />) 
              }
          </ul>
          { supportModal.showing && 
                        <Modal hideModal={supportModal.hideModal}>
                            <div>
                              <h3 className={styles.questionTitle}>Запросы в тех.поддержку</h3>
                              <ul className={styles.questionList}>
                                {quest.map(({title}, index) =>
                                  <QuestionItem key={index} title={title} />
                                )}
                              </ul>
                            </div>
                        </Modal>
                    }
      </div>
    )
}

export default Users
