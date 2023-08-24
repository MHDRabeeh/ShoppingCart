import { LiaDollarSignSolid } from 'react-icons/lia'
import {BsFillEyeFill} from 'react-icons/bs'
import { FaCartShopping } from "react-icons/fa6";

const Card = ({ data }) => {
    console.log(data);
    return (
        <div>
            <div className='w-80 h-[35rem] border    '>
                <div className='h-[77%] w-[100%] border-b'>
                    {/* Product image */}
                    <img className='w-[97%] mx-auto h-[97%]' src={data.image} alt="" />
                </div>
                <div className='h-20 border-b flex flex-col items-center justify-center'>
                    <p>{data.category}</p>
                    <div className='flex  items-center'>
                        {/* Product Price */}
                        <span><LiaDollarSignSolid size={20} /></span> <span className='text-xl font-medium'>{data.price}</span>
                    </div>
                </div>
                <div className='flex justify-between items-center h-12  w-[95%] mx-auto'>
                    <div className='flex gap-1 items-center'><span className='text-[#ffcf98]'><BsFillEyeFill size={20}/></span><span className='text-base '>View Product</span></div>
                     {/* Add to Cart Button */}
                    <div className='flex gap-1 items-center cursor-pointer'><span className='text-[#ffcf98]'><FaCartShopping size={20}/></span><span className='text-base '>Add to Cart</span></div>
                </div>


            </div>
        </div>
    )
}

export default Card
