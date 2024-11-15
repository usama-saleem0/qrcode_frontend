import React from 'react'
import { useNavigate } from 'react-router-dom';
import Firsttypesec from '../qr-type-3/typeone-components/firsttypesec';
import Secondtypesec from '../qr-type-3/typeone-components/secondtypesec';
import Threetypesec from '../qr-type-3/typeone-components/threetypesec';
import Fourtypesec from '../qr-type-3/typeone-components/fourtypesec';
import Footer from '../../Footer/Footer'
import Header from "../../header/header"





const Qrtype3 = () => {
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

export default Qrtype3