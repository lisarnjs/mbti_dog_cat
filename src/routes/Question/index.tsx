import data from 'assets/data/question.json'
import React, { useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { MbtiFigure, MbtiResults } from 'utils/mbtiResults'
import styles from './question.module.scss'

const Question = () => {
  const navigate = useNavigate()
  const [count, setCount] = useState(0)
  const { type } = data.questions[count]
  const handleClickChoice = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (e.currentTarget.name) {
      MbtiFigure(type)
    }
    if (count === 11) {
      MbtiResults()
      navigate(`/question/results`)
    } else setCount(count + 1)
  }
  return (
    <div className={styles.question}>
      <h1 className={styles.title}>{data.questions[count].title}</h1>
      <button type='button' name='choiceA' onClick={handleClickChoice} className={styles.choiceBtn}>
        {data.questions[count].choiceA}
      </button>
      <button type='button' onClick={handleClickChoice} className={styles.choiceBtn}>
        {data.questions[count].choiceB}
      </button>
      <Outlet />
    </div>
  )
}
export default Question
