import React from 'react';
import { FaArrowRight } from "react-icons/fa6";
import { Col, Container, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import qrcodegenerate from "../../../img/banner-01-CGDPp_g_.webp";
import qrpersonlize from "../../../img/banner-02-BEv97SFS.webp";
import qrflexibility from "../../../img/banner-03-BaYytADw.webp";
import qrupdate from "../../../img/banner-04-BZZdVZn7.webp";

const ThreetypesecNB = ({ handleregister }) => {
    const { t } = useTranslation();

    return (
        <>
            <section className="three_types_sec">
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className="three_types_sec_head">
                                <h4>{t('LearnAboutAppStoreQRNB')}</h4>
                                <p>{t('ClientInstallationEaseNB')}</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="create_type_sec">
                <Container>
                    <Row>
                        <Col lg={6}>
                            <div className="create_type_img">
                                <img src={qrcodegenerate} alt="" />
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="create_type_txt">
                                <h6>{t('CreateNB')}</h6>
                                <h3>{t('ShareAppsNB1')}</h3>
                                <p>{t('UniqueQRDescriptionNB')}</p>
                                <a href="#" onClick={handleregister}>{t('GenerateQRNB')} <FaArrowRight /></a>
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
                                <h6>{t('PersonalizeNB')}</h6>
                                <h3>{t('CustomizeItNB')}</h3>
                                <p>{t('LandingPageCustomizationNB')}</p>
                                <a href="#" onClick={handleregister}>{t('GenerateQRNB')} <FaArrowRight /></a>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="create_type_img">
                                <img src={qrpersonlize} alt="" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="create_type_sec">
                <Container>
                    <Row>
                        <Col lg={6}>
                            <div className="create_type_img">
                                <img src={qrflexibility} alt="" />
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="create_type_txt">
                                <h6>{t('FlexibilityNB')}</h6>
                                <h3>{t('NoOneLeftOutNB')}</h3>
                                <p>{t('QRAccessibilityNB')}</p>
                                <a href="#" onClick={handleregister}>{t('GenerateQRNB')} <FaArrowRight /></a>
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
                                <h6>{t('ToUpdateNB')}</h6>
                                <h3>{t('NoWorryAboutMistakesNB')}</h3>
                                <p>{t('UpdateInfoNB')}</p>
                                <a href="#" onClick={handleregister}>{t('GenerateQRNB')} <FaArrowRight /></a>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="create_type_img">
                                <img src={qrupdate} alt="" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
}

export default ThreetypesecNB;
