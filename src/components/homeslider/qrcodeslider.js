import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { Col, Row } from "react-bootstrap";
import mobinnerimg from "../../img/mob_inner_img.png";
import websiteicon from "../../img/website_icon_img.png";
import pdficon from "../../img/pdf_icon_img.png";
import vCardicon from "../../img/vCard_icon_img.png";
import imageicon from "../../img/image_icon_img.png";
import texticon from "../../img/text_icon_img.png";
import videoicon from "../../img/video_icon_img.png";
import listlinksicon from "../../img/listlinks_icon_img.png";
import bussinessicon from "../../img/bussiness_icon_img.png";
import menuicon from "../../img/menu_icon_img.png";
import coupenicon from "../../img/coupens_icon_img.png";
import mp3icon from "../../img/mp3_icon_img.png";
import pdfinnerimg from "../../img/ss2.png"
import vCardinnerimg from "../../img/mockup_vcard-plus_preview.webp"
import imagesinnerimg from "../../img/mockup_images_preview.webp"
import textInnerimg from "../../img/text_mockeup.png"
import videoInnerimg from "../../img/mockup_video_preview.webp"
import listlinkinner from "../../img/mockup_link-list_preview.webp"
import bussinessInnerimg from "../../img/mockup_business_preview.webp"
import menuInnerimg from "../../img/mockup_menu_preview.webp"
import couponsInnerimg from "../../img/mockup_coupon_preview.webp"
import mp3Innering from "../../img/mockup_mp3_preview.png"
import { useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';


export default function Qrcodeslider() {

    const { t } = useTranslation();
    const navigate = useNavigate();
    const typelink = () => {
        navigate("/Qrtypeone");
    }


    const typelinkmp3 = () => {
        navigate("/Mp3home");
    }


    const typelinkbusiness = () => {
        navigate("/businesshome");
    }


    const typelinkmenu = () => {
        navigate("/menuhome");
    }
    const typelinkvcard = () => {
        navigate("/Qrtype4");
    }


    const typelinkimages = () => {
        navigate("/Qrtype10");
    }

    const typelinktext = () => {
        navigate("/signup");
    }

    const typelinkvideo = () => {
        navigate("/Qrtype3");
    }

    const typelinklistlink = () => {
        navigate("/Qrtype2");
    }
    const typelink2 = () => {
        navigate("/Qrtype9");
    }

    const secondSwiperRef = useRef(null);
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    const [secondSwiperInstance, setSecondSwiperInstance] = useState(null);

  // Function to handle the first swiper click
  const handleFirstSwiperClick = (index) => {
    if (secondSwiperInstance) {
      secondSwiperInstance.slideTo(index); // Move second swiper to the clicked index
    }
  };

    return (
        <>
            <Swiper
                onSwiper={setThumbsSwiper}
                // onClick={setThumbsSwiper}
                
                spaceBetween={10}
                slidesPerView={4}
                freeMode
                watchSlidesProgress
                // modules={[FreeMode , Navigation, Thumbs]}
                modules={[FreeMode]}

                observer={true}
                    observeParents={true}
                className="mySwiper"
              
            >
                <div className="upparsmall_card_slider">
                    <SwiperSlide onClick={() => handleFirstSwiperClick(0)}>
                        <div className="list_icon_imgtxt">
                            <div className="list_icon_img">
                                <img src={websiteicon} alt="" />
                            </div>
                            <p>Website</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide onClick={() => handleFirstSwiperClick(1)}>
                        <div className="list_icon_imgtxt">
                            <div className="list_icon_img">
                                <img src={pdficon} alt="" />
                            </div>
                            <p>PDF</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide onClick={() => handleFirstSwiperClick(2)}>
                        <div className="list_icon_imgtxt">
                            <div className="list_icon_img">
                                <img src={vCardicon} alt="" />
                            </div>
                            <p>vCard Plus</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide onClick={() => handleFirstSwiperClick(3)}>
                        <div className="list_icon_imgtxt">
                            <div className="list_icon_img">
                                <img src={imageicon} alt="" />
                            </div>
                            <p>Images</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide onClick={() => handleFirstSwiperClick(4)}>
                        <div className="list_icon_imgtxt">
                            <div className="list_icon_img">
                                <img src={texticon} alt="" />
                            </div>
                            <p>Text</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide onClick={() => handleFirstSwiperClick(5)}>
                        <div className="list_icon_imgtxt">
                            <div className="list_icon_img">
                                <img src={videoicon} alt="" />
                            </div>
                            <p>Video</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide onClick={() => handleFirstSwiperClick(6)}>
                        <div className="list_icon_imgtxt">
                            <div className="list_icon_img">
                                <img src={listlinksicon} alt="" />
                            </div>
                            <p>List of links</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide onClick={() => handleFirstSwiperClick(7)}>
                        <div className="list_icon_imgtxt">
                            <div className="list_icon_img">
                                <img src={bussinessicon} alt="" />
                            </div>
                            <p>Business</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide onClick={() => handleFirstSwiperClick(8)}>
                        <div className="list_icon_imgtxt">
                            <div className="list_icon_img">
                                <img src={menuicon} alt="" />
                            </div>
                            <p>Menu</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide onClick={() => handleFirstSwiperClick(9)}>
                        <div className="list_icon_imgtxt">
                            <div className="list_icon_img">
                                <img src={coupenicon} alt="" />
                            </div>
                            <p>Coupons</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide onClick={() => handleFirstSwiperClick(10)}>
                        <div className="list_icon_imgtxt">
                            <div className="list_icon_img">
                                <img src={mp3icon} alt="" />
                            </div>
                            <p>Mp3</p>
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
                observer={true}
                observeParents={true}
                modules={[FreeMode, Navigation , Thumbs]}
                className="mySwiper2"
                onSwiper={setSecondSwiperInstance}
            >
                <SwiperSlide>
                    <Row>
                        <Col lg={6} className="p-0">
                            <div
                                className="slider_mob_mainbox"
                                style={{
                                    background:
                                        "linear-gradient(rgb(254 199 134) 0%, rgba(238, 85, 88, 0) 100%)",
                                }}
                            >
                                <div className="slider_mob_bg_box">
                                    <img src={mobinnerimg} alt="QR Code Example" />
                                </div>
                            </div>
                        </Col>
                        <Col lg={6}  className="p-0">
                            <div className="slider_mob_textbox">
                                <h3>Website</h3>
                                <p>
                                    {t('web1nn')}
                                </p>
                                <a onClick={typelink}>{t('butweb1nn')}</a>
                            </div>
                        </Col>
                    </Row>
                </SwiperSlide>
                <SwiperSlide>
                    <Row>
                        <Col lg={6}  className="p-0">
                            <div
                                className="slider_mob_mainbox"
                                style={{
                                    background:
                                        "linear-gradient(rgb(236, 125, 67) 0%, rgba(236, 125, 67, 0) 100%)",
                                }}
                            >
                                <div className="slider_mob_bg_box">
                                    <img src={pdfinnerimg} alt="QR Code Example" />
                                </div>
                            </div>
                        </Col>
                        <Col lg={6}  className="p-0">
                            <div className="slider_mob_textbox">
                                <h3>PDF</h3>
                                <p>
                                  {t('pdf1nn')}
                                </p>
                                <a onClick={typelink2}>{t('pdfbtnnn')}</a>
                            </div>
                        </Col>
                    </Row>
                </SwiperSlide>
                <SwiperSlide>
                    <Row>
                        <Col lg={6}  className="p-0">
                            <div
                                className="slider_mob_mainbox"
                                style={{
                                    background:
                                        "linear-gradient(rgb(255, 107, 108) 0%, rgba(255, 107, 108, 0) 100%)",
                                }}
                            >
                                <div className="slider_mob_bg_box">
                                    <img src={vCardinnerimg} alt="QR Code Example" />
                                </div>
                            </div>
                        </Col>
                        <Col lg={6}  className="p-0">
                            <div className="slider_mob_textbox">
                                <h3>vCard Plus</h3>
                                <p>
                                    {t('vcard1nn')}
                                </p>
                                <a onClick={typelinkvcard}>{t('vcardbtn1nn')}</a>
                            </div>
                        </Col>
                    </Row>
                </SwiperSlide>
                <SwiperSlide>
                    <Row>
                        <Col lg={6}  className="p-0">
                            <div
                                className="slider_mob_mainbox"
                                style={{
                                    background:
                                        "linear-gradient(rgb(253, 188, 203) 0%, rgba(253, 188, 203, 0) 100%)",
                                }}
                            >
                                <div className="slider_mob_bg_box">
                                    <img src={imagesinnerimg} alt="QR Code Example" />
                                </div>
                            </div>
                        </Col>
                        <Col lg={6}  className="p-0">
                            <div className="slider_mob_textbox">
                                <h3>Images</h3>
                                <p>
                                    {t('image1nn')}
                                </p>
                                <a onClick={typelinkimages}>{t('imagebtnnn')}</a>
                            </div>
                        </Col>
                    </Row>
                </SwiperSlide>
                <SwiperSlide>
                    <Row>
                        <Col lg={6}  className="p-0">
                            <div
                                className="slider_mob_mainbox"
                                style={{
                                    background:
                                        "linear-gradient(rgb(201, 80, 83) 0%, rgba(201, 80, 83, 0) 100%)",
                                }}
                            >
                                <div className="slider_mob_bg_box">
                                    <img src={textInnerimg} alt="QR Code Example" />
                                </div>
                            </div>
                        </Col>
                        <Col lg={6}  className="p-0">
                            <div className="slider_mob_textbox">
                                <h3>Text</h3>
                                <p>
                                   {t('text1nn')}
                                </p>
                                <a onClick={typelinktext}>{t('generatebtnnn')}</a>
                            </div>
                        </Col>
                    </Row>
                </SwiperSlide>
                <SwiperSlide>
                    <Row>
                        <Col lg={6}  className="p-0">
                            <div
                                className="slider_mob_mainbox"
                                style={{
                                    background:
                                        "linear-gradient(rgb(208, 81, 208) 0%, rgba(208, 81, 208, 0) 100%)",
                                }}
                            >
                                <div className="slider_mob_bg_box">
                                    <img src={videoInnerimg} alt="QR Code Example" />
                                </div>
                            </div>
                        </Col>
                        <Col lg={6}  className="p-0">
                            <div className="slider_mob_textbox">
                                <h3>Video</h3>
                                <p>
                                {t('video1nn')}   
                                 </p>
                                <a onClick={typelinkvideo}>{t('videobtn1nn')}</a>
                            </div>
                        </Col>
                    </Row>
                </SwiperSlide>
                <SwiperSlide>
                    <Row>
                        <Col lg={6}  className="p-0">
                            <div
                                className="slider_mob_mainbox"
                                style={{
                                    background:
                                        "linear-gradient(rgb(104, 216, 233) 0%, rgba(104, 216, 233, 0) 100%)",
                                }}
                            >
                                <div className="slider_mob_bg_box">
                                    <img src={listlinkinner} alt="QR Code Example" />
                                </div>
                            </div>
                        </Col>
                        <Col lg={6}  className="p-0">
                            <div className="slider_mob_textbox">
                                <h3>List of links</h3>
                                <p>
                                   {t('linkinn')}
                                </p>
                                <a onClick={typelinklistlink}>{t('linkbtn1nn')}</a>
                            </div>
                        </Col>
                    </Row>
                </SwiperSlide>
                <SwiperSlide>
                    <Row>
                        <Col lg={6}  className="p-0">
                            <div
                                className="slider_mob_mainbox"
                                style={{
                                    background:
                                        "linear-gradient(rgb(174, 108, 54) 0%, rgba(174, 108, 54, 0) 100%)",
                                }}
                            >
                                <div className="slider_mob_bg_box">
                                    <img src={bussinessInnerimg} alt="QR Code Example" />
                                </div>
                            </div>
                        </Col>
                        <Col lg={6}  className="p-0">
                            <div className="slider_mob_textbox">
                                <h3>Business</h3>
                                <p>
                                   {t('business1nn')}
                                </p>
                                <a onClick={typelinkbusiness}>{t('business2nn')}</a>
                            </div>
                        </Col>
                    </Row>
                </SwiperSlide>
                <SwiperSlide>
                    <Row>
                        <Col lg={6}  className="p-0">
                            <div
                                className="slider_mob_mainbox"
                                style={{
                                    background:
                                        "linear-gradient(rgb(48, 108, 63) 0%, rgba(48, 108, 63, 0) 100%)",
                                }}
                            >
                                <div className="slider_mob_bg_box">
                                    <img src={menuInnerimg} alt="QR Code Example" />
                                </div>
                            </div>
                        </Col>
                        <Col lg={6}  className="p-0">
                            <div className="slider_mob_textbox">
                                <h3>Menu</h3>
                                <p>
                                    {t('menu1nn')}
                                </p>
                                <a onClick={typelinkmenu}>{t('menubtn1nn')}</a>
                            </div>
                        </Col>
                    </Row>
                </SwiperSlide>
                <SwiperSlide>
                    <Row>
                        <Col lg={6}  className="p-0">
                            <div
                                className="slider_mob_mainbox"
                                style={{
                                    background:
                                        "linear-gradient(rgb(201, 80, 83) 0%, rgba(201, 80, 83, 0) 100%)",
                                }}
                            >
                                <div className="slider_mob_bg_box">
                                    <img src={couponsInnerimg} alt="QR Code Example" />
                                </div>
                            </div>
                        </Col>
                        <Col lg={6}  className="p-0">
                            <div className="slider_mob_textbox">
                                <h3>Coupons</h3>
                                <p>
                                    {t('coupon1nn')}
                                </p>
                                <a onClick={typelinkmp3}>{t('couponbtn1nn')}</a>
                            </div>
                        </Col>
                    </Row>
                </SwiperSlide>
                <SwiperSlide>
                    <Row>
                        <Col lg={6}  className="p-0">
                            <div
                                className="slider_mob_mainbox"
                                style={{
                                    background:
                                        "linear-gradient(rgb(70, 225, 195) 0%, rgba(70, 225, 195, 0) 100%)",
                                }}
                            >
                                <div className="slider_mob_bg_box">
                                    <img src={mp3Innering} alt="QR Code Example" />
                                </div>
                            </div>
                        </Col>
                        <Col lg={6}  className="p-0">
                            <div className="slider_mob_textbox">
                                <h3>MP3</h3>
                                <p>
                                  {t('mp31nn')}
                                </p>
                                <a onClick={typelinkmp3}>{t('mp3btn1nn')}</a>
                            </div>
                        </Col>
                    </Row>
                </SwiperSlide>
            </Swiper>
        </>
    );
}

