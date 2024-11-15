import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { baseurl } from '../baseurl';
import { Container } from 'react-bootstrap';
import step1 from '../img/step1.png';
import step2 from '../img/step2.png';
import step3 from '../img/step3.png';
import { useTranslation } from 'react-i18next';




import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Generator = () => {

  const navigate = useNavigate();

  const { t } = useTranslation();


  const handleSubmit = () => {
      toast.error("You need to login First")
      console.log('Heeloo ')



      setTimeout(() => {
          navigate('/login');
      }, 3000); // 3 seconds delay
  }






  return (
    <>
    <ToastContainer/>

    
      <section className='Generator'>
      <Container>
          <div className="main-Generator">
            <div className="Generator-tital">
              {/* <h2>QR Code Generator: Create your free QR Code</h2>
              <p>Customize it with your color, shape and logo in 3 simple steps.</p> */}
                 <h2>{t('generator_title')}</h2>
                 <p>{t('generator_subtitle')}</p>
            </div>

            <div className="Generator-box">
              <div className="Generator-ab">
                <span className='no1'>1</span>
                <span className='no2'>2</span>
                <span className='no3'>3</span>
              </div>

              <div className="Generator-gr-box">

                <div className="Generator-gr-card">
                  <div className="gr-card-tital">
                    {/* <h2>Choose the content of your QR code</h2> */}
                    <h2>{t('step1')}</h2>

                    <p>{t('step1text1')} <br />
                    {t('step1text2')} </p>
                    <p>{t('step1text3')}</p>
                  </div>

                  <div className="gr-card-img">
                    <img src={step1} alt="" />
                  </div>
                </div>

                <div className="Generator-gr-card">

                  <div className="gr-card-img">
                    <img src={step2} alt="" />
                  </div>

                  <div className="gr-card-tital more-style">
                    {/* <h2>Customise and design it as you like</h2> */}
                    <h2>{t('step2')}</h2>
                    <p>{t('step2text1')} <br />
                    {t('step2text2')}</p>
                  </div>


                </div>


                <div className="Generator-gr-card">
                  <div className="gr-card-tital">
                    <h2>{t('step3')}</h2>
                    <p>{t('step3text1')}<br />
                      {t('step3text2')} <br />
                      {t('step3text3')}
                    </p>
                  </div>

                  <div className="gr-card-img">
                    <img src={step3} alt="" />
                  </div>
                </div>
                <div className="Generator-gr-btn">
                  <button onClick={handleSubmit}>
                   {t('create_button')}
                  </button>
                </div>
              </div>

            </div>
          </div>
          </Container>
      </section>


    </>
  )

}

export default Generator