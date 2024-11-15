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
import l1 from "../img/illustration--DIHhtuF.webp" 
import l2 from "../img/banner-01-DDJrDfgU.webp" 
import l3 from "../img/banner-02-Cmgq2XYr.webp" 
import l4 from "../img/banner-03-C-FnfaWE.webp" 
import l5 from "../img/banner-04-Dxw203b_.webp" 
import l7 from "../img/banner-05-BOJZtD-F.webp" 
// import l8 from "../img/banner-06-DC5qmk7Z.webp" 
import mobilh from "../img/mobilh.png"
import { useTranslation } from 'react-i18next';
import All_Plans from './All_Plans'

const Businessz26= () => {
    const { t } = useTranslation();

    return (
        <> 
 
            <Header />

            <section className="type_first_sec kd26">
    <Container>
        <Row className='hello-row'>
            <Col lg={8}>
                <div className="typepg_breadscrum">
                    <a href="#">{t('homepage_GDS')}</a>
                    <span><IoChevronForwardSharp /></span>
                    <a href="#">{t('business_GDS')}</a>
                    <span><IoChevronForwardSharp /></span>
                    <a href="#">{t('Stadiums_GDS')}</a>
                </div>
                <div className="type_first_sec_txt">
                    <h2>{t('qrCodesForStadiums_KD')}</h2>
                    <p className='total-spaas'>{t('implementingQRCodes_KD')}</p>
                    <a href="#">{t('getStartedNow_KD')}</a>
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
                    <h3>{t('getToKnowGoArena_KD')}</h3>
                    <p>{t('benefitsOfIntegration_KD')}</p>
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
                    <h6>{t('eventQRCode_KD')}</h6>
                    <h3>{t('boostPromotionOfLocalEvents_KD')}</h3>
                    <p>{t('promotionDetails_KD')}</p>
                    <div className="more-end-btn-box">
                        <button className='hello-cr'>{t('createQRCode_KD')}</button>
                        <button className='More-Info'>{t('moreInfo_KD')}</button>
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
                    <h6>{t('linkListingQRCode_KD')}</h6>
                    <h3>{t('expandSocialNetworks_KD')}</h3>
                    <p>{t('attendanceAndSocialMedia_KD')}</p>
                    <div className="more-end-btn-box">
                        <button className='hello-cr'>{t('createQRCode_KD')}</button>
                        <button className='More-Info'>{t('moreInfo_KD')}</button>
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
                    <h6>{t('vcardPlusQRCode_KD')}</h6>
                    <h3>{t('simplifyCommunicationWithStaff_KD')}</h3>
                    <p>{t('improveInteraction_KD')}</p>
                    <div className="more-end-btn-box">
                        <button className='hello-cr'>{t('createQRCode_KD')}</button>
                        <button className='More-Info'>{t('moreInfo_KD')}</button>
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
                    <h6>{t('qrFy_KD')}</h6>
                    <h3>{t('manageYourQRCodes_KD')}</h3>
                    <p>{t('designImpressiveQRCodes_KD')}</p>
                    <div className="more-end-btn-box">
                        <button className='hello-cr'>{t('createQRCode_KD')}</button>
                        <button className='More-Info'>{t('moreInfo_KD')}</button>
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
                    <h6>{t('feedbackQRCode_KD')}</h6>
                    <h3>{t('strengthenAudienceRelationship_KD')}</h3>
                    <p>{t('deeperConnectionWithVisitors_KD')}</p>
                    <div className="more-end-btn-box">
                        <button className='hello-cr'>{t('createQRCode_KD')}</button>
                        <button className='More-Info'>{t('moreInfo_KD')}</button>
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
                    <h6>{t('couponQRCode_KD')}</h6>
                    <h3>{t('boostSalesWithMerchandisingOffers_KD')}</h3>
                    <p>{t('discountsOnMerchandise_KD')}</p>
                    <div className="more-end-btn-box">
                        <button className='hello-cr'>{t('createQRCode_KD')}</button>
                        <button className='More-Info'>{t('moreInfo_KD')}</button>
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

export default Businessz26
