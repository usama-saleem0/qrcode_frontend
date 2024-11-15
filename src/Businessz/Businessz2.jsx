import React from 'react'

import Header from "../header/header"

import Footer from '../Footer/Footer'
import { Col, Container, Row } from 'react-bootstrap'
import { FaArrowRight } from 'react-icons/fa6'
import { IoChevronForwardSharp } from 'react-icons/io5'




import h1 from "../img/p1.webp"
import h2 from "../img/p2.webp"
import h3 from "../img/p3.webp"
import h4 from "../img/p4.webp"
import h5 from "../img/p5.webp"
import h6 from "../img/p6.webp"
import h7 from "../img/p7.webp"
import h8 from "../img/p8.webp"
import mobilh from "../img/mobilh.png"
import { useTranslation } from 'react-i18next';
import All_Plans from './All_Plans'

const Businessz2 = () => {

    const { t } = useTranslation();

    return (
        <>

            <Header />

            <section className="type_first_sec kd3">
                <Container>
                    <Row className='hello-row'>
                        <Col lg={8}>
                            <div className="typepg_breadscrum">
                                <a href="#">{t('Business_bk0')}</a>
                                <span><IoChevronForwardSharp /></span>
                                <a href="#">{t('Business_bk')}</a>
                                <span><IoChevronForwardSharp /></span>
                                <a href="#">{t('Business_bk1')}</a>
                            </div>
                            <div className="type_first_sec_txt">

                                <h2>{t('QR_Packaging_bk')}</h2>
                                <p className='total-spaas'>{t('Incorporating_QR_bk')}</p>
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

                                <h3>{t('Discover_ZenYog_bk')}</h3>
                                <p>{t('business_ZenYog_bk')}</p>

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
                            <div className="create_type_txt">
                                <h6>{t('PDF_Code_bk')}</h6>
                                <h3>{t('consumer_experience_bk')}</h3>
                                <p>{t('Boost_the_connection_bk')}</p>
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
                                <h6>{t('Link_Listing_bk')}</h6>
                                <h3>{t('social_networks_bk')}</h3>
                                <p>{t('connection_brand_bk')}</p>
                                <div className="more-end-btn-box">
                                    <button className='hello-cr'>{t('Create_bk')} </button>
                                  <button className='More-Info'>{t('More_bk')}</button>
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
                            <div className="create_type_txt">
                                <h6>{t('Event_QR_Code_bk')}</h6>
                                <h3>{t('Promotes_responsible_bk')}</h3>
                                <p>{t('consumption_and_sustainable_bk')}</p>
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
                                <img src={h6} alt="" />
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="create_type_txt">
                                <h6>{t('Video_bk')}</h6>
                                <h3>{t('Highlight_your_product_bk')}</h3>
                                <p>{t('Highlight_the_uniqueness_bk')}</p>
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
                                <h6>{t('Feedback_QR_bk')}</h6>
                                <h3>{t('customers_to_express_bk')}</h3>
                                <p>{t('Feedback_QR_Code_simplifies_interaction_bk')}</p>
                                <div className="more-end-btn-box">
                                    <button className='hello-cr'>{t('Create_bk')} </button>
                                  <button className='More-Info'>{t('More_bk')}</button>
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

        
            <All_Plans/>
            <Footer />

        </>
    )
}

export default Businessz2