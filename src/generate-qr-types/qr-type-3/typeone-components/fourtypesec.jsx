import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import  unlimitedsvg from "../../../img/unlimited_svg.svg"
import variatyqrtypes from "../../../img/variable_svg.svg"
import varietydownload from "../../../img/variety_download_svg.svg"
import unlimitedmember from "../../../img/unlimited_member.svg"
import completeanlytics from "../../../img/complete_analytics.svg"
import editingqr from "../../../img/editing_qr.svg"
import premiumsupport from "../../../img/premium_support.svg"
import cancelwhenever from "../../../img/cancel_whenever.svg"
import customdomain from "../../../img/custom_domain.svg"
import { useTranslation } from 'react-i18next'


const Fourtypesec = () => {
    const { t } = useTranslation();
  return (
    <>
        <section className="all_plan_include_sec">
            <Container>
                <Row>
                    <Col lg={12}>
                        <div className="all_plan_head">
                            <h3>{t('sqrtype62')}</h3>
                        </div>
                        <div className="all_plan_box">
                            <Row>
                                <Col lg={4}>
                                    <div className="plan_box_content">
                                        <img src={unlimitedsvg} alt="" />
                                        <div className="plan_box_text">
                                            <h3>{t('sqrtype63')}</h3>
                                            <p>{t('sqrtype64')}</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className="plan_box_content">
                                        <img src={variatyqrtypes} alt="" />
                                        <div className="plan_box_text">
                                            <h3>{t('sqrtype65')}</h3>
                                            <p>{t('sqrtype66')}</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className="plan_box_content">
                                        <img src={varietydownload} alt="" />
                                        <div className="plan_box_text">
                                            <h3>{t('sqrtype67')}</h3>
                                            <p>{t('sqrtype68')}</p>
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
                                            <h3>{t('sqrtype69')}</h3>
                                            <p>{t('sqrtype70')}</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className="plan_box_content">
                                        <img src={completeanlytics} alt="" />
                                        <div className="plan_box_text">
                                            <h3>{t('sqrtype71')}</h3>
                                            <p>{t('sqrtype72')}</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className="plan_box_content">
                                        <img src={editingqr} alt="" />
                                        <div className="plan_box_text">
                                            <h3>{t('sqrtype73')}</h3>
                                            <p>{t('sqrtype74')}</p>
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
                                            <h3>{t('sqrtype75')}</h3>
                                            <p>{t('sqrtype76')}</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className="plan_box_content">
                                        <img src={completeanlytics} alt="" />
                                        <div className="plan_box_text">
                                            <h3>{t('sqrtype77')}</h3>
                                            <p>{t('sqrtype78')}</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className="plan_box_content">
                                        <img src={editingqr} alt="" />
                                        <div className="plan_box_text">
                                            <h3>{t('sqrtype79')}</h3>
                                            <p>{t('sqrtype80')}</p>
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
                                            <h3>{t('sqrtype81')}</h3>
                                            <p>{t('sqrtype82')}</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className="plan_box_content">
                                        <img src={cancelwhenever} alt="" />
                                        <div className="plan_box_text">
                                            <h3>{t('sqrtype83')}</h3>
                                            <p>{t('sqrtype84')}</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className="plan_box_content">
                                        <img src={customdomain} alt="" />
                                        <div className="plan_box_text">
                                            <h3>{t('sqrtype85')}</h3>
                                            <p>{t('sqrtype86')}</p>
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