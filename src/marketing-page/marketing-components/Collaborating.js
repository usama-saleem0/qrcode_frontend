import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import in13 from '../../img/in13.webp';
import { useTranslation } from 'react-i18next';
const Dynamic3 = () => {
  const { t } = useTranslation();
  return (
    <>
      <section className='Dynamic'>
        <div className="contanir">
          <div className="main-Dynamic">
            <h2>{t('collaborating_users_heading_NB')}</h2>
            <div className="Dynamic-imger">
              <img src={in13} alt="" />
            </div>
            <p>{t('collaborating_users_description_NB')}</p>
            <p>{t('marketing_team_example_NB')}</p>
            <p>{t('user_invitation_tool_description_NB')}</p>
            <p>{t('flexibility_adaptability_description_NB')}</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Dynamic3;
