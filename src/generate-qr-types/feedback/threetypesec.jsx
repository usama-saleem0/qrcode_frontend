import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { Col, Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import qrcodegenerate from "../../img/banner-01-lgc2zJbf.webp";
import qrpersonlize from "../../img/banner-02-Cjrz2RR4.webp";
import qrflexibility from "../../img/banner-03-DY00PNfJ.webp";
import Convenience from "../../img/banner-04-Ci-Pj22G.webp";

const Threetypesec = ({ handleregister }) => {
  const { t } = useTranslation();

  return (
    <>
      <section className="three_types_sec">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="three_types_sec_head">
                <h4>{t("ar_172")}</h4>
                <p>{t("ar_173")}</p>
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
                <h6>{t("ar_174")}</h6>
                <h3>{t("ar_175")}</h3>
                <p>{t("ar_176")}</p>
                <a href="#" onClick={handleregister}>
                  {t("ar_177")} <FaArrowRight />
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
                <h6>{t("ar_178")}</h6>
                <h3>{t("ar_179")}</h3>
                <p>{t("ar_180")}</p>
                <a href="#" onClick={handleregister}>
                  {t("ar_177")} <FaArrowRight />
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
                <h6>{t("ar_181")}</h6>
                <h3>{t("ar_182")}</h3>
                <p>{t("ar_183")}</p>
                <a href="#" onClick={handleregister}>
                  {t("ar_177")} <FaArrowRight />
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
                <h6>{t("ar_184")}</h6>
                <h3>{t("ar_185")}</h3>
                <p>{t("ar_186")}</p>
                <a href="#" onClick={handleregister}>
                  {t("ar_177")} <FaArrowRight />
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
    </>
  );
};

export default Threetypesec;
