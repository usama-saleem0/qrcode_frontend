import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { Col, Container, Row } from "react-bootstrap";
import qrcodegenerate from "../../img/banner-01-B29KB4oe.webp";
import qrpersonlize from "../../img/banner-02-D_rXjLOK.webp";
import qrflexibility from "../../img/banner-03-DY5C3Abr.webp";
import Convenience from "../../img/banner-04-BckFybvz.webp";
import qrupdate from "../../img/banner-05-ZQKz3SjQ.webp";
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
                <h4>{t("ar_10")}</h4>
                <p>{t("ar_11")}</p>
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
                <h6>{t("ar_12")}</h6>
                <h3>{t("ar_13")}</h3>
                <p>{t("ar_14")}</p>
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
                <h6>{t("ar_15")}</h6>
                <h3>{t("ar_16")}</h3>
                <p>{t("ar_17")}</p>
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
                <h6>{t("ar_18")}</h6>
                <h3>{t("ar_19")}</h3>
                <p>{t("ar_20")}</p>
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
                <h6>{t("ar_21")}</h6>
                <h3>{t("ar_22")}</h3>
                <p>{t("ar_23")}</p>
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

      {/* 
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
                <h6>To update</h6>
                <h3>Don't worry about making mistakes</h3>
                <p>
                  Customize your landing page with confidence: Any information
                  can be modified, deleted or replaced at any time, without
                  recreating a new QR code.
                </p>
                <a href="#" onClick={handleregister}>
                  Generate QR code <FaArrowRight />
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </section> */}
    </>
  );
};

export default Threetypesec;
