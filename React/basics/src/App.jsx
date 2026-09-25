import './App.css'
import Navbar from './Navbar'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import { Route,Routes } from 'react-router-dom'

function App() {
 

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/About' element={<About />} />
      <Route path='/Contact' element={<Contact />}/>
      

    </Routes>
    </>
  )
}

export default App
