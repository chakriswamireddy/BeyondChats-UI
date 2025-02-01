import React from 'react'
import { useState } from 'react'
import './App.css'
import RegisterPage from './components/RegisterPage'
import 'animate.css';
import Slider from './shared/Slider'
import MyCarousel from './shared/Slider'
import Header from './components/Header'
import { Navigate, Route, Routes } from 'react-router'
import ClientWebsite from './components/ClientWebsite'
import SuccessIntegration from './components/SuccessIntegration'
import FailedIntegration from './components/FailedIntegration'

function App() {
  const [count, setCount] = useState(0)


  return (
    <div className='relative' >



      {/* <RegisterPage /> */}

      <Routes>

        <Route path='/' element={<Navigate to='/bot' />} />

        <Route path='/bot' element={
          <>

            <Header />
            <div className='flex  justify-center' >
              <MyCarousel />
            </div>

          </>
        } />


        <Route path='/client-website' element={<ClientWebsite />} />
        <Route path='/success-integration' element={<SuccessIntegration />} />
        <Route path='/failed-integration' element={<FailedIntegration />} />
      </Routes>



    </div>
  )
}

export default App
