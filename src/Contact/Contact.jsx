import React from 'react';
import { useTranslation } from 'react-i18next';
import Header from '../header/header';
import Footer from '../Footer/Footer';

import f1 from "../img/faq-C_4E61Zl.svg";
import f2 from "../img/support-CCndMEQL.svg";
import f3 from "../img/ICON1.svg";
import f4 from "../img/ICON2.svg";
import f5 from "../img/ICON3.svg";
import f6 from "../img/sec-3-img.svg";

function ContactForm() {
  const { t } = useTranslation();

  return (
    <>
      <Header />
      <section className="sec-contact">
        <div className="container-bobby">
          <div className="main-contact">
            <div className="box-title">
              <h1>{t('contact_form_title_NB')}</h1>
              <p>{t('contact_form_description_NB')}</p>
            </div>
            <div className="box-inputs">
              <div className="p-input">
                <label className="l-input-contact" htmlFor="name">{t('contact_form_name_NB')}</label>
                <input
                  className="input-contact"
                  required
                  placeholder={t('contact_form_name_placeholder_NB')}
                  type="text"
                  id="name"
                />
              </div>
              <div className="p-input">
                <label className="l-input-contact" htmlFor="email">{t('contact_form_email_NB')}</label>
                <input
                  className="input-contact"
                  required
                  placeholder={t('contact_form_email_placeholder_NB')}
                  type="email"
                  id="email"
                />
              </div>
              <div className="p-input">
                <label className="l-input-contact" htmlFor="subject">{t('contact_form_subject_NB')}</label>
                <select className="input-contact-dd" id="subject" required>
                  <option value="">{t('contact_form_select_NB')}</option>
                  <option value="option1">{t('contact_form_option1_NB')}</option>
                  <option value="option2">{t('contact_form_option2_NB')}</option>
                  <option value="option3">{t('contact_form_option3_NB')}</option>
                </select>
              </div>
              <div className="p-input">
                <label className="l-input-contact" htmlFor="message">{t('contact_form_message_NB')}</label>
                <textarea
                  className="contact-message"
                  placeholder={t('contact_form_message_placeholder_NB')}
                  id="message"
                  required
                ></textarea>
              </div>
              <button className="contact-btn">{t('contact_form_send_button_NB')}</button>
            </div>
          </div>
        </div>
      </section>

      <section className="sec-2">
        <div className="container-bobby dir">
          <div className="box1-sec2">
            <img className="img-box-1" src={f1} alt="" />
            <div className="inner-box">
              <h3>{t('faq_title_NB')}</h3>
              <p>{t('faq_description_NB')}</p>
              <button className="btn-sec2">{t('faq_button_NB')}</button>
            </div>
          </div>

          <div className="box1-sec2">
            <img className="img-box-1" src={f2} alt="" />
            <div className="inner-box">
              <h3>{t('support_title_NB')}</h3>
              <p>{t('support_description_NB')}</p>
              <button className="btn-sec2">{t('support_button_NB')}</button>
            </div>
          </div>
        </div>
      </section>

      <section className="sec-3">
        <div className="container-bobby-2 dir">
          <div className="main-box">
            <div className="box-1">
              <h3>{t('stay_in_touch_title_NB')}</h3>
              <h5>{t('stay_in_touch_subtitle_NB')}</h5>
            </div>
            <div className="box-2">
              <img className="icon-linkedin" src={f3} alt="" />
              <img className="icon-linkedin" src={f4} alt="" />
              <img className="icon-linkedin" src={f5} alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className="sec-3">
        <div className="container-bobby-2 dir">
          <div className="main-sec3">
            <div className="box-sec3-1">
              <div className="box-sec3-inner">
                <img src={f6} alt="" />
                <div className="text-sec3">
                  <h1>{t('location_title_NB')}</h1>
                  <p>{t('location_address_NB')}</p>
                </div>
              </div>
              <div className="box-sec3-inner2">
                <p>{t('location_company_name_NB')}</p>
                <table>
                  <tbody>
                    <tr>
                      <td>{t('location_email_label_NB')}</td>
                      <td>{t('location_gift_label_NB')}</td>
                    </tr>
                    <tr>
                      <td><a className="link-table" href="mailto:support@qrfy.com">{t('location_email_NB')}</a></td>
                      <td>B67081794</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default ContactForm;
