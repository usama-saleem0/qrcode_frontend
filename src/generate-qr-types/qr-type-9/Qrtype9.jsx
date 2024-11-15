import React from 'react'

import Footer from '../../Footer/Footer'
import { useNavigate } from 'react-router-dom';

import Header from '../../header/header';
import Firsttypesec9 from './type9-components/firsttypesec9';
import Secondtypesec9 from './type9-components/secondtypesec9';
import Threetypesec9 from './type9-components/threetypesec9';
import Fourtypesec9 from './type9-components/fourtypesec9';






const Qrtype9 = () => {
  const navigate = useNavigate();
  
const handleregister = () => {
  navigate('/signup');
 }
  return (
    <>
        
     <Header/>   
    <Firsttypesec9 handleregister={handleregister}/> 
    <Secondtypesec9  handleregister={handleregister}/>
    <Threetypesec9 handleregister={handleregister}/>
    <Fourtypesec9/>  
    <Footer handleregister={handleregister}/>

    </>
  )
}

export default Qrtype9