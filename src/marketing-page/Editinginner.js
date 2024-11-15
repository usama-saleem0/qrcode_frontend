
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../Footer/Footer';
import { baseurl } from '../baseurl';
import Header from '../header/header';
import Dynamic from './marketing-components/Dynamic';
import Updating from './marketing-components/Updating';






const Editinginner = () => {

 
  const navigate = useNavigate();


  const handleregister = () => {
    navigate('/signup');
   }

  return (

    <>
      <Header />
      <Dynamic/>
      <Updating/>
      <Footer handleregister={handleregister}/>
    </>
  )

}

export default Editinginner