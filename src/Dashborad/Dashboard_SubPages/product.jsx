// NewQR_Website.js INNER 
import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

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
import facebook from "../../img/facebook.png";
import twitter from "../../img/twitters.png";


import temp1 from "../../img/vcardtemp.webp";
import temp2 from "../../img/vcardtemp2.webp";
import temp3 from "../../img/vcardtemp3.webp";
import temp4 from "../../img/vcardtemp4.webp";
import temp5 from "../../img/vcardtemp5.webp";
import temp6 from "../../img/vcardtemp6.webp";
import blank from "../../img/phoneblank.png";
import rain from "../../img/Social1.png";
import logo from "../../img/profilelogo.webp";
import insta from "../../img/instagram.webp";
import ImageUploader from 'react-image-upload'
import Dropdown from 'react-bootstrap/Dropdown';
import { baseurl } from '../../baseurl';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import moreinfo from "../../img/more-info.png";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Container, ProgressBar } from 'react-bootstrap';
import hil from "../../img/hil.svg";



const ProductQr = () => {

  const [selectedCover, setSelectedCover] = useState(null);
  const [selectedIcons, setSelectedIcons] = useState([]);

  const icons = [
    { id: 1, name: 'Youtube', icon: youtube, placeholder: 'https://www.flickr.com/' },
    { id: 2, name: 'Instagram', icon: insta, placeholder: 'https://www.flickr.com/' },
    { id: 3, name: 'Facebook', icon: facebook, placeholder: 'https://www.flickr.com/' },
    { id: 4, name: 'Twitter', icon: twitter, placeholder: 'https://www.flickr.com/' },



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



  const [value, setValue] = useState('More than fifteen years of');

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


  const [bottom, setbottom] = useState('#262096');
  const [top, settop] = useState('#070722');
  const [input, setinput] = useState('');
  const [titleFont, setTitleFont] = useState('Lato');
  const [desFont, setdesFont] = useState('Lato');
  const [color, setColor] = useState('#000000');
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedImagesinput, setselectedImagesinput] = useState(null);
  const [name, setName] = useState('');
  const [surname, setsurname] = useState('');
  const [PhoneNumber, setPhoneNumber] = useState('920000000');
  const [Email, setEmail] = useState('@gmail.com');
  const [WebsiteContact, setWebsiteContact] = useState('WWW.example.com');
  const [WebsiteContactPersonal, setWebsiteContactPersonal] = useState('');
  const [isPhoneFieldAdded, setIsPhoneFieldAdded] = useState(false);
  const [isEmailFieldAdded, setisEmailFieldAdded] = useState(false);
  const [isWebsiteFieldAdded, setisWebsiteFieldAdded] = useState(false);
  const [sincedate, setSincedate] = useState('');
  const [companies, setCompanies] = useState('Brand Revam');
  const [contactstorageFirstName, setContactstorageFirstName] = useState('');
  const [contactstorageWebsite, setContactstorageWebsite] = useState('');
  const [HeaderPhone, setHeaderPhone] = useState('');
  const [HeaderEmail, setHeaderEmail] = useState('');
  const [HeaderLocation, setHeaderLocation] = useState('');
  const [FooterContact, setFooterContact] = useState('');
  const [SocialTitile, setSocialTitile] = useState('');
  const [FilkerUrl, setFilkerUrl] = useState('');
  const [PinterestUrl, setPinterestUrl] = useState('');
  const [YoutubeUrl, setYoutubeUrl] = useState('');
  const [selectedsplash, setSelectedSplash] = useState(null);
  const [showSplash, setShowSplash] = useState(false);
  const [showtempanimation, showAnimation] = useState(false);
  const [password, setPassword] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [isSwitchOnss, setIsSwitchOnss] = useState(false);
  const [isChecked, setIsSwitchOn] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState(1);
  const [SearchAddress, setSearchAddress] = useState('Address');
  const [selectedOption, setSelectedOption] = useState('Hide Address Link');


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

  const navigate = useNavigate();



  const handleShowInFullScreen = async () => {



    // navigate('/VcradFullscreen', {
    //   state: {
    //     selectedImage,
    //     color,
    //     desFont,
    //     titleFont,
    //     top,
    //     bottom
    //   }
    // });
    // navigate('/VcradFullscreen')
    handleSubmit1();
  };

  const handleSubmit1 = async (e) => {
    console.log(e, "formDatassss");



    const storedUser = getUserFromLocalStorage();
    const userId = storedUser ? storedUser.id : null;

    console.log(userId, "userId");


    try {
      const response = await axios.post(`${baseurl}/createtempleteVcard`, {
        selectedImage,
        selectedCover,
        color,
        desFont,
        titleFont,
        top,
        bottom,
        name,
        surname,
        type: selectedValue.type,
        PhoneNumber,
        Email,
        WebsiteContactPersonal,
        selectedImagesinput,
        value,
        SearchAddress,
        companies,
        contactstorageFirstName,
        contactstorageWebsite,
        HeaderPhone,
        HeaderEmail,
        HeaderLocation,
        FooterContact,
        SocialTitile,
        FilkerUrl,
        PinterestUrl,
        YoutubeUrl,
        animationimage: selectedsplash,
        showanimation: showtempanimation,
        SelectedTemplate: selectedTemplate,
        selectedValueSvg: JSON.stringify(selectedValue.svg),  // Convert SVG to string
        userId,
        selectedIcons
      });
      // toast.success('Template Created Successfully');


      console.log('hello', response.data.data.id)
      const data = {
        password,
        startTime,
        endTime,
        url: 'https://qrn1.com/VcradFullscreen',
        isChecked,
        id: response.data.data.id

      };
      toast.success('Successfully Saved press next button now')

      localStorage.setItem('myData', JSON.stringify(data));
      navigate('/Creatqrcode')

      console.log('QrCode submitted successfully:', response.data);
    } catch (error) {
      toast.error('Error submitting form:', error);

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


  const setTempColor = (bottom, top, input) => {

    setbottom(bottom)
    settop(top)
    setinput(input)
  }

  const showSplashScreen = () => {
    if (showtempanimation) {


      setShowSplash(true);
      const timer = setTimeout(() => {
        setShowSplash(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
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

        setSelectedImage(data.url);  // Set the image URL from Cloudinary
      } catch (error) {
        console.error('Upload failed:', error);
      }
    } else {
      console.error("Invalid image file object");
    }

    console.log({ imageFile });
  }

  async function getImageFileonImages(imageFile) {
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

        setselectedImagesinput(data.url);  // Set the image URL from Cloudinary
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

  const getUserFromLocalStorage = () => {
    const user = localStorage.getItem('userData');
    return user ? JSON.parse(user) : null;
  };


  const [fields, setFields] = useState([]);


  const addPhoneField = () => {
    setFields([...fields, { label: '', value: '' }]);


    console.log('field added' , fields);
  };

  const handleFieldChange = (index, field, value) => {
    const newFields = [...fields];
    newFields[index][field] = value;
    setFields(newFields);
  };

  const deleteField = (index) => {
    const newFields = fields.filter((_, i) => i !== index);
    setFields(newFields);
  };


  // Function to delete a phone field
 


  // State to store the selected value
  const [selectedValue, setSelectedValue] = useState({
    type: 'Mobile phone',
    svg: (
      <svg className="MuiSvgIcon-root jss9366 cell" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M15.5 1h-8C6.12 1 5 2.12 5 3.5v17C5 21.88 6.12 23 7.5 23h8c1.38 0 2.5-1.12 2.5-2.5v-17C18 2.12 16.88 1 15.5 1zm-4 21c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm4.5-4H7V4h9v14z" />
      </svg>
    )
  });


  // Function to handle selection change
  const handleSelect = (type, svg) => {
    setSelectedValue({ type, svg });
  };

  const handleTemplateClick = (e) => {
    setSelectedTemplate(e);
  };


  const [fieldsEmail, setfieldsEmail] = useState([]);

  // Function to add a new phone field
  const addEmailPhoneField = () => {
    setfieldsEmail([...fieldsEmail, { type: 'Email', value: '' }]); // You can customize the default field properties
    setisEmailFieldAdded(!isEmailFieldAdded);
  };

  // Function to delete a phone field
  const deleteEmailField = (index) => {
    const newEmailFields = fieldsEmail.filter((_, i) => i !== index);
    setfieldsEmail(newEmailFields);
  };


  const [fieldsWebsite, setfielsdWebsite] = useState([]);

  // Function to add a new phone field
  const addWebsiteField = () => {
    setfielsdWebsite([...fieldsEmail, { type: 'Website', value: '' }]); // You can customize the default field properties
    setisWebsiteFieldAdded(!isWebsiteFieldAdded);

  };

  // Function to delete a phone field
  const deleteWebsiteField = (index) => {
    const newWebstieFields = fieldsEmail.filter((_, i) => i !== index);
    setfielsdWebsite(newWebstieFields);
  };

  return (
    <>
      <div className="main-dashbord-contanir">
        <div className='NewQR'>
          <ToastContainer />


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
                                  

                                    <div className='colordiv' style={{ backgroundColor: '#0B2660' }}></div>

                                  </div>
                                  <div className="colordivs" onClick={() => setTempColor('#28EDC9', '#070722', '#FDF5ED')}>

                                    <div className='colordiv' style={{ backgroundColor: '#28EDC9' }}></div>
                                  
                                    <div className='colordiv' style={{ backgroundColor: '#070722' }}></div>

                                  </div>
                                  <div className="colordivs" onClick={() => setTempColor('#28ED28', '#070722', '#FDF5ED')}>

                                    <div className='colordiv' style={{ backgroundColor: '#28ED28' }}></div>
                                  
                                    <div className='colordiv' style={{ backgroundColor: '#070722' }}></div>

                                  </div>

                                  <div className="colordivs" onClick={() => setTempColor('#EDE728', '#070722', '#FDF5ED')}>

                                    <div className='colordiv' style={{ backgroundColor: '#EDE728' }}></div>
                                  
                                    <div className='colordiv' style={{ backgroundColor: '#070722' }}></div>

                                  </div>

                                  <div className="colordivs" onClick={() => setTempColor('#ED4C28', '#070722', '#FDF5ED')}>

                                    <div className='colordiv' style={{ backgroundColor: '#ED4C28' }}></div>
                                  
                                    <div className='colordiv' style={{ backgroundColor: '#070722' }}></div>

                                  </div>

                                  <div className="colordivs" onClick={() => setTempColor('#3D656B', '#070722', '#FDF5ED')}>

                                    <div className='colordiv' style={{ backgroundColor: '#3D656B' }}></div>
                                  
                                    <div className='colordiv' style={{ backgroundColor: '#070722' }}></div>

                                  </div>

                                  <div className="colordivs" onClick={() => setTempColor('#093A32', '#070722', '#FDF5ED')}>

                                    <div className='colordiv' style={{ backgroundColor: '#093A32' }}></div>
                                  
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
                             
                             

                                <div style={{ width: '30%' }} className='deteleiline'>

                               

                                    <ImageUploader
                                      onFileAdded={(img) => getImageFileObjects(img)}
                                      onFileRemoved={(img) => runAfterImageDelete(img)}
                                    />
                                  
                                  <div className="brand--back delete " >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="17" viewBox="0 0 19 17" fill="none">
                                      <path d="M2.86389 7.82015H17.3591C17.566 7.82015 17.7644 7.90232 17.9106 8.04858C18.0569 8.19484 18.139 8.39321 18.139 8.60005C18.139 8.80689 18.0569 9.00526 17.9106 9.15152C17.7644 9.29778 17.566 9.37995 17.3591 9.37995H2.86389L8.55249 15.067C8.69893 15.2134 8.78121 15.4121 8.78121 15.6192C8.78121 15.8263 8.69893 16.0249 8.55249 16.1713C8.40604 16.3178 8.20742 16.4 8.00032 16.4C7.79322 16.4 7.59459 16.3178 7.44815 16.1713L0.429035 9.15222C0.356407 9.07977 0.298784 8.99371 0.259466 8.89896C0.22015 8.80421 0.199911 8.70263 0.199911 8.60005C0.199911 8.49747 0.22015 8.39589 0.259466 8.30114C0.298784 8.20639 0.356407 8.12033 0.429035 8.04788L7.44815 1.02877C7.59459 0.88232 7.79322 0.800049 8.00032 0.800049C8.20742 0.800049 8.40604 0.88232 8.55249 1.02877C8.69893 1.17521 8.78121 1.37383 8.78121 1.58094C8.78121 1.78804 8.69893 1.98666 8.55249 2.13311L2.86389 7.82015Z" fill="#808080" />
                                    </svg>
                                    <h5 style={{ color: '#2947c7' }}>Delete</h5>
                                  </div>


                                </div>


                               
                                  <div className="website--des">
                                    <p className='fontstitle'> Name</p>
                                    <input type="text" placeholder="Eg." className='w-100' name='handleename' value={name}
                                      onChange={(e) => setName(e.target.value)} />
                                  </div>

                                  <div className="website--des">
                                    <p className='fontstitle'> Surname</p>
                                    <input type="text" placeholder="Eg." className='w-100' name='handleesurname' value={surname} onChange={(e) => setsurname(e.target.value)} />
                                  </div>

                                  <div className="website--des">
                                    <p className='fontstitle'> Surname</p>
                                    <input type="text" placeholder="Eg." className='w-100' name='handleesurname' value={surname} onChange={(e) => setsurname(e.target.value)} />
                                  </div>

                                  <hr/>


                                  {/* <div style={{ width: '100%', paddingLeft: '20px', alignItems: 'flex-start', flexDirection: 'column' }} className='deteleiline'>


                                <div className="hero-box-hide">


                                  {fields.map((field, index) => (
                                    <div className='AddPhoneNumber' key={index}>
                                      
                                      <div className="hide-input">
                                        <input type="text" placeholder='Label...' />
                                      </div>

                                      <div className="hide-input">
                                        <input type="text" placeholder='E.g.0000000' name='PhoneNumber'  />
                                      </div>
                                      <svg class="MuiSvgIcon-root" focusable="false" onClick={() => deleteField(index)}
                                        style={{ cursor: 'pointer' }} viewBox="0 0 24 24" aria-hidden="true"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path></svg>
                                    </div>
                                  ))}


                                </div>

                                <div className="brand--back delete " onClick={addPhoneField} style={{ cursor: 'pointer' }}>
                                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" style={{ fill: '#2947c7', width: '30px', height: '20px' }}><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z" /></svg>
                                  <h5 style={{ color: '#2947c7' }}>Add Phone</h5>
                                </div>

                                </div> */}



                      <div style={{ width: '100%', paddingLeft: '20px', alignItems: 'flex-start', flexDirection: 'column' }} className='deteleiline'>
                            <div className="hero-box-hide">
                              {fields.map((field, index) => (
                                <div className='AddPhoneNumber' key={index}>
                                  
                                  <div className="hide-input">
                                  <span style={{color:'grey' , fontSize:'15px'}}>
                                    Category 
                                    </span>
                                    <input 
                                      type="text" 
                                      placeholder='Category...' 
                                      label="Category"
                                      value={field.label} 
                                      onChange={(e) => handleFieldChange(index, 'label', e.target.value)} 
                                    />
                                  </div>

                                  <div className="hide-input">
                                    <span style={{color:'grey' , fontSize:'15px'}}>
                                    Category Value
                                    </span>
                                    <input 
                                      type="text" 
                                      placeholder='please enter a value'  
                                      name='value' 
                                      value={field.value} 
                                      onChange={(e) => handleFieldChange(index, 'value', e.target.value)} 
                                    />
                                  </div>

                                  {/* <svg className="MuiSvgIcon-root" focusable="false" onClick={() => deleteField(index)}
                                    style={{ cursor: 'pointer' }} viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
                                  </svg> */}
                                <div className='settrashs'>
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"  onClick={() => deleteField(index)} style={{fill:'red'}}><path d="M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg>
                              </div>
                                </div>
                              ))}
                            </div>

                            <div className="brand--back delete" onClick={addPhoneField} style={{ cursor: 'pointer' }}>
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" style={{ fill: '#2947c7', width: '30px', height: '20px' }}>
                                <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z" />
                              </svg>
                              <h5 style={{ color: '#2947c7' }}>Add Phone</h5>
                            </div>
                          </div>
                              

                              
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

                                  Companies

                                </AccordionItemButton>
                              </AccordionItemHeading>
                              <AccordionItemPanel>

                                <div className="inline">




                                  <div className="website--des">

                                    <input type="text" placeholder="Enter a text" className='w-100' name="companies" value={companies} onChange={(e) => setCompanies(e.target.value)} />
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

                                  Contact storage option

                                </AccordionItemButton>
                              </AccordionItemHeading>
                              <AccordionItemPanel>

                                <div className="inline">


                                  <div className="website--des">
                                    <p className='fontstitle'>First Name</p>
                                    <input type="text" placeholder="Eg." className='w-100' name="contactstorageFirstName" value={contactstorageFirstName} onChange={(e) => setContactstorageFirstName(e.target.value)} />
                                  </div>



                                  <div className="website--des">
                                    <p className='fontstitle'>Website</p>
                                    <input type="text" placeholder="Eg." className='w-100' name="contactstorageWebsite" value={contactstorageWebsite} onChange={(e) => setContactstorageWebsite(e.target.value)} />
                                  </div>
                                </div>




                                <br />

                                <div style={{ width: '30%', paddingLeft: '20px', alignItems: 'flex-start', flexDirection: 'column' }} className='deteleiline'>

                                  <div className="brand--back delete " style={{}}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" style={{ fill: '#2947c7', width: '30px', height: '20px' }}><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z" /></svg>
                                    <h5 style={{ color: '#2947c7' }}>Add Phone</h5>
                                  </div>

                                </div>
                                <br />

                                <div style={{ width: '30%', paddingLeft: '20px', alignItems: 'flex-start', flexDirection: 'column' }} className='deteleiline'>

                                  <div className="brand--back delete " style={{}}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" style={{ fill: '#2947c7', width: '30px', height: '20px' }}><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z" /></svg>
                                    <h5 style={{ color: '#2947c7' }}>Add Email</h5>
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

                                  Customize your button

                                </AccordionItemButton>
                              </AccordionItemHeading>
                              <AccordionItemPanel>

                                <h4>
                                  Header
                                </h4>

                                <div className="inline">


                                  <div className="website--des">
                                    <p className='fontstitle'>Phone</p>
                                    <input type="text" placeholder="Eg." className='w-100' name="HeaderPhone" value={HeaderPhone} onChange={(e) => setHeaderPhone(e.target.value)} />                                  </div>



                                </div>


                                <div className="inline">


                                  <div className="website--des">
                                    <p className='fontstitle'>Email</p>
                                    <input type="text" placeholder="Eg." className='w-100' name="HeaderEmail" value={HeaderEmail} onChange={(e) => setHeaderEmail(e.target.value)} />
                                  </div>



                                </div>


                                <div className="inline">


                                  <div className="website--des">
                                    <p className='fontstitle'>Location</p>
                                    <input type="text" placeholder="Eg." className='w-100' name="HeaderLocation" value={HeaderLocation} onChange={(e) => setHeaderLocation(e.target.value)} />
                                  </div>


                                </div>






                                <hr />

                                <h4>
                                  Footer
                                </h4>

                                <div className="inline">


                                  <div className="website--des">
                                    <p className='fontstitle'>Contact</p>
                                    <input type="text" placeholder="Eg." className='w-100' name="FooterContact" value={FooterContact} onChange={(e) => setFooterContact(e.target.value)} />
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
                                  <input type="text" placeholder="Enter website URL" className='w-100' value={password}
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

                <h2>vCard Plus</h2>
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
                      <div className='grad more-list-box-1'>
                        <div className='setlogs   content -box-1' >
                          <div className="bg-my-box-code  my-code-bg-list" >
                            <img className='logsimagex' src={selectedImage || logo} alt="Link" />
                            <br />
                            <span className='logsspan' style={{ fontFamily: titleFont }}>
                              {name ? name : 'Full Stack dev'}
                            </span>
                            <p className='logsp' style={{ fontFamily: desFont }}>
                              {surname ? surname : 'developer'}
                            </p>

                          </div>


                          <div className="red-white-main-box">
                            <div className="red-and-wh-box">
                              <span><h2>Type of Wine :</h2>Red</span>
                              <span><h2>Type of Wine :</h2>Red</span>
                              <span><h2>Type of Wine :</h2>Red</span>
                              <span><h2>Type of Wine :</h2>Red</span>
                              <span><h2>Type of Wine :</h2>Red</span>
                              <span><h2>Type of Wine :</h2>Red</span>
                              <span><h2>Type of Wine :</h2>Red</span>
                            </div>


                            <div className="red-and-wh-box">
                              <h1>Ingredients</h1>
                              <ul>
                                <li>Grapes</li>
                                <li>Sulfites</li>
                              </ul>
                            </div>


                            <div className="red-and-wh-box">
                              <h1>Allergens</h1>
                              <ul>

                                <li>     <div className="Certificates-icon-card">
                                <img src={logo} alt="" />
                                  </div> Sulfur and sulphites</li>
                              </ul>
                            </div>


                            <div className="red-and-wh-box">
                              <h1>Certificates</h1>
                              <div className="Certificates-box-listing">
                                <div className="Certificates-icon-card">
                                <img src={logo} alt="" />
                                </div>


                                <div className="Certificates-icon-card">
                                  <img src={logo} alt="" />
                                  </div>


                                  <div className="Certificates-icon-card">
                                  <img src={logo} alt="" />
                                  </div>
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

export default ProductQr;

