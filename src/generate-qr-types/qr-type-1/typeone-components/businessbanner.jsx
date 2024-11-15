import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { IoChevronForwardSharp } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa6";
import pgmobinner from "../../../img/mockup_business_preview.webp";
import { useTranslation } from "react-i18next";

const Businesshomebanner = ({ handleregister }) => {
  const { t } = useTranslation();
  return (
    <section
      className="type_first_sec"
      style={{
        background:
          "linear-gradient(332deg, rgb(145 89 44) 0%, rgba(238, 85, 88, 0) 58.35%)",
      }}
    >
      <Container>
        <Row>
          <Col lg={6}>
            <div className="typepg_breadscrum">
              <a href="#">{t("ar_24")}</a>
              <span>
                <IoChevronForwardSharp />
              </span>
              <a href="#">{t("ar_25")}</a>
              <span>
                <IoChevronForwardSharp />
              </span>
              <a href="#">{t("ar_26")}</a>
            </div>
            <div className="type_first_sec_txt">
              <h6>{t("ar_27")}</h6>
              <h2>
                {t("ar_28")} <span>{t("ar_advertising")}</span>
              </h2>
              <p>{t("ar_business_info_description")}</p>
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
  );
};

export default Businesshomebanner;
