import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Generatetypesqrcode from '../components/Generatetypesqrcode';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../Footer/Footer';
import { baseurl } from '../baseurl';
import Header from '../header/header';
import FAQs from '../faq-components/FAQs';
import FAQ2 from '../faq-components/FAQs2';






    

const Faq = () => {








  return (

    <>
      <Header />
        <FAQs/>
        <FAQ2/>
      <Footer/>
    </>
  )

}

export default Faq