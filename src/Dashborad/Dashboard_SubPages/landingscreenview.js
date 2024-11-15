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

import hide from "../../img/hide.webp";

const LandingscreenView = () => {
  
  const [qrtemplete, setQrtemplete] = useState(null);
  const [showSplash, setShowSplash] = useState(false);
  const paragraphRef = useRef(null);
  const paragraphRefs = useRef(null);
  const [isFlipped, setIsFlipped] = useState(true);


  const fetchQRtepmlete = async (id) => {
    try {
      const response = await axios.get(`${baseurl}/getlandingtempleteById/${id}`);
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


        <div className='imagediv'>


      <div className='templetes1' style={{ backgroundImage: `url(${qrtemplete.selectedCover || rain})`, }}>


        <div className='grad hover-grad' style={{ background: `#fff ` }}>

          <div className='setlogs hero-li-list-boxz'>



            <div className='hell-box-inside hitx' >



            <span className='logsspan' style={{ fontFamily: qrtemplete.titleFont}}>

              {qrtemplete.titletext}
              </span>




              <img src={qrtemplete.selectedlogo || hide} alt="" />

              <p className='logsp' style={{ fontFamily: qrtemplete.desFont}}>
                {qrtemplete.desctext}
       
              </p>


             


             
                

                            
              <div className="h5-h6-box-list">
              <h5>From €{qrtemplete.price}</h5>

              <h6>Buy</h6>
              </div>

            </div>



          


          </div>


        </div>



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

export default LandingscreenView;
