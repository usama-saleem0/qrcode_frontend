import React from 'react'

import { Col, Container, Row } from 'react-bootstrap'
import { IoChevronForwardSharp } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa6";


import Header from '../header/header';
import Footer from '../Footer/Footer';

import w1 from '../img/Vector.svg';
import w2 from '../img/page31.png';
import w3 from '../img/page32.png';
import w4 from '../img/page33.png';
import w5 from '../img/page34.png';
import w6 from '../img/page35.png';
import w7 from '../img/page36.png';

import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import { useTranslation } from 'react-i18next';
const Business2  = () => {
    const { t } = useTranslation();
  return (
    <>


<Header/>  
<div className="busines-inner">
    <div className="inner-bussines">
        <h2>{t('title')}</h2>
        <button className="jss2570">
            <span className="jss2570-span">
                {t('button')}
                <img src={w1} alt=""/>
            </span>
        </button>
    </div>
</div>


<div className="busines-inner-1">
    <div className="qr-cont">
        <div className="jss160">
            <div className="jss161">
                <div className="jss164">
                    <a href="#" className="btnnn-1">{t('benefits5')}</a>
                    <a href="#best-practices">{t('bestPractices')}</a>
                    <a href="#use-cases">{t('useCases')}</a>
                    <a href="#">{t('faq')}</a>
                </div>
            </div>
            <p>{t('marketingTool')}</p>
        </div>

        <div className="jss163">
            <div className="jss180 half">
                <div className="jss181">
                    <img className="jss182" src={w2} alt=""/>
                </div>
                <div className="jss183">
                    <a href="#">{t('createQRCode1')}</a>
                </div>
            </div>

            <div className="jss180 half">
                <div className="jss181">
                    <img className="jss182" src={w3} alt=""/>
                </div>
                <div className="jss183">
                    <a href="#">{t('createQRCode')}</a>
                </div>
            </div>

            <div className="jss180">
                <div className="jss181">
                    <img className="jss182" src={w4} alt=""/>
                </div>
                <div className="jss183">
                    <a href="#">{t('createQRCode')}</a>
                </div>
            </div>

            <div className="jss180 half">
                <div className="jss181">
                    <img className="jss182" src={w5} alt=""/>
                </div>
                <div className="jss183">
                    <a href="#">{t('createQRCode')}</a>
                </div>
            </div>

            <div className="jss180 half">
                <div className="jss181">
                    <img className="jss182" src={w6} alt=""/>
                </div>
                <div className="jss183">
                    <a href="#">{t('createQRCode')}</a>
                </div>
            </div>

            <div className="jss180">
                <div className="jss181">
                    <img className="jss182" src={w7} alt=""/>
                </div>
                <div className="jss183">
                    <a href="#">{t('createQRCode')}</a>
                </div>
            </div>
        </div>
    </div>
</div>
<section className="hello-my-faq-code">
    <div className="jss251">
        <div className="benefitsofusing">
            <h2>{t('benefitsOfUsing')}</h2>
            <p>{t('easyToCreate')}</p>
            <h3>{t('renewTraditionalFlyers')}</h3>
            <p>{t('traditionalDigitalMarketing')}</p>
            <p>{t('dynamicQRCode')}</p>
        </div>

        <div className="Everything-faq-box more-faq more-2">
            <Accordion allowZeroExpanded>
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            {t('qrCodeDirectWebsite')}
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                                <path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9"></path>
                            </svg>
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        {t('qrCodeDirectWebsiteAnswer')}
                    </AccordionItemPanel>
                </AccordionItem>

                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            {t('qrCodeStorage')}
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                                <path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9"></path>
                            </svg>
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        {t('qrCodeStorageAnswer')}
                    </AccordionItemPanel>
                </AccordionItem>

                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            {t('qrCodePurpose')}
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                                <path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9"></path>
                            </svg>
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        {t('qrCodePurposeAnswer')}
                    </AccordionItemPanel>
                </AccordionItem>

                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            {t('benefitOfQRCode')}
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                                <path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9"></path>
                            </svg>
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        {t('benefitOfQRCodeAnswer')}
                    </AccordionItemPanel>
                </AccordionItem>
            </Accordion>
        </div>
    </div>
</section>

<div className="jss235" id="how-to">
    <div className="jss236">
        <h3 className="jss237">{t('howToCreateQRCode')}</h3>
        <ul className="jss238">
            <li className="jss239">
                <span className="jss240">1</span>
                <p className="jss241" dangerouslySetInnerHTML={{ __html: t('step11') }}></p>
            </li>
            <li className="jss239">
                <span className="jss240">2</span>
                <p className="jss241">{t('step21')}</p>
            </li>
            <li className="jss239">
                <span className="jss240">3</span>
                <p className="jss241">{t('step31')}</p>
            </li>
            <li className="jss239">
                <span className="jss240">4</span>
                <p className="jss241">{t('step4')}</p>
            </li>
            <li className="jss239">
                <span className="jss240">5</span>
                <p className="jss241">{t('step5')}</p>
            </li>
            <li className="jss239">
                <span className="jss240">6</span>
                <p className="jss241" dangerouslySetInnerHTML={{ __html: t('step6') }}></p>
            </li>
        </ul>
    </div>
</div>

<div className="jss242" id="best-practices">
    <div className="jss243">
        <h3 className="jss244">{t('bestPractices1')}</h3>
        <p className="jss245">{t('successMessage')}</p>
        <ul className="jss246">
            <li className="jss247">
                <h4 className="jss248">{t('addInstructions')}</h4>
                <p className="jss249">{t('addInstructions')}</p>
            </li>
            <li className="jss247">
                <h4 className="jss248">{t('frameIt')}</h4>
                <p className="jss249">{t('frameIt')}</p>
            </li>
            <li className="jss247">
                <h4 className="jss248">{t('addLogo')}</h4>
                <p className="jss249">{t('addLogo')}</p>
            </li>
            <li className="jss247">
                <h4 className="jss248">{t('saveDesigns')}</h4>
                <p className="jss249">{t('saveDesigns')}</p>
            </li>
            <li className="jss247">
                <h4 className="jss248">{t('testBeforePrinting')}</h4>
                <p className="jss249">{t('testBeforePrinting')}</p>
            </li>
        </ul>
        <p className="jss249">{t('learnMore')}</p>
    </div>
</div>


<div className="jss250" id="use-cases">
    <div className="jss251">
        <h3 className="jss252">{t('discoverQR_NB')}</h3>
        <p className="jss253">{t('imagineScope_NB')}</p>
        <ul className="jss254">
            <li className="jss255">
                <h4 className="jss256">{t('educationalInstitutions_NB')}</h4>
                <p className="jss257">{t('educationalDescription_NB')}</p>
            </li>
            <li className="jss255">
                <h4 className="jss256">{t('repairServices_NB')}</h4>
                <p className="jss257">{t('repairDescription_NB')}</p>
            </li>
            <li className="jss255">
                <h4 className="jss256">{t('medicalServices_NB')}</h4>
                <p className="jss257">{t('medicalDescription_NB')}</p>
            </li>
            <li className="jss255">
                <h4 className="jss256">{t('restaurants_NB')}</h4>
                <p className="jss257">{t('restaurantDescription_NB')}</p>
            </li>
            <li className="jss255">
                <h4 className="jss256">{t('gymStudios_NB')}</h4>
                <p className="jss257">{t('gymDescription_NB')}</p>
            </li>
        </ul>
        <p className="jss257">{t('qrUpdateInfo_NB')}</p>
    </div>
</div>

<section className='hello-my-faq-code'>
    <div className="jss251">
        <div className="your-faq-box">
            <div className="Everything-faq-box more-faq">
                <h3>{t('faqTitle_NB')}</h3>
                <Accordion allowZeroExpanded>
                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                {t('faqQuestion1_NB')}
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                                    <path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9"></path>
                                </svg>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            {t('faqAnswer1_NB')}
                        </AccordionItemPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                {t('faqQuestion2_NB')}
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                                    <path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9"></path>
                                </svg>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            {t('faqAnswer2_NB')}
                        </AccordionItemPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                {t('faqQuestion3_NB')}
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                                    <path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9"></path>
                                </svg>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            {t('faqAnswer3_NB')}
                        </AccordionItemPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                {t('faqQuestion4_NB')}
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                                    <path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9"></path>
                                </svg>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            {t('faqAnswer4_NB')}
                        </AccordionItemPanel>
                    </AccordionItem>
                </Accordion>
            </div>

            <div className="main-know-box">
                <div className="know-box">
                    <h2>{t('moreQuestions_NB')}</h2>
                    <p>{t('visitHelpCenter_NB')}</p>
                    <button>{t('visitUs_NB')}</button>
                </div>
            </div>
        </div>
    </div>
</section>
<Footer/>
        
    </>
  )
}

export default Business2