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
const PlaylistScreenView = () => {
  
  const [qrtemplete, setQrtemplete] = useState(null);
  const [showSplash, setShowSplash] = useState(false);
  const paragraphRef = useRef(null);
  const paragraphRefs = useRef(null);
  const [isFlipped, setIsFlipped] = useState(true);


  const fetchQRtepmlete = async (id) => {
    try {
      const response = await axios.get(`${baseurl}/getplaylisttempleteById/${id}`);
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


        <div className='templetes1' style={{ backgroundImage: `url(${qrtemplete.selectedlogo || rain})`, }}>


          <div className='grad hover-grad  more-just' style={{ background: `#fff ` }}>

            <div className='setlogs hero-li-list-boxz'>



              <div className='hell-box-inside hitxgg'  style={{ background: `${bottom} ` , height:'90%' }} >

                <img  src={qrtemplete.selectedlogo || rain} alt="" />
                {
              qrtemplete.audiourl &&

              <audio controls  src={qrtemplete.audiourl}/>
            }


                <div className="hththt" style={{ background: `${qrtemplete.bottom} ` }}>
                <p className='logsp' style={{ fontFamily: qrtemplete.desFont }}>
                  {qrtemplete.company}
                </p>

                <span className='logsspan' style={{ fontFamily: qrtemplete.titleFont }}>

                  {qrtemplete.titletext}
                </span>

                <p className='logsp' style={{ fontFamily: qrtemplete.desFont }}>
                  {qrtemplete.desctext}
                </p>

                </div>


              <div className="play-list-box" style={{background:'white'}}>

              {qrtemplete.Selectedicons.map(icon => (
          <div key={icon.id} >
            <div className="play-list-card">



            <div className="play-list-icon">
              <img    className='play-list-icon-img' src={icon.icon} alt="" />
              <p>{icon.text}</p>
            </div>
              <button><a href={icon.url} style={{color:'black'}}> Play</a></button>

            </div>
          
          </div>
        ))}





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

export default PlaylistScreenView;
