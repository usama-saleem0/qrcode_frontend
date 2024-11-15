// Templates.js
import React, { useState, useEffect } from 'react';
import QRcode from '../../img/QRCODEbardcode.png';
import { Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { baseurl } from '../../baseurl';
import axios from 'axios';

import QRDOYTSICONS from '../../img/qrcodedots.png';

const DashboardTemplates = () => {

    const [isOpenMap, setIsOpenMap] = useState({});
    const [loading, setLoading] = useState(false);


    // Function to toggle open state for a specific template
    const toggleOpen = (id) => {
        setIsOpenMap((prev) => ({
            ...prev,
            [id]: !prev[id], // Toggle the open state for the specific template ID
        }));
    };

    const editscreens = (id) => {

        console.log('id', id)

        navigate(`/createcustomtemplate/${id}`);
    };



    const getUserFromLocalStorage = () => {
        const user = localStorage.getItem('userData');
        return user ? JSON.parse(user) : null;
    };


    const storedUser = getUserFromLocalStorage();
    const userId = storedUser ? storedUser.id : null;

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/createcustomtemplate');
    };

    const [qrTemplates, setQrTemplates] = useState([]);


    const fetchQrTemplates = async () => {
        setLoading(true);

        const storedUser = getUserFromLocalStorage();
        const userId = storedUser ? storedUser.id : null;

        try {
            const response = await axios.get(`${baseurl}/getQrTemplate/${userId}`);
            console.log('QR Code(s) retrieved successfully:', response.data);
            setQrTemplates(response.data.data);
            return response.data.data; // Returns the QR code data from the response
        } catch (error) {
            console.error('Error retrieving QR Code:', error);
            return null;
        }
        finally {
            setLoading(false); // End loading
        }
    };


    const deleteTemplate = async (id) => {
        setLoading(true);

        try {
            await axios.delete(`${baseurl}/deleteQrTemplate/${id}`);
            console.log('Template deleted successfully');

            // Update the state to remove the deleted template
            setQrTemplates((prevTemplates) => prevTemplates.filter((template) => template.id !== id));
        } catch (error) {
            console.error('Error deleting template:', error);
        }
        finally {
            setLoading(false); // End loading
        }
    };


    useEffect(() => {
        fetchQrTemplates();

    }, [userId]);




    return (
        <>
            <div className="main-dashbord-contanir">
                <div className="MyTempletes">
                    <div className="MyTempleteshehader">
                        <h1>Templete</h1>
                        <button onClick={handleClick}>
                            Add
                        </button>
                    </div>

                    <div className="helodisplayflex">


                        {/* {qrTemplates.length > 0 ? (
                        qrTemplates.map((template) => (
                            <div key={template.id} className="MyTempletes--main">
                                <div className="templeteqrcodewhendata">
                                    <div className="select-Rooms-drop" style={{ width: '97%', justifyItems: 'flex-end', top: '20px' }}>
                                        <div onClick={() => setIsOpen(!isOpen)} className="01" style={{ width: '20%' }}>
                                            <img src={QRDOYTSICONS} alt="icons" />
                                        </div>
                                        {isOpen && (
                                            <div className="box-content" style={{ right: '0px', left: '0px', top: '0px' }}>
                                                <button className="button" onClick={() => editscreens(template.id)}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                        <path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zM96 64C43 64 0 107 0 160L0 416c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-96c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7-14.3 32-32 32L96 448c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 64z" />
                                                    </svg>
                                                    Edit
                                                </button>
                                                <button className="button" onClick={() => deleteTemplate(template.id)}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                                        <path d="M384 336l-192 0c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l140.1 0L400 115.9 400 320c0 8.8-7.2 16-16 16zM192 384l192 0c35.3 0 64-28.7 64-64l0-204.1c0-12.7-5.1-24.9-14.1-33.9L366.1 14.1c-9-9-21.2-14.1-33.9-14.1L192 0c-35.3 0-64 28.7-64 64l0 256c0 35.3 28.7 64 64 64z" />
                                                    </svg>
                                                    Delete
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                    <img src={template.qrcode} alt="QR Code" />
                                    <h3>{template.Name}</h3>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="MyTempletes--main">
                            <div className="templeteqrcode">
                                <img src={QRcode} alt="qrcode" />
                                <h3>You haven’t created any templates yet</h3>
                            </div>
                        </div>
                    )} */}



                        {loading && (
                            <div className="loader-container">
                                <div className="loader">
                                    <div className="box1"></div>
                                    <div className="box2"></div>
                                    <div className="box3"></div>
                                </div>
                            </div>
                        )}

                        {qrTemplates.length > 0 ? (
                            qrTemplates.map((template) => (
                                <div key={template.id} className="MyTempletes--main">
                                    <div className="templeteqrcodewhendata">
                                        <div className="select-Rooms-drop" style={{ width: '97%', justifyItems: 'flex-end', top: '20px' }}>
                                            <div onClick={() => toggleOpen(template.id)} className="01" style={{ width: '20%' }}>
                                                <img src={QRDOYTSICONS} alt="icons" />
                                            </div>
                                            {isOpenMap[template.id] && (
                                                <div className="box-content--templete">
                                                    <button className="button" onClick={() => editscreens(template.id)}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                            <path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zM96 64C43 64 0 107 0 160L0 416c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-96c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7-14.3 32-32 32L96 448c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 64z" />
                                                        </svg>
                                                        Edit
                                                    </button>
                                                    <button className="button" onClick={() => deleteTemplate(template.id)}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                                            <path d="M384 336l-192 0c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l140.1 0L400 115.9 400 320c0 8.8-7.2 16-16 16zM192 384l192 0c35.3 0 64-28.7 64-64l0-204.1c0-12.7-5.1-24.9-14.1-33.9L366.1 14.1c-9-9-21.2-14.1-33.9-14.1L192 0c-35.3 0-64 28.7-64 64l0 256c0 35.3 28.7 64 64 64z" />
                                                        </svg>
                                                        Delete
                                                    </button>
                                                </div>
                                            )}
                                        </div>
                                        <img src={template.qrcode} alt="QR Code" />
                                        <h3>{template.Name}</h3>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="MyTempletes--main">
                                <div className="templeteqrcode">
                                    <img src={QRcode} alt="qrcode" />
                                    <h3>You haven’t created any templates yet</h3>
                                </div>
                            </div>
                        )}


                    </div>



                </div>
            </div>
        </>
    );
};

export default DashboardTemplates;
