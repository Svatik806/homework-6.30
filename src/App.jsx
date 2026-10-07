import React from 'react'
import "./App.css"
import QuoteBox from './components/QuoteBox'
import Favorites from './components/Favorites'

const App = () => {
  return (
    <div className='min-h-screen bg-gray-100 flex items-center justify-center p-4'>
      <div className='w-full max-w-xs bg-white p-5 ronded-2xl shadow-sm border'>
        <h1 className='font-bold text-center text-lg text-gray-800 mb-4'>Нотатка дня</h1>
        <QuoteBox />
        <Favorites />
      </div>
      </div>
  )
}

export default App