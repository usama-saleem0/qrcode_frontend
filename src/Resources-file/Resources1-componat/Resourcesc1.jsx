import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { IoChevronForwardSharp } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa6";

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import img1 from "../../img/image-removebg-preview.png"
import img2 from "../../img/new 1111.png"
import img3 from "../../img/new-1.png"
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
const Resourcesc1 = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    const handleregister = () => {
        navigate('/signup')
    }

    const website = () => {
        navigate('/Qrtypeone');
    }


    const Video = () => {
        navigate('/Qrtype3');
    }

    const Apps = () => {
        navigate('/Qrtype5');
    }
    const Images = () => {
        navigate('/Qrtype10');
    }
    const MP3 = () => {
        navigate('/Mp3home');
    }
    const Couponhome = () => {
        navigate('/Couponhome');
    }
    const menuhome = () => {
        navigate('/menuhome');
    }
    const businesshome = () => {
        navigate('/businesshome');
    }
    const playlisthome = () => {
        navigate('/playlisthome');
    }
    const eventhome = () => {
        navigate('/eventhome');
    }
    const feedbackhome = () => {
        navigate('/feedbackhome');
    }
    const landinghome = () => {
        navigate('/landinghome');
    }
    const ListLink = () => {
        navigate('/Qrtype2');
    }
    const Vcard = () => {
        navigate('/Qrtype4');
    }
    const pdf = () => {
        navigate('/Qrtype9');
    }
    return (
        <>


            <div class="main-section">
                <div class="inner-main">
                    <h2>{t('NBres1')}<span>{t('NBres2')}</span>{t('NBres3')}</h2>
                    <p>{t('NBres4')}</p>
                </div>
            </div>



            <div class="main-section-3">
                <div class="section-3-cont">
                    <div class="inner-sec-3">
                        <div class="inner-col-1">
                            <img src={img1} alt="" />
                        </div>
                        <div class="inner-col-2">
                            <h3>{t('NBres5')}</h3>
                            <p>{t('NBres6')}</p>

                            <div class="col-div-1">
                                <a onClick={handleregister}>{t('NBres7')}</a>
                                <a class="inner-btn" onClick={website}>{t('NBres8')}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div class="main-section-4">
                <div class="section-3-cont">
                    <div class="inner-sec-3">

                        <div class="inner-col-2">
                            <h3>{t('NBres9')}</h3>
                            <p>{t('NBres10')}</p>

                            <div class="col-div-1">
                             <a onClick={handleregister}>{t('NBres7')}</a>
                                <a class="inner-btn" onClick={ListLink}>{t('NBres8')}</a>
                            </div>
                        </div>

                        <div class="inner-col-1">
                            <img src={img2} alt="" />
                        </div>

                    </div>
                </div>
            </div>

            <div class="main-section-5">
                <div class="section-3-cont">
                    <div class="inner-sec-3">
                        <div class="inner-col-1">
                            <img src={img3} alt="" />
                        </div>
                        <div class="inner-col-2">
                            <h3>Video</h3>
                            <p>{t('NBres11')}</p>

                            <div class="col-div-1">
                             <a onClick={handleregister}>{t('NBres7')}</a>
                                <a class="inner-btn" onClick={Video}>{t('NBres8')}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="main-section-6">
                <div class="section-3-cont">
                    <div class="inner-sec-3">

                        <div class="inner-col-2">
                            <h3>{t('NBres12')}</h3>
                            <p>{t('NBres13')}</p>

                            <div class="col-div-1">
                             <a onClick={handleregister}>{t('NBres7')}</a>
                                <a class="inner-btn" onClick={Vcard}>{t('NBres8')}</a>
                            </div>
                        </div>

                        <div class="inner-col-1">
                            <img src={img1} alt="" />
                        </div>

                    </div>
                </div>
            </div>


            <div class="main-section-7">
                <div class="section-3-cont">
                    <div class="inner-sec-3">
                        <div class="inner-col-1">
                            <img src={img1} alt="" />
                        </div>
                        <div class="inner-col-2">
                            <h3>{t('NBres14')}</h3>
                            <p>{t('NBres15')}</p>

                            <div class="col-div-1">
                             <a onClick={handleregister}>{t('NBres7')}</a>
                                <a class="inner-btn" onClick={Apps}>{t('NBres8')}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div class="main-section-8">
                <div class="section-3-cont">
                    <div class="inner-sec-3">

                        <div class="inner-col-2">
                            <h3>{t('NBres16')}</h3>
                            <p>{t('NBres17')}</p>

                            <div class="col-div-1">
                             <a onClick={handleregister}>{t('NBres7')}</a>
                                <a class="inner-btn" onClick={Couponhome}>{t('NBres8')}</a>
                            </div>
                        </div>
                        <div class="inner-col-1">
                            <img src={img1} alt="" />
                        </div>

                    </div>
                </div>
            </div>

            <div class="main-section-9">
                <div class="section-3-cont">
                    <div class="inner-sec-3">
                        <div class="inner-col-1">
                            <img src={img1} alt="" />
                        </div>
                        <div class="inner-col-2">
                            <h3>{t('NBres18')}</h3>
                            <p>{t('NBres19')}</p>

                            <div class="col-div-1">
                             <a onClick={handleregister}>{t('NBres7')}</a>
                                <a class="inner-btn" onClick={playlisthome}>{t('NBres8')}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="main-section-10">
                <div class="section-3-cont">
                    <div class="inner-sec-3">

                        <div class="inner-col-2">
                            <h3>{t('NBres20')}</h3>
                            <p>{t('NBres21')}</p>

                            <div class="col-div-1">
                             <a onClick={handleregister}>{t('NBres7')}</a>
                                <a class="inner-btn" onClick={eventhome}>{t('NBres8')}</a>
                            </div>
                        </div>
                        <div class="inner-col-1">
                            <img src={img1} alt="" />
                        </div>

                    </div>
                </div>
            </div>

            <div class="main-section-11">
                <div class="section-3-cont">
                    <div class="inner-sec-3">
                        <div class="inner-col-1">
                            <img src={img1} alt="" />
                        </div>
                        <div class="inner-col-2">
                            <h3>PDF</h3>
                            <p>{t('NBres22')}</p>

                            <div class="col-div-1">
                             <a onClick={handleregister}>{t('NBres7')}</a>
                                <a class="inner-btn" onClick={pdf}>{t('NBres8')}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="main-section-12">
                <div class="section-3-cont">
                    <div class="inner-sec-3">

                        <div class="inner-col-2">
                            <h3>{t('NBfooter19')}</h3>
                            <p>{t('NBres23')}</p>

                            <div class="col-div-1">
                             <a onClick={handleregister}>{t('NBres7')}</a>
                                <a class="inner-btn" onClick={Images}>{t('NBres8')}</a>
                            </div>
                        </div>
                        <div class="inner-col-1">
                            <img src={img1} alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <div class="main-section-13">
                <div class="section-3-cont">
                    <div class="inner-sec-3">
                        <div class="inner-col-1">
                            <img src={img1} alt="" />
                        </div>
                        <div class="inner-col-2">
                            <h3>{t('NBfooter21')}</h3>
                            <p>{t('NBres24')}</p>

                            <div class="col-div-1">
                             <a onClick={handleregister}>{t('NBres7')}</a>
                                <a class="inner-btn" onClick={businesshome}>{t('NBres8')}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="main-section-14">
                <div class="section-3-cont">
                    <div class="inner-sec-3">

                        <div class="inner-col-2">
                            <h3>{t('NBfooter22')}</h3>
                            <p>{t('NBres25')}</p>

                            <div class="col-div-1">
                             <a onClick={handleregister}>{t('NBres7')}</a>
                                <a class="inner-btn" onClick={menuhome}>{t('NBres8')}</a>
                            </div>
                        </div>
                        <div class="inner-col-1">
                            <img src={img1} alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <div class="main-section-15">
                <div class="section-3-cont">
                    <div class="inner-sec-3">
                        <div class="inner-col-1">
                            <img src={img1} alt="" />
                        </div>
                        <div class="inner-col-2">
                            <h3>MP3</h3>
                            <p>{t('NBres26')}</p>

                            <div class="col-div-1">
                             <a onClick={handleregister}>{t('NBres7')}</a>
                                <a class="inner-btn" onClick={MP3}>{t('NBres8')}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="main-section-16">
                <div class="section-3-cont">
                    <div class="inner-sec-3">

                        <div class="inner-col-2">
                            <h3>{t('NBfooter27')}</h3>
                            <p>{t('NBres26')}</p>

                            <div class="col-div-1">
                             <a onClick={handleregister}>{t('NBres7')}</a>
                                <a class="inner-btn" onClick={feedbackhome}>{t('NBres8')}</a>
                            </div>
                        </div>
                        <div class="inner-col-1">
                            <img src={img1} alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <div class="main-section-17">
                <div class="section-3-cont">
                    <div class="inner-sec-3">
                        <div class="inner-col-1">
                            <img src={img1} alt="" />
                        </div>
                        <div class="inner-col-2">
                            <h3>{t('NBfooter25')}</h3>
                            <p>Convert your page visitors into future customers, directing them to irresistible promotions of your products or services.</p>

                            <div class="col-div-1">
                             <a onClick={handleregister}>{t('NBres7')}</a>
                                <a class="inner-btn" onClick={landinghome}>{t('NBres8')}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div class="main-static">
                <div class="inner-static">
                    <h4>{t('NBres29')}</h4>
                    <div class="code-1">
                        <div class="code-inner">
                            <div class="code-innner-1">
                                <h3>URL</h3>
                                <p>{t('NBres30')}</p>
                             <a onClick={handleregister}>{t('NBbtn1')}</a>
                            </div>
                        </div>

                        <div class="code-inner">
                            <div class="code-innner-1">
                                <h3>SMS</h3>
                                <p>{t('NBres34')}</p>
                             <a onClick={handleregister}>{t('NBbtn1')}</a>
                            </div>
                        </div>

                        <div class="code-inner">
                            <div class="code-innner-1">
                                <h3>WiFi</h3>
                                <p>{t('NBres35')}</p>
                             <a onClick={handleregister}>{t('NBbtn1')}</a>
                            </div>
                        </div>

                        <div class="code-inner">
                            <div class="code-innner-1">
                                <h3>{t('NBres31')}</h3>
                                <p>{t('NBres36')}</p>
                             <a onClick={handleregister}>{t('NBbtn1')}</a>
                            </div>
                        </div>

                        <div class="code-inner">
                            <div class="code-innner-1">
                                <h3>WhatsApp</h3>
                                <p>{t('NBres36')}</p>
                             <a onClick={handleregister}>{t('NBbtn1')}</a>
                            </div>
                        </div>

                        <div class="code-inner">
                            <div class="code-innner-1">
                                <h3>{t('NBres32')}</h3>
                                <p>{t('NBres38')}</p>
                             <a onClick={handleregister}>{t('NBbtn1')}</a>
                            </div>
                        </div>

                        <div class="code-inner">
                            <div class="code-innner-1">
                                <h3>{t('NBres33')}</h3>
                                <p>{t('NBres39')}</p>
                             <a onClick={handleregister}>{t('NBbtn1')}</a>
                            </div>
                        </div>
                    </div>


                </div>
            </div>




        </>
    )
}

export default Resourcesc1