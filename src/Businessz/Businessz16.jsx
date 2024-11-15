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
import l1 from "../img/illustration-Dq3Dm7ls.webp" 
import l2 from "../img/banner-01-a8qwJNu6.webp" 
import l3 from "../img/banner-02-C2nwvi4j.webp" 
import l4 from "../img/banner-03-v5Zwuo8K.webp" 
import l5 from "../img/banner-04-q3hYfA4t.webp" 
import l7 from "../img/banner-05-Aae-TYJD.webp" 
// import l8 from "../img/banner-06-Do_snnmM.webp" 
import mobilh from "../img/mobilh.png"
import All_Plans from './All_Plans'
import { useTranslation } from 'react-i18next';

const Businessz16= () => {
    const { t } = useTranslation();

    return (
        <> 
 
            <Header />

            <section className="type_first_sec kd16">
    <Container>
        <Row className='hello-row'>
            <Col lg={8}>
                <div className="typepg_breadscrum">
                    <a href="#">{t('HomepageNB')}</a>
                    <span><IoChevronForwardSharp /></span>
                    <a href="#">{t('BusinessNB')}</a>
                    <span><IoChevronForwardSharp /></span>
                    <a href="#">{t('MusiciansAndArtistsNB')}</a>
                </div>
                <div className="type_first_sec_txt">
                    <h2>{t('QRCodesForMusiciansAndArtistsNB')}</h2>
                    <p className='total-spaas'>{t('IncorporatingQRCodesDescriptionNB')}</p>
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
                    <h3>{t('MeetTheStormsNB')}</h3>
                    <p>{t('MeetTheStormsDescriptionNB')}</p>
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
                    <h6>{t('MP3QRCodeNB')}</h6>
                    <h3>{t('BeHeardInAnyCornerNB')}</h3>
                    <p>{t('MP3QRCodeDescriptionNB1')}</p>
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
                    <h6>{t('LinkListingQRCodeNB')}</h6>
                    <h3>{t('ConnectWithYourAudienceNB')}</h3>
                    <p>{t('LinkListingQRCodeDescriptionNB')}</p>
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
                    <h6>{t('EventQRCodeNB')}</h6>
                    <h3>{t('TurnYourPerformancesIntoUnforgettableExperiencesNB')}</h3>
                    <p>{t('EventQRCodeDescriptionNB')}</p>
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
                    <p>{t('DesignImpressiveQRCodesDescriptionNB')}</p>
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
                    <h6>{t('FeedbackQRCodeNB')}</h6>
                    <h3>{t('EnhanceYourMusicalPresenceNB')}</h3>
                    <p>{t('FeedbackQRCodeDescriptionNB')}</p>
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
                    <h3>{t('ShareExclusiveMomentsNB')}</h3>
                    <p>{t('VideoQRCodeDescriptionNB1')}</p>
                    <div className="more-end-btn-box">
                        <button className='hello-cr'>{t('CreateQRCodeNB')}</button>
                        <button className='More-Info'>{t('MoreInfoNB')}</button>
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
                                Coupon QR Code  </h6>
                                <h3>Live the city with exclusive offers</h3>
                                <p>Transform urban exploration into a rewarding experience with a Coupon QR code. Share exclusive offers for events, restaurants and attractions, adding a touch of excitement to the urban adventure of tourists and locals. With a simple scan you unlock benefits and encourage participation in city life.

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

export default Businessz16
