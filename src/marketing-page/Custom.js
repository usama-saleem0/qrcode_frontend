import React from 'react';
import { useTranslation } from 'react-i18next';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../Footer/Footer';
import Header from '../header/header';
import in29 from '../img/in29.webp';
import in30 from '../img/in30.webp';

const Custom = () => {
  const { t } = useTranslation();

  return (
    <>
      <Header />
      <section className='Dynamic'>
        <div className="contanir">
          <div className="main-Dynamic">
            <h2>{t('customDomain')}</h2>
            <div className="Dynamic-imger">
              <img src={in29} alt="" />
            </div>
            <p>{t('customDomainDescription')}</p>
          </div>
        </div>
      </section>

      <section className='Benefits'>
        <div className="contanir">
          <div className="main-Benefits">
            <h2>{t('benefits')}</h2>
            <p>{t('benefitsDescription')}</p>
          </div>
        </div>
      </section>

      <section className='Updating part-2'>
        <div className="contanir">
          <div className="main-Dynamic">
            <h4>{t('howToUse')}</h4>
            <div className="Dynamic-imger">
              <img src={in30} alt="" />
            </div>
            <ul>
              <li>{t('instruction1')}</li>
              <li>{t('instruction2')}</li>
              <li>{t('instruction3')}</li>
              <li>{t('instruction4')}</li>
              <li>{t('clarification')}</li>
              <li>{t('instruction5')}</li>
              <li>{t('instruction6')}</li>
              <li>{t('instruction7')}</li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Custom;
