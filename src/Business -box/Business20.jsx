import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { IoChevronForwardSharp } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa6";


import Header from '../header/header';
import Footer from '../Footer/Footer';

import z1 from '../img/Vector.svg';
import z2 from '../img/Infographics1.png';
import z3 from '../img/Infographics2.png';
import z4 from '../img/Infographics3.png';
import z5 from '../img/Infographics4.png';
import z6 from '../img/Infographics5.png';
import z7 from '../img/Infographics6.png';

import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';




const Business20 = () => {
    return (
        <>


            <Header />

            <div class="busines-inner">
        <div class="inner-bussines">
            <h2>QR codes in <span>Infographics</span></h2>
            <button class="jss2570">
                <span class="jss2570-span">Select other examples
                    <img src={z1} alt=""/>
                </span>

            </button>
        </div>
    </div>



    <div class="busines-inner-1">
        <div class="qr-cont">
            <div class="jss160">
                <div class="jss161">
                    <div class="jss164">
                        <a href="#benefit" class="btnnn-1">Benefits</a>
                        <a href="#best-practices">Best practices</a>
                        <a href="#use-cases">Use Cases</a>
                        <a href="#faq">FAQ</a>
                    </div>
                </div>
                <p>Infographics have a big obstacle: adding a link does not make it clickable, neither in virtual publications nor in printed materials. The QR codes came to overcome this obstacle, allowing access to additional information with a simple scan.</p>
            </div>


            <div class="jss163">
                <div class="jss180 half">
                    <div class="jss181">
                        <img class="jss182" src={z2} alt=""/>
                    </div>
                    <div class="jss183">
                        <a href="#">Create QR code</a>
                    </div>
                </div>

                <div class="jss180 half">
                    <div class="jss181">
                        <img class="jss182" src={z3} alt=""/>
                    </div>
                    <div class="jss183">
                        <a href="#">Create QR code</a>
                    </div>
                </div>

                <div class="jss180">
                    <div class="jss181">
                        <img class="jss182" src={z4} alt=""/>
                    </div>
                    <div class="jss183">
                        <a href="#">Create QR code</a>
                    </div>
                </div>



                <div class="jss180 half">
                    <div class="jss181">
                        <img class="jss182" src={z5} alt=""/>
                    </div>
                    <div class="jss183">
                        <a href="#">Create QR code</a>
                    </div>
                </div>

                <div class="jss180 half">
                    <div class="jss181">
                        <img class="jss182" src={z6} alt=""/>
                    </div>
                    <div class="jss183">
                        <a href="#">Create QR code</a>
                    </div>
                </div>

                <div class="jss180">
                    <div class="jss181">
                        <img class="jss182" src={z7} alt=""/>
                    </div>
                    <div class="jss183">
                        <a href="#">Create QR code</a>
                    </div>
                </div>
                </div>
                </div>
                </div>

            <section className='hello-my-faq-code' id='benefit'>
            <div class="jss251">


                <div className="benefitsofusing">
                    <h2>Benefits of using QR codes in Infographics</h2>
                    <p> QR codes simplify the process of accessing infographic information: with a well-designed QR code strategically placed on the infographic, print or digital, users can access their linked content easily and quickly, without having to type a link or search in a browser's magnifying glass. Without problems accessing the link, you can improve your customers' experience and even add new ones.</p>
                    
                </div>

                    <div className="Everything-faq-box more-faq more-2">

                        <Accordion allowZeroExpanded>

                            <AccordionItem>

                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                    Match your brand.
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none"><path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9"></path></svg>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                QR codes created with QRFY's code generator can be tailored to every detail of your branding and marketing materials: you can choose from a wide range of colors, custom frames and borders, place an image or logo of your company and include a CTA (call to action) that attracts more scans. You can also adjust its size so that it adapts to any printed or digital media, whether it is the packaging of your product, a social network or a huge advertising advertisement.
                                </AccordionItemPanel>

                            </AccordionItem>

                            <AccordionItem>

                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                    Optimize your infographic marketing
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none"><path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9"></path></svg>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                With our dynamic URL QR code, you can view real-time tracking data: location, scan time, device or operating system used, and the number of unique and total scans, to monitor the achievements of your QR code or improve them, if necessary, to optimize future campaigns.
                                </AccordionItemPanel>

                            </AccordionItem>

                            <AccordionItem>

                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                    Tell a unique story with your content
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none"><path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9"></path></svg>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                Infographics combine text with images to present information in an attractive and easy-to-read way. If you need to add complementary information to your design, your print marketing strategy can be expanded to the digital field, adding audiovisual online content to the story told, access to contact information, links to your networks and much more, with a simple scan. Thus, the marketing strategy of your infographic will be diversified and amplified, with its information being saved on the devices of each of the users who scanned the code, after reading and enjoying your infographic.
                                </AccordionItemPanel>

                            </AccordionItem>


                            <AccordionItem>

                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                    Renew your printed marketing design.
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none"><path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9"></path></svg>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                The great benefit of QR codes is that you can track their data, both in print and digital materials, thanks to scanning metrics. By placing a QR code on stationery, billboards, brochures, online platforms and any digital or print publication, potential customers will have no problem finding your content and your company will be able to know exactly how successful your advertising campaign was.
                                </AccordionItemPanel>

                            </AccordionItem>


                            <AccordionItem>

                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                    Edit even after printing
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none"><path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9"></path></svg>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                Another reason to use dynamic QR codes is that you can edit the information linked to your QR at any time, without having to change the appearance of your code or generate a new one. If you need to change the destination link or the type of QR codes, you can do so whenever you want, without the need for reprints.
                                </AccordionItemPanel>

                            </AccordionItem>


                            </Accordion>
                    </div>
         
                </div>
    
            </section>


            <div class="jss235" id="how-to">
        <div class="jss236">
            <h3 class="jss237">How to create a QR code for Infographics?</h3>
            <ul class="jss238">
                <li class="jss239">
                    <span class="jss240">1</span>
                    <p class="jss241">Register to enter our QR code generator and select the type of QR code you want to incorporate into your infographics. You can start with a QR code from URL.</p>
                </li>
                <li class="jss239">
                    <span class="jss240">2</span>
                    <p class="jss241">Enter your website link and your QR code will be generated automatically.</p>
                </li>
                <li class="jss239">
                    <span class="jss240">3</span>
                    <p class="jss241">Customize the design of your QR code: add a frame and a “Scan me” legend.</p>
                </li>
                <li class="jss239">
                    <span class="jss240">4</span>
                    <p class="jss241">Then, select colors that combine the identity of your company or business.</p>
                </li>
                <li class="jss239">
                    <span class="jss240">5</span>
                    <p class="jss241">Click “Download” and receive your QR code in .jpeg format in seconds.</p>
                </li>
                <li class="jss239">
                    <span class="jss240">6</span>
                    <p class="jss241">Finally, integrate your new QR code into your infographic design.</p>
                </li>
            </ul>
           
        </div>
    </div>

    <div class="jss242" id="best-practices">
        <div class="jss243">
            <h3 class="jss244">Best practices in QR codes for <span class="blue">Infographics</span></h3>
            <p class="jss245">Using QR codes in infographics can significantly improve your marketing strategy. To do this, you must take into account some details, regarding the design and structure, not only of the QR, but also of the infographic itself.</p>
        <ul class="jss246">

            <li class="jss247">
                <h4 class="jss248">1. Add a CTA to your QR code</h4>
                <p class="jss249">A necessary practice for the success of your QR Code is to add a brief written explanation of what the reader will gain by scanning the code. The CTA is the wake-up call that users need to not miss your QR: it encourages readers by allowing them to understand the objective of the marketing material and, as an immediate response, to scan it.</p>
            </li>

            <li class="jss247">
                <h4 class="jss248">2. Combine your QR code with the design of your infographic</h4>
                <p class="jss249">Whether the QR code is on printed or digital material, the quality of the image is very important: make sure that the type of image file is correct, that the color contrast in the QR is sufficient to be scanned easily, and that the colors and style chosen for the QR code match the graphic design of your infographic.</p>
            </li>

            <li class="jss247">
                <h4 class="jss248">3. Use the appropriate QR code size</h4>
                <p class="jss249">When printing your QR code, you must keep in mind that the minimum recommended print size is 2 x 2 centimeters. It is not recommended to make it smaller, but you can always make it larger, so that your QR code is always readable and can be scanned without difficulty from any device.</p>
            </li>

            

           

        </ul>



        <p class="jss249">Learn more about optimizing your QR codes by visiting our <a href="#">Help Center.</a></p>
        
    
    
    </div>
    </div>


    <div class="jss250" id="use-cases">
        <div class="jss251">
            <h3 class="jss252">Explore QR codes for Infographics in action</h3>
            <p class="jss253"> If you want to start using QR codes in infographics and you still haven't decided how, here are some narratives that will give you inspiration, with examples of their uses in fictitious company campaigns.</p>
        
            <ul class="jss254">
                <li class="jss255">
                    <h4 class="jss256">Business services</h4>
                    <p class="jss257">The consulting firm Connect decided to use QR codes in a multichannel marketing campaign, the purpose of which was to publicize the company and increase traffic to its website and social networks. To do this, they added a Business QR code within the infographics that explained the benefits of using their services, disseminated in different media: on the posters of their conferences, on stands at business fairs and exhibitions, in social media ads and billboards. In these, people could see which marketing method was the most effective for their venture and scan the code to enter the site, learn more about the company and contact them to request more information or an appointment with an advisor.</p>
                </li>

                <li class="jss255">
                    <h4 class="jss256">Government</h4>
                    <p class="jss257">The Environment Secretariat of North City decided to prioritize the waste and recycling awareness project this year. To do this, they located differentiated containers every three hundred meters for waste separation, along with billboards with infographics about the importance of recycling and the habits that can be adopted at home to improve our relationship with the environment and take care of it. These infographics included a dynamic URL QR code that connected users to a landing page on their website, which provided more information and contacts of foundations that collect different materials for social causes. In addition, they added these two infographics in their office window, so that other people could access the information.</p>
                </li>

                <li class="jss255">
                    <h4 class="jss256">Educational institutions</h4>
                    <p class="jss257"> The renowned art school SC School wanted to incorporate more infographics into its marketing strategy, in order to publicize the statistics of graduated students and the study plans for each specialization. To do this, they created two infographics that they used on billboards, with a Video QR code, to expand the information with some testimonials from students and teachers.</p>
                </li>

                <li class="jss255">
                    <h4 class="jss256">Real Estate Agencies</h4>
                    <p class="jss257"> The real estate agency Real Build attends conferences, exhibitions and other events every year with an infographic to show its properties for sale, along with its geographical location and the description of its environments. This year they decided to add a Image Gallery QR code next to a description, so that event attendees can scan the code of the house or apartment of interest to have a complete visualization of that particular property. They used the same system in the infographics of their offices, advertisements and publications on social networks.</p>
                </li>

                <li class="jss255">
                    <h4 class="jss256">Consumer packaged goods</h4>
                    <p class="jss257"> ZenYog is an online dairy retailer that wanted to improve the quality of its ingredients and start offering organic products. After a long study, they launched their “Green Line”, which incorporated a small infographic into its packaging with the benefits of consuming organic products. This infographic also contained a Feedback QR code, so that consumers can express their opinion about the new line.</p>
                </li>

             
                </ul>

                <p class="jss257">If you need more ideas to know how to use our QRFY codes to promote your company, visit our page How to use QRFY for your Business.</p>
            
        </div>
    </div>



            <section className='hello-my-faq-code' id='faq'>
            <div class="jss251">
                <div className="your-faq-box">
                    <div className="Everything-faq-box more-faq">
<h3>FAQ</h3>
                        <Accordion allowZeroExpanded>

                            <AccordionItem>

                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                    Where can I use infographics with QR codes?
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none"><path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9"></path></svg>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                Where you want! It will depend on your business, the product or service you want to promote and where you choose to promote it. You can use infographics with QR Codes in any of your marketing channels, whether printed or digital: a printed infographic for a fair, congress or symposium of your specialty; a sheet or slide for a school presentation; a post on Instagram to spread information about a topic of interest; or traditional signage within your business. Whatever the means and purpose of your infographic, the QR code can optimize its information and reach the target audience, by allowing access to extra content, in addition to allowing you, thanks to the tracking function, to measure the success of your campaign.
                                </AccordionItemPanel>

                            </AccordionItem>

                            
                             <AccordionItem>

                            <AccordionItemHeading>
                                    <AccordionItemButton>
                                    What type of information can I link to QR codes in infographics?
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none"><path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9"></path></svg>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                Really, whatever you want: the possibilities are endless. You can link your code to app downloads, videos, music playlists, PDF files, documents of all kinds, social media profiles and much more, without overloading pages with extra information, cluttering the design, or embedding long links .
                                </AccordionItemPanel>

                            </AccordionItem>

                            </Accordion>




                    </div>
                    <div className="main-know-box">


                        <div className="know-box">
                            <h2>Have more questions?</h2>
                            <p>For more information visit our help center.
                            </p>
                           
                            <button>Visit us</button>
                        </div>
                    </div>
                </div>
                </div>
            </section>

            <Footer />

        </>
    )
}

export default Business20

