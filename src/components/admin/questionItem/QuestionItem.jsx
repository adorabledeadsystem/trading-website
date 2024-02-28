import React, { useState } from 'react';
import styles from '../User.module.scss';

const QuestionItem = ({ title}) => {
  const [isActive, setActive] = useState(false);

  return (
    <li className={styles.questionItem}>
    <div onClick={()=>setActive(!isActive)} className={styles.question}>
      <p>{title}</p>
      <div className={styles.questionPlus}>{isActive ? "-" : "+"}</div>
    </div>
    {isActive && 
      <div className={styles.questionRequestActive}>
        <textarea cols="30" rows="4"></textarea>
        <button>Ответить</button>
      </div>}
  </li>
  );
};

export default QuestionItem;