// NewQR_Website.js INNER 
import React, { useState, useRef, useEffect } from 'react';
import DeviceHover from '../../img/Device hover.png';
import CloudinaryUpload from "../../cloundanary/CloudinaryUpload";
import { baseurl } from '../../baseurl';
import axios from "axios";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


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

import ImageUploader from 'react-image-upload'
import 'react-image-upload/dist/index.css'

import btn1 from '../../img/tab1.png'
import btn2 from '../../img/tab2.png'
import btn3 from '../../img/tab3.png'
import btn4 from '../../img/tab4.png'
import btn5 from '../../img/tab5.png'
import btn6 from '../../img/tab6.png'
import btn7 from '../../img/tab7.png'
import btn8 from '../../img/tab8.png'
import btn9 from '../../img/tab9.png'
import btn10 from '../../img/tab10.png'
import btn11 from '../../img/tab11.png'
import btn12 from '../../img/tab12.png'
import btn13 from '../../img/tab13.png'
import btn14 from '../../img/tab14.png'
import btn15 from '../../img/tab15.png'
import btn16 from '../../img/tab16.png'
import btn17 from '../../img/tab17.png'
import btn18 from '../../img/tab18.png'
import btn19 from '../../img/tab19.png'
import btn20 from '../../img/tab20.png'
import btn21 from '../../img/tab21.png'
import btn22 from '../../img/tab22.png'

import tabScan3 from '../../img/tab3scan.png';
import tabScan4 from '../../img/tab4scan.png';
import tabScan5 from '../../img/tab5scan.png';
import tabScan6 from '../../img/tab6scan.png';
import tabScan7 from '../../img/tab7scan.png';
import tabScan8 from '../../img/tab8scan.png';
import tabScan9 from '../../img/tab9scan.png';
import tabScan10 from '../../img/tab10scan.png';
import tabScan11 from '../../img/tabscan11.png';
import tabScan12 from '../../img/tabscan12.png';
import tabScan13 from '../../img/tabscan13.png';
import tabScan14 from '../../img/tabscan14.png';
import tabScan15 from '../../img/tabscan15.png';
import tabScan16 from '../../img/tabscan16.png';
import tabScan17 from '../../img/tabscan17.png';
import tabScan18 from '../../img/tabscan18.png';
import tabScan19 from '../../img/tabscan19.png';
import tabScan20 from '../../img/tabscan20.png';
import tabScan21 from '../../img/tabscan21.png';
import tabScan22 from '../../img/tabscan22.png';


import icon1 from '../../img/qr-icon1.webp'
import icon2 from '../../img/qr-icon2.webp'
import icon3 from '../../img/qr-icon3.webp'
import icon from '../../img/qr-icon.webp'


import w1 from '../../img/wa1.svg'
import w2 from '../../img/wa2.svg'
import w3 from '../../img/wa3.svg'
import w4 from '../../img/wa4.svg'
import w5 from '../../img/wa5.svg'
import w6 from '../../img/wa6.svg'
import w7 from '../../img/wa7.svg'
import w8 from '../../img/wa8.svg'
import w9 from '../../img/wa9.svg'
import w10 from '../../img/wa10.svg'
import w11 from '../../img/wa11.svg'
import w12 from '../../img/wa12.svg'
import w13 from '../../img/wa13.svg'
import qr from "../../img/qr-icon2.webp";




import { Container, ProgressBar } from 'react-bootstrap';
import { QRCodeCanvas } from 'qrcode.react';
import html2canvas from 'html2canvas'; // Import html2canvas  
import { toPng } from 'html-to-image';
import QRCodeStyling from 'qr-code-styling';
import { useNavigate } from 'react-router-dom';





import { svg10String, svg11String, svg12String, svg13String, svg14String, svg15String, svg16String, svg1String, svg2String, svg3String, svg4String, svg5String, svg6String, svg7String, svg8String, svg9String } from '../../components/svgs';
import arcode from '../../img/arcode.png';









const BulkCreatqrcode = ({ qrCodeData, setQRCodeData }) => {

  const whiteback = useRef(null);
  const navigate = useNavigate();


  const [urls, setUrsl] = useState('https://qrn1.com/qrscan');
  const [socail, setSocail] = useState('');
  const [WholeQr, setWholeQr] = useState('');
  const [wdth, setwdth] = useState(140);
  const [margin, setmargin] = useState(12);
  const [marginleft, setmarginLeft] = useState(10);

  const [imageurl, setImage] = useState('');

  const [color, setColor] = useState("#ffff");
  const [bordercolor, setBorderColor] = useState("#000");

  const [level, setLevel] = useState('L'); // Ensure this is a string
  const [cornerStyle, setcornerStyle] = useState('square'); // Ensure this is a string
  const [Name, setName] = useState('');



  const [borcolor, setBorColor] = useState("#000000");
  const [fillcolor, setFillColor] = useState("transparent");
  const [framecolor, setframecolor] = useState("#000000");
  const [wholeqrimage, setWholeQrImage] = useState("#ffff");
  const [textcolor, setTextColor] = useState('');
  const [textcolors, setTextColors] = useState('#FFFFFF');
  const [bottomposition, setBottomposition] = useState(10);

  const qrCodeRef = useRef(null);
  const [qrCode, setQRCode] = useState(null);
  const [qrStyle, setQRStyle] = useState('dots'); // Initial style
  const [qrStyleCorners, setqrStyleCorners] = useState('square'); // Initial style
  const [qrStyledotCorners, setqrStyledotCorners] = useState('dots'); // Initial style
  const [borderdotconercolor, setborderdotconercolor] = useState('');
  const [bordersquareconercolor, setbordersquareconercolor] = useState('');
  const [gradborderinput1, setgradborderinput1] = useState('');
  const [gradborderinput2, setgradborderinput2] = useState('');
  const [gradbordercornerinput1, setgradbordercornerinput1] = useState('');
  const [gradbordercornerinput2, setgradbordercornerinput2] = useState('');
  const [gradbackground1, setgradbackground1] = useState('');
  const [gradbackground2, setgradbackground2] = useState('');
  const [gradicon1, setgradicon1] = useState('');
  const [gradicon2, setgradicon2] = useState('');


  const [useGradients, setUseGradients] = useState(false);
  const [useGradientscorner, setUseGradientscorner] = useState(false);
  const [useGradientsbackground, setuseGradientsbackground] = useState(false);
  const [useGradientsicons, setuseGradientsicons] = useState(false);




  const applySvgColor = (svgString, color) => {
    return svgString.replace(/{{color}}/g, color);
  };


  const setQrs = (e, wi, mar, bottom, left) => {

    console.log('svg', framecolor , e)

    const coloredSvg = applySvgColor(e, borcolor);


    setWholeQr(coloredSvg);
    setWholeQrImage(e);
    setBottomposition(bottom)

    if(window.innerWidth <= 1366){
      setmarginLeft(left);


      setmargin(mar);
    }



    setwdth(wi);

    setmargin(mar);
  }





  function getImageFileObject(imageFile) {
    console.log({ imageFile })
    if (imageFile instanceof File) {
        const imageUrl = URL.createObjectURL(imageFile);
        setSocail(imageUrl);
      } else {
        toast.error("The uploaded image is not a valid file.");
        console.error("The uploaded image is not a valid file.");
      }
  }

  function runAfterImageDelete(file) {
    console.log({ file })
  }

  const saveQRCode = async () => {
    const container = whiteback.current;
    if (container) {
      try {
        // Capture the content of the container as a canvas
        const canvas = await html2canvas(container, {
          backgroundColor: null, // Ensure the background is captured properly
          useCORS: true, // Ensure cross-origin images are captured
          scale: 2 // Increase scale for higher quality
        });


        // Convert canvas to data URL in JPEG format
        const dataUrl = canvas.toDataURL('image/jpeg');

        // Create a temporary link element
        const link = document.createElement('a');
        link.href = dataUrl;
        link.download = 'qrcode-container.jpg';

        // Append link to the body, click it, and remove it
        // document.body.appendChild(link);
        // link.click();
        // document.body.removeChild(link);



        const uploadPreset = "tixx1a8u"


        const formData = new FormData();
        formData.append('file', dataUrl);
        formData.append('upload_preset', uploadPreset);

        try {
          const response = await fetch(`https://api.cloudinary.com/v1_1/degjqq6vo/upload`, {
            method: 'POST',
            body: formData,
          });
          const data = await response.json();
          console.log('Upload successful TS:', data.url);
          setImage(data.url)


          handleSubmit(data.url);

          // Handle success: data contains information about the uploaded file
        } catch (error) {
          console.error('Error uploading file:', error);
          // Handle error
        }



      } catch (error) {
        console.error('Error capturing the div:', error);
      }
    } else {
      console.error('QR code container not found.');
    }



  };

  const [formData, setFormData] = useState({
    QrCode: '',
  });


  const [error, setError] = useState('');


  const getUserFromLocalStorage = () => {
    const user = localStorage.getItem('userData');
    return user ? JSON.parse(user) : null;
  };


  const handleSubmit = async (e) => {
    console.log(e, "formDatassss");
    const QrCode = e
    // const userId = 2

    const storedUser = getUserFromLocalStorage();
    const userId = storedUser ? storedUser.id : null;

    console.log(userId, "userId");


    try {
      const response = await axios.post(`${baseurl}/createQrCode`, {
        QrCode,
        Name,
        userId
      });


      const qrCodeData = null;


      toast.success("QrCode Saved successfully");

      setTimeout(() => {
        navigate("/my-qr-codes");
        setTimeout(() => {
          window.location.reload();
        }, 100);
      }, 1000);

      // navigate("/my-qr-codes");

      console.log('QrCode submitted successfully:', response.data);
    } catch (error) {
      setError(error.response ? error.response.data.message : error.message);
      console.error('Error submitting form:', error);
      toast.error('All Fields are required', error);
    }

  };




  const handleCornerChange = (newStyle) => {
    setcornerStyle(newStyle);
  }
  const handleLevelChange = (newLevel) => {
    setLevel(String(newLevel));  // Force the level to be a string
  };




  useEffect(() => {
    if (qrCodeData) {
      console.log('QR Code Data received:', qrCodeData);
      saveQRCode(); // Call saveQRCode when qrCodeData is available
    }
  }, [qrCodeData]);



  const svgToDataURL = (svgString) => {
    const encodedSvg = encodeURIComponent(svgString)
      .replace(/'/g, '%27')
      .replace(/"/g, '%22');
    return `url("data:image/svg+xml,${encodedSvg}")`;
  };


  // Function to handle the QR style change
  const handleStyleChange = (style) => {
    setQRStyle(style); // Update the style
    console.log(`Style changed to: ${style}`);
  };

  // Update the QR code instance whenever the style or color changes
  useEffect(() => {
    if (qrCode) {
      qrCode.update({
        dotsOptions: {
          type: qrStyle, // Change the dots style dynamically
          color: bordercolor || "#000000", // Use the dynamic foreground color
          ...(useGradientsicons
            ? { // Use gradient if useGradientscorner is true
              gradient: {
                type: "linear", // or "radial"
                rotation: 0, // Rotation angle of the gradient (0 to 360)
                colorStops: [
                  { offset: 0, color: gradicon1 || "#FFFF" },  // Start color
                  { offset: 1, color: gradicon2 || "#FFFF" }   // End color
                ]
              }
            }
            : { // Use solid color if useGradientscorner is false
              color: bordercolor || "#000000"
            }
          ),
        },
        backgroundOptions: {
          color: color,
          ...(useGradientsbackground
            ? { // Use gradient if useGradientscorner is true
              gradient: {
                type: "linear", // or "radial"
                rotation: 0, // Rotation angle of the gradient (0 to 360)
                colorStops: [
                  { offset: 0, color: gradbackground1 || "#000000" },  // Start color
                  { offset: 1, color: gradbackground2 || "#000000" }   // End color
                ]
              }
            }
            : { // Use solid color if useGradientscorner is false
              color: color || "#000000"
            }
          ),
        },

        cornersSquareOptions: {
          type: qrStyleCorners, // Set the corners type (e.g., "dot", "square", "extra-rounded")
          ...(useGradientscorner
            ? { // Use gradient if useGradientscorner is true
              gradient: {
                type: "linear", // or "radial"
                rotation: 0, // Rotation angle of the gradient (0 to 360)
                colorStops: [
                  { offset: 0, color: gradbordercornerinput1 || "#000000" },  // Start color
                  { offset: 1, color: gradbordercornerinput2 || "#000000" }   // End color
                ]
              }
            }
            : { // Use solid color if useGradientscorner is false
              color: bordersquareconercolor || "#000000"
            }
          ),
        },

        cornersDotOptions: {
          type: qrStyleCorners, // Set the corners type (e.g., "dot", "square", "extra-rounded")
          ...(useGradients
            ? { // Use gradient if useGradientscorner is true
              gradient: {
                type: "linear", // or "radial"
                rotation: 0, // Rotation angle of the gradient (0 to 360)
                colorStops: [
                  { offset: 0, color: gradborderinput1 || "#000000" },  // Start color
                  { offset: 1, color: gradborderinput2 || "#000000" }   // End color
                ]
              }
            }
            : { // Use solid color if useGradientscorner is false
              color: borderdotconercolor || "#000000"
            }
          ),
        },

        image: socail,

        data: 'Hello World', // Update the QR code data
        imageOptions: {
          crossOrigin: socail, // Allow cross-origin images
          imageSize: 0.3, // Control the size of the image (fraction of the QR code)
          margin: 0, // Add margin around the image
          hideBackgroundDots: true, // Hide background dots behind the image
          // Add your image/logo URL
        },
        qrOptions: {
          errorCorrectionLevel: level
        },

      });
      qrCode.append(qrCodeRef.current); // Attach the updated QR to the DOM element
    }
  }, [qrStyle, qrStyleCorners, qrStyledotCorners, socail, level, gradborderinput1, gradborderinput2, gradbordercornerinput1, gradbordercornerinput2, bordersquareconercolor, borderdotconercolor, gradbackground1, gradbackground2, gradicon1, gradicon2, color, bordercolor, qrCode]);

  // Initialize the QR code instance on component mount
  useEffect(() => {
    const qrCodeInstance = new QRCodeStyling({
      width: 120,
      height: 120,
      image: socail,
      data: 'Hello World', // Set initial data 
      dotsOptions: {
        type: qrStyle, // Change the dots style dynamically
        color: bordercolor || "#000000", // Use the dynamic foreground color
        ...(useGradientsicons
          ? { // Use gradient if useGradientscorner is true
            gradient: {
              type: "linear", // or "radial"
              rotation: 0, // Rotation angle of the gradient (0 to 360)
              colorStops: [
                { offset: 0, color: gradicon1 || "#FFFF" },  // Start color
                { offset: 1, color: gradicon2 || "#FFFF" }   // End color
              ]
            }
          }
          : { // Use solid color if useGradientscorner is false
            color: bordercolor || "#000000"
          }
        ),
      },
      backgroundOptions: {
        color: color,
        ...(useGradientsbackground
          ? { // Use gradient if useGradientscorner is true
            gradient: {
              type: "linear", // or "radial"
              rotation: 0, // Rotation angle of the gradient (0 to 360)
              colorStops: [
                { offset: 0, color: gradbackground1 || "#000000" },  // Start color
                { offset: 1, color: gradbackground2 || "#000000" }   // End color
              ]
            }
          }
          : { // Use solid color if useGradientscorner is false
            color: color || "#000000"
          }
        ),
      },


      cornersSquareOptions: {
        type: qrStyleCorners, // Set the corners type (e.g., "dot", "square", "extra-rounded")
        ...(useGradientscorner
          ? { // Use gradient if useGradientscorner is true
            gradient: {
              type: "linear", // or "radial"
              rotation: 0, // Rotation angle of the gradient (0 to 360)
              colorStops: [
                { offset: 0, color: gradbordercornerinput1 || "#000000" },  // Start color
                { offset: 1, color: gradbordercornerinput2 || "#000000" }   // End color
              ]
            }
          }
          : { // Use solid color if useGradientscorner is false
            color: bordersquareconercolor || "#000000"
          }
        ),
      },

      cornersDotOptions: {
        type: qrStyleCorners, // Set the corners type (e.g., "dot", "square", "extra-rounded")
        ...(useGradients
          ? { // Use gradient if useGradientscorner is true
            gradient: {
              type: "linear", // or "radial"
              rotation: 0, // Rotation angle of the gradient (0 to 360)
              colorStops: [
                { offset: 0, color: gradborderinput1 || "#000000" },  // Start color
                { offset: 1, color: gradborderinput2 || "#000000" }   // End color
              ]
            }
          }
          : { // Use solid color if useGradientscorner is false
            color: borderdotconercolor || "#000000"
          }
        ),
      },


      imageOptions: {
        crossOrigin: socail, // Allow cross-origin images
        imageSize: 0.3, // Control the size of the image (fraction of the QR code)
        margin: 0, // Add margin around the image
        hideBackgroundDots: true, // Hide background dots behind the image
        // Add your image/logo URL
      },
      errorCorrectionLevel:
        level // Set the error correction level (e.g., "L", "M", "Q", "H")


    });
    setQRCode(qrCodeInstance);
    qrCodeInstance.append(qrCodeRef.current); // Attach the QR to the DOM element on first load
  }, []);






  return (
    <>
      <div className="main-dashbord-contanir">
        <ToastContainer />
        <div className='NewQR'>



          <div className="main-content--b--flex">
            <div className="main-content--b--website">

              <div className="h1-list">
                <h1>Design the QR</h1>
              </div>
              <div className="search-box-pdf">

                <div className="pdf-box-search">
                  <div className="ui-pdf-cheack-box">
                    <input type="checkbox" class="ui-checkbox" />
                  </div>

                  <p>Save template when finished</p>
                </div>


                <div className="pdf-box-input">
                  <label htmlFor="">Template Name</label>
                  <input type="text" id="fname" name="fname" placeholder='Ex: New Years Eve Template...' value={Name} onChange={(e) => setName(e.target.value)} />
                  <p></p>
                </div>


              </div>

              <div className="NewQR-Website-faq-box">
                <Accordion allowZeroExpanded id="accordionPanelsStayOpenExample" preExpanded={['basicInfo']}>




                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>

                        <p className='hello-my-code-p'>Frame</p>


                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                          <path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9" />
                        </svg>
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <div className="fram-box">

                        <button onClick={() => setQrs(svg1String, 140, 12, 10, 10)}><img src={btn4} alt="" /></button>
                        <button onClick={() => setQrs(svg2String, 140, 12, 10 ,10)}><img src={btn4} alt="" /></button>

                        <button onClick={() => setQrs(svg3String, 140, 12, 10 , 10)}><img src={btn5} alt="" /></button>

                        <button onClick={() => setQrs(svg4String, 120, 33, 56 ,10)}><img src={btn11} alt="" /></button>
                        <button onClick={() => setQrs(svg5String, 120, 33, 10 ,10)}><img src={btn8} alt="" /></button>
                        <button onClick={() => setQrs(svg1String, 120, 33, 10, 10)}><img src={btn9} alt="" /></button>
                        <button onClick={() => setQrs(svg6String, 120, 33, 10, 10)}><img src={btn10} alt="" /></button>
                        <button onClick={() => setQrs(svg7String, 120, 69, 160, 10)}><img src={btn7} alt="" /></button>
                        <button onClick={() => setQrs(svg8String, 120, 39, 10, 10)}><img src={btn12} alt="" /></button>


                        <button onClick={() => setQrs(svg9String, 120, 39, 15, 10)}><img src={btn15} alt="" /></button>
                        <button onClick={() => setQrs(svg16String, 100, 39, 35 , 0)}><img src={btn19} alt="" /></button>
                        <button onClick={() => setQrs(svg10String, 120, 65, 10 , -30)}><img src={btn17} alt="" /></button>
                        <button onClick={() => setQrs(svg11String, 120, 65, 10, 10)}><img src={btn14} alt="" /></button>
                        <button onClick={() => setQrs(svg12String, 110, 37, 35, 10)}><img src={btn20} alt="" /></button>
                        <button onClick={() => setQrs(svg13String, 100, 50, 50, 10)}><img src={btn21} alt="" /></button>
                        <button onClick={() => setQrs(svg14String, 100, 57, 10, 31)}><img src={btn18} alt="" /></button>
                        <button onClick={() => setQrs(svg15String, 90, 10, 10, -64)}><img src={btn16} alt="" /></button>


                      </div>

                    </AccordionItemPanel>
                  </AccordionItem>


                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>

                        <p className='hello-my-code-p'>QR code style</p>


                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                          <path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9" />
                        </svg>
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <div className="fram-box-2">
                        <button onClick={() => handleStyleChange('square')}>
                          <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 80 80" aria-hidden="true"><g fill="#000000"><path d="M48,32h16v32h-16v-8h8v-8h-8v-8h-8v-8h-8v-8h8v-8h8v16Zm8-16v8h8v-8h-8Zm-24,8v-8H16v16h8v-8h8Zm16,24v8h-8v8H16v-24h8v-8h8v8h8v8h8Zm-16,0h-8v8h8v-8Z"></path></g></svg>
                        </button>

                        <button onClick={() => handleStyleChange('dots')}>
                          <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 80 80" aria-hidden="true"><g fill="#000000"><path d="M58,16h4c1.1,0,2,.9,2,2v4c0,1.1-.9,2-2,2h-4c-1.1,0-2-.9-2-2v-4c0-1.1,.9-2,2-2ZM18,32h4c1.1,0,2-.9,2-2v-6h6c1.1,0,2-.9,2-2v-4c0-1.1-.9-2-2-2h-12c-1.1,0-2,.9-2,2v12c0,1.1,.9,2,2,2Zm30,18c0-1.1-.9-2-2-2h-6v-6c0-1.1-.9-2-2-2h-6v-6c0-1.1-.9-2-2-2h-4c-1.1,0-2,.9-2,2v6h-6c-1.1,0-2,.9-2,2v20c0,1.1,.9,2,2,2h20c1.1,0,2-.9,2-2v-6h6c1.1,0,2-.9,2-2v-4Zm-16,6h-8v-8h8v8Zm30-24h-14v-14c0-1.1-.9-2-2-2h-4c-1.1,0-2,.9-2,2v6h-6c-1.1,0-2,.9-2,2v4c0,1.1,.9,2,2,2h6v6c0,1.1,.9,2,2,2h6v6c0,1.1,.9,2,2,2h6v8h-6c-1.1,0-2,.9-2,2v4c0,1.1,.9,2,2,2h12c1.1,0,2-.9,2-2v-28c0-1.1-.9-2-2-2Z"></path></g></svg>
                        </button>


                        <button onClick={() => handleStyleChange('rounded')}>
                          <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 80 80" aria-hidden="true"><g fill="#000000"><path d="M59,16h2c1.66,0,3,1.34,3,3v2c0,1.66-1.34,3-3,3h-2c-1.66,0-3-1.34-3-3v-2c0-1.66,1.34-3,3-3Zm1,16h-12v-12c0-2.21-1.79-4-4-4s-4,1.79-4,4v4h-4c-2.21,0-4,1.79-4,4s1.79,4,4,4h4v4c0,2.21,1.79,4,4,4h4v4c0,2.21,1.79,4,4,4h4v8h-4c-2.21,0-4,1.79-4,4s1.79,4,4,4h8c2.21,0,4-1.79,4-4v-24c0-2.21-1.79-4-4-4Zm-40,0c2.21,0,4-1.79,4-4v-4h4c2.21,0,4-1.79,4-4s-1.79-4-4-4h-8c-2.21,0-4,1.79-4,4v8c0,2.21,1.79,4,4,4Zm24,16h-4v-4c0-2.21-1.79-4-4-4h-4v-4c0-2.21-1.79-4-4-4s-4,1.79-4,4v4h-4c-2.21,0-4,1.79-4,4v16c0,2.21,1.79,4,4,4h16c2.21,0,4-1.79,4-4v-4h4c2.21,0,4-1.79,4-4s-1.79-4-4-4Zm-12,8h-8v-8h8v8Z"></path></g></svg>
                        </button >
                        <button onClick={() => handleStyleChange('dots')}>
                          <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 80 80" aria-hidden="true"><g fill="#000000"><path d="M28,32c2.21,0,4,1.79,4,4s-1.79,4-4,4-4-1.79-4-4,1.79-4,4-4Zm8,8c2.21,0,4,1.79,4,4s-1.79,4-4,4-4-1.79-4-4,1.79-4,4-4Zm-8,0c2.21,0,4,1.79,4,4s-1.79,4-4,4-4-1.79-4-4,1.79-4,4-4Zm-8,0c2.21,0,4,1.79,4,4s-1.79,4-4,4-4-1.79-4-4,1.79-4,4-4Zm16,16c2.21,0,4,1.79,4,4s-1.79,4-4,4-4-1.79-4-4,1.79-4,4-4Zm-8,0c2.21,0,4,1.79,4,4s-1.79,4-4,4-4-1.79-4-4,1.79-4,4-4Zm-8,0c2.21,0,4,1.79,4,4s-1.79,4-4,4-4-1.79-4-4,1.79-4,4-4Zm16-8c2.21,0,4,1.79,4,4s-1.79,4-4,4-4-1.79-4-4,1.79-4,4-4Zm-16,0c2.21,0,4,1.79,4,4s-1.79,4-4,4-4-1.79-4-4,1.79-4,4-4Zm16-24c2.21,0,4,1.79,4,4s-1.79,4-4,4-4-1.79-4-4,1.79-4,4-4Zm8-8c2.21,0,4,1.79,4,4s-1.79,4-4,4-4-1.79-4-4,1.79-4,4-4Zm0,8c2.21,0,4,1.79,4,4s-1.79,4-4,4-4-1.79-4-4,1.79-4,4-4Zm0,8c2.21,0,4,1.79,4,4s-1.79,4-4,4-4-1.79-4-4,1.79-4,4-4Zm8,0c2.21,0,4,1.79,4,4s-1.79,4-4,4-4-1.79-4-4,1.79-4,4-4Zm8-16c2.21,0,4,1.79,4,4s-1.79,4-4,4-4-1.79-4-4,1.79-4,4-4Zm0,16c2.21,0,4,1.79,4,4s-1.79,4-4,4-4-1.79-4-4,1.79-4,4-4Zm0,8c2.21,0,4,1.79,4,4s-1.79,4-4,4-4-1.79-4-4,1.79-4,4-4ZM20,24c2.21,0,4,1.79,4,4s-1.79,4-4,4-4-1.79-4-4,1.79-4,4-4Zm0-8c2.21,0,4,1.79,4,4s-1.79,4-4,4-4-1.79-4-4,1.79-4,4-4Zm8,0c2.21,0,4,1.79,4,4s-1.79,4-4,4-4-1.79-4-4,1.79-4,4-4Zm16,32c2.21,0,4,1.79,4,4s-1.79,4-4,4-4-1.79-4-4,1.79-4,4-4Zm8-8c2.21,0,4,1.79,4,4s-1.79,4-4,4-4-1.79-4-4,1.79-4,4-4Zm8,8c2.21,0,4,1.79,4,4s-1.79,4-4,4-4-1.79-4-4,1.79-4,4-4Zm0,8c2.21,0,4,1.79,4,4s-1.79,4-4,4-4-1.79-4-4,1.79-4,4-4Zm-8,0c2.21,0,4,1.79,4,4s-1.79,4-4,4-4-1.79-4-4,1.79-4,4-4Z"></path></g></svg></button>

                        <button onClick={() => handleStyleChange('sqaure')}>
                          <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 80 80" aria-hidden="true"><g fill="#000000"><path d="M24 51.5l0 8c0 1.93-1.57 3.5-3.5 3.5h0c-1.93 0-3.5-1.57-3.5-3.5l0-8c0-1.93 1.57-3.5 3.5-3.5h0C22.43 48 24 49.57 24 51.5zM32 35.5l0 16c0 1.93-1.57 3.5-3.5 3.5h0c-1.93 0-3.5-1.57-3.5-3.5l0-16c0-1.93 1.57-3.5 3.5-3.5h0C30.43 32 32 33.57 32 35.5zM56 35.5l0 16c0 1.93-1.57 3.5-3.5 3.5h0c-1.93 0-3.5-1.57-3.5-3.5l0-16c0-1.93 1.57-3.5 3.5-3.5h0C54.43 32 56 33.57 56 35.5zM64 43.5l0 16c0 1.93-1.57 3.5-3.5 3.5h0c-1.93 0-3.5-1.57-3.5-3.5l0-16c0-1.93 1.57-3.5 3.5-3.5h0C62.43 40 64 41.57 64 43.5zM56 19.5v8c0 1.93-1.57 3.5-3.5 3.5h0c-1.93 0-3.5-1.57-3.5-3.5v-8c0-1.93 1.57-3.5 3.5-3.5h0C54.43 16 56 17.57 56 19.5zM40 27.5l0 24c0 1.93-1.57 3.5-3.5 3.5h0c-1.93 0-3.5-1.57-3.5-3.5l0-24c0-1.93 1.57-3.5 3.5-3.5h0C38.43 24 40 25.57 40 27.5zM24 35.5 24 35.5c0 1.93-1.57 3.5-3.5 3.5h0c-1.93 0-3.5-1.57-3.5-3.5v0c0-1.93 1.57-3.5 3.5-3.5h0C22.43 32 24 33.57 24 35.5zM24 16l0 11.5c0 1.93-1.57 3.5-3.5 3.5h0c-1.93 0-3.5-1.57-3.5-3.5L17 16 24 16zM64 16v3.5c0 1.93-1.57 3.5-3.5 3.5h0c-1.93 0-3.5-1.57-3.5-3.5V16L64 16zM48 27.5 48 27.5c0-1.93-1.57-3.5-3.5-3.5h0c-1.93 0-3.5 1.57-3.5 3.5v0c0 1.93 1.57 3.5 3.5 3.5h0C46.43 31 48 29.43 48 27.5zM48 64l0-12.5c0-1.93-1.57-3.5-3.5-3.5h0c-1.93 0-3.5 1.57-3.5 3.5L41 64H48z"></path></g></svg></button>

                        <button onClick={() => handleStyleChange('stars')}>
                          <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 80 80" aria-hidden="true"><g fill="#000000"><path d="M20 40 21.24 42.64 24 43.06 22 45.11 22.47 48 20 46.64 17.53 48 18 45.11 16 43.06 18.76 42.64M28 40 29.24 42.64 32 43.06 30 45.11 30.47 48 28 46.64 25.53 48 26 45.11 24 43.06 26.76 42.64M36 32 37.24 34.63 40 35.06 38 37.11 38.47 40 36 38.63 33.53 40 34 37.11 32 35.06 34.76 34.63M44 32 45.24 34.63 48 35.06 46 37.11 46.47 40 44 38.63 41.53 40 42 37.11 40 35.06 42.76 34.63M36 56 37.24 58.64 40 59.06 38 61.11 38.47 64 36 62.64 33.53 64 34 61.11 32 59.06 34.76 58.64M20 56 21.24 58.64 24 59.06 22 61.11 22.47 64 20 62.64 17.53 64 18 61.11 16 59.06 18.76 58.64M44 56 45.24 58.64 48 59.06 46 61.11 46.47 64 44 62.64 41.53 64 42 61.11 40 59.06 42.76 58.64M44 23.86 45.24 26.49 48 26.91 46 28.96 46.47 31.86 44 30.49 41.53 31.86 42 28.96 40 26.91 42.76 26.49M52 23.86 53.24 26.49 56 26.91 54 28.96 54.47 31.86 52 30.49 49.53 31.86 50 28.96 48 26.91 50.76 26.49M52 40 53.24 42.64 56 43.06 54 45.11 54.47 48 52 46.64 49.53 48 50 45.11 48 43.06 50.76 42.64M60 48 61.24 50.64 64 51.06 62 53.11 62.47 56 60 54.64 57.53 56 58 53.11 56 51.06 58.76 50.64M52 15.98 53.24 18.61 56 19.04 54 21.09 54.47 23.98 52 22.61 49.53 23.98 50 21.09 48 19.04 50.76 18.61M36 15.98 37.24 18.61 40 19.04 38 21.09 38.47 23.98 36 22.61 33.53 23.98 34 21.09 32 19.04 34.76 18.61M20 15.98 21.24 18.61 24 19.04 22 21.09 22.47 23.98 20 22.61 17.53 23.98 18 21.09 16 19.04 18.76 18.61M20 23.86 21.24 26.49 24 26.91 22 28.96 22.47 31.86 20 30.49 17.53 31.86 18 28.96 16 26.91 18.76 26.49M60 15.98 61.24 18.61 64 19.04 62 21.09 62.47 23.98 60 22.61 57.53 23.98 58 21.09 56 19.04 58.76 18.61"></path></g></svg></button>

                        <button onClick={() => handleStyleChange('dots')}>
                          <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 80 80" aria-hidden="true"><g fill="#000000"><path d="M21.88 24 21.88 24c-.56 0-1.1.22-1.5.62L20 25l-.38-.38c-.4-.4-.94-.62-1.5-.62h0C16.95 24 16 24.95 16 26.12v0c0 .56.22 1.1.62 1.5L17 28l-.38.38c-.4.4-.62.94-.62 1.5v0c0 1.17.95 2.12 2.12 2.12h0c.56 0 1.1-.22 1.5-.62L20 31l.38.38c.4.4.94.62 1.5.62h0c1.17 0 2.12-.95 2.12-2.12v0c0-.56-.22-1.1-.62-1.5L23 28l.38-.38c.4-.4.62-.94.62-1.5v0C24 24.95 23.05 24 21.88 24zM21.88 16 21.88 16c-.56 0-1.1.22-1.5.62L20 17l-.38-.38c-.4-.4-.94-.62-1.5-.62h0C16.95 16 16 16.95 16 18.12v0c0 .56.22 1.1.62 1.5L17 20l-.38.38c-.4.4-.62.94-.62 1.5v0c0 1.17.95 2.12 2.12 2.12h0c.56 0 1.1-.22 1.5-.62L20 23l.38.38c.4.4.94.62 1.5.62h0c1.17 0 2.12-.95 2.12-2.12v0c0-.56-.22-1.1-.62-1.5L23 20l.38-.38c.4-.4.62-.94.62-1.5v0C24 16.95 23.05 16 21.88 16zM37.88 16 37.88 16c-.56 0-1.1.22-1.5.62L36 17l-.38-.38c-.4-.4-.94-.62-1.5-.62h0C32.95 16 32 16.95 32 18.12v0c0 .56.22 1.1.62 1.5L33 20l-.38.38c-.4.4-.62.94-.62 1.5v0c0 1.17.95 2.12 2.12 2.12h0c.56 0 1.1-.22 1.5-.62L36 23l.38.38c.4.4.94.62 1.5.62h0c1.17 0 2.12-.95 2.12-2.12v0c0-.56-.22-1.1-.62-1.5L39 20l.38-.38c.4-.4.62-.94.62-1.5v0C40 16.95 39.05 16 37.88 16zM37.88 32 37.88 32c-.56 0-1.1.22-1.5.62L36 33l-.38-.38c-.4-.4-.94-.62-1.5-.62h0C32.95 32 32 32.95 32 34.12v0c0 .56.22 1.1.62 1.5L33 36l-.38.38c-.4.4-.62.94-.62 1.5v0c0 1.17.95 2.12 2.12 2.12h0c.56 0 1.1-.22 1.5-.62L36 39l.38.38c.4.4.94.62 1.5.62h0c1.17 0 2.12-.95 2.12-2.12v0c0-.56-.22-1.1-.62-1.5L39 36l.38-.38c.4-.4.62-.94.62-1.5v0C40 32.95 39.05 32 37.88 32zM29.88 40 29.88 40c-.56 0-1.1.22-1.5.62L28 41l-.38-.38c-.4-.4-.94-.62-1.5-.62h0C24.95 40 24 40.95 24 42.12v0c0 .56.22 1.1.62 1.5L25 44l-.38.38c-.4.4-.62.94-.62 1.5v0c0 1.17.95 2.12 2.12 2.12h0c.56 0 1.1-.22 1.5-.62L28 47l.38.38c.4.4.94.62 1.5.62h0c1.17 0 2.12-.95 2.12-2.12v0c0-.56-.22-1.1-.62-1.5L31 44l.38-.38c.4-.4.62-.94.62-1.5v0C32 40.95 31.05 40 29.88 40zM53.88 40 53.88 40c-.56 0-1.1.22-1.5.62L52 41l-.38-.38c-.4-.4-.94-.62-1.5-.62h0C48.95 40 48 40.95 48 42.12v0c0 .56.22 1.1.62 1.5L49 44l-.38.38c-.4.4-.62.94-.62 1.5v0c0 1.17.95 2.12 2.12 2.12h0c.56 0 1.1-.22 1.5-.62L52 47l.38.38c.4.4.94.62 1.5.62h0c1.17 0 2.12-.95 2.12-2.12v0c0-.56-.22-1.1-.62-1.5L55 44l.38-.38c.4-.4.62-.94.62-1.5v0C56 40.95 55.05 40 53.88 40zM61.88 48 61.88 48c-.56 0-1.1.22-1.5.62L60 49l-.38-.38c-.4-.4-.94-.62-1.5-.62h0C56.95 48 56 48.95 56 50.12v0c0 .56.22 1.1.62 1.5L57 52l-.38.38c-.4.4-.62.94-.62 1.5v0c0 1.17.95 2.12 2.12 2.12h0c.56 0 1.1-.22 1.5-.62L60 55l.38.38c.4.4.94.62 1.5.62h0c1.17 0 2.12-.95 2.12-2.12v0c0-.56-.22-1.1-.62-1.5L63 52l.38-.38c.4-.4.62-.94.62-1.5v0C64 48.95 63.05 48 61.88 48zM21.88 40 21.88 40c-.56 0-1.1.22-1.5.62L20 41l-.38-.38c-.4-.4-.94-.62-1.5-.62h0C16.95 40 16 40.95 16 42.12v0c0 .56.22 1.1.62 1.5L17 44l-.38.38c-.4.4-.62.94-.62 1.5v0c0 1.17.95 2.12 2.12 2.12h0c.56 0 1.1-.22 1.5-.62L20 47l.38.38c.4.4.94.62 1.5.62h0c1.17 0 2.12-.95 2.12-2.12v0c0-.56-.22-1.1-.62-1.5L23 44l.38-.38c.4-.4.62-.94.62-1.5v0C24 40.95 23.05 40 21.88 40zM53.88 16 53.88 16c-.56 0-1.1.22-1.5.62L52 17l-.38-.38c-.4-.4-.94-.62-1.5-.62h0C48.95 16 48 16.95 48 18.12v0c0 .56.22 1.1.62 1.5L49 20l-.38.38c-.4.4-.62.94-.62 1.5v0c0 1.17.95 2.12 2.12 2.12h0c.56 0 1.1-.22 1.5-.62L52 23l.38.38c.4.4.94.62 1.5.62h0c1.17 0 2.12-.95 2.12-2.12v0c0-.56-.22-1.1-.62-1.5L55 20l.38-.38c.4-.4.62-.94.62-1.5v0C56 16.95 55.05 16 53.88 16zM53.88 24 53.88 24c-.56 0-1.1.22-1.5.62L52 25l-.38-.38c-.4-.4-.94-.62-1.5-.62h0C48.95 24 48 24.95 48 26.12v0c0 .56.22 1.1.62 1.5L49 28l-.38.38c-.4.4-.62.94-.62 1.5v0c0 1.17.95 2.12 2.12 2.12h0c.56 0 1.1-.22 1.5-.62L52 31l.38.38c.4.4.94.62 1.5.62h0c1.17 0 2.12-.95 2.12-2.12v0c0-.56-.22-1.1-.62-1.5L55 28l.38-.38c.4-.4.62-.94.62-1.5v0C56 24.95 55.05 24 53.88 24zM45.88 24 45.88 24c-.56 0-1.1.22-1.5.62L44 25l-.38-.38c-.4-.4-.94-.62-1.5-.62h0C40.95 24 40 24.95 40 26.12v0c0 .56.22 1.1.62 1.5L41 28l-.38.38c-.4.4-.62.94-.62 1.5v0c0 1.17.95 2.12 2.12 2.12h0c.56 0 1.1-.22 1.5-.62L44 31l.38.38c.4.4.94.62 1.5.62h0c1.17 0 2.12-.95 2.12-2.12v0c0-.56-.22-1.1-.62-1.5L47 28l.38-.38c.4-.4.62-.94.62-1.5v0C48 24.95 47.05 24 45.88 24zM45.88 56 45.88 56c-.56 0-1.1.22-1.5.62L44 57l-.38-.38c-.4-.4-.94-.62-1.5-.62h0C40.95 56 40 56.95 40 58.12v0c0 .56.22 1.1.62 1.5L41 60l-.38.38c-.4.4-.62.94-.62 1.5v0c0 1.17.95 2.12 2.12 2.12h0c.56 0 1.1-.22 1.5-.62L44 63l.38.38c.4.4.94.62 1.5.62h0c1.17 0 2.12-.95 2.12-2.12v0c0-.56-.22-1.1-.62-1.5L47 60l.38-.38c.4-.4.62-.94.62-1.5v0C48 56.95 47.05 56 45.88 56zM37.88 56 37.88 56c-.56 0-1.1.22-1.5.62L36 57l-.38-.38c-.4-.4-.94-.62-1.5-.62h0C32.95 56 32 56.95 32 58.12v0c0 .56.22 1.1.62 1.5L33 60l-.38.38c-.4.4-.62.94-.62 1.5v0c0 1.17.95 2.12 2.12 2.12h0c.56 0 1.1-.22 1.5-.62L36 63l.38.38c.4.4.94.62 1.5.62h0c1.17 0 2.12-.95 2.12-2.12v0c0-.56-.22-1.1-.62-1.5L39 60l.38-.38c.4-.4.62-.94.62-1.5v0C40 56.95 39.05 56 37.88 56zM21.88 56 21.88 56c-.56 0-1.1.22-1.5.62L20 57l-.38-.38c-.4-.4-.94-.62-1.5-.62h0C16.95 56 16 56.95 16 58.12v0c0 .56.22 1.1.62 1.5L17 60l-.38.38c-.4.4-.62.94-.62 1.5v0c0 1.17.95 2.12 2.12 2.12h0c.56 0 1.1-.22 1.5-.62L20 63l.38.38c.4.4.94.62 1.5.62h0c1.17 0 2.12-.95 2.12-2.12v0c0-.56-.22-1.1-.62-1.5L23 60l.38-.38c.4-.4.62-.94.62-1.5v0C24 56.95 23.05 56 21.88 56zM61.88 16 61.88 16c-.56 0-1.1.22-1.5.62L60 17l-.38-.38c-.4-.4-.94-.62-1.5-.62h0C56.95 16 56 16.95 56 18.12v0c0 .56.22 1.1.62 1.5L57 20l-.38.38c-.4.4-.62.94-.62 1.5v0c0 1.17.95 2.12 2.12 2.12h0c.56 0 1.1-.22 1.5-.62L60 23l.38.38c.4.4.94.62 1.5.62h0c1.17 0 2.12-.95 2.12-2.12v0c0-.56-.22-1.1-.62-1.5L63 20l.38-.38c.4-.4.62-.94.62-1.5v0C64 16.95 63.05 16 61.88 16z"></path></g></svg></button>
                        <button onClick={() => handleStyleChange('sqaure')}>
                          <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 80 80" aria-hidden="true"><g fill="#000000"><path d="M41 57l6-.3.3 6-6 .3zm-8-.4 6 .4-.4 6-6-.4zm-16 0 6 .4-.4 6-6-.4zM49 41l6 .4-.4 6-6-.4zM33 33l6-.4.4 6-6 .4zM41 25l6 .4-.4 6-6-.4zM49 17l6 .3-.3 6-6-.3zM33 17l6 .5-.5 6-6-.5zM17 17l6-.4.4 6-6 .4zM57 17l6-.4.4 6-6 .4zM25 41l6 0 0 6-6 0zM49 25l6 0 0 6-6 0zM17 25l6 .2-.2 6-6-.2zM17 41l6 0 0 6-6 0zM57 49l6 .45-.45 6-6-.45z"></path></g></svg></button>
                        <button onClick={() => handleStyleChange('dots')}>
                          <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 80 80" aria-hidden="true"><g fill="#000000"><path d="M48,32h16v32h-16v-8h8v-8h-8v-8h-8v-8h-8v-8h8v-8h8v16Zm8-16v8h8v-8h-8Zm-24,8v-8H16v16h8v-8h8Zm16,24v8h-8v8H16v-24h8v-8h8v8h8v8h8Zm-16,0h-8v8h8v-8Z"></path></g></svg></button>

                        <button onClick={() => handleStyleChange('sqaure')}>
                          <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 80 80" aria-hidden="true"><g fill="#000000"><path d="M58,16h4c1.1,0,2,.9,2,2v4c0,1.1-.9,2-2,2h-4c-1.1,0-2-.9-2-2v-4c0-1.1,.9-2,2-2ZM18,32h4c1.1,0,2-.9,2-2v-6h6c1.1,0,2-.9,2-2v-4c0-1.1-.9-2-2-2h-12c-1.1,0-2,.9-2,2v12c0,1.1,.9,2,2,2Zm30,18c0-1.1-.9-2-2-2h-6v-6c0-1.1-.9-2-2-2h-6v-6c0-1.1-.9-2-2-2h-4c-1.1,0-2,.9-2,2v6h-6c-1.1,0-2,.9-2,2v20c0,1.1,.9,2,2,2h20c1.1,0,2-.9,2-2v-6h6c1.1,0,2-.9,2-2v-4Zm-16,6h-8v-8h8v8Zm30-24h-14v-14c0-1.1-.9-2-2-2h-4c-1.1,0-2,.9-2,2v6h-6c-1.1,0-2,.9-2,2v4c0,1.1,.9,2,2,2h6v6c0,1.1,.9,2,2,2h6v6c0,1.1,.9,2,2,2h6v8h-6c-1.1,0-2,.9-2,2v4c0,1.1,.9,2,2,2h12c1.1,0,2-.9,2-2v-28c0-1.1-.9-2-2-2Z"></path></g></svg></button>
                        <button onClick={() => handleStyleChange('rounded')}>
                          <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 80 80" aria-hidden="true"><g fill="#000000"><path d="M59,16h2c1.66,0,3,1.34,3,3v2c0,1.66-1.34,3-3,3h-2c-1.66,0-3-1.34-3-3v-2c0-1.66,1.34-3,3-3Zm1,16h-12v-12c0-2.21-1.79-4-4-4s-4,1.79-4,4v4h-4c-2.21,0-4,1.79-4,4s1.79,4,4,4h4v4c0,2.21,1.79,4,4,4h4v4c0,2.21,1.79,4,4,4h4v8h-4c-2.21,0-4,1.79-4,4s1.79,4,4,4h8c2.21,0,4-1.79,4-4v-24c0-2.21-1.79-4-4-4Zm-40,0c2.21,0,4-1.79,4-4v-4h4c2.21,0,4-1.79,4-4s-1.79-4-4-4h-8c-2.21,0-4,1.79-4,4v8c0,2.21,1.79,4,4,4Zm24,16h-4v-4c0-2.21-1.79-4-4-4h-4v-4c0-2.21-1.79-4-4-4s-4,1.79-4,4v4h-4c-2.21,0-4,1.79-4,4v16c0,2.21,1.79,4,4,4h16c2.21,0,4-1.79,4-4v-4h4c2.21,0,4-1.79,4-4s-1.79-4-4-4Zm-12,8h-8v-8h8v8Z"></path></g></svg>
                        </button>
                        <button onClick={() => handleStyleChange('dots')}>
                          <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 80 80" aria-hidden="true"><g fill="#000000"><path d="M28,32c2.21,0,4,1.79,4,4s-1.79,4-4,4-4-1.79-4-4,1.79-4,4-4Zm8,8c2.21,0,4,1.79,4,4s-1.79,4-4,4-4-1.79-4-4,1.79-4,4-4Zm-8,0c2.21,0,4,1.79,4,4s-1.79,4-4,4-4-1.79-4-4,1.79-4,4-4Zm-8,0c2.21,0,4,1.79,4,4s-1.79,4-4,4-4-1.79-4-4,1.79-4,4-4Zm16,16c2.21,0,4,1.79,4,4s-1.79,4-4,4-4-1.79-4-4,1.79-4,4-4Zm-8,0c2.21,0,4,1.79,4,4s-1.79,4-4,4-4-1.79-4-4,1.79-4,4-4Zm-8,0c2.21,0,4,1.79,4,4s-1.79,4-4,4-4-1.79-4-4,1.79-4,4-4Zm16-8c2.21,0,4,1.79,4,4s-1.79,4-4,4-4-1.79-4-4,1.79-4,4-4Zm-16,0c2.21,0,4,1.79,4,4s-1.79,4-4,4-4-1.79-4-4,1.79-4,4-4Zm16-24c2.21,0,4,1.79,4,4s-1.79,4-4,4-4-1.79-4-4,1.79-4,4-4Zm8-8c2.21,0,4,1.79,4,4s-1.79,4-4,4-4-1.79-4-4,1.79-4,4-4Zm0,8c2.21,0,4,1.79,4,4s-1.79,4-4,4-4-1.79-4-4,1.79-4,4-4Zm0,8c2.21,0,4,1.79,4,4s-1.79,4-4,4-4-1.79-4-4,1.79-4,4-4Zm8,0c2.21,0,4,1.79,4,4s-1.79,4-4,4-4-1.79-4-4,1.79-4,4-4Zm8-16c2.21,0,4,1.79,4,4s-1.79,4-4,4-4-1.79-4-4,1.79-4,4-4Zm0,16c2.21,0,4,1.79,4,4s-1.79,4-4,4-4-1.79-4-4,1.79-4,4-4Zm0,8c2.21,0,4,1.79,4,4s-1.79,4-4,4-4-1.79-4-4,1.79-4,4-4ZM20,24c2.21,0,4,1.79,4,4s-1.79,4-4,4-4-1.79-4-4,1.79-4,4-4Zm0-8c2.21,0,4,1.79,4,4s-1.79,4-4,4-4-1.79-4-4,1.79-4,4-4Zm8,0c2.21,0,4,1.79,4,4s-1.79,4-4,4-4-1.79-4-4,1.79-4,4-4Zm16,32c2.21,0,4,1.79,4,4s-1.79,4-4,4-4-1.79-4-4,1.79-4,4-4Zm8-8c2.21,0,4,1.79,4,4s-1.79,4-4,4-4-1.79-4-4,1.79-4,4-4Zm8,8c2.21,0,4,1.79,4,4s-1.79,4-4,4-4-1.79-4-4,1.79-4,4-4Zm0,8c2.21,0,4,1.79,4,4s-1.79,4-4,4-4-1.79-4-4,1.79-4,4-4Zm-8,0c2.21,0,4,1.79,4,4s-1.79,4-4,4-4-1.79-4-4,1.79-4,4-4Z"></path></g></svg></button>
                        <button onClick={() => handleStyleChange('sqaure')}>
                          <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 80 80" aria-hidden="true"><g fill="#000000"><path d="M24 51.5l0 8c0 1.93-1.57 3.5-3.5 3.5h0c-1.93 0-3.5-1.57-3.5-3.5l0-8c0-1.93 1.57-3.5 3.5-3.5h0C22.43 48 24 49.57 24 51.5zM32 35.5l0 16c0 1.93-1.57 3.5-3.5 3.5h0c-1.93 0-3.5-1.57-3.5-3.5l0-16c0-1.93 1.57-3.5 3.5-3.5h0C30.43 32 32 33.57 32 35.5zM56 35.5l0 16c0 1.93-1.57 3.5-3.5 3.5h0c-1.93 0-3.5-1.57-3.5-3.5l0-16c0-1.93 1.57-3.5 3.5-3.5h0C54.43 32 56 33.57 56 35.5zM64 43.5l0 16c0 1.93-1.57 3.5-3.5 3.5h0c-1.93 0-3.5-1.57-3.5-3.5l0-16c0-1.93 1.57-3.5 3.5-3.5h0C62.43 40 64 41.57 64 43.5zM56 19.5v8c0 1.93-1.57 3.5-3.5 3.5h0c-1.93 0-3.5-1.57-3.5-3.5v-8c0-1.93 1.57-3.5 3.5-3.5h0C54.43 16 56 17.57 56 19.5zM40 27.5l0 24c0 1.93-1.57 3.5-3.5 3.5h0c-1.93 0-3.5-1.57-3.5-3.5l0-24c0-1.93 1.57-3.5 3.5-3.5h0C38.43 24 40 25.57 40 27.5zM24 35.5 24 35.5c0 1.93-1.57 3.5-3.5 3.5h0c-1.93 0-3.5-1.57-3.5-3.5v0c0-1.93 1.57-3.5 3.5-3.5h0C22.43 32 24 33.57 24 35.5zM24 16l0 11.5c0 1.93-1.57 3.5-3.5 3.5h0c-1.93 0-3.5-1.57-3.5-3.5L17 16 24 16zM64 16v3.5c0 1.93-1.57 3.5-3.5 3.5h0c-1.93 0-3.5-1.57-3.5-3.5V16L64 16zM48 27.5 48 27.5c0-1.93-1.57-3.5-3.5-3.5h0c-1.93 0-3.5 1.57-3.5 3.5v0c0 1.93 1.57 3.5 3.5 3.5h0C46.43 31 48 29.43 48 27.5zM48 64l0-12.5c0-1.93-1.57-3.5-3.5-3.5h0c-1.93 0-3.5 1.57-3.5 3.5L41 64H48z"></path></g></svg></button>

                        <button onClick={() => handleStyleChange('dots')}>
                          <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 80 80" aria-hidden="true"><g fill="#000000"><path d="M20 40 21.24 42.64 24 43.06 22 45.11 22.47 48 20 46.64 17.53 48 18 45.11 16 43.06 18.76 42.64M28 40 29.24 42.64 32 43.06 30 45.11 30.47 48 28 46.64 25.53 48 26 45.11 24 43.06 26.76 42.64M36 32 37.24 34.63 40 35.06 38 37.11 38.47 40 36 38.63 33.53 40 34 37.11 32 35.06 34.76 34.63M44 32 45.24 34.63 48 35.06 46 37.11 46.47 40 44 38.63 41.53 40 42 37.11 40 35.06 42.76 34.63M36 56 37.24 58.64 40 59.06 38 61.11 38.47 64 36 62.64 33.53 64 34 61.11 32 59.06 34.76 58.64M20 56 21.24 58.64 24 59.06 22 61.11 22.47 64 20 62.64 17.53 64 18 61.11 16 59.06 18.76 58.64M44 56 45.24 58.64 48 59.06 46 61.11 46.47 64 44 62.64 41.53 64 42 61.11 40 59.06 42.76 58.64M44 23.86 45.24 26.49 48 26.91 46 28.96 46.47 31.86 44 30.49 41.53 31.86 42 28.96 40 26.91 42.76 26.49M52 23.86 53.24 26.49 56 26.91 54 28.96 54.47 31.86 52 30.49 49.53 31.86 50 28.96 48 26.91 50.76 26.49M52 40 53.24 42.64 56 43.06 54 45.11 54.47 48 52 46.64 49.53 48 50 45.11 48 43.06 50.76 42.64M60 48 61.24 50.64 64 51.06 62 53.11 62.47 56 60 54.64 57.53 56 58 53.11 56 51.06 58.76 50.64M52 15.98 53.24 18.61 56 19.04 54 21.09 54.47 23.98 52 22.61 49.53 23.98 50 21.09 48 19.04 50.76 18.61M36 15.98 37.24 18.61 40 19.04 38 21.09 38.47 23.98 36 22.61 33.53 23.98 34 21.09 32 19.04 34.76 18.61M20 15.98 21.24 18.61 24 19.04 22 21.09 22.47 23.98 20 22.61 17.53 23.98 18 21.09 16 19.04 18.76 18.61M20 23.86 21.24 26.49 24 26.91 22 28.96 22.47 31.86 20 30.49 17.53 31.86 18 28.96 16 26.91 18.76 26.49M60 15.98 61.24 18.61 64 19.04 62 21.09 62.47 23.98 60 22.61 57.53 23.98 58 21.09 56 19.04 58.76 18.61"></path></g></svg></button>

                        <button onClick={() => handleStyleChange('rounded')}>
                          <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 80 80" aria-hidden="true"><g fill="#000000"><path d="M21.88 24 21.88 24c-.56 0-1.1.22-1.5.62L20 25l-.38-.38c-.4-.4-.94-.62-1.5-.62h0C16.95 24 16 24.95 16 26.12v0c0 .56.22 1.1.62 1.5L17 28l-.38.38c-.4.4-.62.94-.62 1.5v0c0 1.17.95 2.12 2.12 2.12h0c.56 0 1.1-.22 1.5-.62L20 31l.38.38c.4.4.94.62 1.5.62h0c1.17 0 2.12-.95 2.12-2.12v0c0-.56-.22-1.1-.62-1.5L23 28l.38-.38c.4-.4.62-.94.62-1.5v0C24 24.95 23.05 24 21.88 24zM21.88 16 21.88 16c-.56 0-1.1.22-1.5.62L20 17l-.38-.38c-.4-.4-.94-.62-1.5-.62h0C16.95 16 16 16.95 16 18.12v0c0 .56.22 1.1.62 1.5L17 20l-.38.38c-.4.4-.62.94-.62 1.5v0c0 1.17.95 2.12 2.12 2.12h0c.56 0 1.1-.22 1.5-.62L20 23l.38.38c.4.4.94.62 1.5.62h0c1.17 0 2.12-.95 2.12-2.12v0c0-.56-.22-1.1-.62-1.5L23 20l.38-.38c.4-.4.62-.94.62-1.5v0C24 16.95 23.05 16 21.88 16zM37.88 16 37.88 16c-.56 0-1.1.22-1.5.62L36 17l-.38-.38c-.4-.4-.94-.62-1.5-.62h0C32.95 16 32 16.95 32 18.12v0c0 .56.22 1.1.62 1.5L33 20l-.38.38c-.4.4-.62.94-.62 1.5v0c0 1.17.95 2.12 2.12 2.12h0c.56 0 1.1-.22 1.5-.62L36 23l.38.38c.4.4.94.62 1.5.62h0c1.17 0 2.12-.95 2.12-2.12v0c0-.56-.22-1.1-.62-1.5L39 20l.38-.38c.4-.4.62-.94.62-1.5v0C40 16.95 39.05 16 37.88 16zM37.88 32 37.88 32c-.56 0-1.1.22-1.5.62L36 33l-.38-.38c-.4-.4-.94-.62-1.5-.62h0C32.95 32 32 32.95 32 34.12v0c0 .56.22 1.1.62 1.5L33 36l-.38.38c-.4.4-.62.94-.62 1.5v0c0 1.17.95 2.12 2.12 2.12h0c.56 0 1.1-.22 1.5-.62L36 39l.38.38c.4.4.94.62 1.5.62h0c1.17 0 2.12-.95 2.12-2.12v0c0-.56-.22-1.1-.62-1.5L39 36l.38-.38c.4-.4.62-.94.62-1.5v0C40 32.95 39.05 32 37.88 32zM29.88 40 29.88 40c-.56 0-1.1.22-1.5.62L28 41l-.38-.38c-.4-.4-.94-.62-1.5-.62h0C24.95 40 24 40.95 24 42.12v0c0 .56.22 1.1.62 1.5L25 44l-.38.38c-.4.4-.62.94-.62 1.5v0c0 1.17.95 2.12 2.12 2.12h0c.56 0 1.1-.22 1.5-.62L28 47l.38.38c.4.4.94.62 1.5.62h0c1.17 0 2.12-.95 2.12-2.12v0c0-.56-.22-1.1-.62-1.5L31 44l.38-.38c.4-.4.62-.94.62-1.5v0C32 40.95 31.05 40 29.88 40zM53.88 40 53.88 40c-.56 0-1.1.22-1.5.62L52 41l-.38-.38c-.4-.4-.94-.62-1.5-.62h0C48.95 40 48 40.95 48 42.12v0c0 .56.22 1.1.62 1.5L49 44l-.38.38c-.4.4-.62.94-.62 1.5v0c0 1.17.95 2.12 2.12 2.12h0c.56 0 1.1-.22 1.5-.62L52 47l.38.38c.4.4.94.62 1.5.62h0c1.17 0 2.12-.95 2.12-2.12v0c0-.56-.22-1.1-.62-1.5L55 44l.38-.38c.4-.4.62-.94.62-1.5v0C56 40.95 55.05 40 53.88 40zM61.88 48 61.88 48c-.56 0-1.1.22-1.5.62L60 49l-.38-.38c-.4-.4-.94-.62-1.5-.62h0C56.95 48 56 48.95 56 50.12v0c0 .56.22 1.1.62 1.5L57 52l-.38.38c-.4.4-.62.94-.62 1.5v0c0 1.17.95 2.12 2.12 2.12h0c.56 0 1.1-.22 1.5-.62L60 55l.38.38c.4.4.94.62 1.5.62h0c1.17 0 2.12-.95 2.12-2.12v0c0-.56-.22-1.1-.62-1.5L63 52l.38-.38c.4-.4.62-.94.62-1.5v0C64 48.95 63.05 48 61.88 48zM21.88 40 21.88 40c-.56 0-1.1.22-1.5.62L20 41l-.38-.38c-.4-.4-.94-.62-1.5-.62h0C16.95 40 16 40.95 16 42.12v0c0 .56.22 1.1.62 1.5L17 44l-.38.38c-.4.4-.62.94-.62 1.5v0c0 1.17.95 2.12 2.12 2.12h0c.56 0 1.1-.22 1.5-.62L20 47l.38.38c.4.4.94.62 1.5.62h0c1.17 0 2.12-.95 2.12-2.12v0c0-.56-.22-1.1-.62-1.5L23 44l.38-.38c.4-.4.62-.94.62-1.5v0C24 40.95 23.05 40 21.88 40zM53.88 16 53.88 16c-.56 0-1.1.22-1.5.62L52 17l-.38-.38c-.4-.4-.94-.62-1.5-.62h0C48.95 16 48 16.95 48 18.12v0c0 .56.22 1.1.62 1.5L49 20l-.38.38c-.4.4-.62.94-.62 1.5v0c0 1.17.95 2.12 2.12 2.12h0c.56 0 1.1-.22 1.5-.62L52 23l.38.38c.4.4.94.62 1.5.62h0c1.17 0 2.12-.95 2.12-2.12v0c0-.56-.22-1.1-.62-1.5L55 20l.38-.38c.4-.4.62-.94.62-1.5v0C56 16.95 55.05 16 53.88 16zM53.88 24 53.88 24c-.56 0-1.1.22-1.5.62L52 25l-.38-.38c-.4-.4-.94-.62-1.5-.62h0C48.95 24 48 24.95 48 26.12v0c0 .56.22 1.1.62 1.5L49 28l-.38.38c-.4.4-.62.94-.62 1.5v0c0 1.17.95 2.12 2.12 2.12h0c.56 0 1.1-.22 1.5-.62L52 31l.38.38c.4.4.94.62 1.5.62h0c1.17 0 2.12-.95 2.12-2.12v0c0-.56-.22-1.1-.62-1.5L55 28l.38-.38c.4-.4.62-.94.62-1.5v0C56 24.95 55.05 24 53.88 24zM45.88 24 45.88 24c-.56 0-1.1.22-1.5.62L44 25l-.38-.38c-.4-.4-.94-.62-1.5-.62h0C40.95 24 40 24.95 40 26.12v0c0 .56.22 1.1.62 1.5L41 28l-.38.38c-.4.4-.62.94-.62 1.5v0c0 1.17.95 2.12 2.12 2.12h0c.56 0 1.1-.22 1.5-.62L44 31l.38.38c.4.4.94.62 1.5.62h0c1.17 0 2.12-.95 2.12-2.12v0c0-.56-.22-1.1-.62-1.5L47 28l.38-.38c.4-.4.62-.94.62-1.5v0C48 24.95 47.05 24 45.88 24zM45.88 56 45.88 56c-.56 0-1.1.22-1.5.62L44 57l-.38-.38c-.4-.4-.94-.62-1.5-.62h0C40.95 56 40 56.95 40 58.12v0c0 .56.22 1.1.62 1.5L41 60l-.38.38c-.4.4-.62.94-.62 1.5v0c0 1.17.95 2.12 2.12 2.12h0c.56 0 1.1-.22 1.5-.62L44 63l.38.38c.4.4.94.62 1.5.62h0c1.17 0 2.12-.95 2.12-2.12v0c0-.56-.22-1.1-.62-1.5L47 60l.38-.38c.4-.4.62-.94.62-1.5v0C48 56.95 47.05 56 45.88 56zM37.88 56 37.88 56c-.56 0-1.1.22-1.5.62L36 57l-.38-.38c-.4-.4-.94-.62-1.5-.62h0C32.95 56 32 56.95 32 58.12v0c0 .56.22 1.1.62 1.5L33 60l-.38.38c-.4.4-.62.94-.62 1.5v0c0 1.17.95 2.12 2.12 2.12h0c.56 0 1.1-.22 1.5-.62L36 63l.38.38c.4.4.94.62 1.5.62h0c1.17 0 2.12-.95 2.12-2.12v0c0-.56-.22-1.1-.62-1.5L39 60l.38-.38c.4-.4.62-.94.62-1.5v0C40 56.95 39.05 56 37.88 56zM21.88 56 21.88 56c-.56 0-1.1.22-1.5.62L20 57l-.38-.38c-.4-.4-.94-.62-1.5-.62h0C16.95 56 16 56.95 16 58.12v0c0 .56.22 1.1.62 1.5L17 60l-.38.38c-.4.4-.62.94-.62 1.5v0c0 1.17.95 2.12 2.12 2.12h0c.56 0 1.1-.22 1.5-.62L20 63l.38.38c.4.4.94.62 1.5.62h0c1.17 0 2.12-.95 2.12-2.12v0c0-.56-.22-1.1-.62-1.5L23 60l.38-.38c.4-.4.62-.94.62-1.5v0C24 56.95 23.05 56 21.88 56zM61.88 16 61.88 16c-.56 0-1.1.22-1.5.62L60 17l-.38-.38c-.4-.4-.94-.62-1.5-.62h0C56.95 16 56 16.95 56 18.12v0c0 .56.22 1.1.62 1.5L57 20l-.38.38c-.4.4-.62.94-.62 1.5v0c0 1.17.95 2.12 2.12 2.12h0c.56 0 1.1-.22 1.5-.62L60 23l.38.38c.4.4.94.62 1.5.62h0c1.17 0 2.12-.95 2.12-2.12v0c0-.56-.22-1.1-.62-1.5L63 20l.38-.38c.4-.4.62-.94.62-1.5v0C64 16.95 63.05 16 61.88 16z"></path></g></svg></button>
                        <button onClick={() => handleStyleChange('dots')}>
                          <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 80 80" aria-hidden="true"><g fill="#000000"><path d="M41 57l6-.3.3 6-6 .3zm-8-.4 6 .4-.4 6-6-.4zm-16 0 6 .4-.4 6-6-.4zM49 41l6 .4-.4 6-6-.4zM33 33l6-.4.4 6-6 .4zM41 25l6 .4-.4 6-6-.4zM49 17l6 .3-.3 6-6-.3zM33 17l6 .5-.5 6-6-.5zM17 17l6-.4.4 6-6 .4zM57 17l6-.4.4 6-6 .4zM25 41l6 0 0 6-6 0zM49 25l6 0 0 6-6 0zM17 25l6 .2-.2 6-6-.2zM17 41l6 0 0 6-6 0zM57 49l6 .45-.45 6-6-.45z"></path></g></svg></button>


                      </div>

                      <div className="Remember-box">
                        <div className="remember-box">
                          <p>Remember! For the optimal reading of the QR code, you need to use high contrast colours. We recommend selecting a light and a dark colour for your QR code.  </p>
                          <h3>Border and background</h3>
                        </div>


                        <div className="Border-colour-box">
                          <h3>Border colour</h3>
                          <div className="form-check form-switch" style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                            <input
                              className="form-check-input"
                              type="checkbox"
                              role="switch"
                              id="flexSwitchCheckDefault"
                              checked={useGradientsicons}
                              onChange={() => setuseGradientsicons(!useGradientsicons)}
                            />
                            <p>Use gradients?</p>
                          </div>

                          {useGradientsicons ? (
                            <div className="long-box-inpt-faild">
                              <div className="color-input-box">
                                <input
                                  type="text"
                                  className="new-type"
                                  value={gradicon1}
                                  onChange={(e) => setgradicon1(e.target.value)}
                                  placeholder="Enter Colour"
                                />

                                <input
                                  type="color"
                                  className="color-name"
                                  value={gradicon1}
                                  onChange={(e) => setgradicon1(e.target.value)}
                                />
                              </div>


                              <div className="color-input-box">
                                <input
                                  type="text"
                                  className="new-type"
                                  value={gradicon2}
                                  onChange={(e) => setgradicon2(e.target.value)}
                                  placeholder="Enter Colour"
                                />

                                <input
                                  type="color"
                                  className="color-name"
                                  value={gradicon2}
                                  onChange={(e) => setgradicon2(e.target.value)}
                                />
                              </div>
                            </div>
                          ) : (

                            <div className="color-input-box">
                              <input type="text" className='new-type' placeholder='Enter Colour in HEX or RGB' value={bordercolor}
                                onChange={(e) => setBorderColor(e.target.value)} />
                              <input type="color" className='color-name' value={bordercolor}
                                onChange={(e) => setBorderColor(e.target.value)} />
                            </div>
                          )}
                        </div>

                        <div className="Border-colour-box more-margen-top">
                          <h3>Background colour</h3>
                          <div className="form-check form-switch" style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                            <input
                              className="form-check-input"
                              type="checkbox"
                              role="switch"
                              id="flexSwitchCheckDefault"
                              checked={useGradientsbackground}
                              onChange={() => setuseGradientsbackground(!useGradientsbackground)}
                            />
                            <p>Use gradients?</p>
                          </div>

                          {useGradientsbackground ? (
                            <div className="long-box-inpt-faild">
                              <div className="color-input-box">
                                <input
                                  type="text"
                                  className="new-type"
                                  value={gradbackground1}
                                  onChange={(e) => setgradbackground1(e.target.value)}
                                  placeholder="Enter Colour"
                                />

                                <input
                                  type="color"
                                  className="color-name"
                                  value={gradbackground1}
                                  onChange={(e) => setgradbackground1(e.target.value)}
                                />
                              </div>


                              <div className="color-input-box">
                                <input
                                  type="text"
                                  className="new-type"
                                  value={gradbackground2}
                                  onChange={(e) => setgradbackground2(e.target.value)}
                                  placeholder="Enter Colour"
                                />

                                <input
                                  type="color"
                                  className="color-name"
                                  value={gradbackground2}
                                  onChange={(e) => setgradbackground2(e.target.value)}
                                />
                              </div>
                            </div>
                          ) : (



                            <div className="long-box-inpt-faild">
                              <div className="color-input-box">
                                <input type="text" className='new-type' value={color} placeholder='Enter Colour in HEX or RGB' onChange={(e) => setColor(e.target.value)} />
                                <input type="color" className='color-name' value={color} onChange={(e) => setColor(e.target.value)} />
                              </div>
                              <div className="Transparent-cheack">
                                <div class="ui-pdf-cheack-box"><input type="checkbox" class="ui-checkbox" /></div>
                                <h3>Transparent background</h3>
                              </div>
                            </div>

                          )}

                        </div>

                        <div className="h5-box-icon">
                          <h5>Corners</h5>

                          <div className="Border-icon">
                            <h4>Border style</h4>

                            <div class="Border-icon-box">

                              <button onClick={() => setqrStyleCorners('square')} >
                                <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><defs></defs><path fill="#000000" d="M0,0V24H24V0ZM20,20H4V4H20Z"></path></svg>
                              </button>



                              <button onClick={() => setqrStyleCorners('dots')}  >
                                <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><defs></defs><path fill="#000000" d="M12,0A12,12,0,1,0,24,12,12,12,0,0,0,12,0Zm0,20a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"></path></svg>
                              </button>



                              <button onClick={() => setqrStyleCorners('extra-rounded')}  >
                                <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><defs></defs><path fill="#000000" d="M18,0H6A6,6,0,0,0,0,6V18a6,6,0,0,0,6,6H18a6,6,0,0,0,6-6V6A6,6,0,0,0,18,0Zm2,18a2,2,0,0,1-2,2H6a2,2,0,0,1-2-2V6A2,2,0,0,1,6,4H18a2,2,0,0,1,2,2Z"></path></svg>
                              </button>



                              <button onClick={() => handleCornerChange('stars')}  >
                                <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><defs></defs><path fill="#000000" d="m21 1.9-21-1.9 2 21c0 1.1.9 2 2 2h19v-19.1c0-1.1-.9-2-2-2zm-1.05 18.05h-13.45c-.8 0-1.45-.65-1.45-1.45l-1.1-14.5 14.55 1.05c.8 0 1.45.65 1.45 1.44v13.46z"></path></svg>
                              </button>


                              <button onClick={() => setqrStyleCorners('dots')} >
                                <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><defs></defs><path fill="#000000" d="m12 0h-12v12c0 6.63 5.37 12 12 12s12-5.37 12-12c0-6.63-5.37-12-12-12zm0 21c-4.96 0-9-4.04-9-9v-9h9c4.96 0 9 4.04 9 9s-4.04 9-9 9z"></path></svg>
                              </button>


                              <button onClick={() => setqrStyleCorners('extra-rounded')} >
                                <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><defs></defs><path fill="#000000" d="m12 0c-6.63 0-12 5.37-12 12 0 6.63 5.37 12 12 12h12v-12c0-6.63-5.37-12-12-12zm9 21h-9c-4.96 0-9-4.04-9-9s4.04-9 9-9 9 4.04 9 9v9z"></path></svg>
                              </button>


                              <button onClick={() => setqrStyleCorners('square')} >
                                <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><defs></defs><path fill="#000000" d="m23.46 8.43c-.47-1.5-1.22-2.88-2.2-4.06-.49-.59-1.03-1.14-1.63-1.63-1.19-.98-2.56-1.73-4.06-2.2-1.13-.35-2.33-.54-3.57-.54h-12v12c0 1.24.19 2.44.54 3.57.47 1.5 1.22 2.88 2.2 4.06.49.59 1.03 1.14 1.63 1.63 1.19.98 2.56 1.73 4.06 2.2 1.13.35 2.33.54 3.57.54h12v-12c0-1.24-.19-2.44-.54-3.57zm-2.46 12.57h-9c-4.96 0-9-4.04-9-9v-9h9c4.96 0 9 4.04 9 9v9z"></path></svg>
                              </button>


                              <button onClick={() => setqrStyleCorners('extra-rounded')} >
                                <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><defs></defs><path fill="#000000" d="m23.46 8.43c-.47-1.5-1.22-2.88-2.2-4.06-.49-.59-1.03-1.14-1.63-1.63-1.19-.98-2.56-1.73-4.06-2.2-1.13-.35-2.33-.54-3.57-.54h-12v12c0 1.24.19 2.44.54 3.57.47 1.5 1.22 2.88 2.2 4.06.49.59 1.03 1.14 1.63 1.63 1.19.98 2.56 1.73 4.06 2.2 1.13.35 2.33.54 3.57.54h12v-12c0-1.24-.19-2.44-.54-3.57zm-2.46 12.57h-9c-4.97 0-9-4.03-9-9v0c0-4.97 4.03-9 9-9h0c4.97 0 9 4.03 9 9v9z"></path></svg>
                              </button>



                              <button onClick={() => setqrStyleCorners('dots')} >
                                <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><defs></defs><path fill="#000000" d="m23.46 8.43c-.47-1.5-1.22-2.88-2.2-4.06-.49-.59-1.03-1.14-1.63-1.63-1.19-.98-2.56-1.73-4.06-2.2-1.13-.35-2.33-.54-3.57-.54h-12v12c0 1.24.19 2.44.54 3.57.47 1.5 1.22 2.88 2.2 4.06.49.59 1.03 1.14 1.63 1.63 1.19.98 2.56 1.73 4.06 2.2 1.13.35 2.33.54 3.57.54h12v-12c0-1.24-.19-2.44-.54-3.57zm-11.46 12.57 0 0c-4.97 0-9-4.03-9-9v0c0-4.97 4.03-9 9-9h0c4.97 0 9 4.03 9 9v0c0 4.97-4.03 9-9 9z"></path></svg>
                              </button>


                              <button onClick={() => setqrStyleCorners('extra-rounded')} >
                                <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><defs></defs><path fill="#000000" d="m.54 15.57c.47 1.5 1.22 2.88 2.2 4.06.49.59 1.03 1.14 1.63 1.63 1.19.98 2.56 1.73 4.06 2.2 1.13.35 2.33.54 3.57.54h12v-12c0-1.24-.19-2.44-.54-3.57-.47-1.5-1.22-2.88-2.2-4.06-.49-.59-1.03-1.14-1.63-1.63-1.19-.98-2.56-1.73-4.06-2.2-1.13-.35-2.33-.54-3.57-.54h-12v12c0 1.24.19 2.44.54 3.57zm2.46-12.57h9c4.97 0 9 4.03 9 9v0c0 4.97-4.03 9-9 9h0c-4.97 0-9-4.03-9-9v-9z"></path></svg>
                              </button>



                              <button onClick={() => setqrStyleCorners('dots')} >
                                <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><defs></defs><path fill="#000000" d="m0 0v24h24v-24h-24zm12 21c-4.97 0-9-4.03-9-9 0-4.97 4.03-9 9-9s9 4.03 9 9c0 4.97-4.03 9-9 9z"></path></svg>
                              </button>

                              <button onClick={() => setqrStyleCorners('square')} >
                                <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><defs></defs><path fill="#000000" d="m16.28 0h-16.28v16.28c0 4.26 3.46 7.72 7.72 7.72h8.56c4.26 0 7.72-3.46 7.72-7.72v-8.56c0-4.26-3.46-7.72-7.72-7.72zm4.72 16.28c0 2.6-2.12 4.72-4.72 4.72h-8.56c-2.6 0-4.72-2.12-4.72-4.72v-13.28h13.28c2.6 0 4.72 2.12 4.72 4.72v8.56z"></path></svg>
                              </button>


                              <button onClick={() => setqrStyleCorners('extra-rounded')} >
                                <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><defs></defs><path fill="#000000" d="m7.72 24h16.28v-16.28c0-4.26-3.46-7.72-7.72-7.72h-8.56c-4.26 0-7.72 3.46-7.72 7.72v8.56c0 4.26 3.46 7.72 7.72 7.72zm-4.72-16.28c0-2.6 2.12-4.72 4.72-4.72h8.56c2.6 0 4.72 2.12 4.72 4.72v13.28h-13.28c-2.6 0-4.72-2.12-4.72-4.72v-8.56z"></path></svg>
                              </button>


                              <button onClick={() => setqrStyleCorners('square')} >
                                <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><defs></defs><path fill="#000000" d="m16.28 0h-16.28v16.28c0 4.26 3.46 7.72 7.72 7.72h16.28v-16.28c0-4.26-3.46-7.72-7.72-7.72zm4.72 21h-13.28c-2.6 0-4.72-2.12-4.72-4.72v-13.28h13.28c2.6 0 4.72 2.12 4.72 4.72v13.28z"></path></svg>
                              </button>


                              <button onClick={() => setqrStyleCorners('extra-rounded')} >
                                <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><defs></defs><path fill="#000000" d="m23.88 23.03c-.01-.02-.03-.03-.05-.04-.01-.07-.03-.26-.03-.29.03-.02.05-.06.04-.1l-.02-.55c0-.06-.05-.11-.11-.11 0 0-.02 0-.03 0 .01-.09.02-.27.05-.41-.05-.18-.02-.34.01-.53.04-.2.08-.42.01-.69.02-.04.01-.15.01-.18l-.11-.04c.01 0 .03.01.04.01.02 0 .04-.01.06-.02.03-.02.05-.06.05-.09 0-.14-.01-.2-.05-.24 0 0 0-.01 0-.01 0-.53.01-.87.03-1.18.02-.51.04-.92-.02-1.94 0-.04-.02-.07-.05-.09.01-.03.01-.06.02-.09.02-.12.05-.25.04-.39 0 0 .01-.01.01-.01.09-.1.07-.32.01-.87-.02-.17-.04-.34-.05-.48.02-.02.03-.05.03-.09 0-.07.01-.18.02-.3.04-.39.05-.68-.06-.81.1-.43.06-.83.03-1.22-.03-.29-.05-.57-.02-.84.01 0 .03 0 .04-.01.04-.05.04-.05 0-.71.01-.05-.02-.09-.06-.11-.01 0-.01-.01-.02-.01.02-.05.04-.11.06-.18.02-.05.05-.12 0-.14-.01-.01-.02-.01-.03-.02 0-.07-.02-.13-.09-.19 0 0-.01-.02-.01-.09.03-.02.05-.06.05-.1-.02-.3-.02-.37-.02-.47 0-.03 0-.07 0-.12.01-.01.02-.02.03-.04.07-.2.08-.27.09-.5l.04-.41c.01-.05-.04-.06-.09-.07-.03-.12-.03-.25-.03-.4 0-.07 0-.15-.01-.23.06-.04.08-.14.11-.24.01-.03.02-.07.03-.09.03-.02.05-.05.05-.09 0-.06 0-.16-.02-.26-.02-.16-.04-.39.01-.47 0 0 .01-.01.01-.01.03-.03.06-.04.04-.08-.02-.03-.01-.03-.03-.03-.01-.02-.02-.03-.03-.04-.06-.33-.16-1.99-.16-2.32 0-.01.01-.02.01-.03.04-.25.04-.44.01-.65.02-.02.04-.03.05-.04.03-.06.03-.12.01-.18.04-.02.07-.07.06-.12-.02-.14-.04-.25-.05-.35.04-.02.06-.06.06-.11l-.01-.11c-.03-.44-.06-.64-.14-.72-.01-.01-.03-.02-.05-.03.02-.44.01-.83-.11-1.04.02 0 .08.02.1.02.04 0 .07-.02.1-.05.03-.04.02-.11-.01-.14-.24-.25-.58-.26-.9-.28-.02-.02-.04-.03-.06-.03-.1-.02-.2-.03-.31-.03-.21 0-.43.03-.62.06-.13.02-.24.04-.37.07 0-.03-.01-.07-.03-.09-.02-.02-.05-.03-.08-.03 0 0-.28.03-.28.03-.17.02-.37.04-.54.04-.21 0-.28-.04-.31-.06-.02-.02-.05-.03-.08-.03-.02 0-.04 0-.05.01-.03.01-.16.05-.3.07-.05-.06-.16-.06-.34-.06-.01 0-.03 0-.05 0-.08 0-.18.01-.22.05.01-.04 0-.08-.03-.11-.02-.02-.05-.03-.08-.03-.02 0-.04 0-.06.01-.11.06-.37.07-.63.08-.14 0-.29.01-.42.02-.06-.03-.14-.05-.24-.05-.17 0-.36.05-.52.09-.06.01-.11.03-.15.04.02-.03.04-.07.03-.1-.01-.04-.04-.08-.08-.09-.01 0-.02 0-.03 0-.03 0-.07.02-.09.04 0 0-.01.01-.01.01-.04.01-.1.02-.15.03-.09.02-.16.03-.2.05l-.05-.01c-.06-.01-.06-.01-.12-.06-.02-.02-.05-.03-.08-.03-.01 0-.01 0-.02 0-.04.01-.06.03-.07.06-.02.02-.07.04-.19.04-.1 0-.19-.01-.28-.03 0-.01.01-.03.01-.04-.01-.05-.06-.09-.11-.09 0 0-.01 0-.01 0-.07.01-.11.02-.15.04 0 0 0 0 0 0-.24.07-.43.07-.61.07l-.49 0c-.23.04-.65.06-.97.07l-.21.01c-.03 0-.05.01-.06.02-.01 0-.02 0-.02 0 0 0-.16.02-.24.03-.14-.12-.37-.18-.72-.18-.29 0-.64.04-.99.08-.33.04-.66.08-.95.08 0-.01-.01-.02-.01-.04-.02-.04-.08-.07-.13-.07-.22 0-.31.04-.38.07-.05.02-.07.03-.12.03-.04-.07-.15-.07-.34-.07-.46 0-1.48.06-1.76.1-.15-.1-.46-.14-1.04-.14l-1.17.01c-.02 0-.03-.01-.05-.01-.1-.01-.18-.03-.22-.06-.03-.02-.08-.04-.12-.04-.01 0-.03 0-.04.01-.04.04-.07.05-.04.09-.06.01-.13.02-.2.02l0 .02c-.03-.01-.08-.02-.13-.02-.01 0-.03 0-.04 0-.06 0-.1.01-.15.02l-.15.02c-.11-.02-.18-.05-.2-.05-.01-.01-.03-.02-.05-.02-.03 0-.06.01-.08.03-.02.02-.1.06-.31.06-.17 0-.37-.02-.54-.04 0 0-.28-.03-.28-.03-.03 0-.06.01-.08.03 0 0-.01.01-.01.01-.06.02-.11.03-.13.05-.07-.01-.16-.02-.26-.04-.18-.03-.4-.06-.61-.06-.11 0-.21.01-.31.03-.02.01-.05.02-.06.04-.33.01-.66.03-.9.27-.04.04-.04.1-.01.14.02.03.06.05.1.05.01 0 .08-.02.1-.02-.13.21-.14.6-.12 1.04-.03.01-.04.02-.06.03-.08.09-.1.29-.15.84 0 .04.02.09.06.11-.01.1-.03.22-.05.35-.01.05.01.1.06.12-.02.06-.03.12.01.18.01.01.03.03.05.04-.02.21-.03.4.01.65 0 .01 0 .02.01.03 0 .02 0 .05 0 .07-.05.25-.09.48-.14.68-.01.05.02.1.06.13 0 .09-.02.23-.03.36-.02.21-.04.45-.04.65-.02.03-.03.06-.02.1.02.09.02.13.03.14-.07.05-.08.12-.06.24-.01.02-.01.05 0 .07 0 .01.02.03.02.03.06.09.03.33.02.48-.01.1-.02.2-.02.26 0 .02 0 .04 0 .06-.02.02-.03.05-.03.08-.01.33 0 .68.01 1.04.01.28.02.57.02.85 0 .04.02.06.05.07 0 .01 0 .01 0 .02-.01.01-.02.02-.03.03-.02.04-.01.08 0 .17-.02.02-.05.05-.05.09-.05.66 0 1.45.05 2.21.02.32.04.64.05.93 0 .08 0 .15.01.28 0 .21 0 .41-.01.58-.02.07-.02.14-.03.21l.11 0c0 0 0 0 0 0l-.12.17c.01.48.02.69.05 1.16-.06.55-.08.77.01.87 0 0 .01.01.01.01-.01.14.02.28.04.39.01.03.01.06.02.09-.03.02-.05.05-.05.09-.06 1.02-.04 1.42-.02 1.94.01.3.03.64.03 1.17 0 .01 0 .01 0 .01-.04.04-.05.1-.05.24 0 .04.02.07.05.09.01 0 .01.01.02.01l-.03.05c0 .01.01.05.03.1-.1.31-.05.56-.01.77.04.18.07.34.02.6.03.08.04.25.05.34-.01 0-.03 0-.03 0-.06 0-.11.05-.11.11l.01.46c0 0-.08.1-.08.1-.04.04-.02.09.02.14 0 .01.01.01.01.01 0 .02-.01.03-.02.06-.01.03-.03.07.03.17-.01.02-.03.03-.03.05-.07.14-.06.31.04.47.11.18.3.32.44.32.07 0 .13-.03.16-.08.07 0 .14 0 .2 0 .29 0 .51.03.73.05.19.02.38.05.62.05 0 0 .03 0 .03 0 .04 0 .07-.02.08-.04.22 0 .37.04.53.09.01 0 .02 0 .02 0 .03 0 .06-.02.08-.06.03.01.05.01.08.02.12.02.27.05.38.06 0 0 0 0 .01 0 .03 0 .06-.02.07-.04.05.02.09.04.11.04.01 0 .03 0 .04 0 .03 0 .06-.01.07-.05 0-.01.01-.02.01-.03.24.02.48.04.68.04.03.01.07.02.14.02 0 0 .04 0 .05-.01.08 0 .15.01.23.01 0 .01 0 .02 0 .03.03.05.07.08.12.08 0 0 .01 0 .01 0 .41-.05.82-.05 1.23-.05l.74 0c.29 0 .58 0 .87-.02.02.01.04.02.06.03.11.02.25.03.4.03.19 0 .39-.01.57-.02.1-.01.2-.01.32-.01.03 0 .07 0 .11 0 .02.03.05.04.09.04.01 0 .02 0 .03 0 .04-.01.15-.01.24-.01.19 0 .29 0 .34-.06l.81.01c.25 0 .52-.01.76-.06.05.04.16.08.43.08.16 0 .34-.01.47-.04.02.01.04.01.06.02.02.04.06.06.1.06 0 0 0 0 0 0 .37 0 .49-.04.54-.09.52.04.96.05 1.34.05.68 0 1.16-.04 1.54-.08.26-.03.48-.05.7-.05.25 0 .46.03.74.09l.3-.01c.41-.01.99-.03 1.3-.03.07 0 .12 0 .15 0 .02.01.03.01.05.01 0 0 .01 0 .01 0 .17-.01.22-.04.28-.11.02-.02.05-.06.25-.11.05.06.15.07.26.08.01 0 .02 0 .02 0-.01.02-.01.05 0 .07.02.04.06.07.11.07.01 0 .1-.01.12-.02.02.01.04.02.07.02 0 0 .01 0 .01 0 .12-.01.26-.04.38-.06.02 0 .04-.01.06-.01.02.03.06.05.1.05.01 0 .02 0 .03 0 .16-.04.31-.09.54-.09l.01 0c.02.03.06.05.09.05 0 0 0 0 0 0 .23-.01.42-.03.62-.05.22-.03.44-.05.73-.05.06 0 .13 0 .2 0 .04.05.09.08.16.08.14 0 .33-.14.44-.32.11-.16.13-.33.05-.46zm-4.51-2.86c0 0-.2.03-.2.03-.13.02-.29.05-.42.05-.15 0-.18-.03-.19-.04-.02-.03-.06-.05-.1-.05-.02 0-.05.01-.07.02-.02.01-.1.04-.17.06-.05-.06-.15-.06-.27-.06-.01 0-.02 0-.03 0-.05 0-.11 0-.13.04 0-.04-.02-.09-.05-.11-.02-.01-.05-.02-.07-.02-.03 0-.06.01-.08.03-.07.06-.27.07-.44.07-.1 0-.21.01-.3.02-.06-.03-.13-.05-.2-.05-.15 0-.3.06-.43.1-.01 0-.01 0-.02.01.01-.03.02-.05.02-.07-.01-.05-.05-.1-.1-.11-.01 0-.02 0-.03 0-.04 0-.08.02-.11.06 0 0 0 0-.01.01-.04 0-.07.02-.09.03-.05.01-.09.02-.13.04-.05-.03-.1-.05-.1-.06-.02-.03-.09-.05-.13-.05-.01 0-.02 0-.03 0-.05.01-.13.05-.13.09-.07 0-.14-.01-.2-.03.01-.02.03-.04.02-.06-.02-.05-.06-.08-.12-.08-.01 0-.01 0-.02 0-.02 0-.06.02-.1.04-.01 0-.01 0-.02 0-.17.07-.32.08-.47.08l-.36 0c-.18.05-.54.07-.87.09-.03 0-.06.01-.09.02-.04.01-.08.01-.13.02-.12-.18-.41-.18-.52-.18-.24 0-.56.05-.86.09-.21.03-.42.06-.62.08 0-.01-.01-.03-.02-.04-.02-.04-.08-.07-.13-.07-.14 0-.22.03-.34.08-.05-.06-.15-.06-.25-.06-.29 0-.94.05-1.29.08l-.03.05c-.11-.12-.34-.16-.85-.16l-.8.01c-.17 0-.29-.01-.39-.03-.03 0-.07.02-.1.04-.02-.02-.05-.02-.07-.02-.01 0-.02 0-.03 0-.25.05-.63.11-.96.11-.12 0-.22-.01-.3-.02-.03-.03-.08-.05-.11-.05-.13 0-.22.04-.29.08-.04.01-.07.03-.13.03-.01 0-.03 0-.04 0-.02-.01-.04-.01-.06-.01-.01 0-.02 0-.03 0 0-.06-.09-.12-.16-.13-.02 0-.05-.01-.08-.01-.03 0-.05 0-.06.02-.03.02-.08.03-.08.07l-.12-.04c-.1-.04-.19-.07-.28-.07-.07 0-.13.02-.18.08-.07-.1-.01-.7.03-1.06.03-.32.07-.63.03-.91-.05-.06-.04-.09-.01-.17.03-.07.06-.17.03-.29-.01-.03-.03-.06-.06-.07.01-.06.02-.15.03-.22.03-.19.05-.36.05-.5.02-.03.03-.07.02-.11 0-.01-.02-.06-.02-.06.08-.08.04-.22-.03-.33-.01-.03 0-.14.01-.22.01-.1.03-.2.02-.3.03-.02.04-.05.04-.09.01-.25 0-.51-.01-.79-.01-.21-.02-.42-.02-.64 0-.03-.02-.05-.04-.07.01-.01.01-.02.01-.04 0-.02 0-.05 0-.08 0 0 .01 0 .01-.01.05-.04.07-.1.03-.16 0-.02.01-.08.02-.13.03-.13.06-.3-.01-.32.05-.42 0-.92-.06-1.41-.06-.55-.12-1.06 0-1.39-.01-.42-.02-.54-.08-1.08 0-.01 0-.02 0-.03.02-.02.03-.04.02-.07-.05-.27 0-.6.05-.92.05-.35.11-.68.03-.93-.08-.74-.03-1.53.03-2.45.02-.34.04-.68.06-1.05 0-.04-.01-.08-.04-.1l.03-.07c.01-.03-.02-.18-.04-.21-.01-.01.05-.07.38-.07.21 0 .46.02.73.05.29.03.59.05.86.05.18 0 .32-.01.44-.03.02.02.05.02.07.02.01 0 .01 0 .02 0 .31-.05.62-.06.92-.06l.56 0c.21 0 .42 0 .63-.02.02.01.03.02.05.03.09.02.19.03.32.03.14 0 .3-.01.43-.02.09-.01.17-.02.26-.02.01 0 .02 0 .03 0 0 0 0 0 .01.01.02.03.06.04.09.04.01 0 .03 0 .04-.01.02-.01.11-.01.16-.01.13 0 .23 0 .28-.06l.58.01c.18 0 .39-.01.57-.06.05.04.14.08.34.08.12 0 .25-.01.34-.04 0 0 .01 0 .02.01.02.05.06.08.11.08 0 0 0 0 0 0 .28 0 .38-.04.43-.09.38.04.71.05.99.05.52 0 .88-.05 1.18-.09.2-.03.36-.05.52-.05.18 0 .33.03.55.1l.23-.01c.28-.01.67-.03 1.01-.03.02 0 .05 0 .07 0 .02.01.04.01.06.01 0 0 0 0 0 0 .15 0 .21-.05.26-.13.02-.03.04-.06.13-.1.03.03.07.04.12.04.03 0 .07-.01.11-.02-.04.04-.05.1-.03.15.02.04.06.07.11.07.01 0 .06-.01.08-.02.02.01.04.02.06.02 0 0 .01 0 .01 0 .09-.01.2-.04.29-.07 0 0 .01 0 .01 0 .02.03.06.05.1.05.02 0 .03 0 .05-.01.1-.04.19-.07.36-.08.02.03.06.04.09.04 0 0 0 0 0 0 .17 0 .33-.03.48-.06.15-.03.31-.06.48-.06.06 0 .18.01.18.01-.01.05.01.1.05.13.02.02.05.03.08.03.02 0 .04 0 .06-.01 0 0 .01 0 .01 0l.02.32c0 .06.05.11.12.11 0 0 .02 0 .03 0-.01.07-.02.18-.05.3.05.13.03.22-.01.35-.04.14-.09.3-.02.53 0 .01 0 .02.01.03.01.04.03.07.04.11-.02 0-.04.01-.06.02-.03.02-.05.06-.05.09 0 .09 0 .16.05.21 0 0 0 0 0 0 0 .4-.02.65-.03.88-.02.38-.04.68.03 1.46 0 .04.01.08.04.1-.02.11-.03.21-.03.29-.01.01-.02.02-.03.02-.08.1-.07.28 0 .71.02.11.03.21.04.31-.02.02-.03.05-.03.09 0 .04-.01.12-.02.2-.03.24-.06.53.05.66-.1.32-.06.62-.02.91.03.21.05.4.02.6-.01 0-.01 0-.02 0-.01 0-.02 0-.03.01-.04.05-.05.06 0 .55-.01.05.01.09.05.12 0 0 .01.01.01.01-.01.03-.02.06-.04.09-.02.04 0 .09.02.12 0 .07.04.13.13.17-.01.02-.08.11-.07.14.03.22.02.27.02.33 0 .02 0 .05-.01.08-.01.01-.01.02-.02.03-.08.16-.09.23-.1.4 0 0-.04.31-.04.31-.01.06.05.08.11.1 0 0 0 0 0 0 .03.07.03.16.03.26 0 .05 0 .1 0 .15-.05.04-.06.13-.03.23-.01 0-.02 0-.03 0-.03 0-.05.01-.07.02-.03.02-.05.06-.05.09 0 .05.01.12.02.19.01.08.04.28.01.32-.04.03-.06.08-.05.13.01.05.06.08.11.09.02.03 0 .18-.01.29-.03.22-.07.5.01.75.01.09.06.25.1.4.02.06.04.12.05.19-.03.02-.05.04-.05.08-.04.18-.04.32-.02.47-.02.01-.03.03-.04.05-.01.01 0 .06 0 .12l0 0c-.06.02-.09.08-.08.14.02.09.04.18.06.26-.04.03-.06.11-.05.16.03.3.06.5.17.58.02.02.05.02.07.02.01 0 .04-.01.04-.01.01.29.01.57 0 .7-.04-.05-.1-.08-.11-.09-.03-.01-.04-.02-.06-.02-.01 0-.03.01-.04.02-.01.01-.02.02-.02.03-.06-.01-.13-.02-.2-.02-.18 0-.35.04-.49.07-.09.02-.17.04-.21.07 0-.04-.01-.07-.04-.1-.02-.04-.05-.05-.08-.05z"></path></svg>
                              </button>

                            </div>

                          </div>

                          <div className="Border-icon more-top-bottom-pad">
                            <h4>Center style</h4>

                            <div class="Border-icon-box">


                              <button onClick={() => setqrStyledotCorners('square')}  >
                                <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 8 8" aria-hidden="true"><defs></defs><path fill="#000000" d="m0 0 8 0 0 8-8 0z"></path></svg>
                              </button>

                              <button onClick={() => setqrStyledotCorners('dot')}  >
                                <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 8 8" aria-hidden="true"><defs></defs><path fill="#000000" d="m4 0a4 4 0 110 8 4 4 0 110-8"></path></svg>
                              </button>

                              <button onClick={() => setqrStyledotCorners('rounded')}  >
                                <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 14 14" aria-hidden="true"><defs></defs><path fill="#000000" d="m10 14h-6c-2.21 0-4-1.79-4-4v-6c0-2.21 1.79-4 4-4h6c2.21 0 4 1.79 4 4v6c0 2.21-1.79 4-4 4z"></path></svg>
                              </button>

                              <button onClick={() => setqrStyledotCorners('square')}  >
                                <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 15 15" aria-hidden="true"><defs></defs><path fill="#000000" d="m15 15-13.9 0-1.1-15 15 1.1z"></path></svg>
                              </button>

                              <button onClick={() => setqrStyledotCorners('rounded')}  >
                                <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 15 15" aria-hidden="true"><defs></defs><path fill="#000000" d="m14.56 13.8c.03-.02.04-.06.04-.09l-.02-.32c0-.06-.05-.11-.11-.11 0 0-.02 0-.02 0 .01-.06.02-.12.04-.22-.03-.06-.04-.12-.05-.13.01 0 .03.01.04.01.04 0 .08-.02.1-.05.03-.05.02-.11-.02-.14-.01-.02-.02-.11-.02-.17 0-.05-.01-.1-.01-.15 0 0 .01 0 .01 0 .02-.02 0-.09 0-.12 0-.01 0-.01 0-.02.03-.02.04-.05.05-.09 0-.06 0-.13-.04-.18 0 0 0 0 0 0 .01-.13 0-.26-.01-.39 0-.04-.01-.09-.01-.13.03-.01.06-.02.08-.04.02-.02.05-.06.04-.1-.01-.16-.03-.32-.05-.47-.03-.23-.06-.45-.05-.66 0-.04-.02-.06-.05-.08l.01-.02c.01-.04.03-.09.04-.15.03-.01.05-.04.06-.07 0-.01.01-.03 0-.05.01-.19-.01-.38-.05-.62l-.02-.15c.01-.01.01-.03.02-.04.02-.1.03-.23.03-.35 0-.07 0-.15-.02-.32 0-.01-.01-.03-.02-.04.08-.25.04-.49.01-.7-.02-.15-.04-.3-.02-.44 0 0 0 0 .01 0 .01 0 .03 0 .04-.01.04-.05.04-.07 0-.45 0-.04-.01-.08-.05-.11 0 0 .01-.03.02-.04.02-.04 0-.09-.03-.13 0-.02.01-.05 0-.06-.02-.06-.07-.09-.08-.13.01-.03.02-.07.02-.1.01-.01.02-.01.03-.02.03-.02.04-.06.04-.09 0-.06-.02-.11-.03-.16.07-.12.08-.18.09-.31 0 0 .04-.24.04-.24.01-.06-.04-.08-.1-.1 0 0-.01 0-.01 0-.02-.05-.02-.1-.02-.18 0-.04 0-.09-.01-.14.06-.03.12-.13.13-.17l-.01-.01c0 0 0 0 0 0 .05-.04.06-.14.03-.19.01-.06.02-.14-.02-.24 0 0 .01-.01.01-.01.03-.03.05-.07.04-.11 0-.04-.04-.1-.08-.14 0-.37.01-.85-.13-1.21.01-.01.02-.03.02-.04.01-.11.02-.23 0-.34.02-.01.03-.02.04-.03.01-.01 0-.04 0-.08.05-.02.08-.08.07-.14l-.05-.18c.03-.03.05-.1.04-.14-.02-.16-.04-.28-.08-.37.02-.01.04-.01.05-.02.03-.02.03-.07.03-.1 0-.03-.02-.09-.04-.11-.02-.03-.08-.1-.11-.1 0 0 0 0 0 0 .04-.01.07-.02.09-.06.01-.04.01-.06-.01-.09 0-.04.01-.11-.04-.19.01-.01.03-.02.04-.04.03-.04.02-.1-.01-.14-.07-.08-.18-.13-.28-.14-.06-.07-.17-.12-.3-.12-.01 0-.03 0-.04 0-.03-.01-.12-.04-.14-.04-.05 0-.1.01-.14.04-.01 0-.02-.01-.02-.01-.03-.01-.08-.03-.12-.03-.01 0-.02 0-.02 0l-.07.04c-.02-.02-.05-.03-.07-.04-.02-.01-.06-.01-.09-.01-.02 0-.03 0-.04.01-.02.01-.04.03-.06.06-.02-.03-.06-.05-.09-.05-.01 0-.02 0-.03 0 0 0-.04.02-.05.02-.01 0-.03 0-.04 0-.02 0-.03 0-.04.01-.07.01-.14.01-.2.04-.01 0-.03 0-.05 0-.05 0-.11.01-.18.04 0-.05-.02-.09-.06-.11-.02-.01-.04-.01-.06-.01-.03 0-.05.01-.07.02-.01.01-.06.03-.11.05-.05-.05-.13-.05-.22-.05-.01 0-.01 0-.02 0-.03 0-.07 0-.08.03 0-.04-.02-.08-.06-.1-.02-.01-.04-.02-.06-.02-.03 0-.06.01-.08.03-.05.05-.19.05-.32.06-.08 0-.16.01-.24.02-.01 0-.01 0-.02 0-.06-.01-.1-.02-.23-.07-.01 0-.03-.01-.04-.01-.02 0-.04 0-.05.01-.03.02-.05.04-.05.07-.01.01-.04.03-.08.04.01-.04.01-.07 0-.09-.02-.04-.09-.08-.14-.08-.01 0-.02 0-.03 0-.05.01-.12.05-.11.11-.03.01-.06.02-.09.03-.03-.02-.05-.04-.05-.04-.02-.03-.06-.06-.1-.06-.01 0-.01 0-.02 0-.05.01-.08.04-.09.08-.01 0-.05.01-.09.02-.02-.01-.05-.02-.07-.03 0-.01 0-.02 0-.03-.01-.06-.06-.1-.12-.1-.03 0-.18.04-.2.07-.01.01-.02.03-.03.04 0-.01-.01-.01-.02-.02-.02-.02-.07-.06-.1-.06 0 0 0 0-.01 0-.08.01-.15.05-.22.07-.03.01-.05.02-.07.03-.02-.02-.05-.03-.08-.03-.02 0-.04 0-.05.01-.05.03-.15.03-.25.03-.11 0-.24.01-.35.04-.01 0-.03-.01-.04-.01-.02 0-.04 0-.05.01 0 0-.05.01-.06.01-.01-.05-.04-.1-.06-.12-.02-.02-.11-.03-.17-.03-.02 0-.29-.01-.29-.01-.09 0-.32 0-.43.17-.08 0-.11-.03-.15-.07-.05-.04-.11-.09-.22-.09-.05 0-.1.01-.2.06 0 0-.04.03-.08.06 0 0 0-.01-.01-.01-.02-.04-.07-.06-.12-.06-.09 0-.15.02-.14.04-.06-.01-.1-.01-.13-.03-.02-.01-.03-.01-.05-.01-.03 0-.05.01-.07.03-.03-.01-.05-.02-.08-.03-.06-.02-.13-.05-.29-.05 0 0-.01 0-.01 0-.01.01-.04.02-.06.03 0-.01-.01-.01-.01-.01-.06-.03-.21-.07-.24-.07-.06 0-.07.05-.08.11 0 0 0 0 0 .01-.04.01-.07.02-.1.04-.01 0-.03 0-.04 0-.02 0-.04 0-.06.01-.01-.05-.06-.06-.1-.07 0 0-.01 0-.01 0-.04 0-.1.04-.12.07-.03-.01-.05-.02-.09-.02-.02 0-.05 0-.08.01 0-.06-.03-.11-.09-.12-.01 0-.02 0-.03 0-.04 0-.08.02-.1.06 0 .01-.01.02-.01.03-.02.01-.05.02-.07.03 0-.03-.02-.06-.05-.08-.02-.01-.04-.02-.06-.02-.01 0-.02 0-.03 0 0 0-.18.05-.18.05-.16 0-.35-.01-.46-.05-.03 0-.08-.01-.12-.01-.03 0-.05 0-.06.01-.03-.03-.08-.06-.12-.06-.01 0-.02 0-.03.01-.05.03-.09.05-.07.1l0 0c-.01 0-.03-.01-.04-.01-.01 0-.03 0-.04 0-.12 0-.26.01-.21.05-.07 0-.12-.02-.12-.03-.03-.02-.08-.05-.12-.05-.01 0-.02 0-.03.01-.05.02-.1.04-.1.09-.06 0-.13 0-.18.03-.06-.03-.13-.04-.3-.07-.01 0-.07-.02-.09-.02-.03 0-.06.01-.07.04-.03-.04-.07-.06-.11-.06-.01 0-.01 0-.01 0-.03 0-.08.01-.11.08l-.17-.07c-.03 0-.06.02-.08.03-.04-.01-.08-.03-.13-.03-.02 0-.11.03-.14.04-.01 0-.03 0-.04 0-.14 0-.25.05-.3.12-.11.01-.22.07-.29.14-.04.04 0 .1.03.14 0 .01.01.01.02.02-.08.09-.07.17-.05.18-.03.03-.05.05-.03.09.01.04.03.04.06.05 0 .03-.07.12-.13.2-.02.03-.03.06-.02.09.01.03.02.06.05.07.01.01.03.01.05.02-.05.1-.07.24-.09.44-.01.04.02.05.05.05l-.05.2c-.01.05.03.07.07.09-.01.05-.02.12 0 .14.01.01.02.02.04.03-.02.11-.02.23.02.37.01.02.01.04.02.05-.14.38-.14.87-.13 1.24l0 .14h.02l-.05.05c0 .01 0 .01 0 .02-.04.11-.03.2-.02.32-.02.04-.01.11.04.14.02.01.04.02.07.02.02 0 .04-.01.06-.02 0 0 0 0 0 0l-.04.13c.01.02.02.03.04.05 0 .04 0 .08 0 .11 0 .06 0 .11-.01.14 0 0-.02 0-.03 0-.07.03-.1.08-.09.14l.04.25.01 0c0 .01 0 .03 0 .04.01.07.01.13.08.25-.02.05-.03.1-.03.16 0 .03.01.07.04.09.01.01.01.01.02.02 0 .02-.01.04-.02.06-.01.03.01.06.04.09-.03.02-.07.06-.08.09-.01.03-.01.05 0 .08-.03.04-.03.1-.01.14 0 .01.01.02.01.03-.01 0-.01.01-.01.01-.03.03-.06.09-.05.13-.03.28-.03.34.05.4.02.14 0 .29-.02.44-.03.22-.07.47.02.73-.03.05-.06.1-.07.12.01.06.01.13.01.21 0 .12.01.25.03.35 0 .01.01.02.02.03l-.02.16c-.03.24-.06.42-.05.61 0 .01 0 .03 0 .05.01.03.03.06.06.07.01.04.03.09.05.13-.04.02-.06.06-.06.11.01.21-.02.43-.05.66-.02.16-.04.32-.02.56.02.02.06.04.09.05 0 .04-.01.08-.01.13-.01.13-.02.26-.01.39 0 0 0 0 0 0-.02.02-.05.15-.04.18 0 .03.01.05.03.07-.01.02.01.06.03.09-.02.07-.02.14-.03.21 0 .06-.01.15-.02.17-.04.04-.05.08-.02.13.02.03.05.04.08.04.02 0 .04 0 .06-.01.01.02-.01.1-.03.28.01.02.02.05.03.11 0 0-.02 0-.02 0-.06 0-.1.05-.11.11l-.02.32c0 .04.01.07.04.09 0 .02-.02.15-.02.2-.04.02-.06.06-.06.11.01.11.02.22.09.33.02.03.13.07.17.07 0 0 .14.03.15.03.07 0 .11-.04.13-.06 0 0 0 0 0 0 .23 0 .38.03.52.06.11.02.22.04.36.05 0 0 .02 0 .03 0 .03 0 .05-.01.07-.02.01-.01.02-.01.03-.02.09.01.16.04.24.08.01.01.03.01.04.01.03 0 .05-.02.07-.04 0 0 0 0 0 0 .05.03.11.05.24.07 0 0 .01 0 .01 0 .02 0 .04-.01.06-.02.01.01.02.01.03.01.02.01.04.01.06.01.03 0 .06-.01.08-.04.03-.04.02-.08-.01-.11.04-.01.1-.02.14-.05.01 0 .03.01.03.01 0 .03.01.09.03.12.02.03.12.06.15.06v-.04c.02 0 .04.01.06.01l.02.02c.01 0 .01 0 .02 0 .02 0 .05 0 .07-.01.11.01.23.01.34.01h.19c.14 0 .29 0 .43.02 0 0 .01 0 .01 0 .05 0 .08-.03.1-.08 0 0 0 0 0 0 .09.01.22.03.35.05l.02-.12.1.16c.01.01.09.01.14.01.01 0 .03 0 .03 0l.18.03c0 0 .03 0 .04 0 .04.01.09.02.15.02.12 0 .28-.03.25-.09.06.05.14.07.25.07.05 0 .1 0 .19-.02.03.02.07.03.11.03.02 0 .04 0 .06-.01.09 0 .18-.01.23-.05.01 0 .02 0 .02 0 0 0 .04 0 .05-.01l.26-.01c.06 0 .11.01.15.02.01 0 .02 0 .03 0 .04 0 .11-.01.13-.03l.16.01c.04 0 .07 0 .1-.01.06.03.14.05.24.05.09 0 .18-.01.26-.03 0 0 0 0 .01 0 .02.04.07.07.12.07.17 0 .26-.03.31-.06.05.01.1.02.16.02.08 0 .16-.01.23-.03.05-.01.1-.02.14-.02l.19.07c.26-.04.51-.07.75-.09.01.03.02.05.04.07.02.02.05.02.07.02.01 0 .16-.03.27-.04.18-.03.39-.07.56-.09 0 0 0 0 0 .01.02.04.06.07.11.07 0 0 .01 0 .01 0 .15-.02.29-.02.43-.02h.19c.12 0 .24 0 .37-.04.03.02.07.04.1.04 0 0 .03 0 .04 0 .03 0 .13-.03.15-.06.02-.03.04-.08.03-.12l.04-.02c.02.01.05.02.07.02.03 0 .05-.01.08-.02-.03.04-.04.1-.01.14.02.04.06.06.1.06.01 0 .02 0 .03 0 .01 0 .02-.01.03-.01.02.01.04.01.06.01 0 0 .01 0 .01 0 .11-.01.17-.04.22-.06.02.03.06.04.09.04.02 0 .03 0 .05-.01.07-.03.14-.07.26-.07.02.02.05.04.09.04 0 0 0 0 .01 0 .14-.01.25-.03.36-.05.13-.03.26-.05.53-.06.02.02.05.06.13.06.01 0 .23-.05.23-.05.04 0 .08-.02.1-.05.07-.11.08-.22.09-.33 0-.03-.02-.05-.05-.07-.03-.06-.04-.13-.06-.23z"></path></svg>

                              </button>

                              <button onClick={() => setqrStyledotCorners('square')}  >

                                <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 14 14" aria-hidden="true"><defs></defs><path fill="#000000" d="m7 14 0 0c-3.87 0-7-3.13-7-7v-7h7c3.87 0 7 3.13 7 7v0c0 3.87-3.13 7-7 7z"></path></svg>
                              </button>

                              <button onClick={() => setqrStyledotCorners('rounded')}  >
                                <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 14 14" aria-hidden="true"><defs></defs><path fill="#000000" d="m7 0 0 0c3.87 0 7 3.13 7 7v7h-7c-3.87 0-7-3.13-7-7v0c0-3.87 3.13-7 7-7z"></path></svg>
                              </button>

                              <button onClick={() => setqrStyledotCorners('dot')}  >
                                <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 14 14" aria-hidden="true"><defs></defs><path fill="#000000" d="m0 0h7c3.87 0 7 3.13 7 7v7h-7c-3.87 0-7-3.13-7-7v-7z"></path></svg>
                              </button>

                              <button onClick={() => setqrStyledotCorners('square')}  >
                                <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 14 14" aria-hidden="true"><defs></defs><path fill="#000000" d="m7.8 1.4 1.38-1.05.49 1.66 1.65-.52-.11 1.74 1.73.07-.69 1.59 1.6.67-1.2 1.26 1.28 1.17-1.56.77.8 1.54-1.72.19.22 1.72-1.68-.41-.38 1.7-1.45-.97-.93 1.47-1.03-1.4-1.38 1.05-.49-1.66-1.65.52.11-1.74-1.73-.07.69-1.59-1.6-.67 1.2-1.26-1.28-1.17 1.56-.77-.8-1.54 1.72-.19-.22-1.72 1.68.41.38-1.7 1.45.97.93-1.47z"></path></svg>
                              </button>

                              <button onClick={() => setqrStyledotCorners('rounded')}  >
                                <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 14 14" aria-hidden="true"><defs></defs><path fill="#000000" d="m7.28 11.95 3.23 1.49c.47.22 1.01-.17.94-.69l-.42-3.53c-.02-.19.04-.39.17-.53l2.41-2.61c.35-.38.15-1.01-.36-1.11l-3.49-.7c-.19-.04-.36-.16-.45-.33l-1.74-3.1c-.26-.46-.91-.46-1.17 0l-1.74 3.1c-.1.17-.26.29-.45.33l-3.49.7c-.51.1-.71.73-.36 1.11l2.41 2.61c.13.14.2.34.17.53l-.42 3.53c-.06.52.47.9.94.69l3.23-1.49c.21-.08.41-.08.59 0z"></path></svg>
                              </button>

                              <button onClick={() => setqrStyledotCorners('dot')}  >
                                <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 8 8" aria-hidden="true"><defs></defs><path fill="#000000" d="m4 0 4 4-4 4-4-4 4-4 4 4z"></path></svg>
                              </button>

                              <button onClick={() => setqrStyledotCorners('rounded')}  >
                                <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 8 8" aria-hidden="true"><defs></defs><path fill="#000000" d="m8 0-3 0-1 1-1-1-3 0 0 3 1 1-1 1 0 3 3 0 1-1 1 1 3 0 0-3-1-1 1-1z"></path></svg>
                              </button>

                              <button onClick={() => setqrStyledotCorners('sqaure')}  >
                                <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 14 14" aria-hidden="true"><defs></defs><path fill="#000000" d="m10.29 0 0 0c-.98 0-1.93.39-2.63 1.09l-.66.66-.66-.66c-.7-.7-1.64-1.09-2.63-1.09h0c-2.05 0-3.71 1.66-3.71 3.71v0c0 .98.39 1.93 1.09 2.62l.66.67-.66.66c-.7.7-1.09 1.64-1.09 2.63v0c0 2.05 1.66 3.71 3.71 3.71h0c.98 0 1.93-.39 2.62-1.09l.67-.66.66.66c.7.7 1.64 1.09 2.62 1.09h0c2.05 0 3.71-1.66 3.71-3.71v0c0-.98-.39-1.93-1.09-2.62l-.65-.67.66-.66c.7-.7 1.09-1.64 1.09-2.63v0c0-2.05-1.66-3.71-3.71-3.71z"></path></svg>
                              </button>

                              <button onClick={() => setqrStyledotCorners('rounded')}  >
                                <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 14 14" aria-hidden="true"><defs></defs><path fill="#000000" d="m10.5 3.5 0-3.5-7 0 0 3.5-3.5 0 0 7 3.5 0 0 3.5 7 0 0-3.5 3.5 0 0-7z"></path></svg>
                              </button>

                              <button onClick={() => setqrStyledotCorners('dot')}  >
                                <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 14 14" aria-hidden="true"><defs></defs><path fill="#000000" d="m10.5 3.5 0 0c0-1.93-1.57-3.5-3.5-3.5h0c-1.93 0-3.5 1.57-3.5 3.5v0h0c-1.93 0-3.5 1.57-3.5 3.5v0c0 1.93 1.57 3.5 3.5 3.5h0v0c0 1.93 1.57 3.5 3.5 3.5h0c1.93 0 3.5-1.57 3.5-3.5v0h0c1.93 0 3.5-1.57 3.5-3.5v0c0-1.93-1.57-3.5-3.5-3.5l0 0z"></path></svg>
                              </button>

                              <button onClick={() => setqrStyledotCorners('sqaure')}  >
                                <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 14 14" aria-hidden="true"><defs></defs><path fill="#000000" d="m7.01 2.89c3.5-3.46 6.97-1.73 6.99 1.72.01 2.83-4.65 6.81-6.37 8.17-.37.29-.88.29-1.25 0-1.71-1.36-6.38-5.34-6.38-8.16 0-3.46 3.5-5.19 7.01-1.73z"></path></svg>
                              </button>

                            </div>

                          </div>


                          <div className="Border-colour-box">
                            <h3>Border colour</h3>
                            <div className="form-check form-switch" style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                              <input
                                className="form-check-input"
                                type="checkbox"
                                role="switch"
                                id="flexSwitchCheckDefault"
                                checked={useGradientscorner}
                                onChange={() => setUseGradientscorner(!useGradientscorner)}
                              />
                              <p>Use gradients?</p>
                            </div>


                            {useGradientscorner ? (
                              <div className="long-box-inpt-faild">
                                <div className="color-input-box">
                                  <input
                                    type="text"
                                    className="new-type"
                                    value={gradbordercornerinput1}
                                    onChange={(e) => setgradbordercornerinput1(e.target.value)}
                                    placeholder="Enter Colour"
                                  />

                                  <input
                                    type="color"
                                    className="color-name"
                                    value={gradbordercornerinput1}
                                    onChange={(e) => setgradbordercornerinput1(e.target.value)}
                                  />
                                </div>


                                <div className="color-input-box">
                                  <input
                                    type="text"
                                    className="new-type"
                                    value={gradbordercornerinput2}
                                    onChange={(e) => setgradbordercornerinput2(e.target.value)}
                                    placeholder="Enter Colour"
                                  />

                                  <input
                                    type="color"
                                    className="color-name"
                                    value={gradbordercornerinput2}
                                    onChange={(e) => setgradbordercornerinput2(e.target.value)}
                                  />
                                </div>
                              </div>
                            ) : (


                              <div className="long-box-inpt-faild">
                                <div className="color-input-box">
                                  <input type="text" className='new-type' value={bordersquareconercolor} placeholder='Enter Colour' onChange={(e) => setbordersquareconercolor(e.target.value)} />
                                  <input type="color" className='color-name' value={bordersquareconercolor} onChange={(e) => setbordersquareconercolor(e.target.value)} />
                                </div>

                              </div>

                            )}



                          </div>


                          {/* USEGRADIANT BORDER CORNERS */}
                          <div className="Border-colour-box more-margen-top">
                            <h3>Background colour</h3>
                            <div className="form-check form-switch" style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                              <input
                                className="form-check-input"
                                type="checkbox"
                                role="switch"
                                id="flexSwitchCheckDefault"
                                checked={useGradients}
                                onChange={() => setUseGradients(!useGradients)}
                              />
                              <p>Use gradients?</p>
                            </div>



                            {useGradients ? (
                              <div className="long-box-inpt-faild">
                                <div className="color-input-box">
                                  <input
                                    type="text"
                                    className="new-type"
                                    value={gradborderinput1}
                                    onChange={(e) => setgradborderinput1(e.target.value)}
                                    placeholder="Enter Colour"
                                  />

                                  <input
                                    type="color"
                                    className="color-name"
                                    value={gradborderinput1}
                                    onChange={(e) => setgradborderinput1(e.target.value)}
                                  />
                                </div>


                                <div className="color-input-box">
                                  <input
                                    type="text"
                                    className="new-type"
                                    value={gradborderinput2}
                                    onChange={(e) => setgradborderinput2(e.target.value)}
                                    placeholder="Enter Colour"
                                  />

                                  <input
                                    type="color"
                                    className="color-name"
                                    value={gradborderinput2}
                                    onChange={(e) => setgradborderinput2(e.target.value)}
                                  />
                                </div>
                              </div>
                            ) : (

                              <div className="long-box-inpt-faild">
                                <div className="color-input-box">
                                  <input type="text" className='new-type' value={borderdotconercolor} onChange={(e) =>
                                    setborderdotconercolor(e.target.value)} placeholder='Enter Colour by default' />

                                  <input type="color" className='color-name' value={borderdotconercolor} onChange={(e) =>
                                    setborderdotconercolor(e.target.value)} />
                                </div>
                              </div>
                            )}

                            <div className="Transparent-cheack">
                              <div class="ui-pdf-cheack-box"><input type="checkbox" class="ui-checkbox" /></div>
                              <h3>Transparent background</h3>
                            </div>

                          </div>


                        </div>

                      </div>


                    </AccordionItemPanel>
                  </AccordionItem>



                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>

                        <p className='hello-my-code-p'>Correction Level</p>


                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                          <path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9" />
                        </svg>
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <div className="Correction-lavel">
                        <p>Ensures reliable reading by compensating for damage or distortion. Choosing a higher level improves readability, although it may increase the size of the QR.</p>

                        <div className="Correction-lavel-box">

                          <div className="Correction-lavel-card">
                            <div className="icon-Correction">
                              {/* <img src={icon} alt="" onClick={handleLevelChange ("Q")}/> */}
                              <img src={icon} alt="Level Q" onClick={() => handleLevelChange('Q')} />
                            </div>

                            <div className="Correction-icon-level">
                              <p>Level Q</p>
                              <span>25%</span>
                            </div>

                          </div>

                          <div className="Correction-lavel-card">
                            <div className="icon-Correction">
                              <img src={icon1} alt="Level H" onClick={() => handleLevelChange('H')} />
                            </div>

                            <div className="Correction-icon-level">
                              <p>Level H</p>
                              <span>30%</span>
                            </div>

                          </div>


                          <div className="Correction-lavel-card">
                            <div className="icon-Correction">
                              <img src={icon2} alt="Level M" onClick={() => handleLevelChange('M')} />
                            </div>

                            <div className="Correction-icon-level">
                              <p>Level M</p>
                              <span>15%</span>
                            </div>

                          </div>


                          <div className="Correction-lavel-card">
                            <div className="icon-Correction">
                              <img src={icon3} alt="Level L" onClick={() => handleLevelChange('L')} />
                            </div>

                            <div className="Correction-icon-level">
                              <p>Level L</p>
                              <span>7%</span>
                            </div>

                          </div>

                        </div>



                      </div>
                    </AccordionItemPanel>
                  </AccordionItem>



                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>

                        <p className='hello-my-code-p'>Add logo</p>


                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                          <path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9" />
                        </svg>
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>

                      <div className="Or-logo-box">

                        <div className="choose-img-uploder">

                          <p>Upload your logo</p>
                          <ImageUploader
                            onFileAdded={(img) => getImageFileObject(img)}
                            onFileRemoved={(img) => runAfterImageDelete(img)}
                          />
                        </div>

                        <div className="choose-box-lsft">
                          <h2>Or choose from here</h2>


                          <div className="choose-box-btn">
                            <button onClick={() => setSocail(w1)}><img src={w1} alt="" /></button>
                            <button onClick={() => setSocail(w2)}><img src={w2} alt="" /></button>
                            <button onClick={() => setSocail(w3)}><img src={w3} alt="" /></button>
                            <button onClick={() => setSocail(w4)}><img src={w4} alt="" /></button>
                            <button onClick={() => setSocail(w5)}><img src={w5} alt="" /></button>
                            <button onClick={() => setSocail(w6)}><img src={w6} alt="" /></button>
                            <button onClick={() => setSocail(w7)}><img src={w7} alt="" /></button>
                            <button onClick={() => setSocail(w8)}><img src={w8} alt="" /></button>
                            <button onClick={() => setSocail(w9)}><img src={w9} alt="" /></button>
                            <button onClick={() => setSocail(w10)}><img src={w10} alt="" /></button>
                            <button onClick={() => setSocail(w11)}><img src={w11} alt="" /></button>
                            <button onClick={() => setSocail(w12)}><img src={w12} alt="" /></button>
                            <button onClick={() => setSocail(w13)}><img src={w13} alt="" /></button>

                          </div>

                        </div>


                      </div>

                    </AccordionItemPanel>
                  </AccordionItem>

                </Accordion>
              </div>
            </div>





            <div className="main-content--b--image" style={{ width: '30%' }}>

              <div className="NewQr-Website-header--ImgSec">

                <h2>VCard</h2>
                <span>
                  <img src={Pencel} alt="pen" />
                </span>
              </div>

              <div className='qrclass'>


                {/* <img src={qr} alt="Device Hover" /> */}
                <div className="whiteback" style={{ position: 'relative' }} ref={whiteback}>

                  {qrCode ? (
                    <div
                      className="qr-code-container"
                      style={{
                        backgroundImage: WholeQr ? svgToDataURL(WholeQr) : 'none',
                        backgroundSize: 'cover',
                        position: 'relative',
                        display: 'flex',
                        width: '225px',
                        height: '270px',
                        justifyContent: 'center',
                        alignItems: 'flex-start',
                        paddingTop: '30px',
                      }}
                    >
                      {/* Dynamic text based on position and color */}
                      <div className='hello-1-3' style={{ position: 'absolute', bottom: bottomposition, color: textcolors, fontWeight: 'bold' }}>
                        {textcolor}
                      </div>

                      {/* Actual QR Code */}
                      <div
                        className="qrbackss"
                        style={{
                          backgroundColor: fillcolor || 'transparent',
                        }}
                      >
                        {/* This div will hold the dynamically generated QR code */}
                        <div id='qrCodeContainer' ref={qrCodeRef} style={{ position: 'relative', marginTop: `${margin}px`, marginLeft: `${marginleft}px` }}></div>
                      </div>
                    </div>
                  ) : (
                    <div>
                      <img src={arcode} alt="arcode" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                  )}


                </div>

              </div>



              <div className="pdiv">

                <p>This is an example of how the QR will look like, it is not the final QR, you will be able to download it individually at the end of the process.</p>
              </div>


            </div>



          </div>


        </div>
      </div>

    </>
  );
};

export default BulkCreatqrcode;





