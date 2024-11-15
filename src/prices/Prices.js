import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Generatetypesqrcode from '../components/Generatetypesqrcode';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../Footer/Footer';
import { baseurl } from '../baseurl';
import Header from '../header/header';
import Questions from '../prices-componets/Questions';
import Plans from '../prices-componets/Plans';





    

const Prices = () => {








  return (

    <>
      <Header />
      <Plans/>
     <Questions/>
      <Footer/>
    </>
  )

}

export default Prices