import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { Col, Row } from "react-bootstrap";
import mobinnerimg from "../../../../img/mob_inner_img.png";
import typeproduct from "../../../../img/type_product_svg.svg";
import typeshop from "../../../../img/type_shop.svg";
import typesoftware from "../../../../img/type_software.svg";
import typerestaurent from "../../../../img/type_restaurent.svg";
import typengo from "../../../../img/type_ongs.svg";
import typefinance from "../../../../img/type_finance.svg";
import pdfinnerimg from "../../../../img/mockup_pdf_preview.webp"
import vCardinnerimg from "../../../../img/mockup_vcard-plus_preview.webp"
import imagesinnerimg from "../../../../img/mockup_images_preview.webp"
import textInnerimg from "../../../../img/text_mockeup.png"
import videoInnerimg from "../../../../img/mockup_video_preview.webp"
import producrleftside from "../../../../img/products-slider-leftside.webp"




import pdfinnerimg1 from "../../../../img/mdd1.png"
import pdfinnerimg2 from "../../../../img/mdd2.png"
import pdfinnerimg3 from "../../../../img/mdd3.png"
import pdfinnerimg4 from "../../../../img/mdd4.png"
import pdfinnerimg5 from "../../../../img/mdd5.png"
import pdfinnerimg6 from "../../../../img/mdd6.png"
import { useTranslation } from 'react-i18next';
const Secondtypeslider = ({ handleregister }) => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const { t } = useTranslation()
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
                            <p>{t('sqrtype10')}</p>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="list_icon_imgtxt">
                            <div className="list_icon_img">
                                <img src={typeshop} alt="" />
                            </div>
                            <p>{t('sqrtype11')}</p>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="list_icon_imgtxt">
                            <div className="list_icon_img">
                                <img src={typesoftware} alt="" />
                            </div>
                            <p>{t('sqrtype12')}</p>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="list_icon_imgtxt">
                            <div className="list_icon_img">
                                <img src={typerestaurent} alt="" />
                            </div>
                            <p>{t('sqrtype13')}</p>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="list_icon_imgtxt">
                            <div className="list_icon_img">
                                <img src={typengo} alt="" />
                            </div>
                            <p>{t('sqrtype14')}</p>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="list_icon_imgtxt">
                            <div className="list_icon_img">
                                <img src={typefinance} alt="" />
                            </div>
                            <p>{t('sqrtype15')}</p>
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
                            <div
                                className="slider_mob_mainbox mx-bg1 new-bgg1"

                            >
                                <div className="slider_mob_bg_box centre-imger">
                                    <img src={pdfinnerimg1} alt="QR Code Example" />
                                </div>
                            </div>
                        </Col>
                        <Col lg={6} className="p-0">
                            <div className="slider_mob_textbox websiteqr_txt">
                                <h3>{t('sqrtype16')}</h3>
                                <p>{t('sqrtype17')}</p>
                                <div className="create_btns">
                                    <a href="#" onClick={handleregister}>{t('sqrtype18')}</a>
                                    <a href="#" className="create_more_info">{t('sqrtype19')}</a>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </SwiperSlide>



                <SwiperSlide>
                    <Row>
                        <Col lg={6} className="p-0">
                            <div
                                className="slider_mob_mainbox mx-bg1 new-bgg2"

                            >
                                <div className="slider_mob_bg_box centre-imger">
                                    <img src={pdfinnerimg2} alt="QR Code Example" />
                                </div>
                            </div>
                        </Col>
                        <Col lg={6} className="p-0">
                            <div className="slider_mob_textbox websiteqr_txt">
                                <h3>{t('sqrtype20')}
                                </h3>
                                <p>{t('sqrtype21')}</p>
                                <div className="create_btns">
                                    <a href="#" onClick={handleregister}>{t('sqrtype22')}</a>
                                    <a href="#" className="create_more_info">{t('sqrtype23')}</a>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </SwiperSlide>



                <SwiperSlide>
                    <Row>
                        <Col lg={6} className="p-0">
                            <div
                                className="slider_mob_mainbox mx-bg1 new-bgg3"

                            >
                                <div className="slider_mob_bg_box centre-imger">
                                    <img src={pdfinnerimg3} alt="QR Code Example" />
                                </div>
                            </div>
                        </Col>
                        <Col lg={6} className="p-0">
                            <div className="slider_mob_textbox websiteqr_txt">
                                <h3>{t('sqrtype24')}
                                </h3>
                                <p>{t('sqrtype25')} </p>
                                <div className="create_btns">
                                    <a href="#" onClick={handleregister}>{t('sqrtype26')}</a>
                                    <a href="#" className="create_more_info">{t('sqrtype27')}</a>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </SwiperSlide>



                <SwiperSlide>
                    <Row>
                        <Col lg={6} className="p-0">
                            <div
                                className="slider_mob_mainbox mx-bg1 new-bgg4"

                            >
                                <div className="slider_mob_bg_box centre-imger">
                                    <img src={pdfinnerimg4} alt="QR Code Example" />
                                </div>
                            </div>
                        </Col>
                        <Col lg={6} className="p-0">
                            <div className="slider_mob_textbox websiteqr_txt">
                                <h3>{t('sqrtype28')}

                                </h3>
                                <p>{t('sqrtype29')}</p>
                                <div className="create_btns">
                                    <a href="#" onClick={handleregister}>{t('sqrtype30')}</a>
                                    <a href="#" className="create_more_info">{t('sqrtype31')}</a>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </SwiperSlide>

                <SwiperSlide>
                    <Row>
                        <Col lg={6} className="p-0">
                            <div
                                className="slider_mob_mainbox mx-bg1 new-bgg5"

                            >
                                <div className="slider_mob_bg_box centre-imger">
                                    <img src={pdfinnerimg5} alt="QR Code Example" />
                                </div>
                            </div>
                        </Col>
                        <Col lg={6} className="p-0">
                            <div className="slider_mob_textbox websiteqr_txt">
                                <h3>{t('sqrtype32')}

                                </h3>
                                <p>{t('sqrtype33')} </p>
                                <div className="create_btns">
                                    <a href="#" onClick={handleregister}>{t('sqrtype34')}</a>
                                    <a href="#" className="create_more_info">{t('sqrtype35')}</a>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </SwiperSlide>


                <SwiperSlide>
                    <Row>
                        <Col lg={6} className="p-0">
                            <div
                                className="slider_mob_mainbox mx-bg1 new-bgg6"

                            >
                                <div className="slider_mob_bg_box centre-imger">
                                    <img src={pdfinnerimg6} alt="QR Code Example" />
                                </div>
                            </div>
                        </Col>
                        <Col lg={6} className="p-0">
                            <div className="slider_mob_textbox websiteqr_txt">
                                <h3>{t('sqrtype36')}


                                </h3>
                                <p>{t('sqrtype37')}</p>
                                <div className="create_btns">
                                    <a href="#" onClick={handleregister}>{t('sqrtype38')}</a>
                                    <a href="#" className="create_more_info">{t('sqrtype39')}</a>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </SwiperSlide>

            </Swiper>
        </>
    )
}

export default Secondtypeslider