import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useTranslation } from 'react-i18next';
import in15 from '../../img/in15.webp';
import f1 from '../../img/f1.webp';
import f2 from '../../img/f2.webp';
import f3 from '../../img/f3.webp';
import f4 from '../../img/f4.webp';
import f5 from '../../img/f5.webp';

const Updating4 = () => {
  const { t } = useTranslation();

  return (
    <>
      <section className='Benefits'>
        <div className="contanir">
          <div className="main-Benefits">
            <h2>{t('benefits_heading_NB2')}</h2>
            <p>{t('benefits_paragraph_NB')}</p>
          </div>
        </div>
      </section>

      <section className='Updating part-2'>
        <div className="contanir">
          <div className="main-Dynamic">
            <h4 className='hello-style'>{t('how_to_download_heading_NB')}</h4>
            <p>{t('how_to_download_paragraph1_NB')}</p>
            <p>{t('how_to_download_paragraph2_NB')}</p>
            <p>{t('how_to_download_paragraph3_NB')}</p>
            <p>{t('how_to_download_paragraph4_NB')}</p>
            <p>{t('how_to_download_paragraph5_NB')}</p>
            <p>{t('how_to_download_paragraph6_NB')}</p>
          </div>
        </div>
      </section>

      <section className='Updating'>
        <div className="contanir">
          <div className="main-Dynamic">
            <h4>{t('choose_format_heading_NB')}</h4>
            <div className='new-span'>{t('svg_format_NB')}</div>
            <div className="Dynamic-imger">
              <img src={f1} alt="" />
            </div>
            <p>{t('svg_format_paragraph_NB')}</p>
          </div>
        </div>
      </section>

      <section className='Updating'>
        <div className="contanir">
          <div className="main-Dynamic">
            <div className='new-span'>{t('eps_format_NB')}</div>
            <div className="Dynamic-imger">
              <img src={f2} alt="" />
            </div>
            <p>{t('eps_format_paragraph_NB')}</p>
          </div>
        </div>
      </section>

      <section className='Updating'>
        <div className="contanir">
          <div className="main-Dynamic">
            <div className='new-span'>{t('jpg_format_NB')}</div>
            <div className="Dynamic-imger">
              <img src={f3} alt="" />
            </div>
            <p>{t('jpg_format_paragraph_NB')}</p>
          </div>
        </div>
      </section>

      <section className='Updating'>
        <div className="contanir">
          <div className="main-Dynamic">
            <div className='new-span'>{t('png_format_NB')}</div>
            <div className="Dynamic-imger">
              <img src={f4} alt="" />
            </div>
            <p>{t('png_format_paragraph_NB')}</p>
          </div>
        </div>
      </section>

      <section className='Updating'>
        <div className="contanir">
          <div className="main-Dynamic">
            <div className='new-span'>{t('pdf_format_NB')}</div>
            <div className="Dynamic-imger">
              <img src={f5} alt="" />
            </div>
            <p>{t('pdf_format_paragraph_NB')}</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Updating4;