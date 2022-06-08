import styles from './results.module.scss'
import { mbti } from 'utils/mbtiResults'
import { useState } from 'react'
import catData from 'assets/data/catData.json'

interface myMbtiProps {
  mbti: string
  similar: {
    cat: string
    about: string
  }
  best: {
    cat: string
    about: string
  }
}
const Results = () => {
  const myMbti: myMbtiProps[] = catData.results.filter((e) => e.mbti === mbti.join(''))

  return (
    <main className={styles.results}>
      <div className={styles.resultsInner}>
        <p>당신의 mbti는</p>
        <h2 className={styles.resultsMbti}>{myMbti[0].mbti}</h2>
        <section>
          <h3>나랑 가장 비슷한 고양이는?</h3>
          <p>{myMbti[0].similar.cat}</p>
          <span>{myMbti[0].similar.about}</span>
        </section>
        <section>
          <h3>나랑 가장 잘 맞는 고양이는?</h3>
          <p>{myMbti[0].best.cat}</p>
          <span>{myMbti[0].best.about}</span>
        </section>
      </div>
    </main>
  )
}
export default Results
