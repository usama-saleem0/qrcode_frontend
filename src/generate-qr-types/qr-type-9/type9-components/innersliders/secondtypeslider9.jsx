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





import pdfinnerimg1 from "../../../../img/mdb1.png"
import pdfinnerimg2 from "../../../../img/mdb2.png"
import pdfinnerimg3 from "../../../../img/mdb3.png"
import pdfinnerimg4 from "../../../../img/mdb4.png"
import pdfinnerimg5 from "../../../../img/mdb5.png"
import pdfinnerimg6 from "../../../../img/mdb6.png"



const Secondtypeslider6 = ({ handleregister }) => {
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
                                className="slider_mob_mainbox mx-bg1 new-bgr1"

                            >
                                <div className="slider_mob_bg_box centre-imger">
                                    <img src={pdfinnerimg1} alt="QR Code Example" />
                                </div>
                            </div>
                        </Col>
                        <Col lg={6} className="p-0">
                            <div className="slider_mob_textbox websiteqr_txt">
                                <h3>Restaurants</h3>
                                <p>Share the entire menu in PDF with your customers in a single scan. An economical, hygienic and ecological way to share the list of dishes and prices, which your client can always have available.</p>
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
                                className="slider_mob_mainbox mx-bg1 new-bgr2"

                            >
                                <div className="slider_mob_bg_box centre-imger">
                                    <img src={pdfinnerimg2} alt="QR Code Example" />
                                </div>
                            </div>
                        </Col>
                        <Col lg={6} className="p-0">
                            <div className="slider_mob_textbox websiteqr_txt">
                                <h3>Hotels
                                </h3>
                                <p>Improve the guest experience at your hotel by offering them the room service menu with just one scan.</p>
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
                                className="slider_mob_mainbox mx-bg1 new-bgr3"

                            >
                                <div className="slider_mob_bg_box centre-imger">
                                    <img src={pdfinnerimg3} alt="QR Code Example" />
                                </div>
                            </div>
                        </Col>
                        <Col lg={6} className="p-0">
                            <div className="slider_mob_textbox websiteqr_txt">
                                <h3>Shops
                                </h3>
                                <p>If you have a retail business, share the store catalog with your customers. Allow, through a simple scan, your customers to have immediate access to the list of products and prices.</p>
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
                                className="slider_mob_mainbox mx-bg1 new-bgr4"

                            >
                                <div className="slider_mob_bg_box centre-imger">
                                    <img src={pdfinnerimg4} alt="QR Code Example" />
                                </div>
                            </div>
                        </Col>
                        <Col lg={6} className="p-0">
                            <div className="slider_mob_textbox websiteqr_txt">
                                <h3>Packaged products



                                </h3>
                                <p>If your company belongs to the food sector, share with your clients additional information about your products or recipes where to use them.</p>
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
                                className="slider_mob_mainbox mx-bg1 new-bgr5"

                            >
                                <div className="slider_mob_bg_box centre-imger">
                                    <img src={pdfinnerimg5} alt="QR Code Example" />
                                </div>
                            </div>
                        </Col>
                        <Col lg={6} className="p-0">
                            <div className="slider_mob_textbox websiteqr_txt">
                                <h3>Electronic products


                                </h3>
                                <p>Include in your products a PDF QR with the link to the product's use or installation manual. This way you can easily save it and have it available whenever you need it.  </p>
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
                                className="slider_mob_mainbox mx-bg1 new-bgr6"

                            >
                                <div className="slider_mob_bg_box centre-imger">
                                    <img src={pdfinnerimg6} alt="QR Code Example" />
                                </div>
                            </div>
                        </Col>
                        <Col lg={6} className="p-0">
                            <div className="slider_mob_textbox websiteqr_txt">
                                <h3>Editors


                                </h3>
                                <p>If you are an editor or writer, you can include a QR PDF of your book's teaser in your advertising, to generate expectations and attract future readers.</p>
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
                                className="slider_mob_mainbox mx-bg1 new-bgr6"

                            >
                                <div className="slider_mob_bg_box centre-imger">
                                    <img src={pdfinnerimg6} alt="QR Code Example" />
                                </div>
                            </div>
                        </Col>
                        <Col lg={6} className="p-0">
                            <div className="slider_mob_textbox websiteqr_txt">
                                <h3>Organizations



                                </h3>
                                <p>If you are part of a government organization or NGO, share your campaign by distributing the QR PDF link of your digital brochures.</p>
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

export default Secondtypeslider6