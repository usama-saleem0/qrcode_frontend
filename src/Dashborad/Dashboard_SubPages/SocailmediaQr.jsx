
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
import temp1 from '../../img/socailtemp1.webp'
import temp2 from '../../img/socailtemp2.webp'
import temp3 from '../../img/socailtemp3.webp'
import temp4 from '../../img/socailtemp4.webp'
import temp5 from '../../img/socailtemp5.webp'
import temp6 from '../../img/socailtemp6.webp'

import logo from "../../img/profilelogo.webp";
import temp7 from '../../img/socailtemp7.webp'
import temp8 from '../../img/socailtemp8.webp'
import rain from "../../img/Social1.png";
import blank from "../../img/phoneblank.png";

import hide from "../../img/hide.webp";


import ezi from '../../img/ezgif.jpg'
import hil from "../../img/hil.svg";
import hil1 from "../../img/hil1.svg";
import hil2 from "../../img/hil2.svg";
import hil3 from "../../img/hil3.svg";
import hil4 from "../../img/hil4.svg";
import appearanceicon from '../../img/appearanceicon.png'



import insta1  from "../../img/white1.svg";

import insta2 from "../../img/white2.svg";


import insta3 from "../../img/white3.svg";


import insta4 from "../../img/white4.svg";



import { Container, ProgressBar } from 'react-bootstrap';
import ImageUploader from 'react-image-upload'
import 'react-image-upload/dist/index.css'
import youtube from "../../img/youtube.png";
import ticket from "../../img/ticket.png";
import soundcloud from "../../img/soundcloud.png";
import spotify from "../../img/spotify.png";
import axios from 'axios';
import { baseurl } from '../../baseurl';
import { toast, ToastContainer } from 'react-toastify';
import { useNavigate, useParams } from 'react-router-dom';




const SocailmediaQr = () => {




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
  const [website, setWebsite] = useState('');
  const [fieldsEmail, setfieldsEmail] = useState([]);
  const [isEmailFieldAdded, setisEmailFieldAdded] = useState(false);
  const [email, setEmail] = useState('@gmail.com');
  const [fieldsPhone, setfieldsPhone] = useState([]);
  const [Phone, setPhone] = useState('92232424');
  const [isPhoneFieldAdded, setisPhoneFieldAdded] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const [isChecked, setIsSwitchOn] = useState(false);
  const [isSwitchOnss, setIsSwitchOnss] = useState(false);
  const [password, setPassword] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');

  const [selectedIcons, setSelectedIcons] = useState([]);
  const [selectedlogo, setSelectedLogo] = useState(null);
  const [titletext, setTitletext] = useState('');
  const [desctext, setDesctext] = useState('');
  const [company, setCompany] = useState('');
  
  const [telephone, setTelephone  ] = useState('');

  


  const icons = [
    { id: 1, name: 'Youtube', icon: youtube, placeholder: 'https://www.flickr.com/' },
    { id: 2, name: 'Spotify', icon: spotify, placeholder: 'https://pinterest.com/' },
    { id: 3, name: 'Soundcloud', icon: soundcloud, placeholder: 'https://www.youtube.com/' },
    { id: 4, name: 'Apple Music', icon: hil , placeholder: 'https://www.youtube.com/' },

 
  ];

  const paragraphRef = useRef(null);



  const { id } = useParams();
 


  const fetchSocailQr = async (id) => {
   
    try {
      const response = await axios.get(`${baseurl}/getSocailQr/${id}`);
      setSelectedSplash(response.data.dataanimationimage)
      setbottom(response.data.data.bottom)
      setdesFont(response.data.data.desFont)
      setDesctext(response.data.data.desctext)
      setEmail(response.data.data.email)
      setSelectedImage(response.data.data.selectedImage)
      showAnimation(response.data.data.showanimation)
      setTelephone(response.data.data.telephone)
      setTitleFont(response.data.data.titleFont)
      setTitletext(response.data.data.titletext)
      setWebsite(response.data.data.website)
      


      






     
    } catch (error) {
      console.error('Error fetching QR code by ID:', error);
    }
  };


  useEffect(() => {


    if(id){

      console.log('params id', id)

      fetchSocailQr(id)




    }
   
    if (paragraphRef.current) {
      paragraphRef.current.style.setProperty('width', '50%', 'important');

      paragraphRef.current.style.setProperty('height', '15vh', 'important');
    }


   
  }, []);
  const setTempColor = (bottom, top, input) => {

    setbottom(bottom)
    settop(top)
    setinput(input)


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


  const handleColorChange = (event) => {
    setColor(event.target.value);
  };

  const handleFontChange = (event) => {
    setTitleFont(event.target.value);
  };


  const handleFontChange1 = (event) => {
    setdesFont(event.target.value);
  }



  
  const handleIconClick = (icon) => {
    if (!selectedIcons.some(item => item.id === icon.id)) {
      setSelectedIcons([...selectedIcons, { ...icon, url: '' }]);
    }
  };

  const handleInputChange = (id, url) => {
    const updatedIcons = selectedIcons.map(icon =>
      icon.id === id ? { ...icon, url } : icon
    );
    setSelectedIcons(updatedIcons);
  };



  const handleInputChange2 = (id, text) => {
    const updatedIcons = selectedIcons.map(icon =>
      icon.id === id ? { ...icon, text } : icon
    );
    setSelectedIcons(updatedIcons);
  };
  const handleRemoveIcon = (id) => {
    const updatedIcons = selectedIcons.filter(icon => icon.id !== id);
    setSelectedIcons(updatedIcons);
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
        const response = await axios.post(`${baseurl}/updateSocailTemplete/${id}`, {
        
          desFont,
          titleFont,
          website,
          titletext,
          desctext,
          
          selectedImage,
         
          selectedIcons,
          telephone,
          email,
          animationimage:selectedsplash,
          showanimation:showtempanimation,
         
          bottom,
        
          userId
        });
  
  
        const data = {
          password,
          startTime,
          endTime,
          url:'https://qrn1.com/socailscreen',
          isChecked,
          id:response.data.data.id,
          type:'Social Media',
          userId: userId
          
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

    else{

  

    try {
      const response = await axios.post(`${baseurl}/createsocailtemplete`, {
      
        desFont,
        titleFont,
        website,
        titletext,
        desctext,
        
        selectedImage,
       
        selectedIcons,
        telephone,
        email,



        animationimage:selectedsplash,
        showanimation:showtempanimation,
       
        bottom,
      
        userId
      });


      const data = {
        password,
        startTime,
        endTime,
        url:'https://qrn1.com/socailscreen',
        isChecked,
        id:response.data.data.id,
        type:'Social Media',
          userId: userId
        
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
                                  Information
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
                                  Contact info
                                </AccordionItemButton>
                              </AccordionItemHeading>
                              <AccordionItemPanel>
                                <div className="video-input-blocks video-info">
                                 

                               
                         





                                  <div className="website--des">
                                    <p className='fontstitle'> Telephone</p>
                                    <input type="text" placeholder="Enter Title" className='w-100'

                                      value={telephone}
                                      onChange={(e) => setTelephone(e.target.value)} />





                                  </div>

                                 
                            


                                  <div className="website--des">
                                    <p className='fontstitle'> Email</p>
                                    <input type="text" placeholder="Enter Description" className='w-100'

                                      value={email}
                                      onChange={(e) => setEmail(e.target.value)}
                                    />



                                  
                                </div>


                                <div className="website--des">
                                    <p className='fontstitle'>Website</p>
                                    <input type="text" placeholder="Enter Description" className='w-100'

                                      value={website}
                                      onChange={(e) => setWebsite(e.target.value)}
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

                                  Socail Networks

                                </AccordionItemButton>
                              </AccordionItemHeading>
                              <AccordionItemPanel>




      <div>
      <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '20px' }}>
        {selectedIcons.map(icon => (
          <div key={icon.id} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
           
            <img src={icon.icon} alt={icon.name} style={{ width: '24px', height: '24px' }} />
            <input
              type="text"
             
              value={icon.text}
              onChange={(e) => handleInputChange2(icon.id, e.target.value)}
              style={{ marginLeft: '10px', flex: 1 }}
            />

            <input
              type="text"
              placeholder={icon.placeholder}
              value={icon.url}
              onChange={(e) => handleInputChange(icon.id, e.target.value)}
              style={{ marginLeft: '10px', flex: 1 }}
            />
            <button onClick={() => handleRemoveIcon(icon.id)} style={{ marginLeft: '10px',  border:'none' }}>❌</button>
          </div>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '10px' }}>
        {icons.map(icon => (
          <div
            key={icon.id}
            onClick={() => handleIconClick(icon)}
            style={{
              padding: '10px',
              cursor: 'pointer',
              border: selectedIcons.some(item => item.id === icon.id) ? '2px solid blue' : '2px solid transparent',
              borderRadius: '5px',
              textAlign: 'center'
            }}
          >
             <img src={icon.icon} alt={icon.name} style={{ width: '40px', height: '40px' }} />
          </div>
        ))}
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

                <h2>Social Media</h2>
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


                      <div className='grad hover-grad  more-just' style={{ background: `${bottom} ` }}>

                        <div className='setlogs hero-li-list-boxz'>



                          <div className='hell-box-inside nick1' >

                          <img ref={paragraphRef} className='logsimage' src={selectedImage || logo} alt="Link" style={{width:'60% !important'}} />

                            <div className="nick2" >

                              <span className='logsspan' style={{ fontFamily: titleFont }}>

                                {titletext ? titletext :"Full Stack dev "}

                                {/* {'Full Stack dev'} */}
                              </span>

                              <p className='logsp' style={{ fontFamily: desFont }}>
                                {desctext ? desctext : ' Our first single'}
                                {/* {'Our first single'} */}
                              </p>

                            </div>


                            <div className="play-icon-Social">



                            <span style={{ background: `${top} ` }} >
                              <a href={`tel:${telephone}`} style={{ textDecoration: 'none' }}>
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg>
                              </a>
                              </span> 
                              <span style={{ background: `${top} ` }} >
                              <a href={`mailto:${email}`} style={{ textDecoration: 'none' }}>
                              <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true" ><path d="M19,4H5A3,3,0,0,0,2,7V17a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V7A3,3,0,0,0,19,4Zm0,2h0l-5.84,5a1.89,1.89,0,0,1-2.34,0L5,6H19Zm0,12H5a1,1,0,0,1-1-1V7.79L9.53,12.5a3.91,3.91,0,0,0,4.94,0L20,7.79V17A1,1,0,0,1,19,18Z"></path><path d="M7.29,13.29l-2,2a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l2-2a1,1,0,0,0-1.42-1.42Z"></path><path d="M16.71,13.29a1,1,0,0,0-1.42,1.42l2,2a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z"></path></svg>
                              </a>
                              </span>

                              <span style={{ background: `${top} ` }}>
                              <a href={website} style={{ textDecoration: 'none' }}>
                              <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true" ><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z"></path></svg>
                              </a>
                              </span>
                            </div>


                            {selectedIcons.map(icon => (
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

              <p>IMPORTANT: Remember that you canpreview and test your QR codes by clickingon the icon</p>

              <button onClick={handleSubmit1} className='brand--save  abosulutebutton' style={{ width: '60%' }}>
                Next
              </button>
            </div>



          </div>


        </div>
      </div>

    </>
  );
};

export default SocailmediaQr;

