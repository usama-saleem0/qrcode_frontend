import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import rain from "../../img/Social1.png";
import logo from "../../img/profilelogo.webp";
import ezi from '../../img/ezgif.jpg';
import { baseurl } from '../../baseurl';
import axios from 'axios';

import { useParams } from 'react-router-dom';
const PdfScreenView = () => {
  
  const [qrtemplete, setQrtemplete] = useState(null);
  const [showSplash, setShowSplash] = useState(false);


  const fetchQRtepmlete = async (id) => {
    try {
      const response = await axios.get(`${baseurl}/getpdftempleteById/${id}`);
      // alert(response.data.data)
      setQrtemplete(response.data.data); 
    } catch (error) {
      console.error('Error fetching QR template by ID:', error);
    }
  };


  const { id } = useParams();
  
  useEffect(() => {
    const userId = localStorage.getItem('fetchId');
    // fetchQRtepmlete(userId);
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

     

{showSplash == 1 &&  qrtemplete.animationimage  ? (
  <div className="splash-screen">
    <div className="splash-image" style={{backgroundImage: `url(${qrtemplete.animationimage || rain})`}}></div>
  </div>
) : (


  <div>


        {qrtemplete.tempno === 1 && (


              <div className='templetes1' style={{ backgroundImage: `url(${qrtemplete.selectedCover || rain})`, }}>
              <div className='grad' style={{ background: `linear-gradient(180deg,  ${qrtemplete.bottom}  35vh,  #fff 0)` }}>
                <div className='setlogs kg-box'>
                  <p className='logsp kg1' style={{ fontFamily: qrtemplete.desFont, fontSize: qrtemplete.descriptionsize }}>
                    {qrtemplete.company ? qrtemplete.company : 'developer'}
                  </p>
                  <span className='logsspan kg2' style={{ fontFamily: qrtemplete.titleFont, fontSize: qrtemplete.titlesize }}>
                    {qrtemplete.titletext ? qrtemplete.titletext : 'Full Stack dev'}
                  </span>
                  <h3>
                    {qrtemplete.desctext ? qrtemplete.desctext : 'Our selection of burgers will surprise you. Their flavour will delight you.'}
                  </h3>
                  <div className="kg3">
                    {/* <img className='logsimage' src={selectedImage || logo} alt="Link" /> */}

                    {
                      qrtemplete.ispdf ?
                        <iframe
                          src={qrtemplete.url}
                          width="100%"
                          height="100%"
                          style={{ border: 'none' }}
                          title="PDF Viewer"
                        ></iframe>
                        :
                        <img className='logsimage' src={qrtemplete.selectedImage || logo} alt="Link" />
                    }

                    <button style={{ background: ` ${top}` }}><svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"></path></svg><a href={qrtemplete.url} target='_blank'>
                      {qrtemplete.buttontext ? qrtemplete.buttontext : 'See More'}
                      </a>
                      </button>
                    <a href={qrtemplete.website}><p>{qrtemplete.website ? qrtemplete.website : ''}</p> </a>
                  </div>
                  <br />
                </div>
              </div>
              </div>
            )}
          {qrtemplete.tempno === 2 && (

          //    <div className='templetes1' style={{ backgroundImage: `url(${qrtemplete.selectedCover || rain})`, }}>
          //   <div className='grad' style={{ background: `  ${qrtemplete.bottom}  ` }}>
          //     <div className='setlogs kg-box'>
          //       <p className='logsp kg1' style={{ fontFamily: qrtemplete.desFont, fontSize: qrtemplete.descriptionsize }}>
          //         {qrtemplete.desctext ? qrtemplete.desctext : 'developer'}
          //       </p>
          //       <span className='logsspan kg2' style={{ fontFamily: qrtemplete.titleFont, fontSize: qrtemplete.titlesize }}>
          //         {qrtemplete.titletext ? qrtemplete.titletext : 'Full Stack dev'}
          //       </span>
          //       <h3>Our selection of burgers will surprise you. Their flavour will delight you.</h3>
          //       <br />
          //         <div className="logslink more-extara-box">
          //           <div className="logslink--img-extara">
          //             <img src={ezi} />
          //           </div>
          //           <div className="more-extara-box-tital">
          //             <h6 style={{ fontSize: qrtemplete.linksize }}> <a href={qrtemplete.links}>
          //               {qrtemplete.titletext}
          //             </a>  </h6>
          //             <p>Descripción lorem ipsum dolor</p>
          //           </div>
          //           <svg class="MuiSvgIcon-root jss1585 jss1588" focusable="false" viewBox="0 0 16 16" aria-hidden="true"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 7 7-7 7"></path></svg>
          //         </div>
          //         <div className="logslink more-extara-box">
          //           <div className="logslink--img-extara">
          //             <img src={ezi} />
          //           </div>
          //           <div className="more-extara-box-tital">
          //             <h6 style={{ fontSize: qrtemplete.titlesize }}> 
          //               {qrtemplete.titletext}
          //             </h6>
          //             <p>Descripción lorem ipsum dolor</p>
          //           </div>
          //           <svg class="MuiSvgIcon-root jss1585 jss1588" focusable="false" viewBox="0 0 16 16" aria-hidden="true"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 7 7-7 7"></path></svg>
          //         </div>
          //     </div>
          //   </div>
          // </div> 

          <div className='templetes1' style={{ backgroundImage: `url(${qrtemplete.selectedCover || rain})`, }}>
          <div className='grad' style={{ background: `  ${qrtemplete.bottom}  ` }}>
            <div className='setlogs kg-box'>
            <p className='logsp kg1' style={{ fontFamily: qrtemplete.desFont, fontSize: qrtemplete.descriptionsize }}>
                {qrtemplete.company ? qrtemplete.company : 'developer'}
              </p>
              <span className='logsspan kg2' style={{ fontFamily: qrtemplete.titleFont, fontSize: qrtemplete.titlesize }}>
                {qrtemplete.titletext ? qrtemplete.titletext : 'Full Stack dev'}
              </span>
              <h3>
                {qrtemplete.desctext ? qrtemplete.desctext : 'Our selection of burgers will surprise you. Their flavour will delight you.'}
              </h3>
              <br />
              <div className="logslink more-extara-box">
                <div className="logslink--img-extara">
                  {/* <img src={ezi} /> */}
                </div>
                <div className="more-extara-box-tital">
                  <h6 style={{ fontSize: qrtemplete.linksize }}> <a href={qrtemplete.url}>
                    Uploaded PDF
                  </a>  </h6>
                  {/* <p style={{opacity:0}}>Descripción lorem ipsum dolor</p> */}
                </div>
                <svg class="MuiSvgIcon-root jss1585 jss1588" focusable="false" viewBox="0 0 16 16" aria-hidden="true"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 7 7-7 7"></path></svg>
              </div>
              
            </div>
          </div>
        </div>


        
              )}

              {qrtemplete.tempno === 3 && (
          //      <div className='templetes1' style={{ backgroundImage: `url(${qrtemplete.selectedCover || rain})`, }}>
          //   <div className='grad' style={{ background: ` linear-gradient( ${qrtemplete.top}  0%, ${qrtemplete.bottom}  ` }}>
          //     <div className='setlogs kg-box more-plus1'>
          //       <p className='logsp kg1' style={{ fontFamily: qrtemplete.desFont, fontSize: qrtemplete.descriptionsize }}>
          //         {qrtemplete.desctext ? qrtemplete.desctext : 'developer'}
          //       </p>
          //       <div className="gola-white-box">
          //         <span className='logsspan kg2' style={{ fontFamily: qrtemplete.titleFont, fontSize: qrtemplete.titlesize }}>
          //           {qrtemplete.titletext ? qrtemplete.titletext : 'Full Stack dev'}
          //         </span>
          //         <h3>Our selection of burgers will surprise you. Their flavour will delight you.</h3>
          //       </div>
          //         <div className="logslink more-extara-box hide-in">
          //           <div className="logslink--img-extara">
          //             <img src={ezi} />
          //           </div>
          //           <div className="more-extara-box-tital">
          //             <h6 style={{ fontSize: qrtemplete.linksize }}> <a href={qrtemplete.links}>
          //               {qrtemplete.linktext}
          //             </a>  </h6>
          //             <p>Descripción lorem ipsum dolor</p>
          //           </div>
          //           <svg class="MuiSvgIcon-root jss1585 jss1588" focusable="false" viewBox="0 0 16 16" aria-hidden="true"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 7 7-7 7"></path></svg>
          //         </div>
          //         <div className="logslink more-extara-box hide-in">
          //           <div className="logslink--img-extara">
          //             <img src={ezi} />
          //           </div>
          //           <div className="more-extara-box-tital">
          //             <h6 style={{ fontSize: qrtemplete.linksize }}> <a href={qrtemplete.links}>
          //               {qrtemplete.linktext}
          //             </a>  </h6>
          //             <p>Descripción lorem ipsum dolor</p>
          //           </div>
          //           <svg class="MuiSvgIcon-root jss1585 jss1588" focusable="false" viewBox="0 0 16 16" aria-hidden="true"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 7 7-7 7"></path></svg>
          //         </div>
          //     </div>
          //   </div>
          // </div> 


          <div className='templetes1' style={{ backgroundImage: `url(${qrtemplete.selectedCover || rain})`, }}>
          <div className='grad' style={{ background: ` linear-gradient( ${qrtemplete.top}  0%, ${qrtemplete.bottom}  ` }}>
            <div className='setlogs kg-box more-plus1'>
              <p className='logsp kg1' style={{ fontFamily: qrtemplete.desFont, fontSize: qrtemplete.descriptionsize }}>
                {qrtemplete.company ? qrtemplete.company : 'developer'}
              </p>
              <div className="gola-white-box">
                <span className='logsspan kg2' style={{ fontFamily: qrtemplete.titleFont, fontSize: qrtemplete.titlesize }}>
                  {qrtemplete.titletext ? qrtemplete.titletext : 'Full Stack dev'}
                </span>
                <h3> {qrtemplete.desctext ? qrtemplete.desctext : 'Our selection of burgers will surprise you. Their flavour will delight you.'}
                  </h3>
              </div>
              <div className="logslink more-extara-box hide-in">
                <div className="logslink--img-extara">
                  {/* <img src={ezi} /> */}
                </div>
                <div className="more-extara-box-tital">
                  <h6 style={{ fontSize: linksize }}> <a href={qrtemplete.url}>
                    Uploaded PDF
                  </a>  </h6>
                  {/* <p>Descripción lorem ipsum dolor</p> */}
                </div>
                <svg class="MuiSvgIcon-root jss1585 jss1588" focusable="false" viewBox="0 0 16 16" aria-hidden="true"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 7 7-7 7"></path></svg>
              </div>
             
            </div>
          </div>
        </div>
              )}



            {qrtemplete.tempno === 4 && (
            // <div className='templetes1' style={{ backgroundImage: `url(${qrtemplete.selectedCover || rain})`, }}>
            // <div className='grad' style={{ background: `  ${qrtemplete.bottom}  ` }}>
            //   <div className='setlogs kg-box'>
            //     <p className='logsp kg1' style={{ fontFamily: qrtemplete.desFont, fontSize: qrtemplete.descriptionsize }}>
            //       {qrtemplete.desctext ? qrtemplete.desctext : 'developer'}
            //     </p>
            //     <img className='logsimage' src={qrtemplete.selectedImage || logo} alt="Link" />
            //     <span className='logsspan kg2' style={{ fontFamily: qrtemplete.titleFont, fontSize: qrtemplete.titlesize }}>
            //       {qrtemplete.titletext ? qrtemplete.titletext : 'Full Stack dev'}
            //     </span>
            //     <h3>Our selection of burgers will surprise you. Their flavour will delight you.</h3>
            //     <br />
            //       <div className="logslink more-extara-box">
            //         <div className="logslink--img-extara">
            //           <img src={ezi} />
            //         </div>
            //         <div className="more-extara-box-tital">
            //           <h6 style={{ fontSize: qrtemplete.linksize }}> <a href={qrtemplete.links}>
            //             {qrtemplete.linktext}
            //           </a>  </h6>
            //           <p>Descripción lorem ipsum dolor</p>
            //         </div>
            //         <svg class="MuiSvgIcon-root jss1585 jss1588" focusable="false" viewBox="0 0 16 16" aria-hidden="true"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 7 7-7 7"></path></svg>
            //       </div>
            //       <div className="logslink more-extara-box">
            //         <div className="logslink--img-extara">
            //           <img src={ezi} />
            //         </div>
            //         <div className="more-extara-box-tital">
            //           <h6 style={{ fontSize: qrtemplete.linksize }}> <a href={qrtemplete.links}>
            //             {qrtemplete.linktext}
            //           </a>  </h6>
            //           <p>Descripción lorem ipsum dolor</p>
            //         </div>
            //         <svg class="MuiSvgIcon-root jss1585 jss1588" focusable="false" viewBox="0 0 16 16" aria-hidden="true"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 7 7-7 7"></path></svg>
            //       </div>
            //   </div>
            // </div>
            // </div>

            <div className='templetes1' style={{ backgroundImage: `url(${qrtemplete.selectedCover || rain})`, }}>
            <div className='grad' style={{ background: `  ${qrtemplete.bottom}  ` }}>
              <div className='setlogs kg-box'>
                <p className='logsp kg1' style={{ fontFamily: qrtemplete.esFont, fontSize: qrtemplete.descriptionsize }}>
                  {qrtemplete.company ? qrtemplete.company : 'developer'}
                </p>
                <img className='logsimage' src={qrtemplete.selectedImage || logo} alt="Link" />
                <span className='logsspan kg2' style={{ fontFamily: qrtemplete.titleFont, fontSize: qrtemplete.titlesize }}>
                  {qrtemplete.titletext ? qrtemplete.titletext : 'Full Stack dev'}
                </span>
                <h3>{qrtemplete.desctext ? qrtemplete.desctext:'Our selection of burgers will surprise you. Their flavour will delight you.'}
                  </h3>
                <br />
                <div className="logslink more-extara-box">
                  <div className="logslink--img-extara">
                    {/* <img src={ezi} /> */}
                  </div>
                  <div className="more-extara-box-tital">
                    <h6 style={{ fontSize: linksize }}> <a href={qrtemplete.url}>
                      Uploaded PDF
                    </a>  </h6>
                    
                  </div>
                  <svg class="MuiSvgIcon-root jss1585 jss1588" focusable="false" viewBox="0 0 16 16" aria-hidden="true"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 7 7-7 7"></path></svg>
                </div>
               
              </div>
            </div>
          </div>
            )}


            </div>



)}
</div>
:
<div>

</div>


      }
     
    

    </div>
  );
};

export default PdfScreenView;
