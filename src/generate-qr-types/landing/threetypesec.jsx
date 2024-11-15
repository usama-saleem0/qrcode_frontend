import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { Col, Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import qrcodegenerate from "../../img/banner-01-C_kaTx6P.webp";
import qrpersonlize from "../../img/banner-02-8Y-hzzNv.webp";
import qrflexibility from "../../img/banner-03-B-YfJvG3.webp";
import Convenience from "../../img/banner-04--w9RH3iA.webp";

const Threetypesec = ({ handleregister }) => {
  const { t } = useTranslation();

  return (
    <>
      <section className="three_types_sec">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="three_types_sec_head">
                <h4>{t("ar_187")}</h4>
                <p>{t("ar_188")}</p>
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
                <h6>{t("ar_189")}</h6>
                <h3>{t("ar_190")}</h3>
                <p>{t("ar_191")}</p>
                <a href="#" onClick={handleregister}>
                  {t("ar_192")} <FaArrowRight />
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
                <h6>{t("ar_193")}</h6>
                <h3>{t("ar_194")}</h3>
                <p>{t("ar_195")}</p>
                <a href="#" onClick={handleregister}>
                  {t("ar_192")} <FaArrowRight />
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
                <h6>{t("ar_196")}</h6>
                <h3>{t("ar_197")}</h3>
                <p>{t("ar_198")}</p>
                <a href="#" onClick={handleregister}>
                  {t("ar_192")} <FaArrowRight />
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
                <h6>{t("ar_199")}</h6>
                <h3>{t("ar_200")}</h3>
                <p>{t("ar_201")}</p>
                <a href="#" onClick={handleregister}>
                  {t("ar_192")} <FaArrowRight />
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
