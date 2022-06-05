import data from 'assets/data/question.json'
import React, { useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import styles from './question.module.scss'

const mbtiResults = {
  EI: 0,
  SN: 0,
  TF: 0,
  JP: 0,
}

const Question = () => {
  const navigate = useNavigate()
  const [count, setCount] = useState(0)
  const { type } = data.questions[count]
  const handleClickChoice = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (e.currentTarget.name) {
      switch (type) {
        case 'EI':
          mbtiResults.EI += 1
          break
        case 'SN':
          mbtiResults.SN += 1
          break
        case 'TF':
          mbtiResults.TF += 1
          break
        case 'JP':
          mbtiResults.JP += 1
          break
      }
    }
    if (count === 11) navigate(`/question/results`)
    else setCount(count + 1)
  }
  console.log(mbtiResults)
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
