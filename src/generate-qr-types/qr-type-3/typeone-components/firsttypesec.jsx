import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { IoChevronForwardSharp } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa6";
import pgmobinner from "../../../img/mockup_video_preview.webp"
import { useTranslation } from 'react-i18next';

const Firsttypesec = ({ handleregister }) => {
    const { t } = useTranslation();
    return (
        <>
            <section
                className="type_first_sec"
                style={{
                    background: 'linear-gradient(332deg, rgb(208, 81, 208) 0%, rgba(208, 81, 208, 0) 58.35%)'
                }}
            >
                <Container>
                    <Row>
                        <Col lg={6}>
                            <div className="typepg_breadscrum">
                                <a href="#">{t('sqrtype1')}</a>
                                <span><IoChevronForwardSharp /></span>
                                <a href="#">{t('sqrtype2')}</a>
                                <span><IoChevronForwardSharp /></span>
                                <a href="#">{t('sqrtype3')}</a>
                            </div>
                            <div className="type_first_sec_txt">
                                <h6>{t('sqrtype4')}</h6>
                                <h2>{t('sqrtype5')}</h2>
                                <p>{t('sqrtype6')}</p>
                                <a href="#" onClick={handleregister}>{t('sqrtype7')} <FaArrowRight /></a>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="website_qrcode_mob  mobile-respon">
                                <img src={pgmobinner} alt="" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Firsttypesec