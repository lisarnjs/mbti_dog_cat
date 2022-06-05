import Footer from 'components/Footer'
import { Outlet } from 'react-router-dom'
import styles from './layout.module.scss'

const Layout = () => {
  return (
    <div className={styles.layout}>
      <main className={styles.layoutMain}>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
export default Layout
