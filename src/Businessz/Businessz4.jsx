import React from 'react'

import Header from "../header/header"

import Footer from '../Footer/Footer'
import { Col, Container, Row } from 'react-bootstrap'
import { FaArrowRight } from 'react-icons/fa6'
import { IoChevronForwardSharp } from 'react-icons/io5'




import h1 from "../img/td1.webp"
import h2 from "../img/td2.webp"
import h3 from "../img/td3.webp"
import h4 from "../img/td4.webp"
import h5 from "../img/td5.webp"
import h6 from "../img/td6.webp"
import h7 from "../img/td7.webp"
import h8 from "../img/td8.webp"
import mobilh from "../img/mobilh.png"
import All_Plans from './All_Plans'
import { useTranslation } from 'react-i18next';

const Businessz4 = () => {
    const { t } = useTranslation();

  return (
    <>
        
     <Header/>  

     <section className="type_first_sec kd5">
            <Container>
                <Row className='hello-row'>
                    <Col lg={8}>
                    <div className="typepg_breadscrum">
                    <a href="#">{t('Business_bk0')}</a>
                        <span><IoChevronForwardSharp /></span>
                        <a href="#">{t('Business_bk')}</a>
                        <span><IoChevronForwardSharp /></span>
                        <a href="#">{t('Retailers_bk')}</a>
                    </div>
                        <div className="type_first_sec_txt">
                  
                            <h2>{t('QR_Code_Retailers_bk')}</h2>
                            <p className='total-spaas'>{t('QR_codes_in_retailers_bk')}</p>
                            <a href="#">{t('Business_bk4')} </a>
                        </div>
                    </Col>
                    <Col lg={3}>
                       <div className="mobilh-img-box">
                        <img src={mobilh} alt="" />
                       </div>
                    </Col>
                </Row>
            </Container>
        </section>


        <section className="create_type_sec">
                <Container>
                    <Row>
             
                        <Col lg={6}>
                            <div className="create_type_txt">
                              
                                <h3>{t('Explore_Shop_Local_bk')}</h3>
                                <p>{t('Shop_Local_symbolizes_bk')}</p>
                        
                            </div>
                        </Col>

                        <Col lg={6}>
                        <div className="create_type_img-1 more-left">
                                <img src={h1} alt="" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
   


            <section className="create_type_sec">
                <Container>
                    <Row>
                        <Col lg={6}>
                            <div className="create_type_img-1">
                                <img src={h2} alt="" />
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="create_type_txt">
                                <h6>{t('Coupon_bk')}</h6>
                                <h3>{t('transformSalesStrategy_bk')}</h3>
                                <p>{t('revolutionizeSalesWithCoupon_bk')}</p>
                                 <div className="more-end-btn-box">
                                  <button className='hello-cr'>{t('Create_bk')} </button>
                                    <button className='More-Info'>{t('More_bk')}</button>
                                 </div>
                            </div>
                        </Col>  
                    </Row>
                </Container>
            </section>

            <section className="personalize_type_sec">
                <Container>
                    <Row>
                        <Col lg={6}>
                            <div className="create_type_txt">
                                <h6>{t('Feedback_QR_bk')}</h6>
                                <h3>{t('getFeedbackEasily_bk')}</h3>
                                <p>{t('integrateFeedbackQR_bk')}</p>
                             <div className="more-end-btn-box">
                                  <button className='hello-cr'>{t('Create_bk')} </button>
                                    <button className='More-Info'>{t('More_bk')}</button>
                                 </div>
                            </div>
                        </Col>
                        <Col lg={6}>
                        <div className="create_type_img-1 more-left">
                                <img src={h3} alt="" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>


            <section className="create_type_sec">
                <Container>
                    <Row>
                        <Col lg={6}>
                            <div className="create_type_img-1">
                                <img src={h4} alt="" />
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="create_type_txt">
                            <h6>{t('PDF_Code_bk')}</h6>
                                <h3>{t('offerPaperlessContent_bk')}</h3>
                                <p>{t('providePaperlessExperience_bk')}</p>
                             <div className="more-end-btn-box">
                                  <button className='hello-cr'>{t('Create_bk')} </button>
                                    <button className='More-Info'>{t('More_bk')}</button>
                                 </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>


            <section className="personalize_type_sec">
                <Container>
                    <Row>
                        <Col lg={6}>
                            <div className="create_type_txt">
                            <h6>{t('QRfy_bk')}</h6>
                            <h3>{t('Create_manage_bk')}</h3>
                            <p>{t('Design_impressive_bk')}</p>
                             <div className="more-end-btn-box">
                                  <button className='hello-cr'>{t('Create_bk')} </button>
                                    <button className='More-Info'>{t('More_bk')}</button>
                                 </div>
                            </div>
                        </Col>
                        <Col lg={6}>
                        <div className="create_type_img-1 more-left">
                                <img src={h5} alt="" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>




            <section className="personalize_type_sec">
                <Container>
                    <Row>
                    <Col lg={6}>
                            <div className="create_type_img-1">
                                <img src={h6} alt="" />
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="create_type_txt">
                            <h6>{t('Link_Listing_bk')}</h6>
                                <h3>{t('expandDigitalConnection_bk')}</h3>
                                <p>{t('addLinkListingQR_bk')}</p>
                             <div className="more-end-btn-box">
                                  <button className='hello-cr'>{t('Create_bk')} </button>
                                    <button className='More-Info'>{t('More_bk')}</button>
                                 </div>
                            </div>
                        </Col>
                    
                    </Row>
                </Container>
            </section>


            <section className="personalize_type_sec">
                <Container>
                    <Row>
                        <Col lg={6}>
                            <div className="create_type_txt">
                            <h6>{t('Video_bk')}</h6>
                                <h3>{t('createVisualExperience_bk')}</h3>
                                <p>{t('showVideoWithQR_bk')}</p>
                             <div className="more-end-btn-box">
                                  <button className='hello-cr'>{t('Create_bk')} </button>
                                    <button className='More-Info'>{t('More_bk')}</button>
                                 </div>
                            </div>
                        </Col>
                        <Col lg={6}>
                        <div className="create_type_img-1 more-left">
                                <img src={h7} alt="" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>


            <section className="personalize_type_sec">
                <Container>
                    <Row>
                    <Col lg={6}>
                            <div className="create_type_img-1">
                                <img src={h8} alt="" />
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="create_type_txt">
                                <h6>{t('dynamicURLQRCode_bk')}</h6>
                                <h3>{t('boostOnlineParticipation_bk')}</h3>
                                <p>{t('useDynamicURLQRCode_bk')}</p>
                             <div className="more-end-btn-box">
                                  <button className='hello-cr'>{t('Create_bk')} </button>
                                    <button className='More-Info'>{t('More_bk')}</button>
                                 </div>
                            </div>
                        </Col>
                    
                    </Row>
                </Container>
            </section>

          <All_Plans/>
    <Footer/>

    </>
  )
}

export default Businessz4