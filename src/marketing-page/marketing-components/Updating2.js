import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import in12 from '../../img/in12.webp';
import { useTranslation } from 'react-i18next';
const Updating2 = () => {
  const { t } = useTranslation();
  return (
    <>
      <section className='Benefits'>
        <div className="contanir">
          <div className="main-Benefits">
            <h2>{t('benefits_heading_NB')}</h2>
            <div className="Benefits-box">
              <p>
                <span>{t('tracking_and_analytics_NB')}:</span> {t('tracking_description_NB')}
              </p>
              <p>
                <span>{t('real_time_update_NB')}:</span> {t('real_time_update_description_NB')}
              </p>
              <p>
                <span>{t('bug_fixes_NB')}:</span> {t('bug_fixes_description_NB')}
              </p>
              <p>
                <span>{t('cost_savings_NB')}:</span> {t('cost_savings_description_NB')}
              </p>
              <p>
                <span>{t('using_short_urls_NB')}:</span> {t('short_urls_description_NB')}
              </p>
              <p>
                <span>{t('adaptation_to_marketing_campaigns_NB')}:</span> {t('adaptation_description_NB')}
              </p>
              <p>
                <span>{t('security_and_management_NB')}:</span> {t('security_description_NB')}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className='Updating part-2'>
        <div className="contanir">
          <div className="main-Dynamic">
            <h4>{t('how_to_use_NB')}</h4>
            <div className="Dynamic-imger">
              <img src={in12} alt="" />
            </div>
            <p>{t('creating_customizing_description_NB')}</p>
            <div className="Choice-box">
              <h5>{t('choice_of_dynamic_qr_type_NB')}</h5>
              <span>{t('choice_type_description_NB')}</span>
            </div>
            <div className="Choice-box">
              <h5>{t('added_required_information_NB')}</h5>
              <span>{t('added_information_description_NB')}</span>
            </div>
            <div className="Choice-box">
              <h5>{t('qr_code_customization_NB')}</h5>
              <span>{t('customization_description_NB')}</span>
            </div>
            <div className="Choice-box">
              <h5>{t('qr_code_download_NB')}</h5>
              <span>{t('download_description_NB')}</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Updating2;
