import React, { useState, useEffect  } from "react";
import col1 from "../../img/col1.png";
import col2 from "../../img/col2.png";
import col3 from "../../img/col3.png";
import col4 from "../../img/col4.png";
import col5 from "../../img/col5.png";
import col6 from "../../img/col6.png";
import col7 from "../../img/col7.png";
import col8 from "../../img/col8.png";
import LineChart from "../chart-Admin/Chartadmin";
import { baseurl } from "../../baseurl";
import axios from "axios";
import Dropdown from 'react-bootstrap/Dropdown';

import { useNavigate } from "react-router-dom";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const ADashboard1 = () => {

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();



  const [totalUsers, setTotalUsers] = useState([]);
  const [TotalScans, setTotalScans] = useState([]);
  const [TotalValue, setTotalValue] = useState([]);

  const [TotalQrcodes, setTotalQrcodes] = useState([]);
  const [TotalAmount, setTotalAmount] = useState([]);

  const [visibleCount, setVisibleCount] = useState(8);

  const [previousTotalAmount, setPreviousTotalAmount] = useState(0);
  const [totalAmountHistory, setTotalAmountHistory] = useState([0]);

  const fetchallusers = async () => {
    try {
      const response = await axios.get(`${baseurl}/users`);

      // Check the structure of response.data
      console.log('Response for users:', response.data);

      // Use appropriate path based on structure
      const users = response.data.message;
      const totalUsers = users ? users.length : 0;

      console.log('Total Users:', totalUsers);
      setTotalUsers(totalUsers);
    } catch (error) {
      console.error('Error fetching Users:', error);
    }
  };


  const fetchAllScans = async () => {
    try {
      const response = await axios.get(`${baseurl}/getQRCountsByScans`);

      console.log('Response for scans:', response.data);

      const scans = response.data;

      if (Array.isArray(scans)) {
        setTotalValue(response.data)
      }

      else {
        console.error('Expected an array but received:', scans);
      }

      const TotalScans = scans ? scans.reduce((accumulator, item) => accumulator + parseInt(item.total_scans), 0) : 0;

      console.log('Total Scans:', TotalScans);
      setTotalScans(TotalScans);

    } catch (error) {
      console.error('Error fetching Scans:', error);
    }
  };



  const fetchAllQr = async () => {
    try {
      const response = await axios.get(`${baseurl}/getAllQRCodes`);

      console.log('Response for QR Codes:', response.data);


      const qrcodes = response.data;
      const TotalQrcodes = qrcodes ? qrcodes.length : 0;

      console.log('Total QR Codes:', TotalQrcodes);
      setTotalQrcodes(TotalQrcodes);
    } catch (error) {
      console.error('Error fetching QR Codes:', error);
    }
  };



  // const fetchTotalAmount = async () => {
  //   try {
  //     const response = await axios.get(`${baseurl}/getTotalSubscribers`);

  //     console.log('Response for Total Subscribers:', response.data);

  //     const payments = response.data;
  //     const TotalAmount = payments ? payments.reduce((accumulator, item) => accumulator + parseInt(item.amount), 0) : 0;

  //     console.log('Total Amount:', TotalAmount);
  //     setTotalAmount(TotalAmount);
  //   } catch (error) {
  //     console.error('Error fetching Total Amount:', error);
  //   }
  // };




  const fetchTotalAmount = async () => {
    try {
      const response = await axios.get(`${baseurl}/getTotalSubscribers`);
      console.log('Response for Total Subscribers:', response.data);
  
      const payments = response.data;
      const newTotalAmount = payments
        ? payments.reduce((accumulator, item) => accumulator + parseInt(item.amount), 0)
        : 0;
  
      console.log('New Total Amount:', newTotalAmount);
  
      // Check if the total amount has increased since the last fetch
      if (newTotalAmount > previousTotalAmount) {
        console.log(`Total Amount increased from $${previousTotalAmount} to $${newTotalAmount}`);
      }
  
      // Update the state for total amounts
      setPreviousTotalAmount(newTotalAmount); // Update previous total to current
      setTotalAmount(newTotalAmount); // Update displayed total amount
  
      // Update the history array with the latest total amount
      setTotalAmountHistory((prevHistory) => [
        ...prevHistory,
        { amount: newTotalAmount, timestamp: new Date() }
      ]);
    } catch (error) {
      console.error('Error fetching Total Amount:', error);
    }
  };


  const handleLogout = () => {

    localStorage.removeItem('UserId');
    localStorage.removeItem('userData');

    setIsAuthenticated(false);


    toast.success("You have been logged out successfully!");


    navigate('/');


    setTimeout(() => {
      window.location.reload();
    }, 100); // Timeout to allow toast to show before reload
  };


  useEffect(() => {

    const user = localStorage.getItem('UserId');
    if (user) {
      setIsAuthenticated(true);
    }

    const interval = setInterval(fetchTotalAmount, 20000); // Check every 30 seconds or as needed
    clearInterval(interval);




    fetchallusers();
    fetchAllScans();
    fetchAllQr();
    fetchTotalAmount();

  }, []);




  const loadMore = () => {
    setVisibleCount((prevCount) => prevCount + 8); // Increase count by 8
  };


  const displayedValues = TotalValue.slice(0, visibleCount);


  const images = [col1, col2, col3, col4, col5, col6, col7, col8];



  return (
    <>
      <div className="admin-head-box">

        <ul>
          <li>Contact</li>
          <li>Help Centers</li>
          <li>Developers</li>
          <li onClick={handleLogout} ><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><g id="Layer_2" data-name="Layer 2"><g id="Layer_1_copy_8" data-name="Layer 1 copy 8"><g id="_17" data-name="17"><path d="m391.32 0h-270.64a120.68 120.68 0 0 0 -120.68 120.68v270.64a120.68 120.68 0 0 0 120.68 120.68h270.64a120.68 120.68 0 0 0 120.68-120.68v-270.64a120.68 120.68 0 0 0 -120.68-120.68zm-137.9 421.46h-91.16a72.33 72.33 0 0 1 -72.26-72.26v-186.41a72.33 72.33 0 0 1 72.26-72.25h91.16a72.33 72.33 0 0 1 72.25 72.25 21.13 21.13 0 1 1 -42.26 0 30 30 0 0 0 -30-30h-91.15a30 30 0 0 0 -30 30v186.41a30 30 0 0 0 30 30h91.16a30 30 0 0 0 30-30 21.13 21.13 0 0 1 42.26 0 72.33 72.33 0 0 1 -72.26 72.26zm168.58-164.59c0 .42 0 .84-.08 1.26v.1c-.05.46-.11.91-.18 1.36 0 .1 0 .2-.05.3a21.58 21.58 0 0 1 -.71 2.85v.1a20 20 0 0 1 -1.2 2.89 21.36 21.36 0 0 1 -1.55 2.59l-.11.15q-.42.58-.87 1.14l-.14.16c-.25.29-.51.59-.78.87l-.27.29-.19.2-50.24 50.24a21.13 21.13 0 0 1 -29.88-29.89l14.16-14.16h-149.73a21.13 21.13 0 0 1 0-42.26h149.68l-14.35-14.35a21.13 21.13 0 0 1 29.88-29.88l50.43 50.42c.33.33.64.67.94 1a2.85 2.85 0 0 1 .23.26 21 21 0 0 1 1.71 2.32l.09.15a20.54 20.54 0 0 1 1.39 2.62v.08a20.13 20.13 0 0 1 1 2.79v.14q.18.71.33 1.41c.09.46.16.92.22 1.39v.29c.05.42.08.83.11 1.25v.15 1.33c.16.19.16.31.16.44z"/></g></g></g></svg>
          </li>
        </ul>


      </div>

      <div className="admin-heading-tital-box">
        <h2>Dashboard</h2>
      </div>

      <div className="admin-number-box">
        <div className="admin-number-card">
          <h2>{TotalQrcodes || "5"}</h2>
          <p>Total QR codes</p>
        </div>

        <div className="admin-number-line"></div>

        <div className="admin-number-card">
          <h2>{TotalScans || "0"}</h2>
          <p>Total Scans</p>
        </div>

        <div className="admin-number-line"></div>


        <div className="admin-number-card">
          <h2>{totalUsers || "0"}</h2>
          <p>Total Users</p>
        </div>

        <div className="admin-number-line"></div>

        <div className="admin-number-card">
          <h2>$ {TotalAmount || "0"}</h2>
          <p>Total Revnue</p>
        </div>
      </div>


      <div className="admin-Total-main">
        <h2>Total QR</h2>
        <div className="admin-Total-box">




          {displayedValues.length > 0 ? (
            displayedValues.map((cardDatas ,index ) => (
              <div className="admin-Total-card" key={cardDatas.selectname}>
                <div className="admin-Total-icon-box">
                    <img src={images[index % images.length]} alt={cardDatas.selectname} />
                </div>
                <span>
                  <h3>{cardDatas.selectname}</h3>
                  <p>Total: {cardDatas.total_types}</p>
                </span>
              </div>
            ))
          ) : (
            <p>No data available</p>
          )}


        </div>


        {displayedValues.length < TotalValue.length && ( // Show button if more items are available
        <button className="Load-admin-More" onClick={loadMore}>
          Load More
        </button>
      )}
      </div>

      <div className="admin-chart-box">
        <LineChart  totalAmountHistory={totalAmountHistory}  />
      </div>

    </>
  )

};

export default ADashboard1;
