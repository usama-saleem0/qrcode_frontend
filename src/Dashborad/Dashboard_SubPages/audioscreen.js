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
const AudioScreenView = () => {
  
  const [qrtemplete, setQrtemplete] = useState(null);
  const [showSplash, setShowSplash] = useState(false);
  const paragraphRef = useRef(null);
  const paragraphRefs = useRef(null);



  const fetchQRtepmlete = async (id) => {
    try {
      const response = await axios.get(`${baseurl}/getaudiotempleteById/${id}`);
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


        <div className='grad' style={{ background: `linear-gradient(0deg, ${qrtemplete.bottom} 100%, ${qrtemplete.bottom} 0%, #00d4ff00 100%) ` , height:'30%' }}>

          <div className='setlogs' style={{position:'relative'}}>
          <div className='abosuluteimage'>

            <img src={qrtemplete.selectedImage || logo} alt="logo"  className='abosuluteimg' />
            

            <span className='logsspan' style={{ fontFamily: qrtemplete.titleFont, fontSize: qrtemplete.titlesize , color:'black' }}>

              {qrtemplete.titletext ? qrtemplete.titletext : ''}
            </span>
            


            <p
              ref={paragraphRef} 
            className='logsps' style={{ fontFamily: qrtemplete.desFont, fontSize: qrtemplete.descriptionsize , color:'black' }}>
              {qrtemplete.desctext ? qrtemplete.desctext : ''}
            </p>
            </div>
          

          </div>


        </div>


        <div className='grad' style={{ background: 'white' , height:'40%' }}>
          

          <div className='setlogs' style={{marginTop:'300px'}}>

          

        {
          qrtemplete.audiourl &&

          <audio controls  src={qrtemplete.audiourl}/>
        }




         
                <br/>

          <p
              ref={paragraphRefs} 
            className='logsps' >
              {qrtemplete.website ? qrtemplete.website : ''}
            </p>


          

          
          

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

export default AudioScreenView;
