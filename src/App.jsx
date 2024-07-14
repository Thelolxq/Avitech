import React from 'react'
import Page from './components/LandingPage/page'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import IniciarSesion from './components/SignIN/IniciarSesion'
import Dahsboard from './components/AdminComponents/DashBoard/Dahsboard'
const App = () => {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Page/>} />
        <Route path='/iniciar' element={<IniciarSesion/>}/>
        <Route path='/dashboard' element={<Dahsboard/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App