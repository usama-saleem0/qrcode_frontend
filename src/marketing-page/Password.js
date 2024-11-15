import React from 'react';
import { useTranslation } from 'react-i18next';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../Footer/Footer';
import Header from '../header/header';
import in31 from '../img/in31.webp';
import in32 from '../img/in32.webp';

const Password = () => {
  const { t } = useTranslation();

  return (
    <>
      <Header />
      <section className='Dynamic'>
        <div className="contanir">
          <div className="main-Dynamic">
            <h2>{t('passwordAccessProtection')}</h2>
            <div className="Dynamic-imger">
              <img src={in31} alt="" />
            </div>
            <p>{t('passwordAccessDescription')}</p>
          </div>
        </div>
      </section>

      <section className='Benefits1'>
        <div className="contanir">
          <div className="main-Benefits">
            <h2>{t('benefits')}</h2>
            <p>{t('benefitsDescription1')}</p>
            <p>{t('benefitsDescription2')}</p>
          </div>
        </div>
      </section>

      <section className='Updating part-2'>
        <div className="contanir">
          <div className="main-Dynamic">
            <h4>{t('howToUse1')}</h4>
            <div className="Dynamic-imger">
              <img src={in32} alt="" />
            </div>
            <p>{t('howToUseDescription')}</p>
            <ul>
              <li>{t('instruction11')}</li>
              <li>{t('instruction21')}</li>
              <li>{t('instruction31')}</li>
              <li>{t('instruction41')}</li>
            </ul>
            <p>{t('passwordSetReminder')}</p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Password;
