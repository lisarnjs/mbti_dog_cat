import { Route, Routes } from 'react-router-dom'
import CatMode from './CatMode'
import Question from './Question'
import Cover from './Cover'
import DogMode from './DogMode'
import styles from './routes.module.scss'
import Layout from './_shared/Layout'
import Results from './Results'

const App = () => {
  return (
    <div className={styles.app}>
      <Routes>
        <Route path='/' element={<Cover />} />
        <Route element={<Layout />}>
          <Route path='catMode' element={<CatMode />} />
          <Route path='dogMode' element={<DogMode />} />
          <Route path='question' element={<Question />}>
            <Route path='results' element={<Results />} />
          </Route>
        </Route>
      </Routes>
    </div>
  )
}
export default App
