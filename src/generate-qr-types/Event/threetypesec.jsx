import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { Col, Container, Row } from "react-bootstrap";
import qrcodegenerate from "../../img/banner-01-CVecIeHa.webp";
import qrpersonlize from "../../img/banner-02-C_9x5wZZ.webp";
import qrflexibility from "../../img/banner-03-CW6kqsfp.webp";
import Convenience from "../../img/banner-04-GfABezFF.webp";
import qrupdate from "../../img/banner-05-BKRIr0vC.webp";
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
                <h4>{t("ar_109")}</h4>
                <p>{t("ar_110")}</p>
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
                <h6>{t("ar_111")}</h6>
                <h3>{t("ar_112")}</h3>
                <p>{t("ar_113")}</p>
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
                <h6>{t("ar_114")}</h6>
                <h3>{t("ar_115")}</h3>
                <p>{t("ar_116")}</p>
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
                <h6>{t("ar_117")}</h6>
                <h3>{t("ar_118")}</h3>
                <p>{t("ar_119")}</p>
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
                <h6>{t("ar_120")}</h6>
                <h3>{t("ar_121")}</h3>
                <p>{t("ar_122")}</p>
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
                <h6>{t("ar_123")}</h6>
                <h3>{t("ar_124")}</h3>
                <p>{t("ar_125")}</p>
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
