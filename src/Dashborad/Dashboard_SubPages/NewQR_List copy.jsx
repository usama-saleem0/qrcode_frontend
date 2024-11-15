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
import statsicon from '../../img/Website_stats.png'
import Questionmarkicon from '../../img/website_quesmark.png'
import settingsicon from '../../img/Website_settingicon.png'
import WebsiteDevice from '../../img/WebsiteDevice.png'
import Defaulttemp from '../../img/defaulttemplate.jpg'
import Defaulttemp5 from '../../img/ezgif-3-fb883864f5.jpg'
import Defaulttemp1 from '../../img/ezgif-3-17bfcb6243.jpg'
import Defaulttemp2 from '../../img/ezgif-3-955db45769.jpg'
import Defaulttemp3 from '../../img/ezgif-3-2136ca1d74.jpg'




import ezi from '../../img/ezgif.jpg'
import blank from "../../img/phoneblank.png";
import rain from "../../img/Social1.png";
import logo from "../../img/profilelogo.webp";
import insta from "../../img/instagram.webp";
import youtube from "../../img/youtube.png";
import spotify from "../../img/spotify.png";
import soundcloud from "../../img/soundcloud.png";
import ticket from "../../img/ticket.png";





import ImageUploader from 'react-image-upload'
import 'react-image-upload/dist/index.css'





import { Container, ProgressBar } from 'react-bootstrap';
import { unstable_HistoryRouter, useNavigate } from 'react-router-dom';
  import { baseurl } from '../../baseurl';
  import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';



const NewQR_Link = () => {

  const [bottom, setbottom] = useState('#e38b55');
  const [top, settop] = useState('#070722');
  const [tops, settops] = useState('#5dade2');

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
  const [selectedsplash, setSelectedSplash] = useState(null);

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








  const navigate = useNavigate();

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
        links ,
        links2 ,
        links3 ,
        linktext ,
        linktext2 ,
        linktext3 ,
        userId,
        selectedIcons,
        animationimage:selectedsplash,
        showanimation:showtempanimation,
        titletext,
        desctext,
        tempno
    
      });


      console.log('hello',response.data.data.id)
      const data = {
        password,
        startTime,
        endTime,
        url:'https://qrn1.com/fullscreen',
        isChecked,
        id:response.data.data.id
        
      };

      toast.success('Successfully saved now press next button in top menu');
  
  
      localStorage.setItem('myData', JSON.stringify(data));
      navigate('/Creatqrcode')

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


  // useEffect(() => {
  //   // Hide splash screen after 2-3 seconds
  //   const timer = setTimeout(() => {
  //     setShowSplash(false);
  //   }, 3000);

  //   return () => clearTimeout(timer);
  // }, []);


  const showSplashScreen = () => {
    if(showtempanimation){

   
    setShowSplash(true);
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000);
    return () => clearTimeout(timer);
  }
  }


  // function getImageFileObject(imageFile) {
  //   // setSelectedImage(imageFile);
  //   const file = imageFile.file;
  //   if (file instanceof Blob || file instanceof File) {
  //     setSelectedCover(URL.createObjectURL(file));
  //   } else {
  //       console.error("Invalid image file object");
  //   }

  //   console.log({ imageFile })
  // }
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






  const setTempColor = (bottom, top, input) => {

    setbottom(bottom)
    settop(top)
    setinput(input)


  }

  const getUserFromLocalStorage = () => {
    const user = localStorage.getItem('userData');
    return user ? JSON.parse(user) : null;
  };


  const [selectedIcons, setSelectedIcons] = useState([]);

  const icons = [
    { id: 1, name: 'Youtube', icon: youtube, placeholder: 'https://www.flickr.com/' },
    { id: 2, name: 'Spotify', icon: spotify, placeholder: 'https://pinterest.com/' },
    { id: 3, name: 'Soundcloud', icon: soundcloud, placeholder: 'https://www.youtube.com/' },
    { id: 4, name: 'Ticket', icon: ticket , placeholder: 'https://www.youtube.com/' },

    // Add more icons here...
  ];

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

  const handleRemoveIcon = (id) => {
    const updatedIcons = selectedIcons.filter(icon => icon.id !== id);
    setSelectedIcons(updatedIcons);
  };

  const [tempno, settempno] = useState(1);
  const Templates = (e) => {
    settempno(e)
  }



  return (
    <>
      <div className="main-dashbord-contanir">
        <div className='NewQR'>
          <ToastContainer/>



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

                                <div className='imagediv'>


                                  <div className="imdiv">

                                    <img className='tempimage' src={Defaulttemp1}  onClick={() => Templates(1)}/>
                                  </div>
                                  <div className="imdiv">

                                    <img className='tempimage' src={Defaulttemp2}  onClick={() => Templates(2)} />
                                  </div>
                                  <div className="imdiv">

                                    <img className='tempimage' src={Defaulttemp} onClick={() => Templates(3)} />
                                  </div>

                                  <div className="imdiv">

                                    <img className='tempimage' src={Defaulttemp3} onClick={() => Templates(4)} />
                                  </div>

                                  <div className="imdiv">

                                    <img className='tempimage' src={Defaulttemp5} onClick={() => Templates(5)} />
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


                                <div className="iline">
                                  <div className="website--des">
                                    <p className='fontstitle'> Link Size</p>
                                    {/* <input type="text" placeholder="Enter website URL" className='w-100' /> */}


                                    <div className="selet-hero" style={{ width: '100%' }} >

                                      <select name="cars" id="cars" style={{ borderRadius: '20px' }}
                                        value={linksize}
                                        onChange={handleLinkChange}
                                      >
                                        <option value="14px">14px</option>
                                        <option value="16px">16px</option>
                                        <option value="18px">18px</option>
                                        <option value="20px">20px</option>
                                        <option value="22px">22px</option>
                                        <option value="24px">24px</option>
                                      </select>
                                    </div>



                                  </div>
                                </div>


                                <div className="iline">
                                  <div className="website--des">
                                    <p className='fontstitle'> Title size</p>
                                    {/* <input type="text" placeholder="Enter website URL" className='w-100' /> */}


                                    <div className="selet-hero" style={{ width: '100%' }} >

                                      <select name="cars" id="cars" style={{ borderRadius: '20px' }}
                                        value={titlesize}
                                        onChange={handleTitleChange}
                                      >
                                        <option value="14px">14px</option>
                                        <option value="16px">16px</option>
                                        <option value="18px">18px</option>
                                        <option value="20px">20px</option>
                                        <option value="22px">22px</option>
                                        <option value="24px">24px</option>
                                      </select>
                                    </div>



                                  </div>
                                </div>


                                <div className="iline">
                                  <div className="website--des">
                                    <p className='fontstitle'> Description Size</p>
                                    {/* <input type="text" placeholder="Enter website URL" className='w-100' /> */}


                                    <div className="selet-hero" style={{ width: '100%' }} >

                                      <select name="cars" id="cars" style={{ borderRadius: '20px' }}

                                        value={descriptionsize}
                                        onChange={handleDescriptionChange}>
                                        <option value="14px">14px</option>
                                        <option value="16px">16px</option>
                                        <option value="18px">18px</option>
                                        <option value="20px">20px</option>
                                        <option value="22px">22px</option>
                                        <option value="24px">24px</option>
                                      </select>
                                    </div>



                                  </div>
                                </div>


                                <div className="iline">
                                  <div className="website--des">
                                    <p className='fontstitle'> Socail Media Size</p>
                                    {/* <input type="text" placeholder="Enter website URL" className='w-100' /> */}


                                    <div className="selet-hero" style={{ width: '100%' }} >

                                      <select name="cars" id="cars" style={{ borderRadius: '20px' }}>
                                        <option value="14px">14px</option>
                                        <option value="16px">16px</option>
                                        <option value="18px">18px</option>
                                        <option value="20px">20px</option>
                                        <option value="22px">22px</option>
                                        <option value="24px">24px</option>
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

                                  Link list Information

                                </AccordionItemButton>
                              </AccordionItemHeading>
                              <AccordionItemPanel>

                                <div style={{ width: '30%' }} className='deteleiline'>

                                  <div className="imdiv">

                                    {/* <img className='tempimage'  src={Defaulttemp}/> */}

                                    <ImageUploader
                                      onFileAdded={(img) => getImageFileObject(img)}
                                      onFileRemoved={(img) => runAfterImageDelete(img)}
                                    />
                                  </div>
                                  <div className="brand--back delete " >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="17" viewBox="0 0 19 17" fill="none">
                                      <path d="M2.86389 7.82015H17.3591C17.566 7.82015 17.7644 7.90232 17.9106 8.04858C18.0569 8.19484 18.139 8.39321 18.139 8.60005C18.139 8.80689 18.0569 9.00526 17.9106 9.15152C17.7644 9.29778 17.566 9.37995 17.3591 9.37995H2.86389L8.55249 15.067C8.69893 15.2134 8.78121 15.4121 8.78121 15.6192C8.78121 15.8263 8.69893 16.0249 8.55249 16.1713C8.40604 16.3178 8.20742 16.4 8.00032 16.4C7.79322 16.4 7.59459 16.3178 7.44815 16.1713L0.429035 9.15222C0.356407 9.07977 0.298784 8.99371 0.259466 8.89896C0.22015 8.80421 0.199911 8.70263 0.199911 8.60005C0.199911 8.49747 0.22015 8.39589 0.259466 8.30114C0.298784 8.20639 0.356407 8.12033 0.429035 8.04788L7.44815 1.02877C7.59459 0.88232 7.79322 0.800049 8.00032 0.800049C8.20742 0.800049 8.40604 0.88232 8.55249 1.02877C8.69893 1.17521 8.78121 1.37383 8.78121 1.58094C8.78121 1.78804 8.69893 1.98666 8.55249 2.13311L2.86389 7.82015Z" fill="#808080" />
                                    </svg>
                                    <h5 style={{ color: '#2947c7' }}>Delete</h5>
                                  </div>


                                </div>
                                <br />

                                <div style={{ width: '30%' }} className='deteleiline'>

                                  <div className="imdiv">

                                    {/* <img className='tempimage'  src={Defaulttemp}/> */}

                                    <ImageUploader
                                      onFileAdded={(img) => getImageFileObjects(img)}
                                      onFileRemoved={(img) => runAfterImageDelete(img)}
                                    />
                                  </div>
                                  <div className="brand--back delete " >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="17" viewBox="0 0 19 17" fill="none">
                                      <path d="M2.86389 7.82015H17.3591C17.566 7.82015 17.7644 7.90232 17.9106 8.04858C18.0569 8.19484 18.139 8.39321 18.139 8.60005C18.139 8.80689 18.0569 9.00526 17.9106 9.15152C17.7644 9.29778 17.566 9.37995 17.3591 9.37995H2.86389L8.55249 15.067C8.69893 15.2134 8.78121 15.4121 8.78121 15.6192C8.78121 15.8263 8.69893 16.0249 8.55249 16.1713C8.40604 16.3178 8.20742 16.4 8.00032 16.4C7.79322 16.4 7.59459 16.3178 7.44815 16.1713L0.429035 9.15222C0.356407 9.07977 0.298784 8.99371 0.259466 8.89896C0.22015 8.80421 0.199911 8.70263 0.199911 8.60005C0.199911 8.49747 0.22015 8.39589 0.259466 8.30114C0.298784 8.20639 0.356407 8.12033 0.429035 8.04788L7.44815 1.02877C7.59459 0.88232 7.79322 0.800049 8.00032 0.800049C8.20742 0.800049 8.40604 0.88232 8.55249 1.02877C8.69893 1.17521 8.78121 1.37383 8.78121 1.58094C8.78121 1.78804 8.69893 1.98666 8.55249 2.13311L2.86389 7.82015Z" fill="#808080" />
                                    </svg>
                                    <h5 style={{ color: '#2947c7' }}>Delete</h5>
                                  </div>


                                </div>










                                <div className="iline">
                                  <div className="website--des">
                                    <p className='fontstitle'> Title</p>
                                    <input type="text" placeholder="Enter Title" className='w-100'

                                      value={titletext}
                                      onChange={(e) => setTitletext(e.target.value)} />





                                  </div>
                                </div>


                                <div className="iline">
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

                                  Lists

                                </AccordionItemButton>
                              </AccordionItemHeading>
                              <AccordionItemPanel>


                                <AccordionItemPanel>
                                  <div className="Configuration--inner--faq-box">
                                    <div className="Stats--inner--faq-box">
                                      <Accordion allowZeroExpanded>
                                        {/* First Accordion Item */}
                                        <AccordionItem>
                                          <AccordionItemHeading>
                                            <AccordionItemButton>
                                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                                                <path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9" />
                                              </svg>
                                              {linktext}
                                            </AccordionItemButton>
                                          </AccordionItemHeading>
                                          <AccordionItemPanel>
                                            <div style={{ width: '30%' }} className='deteleiline'>

                                              <div className="imdiv">

                                                <img className='tempimage' src={ezi} style={{ objectFit: 'none' }} />
                                              </div>
                                              <div className="brand--back delete " >
                                                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="17" viewBox="0 0 19 17" fill="none">
                                                  <path d="M2.86389 7.82015H17.3591C17.566 7.82015 17.7644 7.90232 17.9106 8.04858C18.0569 8.19484 18.139 8.39321 18.139 8.60005C18.139 8.80689 18.0569 9.00526 17.9106 9.15152C17.7644 9.29778 17.566 9.37995 17.3591 9.37995H2.86389L8.55249 15.067C8.69893 15.2134 8.78121 15.4121 8.78121 15.6192C8.78121 15.8263 8.69893 16.0249 8.55249 16.1713C8.40604 16.3178 8.20742 16.4 8.00032 16.4C7.79322 16.4 7.59459 16.3178 7.44815 16.1713L0.429035 9.15222C0.356407 9.07977 0.298784 8.99371 0.259466 8.89896C0.22015 8.80421 0.199911 8.70263 0.199911 8.60005C0.199911 8.49747 0.22015 8.39589 0.259466 8.30114C0.298784 8.20639 0.356407 8.12033 0.429035 8.04788L7.44815 1.02877C7.59459 0.88232 7.79322 0.800049 8.00032 0.800049C8.20742 0.800049 8.40604 0.88232 8.55249 1.02877C8.69893 1.17521 8.78121 1.37383 8.78121 1.58094C8.78121 1.78804 8.69893 1.98666 8.55249 2.13311L2.86389 7.82015Z" fill="#808080" />
                                                </svg>
                                                <h5 style={{ color: '#2947c7' }}>Delete</h5>
                                              </div>


                                            </div>








                                            <div className="iline">
                                              <div className="website--des">
                                                <p className='fontstitle'> Link Text</p>
                                                <input type="text" placeholder="Basket egg" className='w-100'


                                                  value={linktext}
                                                  onChange={(e) => setLinktext(e.target.value)} />





                                              </div>
                                            </div>


                                            <div className="iline">
                                              <div className="website--des">
                                                <p className='fontstitle'> URL</p>
                                                <input type="text" placeholder="Enter website URL" className='w-100'

                                                  value={links}
                                                  onChange={(e) => setLinks(e.target.value)} />





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
                                              {linktext2}
                                            </AccordionItemButton>
                                          </AccordionItemHeading>
                                          <AccordionItemPanel>
                                            <div style={{ width: '30%' }} className='deteleiline'>

                                              <div className="imdiv">

                                                <img className='tempimage' src={ezi} style={{ objectFit: 'none' }} />
                                              </div>
                                              <div className="brand--back delete " >
                                                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="17" viewBox="0 0 19 17" fill="none">
                                                  <path d="M2.86389 7.82015H17.3591C17.566 7.82015 17.7644 7.90232 17.9106 8.04858C18.0569 8.19484 18.139 8.39321 18.139 8.60005C18.139 8.80689 18.0569 9.00526 17.9106 9.15152C17.7644 9.29778 17.566 9.37995 17.3591 9.37995H2.86389L8.55249 15.067C8.69893 15.2134 8.78121 15.4121 8.78121 15.6192C8.78121 15.8263 8.69893 16.0249 8.55249 16.1713C8.40604 16.3178 8.20742 16.4 8.00032 16.4C7.79322 16.4 7.59459 16.3178 7.44815 16.1713L0.429035 9.15222C0.356407 9.07977 0.298784 8.99371 0.259466 8.89896C0.22015 8.80421 0.199911 8.70263 0.199911 8.60005C0.199911 8.49747 0.22015 8.39589 0.259466 8.30114C0.298784 8.20639 0.356407 8.12033 0.429035 8.04788L7.44815 1.02877C7.59459 0.88232 7.79322 0.800049 8.00032 0.800049C8.20742 0.800049 8.40604 0.88232 8.55249 1.02877C8.69893 1.17521 8.78121 1.37383 8.78121 1.58094C8.78121 1.78804 8.69893 1.98666 8.55249 2.13311L2.86389 7.82015Z" fill="#808080" />
                                                </svg>
                                                <h5 style={{ color: '#2947c7' }}>Delete</h5>
                                              </div>


                                            </div>








                                            <div className="iline">
                                              <div className="website--des">
                                                <p className='fontstitle'> Link Text</p>
                                                <input type="text" placeholder="Basket egg" className='w-100'


                                                  value={linktext2}
                                                  onChange={(e) => setLinktext2(e.target.value)} />





                                              </div>
                                            </div>


                                            <div className="iline">
                                              <div className="website--des">
                                                <p className='fontstitle'> URL</p>
                                                <input type="text" placeholder="Enter website URL" className='w-100'

                                                  value={links2}
                                                  onChange={(e) => setLinks2(e.target.value)} />





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
                                              {linktext3}
                                            </AccordionItemButton>
                                          </AccordionItemHeading>
                                          <AccordionItemPanel>
                                            <div style={{ width: '30%' }} className='deteleiline'>

                                              <div className="imdiv">

                                                <img className='tempimage' src={ezi} style={{ objectFit: 'none' }} />
                                              </div>
                                              <div className="brand--back delete " >
                                                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="17" viewBox="0 0 19 17" fill="none">
                                                  <path d="M2.86389 7.82015H17.3591C17.566 7.82015 17.7644 7.90232 17.9106 8.04858C18.0569 8.19484 18.139 8.39321 18.139 8.60005C18.139 8.80689 18.0569 9.00526 17.9106 9.15152C17.7644 9.29778 17.566 9.37995 17.3591 9.37995H2.86389L8.55249 15.067C8.69893 15.2134 8.78121 15.4121 8.78121 15.6192C8.78121 15.8263 8.69893 16.0249 8.55249 16.1713C8.40604 16.3178 8.20742 16.4 8.00032 16.4C7.79322 16.4 7.59459 16.3178 7.44815 16.1713L0.429035 9.15222C0.356407 9.07977 0.298784 8.99371 0.259466 8.89896C0.22015 8.80421 0.199911 8.70263 0.199911 8.60005C0.199911 8.49747 0.22015 8.39589 0.259466 8.30114C0.298784 8.20639 0.356407 8.12033 0.429035 8.04788L7.44815 1.02877C7.59459 0.88232 7.79322 0.800049 8.00032 0.800049C8.20742 0.800049 8.40604 0.88232 8.55249 1.02877C8.69893 1.17521 8.78121 1.37383 8.78121 1.58094C8.78121 1.78804 8.69893 1.98666 8.55249 2.13311L2.86389 7.82015Z" fill="#808080" />
                                                </svg>
                                                <h5 style={{ color: '#2947c7' }}>Delete</h5>
                                              </div>


                                            </div>








                                            <div className="iline">
                                              <div className="website--des">
                                                <p className='fontstitle'> Link Text</p>
                                                <input type="text" placeholder="Basket egg" className='w-100'


                                                  value={linktext3}
                                                  onChange={(e) => setLinktext3(e.target.value)} />





                                              </div>
                                            </div>


                                            <div className="iline">
                                              <div className="website--des">
                                                <p className='fontstitle'> URL</p>
                                                <input type="text" placeholder="Enter website URL" className='w-100'

                                                  value={links3}
                                                  onChange={(e) => setLinks3(e.target.value)} />





                                              </div>
                                            </div>

                                          </AccordionItemPanel>
                                        </AccordionItem>




                                      </Accordion>
                                    </div>
                                  </div>
                                </AccordionItemPanel>



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


                                <div className="website--des">
                                  <p className='fontstitle'>Title</p>
                                  <input type="text" placeholder="Title" className='w-100' />
                                </div>

{/* 
                                <div className="inline">
                                  <div className="socailicon">
                                    <div className="icons">
                                      <img src={insta} style={{ width: '100%' }} />

                                    </div>
                                    <p>
                                      Instgram
                                    </p>
                                  </div>
                                  <div className="website--des" style={{ width: '50%' }}>

                                    <input type="text" placeholder="Url" className='w-100' />
                                  </div>
                                </div>

                                <div className="inline">
                                  <div className="socailicon">
                                    <div className="icons">

                                      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><circle fill='#bd081c' cx='16' cy='16' r='16' /><path fill='#fff' d='M22.93,12.94c0,4-2.25,7-5.55,7a2.91,2.91,0,0,1-2.51-1.28s-.6,2.37-.73,2.83a11.16,11.16,0,0,1-1.85,3.37.14.14,0,0,1-.2,0,.1.1,0,0,1,0-.07,11.06,11.06,0,0,1,0-3.91l1.32-5.61a4.17,4.17,0,0,1-.33-1.63c0-1.51.89-2.67,2-2.67a1.38,1.38,0,0,1,1.39,1.55,22,22,0,0,1-.91,3.65,1.6,1.6,0,0,0,1.15,1.94,1.47,1.47,0,0,0,.47,0c1.95,0,3.27-2.5,3.27-5.47,0-2.26-1.51-3.94-4.28-3.94a4.87,4.87,0,0,0-5.07,4.93,2.94,2.94,0,0,0,.68,2,.49.49,0,0,1,.14.58c0,.19-.16.64-.21.82a.38.38,0,0,1-.45.29l-.06,0c-1.44-.59-2.11-2.16-2.11-3.93C9.07,10.54,11.54,7,16.43,7,20.35,7,22.93,9.88,22.93,12.94Z' /></svg>
                                    </div>
                                    <p>
                                      Pinterest
                                    </p>
                                  </div>
                                  <div className="website--des" style={{ width: '50%' }}>

                                    <input type="text" placeholder="url" className='w-100' />
                                  </div>
                                </div>



                                <div className="inline">
                                  <div className="socailicon">
                                    <div className="icons">

                                      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><circle fill='#e52d27' cx='16' cy='16' r='16' /><path fill='#fff' d='M25,19.58a2.57,2.57,0,0,1-2.56,2.56H9.6A2.57,2.57,0,0,1,7,19.58V12.42A2.57,2.57,0,0,1,9.6,9.86H22.4A2.57,2.57,0,0,1,25,12.42ZM14.15,18.19,19,15.68l-4.84-2.5Z' /></svg>
                                    </div>
                                    <p>
                                      YouTube
                                    </p>
                                  </div>
                                  <div className="website--des" style={{ width: '50%' }}>

                                    <input type="text" placeholder="url" className='w-100' />
                                  </div>
                                </div> */}

      <div>
      <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '20px' }}>
        {selectedIcons.map(icon => (
          <div key={icon.id} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
            {/* <span>{icon.icon}</span> */}
            <img src={icon.icon} alt={icon.name} style={{ width: '24px', height: '24px' }} />
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

                <h2>Link List</h2>
                <span>
                  <img src={Pencel} alt="pen" />
                </span>
              </div>
              {/* <img src={WebsiteDevice} alt="Device Hover" /> */}
              <div style={{ position: 'relative' }}>



                <img src={blank} alt="Device Hover" />
                {showSplash ? (
        <div className="splash-screen">
          <div className="splash-image" style={{backgroundImage: `url(${selectedsplash || rain})`}}></div>
        </div>
      ) : (

        <div>
        {tempno === 1 && (
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

                      {selectedIcons.map(icon => (
                       <img src={icon.icon} alt={icon.name} style={{ width: '30px', height: '30px' }} />

                      ))}


                      </div>



                      <div className="logslink">
                        <div className="logslink--img">
                          <img src={ezi} />
                        </div>
                        <h6 style={{ fontSize: linksize }}> <a href={links}>
                          {linktext}
                        </a>  </h6>
                      </div>

                      <div className="logslink">
                        <div className="logslink--img">
                          <img src={ezi} />
                        </div>
                        <h6 style={{ fontSize: linksize }}>  <a href={links2}>
                          {linktext2}
                        </a> </h6>
                      </div>

                      <div className="logslink">
                        <div className="logslink--img">
                          <img src={ezi} />
                        </div>
                        <h6 style={{ fontSize: linksize }}>  <a href={links3}>
                          {linktext3}
                        </a> </h6>
                      </div>


                    </div>


                  </div>



                </div>
        )}

        {tempno === 2 && (
                <div className='templetes2' style={{ backgroundImage: `url(${selectedCover || rain})`, }}>


                <div className='grad2' style={{ background: `linear-gradient(0deg, ${bottom} 0%, ${top} 100%, #00d4ff00 100%)` }}>

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
                    {selectedIcons.map(icon => (
                       <img src={icon.icon} alt={icon.name} style={{ width: '30px', height: '30px' }} />

                      ))}


                    </div>



                    <div className="logslink">
                      <div className="logslink--img">
                        <img src={ezi} />
                      </div>
                      <h6 style={{ fontSize: linksize }}> <a href={links}>
                        {linktext}
                      </a>  </h6>
                    </div>

                    <div className="logslink">
                      <div className="logslink--img">
                        <img src={ezi} />
                      </div>
                      <h6 style={{ fontSize: linksize }}>  <a href={links2}>
                        {linktext2}
                      </a> </h6>
                    </div>

                    <div className="logslink">
                      <div className="logslink--img">
                        <img src={ezi} />
                      </div>
                      <h6 style={{ fontSize: linksize }}>  <a href={links3}>
                        {linktext3}
                      </a> </h6>
                    </div>


                  </div>


                </div>



              </div>
        )}


        {tempno === 3 && (
                <div className='templetes2' style={{ backgroundImage: `url(${selectedCover || rain})`, }}>


                <div className='grad3' style={{ background: `linear-gradient(0deg, ${bottom} 100%, ${top} 100%, #00d4ff00 100%)` }}>

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
                    {selectedIcons.map(icon => (
                       <img src={icon.icon} alt={icon.name} style={{ width: '30px', height: '30px' }} />

                      ))}


                    </div>



                    <div className="logslink">
                      <div className="logslink--img">
                        <img src={ezi} />
                      </div>
                      <h6 style={{ fontSize: linksize }}> <a href={links}>
                        {linktext}
                      </a>  </h6>
                    </div>

                    <div className="logslink">
                      <div className="logslink--img">
                        <img src={ezi} />
                      </div>
                      <h6 style={{ fontSize: linksize }}>  <a href={links2}>
                        {linktext2}
                      </a> </h6>
                    </div>

                    <div className="logslink">
                      <div className="logslink--img">
                        <img src={ezi} />
                      </div>
                      <h6 style={{ fontSize: linksize }}>  <a href={links3}>
                        {linktext3}
                      </a> </h6>
                    </div>


                  </div>


                </div>



              </div>
        )}


      {tempno === 4 && (
                <div className='templetes2' style={{ backgroundImage: `url(${selectedCover || rain})`, }}>


                <div className='grad2' style={{ background: `linear-gradient(0deg, ${bottom} 0%, ${top} 100%, #00d4ff00 100%)` }}>

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
                    {selectedIcons.map(icon => (
                       <img src={icon.icon} alt={icon.name} style={{ width: '30px', height: '30px' }} />

                      ))}


                    </div>



                    <div className="logslink2">
                      <div className="logslink--img">
                        <img src={ezi} />
                      </div>
                      <h6 style={{ fontSize: linksize }}> <a href={links}>
                        {linktext}
                      </a>  </h6>
                    </div>

                    <div className="logslink2">
                      <div className="logslink--img">
                        <img src={ezi} />
                      </div>
                      <h6 style={{ fontSize: linksize }}>  <a href={links2}>
                        {linktext2}
                      </a> </h6>
                    </div>

                    <div className="logslink2">
                      <div className="logslink--img">
                        <img src={ezi} />
                      </div>
                      <h6 style={{ fontSize: linksize }}>  <a href={links3}>
                        {linktext3}
                      </a> </h6>
                    </div>


                  </div>


                </div>



              </div>
        )}


        {tempno === 5 && (
                <div className='templetes1' style={{ backgroundImage: `url(${selectedCover || rain})`, }}>


                  <div className='grad' style={{ background: `linear-gradient(0deg, ${bottom} 0%, ${tops} 100%, #00d4ff00 100%)` }}>

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
                      {selectedIcons.map(icon => (
                       <img src={icon.icon} alt={icon.name} style={{ width: '30px', height: '30px' }} />

                      ))}

                      </div>



                      <div className="logslink">
                        <div className="logslink--img">
                          <img src={ezi} />
                        </div>
                        <h6 style={{ fontSize: linksize }}> <a href={links}>
                          {linktext}
                        </a>  </h6>
                      </div>

                      <div className="logslink">
                        <div className="logslink--img">
                          <img src={ezi} />
                        </div>
                        <h6 style={{ fontSize: linksize }}>  <a href={links2}>
                          {linktext2}
                        </a> </h6>
                      </div>

                      <div className="logslink">
                        <div className="logslink--img">
                          <img src={ezi} />
                        </div>
                        <h6 style={{ fontSize: linksize }}>  <a href={links3}>
                          {linktext3}
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


              <p>IMPORTANT: Remember that you canpreview and test your QR codes by clickingon the icon</p>

              
              <button onClick={handleSubmit1} className='brand--save   abosulutebutton' style={{width: '60%'}}>
                  Next
                </button> {/* Save button */}

            </div>            
              


          </div>


        </div>
      </div>

    </>
  );
};

export default NewQR_Link;

