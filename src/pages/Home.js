import React , {useEffect}  from 'react'
import { allTrending  } from '../api/api'
import Carousel from '../Components/Carousel/Carousel'
import axios from 'axios';

function Home() {



 
  
  return (
    <div>
      <Carousel value={allTrending} />
    </div>
  )
}

export default Home