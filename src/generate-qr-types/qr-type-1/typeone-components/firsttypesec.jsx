import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { IoChevronForwardSharp } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa6";
import pgmobinner from "../../../img/mob_inner_img.png";
import { useTranslation } from 'react-i18next';

const Firsttypesec = ({ handleregister }) => {
  const { t } = useTranslation();

  return (
    <section
      className="type_first_sec"
      style={{
        background: 'linear-gradient(332deg, rgb(238, 85, 88) 0%, rgba(238, 85, 88, 0) 58.35%)'
      }}
    >
      <Container>
        <Row>
          <Col lg={6}>
            <div className="typepg_breadscrum">
              <a href="#">{t('homepage')}</a>
              <span><IoChevronForwardSharp /></span>
              <a href="#">{t('typesOfQRCode')}</a>
              <span><IoChevronForwardSharp /></span>
              <a href="#">{t('website')}</a>
            </div>
            <div className="type_first_sec_txt">
              <h6>{t('createQRCodeForWebsite')}</h6>
              <h2>{t('shareWebsite')} <span>{t('website')}</span> {t('withCustomers')}</h2>
              <p>{t('accessLandingPage')}</p>
              <a href="#" onClick={handleregister}>{t('createQRCode')} <FaArrowRight /></a>
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
  );
};

export default Firsttypesec;
