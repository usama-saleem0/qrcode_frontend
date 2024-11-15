import React from 'react'
import { FaArrowRight } from "react-icons/fa6";
import { Col, Container, Row } from 'react-bootstrap'
import qrcodegenerate from "../../../img/banner-01-D70k8RdH.webp"
import qrpersonlize from "../../../img/banner-02-BNRUUfz3.webp"
import qrflexibility from "../../../img/banner-03-BM1tGHtj.webp"
import qrupdate from "../../../img/banner-05-DEpP_mCA.webp"
import Accessibility from "../../../img/banner-01-D70k8RdH.webp"
import { useTranslation } from 'react-i18next'

const Threetypesec = ({ handleregister }) => {
    const { t } = useTranslation()
    return (
        <>
            <section className="three_types_sec">
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className="three_types_sec_head">
                                <h4>{t('sqrtype40')}</h4>
                                <p>{t('sqrtype41')}</p>
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
                                <h6>{t('sqrtype42')}</h6>
                                <h3>{t('sqrtype43')}</h3>
                                <p>{t('sqrtype44')}</p>
                                <a href="#" onClick={handleregister}>{t('sqrtype45')} <FaArrowRight /></a>
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
                                <h6>{t('sqrtype46')}</h6>
                                <h3>{t('sqrtype47')}</h3>
                                <p>{t('sqrtype48')}</p>
                                <a href="#" onClick={handleregister}>{t('sqrtype49')} <FaArrowRight /></a>
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
                                <h6>{t('sqrtype50')}</h6>
                                <h3>{t('sqrtype51')}</h3>
                                <p>{t('sqrtype52')}</p>
                                <a href="#" onClick={handleregister}>{t('sqrtype53')} <FaArrowRight /></a>
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
                                <h6>{t('sqrtype54')}</h6>
                                <h3>{t('sqrtype55')}</h3>
                                <p>{t('sqrtype56')}</p>
                                <a href="#" onClick={handleregister}>{t('sqrtype57')} <FaArrowRight /></a>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="create_type_img">
                                <img src={Accessibility} alt="" />
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
                                <h6>{t('sqrtype58')} </h6>
                                <h3>{t('sqrtype59')}</h3>
                                <p>{t('sqrtype60')}</p>
                                <a href="#" onClick={handleregister}>{t('sqrtype61')}<FaArrowRight /></a>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

        </>
    )
}

export default Threetypesec