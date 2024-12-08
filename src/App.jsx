import { useEffect, useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/footer/Footer'
import Nave from './components/navbar/Nave'
import { Route, Routes } from 'react-router-dom';
import Home from './components/page/Home/Home';

function App() {

  const [load, setLoad] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoad(false)
    }, 2000)

    return () => clearTimeout(timer);
  }, []);
  
  return (
    <> 
      <div id={load ? "preloader" : "preloader_none"}></div>
        <Nave />
        <Routes>
          <Route path='/' element={<Home/>} />
        </Routes>
        <Footer />
      
    </>
  )
}

export default App
