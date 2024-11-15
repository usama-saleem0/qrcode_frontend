import React from "react";

import Header from "../header/header";

import Footer from "../Footer/Footer";
import pgmobinner from "../img/mob_inner_img.png";
import unlimitedsvg from "../img/unlimited_svg.svg";
import variatyqrtypes from "../img/variable_svg.svg";
import varietydownload from "../img/variety_download_svg.svg";
import unlimitedmember from "../img/unlimited_member.svg";
import completeanlytics from "../img/complete_analytics.svg";
import editingqr from "../img/editing_qr.svg";
import premiumsupport from "../img/premium_support.svg";
import cancelwhenever from "../img/cancel_whenever.svg";
import customdomain from "../img/custom_domain.svg";
import { Col, Container, Row } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa6";
import { IoChevronForwardSharp } from "react-icons/io5";

import h1 from "../img/td1.webp";
import h2 from "../img/td2.webp";
import h3 from "../img/td3.webp";
import h4 from "../img/td4.webp";
import h5 from "../img/td5.webp";
import h6 from "../img/td6.webp";
import h7 from "../img/td7.webp";
import h8 from "../img/td8.webp";
import l1 from "../img/illustration-BZ0Rl6n6.webp";
import l2 from "../img/banner-01-D4jJ_vTF.webp";
import l3 from "../img/banner-02-B7b1GvG5.webp";
import l4 from "../img/banner-03-CfRzazJz.webp";
import l5 from "../img/banner-04-CqHFBbrE.webp";
import l7 from "../img/banner-05-08bV7Uzl.webp";
import l8 from "../img/banner-06-Kz0xPbZp.webp";
import mobilh from "../img/mobilh.png";
import All_Plans from "../Businessz/All_Plans";
import { useTranslation } from 'react-i18next';

const Web2 = () => {
  let gre = {
    background:
      " linear-gradient(332deg, rgb(49, 211, 179) 0%, rgba(49, 211, 179, 0) 42.59%)",
  };
  const { t } = useTranslation();

  return (
    <>
      <Header />

      <section style={gre} className="type_first_sec kd29">
  <Container>
    <Row className="hello-row">
      <Col lg={8}>
        <div className="typepg_breadscrum">
          <a href="#">{t('homepage_NB')}</a>
          <span>
            <IoChevronForwardSharp />
          </span>
          <a href="#">{t('business_NB')}</a>
          <span>
            <IoChevronForwardSharp />
          </span>
          <a href="#">{t('Nonprofit_NB')}</a>
        </div>
        <div className="type_first_sec_txt">
          <h2>{t('QR_Codes_for_NGOs_KK')}</h2>
          <p className="total-spaas">
            {t('By_integrating_QR_codes_into_your_charity_KK')}
          </p>
          <a href="#">{t('Get_started_now_KK')}</a>
        </div>
      </Col>
      <Col lg={3}>
        <div className="mobilh-img-box">
          <img src={mobilh} alt="" />
        </div>
      </Col>
    </Row>
  </Container>
</section>
<section className="create_type_sec">
  <Container>
    <Row>
      <Col lg={6}>
        <div className="create_type_txt">
          <h3>{t('Discover_Save_Native_Birds_KK')}</h3>
          <p>{t('Save_Native_Birds_description_KK')}</p>
        </div>
      </Col>
      <Col lg={6}>
        <div className="create_type_img-1 more-left">
          <img src={l1} alt="" />
        </div>
      </Col>
    </Row>
  </Container>
</section>
<section className="create_type_sec">
  <Container>
    <Row>
      <Col lg={6}>
        <div className="create_type_img-1">
          <img src={l2} alt="" />
        </div>
      </Col>
      <Col lg={6}>
        <div className="create_type_txt">
          <h6>{t('URL_QR_Code_KK')}</h6>
          <h3>{t('Boost_your_Donation_Campaign_KK')}</h3>
          <p>{t('Incorporate_the_QR_Code_in_printed_materials_KK')}</p>
          <div className="more-end-btn-box">
            <button className="hello-cr">{t('Create_QR_code_KK')}</button>
            <button className="More-Info">{t('More_Info_KK')}</button>
          </div>
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
          <h6>{t('PDF_QR_Code_KK')}</h6>
          <h3>{t('Enhance_Communication_and_Updates_KK')}</h3>
          <p>{t('Revolutionize_the_way_your_nonprofit_communicates_KK')}</p>
          <div className="more-end-btn-box">
            <button className="hello-cr">{t('Create_QR_code_KK')}</button>
            <button className="More-Info">{t('More_Info_KK')}</button>
          </div>
        </div>
      </Col>
      <Col lg={6}>
        <div className="create_type_img-1 more-left">
          <img src={l3} alt="" />
        </div>
      </Col>
    </Row>
  </Container>
</section>
<section className="create_type_sec">
  <Container>
    <Row>
      <Col lg={6}>
        <div className="create_type_img-1">
          <img src={l4} alt="" />
        </div>
      </Col>
      <Col lg={6}>
        <div className="create_type_txt">
          <h6>{t('Video_QR_Code_KK')}</h6>
          <h3>{t('Amplify_the_impact_of_your_NGO_KK')}</h3>
          <p>{t('Use_the_Video_QR_Code_as_an_effective_channel_KK')}</p>
          <div className="more-end-btn-box">
            <button className="hello-cr">{t('Create_QR_code_KK')}</button>
            <button className="More-Info">{t('More_Info_KK')}</button>
          </div>
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
          <h6>{t('QRfy_KK')}</h6>
          <h3>{t('Create_manage_and_monitor_your_QR_codes_KK')}</h3>
          <p>{t('Design_impressive_QR_codes_to_suit_you_KK')}</p>
          <div className="more-end-btn-box">
            <button className="hello-cr">{t('Create_QR_code_KK')}</button>
            <button className="More-Info">{t('More_Info_KK')}</button>
          </div>
        </div>
      </Col>
      <Col lg={6}>
        <div className="create_type_img-1 more-left">
          <img src={h5} alt="" />
        </div>
      </Col>
    </Row>
  </Container>
</section>
<section className="personalize_type_sec">
  <Container>
    <Row>
      <Col lg={6}>
        <div className="create_type_img-1">
          <img src={l5} alt="" />
        </div>
      </Col>
      <Col lg={6}>
        <div className="create_type_txt">
          <h6>{t('Feedback_QR_Code_KK')}</h6>
          <h3>{t('Boost_interaction_with_your_cause_KK')}</h3>
          <p>{t('Evaluating_the_effectiveness_of_fundraising_strategies_KK')}</p>
          <div className="more-end-btn-box">
            <button className="hello-cr">{t('Create_QR_code_KK')}</button>
            <button className="More-Info">{t('More_Info_KK')}</button>
          </div>
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
          <h6>{t('Vcard_QR_Code_KK')}</h6>
          <h3>{t('Simplify_the_connection_KK')}</h3>
          <p>{t('Implement_the_vCard_QR_Code_on_your_business_cards_KK')}</p>
          <div className="more-end-btn-box">
            <button className="hello-cr">{t('Create_QR_code_KK')}</button>
            <button className="More-Info">{t('More_Info_KK')}</button>
          </div>
        </div>
      </Col>
      <Col lg={6}>
        <div className="create_type_img-1 more-left">
          <img src={l7} alt="" />
        </div>
      </Col>
    </Row>
  </Container>
</section>
<section className="personalize_type_sec">
  <Container>
    <Row>
      <Col lg={6}>
        <div className="create_type_img-1">
          <img src={l8} alt="" />
        </div>
      </Col>
      <Col lg={6}>
        <div className="create_type_txt">
          <h6>{t('Link_Listing_QR_Code_KK')}</h6>
          <h3>{t('Strengthen_your_online_presence_KK')}</h3>
          <p>{t('Make_it_easier_to_connect_with_your_audience_KK')}</p>
          <div className="more-end-btn-box">
            <button className="hello-cr">{t('Create_QR_code_KK')}</button>
            <button className="More-Info">{t('More_Info_KK')}</button>
          </div>
        </div>
      </Col>
    </Row>
  </Container>
</section>

<All_Plans/>
      <Footer />
    </>
  );
};

export default Web2;
