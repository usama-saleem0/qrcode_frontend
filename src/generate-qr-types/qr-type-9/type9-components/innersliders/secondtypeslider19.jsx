import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { Col, Row } from "react-bootstrap";
import typeproduct from "../../../../img/type_product_svg.svg";
import typeshop from "../../../../img/type_shop.svg";
import typesoftware from "../../../../img/type_software.svg";
import typerestaurent from "../../../../img/type_restaurent.svg";
import typengo from "../../../../img/type_ongs.svg";
import typefinance from "../../../../img/type_finance.svg";
import pdfinnerimg1 from "../../../../img/mdjp1.png";
import pdfinnerimg2 from "../../../../img/mdjp2.png";
import pdfinnerimg3 from "../../../../img/mdjp3.png";
import pdfinnerimg4 from "../../../../img/mdjp4.png";
import pdfinnerimg5 from "../../../../img/mdjp5.png";
import { useTranslation } from "react-i18next";

const Secondtypeslider19 = ({ handleregister }) => {
  const { t } = useTranslation();
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode
        watchSlidesProgress
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        <div className="upparsmall_card_slider">
          <SwiperSlide>
            <div className="list_icon_imgtxt">
              <div className="list_icon_img">
                <img src={typeproduct} alt="" />
              </div>
              <p>{t("ar_72")}</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="list_icon_imgtxt">
              <div className="list_icon_img">
                <img src={typeshop} alt="" />
              </div>
              <p>{t("ar_73")}</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="list_icon_imgtxt">
              <div className="list_icon_img">
                <img src={typesoftware} alt="" />
              </div>
              <p>{t("ar_74")}</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="list_icon_imgtxt">
              <div className="list_icon_img">
                <img src={typerestaurent} alt="" />
              </div>
              <p>{t("ar_75")}</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="list_icon_imgtxt">
              <div className="list_icon_img">
                <img src={typengo} alt="" />
              </div>
              <p>{t("ar_76")}</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="list_icon_imgtxt">
              <div className="list_icon_img">
                <img src={typengo} alt="" />
              </div>
              <p>{t("ar_77")}</p>
            </div>
          </SwiperSlide>
        </div>
      </Swiper>

      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        spaceBetween={10}
        navigation={true}
        thumbs={thumbsSwiper ? { swiper: thumbsSwiper } : undefined}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        <SwiperSlide>
          <Row>
            <Col lg={6} className="p-0">
              <div className="slider_mob_mainbox mx-bg1 new-bgjp1">
                <div className="slider_mob_bg_box centre-imger">
                  <img src={pdfinnerimg1} alt="QR Code Example" />
                </div>
              </div>
            </Col>
            <Col lg={6} className="p-0">
              <div className="slider_mob_textbox websiteqr_txt">
                <h3>{t("ar_78")}</h3>
                <p>{t("ar_79")}</p>
                <div className="create_btns">
                  <a href="#" onClick={handleregister}>
                    {t("ar_create_qr_code")}
                  </a>
                  <a href="#" className="create_more_info">
                    {t("ar_more_info")}
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </SwiperSlide>
        <SwiperSlide>
          <Row>
            <Col lg={6} className="p-0">
              <div className="slider_mob_mainbox mx-bg1 new-bgjp2">
                <div className="slider_mob_bg_box centre-imger">
                  <img src={pdfinnerimg2} alt="QR Code Example" />
                </div>
              </div>
            </Col>
            <Col lg={6} className="p-0">
              <div className="slider_mob_textbox websiteqr_txt">
                <h3>{t("ar_80")}</h3>
                <p>{t("ar_81")}</p>
                <div className="create_btns">
                  <a href="#" onClick={handleregister}>
                    {t("ar_create_qr_code")}
                  </a>
                  <a href="#" className="create_more_info">
                    {t("ar_more_info")}
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </SwiperSlide>
        <SwiperSlide>
          <Row>
            <Col lg={6} className="p-0">
              <div className="slider_mob_mainbox mx-bg1 new-bgjp3">
                <div className="slider_mob_bg_box centre-imger">
                  <img src={pdfinnerimg3} alt="QR Code Example" />
                </div>
              </div>
            </Col>
            <Col lg={6} className="p-0">
              <div className="slider_mob_textbox websiteqr_txt">
                <h3>{t("ar_82")}</h3>
                <p>{t("ar_83")}</p>
                <div className="create_btns">
                  <a href="#" onClick={handleregister}>
                    {t("ar_create_qr_code")}
                  </a>
                  <a href="#" className="create_more_info">
                    {t("ar_more_info")}
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </SwiperSlide>
        <SwiperSlide>
          <Row>
            <Col lg={6} className="p-0">
              <div className="slider_mob_mainbox mx-bg1 new-bgjp4">
                <div className="slider_mob_bg_box centre-imger">
                  <img src={pdfinnerimg4} alt="QR Code Example" />
                </div>
              </div>
            </Col>
            <Col lg={6} className="p-0">
              <div className="slider_mob_textbox websiteqr_txt">
                <h3>{t("ar_84")}</h3>
                <p>{t("ar_85")}</p>
                <div className="create_btns">
                  <a href="#" onClick={handleregister}>
                    {t("ar_create_qr_code")}
                  </a>
                  <a href="#" className="create_more_info">
                    {t("ar_more_info")}
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </SwiperSlide>
        <SwiperSlide>
          <Row>
            <Col lg={6} className="p-0">
              <div className="slider_mob_mainbox mx-bg1 new-bgjp5">
                <div className="slider_mob_bg_box centre-imger">
                  <img src={pdfinnerimg5} alt="QR Code Example" />
                </div>
              </div>
            </Col>
            <Col lg={6} className="p-0">
              <div className="slider_mob_textbox websiteqr_txt">
                <h3>{t("ar_86")}</h3>
                <p>{t("ar_87")}</p>
                <div className="create_btns">
                  <a href="#" onClick={handleregister}>
                    {t("ar_create_qr_code")}
                  </a>
                  <a href="#" className="create_more_info">
                    {t("ar_more_info")}
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Secondtypeslider19;
