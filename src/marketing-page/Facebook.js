import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../Footer/Footer';
import Header from '../header/header';
import in40 from '../img/in40.webp';
import in21 from '../img/in21.webp';
import { useTranslation } from 'react-i18next';

const Facebookin = () => {
  const { t } = useTranslation();

  return (
    <>
      <Header />
      <section className='Dynamic'>
        <div className="contanir">
          <div className="main-Dynamic">
            <h2>{t('google_facebook_pixel_integration_NB')}</h2>
            <div className="Dynamic-imger">
              <img src={in40} alt="" />
            </div>
            <p>{t('follow_customers_steps_NB')}</p>
          </div>
        </div>
      </section>

      <section className='Benefits'>
        <div className="contanir">
          <div className="main-Benefits">
            <h2>{t('benefits_NB')}</h2>
            <p>{t('central_benefit_integration_NB')}</p>
            <p className='padding-top'>{t('example_menu_promotion_NB')}</p>
          </div>
        </div>
      </section>

      <section className='Updating part-2'>
        <div className="contanir">
          <div className="main-Dynamic">
            <h4>{t('how_to_use_NB1')}</h4>
            <div className="Dynamic-imger">
              <img src={in21} alt="" />
            </div>
            <p>{t('integrate_pixel_steps_NB')}</p>
            <ul>
              <li><span>1</span>{t('step_1_NB')}</li>
              <li><span>2</span>{t('step_2_NB')}</li>
              <li><span>3</span>{t('step_3_NB')}</li>
              <li><span>4</span>{t('step_4_NB')}</li>
              <li><span>5</span>{t('step_5_NB')}</li>
            </ul>
            <p>{t('simple_steps_summary_NB')}</p>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
}

export default Facebookin;
