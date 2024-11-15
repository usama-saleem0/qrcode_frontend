// NewQR_Website.js INNER 
import React, { useEffect, useState } from 'react';
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
import rain from "../../img/Social1.png";
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
import blank from "../../img/phoneblank.png";



import hide from "../../img/hide.webp";

import ImageUploader from 'react-image-upload'
import 'react-image-upload/dist/index.css'





import { Container, ProgressBar } from 'react-bootstrap';
import axios from 'axios';
import { baseurl } from '../../baseurl';
import { toast, ToastContainer } from 'react-toastify';
import { useNavigate, useParams } from 'react-router-dom';



const LandingQr
 = () => {



  
  const [bottom, setbottom] = useState('#262096');
  const [top, settop] = useState('#070722');
  const [input, setinput] = useState('');
  const [titleFont, setTitleFont] = useState('Lato');
  const [desFont, setdesFont] = useState('Lato');
  const [color, setColor] = useState('#000000');
  const [showSplash, setShowSplash] = useState(false);
  const [selectedsplash, setSelectedSplash] = useState(null);
  const [showtempanimation, showAnimation] = useState(false);
  const [fieldsButton, setfieldsButton] = useState([]);
  const [isButtonFieldAdded, setisButtonFieldAdded] = useState(false);
  const [SearchAddress, setSearchAddress] = useState('Address');
  const [value, setValue] = useState('More than fifteen years of');
  const [selectedCover, setSelectedCover] = useState(null);
  const [TitleEvent, setTitleEvent] = useState('Title Event');
  const [DescriptionEvent, setDescriptionEvent] = useState('Description Event');
  const [ButtonDescription, setButtonDescription] = useState('Button Description');
  const [ButtonURl, setButtonURl] = useState('Button URL');
  const [Sincedate, setSincedate] = useState('');
  const [Untildate, setUntildate] = useState('');
  const [URLtab, setURLtab] = useState('');
  const [Latitude, setLatitude] = useState('');
  const [Longitude, setLongitude] = useState('');
  const [FirstName, setFirstName] = useState('');
  const [Website, setWebsite] = useState('');
  const [fieldsEmail, setfieldsEmail] = useState([]);
  const [isEmailFieldAdded, setisEmailFieldAdded] = useState(false);
  const [Email, setEmail] = useState('@gmail.com');
  const [fieldsPhone, setfieldsPhone] = useState([]);
  const [Phone, setPhone] = useState('92232424');
  const [isPhoneFieldAdded, setisPhoneFieldAdded] = useState(false);
  const [titletext, setTitletext] = useState('New Product');
  const [desctext, setDesctext] = useState('Take a retro look with the new shoes inspired by the basketball legend and feel the culture of the sport in every step');
  const [price, setPrice] = useState('');
  const [selectedlogo, setSelectedLogo] = useState(null);
  
  const [isChecked, setIsSwitchOn] = useState(false);
  const [isSwitchOnss, setIsSwitchOnss] = useState(false);
  const [password, setPassword] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');




  const { id } = useParams();
  useEffect(() => {

    if(id){

      console.log('params id', id)

      fetchLandingQr(id)




    }
   


  
  }, []);


  const fetchLandingQr = async (id) => {
   
    try {
      const response = await axios.get(`${baseurl}/getLandingQr/${id}`);
      setSelectedSplash(response.data.data.animationimage)
      setbottom(response.data.data.bottom)
      setdesFont(response.data.data.desFont)
      setDesctext(response.data.data.desctext)
      setPrice(response.data.data.price)
      setSelectedLogo(response.data.data.selectedlogo)
      showAnimation(response.data.data.showanimation)
      setTitleFont(response.data.data.titleFont)
      setTitletext(response.data.data.titletext)

     


      






     
    } catch (error) {
      console.error('Error fetching QR code by ID:', error);
    }
  };



  function runAfterImageDelete(file) {
    console.log({ file })
  }



  async function getImageFileObjectss(imageFile) {
    const file = imageFile.file;

    if (file instanceof Blob || file instanceof File) {
      try {

        const uploadPreset = "tixx1a8u"

        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', uploadPreset);

        const response = await fetch(`https://api.cloudinary.com/v1_1/degjqq6vo/upload`, {
          method: 'POST',
          body: formData,
        });

        const data = await response.json();
        console.log('Upload successful:', data.url);

        setSelectedLogo(data.url);  // Set the image URL from Cloudinary
      } catch (error) {
        console.error('Upload failed:', error);
      }
    } else {
      console.error("Invalid image file object");
    }

    console.log({ imageFile });
  }


  const showSplashScreen = () => {
    if(showtempanimation){

   
    setShowSplash(true);
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000);
    return () => clearTimeout(timer);
  }
  }

  const handleSwitchToggles = (event) => {
    setIsSwitchOnss(event.target.checked);
  };


  async function getImageFileObjects(imageFile) {
    const file = imageFile.file;

    if (file instanceof Blob || file instanceof File) {

      const uploadPreset = "tixx1a8u"


      try {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', uploadPreset);


        const response = await fetch(`https://api.cloudinary.com/v1_1/degjqq6vo/upload`, {
          method: 'POST',
          body: formData,
        });

        const data = await response.json();
        console.log('Upload successful:', data.url);

        setSelectedSplash(data.url); 
        showAnimation(true);
      } catch (error) {
        console.error('Upload failed:', error);
      }
    } else {
      console.error("Invalid image file object");
    }

    console.log({ imageFile });
  }

  const handleColorChange = (event) => {
    setColor(event.target.value);
  };

  const getUserFromLocalStorage = () => {
    const user = localStorage.getItem('userData');
    return user ? JSON.parse(user) : null;
  };


  const navigate = useNavigate();
  const handleSubmit1 = async (e) => {
    console.log(e, "formDatassss");



    const storedUser = getUserFromLocalStorage();
    const userId = storedUser ? storedUser.id : null;

    console.log(userId, "userId");


    if(id){
      try {
        const response = await axios.post(`${baseurl}/updateLandingTemplete/${id}`, {
        
          desFont,
          titleFont,
          
          titletext,
          desctext,
          price,
          
          selectedlogo,
         
  
          animationimage:selectedsplash,
          showanimation:showtempanimation,
         
          bottom,
        
          userId
        });
  
  
        const data = {
          password,
          startTime,
          endTime,
          url:'https://qrn1.com/landingscreen',
          isChecked,
          id:response.data.data.id,
          type:'Landing',
        userId: userId
          
        };
  
  
        localStorage.setItem('hyperId', response.data.data.id);
  
        toast.success('Successfully Saved press next button now')
    
    
        localStorage.setItem('myData', JSON.stringify(data));
        
        navigate('/Creatqrcode')
  
        console.log('QrCode submitted successfully:', response.data);
      } catch (error) {
  
        console.error('Error submitting form:', error);
  
      }
    }


    else{
      try {
        const response = await axios.post(`${baseurl}/createlandingtemplete`, {
        
          desFont,
          titleFont,
          
          titletext,
          desctext,
          price,
          
          selectedlogo,
         
  
          animationimage:selectedsplash,
          showanimation:showtempanimation,
         
          bottom,
        
          userId
        });
  
  
        const data = {
          password,
          startTime,
          endTime,
          url:'https://qrn1.com/landingscreen',
          isChecked,
          id:response.data.data.id,
          type:'Landing',
          userId: userId
          
        };
  
  
        localStorage.setItem('hyperId', response.data.data.id);
  
        toast.success('Successfully Saved press next button now')
    
    
        localStorage.setItem('myData', JSON.stringify(data));
        
        navigate('/Creatqrcode')
  
        console.log('QrCode submitted successfully:', response.data);
      } catch (error) {
  
        console.error('Error submitting form:', error);
  
      }
  
    }

   
  };


  return (
    <>
    <div className="main-dashbord-contanir">
      <ToastContainer/>
        <div className='NewQR'>
        


          <div className="main-content--b--flex">
            <div className="main-content--b--website">

              <div className="h1-list">
              <h1>Complete the content of the QR</h1>
              </div>
              <div className="main-content--b--website--input">
                <input type="text" id="fname" name="fname" placeholder='Name of your QR code...' />

              </div>

              <div className="NewQR-Website-faq-box">
                <Accordion allowZeroExpanded id="accordionPanelsStayOpenExample" preExpanded={['basicInfo']}>


                <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>

                        <div className="NewQR-Website-faq-box--info">
                          <img src={settingsicon} alt="clock" />
                        </div>
                        <div className="NewQR-Website-faq-box--text">
                          <h2>Appearance</h2>
                          <p>Customize the style and template.</p>
                        </div>


                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                          <path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9" />
                        </svg>
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                     <div className="Configuration--inner--faq-box">


                    <div className="Stats--inner--faq-box">
                        <Accordion allowZeroExpanded>

                        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>

              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                <path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9" />
              </svg>

              Navbar Setting

            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>


            <div className="Border-colour-box">

              <div className="color-input-box">
                <input type="text" value={color} className='new-type' />
                {/* <p>Selected Color: {color}</p> */}
                <input type="color" className=' colorsinput'
                  value={color}
                  onChange={handleColorChange} />
              </div>

            </div>

          </AccordionItemPanel>
        </AccordionItem>



                        </Accordion>
                      </div>
                     </div>

                    </AccordionItemPanel>
                  </AccordionItem>




                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>

                        <div className="NewQR-Website-faq-box--info">
                          <img src={infoicon} alt="clock" />
                        </div>
                        <div className="NewQR-Website-faq-box--text">
                          <h2>Basic Information</h2>
                          <p>Add essiential information</p>
                        </div>


                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                          <path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9" />
                        </svg>
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <div className="Configuration--inner--faq-box">


                        <div className="Stats--inner--faq-box">
                          <Accordion allowZeroExpanded>


                          <AccordionItem>
                              <AccordionItemHeading>
                                <AccordionItemButton>
                                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                                    <path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9" />
                                  </svg>
                                  Information
                                </AccordionItemButton>
                              </AccordionItemHeading>
                              <AccordionItemPanel>
                                <div className="video-input-blocks video-info">
                                 

                                <div className="website--des">


                              <ImageUploader
                                  onFileAdded={(img) => getImageFileObjectss(img)}
                                  onFileRemoved={(img) => runAfterImageDelete(img)}
                                />
                              </div>
                         





                                  <div className="website--des">
                                    <p className='fontstitle'> Title</p>
                                    <input type="text" placeholder="Enter Title" className='w-100'

                                      value={titletext}
                                      onChange={(e) => setTitletext(e.target.value)} />





                                  </div>

                                 
                            


                                  <div className="website--des">
                                    <p className='fontstitle'> Description</p>
                                    <input type="text" placeholder="Enter Description" className='w-100'

                                      value={desctext}
                                      onChange={(e) => setDesctext(e.target.value)}
                                    />





                                  
                                </div>



                                <div className="website--des">
                                    <p className='fontstitle'> Price</p>
                                    <input type="text" placeholder="Enter Description" className='w-100'

                                      value={price}
                                      onChange={(e) => setPrice(e.target.value)}
                                    />





                                  
                                </div>

                              


                               




                                

                                </div>
                              </AccordionItemPanel>
                            </AccordionItem>





                          </Accordion>
                        </div>
                      </div>

                    </AccordionItemPanel>
                  </AccordionItem>



                

                
                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>

                        <div className="NewQR-Website-faq-box--info">
                          <img src={infoicon} alt="clock" />
                        </div>
                        <div className="NewQR-Website-faq-box--text">
                        <h2>Content</h2>
                        <p>All the Details about your Qr Code</p>
                        </div>


                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                          <path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9" />
                        </svg>
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                     <div className="Configuration--inner--faq-box">


                    <div className="Stats--inner--faq-box">
                        <Accordion allowZeroExpanded>


                       


                        <AccordionItem>
                              <AccordionItemHeading>
                                <AccordionItemButton>

                                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                                    <path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9" />
                                  </svg>

                                  Welcome Screen

                                </AccordionItemButton>
                              </AccordionItemHeading>
                              <AccordionItemPanel>


                                <div style={{ width: '30%' }} className='deteleiline'>
                                <ImageUploader
                                      onFileAdded={(img) => getImageFileObjects(img)}
                                      onFileRemoved={(img) => runAfterImageDelete(img)}
                                    />

                                  {/* <div className="imdiv">

                                    <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 60 60" aria-hidden="true" ><path d="M19.24,26.79a8.17,8.17,0,1,0-8.17-8.17A8.17,8.17,0,0,0,19.24,26.79Zm0-14.34a6.17,6.17,0,1,1-6.17,6.17A6.18,6.18,0,0,1,19.24,12.45Z"></path><path d="M56.75,49.34,39.18,29.26a1,1,0,0,0-1.46-.05L25.09,41.84,19.1,35a1,1,0,0,0-.72-.34.93.93,0,0,0-.74.29L3.29,49.29a1,1,0,0,0,1.42,1.42L18.3,37.12,30.14,50.66a1,1,0,0,0,.76.34,1,1,0,0,0,.66-.25,1,1,0,0,0,.09-1.41l-5.24-6,12-12L55.25,50.66A1,1,0,0,0,56,51a1,1,0,0,0,.75-1.66Z"></path></svg>
                                  </div> */}
                                  <div className="brand--back preview "  style={{ backgroundColor: showtempanimation ? 'blue' : 'grey', cursor:'pointer'}}
                                  onClick={showSplashScreen}>

                                    <h5 style={{ color: 'white', fontSize: '15px', fontWeight: 'bold'  }} >Preview</h5>
                                  </div>


                                </div>

                                <div className="iline" style={{flexDirection:'column'}}>
                                  <p>Time (seconds)</p>
                                  <input type="range" style={{width:'100%'}} />
                                  <p style={{display:'flex' , justifyContent:'space-between'}}>
                                    <span>2.5 sec</span>
                                    <span>10 sec</span>
                                  </p>
                                </div>













                              </AccordionItemPanel>
                            </AccordionItem>


                        </Accordion>
                      </div>
                     </div>

                    </AccordionItemPanel>


                    
                  </AccordionItem>


                 

             

                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>

                        <div className="NewQR-Website-faq-box--info">
                          <img src={statsicon} alt="clock" />
                        </div>
                        <div className="NewQR-Website-faq-box--text">
                          <h2>Stats</h2>
                          <p>Key tools and data to evaluate performance.</p>
                        </div>

                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                          <path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9" />
                        </svg>
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>



                      <div className="Stats--inner--faq-box">
                        <Accordion allowZeroExpanded>

                          <AccordionItem>
                            <AccordionItemHeading>
                              <AccordionItemButton>

                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                                  <path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9" />
                                </svg>

                                Schedule a date

                              </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>

                              <p>Set the dates on which your content will be shown through the QR. At the end of that period, it will be disabled.</p>
                              <div class="form-check form-switch" style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                                {/* <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" /> */}

                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  role="switch"
                                  id="flexSwitchCheckDefault"
                                  checked={isSwitchOnss}
                                  onChange={handleSwitchToggles}
                                />
                                <p>Enable time ranges</p>
                              </div>


                              <input type="date" id="Calender" disabled={!isSwitchOnss} value={startTime}
                                onChange={(e) => setStartTime(e.target.value)} ></input>
                              <input type="date" id="Calender" disabled={!isSwitchOnss} value={endTime}
                                onChange={(e) => setEndTime(e.target.value)}></input>
                            </AccordionItemPanel>
                          </AccordionItem>

                          <AccordionItem>
                            <AccordionItemHeading>
                              <AccordionItemButton>

                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                                  <path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9" />
                                </svg>

                                URL Configuration

                              </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>


                              <p>Set the dates on which your content will be shown through the QR. At the end of that period, it will be disabled.</p>
                              <div class="form-check form-switch" style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                                <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                                <p>Enable time ranges</p>
                              </div>

                              <div className="website--des">
                                <p> URL</p>
                                <input type="text" placeholder="Enter website URL" className='w-100' />
                              </div>

                            </AccordionItemPanel>
                          </AccordionItem>

                          <AccordionItem>
                            <AccordionItemHeading>
                              <AccordionItemButton>

                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                                  <path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9" />
                                </svg>

                                Scan Limit

                              </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                              <p>Limit the number of times your QR can be scanned in total.</p>
                              <div class="form-check form-switch" style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                                <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                                <p>Enable Scan Limit</p>
                              </div>

                              <div className="website--des">
                                <input type="text" placeholder="Enter website URL" className='w-100' />
                              </div>

                            </AccordionItemPanel>
                          </AccordionItem>



                        </Accordion>
                      </div>


                    </AccordionItemPanel>
                  </AccordionItem>


                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>

                        <div className="NewQR-Website-faq-box--info">
                          <img src={settingsicon} alt="clock" />
                        </div>
                        <div className="NewQR-Website-faq-box--text">
                          <h2>Configuration</h2>
                          <p>Customize settings to optimize your experience.</p>
                        </div>


                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                          <path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9" />
                        </svg>
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <div className="Configuration--inner--faq-box">


                        <div className="Stats--inner--faq-box">
                          <Accordion allowZeroExpanded>

                            <AccordionItem>
                              <AccordionItemHeading>
                                <AccordionItemButton>

                                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                                    <path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9" />
                                  </svg>

                                  Folder

                                </AccordionItemButton>
                              </AccordionItemHeading>
                              <AccordionItemPanel>

                                <p>Set the dates on which your content will be shown through the QR. At the end of that period, it will be disabled.</p>
                                <div class="form-check form-switch" style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                                  <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                                  <p>Enable time ranges</p>
                                </div>


                                <input type="date" id="Calender" ></input>
                                <input type="date" id="Calender" ></input>
                              </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem>
                              <AccordionItemHeading>
                                <AccordionItemButton>

                                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                                    <path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9" />
                                  </svg>

                                  Domain

                                </AccordionItemButton>
                              </AccordionItemHeading>
                              <AccordionItemPanel>


                                <p>Set the dates on which your content will be shown through the QR. At the end of that period, it will be disabled.</p>
                                <div class="form-check form-switch" style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                                  <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                                  <p>Enable time ranges</p>
                                </div>

                                <div className="website--des">
                                  <p> URL</p>
                                  <input type="text" placeholder="Enter website URL" className='w-100' />
                                </div>

                              </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem>
                              <AccordionItemHeading>
                                <AccordionItemButton>

                                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                                    <path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9" />
                                  </svg>

                                  Password

                                </AccordionItemButton>
                              </AccordionItemHeading>
                              <AccordionItemPanel>
                                <p>Add an access control to display the content and a password will be requested each time the QR is scanned.</p>
                                <div class="form-check form-switch" style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                                  <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                                  <p>Activate password to access the QR code</p>
                                </div>

                                <div className="website--des">
                                  <input type="text" placeholder="Enter password" className='w-100'

                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)} />
                                </div>

                              </AccordionItemPanel>
                            </AccordionItem>



                          </Accordion>
                        </div>
                      </div>

                    </AccordionItemPanel>
                  </AccordionItem>


                </Accordion>
              </div>
            </div>

            <div className="main-content--b--image">

<div className="NewQr-Website-header--ImgSec">

  <h2>Event</h2>
  <span>
    <img src={Pencel} alt="pen" />
  </span>
</div>

<div style={{ position: 'relative' }}>



  <img src={blank} alt="Device Hover" />
  {showSplash ? (
    <div className="splash-screen">
      <div className="splash-image" style={{ backgroundImage: `url(${selectedsplash || rain})` }}></div>
    </div>
  ) : (


    <div className='imagediv'>


      <div className='templetes1' style={{ backgroundImage: `url(${selectedCover || rain})`, }}>


        <div className='grad hover-grad' style={{ background: `#fff ` }}>

          <div className='setlogs hero-li-list-boxz'>



            <div className='hell-box-inside hitx' >



            <span className='logsspan' style={{ fontFamily: titleFont}}>

              {titletext}
              </span>




              <img src={selectedlogo || hide} alt="" />

              <p className='logsp' style={{ fontFamily: desFont}}>
                {desctext}
                {/* { 'Take a retro look with the new shoes inspired by the basketball legend and feel the culture of the sport in every step'} */}
              </p>


             


             
                

                            
              <div className="h5-h6-box-list">
              <h5>From €{price}</h5>

              <h6>Buy</h6>
              </div>

            </div>



          


          </div>


        </div>



      </div>

    </div>

  )}

</div>


<p>IMPORTANT: Remember that you canpreview and test your QR codes by clickingon the icon</p>
{/* <button onClick={handleShowInFullScreen}>Show Full Screen</button> */}
<button onClick={handleSubmit1} className='brand--save abosulutebutton' style={{ width: '60%' }}>
  Next
</button> {/* Save button */}
{/* <button onClick={handleShowInFullScreen} className='brand--save' style={{ width: '60%' }}>
  Save & View
</button> Save button */}
</div>



          </div>


        </div>
        </div>

    </>
  );
};

export default LandingQr
;

