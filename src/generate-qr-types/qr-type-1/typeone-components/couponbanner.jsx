import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { IoChevronForwardSharp } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa6";
import pgmobinner from "../../../img/mockup_coupon_preview.webp";
import { useTranslation } from "react-i18next";

const Couponbanner = ({ handleregister }) => {
  const { t } = useTranslation();

  return (
    <>
      <section
        className="type_first_sec"
        style={{
          background:
            "linear-gradient(332deg, rgb(255 52 52) 0%, rgba(238, 85, 88, 0) 58.35%)",
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
                <h6>{t("ar_create_a_qr_code_for_website_h6")}</h6>
                <h2>
                  {t("ar_increase_your_sales_with_a_qr_of_h2")}{" "}
                  <span>{t("ar_coupon_span")}</span>
                </h2>
                <p>{t("ar_discount_coupons_p")}</p>
                <a href="#" onClick={handleregister}>
                  {t("ar_create_qr_code_link")} <FaArrowRight />
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

export default Couponbanner;
