import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { baseurl } from '../baseurl';
// import step1 from '../img/steps1.svg';
// import step2 from '../img/steps2.svg';
// import step3 from '../img/steps.svg';
import everything from '../img/Everythin-pic.png';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import { Container } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const Leave = ({routetoFAQ}) => {

    const { t } = useTranslation();




    return (
        <>
            <section className='Leave'>
            <Container>
                    <div className="main-Leave">
                        <div className="Leave-tital">
                            <h2>{t('NBLeave1')}</h2>
                        </div>

                        <div className="Leave-box">
                            <div className="Leave-tab-box">
                                <Tabs>

                                    <div className="Leave-tab-list">
                                        <TabList>

                                            <Tab >
                                            {t('NBLeave2')}
                                            </Tab>
                                            <Tab >
                                            {t('NBLeave3')}
                                              
                                            </Tab>
                                            <Tab >
                                            {t('NBLeave4')}

                                            </Tab>

                                        </TabList>


                                        <div className=" Leave-tab-boxing">
                                            <TabPanel>

                                                <div className="Everything-faq-box more-faq">


                                                    <Accordion allowZeroExpanded>

                                                        <AccordionItem>

                                                            <AccordionItemHeading>
                                                                <AccordionItemButton>
                                                                   {t('NBLeave5')}
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none"><path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9"></path></svg>
                                                                </AccordionItemButton>
                                                            </AccordionItemHeading>
                                                            <AccordionItemPanel>
                                                                <p>{t('NBLeave6')}</p>
                                                            </AccordionItemPanel>

                                                        </AccordionItem>

                                                        <AccordionItem>

                                                            <AccordionItemHeading>
                                                                <AccordionItemButton>
                                                                {t('NBLeave7')}
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none"><path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9"></path></svg>
                                                                </AccordionItemButton>
                                                            </AccordionItemHeading>
                                                            <AccordionItemPanel>
                                                            {t('NBLeave8')} 
                                                            </AccordionItemPanel>

                                                        </AccordionItem>

                                                        <AccordionItem>

                                                            <AccordionItemHeading>
                                                                <AccordionItemButton>
                                                            {t('NBLeave9')} 
                                                                   
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none"><path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9"></path></svg>
                                                                </AccordionItemButton>
                                                            </AccordionItemHeading>
                                                            <AccordionItemPanel>
                                                            {t('NBLeave10')} 
                                                               
                                                            </AccordionItemPanel>

                                                        </AccordionItem>

                                                        <AccordionItem>

                                                            <AccordionItemHeading>
                                                                <AccordionItemButton>
                                                                {t('NBLeave11')}
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none"><path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9"></path></svg>
                                                                </AccordionItemButton>
                                                            </AccordionItemHeading>
                                                            <AccordionItemPanel>
                                                            {t('NBLeave12')}
                                                               
                                                            </AccordionItemPanel>

                                                        </AccordionItem>

                                                        <AccordionItem>

                                                            <AccordionItemHeading>
                                                                <AccordionItemButton>
                                                                    {t('NBLeave13')}
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none"><path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9"></path></svg>
                                                                </AccordionItemButton>
                                                            </AccordionItemHeading>
                                                            <AccordionItemPanel>
                                                            {t('NBLeave14')}
                                                               
                                                            </AccordionItemPanel>

                                                        </AccordionItem>

                                                        <AccordionItem>

                                                            <AccordionItemHeading>
                                                                <AccordionItemButton>
                                                                {t('NBLeave15')}

                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none"><path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9"></path></svg>
                                                                </AccordionItemButton>
                                                            </AccordionItemHeading>
                                                            <AccordionItemPanel>
                                                            {t('NBLeave16')}

                                                            </AccordionItemPanel>

                                                        </AccordionItem>

                                                        <AccordionItem>

                                                            <AccordionItemHeading>
                                                                <AccordionItemButton>
                                                                   {t('NBLeave17')}
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none"><path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9"></path></svg>
                                                                </AccordionItemButton>
                                                            </AccordionItemHeading>
                                                            <AccordionItemPanel>
                                                            {t('NBLeave18')}
                                                              
                                                            </AccordionItemPanel>

                                                        </AccordionItem>

                                                        <AccordionItem>

                                                            <AccordionItemHeading>
                                                                <AccordionItemButton>
                                                                     {t('NBLeave19')}
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none"><path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9"></path></svg>
                                                                </AccordionItemButton>
                                                            </AccordionItemHeading>
                                                            <AccordionItemPanel>
                                                            {t('NBLeave20')} 
                                                            </AccordionItemPanel>

                                                        </AccordionItem>

                                                        <AccordionItem>

                                                            <AccordionItemHeading>
                                                                <AccordionItemButton>
                                                                  {t('NBLeave21')}
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none"><path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9"></path></svg>
                                                                </AccordionItemButton>
                                                            </AccordionItemHeading>
                                                            <AccordionItemPanel>
                                                            {t('NBLeave22')}
                                                               
                                                            </AccordionItemPanel>

                                                        </AccordionItem>

                                                        <AccordionItem>

                                                            <AccordionItemHeading>
                                                                <AccordionItemButton>
                                                                {t('NBLeave23')}

                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none"><path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9"></path></svg>
                                                                </AccordionItemButton>
                                                            </AccordionItemHeading>
                                                            <AccordionItemPanel>
                                                            {t('NBLeave24')}
                                                            </AccordionItemPanel>

                                                        </AccordionItem>

                                                    </Accordion>
                                                </div>
                                                <div className="main-know-box">


                                                    <div className="know-box">
                                                        <h2>{t('NBLeave25')}</h2>
                                                        <p>{t('NBLeave26')}</p>
                                                        <p>{t('NBLeave27')}</p>
                                                        <button onClick={routetoFAQ}>{t('NBLeave28')}</button>
                                                    </div>
                                                </div>
                                            </TabPanel>

                                            <TabPanel>

                                                <div className="Everything-faq-box more-faq">


                                                    <Accordion allowZeroExpanded>

                                                        <AccordionItem>

                                                            <AccordionItemHeading>
                                                                <AccordionItemButton>
                                                                {t('NBLeave29')}
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none"><path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9"></path></svg>
                                                                </AccordionItemButton>
                                                            </AccordionItemHeading>
                                                            <AccordionItemPanel>
                                                            {t('NBLeave30')}
                                                            </AccordionItemPanel>

                                                        </AccordionItem>

                                                        <AccordionItem>

                                                            <AccordionItemHeading>
                                                                <AccordionItemButton>
                                                                {t('NBLeave31')}
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none"><path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9"></path></svg>
                                                                </AccordionItemButton>
                                                            </AccordionItemHeading>
                                                            <AccordionItemPanel>
                                                            {t('NBLeave32')}
                                                            </AccordionItemPanel>

                                                        </AccordionItem>

                                                        <AccordionItem>

                                                            <AccordionItemHeading>
                                                                <AccordionItemButton>
                                                                    Can I include the isotype or logo of my company in a QR code?
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none"><path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9"></path></svg>
                                                                </AccordionItemButton>
                                                            </AccordionItemHeading>
                                                            <AccordionItemPanel>
                                                                Of course! This will make your QR an active part of your company's merchandising, making it more attractive and recognizable to your customers. You can take advantage of the free version for seven days and try this option in our QR code generator.
                                                            </AccordionItemPanel>

                                                        </AccordionItem>


                                                        <AccordionItem>

                                                            <AccordionItemHeading>
                                                                <AccordionItemButton>
                                                                    Can I create more than one QR code for the same content?
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none"><path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9"></path></svg>
                                                                </AccordionItemButton>
                                                            </AccordionItemHeading>
                                                            <AccordionItemPanel>
                                                                Of course! It is possible to generate 40 different versions of QR codes for any given entry, each with four levels of correction and eight levels of masking. Our qr code generator will choose the best version based on the amount of data stored and readability, in order to produce the best possible image. In addition, you can customize the different versions of your QR with our design tool.
                                                            </AccordionItemPanel>

                                                        </AccordionItem>



                                                    </Accordion>
                                                </div>
                                                <div className="main-know-box">


                                                    <div className="know-box">
                                                        <h2>Want to know more?</h2>
                                                        <p>Check our FAQs to find an answer to any questions you</p>
                                                        <p>may have about our QR codes.</p>
                                                        <button>Answer all your questions</button>
                                                    </div>
                                                </div>
                                            </TabPanel>





                                            <TabPanel>

                                                <div className="Everything-faq-box more-faq">


                                                    <Accordion allowZeroExpanded>

                                                        <AccordionItem>

                                                            <AccordionItemHeading>
                                                                <AccordionItemButton>
                                                                    What should I do before printing my QR code?
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none"><path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9"></path></svg>
                                                                </AccordionItemButton>
                                                            </AccordionItemHeading>
                                                            <AccordionItemPanel>

                                                                To avoid costly mistakes in your marketing campaign, it is necessary that you verify, before printing, that your QR code works correctly.

                                                                <ul>
                                                                    <li>Check that the chosen colors have a good contrast, so that legibility is optimal. Remember that it is essential that the foreground is always darker than the background.</li>
                                                                    <li>Check that there are no errors in the information contained in your QR code (URL, e-mail, text, map, etc.)</li>
                                                                    <li>Test your QR by scanning it from devices with different operating systems</li>
                                                                    <li>We also recommend that, before printing it, you verify that the function or purpose of the QR code is clear in the presentation: The client must know what they should scan it for.</li>
                                                                </ul>
                                                            </AccordionItemPanel>

                                                        </AccordionItem>

                                                        <AccordionItem>

                                                            <AccordionItemHeading>
                                                                <AccordionItemButton>
                                                                    In what graphic formats can QR codes be made?
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none"><path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9"></path></svg>
                                                                </AccordionItemButton>
                                                            </AccordionItemHeading>
                                                            <AccordionItemPanel>
                                                                After registering on our page, you will have the option to download your codes in various formats: high resolution JPG, PNG, SVG or EPS.
                                                            </AccordionItemPanel>

                                                        </AccordionItem>

                                                        <AccordionItem>

                                                            <AccordionItemHeading>
                                                                <AccordionItemButton>
                                                                    Is there a limit to the number of scans for QR codes?
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none"><path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9"></path></svg>
                                                                </AccordionItemButton>
                                                            </AccordionItemHeading>
                                                            <AccordionItemPanel>
                                                                No. QR codes can be scanned an unlimited number of times.
                                                            </AccordionItemPanel>

                                                        </AccordionItem>

                                                        <AccordionItem>

                                                            <AccordionItemHeading>
                                                                <AccordionItemButton>
                                                                    How to read or scan a QR code with my smartphone?
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none"><path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9"></path></svg>
                                                                </AccordionItemButton>
                                                            </AccordionItemHeading>
                                                            <AccordionItemPanel>
                                                                Many iPhone and Android devices already have a built-in QR code reader.
                                                                <ul>
                                                                    <li>To access this function, just open the camera on your mobile phone and hold it over a code for a few seconds, until a notification appears on the screen.</li>
                                                                    <li>In case this does not happen, go to settings, to check that QR scanning is enabled.</li>
                                                                    <li>If you don't have the feature, just download and install a QR code reader from your app store (most are free!).</li>

                                                                </ul>
                                                            </AccordionItemPanel>

                                                        </AccordionItem>

                                                        <AccordionItem>

                                                            <AccordionItemHeading>
                                                                <AccordionItemButton>
                                                                    Can I scan QR codes without an app?
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none"><path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9"></path></svg>
                                                                </AccordionItemButton>
                                                            </AccordionItemHeading>
                                                            <AccordionItemPanel>
                                                                <ul>
                                                                    <li>Most iOS and Android devices have a QR code scanner built into the camera itself. Simply open the camera app and hold it over any code until a notification appears.</li>
                                                                    <li>If you don't want to download an app, you can search the web for an online reader. These are usually free and decode the QR directly from the browser.</li>
                                                                </ul>
                                                            </AccordionItemPanel>

                                                        </AccordionItem>

                                                        <AccordionItem>

                                                            <AccordionItemHeading>
                                                                <AccordionItemButton>
                                                                    Why is my QR code not working?
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none"><path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9"></path></svg>
                                                                </AccordionItemButton>
                                                            </AccordionItemHeading>
                                                            <AccordionItemPanel>
                                                                This can happen for different reasons. The code may be blurry or the scanner may not detect it because there is not enough contrast between the code and the background. You must remember that it is essential that the foreground is always darker than the background. In case of any difficulty, do not hesitate to contact us.
                                                            </AccordionItemPanel>

                                                        </AccordionItem>


                                                    </Accordion>
                                                </div>
                                                <div className="main-know-box">


                                                    <div className="know-box">
                                                        <h2>Want to know more?</h2>
                                                        <p>Check our FAQs to find an answer to any questions you</p>
                                                        <p>may have about our QR codes.</p>
                                                        <button>Answer all your questions</button>
                                                    </div>
                                                </div>
                                            </TabPanel>
                                        </div>


                                    </div>


                                </Tabs>
                            </div>
                        </div>
                    </div>
            </Container>
            </section>
        </>
    )

}

export default Leave