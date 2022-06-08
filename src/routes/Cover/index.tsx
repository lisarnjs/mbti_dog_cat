import { PadLogo } from 'assets'
import { Link, Outlet } from 'react-router-dom'
import { InitMbti } from 'utils/mbtiResults'
import styles from './cover.module.scss'

const Cover = () => {
  InitMbti()
  return (
    <div className={styles.cover}>
      <div className={styles.coverInner}>
        <PadLogo />
        <h1>멍냥MBTI</h1>
        <ul>
          <Link to='catMode'>
            <li>고양이 모드</li>
          </Link>
          <Link to='dogMode'>
            <li>강아지 모드</li>
          </Link>
          <Link to='catMode'>
            <li>mbti 분포 구경하기</li>
          </Link>
        </ul>
      </div>
    </div>
  )
}
export default Cover
