import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap'
import { IoChevronForwardSharp } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa6";


import p1 from "../../img/cards-B4Koe6Zu.png"
import p2 from "../../img/svg1.svg"
import p3 from "../../img/flyers-DN50723O.png"
import p4 from "../../img/svg2.svg"
import p5 from "../../img/brochures-CHYU1thn.png"
import p6 from "../../img/svg3.svg"
import p7 from "../../img/labels-B-vsWDAP.png"
import p8 from "../../img/svg4.svg"
import p9 from "../../img/packaging-DtCUHDAq.png"
import p10 from "../../img/svg5.svg"
import p11 from "../../img/food-BNuOq06V.png"
import p12 from "../../img/svg6.svg"
import p13 from "../../img/banners-CU4McbZ_.png"
import p14 from "../../img/svg7.svg"
import p15 from "../../img/clothing-DivPAhZw.png"
import p16 from "../../img/svg8.svg"
import p17 from "../../img/displays-rwH55NvM.png"
import p18 from "../../img/svg9.svg"
import p19 from "../../img/newspapers-Br-Re8s3.png"
import p20 from "../../img/svg10.svg"
import p21 from "../../img/posters-D-1CzPl3.png"
import p22 from "../../img/svg11.svg"
import p23 from "../../img/stationery-DHsUYTGi.png"
import p24 from "../../img/svg12.svg"
import p25 from "../../img/table-Dd-pr7qf.png"
import p26 from "../../img/svg13.svg"
import p27 from "../../img/tickets-mfAOsX8r.png"
import p28 from "../../img/svg14.svg"
import p29 from "../../img/windows-biPzd5Eo.png"
import p30 from "../../img/svg15.svg"
import p31 from "../../img/giveaways-9IId6_gB.png"
import p32 from "../../img/svg16.svg"
import p33 from "../../img/social-CAOYzH5m.png"
import p34 from "../../img/svg17.svg"
import p35 from "../../img/billboards-C091GOWr.png"
import p36 from "../../img/svg18.svg"
import p37 from "../../img/catalogs-DjeFVFR4.png"
import p38 from "../../img/svg19.svg"
import p39 from "../../img/ebooks-BYTBpXeW.png"
import p40 from "../../img/svg20.svg"
import p41 from "../../img/infographics-BNOmFVEl.png"
import p42 from "../../img/svg21.svg"
import p43 from "../../img/commercials-B3W8tN9O.png"
import p44 from "../../img/svg22.svg"
import p45 from "../../img/menus-J8CVrwLx.png"
import p46 from "../../img/svg23.svg"
import p47 from "../../img/videogames-ZIZta6XN.png"
import p48 from "../../img/svg24.svg"
import p49 from "../../img/cinema.png"
import p50 from "../../img/svg25.svg"
import p51 from "../../img/web-Cxfb0ksM.png"
import p52 from "../../img/svg26.svg"
import p53 from "../../img/ill3.webp"
import p54 from "../../img/svg27.svg"
import p55 from "../../img/badges-B2dj7dce.png"
import p56 from "../../img/svg28.svg"
import p57 from "../../img/books-Cb-MSgW9.png"
import p58 from "../../img/svg29.svg"
import p59 from "../../img/bottles-epoaNkrM.png"
import p60 from "../../img/svg30.svg"
import p61 from "../../img/vehicles-mM96yIsS.png"
import p62 from "../../img/svg31.svg"
import p63 from "../../img/websites-BeH5tw7N.png"
import p64 from "../../img/svg32.svg"
import p65 from "../../img/emails-CzYSrGra.png"
import p66 from "../../img/svg33.svg"
import p67 from "../../img/signage-owgwvf13.png"
import p68 from "../../img/svg34.svg"
import p69 from "../../img/street-D1i_UCq_.png"
import p70 from "../../img/svg35.svg"
import p71 from "../../img/tabletop-BKaJoay7.png"
import p72 from "../../img/svg36.svg"


import k1 from "../../img/kc1.svg"
import k2 from "../../img/kc2.svg"
import k3 from "../../img/kc10.svg"
import k4 from "../../img/kc3.svg"
import k5 from "../../img/kc4.svg"
import k6 from "../../img/kc5.svg"
import k7 from "../../img/kc6.svg"
import k8 from "../../img/kc7.svg"
import k9 from "../../img/kc8.svg"
import k10 from "../../img/kc9.svg"
import k11 from "../../img/kc11.svg"
import k12 from "../../img/kc12.svg"
import k13 from "../../img/kc13.svg"
import k14 from "../../img/kc14.svg"
import k15 from "../../img/kc15.svg"
import k16 from "../../img/kc16.svg"
import k17 from "../../img/kc17.svg"
import k18 from "../../img/kc18.svg"
import k19 from "../../img/kc19.svg"
import k20 from "../../img/kc20.svg"
import k21 from "../../img/kc21.svg"
import k22 from "../../img/kc22.svg"
import k23 from "../../img/kc23.svg"
import k24 from "../../img/kc24.svg"
import k25 from "../../img/kc25.svg"
import k26 from "../../img/kc26.svg"
import k27 from "../../img/kc27.svg"
import k28 from "../../img/kc28.svg"
import k29 from "../../img/kc29.svg"
import k30 from "../../img/kc30.svg"
import k31 from "../../img/kc31.svg"
import k32 from "../../img/kc32.svg"
import k33 from "../../img/kc33.svg"
import k34 from "../../img/kc34.svg"
import k35 from "../../img/kc35.svg"
import k36 from "../../img/kc36.svg"
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
const Resourcesc3 = () => {
    const [showAll, setShowAll] = useState(false); // State to manage "More" button

    const toggleShowAll = () => {
        setShowAll(!showAll); // Toggle between showing all or just the first 16
    };


    const items = [
        { id: 1, img: k1, text: 'Business cards', link: "/Business" },
        { id: 2, img: k2, text: 'Flyers', link: "/Business1 " },
        { id: 3, img: k3, text: 'Brochures', link: "//Business2" },
        { id: 4, img: k4, text: 'Stickers and labels', link: "/Business3" },
        { id: 5, img: k5, text: 'Product packaging', link: "/Business4" },
        { id: 6, img: k6, text: 'Food packaging', link: "/Business5" },
        { id: 7, img: k7, text: 'Banners', link: "/Business6" },
        { id: 8, img: k8, text: 'Business7', link: "/Business7" },
        { id: 9, img: k9, text: 'Displays', link: "/Business8" },
        { id: 10, img: k10, text: 'Magazines and newspapers', link: "/Business9" },
        { id: 11, img: k11, text: 'Posters', link: "/Business10" },
        { id: 12, img: k12, text: 'Stationery', link: "/Business11" },
        { id: 13, img: k13, text: 'Table tents', link: "/Business12" },
        { id: 14, img: k14, text: 'Tickets', link: "/Business13" },
        { id: 15, img: k15, text: 'Storefronts', link: "/Business14" },
        { id: 16, img: k16, text: 'Giveaways', link: "/Business15" },
        { id: 17, img: k17, text: 'Social Networks', link: "/Business16" },
        { id: 18, img: k18, text: 'Billboards', link: "/Business17" },
        { id: 19, img: k19, text: 'Catalogs', link: "/Business18" },
        { id: 20, img: k20, text: 'Books and electronic magazines', link: "/Business19" },
        { id: 21, img: k21, text: 'Infographics', link: "/Business20" },
        { id: 22, img: k22, text: 'TV commercials', link: "/Business21" },
        { id: 23, img: k23, text: 'Menus', link: "/Business22" },
        { id: 24, img: k24, text: 'Video game', link: "/Business23" },
        { id: 25, img: k25, text: 'Cinema advertisements', link: "/Business24" },
        { id: 26, img: k26, text: 'Web banners', link: "/Business25" },
        { id: 27, img: k27, text: 'Art', link: "/Business26" },
        { id: 28, img: k28, text: 'Badges', link: "/Business27" },
        { id: 29, img: k29, text: 'Books', link: "/Business28" },
        { id: 30, img: k30, text: 'Bottles and cans', link: "/Business29" },
        { id: 31, img: k31, text: 'Vehicles', link: "/Business30" },
        { id: 32, img: k32, text: 'Websites', link: "/Business31" },
        { id: 33, img: k33, text: 'Emails', link: "/Business32" },
        { id: 34, img: k34, text: 'Digital signage', link: "/Business33" },
        { id: 35, img: k35, text: 'Street signs', link: "/Business34" },
        { id: 36, img: k36, text: 'Board games', link: "/Business35" }
    ];


    const businessCategories = [
        { id: 1, p1: p1, p2: p2, title: 'Business cards', link: "/Business" },
        { id: 2, p1: p3, p2: p4, title: 'Flyers', link: "/Business1" },
        { id: 3, p1: p5, p2: p6, title: 'Brochures', link: "/Business2" },
        { id: 4, p1: p7, p2: p8, title: 'Stickers and labels', link: "/Business3" },
        { id: 5, p1: p9, p2: p10, title: 'Product packaging', link: "/Business4" },
        { id: 6, p1: p11, p2: p12, title: 'Food packaging', link: "/Business5" },
        { id: 7, p1: p13, p2: p14, title: 'Banners', link: "/Business6" },
        { id: 8, p1: p15, p2: p16, title: 'Clothes', link: "/Business7" },
        { id: 9, p1: p17, p2: p18, title: 'Displays', link: "/Business8" },
        { id: 10, p1: p19, p2: p20, title: 'Magazines and newspapers', link: "/Business9" },
        { id: 11, p1: p21, p2: p22, title: 'Posters', link: "/Business10" },
        { id: 12, p1: p23, p2: p24, title: 'Stationery', link: "/Business11" },
        { id: 13, p1: p25, p2: p26, title: 'Table tents', link: "/Business12" },
        { id: 14, p1: p27, p2: p28, title: 'Tickets', link: "/Business13" },
        { id: 15, p1: p29, p2: p30, title: 'Storefronts', link: "/Business14" },
        { id: 16, p1: p31, p2: p32, title: 'Giveaways', link: "/Business15" },
        { id: 17, p1: p33, p2: p34, title: 'Social Networks', link: "/Business16" },
        { id: 18, p1: p35, p2: p36, title: 'Billboards', link: "/Business17" },
        { id: 19, p1: p37, p2: p38, title: 'Catalogs', link: "/Business18" },
        { id: 20, p1: p39, p2: p40, title: 'Books and electronic magazines', link: "/Business19" },
        { id: 21, p1: p41, p2: p42, title: 'Infographics', link: "/Business20" },
        { id: 22, p1: p43, p2: p44, title: 'TV commercials', link: "/Business21" },
        { id: 23, p1: p45, p2: p46, title: 'Menus', link: "/Business22" },
        { id: 24, p1: p47, p2: p48, title: 'Video game', link: "/Business23" },
        { id: 25, p1: p49, p2: p50, title: 'Cinema advertisements', link: "/Business24" },
        { id: 26, p1: p51, p2: p52, title: 'Web banners', link: "/Business25" },
        { id: 27, p1: p53, p2: p54, title: 'Art', link: "/Business26" },
        { id: 28, p1: p55, p2: p56, title: 'Badges', link: "/Business27" },
        { id: 29, p1: p57, p2: p58, title: 'Books', link: "/Business28" },
        { id: 30, p1: p59, p2: p60, title: 'Bottles and cans', link: "/Business29" },
        { id: 31, p1: p61, p2: p62, title: 'Vehicles', link: "/Business30" },
        { id: 32, p1: p63, p2: p64, title: 'Websites', link: "/Business31" },
        { id: 33, p1: p65, p2: p66, title: 'Emails', link: "/Business32" },
        { id: 34, p1: p67, p2: p68, title: 'Digital signage', link: "/Business33" },
        { id: 35, p1: p69, p2: p70, title: 'Street signs', link: "/Business34" },
        { id: 36, p1: p71, p2: p72, title: 'Board games', link: "/Business35" }
    ];
    


    const visibleItems = showAll ? items : items.slice(0, 16); // Display first 16 items or all
    const { t } = useTranslation();
    return (
        <>
            <div class="business">

                <Container>

                    <div class="businesszzzz">
                        <div class="inner-bus">
                            <h2>{t('NBbus3')}<span>{t('NBbus4')}</span> {t('NBbus5')}</h2>
                            <p>{t('NBbus6')}</p>
                        </div>


                        <div className="Gym-code-box-btn-main">
                            <div className="Gym-code-box-btn">
                                {visibleItems.map((item) => (
                                <Link to={item.link} key={item.id}>
                                    <button>
                                        <div className="icon-gym-card">
                                            <img src={item.img} alt={item.text} />
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



            <div class="business-2">
                <div className="bus-inner-1">
                    {businessCategories.map((category) => (
                        <Link to = {category.link} key={category.id} > 
                        <div className="bus-inner-2">
                            <div className="inner-col">
                                <img src={category.p1} alt="" />
                            </div>
                            <div className="inner-col-1">
                                <div className="svg-inner">
                                    <img src={category.p2} alt="" />
                                </div>
                                <h5>{category.title}</h5>
                                <a>{t('MoreInfonn')}</a>
                            </div>
                        </div>
                        </Link>
                    ))}
                </div>
            </div>

        </>
    )
}

export default Resourcesc3