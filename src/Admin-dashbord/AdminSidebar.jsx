import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo1 from "../img/head-log.svg";



const SidebarContainer = styled.div`
  width: 250px;

  background-color: #333;
  color: #fff;
  padding: 20px;
`;

const SidebarItem = styled.div`
  padding: 10px;
  margin-bottom: 10px;
  background-color: #444;
  cursor: pointer;

  &:hover {
    background-color: #555;
  }
`;

const AdminSidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setShowButton(window.innerWidth <= 768);

      if (window.innerWidth <= 768) {
        setIsOpen(false);
      } else {
        setIsOpen(true);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);

    console.log('TS')
  };

  const [index, setindex] = useState(0);

  const handleChangeIndex = (p) => {
    if (window.innerWidth <= 768) {
      setindex(p);
      setIsOpen(!isOpen);
    } else {
      setindex(p);
    }
  };

  const [chacha, setchacha] = useState(true)

  const handleSubmit = () => {

    console.log("pop")
    setchacha(!chacha)

  }

  return (
    <>
      {showButton && (
        <div className="ahti" style={{ position: "fixed", top: "0" }}>
          {/* <input class="label-check" id="label-check" type="checkbox"  onClick={()=>{toggleSidebar()}}/>
    <label for="label-check" class="hamburger-label">
      <div class="line1"></div>
      <div class="line2"></div>
      <div class="line3"></div>
    <label></label></label> */}
          <div className="ahti-2">
          <input hidden="" class="check-icon" id="check-icon" name="check-icon" type="checkbox" onClick={() => {
              toggleSidebar();
            }} />
            <label class="icon-menu" for="check-icon">
                <div class="bar bar--1"></div>
                <div class="bar bar--2"></div>
                <div class="bar bar--3"></div>
            </label>
          </div>

        </div>
      )}

      <div
        className={chacha ? 'side-bar-container-thiviyo' : 'my-side-bar-long'}
        style={{ display: isOpen ? "block" : "none" }}
      >
        {/* <Link
          className="none-list"
          to=""
          onClick={() => handleChangeIndex(2)}
        >
          <div className="side-bar-logo">
            <img src={sidebarlogo} alt="" />
          </div>
        </Link> */}



<div className="logo-admin-side-bar">
  <img src={logo1} alt="" />
</div>
        <div className="side-bar-toggle" >
        <input hidden="" class="check-icon" id="check-icon" name="check-icon" type="checkbox" onClick={() => handleSubmit()}/>
            <label class="icon-menu" for="check-icon">
                <div class="bar bar--1"></div>
                <div class="bar bar--2"></div>
                <div class="bar bar--3"></div>
            </label>
        </div>


        <div className="fix-side-box">
          <Link
            to=""
            className="none-list"
            onClick={() => handleChangeIndex(0)}
          >
            <div className="side-bar-item-child">
              <div className="side-nav-pic">
                <svg xmlns="http://www.w3.org/2000/svg" width="31" height="26" viewBox="0 0 31 26" fill="none">
                  <path d="M16.112 0.213471C15.9346 0.0751297 15.716 0 15.491 0C15.266 0 15.0474 0.0751297 14.87 0.213471L0.5 11.4185L1.743 12.9905L3.5 11.6205V23.9995C3.50106 24.5296 3.71211 25.0377 4.08695 25.4125C4.4618 25.7874 4.96989 25.9984 5.5 25.9995H25.5C26.0301 25.9984 26.5382 25.7874 26.913 25.4125C27.2879 25.0377 27.4989 24.5296 27.5 23.9995V11.6295L29.257 12.9995L30.5 11.4275L16.112 0.213471ZM17.5 23.9995H13.5V15.9995H17.5V23.9995ZM19.5 23.9995V15.9995C19.5 15.469 19.2893 14.9603 18.9142 14.5853C18.5391 14.2102 18.0304 13.9995 17.5 13.9995H13.5C12.9696 13.9995 12.4609 14.2102 12.0858 14.5853C11.7107 14.9603 11.5 15.469 11.5 15.9995V23.9995H5.5V10.0615L15.5 2.27147L25.5 10.0715V23.9995H19.5Z" fill="#9397A1" />
                </svg>
              </div>{" "}
              <p>Dashboard</p>

            </div>
          </Link>

  


          <Link
            className="none-list"
            to="Adminlist"
            onClick={() => handleChangeIndex(4)}
          >
            <div className="side-bar-item-child">
              <div className="side-nav-pic">
                <svg xmlns="http://www.w3.org/2000/svg" width="33" height="32" viewBox="0 0 33 32" fill="none">
                  <path d="M9.83431 22.6667C11.6753 22.6667 13.1676 21.1743 13.1676 19.3333C13.1676 17.4924 11.6753 16 9.83431 16C7.99336 16 6.50098 17.4924 6.50098 19.3333C6.50098 21.1743 7.99336 22.6667 9.83431 22.6667Z" stroke="#273043" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M23.1673 22.6667C25.0083 22.6667 26.5007 21.1743 26.5007 19.3333C26.5007 17.4924 25.0083 16 23.1673 16C21.3264 16 19.834 17.4924 19.834 19.3333C19.834 21.1743 21.3264 22.6667 23.1673 22.6667Z" stroke="#273043" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M16.5008 9.33268C18.3418 9.33268 19.8341 7.8403 19.8341 5.99935C19.8341 4.1584 18.3418 2.66602 16.5008 2.66602C14.6599 2.66602 13.1675 4.1584 13.1675 5.99935C13.1675 7.8403 14.6599 9.33268 16.5008 9.33268Z" stroke="#273043" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M3.16748 29.332C3.16748 25.65 6.15215 22.6654 9.83415 22.6654C13.5161 22.6654 16.5008 25.65 16.5008 29.332C16.5008 25.65 19.4855 22.6654 23.1675 22.6654C26.8495 22.6654 29.8341 25.65 29.8341 29.332M23.1675 15.9987C23.1675 12.3167 20.1828 9.33203 16.5008 9.33203C12.8188 9.33203 9.83415 12.3167 9.83415 15.9987" stroke="#273043" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </div>
              <p>User</p>
            </div>
          </Link>

          <Link
            className="none-list"
            to="Adminlistpaid"
            onClick={() => handleChangeIndex(5)}
          >
            <div className="side-bar-item-child">
              <div className="side-nav-pic">
              <svg xmlns="http://www.w3.org/2000/svg" width="31" height="29" viewBox="0 0 31 29" fill="none">
                  <path d="M1.5 23.5C1.5 21.6435 2.2375 19.863 3.55025 18.5503C4.86301 17.2375 6.64348 16.5 8.5 16.5H22.5C24.3565 16.5 26.137 17.2375 27.4497 18.5503C28.7625 19.863 29.5 21.6435 29.5 23.5C29.5 24.4283 29.1313 25.3185 28.4749 25.9749C27.8185 26.6313 26.9283 27 26 27H5C4.07174 27 3.1815 26.6313 2.52513 25.9749C1.86875 25.3185 1.5 24.4283 1.5 23.5Z" stroke="#273043" stroke-width="2.5" stroke-linejoin="round" />
                  <path d="M15.5 12.5C18.3995 12.5 20.75 10.1495 20.75 7.25C20.75 4.35051 18.3995 2 15.5 2C12.6005 2 10.25 4.35051 10.25 7.25C10.25 10.1495 12.6005 12.5 15.5 12.5Z" stroke="#273043" stroke-width="2.5" />
                </svg>
              </div>
              <p>Subscribe User</p>
            </div>
          </Link>



 




   
        </div>
      </div>
    </>
  );
};

export default AdminSidebar;


