import React, {useEffect} from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './Carousel.scss'
import {settings} from './settings'
import anatomy from '../../assets/images/anatomy.webp'
import { useDispatch , useSelector  } from 'react-redux';
import { fetchData } from '../../Container/CarouselSlice';
import { allTrending } from '../../api/api';
import { v4 as uuid }  from 'uuid'

function Carousel({value}) {
 
  const state  = useSelector( state => state.carousel )

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchData(value))
 }, [dispatch])

  const data =   state?.entities?.results?.slice(0, 6) ;

  
    const carousel = data?.map( (e) => {
  
    return (
        <div className="overlay_container" key={uuid} > 
<div className="imgd">

<div className="masthead-item-container"  >

<div className="carousel-description">
          <h2>{e.title || e.name }</h2>
          <p>{e.overview}</p>
        </div>


        <div className="carousel-overlay"></div>

<div className="img_container">
  <div>
  <img src= {`https://image.tmdb.org/t/p/w1280/${e.backdrop_path}`} alt="" />
  </div>
</div>

</div>

</div>
</div>
      )
    } )

  return (


    <div className='slidersads' >
       
        <Slider {...settings} >


    
{carousel}




        </Slider>
    </div>
  )
}

export default Carousel



    
{/* <div className="imgk"> */}
     
      
{/* dassa
        </div>

        <div className="imgs">
        <div className="imgd"></div>
            {/* <img src= {anatomy} alt="" /> */}
         


        // <div className="img">
        //     {/* <img src= {anatomy} alt="" /> */}
        //     <div className="imgk"></div>
        // </div>



        // <div className="img">
            {/* <img src= {anatomy} alt="" /> */}
            {/* <div className="containers"/> */}
            {/* <div className="imgd"></div> */}
        {/* </div> */}