import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import in20 from '../../img/in20.webp';
import { useTranslation } from 'react-i18next';

const Dynamic5 = () => {
  const { t } = useTranslation();
  return (
    <>
      <section className='Dynamic'>
        <div className="contanir">
          <div className="main-Dynamic">
            <h2>{t('complete_analytics_NB')}</h2>
            <div className="Dynamic-imger">
              <img src={in20} alt="" />
            </div>
            <p>{t('complete_analytics_paragraph_NB')}</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Dynamic5;
