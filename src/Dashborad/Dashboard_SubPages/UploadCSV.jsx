// NewQR_Website.js INNER 
import React, { useState } from 'react';
import DeviceHover from '../../img/Device hover.png';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import Pencel from '../../img/NewQrPencel.png'
import ClockIcon from '../../img/website_clokcicon.png'
import infoicon from '../../img/website_ifnoicon.png'
import statsicon from '../../img/Website_stats.png'
import Questionmarkicon from '../../img/website_quesmark.png'
import settingsicon from '../../img/Website_settingicon.png'
import WebsiteDevice from '../../img/WebsiteDevice.png'
import Defaulttemp from '../../img/defaulttemplate.jpg'
import ezi from '../../img/ezgif.jpg'
import mb15 from "../../img/mb15.png";
import youtube from "../../img/youtube.png";
import ticket from "../../img/ticket.png";
import soundcloud from "../../img/soundcloud.png";
import spotify from "../../img/spotify.png";
import app from "../../img/app.png";
import deezer from "../../img/deezer.png";
import music from "../../img/music.png";
import itunes from "../../img/itunes.png";
import temp1 from "../../img/vcardtemp.webp";
import temp2 from "../../img/vcardtemp2.webp";
import temp3 from "../../img/vcardtemp3.webp";
import temp4 from "../../img/vcardtemp4.webp";
import temp5 from "../../img/vcardtemp5.webp";
import temp6 from "../../img/vcardtemp6.webp";
import qr from "../../img/qr-icon2.webp";




import { Container, ProgressBar } from 'react-bootstrap';



const UploadCSV = () => {
  const [selectedImages, setSelectedImages] = useState('');


  async function handleFileChange(e) {
    const file = e.target.files[0];
  
    if (file) {
      if (file.size > 100 * 1024 * 1024) {
        alert("File size exceeds 100MB limit.");
        return;
      }
   
      try {
        const uploadPreset = "tixx1a8u"; // Your upload preset
  
        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', uploadPreset);
        formData.append('resource_type', 'raw'); // Upload as raw file type
  
        const response = await fetch(`https://api.cloudinary.com/v1_1/degjqq6vo/upload`, {
          method: 'POST',
          body: formData,
        });
  
        const data = await response.json();
        console.log('Upload successful:', data.url);
        setSelectedImages( data.url);
  
       
     
      } catch (error) {
        console.error('Upload failed:', error);
      }
    }
  }

  return (
    <>
    <div className="main-dashbord-contanir">
        <div className='NewQR'>


          <div className="gotit">
            <p>Remember that you are creating qrs in bulk.</p>

            <span className='gotspan'>Got it</span>
          </div>
        


          <div className="main-content--b--flex">
            <div className="main-content--b--website" style={{width:'80%' , paddingRight:'30px  '}}>

              <div className="h1-list">
              <h4>Upload the full CSV</h4>
              </div>
            

              <div className="NewQR-Website-faq-boxss">
              <h5>Choose the folder where your qrs will be stored.</h5>
                              


                              
                              <div className="website--des">
                                
  
                                 
                          <div className="selet-hero" style={{width:'100%'}} >
                             
                            <select name="cars" id="cars" style={{borderRadius:'20px' , color:'black'}}>
                    <option value="WEP">No folder</option>
                    <option value="WPA">Create folder</option>
                    
                  </select>
                          </div>
  
                             
  
                                </div>
              </div>


              <br/>



              <div className="NewQR-Website-faq-boxss">

              <div className="h1-list" style={{width:'100%' , display:'flex' , alignItems:'baseline' , justifyContent:'space-between'}}>
              <h4>Download the CSV example</h4>

              <div style={{width:'30%' , paddingLeft:'20px' , alignItems:'end' , flexDirection:'column'}} className='deteleiline'>
                               
                               <div className="brand--back delete "  style={{alignItems:'stretch'}}>
                               <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true" style={{fontSize:'24px' , fill:'#2947c7' , width:'25px', height:'25px'}}><path d="M11.29,15.71a1,1,0,0,0,.33.21.94.94,0,0,0,.76,0,1,1,0,0,0,.33-.21l4-4a1,1,0,0,0-1.42-1.42L13,12.59V4a1,1,0,0,0-2,0v8.59l-2.29-2.3a1,1,0,1,0-1.42,1.42Z"></path><path d="M20,15a1,1,0,0,0-1,1v3H5V16a1,1,0,0,0-2,0v4a1,1,0,0,0,1,1H20a1,1,0,0,0,1-1V16A1,1,0,0,0,20,15Z"></path></svg>
                           <h5 style={{color:'#2947c7'}}>Download</h5>
                           </div>
 
                               </div>
              </div>
              <br/>

              <hr/>


              <h4>Complete the sample CSV and re-upload it</h4>
              <br/>
{/* 
              <div className='uploadimage'>
                                  <div className='aligments'>


                                <div className="brand--back delete " style={{backgroundColor:'#2947c7', width:'250px'}}>

                                <h5 style={{color:'white'}}>Upload CSV</h5>
                                </div>
                                <br/>

                                <span className='maximun'>
                                The row limit per file for the trial period is 25, subscribe to increase it
                                </span>
                                </div>
                                </div> */}

                    <div className='uploadimage' style={{ border: '2px dashed black' }}>
                              <div className='aligments'>
                                <div className="brand--back delete" style={{ backgroundColor: '#2947c7', width: '250px' , alignItems:'flex-start' , justifyContent:'center' , position:'relative' }}>
                                  <h5 style={{ color: 'white'  }}>Upload CSV</h5>
                                  <input 
                                  type="file" 
                                
                                  onChange={(e) => handleFileChange(e)} 
                                  style={{ marginTop: '10px' , opacity:'0' , position:'absolute' ,width:'100%' , bottom:'-2px' , left:'0px' }} 
                                />
                                </div>

                              

                              {/* <CloudinaryUpload isImagedisplay={isImagedisplay} cloudName={handleCallbackResume} number={"1"} /> */}

                                <span className='maximun'>
                                The row limit per file for the trial period is 25, subscribe to increase it
                                </span>
                              </div>
                            </div>


              </div>
            </div>


            <div className="main-content--b--image" style={{width:'30%'}}>
              
            <div className="NewQr-Website-header--ImgSec">

                    <h2>VCard</h2>
                    <span>
                      <img src={Pencel} alt="pen" />
                    </span>
                    </div>
                  <div className='qrclass'>


              <img src={qr} alt="Device Hover" />

                  </div>
                  <div className="pdiv">

              <p>This is an example of how the QR will look like, it is not the final QR, you will be able to download it individually at the end of the process.</p>
                  </div>
            </div>



          </div>


        </div>
        </div>

    </>
  );
};

export default UploadCSV;

