import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { IoChevronForwardSharp } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa6";
import pgmobinner from "../../../img/mockup_images_preview.webp";
import { useTranslation } from 'react-i18next';

const FirsttypesecNB = ({ handleregister }) => {
    const { t } = useTranslation();

    return (
        <>
            <section
                className="type_first_sec"
                style={{
                    background: 'linear-gradient(332deg, rgb(253, 204, 188) 0%, rgba(253, 204, 188, 0) 58.35%)'
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
                                <h6>{t('GenerateAppsQRCodeNB')}</h6>
                                <h2>{t('ShareImageGalleryNB')}</h2>
                                <p>{t('ShareGalleryDescriptionNB')}</p>
                                <a href="#" onClick={handleregister}>{t('CreateQRCodeNB')} <FaArrowRight /></a>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="website_qrcode_mob mobile-respon">
                                <img src={pgmobinner} alt="" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
}

export default FirsttypesecNB;
