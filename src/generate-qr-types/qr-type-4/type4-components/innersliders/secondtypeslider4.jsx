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



import pdfinnerimg1 from "../../../../img/mddd1.png"
import pdfinnerimg2 from "../../../../img/mddd2.png"
import pdfinnerimg3 from "../../../../img/mddd3.png"
import pdfinnerimg4 from "../../../../img/mddd4.png"
import pdfinnerimg5 from "../../../../img/mddd5.png"
import pdfinnerimg6 from "../../../../img/mddd6.png"
const Secondtypeslider4 = ({ handleregister }) => {
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
                            <p>Finance</p>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="list_icon_imgtxt">
                            <div className="list_icon_img">
                                <img src={typeshop} alt="" />
                            </div>
                            <p>Hospitality</p>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="list_icon_imgtxt">
                            <div className="list_icon_img">
                                <img src={typesoftware} alt="" />
                            </div>
                            <p>Personal Use</p>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="list_icon_imgtxt">
                            <div className="list_icon_img">
                                <img src={typerestaurent} alt="" />
                            </div>
                            <p>Education</p>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="list_icon_imgtxt">
                            <div className="list_icon_img">
                                <img src={typengo} alt="" />
                            </div>
                            <p>Management</p>
                        </div>
                    </SwiperSlide>


                    <SwiperSlide>
                        <div className="list_icon_imgtxt">
                            <div className="list_icon_img">
                                <img src={typengo} alt="" />
                            </div>
                            <p>Real Estate</p>
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
                                className="slider_mob_mainbox mx-bg1 new-bgk1"

                            >
                                <div className="slider_mob_bg_box centre-imger">
                                    <img src={pdfinnerimg1} alt="QR Code Example" />
                                </div>
                            </div>
                        </Col>
                        <Col lg={6} className="p-0">
                            <div className="slider_mob_textbox websiteqr_txt">
                                <h3>Finance</h3>
                                <p>If you work in a financial company, you can easily and immediately provide your clients with the link to your complete contact information.</p>
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
                                className="slider_mob_mainbox mx-bg1 new-bgk2"

                            >
                                <div className="slider_mob_bg_box centre-imger">
                                    <img src={pdfinnerimg2} alt="QR Code Example" />
                                </div>
                            </div>
                        </Col>
                        <Col lg={6} className="p-0">
                            <div className="slider_mob_textbox websiteqr_txt">
                                <h3>Hospitality
                                </h3>
                                <p>Create a link with your hotel's information and map, so that your guests can access them when they need it, instantly.</p>
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
                                className="slider_mob_mainbox mx-bg1 new-bgk3"

                            >
                                <div className="slider_mob_bg_box centre-imger">
                                    <img src={pdfinnerimg3} alt="QR Code Example" />
                                </div>
                            </div>
                        </Col>
                        <Col lg={6} className="p-0">
                            <div className="slider_mob_textbox websiteqr_txt">
                                <h3>Personal Use
                                </h3>
                                <p>Are you worried about losing your dog, your luggage or some work tools? Create a QR with your contact details and place it on your dog's collar, your luggage or tool, so that if it gets lost, you can recover it.  </p>
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
                                className="slider_mob_mainbox mx-bg1 new-bgk4"

                            >
                                <div className="slider_mob_bg_box centre-imger">
                                    <img src={pdfinnerimg4} alt="QR Code Example" />
                                </div>
                            </div>
                        </Col>
                        <Col lg={6} className="p-0">
                            <div className="slider_mob_textbox websiteqr_txt">
                                <h3>Education


                                </h3>
                                <p>In both companies and governments, efficient management stands out for its transparency. Offers access to professional data of officials through a QR code to build trust and show openness.</p>
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
                                className="slider_mob_mainbox mx-bg1 new-bgk5"

                            >
                                <div className="slider_mob_bg_box centre-imger">
                                    <img src={pdfinnerimg5} alt="QR Code Example" />
                                </div>
                            </div>
                        </Col>
                        <Col lg={6} className="p-0">
                            <div className="slider_mob_textbox websiteqr_txt">
                                <h3>Management

                                </h3>
                                <p>In both companies and governments, efficient management stands out for its transparency. Offers access to professional data of officials through a QR code to build trust and show openness.  </p>
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
                                className="slider_mob_mainbox mx-bg1 new-bgk6"

                            >
                                <div className="slider_mob_bg_box centre-imger">
                                    <img src={pdfinnerimg6} alt="QR Code Example" />
                                </div>
                            </div>
                        </Col>
                        <Col lg={6} className="p-0">
                            <div className="slider_mob_textbox websiteqr_txt">
                                <h3>Real Estate


                                </h3>
                                <p>If your field is real estate, improve the experience of potential tenants or buyers by offering, through a QR code, your location or property ads with their data and description.</p>
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

export default Secondtypeslider4