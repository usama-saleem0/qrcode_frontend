import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { IoChevronForwardSharp } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa6";
import { useTranslation } from 'react-i18next';
import pgmobinner from "../../../img/vcard.png";

const Firsttypesec4 = ({ handleregister }) => {
  const { t } = useTranslation();

  return (
    <>
      <section
        className="type_first_sec"
        style={{
          background: 'linear-gradient(332deg, rgb(255, 107, 108) 0%, rgba(255, 107, 108, 0) 58.35%)'
        }}
      >
        <Container>
          <Row>
            <Col lg={6}>
              <div className="typepg_breadscrum">
                <a href="#">{t('NB_homepage')}</a>
                <span><IoChevronForwardSharp /></span>
                <a href="#">{t('NB_types_of_qr')}</a>
                <span><IoChevronForwardSharp /></span>
                <a href="#">{t('NB_website')}</a>
              </div>
              <div className="type_first_sec_txt">
                <h6>{t('NB_generate_vcard_qr')}</h6>
                <h2>{t('NB_share_business_card')} <span>{t('NB_business_card')}</span></h2>
                <p>{t('NB_new_way_to_share_contact')}</p>
                <a href="#" onClick={handleregister}>{t('NB_create_qr')} <FaArrowRight /></a>
              </div>
            </Col>
            <Col lg={6}>
              <div className="website_qrcode_mob  mobile-respon">
                <img src={pgmobinner} alt={t('NB_vcard_image_alt')} />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Firsttypesec4;
