import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import unlimitedsvg from "../../../img/unlimited_svg.svg";
import variatyqrtypes from "../../../img/variable_svg.svg";
import varietydownload from "../../../img/variety_download_svg.svg";
import unlimitedmember from "../../../img/unlimited_member.svg";
import completeanlytics from "../../../img/complete_analytics.svg";
import editingqr from "../../../img/editing_qr.svg";
import premiumsupport from "../../../img/premium_support.svg";
import cancelwhenever from "../../../img/cancel_whenever.svg";
import customdomain from "../../../img/custom_domain.svg";
import { useTranslation } from "react-i18next";

const Fourtypesec = () => {
  const { t } = useTranslation();

  return (
    <>
      <section className="all_plan_include_sec">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="all_plan_head">
                <h3>{t('allPlansInclude')}</h3>
              </div>
              <div className="all_plan_box">
                <Row>
                  <Col lg={4}>
                    <div className="plan_box_content">
                      <img src={unlimitedsvg} alt="" />
                      <div className="plan_box_text">
                        <h3>{t('unlimitedDynamicQR')}</h3>
                        <p>{t('unlimitedQRsDescription')}</p>
                      </div>
                    </div>
                  </Col>
                  <Col lg={4}>
                    <div className="plan_box_content">
                      <img src={variatyqrtypes} alt="" />
                      <div className="plan_box_text">
                        <h3>{t('varietyOfQRTypes')}</h3>
                        <p>{t('varietyQRsDescription')}</p>
                      </div>
                    </div>
                  </Col>
                  <Col lg={4}>
                    <div className="plan_box_content">
                      <img src={varietydownload} alt="" />
                      <div className="plan_box_text">
                        <h3>{t('varietyOfDownloadFormats')}</h3>
                        <p>{t('downloadFormatsDescription')}</p>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
              <div className="all_plan_box">
                <Row>
                  <Col lg={4}>
                    <div className="plan_box_content">
                      <img src={unlimitedmember} alt="" />
                      <div className="plan_box_text">
                        <h3>{t('unlimitedMembers')}</h3>
                        <p>{t('inviteUsersDescription')}</p>
                      </div>
                    </div>
                  </Col>
                  <Col lg={4}>
                    <div className="plan_box_content">
                      <img src={completeanlytics} alt="" />
                      <div className="plan_box_text">
                        <h3>{t('completeQRAnalytics')}</h3>
                        <p>{t('analyticsDescription')}</p>
                      </div>
                    </div>
                  </Col>
                  <Col lg={4}>
                    <div className="plan_box_content">
                      <img src={editingqr} alt="" />
                      <div className="plan_box_text">
                        <h3>{t('qrEditingAndManagement')}</h3>
                        <p>{t('editingDescription')}</p>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
              <div className="all_plan_box">
                <Row>
                  <Col lg={4}>
                    <div className="plan_box_content">
                      <img src={unlimitedmember} alt="" />
                      <div className="plan_box_text">
                        <h3>{t('unlimitedScans')}</h3>
                        <p>{t('unlimitedScansDescription')}</p>
                      </div>
                    </div>
                  </Col>
                  <Col lg={4}>
                    <div className="plan_box_content">
                      <img src={completeanlytics} alt="" />
                      <div className="plan_box_text">
                        <h3>{t('bulkCreationAndDownload')}</h3>
                        <p>{t('bulkCreationDescription')}</p>
                      </div>
                    </div>
                  </Col>
                  <Col lg={4}>
                    <div className="plan_box_content">
                      <img src={editingqr} alt="" />
                      <div className="plan_box_text">
                        <h3>{t('integrateGoogleFacebookPixel')}</h3>
                        <p>{t('pixelTrackingDescription')}</p>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
              <div className="all_plan_boxs">
                <Row>
                  <Col lg={4}>
                    <div className="plan_box_content">
                      <img src={premiumsupport} alt="" />
                      <div className="plan_box_text">
                        <h3>{t('premiumSupport')}</h3>
                        <p>{t('premiumSupportDescription')}</p>
                      </div>
                    </div>
                  </Col>
                  <Col lg={4}>
                    <div className="plan_box_content">
                      <img src={cancelwhenever} alt="" />
                      <div className="plan_box_text">
                        <h3>{t('cancelWhenever')}</h3>
                        <p>{t('cancelDescription')}</p>
                      </div>
                    </div>
                  </Col>
                  <Col lg={4}>
                    <div className="plan_box_content">
                      <img src={customdomain} alt="" />
                      <div className="plan_box_text">
                        <h3>{t('customDomain1')}</h3>
                        <p>{t('customDomainDescription1')}</p>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Fourtypesec;
