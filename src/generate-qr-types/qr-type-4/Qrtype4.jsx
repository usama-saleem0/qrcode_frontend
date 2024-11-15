import React from 'react'

import Footer from '../../Footer/Footer'
import { useNavigate } from 'react-router-dom';
import Firsttypesec1 from './type4-components/firsttypesec4';
import Secondtypesec1 from './type4-components/secondtypesec4';
import Threetypesec1 from './type4-components/threetypesec4';
import Fourtypesec1 from './type4-components/fourtypesec4';
import Header from '../../header/header';





const Qrtype4 = () => {
  const navigate = useNavigate();
  
const handleregister = () => {
  navigate('/signup');
 }
  return (
    <>
        
     <Header/>   
    <Firsttypesec1 handleregister={handleregister}/> 
    <Secondtypesec1  handleregister={handleregister}/>
    <Threetypesec1 handleregister={handleregister}/>
    <Fourtypesec1/>  
    <Footer handleregister={handleregister}/>

    </>
  )
}

export default Qrtype4