import { Outlet } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import { modeState } from 'utils/atoms'

const DogMode = () => {
  const mode = useRecoilValue(modeState)
  console.log(mode)
  return (
    <div>
      <h1>오픈 준비중..</h1>
    </div>
  )
}
export default DogMode
