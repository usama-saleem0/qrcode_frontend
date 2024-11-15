import React from 'react'

import Footer from '../../Footer/Footer'
import { useNavigate } from 'react-router-dom';
import Firsttypesec1 from './typetwo-components/firsttypesec1';
import Secondtypesec1 from './typetwo-components/secondtypesec1';
import Threetypesec1 from './typetwo-components/threetypesec1';
import Fourtypesec1 from './typetwo-components/fourtypesec1';
import Header from '../../header/header';





const Qrtypetwo = () => {
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

export default Qrtypetwo