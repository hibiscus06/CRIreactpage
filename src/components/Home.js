import React from 'react'
import './style.css'
import img1 from '../assests/1.png'
import img2 from '../assests/2.png'
import logo from '../assests/logo.png'
import img3 from '../assests/3.png'
import { MdCall } from "react-icons/md";
import { SiFacebook } from "react-icons/si";
import { IoGlobeSharp } from "react-icons/io5";


const Home = () => {
  return (

    <div className='container'>
    <div className="logo">
    <img src={logo} alt="logo" />
    </div>

    <div className='flex-container'>

        <div className='awardimg'>
            <img src={img1} alt="award"/>
        </div>

        <div className='awardinfo'>
            <p className='awardheading'>
            C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</p>
            <ul>
            <li className='info'>C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.</li>
            <li className='info'>C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel. 
            </li>
            </ul>

            <div className='awardrecieveimg'>
            <img src={img2} alt='' />
            </div>

            <p className='moreawardinfo'>
            Government of India has awarded the <span> "National Energy Conservation Award 2018"</span>. Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.
            </p>

        </div>        
    </div>   

   

    <div className='products'>
        <p>INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION. </p>

        <img src={img3} alt=''/>

       <p>Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors </p>
        
        <hr className='divider'/>   

        <p className='segments'>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</p>

       <p>CHEMICALS & PROCESS <span>| </span>  
        POWER <span>| </span>  
        WATER & WASTE WATER <span>| </span> 
        OILS & GAS <span>| </span> 
        PHARMA <span>| </span> 
        SUGARS & DISTILLERIES <span>| </span> 
        PAPER & PULP <span>| </span> 
        MARINE & DEFENCE <span>| </span> 
        METAL & MINING <span>| </span> 
        FOOD & BEVERAGE <span>| </span> 
        PETROCHEMICAL & REFINERIES <span>| </span> 
        SOLAR <span>| </span> 
        BUILDING <span>| </span> 
        HVAC <span>| </span> 
        FIRE FIGHTING <span>| </span> 
        AGRICULTURE & RESIDENTIAL</p>

        </div> 

        <div className='footer'>
            <p> <MdCall className='phone'/>Toll free <span>1800 200 1234</span> </p>
            <p> <SiFacebook className='fb'/>www.facebook.com/cripumps </p>
            <p> <IoGlobeSharp className='website'/>www.crigroups.com </p>
        </div>
 
    </div>
    
    
  )
}

export default Home