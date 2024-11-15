import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { Col, Container, Row } from "react-bootstrap";
import qrcodegenerate from "../../img/banner-01-Do5vS7Nv.webp";
import qrpersonlize from "../../img/banner-02-BeoNIncy.webp";
import qrflexibility from "../../img/banner-03-DJ8qiYb5.webp";
import Convenience from "../../img/banner-04-CIo2p6-N.webp";
import qrupdate from "../../img/banner-05-CiveJEMg.webp";
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
                <h4>{t("ar_88")}</h4>
                <p>{t("ar_89")}</p>
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
                <h6>{t("ar_90")}</h6>
                <h3>{t("ar_91")}</h3>
                <p>{t("ar_92")}</p>
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
                <h6>{t("ar_93")}</h6>
                <h3>{t("ar_94")}</h3>
                <p>{t("ar_95")}</p>
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
                <h6>{t("ar_96")}</h6>
                <h3>{t("ar_97")}</h3>
                <p>{t("ar_98")}</p>
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
                <h6>{t("ar_99")}</h6>
                <h3>{t("ar_100")}</h3>
                <p>{t("ar_101")}</p>
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
    </>
  );
};

export default Threetypesec;
