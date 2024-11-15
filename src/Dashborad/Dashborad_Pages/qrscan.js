import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import { baseurl } from '../../baseurl';

const QRCodeScanner = () => {
  const { t } = useTranslation(); // i18n hook
  const [scannedData, setScannedData] = useState(null);
  const [enteredPassword, setEnteredPassword] = useState('');
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [isshow, setisShow] = useState(false);

  const [errorMessage, setErrorMessage] = useState('');
  const [type, setType] = useState('');
  const [userIds, setuserIds] = useState('');
  const [normalId, setnormalId] = useState('');




  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const data = params.get('data');
  
    if (data) {
      try {
        const decodedData = JSON.parse(decodeURIComponent(data));
        const currentTime = new Date();
        const currentDay = currentTime.toLocaleDateString('en-US', { weekday: 'long' });

        if (decodedData.id) {
          localStorage.setItem('fetchId', decodedData.id);
          setType(decodedData.type)
          setuserIds(decodedData.userId)
          setnormalId(decodedData.id)
          countScan(decodedData.id , decodedData.type, decodedData.userId , decodedData)
        }


       


        if (decodedData.startTime && decodedData.endTime && decodedData.password) {
          const start = new Date(decodedData.startTime);
          const end = new Date(decodedData.endTime);
  
          const extractDate = (date) => {
            return date.toISOString().split('T')[0];
          };
  
          const currentDateFormatted = extractDate(currentTime);
          const startDateFormatted = extractDate(start);
          const endDateFormatted = extractDate(end);
          
          if (decodedData.isChecked) {
            if (decodedData.days.includes(currentDay) && currentDateFormatted >= startDateFormatted && currentDateFormatted <= endDateFormatted) {
              setScannedData(decodedData);
            } else {
              setErrorMessage(t('errorUnavailableDay_NB'));
            }
          } else {
            if (currentDateFormatted >= startDateFormatted && currentDateFormatted <= endDateFormatted) {
              setScannedData(decodedData);
            } else {
              setErrorMessage(t('errorUnavailableTime_NB'));
            }
          }
        } else {
          setScannedData(decodedData);
          if (!decodedData.password) {
            setIsAuthorized(true);


            // if (decodedData.url) {
            //   window.location.href = decodedData.url; 
            // }


          }
        }
      } catch (error) {
        setErrorMessage(t('errorInvalidQR_NB'));
      }
    }
  }, [location.search, t]);


  const countScan = async (id , type , userId , decodedData) => {
    try {
      
      const response = await axios.get(`${baseurl}/countscanlist/${id}`, {
        params: { type, userId }
      });

      setisShow(true)


      if (!decodedData.password) {
        setIsAuthorized(true);
        


        if (decodedData.url) {
          window.location.href = decodedData.url; 
        }
        


      }
      
      
      console.log(response.data);
    }
     catch (error) {
      console.error('Error fetching QR template by ID:', error);
    }
  };

  const handlePasswordChange = (e) => {
    setEnteredPassword(e.target.value);
  };

  const handleSubmitPassword = () => {
    if (scannedData && enteredPassword === scannedData.password) {
      setIsAuthorized(true);
      window.location.href = scannedData.url;
    } else {
      setErrorMessage(t('incorrectPasswordMessage_NB'));
    }
  };

  return (
    <>
    {
      isshow && (
        <div>
      
        <h2>{t('qrCodeScannerHeading_NB')}</h2>
  
        {scannedData && scannedData.password && (
          <div>
            <input
              type="password"
              placeholder={t('passwordPlaceholder_NB')}
              value={enteredPassword}
              onChange={handlePasswordChange}
            />
            <button onClick={handleSubmitPassword}>{t('submitPasswordButton_NB')}</button>
          </div>
        )}
  
        {isAuthorized && (
          <div>
            <p>{t('accessGrantedMessage_NB')}</p>
            <a href={scannedData.url} target="_blank" rel="noopener noreferrer">
              {scannedData.url} 
  
              
            </a>
          </div>
        )}
  
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      </div>
      )
    }
    
    
    </>
  );
};

export default QRCodeScanner;
