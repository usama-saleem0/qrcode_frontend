import React from 'react';
import { FaArrowRight } from "react-icons/fa6";
import { Col, Container, Row } from 'react-bootstrap';
import qrcodegenerate from "../../../img/banner-01-B3dJCEX-.webp";
import qrpersonlize from "../../../img/banner-02-HIuxCccP.webp";
import qrflexibility from "../../../img/banner-03-Drgh1oWM.webp";
import qrupdate from "../../../img/banner-04-D3vBqhkU.webp";
import { useTranslation } from 'react-i18next';

const Threetypesec9 = ({ handleregister }) => {
    const { t } = useTranslation();

    return (
        <>
            <section className="three_types_sec">
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className="three_types_sec_head">
                                <h4>{t('NB_carry_out_your_ideas_with_pdf_qr')}</h4>
                                <p>{t('NB_customize_your_qr_code')}</p>
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
                                <h6>{t('NB_create')}</h6>
                                <h3>{t('NB_information_in_single_scan')}</h3>
                                <p>{t('NB_share_documents_pdf')}</p>
                                <a href="#" onClick={handleregister}>{t('NB_generate_qr_code')} <FaArrowRight /></a>
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
                                <h6>{t('NB_personalize')}</h6>
                                <h3>{t('NB_give_personal_touch')}</h3>
                                <p>{t('NB_customize_landing_page1')}</p>
                                <a href="#" onClick={handleregister}>{t('NB_generate_qr_code')} <FaArrowRight /></a>
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
                                <h6>{t('NB_flexibility')}</h6>
                                <h3>{t('NB_you_wont_leave_anyone_out')}</h3>
                                <p>{t('NB_qr_code_accessible')}</p>
                                <a href="#" onClick={handleregister}>{t('NB_generate_qr_code')} <FaArrowRight /></a>
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
                                <h6>{t('NB_to_update')}</h6>
                                <h3>{t('NB_dont_worry_about_mistakes')}</h3>
                                <p>{t('NB_replace_information_links')}</p>
                                <a href="#" onClick={handleregister}>{t('NB_generate_qr_code')} <FaArrowRight /></a>
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
    )
}

export default Threetypesec9;
