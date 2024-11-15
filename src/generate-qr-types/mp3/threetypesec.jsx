import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { Col, Container, Row } from "react-bootstrap";
import qrcodegenerate from "../../img/banner-01-DVEsdk1y.webp";
import qrpersonlize from "../../img/banner-02-Bd-D1Ugw.webp";
import qrflexibility from "../../img/banner-03-mrEp7ZR5.webp";
import Convenience from "../../img/banner-04-D1N4KFXI.webp";
import qrupdate from "../../img/banner-05-DPOl4Plv.webp";
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
                <h4>{t("ar_three_types_heading")}</h4>
                <p>{t("ar_three_types_description")}</p>
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
                <img src={qrcodegenerate} alt="" />
              </div>
            </Col>
            <Col lg={6}>
              <div className="create_type_txt">
                <h6>{t("ar_create_h6")}</h6>
                <h3>{t("ar_create_h3")}</h3>
                <p>{t("ar_create_description")}</p>
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
                <h3>{t("ar_personalize_h3")}</h3>
                <p>{t("ar_personalize_description")}</p>
                <a href="#" onClick={handleregister}>
                  {t("ar_generate_qr_code")} <FaArrowRight />
                </a>
              </div>
            </Col>
            <Col lg={6}>
              <div className="create_type_img">
                <img src={qrpersonlize} alt="" />
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
                <img src={qrflexibility} alt="" />
              </div>
            </Col>
            <Col lg={6}>
              <div className="create_type_txt">
                <h6>{t("ar_flexibility_h6")}</h6>
                <h3>{t("ar_flexibility_h3")}</h3>
                <p>{t("ar_flexibility_description")}</p>
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
                <h3>{t("ar_convenience_h3")}</h3>
                <p>{t("ar_convenience_description")}</p>
                <a href="#" onClick={handleregister}>
                  {t("ar_generate_qr_code")} <FaArrowRight />
                </a>
              </div>
            </Col>
            <Col lg={6}>
              <div className="create_type_img">
                <img src={Convenience} alt="" />
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
                <img src={qrupdate} alt="" />
              </div>
            </Col>
            <Col lg={6}>
              <div className="create_type_txt">
                <h6>{t("ar_update_h6")}</h6>
                <h3>{t("ar_update_h3")}</h3>
                <p>{t("ar_update_description")}</p>
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
