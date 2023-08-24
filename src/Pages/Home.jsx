import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import Card from '../Components/Card'
import axios from 'axios'

const Home = () => {
    const [fetchData, setFetchData] = useState([])
    console.log(fetchData,"fetchDAta");
    useEffect(() => {
        async function fetch() {
            const response = await axios({
                method: 'get',
                url: 'https://fakestoreapi.com/products'
            })
            // console.log(response.data)
            setFetchData(response.data)
        }
        fetch()
    }, [])
    return (
        <>
            <Navbar />
            <div className=' mt-5 md:grid md:grid-cols-2 xl:grid-cols-4 grid-cols-1 gap-3 xl:max-w-[92%] m-auto lg:grid-cols-3 h-[85%] justify-center items-center scrollbar-hide overflow-y-auto'>

                {/* Product card */}
        {
           fetchData.map((item,index)=>(
            <Card key={index} data={item}/>
           ))
        }
               
            </div>
        </>
    )
}

export default Home
