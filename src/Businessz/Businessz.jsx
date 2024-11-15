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




import h1 from "../img/h1.webp"
import h2 from "../img/h2.webp"
import h3 from "../img/h3.webp"
import h4 from "../img/h4.webp"
import h5 from "../img/h5.webp"
import h6 from "../img/h6.webp"
import h7 from "../img/h7.webp"
import h8 from "../img/h8.webp"
import mobilh from "../img/mobilh.png"
import { useTranslation } from 'react-i18next';
import All_Plans from './All_Plans'
const Businessz = () => {
    const { t } = useTranslation();
    return (
        <>

            <Header />

            <section className="type_first_sec kd1">
                <Container>
                    <Row className='hello-row'>
                        <Col lg={8}>
                            <div className="typepg_breadscrum">
                                <a href="#">{t('Homepagenn')}</a>
                                <span><IoChevronForwardSharp /></span>
                                <a href="#">{t('Businessnn')}</a>
                                <span><IoChevronForwardSharp /></span>
                                <a href="#">{t('Educationalinstitutionsnn')}</a>
                            </div>
                            <div className="type_first_sec_txt">

                                <h2>{t('QRCodesnn')}</h2>
                                <p className='total-spaas'>{t('digitalnn')}</p>
                                <a href="#">{t('Getstartednownn')} </a>
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
                            <div className="create_type_txt-1">

                                <h3>{t('Discovernn')}</h3>
                                <p>{t('Considernn')}</p>

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
                            <div className="create_type_txt-1">
                                <h6>{t('Menu_qr_codenn')}</h6>
                                <h3>{t('Your_menunn')}</h3>
                                <p>{t('If_you_offernn')}</p>
                                <div className="more-end-btn-box">
                                    <button className='hello-cr'>{t('create_button')}</button>
                                    <button className='More-Info'>{t('MoreInfonn')}</button>
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
                            <div className="create_type_txt-1">
                                <h6>{t('Link_Listing_QR_Codenn')}</h6>
                                <h3>{t('Strengthennn')}</h3>
                                <p>{t('gastronomicnn')}</p>
                                <div className="more-end-btn-box">
                                    <button className='hello-cr'>{t('create_button')}</button>
                                    <button className='More-Info'>{t('MoreInfonn')}</button>
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
                            <div className="create_type_txt-1">
                                <h6>{t('Feedbacknn')}</h6>
                                <h3>{t('listennn')}</h3>
                                <p>{t('loyaltynn')}</p>
                                <div className="more-end-btn-box">
                                    <button className='hello-cr'>{t('create_button')}</button>
                                    <button className='More-Info'>{t('MoreInfonn')}</button>
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
                            <div className="create_type_txt-1">
                                <h6>QRfy</h6>
                                <h3>{t('createnangenn')}    </h3>
                                <p>{t('Design_impressivenn')}</p>
                                <div className="more-end-btn-box">
                                    <button className='hello-cr'>{t('create_button')}</button>
                                    <button className='More-Info'>{t('MoreInfonn')}</button>
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
                            <div className="create_type_txt-1">
                                <h6>{t('Business_QR_Codenn')}</h6>
                                <h3>{t('Create,managnn')}</h3>
                                <p>{t('useyournn')}</p>
                                <div className="more-end-btn-box">
                                    <button className='hello-cr'>{t('create_button')}</button>
                                    <button className='More-Info'>{t('MoreInfonn')}</button>
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
                            <div className="create_type_txt-1">
                                <h6>{t('imagesqrnn')}</h6>
                                <h3>{t('viewyour')}</h3>
                                <p>{t('Sometimesnn')}</p>
                                <div className="more-end-btn-box">
                                    <button className='hello-cr'>{t('create_button')}</button>
                                    <button className='More-Info'>{t('MoreInfonn')}</button>
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
                            <div className="create_type_txt-1">
                                <h6>{t('Couponqrnn')}</h6>
                                <h3>{t('Build_loynn')}</h3>
                                <p>{t('Attract_newnn')}</p>
                                <div className="more-end-btn-box">
                                    <button className='hello-cr'>{t('create_button')}</button>
                                    <button className='More-Info'>{t('MoreInfonn')}</button>
                                </div>
                            </div>
                        </Col>

                    </Row>
                </Container>
            </section>

            <All_Plans/>
            <Footer />

        </>
    )
}

export default Businessz