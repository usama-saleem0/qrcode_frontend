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
import l1 from "../img/illustration-F8qt-so4.webp" 
import l2 from "../img/banner-01-Bt1Wa2e7.webp" 
import l3 from "../img/banner-02-DxP5J7IP.webp" 
import l4 from "../img/banner-03-wHQ_UeM_.webp" 
import l5 from "../img/banner-04-C5TjlMmk.webp" 
import l7 from "../img/banner-05-Bz-Clkg_.webp" 
import l8 from "../img/banner-06-Do_snnmM.webp" 
import mobilh from "../img/mobilh.png"
import { useTranslation } from 'react-i18next';
import All_Plans from './All_Plans'
const Businessz15= () => {
    const { t } = useTranslation();
    return (
        <> 
 
            <Header />

            <section className="type_first_sec kd15">
                <Container>
                    <Row className='hello-row'>
                        <Col lg={8}>
                            <div className="typepg_breadscrum">
                                <a href="#">{t('HomepageNB')}</a>
                                <span><IoChevronForwardSharp /></span>
                                <a href="#">{t('BusinessNB')}</a>
                                <span><IoChevronForwardSharp /></span>
                                <a href="#">{t('CitiesAndCulturesNB')}</a>
                            </div>
                            <div className="type_first_sec_txt">
                                <h2>{t('QRCodesForCitiesAndCulturesNB')}</h2>
                                <p className='total-spaas'>{t('IntegratingQRCodesDescriptionNB')}</p>
                                <a href="#">{t('GetStartedNowNB')}</a>
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
                                <h3>{t('ExploreTheCharmOfNorthCityNB')}</h3>
                                <p>{t('NorthCityDescriptionNB')}</p>
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
                                <h6>{t('PDFQRCodeNB')}</h6>
                                <h3>{t('ExploreUrbanHeritageNB')}</h3>
                                <p>{t('UrbanHeritageDescriptionNB')}</p>
                                <div className="more-end-btn-box">
                                    <button className='hello-cr'>{t('CreateQRCodeNB')}</button>
                                    <button className='More-Info'>{t('MoreInfoNB')}</button>
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
                                <h6>{t('EventQRCodeNB')}</h6>
                                <h3>{t('CreateCommunityExperiencesNB')}</h3>
                                <p>{t('CommunityExperiencesDescriptionNB')}</p>
                                <div className="more-end-btn-box">
                                    <button className='hello-cr'>{t('CreateQRCodeNB')}</button>
                                    <button className='More-Info'>{t('MoreInfoNB')}</button>
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
                                <h6>{t('AppsQRCodeNB')}</h6>
                                <h3>{t('DiscoverTheCityFromYourMobileNB')}</h3>
                                <p>{t('AppsQRCodeDescriptionNB')}</p>
                                <div className="more-end-btn-box">
                                    <button className='hello-cr'>{t('CreateQRCodeNB')}</button>
                                    <button className='More-Info'>{t('MoreInfoNB')}</button>
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
                                <h6>{t('QRfyNB')}</h6>
                                <h3>{t('CreateManageMonitorYourQRCodesNB')}</h3>
                                <p>{t('DesignImpressiveQRCodesNB')}</p>
                                <div className="more-end-btn-box">
                                    <button className='hello-cr'>{t('CreateQRCodeNB')}</button>
                                    <button className='More-Info'>{t('MoreInfoNB')}</button>
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
                                <h6>{t('MP3QRCodeNB')}</h6>
                                <h3>{t('StoriesThatResonateInTheCityNB')}</h3>
                                <p>{t('MP3QRCodeDescriptionNB')}</p>
                                <div className="more-end-btn-box">
                                    <button className='hello-cr'>{t('CreateQRCodeNB')}</button>
                                    <button className='More-Info'>{t('MoreInfoNB')}</button>
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
                                <h6>{t('VideoQRCodeNB')}</h6>
                                <h3>{t('TailorMadeVirtualToursNB')}</h3>
                                <p>{t('VideoQRCodeDescriptionNB')}</p>
                                <div className="more-end-btn-box">
                                    <button className='hello-cr'>{t('CreateQRCodeNB')}</button>
                                    <button className='More-Info'>{t('MoreInfoNB')}</button>
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
                                <img src={l7} alt="" />
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="create_type_txt">
                                <h6>{t('CouponQRCodeNB')}</h6>
                                <h3>{t('ExcitingOffersForTheVisitorsNB')}</h3>
                                <p>{t('CouponQRCodeDescriptionNB')}</p>
                                <div className="more-end-btn-box">
                                    <button className='hello-cr'>{t('CreateQRCodeNB')}</button>
                                    <button className='More-Info'>{t('MoreInfoNB')}</button>
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

export default Businessz15
