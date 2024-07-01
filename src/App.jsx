import React from 'react'
import Page from './components/page'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
const App = () => {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Page/>} />
      </Routes>
    </Router>
    </>
  )
}

export default App