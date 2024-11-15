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




import pdfinnerimg1 from "../../../../img/mdx1.png"
import pdfinnerimg2 from "../../../../img/mdx2.png"
import pdfinnerimg3 from "../../../../img/mdx3.png"
import pdfinnerimg4 from "../../../../img/mdx4.png"
import pdfinnerimg5 from "../../../../img/mdx5.png"
import pdfinnerimg6 from "../../../../img/mdx6.png"


const Secondtypeslider = ({handleregister}) => {
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
                            <p>Website</p>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="list_icon_imgtxt">
                            <div className="list_icon_img">
                                <img src={typeshop} alt="" />
                            </div>
                            <p>PDF</p>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="list_icon_imgtxt">
                            <div className="list_icon_img">
                                <img src={typesoftware} alt="" />
                            </div>
                            <p>vCard Plus</p>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="list_icon_imgtxt">
                            <div className="list_icon_img">
                                <img src={typerestaurent} alt="" />
                            </div>
                            <p>Images</p>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="list_icon_imgtxt">
                            <div className="list_icon_img">
                                <img src={typengo} alt="" />
                            </div>
                            <p>Text</p>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="list_icon_imgtxt">
                            <div className="list_icon_img">
                                <img src={typefinance} alt="" />
                            </div>
                            <p>Video</p>
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
                                className="slider_mob_mainbox mx-bg1 new-bgx1"

                            >
                                <div className="slider_mob_bg_box centre-imger">
                                    <img src={pdfinnerimg1} alt="QR Code Example" />
                                </div>
                            </div>
                        </Col>
                        <Col lg={6} className="p-0">
                            <div className="slider_mob_textbox websiteqr_txt">
                                <h3>Editors</h3>
                                <p>Offer discount coupons when launching promotional campaigns for your books.</p>
                                <div className="create_btns">
                                    <a href="#" onClick={handleregister}>Create QR Code</a>
                                    <a href="#" className="create_more_info">More Info</a>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </SwiperSlide>



                <SwiperSlide>
                    <Row>
                        <Col lg={6} className="p-0">
                            <div
                                className="slider_mob_mainbox mx-bg1 new-bgx2"

                            >
                                <div className="slider_mob_bg_box centre-imger">
                                    <img src={pdfinnerimg2} alt="QR Code Example" />
                                </div>
                            </div>
                        </Col>
                        <Col lg={6} className="p-0">
                            <div className="slider_mob_textbox websiteqr_txt">
                                <h3>Photographers
                                </h3>
                                <p>Get new customers by including a promotional code in your advertising ads.</p>
                                <div className="create_btns">
                                    <a href="#" onClick={handleregister}>Create QR Code</a>
                                    <a href="#" className="create_more_info">More Info</a>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </SwiperSlide>



                <SwiperSlide>
                    <Row>
                        <Col lg={6} className="p-0">
                            <div
                                className="slider_mob_mainbox mx-bg1 new-bgx3"

                            >
                                <div className="slider_mob_bg_box centre-imger">
                                    <img src={pdfinnerimg3} alt="QR Code Example" />
                                </div>
                            </div>
                        </Col>
                        <Col lg={6} className="p-0">
                            <div className="slider_mob_textbox websiteqr_txt">
                                <h3>Foods

                                </h3>
                                <p>Attract buyers for your new product by offering discounts and promotions with a simple scan.  </p>
                                <div className="create_btns">
                                    <a href="#" onClick={handleregister}>Create QR Code</a>
                                    <a href="#" className="create_more_info">More Info</a>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </SwiperSlide>



                <SwiperSlide>
                    <Row>
                        <Col lg={6} className="p-0">
                            <div
                                className="slider_mob_mainbox mx-bg1 new-bgx4"

                            >
                                <div className="slider_mob_bg_box centre-imger">
                                    <img src={pdfinnerimg4} alt="QR Code Example" />
                                </div>
                            </div>
                        </Col>
                        <Col lg={6} className="p-0">
                            <div className="slider_mob_textbox websiteqr_txt">
                                <h3>Restaurants

                                </h3>
                                <p>Encourage your customers to return with promotions and discounts for their next visit</p>
                                <div className="create_btns">
                                    <a href="#" onClick={handleregister}>Create QR Code</a>
                                    <a href="#" className="create_more_info">More Info</a>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </SwiperSlide>

                <SwiperSlide>
                    <Row>
                        <Col lg={6} className="p-0">
                            <div
                                className="slider_mob_mainbox mx-bg1 new-bgx5"

                            >
                                <div className="slider_mob_bg_box centre-imger">
                                    <img src={pdfinnerimg5} alt="QR Code Example" />
                                </div>
                            </div>
                        </Col>
                        <Col lg={6} className="p-0">
                            <div className="slider_mob_textbox websiteqr_txt">
                                <h3>Cities

                                </h3>
                                <p>Get more visitors to museums and paid attractions in your city by offering discounts on tickets and services.  </p>
                                <div className="create_btns">
                                    <a href="#" onClick={handleregister}>Create QR Code</a>
                                    <a href="#" className="create_more_info">More Info</a>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </SwiperSlide>


                <SwiperSlide>
                    <Row>
                        <Col lg={6} className="p-0">
                            <div
                                className="slider_mob_mainbox mx-bg1 new-bgx6"

                            >
                                <div className="slider_mob_bg_box centre-imger">
                                    <img src={pdfinnerimg6} alt="QR Code Example" />
                                </div>
                            </div>
                        </Col>
                        <Col lg={6} className="p-0">
                            <div className="slider_mob_textbox websiteqr_txt">
                                <h3>Shops


                                </h3>
                                <p>Expand the sales of your boutique, including a Coupon QR in your advertising campaigns.</p>
                                <div className="create_btns">
                                    <a href="#" onClick={handleregister}>Create QR Code</a>
                                    <a href="#" className="create_more_info">More Info</a>
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