import React from 'react'
import { FaArrowRight } from "react-icons/fa6";
import { Col, Container, Row } from 'react-bootstrap'
import qrcodegenerate from "../../../img/banner-01-CP0pdDYS.webp"
import qrpersonlize from "../../../img/banner-02-xfQEzVOn.webp"
import qrflexibility from "../../../img/banner-03-CC1mpLdE.webp"
import Toupdate from "../../../img/banner-05-x_ArNx7H.webp"
import qrupdate from "../../../img/banner-04-3sdfOfyp.webp"
import { useTranslation } from 'react-i18next';

const Threetypesec4 = ({ handleregister }) => {
    const { t } = useTranslation();

    return (
        <>
            <section className="three_types_sec">
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className="three_types_sec_head">
                                <h4>{t('NB_bring_your_ideas')}</h4>
                                <p>{t('NB_expand_references')}</p>
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
                                <h3>{t('NB_share_more')}</h3>
                                <p>{t('NB_traditional_business_cards')}</p>
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
                                <h3>{t('NB_customize_to_your_liking')}</h3>
                                <p>{t('NB_customize_landing_page')}</p>
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
                                <p>{t('NB_qr_code_accessibility')}</p>
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
                                <h6>{t('NB_ease')}</h6>
                                <h3>{t('NB_easy_to_use')}</h3>
                                <p>{t('NB_speed_of_current_times')}</p>
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

            <section className="personalize_type_sec">
                <Container>
                    <Row>
                        <Col lg={6}>
                            <div className="create_type_img">
                                <img src={Toupdate} alt="" />
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="create_type_txt">
                                <h6>{t('NB_to_update')}</h6>
                                <h3>{t('NB_dont_worry_about_mistakes')}</h3>
                                <p>{t('NB_modify_data_anytime')}</p>
                                <a href="#" onClick={handleregister}>{t('NB_generate_qr_code')} <FaArrowRight /></a>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Threetypesec4;
