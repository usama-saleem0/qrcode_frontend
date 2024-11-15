// NewQR_Website.js INNER 
import React, { useState, useEffect } from 'react';
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
import appearanceicon from '../../img/appearanceicon.png'
import mokupimage from '../../img/mokup.jpg'
import coverimage from '../../img/coverimage.png'
import moveimage from '../../img/moveimage.png'
import delimg from '../../img/del-image.png'
import WebsiteDevice from '../../img/WebsiteDevice.png'
import Defaulttemp from '../../img/defaulttemplate.jpg'
import ezi from '../../img/ezgif.jpg'
import blank from "../../img/phoneblank.png";
import rain from "../../img/Social1.png";
import logo from "../../img/profilelogo.webp";
import insta from "../../img/instagram.webp";
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { baseurl } from '../../baseurl';
import ImageUploader from 'react-image-upload'
import 'react-image-upload/dist/index.css'
import { toast, ToastContainer } from 'react-toastify';



const VideoQr = () => {

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
  const [company, setCompany] = useState('');
  const [videodesc, setVideodesc] = useState('');

  const [videourl, setVideoUrl] = useState('');
  const [videoname, setVideoName] = useState('');
  const [showtempanimation, showAnimation] = useState(false);
  const [selectedsplash, setSelectedSplash] = useState(null);
  const [showSplash, setShowSplash] = useState(false);





  const navigate = useNavigate();

  const { id } = useParams();
  useEffect(() => {

    if (id) {

      console.log('params id', id)

      fetchVideoQr(id)




    }




  }, []);


  const fetchVideoQr = async (id) => {

    try {
      const response = await axios.get(`${baseurl}/getVideoQr/${id}`);
      console.log(response.data.data.selectedCover);

      setSelectedSplash(response.data.data.animationimage)
      setSelectedCover(response.data.data.selectedCover)
      setSelectedImage(response.data.data.selectedImage)
      setbottom(response.data.data.bottom)
      setColor(response.data.data.color)
      setdesFont(response.data.data.desFont)
      setDescriptionSize(response.data.data.descriptionsize)
      setDesctext(response.data.data.desctext)
      setLinks(response.data.data.links)
      setLinks2(response.data.data.links2)
      setLinks3(response.data.data.links3)
      setlinkSize(response.data.data.linksize)
      setLinktext(response.data.data.linktext)
      setLinktext2(response.data.data.linktext2)
      setLinktext3(response.data.data.linktext3)
      showAnimation(response.data.data.showanimation)
      setTitleFont(response.data.data.titleFont)
      setTitleSize(response.data.data.titlesize)
      setTitletext(response.data.data.titletext)
      settop(response.data.data.top)
      setinput(response.data.data.input)
      setIsSwitchOnss(response.data.data.isSwitchOnss)
      setPassword(response.data.data.password)
      setCompany(response.data.data.company)
      setVideodesc(response.data.data.videodesc)
      setVideoUrl(response.data.data.videourl)
      setVideoName(response.data.data.videourl)










    } catch (error) {
      console.error('Error fetching QR code by ID:', error);
    }
  };


  const handleDeleteVideo = () => {
    setVideoUrl(null);
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
        const response = await axios.post(`${baseurl}/updatevideotemplete/${id}`, {


          desFont,
          titleFont,

          bottom,
          videourl,
          videoname,
          videodesc,
          company,
          titletext,
          desctext,
          animationimage: selectedsplash,
          showanimation: showtempanimation,


          userId
        });


        const data = {
          password,
          startTime,
          endTime,
          url: 'https://qrn1.com/videoscreen',
          isChecked,
          id: response.data.data.id,
          type:'Video',
          userId: userId

        };

        localStorage.setItem('hyperId', response.data.data.id);
        localStorage.setItem('myData', JSON.stringify(data));

        toast.success('Successfully saved press next button ')
        navigate('/Creatqrcode')

        console.log('QrCode submitted successfully:', response.data);
      } catch (error) {

        console.error('Error submitting form:', error);

      }
    }

    else {
      try {
        const response = await axios.post(`${baseurl}/createvideotemplete`, {


          desFont,
          titleFont,

          bottom,
          videourl,
          videoname,
          videodesc,
          company,
          titletext,
          desctext,
          animationimage: selectedsplash,
          showanimation: showtempanimation,

          userId
        });


        const data = {
          password,
          startTime,
          endTime,
          url: 'https://qrn1.com/videoscreen',
          isChecked,
          id: response.data.data.id,
          type:'Video',
          userId: userId

        };

        localStorage.setItem('hyperId', response.data.data.id);
        localStorage.setItem('myData', JSON.stringify(data));

        toast.success('Successfully saved press next button ')
        navigate('/Creatqrcode')

        console.log('QrCode submitted successfully:', response.data);
      } catch (error) {

        console.error('Error submitting form:', error);

      }

    }

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
        setVideoName(response.data.data)


        const urlshow = `${baseurl}/storage/${response.data.data}`
        setVideoUrl(urlshow)
        // setUploadStatus(`Upload successful: ${response.data.url}`);
      } catch (error) {
        // setUploadStatus('Upload failed');
      }


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
        <ToastContainer />
        <div className='NewQR video-sec'>
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

                                    <div className='colordiv' style={{ backgroundColor: '#EE7E66', width: '100%' }}></div>
                                    {/* <div className='colordiv' style={{ backgroundColor: '#FDF5ED' }}></div>

                                    <div className='colordiv' style={{ backgroundColor: '#0B2660' }}></div> */}

                                  </div>
                                  <div className="colordivs" onClick={() => setTempColor('#28EDC9', '#070722', '#FDF5ED')}>

                                    <div className='colordiv' style={{ backgroundColor: '#28EDC9', width: '100%' }}></div>
                                    {/* <div className='colordiv' style={{ backgroundColor: '#FDF5ED' }}></div>
                                    <div className='colordiv' style={{ backgroundColor: '#070722' }}></div> */}

                                  </div>
                                  <div className="colordivs" onClick={() => setTempColor('#28ED28', '#070722', '#FDF5ED')}>

                                    <div className='colordiv' style={{ backgroundColor: '#28ED28', width: '100%' }}></div>
                                    {/* <div className='colordiv' style={{ backgroundColor: '#FDF5ED' }}></div>
                                    <div className='colordiv' style={{ backgroundColor: '#070722' }}></div> */}

                                  </div>

                                  <div className="colordivs" onClick={() => setTempColor('#EDE728', '#070722', '#FDF5ED')}>

                                    <div className='colordiv' style={{ backgroundColor: '#EDE728', width: '100%' }}></div>
                                    {/* <div className='colordiv' style={{ backgroundColor: '#FDF5ED' }}></div>
                                    <div className='colordiv' style={{ backgroundColor: '#070722' }}></div> */}

                                  </div>

                                  <div className="colordivs" onClick={() => setTempColor('#ED4C28', '#070722', '#FDF5ED')}>

                                    <div className='colordiv' style={{ backgroundColor: '#ED4C28', width: '100%' }}></div>
                                    {/* <div className='colordiv' style={{ backgroundColor: '#FDF5ED' }}></div>
                                    <div className='colordiv' style={{ backgroundColor: '#070722' }}></div> */}

                                  </div>

                                  <div className="colordivs" onClick={() => setTempColor('#3D656B', '#070722', '#FDF5ED')}>

                                    <div className='colordiv' style={{ backgroundColor: '#3D656B', width: '100%' }}></div>
                                    {/* <div className='colordiv' style={{ backgroundColor: '#FDF5ED' }}></div>
                                    <div className='colordiv' style={{ backgroundColor: '#070722' }}></div> */}

                                  </div>

                                  <div className="colordivs" onClick={() => setTempColor('#093A32', '#070722', '#FDF5ED')}>

                                    <div className='colordiv' style={{ backgroundColor: '#093A32', width: '100%' }}></div>
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
                                  Link list Infirmation
                                </AccordionItemButton>
                              </AccordionItemHeading>
                              <AccordionItemPanel>

                                <div className="video-box">
                                  <p>Video URL</p>
                                  <div className="url-blocks">
                                    <input type="url"
                                      value={videourl}
                                      onChange={(e) => setVideoUrl(e.target.value)}
                                    />
                                    <button>Add video</button>
                                  </div>
                                  <br />
                                  {/* <div className="upload-video-box">
                                    <h4>If you prefer, you can also upload your video</h4>
                                    <input type="file" />
                                    <div className="input-show-block">
                                      <p>Upload video</p>
                                      <p>Maximum size: 300MB</p>
                                    </div>
                                  </div> */}

                                  <div className='uploadimage' style={{ border: '2px dashed red' }}>
                                    <div className='aligments'>
                                      <div className="brand--back delete" style={{ backgroundColor: '#2947c7', width: '250px', alignItems: 'flex-start', justifyContent: 'center', position: 'relative' }}>
                                        <h5 style={{ color: 'white' }}>Upload Video</h5>
                                        <input
                                          type="file"
                                          accept="video/*"
                                          onChange={(e) => handleFileChange(e)}
                                          style={{ marginTop: '10px', opacity: '0', position: 'absolute', width: '100%', bottom: '-2px', left: '0px' }}
                                        />
                                      </div>



                                      {/* <CloudinaryUpload isImagedisplay={isImagedisplay} cloudName={handleCallbackResume} number={"1"} /> */}

                                      <span className='maximun'>
                                        Maximum size: 300MB
                                      </span>
                                    </div>
                                  </div>
                                  {/* <div className="check-box-block">
                                    <input type="checkbox" />
                                    <label>Show the video directly</label>
                                  </div> */}


                                  {
                                    videourl &&
                                    <div className="mock-up-block">
                                      <div className="left-blxoks">
                                        {/* <img src={mokupimage} alt="" /> */}

                                        <video width="200" controls src={videourl} autoPlay>
                                        </video>
                                      </div>
                                      <div className="right-blxoks">
                                        <div className="upperblock">
                                          <h3>{videoname}</h3>
                                          <div className="del-button" onClick={handleDeleteVideo}>
                                            <img src={delimg} alt="" />
                                          </div>
                                          <div className="move-button">
                                            <img src={moveimage} alt="" />
                                          </div>
                                        </div>
                                        <br />

                                        <div className="bottom-blocks">
                                          <textarea placeholder='Add a description of your video'
                                            value={videodesc}
                                            onChange={(e) => setVideodesc(e.target.value)}

                                          >

                                          </textarea>
                                        </div>
                                      </div>
                                    </div>
                                  }


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
                                  Video information
                                </AccordionItemButton>
                              </AccordionItemHeading>
                              <AccordionItemPanel>
                                <div className="video-input-blocks video-info">
                                  {/* <form action="">
                                    <label>
                                      Company
                                      <input type="text" name="" />
                                    </label>
                                    <label>
                                      Video title
                                      <input type="text" name="" />
                                    </label>
                                    <label>
                                      Description
                                      <input type="text" name="" />
                                    </label>
                                    <div className="re-button-blocks">
                                      <label>
                                        <p>Button</p>
                                        <input type="text" />
                                        <input type="url" />
                                      </label>
                                      <div className="re-cross-btn">
                                        x
                                      </div>
                                    </div>
                                    <div className="re-add-btn">
                                      <button>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                          <path d="M14 8H8V14H6V8H0V6H6V0H8V6H14V8Z" fill="#1043CB" />
                                        </svg>
                                        Add button
                                      </button>
                                    </div>
                                  </form> */}


                                  <div className="website--des">
                                    <p className='fontstitle'> Company</p>
                                    <input type="text" placeholder="Eg." className='w-100'

                                      value={company}
                                      onChange={(e) => setCompany(e.target.value)} />


                                  </div>



                                  {/* <div className="website--des">
                                  <p className='fontstitle'> PDF title</p>
                                  <input type="text" placeholder="Eg." className='w-100' />


                                </div>


                                <div className="website--des">
                                  <p className='fontstitle'>Description</p>
                                  <input type="text" placeholder="Eg." className='w-100' />


                                </div> */}


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

                <h2>video</h2>
                <span>
                  <img src={Pencel} alt="pen" />
                </span>
              </div>
              {/* <img src={WebsiteDevice} alt="Device Hover" /> */}
              <div style={{ position: 'relative' }}>



                <img src={blank} alt="Device Hover" />

                {/* <div className='templetes1' style={{ backgroundImage: `url(${selectedCover || rain})`, }}>


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



                </div> */}


                {showSplash ? (
                  <div className="splash-screen">
                    <div className="splash-image" style={{ backgroundImage: `url(${selectedsplash || rain})` }}></div>
                  </div>
                ) : (


                  <div className='templetes1'>


                    <div className='grad' style={{ background: `linear-gradient(0deg, ${bottom} 100%, ${top} 0%, #00d4ff00 100%) `, height: '30%' }}>

                      <div className='setlogs'>
                        <p className='logsp' >
                          {company ? company : ''}
                        </p>

                        <span className='logsspan' style={{ fontFamily: titleFont, fontSize: titlesize }}>

                          {titletext ? titletext : ''}
                        </span>



                        <p className='logsp' style={{ fontFamily: desFont, fontSize: descriptionsize }}>
                          {desctext ? desctext : ''}
                        </p>


                      </div>


                    </div>


                    <div className='grad' style={{ background: 'white', height: '70%' }}>


                      <div className='setlogs'>

                        {videourl ?

                          <video width="200" controls src={videourl} autoPlay>
                          </video>
                          :
                          <div></div>
                        }


                        <p>{videodesc}</p>







                      </div>


                    </div>



                  </div>
                )}

              </div>


              <p>IMPORTANT: Remember that you canpreview and test your QR codes by clickingon the icon</p>


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

export default VideoQr;

