import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { IoChevronForwardSharp } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa6";
import { useTranslation } from "react-i18next";
import pgmobinner from "../../../img/mockup_mp3_preview.png";

const Mp3banner = ({ handleregister }) => {
  const { t } = useTranslation();

  return (
    <>
      <section
        className="type_first_sec"
        style={{
          background:
            "linear-gradient(332deg, rgb(127 153 148) 0%, rgba(238, 85, 88, 0) 58.35%)",
        }}
      >
        <Container>
          <Row>
            <Col lg={6}>
              <div className="typepg_breadscrum">
                <a href="#">{t("ar_homepage")}</a>
                <span>
                  <IoChevronForwardSharp />
                </span>
                <a href="#">{t("ar_types_of_qr_code")}</a>
                <span>
                  <IoChevronForwardSharp />
                </span>
                <a href="#">{t("ar_website")}</a>
              </div>
              <div className="type_first_sec_txt">
                <h6>{t("ar_create_qr_code_for_website")}</h6>
                <h2>
                  {t("ar_share_your_mp3_track_part1")}{" "}
                  <span>{t("ar_share_your_mp3_track_span")}</span>{" "}
                  {t("ar_share_your_mp3_track_part2")}
                </h2>
                <p>{t("ar_improve_your_advertising")}</p>
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

export default Mp3banner;
