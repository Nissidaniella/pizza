import React from 'react'
import { FiMenu } from "react-icons/fi";
// rafc

const Navbar = () => {
  return (
   <nav className="flex justify-between items-center p-2 bg-[#F0F0F0] text-black">
     <div>
       <h3 className="text-[25px] font-bold">NissiPizza</h3>
     </div>
   
     <div className="hidden md:flex bg-white rounded-full flex justify-center shadow-md">
       <ul className="flex gap-[20px] space-x-4 text-[14px] px-[18px]">
         <li>
           <a href="#" className="hover:text-red-500">Home</a>
         </li>
         <li>
           <a href="#" className="hover:text-red-500">About</a>
         </li>
         <li>
           <a href="#" className="hover:text-red-500">Contact</a>
         </li>
       </ul>
     </div>
   
     <div className=''>
        <FiMenu />
     </div>
   </nav>
  )
}

export default Navbar;
