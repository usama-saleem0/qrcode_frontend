// NewQR_Website.js INNER 
import React, { useEffect, useState } from 'react';
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
import { useNavigate, useParams } from 'react-router-dom';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import moreinfo from "../../img/more-info.png";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Container, ProgressBar } from 'react-bootstrap';
import hil   from "../../img/hil.svg";



const VcardQr = () => {

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
  const { id } = useParams();



  useEffect(() => {

    if(id){

      console.log('params id', id)

      fetchvcardQr(id)




    }
   


  
  }, []);


  const fetchvcardQr = async (id) => {
   
    try {
      const response = await axios.get(`${baseurl}/getvcardQr/${id}`);
      setEmail(response.data.data.Email);
      setFilkerUrl(response.data.data.FilkerUrl)
      setFooterContact(response.data.data.FooterContact)
      setHeaderEmail(response.data.data.HeaderEmail)
      setHeaderLocation(response.data.data.HeaderLocation)
      setHeaderPhone(response.data.data.HeaderPhone)
      setPhoneNumber(response.data.data.PhoneNumber)
      setPinterestUrl(response.data.data.PinterestUrl)
      setSearchAddress(response.data.data.SearchAddress)
      setSelectedTemplate(response.data.data.SelectedTemplate)
      setSocialTitile(response.data.data.SocialTitile)
      setWebsiteContactPersonal(response.data.data.WebsiteContactPersonal)
      setYoutubeUrl(response.data.data.YoutubeUrl)
      setSelectedSplash(response.data.data.selectedsplash)
      setbottom(response.data.data.bottom)
      setColor(response.data.data.color)
      setCompanies(response.data.data.companies)
      setContactstorageFirstName(response.data.data.contactstorageFirstName)
      setContactstorageWebsite(response.data.data.contactstorageWebsite)
      setdesFont(response.data.data.desFont)
      setName(response.data.data.name)
      setSelectedCover(response.data.data.selectedCover)
      setSelectedImage(response.data.data.selectedImage)
      setselectedImagesinput(response.data.data.selectedImagesinput)
      showAnimation(response.data.data.showanimation)
      setSincedate(response.data.data.sincedate)
      setsurname(response.data.data.surname)
      setTitleFont(response.data.data.titleFont)
      settop(response.data.data.top)
      setValue(response.data.data.value)
      

      

     


      






     
    } catch (error) {
      console.error('Error fetching QR code by ID:', error);
    }
  };



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


    let selectedValueSvg = '';
  if (selectedValue && selectedValue.svg) {
    try {
      // Safely stringify selectedValue.svg
      selectedValueSvg = JSON.stringify(selectedValue.svg);
    } catch (error) {
      console.error('Error stringifying selectedValue.svg:', error);
      selectedValueSvg = ''; // Use fallback value in case of an error
    }
  }

    if(id){
      try {
        const response = await axios.post(`${baseurl}/updateTempleteVcard/${id}`, {
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
          // selectedValueSvg: JSON.stringify(selectedValue.svg),
          selectedValueSvg,
          userId,
          selectedIcons
        });
        // toast.success('Template Created Successfully');
       
  
        console.log('hello',response.data.data.id)
        const data = {
          password,
          startTime,
          endTime,
          url:'https://qrn1.com/VcradFullscreen',
          isChecked,
          id:response.data.data.id,
          type:'vCard Plus',
          userId: userId
          
        };
        localStorage.setItem('hyperId', response.data.data.id);
        toast.success('Successfully Saved press next button now')
        
        localStorage.setItem('myData', JSON.stringify(data));
        navigate('/Creatqrcode')
  
        console.log('QrCode submitted successfully:', response.data);
      } catch (error) {
        toast.error('Error submitting form:', error);
  
        console.error('Error submitting form:', error);
  
      }
    }

    else{

  


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
        // selectedValueSvg: JSON.stringify(selectedValue.svg),
        selectedValueSvg,
        userId,
        selectedIcons
      });
      // toast.success('Template Created Successfully');
     

      console.log('hello',response.data.data.id)
      const data = {
        password,
        startTime,
        endTime,
        url:'https://qrn1.com/VcradFullscreen',
        isChecked,
        id:response.data.data.id,
        type:'vCard Plus',
          userId: userId
        
      };
      localStorage.setItem('hyperId', response.data.data.id);
      toast.success('Successfully Saved press next button now')
      
      localStorage.setItem('myData', JSON.stringify(data));
      navigate('/Creatqrcode')

      console.log('QrCode submitted successfully:', response.data);
    } catch (error) {
      toast.error('Error submitting form:', error);

      console.error('Error submitting form:', error);

    }
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
    setFields([...fields, { type: 'Mobile phone', value: '' }]);
    setIsPhoneFieldAdded(!isPhoneFieldAdded);
  };

  // Function to delete a phone field
  const deleteField = (index) => {
    const newFields = fields.filter((_, i) => i !== index);
    setFields(newFields);
  };


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

                                  Select Template

                                </AccordionItemButton>
                              </AccordionItemHeading>
                              <AccordionItemPanel>

                                <div className='imagediv' style={{ width: '80%' }}>

                                  <div className="imdiv" onClick={() => handleTemplateClick(1)}>
                                    <img className='tempimage' src={temp1} alt="Template 1" />
                                  </div>

                                  <div className="imdiv" onClick={() => handleTemplateClick(2)}>

                                    <img className='tempimage' src={temp2} />
                                  </div>
                                  <div className="imdiv" onClick={() => handleTemplateClick(3)}>

                                    <img className='tempimage' src={temp3} />
                                  </div>

                                  <div className="imdiv" onClick={() => handleTemplateClick(4)}>

                                    <img className='tempimage' src={temp4} />
                                  </div>

                                  {/* <div className="imdiv" onClick={() => handleTemplateClick(5)}>

                                    <img className='tempimage' src={temp5} />
                                  </div>


                                  <div className="imdiv" onClick={() => handleTemplateClick(6)}>

                                    <img className='tempimage' src={temp6} />
                                  </div> */}







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

                                <div className='imagediv' >

                                  <div className="colordivs" onClick={() => setTempColor('#0B2660', '#0B2660', '#0B2660')}>
                                    <div className='colordiv' style={{ backgroundColor: '#0B2660' }}></div>
                                  </div>

                                  <div className="colordivs" onClick={() => setTempColor('#EE7E66', '#EE7E66', '#EE7E66')}>
                                    <div className='colordiv' style={{ backgroundColor: '#EE7E66' }}></div>
                                  </div>

                                  <div className="colordivs" onClick={() => setTempColor('#FDF5ED', '#FDF5ED', '#FDF5ED')}>
                                    <div className='colordiv' style={{ backgroundColor: '#FDF5ED' }}></div>
                                  </div>


                                  <div className="colordivs" onClick={() => setTempColor('#28EDC9', '#28EDC9', '#28EDC9')}>
                                    <div className='colordiv' style={{ backgroundColor: '#28EDC9' }}></div>
                                  </div>

                                  <div className="colordivs" onClick={() => setTempColor('#070722', '#070722', '#070722')}>
                                    <div className='colordiv' style={{ backgroundColor: '#070722' }}></div>
                                  </div>

                                  <div className="colordivs" onClick={() => setTempColor('#FDF5ED', '#FDF5ED', '#FDF5ED')}>
                                    <div className='colordiv' style={{ backgroundColor: '#FDF5ED' }}></div>
                                  </div>


                                  <div className="colordivs" onClick={() => setTempColor('#28ED28', '#28ED28', '#28ED28')}>
                                    <div className='colordiv' style={{ backgroundColor: '#28ED28' }}></div>
                                  </div>

                                  <div className="colordivs" onClick={() => setTempColor('#070722', '#070722', '#070722')}>
                                    <div className='colordiv' style={{ backgroundColor: '#070722' }}></div>
                                  </div>

                                  <div className="colordivs" onClick={() => setTempColor('#FDF5ED', '#FDF5ED', '#FDF5ED')}>
                                    <div className='colordiv' style={{ backgroundColor: '#FDF5ED' }}></div>
                                  </div>



                                  <div className="colordivs" onClick={() => setTempColor('#EDE728', '#EDE728', '#EDE728')}>
                                    <div className='colordiv' style={{ backgroundColor: '#EDE728' }}></div>
                                  </div>

                                  <div className="colordivs" onClick={() => setTempColor('#070722', '#070722', '#070722')}>
                                    <div className='colordiv' style={{ backgroundColor: '#070722' }}></div>
                                  </div>

                                  <div className="colordivs" onClick={() => setTempColor('#FDF5ED', '#FDF5ED', '#FDF5ED')}>
                                    <div className='colordiv' style={{ backgroundColor: '#FDF5ED' }}></div>
                                  </div>

                                  <div className="colordivs" onClick={() => setTempColor('#ED4C28', '#ED4C28', '#ED4C28')}>
                                    <div className='colordiv' style={{ backgroundColor: '#ED4C28' }}></div>
                                  </div>

                                  <div className="colordivs" onClick={() => setTempColor('#070722', '#070722', '#070722')}>
                                    <div className='colordiv' style={{ backgroundColor: '#070722' }}></div>
                                  </div>

                                  <div className="colordivs" onClick={() => setTempColor('#FDF5ED', '#FDF5ED', '#FDF5ED')}>
                                    <div className='colordiv' style={{ backgroundColor: '#FDF5ED' }}></div>
                                  </div>

                                  <div className="colordivs" onClick={() => setTempColor('#3D656B', '#3D656B', '#3D656B')}>
                                    <div className='colordiv' style={{ backgroundColor: '#3D656B' }}></div>
                                  </div>

                                  <div className="colordivs" onClick={() => setTempColor('#070722', '#070722', '#070722')}>
                                    <div className='colordiv' style={{ backgroundColor: '#070722' }}></div>
                                  </div>

                                  <div className="colordivs" onClick={() => setTempColor('#FDF5ED', '#FDF5ED', '#FDF5ED')}>
                                    <div className='colordiv' style={{ backgroundColor: '#FDF5ED' }}></div>
                                  </div>

                                  <div className="colordivs" onClick={() => setTempColor('#093A32', '#093A32', '#093A32')}>
                                    <div className='colordiv' style={{ backgroundColor: '#093A32' }}></div>
                                  </div>

                                  <div className="colordivs" onClick={() => setTempColor('#070722', '#070722', '#070722')}>
                                    <div className='colordiv' style={{ backgroundColor: '#070722' }}></div>
                                  </div>

                                  <div className="colordivs" onClick={() => setTempColor('#FDF5ED', '#FDF5ED', '#FDF5ED')}>
                                    <div className='colordiv' style={{ backgroundColor: '#FDF5ED' }}></div>
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
                              <AccordionItemHeading>
                                <AccordionItemButton>

                                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                                    <path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9" />
                                  </svg>

                                  About you

                                </AccordionItemButton>
                              </AccordionItemHeading>
                              <AccordionItemPanel>



                                {(selectedTemplate === 2 || selectedTemplate === 3 || selectedTemplate === 4) && (


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
                                )}


                                <div style={{ width: '30%' }} className='deteleiline'>

                                  <div className="imdiv">


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


                                <div className="inline">
                                  <div className="website--des">
                                    <p className='fontstitle'> Name</p>
                                    <input type="text" placeholder="Eg." className='w-100' name='handleename' value={name}
                                      onChange={(e) => setName(e.target.value)} />
                                  </div>

                                  <div className="website--des">
                                    <p className='fontstitle'> Surname</p>
                                    <input type="text" placeholder="Eg." className='w-100' name='handleesurname' value={surname} onChange={(e) => setsurname(e.target.value)} />
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

                                  Contact info

                                </AccordionItemButton>
                              </AccordionItemHeading>
                              <AccordionItemPanel>









                                <div style={{ width: '100%', paddingLeft: '20px', alignItems: 'flex-start', flexDirection: 'column' }} className='deteleiline'>


                                  <div className="hero-box-hide">


                                    {fields.map((field, index) => (
                                      <div className='AddPhoneNumber' key={index}>
                                        <div className="drop-box-he">
                                          <p>{selectedValue.type}</p>
                                          <Dropdown >
                                            <div className="MyQRCodes--second--navbar--ADD">


                                              <Dropdown.Toggle variant="" id="dropdown-basicss">
                                                {selectedValue.svg}
                                              </Dropdown.Toggle>

                                              <Dropdown.Menu style={{ width: '100%', height: '300px', overflowX: 'scroll' }}>


                                                <ul class="hello-ul-box" role="listbox" tabindex="-1">

                                                  <Dropdown.Item onClick={() => handleSelect('Mobile phone', (
                                                    <li class="hello-li" tabindex="0" role="option" aria-disabled="false" aria-selected="true" data-value="cell"><div class="jss9365"><svg class="MuiSvgIcon-root jss9366 cell" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M15.5 1h-8C6.12 1 5 2.12 5 3.5v17C5 21.88 6.12 23 7.5 23h8c1.38 0 2.5-1.12 2.5-2.5v-17C18 2.12 16.88 1 15.5 1zm-4 21c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm4.5-4H7V4h9v14z"></path></svg></div><span class="MuiTouchRipple-root"></span></li>
                                                  ))}>
                                                    <li class="hello-li" tabindex="0" role="option" aria-disabled="false" aria-selected="true" data-value="cell"><div class="jss9365"><svg class="MuiSvgIcon-root jss9366 cell" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M15.5 1h-8C6.12 1 5 2.12 5 3.5v17C5 21.88 6.12 23 7.5 23h8c1.38 0 2.5-1.12 2.5-2.5v-17C18 2.12 16.88 1 15.5 1zm-4 21c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm4.5-4H7V4h9v14z"></path></svg></div>Mobile phone<span class="MuiTouchRipple-root"></span></li>
                                                  </Dropdown.Item>

                                                  <Dropdown.Item onClick={() => handleSelect('Home', (
                                                    <li class="hello-li" tabindex="-1" role="option" aria-disabled="false" data-value="home"><div class="jss9365"><svg class="MuiSvgIcon-root jss9366 home" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"></path></svg></div><span class="MuiTouchRipple-root"></span></li>
                                                  ))}>
                                                    <li class="hello-li" tabindex="-1" role="option" aria-disabled="false" data-value="home"><div class="jss9365"><svg class="MuiSvgIcon-root jss9366 home" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"></path></svg></div>Home<span class="MuiTouchRipple-root"></span></li>
                                                  </Dropdown.Item>

                                                  <Dropdown.Item onClick={() => handleSelect('Work', (
                                                    <li class="hello-li" tabindex="-1" role="option" aria-disabled="false" data-value="work"><div class="jss9365"><svg class="MuiSvgIcon-root jss9366 work" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"></path></svg></div><span class="MuiTouchRipple-root"></span></li>
                                                  ))}>
                                                    <li class="hello-li" tabindex="-1" role="option" aria-disabled="false" data-value="work"><div class="jss9365"><svg class="MuiSvgIcon-root jss9366 work" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"></path></svg></div>Work<span class="MuiTouchRipple-root"></span></li>
                                                  </Dropdown.Item>
                                                  <Dropdown.Item onClick={() => handleSelect('Fax', (
                                                    <li class="hello-li" tabindex="-1" role="option" aria-disabled="false" data-value="fax"><div class="jss9365"><svg class="MuiSvgIcon-root jss9366 fax" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z"></path></svg></div><span class="MuiTouchRipple-root"></span></li>
                                                  ))}>
                                                    <li class="hello-li" tabindex="-1" role="option" aria-disabled="false" data-value="fax"><div class="jss9365"><svg class="MuiSvgIcon-root jss9366 fax" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z"></path></svg></div>Fax<span class="MuiTouchRipple-root"></span></li>
                                                  </Dropdown.Item>
                                                  <Dropdown.Item onClick={() => handleSelect('Other', (
                                                    <li class="hello-li" tabindex="-1" role="option" aria-disabled="false" data-value="other"><div class="jss9365"><svg class="MuiSvgIcon-root jss9366 other" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M16.18,21.3a5,5,0,0,1-3.53-1.46L4.16,11.35a5,5,0,0,1,0-7.07l.71-.7a3,3,0,0,1,4.24,0L11.23,5.7a3,3,0,0,1,0,4.24l-.6.6,2.83,2.83.6-.6a3,3,0,0,1,4.24,0l2.12,2.12a3,3,0,0,1,0,4.24l-.7.71A5,5,0,0,1,16.18,21.3ZM7,4.7A1,1,0,0,0,6.28,5l-.7.71a3,3,0,0,0,0,4.24l8.48,8.48a3,3,0,0,0,4.24,0l.71-.7a1,1,0,0,0,0-1.42l-2.12-2.12a1,1,0,0,0-1.42,0l-2,2L7.8,10.54l2-2a1,1,0,0,0,0-1.42L7.7,5A1,1,0,0,0,7,4.7Z"></path></svg></div><span class="MuiTouchRipple-root"></span></li>
                                                  ))}>
                                                    <li class="hello-li" tabindex="-1" role="option" aria-disabled="false" data-value="other"><div class="jss9365"><svg class="MuiSvgIcon-root jss9366 other" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M16.18,21.3a5,5,0,0,1-3.53-1.46L4.16,11.35a5,5,0,0,1,0-7.07l.71-.7a3,3,0,0,1,4.24,0L11.23,5.7a3,3,0,0,1,0,4.24l-.6.6,2.83,2.83.6-.6a3,3,0,0,1,4.24,0l2.12,2.12a3,3,0,0,1,0,4.24l-.7.71A5,5,0,0,1,16.18,21.3ZM7,4.7A1,1,0,0,0,6.28,5l-.7.71a3,3,0,0,0,0,4.24l8.48,8.48a3,3,0,0,0,4.24,0l.71-.7a1,1,0,0,0,0-1.42l-2.12-2.12a1,1,0,0,0-1.42,0l-2,2L7.8,10.54l2-2a1,1,0,0,0,0-1.42L7.7,5A1,1,0,0,0,7,4.7Z"></path></svg></div>Other<span class="MuiTouchRipple-root"></span></li>
                                                  </Dropdown.Item>
                                                </ul>


                                              </Dropdown.Menu>
                                            </div>
                                          </Dropdown>
                                        </div>
                                        <div className="hide-input">
                                          <input type="text" placeholder='Label...' />
                                        </div>

                                        <div className="hide-input">
                                          <input type="text" placeholder='E.g.0000000' name='PhoneNumber' value={PhoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
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

                                <br />

                                <div style={{ width: '100%', paddingLeft: '20px', alignItems: 'flex-start', flexDirection: 'column' }} className='deteleiline'>
                                  <div className="hero-box-hide">


                                    {fieldsWebsite.map((Websitefield, Websiteindex) => (
                                      <div className="w-100">

                                        <p>Personal Website</p>
                                        <div className='AddPhoneNumber' key={Websiteindex}>

                                          <div className="hide-input">
                                            <input type="text" placeholder='Label...' name='Website' value={WebsiteContactPersonal} onChange={(e) => setWebsiteContactPersonal(e.target.value)} />
                                          </div>

                                          <div className="hide-input">
                                            <input type="text" placeholder='E.g.0000000' name='Website' value={WebsiteContact} onChange={(e) => setWebsiteContact(e.target.value)} />
                                          </div>
                                          <svg class="MuiSvgIcon-root" focusable="false" onClick={() => deleteWebsiteField(Websiteindex)}
                                            style={{ cursor: 'pointer' }} viewBox="0 0 24 24" aria-hidden="true"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path></svg>
                                        </div>
                                      </div>
                                    ))}


                                  </div>

                                  <div className="brand--back delete " onClick={addWebsiteField} style={{ cursor: 'pointer' }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" style={{ fill: '#2947c7', width: '30px', height: '20px' }}><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z" /></svg>
                                    <h5 style={{ color: '#2947c7' }}>Add Website</h5>
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

                                  Images

                                </AccordionItemButton>
                              </AccordionItemHeading>
                              <AccordionItemPanel>

                                <div className='uploadimage' style={{ border: '2px dashed red' , position:'relative' }}>
                                  <ImageUploader style={{ margin: ' 0px 50px 0px 0px'  , position:'absolute' , top: '10%' , left:'45%' , opacity:0}}
                                    onFileAdded={(img) => getImageFileonImages(img)}
                                    onFileRemoved={(img) => runAfterImageDelete(img)}
                                  >
                                  </ImageUploader>
                                  <div className='aligments'>
                                    <div className="brand--back delete" style={{ backgroundColor: '#2947c7', width: '250px' }}>
                                      <h5 style={{ color: 'white' }}>Upload Image</h5>
                                    </div>
                                    <span className='maximun'>
                                      Maximum size: 15MB
                                    </span>
                                  </div>


                                </div>
                                <br />



                              </AccordionItemPanel>
                            </AccordionItem>



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
                                  {/* <div className="inline">
                                  <div class="radio-inputs" style={{ width: '100%' }}>

                                    <label class="radio">
                                      <input type="radio" name="radio" />
                                      <span class="name">Complete</span>
                                    </label>

                                    <label class="radio">
                                      <input type="radio" name="radio" />
                                      <span class="name">Url</span>
                                    </label>

                                    <label class="radio">
                                      <input type="radio" name="radio" />
                                      <span class="name">Coordinates</span>
                                    </label>
                                  </div>

                                </div> */}


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
                                        <input type="text" placeholder='URL///...' className='w-100' name="sincedate" value={sincedate} onChange={(e) => setSincedate(e.target.value)} />
                                      </div>

                                    </div>

                                  </TabPanel>



                                  <TabPanel>
                                    <div className="iline">
                                      <div className="website--des">
                                        <p className='fontstitle'>Latitude</p>
                                        <input type="text" className='w-100' name="sincedate" value={sincedate} onChange={(e) => setSincedate(e.target.value)} />
                                      </div>
                                      <div className="website--des">
                                        <p className='fontstitle'>Latitude</p>
                                        <input type="text" className='w-100' name="sincedate" value={sincedate} onChange={(e) => setSincedate(e.target.value)} />
                                      </div>

                                    </div>

                                  </TabPanel>


                                </Tabs>




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


                            <AccordionItem>
                              <AccordionItemHeading>
                                <AccordionItemButton>

                                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                                    <path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9" />
                                  </svg>

                                  Summary

                                </AccordionItemButton>
                              </AccordionItemHeading>
                              <AccordionItemPanel>

                                <div className="inline" style={{ gap: '15px' }}>

                                  <ReactQuill theme="snow" value={value} onChange={setValue} modules={modules} />
                                  {/* <ReactQuill theme="snow" value={value} onChange={(e) => setValue(e.target.value)} modules={modules} /> */}


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

                    {selectedTemplate === 1 && (
                      <div className='templetes1' style={{ backgroundImage: `url(${selectedCover || rain})`, }}>
                        <div className='grad' style={{ background: `#fff` }}>
                          <div className='setlogs   content -box-1' >
                            <div className="bg-my-box-code" style={{ background: `${bottom}` }}>
                              <img className='logsimage' src={selectedImage || logo} alt="Link" />
                              <br />
                              <span className='logsspan' style={{ fontFamily: titleFont }}>
                                {name ? name : 'Full Stack dev'}
                              </span>
                              <p className='logsp' style={{ fontFamily: desFont }}>
                                {surname ? surname : 'developer'}
                              </p>
                              <div className="content-icom-email-box">

                                <div className="content-icom-email-card">
                                  <div className='spa-icon-content' style={{ background: `${top}` }}>
                                    {isPhoneFieldAdded && (
                                      <svg className="MuiSvgIcon-root" focusable="false" viewBox="0 0 20 20" aria-hidden="true">
                                        <path d="M9.105 7.38l-2.829 2.829c-1.040 1.040-2.729 1.040-3.771 0l-0.943-0.943c-2.083-2.084-2.083-5.46 0-7.544l0.943-0.943c1.041-1.040 2.731-1.040 3.771 0l2.829 2.829c1.041 1.041 1.041 2.729 0 3.771z"></path>
                                        <path d="M18.695 16.97l-0.943 0.943c-2.084 2.084-5.46 2.084-7.543 0l-0.943-0.943c-1.041-1.041-1.041-2.729 0-3.771l2.828-2.829c1.041-1.040 2.731-1.040 3.771 0l2.829 2.829c1.041 1.041 1.041 2.729 0 3.771z"></path>
                                        <path d="M13.026 17.763v0c-0.82 0.819-2.148 0.819-2.967 0l-8.347-8.347c-0.82-0.82-0.82-2.148 0-2.967 0.819-0.82 2.147-0.82 2.965 0l8.348 8.347c0.819 0.82 0.819 2.148 0 2.967z"></path>
                                      </svg>
                                    )}
                                  </div>
                                  <p>Call</p>
                                </div>
                                <div className="content-icom-email-card">
                                  <div className='spa-icon-content ' style={{ background: ` ${top}` }}>
                                    {isEmailFieldAdded && (
                                      <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 16 13" aria-hidden="true"><path d="M14 13H2C0.896 13 0 12.104 0 11V3C0 1.896 0.896 1 2 1H14C15.104 1 16 1.896 16 3V11C16 12.104 15.104 13 14 13Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"></path><path d="M1 1L6.586 6.431C7.367 7.19 8.633 7.19 9.414 6.431L15 1" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M2 11L5 8" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M14 11L11 8" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                    )}
                                  </div>
                                  <p>Email</p>
                                </div>
                                <div className="content-icom-email-card">
                                  <div className='spa-icon-content ' style={{ background: ` ${top}` }}>
                                    {isWebsiteFieldAdded && (
                                      <svg class="spa-icon-content" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2s.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2s.07-1.35.16-2h4.68c.09.65.16 1.32.16 2s-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2s-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z"></path></svg>
                                    )}
                                  </div>
                                  <p>Website</p>
                                </div>
                              </div>
                            </div>
                            <div className="Title-box-next-more-box">
                              <div className="Title-box-next">
                                <span>
                                  <h3 dangerouslySetInnerHTML={{ __html: value }} />
                                </span>
                              </div>
                              <div className="Title-box-next" >
                                {selectedValue.svg}
                                <span>
                                  <h3>{selectedValue.type}</h3>
                                  <p>{PhoneNumber}</p>
                                </span>
                              </div>
                              <div className="Title-box-next">
                                <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true" ><path d="M19,4H5A3,3,0,0,0,2,7V17a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V7A3,3,0,0,0,19,4Zm0,2h0l-5.84,5a1.89,1.89,0,0,1-2.34,0L5,6H19Zm0,12H5a1,1,0,0,1-1-1V7.79L9.53,12.5a3.91,3.91,0,0,0,4.94,0L20,7.79V17A1,1,0,0,1,19,18Z"></path><path d="M7.29,13.29l-2,2a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l2-2a1,1,0,0,0-1.42-1.42Z"></path><path d="M16.71,13.29a1,1,0,0,0-1.42,1.42l2,2a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z"></path></svg>
                                <span>
                                  <h3>{Email}</h3>
                                  <p>Email</p>
                                </span>
                              </div>
                              <div className="Title-box-next">
                                <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2s.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2s.07-1.35.16-2h4.68c.09.65.16 1.32.16 2s-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2s-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z"></path></svg>
                                <span>
                                  <h3>{WebsiteContact}</h3>
                                  <p>{WebsiteContactPersonal}</p>
                                </span>
                              </div>
                              <div className="Title-box-next">
                                <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M12,21a1,1,0,0,1-.41-.09C11.28,20.77,4,17.4,4,11.28V11a8,8,0,0,1,16,0,.66.66,0,0,1,0,.14.66.66,0,0,1,0,.14c0,6.12-7.28,9.49-7.59,9.63A1,1,0,0,1,12,21ZM12,5a6,6,0,0,0-6,6v.1s0,.12,0,.15c0,4.14,4.58,6.88,6,7.63,1.42-.75,6-3.5,6-7.6,0,0,0-.16,0-.18s0-.09,0-.1h0A6,6,0,0,0,12,5Z"></path><path d="M12,15a4,4,0,1,1,4-4A4,4,0,0,1,12,15Zm0-6a2,2,0,1,0,2,2A2,2,0,0,0,12,9Z"></path></svg>
                                <span>
                                  <h3>{SearchAddress}</h3>
                                </span>
                              </div>
                              <div className="Title-box-next">
                                <svg class="MuiSvgIcon-root jss12" focusable="false" viewBox="0 0 18 19" aria-hidden="true"><path d="M15 18H3C1.896 18 1 17.104 1 16V7C1 5.896 1.896 5 3 5H15C16.104 5 17 5.896 17 7V16C17 17.104 16.104 18 15 18Z" fill-rule="evenodd" clip-rule="evenodd" stroke-width="2"></path><path d="M6 6V3C6 1.896 6.896 1 8 1H10C11.104 1 12 1.896 12 3V6" stroke-width="2"></path><path d="M5 9V12" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M13 9V12" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M2 10H16" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                <span>
                                  <h3>{companies}</h3>
                                </span>
                              </div>
                              <div className="Title-box-next">
                                <img src={selectedImagesinput || moreinfo} alt="" />
                              </div>
                                    <br />
                              <div style={{textAlign:'center' , color:'black'}}>Find me on:</div>
                              <hr />
                              {selectedIcons.map(icon => (
                              <div className="Title-box-next  extara-list-box" >


                                          <div style={{width:'18%'}}>
                                            <img src={icon.icon} alt="" />
                                            </div>

                                            
                                          <div style={{display:'flex' , flexDirection:'column' , alignItems:'flex-start'}}>
                                            <span style={{color:'black'}}>
                                              {icon.name}
                                            </span>
                                            <p>
                                              {icon.text}
                                            </p>
                                            </div>
                                          </div>
                              ))}
                              <div className="Title-box-next">
                                <button style={{ background: `${top}` }}><svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 19 20" aria-hidden="true" ><path d="M6 12h4c2.76 0 5 2.24 5 5 0 1.1-0.9 2-2 2h-10c-1.1 0-2-0.9-2-2 0-2.76 2.24-5 5-5z" stroke-linejoin="miter" stroke-linecap="square" stroke-miterlimit="10" stroke-width="2" stroke="currentColor" fill="none"></path><path d="M8 9c1.657 0 3-1.343 3-3s-1.343-3-3-3c-1.657 0-3 1.343-3 3s1.343 3 3 3z" stroke-linejoin="miter" stroke-linecap="square" stroke-miterlimit="10" stroke-width="2" stroke="currentColor" fill="none"></path><path d="M16 1v4" stroke-linejoin="miter" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" stroke="currentColor" fill="none"></path><path d="M18 3h-4" stroke-linejoin="miter" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" stroke="currentColor" fill="none"></path></svg>add contact</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {selectedTemplate === 2 && (
                      <div className='templetes1' style={{ backgroundImage: `url(${selectedCover || rain})`, }}>

                        <div className='grad' style={{ background: `transparent` }}>
                          <div className='setlogs   content -box-1 more-content-box' >

                            <div className="bg-my-box-code" style={{ background: `linear-gradient(0deg, ${bottom} 0%, ${top} 71%, #00d4ff00 100%)` }}>
                              <img className='logsimage' src={selectedImage || logo} alt="Link" />
                              <br />

                              <span className='logsspan' style={{ fontFamily: titleFont }}>

                                {name ? name : 'Full Stack dev'}

                              </span>
                              <p className='logsp' style={{ fontFamily: desFont }}>
                                {surname ? surname : 'developer'}
                              </p>


                              <div className="content-icom-email-box">

                                <div className="content-icom-email-card">
                                  <div className='spa-icon-content  more-ic' style={{ background: ` ${top}` }}>
                                    {isPhoneFieldAdded && (
                                      <svg className="MuiSvgIcon-root" focusable="false" viewBox="0 0 20 20" aria-hidden="true">
                                        <path d="M9.105 7.38l-2.829 2.829c-1.040 1.040-2.729 1.040-3.771 0l-0.943-0.943c-2.083-2.084-2.083-5.46 0-7.544l0.943-0.943c1.041-1.040 2.731-1.040 3.771 0l2.829 2.829c1.041 1.041 1.041 2.729 0 3.771z"></path>
                                        <path d="M18.695 16.97l-0.943 0.943c-2.084 2.084-5.46 2.084-7.543 0l-0.943-0.943c-1.041-1.041-1.041-2.729 0-3.771l2.828-2.829c1.041-1.040 2.731-1.040 3.771 0l2.829 2.829c1.041 1.041 1.041 2.729 0 3.771z"></path>
                                        <path d="M13.026 17.763v0c-0.82 0.819-2.148 0.819-2.967 0l-8.347-8.347c-0.82-0.82-0.82-2.148 0-2.967 0.819-0.82 2.147-0.82 2.965 0l8.348 8.347c0.819 0.82 0.819 2.148 0 2.967z"></path>
                                      </svg>
                                    )}

                                  </div>


                                </div>


                                <div className="content-icom-email-card">
                                  <div className='spa-icon-content  more-ic' style={{ background: ` ${top}` }}>
                                    {isEmailFieldAdded && (
                                      <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 16 13" aria-hidden="true"><path d="M14 13H2C0.896 13 0 12.104 0 11V3C0 1.896 0.896 1 2 1H14C15.104 1 16 1.896 16 3V11C16 12.104 15.104 13 14 13Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"></path><path d="M1 1L6.586 6.431C7.367 7.19 8.633 7.19 9.414 6.431L15 1" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M2 11L5 8" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M14 11L11 8" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                    )}

                                  </div>

                                </div>

                                <div className="content-icom-email-card">
                                  <div className='spa-icon-content  more-ic' style={{ background: ` ${top}` }}>
                                    {isWebsiteFieldAdded && (
                                      <svg class="spa-icon-content" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2s.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2s.07-1.35.16-2h4.68c.09.65.16 1.32.16 2s-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2s-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z"></path></svg>
                                    )}


                                  </div>

                                </div>

                              </div>

                            </div>




                            <div className="Title-box-next-more-box  tgp-box" style={{ background: `${bottom} ` }}>

                              <div className="Title-box-next  extara-list-box">
                                <span>
                                  <h3 dangerouslySetInnerHTML={{ __html: value }} />

                                </span>
                              </div>

                              <div className="Title-box-next extara-list-box" >
                                {selectedValue.svg}
                                <span>
                                  <h3>{selectedValue.type}</h3>
                                  <p>{PhoneNumber}</p>
                                </span>
                              </div>

                              <div className="Title-box-next extara-list-box">
                                <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true" ><path d="M19,4H5A3,3,0,0,0,2,7V17a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V7A3,3,0,0,0,19,4Zm0,2h0l-5.84,5a1.89,1.89,0,0,1-2.34,0L5,6H19Zm0,12H5a1,1,0,0,1-1-1V7.79L9.53,12.5a3.91,3.91,0,0,0,4.94,0L20,7.79V17A1,1,0,0,1,19,18Z"></path><path d="M7.29,13.29l-2,2a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l2-2a1,1,0,0,0-1.42-1.42Z"></path><path d="M16.71,13.29a1,1,0,0,0-1.42,1.42l2,2a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z"></path></svg>
                                <span>
                                  <h3>{Email}</h3>

                                </span>
                              </div>

                              <div className="Title-box-next  extara-list-box">
                                <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2s.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2s.07-1.35.16-2h4.68c.09.65.16 1.32.16 2s-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2s-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z"></path></svg>
                                <span>
                                  <h3>{WebsiteContact}</h3>
                                  <p>{WebsiteContactPersonal}</p>
                                </span>
                              </div>

                              <div className="Title-box-next  extara-list-box">
                                <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M12,21a1,1,0,0,1-.41-.09C11.28,20.77,4,17.4,4,11.28V11a8,8,0,0,1,16,0,.66.66,0,0,1,0,.14.66.66,0,0,1,0,.14c0,6.12-7.28,9.49-7.59,9.63A1,1,0,0,1,12,21ZM12,5a6,6,0,0,0-6,6v.1s0,.12,0,.15c0,4.14,4.58,6.88,6,7.63,1.42-.75,6-3.5,6-7.6,0,0,0-.16,0-.18s0-.09,0-.1h0A6,6,0,0,0,12,5Z"></path><path d="M12,15a4,4,0,1,1,4-4A4,4,0,0,1,12,15Zm0-6a2,2,0,1,0,2,2A2,2,0,0,0,12,9Z"></path></svg>
                                <span>
                                  <h3>{SearchAddress}</h3>
                                </span>
                              </div>

                              <div className="Title-box-next  extara-list-box">
                                <svg class="MuiSvgIcon-root jss12" focusable="false" viewBox="0 0 18 19" aria-hidden="true"><path d="M15 18H3C1.896 18 1 17.104 1 16V7C1 5.896 1.896 5 3 5H15C16.104 5 17 5.896 17 7V16C17 17.104 16.104 18 15 18Z" fill-rule="evenodd" clip-rule="evenodd" stroke-width="2"></path><path d="M6 6V3C6 1.896 6.896 1 8 1H10C11.104 1 12 1.896 12 3V6" stroke-width="2"></path><path d="M5 9V12" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M13 9V12" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M2 10H16" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                <span>

                                  <h3>{companies}</h3>

                                </span>
                              </div>

                              <div className="Title-box-next  extara-list-box" >
                                <img src={selectedImagesinput || moreinfo} alt="" />
                              </div>

                              <div className="Title-box-next  extara-list-boxx">
                                <button style={{ background: `${top}` }}><svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 19 20" aria-hidden="true" ><path d="M6 12h4c2.76 0 5 2.24 5 5 0 1.1-0.9 2-2 2h-10c-1.1 0-2-0.9-2-2 0-2.76 2.24-5 5-5z" stroke-linejoin="miter" stroke-linecap="square" stroke-miterlimit="10" stroke-width="2" stroke="currentColor" fill="none"></path><path d="M8 9c1.657 0 3-1.343 3-3s-1.343-3-3-3c-1.657 0-3 1.343-3 3s1.343 3 3 3z" stroke-linejoin="miter" stroke-linecap="square" stroke-miterlimit="10" stroke-width="2" stroke="currentColor" fill="none"></path><path d="M16 1v4" stroke-linejoin="miter" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" stroke="currentColor" fill="none"></path><path d="M18 3h-4" stroke-linejoin="miter" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" stroke="currentColor" fill="none"></path></svg>add contact</button>
                              </div>


                            </div>



                          </div>


                        </div>



                      </div>








                    )}
                    {selectedTemplate === 3 && (
                      <div className='templetes1' style={{ backgroundImage: `url(${selectedCover || rain})`, }}>

                        <div className='grad more-grad' style={{ background: `none` }}>
                          <div className='setlogs   content -box-1 more-content-boxz' style={{ background: ` ${bottom}` }} >

                            <div className="bg-my-box-code  extra-box-more-icon" >
                              {/* <img className='logsimage' src={selectedImage || logo} alt="Link" />
                                <br /> */}

                              <span className='logsspan' style={{ fontFamily: titleFont }}>

                                {name ? name : 'Full Stack dev'}

                              </span>
                              <p className='logsp' style={{ fontFamily: desFont }}>
                                {surname ? surname : 'developer'}
                              </p>


                              <div className="content-icom-email-box mmc-box">

                                {/* <div className="content-icom-email-card">
                                  <div className='spa-icon-content ' style={{ background: ` ${top}` }}>
                                    <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 20 20" aria-hidden="true" ><path d="M9.105 7.38l-2.829 2.829c-1.040 1.040-2.729 1.040-3.771 0l-0.943-0.943c-2.083-2.084-2.083-5.46 0-7.544l0.943-0.943c1.041-1.040 2.731-1.040 3.771 0l2.829 2.829c1.041 1.041 1.041 2.729 0 3.771z"></path><path d="M18.695 16.97l-0.943 0.943c-2.084 2.084-5.46 2.084-7.543 0l-0.943-0.943c-1.041-1.041-1.041-2.729 0-3.771l2.828-2.829c1.041-1.040 2.731-1.040 3.771 0l2.829 2.829c1.041 1.041 1.041 2.729 0 3.771z"></path><path d="M13.026 17.763v0c-0.82 0.819-2.148 0.819-2.967 0l-8.347-8.347c-0.82-0.82-0.82-2.148 0-2.967 0.819-0.82 2.147-0.82 2.965 0l8.348 8.347c0.819 0.82 0.819 2.148 0 2.967z"></path></svg>
                                  </div>
                                  <p>Call</p>
                                </div> */}
                                <div className="content-icom-email-card   mmc-card">
                                  <div className='spa-icon-content  more-ic' style={{ background: ` ${top}` }}>
                                    {isPhoneFieldAdded && (
                                      <svg className="MuiSvgIcon-root" focusable="false" viewBox="0 0 20 20" aria-hidden="true">
                                        <path d="M9.105 7.38l-2.829 2.829c-1.040 1.040-2.729 1.040-3.771 0l-0.943-0.943c-2.083-2.084-2.083-5.46 0-7.544l0.943-0.943c1.041-1.040 2.731-1.040 3.771 0l2.829 2.829c1.041 1.041 1.041 2.729 0 3.771z"></path>
                                        <path d="M18.695 16.97l-0.943 0.943c-2.084 2.084-5.46 2.084-7.543 0l-0.943-0.943c-1.041-1.041-1.041-2.729 0-3.771l2.828-2.829c1.041-1.040 2.731-1.040 3.771 0l2.829 2.829c1.041 1.041 1.041 2.729 0 3.771z"></path>
                                        <path d="M13.026 17.763v0c-0.82 0.819-2.148 0.819-2.967 0l-8.347-8.347c-0.82-0.82-0.82-2.148 0-2.967 0.819-0.82 2.147-0.82 2.965 0l8.348 8.347c0.819 0.82 0.819 2.148 0 2.967z"></path>
                                      </svg>
                                    )}
                                  </div>


                                </div>


                                <div className="content-icom-email-card   mmc-card">
                                  <div className='spa-icon-content  more-ic' style={{ background: ` ${top}` }}>
                                    {isEmailFieldAdded && (
                                      <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 16 13" aria-hidden="true"><path d="M14 13H2C0.896 13 0 12.104 0 11V3C0 1.896 0.896 1 2 1H14C15.104 1 16 1.896 16 3V11C16 12.104 15.104 13 14 13Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"></path><path d="M1 1L6.586 6.431C7.367 7.19 8.633 7.19 9.414 6.431L15 1" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M2 11L5 8" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M14 11L11 8" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                    )}
                                  </div>

                                </div>

                                <div className="content-icom-email-card   mmc-card">
                                  <div className='spa-icon-content  more-ic' style={{ background: ` ${top}` }}>
                                    {isWebsiteFieldAdded && (
                                      <svg class="spa-icon-content" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2s.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2s.07-1.35.16-2h4.68c.09.65.16 1.32.16 2s-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2s-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z"></path></svg>

                                    )}

                                  </div>

                                </div>

                              </div>

                            </div>




                            <div className="Title-box-next-more-box  tgp-box" >

                              <div className="Title-box-next  extara-list-box">
                                <span>
                                  <h3 dangerouslySetInnerHTML={{ __html: value }} />

                                </span>
                              </div>

                              <div className="Title-box-next extara-list-box" >
                                {selectedValue.svg}
                                <span>
                                  <h3>{selectedValue.type}</h3>
                                  <p>{PhoneNumber}</p>
                                </span>
                              </div>

                              <div className="Title-box-next extara-list-box">
                                <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true" ><path d="M19,4H5A3,3,0,0,0,2,7V17a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V7A3,3,0,0,0,19,4Zm0,2h0l-5.84,5a1.89,1.89,0,0,1-2.34,0L5,6H19Zm0,12H5a1,1,0,0,1-1-1V7.79L9.53,12.5a3.91,3.91,0,0,0,4.94,0L20,7.79V17A1,1,0,0,1,19,18Z"></path><path d="M7.29,13.29l-2,2a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l2-2a1,1,0,0,0-1.42-1.42Z"></path><path d="M16.71,13.29a1,1,0,0,0-1.42,1.42l2,2a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z"></path></svg>
                                <span>
                                  <h3>{Email}</h3>

                                </span>
                              </div>

                              <div className="Title-box-next  extara-list-box">
                                <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2s.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2s.07-1.35.16-2h4.68c.09.65.16 1.32.16 2s-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2s-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z"></path></svg>
                                <span>
                                  <h3>{WebsiteContact}</h3>
                                  <p>{WebsiteContactPersonal}</p>
                                </span>
                              </div>

                              <div className="Title-box-next  extara-list-box">
                                <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M12,21a1,1,0,0,1-.41-.09C11.28,20.77,4,17.4,4,11.28V11a8,8,0,0,1,16,0,.66.66,0,0,1,0,.14.66.66,0,0,1,0,.14c0,6.12-7.28,9.49-7.59,9.63A1,1,0,0,1,12,21ZM12,5a6,6,0,0,0-6,6v.1s0,.12,0,.15c0,4.14,4.58,6.88,6,7.63,1.42-.75,6-3.5,6-7.6,0,0,0-.16,0-.18s0-.09,0-.1h0A6,6,0,0,0,12,5Z"></path><path d="M12,15a4,4,0,1,1,4-4A4,4,0,0,1,12,15Zm0-6a2,2,0,1,0,2,2A2,2,0,0,0,12,9Z"></path></svg>
                                <span>
                                  <h3>{SearchAddress}</h3>


                                </span>
                              </div>

                              <div className="Title-box-next  extara-list-box">
                                <svg class="MuiSvgIcon-root jss12" focusable="false" viewBox="0 0 18 19" aria-hidden="true"><path d="M15 18H3C1.896 18 1 17.104 1 16V7C1 5.896 1.896 5 3 5H15C16.104 5 17 5.896 17 7V16C17 17.104 16.104 18 15 18Z" fill-rule="evenodd" clip-rule="evenodd" stroke-width="2"></path><path d="M6 6V3C6 1.896 6.896 1 8 1H10C11.104 1 12 1.896 12 3V6" stroke-width="2"></path><path d="M5 9V12" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M13 9V12" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M2 10H16" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                <span>
                                  <h3>{companies}</h3>


                                </span>
                              </div>

                              <div className="Title-box-next  extara-list-box" >
                                <img src={selectedImagesinput || moreinfo} alt="" />
                              </div>

                              <div className="Title-box-next  extara-list-boxx">
                                <button style={{ background: `${top}` }}><svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 19 20" aria-hidden="true" ><path d="M6 12h4c2.76 0 5 2.24 5 5 0 1.1-0.9 2-2 2h-10c-1.1 0-2-0.9-2-2 0-2.76 2.24-5 5-5z" stroke-linejoin="miter" stroke-linecap="square" stroke-miterlimit="10" stroke-width="2" stroke="currentColor" fill="none"></path><path d="M8 9c1.657 0 3-1.343 3-3s-1.343-3-3-3c-1.657 0-3 1.343-3 3s1.343 3 3 3z" stroke-linejoin="miter" stroke-linecap="square" stroke-miterlimit="10" stroke-width="2" stroke="currentColor" fill="none"></path><path d="M16 1v4" stroke-linejoin="miter" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" stroke="currentColor" fill="none"></path><path d="M18 3h-4" stroke-linejoin="miter" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" stroke="currentColor" fill="none"></path></svg>add contact</button>
                              </div>


                            </div>



                          </div>


                        </div>



                      </div>
                    )}
                    {selectedTemplate === 4 && (
                      <div className='templetes1' style={{ backgroundImage: `url(${selectedCover || rain})`, }}>

                        <div className='grad' style={{ background: `linear-gradient(0deg, ${bottom} 0%, ${top} 71%, #00d4ff00 100%)` }}>
                          <div className='setlogs   content -box-1 more-content-box' >






                            <div className="Title-box-next-more-box  tgp-box" >




                              <div className="Title-box-next  extara-list-box helle-more">


                                <span className='logsspan' style={{ fontFamily: titleFont }}>

                                  {name ? name : 'Full Stack dev'}

                                </span>
                                <p className='logsp' style={{ fontFamily: desFont }}>
                                  {surname ? surname : 'developer'}
                                </p>


                                <div className="content-icom-email-box">


                                  <div className="content-icom-email-card">
                                    <div className='spa-icon-content  more-ic' style={{ background: ` ${top}` }}>
                                      {isPhoneFieldAdded && (
                                        <svg className="MuiSvgIcon-root" focusable="false" viewBox="0 0 20 20" aria-hidden="true">
                                          <path d="M9.105 7.38l-2.829 2.829c-1.040 1.040-2.729 1.040-3.771 0l-0.943-0.943c-2.083-2.084-2.083-5.46 0-7.544l0.943-0.943c1.041-1.040 2.731-1.040 3.771 0l2.829 2.829c1.041 1.041 1.041 2.729 0 3.771z"></path>
                                          <path d="M18.695 16.97l-0.943 0.943c-2.084 2.084-5.46 2.084-7.543 0l-0.943-0.943c-1.041-1.041-1.041-2.729 0-3.771l2.828-2.829c1.041-1.040 2.731-1.040 3.771 0l2.829 2.829c1.041 1.041 1.041 2.729 0 3.771z"></path>
                                          <path d="M13.026 17.763v0c-0.82 0.819-2.148 0.819-2.967 0l-8.347-8.347c-0.82-0.82-0.82-2.148 0-2.967 0.819-0.82 2.147-0.82 2.965 0l8.348 8.347c0.819 0.82 0.819 2.148 0 2.967z"></path>
                                        </svg>
                                      )}
                                    </div>


                                  </div>


                                  <div className="content-icom-email-card">
                                    <div className='spa-icon-content  more-ic' style={{ background: ` ${top}` }}>
                                      {isEmailFieldAdded && (
                                        <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 16 13" aria-hidden="true"><path d="M14 13H2C0.896 13 0 12.104 0 11V3C0 1.896 0.896 1 2 1H14C15.104 1 16 1.896 16 3V11C16 12.104 15.104 13 14 13Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"></path><path d="M1 1L6.586 6.431C7.367 7.19 8.633 7.19 9.414 6.431L15 1" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M2 11L5 8" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M14 11L11 8" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                      )}
                                    </div>

                                  </div>

                                  <div className="content-icom-email-card">
                                    <div className='spa-icon-content  more-ic' style={{ background: ` ${top}` }}>
                                      {isWebsiteFieldAdded && (
                                        <svg class="spa-icon-content" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2s.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2s.07-1.35.16-2h4.68c.09.65.16 1.32.16 2s-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2s-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z"></path></svg>

                                      )}

                                    </div>

                                  </div>

                                </div>
                              </div>
                              {/* </div> */}

                              <div className="Title-box-next  extara-list-box">
                                <span>
                                  <h3 dangerouslySetInnerHTML={{ __html: value }} />

                                </span>
                              </div>

                              <div className="Title-box-next extara-list-box" >
                                {selectedValue.svg}
                                <span>
                                  <h3>{selectedValue.type}</h3>
                                  <p>{PhoneNumber}</p>
                                </span>
                              </div>

                              <div className="Title-box-next extara-list-box">
                                <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true" ><path d="M19,4H5A3,3,0,0,0,2,7V17a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V7A3,3,0,0,0,19,4Zm0,2h0l-5.84,5a1.89,1.89,0,0,1-2.34,0L5,6H19Zm0,12H5a1,1,0,0,1-1-1V7.79L9.53,12.5a3.91,3.91,0,0,0,4.94,0L20,7.79V17A1,1,0,0,1,19,18Z"></path><path d="M7.29,13.29l-2,2a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l2-2a1,1,0,0,0-1.42-1.42Z"></path><path d="M16.71,13.29a1,1,0,0,0-1.42,1.42l2,2a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z"></path></svg>
                                <span>
                                  <h3>{Email}</h3>

                                </span>
                              </div>

                              <div className="Title-box-next  extara-list-box">
                                <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2s.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2s.07-1.35.16-2h4.68c.09.65.16 1.32.16 2s-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2s-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z"></path></svg>
                                <span>
                                  <h3>{WebsiteContact}</h3>
                                  <p>{WebsiteContactPersonal}</p>
                                </span>
                              </div>

                              <div className="Title-box-next  extara-list-box">
                                <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M12,21a1,1,0,0,1-.41-.09C11.28,20.77,4,17.4,4,11.28V11a8,8,0,0,1,16,0,.66.66,0,0,1,0,.14.66.66,0,0,1,0,.14c0,6.12-7.28,9.49-7.59,9.63A1,1,0,0,1,12,21ZM12,5a6,6,0,0,0-6,6v.1s0,.12,0,.15c0,4.14,4.58,6.88,6,7.63,1.42-.75,6-3.5,6-7.6,0,0,0-.16,0-.18s0-.09,0-.1h0A6,6,0,0,0,12,5Z"></path><path d="M12,15a4,4,0,1,1,4-4A4,4,0,0,1,12,15Zm0-6a2,2,0,1,0,2,2A2,2,0,0,0,12,9Z"></path></svg>
                                <span>

                                  <h3>{SearchAddress}</h3>

                                </span>
                              </div>

                              <div className="Title-box-next  extara-list-box">
                                <svg class="MuiSvgIcon-root jss12" focusable="false" viewBox="0 0 18 19" aria-hidden="true"><path d="M15 18H3C1.896 18 1 17.104 1 16V7C1 5.896 1.896 5 3 5H15C16.104 5 17 5.896 17 7V16C17 17.104 16.104 18 15 18Z" fill-rule="evenodd" clip-rule="evenodd" stroke-width="2"></path><path d="M6 6V3C6 1.896 6.896 1 8 1H10C11.104 1 12 1.896 12 3V6" stroke-width="2"></path><path d="M5 9V12" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M13 9V12" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M2 10H16" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                <span>

                                  <h3>{companies}</h3>

                                </span>
                              </div>
                            

                              <div className="Title-box-next  extara-list-box" >
                                <img src={selectedImagesinput || moreinfo} alt="" />
                              </div>


                             

                              <div className="Title-box-next  extara-list-boxx">
                                <button style={{ background: `${top}` }}><svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 19 20" aria-hidden="true" ><path d="M6 12h4c2.76 0 5 2.24 5 5 0 1.1-0.9 2-2 2h-10c-1.1 0-2-0.9-2-2 0-2.76 2.24-5 5-5z" stroke-linejoin="miter" stroke-linecap="square" stroke-miterlimit="10" stroke-width="2" stroke="currentColor" fill="none"></path><path d="M8 9c1.657 0 3-1.343 3-3s-1.343-3-3-3c-1.657 0-3 1.343-3 3s1.343 3 3 3z" stroke-linejoin="miter" stroke-linecap="square" stroke-miterlimit="10" stroke-width="2" stroke="currentColor" fill="none"></path><path d="M16 1v4" stroke-linejoin="miter" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" stroke="currentColor" fill="none"></path><path d="M18 3h-4" stroke-linejoin="miter" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" stroke="currentColor" fill="none"></path></svg>add contact</button>
                              </div>


                            </div>



                          </div>


                        </div>



                      </div>
                    )}


                  </div>

                )}

              </div>


              <p>IMPORTANT: Remember that you canpreview and test your QR codes by clickingon the icon</p>

              {/* <button onClick={handleShowInFullScreen}>Show Full Screen</button> */}
              <button onClick={handleShowInFullScreen} className='brand--save   abosulutebutton' style={{ width: '60%' }}>
              Next
              </button> {/* Save button */}
            </div>



          </div>


        </div>
      </div>

    </>
  );
};

export default VcardQr;

