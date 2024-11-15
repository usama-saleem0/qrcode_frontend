// NewQR_Website.js INNER 
import React, { useEffect, useRef, useState } from 'react';

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
import blank from "../../img/phoneblank.png";
import rain from "../../img/Social1.png";
import logo from "../../img/profilelogo.webp";

import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { baseurl } from '../../baseurl';
import appearanceicon from '../../img/appearanceicon.png'
import ImageUploader from 'react-image-upload'
import 'react-image-upload/dist/index.css'




import { Container, ProgressBar } from 'react-bootstrap';
import { toast, ToastContainer } from 'react-toastify';



const CouponQr = () => {

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
  const [selectedlogo, setSelectedLogo] = useState(null);

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
  const [selectedsplash, setSelectedSplash] = useState(null);
  const [showSplash, setShowSplash] = useState(false);
  const [company, setCompany] = useState('');
  const [website, setWebsiteText] = useState('');
  const [google, Setgoogle] = useState('');
  const [apple, Setapple] = useState('');
  const [amazon, Setamazon] = useState('');

  const [badge, setBadge] = useState('');
  const [buttontext, setButtonText] = useState('');
  const [couponcode, setCouponCode] = useState('');
  const [valid, setValid] = useState(null);
  const [termandcondition, setTermandcondition] = useState('');
  const [couponbutton, setCouponbutton] = useState('');
  const [couponurl, setCouponUrl] = useState('');








  const [showtempanimation, showAnimation] = useState(false);
  





  



  const paragraphRef = useRef(null);

  const [isFlipped, setIsFlipped] = useState(true);


  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {

    if (id) {

      console.log('params id', id)

      fetchCouponQr(id)
    }


    if (paragraphRef.current) {
      paragraphRef.current.style.setProperty('color', 'black', 'important');
    }
  }, []);


  const fetchCouponQr = async (id) => {

    try {
      const response = await axios.get(`${baseurl}/getCouponQr/${id}`);
      console.log(response.data.data.selectedCover);

      setSelectedSplash(response.data.data.animationimage)
      setdesFont(response.data.data.desFont)
      setTitleFont(response.data.data.titleFont)
      setbottom(response.data.data.bottom)
      setDesctext(response.data.data.desctext)
      setCompany(response.data.data.company)
      setTitletext(response.data.data.titletext)
      setSelectedLogo(response.data.data.selectedlogo)
      setBadge(response.data.data.badge)
      setButtonText(response.data.data.buttontext)
      setCouponCode(response.data.data.couponcode)
      setValid(response.data.data.valid)
      setTermandcondition(response.data.data.termandcondition)
      setCouponbutton(response.data.data.couponbutton)
      setCouponUrl(response.data.data.couponurl)
      showAnimation(response.data.data.showanimation)
      setSelectedCover(response.data.data.selectedCover)




      // setSelectedImage(response.data.data.selectedImage)
      // setColor(response.data.data.color)
      // setDescriptionSize(response.data.data.descriptionsize)
      // setLinks(response.data.data.links)
      // setLinks2(response.data.data.links2)
      // setLinks3(response.data.data.links3)
      // setlinkSize(response.data.data.linksize)
      // setLinktext(response.data.data.linktext)
      // setLinktext2(response.data.data.linktext2)
      // setLinktext3(response.data.data.linktext3)
      // setTitleSize(response.data.data.titlesize)
      // settop(response.data.data.top)
      // setinput(response.data.data.input)
      // setIsSwitchOnss(response.data.data.isSwitchOnss)
      // setPassword(response.data.data.password)
      // setWebsiteText(response.data.data.website)
      
    } catch (error) {
      console.error('Error fetching QR code by ID:', error);
    }
  };






  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };
  
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


    
    if (id) {

    try {
      const response = await axios.post(`${baseurl}/updatecoupontemplete/${id}`, {
      
        desFont,
        titleFont,
        company,
        titletext,
        desctext,
        
        selectedlogo,
        badge,
        buttontext,
        couponcode,
        valid,
        termandcondition,
        couponbutton,
        couponurl,

        animationimage:selectedsplash,
        showanimation:showtempanimation,
       
      
      
        bottom,
      
        userId
      });


      const data = {
        password,
        startTime,
        endTime,
        url:'https://qrn1.com/couponscreen',
        isChecked,
        id:response.data.data.id,
        type:'Coupon',
        userId:userId
       
        
      };

      localStorage.setItem('hyperId', response.data.data.id);
      toast.success('Successfully Saved press next button now')
      navigate('/Creatqrcode')
  
  
      localStorage.setItem('myData', JSON.stringify(data));


      console.log('QrCode submitted successfully:', response.data);
    } catch (error) {

      console.error('Error submitting form:', error);

    }
  }

  else {
    try {
      const response = await axios.post(`${baseurl}/createcoupontemplete`, {
      
        desFont,
        titleFont,
        company,
        titletext,
        desctext,
        
        selectedlogo,
        badge,
        buttontext,
        couponcode,
        valid,
        termandcondition,
        couponbutton,
        couponurl,

        animationimage:selectedsplash,
        showanimation:showtempanimation,
       
      
      
        bottom,
      
        userId
      });


      const data = {
        password,
        startTime,
        endTime,
        url:'https://qrn1.com/couponscreen',
        isChecked,
        id:response.data.data.id,
        type:'Coupon',
        userId:userId
        
      };

      localStorage.setItem('hyperId', response.data.data.id);
      toast.success('Successfully Saved press next button now')
      navigate('/Creatqrcode')
  
  
      localStorage.setItem('myData', JSON.stringify(data));


      console.log('QrCode submitted successfully:', response.data);
    } catch (error) {

      console.error('Error submitting form:', error);

    }

  }
  };



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

        setSelectedLogo(data.url);  // Set the image URL from Cloudinary
      } catch (error) {
        console.error('Upload failed:', error);
      }
    } else {
      console.error("Invalid image file object");
    }

    console.log({ imageFile });
  }


const AppLink = (e) => {

  if(e == 'google'){
    Setgoogle(e);

  }

  if(e =='apple'){
    Setapple(e);
  }


  if(e =='amazon'){
    Setamazon(e);
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
                <img src={appearanceicon} alt="clock" />
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

                  {/* DESIGN */}
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

                <div className='colordiv' style={{ backgroundColor: '#EE7E66' , width:'100%' }}></div>
                {/* <div className='colordiv' style={{ backgroundColor: '#FDF5ED' }}></div>

                <div className='colordiv' style={{ backgroundColor: '#0B2660' }}></div> */}

              </div>
              <div className="colordivs" onClick={() => setTempColor('#28EDC9', '#070722', '#FDF5ED')}>

                <div className='colordiv' style={{ backgroundColor: '#28EDC9' , width:'100%' }}></div>
                {/* <div className='colordiv' style={{ backgroundColor: '#FDF5ED' }}></div>
                <div className='colordiv' style={{ backgroundColor: '#070722' }}></div> */}

              </div>
              <div className="colordivs" onClick={() => setTempColor('#28ED28', '#070722', '#FDF5ED')}>

                <div className='colordiv' style={{ backgroundColor: '#28ED28' , width:'100%' }}></div>
                {/* <div className='colordiv' style={{ backgroundColor: '#FDF5ED' }}></div>
                <div className='colordiv' style={{ backgroundColor: '#070722' }}></div> */}

              </div>

              <div className="colordivs" onClick={() => setTempColor('#EDE728', '#070722', '#FDF5ED')}>

                <div className='colordiv' style={{ backgroundColor: '#EDE728' , width:'100%' }}></div>
                {/* <div className='colordiv' style={{ backgroundColor: '#FDF5ED' }}></div>
                <div className='colordiv' style={{ backgroundColor: '#070722' }}></div> */}

              </div>

              <div className="colordivs" onClick={() => setTempColor('#ED4C28', '#070722', '#FDF5ED')}>

                <div className='colordiv' style={{ backgroundColor: '#ED4C28' , width:'100%' }}></div>
                {/* <div className='colordiv' style={{ backgroundColor: '#FDF5ED' }}></div>
                <div className='colordiv' style={{ backgroundColor: '#070722' }}></div> */}

              </div>

              <div className="colordivs" onClick={() => setTempColor('#3D656B', '#070722', '#FDF5ED')}>

                <div className='colordiv' style={{ backgroundColor: '#3D656B' , width:'100%' }}></div>
                {/* <div className='colordiv' style={{ backgroundColor: '#FDF5ED' }}></div>
                <div className='colordiv' style={{ backgroundColor: '#070722' }}></div> */}

              </div>

              <div className="colordivs" onClick={() => setTempColor('#093A32', '#070722', '#FDF5ED')}>

                <div className='colordiv' style={{ backgroundColor: '#093A32' , width:'100%' }}></div>
                {/* <div className='colordiv' style={{ backgroundColor: '#FDF5ED' }}></div>
                <div className='colordiv' style={{ backgroundColor: '#070722' }}></div> */}


              </div>





            </div>


          </AccordionItemPanel>
        </AccordionItem>

        {/* FONT */}
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



     {/* NAVBAR */}
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
                                  Offer information
                                </AccordionItemButton>
                              </AccordionItemHeading>
                              <AccordionItemPanel>
                                <div className="video-input-blocks video-info">
                                 

                                <div className="website--des">


                              <ImageUploader
                                  onFileAdded={(img) => getImageFileObjects(img)}
                                  onFileRemoved={(img) => runAfterImageDelete(img)}
                                />
                              </div>
                          <div className="website--des">
                                  <p className='fontstitle'> Company</p>
                                  <input type="text" placeholder="Eg." className='w-100'
                                  
                                  value={company}
                                  onChange={(e) => setCompany(e.target.value)}/>


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
                                    <p className='fontstitle'> Sales badge</p>
                                    <input type="text" placeholder="Enter Description" className='w-100'

                                      value={badge}
                                      onChange={(e) => setBadge(e.target.value)}
                                    />





                                  
                                </div>


                                <div className="website--des">
                                    <p className='fontstitle'>Button to see the code</p>
                                    <input type="text" placeholder="Enter Description" className='w-100'

                                      value={buttontext}
                                      onChange={(e) => setButtonText(e.target.value)}
                                    />





                                  
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

                                  Coupon Information

                                </AccordionItemButton>
                              </AccordionItemHeading>
                              <AccordionItemPanel>



                              <div className="website--des">
                                    <p className='fontstitle'>Coupon code</p>
                                    <input type="text" placeholder="Enter Code" className='w-100'

                                      value={couponcode}
                                      onChange={(e) => setCouponCode(e.target.value)}
                                    />



                                </div>


                                <div className="website--des">
                                    <p className='fontstitle'>Valid Until</p>
                                    <input type="date" placeholder="Enter Code" className='w-100'

                                      value={valid}
                                      onChange={(e) => setValid(e.target.value)}
                                    />



                                </div>


                                
                                <div className="website--des">
                                    <p className='fontstitle'>Terms and Condition</p>
                                    <textarea type="date" placeholder="term and condition" className='w-100'

                                      value={termandcondition}
                                      onChange={(e) => setTermandcondition(e.target.value)}
                                    />



                                </div>

                            <div style={{display:'flex'}}>

                          
                                <div className="website--des">
                                    <p className='fontstitle'>Button</p>
                                    <input type="text" placeholder="Enter Code" className='w-100'

                                      value={couponbutton}
                                      onChange={(e) => setCouponbutton(e.target.value)}
                                    />



                                </div>

                                <div className="website--des">
                                    <p className='fontstitle'>Url</p>
                                    <input type="text" placeholder="Enter Code" className='w-100'

                                      value={couponurl}
                                      onChange={(e) => setCouponUrl(e.target.value)}
                                    />



                                </div>
                                </div>

                               
                                    <br />  

                              





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









{/* 
                            <AccordionItem>
                              <AccordionItemHeading>
                                <AccordionItemButton>

                                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                                    <path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9" />
                                  </svg>

                                  Customize your button

                                </AccordionItemButton>
                              </AccordionItemHeading>
                              <AccordionItemPanel>




                                <div className="website--des">
                                  <p className='fontstitle'>Google Play</p>
                                  <input type="text" placeholder="Eg." className='w-100' />
                                </div>



                                <div className="website--des">
                                  <p className='fontstitle'>Apple Store</p>
                                  <input type="text" placeholder="Eg." className='w-100' />
                                </div>



                                <div className="website--des">
                                  <p className='fontstitle'>Amazon Appstore</p>
                                  <input type="text" placeholder="Eg." className='w-100' />
                                </div>














                              </AccordionItemPanel>
                            </AccordionItem> */}




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

                <h2>Coupon</h2>
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


<div className='templetes1'>


<div className='grad' style={{ background: `linear-gradient(0deg, ${bottom} 100%, ${top} 0%, #00d4ff00 100%) ` , height:'100%' }}>

      {/* Front Side */}

        {
          isFlipped ?

          <div className='setlogs'>

    
          <h4 style={{color:'white'}}>{company}</h4>
          <br/>

       
          <div className='backimages'  style={{ backgroundImage: `url(${selectedlogo || rain})`, }} onClick={handleFlip}>
            

          </div>

          <div className='backimagess'>
          {/* <div style={{display:'flex' , justifyContent:'space-between'}}> */}

          <p style={{color:'black' , fontSize:'25px'}}>{titletext}</p>
          <div className='offpercent'>{badge}</div>
          {/* </div> */}
          <br/>

          <p>{desctext}</p>


          </div>

          <div className='backimagesss'>
          <button className='offbutton' onClick={handleFlip}>{buttontext}</button>

          </div>


        
          </div>
          
            :
            <div className='setlogs'>

    
            
            <div className='backimagess' style={{height:'30%'}}>
              <div style={{width:'10%'}} onClick={handleFlip}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M463.5 224l8.5 0c13.3 0 24-10.7 24-24l0-128c0-9.7-5.8-18.5-14.8-22.2s-19.3-1.7-26.2 5.2L413.4 96.6c-87.6-86.5-228.7-86.2-315.8 1c-87.5 87.5-87.5 229.3 0 316.8s229.3 87.5 316.8 0c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0c-62.5 62.5-163.8 62.5-226.3 0s-62.5-163.8 0-226.3c62.2-62.2 162.7-62.5 225.3-1L327 183c-6.9 6.9-8.9 17.2-5.2 26.2s12.5 14.8 22.2 14.8l119.5 0z"/></svg>

              </div>

           
           
            <p>Coupon Code </p>

            <br/>
            <h4 style={{color:'orangered'}}>{couponcode}</h4>
            
            <p>{valid}</p>


            </div>

            <div className='backimagesss'>
            <button className='offbutton' ><a href={couponurl} style={{color:'white'}}>{couponbutton}</a></button>

            </div>

            <br/>
            <br/>
            <h3 style={{color:'white'}}>
              Term Of Condition
            </h3>

            <p style={{color:'white'}}>{termandcondition}</p>


          
            </div>
           
        }

      
      

 


          </div>


          </div>
            )}

              </div>


              <p>IMPORTANT: Remember that you canpreview and test your QR codes by clickingon the icon</p>

              {/* <button onClick={handleShowInFullScreen}>Show Full Screen</button> */}
              <button onClick={handleSubmit1} className='brand--save  abosulutebutton' style={{ width: '60%' }}>
               Next
              </button> {/* Save button */}
            </div>



          </div>


        </div>
      </div>

    </>
  );
};

export default CouponQr;

