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
import l1 from "../img/illustration-Txo_GPO8.webp" 
import l2 from "../img/banner-01-C9HD_v9t.webp" 
import l3 from "../img/banner-02-B1YD00Se.webp" 
import l4 from "../img/banner-03-D_nQHgXa.webp" 
import l5 from "../img/banner-04-C7WhK4-Y.webp" 
import l7 from "../img/banner-05-Dh_8eX5g.webp" 
import l8 from "../img/banner-06-DC5qmk7Z.webp" 
import mobilh from "../img/mobilh.png"
import { useTranslation } from 'react-i18next';
import All_Plans from './All_Plans'

const Businessz24= () => {
    const { t } = useTranslation();

    return (
        <> 
 
            <Header />

            <section className="type_first_sec kd24">
    <Container>
        <Row className='hello-row'>
            <Col lg={8}>
                <div className="typepg_breadscrum">
                    <a href="#">{t('homepage_GDS')}</a>
                    <span><IoChevronForwardSharp /></span>
                    <a href="#">{t('business_GDS')}</a>
                    <span><IoChevronForwardSharp /></span>
                    <a href="#">{t('Consumer_GDS')}</a>
                </div>
                <div className="type_first_sec_txt">
                    <h2>{t('QR_Codes_on_Technological_Devices_HB')}</h2>
                    <p className='total-spaas'>{t('Strategic_inclusion_HB')}</p>
                    <a href="#">{t('Get_started_now_HB')}</a>
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
                    <h3>{t('Introducing_Siekens_HB')}</h3>
                    <p>{t('Impact_of_QR_codes_HB')}</p>
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
                    <h6>{t('Link_Listing_QR_Code_HB')}</h6>
                    <h3>{t('Elevating_the_customer_experience_HB')}</h3>
                    <p>{t('Integrating_a_Link_Listing_QR_code_HB')}</p>
                    <div className="more-end-btn-box">
                        <button className='hello-cr'>{t('Create_QR_code_HB')}</button>
                        <button className='More-Info'>{t('More_Info_HB')}</button>
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
                    <h6>{t('PDF_QR_Code_HB')}</h6>
                    <h3>{t('Instant_access_to_electronic_manuals_HB')}</h3>
                    <p>{t('Incorporates_a_PDF_QR_code_HB')}</p>
                    <div className="more-end-btn-box">
                        <button className='hello-cr'>{t('Create_QR_code_HB')}</button>
                        <button className='More-Info'>{t('More_Info_HB')}</button>
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
                    <h6>{t('Video_QR_Code_HB')}</h6>
                    <h3>{t('Boost_your_ads_with_visual_experiences_HB')}</h3>
                    <p>{t('Transform_your_outdoor_signs_HB')}</p>
                    <div className="more-end-btn-box">
                        <button className='hello-cr'>{t('Create_QR_code_HB')}</button>
                        <button className='More-Info'>{t('More_Info_HB')}</button>
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
                    <h6>{t('QRfy_HB')}</h6>
                    <h3>{t('Create_manage_and_monitor_your_QR_codes_HB')}</h3>
                    <p>{t('Design_impressive_QR_codes_HB')}</p>
                    <div className="more-end-btn-box">
                        <button className='hello-cr'>{t('Create_QR_code_HB')}</button>
                        <button className='More-Info'>{t('More_Info_HB')}</button>
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
                    <h6>{t('Feedback_QR_Code_HB')}</h6>
                    <h3>{t('Optimize_your_product_or_service_HB')}</h3>
                    <p>{t('Drive_continuous_improvement_HB')}</p>
                    <div className="more-end-btn-box">
                        <button className='hello-cr'>{t('Create_QR_code_HB')}</button>
                        <button className='More-Info'>{t('More_Info_HB')}</button>
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
                    <h6>{t('Business_QR_Code_HB')}</h6>
                    <h3>{t('Simplify_access_to_key_data_HB')}</h3>
                    <p>{t('Improve_the_shopping_experience_HB')}</p>
                    <div className="more-end-btn-box">
                        <button className='hello-cr'>{t('Create_QR_code_HB')}</button>
                        <button className='More-Info'>{t('More_Info_HB')}</button>
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
                    <h6>{t('Coupon_QR_Code_HB')}</h6>
                    <h3>{t('Optimize_your_Sales_with_Personalized_Offers_HB')}</h3>
                    <p>{t('Integrate_the_Coupon_QR_code_HB')}</p>
                    <div className="more-end-btn-box">
                        <button className='hello-cr'>{t('Create_QR_code_HB')}</button>
                        <button className='More-Info'>{t('More_Info_HB')}</button>
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

export default Businessz24
