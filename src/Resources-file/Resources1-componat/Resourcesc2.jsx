import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap'
import { IoChevronForwardSharp } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa6";


import m1 from "../../img/category_restaurants-CmJ8l4Je.png"

import m2 from "../../img/download.svg"

import m3 from "../../img/category_wellness-DIYnV_5m.png"

import m4 from "../../img/wellness-DTR84AIt.svg"
import m5 from "../../img/category_consumer-C8iYW4AY.png"
import m6 from "../../img/glass (1).svg"
import m7 from "../../img/category_nonprofits-erMCoyQj.png"
import m8 from "../../img/ss (1).svg"
import m9 from "../../img/purple.png"
import m10 from "../../img/cart.svg"
import m11 from "../../img/space.png"
import m12 from "../../img/game.svg"
import m13 from "../../img/red.png"
import m14 from "../../img/pdf (1).svg"
import m15 from "../../img/estate.png"
import m16 from "../../img/bag.svg"
import m17 from "../../img/light-green.png"
import m18 from "../../img/shoes.svg"
import m19 from "../../img/jh.png"
import m20 from "../../img/bowl.svg"
import m21 from "../../img/stamp.png"
import m22 from "../../img/book.svg"
import m23 from "../../img/real.png"
import m24 from "../../img/hand.svg"
import m25 from "../../img/health.png"
import m26 from "../../img/medical.svg"
import m27 from "../../img/plam.png"
import m28 from "../../img/book-2.svg"
import m29 from "../../img/juan.png"
import m30 from "../../img/personal.svg"
import m31 from "../../img/aaa.png"
import m32 from "../../img/mask.svg"
import m33 from "../../img/rain.png"
import m34 from "../../img/pop.svg"
import m35 from "../../img/jhp.png"
import m36 from "../../img/video.svg"
import m37 from "../../img/cap.png"
import m38 from "../../img/key.svg"
import m39 from "../../img/mif.png"
import m40 from "../../img/finance.svg"
import m41 from "../../img/our.png"
import m42 from "../../img/drink.svg"
import m43 from "../../img/scan.png"
import m44 from "../../img/bulb.svg"
import m45 from "../../img/discover.png"
import m46 from "../../img/image.svg"
import m47 from "../../img/project.png"
import m48 from "../../img/graphic.svg"
import m49 from "../../img/head.png"

import m50 from "../../img/ear.svg"
import m51 from "../../img/bus.png"
import m52 from "../../img/bus.svg"
import m53 from "../../img/go.png"
import m54 from "../../img/flag.svg"
import m55 from "../../img/camera.png"
import m56 from "../../img/popcorn.svg"
import m57 from "../../img/know.png"
import m58 from "../../img/beverge.svg"
import m59 from "../../img/cos.png"
import m60 from "../../img/aeroplane.svg"


import k1 from "../../img/km1.svg"
import k2 from "../../img/km2.svg"
import k3 from "../../img/km3.svg"
import k4 from "../../img/km4.svg"
import k5 from "../../img/km5.svg"
import k6 from "../../img/km6.svg"
import k7 from "../../img/km7.svg"
import k8 from "../../img/km8.svg"
import k9 from "../../img/km9.svg"
import k10 from "../../img/km10.svg"
import k11 from "../../img/km11.svg"
import k12 from "../../img/km12.svg"
import k13 from "../../img/km13.svg"
import k14 from "../../img/km14.svg"
import k15 from "../../img/km15.svg"
import k16 from "../../img/km16.svg"
import k17 from "../../img/km17.svg"
import k18 from "../../img/km18.svg"
import k19 from "../../img/km19.svg"
import k20 from "../../img/km20.svg"
import k21 from "../../img/km21.svg"
import k22 from "../../img/km22.svg"
import k23 from "../../img/km23.svg"
import k24 from "../../img/km24.svg"
import k25 from "../../img/km25.svg"
import k26 from "../../img/km26.svg"
import k27 from "../../img/km27.svg"
import k28 from "../../img/km28.svg"
import k29 from "../../img/km29.svg"
import k30 from "../../img/km30.svg"
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';



const   Resourcesc2 = () => {

    const { t } = useTranslation();

    
    const [showAll, setShowAll] = useState(false); // State to manage "More" button

    const toggleShowAll = () => {
        setShowAll(!showAll); // Toggle between showing all or just the first 16
    };


    const items = [
        { id: 1, img: k1, text: t('restaurants'), link: "/Businessz" },
        { id: 2, img: k2, text: t('gym_and_wellness'), link: "/Businessz1" },
        { id: 3, img: k3, text: t('consumer_goods_packaged'), link: "/Businessz2" },
        { id: 4, img: k4, text: t('nonprofit_organizations'), link: "/Businessz3" },
        { id: 5, img: k5, text: t('retailers'), link: "/Businessz4" },
        { id: 6, img: k6, text: t('software_and_game_developers'), link: "/Businessz5" },
        { id: 7, img: k7, text: t('editors'), link: "/Businessz6" },
        { id: 8, img: k8, text: t('business_services'), link: "/Businessz7" },
        { id: 9, img: k9, text: t('hotels_and_resorts'), link: "/Businessz8" },
        { id: 10, img: k10, text: t('government'), link: "/Businessz9" },
        { id: 11, img: k11, text: t('educational_institutions'), link: "/Businessz10" },
        { id: 12, img: k12, text: t('real_estate_agencies'), link: "/Businessz11" },
        { id: 13, img: k13, text: t('medical_care_and_doctors'), link: "/Businessz12" },
        { id: 14, img: k14, text: t('tourism'), link: "/Businessz13" },
        { id: 15, img: k15, text: t('personal_use'), link: "/Businessz14" },
        { id: 16, img: k16, text: t('cities_and_cultures'), link: "/Businessz15" },
        { id: 17, img: k17, text: t('musicians_and_artists'), link: "/Businessz16" },
        { id: 18, img: k18, text: t('photographers_and_videographers'), link: "/Businessz17" },
        { id: 19, img: k19, text: t('repairs_and_home_maintenance'), link: "/Businessz18" },
        { id: 20, img: k20, text: t('financial_and_insurance_companies'), link: "/Businessz19" },
        { id: 21, img: k21, text: t('event_management'), link: "/Businessz20" },
        { id: 22, img: k22, text: t('business_consultants'), link: "/Businessz21" },
        { id: 23, img: k23, text: t('museums_and_galleries'), link: "/Businessz22" },
        { id: 24, img: k24, text: t('graphic_design_studio'), link: "/Businessz23" },
        { id: 25, img: k25, text: t('consumer_electronics'), link: "/Businessz24" },
        { id: 26, img: k26, text: t('public_transport'), link: "/Businessz25" },
        { id: 27, img: k27, text: t('stadiums_and_convention_centers'), link: "/Businessz26" },
        { id: 28, img: k28, text: t('media_and_entertainment'), link: "/Businessz27" },
        { id: 29, img: k29, text: t('beverage_industry'), link: "/Businessz28" },
        { id: 30, img: k30, text: t('airlines'), link: "/Businessz29" },
      ];
    
    

      const businessCategories = [
        { id: 1, imgSrc: m1, title: t("restaurants"), svgSrc: m2, link: "/Businessz" },
        { id: 2, imgSrc: m3, title: t("gym_and_wellness"), svgSrc: m4, link: "/Businessz1" },
        { id: 3, imgSrc: m5, title: t("consumer_goods_packaged"), svgSrc: m6, link: "/Businessz2" },
        { id: 4, imgSrc: m7, title: t("nonprofit_organizations"), svgSrc: m8, link: "/Businessz3" },
        { id: 5, imgSrc: m9, title: t("retailers"), svgSrc: m10, link: "/Businessz4" },
        { id: 6, imgSrc: m11, title: t("software_and_game_developers"), svgSrc: m12, link: "/Businessz5" },
        { id: 7, imgSrc: m13, title: t("editors"), svgSrc: m14, link: "/Businessz6" },
        { id: 8, imgSrc: m15, title: t("business_services"), svgSrc: m16, link: "/Businessz7" },
        { id: 9, imgSrc: m17, title: t("hotels_and_resorts"), svgSrc: m18, link: "/Businessz8" },
        { id: 10, imgSrc: m19, title: t("government"), svgSrc: m20, link: "/Businessz9" },
        { id: 11, imgSrc: m21, title: t("educational_institutions"), svgSrc: m22, link: "/Businessz10" },
        { id: 12, imgSrc: m23, title: t("real_estate_agencies"), svgSrc: m24, link: "/Businessz11" },
        { id: 13, imgSrc: m25, title: t("medical_care_and_doctors"), svgSrc: m26, link: "/Businessz12" },
        { id: 14, imgSrc: m27, title: t("tourism"), svgSrc: m28, link: "/Businessz13" },
        { id: 15, imgSrc: m29, title: t("personal_use"), svgSrc: m30, link: "/Businessz14" },
        { id: 16, imgSrc: m31, title: t("cities_and_cultures"), svgSrc: m32, link: "/Businessz15" },
        { id: 17, imgSrc: m33, title: t("musicians_and_artists"), svgSrc: m34, link: "/Businessz16" },
        { id: 18, imgSrc: m35, title: t("photographers_and_videographers"), svgSrc: m36, link: "/Businessz17" },
        { id: 19, imgSrc: m37, title: t("repairs_and_home_maintenance"), svgSrc: m38, link: "/Businessz18" },
        { id: 20, imgSrc: m39, title: t("financial_and_insurance_companies"), svgSrc: m40, link: "/Businessz19" },
        { id: 21, imgSrc: m41, title: t("event_management"), svgSrc: m42, link: "/Businessz20" },
        { id: 22, imgSrc: m43, title: t("business_consultants"), svgSrc: m44, link: "/Businessz21" },
        { id: 23, imgSrc: m45, title: t("museums_and_galleries"), svgSrc: m46, link: "/Businessz22" },
        { id: 24, imgSrc: m47, title: t("graphic_design_studio"), svgSrc: m48, link: "/Businessz23" },
        { id: 25, imgSrc: m49, title: t("consumer_electronics"), svgSrc: m50, link: "/Businessz24" },
        { id: 26, imgSrc: m51, title: t("public_transport"), svgSrc: m52, link: "/Businessz25" },
        { id: 27, imgSrc: m53, title: t("stadiums_and_convention_centers"), svgSrc: m54, link: "/Businessz26" },
        { id: 28, imgSrc: m55, title: t("media_and_entertainment"), svgSrc: m56, link: "/Businessz27" },
        { id: 29, imgSrc: m57, title: t("beverage_industry"), svgSrc: m58, link: "/Businessz28" },
        { id: 30, imgSrc: m59, title: t("airlines"), svgSrc: m60, link: "/Businessz29" }
    ];
    

    const visibleItems = showAll ? items : items.slice(0, 16); // Display first 16 items or all

    return (
        <>


            <div class="business">

                <Container>

                    <div class="businesszzzz">
                        <div class="inner-bus">
                            <h2>{t('NBbus1')}</h2>
                            <p>{t('NBbus2')}</p>
                        </div>

                
                        <div className="Gym-code-box-btn-main">
                            <div className="Gym-code-box-btn">
                                {visibleItems.map((item) => (
                                    <Link to={item.link} key={item.id}>
                                        <button>
                                            <div className="icon-gym-card">
                                                <img src={item.img} alt={item.title} />
                                            </div>
                                            <p>{item.text}</p>
                                        </button>
                                    </Link>
                                ))}
                            </div>
                            
                            <div className="hello-btn-box">
                                <button className='hello-col' onClick={toggleShowAll}>
                                    {showAll ? 'Less' : 'More'}
                                    <svg className="zMuiSvgIcon-root jss183" focusable="false" viewBox="0 0 16 16" aria-hidden="true">
                                        <path d="M8,12.5a1.51,1.51,0,0,1-1.06-.44l-5.5-5.5L3.56,4.44,8,8.88l4.44-4.44,2.12,2.12-5.5,5.5A1.51,1.51,0,0,1,8,12.5Z"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>

                    </div>

                </Container>

            </div>




            <div className="business-2">
                <div class="bus-inner-1">
                    {businessCategories.map((category) => (
                        <Link to= {category.link} key={category.id}>
                        <div className="bus-inner-2" >
                            <div className="inner-col">
                                <img src={category.imgSrc} alt={category.title} />
                            </div>
                            <div className="inner-col-1">
                                <div className="svg-inner">
                                    <img src={category.svgSrc} alt={category.title} />
                                </div>
                                <h5>{category.title}</h5>
                                <a>More Info</a>
                            </div>
                        </div>
                        </Link>
                    ))}
                </div>

            </div>


        </>
    )
};

export default Resourcesc2