import { CatImage } from 'assets'
import { Link } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import { modeState } from 'utils/atoms'
import { InitMbti } from 'utils/mbtiResults'
import styles from './catMode.module.scss'

const CatMode = () => {
  InitMbti()
  const mode = useRecoilValue(modeState)
  return (
    <div className={styles.catMode}>
      <div>
        <header>
          <CatImage />
          <h1>냥BTI</h1>
        </header>
        <Link to='/question'>
          <button type='button' className={styles.startBtn}>
            TEST START
          </button>
        </Link>
      </div>
    </div>
  )
}
export default CatMode
