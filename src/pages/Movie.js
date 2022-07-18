import React from 'react'
import { moviePopularDisneyEndpoint } from '../api/api'
import Carousel from '../Components/Carousel/Carousel'
function Movie() {
  return (

    <div>
            <Carousel value={moviePopularDisneyEndpoint} />
    </div>
  )
}

export default Movie