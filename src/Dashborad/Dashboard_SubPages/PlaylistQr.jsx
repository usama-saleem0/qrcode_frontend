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
import rain from "../../img/Social1.png";
import blank from "../../img/phoneblank.png";

import hide from "../../img/hide.webp";



import hil   from "../../img/hil.svg";
import hil1  from "../../img/hil1.svg";
import hil2  from "../../img/hil2.svg";
import hil3  from "../../img/hil3.svg";
import hil4  from "../../img/hil4.svg";
import appearanceicon from '../../img/appearanceicon.png'
import ImageUploader from 'react-image-upload'
import 'react-image-upload/dist/index.css'





import { Container, ProgressBar } from 'react-bootstrap';
import axios from 'axios';
import { baseurl } from '../../baseurl';
import { toast, ToastContainer } from 'react-toastify';
import { useNavigate, useParams } from 'react-router-dom';



const Playlist = () => {




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
  const [audioname, setAudioName] = useState('');
  const [audiourl, setAudioUrl] = useState('');


  const icons = [
    { id: 1, name: 'Youtube', icon: youtube, placeholder: 'https://www.flickr.com/' },
    { id: 2, name: 'Spotify', icon: spotify, placeholder: 'https://pinterest.com/' },
    { id: 3, name: 'Soundcloud', icon: soundcloud, placeholder: 'https://www.youtube.com/' },
    { id: 4, name: 'Apple Music', icon: hil , placeholder: 'https://www.youtube.com/' },

    // Add more icons here...
  ];


  const paragraphRef = useRef(null);



  const { id } = useParams();
 


  const fetchPlaylistQr = async (id) => {
   
    try {
      const response = await axios.get(`${baseurl}/getPlaylistQr/${id}`);
      setSelectedSplash(response.data.data.animationimage);
      setAudioName(response.data.data.audioname)
      setAudioUrl(response.data.data.audiourl)
      setbottom(response.data.data.bottom)
      setCompany(response.data.data.company)
      setdesFont(response.data.data.desFont)
      setDesctext(response.data.data.desctext)
      setSelectedLogo(response.data.data.selectedlogo)
      showAnimation(response.data.data.showanimation)
      setTitleFont(response.data.data.titleFont)
      setTitletext(response.data.data.titletext)

  


     
    } catch (error) {
      console.error('Error fetching QR code by ID:', error);
    }
  };


  useEffect(() => {

    
    if(id){

      console.log('params id', id)

      fetchPlaylistQr(id)




    }
    if (paragraphRef.current) {
      paragraphRef.current.style.setProperty('width', '34px', 'important');
    }
  }, []);



  const handleSwitchToggles = (event) => {
    setIsSwitchOnss(event.target.checked);
  };

  function runAfterImageDelete(file) {
    console.log({ file })
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
 

  const showSplashScreen = () => {
    if(showtempanimation){

   
    setShowSplash(true);
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000);
    return () => clearTimeout(timer);
  }
  }


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
      setAudioName(response.data.data)

      
      const urlshow = `${baseurl}/storage/${response.data.data}`
      setAudioUrl(urlshow)
      // setUploadStatus(`Upload successful: ${response.data.url}`);
    } catch (error) {
      // setUploadStatus('Upload failed');
    }
  
   
    }
  }

  
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
        const response = await axios.post(`${baseurl}/updatePlaylistTemplete/${id}`, {
        
          desFont,
          titleFont,
          company,
          titletext,
          desctext,
          
          selectedlogo,
          audioname,
          audiourl,
          selectedIcons,
  
          animationimage:selectedsplash,
          showanimation:showtempanimation,
         
          bottom,
        
          userId
        });
  
  
        const data = {
          password,
          startTime,
          endTime,
          url:'https://qrn1.com/playlisscreen',
          isChecked,
          id:response.data.data.id,
          type:'Playlist',
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
        const response = await axios.post(`${baseurl}/createplaylisttemplete`, {
        
          desFont,
          titleFont,
          company,
          titletext,
          desctext,
          
          selectedlogo,
          audioname,
          audiourl,
          selectedIcons,
  
          animationimage:selectedsplash,
          showanimation:showtempanimation,
         
          bottom,
        
          userId
        });
  
  
        const data = {
          password,
          startTime,
          endTime,
          url:'https://qrn1.com/playlisscreen',
          isChecked,
          id:response.data.data.id,
          type:'Playlist',
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



  const setTempColor = (bottom, top, input) => {

    setbottom(bottom)
    settop(top)
    setinput(input)


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

                              


                               




                                

                                </div>
                              </AccordionItemPanel>
                            </AccordionItem>



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
                                  PLayList
                                </AccordionItemButton>
                              </AccordionItemHeading>
                              <AccordionItemPanel>

                                <div className="video-box">
                                  
                                 
                                  <br/>
                               

                    <div className='uploadimage' style={{ border: '2px dashed red' }}>
                  <div className='aligments'>
                    <div className="brand--back delete" style={{ backgroundColor: '#2947c7', width: '250px' , alignItems:'flex-start' , justifyContent:'center' , position:'relative' }}>
                      <h5 style={{ color: 'white'  }}>Upload MP3</h5>
                      <input 
                      type="file" 
                      accept="audio/*" 
                      onChange={(e) => handleFileChange(e)} 
                      style={{ marginTop: '10px' , opacity:'0' , position:'absolute' ,width:'100%' , bottom:'-2px' , left:'0px' }} 
                    />
                    </div>

                   

                  {/* <CloudinaryUpload isImagedisplay={isImagedisplay} cloudName={handleCallbackResume} number={"1"} /> */}

                    <span className='maximun'>
                      Maximum size: 50MB
                    </span>
                  </div>
                </div>
                                  {/* <div className="check-box-block">
                                    <input type="checkbox" />
                                    <label>Show the video directly</label>
                                  </div> */}


                                 
                                </div>








                              </AccordionItemPanel>
                            </AccordionItem>
                          </Accordion>
                        </div>
                      </div>
                    </AccordionItemPanel>


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

                <h2>Playlist</h2>
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


                    <div className='templetes1' style={{ backgroundImage: `url(${selectedlogo || rain})`, }}>


                      <div className='grad hover-grad  more-just' style={{ background: `#fff ` }}>

                        <div className='setlogs hero-li-list-boxz'>



                          <div className='hell-box-inside hitxgg'  style={{ background: `${bottom} ` , height:'90%' }} >

                            <img  src={selectedlogo || rain} alt="" />
                            {
                          audiourl &&

                          <audio controls  src={audiourl}/>
                        }


                            <div className="hththt" style={{ background: `${bottom} ` }}>
                            <p className='logsp' style={{ fontFamily: desFont }}>
                              {company}
                            </p>

                            <span className='logsspan' style={{ fontFamily: titleFont }}>

                              {titletext}
                            </span>

                            <p className='logsp' style={{ fontFamily: desFont }}>
                              {desctext}
                            </p>

                            </div>


                          <div className="play-list-box" style={{background:'white'}}>

                          {selectedIcons.map(icon => (
                      <div key={icon.id} >
                        <div className="play-list-card">



                        <div className="play-list-icon">
                          <img    className='play-list-icon-img' src={icon.icon} alt="" />
                          <p>{icon.text}</p>
                        </div>
                          <button><a href={icon.url} style={{color:'black'}}> Play</a></button>

                        </div>
                      
                      </div>
                    ))}





            </div>








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

export default Playlist;

