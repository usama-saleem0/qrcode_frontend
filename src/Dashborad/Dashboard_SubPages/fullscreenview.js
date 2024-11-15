import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import rain from "../../img/Social1.png";
import logo from "../../img/profilelogo.webp";
import ezi from '../../img/ezgif.jpg';
import { baseurl } from '../../baseurl';
import axios from 'axios';

import { useParams } from 'react-router-dom';
const FullScreenView = () => {
  
  const [qrtemplete, setQrtemplete] = useState(null);
  const [tops, settops] = useState('#5dade2');
  const [showSplash, setShowSplash] = useState(false);


  const fetchQRtepmlete = async (id) => {
    try {
      const response = await axios.get(`${baseurl}/getqrtempleteById/${id}`);
      // alert(response.data.data)
      setQrtemplete(response.data.data); 
    } catch (error) {
      console.error('Error fetching QR template by ID:', error);
    }
  };




  
  
  
  const { id } = useParams();
 

  useEffect(() => {
    const userId = localStorage.getItem('fetchId');



    
    
    console.log('User' , id);

    if(id){
      fetchQRtepmlete(id);
   

    }

    else{
      fetchQRtepmlete(userId);
      // countScan(userId)

    }

    setTimeout(() => {
      showSplashScreen();
      }, 1000);
  }, []);
  

   const showSplashScreen = () => {
    // if(qrtemplete?.animationimage){

   
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
  

{showSplash == 1 &&  qrtemplete?.animationimage  ? (
  <div className="splash-screen">
    <div className="splash-image" style={{backgroundImage: `url(${qrtemplete?.animationimage || rain})`}}></div>
        </div>
      ) : (

        <div>
        {qrtemplete?.tempno === 1 && (
                <div className='templetes1' style={{ backgroundImage: `url(${qrtemplete?.selectedCover || rain})`, }}>


                  <div className='grad' style={{ background: `linear-gradient(0deg, ${qrtemplete?.bottom} 0%, ${qrtemplete?.top} 71%, #00d4ff00 100%)` }}>

                    <div className='setlogs'>
                      <img className='logsimage' src={qrtemplete?.selectedImage || logo} alt="Link" />
                      <br />

                      <span className='logsspan' style={{ fontFamily: qrtemplete?.titleFont, fontSize: qrtemplete?.titlesize }}>

                        {qrtemplete?.titletext ? qrtemplete?.titletext : 'Full Stack dev'}
                      </span>
                      <p className='logsp' style={{ fontFamily: qrtemplete?.desFont, fontSize: qrtemplete?.descriptionsize }}>
                        {qrtemplete?.desctext ? qrtemplete?.desctext : 'developer'}
                      </p>
                      <div className="logsicon">

                      {qrtemplete?.selectedIcons?.map(icon => (
                       <img src={icon.icon} alt={icon.name} style={{ width: '30px', height: '30px' }} />

                      ))}


                      </div>



                      <div className="logslink">
                        <div className="logslink--img">
                          <img src={ezi} />
                        </div>
                        <h6 style={{ fontSize: qrtemplete?.linksize }}> <a href={qrtemplete?.links}>
                          {qrtemplete?.linktext}
                        </a>  </h6>
                      </div>

                      <div className="logslink">
                        <div className="logslink--img">
                          <img src={ezi} />
                        </div>
                        <h6 style={{ fontSize: qrtemplete?.linksize }}>  <a href={qrtemplete?.links2}>
                          {qrtemplete?.linktext2}
                        </a> </h6>
                      </div>

                      <div className="logslink">
                        <div className="logslink--img">
                          <img src={ezi} />
                        </div>
                        <h6 style={{ fontSize: qrtemplete?.linksize }}>  <a href={qrtemplete?.links3}>
                          {qrtemplete?.linktext3}
                        </a> </h6>
                      </div>


                    </div>


                  </div>



                </div>
        )}

        {qrtemplete?.tempno === 2 && (
                <div className='templetes2' style={{ backgroundImage: `url(${qrtemplete?.selectedCover || rain})`, }}>


                <div className='grad2' style={{ background: `linear-gradient(0deg, ${qrtemplete?.bottom} 0%, ${qrtemplete?.top} 100%, #00d4ff00 100%)` }}>

                  <div className='setlogs'>
                    <img className='logsimage' src={qrtemplete?.selectedImage || logo} alt="Link" />
                    <br />

                    <span className='logsspan' style={{ fontFamily: qrtemplete?.titleFont, fontSize: qrtemplete?.titlesize }}>

                      {qrtemplete?.titletext ? qrtemplete?.titletext : 'Full Stack dev'}
                    </span>
                    <p className='logsp' style={{ fontFamily: qrtemplete?.desFont, fontSize: qrtemplete?.descriptionsize }}>
                      {qrtemplete?.desctext ? qrtemplete?.desctext : 'developer'}
                    </p>
                    <div className="logsicon">
                    {qrtemplete?.selectedIcons?.map(icon => (
                       <img src={icon.icon} alt={icon.name} style={{ width: '30px', height: '30px' }} />

                      ))}


                    </div>



                    <div className="logslink">
                      <div className="logslink--img">
                        <img src={ezi} />
                      </div>
                      <h6 style={{ fontSize: qrtemplete?.linksize }}> <a href={qrtemplete?.links}>
                        {qrtemplete?.linktext}
                      </a>  </h6>
                    </div>

                    <div className="logslink">
                      <div className="logslink--img">
                        <img src={ezi} />
                      </div>
                      <h6 style={{ fontSize: qrtemplete?.linksize }}>  <a href={qrtemplete?.links2}>
                        {qrtemplete?.linktext2}
                      </a> </h6>
                    </div>

                    <div className="logslink">
                      <div className="logslink--img">
                        <img src={ezi} />
                      </div>
                      <h6 style={{ fontSize: qrtemplete?.linksize }}>  <a href={qrtemplete?.links3}>
                        {qrtemplete?.linktext3}
                      </a> </h6>
                    </div>


                  </div>


                </div>



              </div>
        )}


        {qrtemplete?.tempno === 3 && (
                <div className='templetes2' style={{ backgroundImage: `url(${qrtemplete?.selectedCover || rain})`, }}>


                <div className='grad3' style={{ background: `linear-gradient(0deg, ${qrtemplete?.bottom} 100%, ${qrtemplete?.top} 100%, #00d4ff00 100%)` }}>

                  <div className='setlogs'>
                    <img className='logsimage' src={qrtemplete?.selectedImage || logo} alt="Link" />
                    <br />

                    <span className='logsspan' style={{ fontFamily: qrtemplete?.titleFont, fontSize: qrtemplete?.titlesize }}>

                      {qrtemplete?.titletext ? qrtemplete?.titletext : 'Full Stack dev'}
                    </span>
                    <p className='logsp' style={{ fontFamily: qrtemplete?.desFont, fontSize: qrtemplete?.descriptionsize }}>
                      {qrtemplete?.desctext ? qrtemplete?.desctext : 'developer'}
                    </p>
                    <div className="logsicon">
                    {qrtemplete?.selectedIcons?.map(icon => (
                       <img src={icon.icon} alt={icon.name} style={{ width: '30px', height: '30px' }} />

                      ))}


                    </div>



                    <div className="logslink">
                      <div className="logslink--img">
                        <img src={ezi} />
                      </div>
                      <h6 style={{ fontSize: qrtemplete?.linksize }}> <a href={qrtemplete?.links}>
                        {qrtemplete?.linktext}
                      </a>  </h6>
                    </div>

                    <div className="logslink">
                      <div className="logslink--img">
                        <img src={ezi} />
                      </div>
                      <h6 style={{ fontSize: qrtemplete?.linksize }}>  <a href={qrtemplete?.links2}>
                        {qrtemplete?.linktext2}
                      </a> </h6>
                    </div>

                    <div className="logslink">
                      <div className="logslink--img">
                        <img src={ezi} />
                      </div>
                      <h6 style={{ fontSize: qrtemplete?.linksize }}>  <a href={qrtemplete?.links3}>
                        {qrtemplete?.linktext3}
                      </a> </h6>
                    </div>


                  </div>


                </div>



              </div>
        )}


      {qrtemplete?.tempno === 4 && (
                <div className='templetes2' style={{ backgroundImage: `url(${qrtemplete?.selectedCover || rain})`, }}>


                <div className='grad2' style={{ background: `linear-gradient(0deg, ${qrtemplete?.bottom} 0%, ${qrtemplete?.top} 100%, #00d4ff00 100%)` }}>

                  <div className='setlogs'>
                    <img className='logsimage' src={qrtemplete?.selectedImage || logo} alt="Link" />
                    <br />

                    <span className='logsspan' style={{ fontFamily: qrtemplete?.titleFont, fontSize: qrtemplete?.titlesize }}>

                      {qrtemplete?.titletext ? qrtemplete?.titletext : 'Full Stack dev'}
                    </span>
                    <p className='logsp' style={{ fontFamily: qrtemplete?.desFont, fontSize: qrtemplete?.descriptionsize }}>
                      {qrtemplete?.desctext ? qrtemplete?.desctext : 'developer'}
                    </p>
                    <div className="logsicon">
                    {qrtemplete?.selectedIcons?.map(icon => (
                       <img src={icon.icon} alt={icon.name} style={{ width: '30px', height: '30px' }} />

                      ))}


                    </div>



                    <div className="logslink2">
                      <div className="logslink--img">
                        <img src={ezi} />
                      </div>
                      <h6 style={{ fontSize: qrtemplete?.linksize }}> <a href={qrtemplete?.links}>
                        {qrtemplete?.linktext}
                      </a>  </h6>
                    </div>

                    <div className="logslink2">
                      <div className="logslink--img">
                        <img src={ezi} />
                      </div>
                      <h6 style={{ fontSize: qrtemplete?.linksize }}>  <a href={qrtemplete?.links2}>
                        {qrtemplete?.linktext2}
                      </a> </h6>
                    </div>

                    <div className="logslink2">
                      <div className="logslink--img">
                        <img src={ezi} />
                      </div>
                      <h6 style={{ fontSize: qrtemplete?.linksize }}>  <a href={qrtemplete?.links3}>
                        {qrtemplete?.linktext3}
                      </a> </h6>
                    </div>


                  </div>


                </div>



              </div>
        )}


        {qrtemplete?.tempno === 5 && (
                <div className='templetes1' style={{ backgroundImage: `url(${qrtemplete?.selectedCover || rain})`, }}>


                  <div className='grad' style={{ background: `linear-gradient(0deg, ${qrtemplete?.bottom} 0%, ${tops} 100%, #00d4ff00 100%)` }}>

                    <div className='setlogs'>
                      <img className='logsimage' src={qrtemplete?.selectedImage || logo} alt="Link" />
                      <br />

                      <span className='logsspan' style={{ fontFamily: qrtemplete?.titleFont, fontSize: qrtemplete?.titlesize }}>

                        {qrtemplete?.titletext ? qrtemplete?.titletext : 'Full Stack dev'}
                      </span>
                      <p className='logsp' style={{ fontFamily: qrtemplete?.desFont, fontSize: qrtemplete?.descriptionsize }}>
                        {qrtemplete?.desctext ? qrtemplete?.desctext : 'developer'}
                      </p>
                      <div className="logsicon">
                      {qrtemplete?.selectedIcons?.map(icon => (
                       <img src={icon.icon} alt={icon.name} style={{ width: '30px', height: '30px' }} />

                      ))}

                      </div>



                      <div className="logslink">
                        <div className="logslink--img">
                          <img src={ezi} />
                        </div>
                        <h6 style={{ fontSize: qrtemplete?.linksize }}> <a href={qrtemplete?.links}>
                          {qrtemplete?.linktext}
                        </a>  </h6>
                      </div>

                      <div className="logslink">
                        <div className="logslink--img">
                          <img src={ezi} />
                        </div>
                        <h6 style={{ fontSize: qrtemplete?.linksize }}>  <a href={qrtemplete?.links2}>
                          {qrtemplete?.linktext2}
                        </a> </h6>
                      </div>

                      <div className="logslink">
                        <div className="logslink--img">
                          <img src={ezi} />
                        </div>
                        <h6 style={{ fontSize: qrtemplete?.linksize }}>  <a href={qrtemplete?.links3}>
                          {qrtemplete?.linktext3}
                        </a> </h6>
                      </div>


                    </div>


                  </div>



                </div>
        )}
        </div>
                    )
                }

      
    </div>
  );
};

export default FullScreenView;
