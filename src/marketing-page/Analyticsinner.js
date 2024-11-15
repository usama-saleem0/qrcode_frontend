
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../Footer/Footer';
import { baseurl } from '../baseurl';
import Header from '../header/header';
import Dynamic5 from './marketing-components/Dynamic5';
import Updating5 from './marketing-components/Updating5';








const Analytics  = () => {

 




  return (

    <>
      <Header />
      <Dynamic5/>
      <Updating5/>
      <Footer/>
    </>
  )

}

export default Analytics 