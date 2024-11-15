import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { Col, Container, Row } from "react-bootstrap";
import qrcodegenerate from "../../../img/banner-01-BGGypF6M.webp";
import qrpersonlize from "../../../img/banner-02-BeJU_qgy.webp";
import qrflexibility from "../../../img/banner-03-BqvJvPpb.webp";
import Convenience from "../../../img/banner-04-BIJJJvgq.webp";
import qrupdate from "../../../img/banner-05-CiveJEMg.webp";
import { useTranslation } from "react-i18next";

const Threetypesec = ({ handleregister }) => {
  const { t } = useTranslation();

  return (
    <>
      <section className="three_types_sec">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="three_types_sec_head">
                <h4>{t("ar_bring_your_ideas_h4")}</h4>
                <p>{t("ar_create_personalize_attract_p")}</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <div className="second_type_sec_head">
        <h2>{t("ar_learn_about_uses_h2")}</h2>
        <p>{t("ar_industry_reach_p")}</p>
      </div>

      <section className="create_type_sec">
        <Container>
          <Row>
            <Col lg={6}>
              <div className="create_type_img">
                <img src={qrcodegenerate} alt={t("ar_qr_code_generate_alt")} />
              </div>
            </Col>
            <Col lg={6}>
              <div className="create_type_txt">
                <h6>{t("ar_create_h6")}</h6>
                <h3>{t("ar_show_coupon_discount_h3")}</h3>
                <p>{t("ar_best_strategy_p")}</p>
                <a href="#" onClick={handleregister}>
                  {t("ar_generate_qr_code")} <FaArrowRight />
                </a>
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
                <h6>{t("ar_personalize_h6")}</h6>
                <h3>{t("ar_personal_touch_h3")}</h3>
                <p>{t("ar_customize_coupon_p")}</p>
                <a href="#" onClick={handleregister}>
                  {t("ar_generate_qr_code")} <FaArrowRight />
                </a>
              </div>
            </Col>
            <Col lg={6}>
              <div className="create_type_img">
                <img src={qrpersonlize} alt={t("ar_qr_personalize_alt")} />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="create_type_sec">
        <Container>
          <Row>
            <Col lg={6}>
              <div className="create_type_img">
                <img src={qrflexibility} alt={t("ar_qr_flexibility_alt")} />
              </div>
            </Col>
            <Col lg={6}>
              <div className="create_type_txt">
                <h6>{t("ar_flexibility_h6")}</h6>
                <h3>{t("ar_available_for_any_device_h3")}</h3>
                <p>{t("ar_qrfy_adapts_p")}</p>
                <a href="#" onClick={handleregister}>
                  {t("ar_generate_qr_code")} <FaArrowRight />
                </a>
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
                <h6>{t("ar_convenience_h6")}</h6>
                <h3>{t("ar_expand_your_clientele_h3")}</h3>
                <p>{t("ar_attract_new_customers_p")}</p>
                <a href="#" onClick={handleregister}>
                  {t("ar_generate_qr_code")} <FaArrowRight />
                </a>
              </div>
            </Col>
            <Col lg={6}>
              <div className="create_type_img">
                <img src={Convenience} alt={t("ar_qr_convenience_alt")} />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="create_type_sec">
        <Container>
          <Row>
            <Col lg={6}>
              <div className="create_type_img">
                <img src={qrupdate} alt={t("ar_qr_update_alt")} />
              </div>
            </Col>
            <Col lg={6}>
              <div className="create_type_txt">
                <h6>{t("ar_update_h6")}</h6>
                <h3>{t("ar_dont_worry_about_mistakes_h3")}</h3>
                <p>{t("ar_create_with_confidence_p")}</p>
                <a href="#" onClick={handleregister}>
                  {t("ar_generate_qr_code")} <FaArrowRight />
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Threetypesec;
