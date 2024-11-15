import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import websiteicon from "../img/website_icon_img.png"
import pdficon from "../img/pdf_icon_img.png"
import vCardicon from "../img/vCard_icon_img.png"
import imageicon from "../img/image_icon_img.png"
import texticon from "../img/text_icon_img.png"
import videoicon from "../img/video_icon_img.png"
import listlinksicon from "../img/listlinks_icon_img.png"
import bussinessicon from "../img/bussiness_icon_img.png"
import menuicon from "../img/menu_icon_img.png"
import coupenicon from "../img/coupens_icon_img.png"
import mp3icon from "../img/mp3_icon_img.png"
import Qrcodeslider from './homeslider/qrcodeslider'

import { useTranslation } from 'react-i18next';

const Generatetypesqrcode = () => {

  const { t } = useTranslation();
  return (
    <>
      <section className="generate_different_typeqrcode">
        <Container>
          <Row>
            <Col lg={12} className='p-0'>
              <div className="generate_qrcode_head">
                <h3>{t('ngenete1')}</h3>
                <p>{t('ngenete12')} </p>
              </div>
            </Col>
            <Col lg={12} className='p-0'>
              {/* <ul className='list_icon_container'>
                <li>
                  <div className="list_icon_imgtxt">
                    <div className="list_icon_img">
                      <img src={websiteicon} alt="" />
                    </div>
                    <p>Website</p>
                  </div>
                </li>
                <li>
                  <div className="list_icon_imgtxt">
                    <div className="list_icon_img">
                      <img src={pdficon} alt="" />
                    </div>
                    <p>PDF</p>
                  </div>
                </li>
                <li>
                  <div className="list_icon_imgtxt">
                    <div className="list_icon_img">
                      <img src={vCardicon} alt="" />
                    </div>
                    <p>vCard Plus</p>
                  </div>
                </li>
                <li>
                  <div className="list_icon_imgtxt">
                    <div className="list_icon_img">
                      <img src={menuicon} alt="" />
                    </div>
                    <p>Images</p>
                  </div>
                </li>
                <li>
                  <div className="list_icon_imgtxt">
                    <div className="list_icon_img">
                      <img src={texticon} alt="" />
                    </div>
                    <p>Text</p>
                  </div>
                </li>
                <li>
                  <div className="list_icon_imgtxt">
                    <div className="list_icon_img">
                      <img src={videoicon} alt="" />
                    </div>
                    <p>Video</p>
                  </div>
                </li>
                <li>
                  <div className="list_icon_imgtxt">
                    <div className="list_icon_img">
                      <img src={listlinksicon} alt="" />
                    </div>
                    <p>List of links</p>
                  </div>
                </li>
                <li> <div className="list_icon_imgtxt">
                  <div className="list_icon_img">
                    <img src={bussinessicon} alt="" />
                  </div>
                  <p>Business</p>
                </div></li>
                <li> <div className="list_icon_imgtxt">
                  <div className="list_icon_img">
                    <img src={menuicon} alt="" />
                  </div>
                  <p>Menu</p>
                </div>
                </li>
                <li>
                  <div className="list_icon_imgtxt">
                    <div className="list_icon_img">
                      <img src={coupenicon} alt="" />
                    </div>
                    <p>Coupons</p>
                  </div>
                </li>
                <li>
                  <div className="list_icon_imgtxt">
                    <div className="list_icon_img">
                      <img src={mp3icon} alt="" />
                    </div>
                    <p>MP3</p>
                  </div>
                </li>
              </ul> */}
              <Qrcodeslider/>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Generatetypesqrcode