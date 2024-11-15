import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { IoChevronForwardSharp } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa6";


import Header from '../header/header';
import Footer from '../Footer/Footer';

import f1 from '../img/Vector.svg';
import f2 from '../img/Store1.png';
import f3 from '../img/Store2.png';
import f4 from '../img/Store3.png';
import f5 from '../img/Store6.png';
import f6 from '../img/Store5.png';
import f7 from '../img/Store4.png';


import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';




const Business14 = () => {
    return (
        <>


            <Header />

            <div class="busines-inner">
        <div class="inner-bussines">
            <h2>QR codes in <span>Storefronts</span></h2>
            <button class="jss2570">
                <span class="jss2570-span">Select other examples
                    <img src={f1} alt=""/>
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
                <p>Attract potential customers to your business, renewing your storefront. QRFY codes can help improve the customer experience by transporting them from the physical space to your online site with just a scan.</p>
            </div>


            <div class="jss163">
                <div class="jss180 half">
                    <div class="jss181">
                        <img class="jss182" src={f2} alt=""/>
                    </div>
                    <div class="jss183">
                        <a href="#">Create QR code</a>
                    </div>
                </div>

                <div class="jss180 half">
                    <div class="jss181">
                        <img class="jss182" src={f3} alt=""/>
                    </div>
                    <div class="jss183">
                        <a href="#">Create QR code</a>
                    </div>
                </div>

                <div class="jss180">
                    <div class="jss181">
                        <img class="jss182" src={f4} alt=""/>
                    </div>
                    <div class="jss183">
                        <a href="#">Create QR code</a>
                    </div>
                </div>



                <div class="jss180 half">
                    <div class="jss181">
                        <img class="jss182" src={f5} alt=""/>
                    </div>
                    <div class="jss183">
                        <a href="#">Create QR code</a>
                    </div>
                </div>

                <div class="jss180 half">
                    <div class="jss181">
                        <img class="jss182" src={f6} alt=""/>
                    </div>
                    <div class="jss183">
                        <a href="#">Create QR code</a>
                    </div>
                </div>

                <div class="jss180">
                    <div class="jss181">
                        <img class="jss182" src={f7} alt=""/>
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
                    <h2>Benefits of using QR codes in storefronts</h2>
                    {/* <p>Table tents or tabletop signs are marketing materials created from easel-folded cardstock or plastic, which are often intended to make additional sales in your culinary or retail business, like a small tabletop version of advertising signs. When done correctly, they can increase brand or product awareness, promote exclusive offers, and allow easy access to your products and services, among many other possibilities.
                    Capable of storing up to 7,089 digits or 4,296 characters, the QR code, which means “Quick Response”, has become a fundamental element in digital marketing, thanks to the massive use of smartphones in recent years. By designing strategies to improve user experiences, they have gained great popularity, in addition to the fact that they are easily accessible to everyone and their large data capacity. Let's look at some ways QR codes can help you improve your business's table tents.</p> */}
                    
                </div>

                    <div className="Everything-faq-box more-faq more-2">

                        <Accordion allowZeroExpanded>

                            <AccordionItem>

                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                    The evolution of storefronts
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none"><path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9"></path></svg>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                The Industrial Revolution made flat glass widely available, and with demand for consumer goods increasing, major European and American stores began installing large glass windows to showcase their best products to the public: the first window displays. . Increasingly, stores began to use window displays as an incentive for consumers to come in and shop.
Today, window displays remain a staple, not only during the holidays, but all year round. However, the increase in the use of smartphones and online platforms has made window designers have to include a mobile-friendly experience in their marketing strategy: QR codes are the perfect tool to connect the window with the virtual world. 
                                </AccordionItemPanel>

                            </AccordionItem>

                            <AccordionItem>

                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                    Improve the consumer experience
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none"><path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9"></path></svg>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                The massive use of smartphones demonstrates the importance of innovating in marketing to keep customers interested. You can optimize your online content by connecting them with your physical “offline” spaces, by equipping storefronts with a QRFY code. From their beginnings, storefronts had the objective of attracting people and generating interest in the products for sale. Therefore, adding a QR code in your window will allow people to interact with your products and services even without entering your store: share a mobile catalog with just one scan, without printing costs, with a QR code Image Gallery in your storefront, which people can enlarge, save and even share with their friends. You can engage your customers by showing transparency in your dealings and an ethical approach to sourcing materials by including a Video QR code and taking them on a journey through your supply chain. Or share your story, your contact information, the location of your stores and opening hours, with a Business QR code. Additionally, with our dynamic URL QR code you can track scans in real time, to verify the success of your marketing campaign and make adjustments if necessary.
                                </AccordionItemPanel>

                            </AccordionItem>

                            <AccordionItem>

                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                    Measure your performance
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none"><path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9"></path></svg>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                The tracking function of our dynamic QR code provides you with statistical values, necessary to optimize your marketing campaign, by allowing you to know what worked and what did not with your QR code. Knowing the frequency of scans and the location, date, time, device and operating system used in each one will allow you to always be updated on the performance of your QR code and make the necessary adjustments, both in the design and in the content provided.
                                </AccordionItemPanel>

                            </AccordionItem>

                            

                            


                            



                        </Accordion>
                    </div>
         
                </div>
    
            </section>


            <div class="jss235" id="how-to">
        <div class="jss236">
            <h3 class="jss237">How to create a QR code for Storefronts?</h3>
            <ul class="jss238">
                <li class="jss239">
                    <span class="jss240">1</span>
                    <p class="jss241">Register to enter our QR code generator and select the type of QR code you want to incorporate into your storefront. We recommend starting with a QR code from URL.</p>
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
                    <p class="jss241">Finally, integrate your new QR code into your storefront design.</p>
                </li>
            </ul>
           
        </div>
    </div>

    <div class="jss242" id="best-practices">
        <div class="jss243">
            <h3 class="jss244">QR Code Best Practices for <span class="blue">Storefronts</span></h3>
            <p class="jss245">Nowadays, QR codes are no longer limited to their primitive, monochromatic and boring design. Now you can design it to your liking or to fit the aesthetics of your brand or company. With a wide variety of creative tools, a well-designed QR will help you expand your brand recognition and reach a wider audience. Here's a guide to some of the features available to you on QRFY.</p>
        <ul class="jss246">

            <li class="jss247">
                <h4 class="jss248">1. Add instructions</h4>
                <p class="jss249">Many times QR code users forget an essential detail for the success of their campaign: adding a brief written explanation of what the consumer will gain by scanning the code. When creating your code in QRFY, don't forget to incentivize consumers not to miss it and scan it, so that your marketing campaign is not ignored: “Join our networks”, “Watch the trailer”, “Get more information ”. The number of scans will largely depend on this.</p>
            </li>

            <li class="jss247">
                <h4 class="jss248">2. Frame it</h4>
                <p class="jss249">Access our customizable frames so that your QR code matches the design of your clothing items, or adapts to the brand's aesthetics. Once the QR code is generated, you can choose from a wide variety of customizable frames and colors, with different CTA messages to attract consumers' attention. Additionally, if you want to add other details, you have the option to choose a different icon, modify the shape, and add completely custom text.</p>
            </li>

            <li class="jss247">
                <h4 class="jss248">3. Add a logo inside your QR code</h4>
                <p class="jss249">Once you have customized the frame, shape and color of your code, you can also choose to include your own logo in the center of your QR code. While you can opt for one of the options offered by our QR code generator, you can also upload your own logo and even create your own CTA, such as "See our new collection" or "Follow us on Instagram." When including your logo, you don't have to worry about image size: our system automatically detects the best size, to ensure your logo remains scannable.</p>
            </li>

            <li class="jss247">
                <h4 class="jss248">4. Save your designs</h4>
                <p class="jss249">Sign up for QRFY and you'll be able to reuse your saved QR code designs without needing to manually recreate an old one. With QRFY you can save all your designs and reuse them in new marketing campaigns: if you want to promote a new drink or a new flavor for a limited time, but want to maintain the aesthetics of your design, you can reuse a saved design, instead of starting another one from scratch. zero.</p>
            </li>

            <li class="jss247">
                <h4 class="jss248">5. Customizable URL</h4>
                <p class="jss249">By default, each dynamic QR code gets a random short URL that redirects to your page when the QR code is scanned. The short URL can be customized to your preferences, such as including your company name, to help differentiate you from the competition and build more trust among users.</p>
            </li>

            <li class="jss247">
                <h4 class="jss248">6. Test before printing</h4>
                <p class="jss249">When printing your QR code, you must keep in mind that the minimum recommended print size is 2 x 2 centimeters. It is not recommended to make it smaller, but you can always make it larger, so that your QR code is always readable and can be scanned without difficulty. To ensure that all users can access your QR code, you should test with various smartphone models and apps.</p>
            </li>

        </ul>



        <p class="jss249">Learn more about optimizing your QR codes by visiting our <a href="#">Help Center.</a></p>
        
    
    
    </div>
    </div>


    <div class="jss250" id="use-cases">
        <div class="jss251">
            <h3 class="jss252">Explore QR codes for Storefronts in action</h3>
            <p class="jss253"> If you're still on the fence about adding QR codes to your storefront, perhaps the following fictional brand examples will inspire you to design an attractive and innovative storefront with our fully customizable codes.</p>
        
            <ul class="jss254">
                <li class="jss255">
                    <h4 class="jss256">Retailers</h4>
                    <p class="jss257">Shop Local knows the importance of promotions and discounts to attract new customers and keep loyal customers. For this reason, when presenting its new autumn-winter collection, it placed a Coupon QR code in the window of its stores. The CTA that accompanied the code encouraged many passersby to scan it to get the juicy introductory discount. But, in addition, many of them registered their email to receive discount offers by email. Our dynamic QR code allowed Shop Local to verify the achievements of its campaign, through its tracking function, and to update the page information and its coupon offers periodically, so that customers keep coming back to shop.</p>
                </li>

                <li class="jss255">
                    <h4 class="jss256">Real Estate Agencies</h4>
                    <p class="jss257">The fictitious real estate company Real Build wanted to improve its marketing strategy in a simple and low-cost way. But they did not want to return to showing their properties available in the usual printed format, but rather they wanted customers to really be able to view the properties and find the home of their dreams. To do this, they printed a Video QR code on the window of their customer service offices, whose CTA announced “Explore our properties”: the link redirected them to a video playlist, where customers They could view a detailed tour of each property, before booking an appointment to view it.</p>
                </li>

                <li class="jss255">
                    <h4 class="jss256">Tourism</h4>
                    <p class="jss257">The Flamingo Beach tourism agency made a gallery of images of destinations, excursions and activities available to anyone who passes by the window of its commercial offices. The Image Gallery QR code directed them to a page compatible with any mobile device, where they could zoom in on each image, share them on social networks, and download them to their device. This allowed interested people to imagine the experiences, make inquiries or request quotes on the site using a personalized button and, in many cases, decide to book a trip or excursion with Flamingo Beach.</p>
                </li>

                <li class="jss255">
                    <h4 class="jss256">Cities and Culture</h4>
                    <p class="jss257">A group of residents from North City created a podcast dedicated to talking about the customs, myths and stories of the city. Seeing the tourist potential of this undertaking, to create alternative and attractive tourist routes for visitors, the North City council placed in the window of its tourist offices, a huge vinyl with a MP3 QR code that linked people to the latest episode of the podcast, which was updated month by month. Listeners could connect to their city's official website, using a personalized button, to download all episodes of the podcast, available on Google Play Music, Amazon Music and other download platforms.</p>
                </li>

                <li class="jss255">
                    <h4 class="jss256">Photographers and videographers</h4>
                    <p class="jss257">The JHP Photographer studio knows the importance of making its services attractive and versatile, as well as economically accessible to the public, so that the business is profitable. Therefore, they placed a dynamic URL QR code in their storefront, linking customers directly to a well-designed website, showcasing their best work and allowing potential clients to request quotes and book their services, using a custom button.</p>
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
                                    How can I use QR codes on my store window?
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none"><path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9"></path></svg>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                First of all, you must enter our QR code generator. Once you have designed your QR code and downloaded the file, you must print it on a sticker or vinyl, which you can finally paste on the window of your business, to link customers with its content: the QR code will allow you to provide relevant information , optimized for mobile devices, whether it is contact information, opening hours, exclusive offers, access to your networks or other interactive experiences that encourage interaction with customers, awareness of your brand and increased sales.
                                </AccordionItemPanel>

                            </AccordionItem>

                            
                             <AccordionItem>

                            <AccordionItemHeading>
                                    <AccordionItemButton>
                                    Do QR codes stop working after a certain time?
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none"><path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9"></path></svg>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                Static QR codes do not expire, but they cannot be updated or edited, nor do they have tracking functionality. Instead, our dynamic QR codes allow you to edit them, even after they are printed, and monitor their statistics, such as number of scans, frequency, location, time and operating system used in each scan. If you want to try all the benefits of using dynamic QR codes, you can access our free 7-day trial, with unlimited access to all features. Once this period is over, you can choose a plan that suits your needs, so your QR codes will have an unlimited number of scans.
                                </AccordionItemPanel>

                            </AccordionItem>


                             <AccordionItem>

                            <AccordionItemHeading>
                                    <AccordionItemButton>
                                    Can QR codes increase sales in my store?
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none"><path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9"></path></svg>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                Today, QR codes are an essential element in many marketing strategies, as they contribute to increasing brand awareness and improving the customer experience by promoting special offers, generating interaction and facilitating the purchasing process; All of this can contribute to increasing sales and the success of your business. In addition, you can make your supply chain visible, which, in this era when transparency and commitment to the environment are valued, will increase the good reputation of your brand and attract new customers. You can draw attention to your products and services, sharing a gallery of images or videos, to improve trust among both consumers and B2B companies.
                                </AccordionItemPanel>

                            </AccordionItem>


                             </Accordion>




                    </div>
                    <div className="main-know-box">


                        <div className="know-box">
                            <h2>Have more questions?    </h2>
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

export default Business14

