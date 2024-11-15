import React, { useState, useEffect } from "react";

import Admintable from "../Admin-table/Admintable";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



import axios from "axios";
import { baseurl } from "../../baseurl";


import { useNavigate } from "react-router-dom";



const ADashboard2 = () => {



  const [Usersdata, setUsersdata] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');


  const fetchAllUsers = async () => {
    try {
      const response = await axios.get(`${baseurl}/users`);
      console.log('Response for usersdata:', response.data);


      const users = response.data.message || response.data;


      if (Array.isArray(users)) {
        setUsersdata(users);

      } else {
        console.error('Expected an array but received:', users);
      }

      console.log('Total Users:', users.length);
    } catch (error) {
      console.error('Error fetching Users:', error);
    }
  };

  useEffect(() => {
    fetchAllUsers();
  }, []);





  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();


  const handleLogout = () => {

    localStorage.removeItem('UserId');
    localStorage.removeItem('userData');

    setIsAuthenticated(false);


    toast.success("You have been logged out successfully!");


    navigate('/');


    setTimeout(() => {
      window.location.reload();
    }, 100);
  };







  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };


  const filteredUsers = Usersdata.filter((row) =>
    row.username.toLowerCase().includes(searchTerm.toLowerCase())
  );



  return (
    <>
      <ToastContainer />
      <div className="admin-head-box">
        <ul>
          <li>Contact</li>
          <li>Help Centers</li>
          <li>Developers</li>
          <li onClick={handleLogout} ><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><g id="Layer_2" data-name="Layer 2"><g id="Layer_1_copy_8" data-name="Layer 1 copy 8"><g id="_17" data-name="17"><path d="m391.32 0h-270.64a120.68 120.68 0 0 0 -120.68 120.68v270.64a120.68 120.68 0 0 0 120.68 120.68h270.64a120.68 120.68 0 0 0 120.68-120.68v-270.64a120.68 120.68 0 0 0 -120.68-120.68zm-137.9 421.46h-91.16a72.33 72.33 0 0 1 -72.26-72.26v-186.41a72.33 72.33 0 0 1 72.26-72.25h91.16a72.33 72.33 0 0 1 72.25 72.25 21.13 21.13 0 1 1 -42.26 0 30 30 0 0 0 -30-30h-91.15a30 30 0 0 0 -30 30v186.41a30 30 0 0 0 30 30h91.16a30 30 0 0 0 30-30 21.13 21.13 0 0 1 42.26 0 72.33 72.33 0 0 1 -72.26 72.26zm168.58-164.59c0 .42 0 .84-.08 1.26v.1c-.05.46-.11.91-.18 1.36 0 .1 0 .2-.05.3a21.58 21.58 0 0 1 -.71 2.85v.1a20 20 0 0 1 -1.2 2.89 21.36 21.36 0 0 1 -1.55 2.59l-.11.15q-.42.58-.87 1.14l-.14.16c-.25.29-.51.59-.78.87l-.27.29-.19.2-50.24 50.24a21.13 21.13 0 0 1 -29.88-29.89l14.16-14.16h-149.73a21.13 21.13 0 0 1 0-42.26h149.68l-14.35-14.35a21.13 21.13 0 0 1 29.88-29.88l50.43 50.42c.33.33.64.67.94 1a2.85 2.85 0 0 1 .23.26 21 21 0 0 1 1.71 2.32l.09.15a20.54 20.54 0 0 1 1.39 2.62v.08a20.13 20.13 0 0 1 1 2.79v.14q.18.71.33 1.41c.09.46.16.92.22 1.39v.29c.05.42.08.83.11 1.25v.15 1.33c.16.19.16.31.16.44z" /></g></g></g></svg>
          </li>
        </ul>
      </div>

      <div className="admin-heading-tital-box">
        <h2>List</h2>
        <div className="input-serach-admin-box">
          <input type="text"

            value={searchTerm}
            onChange={handleSearchChange}

          />
          <button><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
            <g clip-path="url(#clip0_2024_613)">
              <path d="M25.7533 24.5855L19.0405 17.98C20.7984 16.0701 21.8785 13.5443 21.8785 10.7649C21.8776 4.81923 16.9804 0 10.9388 0C4.89727 0 0 4.81923 0 10.7649C0 16.7105 4.89727 21.5298 10.9388 21.5298C13.5492 21.5298 15.9433 20.6269 17.8239 19.1258L24.5628 25.7574C24.8911 26.0808 25.4242 26.0808 25.7525 25.7574C26.0817 25.434 26.0817 24.909 25.7533 24.5855ZM10.9388 19.8735C5.82701 19.8735 1.68309 15.7955 1.68309 10.7649C1.68309 5.73431 5.82701 1.65624 10.9388 1.65624C16.0507 1.65624 20.1945 5.73431 20.1945 10.7649C20.1945 15.7955 16.0507 19.8735 10.9388 19.8735Z" fill="black" />
            </g>
            <defs>
              <clipPath id="clip0_2024_613">
                <rect width="26" height="26" fill="white" />
              </clipPath>
            </defs>
          </svg></button>
        </div>
      </div>




      <div className="Admin-list-table-box">
        <Admintable filteredUsers={filteredUsers} />
      </div>

    </>
  )

};

export default ADashboard2;
