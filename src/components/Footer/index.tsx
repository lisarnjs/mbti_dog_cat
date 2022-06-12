import { useNavigate } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import { modeState } from 'utils/atoms'
import styles from './footer.module.scss'

const Footer = () => {
  const navigate = useNavigate()
  const mode = useRecoilValue(modeState)
  const currentMode = () => {
    switch (mode) {
      case 'cat':
        return '냥BTI'
      case 'dog':
        return '멍BTI'
      case 'chart':
        return '멍냥MBTI'
    }
    return '냥BTI'
  }

  const handleClickBtn = () => {
    switch (mode) {
      case 'cat':
        navigate('/catMode')
        break
      case 'dog':
        navigate('/dogMode')
        break
      case 'chart':
        navigate('/')
        break
    }
  }

  return (
    <footer className={styles.footer}>
      <button type='button' onClick={() => navigate(-1)}>
        <span className='material-symbols-outlined'>west </span>
      </button>
      <button type='button' onClick={handleClickBtn} className={styles.mainBtn}>
        {currentMode()}
      </button>
      <button type='button' onClick={() => navigate('/')}>
        <span className='material-symbols-outlined'>home </span>
      </button>
    </footer>
  )
}
export default Footer
