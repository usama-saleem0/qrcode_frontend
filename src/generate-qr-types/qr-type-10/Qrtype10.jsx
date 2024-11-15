import React from 'react'
import { useNavigate } from 'react-router-dom';

import Footer from '../../Footer/Footer'
import Header from "../../header/header"
import Firsttypesec from '../qr-type-10/typeone-components/firsttypesec';
import Secondtypesec from '../qr-type-10/typeone-components/secondtypesec';
import Threetypesec from '../qr-type-10/typeone-components/threetypesec';
import Fourtypesec from '../qr-type-10/typeone-components/fourtypesec';
import Secondtypeslider14 from './typeone-components/innersliders/secondtypeslider';
import Secondtypeslider from './typeone-components/innersliders/secondtypeslider';
import Secondtypecone from './typeone-components/innersliders/secondtypeslider';





const Qrtype10 = () => {
  const navigate = useNavigate();

  const handleregister = () => {
    navigate('/signup');
  }
  return (
    <>

      <Header />
      <Firsttypesec handleregister={handleregister} />
      <Secondtypecone handleregister={handleregister} />
      <Threetypesec handleregister={handleregister} />
      <Fourtypesec />
      <Footer handleregister={handleregister} />

    </>
  )
}

export default Qrtype10