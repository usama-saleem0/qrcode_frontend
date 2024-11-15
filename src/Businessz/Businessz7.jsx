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
import l1 from "../img/illustration-BldtjRN5.webp"
import l2 from "../img/banner-01-BebW1ZMu.webp"
import l3 from "../img/banner-02-D_-LQQB-.webp"
import l4 from "../img/banner-03-BWNztdUH.webp"
import l5 from "../img/banner-04-CXJ67QM-.webp"
import l7 from "../img/banner-05-CO-EsW1z.webp"
import l8 from "../img/banner-06-0_pOOiVT.webp"
import mobilh from "../img/mobilh.png"
import All_Plans from './All_Plans'
import { useTranslation } from 'react-i18next';

const Businessz7 = () => {
    const { t } = useTranslation();

    return (
        <>

            <Header />

            <section className="type_first_sec kd7">
                <Container>
                    <Row className='hello-row'>
                        <Col lg={8}>
                            <div className="typepg_breadscrum">
                                <a href="#">{t('Business_bk0')}</a>
                                <span><IoChevronForwardSharp /></span>
                                <a href="#">{t('Business_bk')}</a>
                                <span><IoChevronForwardSharp /></span>
                                <a href="#">{t('business_services_link_bk')}</a>
                            </div>
                            <div className="type_first_sec_txt">
                                <h2>{t('qr_codes_for_editorials_heading_bk')}</h2>
                                <p className='total-spaas'>{t('qr_codes_for_editorials_description_bk')}</p>
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

                                <h3>{t('discover_connect_heading_bk')}</h3>
                                <p>{t('discover_connect_description_bk')}</p>

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
                                <h6>{t('Vcard_plus_QR_code_bk')}</h6>

                                <h3>{t('instant_connections_heading_bk')}</h3>
                                <p>{t('instant_connections_description_bk')}</p>
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
                                <h6>{t('Business_QR_Codenn')}</h6>

                                <h3>{t('instant_business_information_heading_bk')}</h3>
                                <p>{t('instant_business_information_description_bk')}</p>
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
                                <h6>{t('image_gallery_qr_code_heading_bk')}</h6>
                                <h3>{t('show_your_portfolio_heading_bk')}</h3>
                                <p>{t('show_your_portfolio_description_bk')}</p>
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
                                <img src={l5} alt="" />
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="create_type_txt">
                                <h6>{t('mp3_qrcode_heading_bk')}</h6>
                                <h3>{t('innovate_with_audiobranding_heading_bk')}</h3>
                                <p>{t('innovate_with_audiobranding_description_bk')}</p>
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
                                <h3>{t('visual_success_stories_heading_bk')}</h3>
                                <p>{t('visual_success_stories_description_bk')}</p>
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


            <section className="personalize_type_sec">
                <Container>
                    <Row>
                        <Col lg={6}>
                            <div className="create_type_img-1">
                                <img src={l8} alt="" />
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="create_type_txt">
                                <h6>{t('social_networks_qr_code_heading_bk')}</h6>
                                <h3>{t('increase_your_presence_on_networks_heading_bk')}</h3>
                                <p>{t('increase_your_presence_on_networks_description_bk')}</p>
                                <div className="more-end-btn-box">
                                    <button className='hello-cr'>{t('Create_bk')} </button>
                                    <button className='More-Info'>{t('More_bk')}</button>
                                </div>
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

export default Businessz7
