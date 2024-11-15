import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import in15 from '../../img/in15.webp';
import d1 from '../../img/d1.webp';
import d2 from '../../img/d2.webp';
import d3 from '../../img/d3.webp';
import d4 from '../../img/d4.webp';
import d5 from '../../img/d5.webp';
import d6 from '../../img/d6.webp';
import d7 from '../../img/d7.webp';
import d8 from '../../img/d8.webp';
import { useTranslation } from 'react-i18next';

const Updating5 = () => {
  const { t } = useTranslation();

  return (
    <>
      <section className='Benefits'>
        <div className="contanir">
          <div className="main-Benefits">
            <h2>{t('why_track_metrics_heading_NB')}</h2>
            <p>{t('why_track_metrics_paragraph_NB')}</p>
            <div className="Benefits-box">
              <p><span>{t('identify_target_audience_NB')}:</span> {t('identify_target_audience_paragraph_NB')}</p>
              <p><span>{t('evaluate_effectiveness_NB')}:</span> {t('evaluate_effectiveness_paragraph_NB')}</p>
              <p><span>{t('optimize_user_experience_NB')}:</span> {t('optimize_user_experience_paragraph_NB')}</p>
              <p><span>{t('clear_performance_view_NB')}:</span> {t('clear_performance_view_paragraph_NB')}</p>
              <p><span>{t('improve_personalization_NB')}:</span> {t('improve_personalization_paragraph_NB')}</p>
              <p><span>{t('set_realistic_expectations_NB')}:</span> {t('set_realistic_expectations_paragraph_NB')}</p>
            </div>
          </div>
        </div>
      </section>

      <section className='Updating part-2'>
        <div className="contanir">
          <div className="main-Dynamic">
            <h4>{t('how_to_access_metrics_heading_NB')}</h4>
            <p>{t('how_to_access_metrics_paragraph_NB')}</p>
            <div className='new-span'>{t('svg_format_NB')}</div>
            <div className="Dynamic-imger">
              <img src={d1} alt="" />
            </div>
            <p>{t('real_time_data_paragraph_NB')}</p>
          </div>
        </div>
      </section>

      <section className='Updating part-2'>
        <div className="contanir">
          <div className="main-Dynamic">
            <div className='new-span'>{t('track_scans_heading_NB')}</div>
            <div className="Dynamic-imger">
              <img src={d2} alt="" />
            </div>
            <p>{t('track_scans_paragraph_NB')}</p>
          </div>
        </div>
      </section>

      <section className='Updating part-2'>
        <div className="contanir">
          <div className="main-Dynamic">
            <div className='new-span'>{t('city_country_analysis_heading_NB')}</div>
            <div className="Dynamic-imger">
              <img src={d3} alt="" />
            </div>
            <p>{t('city_country_analysis_paragraph_NB')}</p>
          </div>
        </div>
      </section>

      <section className='Updating part-2'>
        <div className="contanir">
          <div className="main-Dynamic">
            <div className='new-span'>{t('temporal_analysis_heading_NB')}</div>
            <div className="Dynamic-imger">
              <img src={d4} alt="" />
            </div>
            <p>{t('temporal_analysis_paragraph_NB')}</p>
          </div>
        </div>
      </section>

      <section className='Updating part-2'>
        <div className="contanir">
          <div className="main-Dynamic">
            <div className='new-span'>{t('os_analysis_heading_NB')}</div>
            <div className="Dynamic-imger">
              <img src={d5} alt="" />
            </div>
            <p>{t('os_analysis_paragraph_NB')}</p>
          </div>
        </div>
      </section>

      <section className='Updating part-2'>
        <div className="contanir">
          <div className="main-Dynamic">
            <div className='new-span'>{t('export_reports_heading_NB')}</div>
            <div className="Dynamic-imger">
              <img src={d6} alt="" />
            </div>
            <p>{t('export_reports_paragraph_NB')}</p>
          </div>
        </div>
      </section>

      <section className='Updating part-2'>
        <div className="contanir">
          <div className="main-Dynamic">
            <div className='new-span'>{t('reset_scans_heading_NB')}</div>
            <div className="Dynamic-imger">
              <img src={d7} alt="" />
            </div>
            <p>{t('reset_scans_paragraph_NB')}</p>
          </div>
        </div>
      </section>

      <section className='Updating part-2'>
        <div className="contanir">
          <div className="main-Dynamic">
            <div className='new-span'>{t('all_data_heading_NB')}</div>
            <div className="Dynamic-imger">
              <img src={d8} alt="" />
            </div>
            <p>{t('all_data_paragraph_NB')}</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Updating5;
