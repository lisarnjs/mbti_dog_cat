import { CatImage } from 'assets'
import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom'
import styles from './catMode.module.scss'

const CatMode = () => {
  const navigate = useNavigate()
  return (
    <div className={styles.catMode}>
      <div className={styles.catModeInner}>
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
