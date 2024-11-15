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
import l1 from "../img/illustration-Cp24_RCb.webp"
import l2 from "../img/banner-01-CY--8iux.webp"
import l3 from "../img/banner-02-DfA_sfP0.webp"
import l4 from "../img/banner-03-BWhCANRi.webp"
import l5 from "../img/banner-04-C3MIEToR.webp"


import l7 from "../img/banner-05-DV7yFpbO.webp"
// import l8 from "../img/banner-06-m5m-haiC (1).webp" 
import mobilh from "../img/mobilh.png"
import All_Plans from './All_Plans'
import { useTranslation } from 'react-i18next';
const Businessz11 = () => {
    const { t } = useTranslation();
    return (
        <>
            <Header />

            <section className="type_first_sec kd11">
                <Container>
                    <Row className='hello-row'>
                        <Col lg={8}>
                            <div className="typepg_breadscrum">
                                <a href="#">{t('Business_bk0')}</a>
                                <span><IoChevronForwardSharp /></span>
                                <a href="#">{t('Business_bk')}</a>
                                <span><IoChevronForwardSharp /></span>
                                <a href="#">{t('Real_estate_agencies_bk')}</a>
                            </div>
                            <div className="type_first_sec_txt">
                                <h2>{t('QR_Codes_for_Real_Estate_Agencies_bk')}</h2>
                                <p className='total-spaas'>{t('QR_implementation_description_bk')}</p>
                                <a href="#">{t('Business_bk1')}</a>
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
                                <h3>{t('Meet_Real_Build_bk')}</h3>
                                <p>{t('Real_Build_description_bk')}</p>
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
                                <h6>{t('image_gallery_qr_code_heading_bk')}</h6>
                                <h3>{t('Enhance_your_properties_bk')}</h3>
                                <p>{t('Image_Gallery_description_bk')}</p>
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
                                <h3>{t('Optimize_visibility_bk')}</h3>
                                <p>{t('Business_QR_description_bk')}</p>
                                <div className="more-end-btn-box">
                                    <button className='hello-cr'>{t('Create_bk')}</button>
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

            <section className="create_type_sec">
                <Container>
                    <Row>
                        <Col lg={6}>
                            <div className="create_type_img-1">
                                <img src={l4} alt="" />
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="create_type_txt">
                                <h6>{t('PDF_Code_bk')}</h6>
                                <h3>{t('Offer_personalized_resources_bk')}</h3>
                                <p>{t('PDF_QR_description_bk')}</p>
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
                                <h3>{t('Create_manage_bk')}</h3>
                                <p>{t('Design_impressive_bk')}</p>
                                <div className="more-end-btn-box">
                                    <button className='hello-cr'>{t('Create_bk')}</button>
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
                                <h6>{t('Video_bk')}</h6>

                                <h3>{t('Captivate_audience_bk')}</h3>
                                <p>{t('Video_QR_description_bk')}</p>
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
                                <h6>{t('Vcard_plus_QR_code_bk')}</h6>
                                <h3>{t('Expand_your_network_bk')}</h3>
                                <p>{t('Vcard_plus_description_bk')}</p>
                                <div className="more-end-btn-box">
                                    <button className='hello-cr'>{t('Create_bk')}</button>
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

export default Businessz11
