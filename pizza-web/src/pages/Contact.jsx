import React from 'react'



const Contact = () => {
  return (
    <div>
       <div className="flex justify-center items-center h-[150px] flex-row gap-[160px]">
       <h1 className="  text-[60px] font-bold text-red-200"> NissiPizza </h1><h2 className='text-[14px]'>Lorem ipsum dolor.</h2>

       <div className="contact-info flex flex-col text-[14px]">
        <h2>Phone +234 567 890</h2>
        <h2>Email <span>nissi@gmail.com</span></h2>
        <h2>Address <span>123 Main Street, </span></h2>
       </div>

       <div className="socials-info flex flex-col text-[14px]">
        <h2>Instagram</h2>
        <h2>Facebook</h2>
        <h2>TikTok</h2>
       </div>

       
       </div>
    </div>
  )
}

export default Contact
