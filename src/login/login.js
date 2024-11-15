import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useTranslation } from 'react-i18next';
import { toast, ToastContainer } from 'react-toastify';
import { baseurl } from '../baseurl';
// import login from '../img/login-site.png';
import login from '../img/login-site.gif';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Login = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const [showPassword, setShowPassword] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const [step, setStep] = useState(1); // Tracks the current step
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [loading, setLoading] = useState(false);



  const togglePasswordVisibility = () => {
    setShowPassword(prevShowPassword => !prevShowPassword);
  };



  const [formData, setFormData] = useState({
    email: '',
    password: '',
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
    const { email, password } = formData;

    try {
      const response = await axios.post(`${baseurl}/login`, {
        email,
        password,
      });

      console.log(response);
      const userData = response.data.user;
      localStorage.setItem('userData', JSON.stringify(userData));
      toast.success(t('loginSuccess'));

      setFormData({
        email: '',
        password: '',
      });

      // Navigate based on user type from response
      if (userData.type === '') {
        navigate('/NewQR');
      } else if (userData.type === 'Admin') {
        navigate('/AdminDashboard');
      }

    } catch (err) {
      toast.error(t('invalidCredentials'));
    }
  };


  const sigup = () => {
    navigate("/signup");
  };



  const handleSave = async () => {
    setLoading(true);

    try {
      if (step === 1) {
        // Step 1: Verify Email
        const response = await axios.post(`${baseurl}/forgotPassword`, { email });
        if (response.status === 200) {
          toast.success("OTP sent to your email.");
          setStep(2); // Move to OTP step
        }
      } else if (step === 2) {
        
        // Step 2: Verify OTP
        const response = await axios.post(`${baseurl}/verifyOtp`, { email, otp });
        if (response.status === 200) {
          toast.success("OTP verified successfully.");
          setStep(3); // Move to New Password step
        }
      } else if (step === 3) {
        
        // Step 3: Reset Password
        const response = await axios.post(`${baseurl}/resetPassword`, { email, password: newPassword });
        if (response.status === 200) {
          toast.success("Password changed successfully.");
          setModalShow(false); // Close the modal
          setStep(1); // Reset steps   
          setEmail(""); // Clear all fields
          setOtp("");
          setNewPassword("");
        }
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong.");
    } finally {
      setLoading(false); // End loading
  }
  };


  return (
    <>



      {loading && (
        <div className="loader-container">
          <div className="loader">
            <div className="box1"></div>
            <div className="box2"></div>
            <div className="box3"></div>
          </div>
        </div>
      )}


      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={modalShow}
        onHide={() => setModalShow(false)}
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Reset Password</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            {step === 1 && (
              <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>
            )}
            {step === 2 && (
              <Form.Group className="mb-3" controlId="otp">
                <Form.Label>Enter OTP</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter the OTP sent to your email"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                />
              </Form.Group>
            )}
            {step === 3 && (
              <Form.Group className="mb-3" controlId="newPassword">
                <Form.Label>Enter New Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter your new password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                />
              </Form.Group>
            )}
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setModalShow(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>

      <section className='login'>
        <ToastContainer />
        <div className="main-login">
          <div className="part-login-1">
            <form onSubmit={handleFormSubmit}>
              <h2>{t('login')}</h2>
              <p>{t('enterWithNetworks')}</p>

              <div className="login-input-group">
                <label>{t('email1')}*</label>
                <input
                  type="email"
                  name="email"
                  placeholder='name@emai.com'
                  value={formData.email}
                  onChange={handleFormDataChange}
                />
              </div>

              <div className="login-input-group">
                <label>{t('password')}*</label>
                <input
                  type={showPassword ? 'text' : 'password'}

                  name="password"
                  placeholder='Enter Your Password here'
                  value={formData.password}
                  onChange={handleFormDataChange}
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

              <span onClick={() => setModalShow(true)}>{t('forgotPassword')} <a href="#">{t('clickHere')}</a></span>

              {/* <button type="submit">{t('logIn')}</button> */}
              <button type="submit">Login</button>

              <span>{t('dontHaveAccount')} <a onClick={sigup}>{t('createAccount')}</a></span>
            </form>
          </div>
          <div className="part-login-2" style={{ display: 'flex', alignItems: 'center', background: '#292a2b' }}>
            <img src={login} alt="" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
