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
import l1 from "../img/illustration-8Y3YWyQn.webp" 
import l2 from "../img/banner-01-COoZsqGw.webp" 
import l3 from "../img/banner-02-DERf-A0e.webp" 
import l4 from "../img/banner-03-Cp9d-gde.webp" 
import l5 from "../img/banner-04-ARPkCkSx.webp" 
import l7 from "../img/banner-05-NcE8Cgig.webp" 
// import l8 from "../img/banner-06-m5m-haiC (1).webp" 
import mobilh from "../img/mobilh.png"
import All_Plans from './All_Plans'
import { useTranslation } from 'react-i18next';
const Businessz14= () => {
    const { t } = useTranslation();

     return (
        <>
            <Header />

            {/* Section: QR Codes for Personal Use */}
            <section className="type_first_sec kd14">
                <Container>
                    <Row className='hello-row'>
                        <Col lg={8}>
                            <div className="typepg_breadscrum">
                                <a href="#">{t('Business_bk0')}</a>
                                <span><IoChevronForwardSharp /></span>
                                <a href="#">{t('Business_bk')}</a>
                                <span><IoChevronForwardSharp /></span>
                                <a href="#">{t('Personal_Use_bk')}</a>
                            </div>
                            <div className="type_first_sec_txt">
                                <h2>{t('QR_Codes_for_Personal_Use_bk')}</h2>
                                <p className='total-spaas'>{t('Personal_Use_Description_bk')}</p>
                                <a href="#">{t('Business_bk1')}</a>
                            </div>
                        </Col>
                        <Col lg={3}>
                            <div className="mobilh-img-box">
                                <img src={mobilh} alt={t('Mobile_Healthcare_Illustration_bk')} />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Section: It could be you */}
            <section className="create_type_sec">
                <Container>
                    <Row>
                        <Col lg={6}>
                            <div className="create_type_txt">
                                <h3>{t('It_could_be_you_bk')}</h3>
                                <p>{t('It_could_be_you_description_bk')}</p>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="create_type_img-1 more-left">
                                <img src={l1} alt={t('It_could_be_you_Image_Alt_bk')} />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Section: Boost your creative portfolio */}
            <section className="create_type_sec">
                <Container>
                    <Row>
                        <Col lg={6}>
                            <div className="create_type_img-1">
                                <img src={l2} alt={t('Boost_Creative_Portfolio_Image_Alt_bk')} />
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="create_type_txt">
                                <h6>{t('PDF_Code_bk')}</h6>
                                <h3>{t('Boost_your_creative_portfolio_bk')}</h3>
                                <p>{t('Boost_creative_portfolio_description_bk')}</p>
                                <div className="more-end-btn-box">
                                    <button className='hello-cr'>{t('Create_bk')}</button>
                                    <button className='More-Info'>{t('More_bk')}</button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Section: Organize an unforgettable event */}
            <section className="personalize_type_sec">
                <Container>
                    <Row>
                        <Col lg={6}>
                            <div className="create_type_txt">
                                <h6>{t('Event_QR_Code_bk')}</h6>
                                <h3>{t('Organize_an_unforgettable_event_bk')}</h3>
                                <p>{t('Organize_event_description_bk')}</p>
                                <div className="more-end-btn-box">
                                    <button className='hello-cr'>{t('Create_bk')}</button>
                                    <button className='More-Info'>{t('More_bk')}</button>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="create_type_img-1 more-left">
                                <img src={l3} alt={t('Organize_Event_Image_Alt_bk')} />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Section: Transform your art into experiences */}
            <section className="create_type_sec">
                <Container>
                    <Row>
                        <Col lg={6}>
                            <div className="create_type_img-1">
                                <img src={l4} alt={t('Transform_Art_Image_Alt_bk')} />
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="create_type_txt">
                                <h6>{t('image_gallery_qr_code_heading_bk')}</h6>
                                <h3>{t('Transform_your_art_into_experiences_bk')}</h3>
                                <p>{t('Transform_art_description_bk')}</p>
                                <div className="more-end-btn-box">
                                    <button className='hello-cr'>{t('Create_bk')}</button>
                                    <button className='More-Info'>{t('More_bk')}</button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Section: Create, manage and monitor your QR codes */}
            <section className="personalize_type_sec">
                <Container>
                    <Row>
                        <Col lg={6}>
                            <div className="create_type_txt">
                                <h6>{t('QRfy_bk')}</h6>
                                <h3>{t('Create_manage_bk')}</h3>
                                <p>{t('Design_Impressive_bk')}</p>
                                <div className="more-end-btn-box">
                                    <button className='hello-cr'>{t('Create_bk')}</button>
                                    <button className='More-Info'>{t('More_bk')}</button>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="create_type_img-1 more-left">
                                <img src={h5} alt={t('Create_Manage_Image_Alt_bk')} />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Section: Prepare your emergency kit */}
            <section className="personalize_type_sec">
                <Container>
                    <Row>
                        <Col lg={6}>
                            <div className="create_type_txt">
                                <h6>{t('Text_QR_Code_bk')}</h6>
                                <h3>{t('Prepare_your_emergency_kit_bk')}</h3>
                                <p>{t('Emergency_kit_description_bk')}</p>
                                <div className="more-end-btn-box">
                                    <button className='hello-cr'>{t('Create_bk')}</button>
                                    <button className='More-Info'>{t('More_bk')}</button>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="create_type_img-1 more-left">
                                <img src={l5} alt={t('Prepare_Emergency_Kit_Image_Alt_bk')} />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Section: Update your professional ID */}
            <section className="personalize_type_sec">
                <Container>
                    <Row>
                        <Col lg={6}>
                            <div className="create_type_txt">
                                <h6>{t('Vcard_plus_QR_code_bk')}</h6>
                                <h3>{t('Update_your_professional_ID_bk')}</h3>
                                <p>{t('Update_professional_ID_description_bk')}</p>
                                <div className="more-end-btn-box">
                                    <button className='hello-cr'>{t('Create_bk')}</button>
                                    <button className='More-Info'>{t('More_bk')}</button>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="create_type_img-1 more-left">
                                <img src={l7} alt={t('Update_Professional_ID_Image_Alt_bk')} />
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

export default Businessz14
