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
import pdfinnerimg1 from "../../../../img/mdjl1.png";
import pdfinnerimg2 from "../../../../img/mdjl2.png";
import pdfinnerimg3 from "../../../../img/mdjl3.png";
import pdfinnerimg4 from "../../../../img/mdjl4.png";
import pdfinnerimg5 from "../../../../img/mdjl5.png";
import pdfinnerimg6 from "../../../../img/mdjl6.png";
import { useTranslation } from "react-i18next";

const Secondtypeslider18 = ({ handleregister }) => {
  const { t } = useTranslation();
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode
        effect="fade"
        fadeEffect={{ crossFade: true }}
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
              <p>{t("ar_153")}</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="list_icon_imgtxt">
              <div className="list_icon_img">
                <img src={typeshop} alt="" />
              </div>
              <p>{t("ar_154")}</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="list_icon_imgtxt">
              <div className="list_icon_img">
                <img src={typesoftware} alt="" />
              </div>
              <p>{t("ar_155")}</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="list_icon_imgtxt">
              <div className="list_icon_img">
                <img src={typerestaurent} alt="" />
              </div>
              <p>{t("ar_156")}</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="list_icon_imgtxt">
              <div className="list_icon_img">
                <img src={typengo} alt="" />
              </div>
              <p>{t("ar_157")}</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="list_icon_imgtxt">
              <div className="list_icon_img">
                <img src={typengo} alt="" />
              </div>
              <p>{t("ar_158")}</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="list_icon_imgtxt">
              <div className="list_icon_img">
                <img src={typengo} alt="" />
              </div>
              <p>{t("ar_159")}</p>
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
              <div className="slider_mob_mainbox mx-bg1 new-bgjl1">
                <div className="slider_mob_bg_box centre-imger">
                  <img src={pdfinnerimg1} alt="QR Code Example" />
                </div>
              </div>
            </Col>
            <Col lg={6} className="p-0">
              <div className="slider_mob_textbox websiteqr_txt">
                <h3>{t("ar_160")}</h3>
                <p>{t("ar_161")}</p>
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
              <div className="slider_mob_mainbox mx-bg1 new-bgjl2">
                <div className="slider_mob_bg_box centre-imger">
                  <img src={pdfinnerimg2} alt="QR Code Example" />
                </div>
              </div>
            </Col>
            <Col lg={6} className="p-0">
              <div className="slider_mob_textbox websiteqr_txt">
                <h3>{t("ar_162")}</h3>
                <p>{t("ar_163")}</p>
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
              <div className="slider_mob_mainbox mx-bg1 new-bgjl3">
                <div className="slider_mob_bg_box centre-imger">
                  <img src={pdfinnerimg3} alt="QR Code Example" />
                </div>
              </div>
            </Col>
            <Col lg={6} className="p-0">
              <div className="slider_mob_textbox websiteqr_txt">
                <h3>{t("ar_164")}</h3>
                <p>{t("ar_165")}</p>
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
              <div className="slider_mob_mainbox mx-bg1 new-bgjl4">
                <div className="slider_mob_bg_box centre-imger">
                  <img src={pdfinnerimg4} alt="QR Code Example" />
                </div>
              </div>
            </Col>
            <Col lg={6} className="p-0">
              <div className="slider_mob_textbox websiteqr_txt">
                <h3>{t("ar_166")}</h3>
                <p>{t("ar_167")}</p>
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
              <div className="slider_mob_mainbox mx-bg1 new-bgjl5">
                <div className="slider_mob_bg_box centre-imger">
                  <img src={pdfinnerimg5} alt="QR Code Example" />
                </div>
              </div>
            </Col>
            <Col lg={6} className="p-0">
              <div className="slider_mob_textbox websiteqr_txt">
                <h3>{t("ar_168")}</h3>
                <p>{t("ar_169")}</p>
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
              <div className="slider_mob_mainbox mx-bg1 new-bgjl6">
                <div className="slider_mob_bg_box centre-imger">
                  <img src={pdfinnerimg6} alt="QR Code Example" />
                </div>
              </div>
            </Col>
            <Col lg={6} className="p-0">
              <div className="slider_mob_textbox websiteqr_txt">
                <h3>{t("ar_170")}</h3>
                <p>{t("ar_171")}</p>
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

export default Secondtypeslider18;
