import { FaCartShopping } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { LiaSearchSolid } from "react-icons/lia";
import { useState } from "react";


function Navbar() {

   const navigate = useNavigate()
   
    return (
        <div className="w-full h-auto    items-center  shadow-lg box-border ">
            <div className="flex w-[92%] justify-between items-center mx-auto p-3">
                <div className="logo text-5xl text-[#ffcf98] font-light italic "> <span className="text-black  font-thin">M</span>shopy</div>
                <div className="mt-3 flex  gap-2 w-[50%] mx-auto justify-center">
                    
                    <div className="flex  gap-3 items-center">
                        <div className="p-2 rounded-3xl bg-[#ffcf98] text-white">
                            <span><LiaSearchSolid size={25} /></span>
                        </div>

                        <input type="search" className="w-80 h-8 rounded-xl border-[#ffcf98] px-3 focus:border-[#ffcf98]  border " />


                    </div>
                </div>
                {/* Cart icon */}
                <div onClick={()=>navigate('/shoppingCart')} className="p-1 cursor-pointer  relative">
                  
                    <span>
                        <FaCartShopping size={30} className="text-[#ffcf98]" />
                    </span>
                    {/* Cart Count */}
                    <div className="absolute px-2 -top-4 left-5 bg-[#ffcf98] rounded-full"><span className="text-white">4</span></div>


                </div>
            </div>

        </div>
    )
}

export default Navbar
