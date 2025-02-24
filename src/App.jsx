import React from 'react'
import Hero from './components/Main'
import Aside from './components/Aside'

const App = () => {
  return (
    <div className='flex'>
      <div className='lg:block hidden'>
        <Aside />
      </div>
      <div>
        <Hero />
      </div>

    </div>
  )
}

export default App;


