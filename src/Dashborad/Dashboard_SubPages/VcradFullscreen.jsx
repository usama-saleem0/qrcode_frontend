import React, { useState, useEffect } from 'react';
import logo from "../../img/profilelogo.webp";
import { baseurl } from '../../baseurl';
import axios from 'axios';
import moreinfo from "../../img/more-info.png";
import { useParams } from 'react-router-dom';


const VcradFullscreen = () => {
  
  const [qrtemplete, setQrtemplete] = useState(null);


  const fetchQRtepmlete = async (id) => {
    try {
      const response = await axios.get(`${baseurl}/getqrtempleteVcardById/${id}`);
      setQrtemplete(response.data.data); // Directly set the template object
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

     
  }, []);
  

  const gotonew = () => {
    const data = {};
    localStorage.setItem('myData', JSON.stringify(data));
  };

  return (
    <div className='fullscreen'>
    <div className='templetes1'>

<div className='grad' style={{ background: `#fff` }}>
  <div className='setlogs   content -box-1' >

    <div className="bg-my-box-code" style={{ background: `${qrtemplete?.bottom}` }}>
      <img className='logsimage' src={qrtemplete?.selectedImage || logo} alt="Link" />
      <br />

      <span className='logsspan' style={{ fontFamily: qrtemplete?.titleFont }}>

        {qrtemplete?.name || 'Full Stack dev'}

      </span>
      <p className='logsp' style={{ fontFamily: qrtemplete?.desFont }}>
        {qrtemplete?.surname || 'developer'}
      </p>


      <div className="content-icom-email-box">

        <div className="content-icom-email-card">
          <div className='spa-icon-content' style={{ background: `${qrtemplete?.top}` }}>
              <svg className="MuiSvgIcon-root" focusable="false" viewBox="0 0 20 20" aria-hidden="true">
                <path d="M9.105 7.38l-2.829 2.829c-1.040 1.040-2.729 1.040-3.771 0l-0.943-0.943c-2.083-2.084-2.083-5.46 0-7.544l0.943-0.943c1.041-1.040 2.731-1.040 3.771 0l2.829 2.829c1.041 1.041 1.041 2.729 0 3.771z"></path>
                <path d="M18.695 16.97l-0.943 0.943c-2.084 2.084-5.46 2.084-7.543 0l-0.943-0.943c-1.041-1.041-1.041-2.729 0-3.771l2.828-2.829c1.041-1.040 2.731-1.040 3.771 0l2.829 2.829c1.041 1.041 1.041 2.729 0 3.771z"></path>
                <path d="M13.026 17.763v0c-0.82 0.819-2.148 0.819-2.967 0l-8.347-8.347c-0.82-0.82-0.82-2.148 0-2.967 0.819-0.82 2.147-0.82 2.965 0l8.348 8.347c0.819 0.82 0.819 2.148 0 2.967z"></path>
              </svg>
          </div>
          <p>Call</p>

        </div>


        <div className="content-icom-email-card">
          <div className='spa-icon-content ' style={{ background: `${qrtemplete?.top}` }}>
              <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 16 13" aria-hidden="true"><path d="M14 13H2C0.896 13 0 12.104 0 11V3C0 1.896 0.896 1 2 1H14C15.104 1 16 1.896 16 3V11C16 12.104 15.104 13 14 13Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"></path><path d="M1 1L6.586 6.431C7.367 7.19 8.633 7.19 9.414 6.431L15 1" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M2 11L5 8" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M14 11L11 8" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>
          </div>
          <p>Email</p>
        </div>

        <div className="content-icom-email-card">
          <div className='spa-icon-content ' style={{ background: `${qrtemplete?.top}` }}>
              <svg class="spa-icon-content" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2s.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2s.07-1.35.16-2h4.68c.09.65.16 1.32.16 2s-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2s-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z"></path></svg>

          </div>
          <p>Website</p>
        </div>

      </div>

    </div>




    <div className="Title-box-next-more-box">

      <div className="Title-box-next">
        <span>
          <h3 dangerouslySetInnerHTML={{ __html: qrtemplete?.value }} />

        </span>
      </div>

      <div className="Title-box-next" >
        {qrtemplete?.selectedValuesvg}
        <span>
          <h3>{qrtemplete?.type}</h3>
          <p>{qrtemplete?.PhoneNumber}</p>
        </span>
      </div>

      <div className="Title-box-next">
        <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true" ><path d="M19,4H5A3,3,0,0,0,2,7V17a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V7A3,3,0,0,0,19,4Zm0,2h0l-5.84,5a1.89,1.89,0,0,1-2.34,0L5,6H19Zm0,12H5a1,1,0,0,1-1-1V7.79L9.53,12.5a3.91,3.91,0,0,0,4.94,0L20,7.79V17A1,1,0,0,1,19,18Z"></path><path d="M7.29,13.29l-2,2a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l2-2a1,1,0,0,0-1.42-1.42Z"></path><path d="M16.71,13.29a1,1,0,0,0-1.42,1.42l2,2a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z"></path></svg>
        <span>
          <h3>{qrtemplete?.Email}</h3>
          <p>Email</p>
        </span>
      </div>

      <div className="Title-box-next">
        <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2s.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2s.07-1.35.16-2h4.68c.09.65.16 1.32.16 2s-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2s-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z"></path></svg>
        <span>
          <h3>{qrtemplete?.WebsiteContact}</h3>
          <p>{qrtemplete?.WebsiteContactPersonal || 'Website'}</p>
        </span>
      </div>

      <div className="Title-box-next">
        <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M12,21a1,1,0,0,1-.41-.09C11.28,20.77,4,17.4,4,11.28V11a8,8,0,0,1,16,0,.66.66,0,0,1,0,.14.66.66,0,0,1,0,.14c0,6.12-7.28,9.49-7.59,9.63A1,1,0,0,1,12,21ZM12,5a6,6,0,0,0-6,6v.1s0,.12,0,.15c0,4.14,4.58,6.88,6,7.63,1.42-.75,6-3.5,6-7.6,0,0,0-.16,0-.18s0-.09,0-.1h0A6,6,0,0,0,12,5Z"></path><path d="M12,15a4,4,0,1,1,4-4A4,4,0,0,1,12,15Zm0-6a2,2,0,1,0,2,2A2,2,0,0,0,12,9Z"></path></svg>
        <span>
          <h3>{qrtemplete?.SearchAddress||"Show on map"}</h3>

        </span>
      </div>

      <div className="Title-box-next">
        <svg class="MuiSvgIcon-root jss12" focusable="false" viewBox="0 0 18 19" aria-hidden="true"><path d="M15 18H3C1.896 18 1 17.104 1 16V7C1 5.896 1.896 5 3 5H15C16.104 5 17 5.896 17 7V16C17 17.104 16.104 18 15 18Z" fill-rule="evenodd" clip-rule="evenodd" stroke-width="2"></path><path d="M6 6V3C6 1.896 6.896 1 8 1H10C11.104 1 12 1.896 12 3V6" stroke-width="2"></path><path d="M5 9V12" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M13 9V12" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M2 10H16" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
        <span>
          <h3>{qrtemplete?.companies ||"Companies"}</h3>

        </span>
      </div>

      <div className="Title-box-next">
        <img src={qrtemplete?.selectedImagesinput || moreinfo} alt="" />
      </div>

      <div className="Title-box-next">
        <button style={{ background: `${qrtemplete?.top}` }}><svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 19 20" aria-hidden="true" ><path d="M6 12h4c2.76 0 5 2.24 5 5 0 1.1-0.9 2-2 2h-10c-1.1 0-2-0.9-2-2 0-2.76 2.24-5 5-5z" stroke-linejoin="miter" stroke-linecap="square" stroke-miterlimit="10" stroke-width="2" stroke="currentColor" fill="none"></path><path d="M8 9c1.657 0 3-1.343 3-3s-1.343-3-3-3c-1.657 0-3 1.343-3 3s1.343 3 3 3z" stroke-linejoin="miter" stroke-linecap="square" stroke-miterlimit="10" stroke-width="2" stroke="currentColor" fill="none"></path><path d="M16 1v4" stroke-linejoin="miter" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" stroke="currentColor" fill="none"></path><path d="M18 3h-4" stroke-linejoin="miter" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" stroke="currentColor" fill="none"></path></svg>add contact</button>
      </div>


    </div>



  </div>


</div>



</div>
    </div>
  );
};

export default VcradFullscreen;
