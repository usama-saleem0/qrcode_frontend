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
import l1 from "../img/illustration-CEqlCqQE.webp";
import l2 from "../img/banner-01-DO_1KdQF.webp";
import l3 from "../img/banner-02-CUr9-STX.webp";
import l4 from "../img/banner-03-DgYWd_EX.webp";
import l5 from "../img/banner-04-hwCyKb_U.webp";
import l7 from "../img/banner-05-DSWU4wIK.webp";
import l8 from "../img/banner-06-1zT5V0BZ.webp"
import mobilh from "../img/mobilh.png";
import { useTranslation } from 'react-i18next';
import All_Plans from "../Businessz/All_Plans";

const Web1 = () => {
  const { t } = useTranslation();

  let gre = {
    background:
      "linear-gradient(332deg, rgb(129, 79, 112) 0%, rgba(131, 81, 93, 0) 42.59%)",
  };
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
                <a href="#">{t('consumer_goods_packaged')}</a>
              </div>
              <div className="type_first_sec_txt">
                <h2>{t('QR_Packaging_bk')}</h2>
                <p className="total-spaas">
                {t('Incorporating_QR_bk')}
                </p>
                <a href="#">{t('GetStartedNowNB')}</a>
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
                <h3>{t("Discover_ZenYog_bk")}</h3>
                <p>
                  {t("business_ZenYog_bk")}
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
          <h6>{t("PDF_QR_Code_HB")}</h6>
          <h3>{t("Maximize_the_consumer_experience_HB")}</h3>
          <p>
            {t("Boost_the_connection_between_your_customers_and_your_products_HB")}
          </p>
          <div className="more-end-btn-box">
            <button className="hello-cr">{t("Create_bk")}</button>
            <button className="More-Info">{t("More_bk")}</button>
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
          <h6>{t("Link_Listing_QR_Code_HB")}</h6>
          <h3>{t("Expand_your_presence_on_social_networks_HB")}</h3>
          <p>
            {t("Improve_the_connection_with_your_brand_HB")}
          </p>
          <div className="more-end-btn-box">
            <button className="hello-cr">{t("Create_bk")}</button>
            <button className="More-Info">{t("More_bk")}</button>
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
          <h6>{t("Event_QR_Code_HB")}</h6>
          <h3>{t("Promotes_responsible_consumption_HB")}</h3>
          <p>
            {t("Promotes_responsible_consumption_and_sustainable_habits_HB")}
          </p>
          <div className="more-end-btn-box">
            <button className="hello-cr">{t("Create_bk")}</button>
            <button className="More-Info">{t("More_bk")}</button>
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
          <h6>{t("QRfy_HB")}</h6>
          <h3>{t("Create_manage_and_monitor_your_QR_codes_HB")}</h3>
          <p>
            {t("Design_impressive_QR_codes_to_suit_you_HB")}
          </p>
          <div className="more-end-btn-box">
            <button className="hello-cr">{t("Create_bk")}</button>
            <button className="More-Info">{t("More_bk")}</button>
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
          <h6>{t("Video_QR_Code_HB")}</h6>
          <h3>{t("Highlight_your_product_with_unique_content_HB")}</h3>
          <p>
            {t("Highlight_the_uniqueness_of_your_brand_or_product_HB")}
          </p>
          <div className="more-end-btn-box">
            <button className="hello-cr">{t("Create_bk")}</button>
            <button className="More-Info">{t("More_bk")}</button>
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
          <h6>{t("Feedback_QR_Code_HB")}</h6>
          <h3>{t("Make_it_easy_for_your_customers_to_express_their_opinions_HB")}</h3>
          <p>
            {t("The_Feedback_QR_Code_simplifies_interaction_HB")}
          </p>
          <div className="more-end-btn-box">
            <button className="hello-cr">{t("Create_bk")}</button>
            <button className="More-Info">{t("More_bk")}</button>
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
          <h6>{t("URL_QR_Code_bk")}</h6>
          <h3>{t("Elevate_your_smart_packaging_strategy_HB")}</h3>
          <p>
            {t("The_Dynamic_URL_QR_Code_on_food_packaging_HB")}
          </p>
          <div className="more-end-btn-box">
            <button className="hello-cr">{t("Create_bk")}</button>
            <button className="More-Info">{t("More_bk")}</button>
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

export default Web1;
