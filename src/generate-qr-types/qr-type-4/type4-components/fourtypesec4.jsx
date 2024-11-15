import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import unlimitedsvg from "../../../img/unlimited_svg.svg"
import variatyqrtypes from "../../../img/variable_svg.svg"
import varietydownload from "../../../img/variety_download_svg.svg"
import unlimitedmember from "../../../img/unlimited_member.svg"
import completeanlytics from "../../../img/complete_analytics.svg"
import editingqr from "../../../img/editing_qr.svg"
import premiumsupport from "../../../img/premium_support.svg"
import cancelwhenever from "../../../img/cancel_whenever.svg"
import customdomain from "../../../img/custom_domain.svg"
import { useTranslation } from 'react-i18next';

const Fourtypesec4 = () => {
  const { t } = useTranslation();

  return (
    <>
      <section className="all_plan_include_sec">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="all_plan_head">
                <h3>{t('NB_all_plans_include')}</h3>
              </div>
              <div className="all_plan_box">
                <Row>
                  <Col lg={4}>
                    <div className="plan_box_content">
                      <img src={unlimitedsvg} alt="" />
                      <div className="plan_box_text">
                        <h3>{t('NB_unlimited_dynamic_qr')}</h3>
                        <p>{t('NB_unlimited_dynamic_qr_description')}</p>
                      </div>
                    </div>
                  </Col>
                  <Col lg={4}>
                    <div className="plan_box_content">
                      <img src={variatyqrtypes} alt="" />
                      <div className="plan_box_text">
                        <h3>{t('NB_variety_of_qr_types')}</h3>
                        <p>{t('NB_variety_of_qr_types_description')}</p>
                      </div>
                    </div>
                  </Col>
                  <Col lg={4}>
                    <div className="plan_box_content">
                      <img src={varietydownload} alt="" />
                      <div className="plan_box_text">
                        <h3>{t('NB_variety_of_download_formats')}</h3>
                        <p>{t('NB_variety_of_download_formats_description')}</p>
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
                        <h3>{t('NB_unlimited_members')}</h3>
                        <p>{t('NB_unlimited_members_description')}</p>
                      </div>
                    </div>
                  </Col>
                  <Col lg={4}>
                    <div className="plan_box_content">
                      <img src={completeanlytics} alt="" />
                      <div className="plan_box_text">
                        <h3>{t('NB_complete_qr_analytics')}</h3>
                        <p>{t('NB_complete_qr_analytics_description')}</p>
                      </div>
                    </div>
                  </Col>
                  <Col lg={4}>
                    <div className="plan_box_content">
                      <img src={editingqr} alt="" />
                      <div className="plan_box_text">
                        <h3>{t('NB_qr_editing_and_management')}</h3>
                        <p>{t('NB_qr_editing_and_management_description')}</p>
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
                        <h3>{t('NB_unlimited_scans')}</h3>
                        <p>{t('NB_unlimited_scans_description')}</p>
                      </div>
                    </div>
                  </Col>
                  <Col lg={4}>
                    <div className="plan_box_content">
                      <img src={completeanlytics} alt="" />
                      <div className="plan_box_text">
                        <h3>{t('NB_bulk_creation_and_download')}</h3>
                        <p>{t('NB_bulk_creation_and_download_description')}</p>
                      </div>
                    </div>
                  </Col>
                  <Col lg={4}>
                    <div className="plan_box_content">
                      <img src={editingqr} alt="" />
                      <div className="plan_box_text">
                        <h3>{t('NB_integrate_google_and_facebook_pixel')}</h3>
                        <p>{t('NB_integrate_google_and_facebook_pixel_description')}</p>
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
                        <h3>{t('NB_premium_support')}</h3>
                        <p>{t('NB_premium_support_description')}</p>
                      </div>
                    </div>
                  </Col>
                  <Col lg={4}>
                    <div className="plan_box_content">
                      <img src={cancelwhenever} alt="" />
                      <div className="plan_box_text">
                        <h3>{t('NB_cancel_whenever_you_want')}</h3>
                        <p>{t('NB_cancel_whenever_you_want_description')}</p>
                      </div>
                    </div>
                  </Col>
                  <Col lg={4}>
                    <div className="plan_box_content">
                      <img src={customdomain} alt="" />
                      <div className="plan_box_text">
                        <h3>{t('NB_custom_domain')}</h3>
                        <p>{t('NB_custom_domain_description')}</p>
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
  )
}

export default Fourtypesec4;
