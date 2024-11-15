import React from 'react';
import { FaArrowRight } from "react-icons/fa6";
import { Col, Container, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import qrcodegenerate from "../../../img/banner-01-Bc9VCeCd.webp";
import qrpersonlize from "../../../img/banner-02-6aUeJEBZ.webp";
import qrflexibility from "../../../img/banner-03-BsgfDcX0.webp";
import qrupdate from "../../../img/banner-04-B9wejSrO.webp";

const Threetypesec1 = ({ handleregister }) => {
  const { t } = useTranslation();

  return (
    <>
      <section className="three_types_sec">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="three_types_sec_head">
                <h4>{t("NB_learn_about_uses_qrfy")}</h4>
                <p>{t("NB_get_new_followers")}</p>
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
                <img src={qrcodegenerate} alt={t("NB_image_alt_generate")} />
              </div>
            </Col>
            <Col lg={6}>
              <div className="create_type_txt">
                <h6>{t("NB_grow_in_networks")}</h6>
                <h3>{t("NB_create_campaign")}</h3>
                <p>{t("NB_social_media_qr")}</p>
                <a href="#" onClick={handleregister}>
                  {t("NB_generate_qr_code")} <FaArrowRight />
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
                <h6>{t("NB_personalize")}</h6>
                <h3>{t("NB_good_presentation")}</h3>
                <p>{t("NB_customize_landing_page")}</p>
                <a href="#" onClick={handleregister}>
                  {t("NB_generate_qr_code")} <FaArrowRight />
                </a>
              </div>
            </Col>
            <Col lg={6}>
              <div className="create_type_img">
                <img src={qrpersonlize} alt={t("NB_image_alt_personalize")} />
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
                <img src={qrflexibility} alt={t("NB_image_alt_flexibility")} />
              </div>
            </Col>
            <Col lg={6}>
              <div className="create_type_txt">
                <h6>{t("NB_flexibility")}</h6>
                <h3>{t("NB_qr_code_attractive_accessible")}</h3>
                <p>{t("NB_qrfy_flexible")}</p>
                <a href="#" onClick={handleregister}>
                  {t("NB_generate_qr_code")} <FaArrowRight />
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
                <h6>{t("NB_to_update")}</h6>
                <h3>{t("NB_dont_worry_mistakes")}</h3>
                <p>{t("NB_update_or_replace_info")}</p>
                <a href="#" onClick={handleregister}>
                  {t("NB_generate_qr_code")} <FaArrowRight />
                </a>
              </div>
            </Col>
            <Col lg={6}>
              <div className="create_type_img">
                <img src={qrupdate} alt={t("NB_image_alt_update")} />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Threetypesec1;
