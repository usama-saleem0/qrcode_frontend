import React from 'react';
import { useTranslation } from 'react-i18next';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import in18 from '../../img/in18.webp';

const Dynamic4 = () => {
  const { t } = useTranslation();

  return (
    <section className='Dynamic'>
      <div className="contanir">
        <div className="main-Dynamic">
          <h2>{t('variety_of_download_formats_NB')}</h2>
          <div className="Dynamic-imger">
            <img src={in18} alt="" />
          </div>
          <p>{t('qrfy_download_formats_paragraph_NB')}</p>
        </div>
      </div>
    </section>
  );
}

export default Dynamic4;
