// NewQR_Website.js INNER 
import { React, useEffect, useState } from 'react';

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
import ImageUploader from 'react-image-upload'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import Dropdown from 'react-bootstrap/Dropdown';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { TimePicker, Checkbox, Button } from 'antd';
import moment from 'moment';
import 'antd/dist/reset.css'; // If you want the reset styling for v5







import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { baseurl } from '../../baseurl';
import Select from 'react-select';


import { Container, ProgressBar } from 'react-bootstrap';



const MenuQr = () => {

  const [bottom, setbottom] = useState('#262096');
  const [top, settop] = useState('#070722');
  const [input, setinput] = useState('');


  const [titleFont, setTitleFont] = useState('Lato');
  const [desFont, setdesFont] = useState('Lato');
  const [showSplash, setShowSplash] = useState(false);
  const [selectedsplash, setSelectedSplash] = useState(null);
  const [showtempanimation, showAnimation] = useState(false);
  const [selectedDays, setSelectedDays] = useState([]);
  const [value, setValue] = useState('More than fifteen years of');
  const [SocialTitile, setSocialTitile] = useState('');
  const [Website, setWebsite] = useState('');
  const [FirstName, setFirstName] = useState('');
  const [fieldsPhone, setfieldsPhone] = useState([]);
  const [isEmailFieldAdded, setisEmailFieldAdded] = useState(false);
  const [isPhoneFieldAdded, setisPhoneFieldAdded] = useState(false);
  const [fieldsEmail, setfieldsEmail] = useState([]);
  const [Email, setEmail] = useState('@gmail.com');
  const [Phone, setPhone] = useState('92232424');
  const [selectedOption, setSelectedOption] = useState('Hide Address Link');
  const [SearchAddress, setSearchAddress] = useState('Address');
  const [URLtab, setURLtab] = useState('');
  const [Latitude, setLatitude] = useState('');
  const [Longitude, setLongitude] = useState('');
  const [Name, setName] = useState('');
  const [TitleEvent, setTitleEvent] = useState('');
  const [color, setColor] = useState('#000000');
  const [selectedCover, setSelectedCover] = useState(null);


  const [isChecked, setIsSwitchOn] = useState(false);
  const [isSwitchOnss, setIsSwitchOnss] = useState(false);
  const [password, setPassword] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');

  const navigate = useNavigate();


  const { id } = useParams();
  useEffect(() => {

    if(id){

      console.log('params id', id)

      fecthMenuQr(id)




    }
   


  
  }, []);


  const fecthMenuQr = async (id) => {
   
    try {
      const response = await axios.get(`${baseurl}/getMenuQr/${id}`);
      setEmail(response.data.data.Email)
      setFirstName(response.data.data.FirstName)
      setLatitude(response.data.data.Latitude)
      setLongitude(response.data.data.Longitude)
      setName(response.data.data.Name)
      setSearchAddress(response.data.data.SearchAddress)
      setSocialTitile(response.data.data.SocialTitile)
      setTitleEvent(response.data.data.TitleEvent)
      setURLtab(response.data.data.URLtab)
      setWebsite(response.data.data.Website)
      setSelectedSplash(response.data.data.animationimage)
      setbottom(response.data.data.bottom)
      setColor(response.data.data.color)
      setdesFont(response.data.data.desFont)
      setSelectedCover(response.data.data.selectedCover)
      setSelectedDays(response.data.data.selectedDays)
      showAnimation(response.data.data.showanimation)
      setTitleFont(response.data.data.titleFont)
      settop(response.data.data.top)
      setValue(response.data.data.value)
     

   


     
    } catch (error) {
      console.error('Error fetching QR code by ID:', error);
    }
  };


  const handleSubmit1 = async (e) => {
    console.log(e, "formDatassss");



    const storedUser = getUserFromLocalStorage();
    const userId = storedUser ? storedUser.id : null;

    console.log(userId, "userId");
    if(id){

    try {
      const response = await axios.post(`${baseurl}/updateTempleteMenu/${id}`, {
        selectedCover,
        color,
        desFont,
        titleFont,
        top,
        bottom,
        animationimage: selectedsplash,
        showanimation: showtempanimation,
        selectedDays,
        value,
        SocialTitile,
        FirstName,
        Website,
        Phone,
        Email,
        SearchAddress,
        URLtab,
        Latitude,
        Longitude,
        Name,
        TitleEvent,
        userId
      });
      
      toast.success('QrCode created successfully');



      console.log('hello',response.data.data.id)
      const data = {
        password,
        startTime,
        endTime,
        url:'https://qrn1.com/MenuFullscreen',
        isChecked,
        id:response.data.data.id,
        type:'Menu',
        userId: userId
        
      };
      
      localStorage.setItem('hyperId', response.data.data.id);
      localStorage.setItem('myData', JSON.stringify(data));
      console.log('QrCode submitted successfully:', response.data);
      navigate('/Creatqrcode')


    } catch (error) {

      console.error('Error submitting form:', error);

    }
  }
  else{
    try {
      const response = await axios.post(`${baseurl}/createtempletmenu`, {
        selectedCover,
        color,
        desFont,
        titleFont,
        top,
        bottom,
        animationimage: selectedsplash,
        showanimation: showtempanimation,
        selectedDays,
        value,
        SocialTitile,
        FirstName,
        Website,
        Phone,
        Email,
        SearchAddress,
        URLtab,
        Latitude,
        Longitude,
        Name,
        TitleEvent,
        userId
      });
      
      toast.success('QrCode created successfully');



      console.log('hello',response.data.data.id)
      const data = {
        password,
        startTime,
        endTime,
        url:'https://qrn1.com/MenuFullscreen',
        isChecked,
        id:response.data.data.id,
        type:'Menu',
        userId: userId
        
      };
      
      localStorage.setItem('hyperId', response.data.data.id);
      localStorage.setItem('myData', JSON.stringify(data));
      console.log('QrCode submitted successfully:', response.data);
      navigate('/Creatqrcode')


    } catch (error) {

      console.error('Error submitting form:', error);

    }
  }

  };


  const [selectedIcons, setSelectedIcons] = useState([]);

  const icons = [
    { id: 1, name: 'Youtube', icon: youtube, placeholder: 'https://www.flickr.com/' },
    { id: 2, name: 'Spotify', icon: spotify, placeholder: 'https://pinterest.com/' },
    { id: 3, name: 'Soundcloud', icon: soundcloud, placeholder: 'https://www.youtube.com/' },
    { id: 4, name: 'Ticket', icon: ticket, placeholder: 'https://www.youtube.com/' },

    // Add more icons here...
  ];


  const handleDropdownSelect = (eventKey) => {

    switch (eventKey) {
      case '1':
        setSelectedOption('Hide Address Link');
        break;
      case '2':
        setSelectedOption('Show Address Link');
        break;
      case '3':
        setSelectedOption('Show the Map');
        break;
      default:
        break;
    }

  };
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


  const addEmailPhoneField = () => {
    setfieldsEmail([...fieldsEmail, { type: 'Email', value: '' }]);
    setisEmailFieldAdded(!isEmailFieldAdded);
  };

  const deleteEmailField = (index) => {
    const newEmailFields = fieldsEmail.filter((_, i) => i !== index);
    setfieldsEmail(newEmailFields);
  };

  const addPhoneField = () => {
    setfieldsPhone([...fieldsPhone, { type: 'Button', value: '' }]);
    setisPhoneFieldAdded(!isPhoneFieldAdded);
  };

  const deletePhoneField = (index) => {
    const newPhoneFields = fieldsPhone.filter((_, i) => i !== index);
    setfieldsPhone(newPhoneFields);
  };


  const handleSwitchToggle = (event) => {
    setIsSwitchOn(event.target.checked);
  };

  const modules = {
    toolbar: [
      [{ 'font': [] }],
      [{ 'header': [1, 2, false] }],
      ['bold', 'italic', 'underline'],
      [{ 'align': [] }],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }],
      ['clean']                                         // remove formatting button
    ]
  };



  const handleDayChange = (selectedOptions) => {

    console.log(selectedOptions)
    setSelectedDays(selectedOptions);
  };


  const dayOptions = [
    { value: 'Monday', label: 'Monday' },
    { value: 'Tuesday', label: 'Tuesday' },
    { value: 'Wednesday', label: 'Wednesday' },
    { value: 'Thursday', label: 'Thursday' },
    { value: 'Friday', label: 'Friday' },
    { value: 'Saturday', label: 'Saturday' },
    { value: 'Sunday', label: 'Sunday' }
  ];







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






  const setTempColor = (bottom, top, input) => {

    setbottom(bottom)
    settop(top)
    setinput(input)


  }

  const getUserFromLocalStorage = () => {
    const user = localStorage.getItem('userData');
    return user ? JSON.parse(user) : null;
  };


  const showSplashScreen = () => {
    if (showtempanimation) {


      setShowSplash(true);
      const timer = setTimeout(() => {
        setShowSplash(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }


  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const [times, setTimes] = useState({
    Monday: { checked: false, start: moment('08:00', 'HH:mm'), end: moment('12:00', 'HH:mm') },
    Tuesday: { checked: true, start: moment('08:00', 'HH:mm'), end: moment('12:00', 'HH:mm') },
    // Add other days...
  });

  const handleTimeChange = (day, key, value) => {
    setTimes(prev => ({
      ...prev,
      [day]: {
        ...prev[day],
        [key]: value,
      },
    }));
  };

  const handleCheckedChange = (day) => {
    setTimes(prev => ({
      ...prev,
      [day]: {
        ...prev[day],
        checked: !prev[day].checked,
      },
    }));
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

                            {/* Design */}

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

                            {/* Navbar */}
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
                        {/* <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" /> */}
                        <input
                          className="form-check-input"
                          type="checkbox"
                          role="switch"
                          id="flexSwitchCheckDefault"
                          checked={isChecked}
                          onChange={handleSwitchToggle}
                        />
                        <p>Enable time ranges</p>
                      </div>

                      {isChecked && (
                        <div>


                          <div className="NewQR-Website-faq-box--websiteurl">
                            <h3>Name</h3>
                            <input type="text" placeholder="Write here the name of time range(e.g: Morning)" />

                          </div>


                          <div className='inline' style={{ marginBottom: '100px', gap: '30px' }}>
                            <div className="NewQR-Website-faq-box--websiteurl">
                              <h3>Days</h3>
                              <Select
                                isMulti
                                options={dayOptions}
                                value={selectedDays}
                                onChange={handleDayChange}
                                placeholder="Select Days"
                              />

                            </div>
                            <div className='inline' style={{ gap: '30px' }}>
                              <div className="NewQR-Website-faq-box--websiteurl">
                                <h3>Start</h3>
                                <input type="date" />

                              </div>

                              <div className="NewQR-Website-faq-box--websiteurl">
                                <h3>End</h3>
                                <input type="date" />

                              </div>
                            </div>


                          </div>

                          <button onClick={"handleShowInFullScreen"} className='brand--save' style={{ width: '20%' }}>
                            Create
                          </button>

                        </div>
                      )}

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

                                  Business Information

                                </AccordionItemButton>
                              </AccordionItemHeading>
                              <AccordionItemPanel>


                                <span className='coverimagespan'>
                                 Cover Image
                                </span>
                                <div style={{ width: '30%', marginBottom: '40px' }} className='deteleiline'>

                                  <div className="imdiv">

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




                                <div className="iline">
                                  <div className="website--des">
                                    <p className='fontstitle'> Comapany</p>
                                    <input type="text" placeholder="Artist name" className='w-100' name='TitleEvent' value={TitleEvent} onChange={(e) => setTitleEvent(e.target.value)} />



                                  </div>
                                </div>



                                <div className="iline">
                                  <div className="website--des">
                                    <p className='fontstitle'> Title</p>
                                    <input type="text" placeholder="Playlist title" className='w-100' name='Name' value={Name} onChange={(e) => setName(e.target.value)} />

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

                                  Facilities

                                </AccordionItemButton>
                              </AccordionItemHeading>
                              <AccordionItemPanel>

                                <div className="inline" style={{ gap: '15px' }}>

                                  <div className="svgicons">

                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" style={{ color: '#a99e9e' }}><path d="M54.2 202.9C123.2 136.7 216.8 96 320 96s196.8 40.7 265.8 106.9c12.8 12.2 33 11.8 45.2-.9s11.8-33-.9-45.2C549.7 79.5 440.4 32 320 32S90.3 79.5 9.8 156.7C-2.9 169-3.3 189.2 8.9 202s32.5 13.2 45.2 .9zM320 256c56.8 0 108.6 21.1 148.2 56c13.3 11.7 33.5 10.4 45.2-2.8s10.4-33.5-2.8-45.2C459.8 219.2 393 192 320 192s-139.8 27.2-190.5 72c-13.3 11.7-14.5 31.9-2.8 45.2s31.9 14.5 45.2 2.8c39.5-34.9 91.3-56 148.2-56zm64 160a64 64 0 1 0 -128 0 64 64 0 1 0 128 0z" /></svg>
                                  </div>


                                  <div className="svgicons">

                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style={{ fill: '#a99e9e' }}><path d="M135.2 117.4L109.1 192l293.8 0-26.1-74.6C372.3 104.6 360.2 96 346.6 96L165.4 96c-13.6 0-25.7 8.6-30.2 21.4zM39.6 196.8L74.8 96.3C88.3 57.8 124.6 32 165.4 32l181.2 0c40.8 0 77.1 25.8 90.6 64.3l35.2 100.5c23.2 9.6 39.6 32.5 39.6 59.2l0 144 0 48c0 17.7-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32l0-48L96 400l0 48c0 17.7-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32l0-48L0 256c0-26.7 16.4-49.6 39.6-59.2zM128 288a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm288 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" /></svg>
                                  </div>


                                  <div className="svgicons">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" style={{ fill: '#a99e9e' }}><path d="M288 0C422.4 0 512 35.2 512 80l0 16 0 32c17.7 0 32 14.3 32 32l0 64c0 17.7-14.3 32-32 32l0 160c0 17.7-14.3 32-32 32l0 32c0 17.7-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32l0-32-192 0 0 32c0 17.7-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32l0-32c-17.7 0-32-14.3-32-32l0-160c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32c0 0 0 0 0 0l0-32s0 0 0 0l0-16C64 35.2 153.6 0 288 0zM128 160l0 96c0 17.7 14.3 32 32 32l112 0 0-160-112 0c-17.7 0-32 14.3-32 32zM304 288l112 0c17.7 0 32-14.3 32-32l0-96c0-17.7-14.3-32-32-32l-112 0 0 160zM144 400a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm288 0a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM384 80c0-8.8-7.2-16-16-16L208 64c-8.8 0-16 7.2-16 16s7.2 16 16 16l160 0c8.8 0 16-7.2 16-16z" /></svg>

                                  </div>


                                  <div className="svgicons">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" style={{ fill: '#a99e9e' }}><path d="M248 48l0 208 48 0 0-197.3c23.9 13.8 40 39.7 40 69.3l0 128 48 0 0-128C384 57.3 326.7 0 256 0L192 0C121.3 0 64 57.3 64 128l0 128 48 0 0-128c0-29.6 16.1-55.5 40-69.3L152 256l48 0 0-208 48 0zM48 288c-12.1 0-23.2 6.8-28.6 17.7l-16 32c-5 9.9-4.4 21.7 1.4 31.1S20.9 384 32 384l0 96c0 17.7 14.3 32 32 32s32-14.3 32-32l0-96 256 0 0 96c0 17.7 14.3 32 32 32s32-14.3 32-32l0-96c11.1 0 21.4-5.7 27.2-15.2s6.4-21.2 1.4-31.1l-16-32C423.2 294.8 412.1 288 400 288L48 288z" /></svg>
                                  </div>

                                  <div className="svgicons">

                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" style={{ fill: '#a99e9e' }}><path d="M54.2 202.9C123.2 136.7 216.8 96 320 96s196.8 40.7 265.8 106.9c12.8 12.2 33 11.8 45.2-.9s11.8-33-.9-45.2C549.7 79.5 440.4 32 320 32S90.3 79.5 9.8 156.7C-2.9 169-3.3 189.2 8.9 202s32.5 13.2 45.2 .9zM320 256c56.8 0 108.6 21.1 148.2 56c13.3 11.7 33.5 10.4 45.2-2.8s10.4-33.5-2.8-45.2C459.8 219.2 393 192 320 192s-139.8 27.2-190.5 72c-13.3 11.7-14.5 31.9-2.8 45.2s31.9 14.5 45.2 2.8c39.5-34.9 91.3-56 148.2-56zm64 160a64 64 0 1 0 -128 0 64 64 0 1 0 128 0z" /></svg>
                                  </div>


                                  <div className="svgicons">

                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style={{ fill: '#a99e9e' }}><path d="M135.2 117.4L109.1 192l293.8 0-26.1-74.6C372.3 104.6 360.2 96 346.6 96L165.4 96c-13.6 0-25.7 8.6-30.2 21.4zM39.6 196.8L74.8 96.3C88.3 57.8 124.6 32 165.4 32l181.2 0c40.8 0 77.1 25.8 90.6 64.3l35.2 100.5c23.2 9.6 39.6 32.5 39.6 59.2l0 144 0 48c0 17.7-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32l0-48L96 400l0 48c0 17.7-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32l0-48L0 256c0-26.7 16.4-49.6 39.6-59.2zM128 288a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm288 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" /></svg>
                                  </div>


                                  <div className="svgicons">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" style={{ fill: '#a99e9e' }}><path d="M288 0C422.4 0 512 35.2 512 80l0 16 0 32c17.7 0 32 14.3 32 32l0 64c0 17.7-14.3 32-32 32l0 160c0 17.7-14.3 32-32 32l0 32c0 17.7-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32l0-32-192 0 0 32c0 17.7-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32l0-32c-17.7 0-32-14.3-32-32l0-160c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32c0 0 0 0 0 0l0-32s0 0 0 0l0-16C64 35.2 153.6 0 288 0zM128 160l0 96c0 17.7 14.3 32 32 32l112 0 0-160-112 0c-17.7 0-32 14.3-32 32zM304 288l112 0c17.7 0 32-14.3 32-32l0-96c0-17.7-14.3-32-32-32l-112 0 0 160zM144 400a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm288 0a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM384 80c0-8.8-7.2-16-16-16L208 64c-8.8 0-16 7.2-16 16s7.2 16 16 16l160 0c8.8 0 16-7.2 16-16z" /></svg>

                                  </div>


                                  <div className="svgicons">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" style={{ fill: '#a99e9e' }}><path d="M248 48l0 208 48 0 0-197.3c23.9 13.8 40 39.7 40 69.3l0 128 48 0 0-128C384 57.3 326.7 0 256 0L192 0C121.3 0 64 57.3 64 128l0 128 48 0 0-128c0-29.6 16.1-55.5 40-69.3L152 256l48 0 0-208 48 0zM48 288c-12.1 0-23.2 6.8-28.6 17.7l-16 32c-5 9.9-4.4 21.7 1.4 31.1S20.9 384 32 384l0 96c0 17.7 14.3 32 32 32s32-14.3 32-32l0-96 256 0 0 96c0 17.7 14.3 32 32 32s32-14.3 32-32l0-96c11.1 0 21.4-5.7 27.2-15.2s6.4-21.2 1.4-31.1l-16-32C423.2 294.8 412.1 288 400 288L48 288z" /></svg>
                                  </div>


                                  <div className="svgicons">

                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" style={{ fill: '#a99e9e' }}><path d="M54.2 202.9C123.2 136.7 216.8 96 320 96s196.8 40.7 265.8 106.9c12.8 12.2 33 11.8 45.2-.9s11.8-33-.9-45.2C549.7 79.5 440.4 32 320 32S90.3 79.5 9.8 156.7C-2.9 169-3.3 189.2 8.9 202s32.5 13.2 45.2 .9zM320 256c56.8 0 108.6 21.1 148.2 56c13.3 11.7 33.5 10.4 45.2-2.8s10.4-33.5-2.8-45.2C459.8 219.2 393 192 320 192s-139.8 27.2-190.5 72c-13.3 11.7-14.5 31.9-2.8 45.2s31.9 14.5 45.2 2.8c39.5-34.9 91.3-56 148.2-56zm64 160a64 64 0 1 0 -128 0 64 64 0 1 0 128 0z" /></svg>
                                  </div>


                                  <div className="svgicons">

                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style={{ fill: '#a99e9e' }}><path d="M135.2 117.4L109.1 192l293.8 0-26.1-74.6C372.3 104.6 360.2 96 346.6 96L165.4 96c-13.6 0-25.7 8.6-30.2 21.4zM39.6 196.8L74.8 96.3C88.3 57.8 124.6 32 165.4 32l181.2 0c40.8 0 77.1 25.8 90.6 64.3l35.2 100.5c23.2 9.6 39.6 32.5 39.6 59.2l0 144 0 48c0 17.7-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32l0-48L96 400l0 48c0 17.7-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32l0-48L0 256c0-26.7 16.4-49.6 39.6-59.2zM128 288a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm288 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" /></svg>
                                  </div>


                                  <div className="svgicons">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" style={{ fill: '#a99e9e' }}><path d="M288 0C422.4 0 512 35.2 512 80l0 16 0 32c17.7 0 32 14.3 32 32l0 64c0 17.7-14.3 32-32 32l0 160c0 17.7-14.3 32-32 32l0 32c0 17.7-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32l0-32-192 0 0 32c0 17.7-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32l0-32c-17.7 0-32-14.3-32-32l0-160c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32c0 0 0 0 0 0l0-32s0 0 0 0l0-16C64 35.2 153.6 0 288 0zM128 160l0 96c0 17.7 14.3 32 32 32l112 0 0-160-112 0c-17.7 0-32 14.3-32 32zM304 288l112 0c17.7 0 32-14.3 32-32l0-96c0-17.7-14.3-32-32-32l-112 0 0 160zM144 400a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm288 0a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM384 80c0-8.8-7.2-16-16-16L208 64c-8.8 0-16 7.2-16 16s7.2 16 16 16l160 0c8.8 0 16-7.2 16-16z" /></svg>

                                  </div>


                                  <div className="svgicons">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" style={{ fill: '#a99e9e' }}><path d="M248 48l0 208 48 0 0-197.3c23.9 13.8 40 39.7 40 69.3l0 128 48 0 0-128C384 57.3 326.7 0 256 0L192 0C121.3 0 64 57.3 64 128l0 128 48 0 0-128c0-29.6 16.1-55.5 40-69.3L152 256l48 0 0-208 48 0zM48 288c-12.1 0-23.2 6.8-28.6 17.7l-16 32c-5 9.9-4.4 21.7 1.4 31.1S20.9 384 32 384l0 96c0 17.7 14.3 32 32 32s32-14.3 32-32l0-96 256 0 0 96c0 17.7 14.3 32 32 32s32-14.3 32-32l0-96c11.1 0 21.4-5.7 27.2-15.2s6.4-21.2 1.4-31.1l-16-32C423.2 294.8 412.1 288 400 288L48 288z" /></svg>
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


                            {/* Opening Hours */}
                            <AccordionItem>
                              <AccordionItemHeading>
                                <AccordionItemButton>

                                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                                    <path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9" />
                                  </svg>

                                  Opening hours

                                </AccordionItemButton>
                              </AccordionItemHeading>
                              <AccordionItemPanel>


                                <Tabs>
                                  <TabList className="radio-inputs" style={{ width: '40%', height:'60px', cursor: 'pointer' , alignItems: 'center' }}>
                                    <Tab className="radio">am/pm</Tab>
                                    <Tab className="radio">24hrs</Tab>
                                  </TabList>

                                  <TabPanel>
                                    <div className="iline">
                                      <div style={{width: '100%'}}>
                                        {days.map((day) => (
                                          <div key={day} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px', gap: '20px' }}>
                                            <Checkbox
                                              checked={times[day]?.checked || false}
                                              onChange={() => handleCheckedChange(day)}
                                            />
                                            <span style={{ width: '100px' }}>{day}</span>
                                            <TimePicker
                                              value={times[day]?.start || moment('08:00', 'HH:mm')}
                                              onChange={(time) => handleTimeChange(day, 'start', time)}
                                              format="HH:mm"
                                              disabled={!times[day]?.checked}
                                            />
                                            <span style={{ margin: '0 10px' }}>to</span>
                                            <TimePicker
                                              value={times[day]?.end || moment('12:00', 'HH:mm')}
                                              onChange={(time) => handleTimeChange(day, 'end', time)}
                                              format="HH:mm"
                                              disabled={!times[day]?.checked}
                                            />
                                            <Button style={{ marginLeft: '10px' }}>+</Button>
                                          </div>
                                        ))}
                                      </div>
                                    </div>
                              

                                  </TabPanel>


                                  <TabPanel>


                                  </TabPanel>


                                </Tabs>


                              </AccordionItemPanel>
                            </AccordionItem>


                            {/* Location */}
                            <AccordionItem>
                              <AccordionItemHeading>
                                <AccordionItemButton>

                                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                                    <path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9" />
                                  </svg>

                                  Location

                                </AccordionItemButton>
                              </AccordionItemHeading>
                              <AccordionItemPanel>



                                <Tabs>

                                  <TabList className="radio-inputs" style={{ width: '100%', cursor: 'pointer' }}>
                                    <Tab className="radio">Complete</Tab>
                                    <Tab className="radio">Url</Tab>
                                    <Tab className="radio">Coordinates</Tab>
                                  </TabList>

                                  <TabPanel>


                                    <div className="iline">
                                      <div className="website--des">
                                        <p className='fontstitle'> Location Options</p>
                                        <Dropdown style={{ width: '100%' }} onSelect={handleDropdownSelect} >
                                          <div className="MyQRCodes--second--navbar--ADD" style={{ width: '100%' }} >


                                            <Dropdown.Toggle variant="" id="dropdown-basicss">
                                              {selectedOption}
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu style={{ width: '100%', height: '100px', overflowX: 'scroll' }} >


                                              <ul class="hello-ul-box" role="listbox" tabindex="-1" style={{ height: "300px" }}>

                                                <Dropdown.Item eventKey="1">
                                                  Hide Address Link
                                                </Dropdown.Item>

                                                <Dropdown.Item eventKey="2">
                                                  Show Address Link
                                                </Dropdown.Item>

                                                <Dropdown.Item eventKey="3">
                                                  Show the Map
                                                </Dropdown.Item>
                                              </ul>


                                            </Dropdown.Menu>
                                          </div>
                                        </Dropdown>

                                      </div>

                                    </div>



                                    <div className="iline">
                                      <div className="website--des">
                                        <p className='fontstitle'>Search Address</p>
                                        <input type="text" className='w-100' name="SearchAddress" value={SearchAddress} onChange={(e) => setSearchAddress(e.target.value)} />
                                      </div>

                                    </div>

                                  </TabPanel>



                                  <TabPanel>
                                    <div className="iline">
                                      <div className="website--des">
                                        <p className='fontstitle'>URL</p>
                                        <input type="text" placeholder='URL///...' className='w-100' name="URLtab" value={URLtab} onChange={(e) => setURLtab(e.target.value)} />
                                      </div>

                                    </div>

                                  </TabPanel>



                                  <TabPanel>
                                    <div className="iline">
                                      <div className="website--des">
                                        <p className='fontstitle'>Longitude</p>
                                        <input type="text" className='w-100' name="Longitude" value={Longitude} onChange={(e) => setLongitude(e.target.value)} />
                                      </div>
                                      <div className="website--des">
                                        <p className='fontstitle'>Latitude</p>
                                        <input type="text" className='w-100' name="Latitude" value={Latitude} onChange={(e) => setLatitude(e.target.value)} />
                                      </div>

                                    </div>

                                  </TabPanel>


                                </Tabs>




                              </AccordionItemPanel>
                            </AccordionItem>


                            {/* Conatact Information */}
                            <AccordionItem>
                              <AccordionItemHeading>
                                <AccordionItemButton>

                                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                                    <path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9" />
                                  </svg>

                                  Contact information

                                </AccordionItemButton>
                              </AccordionItemHeading>
                              <AccordionItemPanel>

                                <div className="inline">


                                  <div className="website--des">
                                    <p className='fontstitle'>First Name</p>
                                    <input type="text" placeholder="Eg." className='w-100' name="FirstName" value={FirstName} onChange={(e) => setFirstName(e.target.value)} />
                                  </div>



                                  <div className="website--des">
                                    <p className='fontstitle'>Website</p>
                                    <input type="text" placeholder="Eg." className='w-100' name="Website" value={Website} onChange={(e) => setWebsite(e.target.value)} />
                                  </div>
                                </div>




                                <br />

                                <div style={{ width: '100%', paddingLeft: '20px', alignItems: 'flex-start', flexDirection: 'column' }} className='deteleiline'>
                                  <div className="hero-box-hide">

                                    {fieldsPhone.map((Phonefield, Phoneindex) => (

                                      <div className="w-100">

                                        <p>TelePhone</p>
                                        <div className='AddPhoneNumber' key={Phoneindex}>
                                          <div className="hide-input">
                                            <input type="text" placeholder='Add Phone text here ' />
                                          </div>

                                          <div className="hide-input">
                                            <input type="text" placeholder='https://...' name='Phone' value={Phone} onChange={(e) => setPhone(e.target.value)} />
                                          </div>
                                          <svg class="MuiSvgIcon-root" focusable="false" onClick={() => deletePhoneField(Phoneindex)}
                                            style={{ cursor: 'pointer' }} viewBox="0 0 24 24" aria-hidden="true"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path></svg>
                                        </div>
                                      </div>

                                    ))}


                                  </div>


                                  <div className="brand--back delete " onClick={addPhoneField} style={{ cursor: 'pointer' }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" style={{ fill: '#2947c7', width: '30px', height: '20px' }}><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z" /></svg>
                                    <h5 style={{ color: '#2947c7' }}>Add Phone</h5>
                                  </div>

                                </div>

                                <br />

                                <div style={{ width: '100%', paddingLeft: '20px', alignItems: 'flex-start', flexDirection: 'column' }} className='deteleiline'>
                                  <div className="hero-box-hide">

                                    {fieldsEmail.map((Emailfield, Emailindex) => (

                                      <div className="w-100">

                                        <p>Email</p>
                                        <div className='AddPhoneNumber' key={Emailindex}>
                                          <div className="hide-input">
                                            <input type="text" placeholder='Label...' />
                                          </div>

                                          <div className="hide-input">
                                            <input type="text" placeholder='E.g.0000000' name='Email' value={Email} onChange={(e) => setEmail(e.target.value)} />
                                          </div>
                                          <svg class="MuiSvgIcon-root" focusable="false" onClick={() => deleteEmailField(Emailindex)}
                                            style={{ cursor: 'pointer' }} viewBox="0 0 24 24" aria-hidden="true"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path></svg>
                                        </div>
                                      </div>

                                    ))}


                                  </div>


                                  <div className="brand--back delete " onClick={addEmailPhoneField} style={{ cursor: 'pointer' }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" style={{ fill: '#2947c7', width: '30px', height: '20px' }}><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z" /></svg>
                                    <h5 style={{ color: '#2947c7' }}>Add Email</h5>
                                  </div>

                                </div>


                              </AccordionItemPanel>
                            </AccordionItem>



                            {/* Social Networks */}
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
                                  <input type="text" placeholder="Title" className='w-100' name="SocialTitile" value={SocialTitile} onChange={(e) => setSocialTitile(e.target.value)} />
                                </div>


                                <div>
                                  <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '20px' }}>
                                    {selectedIcons.map(icon => (
                                      <div key={icon.id} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                                        <img src={icon.icon} alt={icon.name} style={{ width: '24px', height: '24px' }} />
                                        <input
                                          type="text"
                                          placeholder={icon.placeholder}
                                          value={icon.url}
                                          onChange={(e) => handleInputChange(icon.id, e.target.value)}
                                          style={{ marginLeft: '10px', flex: 1 }}
                                        />
                                        <button onClick={() => handleRemoveIcon(icon.id)} style={{ marginLeft: '10px', border: 'none' }}>❌</button>
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


                            {/* Additional Information */}
                            <AccordionItem>
                              <AccordionItemHeading>
                                <AccordionItemButton>

                                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                                    <path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9" />
                                  </svg>

                                  Additional Information

                                </AccordionItemButton>
                              </AccordionItemHeading>
                              <AccordionItemPanel>

                                <div className="inline" style={{ gap: '15px' }}>

                                  <ReactQuill theme="snow" value={value} onChange={setValue} modules={modules} />


                                </div>





                              </AccordionItemPanel>
                            </AccordionItem>

                            {/* Welcome Screen */}
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


                                  <div className="brand--back preview " style={{ backgroundColor: showtempanimation ? 'blue' : 'grey', cursor: 'pointer' }}
                                    onClick={showSplashScreen}>

                                    <h5 style={{ color: 'white', fontSize: '15px', fontWeight: 'bold' }} >Preview</h5>
                                  </div>


                                </div>

                                <div className="iline" style={{ flexDirection: 'column' }}>
                                  <p>Time (seconds)</p>
                                  <input type="range" style={{ width: '100%' }} />
                                  <p style={{ display: 'flex', justifyContent: 'space-between' }}>
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

                <h2>Menu</h2>
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


                      <div className='grad hover-grad' style={{ background: `transparent ` }}>

                        <div className='setlogs hero-li-list-box'>



                          <div className='hell-box-inside hitx' style={{ background: ` ${bottom}`, borderRadius: '0px' }}>
                      

                            <span className='logsspan' style={{ fontFamily: titleFont, paddingBottom: '0px'  }}>

                              {TitleEvent || 'Full Stack dev'}
                            </span>


                            <h3>{Name || "We want to invite you to our wedding and enjoy a very special day together."}</h3>

                          </div>



                          <div className="hell-2-box-inside" style={{ background: ` #fff` }}>

                            <div className="hell-2-box-inside-card">
                              <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M21.26,8.22a10,10,0,1,0-13.14,13A10.12,10.12,0,0,0,12,22,10,10,0,0,0,21.26,8.22ZM19.37,15.1A8,8,0,1,1,4.63,8.9a8,8,0,1,1,14.74,6.2Z"></path><path d="M13,11.5V8a1,1,0,0,0-2,0v4.5l4.4,3.3a1,1,0,0,0,.6.2,1,1,0,0,0,.8-.4,1,1,0,0,0-.2-1.4Z"></path></svg>
                              <span>
                                <h2>Opening hours</h2>
                                <p>Open now</p>
                              </span>
                            </div>


                            <div className="hell-2-box-inside-card">
                              <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true" ><path d="M12,21a1,1,0,0,1-.41-.09C11.28,20.77,4,17.4,4,11.28V11a8,8,0,0,1,16,0,.66.66,0,0,1,0,.14.66.66,0,0,1,0,.14c0,6.12-7.28,9.49-7.59,9.63A1,1,0,0,1,12,21ZM12,5a6,6,0,0,0-6,6v.1s0,.12,0,.15c0,4.14,4.58,6.88,6,7.63,1.42-.75,6-3.5,6-7.6,0,0,0-.16,0-.18s0-.09,0-.1h0A6,6,0,0,0,12,5Z"></path><path d="M12,15a4,4,0,1,1,4-4A4,4,0,0,1,12,15Zm0-6a2,2,0,1,0,2,2A2,2,0,0,0,12,9Z"></path></svg>
                              <span>
                                <h2>{SearchAddress || "Gran Via 15, 28013, Madrid "}</h2>
                                <p>Show on map</p>
                              </span>
                            </div>



                            <div className="hell-2-box-inside-card">
                              <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true" ><path d="M14,12H10a6,6,0,0,0-6,6,3,3,0,0,0,3,3H17a3,3,0,0,0,3-3A6,6,0,0,0,14,12Zm3,7H7a1,1,0,0,1-1-1,4,4,0,0,1,4-4h4a4,4,0,0,1,4,4A1,1,0,0,1,17,19Z"></path><path d="M12,11A4,4,0,1,0,8,7,4,4,0,0,0,12,11Zm0-6a2,2,0,1,1-2,2A2,2,0,0,1,12,5Z"></path></svg>
                              <span>
                                <h2>{FirstName || "Special Coffee"} </h2>
                                <p>Name</p>
                              </span>
                            </div>



                            <div className="hell-2-box-inside-card">
                              <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true" ><path d="M16.18,21.3a5,5,0,0,1-3.53-1.46L4.16,11.35a5,5,0,0,1,0-7.07l.71-.7a3,3,0,0,1,4.24,0L11.23,5.7a3,3,0,0,1,0,4.24l-.6.6,2.83,2.83.6-.6a3,3,0,0,1,4.24,0l2.12,2.12a3,3,0,0,1,0,4.24l-.7.71A5,5,0,0,1,16.18,21.3ZM7,4.7A1,1,0,0,0,6.28,5l-.7.71a3,3,0,0,0,0,4.24l8.48,8.48a3,3,0,0,0,4.24,0l.71-.7a1,1,0,0,0,0-1.42l-2.12-2.12a1,1,0,0,0-1.42,0l-2,2L7.8,10.54l2-2a1,1,0,0,0,0-1.42L7.7,5A1,1,0,0,0,7,4.7Z"></path></svg>
                              <span>
                                <h2>{Phone || "1139133924"}</h2>
                                <p>Mobile phone</p>
                              </span>
                            </div>



                            <div className="hell-2-box-inside-card">
                              <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M19,4H5A3,3,0,0,0,2,7V17a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V7A3,3,0,0,0,19,4Zm0,2h0l-5.84,5a1.89,1.89,0,0,1-2.34,0L5,6H19Zm0,12H5a1,1,0,0,1-1-1V7.79L9.53,12.5a3.91,3.91,0,0,0,4.94,0L20,7.79V17A1,1,0,0,1,19,18Z"></path><path d="M7.29,13.29l-2,2a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l2-2a1,1,0,0,0-1.42-1.42Z"></path><path d="M16.71,13.29a1,1,0,0,0-1.42,1.42l2,2a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z"></path></svg>
                              <span>
                                <h2>{Email || "specialcoffe@gmail.com"}</h2>
                                <p>Email</p>
                              </span>
                            </div>


                            <div className="hell-2-box-inside-card">
                              <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true" ><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z"></path></svg>
                              <span>
                                <h2>{Website || "https://specialcoffee.com"}</h2>
                                <p>Website:</p>
                              </span>
                            </div>


                            <div className="hell-2-box-inside-card">
                              <h4>Facilities
                              </h4>
                              <div className="div-box-ipot">
                                <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 32 32" aria-hidden="true" ><path d="M18.13,23a1,1,0,0,0-1.31.53A4.08,4.08,0,1,1,11.88,18a1,1,0,0,0-.6-1.92,6.11,6.11,0,1,0,7.38,8.24A1,1,0,0,0,18.13,23Z"></path><circle cx="15" cy="7" r="2"></circle><path d="M22.27,20,16,18.25V14l1.2,1.6a1,1,0,0,0,.8.4h3a1,1,0,0,0,0-2H18.5l-2.7-3.6-.05-.05-.15-.13a.54.54,0,0,0-.16-.1l-.17-.07-.2,0H15l-.12,0-.19,0-.19.09-.1,0-.05.05-.13.15a.91.91,0,0,0-.11.16l-.06.17c0,.07,0,.13,0,.2S14,11,14,11v8a1,1,0,0,0,.73,1L21,21.75V27a1,1,0,0,0,2,0V21A1,1,0,0,0,22.27,20Z"></path></svg>
                              </div>



                              <div className="div-box-ipot">
                                <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 32 32" aria-hidden="true" ><path d="M26.93,15.8A3.5,3.5,0,0,0,24,13V10a5,5,0,0,0-5-5H13a5,5,0,0,0-5,5v3a3.51,3.51,0,0,0-2.93,2.78A3.82,3.82,0,0,0,5,16.5V19a4.5,4.5,0,0,0,.16,1.25,5,5,0,0,0,3.58,3.57A3.63,3.63,0,0,0,8,26a1,1,0,0,0,2,0,2.3,2.3,0,0,1,2.5-2h7A2.3,2.3,0,0,1,22,26a1,1,0,0,0,2,0,3.63,3.63,0,0,0-.74-2.18,4.94,4.94,0,0,0,3.57-3.55A4.38,4.38,0,0,0,27,19V16.5A4.26,4.26,0,0,0,26.93,15.8ZM13,7h6a3,3,0,0,1,3,3v3.35a3.51,3.51,0,0,0-1.93,2.47,3.82,3.82,0,0,0-.07.68V17H12v-.5a4.26,4.26,0,0,0-.07-.7A3.5,3.5,0,0,0,10,13.35V10A3,3,0,0,1,13,7ZM25,19a2.61,2.61,0,0,1-.1.75A3,3,0,0,1,22,22H10a3,3,0,0,1-2.91-2.27A2.75,2.75,0,0,1,7,19V16.5a1.32,1.32,0,0,1,0-.3,1.5,1.5,0,0,1,2.94,0,1.66,1.66,0,0,1,0,.32V18a1,1,0,0,0,1,1H21a1,1,0,0,0,1-1V16.5a1.32,1.32,0,0,1,0-.3,1.5,1.5,0,0,1,2.94,0,1.66,1.66,0,0,1,0,.32Z"></path></svg>
                              </div>



                              <div className="div-box-ipot">
                                <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 32 32" aria-hidden="true" ><path d="M25,11a5,5,0,0,0-5-5H17a1,1,0,0,0-1,1v5H10.62l-.73-1.45A1,1,0,0,0,9,10H7a1,1,0,0,0,0,2H8.38L9,13.24V14a7,7,0,0,0,7,7h2a7,7,0,0,0,7-7V13a1,1,0,0,0-.15-.5A1,1,0,0,0,25,12Zm-7,8H16a5,5,0,0,1-5-5H23A5,5,0,0,1,18,19Zm0-7V8h2a3,3,0,0,1,3,3v1Z"></path><circle cx="12.5" cy="24.5" r="2.5"></circle><circle cx="21.5" cy="24.5" r="2.5"></circle></svg>
                              </div>


                              <div className="div-box-ipot">
                                <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 32 32" aria-hidden="true" ><path d="M25,4a6,6,0,0,0-6,6v6a1,1,0,0,0,1,1h.88L20,24.89A.41.41,0,0,0,20,25a3,3,0,0,0,6,0V5A1,1,0,0,0,25,4Zm-4,6a4,4,0,0,1,3-3.87V15H21Zm3,15a1,1,0,0,1-2,.05l.9-8H24Z"></path><path d="M15,4a1,1,0,0,0-1,1v7a1,1,0,0,1-1,1H12V5a1,1,0,0,0-2,0v8H9a1,1,0,0,1-1-1V5A1,1,0,0,0,6,5v7a3,3,0,0,0,2,2.82V25a3,3,0,0,0,6,0V14.82A3,3,0,0,0,16,12V5A1,1,0,0,0,15,4ZM12,25a1,1,0,0,1-2,0V15h2Z"></path></svg>
                              </div>



                              <div className="div-box-ipot">
                                <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 32 32" aria-hidden="true" ><path d="M25,11H15a1,1,0,0,0-1,1v4a1,1,0,0,0,1,1H27a1,1,0,0,0,1-1V14A3,3,0,0,0,25,11Zm1,4H16V13h9a1,1,0,0,1,1,1Z"></path><path d="M27,18H6V11a1,1,0,0,0-2,0V22a1,1,0,0,0,2,0V20H26v2a1,1,0,0,0,2,0V19A1,1,0,0,0,27,18Z"></path><circle cx="10.5" cy="14.5" r="2.5"></circle></svg>
                              </div>



                              <div className="div-box-ipot">
                                <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 32 32" aria-hidden="true" ><path d="M27,14.83s0-.07,0-.1L25.38,9.18A3,3,0,0,0,22.49,7H19V6a1,1,0,0,0-1-1H14a1,1,0,0,0-1,1V7H9.51A3,3,0,0,0,6.62,9.18L5,14.73s0,.07,0,.1A1,1,0,0,0,5,15V26a1,1,0,0,0,1,1H8a1,1,0,0,0,1-1V24H23v2a1,1,0,0,0,1,1h2a1,1,0,0,0,1-1V15A1,1,0,0,0,27,14.83ZM8,22H7V16H25v6H8ZM8.55,9.73a1,1,0,0,1,1-.73h13a1,1,0,0,1,1,.73L24.67,14H7.33Z"></path><path d="M12,18H10a1,1,0,0,0,0,2h2a1,1,0,0,0,0-2Z"></path><path d="M22,18H20a1,1,0,0,0,0,2h2a1,1,0,0,0,0-2Z"></path></svg>
                              </div>










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

export default MenuQr;

