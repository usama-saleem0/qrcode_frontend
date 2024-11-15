// NewQR_Website.js INNER 
import {React, useEffect, useState} from 'react';
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
import mb18 from "../../img/mb18.png";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import { baseurl } from '../../baseurl';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const BarcodeQr = () => {

  const [GTIN, setGTIN] = useState('');
  const [Website, setWebsite] = useState('');
  const [isSwitchOnss, setIsSwitchOnss] = useState(false);
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [password, setPassword] = useState('');
  const [isChecked, setIsSwitchOn] = useState(false);

  const navigate = useNavigate();


  const { id } = useParams();
  useEffect(() => {

    if(id){

      console.log('params id', id)

      fetchBarcode(id)




    }
   


  
  }, []);


  const fetchBarcode = async (id) => {
   
    try {
      const response = await axios.get(`${baseurl}/getBarcodeQr/${id}`);
      setGTIN(response.data.data.GTIN)
      setWebsite(response.data.data.Website)

      




      






     
    } catch (error) {
      console.error('Error fetching QR code by ID:', error);
    }
  };


  const handleSubmit1 = async (e) => {
    console.log(e, "formDatassss");


    const getUserFromLocalStorage = () => {
      const user = localStorage.getItem('userData');
      return user ? JSON.parse(user) : null;
    };

    const storedUser = getUserFromLocalStorage();
    const userId = storedUser ? storedUser.id : null;

    console.log(userId, "userId");


    if(id){
      try {
        const response = await axios.post(`${baseurl}/updateTempletBarcode/${id}`, {
          GTIN,
          Website,
          userId
        });
        toast.success('QrCode created successfully');
  
        console.log('hello',response.data.data.id)
        const data = {
          password,
          startTime,
          endTime,
          url:Website,
          isChecked,
          type:'Barcode',
          userId: userId
          
          
        };
        
        localStorage.setItem('hyperId', response.data.data.id);
        localStorage.setItem('myData', JSON.stringify(data));
        navigate('/Creatqrcode')
  
        console.log('QrCode submitted successfully:', response.data);
      } catch (error) {
          toast.error('Error submitting QrCode ');
        console.error('Error submitting form:', error);
  
      }
    }

    else{
      try {
        const response = await axios.post(`${baseurl}/createtempletBarcode`, {
          GTIN,
          Website,
          userId
        });
        toast.success('QrCode created successfully');
  
        console.log('hello',response.data.data.id)
        const data = {
          password,
          startTime,
          endTime,
          url:Website,
          isChecked,
          type:'Barcode',
          userId: userId
          
          
        };
        
        localStorage.setItem('hyperId', response.data.data.id);
        localStorage.setItem('myData', JSON.stringify(data));
        navigate('/Creatqrcode')
  
        console.log('QrCode submitted successfully:', response.data);
      } catch (error) {
          toast.error('Error submitting QrCode ');
        console.error('Error submitting form:', error);
  
      }
    }

   
  };
  const handleSwitchToggles = (event) => {
    setIsSwitchOnss(event.target.checked);
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



                  <AccordionItem uuid="basicInfo" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                    <AccordionItemHeading>
                      <AccordionItemButton >

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



                      <div className="NewQR-Website-faq-box--websiteurl">
                        <h3>Global Trade Item Number (GTIN)</h3>
                        <input type="text" placeholder="Eg.8080808080" name='GTIN' value={GTIN}  onChange={(e) => setGTIN(e.target.value)} />

                      </div>


                      <div className="NewQR-Website-faq-box--websiteurl">
                        <h3>Website URL</h3>
                        <input type="text" placeholder="Enter Website Url" name='Website' value={Website}  onChange={(e) => setWebsite(e.target.value)}  />
                      </div>
                      <br />

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


                            <input type="date" id="Calender" disabled={!isSwitchOnss}   value={startTime}
                            onChange={(e) => setStartTime(e.target.value)} ></input>
                            <input type="date" id="Calender"  disabled={!isSwitchOnss}  value={endTime}
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

                <h2>Barcode</h2>
                <span>
                  <img src={Pencel} alt="pen" />
                </span>
              </div>


             

              <img src={mb18} alt="Device Hover" />
          
              <p>IMPORTANT: Remember that you canpreview and test your QR codes by clickingon the icon</p>
              <button onClick={handleSubmit1} className='brand--save   abosulutebutton' style={{ width: '60%' }}>
                Next
              </button> {/* Save button */}
           
            </div>




          </div>


        </div>

      </div>

    </>
  )
}

export default BarcodeQr;

