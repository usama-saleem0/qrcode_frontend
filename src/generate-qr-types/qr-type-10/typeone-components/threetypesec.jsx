import React from 'react';
import { FaArrowRight } from "react-icons/fa6";
import { Col, Container, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

import qrcodegenerate from "../../../img/banner-01-Cj3accsC.webp";
import qrpersonlize from "../../../img/banner-02-CbaHfJ9l.webp";
import qrflexibility from "../../../img/banner-03-2k_ZAGii.webp";
import Adaptation from "../../../img/banner-04-B7fJSqEA.webp";
import qrupdate from "../../../img/banner-05-5HJVUugp.webp";

const ThreetypesecNB = ({ handleregister }) => {
    const { t } = useTranslation();

    return (
        <>
            <section className="three_types_sec">
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className="three_types_sec_head">
                                <h4>{t('BringIdeasToLifeNB')}</h4>
                                <p>{t('CreateCustomizeLaunchNB')}</p>
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
                                <h3>{t('SelectImagesToShareNB')}</h3>
                                <p>{t('ImageGalleryAllowsAddImagesNB')}</p>
                                <a href="#" onClick={handleregister}>{t('GenerateQRCodeNB')} <FaArrowRight /></a>
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
                                <h3>{t("LetsDoItNB")}</h3>
                                <p>{t('CustomizeGalleryLookNB')}</p>
                                <a href="#" onClick={handleregister}>{t('GenerateQRCodeNB')} <FaArrowRight /></a>
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
                                <h3>{t('NoOneMissCampaignNB')}</h3>
                                <p>{t('QRCodeAvailableForAnyDeviceNB')}</p>
                                <a href="#" onClick={handleregister}>{t('GenerateQRCodeNB')} <FaArrowRight /></a>
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
                                <h6>{t('AdaptationNB')}</h6>
                                <h3>{t('AdaptGalleryFormatNB')}</h3>
                                <p>{t('ModifyAppearanceAccordingToStyleNB')}</p>
                                <a href="#" onClick={handleregister}>{t('GenerateQRCodeNB')} <FaArrowRight /></a>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="create_type_img">
                                <img src={Adaptation} alt="" />
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
                                <img src={qrupdate} alt="" />
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="create_type_txt">
                                <h6>{t('ToUpdateNB')}</h6>
                                <h3>{t('DontBeAfraidToMakeMistakesNB')}</h3>
                                <p>{t('ModifyInformationWithoutNewQRNB')}</p>
                                <a href="#" onClick={handleregister}>{t('GenerateQRCodeNB')} <FaArrowRight /></a>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default ThreetypesecNB;
