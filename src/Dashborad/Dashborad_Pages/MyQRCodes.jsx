// MyQRCodes.js
import React, { useEffect, useState } from 'react';
import AddMyQr from '../../img/myqrAdd.png';
import { Link, useNavigate } from 'react-router-dom';
import Eyeicon from '../../img/EyeQRCODES.png';
import Dropdown from 'react-bootstrap/Dropdown';
import Toggle from '../../img/qrcodestoogle.png';
import QRCODE from '../../img/qrcodescode.png';
import ArrowLeft from '../../img/qrcodesleft.png';
import ArrowRight from '../../img/qrcoesright.png';
import Search from '../../img/qrSearch.png';
import QRCUT from '../../img/QRCUT.png';
import QRADD from '../../img/QRADDicon.png';
import QRBARCODE from '../../img/QRCODEbardcode.png';
import QRPEN from '../../img/QRPEN.png';
import Star from '../../img/star.png';

import QRDOYTSICONS from '../../img/qrcodedots.png';
import { Container } from 'react-bootstrap';

import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import { baseurl } from '../../baseurl';
import axios from 'axios';
import Mydrop1 from '../../my_drop_down/My_drop_1';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';







const MyQRCodes = () => {
    const [qrCodes, setQRCodes] = useState([]); // Initialize as an empty array

    const [selectedOption, setSelectedOption] = useState('Most recent');
    const [selectedQrtype, setSelectedQrtype] = useState([]);
    const [quantity, setQuantity] = useState(5);
    const [favoriteQRCodes, setFavoriteQRCodes] = useState([]);
    const [activeTab, setActiveTab] = useState('all');



    const handleTabChange = (tab) => {
        console.log("Tab name",tab)
        setActiveTab(tab);
    };

    

    const navigate = useNavigate();

    const handleSelect = (eventKey) => {
        let sortedQrCodes = [...qrCodes];

        switch (eventKey) {
            case '1':
                // sortedQrCodes.sort((a, b) => a.name.localeCompare(b.name));
                setSelectedOption('Named');
                break;
            case '2':
                sortedQrCodes.sort((a, b) => b.scan - a.scan);
                setSelectedOption('Most scanned');
                break;
            case '3':
                sortedQrCodes.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
                setSelectedOption('Latest Modified');
                break;
            case '4':
                sortedQrCodes.sort((a, b) => b.visitCount - a.visitCount);
                setSelectedOption('Most visited');
                break;
            default:
                break;
        }

        setQRCodes(sortedQrCodes);
    };



    const editscreens = (id) => {

        console.log('id', id)

        navigate(`/listlinkedit/${id}`);


    };


    const handleDownload = (id) => {
        // Find the img element
        const imgElement = document.getElementById(`qrcode-${id}`);
        if (imgElement) {
            const imgSrc = imgElement.src;

            // Create an image element for canvas manipulation
            const image = new Image();
            image.crossOrigin = "anonymous"; // Handle CORS issues

            image.onload = function () {
                const canvas = document.createElement("canvas");
                canvas.width = image.width;
                canvas.height = image.height;

                // Draw the image onto the canvas
                const ctx = canvas.getContext("2d");
                ctx.drawImage(image, 0, 0);

                // Convert the canvas content to a Blob (PNG format)
                canvas.toBlob((blob) => {
                    // Create a temporary link element
                    const link = document.createElement("a");
                    link.href = URL.createObjectURL(blob);
                    link.download = `qrcode-${id}.png`; // File name for the download

                    // Trigger download by programmatically clicking the link
                    document.body.appendChild(link);
                    link.click();

                    // Remove the link element from the document
                    document.body.removeChild(link);
                }, 'image/png');
            };

            // Set the source of the image to trigger loading
            image.src = imgSrc;
        }
    };


    // const handleDownload = (id) => {
    //     // Find the img element
    //     const imgElement = document.getElementById(`qrcode-${id}`);
    //     if (imgElement) {
    //       const imgSrc = imgElement.src;
      
    //       // Create an image element for canvas manipulation
    //       const image = new Image();
    //       image.crossOrigin = "anonymous"; // Handle CORS issues
      
    //       image.onload = function () {
    //         // Set high-resolution canvas dimensions
    //         const scaleFactor = 5; // Increase this factor for even higher quality
    //         const canvas = document.createElement("canvas");
    //         canvas.width = image.width * scaleFactor;
    //         canvas.height = image.height * scaleFactor;
      
    //         // Draw the image onto the canvas
    //         const ctx = canvas.getContext("2d");
    //         ctx.scale(scaleFactor, scaleFactor); // Scale the drawing context
    //         ctx.drawImage(image, 0, 0);
      
    //         // Convert the canvas content to a Blob (PNG format)
    //         canvas.toBlob((blob) => {
    //           // Create a temporary link element
    //           const link = document.createElement("a");
    //           link.href = URL.createObjectURL(blob);
    //           link.download = `qrcode-${id}.png`; // File name for the download
      
    //           // Trigger download by programmatically clicking the link
    //           document.body.appendChild(link);
    //           link.click();
      
    //           // Remove the link element from the document
    //           document.body.removeChild(link);
    //         }, 'image/png');
    //       };
      
    //       // Set the source of the image to trigger loading
    //       image.src = imgSrc;
    //     }
    //   };
      

    const handleSelectQrtype = (eventKey) => {
        const selectedType = getTypeFromEventKey(eventKey);
        let updatedSelections = [...selectedQrtype];

        if (updatedSelections.includes(selectedType)) {
            updatedSelections = updatedSelections.filter(type => type !== selectedType);
        } else {
            updatedSelections.push(selectedType);
        }

        setSelectedQrtype(updatedSelections);


    };



    // Helper function to get the QR code type from event key
    const getTypeFromEventKey = (eventKey) => {
        const types = {
            '1': 'Website',
            '2': 'PDF',
            '3': 'List of links',
            '4': 'Images',
            '5': 'Video',
            '6': 'Business',
            '7': 'vCard Plus',
            '8': 'Menu',
            '9': 'Apps',
            '10': 'MP3',
            '11': 'Coupon',
            '12': 'Feedback',
            '13': 'Landing',
            '14': '2D Barcode'
        };
        return types[eventKey];
    };


    const handleSelectForm = (eventKey) => {
        switch (eventKey) {
            case "1":
                setQuantity('10');
                break;
            case "2":
                setQuantity('25');
                break;
            case "3":
                setQuantity('50');
                break;
            case "4":
                setQuantity('100');
                break;
            default:
                break;
        }
    };


    const getUserFromLocalStorage = () => {
        const user = localStorage.getItem('userData');
        return user ? JSON.parse(user) : null;
    };

    const storedUser = getUserFromLocalStorage();
    const userId = storedUser ? storedUser.id : null;

    console.log(userId, "userId");

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'short', day: 'numeric' };
        return new Date(dateString).toLocaleDateString('en-US', options);
    };


    const copyToClipboard = (e) => {
        const textToCopy = e || ''; // Get the text from qrCode.fetch
        if (textToCopy) {
            navigator.clipboard.writeText(textToCopy)
                .then(() => {
                    console.log('Text copied to clipboard');
                    toast.success('Text copied to clipboard');
                    // Optionally, you can show a success message to the user
                })
                .catch((err) => {
                    console.error('Failed to copy text: ', err);
                });
        }
    }

    // const fetchQRCodes = async (userId) => {
    //     try {
    //         const response = await axios.get(`${baseurl}/getQrCode/${userId}`);
    //         console.log(response.data.data);
    //         setQRCodes(response.data.data);
    //     } catch (error) {
    //         console.error('Error fetching QR code by ID:', error);
    //     }
    // };



    const fetchQRCodes = async (userId) => {
        try {
            const response = await axios.get(`${baseurl}/getQrCode/${userId}`);
            console.log('All QR Codes:', response.data.data);
            setQRCodes(response.data.data);
            // Filter and set favorite QR codes separately
            setFavoriteQRCodes(response.data.data.filter(qrCode => qrCode.favourite === 1));
        } catch (error) {
            console.error('Error fetching QR codes:', error);
        }
    };

    useEffect(() => {

        // Fetch QR codes from the backend API
        fetchQRCodes(userId);
    }, []);


    const sortedQRCodes = [...qrCodes].sort((a, b) => { });
    const filteredQRCodes = qrCodes.slice(0, parseInt(quantity));




    const [search, setsearch] = useState('')




    // const finalQRCodes = handleSearch();
    // const finalQRCodes = activeTab === 'all' ? handleSearch(qrCodes) : handleSearch(favoriteQRCodes);


    // const handleSearch = (codes) => {
    //     // Only filter if the search input is not empty
    //     if (search !== '') {
    //         return codes.filter(qrCode =>
    //             qrCode?.Name?.toLowerCase().includes(search.toLowerCase()) // Ensure qrCode and qrCode.name are valid
    //         );
    //     }
    //     return codes; // Return the original array if no search input
    // };
    
    // // Assuming qrCodes and favoriteQRCodes are defined and populated arrays
    // const finalQRCodes = activeTab === 'all' 
    //     ? handleSearch(qrCodes) 
    //     : handleSearch(favoriteQRCodes);
    

///SAHIChyyyy
    // const handleSearch = (codes, quantity) => {
    //     let filteredCodes = codes;
    
    //     // Apply search filtering if there's a search term
    //     if (search !== '') {
    //         filteredCodes = filteredCodes.filter(qrCode =>
    //             qrCode?.Name?.toLowerCase().includes(search.toLowerCase())
    //         );
    //     }
    
    //     // Limit the result to the specified quantity
    //     return filteredCodes.slice(0, parseInt(quantity, 10));
    // };
    
    // // Define finalQRCodes based on activeTab, with quantity limit
    // const finalQRCodes = activeTab === 'all' 
    //     ? handleSearch(qrCodes, quantity) 
    //     : handleSearch(favoriteQRCodes, quantity);
    
    const handleSearch = (codes, quantity) => {
        let filteredCodes = codes;
    
        // Apply search filtering if there's a search term
        if (search !== '') {
            filteredCodes = filteredCodes.filter(qrCode =>
                qrCode?.Name?.toLowerCase().includes(search.toLowerCase())
            );
        }
    
        // Apply filtering based on selected QR type
        if (selectedQrtype.length > 0) {
            filteredCodes = filteredCodes.filter(qrCode =>
                selectedQrtype.includes(qrCode?.selectname) // Assuming qrCode.selectname matches the type
            );
        }
    
        // Limit the result to the specified quantity
        return filteredCodes.slice(0, parseInt(quantity, 10));
    };

    const finalQRCodes = activeTab === 'all'
    ? handleSearch(qrCodes, quantity)
    : handleSearch(favoriteQRCodes, quantity);

    

    return (
        <>

            <ToastContainer />
            <div className="main-dashbord-contanir">
                <div className='MyQRCodes'>

                    <div className="MyQRCodeshehader">
                        <h1>My QR Codes</h1>
                        <button>
                            <img src={AddMyQr} alt="add" />
                        </button>
                    </div>

                    <div className="MyQRCodes--main">

                        <Tabs>
                            <div className="MyQRCodes--navbar">
                                <div className="MyQRCodes--navbar--left">

                                    <TabList className="qr-tab-btn">
                                        <Tab><button onClick={() => handleTabChange('all')}>All</button></Tab>
                                        <Tab><button onClick={() => handleTabChange('')}>Static</button></Tab>
                                        <Tab><button onClick={() => handleTabChange('all')}>Dynamic</button></Tab>
                                        <Tab><button onClick={() => handleTabChange('favorites')}>Favourites</button></Tab>
                                    </TabList>

                                </div>

                                <div className="MyQRCodes--navbar--right">
                                    <div className="MyQRCodes--navbar--right--eye">
                                        <img src={Eyeicon} alt="eyeicon" />
                                        <h5>Visits</h5>
                                    </div>
                                    <div className="dropdown-boxsis">

                                        <Dropdown onSelect={handleSelect}>
                                            <Dropdown.Toggle variant="" id="dropdown-basic">
                                                Sort by: {selectedOption}
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                <Dropdown.Item eventKey="1">
                                                    <input
                                                        type="checkbox"
                                                        name="sortOptions"
                                                        checked={selectedOption === 'Named'}
                                                        readOnly
                                                    />{' '}
                                                    Named
                                                </Dropdown.Item>
                                                <Dropdown.Item eventKey="2">
                                                    <input
                                                        type="checkbox"
                                                        name="sortOptions"
                                                        checked={selectedOption === 'Most scanned'}
                                                        readOnly
                                                    />{' '}
                                                    Most scanned
                                                </Dropdown.Item>
                                                <Dropdown.Item eventKey="3">
                                                    <input
                                                        type="checkbox"
                                                        name="sortOptions"
                                                        checked={selectedOption === 'Latest Modified'}
                                                        readOnly
                                                    />{' '}
                                                    Latest Modified
                                                </Dropdown.Item>
                                                <Dropdown.Item eventKey="4">
                                                    <input
                                                        type="checkbox"
                                                        name="sortOptions"
                                                        checked={selectedOption === 'Most visited'}
                                                        readOnly
                                                    />{' '}
                                                    Most visited
                                                </Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>


                                    <div className="dropdown-boxsis2">

                                        <Dropdown onSelect={handleSelectForm}>
                                            <Dropdown.Toggle variant="" id="dropdown-Second">
                                                Quantity: {quantity}
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                <Dropdown.Item eventKey="1">
                                                    <input
                                                        type="checkbox"
                                                        name="sortOptions"
                                                        checked={quantity === '10'}
                                                        readOnly
                                                    />{' '}
                                                    10
                                                </Dropdown.Item>

                                                <Dropdown.Item eventKey="2">
                                                    <input
                                                        type="checkbox"
                                                        name="sortOptions"
                                                        checked={quantity === '25'}
                                                        readOnly
                                                    />{' '}
                                                    25
                                                </Dropdown.Item>

                                                <Dropdown.Item eventKey="3">
                                                    <input
                                                        type="checkbox"
                                                        name="sortOptions"
                                                        checked={quantity === '50'}
                                                        readOnly
                                                    />{' '}50
                                                </Dropdown.Item>

                                                <Dropdown.Item eventKey="4">
                                                    <input
                                                        type="checkbox"
                                                        name="sortOptions"
                                                        checked={quantity === '100'}
                                                        readOnly
                                                    />{' '}100
                                                </Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>

                                    </div>


                                    {/* <div className="MyQRCodes--navbar--right--Images">
                                        <img src={Toggle} alt="Toggleimage" />
                                        <img src={QRCODE} alt="QRCODE" />
                                    </div> */}

                                    <div className="pagenition">
                                        <h1>1 of 1</h1>
                                    </div>

                                    <div className="MyQRCodes--navbar--right--arrows">
                                        <img src={ArrowLeft} alt="" />
                                        <img src={ArrowRight} alt="" />
                                    </div>
                                </div>

                                <div className="MyQRCodes--second--navbar">

                                    <div className="MyQRCodes--second--navbar--search">
                                        <img src={Search} alt="search" />
                                        <input type="text" placeholder="Search" onChange={(e) => setsearch(e.target.value)} />
                                    </div>


                                    <div className="MyQRCodes--second--navbar--search">
                                        <img src={QRCUT} alt="Cut" />
                                        <input type="text" placeholder="QR code status: Active" />
                                    </div>


                                    <Dropdown onSelect={handleSelectQrtype}>
                                        <div className="MyQRCodes--second--navbar--ADD">
                                            <img src={QRADD} alt="add" />

                                            <Dropdown.Toggle variant="" id="dropdown-basicss">
                                                QR code type
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu style={{ width: '100%', height: '300px', overflowX: 'scroll' }}>
                                                {Object.entries({
                                                    '1': 'Website',
                                                    '2': 'PDF',
                                                    '3': 'List of Links',
                                                    '4': 'Images',
                                                    '5': 'Video',
                                                    '6': 'Business',
                                                    '7': 'vCard Plus',
                                                    '8': 'Menu',
                                                    '9': 'Apps',
                                                    '10': 'MP3',
                                                    '11': 'Coupon',
                                                    '12': 'Feedback',
                                                    '13': 'Event',
                                                    '14': '2D Barcode'
                                                }).map(([key, value]) => (
                                                    <Dropdown.Item eventKey={key} key={key}>
                                                        <input
                                                            type="checkbox"
                                                            name="sortOptions"
                                                            checked={selectedQrtype.includes(value)}
                                                            readOnly
                                                        />{' '}
                                                        {value}
                                                    </Dropdown.Item>
                                                ))}
                                            </Dropdown.Menu>
                                        </div>
                                    </Dropdown>


                                </div>


                            </div>


                            <TabPanel>

                                {activeTab === 'all' && (
                                    <div className="MyQRCodes--main--columns" >

                                        {/* {finalQRCodes.length > 0 ? (

                                            search === '' ? (finalQRCodes.map((qrCode) => (
                                                <div className="MyQRCodes--text" key={qrCode.id}>



                                                    <div className="MyQRCodes--text--checkbox">
                                                        <input type="checkbox" class="ui-checkbox" />
                                                    </div>

                                                    <div className="MyQRCodes--text--barcode">
                                                      
                                                        <img src={qrCode.qrcode} alt="barcode" id={`qrcode-${qrCode.id}`} />
                                                    </div>


                                                    <div className="MyQRCodes--text--barcode--text">
                                                        <h3>{qrCode.selectname || ''}

                                                            {
                                                                qrCode.favourite == 1 &&

                                                                <img className='staricon' src={Star} alt="pen" />

                                                            }


                                                        </h3>
                                                        <h5>{qrCode.Name || 'Untitiled'}
                                                            <img src={QRPEN} alt="pen" />
                                                        </h5>
                                                        <h6>Created: {formatDate(qrCode.createdAt)}</h6>
                                                    </div>

                                                    <div className="MyQRCodes--text--afterline">

                                                        <div className="MyQRCodes--text--afterline--folder">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                                <path d="M2.5 5.3125V6.875H6.54C6.66318 6.87497 6.78515 6.85067 6.89893 6.80349C7.01271 6.7563 7.11608 6.68715 7.20312 6.6L8.49062 5.3125L7.20312 4.025C7.02748 3.84913 6.78918 3.75022 6.54063 3.75H4.0625C3.6481 3.75 3.25067 3.91462 2.95765 4.20765C2.66462 4.50067 2.5 4.8981 2.5 5.3125ZM1.25 5.3125C1.25 4.56658 1.54632 3.85121 2.07376 3.32376C2.60121 2.79632 3.31658 2.5 4.0625 2.5H6.54C6.82727 2.49998 7.11174 2.55654 7.37715 2.66646C7.64257 2.77638 7.88373 2.9375 8.08687 3.14063L9.63375 4.6875H15.9375C16.6834 4.6875 17.3988 4.98382 17.9262 5.51126C18.4537 6.03871 18.75 6.75408 18.75 7.5V14.6875C18.75 15.4334 18.4537 16.1488 17.9262 16.6762C17.3988 17.2037 16.6834 17.5 15.9375 17.5H4.0625C3.31658 17.5 2.60121 17.2037 2.07376 16.6762C1.54632 16.1488 1.25 15.4334 1.25 14.6875V5.3125ZM2.5 8.125V14.6875C2.5 15.1019 2.66462 15.4993 2.95765 15.7924C3.25067 16.0854 3.6481 16.25 4.0625 16.25H15.9375C16.3519 16.25 16.7493 16.0854 17.0424 15.7924C17.3354 15.4993 17.5 15.1019 17.5 14.6875V7.5C17.5 7.0856 17.3354 6.68817 17.0424 6.39515C16.7493 6.10212 16.3519 5.9375 15.9375 5.9375H9.63375L8.08687 7.48438C7.88373 7.6875 7.64257 7.84862 7.37715 7.95854C7.11174 8.06846 6.82727 8.12502 6.54 8.125H2.5Z" fill="#808080" />
                                                            </svg>
                                                            <h3>No Folder</h3>
                                                        </div>

                                                        <div className="MyQRCodes--text--afterline--folder">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                                <path d="M3.6 9H20.4M3.6 15H20.4M3 12C3 13.1819 3.23279 14.3522 3.68508 15.4442C4.13738 16.5361 4.80031 17.5282 5.63604 18.364C6.47177 19.1997 7.46392 19.8626 8.55585 20.3149C9.64778 20.7672 10.8181 21 12 21C13.1819 21 14.3522 20.7672 15.4442 20.3149C16.5361 19.8626 17.5282 19.1997 18.364 18.364C19.1997 17.5282 19.8626 16.5361 20.3149 15.4442C20.7672 14.3522 21 13.1819 21 12C21 9.61305 20.0518 7.32387 18.364 5.63604C16.6761 3.94821 14.3869 3 12 3C9.61305 3 7.32387 3.94821 5.63604 5.63604C3.94821 7.32387 3 9.61305 3 12Z" stroke="#808080" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                                <path d="M11.4999 3C9.81525 5.69961 8.92212 8.81787 8.92212 12C8.92212 15.1821 9.81525 18.3004 11.4999 21M12.4999 3C14.1846 5.69961 15.0777 8.81787 15.0777 12C15.0777 15.1821 14.1846 18.3004 12.4999 21" stroke="#808080" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                            </svg>

                                                            <h3>{qrCode.fetch ? qrCode.fetch : ''}</h3>
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" style={{ fill: 'grey', cursor: "pointer" }} onClick={() => copyToClipboard(qrCode.fetch)}><path d="M208 0L332.1 0c12.7 0 24.9 5.1 33.9 14.1l67.9 67.9c9 9 14.1 21.2 14.1 33.9L448 336c0 26.5-21.5 48-48 48l-192 0c-26.5 0-48-21.5-48-48l0-288c0-26.5 21.5-48 48-48zM48 128l80 0 0 64-64 0 0 256 192 0 0-32 64 0 0 48c0 26.5-21.5 48-48 48L48 512c-26.5 0-48-21.5-48-48L0 176c0-26.5 21.5-48 48-48z" /></svg>
                                                        </div>




                                                        <div className="MyQRCodes--text--afterline--folder">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M12.2975 2.1839C13.0292 1.45212 14.0217 1.04102 15.0566 1.04102C16.0915 1.04102 17.084 1.45212 17.8158 2.1839C18.5476 2.91568 18.9587 3.90818 18.9587 4.94307C18.9587 5.97796 18.5476 6.97046 17.8158 7.70223L9.91079 15.6072C9.45912 16.0589 9.19412 16.3239 8.89745 16.5547C8.54856 16.8281 8.17356 17.06 7.77245 17.2506C7.43412 17.4114 7.07745 17.5306 6.47245 17.7322L3.69579 18.6572L3.02745 18.8806C2.76164 18.9693 2.47637 18.9822 2.20362 18.9179C1.93087 18.8536 1.68144 18.7146 1.48328 18.5164C1.28513 18.3183 1.1461 18.0688 1.08178 17.7961C1.01745 17.5233 1.03038 17.238 1.11912 16.9722L2.26745 13.5281C2.46912 12.9222 2.58829 12.5656 2.74912 12.2264C2.94023 11.8264 3.17218 11.4514 3.44495 11.1014C3.67495 10.8064 3.94079 10.5406 4.39245 10.0889L12.2975 2.1839ZM3.66662 17.3506L6.03412 16.5606C6.69329 16.3406 6.97329 16.2464 7.23412 16.1222C7.5519 15.97 7.84995 15.7858 8.12829 15.5697C8.35579 15.3914 8.56579 15.1839 9.05745 14.6922L15.3658 8.3839C14.5009 8.07742 13.7158 7.58078 13.0683 6.93057C12.4187 6.28292 11.9226 5.49782 11.6166 4.63307L5.30829 10.9414C4.81662 11.4322 4.60829 11.6414 4.43079 11.8697C4.21412 12.1475 4.02995 12.4456 3.87829 12.7639C3.75412 13.0247 3.65995 13.3047 3.43995 13.9639L2.64995 16.3331L3.66662 17.3506ZM12.6291 3.6189C12.6583 3.76473 12.7058 3.96307 12.7866 4.1939C13.0304 4.89144 13.4293 5.52456 13.9533 6.04557C14.4741 6.56943 15.1069 6.96833 15.8041 7.21223C16.0358 7.29307 16.2341 7.34057 16.38 7.36973L16.9316 6.81807C17.426 6.32019 17.7029 5.64665 17.7017 4.94499C17.7005 4.24333 17.4212 3.57076 16.9251 3.07462C16.4289 2.57847 15.7564 2.29919 15.0547 2.29797C14.353 2.29674 13.6795 2.57366 13.1816 3.06807L12.6291 3.6189Z" fill="#808080" />
                                                            </svg>

                                                            <h3>Modified: {formatDate(qrCode.updatedAt)}</h3>
                                                        </div>

                                                    </div>


                                                    <div className="MyQRCodes--text--scans">
                                                        <h3>{qrCode.scan}</h3>
                                                        <p>Scans</p>
                                                    </div>


                                                    <div className="MyQRCodes--text--buttons">
                                                        <button>Active</button>
                                                        <button>Detail</button>
                                                    </div>

                                                    <div className="MyQRCodes--text--freetrail">
                                                        <button>
                                                            freeTrail
                                                        </button>
                                                    </div>


                                                    <div className="MyQRCodes--text--downlaods">

                                                        <svg style={{ cursor: 'pointer' }} xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none" onClick={() => handleDownload(qrCode.id)}>
                                                            <path d="M13.9998 18.667L8.1665 12.8337L9.79984 11.142L12.8332 14.1753V4.66699H15.1665V14.1753L18.1998 11.142L19.8332 12.8337L13.9998 18.667ZM6.99984 23.3337C6.35817 23.3337 5.80906 23.1054 5.3525 22.6488C4.89595 22.1923 4.66728 21.6428 4.6665 21.0003V17.5003H6.99984V21.0003H20.9998V17.5003H23.3332V21.0003C23.3332 21.642 23.1049 22.1915 22.6483 22.6488C22.1918 23.1062 21.6423 23.3344 20.9998 23.3337H6.99984Z" fill="black" />
                                                        </svg>

                                                        <button>
                                                           
                                                            <Mydrop1 qrCode={qrCode} />
                                                        </button>
                                                    </div>

                                                </div>
                                            ))) :





                                                (finalQRCodes.filter((e) => e.Name.toLowerCase().includes(search)).map((qrCode) => (
                                                    <div className="MyQRCodes--text" key={qrCode.id}>



                                                        <div className="MyQRCodes--text--checkbox">
                                                            <input type="checkbox" class="ui-checkbox" />
                                                        </div>

                                                        <div className="MyQRCodes--text--barcode">
                                                          
                                                            <img src={qrCode.qrcode} alt="barcode" id={`qrcode-${qrCode.id}`} />
                                                        </div>


                                                        <div className="MyQRCodes--text--barcode--text">
                                                            
                                                            <h5>{qrCode.Name || 'Untitiled'}
                                                                <img src={QRPEN} alt="pen" />
                                                            </h5>
                                                            <h6>Created: {formatDate(qrCode.createdAt)}</h6>
                                                        </div>

                                                        <div className="MyQRCodes--text--afterline">

                                                            <div className="MyQRCodes--text--afterline--folder">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                                    <path d="M2.5 5.3125V6.875H6.54C6.66318 6.87497 6.78515 6.85067 6.89893 6.80349C7.01271 6.7563 7.11608 6.68715 7.20312 6.6L8.49062 5.3125L7.20312 4.025C7.02748 3.84913 6.78918 3.75022 6.54063 3.75H4.0625C3.6481 3.75 3.25067 3.91462 2.95765 4.20765C2.66462 4.50067 2.5 4.8981 2.5 5.3125ZM1.25 5.3125C1.25 4.56658 1.54632 3.85121 2.07376 3.32376C2.60121 2.79632 3.31658 2.5 4.0625 2.5H6.54C6.82727 2.49998 7.11174 2.55654 7.37715 2.66646C7.64257 2.77638 7.88373 2.9375 8.08687 3.14063L9.63375 4.6875H15.9375C16.6834 4.6875 17.3988 4.98382 17.9262 5.51126C18.4537 6.03871 18.75 6.75408 18.75 7.5V14.6875C18.75 15.4334 18.4537 16.1488 17.9262 16.6762C17.3988 17.2037 16.6834 17.5 15.9375 17.5H4.0625C3.31658 17.5 2.60121 17.2037 2.07376 16.6762C1.54632 16.1488 1.25 15.4334 1.25 14.6875V5.3125ZM2.5 8.125V14.6875C2.5 15.1019 2.66462 15.4993 2.95765 15.7924C3.25067 16.0854 3.6481 16.25 4.0625 16.25H15.9375C16.3519 16.25 16.7493 16.0854 17.0424 15.7924C17.3354 15.4993 17.5 15.1019 17.5 14.6875V7.5C17.5 7.0856 17.3354 6.68817 17.0424 6.39515C16.7493 6.10212 16.3519 5.9375 15.9375 5.9375H9.63375L8.08687 7.48438C7.88373 7.6875 7.64257 7.84862 7.37715 7.95854C7.11174 8.06846 6.82727 8.12502 6.54 8.125H2.5Z" fill="#808080" />
                                                                </svg>
                                                                <h3>No Folder</h3>
                                                            </div>

                                                            <div className="MyQRCodes--text--afterline--folder">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                                    <path d="M3.6 9H20.4M3.6 15H20.4M3 12C3 13.1819 3.23279 14.3522 3.68508 15.4442C4.13738 16.5361 4.80031 17.5282 5.63604 18.364C6.47177 19.1997 7.46392 19.8626 8.55585 20.3149C9.64778 20.7672 10.8181 21 12 21C13.1819 21 14.3522 20.7672 15.4442 20.3149C16.5361 19.8626 17.5282 19.1997 18.364 18.364C19.1997 17.5282 19.8626 16.5361 20.3149 15.4442C20.7672 14.3522 21 13.1819 21 12C21 9.61305 20.0518 7.32387 18.364 5.63604C16.6761 3.94821 14.3869 3 12 3C9.61305 3 7.32387 3.94821 5.63604 5.63604C3.94821 7.32387 3 9.61305 3 12Z" stroke="#808080" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                                    <path d="M11.4999 3C9.81525 5.69961 8.92212 8.81787 8.92212 12C8.92212 15.1821 9.81525 18.3004 11.4999 21M12.4999 3C14.1846 5.69961 15.0777 8.81787 15.0777 12C15.0777 15.1821 14.1846 18.3004 12.4999 21" stroke="#808080" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                                </svg>

                                                                <h3>Qrfy.io/r/LdT-dphIT-</h3>
                                                            </div>

                                                            <div className="MyQRCodes--text--afterline--folder">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                                    <path d="M11 7L9.6 8.4L12.2 11H2V13H12.2L9.6 15.6L11 17L16 12L11 7ZM20 19H12V21H20C21.1 21 22 20.1 22 19V5C22 3.9 21.1 3 20 3H12V5H20V19Z" fill="#808080" />
                                                                </svg>

                                                                <h3>http://www.patrickbloghossian.c...</h3>
                                                            </div>


                                                            <div className="MyQRCodes--text--afterline--folder">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12.2975 2.1839C13.0292 1.45212 14.0217 1.04102 15.0566 1.04102C16.0915 1.04102 17.084 1.45212 17.8158 2.1839C18.5476 2.91568 18.9587 3.90818 18.9587 4.94307C18.9587 5.97796 18.5476 6.97046 17.8158 7.70223L9.91079 15.6072C9.45912 16.0589 9.19412 16.3239 8.89745 16.5547C8.54856 16.8281 8.17356 17.06 7.77245 17.2506C7.43412 17.4114 7.07745 17.5306 6.47245 17.7322L3.69579 18.6572L3.02745 18.8806C2.76164 18.9693 2.47637 18.9822 2.20362 18.9179C1.93087 18.8536 1.68144 18.7146 1.48328 18.5164C1.28513 18.3183 1.1461 18.0688 1.08178 17.7961C1.01745 17.5233 1.03038 17.238 1.11912 16.9722L2.26745 13.5281C2.46912 12.9222 2.58829 12.5656 2.74912 12.2264C2.94023 11.8264 3.17218 11.4514 3.44495 11.1014C3.67495 10.8064 3.94079 10.5406 4.39245 10.0889L12.2975 2.1839ZM3.66662 17.3506L6.03412 16.5606C6.69329 16.3406 6.97329 16.2464 7.23412 16.1222C7.5519 15.97 7.84995 15.7858 8.12829 15.5697C8.35579 15.3914 8.56579 15.1839 9.05745 14.6922L15.3658 8.3839C14.5009 8.07742 13.7158 7.58078 13.0683 6.93057C12.4187 6.28292 11.9226 5.49782 11.6166 4.63307L5.30829 10.9414C4.81662 11.4322 4.60829 11.6414 4.43079 11.8697C4.21412 12.1475 4.02995 12.4456 3.87829 12.7639C3.75412 13.0247 3.65995 13.3047 3.43995 13.9639L2.64995 16.3331L3.66662 17.3506ZM12.6291 3.6189C12.6583 3.76473 12.7058 3.96307 12.7866 4.1939C13.0304 4.89144 13.4293 5.52456 13.9533 6.04557C14.4741 6.56943 15.1069 6.96833 15.8041 7.21223C16.0358 7.29307 16.2341 7.34057 16.38 7.36973L16.9316 6.81807C17.426 6.32019 17.7029 5.64665 17.7017 4.94499C17.7005 4.24333 17.4212 3.57076 16.9251 3.07462C16.4289 2.57847 15.7564 2.29919 15.0547 2.29797C14.353 2.29674 13.6795 2.57366 13.1816 3.06807L12.6291 3.6189Z" fill="#808080" />
                                                                </svg>

                                                                <h3>Modified: Aug 10, 2024</h3>
                                                            </div>

                                                        </div>


                                                        <div className="MyQRCodes--text--scans">
                                                            <h3>0</h3>
                                                            <p>Scans</p>
                                                        </div>


                                                        <div className="MyQRCodes--text--buttons">
                                                            <button>Active</button>
                                                            <button>Detail</button>
                                                        </div>

                                                        <div className="MyQRCodes--text--freetrail">
                                                            <button>
                                                                freeTrail
                                                            </button>
                                                        </div>


                                                        <div className="MyQRCodes--text--downlaods">

                                                            <svg style={{ cursor: 'pointer' }} xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none" onClick={() => handleDownload(qrCode.id)}>
                                                                <path d="M13.9998 18.667L8.1665 12.8337L9.79984 11.142L12.8332 14.1753V4.66699H15.1665V14.1753L18.1998 11.142L19.8332 12.8337L13.9998 18.667ZM6.99984 23.3337C6.35817 23.3337 5.80906 23.1054 5.3525 22.6488C4.89595 22.1923 4.66728 21.6428 4.6665 21.0003V17.5003H6.99984V21.0003H20.9998V17.5003H23.3332V21.0003C23.3332 21.642 23.1049 22.1915 22.6483 22.6488C22.1918 23.1062 21.6423 23.3344 20.9998 23.3337H6.99984Z" fill="black" />
                                                            </svg>

                                                            <button>
                                                                <img src={QRDOYTSICONS} alt="icons" />
                                                            </button>
                                                        </div>

                                                    </div>
                                                )))


                                        ) : (
                                            <div>No QR Codes available.</div>
                                        )} */}


                                        {

                                            finalQRCodes.length > 0 ?  
                                            
                                            (finalQRCodes.map((qrCode) => (
                                                <div className="MyQRCodes--text" key={qrCode.id}>



                                                    <div className="MyQRCodes--text--checkbox">
                                                        <input type="checkbox" class="ui-checkbox" />
                                                    </div>

                                                    <div className="MyQRCodes--text--barcode">
                                                        {/* <img src={QRBARCODE} alt="barcode" /> */}
                                                        {/* <img src={qrCode.qrcode} alt="barcode" /> */}
                                                        <img src={qrCode.qrcode} alt="barcode" id={`qrcode-${qrCode.id}`} />
                                                    </div>


                                                    <div className="MyQRCodes--text--barcode--text">
                                                        <h3>{qrCode.selectname || ''}

                                                            {
                                                                qrCode.favourite == 1 &&

                                                                <img className='staricon' src={Star} alt="pen" />

                                                            }


                                                        </h3>
                                                        <h5>{qrCode.Name || 'Untitiled'}
                                                            {/* <img src={QRPEN} alt="pen" /> */}
                                                        </h5>
                                                        <h6>Created: {formatDate(qrCode.createdAt)}</h6>
                                                    </div>

                                                    <div className="MyQRCodes--text--afterline">

                                                        <div className="MyQRCodes--text--afterline--folder">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                                <path d="M2.5 5.3125V6.875H6.54C6.66318 6.87497 6.78515 6.85067 6.89893 6.80349C7.01271 6.7563 7.11608 6.68715 7.20312 6.6L8.49062 5.3125L7.20312 4.025C7.02748 3.84913 6.78918 3.75022 6.54063 3.75H4.0625C3.6481 3.75 3.25067 3.91462 2.95765 4.20765C2.66462 4.50067 2.5 4.8981 2.5 5.3125ZM1.25 5.3125C1.25 4.56658 1.54632 3.85121 2.07376 3.32376C2.60121 2.79632 3.31658 2.5 4.0625 2.5H6.54C6.82727 2.49998 7.11174 2.55654 7.37715 2.66646C7.64257 2.77638 7.88373 2.9375 8.08687 3.14063L9.63375 4.6875H15.9375C16.6834 4.6875 17.3988 4.98382 17.9262 5.51126C18.4537 6.03871 18.75 6.75408 18.75 7.5V14.6875C18.75 15.4334 18.4537 16.1488 17.9262 16.6762C17.3988 17.2037 16.6834 17.5 15.9375 17.5H4.0625C3.31658 17.5 2.60121 17.2037 2.07376 16.6762C1.54632 16.1488 1.25 15.4334 1.25 14.6875V5.3125ZM2.5 8.125V14.6875C2.5 15.1019 2.66462 15.4993 2.95765 15.7924C3.25067 16.0854 3.6481 16.25 4.0625 16.25H15.9375C16.3519 16.25 16.7493 16.0854 17.0424 15.7924C17.3354 15.4993 17.5 15.1019 17.5 14.6875V7.5C17.5 7.0856 17.3354 6.68817 17.0424 6.39515C16.7493 6.10212 16.3519 5.9375 15.9375 5.9375H9.63375L8.08687 7.48438C7.88373 7.6875 7.64257 7.84862 7.37715 7.95854C7.11174 8.06846 6.82727 8.12502 6.54 8.125H2.5Z" fill="#808080" />
                                                            </svg>
                                                            <h3>No Folder</h3>
                                                        </div>

                                                        <div className="MyQRCodes--text--afterline--folder">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                                <path d="M3.6 9H20.4M3.6 15H20.4M3 12C3 13.1819 3.23279 14.3522 3.68508 15.4442C4.13738 16.5361 4.80031 17.5282 5.63604 18.364C6.47177 19.1997 7.46392 19.8626 8.55585 20.3149C9.64778 20.7672 10.8181 21 12 21C13.1819 21 14.3522 20.7672 15.4442 20.3149C16.5361 19.8626 17.5282 19.1997 18.364 18.364C19.1997 17.5282 19.8626 16.5361 20.3149 15.4442C20.7672 14.3522 21 13.1819 21 12C21 9.61305 20.0518 7.32387 18.364 5.63604C16.6761 3.94821 14.3869 3 12 3C9.61305 3 7.32387 3.94821 5.63604 5.63604C3.94821 7.32387 3 9.61305 3 12Z" stroke="#808080" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                                <path d="M11.4999 3C9.81525 5.69961 8.92212 8.81787 8.92212 12C8.92212 15.1821 9.81525 18.3004 11.4999 21M12.4999 3C14.1846 5.69961 15.0777 8.81787 15.0777 12C15.0777 15.1821 14.1846 18.3004 12.4999 21" stroke="#808080" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                            </svg>

                                                            <h3>{qrCode.fetch ? qrCode.fetch : ''}</h3>
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" style={{ fill: 'grey', cursor: "pointer" }} onClick={() => copyToClipboard(qrCode.fetch)}><path d="M208 0L332.1 0c12.7 0 24.9 5.1 33.9 14.1l67.9 67.9c9 9 14.1 21.2 14.1 33.9L448 336c0 26.5-21.5 48-48 48l-192 0c-26.5 0-48-21.5-48-48l0-288c0-26.5 21.5-48 48-48zM48 128l80 0 0 64-64 0 0 256 192 0 0-32 64 0 0 48c0 26.5-21.5 48-48 48L48 512c-26.5 0-48-21.5-48-48L0 176c0-26.5 21.5-48 48-48z" /></svg>
                                                        </div>




                                                        <div className="MyQRCodes--text--afterline--folder">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M12.2975 2.1839C13.0292 1.45212 14.0217 1.04102 15.0566 1.04102C16.0915 1.04102 17.084 1.45212 17.8158 2.1839C18.5476 2.91568 18.9587 3.90818 18.9587 4.94307C18.9587 5.97796 18.5476 6.97046 17.8158 7.70223L9.91079 15.6072C9.45912 16.0589 9.19412 16.3239 8.89745 16.5547C8.54856 16.8281 8.17356 17.06 7.77245 17.2506C7.43412 17.4114 7.07745 17.5306 6.47245 17.7322L3.69579 18.6572L3.02745 18.8806C2.76164 18.9693 2.47637 18.9822 2.20362 18.9179C1.93087 18.8536 1.68144 18.7146 1.48328 18.5164C1.28513 18.3183 1.1461 18.0688 1.08178 17.7961C1.01745 17.5233 1.03038 17.238 1.11912 16.9722L2.26745 13.5281C2.46912 12.9222 2.58829 12.5656 2.74912 12.2264C2.94023 11.8264 3.17218 11.4514 3.44495 11.1014C3.67495 10.8064 3.94079 10.5406 4.39245 10.0889L12.2975 2.1839ZM3.66662 17.3506L6.03412 16.5606C6.69329 16.3406 6.97329 16.2464 7.23412 16.1222C7.5519 15.97 7.84995 15.7858 8.12829 15.5697C8.35579 15.3914 8.56579 15.1839 9.05745 14.6922L15.3658 8.3839C14.5009 8.07742 13.7158 7.58078 13.0683 6.93057C12.4187 6.28292 11.9226 5.49782 11.6166 4.63307L5.30829 10.9414C4.81662 11.4322 4.60829 11.6414 4.43079 11.8697C4.21412 12.1475 4.02995 12.4456 3.87829 12.7639C3.75412 13.0247 3.65995 13.3047 3.43995 13.9639L2.64995 16.3331L3.66662 17.3506ZM12.6291 3.6189C12.6583 3.76473 12.7058 3.96307 12.7866 4.1939C13.0304 4.89144 13.4293 5.52456 13.9533 6.04557C14.4741 6.56943 15.1069 6.96833 15.8041 7.21223C16.0358 7.29307 16.2341 7.34057 16.38 7.36973L16.9316 6.81807C17.426 6.32019 17.7029 5.64665 17.7017 4.94499C17.7005 4.24333 17.4212 3.57076 16.9251 3.07462C16.4289 2.57847 15.7564 2.29919 15.0547 2.29797C14.353 2.29674 13.6795 2.57366 13.1816 3.06807L12.6291 3.6189Z" fill="#808080" />
                                                            </svg>

                                                            <h3>Modified: {formatDate(qrCode.updatedAt)}</h3>
                                                        </div>

                                                    </div>


                                                    <div className="MyQRCodes--text--scans">
                                                        <h3>{qrCode.scan}</h3>
                                                        <p>Scans</p>
                                                    </div>


                                                    <div className="MyQRCodes--text--buttons">
                                                        <button>Active</button>
                                                        {/* <button>Detail</button> */}
                                                    </div>

                                                    <div className="MyQRCodes--text--freetrail">
                                                        <button>
                                                            freeTrail
                                                        </button>
                                                    </div>


                                                    <div className="MyQRCodes--text--downlaods">

                                                        <svg style={{ cursor: 'pointer' }} xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none" onClick={() => handleDownload(qrCode.id)}>
                                                            <path d="M13.9998 18.667L8.1665 12.8337L9.79984 11.142L12.8332 14.1753V4.66699H15.1665V14.1753L18.1998 11.142L19.8332 12.8337L13.9998 18.667ZM6.99984 23.3337C6.35817 23.3337 5.80906 23.1054 5.3525 22.6488C4.89595 22.1923 4.66728 21.6428 4.6665 21.0003V17.5003H6.99984V21.0003H20.9998V17.5003H23.3332V21.0003C23.3332 21.642 23.1049 22.1915 22.6483 22.6488C22.1918 23.1062 21.6423 23.3344 20.9998 23.3337H6.99984Z" fill="black" />
                                                        </svg>

                                                        <button>
                                                            {/* <img src={QRDOYTSICONS} alt="icons" onClick={() => editscreens(qrCode.id)} /> */}
                                                            <Mydrop1 qrCode={qrCode} />
                                                        </button>
                                                    </div>

                                                </div>
                                            )))
                                            :
                                            <div>   


                                            </div> 

                                        }
                                    </div>

                                )}
                            </TabPanel>


                            <TabPanel>
                                <div className="MyQRCodes--main--columns">
                                    <div style={{ padding: '60px 0px' }}>No QR Codes available.</div>

                                </div>
                            </TabPanel>

                            <TabPanel>
                                <div className="MyQRCodes--main--columns" >

                                    {finalQRCodes.length > 0 ? (

                                        search === '' ? (finalQRCodes.map((qrCode) => (
                                            <div className="MyQRCodes--text" key={qrCode.id}>



                                                <div className="MyQRCodes--text--checkbox">
                                                    <input type="checkbox" class="ui-checkbox" />
                                                </div>

                                                <div className="MyQRCodes--text--barcode">
                                                    {/* <img src={QRBARCODE} alt="barcode" /> */}
                                                    {/* <img src={qrCode.qrcode} alt="barcode" /> */}
                                                    <img src={qrCode.qrcode} alt="barcode" id={`qrcode-${qrCode.id}`} />
                                                </div>


                                                <div className="MyQRCodes--text--barcode--text">
                                                    <h3>{qrCode.selectname || ''}

                                                        {
                                                            qrCode.favourite == 1 &&

                                                            <img className='staricon' src={Star} alt="pen" />

                                                        }


                                                    </h3>
                                                    <h5>{qrCode.Name || 'Untitiled'}
                                                        <img src={QRPEN} alt="pen" />
                                                    </h5>
                                                    <h6>Created: {formatDate(qrCode.createdAt)}</h6>
                                                </div>

                                                <div className="MyQRCodes--text--afterline">

                                                    <div className="MyQRCodes--text--afterline--folder">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                            <path d="M2.5 5.3125V6.875H6.54C6.66318 6.87497 6.78515 6.85067 6.89893 6.80349C7.01271 6.7563 7.11608 6.68715 7.20312 6.6L8.49062 5.3125L7.20312 4.025C7.02748 3.84913 6.78918 3.75022 6.54063 3.75H4.0625C3.6481 3.75 3.25067 3.91462 2.95765 4.20765C2.66462 4.50067 2.5 4.8981 2.5 5.3125ZM1.25 5.3125C1.25 4.56658 1.54632 3.85121 2.07376 3.32376C2.60121 2.79632 3.31658 2.5 4.0625 2.5H6.54C6.82727 2.49998 7.11174 2.55654 7.37715 2.66646C7.64257 2.77638 7.88373 2.9375 8.08687 3.14063L9.63375 4.6875H15.9375C16.6834 4.6875 17.3988 4.98382 17.9262 5.51126C18.4537 6.03871 18.75 6.75408 18.75 7.5V14.6875C18.75 15.4334 18.4537 16.1488 17.9262 16.6762C17.3988 17.2037 16.6834 17.5 15.9375 17.5H4.0625C3.31658 17.5 2.60121 17.2037 2.07376 16.6762C1.54632 16.1488 1.25 15.4334 1.25 14.6875V5.3125ZM2.5 8.125V14.6875C2.5 15.1019 2.66462 15.4993 2.95765 15.7924C3.25067 16.0854 3.6481 16.25 4.0625 16.25H15.9375C16.3519 16.25 16.7493 16.0854 17.0424 15.7924C17.3354 15.4993 17.5 15.1019 17.5 14.6875V7.5C17.5 7.0856 17.3354 6.68817 17.0424 6.39515C16.7493 6.10212 16.3519 5.9375 15.9375 5.9375H9.63375L8.08687 7.48438C7.88373 7.6875 7.64257 7.84862 7.37715 7.95854C7.11174 8.06846 6.82727 8.12502 6.54 8.125H2.5Z" fill="#808080" />
                                                        </svg>
                                                        <h3>No Folder</h3>
                                                    </div>

                                                    <div className="MyQRCodes--text--afterline--folder">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                            <path d="M3.6 9H20.4M3.6 15H20.4M3 12C3 13.1819 3.23279 14.3522 3.68508 15.4442C4.13738 16.5361 4.80031 17.5282 5.63604 18.364C6.47177 19.1997 7.46392 19.8626 8.55585 20.3149C9.64778 20.7672 10.8181 21 12 21C13.1819 21 14.3522 20.7672 15.4442 20.3149C16.5361 19.8626 17.5282 19.1997 18.364 18.364C19.1997 17.5282 19.8626 16.5361 20.3149 15.4442C20.7672 14.3522 21 13.1819 21 12C21 9.61305 20.0518 7.32387 18.364 5.63604C16.6761 3.94821 14.3869 3 12 3C9.61305 3 7.32387 3.94821 5.63604 5.63604C3.94821 7.32387 3 9.61305 3 12Z" stroke="#808080" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                            <path d="M11.4999 3C9.81525 5.69961 8.92212 8.81787 8.92212 12C8.92212 15.1821 9.81525 18.3004 11.4999 21M12.4999 3C14.1846 5.69961 15.0777 8.81787 15.0777 12C15.0777 15.1821 14.1846 18.3004 12.4999 21" stroke="#808080" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                        </svg>

                                                        <h3>{qrCode.fetch ? qrCode.fetch : ''}</h3>
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" style={{ fill: 'grey', cursor: "pointer" }} onClick={() => copyToClipboard(qrCode.fetch)}><path d="M208 0L332.1 0c12.7 0 24.9 5.1 33.9 14.1l67.9 67.9c9 9 14.1 21.2 14.1 33.9L448 336c0 26.5-21.5 48-48 48l-192 0c-26.5 0-48-21.5-48-48l0-288c0-26.5 21.5-48 48-48zM48 128l80 0 0 64-64 0 0 256 192 0 0-32 64 0 0 48c0 26.5-21.5 48-48 48L48 512c-26.5 0-48-21.5-48-48L0 176c0-26.5 21.5-48 48-48z" /></svg>
                                                    </div>




                                                    <div className="MyQRCodes--text--afterline--folder">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M12.2975 2.1839C13.0292 1.45212 14.0217 1.04102 15.0566 1.04102C16.0915 1.04102 17.084 1.45212 17.8158 2.1839C18.5476 2.91568 18.9587 3.90818 18.9587 4.94307C18.9587 5.97796 18.5476 6.97046 17.8158 7.70223L9.91079 15.6072C9.45912 16.0589 9.19412 16.3239 8.89745 16.5547C8.54856 16.8281 8.17356 17.06 7.77245 17.2506C7.43412 17.4114 7.07745 17.5306 6.47245 17.7322L3.69579 18.6572L3.02745 18.8806C2.76164 18.9693 2.47637 18.9822 2.20362 18.9179C1.93087 18.8536 1.68144 18.7146 1.48328 18.5164C1.28513 18.3183 1.1461 18.0688 1.08178 17.7961C1.01745 17.5233 1.03038 17.238 1.11912 16.9722L2.26745 13.5281C2.46912 12.9222 2.58829 12.5656 2.74912 12.2264C2.94023 11.8264 3.17218 11.4514 3.44495 11.1014C3.67495 10.8064 3.94079 10.5406 4.39245 10.0889L12.2975 2.1839ZM3.66662 17.3506L6.03412 16.5606C6.69329 16.3406 6.97329 16.2464 7.23412 16.1222C7.5519 15.97 7.84995 15.7858 8.12829 15.5697C8.35579 15.3914 8.56579 15.1839 9.05745 14.6922L15.3658 8.3839C14.5009 8.07742 13.7158 7.58078 13.0683 6.93057C12.4187 6.28292 11.9226 5.49782 11.6166 4.63307L5.30829 10.9414C4.81662 11.4322 4.60829 11.6414 4.43079 11.8697C4.21412 12.1475 4.02995 12.4456 3.87829 12.7639C3.75412 13.0247 3.65995 13.3047 3.43995 13.9639L2.64995 16.3331L3.66662 17.3506ZM12.6291 3.6189C12.6583 3.76473 12.7058 3.96307 12.7866 4.1939C13.0304 4.89144 13.4293 5.52456 13.9533 6.04557C14.4741 6.56943 15.1069 6.96833 15.8041 7.21223C16.0358 7.29307 16.2341 7.34057 16.38 7.36973L16.9316 6.81807C17.426 6.32019 17.7029 5.64665 17.7017 4.94499C17.7005 4.24333 17.4212 3.57076 16.9251 3.07462C16.4289 2.57847 15.7564 2.29919 15.0547 2.29797C14.353 2.29674 13.6795 2.57366 13.1816 3.06807L12.6291 3.6189Z" fill="#808080" />
                                                        </svg>

                                                        <h3>Modified: {formatDate(qrCode.updatedAt)}</h3>
                                                    </div>

                                                </div>


                                                <div className="MyQRCodes--text--scans">
                                                    <h3>{qrCode.scan}</h3>
                                                    <p>Scans</p>
                                                </div>


                                                <div className="MyQRCodes--text--buttons">
                                                    <button>Active</button>
                                                    {/* <button>Detail</button> */}
                                                </div>

                                                <div className="MyQRCodes--text--freetrail">
                                                    <button>
                                                        freeTrail
                                                    </button>
                                                </div>


                                                <div className="MyQRCodes--text--downlaods">

                                                    <svg style={{ cursor: 'pointer' }} xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none" onClick={() => handleDownload(qrCode.id)}>
                                                        <path d="M13.9998 18.667L8.1665 12.8337L9.79984 11.142L12.8332 14.1753V4.66699H15.1665V14.1753L18.1998 11.142L19.8332 12.8337L13.9998 18.667ZM6.99984 23.3337C6.35817 23.3337 5.80906 23.1054 5.3525 22.6488C4.89595 22.1923 4.66728 21.6428 4.6665 21.0003V17.5003H6.99984V21.0003H20.9998V17.5003H23.3332V21.0003C23.3332 21.642 23.1049 22.1915 22.6483 22.6488C22.1918 23.1062 21.6423 23.3344 20.9998 23.3337H6.99984Z" fill="black" />
                                                    </svg>

                                                    <button>
                                                        {/* <img src={QRDOYTSICONS} alt="icons" onClick={() => editscreens(qrCode.id)} /> */}
                                                        <Mydrop1 qrCode={qrCode} />
                                                    </button>
                                                </div>

                                            </div>
                                        ))) :





                                            (finalQRCodes.filter((e) => e.Name.toLowerCase().includes(search)).map((qrCode) => (
                                                <div className="MyQRCodes--text" key={qrCode.id}>



                                                    <div className="MyQRCodes--text--checkbox">
                                                        <input type="checkbox" class="ui-checkbox" />
                                                    </div>

                                                    <div className="MyQRCodes--text--barcode">
                                                        {/* <img src={QRBARCODE} alt="barcode" /> */}
                                                        {/* <img src={qrCode.qrcode} alt="barcode" /> */}
                                                        <img src={qrCode.qrcode} alt="barcode" id={`qrcode-${qrCode.id}`} />
                                                    </div>


                                                    <div className="MyQRCodes--text--barcode--text">
                                                        {/* <h3>Website</h3> */}
                                                        <h5>{qrCode.Name || 'Untitiled'}
                                                            <img src={QRPEN} alt="pen" />
                                                        </h5>
                                                        <h6>Created: {formatDate(qrCode.createdAt)}</h6>
                                                    </div>

                                                    <div className="MyQRCodes--text--afterline">

                                                        <div className="MyQRCodes--text--afterline--folder">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                                <path d="M2.5 5.3125V6.875H6.54C6.66318 6.87497 6.78515 6.85067 6.89893 6.80349C7.01271 6.7563 7.11608 6.68715 7.20312 6.6L8.49062 5.3125L7.20312 4.025C7.02748 3.84913 6.78918 3.75022 6.54063 3.75H4.0625C3.6481 3.75 3.25067 3.91462 2.95765 4.20765C2.66462 4.50067 2.5 4.8981 2.5 5.3125ZM1.25 5.3125C1.25 4.56658 1.54632 3.85121 2.07376 3.32376C2.60121 2.79632 3.31658 2.5 4.0625 2.5H6.54C6.82727 2.49998 7.11174 2.55654 7.37715 2.66646C7.64257 2.77638 7.88373 2.9375 8.08687 3.14063L9.63375 4.6875H15.9375C16.6834 4.6875 17.3988 4.98382 17.9262 5.51126C18.4537 6.03871 18.75 6.75408 18.75 7.5V14.6875C18.75 15.4334 18.4537 16.1488 17.9262 16.6762C17.3988 17.2037 16.6834 17.5 15.9375 17.5H4.0625C3.31658 17.5 2.60121 17.2037 2.07376 16.6762C1.54632 16.1488 1.25 15.4334 1.25 14.6875V5.3125ZM2.5 8.125V14.6875C2.5 15.1019 2.66462 15.4993 2.95765 15.7924C3.25067 16.0854 3.6481 16.25 4.0625 16.25H15.9375C16.3519 16.25 16.7493 16.0854 17.0424 15.7924C17.3354 15.4993 17.5 15.1019 17.5 14.6875V7.5C17.5 7.0856 17.3354 6.68817 17.0424 6.39515C16.7493 6.10212 16.3519 5.9375 15.9375 5.9375H9.63375L8.08687 7.48438C7.88373 7.6875 7.64257 7.84862 7.37715 7.95854C7.11174 8.06846 6.82727 8.12502 6.54 8.125H2.5Z" fill="#808080" />
                                                            </svg>
                                                            <h3>No Folder</h3>
                                                        </div>

                                                        <div className="MyQRCodes--text--afterline--folder">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                                <path d="M3.6 9H20.4M3.6 15H20.4M3 12C3 13.1819 3.23279 14.3522 3.68508 15.4442C4.13738 16.5361 4.80031 17.5282 5.63604 18.364C6.47177 19.1997 7.46392 19.8626 8.55585 20.3149C9.64778 20.7672 10.8181 21 12 21C13.1819 21 14.3522 20.7672 15.4442 20.3149C16.5361 19.8626 17.5282 19.1997 18.364 18.364C19.1997 17.5282 19.8626 16.5361 20.3149 15.4442C20.7672 14.3522 21 13.1819 21 12C21 9.61305 20.0518 7.32387 18.364 5.63604C16.6761 3.94821 14.3869 3 12 3C9.61305 3 7.32387 3.94821 5.63604 5.63604C3.94821 7.32387 3 9.61305 3 12Z" stroke="#808080" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                                <path d="M11.4999 3C9.81525 5.69961 8.92212 8.81787 8.92212 12C8.92212 15.1821 9.81525 18.3004 11.4999 21M12.4999 3C14.1846 5.69961 15.0777 8.81787 15.0777 12C15.0777 15.1821 14.1846 18.3004 12.4999 21" stroke="#808080" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                            </svg>

                                                            <h3>Qrfy.io/r/LdT-dphIT-</h3>
                                                        </div>

                                                        <div className="MyQRCodes--text--afterline--folder">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                                <path d="M11 7L9.6 8.4L12.2 11H2V13H12.2L9.6 15.6L11 17L16 12L11 7ZM20 19H12V21H20C21.1 21 22 20.1 22 19V5C22 3.9 21.1 3 20 3H12V5H20V19Z" fill="#808080" />
                                                            </svg>

                                                            <h3>http://www.patrickbloghossian.c...</h3>
                                                        </div>


                                                        <div className="MyQRCodes--text--afterline--folder">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M12.2975 2.1839C13.0292 1.45212 14.0217 1.04102 15.0566 1.04102C16.0915 1.04102 17.084 1.45212 17.8158 2.1839C18.5476 2.91568 18.9587 3.90818 18.9587 4.94307C18.9587 5.97796 18.5476 6.97046 17.8158 7.70223L9.91079 15.6072C9.45912 16.0589 9.19412 16.3239 8.89745 16.5547C8.54856 16.8281 8.17356 17.06 7.77245 17.2506C7.43412 17.4114 7.07745 17.5306 6.47245 17.7322L3.69579 18.6572L3.02745 18.8806C2.76164 18.9693 2.47637 18.9822 2.20362 18.9179C1.93087 18.8536 1.68144 18.7146 1.48328 18.5164C1.28513 18.3183 1.1461 18.0688 1.08178 17.7961C1.01745 17.5233 1.03038 17.238 1.11912 16.9722L2.26745 13.5281C2.46912 12.9222 2.58829 12.5656 2.74912 12.2264C2.94023 11.8264 3.17218 11.4514 3.44495 11.1014C3.67495 10.8064 3.94079 10.5406 4.39245 10.0889L12.2975 2.1839ZM3.66662 17.3506L6.03412 16.5606C6.69329 16.3406 6.97329 16.2464 7.23412 16.1222C7.5519 15.97 7.84995 15.7858 8.12829 15.5697C8.35579 15.3914 8.56579 15.1839 9.05745 14.6922L15.3658 8.3839C14.5009 8.07742 13.7158 7.58078 13.0683 6.93057C12.4187 6.28292 11.9226 5.49782 11.6166 4.63307L5.30829 10.9414C4.81662 11.4322 4.60829 11.6414 4.43079 11.8697C4.21412 12.1475 4.02995 12.4456 3.87829 12.7639C3.75412 13.0247 3.65995 13.3047 3.43995 13.9639L2.64995 16.3331L3.66662 17.3506ZM12.6291 3.6189C12.6583 3.76473 12.7058 3.96307 12.7866 4.1939C13.0304 4.89144 13.4293 5.52456 13.9533 6.04557C14.4741 6.56943 15.1069 6.96833 15.8041 7.21223C16.0358 7.29307 16.2341 7.34057 16.38 7.36973L16.9316 6.81807C17.426 6.32019 17.7029 5.64665 17.7017 4.94499C17.7005 4.24333 17.4212 3.57076 16.9251 3.07462C16.4289 2.57847 15.7564 2.29919 15.0547 2.29797C14.353 2.29674 13.6795 2.57366 13.1816 3.06807L12.6291 3.6189Z" fill="#808080" />
                                                            </svg>

                                                            <h3>Modified: Aug 10, 2024</h3>
                                                        </div>

                                                    </div>


                                                    <div className="MyQRCodes--text--scans">
                                                        <h3>0</h3>
                                                        <p>Scans</p>
                                                    </div>


                                                    <div className="MyQRCodes--text--buttons">
                                                        <button>Active</button>
                                                        {/* <button>Detail</button> */}
                                                    </div>

                                                    <div className="MyQRCodes--text--freetrail">
                                                        <button>
                                                            freeTrail
                                                        </button>
                                                    </div>


                                                    <div className="MyQRCodes--text--downlaods">

                                                        <svg style={{ cursor: 'pointer' }} xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none" onClick={() => handleDownload(qrCode.id)}>
                                                            <path d="M13.9998 18.667L8.1665 12.8337L9.79984 11.142L12.8332 14.1753V4.66699H15.1665V14.1753L18.1998 11.142L19.8332 12.8337L13.9998 18.667ZM6.99984 23.3337C6.35817 23.3337 5.80906 23.1054 5.3525 22.6488C4.89595 22.1923 4.66728 21.6428 4.6665 21.0003V17.5003H6.99984V21.0003H20.9998V17.5003H23.3332V21.0003C23.3332 21.642 23.1049 22.1915 22.6483 22.6488C22.1918 23.1062 21.6423 23.3344 20.9998 23.3337H6.99984Z" fill="black" />
                                                        </svg>

                                                        <button>
                                                            <img src={QRDOYTSICONS} alt="icons" />
                                                        </button>
                                                    </div>

                                                </div>
                                            )))


                                    ) : (
                                        <div>No QR Codes available.</div>
                                    )}
                                </div>
                            </TabPanel>


                            <TabPanel>

                            {activeTab === 'favorites' && (
                                    <div className="MyQRCodes--main--columns" >

                                        {finalQRCodes.length > 0 ? (

                                            search === '' ? (finalQRCodes.map((qrCode) => (
                                                <div className="MyQRCodes--text" key={qrCode.id}>



                                                    <div className="MyQRCodes--text--checkbox">
                                                        <input type="checkbox" class="ui-checkbox" />
                                                    </div>

                                                    <div className="MyQRCodes--text--barcode">
                                                        {/* <img src={QRBARCODE} alt="barcode" /> */}
                                                        {/* <img src={qrCode.qrcode} alt="barcode" /> */}
                                                        <img src={qrCode.qrcode} alt="barcode" id={`qrcode-${qrCode.id}`} />
                                                    </div>


                                                    <div className="MyQRCodes--text--barcode--text">
                                                        <h3>{qrCode.selectname || ''}

                                                            {
                                                                qrCode.favourite == 1 &&

                                                                <img className='staricon' src={Star} alt="pen" />

                                                            }


                                                        </h3>
                                                        <h5>{qrCode.Name || 'Untitiled'}
                                                            <img src={QRPEN} alt="pen" />
                                                        </h5>
                                                        <h6>Created: {formatDate(qrCode.createdAt)}</h6>
                                                    </div>

                                                    <div className="MyQRCodes--text--afterline">

                                                        <div className="MyQRCodes--text--afterline--folder">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                                <path d="M2.5 5.3125V6.875H6.54C6.66318 6.87497 6.78515 6.85067 6.89893 6.80349C7.01271 6.7563 7.11608 6.68715 7.20312 6.6L8.49062 5.3125L7.20312 4.025C7.02748 3.84913 6.78918 3.75022 6.54063 3.75H4.0625C3.6481 3.75 3.25067 3.91462 2.95765 4.20765C2.66462 4.50067 2.5 4.8981 2.5 5.3125ZM1.25 5.3125C1.25 4.56658 1.54632 3.85121 2.07376 3.32376C2.60121 2.79632 3.31658 2.5 4.0625 2.5H6.54C6.82727 2.49998 7.11174 2.55654 7.37715 2.66646C7.64257 2.77638 7.88373 2.9375 8.08687 3.14063L9.63375 4.6875H15.9375C16.6834 4.6875 17.3988 4.98382 17.9262 5.51126C18.4537 6.03871 18.75 6.75408 18.75 7.5V14.6875C18.75 15.4334 18.4537 16.1488 17.9262 16.6762C17.3988 17.2037 16.6834 17.5 15.9375 17.5H4.0625C3.31658 17.5 2.60121 17.2037 2.07376 16.6762C1.54632 16.1488 1.25 15.4334 1.25 14.6875V5.3125ZM2.5 8.125V14.6875C2.5 15.1019 2.66462 15.4993 2.95765 15.7924C3.25067 16.0854 3.6481 16.25 4.0625 16.25H15.9375C16.3519 16.25 16.7493 16.0854 17.0424 15.7924C17.3354 15.4993 17.5 15.1019 17.5 14.6875V7.5C17.5 7.0856 17.3354 6.68817 17.0424 6.39515C16.7493 6.10212 16.3519 5.9375 15.9375 5.9375H9.63375L8.08687 7.48438C7.88373 7.6875 7.64257 7.84862 7.37715 7.95854C7.11174 8.06846 6.82727 8.12502 6.54 8.125H2.5Z" fill="#808080" />
                                                            </svg>
                                                            <h3>No Folder</h3>
                                                        </div>

                                                        <div className="MyQRCodes--text--afterline--folder">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                                <path d="M3.6 9H20.4M3.6 15H20.4M3 12C3 13.1819 3.23279 14.3522 3.68508 15.4442C4.13738 16.5361 4.80031 17.5282 5.63604 18.364C6.47177 19.1997 7.46392 19.8626 8.55585 20.3149C9.64778 20.7672 10.8181 21 12 21C13.1819 21 14.3522 20.7672 15.4442 20.3149C16.5361 19.8626 17.5282 19.1997 18.364 18.364C19.1997 17.5282 19.8626 16.5361 20.3149 15.4442C20.7672 14.3522 21 13.1819 21 12C21 9.61305 20.0518 7.32387 18.364 5.63604C16.6761 3.94821 14.3869 3 12 3C9.61305 3 7.32387 3.94821 5.63604 5.63604C3.94821 7.32387 3 9.61305 3 12Z" stroke="#808080" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                                <path d="M11.4999 3C9.81525 5.69961 8.92212 8.81787 8.92212 12C8.92212 15.1821 9.81525 18.3004 11.4999 21M12.4999 3C14.1846 5.69961 15.0777 8.81787 15.0777 12C15.0777 15.1821 14.1846 18.3004 12.4999 21" stroke="#808080" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                            </svg>

                                                            <h3>{qrCode.fetch ? qrCode.fetch : ''}</h3>
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" style={{ fill: 'grey', cursor: "pointer" }} onClick={() => copyToClipboard(qrCode.fetch)}><path d="M208 0L332.1 0c12.7 0 24.9 5.1 33.9 14.1l67.9 67.9c9 9 14.1 21.2 14.1 33.9L448 336c0 26.5-21.5 48-48 48l-192 0c-26.5 0-48-21.5-48-48l0-288c0-26.5 21.5-48 48-48zM48 128l80 0 0 64-64 0 0 256 192 0 0-32 64 0 0 48c0 26.5-21.5 48-48 48L48 512c-26.5 0-48-21.5-48-48L0 176c0-26.5 21.5-48 48-48z" /></svg>
                                                        </div>




                                                        <div className="MyQRCodes--text--afterline--folder">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M12.2975 2.1839C13.0292 1.45212 14.0217 1.04102 15.0566 1.04102C16.0915 1.04102 17.084 1.45212 17.8158 2.1839C18.5476 2.91568 18.9587 3.90818 18.9587 4.94307C18.9587 5.97796 18.5476 6.97046 17.8158 7.70223L9.91079 15.6072C9.45912 16.0589 9.19412 16.3239 8.89745 16.5547C8.54856 16.8281 8.17356 17.06 7.77245 17.2506C7.43412 17.4114 7.07745 17.5306 6.47245 17.7322L3.69579 18.6572L3.02745 18.8806C2.76164 18.9693 2.47637 18.9822 2.20362 18.9179C1.93087 18.8536 1.68144 18.7146 1.48328 18.5164C1.28513 18.3183 1.1461 18.0688 1.08178 17.7961C1.01745 17.5233 1.03038 17.238 1.11912 16.9722L2.26745 13.5281C2.46912 12.9222 2.58829 12.5656 2.74912 12.2264C2.94023 11.8264 3.17218 11.4514 3.44495 11.1014C3.67495 10.8064 3.94079 10.5406 4.39245 10.0889L12.2975 2.1839ZM3.66662 17.3506L6.03412 16.5606C6.69329 16.3406 6.97329 16.2464 7.23412 16.1222C7.5519 15.97 7.84995 15.7858 8.12829 15.5697C8.35579 15.3914 8.56579 15.1839 9.05745 14.6922L15.3658 8.3839C14.5009 8.07742 13.7158 7.58078 13.0683 6.93057C12.4187 6.28292 11.9226 5.49782 11.6166 4.63307L5.30829 10.9414C4.81662 11.4322 4.60829 11.6414 4.43079 11.8697C4.21412 12.1475 4.02995 12.4456 3.87829 12.7639C3.75412 13.0247 3.65995 13.3047 3.43995 13.9639L2.64995 16.3331L3.66662 17.3506ZM12.6291 3.6189C12.6583 3.76473 12.7058 3.96307 12.7866 4.1939C13.0304 4.89144 13.4293 5.52456 13.9533 6.04557C14.4741 6.56943 15.1069 6.96833 15.8041 7.21223C16.0358 7.29307 16.2341 7.34057 16.38 7.36973L16.9316 6.81807C17.426 6.32019 17.7029 5.64665 17.7017 4.94499C17.7005 4.24333 17.4212 3.57076 16.9251 3.07462C16.4289 2.57847 15.7564 2.29919 15.0547 2.29797C14.353 2.29674 13.6795 2.57366 13.1816 3.06807L12.6291 3.6189Z" fill="#808080" />
                                                            </svg>

                                                            <h3>Modified: {formatDate(qrCode.updatedAt)}</h3>
                                                        </div>

                                                    </div>


                                                    <div className="MyQRCodes--text--scans">
                                                        <h3>{qrCode.scan}</h3>
                                                        <p>Scans</p>
                                                    </div>


                                                    <div className="MyQRCodes--text--buttons">
                                                        <button>Active</button>
                                                        {/* <button>Detail</button> */}
                                                    </div>

                                                    <div className="MyQRCodes--text--freetrail">
                                                        <button>
                                                            freeTrail
                                                        </button>
                                                    </div>


                                                    <div className="MyQRCodes--text--downlaods">

                                                        <svg style={{ cursor: 'pointer' }} xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none" onClick={() => handleDownload(qrCode.id)}>
                                                            <path d="M13.9998 18.667L8.1665 12.8337L9.79984 11.142L12.8332 14.1753V4.66699H15.1665V14.1753L18.1998 11.142L19.8332 12.8337L13.9998 18.667ZM6.99984 23.3337C6.35817 23.3337 5.80906 23.1054 5.3525 22.6488C4.89595 22.1923 4.66728 21.6428 4.6665 21.0003V17.5003H6.99984V21.0003H20.9998V17.5003H23.3332V21.0003C23.3332 21.642 23.1049 22.1915 22.6483 22.6488C22.1918 23.1062 21.6423 23.3344 20.9998 23.3337H6.99984Z" fill="black" />
                                                        </svg>

                                                        <button>
                                                            {/* <img src={QRDOYTSICONS} alt="icons" onClick={() => editscreens(qrCode.id)} /> */}
                                                            <Mydrop1 qrCode={qrCode} />
                                                        </button>
                                                    </div>

                                                </div>
                                            ))) :





                                                (finalQRCodes.filter((e) => e.Name.toLowerCase().includes(search)).map((qrCode) => (
                                                    <div className="MyQRCodes--text" key={qrCode.id}>



                                                        <div className="MyQRCodes--text--checkbox">
                                                            <input type="checkbox" class="ui-checkbox" />
                                                        </div>

                                                        <div className="MyQRCodes--text--barcode">
                                                            {/* <img src={QRBARCODE} alt="barcode" /> */}
                                                            {/* <img src={qrCode.qrcode} alt="barcode" /> */}
                                                            <img src={qrCode.qrcode} alt="barcode" id={`qrcode-${qrCode.id}`} />
                                                        </div>


                                                        <div className="MyQRCodes--text--barcode--text">
                                                            {/* <h3>Website</h3> */}
                                                            <h5>{qrCode.Name || 'Untitiled'}
                                                                <img src={QRPEN} alt="pen" />
                                                            </h5>
                                                            <h6>Created: {formatDate(qrCode.createdAt)}</h6>
                                                        </div>

                                                        <div className="MyQRCodes--text--afterline">

                                                            <div className="MyQRCodes--text--afterline--folder">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                                    <path d="M2.5 5.3125V6.875H6.54C6.66318 6.87497 6.78515 6.85067 6.89893 6.80349C7.01271 6.7563 7.11608 6.68715 7.20312 6.6L8.49062 5.3125L7.20312 4.025C7.02748 3.84913 6.78918 3.75022 6.54063 3.75H4.0625C3.6481 3.75 3.25067 3.91462 2.95765 4.20765C2.66462 4.50067 2.5 4.8981 2.5 5.3125ZM1.25 5.3125C1.25 4.56658 1.54632 3.85121 2.07376 3.32376C2.60121 2.79632 3.31658 2.5 4.0625 2.5H6.54C6.82727 2.49998 7.11174 2.55654 7.37715 2.66646C7.64257 2.77638 7.88373 2.9375 8.08687 3.14063L9.63375 4.6875H15.9375C16.6834 4.6875 17.3988 4.98382 17.9262 5.51126C18.4537 6.03871 18.75 6.75408 18.75 7.5V14.6875C18.75 15.4334 18.4537 16.1488 17.9262 16.6762C17.3988 17.2037 16.6834 17.5 15.9375 17.5H4.0625C3.31658 17.5 2.60121 17.2037 2.07376 16.6762C1.54632 16.1488 1.25 15.4334 1.25 14.6875V5.3125ZM2.5 8.125V14.6875C2.5 15.1019 2.66462 15.4993 2.95765 15.7924C3.25067 16.0854 3.6481 16.25 4.0625 16.25H15.9375C16.3519 16.25 16.7493 16.0854 17.0424 15.7924C17.3354 15.4993 17.5 15.1019 17.5 14.6875V7.5C17.5 7.0856 17.3354 6.68817 17.0424 6.39515C16.7493 6.10212 16.3519 5.9375 15.9375 5.9375H9.63375L8.08687 7.48438C7.88373 7.6875 7.64257 7.84862 7.37715 7.95854C7.11174 8.06846 6.82727 8.12502 6.54 8.125H2.5Z" fill="#808080" />
                                                                </svg>
                                                                <h3>No Folder</h3>
                                                            </div>

                                                            <div className="MyQRCodes--text--afterline--folder">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                                    <path d="M3.6 9H20.4M3.6 15H20.4M3 12C3 13.1819 3.23279 14.3522 3.68508 15.4442C4.13738 16.5361 4.80031 17.5282 5.63604 18.364C6.47177 19.1997 7.46392 19.8626 8.55585 20.3149C9.64778 20.7672 10.8181 21 12 21C13.1819 21 14.3522 20.7672 15.4442 20.3149C16.5361 19.8626 17.5282 19.1997 18.364 18.364C19.1997 17.5282 19.8626 16.5361 20.3149 15.4442C20.7672 14.3522 21 13.1819 21 12C21 9.61305 20.0518 7.32387 18.364 5.63604C16.6761 3.94821 14.3869 3 12 3C9.61305 3 7.32387 3.94821 5.63604 5.63604C3.94821 7.32387 3 9.61305 3 12Z" stroke="#808080" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                                    <path d="M11.4999 3C9.81525 5.69961 8.92212 8.81787 8.92212 12C8.92212 15.1821 9.81525 18.3004 11.4999 21M12.4999 3C14.1846 5.69961 15.0777 8.81787 15.0777 12C15.0777 15.1821 14.1846 18.3004 12.4999 21" stroke="#808080" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                                </svg>

                                                                <h3>Qrfy.io/r/LdT-dphIT-</h3>
                                                            </div>

                                                            <div className="MyQRCodes--text--afterline--folder">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                                    <path d="M11 7L9.6 8.4L12.2 11H2V13H12.2L9.6 15.6L11 17L16 12L11 7ZM20 19H12V21H20C21.1 21 22 20.1 22 19V5C22 3.9 21.1 3 20 3H12V5H20V19Z" fill="#808080" />
                                                                </svg>

                                                                <h3>http://www.patrickbloghossian.c...</h3>
                                                            </div>


                                                            <div className="MyQRCodes--text--afterline--folder">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12.2975 2.1839C13.0292 1.45212 14.0217 1.04102 15.0566 1.04102C16.0915 1.04102 17.084 1.45212 17.8158 2.1839C18.5476 2.91568 18.9587 3.90818 18.9587 4.94307C18.9587 5.97796 18.5476 6.97046 17.8158 7.70223L9.91079 15.6072C9.45912 16.0589 9.19412 16.3239 8.89745 16.5547C8.54856 16.8281 8.17356 17.06 7.77245 17.2506C7.43412 17.4114 7.07745 17.5306 6.47245 17.7322L3.69579 18.6572L3.02745 18.8806C2.76164 18.9693 2.47637 18.9822 2.20362 18.9179C1.93087 18.8536 1.68144 18.7146 1.48328 18.5164C1.28513 18.3183 1.1461 18.0688 1.08178 17.7961C1.01745 17.5233 1.03038 17.238 1.11912 16.9722L2.26745 13.5281C2.46912 12.9222 2.58829 12.5656 2.74912 12.2264C2.94023 11.8264 3.17218 11.4514 3.44495 11.1014C3.67495 10.8064 3.94079 10.5406 4.39245 10.0889L12.2975 2.1839ZM3.66662 17.3506L6.03412 16.5606C6.69329 16.3406 6.97329 16.2464 7.23412 16.1222C7.5519 15.97 7.84995 15.7858 8.12829 15.5697C8.35579 15.3914 8.56579 15.1839 9.05745 14.6922L15.3658 8.3839C14.5009 8.07742 13.7158 7.58078 13.0683 6.93057C12.4187 6.28292 11.9226 5.49782 11.6166 4.63307L5.30829 10.9414C4.81662 11.4322 4.60829 11.6414 4.43079 11.8697C4.21412 12.1475 4.02995 12.4456 3.87829 12.7639C3.75412 13.0247 3.65995 13.3047 3.43995 13.9639L2.64995 16.3331L3.66662 17.3506ZM12.6291 3.6189C12.6583 3.76473 12.7058 3.96307 12.7866 4.1939C13.0304 4.89144 13.4293 5.52456 13.9533 6.04557C14.4741 6.56943 15.1069 6.96833 15.8041 7.21223C16.0358 7.29307 16.2341 7.34057 16.38 7.36973L16.9316 6.81807C17.426 6.32019 17.7029 5.64665 17.7017 4.94499C17.7005 4.24333 17.4212 3.57076 16.9251 3.07462C16.4289 2.57847 15.7564 2.29919 15.0547 2.29797C14.353 2.29674 13.6795 2.57366 13.1816 3.06807L12.6291 3.6189Z" fill="#808080" />
                                                                </svg>

                                                                <h3>Modified: Aug 10, 2024</h3>
                                                            </div>

                                                        </div>


                                                        <div className="MyQRCodes--text--scans">
                                                            <h3>0</h3>
                                                            <p>Scans</p>
                                                        </div>


                                                        <div className="MyQRCodes--text--buttons">
                                                            <button>Active</button>
                                                            {/* <button>Detail</button> */}
                                                        </div>

                                                        <div className="MyQRCodes--text--freetrail">
                                                            <button>
                                                                freeTrail
                                                            </button>
                                                        </div>


                                                        <div className="MyQRCodes--text--downlaods">

                                                            <svg style={{ cursor: 'pointer' }} xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none" onClick={() => handleDownload(qrCode.id)}>
                                                                <path d="M13.9998 18.667L8.1665 12.8337L9.79984 11.142L12.8332 14.1753V4.66699H15.1665V14.1753L18.1998 11.142L19.8332 12.8337L13.9998 18.667ZM6.99984 23.3337C6.35817 23.3337 5.80906 23.1054 5.3525 22.6488C4.89595 22.1923 4.66728 21.6428 4.6665 21.0003V17.5003H6.99984V21.0003H20.9998V17.5003H23.3332V21.0003C23.3332 21.642 23.1049 22.1915 22.6483 22.6488C22.1918 23.1062 21.6423 23.3344 20.9998 23.3337H6.99984Z" fill="black" />
                                                            </svg>

                                                            <button>
                                                                <img src={QRDOYTSICONS} alt="icons" />
                                                            </button>
                                                        </div>

                                                    </div>
                                                )))


                                        ) : (
                                            <div>No QR Codes available.</div>
                                        )}
                                    </div>

                                )}
                            </TabPanel>



                        </Tabs>

                    </div>
                </div>
            </div>
        </>
    );
};

export default MyQRCodes;
