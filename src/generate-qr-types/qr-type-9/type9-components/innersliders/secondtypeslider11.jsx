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


// app// app// app// app// app// app// app// app// app// app// app


import pdfinnerimg1 from "../../../../img/mde1.png"
import pdfinnerimg2 from "../../../../img/mde2.png"
import pdfinnerimg3 from "../../../../img/mde3.png"
import pdfinnerimg4 from "../../../../img/mde4.png"
import pdfinnerimg5 from "../../../../img/mde5.png"
import pdfinnerimg6 from "../../../../img/mde6.png"



const Secondtypeslider11 = ({ handleregister }) => {
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
                            <p>Restaurants</p>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="list_icon_imgtxt">
                            <div className="list_icon_img">
                                <img src={typeshop} alt="" />
                            </div>
                            <p>Hotels</p>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="list_icon_imgtxt">
                            <div className="list_icon_img">
                                <img src={typesoftware} alt="" />
                            </div>
                            <p>Shops</p>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="list_icon_imgtxt">
                            <div className="list_icon_img">
                                <img src={typerestaurent} alt="" />
                            </div>
                            <p>Packaged products</p>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="list_icon_imgtxt">
                            <div className="list_icon_img">
                                <img src={typengo} alt="" />
                            </div>
                            <p>Electronic products</p>
                        </div>
                    </SwiperSlide>


                    <SwiperSlide>
                        <div className="list_icon_imgtxt">
                            <div className="list_icon_img">
                                <img src={typengo} alt="" />
                            </div>
                            <p>Editors</p>
                        </div>
                    </SwiperSlide>


                    <SwiperSlide>
                        <div className="list_icon_imgtxt">
                            <div className="list_icon_img">
                                <img src={typengo} alt="" />
                            </div>
                            <p>Organizations</p>
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
                                className="slider_mob_mainbox mx-bg1 new-bgt1"

                            >
                                <div className="slider_mob_bg_box centre-imger">
                                    <img src={pdfinnerimg1} alt="QR Code Example" />
                                </div>
                            </div>
                        </Col>
                        <Col lg={6} className="p-0">
                            <div className="slider_mob_textbox websiteqr_txt">
                                <h3>Games
                                </h3>
                                <p>If you develop or sell software, share your gaming app link with your customers to increase downloads or offer a free demo version so they can try the game before purchasing.</p>
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
                                className="slider_mob_mainbox mx-bg1 new-bgt2"

                            >
                                <div className="slider_mob_bg_box centre-imger">
                                    <img src={pdfinnerimg2} alt="QR Code Example" />
                                </div>
                            </div>
                        </Col>
                        <Col lg={6} className="p-0">
                            <div className="slider_mob_textbox websiteqr_txt">
                                <h3>Shops

                                </h3>
                                <p>If you have a retail business, share the link to your shopping application with QR Apps: allow your customers to improve their experience, purchasing online quickly and safely.</p>
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
                                className="slider_mob_mainbox mx-bg1 new-bgt3"

                            >
                                <div className="slider_mob_bg_box centre-imger">
                                    <img src={pdfinnerimg3} alt="QR Code Example" />
                                </div>
                            </div>
                        </Col>
                        <Col lg={6} className="p-0">
                            <div className="slider_mob_textbox websiteqr_txt">
                                <h3>Health
                                </h3>
                                <p>If you want to advertise your gym or products aimed at health and well-being, there is nothing better than creating a fitness application. Share the download link with QR App and reach more users.</p>
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
                                className="slider_mob_mainbox mx-bg1 new-bgt4"

                            >
                                <div className="slider_mob_bg_box centre-imger">
                                    <img src={pdfinnerimg4} alt="QR Code Example" />
                                </div>
                            </div>
                        </Col>
                        <Col lg={6} className="p-0">
                            <div className="slider_mob_textbox websiteqr_txt">
                                <h3>Places



                                </h3>
                                <p>Do you have a tourism-oriented application? Easily share the download link and streamline the tourist experience to locate places of interest, restaurants and services in a single scan.</p>
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
                                className="slider_mob_mainbox mx-bg1 new-bgt5"

                            >
                                <div className="slider_mob_bg_box centre-imger">
                                    <img src={pdfinnerimg5} alt="QR Code Example" />
                                </div>
                            </div>
                        </Col>
                        <Col lg={6} className="p-0">
                            <div className="slider_mob_textbox websiteqr_txt">
                                <h3>Services


                                </h3>
                                <p>If you offer home services, cleaning or repairs, offer your clients applications to make reservations. Not only will you expand your market, you will also improve your customers' experience.  </p>
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
                                className="slider_mob_mainbox mx-bg1 new-bgt5"

                            >
                                <div className="slider_mob_bg_box centre-imger">
                                    <img src={pdfinnerimg5} alt="QR Code Example" />
                                </div>
                            </div>
                        </Col>
                        <Col lg={6} className="p-0">
                            <div className="slider_mob_textbox websiteqr_txt">
                                <h3>Finance 


                                </h3>
                                <p>If you work in finance or insurance, give your clients instant access to online information and procedures by sharing financial management applications with them. With QR Apps, your clients can download them in a simple scan.  </p>
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

export default Secondtypeslider11