import React from 'react'
import Firsttypesec from '../qr-type-1/typeone-components/firsttypesec'
import Secondtypesec from './typeone-components/secondtypesec'

import Header from "../../header/header"
import Fourtypesec from './typeone-components/fourtypesec'
import Footer from '../../Footer/Footer'
import { useNavigate } from 'react-router-dom';
import Mp3banner from './typeone-components/mp3banner'
import Threetypesec from '../mp3/threetypesec'
import Secondtypeslider17 from '../qr-type-9/type9-components/innersliders/secondtypeslider17'





const Mp3Qr = () => {
  const navigate = useNavigate();
  
const handleregister = () => {
  navigate('/signup');
 }
  return (
    <>
        
     <Header/>   
    <Mp3banner handleregister={handleregister}/> 
    <Secondtypeslider17  handleregister={handleregister}/>
    <Threetypesec handleregister={handleregister}/>
    <Fourtypesec/>  
    <Footer handleregister={handleregister}/>

    </>
  )
}

export default Mp3Qr