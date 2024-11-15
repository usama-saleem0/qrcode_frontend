import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import rain from "../../img/Social1.png";
import logo from "../../img/profilelogo.webp";
import ezi from '../../img/ezgif.jpg';
import { baseurl } from '../../baseurl';
import axios from 'axios';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';

import { useParams } from 'react-router-dom';
const CouponScreenView = () => {
  
  const [qrtemplete, setQrtemplete] = useState(null);
  const [showSplash, setShowSplash] = useState(false);
  const paragraphRef = useRef(null);
  const paragraphRefs = useRef(null);
  const [isFlipped, setIsFlipped] = useState(true);


  const fetchQRtepmlete = async (id) => {
    try {
      const response = await axios.get(`${baseurl}/getcoupontempleteById/${id}`);
      // alert(response.data.data)
      setQrtemplete(response.data.data); 
    } catch (error) {
      console.error('Error fetching QR template by ID:', error);
    }
  };


  const { id } = useParams();
  
  useEffect(() => {
    const userId = localStorage.getItem('fetchId');
    if(id){
      fetchQRtepmlete(id);

    }
    else{

      fetchQRtepmlete(userId);
    }
    setTimeout(() => {
      showSplashScreen();
      }, 1000);


      if (paragraphRef.current) {
        paragraphRef.current.style.setProperty('color', 'black', 'important');
      }

      if (paragraphRefs.current) {
        paragraphRefs.current.style.setProperty('color', 'black', 'important');
      }
  }, []);
  

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };


  const showSplashScreen = () => {
    // if(qrtemplete.animationimage){

   
    setShowSplash(true);
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000);
    return () => clearTimeout(timer);
  // }
  }
  

  const location = useLocation();
  const { selectedCover, titleFont, bottom, selectedImage, titlesize, desFont, descriptionsize, linksize, top } = location.state || {};

  const gotonew = () => {
    const data = {};
    localStorage.setItem('myData', JSON.stringify(data));
  };

  return (
    <div className='fullscreen'>
       {qrtemplete ?
       <div>
       

       
      
      {showSplash  &&  qrtemplete.animationimage ? (
        <div className="splash-screen">
          <div className="splash-image" style={{backgroundImage: `url(${qrtemplete.animationimage || rain})`}}></div>
        </div>
      ) : (


       
        <div className='templetes1'>


        <div className='grad' style={{ background: `linear-gradient(0deg, ${qrtemplete.bottom} 100%, ${qrtemplete.bottom} 0%, #00d4ff00 100%) ` , height:'100%' }}>

   

        {
          isFlipped ?

          <div className='setlogs'>

    
          <h4 style={{color:'white'}}>{qrtemplete.company}</h4>
          <br/>

       
          <div className='backimages'  style={{ backgroundImage: `url(${qrtemplete.selectedlogo || rain})`, }} onClick={handleFlip}>
            

          </div>

          <div className='backimagess'>
          <div style={{display:'flex' , justifyContent:'space-between'}}>

          <p style={{color:'black' , fontSize:'25px'}}>{qrtemplete.titletext}</p>
          <div className='offpercent'>{qrtemplete.badge}</div>
          </div>
          <br/>

          <p>{qrtemplete.desctext}</p>


          </div>

          <div className='backimagesss'>
          <button className='offbutton' onClick={handleFlip}>{qrtemplete.buttontext}</button>

          </div>


        
          </div>
          
            :
            <div className='setlogs'>

    
            
            <div className='backimagess' style={{height:'30%'}}>
              <div style={{width:'10%'}} onClick={handleFlip}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M463.5 224l8.5 0c13.3 0 24-10.7 24-24l0-128c0-9.7-5.8-18.5-14.8-22.2s-19.3-1.7-26.2 5.2L413.4 96.6c-87.6-86.5-228.7-86.2-315.8 1c-87.5 87.5-87.5 229.3 0 316.8s229.3 87.5 316.8 0c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0c-62.5 62.5-163.8 62.5-226.3 0s-62.5-163.8 0-226.3c62.2-62.2 162.7-62.5 225.3-1L327 183c-6.9 6.9-8.9 17.2-5.2 26.2s12.5 14.8 22.2 14.8l119.5 0z"/></svg>

              </div>

           
           
            <p>Coupon Code </p>

            <br/>
            <h4 style={{color:'orangered'}}>{qrtemplete.couponcode}</h4>
            
            <p>{qrtemplete.valid}</p>


            </div>

            <div className='backimagesss'>
            <button className='offbutton' ><a href={qrtemplete.couponurl} style={{color:'white'}}>{qrtemplete.couponbutton}</a></button>

            </div>

            <br/>
            <br/>
            <h3 style={{color:'white'}}>
              Term Of Condition
            </h3>

            <p style={{color:'white'}}>{qrtemplete.termandcondition}</p>


          
            </div>
           
        }

      
      

 


          </div>


          </div>
                  )}
                     
                     </div>
                  : 

                  <div>Loading...</div>
                }


    </div>
  );
};

export default CouponScreenView;
