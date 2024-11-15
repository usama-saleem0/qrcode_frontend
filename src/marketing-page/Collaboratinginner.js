
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../Footer/Footer';
import { baseurl } from '../baseurl';
import Header from '../header/header';
import Dynamic3 from './marketing-components/Collaborating';
import Updating3 from './marketing-components/Updating3';







const Collaborating  = () => {
  

 




  return (

    <>
      <Header />
  <Dynamic3/>
  <Updating3/>
      <Footer/>
    </>
  )

}

export default Collaborating 