// Stats.js
import React, { useEffect, useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import Accordion from 'react-bootstrap/Accordion';
import { Container } from 'react-bootstrap';
import axios from 'axios';
import { baseurl } from '../../baseurl';
const Stats = () => {

    const [totalQr, settotalQr] = useState(0);
    const [totalQrScan, settotalQrScan] = useState(0);



    const fetchQRCodes = async (userId) => {
        try {
            const response = await axios.get(`${baseurl}/getQrCodeCount/${userId}`);
            console.log('All QR Codes Counts:', response.data.data);
            settotalQr(response.data.data)
            settotalQrScan(response.data.data2)

           
        } catch (error) {
            console.error('Error fetching QR codes:', error);
        }
    };

    useEffect(() => {

        const storedUser = getUserFromLocalStorage();
        const userId = storedUser ? storedUser.id : null;

        fetchQRCodes(userId);
    }, []);


    
 const getUserFromLocalStorage = () => {
    const user = localStorage.getItem('userData');
    return user ? JSON.parse(user) : null;
};




    return (
        <>
<div className="main-dashbord-contanir">
            <div className="Stats">
                <div className="Statshehader">
                    <h1>Stats</h1>
                </div>

                <div className="StatsRange">

                    <div className="StatsRange--dropdown">
                        <p>Period</p>
                        <div className="dropdown">
                            <Dropdown>
                                <Dropdown.Toggle variant="" id="dropdown-Stats">
                                    Last 7 days
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </div>

                    <div className="StatsRange--dropdown">
                        <p>Pick a range</p>
                        <div className="dropdown">
                            <input type="date" id="dropdown-Stats" />
                        </div>
                    </div>


                    <div className="StatsRange--dropdown">
                        <button id="dropdown-Statsbutton">Export Information</button>
                    </div>
                </div>


                <div className="StatsRange--2">

                    <div className="StatsRange--dropdown">
                        <p>QR Code</p>
                        <div className="dropdown">
                            <Dropdown>
                                <Dropdown.Toggle variant="" id="dropdown-Stats--2">
                                    All the QR codes
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </div>
                    <div className="StatsRange--dropdown">
                        <p>Folders</p>
                        <div className="dropdown">
                            <Dropdown>
                                <Dropdown.Toggle variant="" id="dropdown-Stats--2">
                                    All Folders
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </div>

                    <div className="StatsRange--dropdown">
                        <p>Operating Sysytem</p>
                        <div className="dropdown">
                            <Dropdown>
                                <Dropdown.Toggle variant="" id="dropdown-Stats--2">
                                    All
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </div>

                    <div className="StatsRange--dropdown">
                        <p>Countries</p>
                        <div className="dropdown">
                            <Dropdown>
                                <Dropdown.Toggle variant="" id="dropdown-Stats--2">
                                    ALL
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </div>

                    <div className="StatsRange--dropdown">
                        <p>Cities</p>
                        <div className="dropdown">
                            <Dropdown>
                                <Dropdown.Toggle variant="" id="dropdown-Stats--2">
                                    All
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </div>





                </div>



                <div className="Stats--analytical">
                    <div className='Stats--Analyzed--Period'>
                        <h3>Analyzed period:</h3>
                        <p>04-08-2024 to 11-08-2024</p>
                    </div>

                    <div className="Stats--analytical--orders">
                        <div className="Stats--analytical--orders--1">
                            <h3>{totalQr}</h3>
                            <p>Total QR codes</p>
                        </div>

                        <span></span>

                        <div className="Stats--analytical--orders--1">
                            <h3>{totalQrScan}</h3>
                            <p>Total Scans</p>
                        </div>

                        <span></span>

                        <div className="Stats--analytical--orders--1">
                            <h3>0</h3>
                            <p>Total Unique Scans</p>
                        </div>

                        <span></span>

                        <div className="Stats--analytical--orders--1">
                            <h3>{totalQrScan}</h3>
                            <p>Total Visits</p>
                        </div>

                    </div>
                </div>

                <div className="Stats--ScanActivites">
                    <h1>Scan Activities</h1>

                    <div className="Stats--ScanActivites--checkbox">
                        <div className="ScanActivites--checkbox--left">
                            <div className="checkbox--left--total">
                                <div className="your-box"><input type="checkbox" class="ui-checkbox"/></div>
              
                                <h2>Total</h2>
                            </div>

                            <div className="checkbox--left--Unique">
                            <div className="your-box"><input type="checkbox" class="ui-checkbox"/></div>
                                <h2>Unique</h2>
                            </div>

                            <div className="checkbox--left--Unique">
                            <div className="your-box"><input type="checkbox" class="ui-checkbox"/></div>
                                <h2>Visits to the preview</h2>
                            </div>
                        </div>

                        <div className="ScanActivites--checkbox--right">
                            <div className="checkbox--right--day">
                                <h3>Day</h3>
                            </div>

                            <div className="checkbox--right--Month">
                                <h3>Month</h3>
                            </div>
                            <div className="checkbox--right--Month">
                                <h3>Year</h3>
                            </div>
                        </div>
                    </div>


                    <h4>Not enough data to show statistics</h4>
                </div>


                <Accordion className='thala-box'>
                    <Accordion.Item eventKey="0" className="STATS--accordian">
                        <Accordion.Header>Scans by operating system</Accordion.Header>
                        <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                            culpa qui officia deserunt mollit anim id est laborum.
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="1" className="STATS--accordian">
                        <Accordion.Header>Scans by country</Accordion.Header>
                        <Accordion.Body>
                            Hello We are Updating the Text From where you can also see the detials and update it and can push it on Git hub.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2" className="STATS--accordian">
                        <Accordion.Header>Scans by region/city

                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <circle cx="8" cy="8" r="8" fill="#808080" />
                                <path d="M9 11C9 11.2652 8.89464 11.5196 8.70711 11.7071C8.51957 11.8946 8.26522 12 8 12C7.73478 12 7.48043 11.8946 7.29289 11.7071C7.10536 11.5196 7 11.2652 7 11C7 10.7348 7.10536 10.4804 7.29289 10.2929C7.48043 10.1054 7.73478 10 8 10C8.26522 10 8.51957 10.1054 8.70711 10.2929C8.89464 10.4804 9 10.7348 9 11ZM7.5 4C6.83696 4 6.20107 4.26339 5.73223 4.73223C5.26339 5.20107 5 5.83696 5 6.5H7C7 6.36739 7.05268 6.24021 7.14645 6.14645C7.24021 6.05268 7.36739 6 7.5 6H8.146C8.2321 6.00004 8.31566 6.02917 8.38313 6.08265C8.45061 6.13614 8.49803 6.21086 8.51771 6.29468C8.53739 6.3785 8.52818 6.46651 8.49156 6.54444C8.45495 6.62237 8.39309 6.68564 8.316 6.724L7 7.382V9H9V8.618L9.211 8.512C9.69063 8.27189 10.0752 7.87692 10.3024 7.39105C10.5296 6.90517 10.5862 6.35683 10.463 5.8348C10.3398 5.31276 10.044 4.8476 9.62346 4.51461C9.20296 4.18162 8.68238 4.0003 8.146 4H7.5Z" fill="white" />
                            </svg>
                        </Accordion.Header>
                        <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                            
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3" className="STATS--accordian">
                        <Accordion.Header>Scans by browser
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <circle cx="8" cy="8" r="8" fill="#808080" />
                                <path d="M9 11C9 11.2652 8.89464 11.5196 8.70711 11.7071C8.51957 11.8946 8.26522 12 8 12C7.73478 12 7.48043 11.8946 7.29289 11.7071C7.10536 11.5196 7 11.2652 7 11C7 10.7348 7.10536 10.4804 7.29289 10.2929C7.48043 10.1054 7.73478 10 8 10C8.26522 10 8.51957 10.1054 8.70711 10.2929C8.89464 10.4804 9 10.7348 9 11ZM7.5 4C6.83696 4 6.20107 4.26339 5.73223 4.73223C5.26339 5.20107 5 5.83696 5 6.5H7C7 6.36739 7.05268 6.24021 7.14645 6.14645C7.24021 6.05268 7.36739 6 7.5 6H8.146C8.2321 6.00004 8.31566 6.02917 8.38313 6.08265C8.45061 6.13614 8.49803 6.21086 8.51771 6.29468C8.53739 6.3785 8.52818 6.46651 8.49156 6.54444C8.45495 6.62237 8.39309 6.68564 8.316 6.724L7 7.382V9H9V8.618L9.211 8.512C9.69063 8.27189 10.0752 7.87692 10.3024 7.39105C10.5296 6.90517 10.5862 6.35683 10.463 5.8348C10.3398 5.31276 10.044 4.8476 9.62346 4.51461C9.20296 4.18162 8.68238 4.0003 8.146 4H7.5Z" fill="white" />
                            </svg>
                        </Accordion.Header>
                        <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                            culpa qui officia deserunt mollit anim id est laborum.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4" className="STATS--accordian">
                        <Accordion.Header>Scans by user language</Accordion.Header>
                        <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                            culpa qui officia deserunt mollit anim id est laborum.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="5" className="STATS--accordian">
                        <Accordion.Header>Scans by QR code</Accordion.Header>
                        <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                            culpa qui officia deserunt mollit anim id est laborum.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="6" className="STATS--accordian">
                        <Accordion.Header>Scans by time of the day </Accordion.Header>
                        <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                            culpa qui officia deserunt mollit anim id est laborum.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="7" className="STATS--accordian">
                        <Accordion.Header>Events

                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <circle cx="8" cy="8" r="8" fill="#808080" />
                                <path d="M9 11C9 11.2652 8.89464 11.5196 8.70711 11.7071C8.51957 11.8946 8.26522 12 8 12C7.73478 12 7.48043 11.8946 7.29289 11.7071C7.10536 11.5196 7 11.2652 7 11C7 10.7348 7.10536 10.4804 7.29289 10.2929C7.48043 10.1054 7.73478 10 8 10C8.26522 10 8.51957 10.1054 8.70711 10.2929C8.89464 10.4804 9 10.7348 9 11ZM7.5 4C6.83696 4 6.20107 4.26339 5.73223 4.73223C5.26339 5.20107 5 5.83696 5 6.5H7C7 6.36739 7.05268 6.24021 7.14645 6.14645C7.24021 6.05268 7.36739 6 7.5 6H8.146C8.2321 6.00004 8.31566 6.02917 8.38313 6.08265C8.45061 6.13614 8.49803 6.21086 8.51771 6.29468C8.53739 6.3785 8.52818 6.46651 8.49156 6.54444C8.45495 6.62237 8.39309 6.68564 8.316 6.724L7 7.382V9H9V8.618L9.211 8.512C9.69063 8.27189 10.0752 7.87692 10.3024 7.39105C10.5296 6.90517 10.5862 6.35683 10.463 5.8348C10.3398 5.31276 10.044 4.8476 9.62346 4.51461C9.20296 4.18162 8.68238 4.0003 8.146 4H7.5Z" fill="white" />
                            </svg>
                        </Accordion.Header>
                        <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                            culpa qui officia deserunt mollit anim id est laborum.
                        </Accordion.Body>
                    </Accordion.Item>

                </Accordion>


            </div>
            </div>


        </>
    );
};

export default Stats;
