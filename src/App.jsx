import { Outlet } from 'react-router'

import './styles/app.css'
function App() {

  return (
    <>
    <div className='container'>
      <Outlet/>
    </div>
    </>
  )
}

export default App
