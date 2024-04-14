import React from 'react'
import object from "../Objectoverview.png"
import Button from '../Containers/Button'
const About = () => {
  return (
    <div className='flex mb-24'>
        <img src={object} alt=""  className=''/>
        <div className="grid">
            <span>About us </span>
            <span className='text-3xl font-bold'>Our company Overview</span>
        <span>Carlio brand is one of the most reliable motor oil manufacturers, 
            which is engaged in the production of high quality products with a
             history of more than decades in the industry. In order to get more 
             information about other aspects and products of the Carlio brand, 
             you can use the following buttons:</span>
            <div className="flex gap-8 mb-8">
             < Button description="Company" />
             < Button description="products" />
             < Button description="our Team" />
             </div> 
             <hr />
             <span>The meaning of production in Carlio is the creation, development,
                 and the path to progress, and the starting point to achieve the goals that we 
                 all have the Petroforce brand, with over 20 years of experience in the oil and
                 petrochemical industry, we officially started our activities in the field of design, 
                 engineering, construction of refinery equipment, 
                and the production of various motor and industrial lubricants in the year 1390 (2011)</span>
                < Button description="Learn More" />
                </div>
    </div>
  )
}

export default About