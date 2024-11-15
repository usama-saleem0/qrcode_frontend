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
import Playhomebanner from './typeone-components/playlistbanner'
import Threetypesec from '../playlist/threetypesec'
import Secondtypesecland from './typeone-components/secondtypesecland'








const PlaylisthomeQr = () => {
  const navigate = useNavigate();
  
const handleregister = () => {
  navigate('/signup');
 }
  return (
    <>
        
     <Header/>   
    <Playhomebanner handleregister={handleregister}/> 
    <Secondtypesecland  handleregister={handleregister}/>
    <Threetypesec handleregister={handleregister}/>
    <Fourtypesec/>  
    <Footer handleregister={handleregister}/>

    </>
  )
}

export default PlaylisthomeQr