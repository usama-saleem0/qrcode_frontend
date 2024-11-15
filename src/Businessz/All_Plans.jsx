import React from 'react'
import { useTranslation } from 'react-i18next';
import { Col, Container, Row } from 'react-bootstrap'
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

const All_Plans = () => {
    const { t } = useTranslation();

    return (

        <>
            <section className="personalize_type_sec">
                <Container>
                    <Row className='kd1-center'>

                        <Col lg={8} className='kd1-center'>
                            <div className="create_type_txt">

                                <h3>{t('QRFY_Complete_bk')}</h3>
                                <p>{t('Adapt_your_bk')}</p>
                                <div className="more-end-btn-box kd1-center">
                                    <button className='hello-cr'>{t('Register_now_bk')}</button>
                                    <button className='More-Info'>{t('More_bk')}</button>
                                </div>
                            </div>
                        </Col>

                    </Row>
                </Container>
            </section>


            <section className="all_plan_include_sec">
            <Container>
                <Row>
                    <Col lg={12}>
                        <div className="all_plan_head">
                            <h3>{t('All_plans_include_bk')}</h3>
                        </div>
                        <div className="all_plan_box">
                            <Row>
                                <Col lg={4}>
                                    <div className="plan_box_content">
                                        <img src={unlimitedsvg} alt="" />
                                        <div className="plan_box_text">
                                            <h3>{t('Unlimited_QR_bk')}</h3>
                                            <p>{t('Create_unlimited_bk')}</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className="plan_box_content">
                                        <img src={variatyqrtypes} alt="" />
                                        <div className="plan_box_text">
                                            <h3>{t('Variety_of_QR_types_bk')}</h3>
                                            <p>{t(' Choose_from_multiple_bk')}</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className="plan_box_content">
                                        <img src={varietydownload} alt="" />
                                        <div className="plan_box_text">
                                            <h3>{t('Variety_of_download_bk')}</h3>
                                            <p>{t('Download_your_QR_bk')}</p>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <div className="all_plan_box">
                            <Row>
                                <Col lg={4}>
                                    <div className="plan_box_content">
                                        <img src={unlimitedmember} alt="" />
                                        <div className="plan_box_text">
                                            <h3>{t('Unlimited_Members_bk')}</h3>
                                            <p>{t('Invite_the_users_bk')}</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className="plan_box_content">
                                        <img src={completeanlytics} alt="" />
                                        <div className="plan_box_text">
                                            <h3>{t('Complete_QR_Analytics_bk')}</h3>
                                            <p>{t('Get_statistics_with_bk')}</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className="plan_box_content">
                                        <img src={editingqr} alt="" />
                                        <div className="plan_box_text">
                                            <h3>{t('QR_editing_bk')}</h3>
                                            <p>{t('Customize_your_QRs_bk')}</p>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <div className="all_plan_box">
                            <Row>
                                <Col lg={4}>
                                    <div className="plan_box_content">
                                        <img src={unlimitedmember} alt="" />
                                        <div className="plan_box_text">
                                            <h3>{t('Unlimited_scans_bk')}</h3>
                                            <p>{t('Your_QRs_bk')}</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className="plan_box_content">
                                        <img src={completeanlytics} alt="" />
                                        <div className="plan_box_text">
                                            <h3>{t('Bulk_creation_types_bk')}</h3>
                                            <p>{t('Generate_multiple_QRs_bk')}</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className="plan_box_content">
                                        <img src={editingqr} alt="" />
                                        <div className="plan_box_text">
                                            <h3>{t('Integrate_Google_bk')}</h3>
                                            <p>{t('Track_interaction_bk')}</p>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <div className="all_plan_boxs">
                            <Row>
                                <Col lg={4}>
                                    <div className="plan_box_content">
                                        <img src={premiumsupport} alt="" />
                                        <div className="plan_box_text">
                                            <h3>{t('Premium_Support_bk')}</h3>
                                            <p>{t('Receive_priority_bk')}</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className="plan_box_content">
                                        <img src={cancelwhenever} alt="" />
                                        <div className="plan_box_text">
                                            <h3>{t('Cancel_whenever_bk')}</h3>
                                            <p>{t('Generate_multiple_bk')}</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className="plan_box_content">
                                        <img src={customdomain} alt="" />
                                        <div className="plan_box_text">
                                            <h3>{t('Custom_Domain_bk')}</h3>
                                            <p>{t('Track_interaction_bk')}</p>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
        </>
       

    )
}

export default All_Plans
