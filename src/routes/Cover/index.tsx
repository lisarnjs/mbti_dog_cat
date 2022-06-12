import { PadLogo } from 'assets'
import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import { modeState } from 'utils/atoms'
import { InitMbti } from 'utils/mbtiResults'
import styles from './cover.module.scss'

const Cover = () => {
  InitMbti()
  const [mode, setMode] = useRecoilState(modeState)
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    setMode(e.currentTarget.id)
  }

  return (
    <div className={styles.cover}>
      <div className={styles.coverInner}>
        <PadLogo />
        <h1>멍냥MBTI</h1>
        <ul>
          <Link to='catMode' id='cat' onClick={handleClick}>
            <li>고양이 모드</li>
          </Link>
          <Link to='dogMode' id='dog' onClick={handleClick}>
            <li>강아지 모드</li>
          </Link>
          <Link to='chart' id='chart' onClick={handleClick}>
            <li>mbti 분포 구경하기</li>
          </Link>
        </ul>
      </div>
    </div>
  )
}
export default Cover
