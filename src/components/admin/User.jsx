import React, {useState} from 'react'
import classNames from "classnames"

import useModal from "hooks/useModal"
import userIcon from 'assert/Platform/userIcon.svg'
import Icon from "components/general/Icon"
import Button from "components/general/Button"
import Modal from "components/general/Modal"

import docExample from 'assert/doc-example.jpg'
import styles from 'components/admin/User.module.scss';

const User = ({ user }) => {
    const docModal = useModal()
    const editModal = useModal()

    const { id: userId, Username, IsEmailVerified, IsDoc, IsDocVerified, Balance } = user

    console.log(user)

    const verifyDoc = () => {
        fetch(`http://localhost:3000/User/${userId}`, {
            method: 'PUT',
            body: JSON.stringify({
                ...user,
                IsDocVerified: true
            }),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .catch(error => {
            console.log(error)
        })

        user.IsDocVerified = true
    }

    const declineDoc = () => {
        fetch(`http://localhost:3000/User/${userId}`, {
            method: 'PUT',
            body: JSON.stringify({
                ...user,
                IsDocVerified: false,
                IsDoc: false
            }),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .catch(error => {
            console.log(error)
        })

        user.IsDocVerified = false
        user.IsDoc = false
    }
    const saveChanges = () => {
        fetch(`http://localhost:3000/User/${userId}`, {
            method: 'PUT',
            body: JSON.stringify({
                ...user,
                Username: valueUsername,
                Balance: valueBalance,
            }),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .catch(error => {
            console.log(error)
        })

        user.Username = valueUsername
        user.Balance = valueBalance
    }
    const [valueUsername, setValueUsername] = useState(Username)
    const [valueBalance, setValueBalance] = useState(Balance)

    return (
                <li className="flex justify-between">
                    <div className="flex gap-4 items-center">
                        <img width={32} height = {32} src={userIcon} alt="icon" />
                        <span>{Username}</span>
                    </div>
                    <div className="flex gap-2 items-center">
                        <button 
                            className={classNames({ 
                                'text-success-300': IsEmailVerified, 
                                'text-error-300': !IsEmailVerified 
                            })}
                        >
                        <Icon name="email" width="24" height="24" />
                        </button>
                        <button 
                            onClick={docModal.showModal}
                            className={classNames({ 
                                'text-error-500': !IsDoc, 
                                'text-error-300': IsDoc && !IsDocVerified, 
                                'text-success-300': IsDoc && IsDocVerified 
                            }, 'cursor-pointer')}
                            disabled={!IsDoc}
                        >
                            <Icon name="doc" width="24" height="24" />
                        </button>
                        <button
                            onClick={editModal.showModal}
                        
                        >  
                            <Icon name="edit" width="24" height="24" className="cursor-pointer" />
                        </button>
                    </div>
                    { docModal.showing && 
                        <Modal hideModal={docModal.hideModal}>
                            <img src={docExample} alt='document' className="h-56 block" />
                            <Button hierarchy="default" className="mr-6" onClick={() => {
                                verifyDoc()
                                docModal.hideModal()
                            }}>Принять</Button>
                            <Button hierarchy="error-stroke" onClick={() => {
                                declineDoc()
                                docModal.hideModal()
                            }}>Отклонить</Button>
                        </Modal>
                    }
                    
                    { editModal.showing && 
                        <Modal hideModal={editModal.hideModal}>
                            <div className={styles.BlockText}>
                                <div className={styles.Text}>Username</div>
                                <input 
                                type="text"
                                value={valueUsername}
                                onChange={e => setValueUsername(e.target.value)} 
                                />
                            </div>
                            <div className={styles.BlockText}>
                                <div className={styles.Text}>Balance</div>
                                <input 
                                type="text"
                                value={valueBalance} 
                                onChange={e => setValueBalance(e.target.value)} />
                            </div>
                            <Button onClick={()=>{
                                saveChanges()
                                editModal.hideModal()}
                            }>Сохранить изменения</Button>
                        </Modal>
                    }
                </li>
    )
}

export default User