import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../Footer/Footer';
import Header from '../header/header';
import { useTranslation } from 'react-i18next';
import in22 from '../img/in22.webp';
import in23 from '../img/in23.webp';

const Templates = () => {
  const { t } = useTranslation();

  return (
    <>
      <Header />
      <section className='Dynamic'>
        <div className="contanir">
          <div className="main-Dynamic">
            <h2>{t('templates_NB')}</h2>
            <div className="Dynamic-imger">
              <img src={in22} alt="" />
            </div>
            <p>{t('qr_code_templates_description_NB')}</p>
          </div>
        </div>
      </section>

      <section className='Benefits'>
        <div className="contanir">
          <div className="main-Benefits">
            <h2>{t('benefits_NB1')}</h2>
            <p>{t('using_templates_advantages_NB')}</p>
            <div className="Benefits-box">
              <p><span>{t('time_savings_NB')}:</span> {t('time_savings_description_NB')}</p>
              <p><span>{t('brand_consistency_NB')}:</span> {t('brand_consistency_description_NB')}</p>
              <p><span>{t('simplicity_NB')}:</span> {t('simplicity_description_NB')}</p>
              <p><span>{t('versatility_NB')}:</span> {t('versatility_description_NB')}</p>
            </div>
          </div>
        </div>
      </section>

      <section className='Updating part-2'>
        <div className="contanir">
          <div className="main-Dynamic">
            <h4>{t('how_to_use_NB2')}</h4>
            <div className="Dynamic-imger">
              <img src={in23} alt="" />
            </div>
            <h5>{t('how_to_create_templates_NB')}</h5>
            <ul>
              <li><span>1</span>{t('step_1_access_templates_NB')}</li>
              <li><span>2</span>{t('step_2_create_template_NB')}</li>
              <li><span>3</span>{t('step_3_enter_template_details_NB')}</li>
              <li><span>4</span>{t('step_4_save_template_NB')}</li>
            </ul>

            <h5>{t('how_to_save_templates_NB')}</h5>
            <ul>
              <li><span>1</span>{t('step_1_save_template_when_finished_NB')}</li>
              <li><span>2</span>{t('step_2_select_colors_styles_NB')}</li>
              <li><span>3</span>{t('step_3_finish_and_save_NB')}</li>
            </ul>

            <h5>{t('application_of_templates_NB')}</h5>
            <p>{t('template_application_description_NB')}</p>
            <p>{t('consistent_visual_identity_NB')}</p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Templates;
