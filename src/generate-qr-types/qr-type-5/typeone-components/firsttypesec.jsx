import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { IoChevronForwardSharp } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa6";
import pgmobinner from "../../../img/mde1.png";
import { useTranslation } from 'react-i18next';

const FirsttypesecNB = ({ handleregister }) => {
    const { t } = useTranslation();

    return (
        <>
            <section
                className="type_first_sec"
                style={{
                    background: 'linear-gradient(332deg, rgb(29, 89, 249) 0%, rgba(29, 89, 249, 0)'
                }}
            >
                <Container>
                    <Row>
                        <Col lg={6}>
                            <div className="typepg_breadscrum">
                                <a href="#">{t('HomepageNB')}</a>
                                <span><IoChevronForwardSharp /></span>
                                <a href="#">{t('TypesOfQRCodeNB')}</a>
                                <span><IoChevronForwardSharp /></span>
                                <a href="#">{t('WebsiteNB')}</a>
                            </div>
                            <div className="type_first_sec_txt">
                                <h6>{t('GenerateApplicationQRCodeNB')}</h6>
                                <h2>{t('ShareAppsNB')}</h2>
                                <p>{t('MarketingTacticNB')}</p>
                                <a href="#" onClick={handleregister}>{t('CreateQRCodeNB')} <FaArrowRight /></a>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="website_qrcode_mob mobile-respon">
                                <img src={pgmobinner} alt={t('QRCodeAltTextNB')} />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
}

export default FirsttypesecNB;