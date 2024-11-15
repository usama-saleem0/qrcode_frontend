import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { IoChevronForwardSharp } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa6";


import Header from '../header/header';
import Footer from '../Footer/Footer';

import a1 from '../img/Vector.svg';
import a2 from '../img/page21.png';
import a3 from '../img/page22.png';
import a4 from '../img/page23.png';
import a5 from '../img/page24.png';
import a6 from '../img/page25.png';
import a7 from '../img/page26.png';
import { useTranslation } from 'react-i18next';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
const Business1  = () => {
    const { t } = useTranslation(); 
  return (
    <>


<Header/>  

<div className="business-inner">
      <div className="inner-business">
        <h2>{t('qrCodesFlyers_title_NB')} <span>{t('qrCodesFlyers_highlight_NB')}</span></h2>
        <button className="jss2570">
          <span className="jss2570-span">
            {t('qrCodesFlyers_buttonText_NB')}
            <img src={a1} alt="" />
          </span>
        </button>
      </div>
    </div>




    <div className="business-inner-1">
      <div className="qr-cont">
        <div className="jss160">
          <div className="jss161">
            <div className="jss164">
              <a href="#" className="btnnn-1">{t('businessInner_benefits_NB')}</a>
              <a href="#best-practices">{t('businessInner_bestPractices_NB')}</a>
              <a href="#use-cases">{t('businessInner_useCases_NB')}</a>
              <a href="#">{t('businessInner_faq_NB')}</a>
            </div>
          </div>
          <p>{t('businessInner_paragraph_NB')}</p>
        </div>

        <div className="jss163">
          {[a2, a3, a4, a5, a6, a7].map((image, index) => (
            <div className={`jss180 ${index % 2 === 0 ? 'half' : ''}`} key={index}>
              <div className="jss181">
                <img className="jss182" src={image} alt="" />
              </div>
              <div className="jss183">
                <a href="#">{t('businessInner_createQrCode_NB')}</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>



 <section className='hello-my-faq-code'>
            <div className="jss251">
      <div className="benefitsofusing">
        <h2>{t('benefitsOfUsingQrCodes_title_NB')}</h2>
        <p>{t('benefitsOfUsingQrCodes_paragraph1_NB')}</p>

        <h3>{t('benefitsOfUsingQrCodes_subtitle_NB')}</h3>

        <p>{t('benefitsOfUsingQrCodes_paragraph2_NB')}</p>

        <p>{t('benefitsOfUsingQrCodes_paragraph3_NB')}</p>
      </div>

      <div className="Everything-faq-box more-faq more-2">
        <Accordion allowZeroExpanded>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                {t('faq_qrCodeDirectWebsite_NB')}
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                  <path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9"></path>
                </svg>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              {t('faq_qrCodeDirectWebsite_answer_NB')}
            </AccordionItemPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                {t('faq_qrCodeInformationStorage_NB')}
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                  <path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9"></path>
                </svg>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              {t('faq_qrCodeInformationStorage_answer_NB')}
            </AccordionItemPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                {t('faq_purposeOfQrCode_NB')}
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                  <path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9"></path>
                </svg>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              {t('faq_purposeOfQrCode_answer_NB')}
            </AccordionItemPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                {t('faq_benefitOfQrCode_NB')}
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                  <path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9"></path>
                </svg>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              {t('faq_benefitOfQrCode_answer_NB')}
            </AccordionItemPanel>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
            </section>

            <div className="jss235" id="how-to">
      <div className="jss236">
        <h3 className="jss237">{t('howToCreateQrCode_title_NB')}</h3>
        <ul className="jss238">
          <li className="jss239">
            <span className="jss240">1</span>
            <p className="jss241">{t('howToCreateQrCode_step1_NB')}</p>
          </li>
          <li className="jss239">
            <span className="jss240">2</span>
            <p className="jss241">{t('howToCreateQrCode_step2_NB')}</p>
          </li>
          <li className="jss239">
            <span className="jss240">3</span>
            <p className="jss241">{t('howToCreateQrCode_step3_NB')}</p>
          </li>
          <li className="jss239">
            <span className="jss240">4</span>
            <p className="jss241">{t('howToCreateQrCode_step4_NB')}</p>
          </li>
          <li className="jss239">
            <span className="jss240">5</span>
            <p className="jss241">{t('howToCreateQrCode_step5_NB')}</p>
          </li>
          <li className="jss239">
            <span className="jss240">6</span>
            <p className="jss241">{t('howToCreateQrCode_step6_NB')}</p>
          </li>
        </ul>
      </div>
    </div>


    <div className="jss235" id="how-to">
      <div className="jss236">
        <h3 className="jss237">{t('howToCreateQrCode_title_NB')}</h3>
        <ul className="jss238">
          <li className="jss239">
            <span className="jss240">1</span>
            <p className="jss241">{t('howToCreateQrCode_step1_NB')}</p>
          </li>
          <li className="jss239">
            <span className="jss240">2</span>
            <p className="jss241">{t('howToCreateQrCode_step2_NB')}</p>
          </li>
          <li className="jss239">
            <span className="jss240">3</span>
            <p className="jss241">{t('howToCreateQrCode_step3_NB')}</p>
          </li>
          <li className="jss239">
            <span className="jss240">4</span>
            <p className="jss241">{t('howToCreateQrCode_step4_NB')}</p>
          </li>
          <li className="jss239">
            <span className="jss240">5</span>
            <p className="jss241">{t('howToCreateQrCode_step5_NB')}</p>
          </li>
          <li className="jss239">
            <span className="jss240">6</span>
            <p className="jss241">{t('howToCreateQrCode_step6_NB')}</p>
          </li>
        </ul>
      </div>
    </div>


    <div className="jss250" id="use-cases">
  <div className="jss251">
    <h3 className="jss252">{t('discoverQrCodes_title_NB')}</h3>
    <p className="jss253">{t('discoverQrCodes_intro_NB')}</p>
    
    <ul className="jss254">
      <li className="jss255">
        <h4 className="jss256">{t('useCase_eventManagement_title_NB')}</h4>
        <p className="jss257">{t('useCase_eventManagement_description_NB')}</p>
      </li>

      <li className="jss255">
        <h4 className="jss256">{t('useCase_softwareDevelopers_title_NB')}</h4>
        <p className="jss257">{t('useCase_softwareDevelopers_description_NB')}</p>
      </li>

      <li className="jss255">
        <h4 className="jss256">{t('useCase_editors_title_NB')}</h4>
        <p className="jss257">{t('useCase_editors_description_NB')}</p>
      </li>

      <li className="jss255">
        <h4 className="jss256">{t('useCase_retailers_title_NB')}</h4>
        <p className="jss257">{t('useCase_retailers_description_NB')}</p>
      </li>

      <li className="jss255">
        <h4 className="jss256">{t('useCase_tourism_title_NB')}</h4>
        <p className="jss257">{t('useCase_tourism_description_NB')}</p>
      </li>
    </ul>

    <p className="jss257">{t('discoverQrCodes_conclusion_NB')}</p>
  </div>
</div>

<section className='hello-my-faq-code'>
  <div className="jss251">
    <div className="your-faq-box">
      <div className="Everything-faq-box more-faq">
        <h3>{t('faq_title_NB1')}</h3>
        <Accordion allowZeroExpanded>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                {t('faq_question1_NB')}
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                  <path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9"></path>
                </svg>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              {t('faq_answer1_NB')}
            </AccordionItemPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                {t('faq_question2_NB')}
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                  <path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9"></path>
                </svg>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              {t('faq_answer2_NB')}
            </AccordionItemPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                {t('faq_question3_NB')}
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                  <path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9"></path>
                </svg>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              {t('faq_answer3_NB')}
            </AccordionItemPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                {t('faq_question4_NB')}
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                  <path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9"></path>
                </svg>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              {t('faq_answer4_NB')}
            </AccordionItemPanel>
          </AccordionItem>
        </Accordion>
      </div>

      <div className="main-know-box">
        <div className="know-box">
          <h2>{t('faq_moreQuestions_title_NB')}</h2>
          <p>{t('faq_moreQuestions_text_NB')}</p>
          <button>{t('faq_visitButton_NB')}</button>
        </div>
      </div>
    </div>
  </div>
</section>


<Footer/>
        
    </>
  )
}

export default Business1