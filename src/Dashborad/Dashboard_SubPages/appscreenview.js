import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import rain from "../../img/Social1.png";
import logo from "../../img/profilelogo.webp";
import ezi from '../../img/ezgif.jpg';
import { baseurl } from '../../baseurl';
import axios from 'axios';

import { useParams } from 'react-router-dom';
const AppScreenView = () => {
  
  const [qrtemplete, setQrtemplete] = useState(null);
  const [showSplash, setShowSplash] = useState(false);
  const paragraphRef = useRef(null);


  const fetchQRtepmlete = async (id) => {
    try {
      const response = await axios.get(`${baseurl}/getapptempleteById/${id}`);
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


        <div className='grad' style={{ background: `linear-gradient(0deg, ${bottom} 100%, ${top} 0%, #00d4ff00 100%) ` , height:'100%' }}>
        
          <div className='setlogs' style={{justifyContent:'space-evenly'}}>
        
            <div>
        
        
        
           
          <p className='logsp' >
              {qrtemplete.company ? qrtemplete.company : ''}
            </p>
        
            <span className='logsspan' style={{ fontFamily: titleFont, fontSize: titlesize }}>
        
              {qrtemplete.titletext ? qrtemplete.titletext : ''}
            </span>
            </div>
            
        
        
           
        
            <div className="appdiv">
        
              <div className='applogo'>
                <img src={qrtemplete.selectedlogo || logo} alt="App Logo" style={{borderRadius:'20px'}} />
              </div>
              <div className='appdesc'>
        
            <p
                 ref={paragraphRef} 
             className=' blackcolor logsp ' style={{ fontFamily: desFont, fontSize: descriptionsize , color:'black' }}>
              {qrtemplete.desctext ? qrtemplete.desctext : ''}
            </p>
              </div>
        
              {
                qrtemplete.googleurl &&
                <div className='appdesc google'>
        
            <p
                
             className='  logsp ' style={{ fontFamily: qrtemplete.desFont, fontSize: qrtemplete.descriptionsize  }}>
              <a href={qrtemplete.googleurl} style={{color:'white'}}>
              Google Play
        
              </a>
            </p>
              </div>
        
              }
        
        
              
              <br/>
        
              {
        
        qrtemplete.appleurl  &&
              <div className='appdesc google'>
        
              <p
                  
               className='  logsp ' style={{ fontFamily: qrtemplete.desFont, fontSize: qrtemplete.descriptionsize  }}>
                <a href={qrtemplete.appleurl} style={{color:'white'}}>
                App Store
          
                </a>
              </p>
                </div>
        
              }
        
             
              <br/>
        
              {
        
        qrtemplete.amazonurl && 
              <div className='appdesc google'>
        
              <p
                  
               className='  logsp ' style={{ fontFamily: qrtemplete.desFont, fontSize: qrtemplete.descriptionsize  }}>
                <a href={qrtemplete.amazonurl} style={{color:'white'}}>
                Amazon
                </a>
              </p>
                </div>  
        
              }
        
        
             
        
            </div>
        
            <p>{qrtemplete.website ? qrtemplete.website :''}</p>
           
        
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

export default AppScreenView;
