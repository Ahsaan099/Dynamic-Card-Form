import React from 'react'
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import One from './one';
import Second from './second';
import Navbar from './Navbar';

const App = () => {
  const navigate = useNavigate(); 

  return (
    <>
      <Navbar/>
      
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        gap: '20px', 
        marginTop: '20px' 
      }}>
        
        <button 
          onClick={() => navigate('/one')} 
          style={{
            backgroundColor: 'black',
            color: 'white',
            padding: '12px 20px',
            borderRadius: '15px',
            fontSize: '16px',
            fontWeight: 'bold',
            cursor: 'pointer',
            border: 'none',
            boxShadow: '0px 4px 10px rgba(0,0,0,0.3)'
          }}
        >
          Press it for Page One
        </button>

        <button 
          onClick={() => navigate('/second')} 
          style={{
            backgroundColor: 'black',
            color: 'white',
            padding: '12px 20px',
            borderRadius: '15px',
            fontSize: '16px',
            fontWeight: 'bold',
            cursor: 'pointer',
            border: 'none',
            boxShadow: '0px 4px 10px rgba(0,0,0,0.3)'
          }}
        >
          Press it for Page Two
        </button>
      </div>

      <Routes>
        <Route path='/' element={<Navigate to='/one' replace/>}/>
        <Route path='/one' element={<One/>}/>
        <Route path='/second' element={<Second/>}/>
      </Routes>
    </>
  )
}

export default App;