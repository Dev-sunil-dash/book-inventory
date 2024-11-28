import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './components/reusable-components/Navbar'

function App() {

  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}

export default App
