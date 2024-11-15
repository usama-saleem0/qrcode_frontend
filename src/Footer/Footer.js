import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { IoIosStar } from "react-icons/io";
import { PiCurrencyCircleDollarBold } from "react-icons/pi";
import das from '../img/das.png';
import error from '../img/error.png';
import qrn1 from '../img/qrn1.png';
import { useTranslation } from 'react-i18next';
const Footer = ({ handleregister }) => {
    const { t } = useTranslation();
    return (
        <>

            <section className='Days'>
                <Container>
                    <div className="main-Days">
                        <div className="Days-tital">
                            <h2>{t('NBfooter1')}<br />{t('NBfooter2')}</h2>
                            <img src={error} alt="" />
                            <button onClick={handleregister}>{t('NBfooter3')}</button>
                        </div>

                        <div className="days-imger">
                            <img src={das} alt="" />
                        </div>
                    </div>
                </Container>
            </section>

            <div className="qrfy_google_box">
                <Container>

                    <Row>
                        <Col lg={12}>
                            <div className="footer_qr_google">
                                <div className="footer_qr">
                                    <div className="footer_qr_img">
                                    <img src={qrn1} alt=""/>
                                    </div>
                                    <div className="footer_qr_text">
                                        <p>{t('NBfooter4')}<br />{t('NBfooter5')}</p>
                                    </div>
                                </div>
                                <div className="footer_google_box">
                                    <p>Google <IoIosStar /> <span>4,7</span> </p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            <footer className="footer_main">
                <Container>
                    <Row>
                        <Col lg={2}>
                            <div className="footer_links">
                                <h5>QRFY</h5>
                                <ul>
                                    <li><a href="#">{t('NBfooter6')}</a></li>
                                    <li><a href="#">{t('NBfooter7')}</a></li>
                                </ul>
                            </div>
                        </Col>
                        <Col lg={2}>
                            <div className="footer_links">
                                <h5>{t('NBfooter8')}</h5>
                                <ul>
                                    <li><a href="#">{t('NBfooter9')} <br />
                                    {t('NBfooter10')}</a></li>
                                    <li><a href="#"> {t('NBfooter11')}</a></li>
                                    <li><a href="#">{t('NBfooter12')}</a></li>
                                    <li><a href="#">{t('NBfooter13')}</a></li>
                                    <li><a href="#">Blog</a></li>
                                </ul>
                            </div>
                        </Col>
                        <Col lg={2}>
                            <div className="footer_links">
                                <h5>{t('NBfooter14')}</h5>
                                <ul>
                                    <li><a href="#">{t('NBfooter15')}</a></li>
                                    <li><a href="#">{t('NBfooter16')}</a></li>
                                </ul>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className="footer_links">
                                <h5>{t('NBfooter17')}</h5>
                                <div className="footer_extra_links">
                                    <ul>
                                        <li><a href="#">{t('NBfooter18')}</a></li>
                                        <li><a href="#">PDF</a></li>
                                        <li><a href="#">vCard Plus</a></li>
                                        <li><a href="#">{t('NBfooter19')}</a></li>
                                        <li><a href="#">Video</a></li>
                                        <li><a href="#">{t('NBfooter20')}</a></li>
                                        <li><a href="#">{t('NBfooter21')}</a></li>
                                        <li><a href="#">{t('NBfooter22')}</a></li>
                                    </ul>
                                    <ul>
                                        <li><a href="#">{t('NBfooter23')}</a></li>
                                        <li><a href="#">MP3</a></li>
                                        <li><a href="#">{t('NBfooter24')}</a></li>
                                        <li><a href="#">{t('NBfooter25')}</a></li>
                                        <li><a href="#">Video</a></li>
                                        <li><a href="#">{t('NBfooter26')}</a></li>
                                        <li><a href="#">{t('NBfooter27')}</a></li>
                                        <li><a href="#">{t('NBfooter28')}</a></li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                        <Col lg={2}>
                            <div className="footer_links">
                                <h5>Help</h5>
                                <ul>
                                    <li><a href="#">{t('NBfooter29')}</a></li>
                                    <li><a href="#">{t('NBfooter30')}</a></li>
                                    <li><a href="#">{t('NBfooter31')}</a></li>
                                    <li><a href="#">{t('NBfooter32')}</a></li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </footer>
            <div className="footer_copyright">
                <Container>
                    <Row>
                        <Col lg={7}>
                            <div className="footer_copyright_txt">
                                <p>{t('NBfooter33')}</p>
                            </div>
                        </Col>
                        <Col lg={5}>
                            <div className="footer_social_links">
                                <div className="footer_icon_box">
                                    <span><PiCurrencyCircleDollarBold /></span>
                                    <p>{t('NBfooter34')}</p>
                                </div>
                                <div className="footer_icon_box">
                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                                        <path d="M8.89002 1.88086C7.50555 1.88086 6.15217 2.2914 5.00103 3.06057C3.84988 3.82974 2.95267 4.92299 2.42286 6.20208C1.89305 7.48116 1.75442 8.88862 2.02452 10.2465C2.29462 11.6044 2.9613 12.8516 3.94027 13.8306C4.91924 14.8096 6.16652 15.4763 7.52439 15.7464C8.88225 16.0165 10.2897 15.8778 11.5688 15.348C12.8479 14.8182 13.9411 13.921 14.7103 12.7699C15.4795 11.6187 15.89 10.2653 15.89 8.88086C15.89 7.02434 15.1525 5.24387 13.8398 3.93111C12.527 2.61836 10.7465 1.88086 8.89002 1.88086ZM13.79 7.88086H11.89C11.8451 6.74985 11.6638 5.6284 11.35 4.54086C11.9715 4.89128 12.5107 5.37063 12.9316 5.94672C13.3524 6.5228 13.6451 7.18228 13.79 7.88086ZM7.89002 9.88086H9.89002C9.88848 11.2473 9.54469 12.5915 8.89002 13.7909C8.23535 12.5915 7.89155 11.2473 7.89002 9.88086ZM7.89002 7.88086C7.89155 6.51446 8.23535 5.17022 8.89002 3.97086C9.54469 5.17022 9.88848 6.51446 9.89002 7.88086H7.89002ZM6.46002 4.54086C6.13607 5.62714 5.94468 6.74862 5.89002 7.88086H3.99002C4.13828 7.17963 4.43557 6.51848 4.86174 5.94221C5.2879 5.36594 5.83298 4.88802 6.46002 4.54086ZM3.99002 9.88086H5.89002C5.93492 11.0119 6.11623 12.1333 6.43002 13.2209C5.80856 12.8704 5.2693 12.3911 4.84844 11.815C4.42759 11.2389 4.13489 10.5794 3.99002 9.88086ZM11.32 13.2209C11.644 12.1346 11.8354 11.0131 11.89 9.88086H13.79C13.6418 10.5821 13.3445 11.2432 12.9183 11.8195C12.4921 12.3958 11.9471 12.8737 11.32 13.2209Z" fill="white" />
                                    </svg></span>
                                    <p>{t('NBfooter35')}</p>
                                </div>
                                <ul>
                                    <li><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                                        <path d="M8 0.880859C3.6 0.880859 0 4.48086 0 8.88086C0 13.2809 3.6 16.8809 8 16.8809C12.4 16.8809 16 13.2809 16 8.88086C16 4.48086 12.4 0.880859 8 0.880859ZM5.5 13.2809H3.6V7.28086H5.5V13.2809ZM4.6 6.58086C4 6.58086 3.5 6.08086 3.5 5.48086C3.5 4.88086 4 4.38086 4.6 4.38086C5.2 4.38086 5.7 4.88086 5.7 5.48086C5.7 6.08086 5.2 6.58086 4.6 6.58086ZM12.5 13.2809H10.6V10.3809C10.6 9.68086 10.6 8.78086 9.6 8.78086C8.6 8.78086 8.5 9.58086 8.5 10.3809V13.3809H6.7V7.38086H8.5V8.18086C8.9 7.58086 9.5 7.18086 10.3 7.18086C12.2 7.18086 12.5 8.38086 12.5 9.98086V13.2809Z" fill="white" />
                                    </svg></a></li>
                                    <li><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                                        <path d="M8 0.880859C3.6 0.880859 0 4.48086 0 8.88086C0 13.2809 3.6 16.8809 8 16.8809C12.4 16.8809 16 13.2809 16 8.88086C16 4.48086 12.4 0.880859 8 0.880859ZM11.8 6.88086V7.18086C11.8 8.28086 11.5 9.28086 10.9 10.1809C9.2 12.7809 5.7 13.5809 3.1 11.8809C3.3 11.8809 3.4 11.8809 3.6 11.8809C4.5 11.8809 5.4 11.5809 6.1 11.0809C5.3 11.0809 4.5 10.4809 4.3 9.68086C4.6 9.78086 4.9 9.78086 5.2 9.68086C4.3 9.48086 3.6 8.68086 3.6 7.78086C3.8 7.88086 4.1 7.98086 4.5 7.98086C3.6 7.38086 3.3 6.28086 3.8 5.38086C4.8 6.58086 6.3 7.38086 7.9 7.48086C7.9 7.38086 7.9 7.18086 7.9 6.98086C7.9 6.48086 8.1 5.88086 8.5 5.58086C9.3 4.88086 10.5 4.88086 11.3 5.68086C11.7 5.58086 12.2 5.48086 12.6 5.18086C12.5 5.68086 12.1 5.98086 11.7 6.28086C12.1 6.28086 12.5 6.08086 12.8 5.98086C12.6 6.28086 12.2 6.68086 11.8 6.88086Z" fill="white" />
                                    </svg></a></li>
                                    <li><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                                        <path d="M8 0.880859C3.6 0.880859 0 4.48086 0 8.88086C0 12.8809 2.9 16.1809 6.8 16.8809V11.2809H4.8V8.88086H6.8V7.18086C6.8 5.18086 8 4.08086 9.8 4.08086C10.7 4.08086 11.6 4.28086 11.6 4.28086V6.28086H10.6C9.6 6.28086 9.3 6.88086 9.3 7.58086V8.88086H11.5L11.1 11.1809H9.2V16.8809C13 16.2809 16 12.9809 16 8.88086C16 4.48086 12.4 0.880859 8 0.880859Z" fill="white" />
                                    </svg></a></li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

        </>
    )
}

export default Footer