// QRCodeGenerator.jsx
import React, { useState } from 'react';
import { QRCodeCanvas } from 'qrcode.react';
import Select from 'react-select';

const QRCodeGenerator = () => {
  // const [urls, setUrsl] = useState('https://qrn1.com/qrscan');
  const [urls, setUrsl] = useState(' https://a4fe-2407-aa80-15-2f1-1581-36fc-7dff-15fe.ngrok-free.app/qrscan');

  const [url, setUrl] = useState('');

  
  const [password, setPassword] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [selectedDays, setSelectedDays] = useState([]);

  
  const dayOptions = [
    { value: 'Monday', label: 'Monday' },
    { value: 'Tuesday', label: 'Tuesday' },
    { value: 'Wednesday', label: 'Wednesday' },
    { value: 'Thursday', label: 'Thursday' },
    { value: 'Friday', label: 'Friday' },
    { value: 'Saturday', label: 'Saturday' },
    { value: 'Sunday', label: 'Sunday' }
  ];

  
  const handleDayChange = (selectedOptions) => {

    console.log(selectedOptions)
    setSelectedDays(selectedOptions);
  };

  const [isChecked, setIsChecked] = useState(false);

  // Handle checkbox change
  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  const generateQRCodeData = () => {




  
    const currentTime = new Date();
    console.log(startTime)

    const start = new Date(startTime)
    const end = new Date(endTime)


    console.log('generating', currentTime , start )

    if(currentTime >= start && currentTime <= end){
        console.log('hhhhhhh')

    }
    const data = {
      password,
      startTime,
      endTime,
      url,
      isChecked,
      days: selectedDays.map(option => option.value)
    };

   
    return `${urls}?data=${encodeURIComponent(JSON.stringify(data))}`;
  
  };

  return (
    <div>
      <h2>QR Code Generator</h2>
      <input
        type="text"
        placeholder="Enter website URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <input
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="date"
        placeholder="Start Time"
        value={startTime}
        onChange={(e) => setStartTime(e.target.value)}
      />
      <input
        // type="datetime-local"
        type="date"

        placeholder="End Time"
        value={endTime}
        onChange={(e) => setEndTime(e.target.value)}
      />

        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />

      <Select
        isMulti
        options={dayOptions}
        value={selectedDays}
        onChange={handleDayChange}
        placeholder="Select Days"
      />
      <div style={{ marginTop: '20px' }}>
        <QRCodeCanvas value={generateQRCodeData()} size={256} 
        //  bgColor={"#ffeb3b"}  
        //  fgColor={"#3f51b5"}
         />
      </div>
    </div>
  );
};

export default QRCodeGenerator;
