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
import l1 from "../img/illustration-PY-9tkq8.webp"
import l2 from "../img/banner-01-Dp-2lKeZ.webp"
import l3 from "../img/banner-02-CmnDS5S4.webp"
import l4 from "../img/banner-03-CHCuMTwx.webp"
import l5 from "../img/banner-04-B1Kt3R66.webp"
import l7 from "../img/banner-05-D-dMckzg.webp"
// import l8 from "../img/banner-06-m5m-haiC (1).webp" 
import mobilh from "../img/mobilh.png"

import All_Plans from './All_Plans'
import { useTranslation } from 'react-i18next';
const Businessz12 = () => {
    const { t } = useTranslation();

   
    return (
        <>
            <Header />
    
            <section className="type_first_sec kd12">
                <Container>
                    <Row className='hello-row'>
                        <Col lg={8}>
                            <div className="typepg_breadscrum">
                                <a href="#">{t('Business_bk0')}</a>
                                <span><IoChevronForwardSharp /></span>
                                <a href="#">{t('Business_bk')}</a>
                                <span><IoChevronForwardSharp /></span>
                                <a href="#">{t('Medical_Care_and_Doctors')}</a>

                            </div>
                            <div className="type_first_sec_txt">
                                <h2>QR Codes for the Health Field</h2>
                                <p className='total-spaas'>{t('Introduction_bk')}</p>
                                <a href="#">{t('Business_bk1')}</a>
                            </div>
                        </Col>
                        <Col lg={3}>
                            <div className="mobilh-img-box">
                                <img src={mobilh} alt="Mobile healthcare illustration" />
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
                                <h3>{t('Discover_Health_Clinic_bk')}</h3>
                                <p>{t('Health_Clinic_Description_bk')}</p>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="create_type_img-1 more-left">
                                <img src={l1} alt="Health clinic illustration" />
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
                                <img src={l2} alt="QR code example" />
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="create_type_txt">
                                <h6>{t('Vcard_plus_QR_code_bk')}</h6>
                                <h3>{t('Improve_Communication_bk')}</h3>
                                <p>{t('VCard_Plus_Description_bk1')}</p>
                                <div className="more-end-btn-box">
                                    <button className='hello-cr'>{t('Create_bk')}</button>
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
                                <h6>{t('Business_QR_bk')}</h6>
                                <h3>{t('Centralize_Information_bk')}</h3>
                                <p>{t('Business_QR_Description_bk1')}</p>
                                <div className="more-end-btn-box">
                                    <button className='hello-cr'>{t('Create_bk')}</button>
                                    <button className='More-Info'>{t('More_bk')}</button>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="create_type_img-1 more-left">
                                <img src={l3} alt="Centralized information illustration" />
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
                                <img src={l4} alt="Feedback illustration" />
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="create_type_txt">
                                <h6>{t('Feedbacknn')}</h6>
                                <h3>{t('Culture_of_Improvement_bk')}</h3>
                                <p>{t('Feedback_Description_bk')}</p>
                                <div className="more-end-btn-box">
                                    <button className='hello-cr'>{t('Create_bk')}</button>
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
                                <h3>{t('Create_and_Manage_bk')}</h3>
                                <p>{t('Design_Impressive_bk')}</p>
                                <div className="more-end-btn-box">
                                    <button className='hello-cr'>{t('Create_bk')}</button>
                                    <button className='More-Info'>{t('More_bk')}</button>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="create_type_img-1 more-left">
                                <img src={h5} alt="Manage QR codes illustration" />
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
                                <img src={l5} alt="PDF QR code illustration" />
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="create_type_txt">
                                <h6>{t('PDF_Code_bk')}</h6>
                                <h3>{t('Access_Educational_Resources_bk')}</h3>
                                <p>{t('PDF_Description_bk')}</p>
                                <div className="more-end-btn-box">
                                    <button className='hello-cr'>{t('Create_bk')}</button>
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
                                <h3>{t('Personalized_Information_bk')}</h3>
                                <p>{t('Video_Description_bk')}</p>
                                <div className="more-end-btn-box">
                                    <button className='hello-cr'>{t('Create_bk')}</button>
                                    <button className='More-Info'>{t('More_bk')}</button>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="create_type_img-1 more-left">
                                <img src={l7} alt="Video QR code illustration" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
    
            <All_Plans />
            <Footer />
        </>
    );

    
}

export default Businessz12
