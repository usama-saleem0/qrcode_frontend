import React from 'react'

import Header from "../header/header"

import Footer from '../Footer/Footer'
import pgmobinner from "../img/mob_inner_img.png"
import unlimitedsvg from "../img/unlimited_svg.svg"
import variatyqrtypes from "../img/variable_svg.svg"
import varietydownload from "../img/variety_download_svg.svg"
import unlimitedmember from "../img/unlimited_member.svg"
import completeanlytics from "../img/complete_analytics.svg"
import editingqr from "../img/editing_qr.svg"
import premiumsupport from "../img/premium_support.svg"
import cancelwhenever from "../img/cancel_whenever.svg"
import customdomain from "../img/custom_domain.svg"
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
import l1 from "../img/illustration-Cstf3Eqv.webp"
import l2 from "../img/banner-01-CyNLMUv9.webp"
import l3 from "../img/banner-02-CKNZ2zI-.webp"
import l4 from "../img/banner-03-C4u9GxHz.webp"
import l5 from "../img/banner-04-D7NkUA1E.webp"
import l7 from "../img/banner-05-DggfwSZ0.webp"
// import l8 from "../img/banner-06-0_pOOiVT.webp" 
import mobilh from "../img/mobilh.png"
import { useTranslation } from 'react-i18next';
import All_Plans from './All_Plans'

const Businessz8 = () => {
    const { t } = useTranslation();

    return (
        <>

            <Header />

            <section className="type_first_sec kd8">
                <Container>
                    <Row className='hello-row'>
                        <Col lg={8}>
                            <div className="typepg_breadscrum">
                                <a href="#">{t('Business_bk0')}</a>
                                <span><IoChevronForwardSharp /></span>
                                <a href="#">{t('Business_bk')}</a>
                                <span><IoChevronForwardSharp /></span>
                                <a href="#">{t('hotels_and_resorts_link_bk')}</a>
                            </div>
                            <div className="type_first_sec_txt">

                            <h2>{t('qr_codes_for_hotels_and_resorts_heading_bk')}</h2>
                            <p className='total-spaas'>{t('qr_codes_for_hotels_and_resorts_description_bk')}</p>
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
                            <h3>{t('discover_sky_resort_heading_bk')}</h3>
                            <p>{t('discover_sky_resort_description_bk')}</p>
                            </div>
                        </Col>

                        <Col lg={6}>
                            <div className="create_type_img-1 more-left">
                                <img src={l1} alt="" />
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
                                <img src={l2} alt="" />
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="create_type_txt">
                            <h6>{t('PDF_Code_bk')}</h6>

                            <h3>{t('optimize_your_gastronomic_offer_heading_bk')}</h3>
                            <p>{t('optimize_your_gastronomic_offer_description_bk')}</p>
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
                            <h6>{t('Event_QR_Code_bk')}</h6>
                            <h3>{t('facilitate_your_participation_in_events_heading_bk')}</h3>
                            <p>{t('facilitate_your_participation_in_events_description_bk')}</p>
                                <div className="more-end-btn-box">
                                      <button className='hello-cr'>{t('Create_bk')} </button>
                                    <button className='More-Info'>{t('More_bk')}</button>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="create_type_img-1 more-left">
                                <img src={l3} alt="" />
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
                                <img src={l5} alt="" />
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="create_type_txt">
                            <h6>{t('Vcard_plus_QR_code_bk')}</h6>
                            <h3>{t('simplify_your_access_to_key_information_heading_bk')}</h3>
                            <p>{t('simplify_your_access_to_key_information_description_bk')}</p>
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
                            <h6>{t('image_gallery_qr_code_heading_bk')}</h6>
                            <h3>{t('highlight_unique_features_heading_bk')}</h3>
                            <p>{t('highlight_unique_features_description_bk')}</p>
                                <div className="more-end-btn-box">
                                      <button className='hello-cr'>{t('Create_bk')} </button>
                                    <button className='More-Info'>{t('More_bk')}</button>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="create_type_img-1 more-left">
                                <img src={l7} alt="" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>


        
            <All_Plans />

            <Footer />

        </>
    )
}

export default Businessz8
