import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { baseurl } from '../baseurl';
// import step1 from '../img/steps1.svg';
// import step2 from '../img/steps2.svg';
// import step3 from '../img/steps.svg';
import everything from '../img/Everythin-pic.png';
import { useTranslation } from 'react-i18next';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import { Container } from 'react-bootstrap';

const Everything = () => {

    const { t } = useTranslation();








    return (
        <>
            <section className='Everything'>
            <Container>
                    <div className="min-Everything">
                        <div className="Everything-tital">
                            <h2>{t('NBEverthing1')}</h2>
                            <p>{t('NBEverthing2')}</p>
                            <p>{t('NBEverthing3')}</p>
                        </div>

                        <div className="Everything-box">
                            <div className="Everything-imger">
                                <img src={everything} alt="" />
                            </div>

                            <div className="Everything-faq-box">
                                <Accordion allowZeroExpanded>
                                    <AccordionItem>
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                            {t('NBEverthing4')}
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                                                    <path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9" />
                                                </svg>
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                            <p>
                                            {t('NBEverthing5')}
                                            {t('NBEverthing6')}
                                            {t('NBEverthing7')}
                                            </p>
                                        </AccordionItemPanel>
                                    </AccordionItem>


                                    <AccordionItem>
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                            {t('NBEverthing8')}
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                                                    <path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9" />
                                                </svg>
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                            <p>
                                            {t('NBEverthing9')}
                                            </p>
                                        </AccordionItemPanel>
                                    </AccordionItem>


                                    <AccordionItem>
                                        <AccordionItemHeading>
                                            <AccordionItemButton>

                                            {t('NBEverthing10')}

                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                                                    <path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9" />
                                                </svg>
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                            <p>
                                            {t('NBEverthing11')}
                                        
                                              
                                            </p>
                                        </AccordionItemPanel>
                                    </AccordionItem>


                                </Accordion>
                            </div>
                        </div>
                    </div>
                    </Container>
            </section>
        </>
    )

}

export default Everything