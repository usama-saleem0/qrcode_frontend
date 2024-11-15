
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../Footer/Footer';
import { baseurl } from '../baseurl';
import Header from '../header/header';



import in26 from '../img/in26.webp';
import in28 from '../img/in28.webp';
import { useTranslation } from 'react-i18next';



const Bulk    = () => {

 
  const { t } = useTranslation();



  return (

    <>
      <Header />
      <section className='Dynamic'>
    <div className="contanir">


        <div className="main-Dynamic">
          <h2>{t('bulknn')}


          </h2>

          <div className="Dynamic-imger">
          <img src={in28} alt="" />
          </div>
          

          <p>{t('accessiblenn')}</p>
        </div>
        </div>
    </section>



    
    <section className='Benefits'>
  <div className="contanir">


  <div className="main-Benefits-gap">
    <div className="main-Benefits">
      <h2>{t('Benefitsnn')}</h2>
      <p>{t('organizationalnn')}
      </p>
      <div className="Benefits-box">
      
          <p><span>{t('Operationalnn')}</span>{t('necessarynn')}</p>

          <p><span>{t('Speednn')}</span>{t('volumesnn')}</p>

          <p><span>{t('Uniformitynn')}</span> {t('professionalnn')}</p>

          <p><span>{t('customizationnn')}</span> {t('participatingnn')}</p>
      </div>
    </div>







    <div className="main-Benefits">
      <h2>{t('Benefitsnnn')}
</h2>
      <p>{t('distributionnn')}
      </p>
      <div className="Benefits-box">
      
          <p><span>{t('Simplifiednn')}</span>  {t('materialsnn')}</p>

          <p><span>{t('accessibilitynn')}</span>{t('anytimennn')}</p>
          <p><span>{t('Flexibilitynn')}</span> {t('unforeseennn')}</p>
          <p><span>{t('Distributionnnn')}</span> {t('quicklynnn')}</p>

      </div>
<br />
      
      <p >
          {t('ensuringnnn')}</p>
    </div>

    </div>
  </div>
</section>







    <section className='Updating  part-2'>
    <div className="contanir">


        <div className="main-Dynamic">
         <h4>How to use</h4>

          <div className="Dynamic-imger">
          <img src={in26} alt="" />
          </div>

   
<p>Now that you know the benefits of creating and downloading QR codes in bulk, we show you how to use this tool with a simple step by step:</p>

<h4>Mass creation of QR Codes</h4>
          <ul>
            <li><span>1</span>Access the "Create massive QRs" section in the left side menu  </li>

            <li><span>2</span>Select the type of QR you want to generate in quantity and customize the design, including colors and frames that will be applied uniformly to all QRs.
            
            </li>

            <li><span>3</span>Download the example CSV file and replace the example data with the information required for your QRs.</li>
            <li><span>4</span>Load the updated CSV with the data for each QR and you will find all the codes listed in the "My QRs" section.
            
            
            </li>
          </ul>
          
          <h4>Bulk download of QR Codes</h4>
          <ul>
            <li><span>1</span>From the “My QRs” section, select all the QR codes you want to download by clicking on the selection box located at the far left of each one. </li>

            <li><span>2</span>Click on the “Download” button that will appear in the lower menu       
            
            </li>

            <li><span>3</span>Select in which format you want to download your QRs: PNG, SVG, EPS, PDF. You can also customize the download by choosing the size of your QRs.</li>
            <li><span>4</span>Once downloaded, save the file to your device and use it as needed.
            
            
            </li>
          </ul>
<p>The CSV files generated are compatible with spreadsheet programs such as Excel and OpenOffice Calc, making it easy to import and export data, allowing you to manage and manipulate your QR codes quickly and efficiently. <br />
With the creation and mass download of QR codes, you will be able to manage your QR codes more efficiently and organizedly, ensuring that you can focus on what really matters: offering excellent content and service to your customers.</p>
        </div>
        </div>
    </section>

      <Footer/>
    </>
  )

}

export default Bulk   