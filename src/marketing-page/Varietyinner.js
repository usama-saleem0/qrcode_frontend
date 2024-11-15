
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../Footer/Footer';
import { baseurl } from '../baseurl';
import Header from '../header/header';

import Dynamic4 from './marketing-components/Dynamic4';
import Updating4 from './marketing-components/Updating4';








const Varietyinner  = () => {





  return (

    <>
      <Header />
      <Dynamic4/>
      <Updating4/>
      <Footer/>
    </>
  )

}

export default Varietyinner 