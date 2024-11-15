import React from 'react'
import { useNavigate } from 'react-router-dom';

import Footer from '../../Footer/Footer'
import Header from "../../header/header"
import Firsttypesec from '../qr-type-5/typeone-components/firsttypesec';
import Secondtypesec from '../qr-type-5/typeone-components/secondtypesec';
import Threetypesec from '../qr-type-5/typeone-components/threetypesec';
import Fourtypesec from '../qr-type-5/typeone-components/fourtypesec';





const Qrtype5 = () => {
  const navigate = useNavigate();

  const handleregister = () => {
    navigate('/signup');
  }
  return (
    <>

      <Header />
      <Firsttypesec handleregister={handleregister} />
      <Secondtypesec handleregister={handleregister} />
      <Threetypesec handleregister={handleregister} />
      <Fourtypesec />
      <Footer handleregister={handleregister} />

    </>
  )
}

export default Qrtype5