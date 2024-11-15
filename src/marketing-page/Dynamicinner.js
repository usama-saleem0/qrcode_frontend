
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../Footer/Footer';
import { baseurl } from '../baseurl';
import Header from '../header/header';
import Dynamic2 from './marketing-components/Dynamic2';
import Updating2 from './marketing-components/Updating2';






const Dynamicinner = () => {

 




  return (

    <>
      <Header />
      <Dynamic2/>
      <Updating2/>
      <Footer/>
    </>
  )

}

export default Dynamicinner