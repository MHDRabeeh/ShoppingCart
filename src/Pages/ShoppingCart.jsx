import React from 'react'
import Navbar from '../Components/Navbar'
import { MdOutlineKeyboardArrowLeft } from 'react-icons/md'
import { BsBag } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import { AiFillFileText } from 'react-icons/ai'
import imgOne from '../assets/910285-11243256.avif'
import { LiaDollarSignSolid } from 'react-icons/lia'
import { AiOutlineDelete } from 'react-icons/ai'

const ShoppingCart = () => {
    const navigate = useNavigate()
    return (
        <div>
            <Navbar />
            <div className='flex'>

                {/* myShoppingBag */}

                <div className='w-[62%] min-h-[35rem] shadow-xl flex justify-end'>
                    <div className='w-[93%] h-[100%] flex flex-col justify-start overflow-y-auto scrollbar-hide'>
                        <div onClick={() => navigate('/')} className='mt-7  flex gap-1 cursor-pointer items-center'>
                            <span><MdOutlineKeyboardArrowLeft size={20} className='' /></span>
                            <span className='text-sm font-medium'>Homepage</span>
                        </div>
                        <div className='flex items-center'>
                            <p className='flex text-xl font-semibold gap-1 justify-center items-center mt-8'><span className=''><BsBag size={25} /></span> MY SHOPPING BAG (<span>4</span>)</p>
                        </div>
                        <hr className='mt-5 w-[90%] ' />
                        <div className='p-2 text-sm font-semibold w-[97%] bg-[#ffcf98]'>
                            <p>STANDARD DELIVERY</p>
                        </div>

                        {/* cart item */}

                        <div className='mt-3 flex  gap-3 justify-between w-[95%] '>
                            <div className='flex gap-2'>
                                <div><img className='h-24' src={imgOne} alt="" /></div>
                                <div className='flex flex-col items-center ml-5 gap-3 '>
                                    <div className=''><p className='text-sm font-semibold'>Allen Solly</p></div>
                                    <div className='flex  items-center justify-center gap-3'>
                                        <div className='px-2 bg-[#ffcf98] rounded-lg '> <span className='text-xl text-white'>-</span></div><div><span>4</span></div><div className='px-2 bg-[#ffcf98] rounded-lg'> <span className='text-xl text-white'>+</span></div>
                                    </div>
                                </div>
                            </div>

                            <div className='flex gap-1 items-center'>
                                <span><LiaDollarSignSolid /></span><span>45.9</span>
                            </div>
                            <div className='flex items-center'> <span><AiOutlineDelete size={25} /></span></div>
                        </div>




                    </div>
                </div>
                   
                   {/* ORDER SUMMERY */}

                <div className='h-[65vh] w-[50vw] flex flex-col items-center justify-center gap-4'>
                    <div className='w-[70%]  flex items-center gap-2 justify-start'><span><AiFillFileText size={20} /></span> <p className='text-xl font-black'>ORDER SUMMERY</p></div>
                    <div className='w-[70%] h-[60%]  rounded-lg shadow-lg grid grid-cols-1'>
                        <div className='border-b p-3 flex flex-col justify-center w-[95%] '>
                            
                            <div className='flex justify-between'>
                                <p className='font-bold'>Bag Total</p>
                                <div className='flex items-center' > <span><LiaDollarSignSolid /></span> <span className='font-bold'>56.4</span></div>
                            </div>
                            <div className='text-sm font-light flex items-center justify-between'>
                                <p>Shipping</p>
                                <p>Free</p>
                            </div>
                            
                           
                        </div>
                        <div className='shadow font-bold  p-3 flex justify-between items-center'>
                            <div className=''>
                                <p>Payable Amount</p>
                                <p className='font-light  text-sm text-gray-400'>(Includs Tax)</p>
                            </div>
                            <p>56.4</p>
                        </div>
                        <div className='flex justify-center items-center'>
                            <button className='w-[80%] p-3 rounded-xl font-bold bg-black text-white'> CHECKOUT</button>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default ShoppingCart
