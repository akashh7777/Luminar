import './App.css'
import Home from './Home'
import Navbar from './Navbar'
import About from './About'
import Careeer from './Career'
import Contact from './Contact'
import Testimonial from './Testimonial'
import { Route,Routes } from 'react-router-dom'

function App() {
  

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/About' element={<About/>} />
        <Route path='/Career' element={<Careeer/>} />
        <Route path='/Contact' element={<Contact/>} />
        <Route path='/Testimonial' element={<Testimonial/>} />
      </Routes>
    </>
  )
}

export default App
