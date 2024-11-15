import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { Col, Container, Row } from "react-bootstrap";
import qrcodegenerate from "../../img/banner-01-44oYVIM4.webp";
import qrpersonlize from "../../img/banner-02-BIS2q2tS.webp";
import qrflexibility from "../../img/banner-03-BghAUh0e.webp";
import Convenience from "../../img/banner-04-CKTsscAq.webp";
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
                <h4>{t("ar_48")}</h4>
                <p>{t("ar_49")}</p>
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
                <h6>{t("ar_50")}</h6>
                <h3>{t("ar_51")}</h3>
                <p>{t("ar_52")}</p>
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
                <h6>{t("ar_53")}</h6>
                <h3>{t("ar_54")}</h3>
                <p>{t("ar_55")}</p>
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
                <h6>{t("ar_56")}</h6>
                <h3>{t("ar_57")}</h3>
                <p>{t("ar_58")}</p>
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
                <h6>{t("ar_59")}</h6>
                <h3>{t("ar_60")}</h3>
                <p>{t("ar_61")}</p>
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
                <h6>{t("ar_62")}</h6>
                <h3>{t("ar_63")}</h3>
                <p>{t("ar_64")}</p>
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
