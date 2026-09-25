import './App.css'
import Home from './Home'
import Navbar from './Navbar'
import Basics from './Basics'
import Concepts from './Concepts'
import LearningPath from './LearningPath'
import { Route,Routes } from "react-router-dom";

function App() {


  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/Basics' element={<Basics/>} />
        <Route path='/Concepts' element={<Concepts />} />
        <Route path='/LearningPath' element={<LearningPath />} />
      </Routes>
    </>
  )
}

export default App
