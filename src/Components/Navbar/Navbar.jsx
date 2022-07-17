import React from 'react'
import logo from '../../assets/images/disney-hotstar-logo-dark.svg'
import kids  from '../../assets/images/kids.svg'
import './Navbar.scss'
function Navbar() {
  return (
    <div>
        <header className='main_header' >
          <nav className='main_nav' >

<div className="first_container">
<div className="logo">
            <img src= {logo} alt= "logo" />
          </div>


          <div className="links">
      
      <ul>
            <li>  TV  </li>
            <li> Movies </li>
            <li> Sports  </li>
            <li> Disney+ </li>
            <li>  <img src= {kids} alt="" />   </li>
            </ul>
  
  
        </div>     
</div>
        


    
         

   

    

      
 <div className="link_btns">

 <div className="input">
        <input type="text" placeholder='search' />
    </div>

 <div className="button">
  <button> Subscribe </button>
  </div> 

  <div className="login">
    <h4> LOGIN </h4>
  </div>
 </div>
        

           </nav>
        </header>


    </div>
  )
}

export default Navbar