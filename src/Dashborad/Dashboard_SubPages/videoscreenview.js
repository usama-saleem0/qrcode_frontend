import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import rain from "../../img/Social1.png";
import logo from "../../img/profilelogo.webp";
import ezi from '../../img/ezgif.jpg';
import { baseurl } from '../../baseurl';
import axios from 'axios';

import { useParams } from 'react-router-dom';
const VideoScreenView = () => {
  
  const [qrtemplete, setQrtemplete] = useState(null);
  const [showSplash, setShowSplash] = useState(false);


  const fetchQRtepmlete = async (id) => {
    try {
      const response = await axios.get(`${baseurl}/getvideotempleteById/${id}`);
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

              <div className='setlogs'>
              <p className='logsp' >
                  {qrtemplete.company ? qrtemplete.company : ''}
                </p>

                <span className='logsspan' style={{ fontFamily: qrtemplete.titleFont, fontSize: qrtemplete.titlesize }}>

                  {qrtemplete.titletext ? qrtemplete.titletext : ''}
                </span>
                


                <p className='logsp' style={{ fontFamily: qrtemplete.desFont, fontSize: qrtemplete.descriptionsize }}>
                  {qrtemplete.desctext ? qrtemplete.desctext : ''}
                </p>
              

              </div>


            </div>


            <div className='grad' style={{ background: 'white' , height:'70%' }}>
              

              <div className='setlogs'>

                {qrtemplete.videourl  ?

              <video width="200" controls src={qrtemplete.videourl} autoPlay>
                </video>
                :
                <div></div>
                }


                <p>{qrtemplete.videodesc}</p>


              

              
              

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

export default VideoScreenView;
