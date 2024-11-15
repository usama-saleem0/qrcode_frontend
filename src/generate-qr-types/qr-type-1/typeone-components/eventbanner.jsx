import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { IoChevronForwardSharp } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa6";
import pgmobinner from "../../../img/mockup_images_preview.webp";
import { useTranslation } from "react-i18next";

const Eventhomebanner = ({ handleregister }) => {
  const { t } = useTranslation();

  return (
    <>
      <section
        className="type_first_sec"
        style={{
          background:
            "linear-gradient(332deg, rgb(128 123 91) 0%, rgba(238, 85, 88, 0) 58.35%)",
        }}
      >
        <Container>
          <Row>
            <Col lg={6}>
              <div className="typepg_breadscrum">
                <a href="#">{t("ar_102")}</a>
                <span>
                  <IoChevronForwardSharp />
                </span>
                <a href="#">{t("ar_103")}</a>
                <span>
                  <IoChevronForwardSharp />
                </span>
                <a href="#">{t("ar_104")}</a>
              </div>
              <div className="type_first_sec_txt">
                <h6>{t("ar_105")}</h6>
                <h2>
                  {t("ar_106")} <span>{t("ar_107")}</span>
                </h2>
                <p>{t("ar_108")}</p>
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

export default Eventhomebanner;
