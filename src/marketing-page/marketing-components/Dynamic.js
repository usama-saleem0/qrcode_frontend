
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

import in1 from '../../img/in1.webp';
import { useTranslation } from 'react-i18next';





const Dynamic = () => {

  const { t } = useTranslation();




  return (

    <>
    <section className='Dynamic'>
    <div className="contanir">


        <div className="main-Dynamic">
        <h2>{t('editing_dynamic_qr_heading_NB')}</h2>

          <div className="Dynamic-imger">
          <img src={in1} alt="" />
          </div>
          

          <p>{t('static_qr_paragraph_NB')}</p>
        </div>
        </div>
    </section>
    </>
  )

}

export default Dynamic