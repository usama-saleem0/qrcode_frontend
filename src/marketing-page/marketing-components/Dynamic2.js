import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import in11 from '../../img/in11.webp';
import { useTranslation } from 'react-i18next';
const Dynamic2 = () => {
  const { t } = useTranslation();
  return (
    <>
      <section className='Dynamic'>
        <div className="contanir">
          <div className="main-Dynamic">
            <h2>{t('dynamic_qr_heading_NB')}</h2>
            <div className="Dynamic-imger">
              <img src={in11} alt="" />
            </div>
            <p>
              {t('dynamic_qr_description_NB')}
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Dynamic2;
