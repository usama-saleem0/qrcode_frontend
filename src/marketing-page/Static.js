import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../Footer/Footer';
import Header from '../header/header';
import in24 from '../img/in24.webp';
import in25 from '../img/in25.webp';
import { useTranslation } from 'react-i18next';

const Static = () => {
  const { t } = useTranslation();

  return (
    <>
      <Header />
      <section className='Dynamic'>
        <div className="contanir">
          <div className="main-Dynamic">
            <h2>{t('static_qrs_NB')}</h2>
            <div className="Dynamic-imger">
              <img src={in24} alt="" />
            </div>
            <p>{t('static_qrs_description_NB')}</p>
          </div>
        </div>
      </section>

      <section className='Benefits'>
        <div className="contanir">
          <div className="main-Benefits">
            <h2>{t('benefits_NB2')}</h2>
            <p>{t('using_static_qrs_advantages_NB')}</p>
            <div className="Benefits-box">
              <p><span>{t('content_stability_NB')}:</span> {t('content_stability_description_NB')}</p>
              <p><span>{t('simplicity_of_creation_NB')}:</span> {t('simplicity_of_creation_description_NB')}</p>
              <p><span>{t('universal_compatibility_NB')}:</span> {t('universal_compatibility_description_NB')}</p>
              <p><span>{t('no_internet_required_NB')}:</span> {t('no_internet_required_description_NB')}</p>
              <p><span>{t('lower_complexity_NB')}:</span> {t('lower_complexity_description_NB')}</p>
              <p><span>{t('reliability_NB')}:</span> {t('reliability_description_NB')}</p>
              <p><span>{t('information_security_NB')}:</span> {t('information_security_description_NB')}</p>
            </div>
          </div>
        </div>
      </section>

      <section className='Updating part-2'>
        <div className="contanir">
          <div className="main-Dynamic">
            <h4>{t('how_to_use_NB3')}</h4>
            <div className="Dynamic-imger">
              <img src={in25} alt="" />
            </div>
            <p>{t('static_qrs_usage_description_NB')}</p>
            <ul>
              <li><span>1</span>{t('step_1_choose_type_NB')}</li>
              <li><span>2</span>{t('step_2_add_information_NB')}</li>
              <li><span>3</span>{t('step_3_customize_qr_NB')}</li>
              <li><span>4</span>{t('step_4_download_qr_NB')}</li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Static;
