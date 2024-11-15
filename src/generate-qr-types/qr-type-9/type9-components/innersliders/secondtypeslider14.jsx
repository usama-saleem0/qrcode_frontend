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
import pdfinnerimg1 from "../../../../img/mdc1.png";
import pdfinnerimg2 from "../../../../img/mdc2.png";
import pdfinnerimg3 from "../../../../img/mdc3.png";
import pdfinnerimg4 from "../../../../img/mdc4.png";
import pdfinnerimg5 from "../../../../img/mdc5.png";
import pdfinnerimg6 from "../../../../img/mdc6.png";
import { useTranslation } from "react-i18next";

const Secondtypeslider14 = ({ handleregister }) => {
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
                <img src={typeproduct} alt={t("ar_restaurants")} />
              </div>
              <p>{t("ar_restaurants")}</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="list_icon_imgtxt">
              <div className="list_icon_img">
                <img src={typeshop} alt={t("ar_hotels")} />
              </div>
              <p>{t("ar_hotels")}</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="list_icon_imgtxt">
              <div className="list_icon_img">
                <img src={typesoftware} alt={t("ar_shops")} />
              </div>
              <p>{t("ar_shops")}</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="list_icon_imgtxt">
              <div className="list_icon_img">
                <img src={typerestaurent} alt={t("ar_packaged_products")} />
              </div>
              <p>{t("ar_packaged_products")}</p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="list_icon_imgtxt">
              <div className="list_icon_img">
                <img src={typengo} alt={t("ar_electronic_products")} />
              </div>
              <p>{t("ar_electronic_products")}</p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="list_icon_imgtxt">
              <div className="list_icon_img">
                <img src={typengo} alt={t("ar_editors")} />
              </div>
              <p>{t("ar_editors")}</p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="list_icon_imgtxt">
              <div className="list_icon_img">
                <img src={typengo} alt={t("ar_organizations")} />
              </div>
              <p>{t("ar_organizations")}</p>
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
              <div className="slider_mob_mainbox mx-bg1 new-bgc1">
                <div className="slider_mob_bg_box centre-imger">
                  <img src={pdfinnerimg1} alt="QR Code Example" />
                </div>
              </div>
            </Col>
            <Col lg={6} className="p-0">
              <div className="slider_mob_textbox websiteqr_txt">
                <h3>{t("ar_lodging")}</h3>
                <p>{t("ar_lodging_description")}</p>
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
              <div className="slider_mob_mainbox mx-bg1 new-bgc2">
                <div className="slider_mob_bg_box centre-imger">
                  <img src={pdfinnerimg2} alt="QR Code Example" />
                </div>
              </div>
            </Col>
            <Col lg={6} className="p-0">
              <div className="slider_mob_textbox websiteqr_txt">
                <h3>{t("ar_food_products")}</h3>
                <p>{t("ar_food_products_description")}</p>
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
              <div className="slider_mob_mainbox mx-bg1 new-bgc3">
                <div className="slider_mob_bg_box centre-imger">
                  <img src={pdfinnerimg3} alt="QR Code Example" />
                </div>
              </div>
            </Col>
            <Col lg={6} className="p-0">
              <div className="slider_mob_textbox websiteqr_txt">
                <h3>{t("ar_events")}</h3>
                <p>{t("ar_events_description1")}</p>
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
              <div className="slider_mob_mainbox mx-bg1 new-bgc4">
                <div className="slider_mob_bg_box centre-imger">
                  <img src={pdfinnerimg4} alt="QR Code Example" />
                </div>
              </div>
            </Col>
            <Col lg={6} className="p-0">
              <div className="slider_mob_textbox websiteqr_txt">
                <h3>{t("ar_photographers")}</h3>
                <p>{t("ar_photographers_description")}</p>
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
              <div className="slider_mob_mainbox mx-bg1 new-bgc5">
                <div className="slider_mob_bg_box centre-imger">
                  <img src={pdfinnerimg5} alt="QR Code Example" />
                </div>
              </div>
            </Col>
            <Col lg={6} className="p-0">
              <div className="slider_mob_textbox websiteqr_txt">
                <h3>{t("ar_restaurants")}</h3>
                <p>{t("ar_restaurants_description")}</p>
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
              <div className="slider_mob_mainbox mx-bg1 new-bgc6">
                <div className="slider_mob_bg_box centre-imger">
                  <img src={pdfinnerimg6} alt="QR Code Example" />
                </div>
              </div>
            </Col>
            <Col lg={6} className="p-0">
              <div className="slider_mob_textbox websiteqr_txt">
                <h3>{t("ar_travel")}</h3>
                <p>{t("ar_travel_description")}</p>
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

export default Secondtypeslider14;
