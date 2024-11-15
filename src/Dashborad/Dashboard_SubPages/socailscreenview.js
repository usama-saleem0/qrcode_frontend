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
const SocailScreenView = () => {
  
  const [qrtemplete, setQrtemplete] = useState(null);
  const [showSplash, setShowSplash] = useState(false);
  const paragraphRef = useRef(null);
  const paragraphRefs = useRef(null);
  const [isFlipped, setIsFlipped] = useState(true);


  const fetchQRtepmlete = async (id) => {
    try {
      const response = await axios.get(`${baseurl}/getsocailtempleteById/${id}`);
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

        
      paragraphRef.current.style.setProperty('height', '15vh', 'important');
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


        <div className='templetes1' style={{ backgroundImage: `url(${selectedCover || rain})`, }}>


          <div className='grad hover-grad  more-just' style={{ background: `${bottom} ` }}>

            <div className='setlogs hero-li-list-boxz'>



              <div className='hell-box-inside nick1' >

              <img ref={paragraphRef} className='logsimage' src={qrtemplete.selectedImage || logo} alt="Link" style={{width:'60% !important'}} />

                <div className="nick2" >

                  <span className='logsspan' style={{ fontFamily: qrtemplete.titleFont }}>

                    {qrtemplete.titletext ? qrtemplete.titletext :"Full Stack dev "}

                    {/* {'Full Stack dev'} */}
                  </span>

                  <p className='logsp' style={{ fontFamily: qrtemplete.desFont }}>
                    {qrtemplete.desctext ? qrtemplete.desctext : ' Our first single'}
                    {/* {'Our first single'} */}
                  </p>

                </div>


                <div className="play-icon-Social">



                <span style={{ background: `${qrtemplete.top} ` }} >
                  <a href={`tel:${qrtemplete.telephone}`} style={{ textDecoration: 'none' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg>
                  </a>
                  </span> 
                  <span style={{ background: `${qrtemplete.top} ` }} >
                  <a href={`mailto:${qrtemplete.email}`} style={{ textDecoration: 'none' }}>
                  <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true" ><path d="M19,4H5A3,3,0,0,0,2,7V17a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V7A3,3,0,0,0,19,4Zm0,2h0l-5.84,5a1.89,1.89,0,0,1-2.34,0L5,6H19Zm0,12H5a1,1,0,0,1-1-1V7.79L9.53,12.5a3.91,3.91,0,0,0,4.94,0L20,7.79V17A1,1,0,0,1,19,18Z"></path><path d="M7.29,13.29l-2,2a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l2-2a1,1,0,0,0-1.42-1.42Z"></path><path d="M16.71,13.29a1,1,0,0,0-1.42,1.42l2,2a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z"></path></svg>
                  </a>
                  </span>

                  <span style={{ background: `${qrtemplete.top} ` }}>
                  <a href={qrtemplete.website} style={{ textDecoration: 'none' }}>
                  <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true" ><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z"></path></svg>
                  </a>
                  </span>
                </div>


                {qrtemplete.Selectedicons.map(icon => (
      <div className="insta-and-more-box">
        
      <div className="insta-and-more-card">
        <img src={icon.icon} style={{width:'20%' , height:'auto'}}/>
        <p>{icon.text}</p>
      </div>




      </div>
                ))}
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

export default SocailScreenView;
