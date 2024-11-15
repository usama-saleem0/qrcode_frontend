import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import unlimitedsvg from "../../../img/unlimited_svg.svg"
import variatyqrtypes from "../../../img/variable_svg.svg"
import varietydownload from "../../../img/variety_download_svg.svg"
import unlimitedmember from "../../../img/unlimited_member.svg"
import completeanlytics from "../../../img/complete_analytics.svg"
import editingqr from "../../../img/editing_qr.svg"
import premiumsupport from "../../../img/premium_support.svg"
import cancelwhenever from "../../../img/cancel_whenever.svg"
import customdomain from "../../../img/custom_domain.svg"
import { useTranslation } from 'react-i18next';

const Fourtypesec = () => {
  const { t } = useTranslation();

  return (
    <>
        <section className="all_plan_include_sec">
            <Container>
                <Row>
                    <Col lg={12}>
                        <div className="all_plan_head">
                            <h3>{t('AllPlansIncludeNB')}</h3>
                        </div>
                        <div className="all_plan_box">
                            <Row>
                                <Col lg={4}>
                                    <div className="plan_box_content">
                                        <img src={unlimitedsvg} alt="" />
                                        <div className="plan_box_text">
                                            <h3>{t('UnlimitedDynamicQRNB')}</h3>
                                            <p>{t('UnlimitedDynamicQRDescNB')}</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className="plan_box_content">
                                        <img src={variatyqrtypes} alt="" />
                                        <div className="plan_box_text">
                                            <h3>{t('VarietyOfQRTypesNB')}</h3>
                                            <p>{t('VarietyOfQRTypesDescNB')}</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className="plan_box_content">
                                        <img src={varietydownload} alt="" />
                                        <div className="plan_box_text">
                                            <h3>{t('VarietyOfDownloadFormatsNB')}</h3>
                                            <p>{t('VarietyOfDownloadFormatsDescNB')}</p>
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
                                            <h3>{t('UnlimitedMembersNB')}</h3>
                                            <p>{t('UnlimitedMembersDescNB')}</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className="plan_box_content">
                                        <img src={completeanlytics} alt="" />
                                        <div className="plan_box_text">
                                            <h3>{t('CompleteQRAnalyticsNB')}</h3>
                                            <p>{t('CompleteQRAnalyticsDescNB')}</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className="plan_box_content">
                                        <img src={editingqr} alt="" />
                                        <div className="plan_box_text">
                                            <h3>{t('QREditingAndManagementNB')}</h3>
                                            <p>{t('QREditingAndManagementDescNB')}</p>
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
                                            <h3>{t('UnlimitedScansNB')}</h3>
                                            <p>{t('UnlimitedScansDescNB')}</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className="plan_box_content">
                                        <img src={completeanlytics} alt="" />
                                        <div className="plan_box_text">
                                            <h3>{t('BulkCreationAndDownloadNB')}</h3>
                                            <p>{t('BulkCreationAndDownloadDescNB')}</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className="plan_box_content">
                                        <img src={editingqr} alt="" />
                                        <div className="plan_box_text">
                                            <h3>{t('IntegrateGoogleFacebookPixelNB')}</h3>
                                            <p>{t('IntegrateGoogleFacebookPixelDescNB')}</p>
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
                                            <h3>{t('PremiumSupportNB')}</h3>
                                            <p>{t('PremiumSupportDescNB')}</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className="plan_box_content">
                                        <img src={cancelwhenever} alt="" />
                                        <div className="plan_box_text">
                                            <h3>{t('CancelWheneverNB')}</h3>
                                            <p>{t('CancelWheneverDescNB')}</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className="plan_box_content">
                                        <img src={customdomain} alt="" />
                                        <div className="plan_box_text">
                                            <h3>{t('CustomDomainNB')}</h3>
                                            <p>{t('CustomDomainDescNB')}</p>
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

export default Fourtypesec
