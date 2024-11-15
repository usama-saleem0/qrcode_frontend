import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import in15 from '../../img/in15.webp';
import in14 from '../../img/in14.webp';
import in16 from '../../img/in16.webp';
import in17 from '../../img/in17.webp';
import { useTranslation } from 'react-i18next';

const Updating3 = () => {
  const { t } = useTranslation();

  return (
    <>
      <section className='Benefits'>
        <div className="contanir">
          <div className="main-Benefits">
            <h2>{t('benefits_heading_NB1')}</h2>
            <p>{t('benefits_intro_NB')}</p>
            <div className="Benefits-box">
              <p><span>{t('benefit_collaboration_NB')}</span> {t('benefit_collaboration_description_NB')}</p>
              <p><span>{t('benefit_organization_NB')}</span> {t('benefit_organization_description_NB')}</p>
              <p><span>{t('benefit_flexibility_NB')}</span> {t('benefit_flexibility_description_NB')}</p>
              <p><span>{t('benefit_resource_management_NB')}</span> {t('benefit_resource_management_description_NB')}</p>
            </div>
          </div>
        </div>
      </section>

      <section className='Updating part-2'>
        <div className="contanir">
          <div className="main-Dynamic">
            <h4>{t('how_to_use_heading_NB')}</h4>
            <div className="Dynamic-imger">
              <img src={in14} alt="" />
            </div>
            <p>{t('how_to_use_intro_NB')}</p>
            <p>{t('add_user_instruction_NB')}</p>

            <ul>
              <li><span>1</span> {t('admin_user_description_NB')}</li>
              <li><span>2</span> {t('contributor_user_description_NB')}</li>
              <li><span>3</span> {t('limited_user_description_NB')}</li>
            </ul>
          </div>
        </div>
      </section>

      <section className='Updating'>
        <div className="contanir">
          <div className="main-Dynamic">
            <div className="Dynamic-imger">
              <img src={in15} alt="" />
            </div>
            <p>{t('users_section_access_NB')}</p>
            <p className='Statistics'>
              <span>{t('statistics_title_NB')}</span>
              <span>{t('my_qrs_title_NB')}</span>
              <span>{t('plans_payments_title_NB')}</span>
              <span>{t('templates_title_NB')}</span>
              <span>{t('my_domains_title_NB')}</span>
            </p>
            <p>{t('contributor_limited_user_note_NB')}</p>
            <p>{t('contributor_options_note_NB')}</p>
          </div>
        </div>
      </section>

      <section className='Updating'>
        <div className="contanir">
          <div className="main-Dynamic">
            <div className="Dynamic-imger">
              <img src={in16} alt="" />
            </div>
            <p>{t('select_folders_access_NB')}</p>
            <p>{t('delete_account_option_NB')}</p>
          </div>
        </div>
      </section>

      <section className='Updating'>
        <div className="contanir">
          <div className="main-Dynamic">
            <div className="Dynamic-imger">
              <img src={in17} alt="" />
            </div>
            <p>{t('finish_process_instruction_NB')}</p>
            <p>{t('activation_email_note_NB')}</p>
            <p className='Statistics'>
              <span>{t('resend_invitation_note_NB')}</span>
              <span>{t('edit_permissions_note_NB')}</span>
              <span>{t('delete_user_account_note_NB')}</span>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Updating3;
