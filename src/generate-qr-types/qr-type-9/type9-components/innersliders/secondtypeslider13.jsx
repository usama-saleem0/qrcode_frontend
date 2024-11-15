import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { Col, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";

import typeproduct from "../../../../img/type_product_svg.svg";
import typeshop from "../../../../img/type_shop.svg";
import typesoftware from "../../../../img/type_software.svg";
import typerestaurent from "../../../../img/type_restaurent.svg";
import typengo from "../../../../img/type_ongs.svg";
import pdfinnerimg1 from "../../../../img/mdm1.png";
import pdfinnerimg2 from "../../../../img/mdm2.png";
import pdfinnerimg3 from "../../../../img/mdm3.png";
import pdfinnerimg4 from "../../../../img/mdm4.png";
import pdfinnerimg5 from "../../../../img/mdm5.png";
import pdfinnerimg6 from "../../../../img/mdm6.png";

const Secondtypeslider13 = ({ handleregister }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const { t } = useTranslation();

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
              <p>{t("ar_126")}</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="list_icon_imgtxt">
              <div className="list_icon_img">
                <img src={typeshop} alt="" />
              </div>
              <p>{t("ar_127")}</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="list_icon_imgtxt">
              <div className="list_icon_img">
                <img src={typesoftware} alt="" />
              </div>
              <p>{t("ar_128")}</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="list_icon_imgtxt">
              <div className="list_icon_img">
                <img src={typerestaurent} alt="" />
              </div>
              <p>{t("ar_129")}</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="list_icon_imgtxt">
              <div className="list_icon_img">
                <img src={typengo} alt="" />
              </div>
              <p>{t("ar_130")}</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="list_icon_imgtxt">
              <div className="list_icon_img">
                <img src={typengo} alt="" />
              </div>
              <p>{t("ar_131")}</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="list_icon_imgtxt">
              <div className="list_icon_img">
                <img src={typengo} alt="" />
              </div>
              <p>{t("ar_132")}</p>
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
              <div className="slider_mob_mainbox mx-bg1 new-bgm1">
                <div className="slider_mob_bg_box centre-imger">
                  <img src={pdfinnerimg1} alt="QR Code Example" />
                </div>
              </div>
            </Col>
            <Col lg={6} className="p-0">
              <div className="slider_mob_textbox websiteqr_txt">
                <h3>{t("ar_133")}</h3>
                <p>{t("ar_134")}</p>
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
              <div className="slider_mob_mainbox mx-bg1 new-bgm2">
                <div className="slider_mob_bg_box centre-imger">
                  <img src={pdfinnerimg2} alt="QR Code Example" />
                </div>
              </div>
            </Col>
            <Col lg={6} className="p-0">
              <div className="slider_mob_textbox websiteqr_txt">
                <h3>{t("ar_135")}</h3>
                <p>{t("ar_136")}</p>
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
              <div className="slider_mob_mainbox mx-bg1 new-bgm3">
                <div className="slider_mob_bg_box centre-imger">
                  <img src={pdfinnerimg3} alt="QR Code Example" />
                </div>
              </div>
            </Col>
            <Col lg={6} className="p-0">
              <div className="slider_mob_textbox websiteqr_txt">
                <h3>{t("ar_137")}</h3>
                <p>{t("ar_138")}</p>
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
              <div className="slider_mob_mainbox mx-bg1 new-bgm4">
                <div className="slider_mob_bg_box centre-imger">
                  <img src={pdfinnerimg4} alt="QR Code Example" />
                </div>
              </div>
            </Col>
            <Col lg={6} className="p-0">
              <div className="slider_mob_textbox websiteqr_txt">
                <h3>{t("ar_139")}</h3>
                <p>{t("ar_140")}</p>
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
              <div className="slider_mob_mainbox mx-bg1 new-bgm5">
                <div className="slider_mob_bg_box centre-imger">
                  <img src={pdfinnerimg5} alt="QR Code Example" />
                </div>
              </div>
            </Col>
            <Col lg={6} className="p-0">
              <div className="slider_mob_textbox websiteqr_txt">
                <h3>{t("ar_141")}</h3>
                <p>{t("ar_142")}</p>
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
              <div className="slider_mob_mainbox mx-bg1 new-bgm6">
                <div className="slider_mob_bg_box centre-imger">
                  <img src={pdfinnerimg6} alt="QR Code Example" />
                </div>
              </div>
            </Col>
            <Col lg={6} className="p-0">
              <div className="slider_mob_textbox websiteqr_txt">
                <h3>{t("ar_143")}</h3>
                <p>{t("ar_144")}</p>
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

export default Secondtypeslider13;
