import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import unlimitedsvg from "../../../img/unlimited_svg.svg";
import variatyqrtypes from "../../../img/variable_svg.svg";
import varietydownload from "../../../img/variety_download_svg.svg";
import unlimitedmember from "../../../img/unlimited_member.svg";
import completeanlytics from "../../../img/complete_analytics.svg";
import editingqr from "../../../img/editing_qr.svg";
import premiumsupport from "../../../img/premium_support.svg";
import cancelwhenever from "../../../img/cancel_whenever.svg";
import customdomain from "../../../img/custom_domain.svg";

const Fourtypesec1 = () => {
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
                      <img src={unlimitedsvg} alt={t('NB_image_alt_unlimited_dynamic_qr')} />
                      <div className="plan_box_text">
                        <h3>{t('NB_unlimited_dynamic_qr')}</h3>
                        <p>{t('NB_create_unlimited_qr')}</p>
                      </div>
                    </div>
                  </Col>
                  <Col lg={4}>
                    <div className="plan_box_content">
                      <img src={variatyqrtypes} alt={t('NB_image_alt_variety_qr_types')} />
                      <div className="plan_box_text">
                        <h3>{t('NB_variety_qr_types')}</h3>
                        <p>{t('NB_choose_from_multiple_qr_types')}</p>
                      </div>
                    </div>
                  </Col>
                  <Col lg={4}>
                    <div className="plan_box_content">
                      <img src={varietydownload} alt={t('NB_image_alt_variety_download_formats')} />
                      <div className="plan_box_text">
                        <h3>{t('NB_variety_download_formats')}</h3>
                        <p>{t('NB_download_qr_formats')}</p>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
              <div className="all_plan_box">
                <Row>
                  <Col lg={4}>
                    <div className="plan_box_content">
                      <img src={unlimitedmember} alt={t('NB_image_alt_unlimited_members')} />
                      <div className="plan_box_text">
                        <h3>{t('NB_unlimited_members')}</h3>
                        <p>{t('NB_invite_users')}</p>
                      </div>
                    </div>
                  </Col>
                  <Col lg={4}>
                    <div className="plan_box_content">
                      <img src={completeanlytics} alt={t('NB_image_alt_complete_analytics')} />
                      <div className="plan_box_text">
                        <h3>{t('NB_complete_qr_analytics')}</h3>
                        <p>{t('NB_get_qr_stats')}</p>
                      </div>
                    </div>
                  </Col>
                  <Col lg={4}>
                    <div className="plan_box_content">
                      <img src={editingqr} alt={t('NB_image_alt_qr_editing')} />
                      <div className="plan_box_text">
                        <h3>{t('NB_qr_editing_management')}</h3>
                        <p>{t('NB_customize_qr')}</p>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
              <div className="all_plan_box">
                <Row>
                  <Col lg={4}>
                    <div className="plan_box_content">
                      <img src={unlimitedmember} alt={t('NB_image_alt_unlimited_scans')} />
                      <div className="plan_box_text">
                        <h3>{t('NB_unlimited_scans')}</h3>
                        <p>{t('NB_qr_unlimited_scans')}</p>
                      </div>
                    </div>
                  </Col>
                  <Col lg={4}>
                    <div className="plan_box_content">
                      <img src={completeanlytics} alt={t('NB_image_alt_bulk_creation')} />
                      <div className="plan_box_text">
                        <h3>{t('NB_bulk_creation_download')}</h3>
                        <p>{t('NB_generate_multiple_qrs')}</p>
                      </div>
                    </div>
                  </Col>
                  <Col lg={4}>
                    <div className="plan_box_content">
                      <img src={editingqr} alt={t('NB_image_alt_google_facebook_pixel')} />
                      <div className="plan_box_text">
                        <h3>{t('NB_google_facebook_pixel')}</h3>
                        <p>{t('NB_track_qr_interaction')}</p>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
              <div className="all_plan_boxs">
                <Row>
                  <Col lg={4}>
                    <div className="plan_box_content">
                      <img src={premiumsupport} alt={t('NB_image_alt_premium_support')} />
                      <div className="plan_box_text">
                        <h3>{t('NB_premium_support')}</h3>
                        <p>{t('NB_qr_premium_support')}</p>
                      </div>
                    </div>
                  </Col>
                  <Col lg={4}>
                    <div className="plan_box_content">
                      <img src={cancelwhenever} alt={t('NB_image_alt_cancel_whenever')} />
                      <div className="plan_box_text">
                        <h3>{t('NB_cancel_whenever')}</h3>
                        <p>{t('NB_cancel_plan_anytime')}</p>
                      </div>
                    </div>
                  </Col>
                  <Col lg={4}>
                    <div className="plan_box_content">
                      <img src={customdomain} alt={t('NB_image_alt_custom_domain')} />
                      <div className="plan_box_text">
                        <h3>{t('NB_custom_domain')}</h3>
                        <p>{t('NB_customize_qr_domain')}</p>
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

export default Fourtypesec1;
