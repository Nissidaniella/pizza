import React from 'react'
import { FiMenu } from "react-icons/fi";
// rafc

const Navbar = () => {
  return (
   <nav className="flex justify-between items-center p-2 bg-[#020101] text-black">
     <div>
       <h3 className="text-[25px] font-bold text-[#ff2407]">NissiPizza</h3>
     </div>
   
     <div className="hidden md:flex bg-white rounded-full flex justify-center shadow-md">
       <ul className="flex gap-[20px] space-x-4 text-[14px] px-[18px]">
         <li>
           <a href="#" className="hover:text-red-500">Home</a>
         </li>
         <li>
           <a href="#" className="hover:text-red-500">Menu</a>
         </li>
         <li>
           <a href="#" className="hover:text-red-500">Contact</a>
         </li>
       </ul>
     </div>
   
     <div className=''>
        <FiMenu className='bg-white '/>
     </div>
   </nav>
  )
}

export default Navbar;
