import React from 'react'
import NewArrivals from '../Components/NewArrivals'
import Offers from '../Components/Offers'
import Customize from '../Components/Customize'
import Collection from '../Components/Collection'

const Home = () => {
  return (
    <div className=''>
        <NewArrivals/>
        <Offers/>
        <Customize/>
       <Collection/>
       
    </div>
  )
}

export default Home
