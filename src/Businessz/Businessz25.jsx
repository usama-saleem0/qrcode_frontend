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
import l1 from "../img/illustration-D9EhBRAP.webp" 
import l2 from "../img/banner-01-BZsq93td.webp" 
import l3 from "../img/banner-02-BK2Iu_9F.webp" 
import l4 from "../img/banner-03-Ba3Q_mwv.webp" 
import l5 from "../img/banner-04-COYYLeIb.webp" 
import l7 from "../img/banner-05-DsUsaEI5.webp" 
// import l8 from "../img/banner-06-DC5qmk7Z.webp" 
import mobilh from "../img/mobilh.png"
import { useTranslation } from 'react-i18next';
import All_Plans from './All_Plans'

const Businessz25= () => {
    const { t } = useTranslation();

    return (
        <> 
 
            <Header />

            <section className="type_first_sec kd25">
    <Container>
        <Row className='hello-row'>
            <Col lg={8}>
                <div className="typepg_breadscrum">
                    <a href="#">{t('homepage_GDS')}</a>
                    <span><IoChevronForwardSharp /></span>
                    <a href="#">{t('business_GDS')}</a>
                    <span><IoChevronForwardSharp /></span>
                    <a href="#">{t('Public_transport')}</a>
                </div>
                <div className="type_first_sec_txt">
                    <h2>{t('QR_Codes_for_Public_Transport_LK')}</h2>
                    <p className='total-spaas'>
                        {t('Integrating_QR_codes_into_public_transportation_LK')}
                    </p>
                    <a href="#">{t('Get_started_now_LK')}</a>
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
                    <h3>{t('Get_to_know_Lights_tour_LK')}</h3>
                    <p>
                        {t('Lights_tour_description_LK')}
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
                    <h6>{t('Apps_QR_Code_LK')}</h6>
                    <h3>{t('Make_it_easy_to_download_your_application_LK')}</h3>
                    <p>
                        {t('Simplifies_the_installation_of_the_mobile_application_LK')}
                    </p>
                    <div className="more-end-btn-box">
                        <button className='hello-cr'>{t('Create_QR_code_LK')}</button>
                        <button className='More-Info'>{t('More_Info_LK')}</button>
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
                    <h6>{t('Link_Listing_QR_Code_LK')}</h6>
                    <h3>{t('Digitally_interact_with_passengers_LK')}</h3>
                    <p>{t('Close_the_online_connection_with_public_transport_passengers_LK')}</p>
                    <div className="more-end-btn-box">
                        <button className='hello-cr'>{t('Create_QR_code_LK')}</button>
                        <button className='More-Info'>{t('More_Info_LK')}</button>
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
                    <h6>{t('Coupon_QR_Code_LK')}</h6>
                    <h3>{t('Use_discounts_to_retain_customers_LK')}</h3>
                    <p>{t('Coupon_QR_codes_are_an_effective_strategy_LK')}</p>
                    <div className="more-end-btn-box">
                        <button className='hello-cr'>{t('Create_QR_code_LK')}</button>
                        <button className='More-Info'>{t('More_Info_LK')}</button>
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
                    <h6>{t('QRfy_LK')}</h6>
                    <h3>{t('Create_manage_and_monitor_your_QR_codes_LK')}</h3>
                    <p>{t('Design_impressive_QR_codes_LK')}</p>
                    <div className="more-end-btn-box">
                        <button className='hello-cr'>{t('Create_QR_code_LK')}</button>
                        <button className='More-Info'>{t('More_Info_LK')}</button>
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
                    <h6>{t('Video_QR_Code_LK')}</h6>
                    <h3>{t('Highlight_local_destinations_and_increase_sales_LK')}</h3>
                    <p>{t('Encourage_local_exploration_and_increase_ticket_bookings_LK')}</p>
                    <div className="more-end-btn-box">
                        <button className='hello-cr'>{t('Create_QR_code_LK')}</button>
                        <button className='More-Info'>{t('More_Info_LK')}</button>
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
                    <h6>{t('Feedback_QR_Code_LK')}</h6>
                    <h3>{t('Boost_your_service_by_listening_to_users_LK')}</h3>
                    <p>{t('Incorporating_Feedback_QR_codes_LK')}</p>
                    <div className="more-end-btn-box">
                        <button className='hello-cr'>{t('Create_QR_code_LK')}</button>
                        <button className='More-Info'>{t('More_Info_LK')}</button>
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

export default Businessz25
