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
import pdfinnerimg1 from "../../../../img/mda1.png";
import pdfinnerimg2 from "../../../../img/mda2.png";
import pdfinnerimg3 from "../../../../img/mda3.png";
import pdfinnerimg4 from "../../../../img/mda4.png";
import pdfinnerimg5 from "../../../../img/mda5.png";
import pdfinnerimg6 from "../../../../img/mda6.png";
import { useTranslation } from "react-i18next";

const Secondtypeslider15 = ({ handleregister }) => {
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
              <p>{t("ar_29")}</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="list_icon_imgtxt">
              <div className="list_icon_img">
                <img src={typeshop} alt="" />
              </div>
              <p>{t("ar_30")}</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="list_icon_imgtxt">
              <div className="list_icon_img">
                <img src={typesoftware} alt="" />
              </div>
              <p>{t("ar_31")}</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="list_icon_imgtxt">
              <div className="list_icon_img">
                <img src={typerestaurent} alt="" />
              </div>
              <p>{t("ar_32")}</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="list_icon_imgtxt">
              <div className="list_icon_img">
                <img src={typengo} alt="" />
              </div>
              <p>{t("ar_33")}</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="list_icon_imgtxt">
              <div className="list_icon_img">
                <img src={typengo} alt="" />
              </div>
              <p>{t("ar_34")}</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="list_icon_imgtxt">
              <div className="list_icon_img">
                <img src={typengo} alt="" />
              </div>
              <p>{t("ar_35")}</p>
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
              <div className="slider_mob_mainbox mx-bg1 new-bga1">
                <div className="slider_mob_bg_box centre-imger">
                  <img src={pdfinnerimg1} alt="QR Code Example" />
                </div>
              </div>
            </Col>
            <Col lg={6} className="p-0">
              <div className="slider_mob_textbox websiteqr_txt">
                <h3>{t("ar_36")}</h3>
                <p>{t("ar_37")}</p>
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
              <div className="slider_mob_mainbox mx-bg1 new-bga2">
                <div className="slider_mob_bg_box centre-imger">
                  <img src={pdfinnerimg2} alt="QR Code Example" />
                </div>
              </div>
            </Col>
            <Col lg={6} className="p-0">
              <div className="slider_mob_textbox websiteqr_txt">
                <h3>{t("ar_38")}</h3>
                <p>{t("ar_39")}</p>
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
              <div className="slider_mob_mainbox mx-bg1 new-bga3">
                <div className="slider_mob_bg_box centre-imger">
                  <img src={pdfinnerimg3} alt="QR Code Example" />
                </div>
              </div>
            </Col>
            <Col lg={6} className="p-0">
              <div className="slider_mob_textbox websiteqr_txt">
                <h3>{t("ar_40")}</h3>
                <p>{t("ar_41")}</p>
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
              <div className="slider_mob_mainbox mx-bg1 new-bga4">
                <div className="slider_mob_bg_box centre-imger">
                  <img src={pdfinnerimg4} alt="QR Code Example" />
                </div>
              </div>
            </Col>
            <Col lg={6} className="p-0">
              <div className="slider_mob_textbox websiteqr_txt">
                <h3>{t("ar_42")}</h3>
                <p>{t("ar_43")}</p>
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
              <div className="slider_mob_mainbox mx-bg1 new-bga5">
                <div className="slider_mob_bg_box centre-imger">
                  <img src={pdfinnerimg5} alt="QR Code Example" />
                </div>
              </div>
            </Col>
            <Col lg={6} className="p-0">
              <div className="slider_mob_textbox websiteqr_txt">
                <h3>{t("ar_44")}</h3>
                <p>{t("ar_45")}</p>
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
              <div className="slider_mob_mainbox mx-bg1 new-bga6">
                <div className="slider_mob_bg_box centre-imger">
                  <img src={pdfinnerimg6} alt="QR Code Example" />
                </div>
              </div>
            </Col>
            <Col lg={6} className="p-0">
              <div className="slider_mob_textbox websiteqr_txt">
                <h3>{t("ar_46")}</h3>
                <p>{t("ar_47")}</p>
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

export default Secondtypeslider15;
