import React from 'react'
import Card from '../component/cards'
import Footer from '../component/footer'
import Navbar from '../component/Navbar'

const Events=()=>{
    return(
        <div className='bg-cyan-900 block pt-16'>
            <Navbar/>
            <Card/>
            <Card/>
            <Footer/>
        </div>
    )
}

export default Events