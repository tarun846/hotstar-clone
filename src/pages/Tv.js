import React from 'react'
import { tvOriginalDisneyEndpoint } from '../api/api'
import Carousel from '../Components/Carousel/Carousel'
function Tv() {
 
  return (
    <>
      <Carousel value={tvOriginalDisneyEndpoint} />
    </>
  )
}

export default Tv