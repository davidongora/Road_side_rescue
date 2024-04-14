import React from 'react'

const Footer = () => {
  return (
    <div style={{ backgroundColor: "#0B142F" }} className='=mt-3 mb-3 text-white'>
      <div className="flex">
        <div className="grid">
        <span>Our activities in the oil and petrochemical sector, engineering, 
        construction, and production of lubricants date back to 25 years ago An activity 
        that continues to grow and develop through the design and implementation of various
         projects</span>
         {/* icons */}
<p>icons</p>
</div>
      <div className="flex mb-4">
        <div className="grid">
        <label className='text-2xl'>Enter Your Email</label>
        <span>Our colleagues will contact you soon</span>
        </div>
        <input type="text" size="w-24px "placeholder='enter email '/> 
        <button>Submit</button>
        
        </div>
        <span>Contact Us</span>
        <span>Useful links</span>
        <span>Product Category</span>
        
         {/* icons */}
         <span>Dubai</span>
         <span>Churchill Executive Tower, Business Bay, Dubai, UAE P.O.Box: 28824 Dubai.UAE</span>
         <span>istanbul</span>
         <span>University neighborhood, Civan Alley, No:1, Allure tower, unit:384 Avcilar/Istanbul</span>
         </div>
         <span className='p-24 ml-32'>© 2024 | All Rights Reserved | Powered by Carlio Design Department</span>
         </div>

         
  )
}

export default Footer