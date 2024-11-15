import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Generatetypesqrcode from '../components/Generatetypesqrcode';
import 'bootstrap/dist/css/bootstrap.min.css';
import { baseurl } from '../baseurl';
import { useTranslation } from 'react-i18next';






const FAQs = () => {

    const { t } = useTranslation();

    return (

        <>

        <section className='faq'>
            <div className="contanir">
                <div className="main-faq">
                    <h2>{t('FAQsnn')}</h2>
                    <p>{t('dontnn')} <br />{t('hesitatenn')}</p>
                </div>
            </div>
        </section>

        </>
    )

}

export default FAQs 