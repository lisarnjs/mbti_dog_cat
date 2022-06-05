import { Navigate, useNavigate } from 'react-router-dom'
import styles from './footer.module.scss'

const Footer = () => {
  const navigate = useNavigate()
  return (
    <footer className={styles.footer}>
      <button type='button' onClick={() => navigate(-1)}>
        <span className='material-symbols-outlined'>west </span>
      </button>
      <button type='button' onClick={() => navigate('/catMode')} className={styles.mainBtn}>
        냥BTI
      </button>
      <button type='button' onClick={() => navigate('/')}>
        <span className='material-symbols-outlined'>home </span>
      </button>
    </footer>
  )
}
export default Footer
