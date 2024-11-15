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
import l1 from "../img/illustration-Cnp2WdIR.webp" 
import l2 from "../img/banner-01-X1Q-7iiq.webp" 
import l3 from "../img/banner-02-t513ZnY2.webp" 
import l4 from "../img/banner-03-CbGrZTzJ.webp" 
import l5 from "../img/banner-04-DjPePRfj.webp" 
import l7 from "../img/banner-05-DXQafyB3.webp" 
import l8 from "../img/banner-06-BhCDC4E-.webp" 
import mobilh from "../img/mobilh.png"
import { useTranslation } from 'react-i18next';
import All_Plans from './All_Plans'
const Businessz28= () => {
    const { t } = useTranslation();
    return (
        <> 
 
            <Header />
<section className="type_first_sec kd28">
    <Container>
        <Row className='hello-row'>
            <Col lg={8}>
                <div className="typepg_breadscrum">
                    <a href="#">{t('Homepage_NB')}</a>
                    <span><IoChevronForwardSharp /></span>
                    <a href="#">{t('Business_NB')}</a>
                    <span><IoChevronForwardSharp /></span>
                    <a href="#">{t('Beverage_Industry_NB')}</a>
                </div>
                <div className="type_first_sec_txt">
                    <h2>{t('QR_Codes_for_Beverage_Industry_NB')}</h2>
                    <p className='total-spaas'>{t('Integrating_QR_codes_benefits_NB')}</p>
                    <a href="#">{t('Get_started_now_NB')}</a>
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
                    <h3>{t('Meet_Neon_Drinks_NB')}</h3>
                    <p>{t('Implementing_QR_codes_NB')}</p>
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
                    <h6>{t('Video_QR_Code_NB')}</h6>
                    <h3>{t('Transparency_and_connection_NB')}</h3>
                    <p>{t('Increase_transparency_NB')}</p>
                    <div className="more-end-btn-box">
                        <button className='hello-cr'>{t('Create_QR_code_NB')}</button>
                        <button className='More-Info'>{t('More_Info_NB')}</button>
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
                    <h6>{t('Coupon_QR_Code_NB')}</h6>
                    <h3>{t('Exclusive_offers_NB')}</h3>
                    <p>{t('Attract_customers_NB')}</p>
                    <div className="more-end-btn-box">
                        <button className='hello-cr'>{t('Create_QR_code_NB')}</button>
                        <button className='More-Info'>{t('More_Info_NB')}</button>
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
                    <h6>{t('Business_QR_Code_NB')}</h6>
                    <h3>{t('Increase_visibility_NB')}</h3>
                    <p>{t('Highlight_points_of_sale_NB')}</p>
                    <div className="more-end-btn-box">
                        <button className='hello-cr'>{t('Create_QR_code_NB')}</button>
                        <button className='More-Info'>{t('More_Info_NB')}</button>
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
                    <h6>{t('QRfy_NB')}</h6>
                    <h3>{t('Create_manage_monitor_NB')}</h3>
                    <p>{t('Design_impressive_QR_codes_NB')}</p>
                    <div className="more-end-btn-box">
                        <button className='hello-cr'>{t('Create_QR_code_NB')}</button>
                        <button className='More-Info'>{t('More_Info_NB')}</button>
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
                    <h6>{t('Event_QR_Code_NB')}</h6>
                    <h3>{t('Increase_attendance_NB')}</h3>
                    <p>{t('Simplify_RSVP_NB')}</p>
                    <div className="more-end-btn-box">
                        <button className='hello-cr'>{t('Create_QR_code_NB')}</button>
                        <button className='More-Info'>{t('More_Info_NB')}</button>
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
                    <h6>{t('Link_Listing_QR_Code_NB')}</h6>
                    <h3>{t('Build_relationship_online_NB')}</h3>
                    <p>{t('Connect_customers_social_networks_NB')}</p>
                    <div className="more-end-btn-box">
                        <button className='hello-cr'>{t('Create_QR_code_NB')}</button>
                        <button className='More-Info'>{t('More_Info_NB')}</button>
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
                    <h6>{t('PDF_QR_Code_NB')}</h6>
                    <h3>{t('Offer_added_value_NB')}</h3>
                    <p>{t('Provide_recipes_expert_advice_NB')}</p>
                    <div className="more-end-btn-box">
                        <button className='hello-cr'>{t('Create_QR_code_NB')}</button>
                        <button className='More-Info'>{t('More_Info_NB')}</button>
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

export default Businessz28
