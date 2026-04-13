import React from 'react'
import { Routes, Route } from "react-router-dom";
import One from './one';
import Second from './second';
import Navbar from './Navbar';

const App = () => {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<One/>}/>
        <Route path='/one' element={<One/>}/>
        <Route path='/second' element={<Second/>}/>
      </Routes>
    </>
  )
}

export default App;