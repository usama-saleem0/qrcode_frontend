import React, { useState } from "react";
import QRDOYTSICONS from '../../src/img/qrcodedots.png';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { baseurl } from "../baseurl";
import { ToastContainer } from "react-bootstrap";
import { toast } from "react-toastify";
const Mydrop1 = ({qrCode}) => {


    console.log('qrcodedata' , qrCode)
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();


    const editscreens = () =>{

        console.log('here' , qrCode)

        localStorage.setItem('QrhyperId', qrCode.id);
        if(qrCode.selectname == "Website"){
            navigate(`/websiteedit/${qrCode.typeId}`);

        }


        if(qrCode.selectname == "List of links"){
            navigate(`/listlinkedit/${qrCode.typeId}`);

        }
       

        if(qrCode.selectname == "Video"){
            navigate(`/Videoedit/${qrCode.typeId}`);

        }

        if(qrCode.selectname == "vCard Plus"){
            navigate(`/vcardedit/${qrCode.typeId}`);

        }


        if(qrCode.selectname == "PDF"){
            navigate(`/pdfedit/${qrCode.typeId}`);

        }


        
        if(qrCode.selectname == "Business"){
            navigate(`/bussinessedit/${qrCode.typeId}`);

        }

        if(qrCode.selectname == "Menu"){
            navigate(`/menuedit/${qrCode.typeId}`);

        }

        if(qrCode.selectname == "MP3"){
            navigate(`/mp3edit/${qrCode.typeId}`);

        }


        if(qrCode.selectname == "Landing"){
            navigate(`/landingedit/${qrCode.typeId}`);

        }



        if(qrCode.selectname == "Social Media"){
            navigate(`/socailedit/${qrCode.typeId}`);

        }


        if(qrCode.selectname == "Event"){
            navigate(`/eventedit/${qrCode.typeId}`);

        }

        if(qrCode.selectname == "Playlist"){
          navigate(`/playlistedit/${qrCode.typeId}`);

      }


      if(qrCode.selectname == "Barcode"){
        navigate(`/barcodeedit/${qrCode.typeId}`);

    }



       
       
       
       
        if(qrCode.selectname == "Apps"){
            navigate(`/appedit/${qrCode.typeId}`);

        }

        if(qrCode.selectname == "Images"){
            navigate(`/imageedit/${qrCode.typeId}`);

        }

        if(qrCode.selectname == "Coupon"){
            navigate(`/couponedit/${qrCode.typeId}`);

        }
       

        // navigate(`/listlinkedit/${qrCode.typeId}`);  
        

    };


    const Favourite =  async () => {

        try {
            const response = await axios.get(`${baseurl}/favouriteqr/${qrCode.id}`);
      
            toast.success("Add to favorites");
      
           
          } catch (error) {
            console.error('Error fetching QR code by ID:', error);
          }

    };


    const Dublicate =  async () => {

        try {
            const response = await axios.post(`${baseurl}/dublicateQr`, {
                qrCode,
                
               
              });
        
      
            toast.success("Dublicate Created");
      
           
          } catch (error) {
            console.error('Error fetching QR code by ID:', error);
          }

    };


    const PrintQr = () => {
       const image= qrCode.qrcode
       const printWindow = window.open('', '', 'width=600,height=400');

       // Write the image to the new window's document
       printWindow.document.write(`
         <html>
           <head>
             <title>Print QR Code</title>
             <style>
               body { text-align: center; margin-top: 50px; }
               img { width: 100%; max-width: 300px; }  /* Adjust image size */
             </style>
           </head>
           <body>
             <img src="${image}" alt="QR Code" />
           </body>
         </html>
       `);
     
       // Ensure the printWindow's document is fully loaded before triggering the print dialog
       printWindow.document.close(); // Close the document for writing
     
       printWindow.onload = () => {
         printWindow.focus(); // Focus on the print window
         printWindow.print(); // Trigger the print dialog
         printWindow.onafterprint = () => {
           printWindow.close(); // Close the window after printing is complete
         };
       };

    }


    return (
        <>
            <div className="select-Rooms-drop">
            <ToastContainer />
                {/* Button to toggle dropdown */}
                <div onClick={() => setIsOpen(!isOpen)} className="01">
                <img src={QRDOYTSICONS} alt="icons"  />
                </div>

                {/* Box that contains 5 buttons */}
                {isOpen && (
                    <div className="box-content">
                        <button className="button" onClick={editscreens}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160L0 416c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-96c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7-14.3 32-32 32L96 448c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 64z"/></svg>
                            Edit</button>
                        {/* <button className="button" > <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M403.8 34.4c12-5 25.7-2.2 34.9 6.9l64 64c6 6 9.4 14.1 9.4 22.6s-3.4 16.6-9.4 22.6l-64 64c-9.2 9.2-22.9 11.9-34.9 6.9s-19.8-16.6-19.8-29.6l0-32-32 0c-10.1 0-19.6 4.7-25.6 12.8L284 229.3 244 176l31.2-41.6C293.3 110.2 321.8 96 352 96l32 0 0-32c0-12.9 7.8-24.6 19.8-29.6zM164 282.7L204 336l-31.2 41.6C154.7 401.8 126.2 416 96 416l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64 0c10.1 0 19.6-4.7 25.6-12.8L164 282.7zm274.6 188c-9.2 9.2-22.9 11.9-34.9 6.9s-19.8-16.6-19.8-29.6l0-32-32 0c-30.2 0-58.7-14.2-76.8-38.4L121.6 172.8c-6-8.1-15.5-12.8-25.6-12.8l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64 0c30.2 0 58.7 14.2 76.8 38.4L326.4 339.2c6 8.1 15.5 12.8 25.6 12.8l32 0 0-32c0-12.9 7.8-24.6 19.8-29.6s25.7-2.2 34.9 6.9l64 64c6 6 9.4 14.1 9.4 22.6s-3.4 16.6-9.4 22.6l-64 64z"/></svg>Change QR type</button> */}
                        <button className="button" onClick={Dublicate}> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M384 336l-192 0c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l140.1 0L400 115.9 400 320c0 8.8-7.2 16-16 16zM192 384l192 0c35.3 0 64-28.7 64-64l0-204.1c0-12.7-5.1-24.9-14.1-33.9L366.1 14.1c-9-9-21.2-14.1-33.9-14.1L192 0c-35.3 0-64 28.7-64 64l0 256c0 35.3 28.7 64 64 64zM64 128c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-32-48 0 0 32c0 8.8-7.2 16-16 16L64 464c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l32 0 0-48-32 0z"/></svg>Dublicate</button>
                        <button className="button" onClick={PrintQr}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M128 0C92.7 0 64 28.7 64 64l0 96 64 0 0-96 226.7 0L384 93.3l0 66.7 64 0 0-66.7c0-17-6.7-33.3-18.7-45.3L400 18.7C388 6.7 371.7 0 354.7 0L128 0zM384 352l0 32 0 64-256 0 0-64 0-16 0-16 256 0zm64 32l32 0c17.7 0 32-14.3 32-32l0-96c0-35.3-28.7-64-64-64L64 192c-35.3 0-64 28.7-64 64l0 96c0 17.7 14.3 32 32 32l32 0 0 64c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-64zM432 248a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"/></svg>  To Print</button>
                        <button className="button"  onClick={Favourite}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg> Add to favorites</button>
                        {/* <button className="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 80L0 229.5c0 17 6.7 33.3 18.7 45.3l176 176c25 25 65.5 25 90.5 0L418.7 317.3c25-25 25-65.5 0-90.5l-176-176c-12-12-28.3-18.7-45.3-18.7L48 32C21.5 32 0 53.5 0 80zm112 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg>Tags</button> */}
                    </div>
                )}
            </div>
        </>
    );
}

export default Mydrop1;
