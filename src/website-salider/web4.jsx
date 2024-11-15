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
import l1 from "../img/illustration-DB2G5UpJ.webp";
import l2 from "../img/banner-01-DTw5Oa_s.webp";
import l3 from "../img/banner-02-NSVsMCCP.webp";
import l4 from "../img/banner-03-BCwgXbDy.webp";
import l5 from "../img/banner-04-B59CBDy1.webp";
import l7 from "../img/banner-05-qN1X41_y.webp";
import l8 from "../img/banner-06-CB8p6u8R.webp";
import mobilh from "../img/mobilh.png";
import { useTranslation } from 'react-i18next';
import All_Plans from "../Businessz/All_Plans";

const Web4 = () => {
  let gre = {
    background:
      "linear-gradient(332deg, rgb(140, 177, 28) 0%, rgba(255, 255, 255, 0) 42.59%)",
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
                <a href="#">{t('Business_bk2')}</a>
              </div>
              <div className="type_first_sec_txt">
                <h2>{t('QRCodesForHomeRepairServicesNB')}</h2>
                <p className="total-spaas">
                  {t('Implementing_QR_codes_fitness_wellness')}
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
                <h3>{t('Discover_bk')}</h3>
                <p>
                  {t('Even_if_4x4_Training_bk')}
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
                <h6>{t('Link_Listing_bk')}</h6>
                <h3>{t('Expand_bk')}</h3>
                <p>
                  {t('Placing_QR_code_on_promo_bk')}
                </p>
                <div className="more-end-btn-box">
                  <button className='hello-cr'>{t('Create_bk')} </button>
                  <button className='More-Info'>{t('More_bk')}</button>
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
                <h6>{t('Video_bk')}</h6>

                <h3>{t('Attract_bk')}</h3>
                <p>
                  {t('Group_class_launch_preview_bk')}
                </p>
                <div className="more-end-btn-box">
                  <button className='hello-cr'>{t('Create_bk')} </button>
                  <button className='More-Info'>{t('More_bk')}</button>
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
                <h6>{t('Coupon_bk')}</h6>
                <h3>{t('Promotions_bk')}</h3>
                <p>
                  {t('QR_code_large_advertisements_bk')}
                </p>

                <div className="more-end-btn-box">
                  <button className='hello-cr'>{t('Create_bk')} </button>
                  <button className='More-Info'>{t('More_bk')}</button>
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
                <h6>{t('QRfy_bk')}</h6>
                <h3>{t('Create_manage_bk')}</h3>
                <p>{t('Design_impressive_bk')}</p>
                <div className="more-end-btn-box">
                  <button className='hello-cr'>{t('Create_bk')}</button>
                  <button className='More-Info'>{t('More_bk')}</button>
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
                <h6>{t('Feedback_QR_bk')}</h6>
                <h3>{t('Collect_ratings_bk')}</h3>
                <p>
                  {t('Feedback_QR_code_bk')}
                </p>

                <div className="more-end-btn-box">
                  <button className='hello-cr'>{t('Create_bk')} </button>
                  <button className='More-Info'>{t('More_bk')}</button>
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
                <h6>{t('Applications_QR_bk')}</h6>
                <h3>{t('Increase_your_bk')}</h3>
                <p>{t('Make_your_how_bk')}</p>
                <div className="more-end-btn-box">
                  <button className='hello-cr'>{t('Create_bk')} </button>
                  <button className='More-Info'>{t('More_bk')}</button>
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
                <h6>{t('Business_QR_bk')}</h6>
                <h3>{t('Get_new_contacts_bk')}</h3>
                <p>{t('Include_QR_bk')}</p>
                <div className="more-end-btn-box">
                  <button className='hello-cr'>{t('Create_bk')} </button>
                  <button className='More-Info'>{t('More_bk')}</button>
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

export default Web4;
