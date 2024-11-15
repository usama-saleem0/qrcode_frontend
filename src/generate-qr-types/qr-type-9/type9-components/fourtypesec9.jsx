import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import unlimitedsvg from "../../../img/unlimited_svg.svg";
import variatyqrtypes from "../../../img/variable_svg.svg";
import varietydownload from "../../../img/variety_download_svg.svg";
import unlimitedmember from "../../../img/unlimited_member.svg";
import completeanlytics from "../../../img/complete_analytics.svg";
import editingqr from "../../../img/editing_qr.svg";
import premiumsupport from "../../../img/premium_support.svg";
import cancelwhenever from "../../../img/cancel_whenever.svg";
import customdomain from "../../../img/custom_domain.svg";
import { useTranslation } from 'react-i18next';

const Fourtypesec9 = () => {
    const { t } = useTranslation();

    return (
        <>
            <section className="all_plan_include_sec">
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className="all_plan_head">
                                <h3>{t('NB_all_plans_include1')}</h3>
                            </div>
                            <div className="all_plan_box">
                                <Row>
                                    <Col lg={4}>
                                        <div className="plan_box_content">
                                            <img src={unlimitedsvg} alt="" />
                                            <div className="plan_box_text">
                                                <h3>{t('NB_unlimited_dynamic_qr1')}</h3>
                                                <p>{t('NB_create_unlimited_qrs1')}</p>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={4}>
                                        <div className="plan_box_content">
                                            <img src={variatyqrtypes} alt="" />
                                            <div className="plan_box_text">
                                                <h3>{t('NB_variety_of_qr_types1')}</h3>
                                                <p>{t('NB_choose_multiple_qr_types1')}</p>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={4}>
                                        <div className="plan_box_content">
                                            <img src={varietydownload} alt="" />
                                            <div className="plan_box_text">
                                                <h3>{t('NB_variety_of_download_formats1')}</h3>
                                                <p>{t('NB_download_qr_in_multiple_formats1')}</p>
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
                                                <h3>{t('NB_unlimited_members1')}</h3>
                                                <p>{t('NB_invite_users_to_collaborate1')}</p>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={4}>
                                        <div className="plan_box_content">
                                            <img src={completeanlytics} alt="" />
                                            <div className="plan_box_text">
                                                <h3>{t('NB_complete_qr_analytics1')}</h3>
                                                <p>{t('NB_get_statistics_with_scans1')}</p>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={4}>
                                        <div className="plan_box_content">
                                            <img src={editingqr} alt="" />
                                            <div className="plan_box_text">
                                                <h3>{t('NB_qr_editing_and_management1')}</h3>
                                                <p>{t('NB_customize_qrs_with_options1')}</p>
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
                                                <h3>{t('NB_unlimited_scans1')}</h3>
                                                <p>{t('NB_qrs_can_be_scanned_unlimitedly1')}</p>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={4}>
                                        <div className="plan_box_content">
                                            <img src={completeanlytics} alt="" />
                                            <div className="plan_box_text">
                                                <h3>{t('NB_bulk_creation_and_download1')}</h3>
                                                <p>{t('NB_generate_multiple_qrs_with_csv1')}</p>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={4}>
                                        <div className="plan_box_content">
                                            <img src={editingqr} alt="" />
                                            <div className="plan_box_text">
                                                <h3>{t('NB_integrate_google_facebook_pixel1')}</h3>
                                                <p>{t('NB_track_interaction_with_qrs1')}</p>
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
                                                <h3>{t('NB_premium_support1')}</h3>
                                                <p>{t('NB_unlimited_scans_description1')}</p>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={4}>
                                        <div className="plan_box_content">
                                            <img src={cancelwhenever} alt="" />
                                            <div className="plan_box_text">
                                                <h3>{t('NB_cancel_whenever_you_want1')}</h3>
                                                <p>{t('NB_generate_multiple_qrs_with_csv1')}</p>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={4}>
                                        <div className="plan_box_content">
                                            <img src={customdomain} alt="" />
                                            <div className="plan_box_text">
                                                <h3>{t('NB_custom_domain1')}</h3>
                                                <p>{t('NB_track_interaction_with_qrs1')}</p>
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

export default Fourtypesec9;
