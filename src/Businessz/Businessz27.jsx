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
import l1 from "../img/illustration-CZIq5inZ.webp" 
import l2 from "../img/banner-01-D18c_LvP.webp" 
import l3 from "../img/banner-02-zHRWARsd.webp" 
import l4 from "../img/banner-03-Bdxen3IP.webp" 
import l5 from "../img/banner-04-BXErmyt3.webp" 
import l7 from "../img/banner-05-9wJuRG20.webp" 
// import l8 from "../img/banner-06-DC5qmk7Z.webp" 
import mobilh from "../img/mobilh.png"
import All_Plans from './All_Plans'
import { useTranslation } from 'react-i18next';
const Businessz27= () => {
    const { t } = useTranslation();
    return (
        <> 
 
            <Header />

            <section className="type_first_sec kd27">
    <Container>
        <Row className='hello-row'>
            <Col lg={8}>
                <div className="typepg_breadscrum">
                    <a href="#">{t('homepage_SH')}</a>
                    <span><IoChevronForwardSharp /></span>
                    <a href="#">{t('business_SH')}</a>
                    <span><IoChevronForwardSharp /></span>
                    <a href="#">{t('mediaAndEntertainment_SH')}</a>
                </div>
                <div className="type_first_sec_txt">
                    <h2>
                        {t('qrCodesForEntertainment_SH')}
                    </h2>
                    <p className='total-spaas'>
                        {t('integratingQRCodes_SH')}
                    </p>
                    <a href="#">{t('getStartedNow_SH')}</a>
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
                    <h3>
                        {t('meetPyramidEntertainment_SH')}
                    </h3>
                    <p>
                        {t('pyramidEntertainmentDescription_SH')}
                    </p>
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
                    <h6>
                        {t('videoQRCode_SH')}
                    </h6>
                    <h3>
                        {t('boostProfessionalPresentation_SH')}
                    </h3>
                    <p>
                        {t('boostPresentationDescription_SH')}
                    </p>
                    <div className="more-end-btn-box">
                        <button className='hello-cr'>{t('createQRCode_SH')}</button>
                        <button className='More-Info'>{t('moreInfo_SH')}</button>
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
                    <h6>{t('linkListingQRCode_SH')}</h6>
                    <h3>{t('immersiveConnectionWithFans_SH')}</h3>
                    <p>{t('increaseConnectionWithFans_SH')}</p>
                    <div className="more-end-btn-box">
                        <button className='hello-cr'>{t('createQRCode_SH')}</button>
                        <button className='More-Info'>{t('moreInfo_SH')}</button>
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
                    <h6>{t('dynamicURLQRCode_SH')}</h6>
                    <h3>{t('innovationInInteractiveAdvertising_SH')}</h3>
                    <p>{t('innovateAdsWithQRCode_SH')}</p>
                    <div className="more-end-btn-box">
                        <button className='hello-cr'>{t('createQRCode_SH')}</button>
                        <button className='More-Info'>{t('moreInfo_SH')}</button>
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
                    <h6>{t('qrfy_SH')}</h6>
                    <h3>{t('createManageMonitorQRCodes_SH')}</h3>
                    <p>{t('designImpressiveQRCodes_SH')}</p>
                    <div className="more-end-btn-box">
                        <button className='hello-cr'>{t('createQRCode_SH')}</button>
                        <button className='More-Info'>{t('moreInfo_SH')}</button>
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
                    <h6>{t('eventQRCode_SH')}</h6>
                    <h3>{t('memorableEventExperiences_SH')}</h3>
                    <p>{t('eventQRCodeDescription_SH')}</p>
                    <div className="more-end-btn-box">
                        <button className='hello-cr'>{t('createQRCode_SH')}</button>
                        <button className='More-Info'>{t('moreInfo_SH')}</button>
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
                    <h6>{t('mp3QRCode_SH')}</h6>
                    <h3>{t('melodiesThatElevateYourStrategy_SH')}</h3>
                    <p>{t('addMusicalTouch_SH')}</p>
                    <div className="more-end-btn-box">
                        <button className='hello-cr'>{t('createQRCode_SH')}</button>
                        <button className='More-Info'>{t('moreInfo_SH')}</button>
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

            {/* <section className="personalize_type_sec">
                <Container>
                    <Row>
                        <Col lg={6}>
                            <div className="create_type_img-1">
                                <img src={l8} alt="" />
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="create_type_txt">
                                <h6>
                                Coupon QR Code</h6>
                                <h3>Optimize your Sales with Personalized Offers</h3>
                                <p>Integrate the Coupon QR code on the packaging of electronic devices to provide customers with instant discounts. Track promotion performance in real time, gaining valuable data on purchasing preferences and behaviors. Offer sharing amplifies reach, attracting new customers and contributing to continued sales momentum.

                                </p>
                                <div className="more-end-btn-box">
                                    <button className='hello-cr'> Create QR code</button>
                                    <button className='More-Info'>More Info</button>
                                </div>
                            </div>
                        </Col>

                    </Row>
                </Container>
            </section> */}

  <All_Plans/>
            <Footer />

        </>
    )
}

export default Businessz27
