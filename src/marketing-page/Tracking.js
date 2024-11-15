import React from 'react';
import { useTranslation } from 'react-i18next';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../Footer/Footer';
import Header from '../header/header';
import in50 from '../img/in50.webp';
import in51 from '../img/in51.webp';

const Tracking = () => {
  const { t } = useTranslation();

  return (
    <>
      <Header />
      <section className='Dynamic'>
        <div className="contanir">
          <div className="main-Dynamic">
            <h2>{t('eventTracking')}</h2>
            <div className="Dynamic-imger">
              <img src={in50} alt="" />
            </div>
            <p>{t('eventTrackingDescription')}</p>
          </div>
        </div>
      </section>

      <section className='Benefits11'>
        <div className="contanir">
          <div className="main-Benefits">
            <h2>{t('benefits')}</h2>
            <p>{t('benefitsDescription11')}</p>
            <div className="Benefits-box">
              <p><span>{t('understandingUserBehavior')}:</span> {t('understandingUserBehaviorDescription')}</p>
              <p><span>{t('optimizingCampaignEffectiveness')}:</span> {t('optimizingCampaignEffectivenessDescription')}</p>
              <p><span>{t('performanceMeasurement')}:</span> {t('performanceMeasurementDescription')}</p>
              <p><span>{t('savingTimeResources')}:</span> {t('savingTimeResourcesDescription')}</p>
            </div>
            <p className='hello-padding'>{t('trackingConclusion')}</p>
          </div>
        </div>
      </section>

      <section className='Updating part-2'>
        <div className="contanir">
          <div className="main-Dynamic">
            <h4>{t('howToUse2')}</h4>
            <div className="Dynamic-imger">
              <img src={in51} alt="" />
            </div>
            <p>{t('howToUseDescription2')}</p>
            <ul>
              <li>{t('instruction12')}</li>
              <li>{t('instruction22')}</li>
              <li>{t('instruction32')}</li>
              <li>{t('instruction42')}</li>
            </ul>
            <p>{t('clickTrackingReminder')}</p>
            <ul>
              <li>{t('checkClicksInstruction1')}</li>
              <li>{t('checkClicksInstruction2')}</li>
              <li>{t('checkClicksInstruction3')}</li>
              <li>{t('checkClicksInstruction4')}</li>
            </ul>
            <p>{t('eventVisualizationReminder')}</p>
            <ul>
              <li>{t('visualizationInstruction1')}</li>
              <li>{t('visualizationInstruction2')}</li>
              <li>{t('visualizationInstruction3')}</li>
            </ul>
            <p>{t('eventDelayReminder')}</p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Tracking;
