import React from 'react'
import Navbar from './Navbar'
import Button from '../Containers/Button'

const Home = () => {
  return (
    <div className=''>
        {/* <div style={{ backgroundImage: `url(${bcg})`, height:'679px'}} className=' bg-cover '></div> */}
        < Navbar /> 
        <div style={{ width: '6px', height: '88px', borderLeft: '8px solid cyan', borderRight: '2px solid cyan' }}></div>
        <div className="grid ml-4 text-teal-400 text-3xl mb-6 -mt-24"> 
            <span>What is Carlio and</span>
            <p>how valid is it?</p>
        </div>
        <span>The meaning of production in Carlio is the creation, development,
             and the path to progress, and the starting point to achieve the goals
              that we all have the Petroforce brand,
             with over 20 years of experience in the oil and petrochemical industry.</span>
            <div className="flex gap-8">
             < Button description="Buy products" />
             < Button description={"Contact us"} />
            </div> 
    </div>
    
  )
}

export default Home