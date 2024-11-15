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
import l1 from "../img/illustration-rhADAkfl.webp" 
import l2 from "../img/banner-01-CEM0glAh.webp" 
import l3 from "../img/banner-02-aSQOvruR.webp" 
import l4 from "../img/banner-03-Dv7xB9wB.webp" 
import l5 from "../img/banner-04-DNPSJnuo.webp" 
import l7 from "../img/banner-05-h_gMNbWT.webp" 
// import l8 from "../img/banner-06-BhCDC4E-.webp" 
import mobilh from "../img/mobilh.png"
import { useTranslation } from 'react-i18next';
import All_Plans from './All_Plans'
const Businessz29= () => {
    const { t } = useTranslation();
    return (
        <> 
 
            <Header />

            <section className="type_first_sec kd29">
    <Container>
        <Row className='hello-row'>
            <Col lg={8}>
                <div className="typepg_breadscrum">
                    <a href="#">{t('homepage_NB')}</a>
                    <span><IoChevronForwardSharp /></span>
                    <a href="#">{t('business_NB')}</a>
                    <span><IoChevronForwardSharp /></span>
                    <a href="#">{t('airlines_NB')}</a>
                </div>
                <div className="type_first_sec_txt">
                    <h2>
                        {t('qrCodesForAirlines_NB')}
                    </h2>
                    <p className='total-spaas'>
                        {t('implementingQRCodes_NB')}
                    </p>
                    <a href="#">{t('getStartedNow_NB')}</a>
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
                        {t('meetTravelInc_NB')}
                    </h3>
                    <p>
                        {t('travelIncDescription_NB')}
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
                        {t('appsQRCode_NB')}
                    </h6>
                    <h3>
                        {t('optimizeAirlineAppDownloads_NB')}
                    </h3>
                    <p>
                        {t('maximizeAppVisibility_NB')}
                    </p>
                    <div className="more-end-btn-box">
                        <button className='hello-cr'>{t('createQRCode_NB')}</button>
                        <button className='More-Info'>{t('moreInfo_NB')}</button>
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
                    <h6>{t('linkListingQRCode_NB')}</h6>
                    <h3>{t('strengthenEmotionalConnection_NB')}</h3>
                    <p>{t('brandRecognitionImportance_NB')}</p>
                    <div className="more-end-btn-box">
                        <button className='hello-cr'>{t('createQRCode_NB')}</button>
                        <button className='More-Info'>{t('moreInfo_NB')}</button>
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
                    <h6>{t('feedbackQRCode_NB')}</h6>
                    <h3>{t('optimizeCustomerSatisfaction_NB')}</h3>
                    <p>{t('maintainHighStandards_NB')}</p>
                    <div className="more-end-btn-box">
                        <button className='hello-cr'>{t('createQRCode_NB')}</button>
                        <button className='More-Info'>{t('moreInfo_NB')}</button>
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
                    <h6>{t('qrfy_NB')}</h6>
                    <h3>{t('createManageMonitorQRCodes_NB')}</h3>
                    <p>{t('designImpressiveQRCodes_NB')}</p>
                    <div className="more-end-btn-box">
                        <button className='hello-cr'>{t('createQRCode_NB')}</button>
                        <button className='More-Info'>{t('moreInfo_NB')}</button>
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
                    <h6>{t('pdfQRCode_NB')}</h6>
                    <h3>{t('stimulateDownloads_NB')}</h3>
                    <p>{t('increaseReadingE_Magazines_NB')}</p>
                    <div className="more-end-btn-box">
                        <button className='hello-cr'>{t('createQRCode_NB')}</button>
                        <button className='More-Info'>{t('moreInfo_NB')}</button>
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
                    <h6>{t('dynamicURLQRCode_NB')}</h6>
                    <h3>{t('providesEasyAccess_NB')}</h3>
                    <p>{t('improvePassengerExperience_NB')}</p>
                    <div className="more-end-btn-box">
                        <button className='hello-cr'>{t('createQRCode_NB')}</button>
                        <button className='More-Info'>{t('moreInfo_NB')}</button>
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
                                PDF QR Code</h6>
                                <h3>Offer added value in your drinks</h3>
                                <p>Differentiate yourself in the market by providing added value through the PDF QR Code. Offer your customers recipes, stories behind your products, expert advice and educational content. By providing valuable information, you not only drive sales, but also position your brand as a trusted source of knowledge, fostering long-term customer loyalty.

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

export default Businessz29
