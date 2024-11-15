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
import temp1 from '../../img/pdftemp1.webp'
import temp2 from '../../img/pdftemp2.webp'
import temp3 from '../../img/pdftemp3.webp'
import temp4 from '../../img/pdftemp4.webp'
import temp5 from '../../img/pdftemp5.webp'
import blank from "../../img/phoneblank.png";
import rain from "../../img/Social1.png";
import logo from "../../img/profilelogo.webp";


import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { baseurl } from '../../baseurl';
import ImageUploader from 'react-image-upload'
import 'react-image-upload/dist/index.css'



import { Container, ProgressBar } from 'react-bootstrap';
import CloudinaryUpload from '../../cloundanary/CloudinaryUpload';



const PdfQr = () => {

  const [bottom, setbottom] = useState('#262096');
  const [top, settop] = useState('#070722');
  const [input, setinput] = useState('');


  const [titleFont, setTitleFont] = useState('Lato');
  const [desFont, setdesFont] = useState('Lato');
  const [linksize, setlinkSize] = useState('14px');
  const [titlesize, setTitleSize] = useState('20px');
  const [descriptionsize, setDescriptionSize] = useState('14px');

  const [color, setColor] = useState('#000000');
  const [selectedImage, setSelectedImage] = useState(null);
  // const [selectedCover, setSelectedCover] = useState('../../img/Social1.png');
  const [selectedCover, setSelectedCover] = useState(null);
  const [titletext, setTitletext] = useState('');
  const [desctext, setDesctext] = useState('');
  const [linktext, setLinktext] = useState('Basket Egg');
  const [links, setLinks] = useState('');

  const [linktext2, setLinktext2] = useState('Basket Egg');
  const [links2, setLinks2] = useState('');

  const [linktext3, setLinktext3] = useState('Basket Egg');
  const [links3, setLinks3] = useState('');

  const [isChecked, setIsSwitchOn] = useState(false);
  const [isSwitchOnss, setIsSwitchOnss] = useState(false);
  const [password, setPassword] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [showSplash, setShowSplash] = useState(false);
  const [showtempanimation, showAnimation] = useState(false);
  const [selectedsplash, setSelectedSplash] = useState(null);
  const [imageurl, setImage] = useState('');
  const [isImagedisplay, setImagedisplay] = useState('');
  const [selectedpdf, setselectedpdf] = useState('');
  const [url, setUrl] = useState('');

  const [ispdf, setIspdf] = useState(true);







  const handleCallbackResume = (e) => {
    setImage(e);
    setImagedisplay(e)
    console.log(e, "Clod");
  }


  const navigate = useNavigate();

  async function getImageFileObjectss(imageFile) {
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


  function runAfterImageDelete(file) {
    console.log({ file })
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

  const handleShowInFullScreen = async () => {

    console.log("hello", selectedImage);
    // const cloudinary_uploadts= await handleUploadCloudinary(selectedImage)
    // console.log("hot",cloudinary_uploadts);


    navigate('/fullscreen', {
      state: {
        selectedCover,
        selectedImage,
        color,
        descriptionsize,
        titlesize,
        linksize,
        desFont,
        titleFont,
        top,
        bottom
      }
    });

    handleSubmit1();
  };

  const handleSubmit1 = async (e) => {
    console.log(e, "formDatassss");



    const storedUser = getUserFromLocalStorage();
    const userId = storedUser ? storedUser.id : null;

    console.log(userId, "userId");


    try {
      const response = await axios.post(`${baseurl}/createnewqrtemplete`, {
        selectedCover,
        selectedImage,
        color,
        descriptionsize,
        titlesize,
        linksize,
        desFont,
        titleFont,
        top,
        bottom,
        links: '',
        links2: '',
        links3: '',
        linktext: '',
        linktext2: '',
        linktext3: '',
        userId
      });


      console.log('QrCode submitted successfully:', response.data);
    } catch (error) {

      console.error('Error submitting form:', error);

    }

  };


  const handleSwitchToggles = (event) => {
    setIsSwitchOnss(event.target.checked);
  };
  const handleColorChange = (event) => {
    setColor(event.target.value);
  };



  const handleFontChange = (event) => {
    setTitleFont(event.target.value);
  };


  const handleFontChange1 = (event) => {
    setdesFont(event.target.value);
  };


  const handleLinkChange = (event) => {
    setlinkSize(event.target.value);
  };



  const handleTitleChange = (event) => {
    setTitleSize(event.target.value);
  };


  const handleDescriptionChange = (event) => {
    setDescriptionSize(event.target.value);
  };

  async function getImageFileObject(imageFile) {
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

        setSelectedCover(data.url);  // Set the cover image URL from Cloudinary
      } catch (error) {
        console.error('Upload failed:', error);
      }
    } else {
      console.error("Invalid image file object");
    }

    console.log({ imageFile });
  }

  function runAfterImageDelete(file) {
    console.log({ file })
  }



  async function getImageFileObjects(imageFile) {
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

        setSelectedImage(data.url);  // Set the image URL from Cloudinary
      } catch (error) {
        console.error('Upload failed:', error);
      }
    } else {
      console.error("Invalid image file object");
    }

    console.log({ imageFile });
  }


  // async function handleFileChange  (e)  {
  //   const file = e.target.files[0];
  
  //   if (file) {
  //     // Check if file size exceeds 100MB
  //     if (file.size > 100 * 1024 * 1024) {
  //       alert("File size exceeds 100MB limit.");
  //       return;
  //     }


  //     try {

  //       const uploadPreset = "tixx1a8u"

  //       const formData = new FormData();
  //       formData.append('file', file);
  //       formData.append('upload_preset', uploadPreset);

  //       const response = await fetch(`https://api.cloudinary.com/v1_1/degjqq6vo/upload`, {
  //         method: 'POST',
  //         body: formData,
  //       });

  //       const data = await response.json();
  //       console.log('Upload successful:', data.url);

  //       // setSelectedImage(data.url);  
  //     } catch (error) {
  //       console.error('Upload failed:', error);
  //     }
  
  //     // Further processing (e.g., upload or display)
  //     console.log("File selected:", file.name);
  //   }
  // }

  async function handleFileChange(e) {
    const file = e.target.files[0];
  
    if (file) {
      if (file.size > 100 * 1024 * 1024) {
        alert("File size exceeds 100MB limit.");
        return;
      }
      const uploadPreset = "tixx1a8u";
      const formData = new FormData();
      formData.append('pdf', file);
        

    try {
      const response = await axios.post(`${baseurl}/upload`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log(response.data)

      setselectedpdf(response.data.data)
      setIspdf(true)
      const urlshow = `http://localhost:5000/storage/${response.data.data}`
      setUrl(urlshow)
      // setUploadStatus(`Upload successful: ${response.data.url}`);
    } catch (error) {
      // setUploadStatus('Upload failed');
    }
  
      // try {
      //   const uploadPreset = "tixx1a8u"; // Your upload preset
  
      //   const formData = new FormData();
      //   formData.append('file', file);
      //   formData.append('upload_preset', uploadPreset);
      //   formData.append('resource_type', 'raw'); // Upload as raw file type
  
      //   const response = await fetch(`https://api.cloudinary.com/v1_1/degjqq6vo/upload`, {
      //     method: 'POST',
      //     body: formData,
      //   });
  
      //   const data = await response.json();
      //   console.log('Upload successful:', data.url);
  
      //   // Open the PDF in a new tab
      //   window.open(data.url);
      // } catch (error) {
      //   console.error('Upload failed:', error);
      // }
    }
  }
  



  const setTempColor = (bottom, top, input) => {

    setbottom(bottom)
    settop(top)
    setinput(input)


  }

  const getUserFromLocalStorage = () => {
    const user = localStorage.getItem('userData');
    return user ? JSON.parse(user) : null;
  };

  return (
    <>
      <div className="main-dashbord-contanir">
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

                                  Select Template

                                </AccordionItemButton>
                              </AccordionItemHeading>
                              <AccordionItemPanel>

                                <div className='imagediv' style={{ width: '70%' }}>


                                  <div className="imdiv">

                                    <img className='tempimage' src={temp1} />
                                  </div>
                                  <div className="imdiv">

                                    <img className='tempimage' src={temp2} />
                                  </div>
                                  <div className="imdiv">

                                    <img className='tempimage' src={temp3} />
                                  </div>

                                  <div className="imdiv">

                                    <img className='tempimage' src={temp4} />
                                  </div>
                                  <div className="imdiv">

                                    <img className='tempimage' src={temp5} />
                                  </div>






                                </div>



                              </AccordionItemPanel>
                            </AccordionItem>


                            <AccordionItem>
                              <AccordionItemHeading>
                                <AccordionItemButton>

                                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                                    <path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9" />
                                  </svg>

                                  Design

                                </AccordionItemButton>
                              </AccordionItemHeading>
                              <AccordionItemPanel>

                                <p>
                                  Colour Palette *
                                </p>

                                <div className='imagediv' style={{ paddingBottom: '10px' }}>


                                  <div className="colordivs" onClick={() => setTempColor('#EE7E66', '#0B2660', '#FDF5ED')}>

                                    <div className='colordiv' style={{ backgroundColor: '#EE7E66' }}></div>
                                    <div className='colordiv' style={{ backgroundColor: '#FDF5ED' }}></div>

                                    <div className='colordiv' style={{ backgroundColor: '#0B2660' }}></div>

                                  </div>
                                  <div className="colordivs" onClick={() => setTempColor('#28EDC9', '#070722', '#FDF5ED')}>

                                    <div className='colordiv' style={{ backgroundColor: '#28EDC9' }}></div>
                                    <div className='colordiv' style={{ backgroundColor: '#FDF5ED' }}></div>
                                    <div className='colordiv' style={{ backgroundColor: '#070722' }}></div>

                                  </div>
                                  <div className="colordivs" onClick={() => setTempColor('#28ED28', '#070722', '#FDF5ED')}>

                                    <div className='colordiv' style={{ backgroundColor: '#28ED28' }}></div>
                                    <div className='colordiv' style={{ backgroundColor: '#FDF5ED' }}></div>
                                    <div className='colordiv' style={{ backgroundColor: '#070722' }}></div>

                                  </div>

                                  <div className="colordivs" onClick={() => setTempColor('#EDE728', '#070722', '#FDF5ED')}>

                                    <div className='colordiv' style={{ backgroundColor: '#EDE728' }}></div>
                                    <div className='colordiv' style={{ backgroundColor: '#FDF5ED' }}></div>
                                    <div className='colordiv' style={{ backgroundColor: '#070722' }}></div>

                                  </div>

                                  <div className="colordivs" onClick={() => setTempColor('#ED4C28', '#070722', '#FDF5ED')}>

                                    <div className='colordiv' style={{ backgroundColor: '#ED4C28' }}></div>
                                    <div className='colordiv' style={{ backgroundColor: '#FDF5ED' }}></div>
                                    <div className='colordiv' style={{ backgroundColor: '#070722' }}></div>

                                  </div>

                                  <div className="colordivs" onClick={() => setTempColor('#3D656B', '#070722', '#FDF5ED')}>

                                    <div className='colordiv' style={{ backgroundColor: '#3D656B' }}></div>
                                    <div className='colordiv' style={{ backgroundColor: '#FDF5ED' }}></div>
                                    <div className='colordiv' style={{ backgroundColor: '#070722' }}></div>

                                  </div>

                                  <div className="colordivs" onClick={() => setTempColor('#093A32', '#070722', '#FDF5ED')}>

                                    <div className='colordiv' style={{ backgroundColor: '#093A32' }}></div>
                                    <div className='colordiv' style={{ backgroundColor: '#FDF5ED' }}></div>
                                    <div className='colordiv' style={{ backgroundColor: '#070722' }}></div>


                                  </div>





                                </div>


                              </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem>
                              <AccordionItemHeading>
                                <AccordionItemButton>

                                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                                    <path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9" />
                                  </svg>

                                  Fonts

                                </AccordionItemButton>
                              </AccordionItemHeading>
                              <AccordionItemPanel>



                                <div className="iline">




                                  <div className="website--des">
                                    <p className='fontstitle'> Title</p>
                                    {/* <input type="text" placeholder="Enter website URL" className='w-100' /> */}


                                    <div className="selet-hero" style={{ width: '100%' }} >

                                      <select name="cars" id="cars" style={{ borderRadius: '20px' }}

                                        value={titleFont} // Set the current selected option
                                        onChange={handleFontChange} >
                                        <option value="Lato">Lato</option>
                                        <option value="circular">circular</option>
                                        <option value="cursive">cursive</option>
                                        <option value="emoji">emoji</option>
                                        <option value="fangsong">fangsong</option>
                                        <option value="fantasy">fantasy</option>
                                        <option value="math">math</option>
                                        <option value="monospace">monospace</option>
                                        <option value="sans-serif">sans-serif</option>
                                        <option value="serif">serif</option>
                                        <option value="system-ui">system-ui</option>
                                        <option value="ui-monospace">ui-monospace</option>
                                        <option value="ui-rounded">ui-rounded</option>
                                        <option value="ui-sans-serif">ui-sans-serif</option>
                                        <option value="ui-serif">ui-serif</option>




                                      </select>
                                    </div>



                                  </div>



                                  <div className="website--des">
                                    <p className='fontstitle'> Text</p>
                                    {/* <input type="text" placeholder="Enter website URL" className='w-100' /> */}


                                    <div className="selet-hero" style={{ width: '100%' }} >

                                      <select name="cars" id="cars" style={{ borderRadius: '20px' }}

                                        value={desFont} // Set the current selected option
                                        onChange={handleFontChange1}>
                                        <option value="Lato">Lato</option>
                                        <option value="circular">circular</option>
                                        <option value="cursive">cursive</option>
                                        <option value="emoji">emoji</option>
                                        <option value="fangsong">fangsong</option>
                                        <option value="fantasy">fantasy</option>
                                        <option value="math">math</option>
                                        <option value="monospace">monospace</option>
                                        <option value="sans-serif">sans-serif</option>
                                        <option value="serif">serif</option>
                                        <option value="system-ui">system-ui</option>
                                        <option value="ui-monospace">ui-monospace</option>
                                        <option value="ui-rounded">ui-rounded</option>
                                        <option value="ui-sans-serif">ui-sans-serif</option>
                                        <option value="ui-serif">ui-serif</option>

                                      </select>
                                    </div>



                                  </div>
                                </div>

                              </AccordionItemPanel>
                            </AccordionItem>

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



                                {/* <div className="website--des">
                             
                           

                             
                              <div className="color-input-box">
                            <input type="text" className='new-type' />
                            <input type="color" className='color-name' />
                          </div>


                              </div> */}

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

                        <div className="NewQR-Website-faq-box--clock">
                          <img src={ClockIcon} alt="clock" />
                        </div>
                        <div className="NewQR-Website-faq-box--text">
                          <h2>Time Scheduling</h2>
                          <p>Create the time changes for your bussiness and then apply them  to your products</p>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                          <path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9" />
                        </svg>
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <div class="form-check form-switch" style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                        <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                        <p>Enable time ranges</p>
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

                                  PDF

                                </AccordionItemButton>
                              </AccordionItemHeading>
                              <AccordionItemPanel>

                                {/* <div className='uploadimage' style={{ border: '2px dashed red' }}>
                                  <div className='aligments'>


                                    <div className="brand--back delete " style={{ backgroundColor: '#2947c7', width: '250px' }}>

                                      <h5 style={{ color: 'white' }}>Upload Pdf</h5>
                                    </div>

                                    <span className='maximun'>
                                      Maximum size: 100MB
                                    </span>
                                  </div>
                                </div> */}

                <div className='uploadimage' style={{ border: '2px dashed red' }}>
                  <div className='aligments'>
                    <div className="brand--back delete" style={{ backgroundColor: '#2947c7', width: '250px' }}>
                      <h5 style={{ color: 'white' , alignItems:'flex-start' , justifyContent:'flex-end' }}>Upload PDF</h5>
                      <input 
                      type="file" 
                      accept="application/pdf" 
                      onChange={(e) => handleFileChange(e)} 
                      style={{ marginTop: '10px' , opacity:'0' }} 
                    />
                    </div>

                   

                  {/* <CloudinaryUpload isImagedisplay={isImagedisplay} cloudName={handleCallbackResume} number={"1"} /> */}

                    <span className='maximun'>
                      Maximum size: 100MB
                    </span>
                  </div>
                </div>

                                <br />


                                <h3>
                                  PDF information
                                </h3>

                                <div className="website--des">
                                  <p className='fontstitle'> Company</p>
                                  <input type="text" placeholder="Eg." className='w-100' />


                                </div>



                                <div className="website--des">
                                  <p className='fontstitle'> PDF title</p>
                                  <input type="text" placeholder="Eg." className='w-100' />


                                </div>


                                <div className="website--des">
                                  <p className='fontstitle'>Description</p>
                                  <input type="text" placeholder="Eg." className='w-100' />


                                </div>


                                <div className="website--des">
                                  <p className='fontstitle'>Website</p>
                                  <input type="text" placeholder="Eg." className='w-100' />


                                </div>


                                <div className="website--des">
                                  <p className='fontstitle'>Button</p>
                                  <input type="text" placeholder="Eg." className='w-100' />


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
                                      onFileAdded={(img) => getImageFileObjectss(img)}
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

                                <p>Organize your QR codes in different folders.</p>




                                <div className="website--des">



                                  <div className="selet-hero" style={{ width: '100%' }} >

                                    <select name="cars" id="cars" style={{ borderRadius: '20px' }}>
                                      <option value="WEP">No folder</option>
                                      <option value="WPA">Create folder</option>

                                    </select>
                                  </div>



                                </div>

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
                      </div>

                    </AccordionItemPanel>
                  </AccordionItem>


                </Accordion>
              </div>
            </div>


            <div className="main-content--b--image">

              <div className="NewQr-Website-header--ImgSec">

                <h2>PDF</h2>
                <span>
                  <img src={Pencel} alt="pen" />
                </span>
              </div>
              <div style={{ position: 'relative' }}>



                <img src={blank} alt="Device Hover" />

                {showSplash ? (
        <div className="splash-screen">
          <div className="splash-image" style={{backgroundImage: `url(${selectedsplash || rain})`}}></div>
        </div>
      ) : (

      

                <div className='templetes1' style={{ backgroundImage: `url(${selectedCover || rain})`, }}>


                  <div className='grad' style={{ background: `linear-gradient(0deg, ${bottom} 0%, ${top} 71%, #00d4ff00 100%)` }}>

                    <div className='setlogs'>
                      <img className='logsimage' src={selectedImage || logo} alt="Link" />
                      <br />

                      <span className='logsspan' style={{ fontFamily: titleFont, fontSize: titlesize }}>

                        {titletext ? titletext : 'Full Stack dev'}
                      </span>
                      <p className='logsp' style={{ fontFamily: desFont, fontSize: descriptionsize }}>
                        {desctext ? desctext : 'developer'}
                      </p>
                      <div className="logsicon">
                        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><circle fill='#bd081c' cx='16' cy='16' r='16' /><path fill='#fff' d='M22.93,12.94c0,4-2.25,7-5.55,7a2.91,2.91,0,0,1-2.51-1.28s-.6,2.37-.73,2.83a11.16,11.16,0,0,1-1.85,3.37.14.14,0,0,1-.2,0,.1.1,0,0,1,0-.07,11.06,11.06,0,0,1,0-3.91l1.32-5.61a4.17,4.17,0,0,1-.33-1.63c0-1.51.89-2.67,2-2.67a1.38,1.38,0,0,1,1.39,1.55,22,22,0,0,1-.91,3.65,1.6,1.6,0,0,0,1.15,1.94,1.47,1.47,0,0,0,.47,0c1.95,0,3.27-2.5,3.27-5.47,0-2.26-1.51-3.94-4.28-3.94a4.87,4.87,0,0,0-5.07,4.93,2.94,2.94,0,0,0,.68,2,.49.49,0,0,1,.14.58c0,.19-.16.64-.21.82a.38.38,0,0,1-.45.29l-.06,0c-1.44-.59-2.11-2.16-2.11-3.93C9.07,10.54,11.54,7,16.43,7,20.35,7,22.93,9.88,22.93,12.94Z' /></svg>

                        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><circle fill='#bd081c' cx='16' cy='16' r='16' /><path fill='#fff' d='M22.93,12.94c0,4-2.25,7-5.55,7a2.91,2.91,0,0,1-2.51-1.28s-.6,2.37-.73,2.83a11.16,11.16,0,0,1-1.85,3.37.14.14,0,0,1-.2,0,.1.1,0,0,1,0-.07,11.06,11.06,0,0,1,0-3.91l1.32-5.61a4.17,4.17,0,0,1-.33-1.63c0-1.51.89-2.67,2-2.67a1.38,1.38,0,0,1,1.39,1.55,22,22,0,0,1-.91,3.65,1.6,1.6,0,0,0,1.15,1.94,1.47,1.47,0,0,0,.47,0c1.95,0,3.27-2.5,3.27-5.47,0-2.26-1.51-3.94-4.28-3.94a4.87,4.87,0,0,0-5.07,4.93,2.94,2.94,0,0,0,.68,2,.49.49,0,0,1,.14.58c0,.19-.16.64-.21.82a.38.38,0,0,1-.45.29l-.06,0c-1.44-.59-2.11-2.16-2.11-3.93C9.07,10.54,11.54,7,16.43,7,20.35,7,22.93,9.88,22.93,12.94Z' /></svg>

                        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><circle fill='#bd081c' cx='16' cy='16' r='16' /><path fill='#fff' d='M22.93,12.94c0,4-2.25,7-5.55,7a2.91,2.91,0,0,1-2.51-1.28s-.6,2.37-.73,2.83a11.16,11.16,0,0,1-1.85,3.37.14.14,0,0,1-.2,0,.1.1,0,0,1,0-.07,11.06,11.06,0,0,1,0-3.91l1.32-5.61a4.17,4.17,0,0,1-.33-1.63c0-1.51.89-2.67,2-2.67a1.38,1.38,0,0,1,1.39,1.55,22,22,0,0,1-.91,3.65,1.6,1.6,0,0,0,1.15,1.94,1.47,1.47,0,0,0,.47,0c1.95,0,3.27-2.5,3.27-5.47,0-2.26-1.51-3.94-4.28-3.94a4.87,4.87,0,0,0-5.07,4.93,2.94,2.94,0,0,0,.68,2,.49.49,0,0,1,.14.58c0,.19-.16.64-.21.82a.38.38,0,0,1-.45.29l-.06,0c-1.44-.59-2.11-2.16-2.11-3.93C9.07,10.54,11.54,7,16.43,7,20.35,7,22.93,9.88,22.93,12.94Z' /></svg>


                      </div>


                    <div>

                    <iframe
              src={url}
              width="100%"
              height="100%"
              style={{ border: 'none' }}
              title="PDF Viewer"
            ></iframe>
                    </div>


                    </div>


                  </div>



                </div>
     )
}

              </div>


              <p>IMPORTANT: Remember that you canpreview and test your QR codes by clickingon the icon</p>

              {/* <button onClick={handleShowInFullScreen}>Show Full Screen</button> */}
              <button onClick={handleShowInFullScreen} className='brand--save' style={{ width: '60%' }}>
                Save & View
              </button> {/* Save button */}

            </div>



          </div>


        </div>
      </div>

    </>
  );
};

export default PdfQr;

