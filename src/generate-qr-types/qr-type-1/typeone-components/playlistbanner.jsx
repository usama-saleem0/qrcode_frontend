import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { IoChevronForwardSharp } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa6";
import pgmobinner from "../../../img/mockup_mp3_preview.png";
import { useTranslation } from "react-i18next";

const Playhomebanner = ({ handleregister }) => {
  const { t } = useTranslation();

  return (
    <>
      <section
        className="type_first_sec"
        style={{
          background:
            "linear-gradient(332deg, rgb(130 131 131) 0%, rgba(238, 85, 88, 0) 58.35%)",
        }}
      >
        <Container>
          <Row>
            <Col lg={6}>
              <div className="typepg_breadscrum">
                <a href="#">{t("ar_65")}</a>
                <span>
                  <IoChevronForwardSharp />
                </span>
                <a href="#">{t("ar_66")}</a>
                <span>
                  <IoChevronForwardSharp />
                </span>
                <a href="#">{t("ar_67")}</a>
              </div>
              <div className="type_first_sec_txt">
                <h6>{t("ar_68")}</h6>
                <h2>
                  {t("ar_69")} <span>{t("ar_70")}</span>
                </h2>
                <p>{t("ar_71")}</p>
                <a href="#" onClick={handleregister}>
                  {t("ar_create_qr_code")} <FaArrowRight />
                </a>
              </div>
            </Col>
            <Col lg={6}>
              <div className="website_qrcode_mob mobile-respon">
                <img src={pgmobinner} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Playhomebanner;
