import React from "react";
import image1 from "../images/menu-p4.jpg";


const Menu = () => {
  return (
    <div> 
      <h1 className="text-[#fff] text-center text-[60px] font-bold bg-black"> menu</h1>
      <div className="menu-container bg-[#000000] h-[550px] flex content-center items-center justify-center gap-[50px] mt-[-30px]">

       

        <div className="menu-content cards m-[20px]">
          <div class="inline-flex flex-col items-center px-4 py-4 border-red-200 border-2 transition ease-in-out delay-75 hover:bg-red-200 text-white text-sm font-medium rounded-md hover:-translate-y-1 hover:scale-110 h-[440px] w-[310px] gap-[17px]">
            <span className="bg-[#fff] w-[200px] rounded-full">
               <img src={image1} alt="pizza-img" className="w-full" />
            </span>
            
            <h1 className="text-[#f29487c3] text-center text-[30px] font-bold">Cheesy Good</h1>
            <p className="text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores accusantium illum doloremque, quis, dolorum, voluptatem.</p>

            <button
  class="inline-flex items-center px-4 py-2 bg-red-600 transition ease-in-out delay-75 hover:bg-[#000] text-white text-sm font-medium rounded-md hover:-translate-y-1 hover:scale-110"
>
 

  Order
</button>
          </div>
        </div>

        <div className="menu-content cards m-[20px]">
          <div class="inline-flex flex-col items-center px-4 py-4 border-red-200 border-2 transition ease-in-out delay-75 hover:bg-red-200 text-white text-sm font-medium rounded-md hover:-translate-y-1 hover:scale-110 h-[440px] w-[310px] gap-[17px]">
            <span className="bg-[#fff] w-[200px] rounded-full">
               <img src={image1} alt="pizza-img" className="w-full" />
            </span>
            
            <h1 className="text-[#f29487c3] text-center text-[30px] font-bold">Cheesy Good</h1>
            <p className="text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores accusantium illum doloremque, quis, dolorum, voluptatem.</p>

            <button
  class="inline-flex items-center px-4 py-2 bg-red-600 transition ease-in-out delay-75 hover:bg-[#000] text-white text-sm font-medium rounded-md hover:-translate-y-1 hover:scale-110"
>
 

  Order
</button>
          </div>
        </div>

        <div className="menu-content cards m-[20px]">
          <div class="inline-flex flex-col items-center px-4 py-4 border-red-200 border-2 transition ease-in-out delay-75 hover:bg-red-200 text-white text-sm font-medium rounded-md hover:-translate-y-1 hover:scale-110 h-[440px] w-[310px] gap-[17px]">
            <span className="bg-[#fff] w-[200px] rounded-full">
               <img src={image1} alt="pizza-img" className="w-full" />
            </span>
            
            <h1 className="text-[#f29487c3] text-center text-[30px] font-bold">Cheesy Good</h1>
            <p className="text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores accusantium illum doloremque, quis, dolorum, voluptatem.</p>

            <button
  class="inline-flex items-center px-4 py-2 bg-red-600 transition ease-in-out delay-75 hover:bg-[#000] text-white text-sm font-medium rounded-md hover:-translate-y-1 hover:scale-110"
>
 

  Order
</button>
          </div>
        </div>













      </div>
    </div>
  );
};

export default Menu;
