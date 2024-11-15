import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { baseurl } from '../baseurl';
import login from '../img/login-site.png';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import side1 from '../../src/img/salide1.mp4';
import side2 from '../../src/img/salide2.mp4';
import side3 from '../../src/img/salide3.mp4';
import side4 from '../../src/img/salide4.mp4';



const Signup = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();



  // const [index, setIndex] = useState(0);

  // const handleVideoEnded = () => {
  //   setIndex((prevIndex) => (prevIndex + 1) % 4); // Loop back after the last video
  // };


  const [index, setIndex] = useState(0);
  const videoRefs = [useRef(null), useRef(null), useRef(null), useRef(null)]; // Array of refs for each video

  const handleVideoEnded = () => {
    setIndex((prevIndex) => (prevIndex + 1) % 4); // Loop back to the first video after the last one
  };

  useEffect(() => {
    // Play the video at the current index
    if (videoRefs[index].current) {
      videoRefs[index].current.play();
    }
  }, [index]);
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(prevShowPassword => !prevShowPassword);
  };

  const [showPasswordcheck, setshowPasswordcheck] = useState(false);

  const togglePasswordVisibilitycheck = () => {
    setshowPasswordcheck(prevshowPasswordcheck => !prevshowPasswordcheck);
  };


  const [formData, setFormData] = useState({
    username: '',
    type: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleFormDataChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const { password, confirmPassword } = formData;

    if (password !== confirmPassword) {
      toast.error("Password Does'nt Match.", { duration: 4000 });

      return; // Add error handling here if needed
    }

    try {
      const response = await axios.post(`${baseurl}/signup`, formData);
      console.log(response);
      setFormData({
        username: '',
        type: '',
        email: '',
        password: '',
        confirmPassword: '',
      });

      toast.success("Account has been created, now you can log in with the same email.", { duration: 4000 });

      setTimeout(() => {
        navigate('/login');
      }, 4000);
    }

    catch (err) {
      console.error('Error:', err);
    }
  };

  return (
    <>
      <ToastContainer />
      <section className='login'>
        <div className="main-login">
          <div className="part-login-1">
            <form onSubmit={handleFormSubmit}>
              <h2>{t('signUp')}</h2>
              <p>{t('enterWithNetworks')}</p>

              <div className="login-input-group">
                <label>{t('name')}*</label>
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleFormDataChange}
                />
              </div>


              {/* <div className="login-input-group">
                <label htmlFor="">Type*</label>
                <select
                  className="form-select form-select-lg mb-3"
                  name="type"
                  value={formData.type} 
                  onChange={handleFormDataChange}  
                  required
                >
                  <option value="" disabled>Select Type</option> 
                  <option value="User">User</option>
                  <option value="Admin">Admin</option>
                  
                </select>
              </div> */}


              <div className="login-input-group">
                <label>{t('email1')}*</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleFormDataChange}
                />
              </div>

              <div className="login-input-group">
                <label>{t('password')}*</label>
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleFormDataChange}
                  placeholder="Enter your password"
                />

                <span
                  onClick={togglePasswordVisibility}
                  style={{
                    position: 'relative',
                    left: '90%',
                    bottom: '35px',
                    transform: 'translateY(-50%)',
                    cursor: 'pointer',
                  }}
                >
                  {showPassword ? <svg className="eye" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z" /></svg> :

                    <svg className="eye-slash" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512"><path d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223.1 149.5C248.6 126.2 282.7 112 320 112c79.5 0 144 64.5 144 144c0 24.9-6.3 48.3-17.4 68.7L408 294.5c8.4-19.3 10.6-41.4 4.8-63.3c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3c0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zM373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9 .5-13.6 1.4-20.2L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5L373 389.9z" /></svg>}
                </span>



              </div>

              <div className="login-input-group">
                <label>{t('confirmPassword')}*</label>
                {/* <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleFormDataChange}
                /> */}

                <input
                  type={showPasswordcheck ? 'text' : 'password'}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleFormDataChange}
                  placeholder="Re-Enter your password"
                />

                <span
                  onClick={togglePasswordVisibilitycheck}
                  style={{
                    position: 'relative',
                    left: '90%',
                    bottom: '35px',
                    transform: 'translateY(-50%)',
                    cursor: 'pointer',
                  }}
                >
                  {showPasswordcheck ? <svg className="eye" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z" /></svg> :

                    <svg className="eye-slash" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512"><path d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223.1 149.5C248.6 126.2 282.7 112 320 112c79.5 0 144 64.5 144 144c0 24.9-6.3 48.3-17.4 68.7L408 294.5c8.4-19.3 10.6-41.4 4.8-63.3c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3c0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zM373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9 .5-13.6 1.4-20.2L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5L373 389.9z" /></svg>}
                </span>


              </div>

              {/* <span>{t('forgotPassword')} <a href="#">{t('clickHere')}</a></span> */}

              <button type="submit">{t('signUp')}</button>

              <span>{t('haveAccount')} <a onClick={() => navigate("/login")}>{t('login')}</a></span>
            </form>
          </div>




          <div className="part-login-2">
            <Carousel
              activeIndex={index}
              onSelect={setIndex}
              interval={null}
              controls={true}
              indicators={true}
              onSlide={() => {
                if (videoRefs[index].current) {
                  videoRefs[index].current.play(); // Play video on slide change
                }
              }}
            >
              <Carousel.Item>
                <video
                  ref={videoRefs[0]}
                  autoPlay
                  onEnded={handleVideoEnded}
                  width="100%"
                  height="auto"
                >
                  <source src={side1} type="video/mp4" />
                </video>
              </Carousel.Item>
              <Carousel.Item>
                <video
                  ref={videoRefs[1]}
                  autoPlay
                  onEnded={handleVideoEnded}
                  width="100%"
                  height="auto"
                >
                  <source src={side2} type="video/mp4" />
                </video>
              </Carousel.Item>
              <Carousel.Item>
                <video
                  ref={videoRefs[2]}
                  autoPlay
                  onEnded={handleVideoEnded}
                  width="100%"
                  height="auto"
                >
                  <source src={side3} type="video/mp4" />
                </video>
              </Carousel.Item>
              <Carousel.Item>
                <video
                  ref={videoRefs[3]}
                  autoPlay
                  onEnded={handleVideoEnded}
                  width="100%"
                  height="auto"
                >
                  <source src={side4} type="video/mp4" />
                </video>
              </Carousel.Item>
            </Carousel>
          </div>



        </div>
      </section>
    </>
  );
}

export default Signup;
