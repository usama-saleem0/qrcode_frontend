import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Generatetypesqrcode from '../components/Generatetypesqrcode';
import 'bootstrap/dist/css/bootstrap.min.css';
import { baseurl } from '../baseurl';

import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import { useTranslation } from 'react-i18next';





const FAQ2 = () => {
    const { t } = useTranslation();


    return (

        <>
        <section className='faq-tab'>
            <div className="contanir">
                <div className="main-faq-tab">
                    <div className="faq-tab-box">
                    <Accordion allowZeroExpanded>

{/* 
                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>

                            What is a QR code?
                              <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path></svg>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <p>
                            Simply put, we can say that the QR code is the natural evolution of the barcode. Its name derives from "Quick Response Code", due to the speed at which they can be scanned. This code allows for easy access to different information through a mobile device.
                            </p>
                        </AccordionItemPanel>
                    </AccordionItem>


                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>

                            What are QR codes useful for?
                              <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path></svg>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <p>
                            They are as useful as all the different types of content they can offer. In fact, in recent years, this type of code is becoming more widely accepted among all kinds of people. It's logical, since with just one scan you can access a variety of different information and even facilitate certain tasks such as connecting to a Wi-Fi network. A QR code can help you improve the service or product you offer, interact with your customers and promote your business, among other things.
                            </p>
                        </AccordionItemPanel>
                    </AccordionItem>


                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>

                            How many types of QR codes are there?
                              <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path></svg>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <p>
                            Many. There are as many types of the different kinds of content that may be associated with them. At QRfy, we offer you a tool to create a wide variety of them: Wi-Fi, website, vCard, PDF, images, videos, apps and menus. And all in the simplest way.
                            </p>
                        </AccordionItemPanel>
                    </AccordionItem>




                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>

                            How do you read a QR code?
                              <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path></svg>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <p>
                            There are several factors that influence whether a person or potential customer can read a QR code, but without a doubt the most important factor is that the individual who wants to scan the code needs to have a mobile phone. Nowadays, there are many mobile devices that can read QR codes with the camera itself, by simply pointing the camera at the code to scan it. If this doesn't work, you may need to download an application designed to read QR codes. But don't worry! There are several apps that do just this.
                            </p>
                        </AccordionItemPanel>
                    </AccordionItem>



                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>

                            What is the difference between a static QR and a dynamic one?
                              <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path></svg>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <p>
                            The biggest difference between the two is that the dynamic QR code can be edited even after being printed, and the static one cannot. Therefore, the dynamic QR code allows us to change both the function and the content at any time and as many times as we want. Another big difference is that dynamic QR code allow you to collect statistics on the scans made in order to get as much information as possible.
                            </p>
                        </AccordionItemPanel>
                    </AccordionItem>



                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>

                            Can a static QR code be converted to a dynamic one or vice versa?
                              <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path></svg>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <p>
                            No, due to the technical differences between each of the codes.
                            </p>
                        </AccordionItemPanel>
                    </AccordionItem>


                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>

                            How can I generate my own QR code?
                              <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path></svg>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <p>
                            There are different platforms and tools to create your own QR, but none like QRfy. With QRfy you not only lets you create custom QR codes, you can also manage and edit your code, and make an analytical monitoring them.
                            </p>
                        </AccordionItemPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                            Can the reading of a QR code fail?
                              <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path></svg>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <p>
                            QR codes also have an error prevention system. Thanks to this system, up to 30% of the structure of the QR code can be damaged without affecting its ability to be read. If the damage is greater, it may be impossible to read.
                            </p>
                        </AccordionItemPanel>
                    </AccordionItem>


                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                            How can I design my own QR code?
                              <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path></svg>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <p>
                            With our QR code creator, anyone can create their own.
                            </p>
                        </AccordionItemPanel>
                    </AccordionItem>


                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>

                            Can I customise the text of the QR?
                              <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path></svg>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <p>
                            Yes. As long as the maximum number of characters is respected.
                            </p>
                        </AccordionItemPanel>
                    </AccordionItem> */}



<AccordionItem>
    <AccordionItemHeading>
        <AccordionItemButton>
            {t('WhatIsQRnn')}
            <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path>
            </svg>
        </AccordionItemButton>
    </AccordionItemHeading>
    <AccordionItemPanel>
        <p>{t('WhatIsQRDescriptionnn')}</p>
    </AccordionItemPanel>
</AccordionItem>

<AccordionItem>
    <AccordionItemHeading>
        <AccordionItemButton>
            {t('WhatAreQRCodesUsefulFornn')}
            <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path>
            </svg>
        </AccordionItemButton>
    </AccordionItemHeading>
    <AccordionItemPanel>
        <p>{t('WhatAreQRCodesUsefulForDescriptionnn')}</p>
    </AccordionItemPanel>
</AccordionItem>

<AccordionItem>
    <AccordionItemHeading>
        <AccordionItemButton>
            {t('HowManyTypesOfQRnn')}
            <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path>
            </svg>
        </AccordionItemButton>
    </AccordionItemHeading>
    <AccordionItemPanel>
        <p>{t('HowManyTypesOfQRDescriptionnn')}</p>
    </AccordionItemPanel>
</AccordionItem>

<AccordionItem>
    <AccordionItemHeading>
        <AccordionItemButton>
            {t('HowDoYouReadQRnn')}
            <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path>
            </svg>
        </AccordionItemButton>
    </AccordionItemHeading>
    <AccordionItemPanel>
        <p>{t('HowDoYouReadQRDescriptionnn')}</p>
    </AccordionItemPanel>
</AccordionItem>

<AccordionItem>
    <AccordionItemHeading>
        <AccordionItemButton>
            {t('StaticVsDynamicQRnn')}
            <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path>
            </svg>
        </AccordionItemButton>
    </AccordionItemHeading>
    <AccordionItemPanel>
        <p>{t('StaticVsDynamicQRDescriptionnn')}</p>
    </AccordionItemPanel>
</AccordionItem>

<AccordionItem>
    <AccordionItemHeading>
        <AccordionItemButton>
            {t('StaticToDynamicQRnn')}
            <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path>
            </svg>
        </AccordionItemButton>
    </AccordionItemHeading>
    <AccordionItemPanel>
        <p>{t('StaticToDynamicQRDescriptionnn')}</p>
    </AccordionItemPanel>
</AccordionItem>

<AccordionItem>
    <AccordionItemHeading>
        <AccordionItemButton>
            {t('GenerateQRnn')}
            <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path>
            </svg>
        </AccordionItemButton>
    </AccordionItemHeading>
    <AccordionItemPanel>
        <p>{t('GenerateQRDescriptionnn')}</p>
    </AccordionItemPanel>
</AccordionItem>

<AccordionItem>
    <AccordionItemHeading>
        <AccordionItemButton>
            {t('CanQRFailnn')}
            <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path>
            </svg>
        </AccordionItemButton>
    </AccordionItemHeading>
    <AccordionItemPanel>
        <p>{t('CanQRFailDescriptionnn')}</p>
    </AccordionItemPanel>
</AccordionItem>

<AccordionItem>
    <AccordionItemHeading>
        <AccordionItemButton>
            {t('DesignYourOwnQRnn')}
            <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path>
            </svg>
        </AccordionItemButton>
    </AccordionItemHeading>
    <AccordionItemPanel>
        <p>{t('DesignYourOwnQRDescriptionnn')}</p>
    </AccordionItemPanel>
</AccordionItem>

<AccordionItem>
    <AccordionItemHeading>
        <AccordionItemButton>
            {t('CustomizeQRTextnn')}
            <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path>
            </svg>
        </AccordionItemButton>
    </AccordionItemHeading>
    <AccordionItemPanel>
        <p>{t('CustomizeQRTextDescriptionnn')}</p>
    </AccordionItemPanel>
</AccordionItem>



                    {/* <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>

                            Can I change the size of my QR logo?
                              <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path></svg>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <p>
                            No. To avoid errors in the process of reading the QR code, this option is not available. But don't worry, we use a standard size so that the logo is easily readable and doesn't compromise the scan.
                            </p>
                        </AccordionItemPanel>
                    </AccordionItem>



                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>

                            Can I edit my QR code?
                              <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path></svg>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <p>
                            Yes. Within the "My QRs" section, you can see all the QR codes that you have created. Just click on the edit button (pencil symbol) to be able to make changes to your QR.
                            </p>
                        </AccordionItemPanel>
                    </AccordionItem>



                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>

                            Can I check that my QR code is working correctly?
                              <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path></svg>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <p>
                            Yes. We recommend that you always scan the QR code preview with your mobile device to check that it's working.
                            </p>
                        </AccordionItemPanel>
                    </AccordionItem>



                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>

                            Why aren't my QR codes working?
                              <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path></svg>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <p>
                            If you are in the trial period or signed to any of our plans, your active QR codes should work without problem. If your QR codes do not work, it is most likely to be due to design elements. Some reading applications and telephone cameras have difficulties in scanning complexes QR codes. Here are some design elements that must be taken into account: - Make sure there is a significant contrast between the foreground and the bottom of the QR code. - Make sure the QR code size is suitable for scanning distance (in general, dynamic QR codes should not be less than 2 x 2 cm and static QR codes should not be less than 3 x 3 cm). - Make sure the logo, if you use one, do not obstruct the important elements of the QR code.
                            </p>
                        </AccordionItemPanel>
                    </AccordionItem>



                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>

                            What data is collected in dynamic QR scans?
                              <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path></svg>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <p>
                            You will be able to know the number of total scans, the number of scans per operating system, the location and the number of unique scans.
                            </p>
                        </AccordionItemPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                            How do I download my QR code?
                              <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path></svg>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <p>
                            You can download your QR codes from the "My QRs" section or from within the "Detail" section of each QR. You can download it in the formats that suit you best (png, jpeg, eps, svg).
                            </p>
                        </AccordionItemPanel>
                    </AccordionItem>


                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>

                            How do I print my QR code?
                              <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path></svg>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <p>
                            Once you have downloaded your QR code in the desired format, you can print it from your computer. Always make sure to test your QR before printing it to avoid any mishaps.
                            </p>
                        </AccordionItemPanel>
                    </AccordionItem>


                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>

               How many plans are there and how are they different?
                              <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path></svg>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <p>
                            Today at QRfy we offer 3 plans that give you access to all the tools on our platform. The difference is in the duration time. You also have a free trial period of 7 days to get to know the platform.
                            </p>
                        </AccordionItemPanel>
                    </AccordionItem>


                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                            Is there an extra charge in addition to the price of the plan?
                              <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path></svg>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <p>
                            No, we do not have any extra charges beyond the price of the plan + VAT. However, your credit card provider may charge a small fee for the transaction. For more information, contact your bank or credit card provider directly.
                            </p>
                        </AccordionItemPanel>
                    </AccordionItem>


                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>

                            What payment methods does QRfy accept?
                              <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path></svg>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <p>
                            In QRfy we accept payments with Visa card, Mastercard, American Express and Maestro.
                            </p>
                        </AccordionItemPanel>
                    </AccordionItem>


                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>

                            Can I change or update my payment method?
                              <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path></svg>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <p>
                            Yes. Go to the "My Plans" section and click on "Update Card".
                            </p>
                        </AccordionItemPanel>
                    </AccordionItem>


                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>

                            Where can I update or change my VAT number?
                              <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path></svg>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <p>
                            You can change the VAT number by entering the "Tax Information" section in the "My Account" area.
                            </p>
                        </AccordionItemPanel>
                    </AccordionItem>


                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>

                            Where can I download my invoices?
                              <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path></svg>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <p>
                            You can get your invoice by clicking the invoice icon in the "Plans and payments". You will be asked to fill out a form with tax information. If you have any problem please write to our support team.
                            </p>
                        </AccordionItemPanel>
                    </AccordionItem> */}



<AccordionItem>
    <AccordionItemHeading>
        <AccordionItemButton>
            {t('ChangeQRSizeTitleTextnn')}
            <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path>
            </svg>
        </AccordionItemButton>
    </AccordionItemHeading>
    <AccordionItemPanel>
        <p>{t('ChangeQRSizeDescriptionTextnn')}</p>
    </AccordionItemPanel>
</AccordionItem>

<AccordionItem>
    <AccordionItemHeading>
        <AccordionItemButton>
            {t('EditQRCodeTitleTextnn')}
            <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path>
            </svg>
        </AccordionItemButton>
    </AccordionItemHeading>
    <AccordionItemPanel>
        <p>{t('EditQRCodeDescriptionTextnn')}</p>
    </AccordionItemPanel>
</AccordionItem>

<AccordionItem>
    <AccordionItemHeading>
        <AccordionItemButton>
            {t('CheckQRCodeTitleTextnn')}
            <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path>
            </svg>
        </AccordionItemButton>
    </AccordionItemHeading>
    <AccordionItemPanel>
        <p>{t('CheckQRCodeDescriptionTextnn')}</p>
    </AccordionItemPanel>
</AccordionItem>

<AccordionItem>
    <AccordionItemHeading>
        <AccordionItemButton>
            {t('WhyQRCodeNotWorkingTitleTextnn')}
            <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path>
            </svg>
        </AccordionItemButton>
    </AccordionItemHeading>
    <AccordionItemPanel>
        <p>{t('WhyQRCodeNotWorkingDescriptionTextnn')}</p>
    </AccordionItemPanel>
</AccordionItem>

<AccordionItem>
    <AccordionItemHeading>
        <AccordionItemButton>
            {t('DataCollectedDynamicQRTitleTextnn')}
            <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path>
            </svg>
        </AccordionItemButton>
    </AccordionItemHeading>
    <AccordionItemPanel>
        <p>{t('DataCollectedDynamicQRDescriptionTextnn')}</p>
    </AccordionItemPanel>
</AccordionItem>

<AccordionItem>
    <AccordionItemHeading>
        <AccordionItemButton>
            {t('DownloadQRCodeTitleTextnn')}
            <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path>
            </svg>
        </AccordionItemButton>
    </AccordionItemHeading>
    <AccordionItemPanel>
        <p>{t('DownloadQRCodeDescriptionTextnn')}</p>
    </AccordionItemPanel>
</AccordionItem>

<AccordionItem>
    <AccordionItemHeading>
        <AccordionItemButton>
            {t('PrintQRCodeTitleTextnn')}
            <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path>
            </svg>
        </AccordionItemButton>
    </AccordionItemHeading>
    <AccordionItemPanel>
        <p>{t('PrintQRCodeDescriptionTextnn')}</p>
    </AccordionItemPanel>
</AccordionItem>

<AccordionItem>
    <AccordionItemHeading>
        <AccordionItemButton>
            {t('PlansDifferenceTitleTextnn')}
            <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path>
            </svg>
        </AccordionItemButton>
    </AccordionItemHeading>
    <AccordionItemPanel>
        <p>{t('PlansDifferenceDescriptionTextnn')}</p>
    </AccordionItemPanel>
</AccordionItem>

<AccordionItem>
    <AccordionItemHeading>
        <AccordionItemButton>
            {t('ExtraChargeTitleTextnn')}
            <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path>
            </svg>
        </AccordionItemButton>
    </AccordionItemHeading>
    <AccordionItemPanel>
        <p>{t('ExtraChargeDescriptionTextnn')}</p>
    </AccordionItemPanel>
</AccordionItem>

<AccordionItem>
    <AccordionItemHeading>
        <AccordionItemButton>
            {t('PaymentMethodsAcceptedTitleTextnn')}
            <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path>
            </svg>
        </AccordionItemButton>
    </AccordionItemHeading>
    <AccordionItemPanel>
        <p>{t('PaymentMethodsAcceptedDescriptionTextnn')}</p>
    </AccordionItemPanel>
</AccordionItem>

<AccordionItem>
    <AccordionItemHeading>
        <AccordionItemButton>
            {t('ChangePaymentMethodTitleTextnn')}
            <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path>
            </svg>
        </AccordionItemButton>
    </AccordionItemHeading>
    <AccordionItemPanel>
        <p>{t('ChangePaymentMethodDescriptionTextnn')}</p>
    </AccordionItemPanel>
</AccordionItem>

<AccordionItem>
    <AccordionItemHeading>
        <AccordionItemButton>
            {t('ChangeVATNumberTitleTextnn')}
            <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path>
            </svg>
        </AccordionItemButton>
    </AccordionItemHeading>
    <AccordionItemPanel>
        <p>{t('ChangeVATNumberDescriptionTextnn')}</p>
    </AccordionItemPanel>
</AccordionItem>

<AccordionItem>
    <AccordionItemHeading>
        <AccordionItemButton>
            {t('DownloadInvoicesTitleTextnn')}
            <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path>
            </svg>
        </AccordionItemButton>
    </AccordionItemHeading>
    <AccordionItemPanel>
        <p>{t('DownloadInvoicesDescriptionTextnn')}</p>
    </AccordionItemPanel>
</AccordionItem>




                    {/* <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>

                            When can I start using the purchased plan?
                              <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path></svg>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <p>
                            As soon as the payment is made, you can start using all of the QRfy tools.
                            </p>
                        </AccordionItemPanel>
                    </AccordionItem>


                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                            How long does my subscription last?
                              <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path></svg>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <p>
                            It will depend on the plan you have subscribed to. We have the following plans: quarterly, semi-annual, annual.
                            </p>
                        </AccordionItemPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                            Is my subscription renewal automatic?
                              <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path></svg>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <p>
                            Yes. Unless the subscription is canceled - at the latest - one day before the renewal date, your subscription will renew automatically. The renewal of your subscription cannot be cancelled once it has been carried out.
                            </p>
                        </AccordionItemPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                            How do I cancel my subscription?
                              <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path></svg>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <p>
                            Canceling your subscription is very easy. You can do it in the "Billing" section or by clicking here.
                            </p>
                        </AccordionItemPanel>
                    </AccordionItem>


                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                            What happens to my QR codes if my subscription is cancelled?
                              <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path></svg>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <p>
                            Your QR codes won't go anywhere, but you won't be able to access them or the collected data until you update your plan. Your QR codes will disappear only if you delete your QRfy account.
                            </p>
                        </AccordionItemPanel>
                    </AccordionItem>


                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                      Do you offer refunds for unused subscription periods?
                              <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path></svg>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <p>
                            No refunds are offered for unused subscription periods. Users can prevent the subscription from automatically renewing by canceling it at any time
                            </p>
                        </AccordionItemPanel>
                    </AccordionItem>


                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                            How long is the trial period?
                              <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path></svg>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <p>
                            7 days, in which you can try our QR code generator.
                            </p>
                        </AccordionItemPanel>
                    </AccordionItem>


                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                            What type of access does the trial period give me?
                              <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path></svg>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <p>
                            Our trial period gives you access to all of our tools. At QRfy, we believe that in order to evaluate a service, you must be able to test it out completely.
                            </p>
                        </AccordionItemPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                            Can the trial period extend?
                              <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path></svg>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <p>
                            We feel it, but the trial period only lasts 7 days. After that period, you can continue using the platform by subscribing to one of our plans.
                            </p>
                        </AccordionItemPanel>
                    </AccordionItem>


                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                            Can I use the QR codes generated in the trial period for commercial purposes?
                              <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path></svg>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <p>
                            Yes.

                            </p>
                        </AccordionItemPanel>
                    </AccordionItem>


                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                            Should I cancel the trial period if I am not going to continue using the platform?
                              <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path></svg>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <p>
                            No. The free trial period automatically ends after 7 days. Only payment plans can be cancelled..
                            </p>
                        </AccordionItemPanel>
                    </AccordionItem>


                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                            What about my QR codes once the trial period ends?
                              <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path></svg>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <p>
                            Your QR codes will be stored for three months after the trial period has ended. During this period you will not be able to access them until you contract one of our plans.
                            </p>
                        </AccordionItemPanel>
                    </AccordionItem> */}



<AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>
            {t('SubscriptionUsageTitle')}
            <svg className="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path>
            </svg>
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p>{t('SubscriptionUsageDescription')}</p>
        </AccordionItemPanel>
      </AccordionItem>

      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>
            {t('SubscriptionDurationTitle')}
            <svg className="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path>
            </svg>
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p>{t('SubscriptionDurationDescription')}</p>
        </AccordionItemPanel>
      </AccordionItem>

      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>
            {t('AutomaticRenewalTitle')}
            <svg className="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path>
            </svg>
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p>{t('AutomaticRenewalDescription')}</p>
        </AccordionItemPanel>
      </AccordionItem>

      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>
            {t('CancelSubscriptionTitle')}
            <svg className="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path>
            </svg>
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p>{t('CancelSubscriptionDescription')}</p>
        </AccordionItemPanel>
      </AccordionItem>

      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>
            {t('QRCodeAfterCancellationTitle')}
            <svg className="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path>
            </svg>
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p>{t('QRCodeAfterCancellationDescription')}</p>
        </AccordionItemPanel>
      </AccordionItem>

      {/* Repeat for other accordion items... */}

      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>
            {t('QRCodeAfterTrialTitle')}
            <svg className="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path>
            </svg>
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p>{t('QRCodeAfterTrialDescription')}</p>
        </AccordionItemPanel>
      </AccordionItem>


                   


                </Accordion>
                <div className="FAQ-tab-btn">
                    <button>
                    Create QR code

                    <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 16 16" aria-hidden="true"><path d="M13.92,8.38a1,1,0,0,0,0-.76,1,1,0,0,0-.21-.33l-4-4A1,1,0,0,0,8.29,4.71L10.59,7H3A1,1,0,0,0,3,9h7.59l-2.3,2.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l4-4A1,1,0,0,0,13.92,8.38Z"></path></svg>
                    </button>
                </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )

}

export default FAQ2