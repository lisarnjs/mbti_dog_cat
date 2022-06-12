import { CatImage } from 'assets'
import { Link } from 'react-router-dom'
import { InitMbti } from 'utils/mbtiResults'
import styles from './catMode.module.scss'

const CatMode = () => {
  InitMbti()
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
