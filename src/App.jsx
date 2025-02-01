import React, { Suspense, lazy } from 'react';
import { useState } from 'react';
import './App.css';
import 'animate.css';
import { Navigate, Route, Routes } from 'react-router';
import Header from './components/Header';


const MyCarousel = lazy(() => import('./shared/Slider'));
const ClientWebsite = lazy(() => import('./components/ClientWebsite'));
const SuccessIntegration = lazy(() => import('./components/SuccessIntegration'));
const FailedIntegration = lazy(() => import('./components/FailedIntegration'));


const LoadingSpinner = () => (
  <div className="flex items-center justify-center h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
  </div>
);

function App() {
  
  return (
    <div className='relative'>
      <Routes>
        <Route path='/' element={<Navigate to='/bot' />} />
        
        <Route path='/bot' element={
          <>
            <Header />
            <div className='flex justify-center'>
              <Suspense fallback={<LoadingSpinner />}>
                <MyCarousel />
              </Suspense>
            </div>
          </>
        } />

        <Route 
          path='/client-website' 
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <ClientWebsite />
            </Suspense>
          } 
        />
        
        <Route 
          path='/success-integration' 
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <SuccessIntegration />
            </Suspense>
          } 
        />
        
        <Route 
          path='/failed-integration' 
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <FailedIntegration />
            </Suspense>
          } 
        />
      </Routes>
    </div>
  );
}

export default App;