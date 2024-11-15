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
import { useTranslation } from 'react-i18next';

import h1 from "../img/td1.webp";
import h2 from "../img/td2.webp";
import h3 from "../img/td3.webp";
import h4 from "../img/td4.webp";
import h5 from "../img/td5.webp";
import h6 from "../img/td6.webp";
import h7 from "../img/td7.webp";
import h8 from "../img/td8.webp";
import l1 from "../img/illustration-xZnb3dEP.webp";
import l2 from "../img/banner-01-B3WaynVB.webp";
import l3 from "../img/banner-02-DQSux-1-.webp";
import l4 from "../img/banner-03-C4vD5H4r.webp";
import l5 from "../img/banner-04-vw-RibcS.webp";
import l7 from "../img/banner-05-DkgNZe3w.webp";
import l8 from "../img/banner-06-Kz0xPbZp.webp";
import mobilh from "../img/mobilh.png";
import All_Plans from "../Businessz/All_Plans";
import { t } from "i18next";
const Web3 = () => {
  const { t } = useTranslation();
  let gre = {
    background:
      "linear-gradient(332deg, rgb(255, 230, 172) 0%, rgba(255, 230, 172, 0) 42.59%)",
  };
  return (
    <>
      <Header />

      <section style={gre} className="type_first_sec kd29">
        <Container>
          <Row className="hello-row">
            <Col lg={8}>
              <div className="typepg_breadscrum">
                <a href="#">{t('qrf_SA1')}</a>
                <span>
                  <IoChevronForwardSharp />
                </span>
                <a href="#">{t('qrf_SA2')}</a>
                <span>
                  <IoChevronForwardSharp />
                </span>
                <a href="#">{t('qrf_SA3')}</a>
              </div>
              <div className="type_first_sec_txt">
                <h2>{t('qrf_SA4')}</h2>
                <p className="total-spaas">
                 {t('qrf_SA5')}
                </p>
                <a href="#">{t('qrf_SA6')}</a>
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
                <h3>{t('qrf_SA7')}</h3>
                <p>
                 {t('qrf_SA8')}
                </p>
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
                <h6>{t('qrf_SA9')}</h6>
                <h3>{t('qrf_SA10')}</h3>
                <p>
                 {t('qrf_SA11')}
                </p>
                <div className="more-end-btn-box">
                  <button className="hello-cr">{t('qrf_SA12')}</button>
                  <button className="More-Info">{t('qrf_SA13')}</button>
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
                <h6>{t('qrf_SA14')}</h6>
                <h3>{t('qrf_SA15')}</h3>
                <p>
                 {t('qrf_SA16')}
                </p>
                <div className="more-end-btn-box">
                  <button className="hello-cr">{t('qrf_SA17')}</button>
                  <button className="More-Info">{t('qrf_SA18')}</button>
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
                <h6>{t('qrf_SA19')}</h6>
                <h3>{t('qrf_SA20')}</h3>
                <p>
                 {t('qrf_SA21')}
                </p>
                <div className="more-end-btn-box">
                  <button className="hello-cr">{t('qrf_SA22')}</button>
                  <button className="More-Info">{t('qrf_SA23')}</button>
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
                <h6>{t('qrf_SA24')}</h6>
                <h3>{t('qrf_SA25')}</h3>
                <p>
                 {t('qrf_SA26')}
                </p>
                <div className="more-end-btn-box">
                  <button className="hello-cr"> {t('qrf_SA27')}</button>
                  <button className="More-Info">{t('qrf_SA28')}</button>
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
                <h6>{t('qrf_SA29')}</h6>
                <h3>{t('qrf_SA30')}</h3>
                <p>
                {t('qrf_SA31')}
                </p>
                <div className="more-end-btn-box">
                  <button className="hello-cr">{t('qrf_SA32')}</button>
                  <button className="More-Info">{t('qrf_SA33')}</button>
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
                <h6>{t('qrf_SA34')}</h6>
                <h3>{t('qrf_SA35')}</h3>
                <p>
                 {t('qrf_SA36')}
                </p>
                <div className="more-end-btn-box">
                  <button className="hello-cr"> {t('qrf_SA37')}</button>
                  <button className="More-Info">{t('qrf_SA38')}</button>
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
      {/* <section className="personalize_type_sec">
        <Container>
          <Row>
            <Col lg={6}>
              <div className="create_type_img-1">
                <img src={l8} alt="" />
              </div>
            </Col>
            <Col lg={6}>
              <div className="create_type_txt">
                <h6>Link Listing QR Code</h6>
                <h3>Strengthen your online presence</h3>
                <p>
                  Make it easier to connect with your audience by incorporating
                  a Link Listing QR Code for your NGO. With a single scan, your
                  followers access all relevant platforms, from social networks
                  to online content, simplifying their interaction. Expand the
                  visibility of your organization, connect with new audiences,
                  and attract donors interested in your campaigns.
                </p>
                <div className="more-end-btn-box">
                  <button className="hello-cr"> Create QR code</button>
                  <button className="More-Info">More Info</button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section> */}

       <All_Plans/>
      <Footer />
    </>
  );
};

export default Web3;
