import { useState } from 'react'

import './App.css'
import Header from './components/Header'
import { Outlet, useLocation } from 'react-router-dom'
import JobDetailsHeader from './components/JobDetailsHeader';

function App() {
 const loc = useLocation();
//  console.log(loc);
  return (
    <div className="App">
      {
        loc.pathname === '/' ? <Header></Header> : <JobDetailsHeader></JobDetailsHeader>
      }
      <Outlet></Outlet>
    </div>
  )
}

export default App
