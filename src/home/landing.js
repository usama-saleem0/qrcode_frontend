import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Generatetypesqrcode from '../components/Generatetypesqrcode';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../Footer/Footer';
import { baseurl } from '../baseurl';
import Header from '../header/header';
import Hero from '../components/Hero';
import Generator from '../components/Generator';
import Marketing from '../components/marketing';
import Everything from '../components/Everything';
import Leave from '../components/leave';






    

const Landing = () => {

  const navigate = useNavigate();

   
  const routetoFAQ = () => {
    navigate('/Faq');
 }

 const handleregister = () => {
  navigate('/signup');
 }

  const [show, setshow] = useState(false)
  const [r, setr] = useState('')
  let data = '';
  const [tracking_number, settracking_number] = useState('')
  const demo = async () => {
    const formData = {
      tracking_number: tracking_number,
    }
    try {
      // Make a POST request using axios
      const response = await axios.post(`${baseurl}/trackpackage`, formData);
      console.log(tracking_number, "track")
      console.log(response.data, "track")

      data = response.data;
      setr(response.data.ShipmentData)
      setshow(true)

      // Set the response data in state
    } catch (error) {
      // Handle errors
      console.error('Error:', error.message);
      // Display an error message to the user
      alert('An error occurred. Please try again later.');
    }
  };






  return (

    <>
      <Header />
      <Hero handleregister={handleregister}  />
      <Generator />
      <Generatetypesqrcode/>
      <Marketing handleregister={handleregister} />
      <Everything />
      <Leave routetoFAQ={routetoFAQ}/> 
      <Footer  handleregister={handleregister}/>
    </>
  )

}

export default Landing