import React from 'react'
import Firsttypesec from '../qr-type-1/typeone-components/firsttypesec'
import Secondtypesec from './typeone-components/secondtypesec'

import Header from "../../header/header"
import Fourtypesec from './typeone-components/fourtypesec'
import Footer from '../../Footer/Footer'
import { useNavigate } from 'react-router-dom';
import Mp3banner from './typeone-components/mp3banner'
import Menuhomebanner from './typeone-components/menubanner'
import Businesshomebanner from './typeone-components/businessbanner'
import Threetypesec from '../business/threetypesec'
import Secondtypesecbusnis from './typeone-components/secondtypesecbusnis'









const BusinesshomeQr = () => {
  const navigate = useNavigate();
  
const handleregister = () => {
  navigate('/signup');
 }
  return (
    <>
        
     <Header/>   
    <Businesshomebanner handleregister={handleregister}/> 
    <Secondtypesecbusnis  handleregister={handleregister}/>
    <Threetypesec handleregister={handleregister}/>
    <Fourtypesec/>  
    <Footer handleregister={handleregister}/>

    </>
  )
}

export default BusinesshomeQr