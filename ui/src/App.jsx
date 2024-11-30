import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './components/reusable-components/Navbar'
import FooterSection from './components/reusable-components/FooterSection'

function App() {

  return (
    <>
      <Navbar />
      <div className='min-h-svh'>
        <Outlet />
      </div>
      <FooterSection />
    </>
  )
}

export default App
