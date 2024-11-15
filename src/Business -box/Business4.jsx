import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { IoChevronForwardSharp } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa6";


import Header from '../header/header';
import Footer from '../Footer/Footer';

import j1 from '../img/Vector.svg';
import j2 from '../img/page51.png';
import j3 from '../img/page52.png';
import j4 from '../img/page53.png';
import j5 from '../img/page54.png';
import j6 from '../img/page55.png';
import j7 from '../img/page56.png';

import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';

const Business4 = () => {
    return (
        <>


            <Header />
            <div class="busines-inner">
        <div class="inner-bussines">
            <h2>QR codes on <span>Product packaging</span></h2>
            <button class="jss2570">
                <span class="jss2570-span">Select other examples
                    <img src={j1} alt=""/>
                </span>

            </button>
        </div>
    </div>



    <div class="busines-inner-1">
        <div class="qr-cont">
            <div class="jss160">
                <div class="jss161">
                    <div class="jss164">
                        <a href="#" class="btnnn-1">Benefits</a>
                        <a href="#best-practices">Best practices</a>
                        <a href="#use-cases">Use Cases</a>
                        <a href="#">FAQ</a>
                    </div>
                </div>
                <p>Add clear and relevant information to your packaging with QRFY: it will make your products more attractive to consumers and improve their experience with the product, by sharing all the necessary information with them.</p>
            </div>


            <div class="jss163">
                <div class="jss180 half">
                    <div class="jss181">
                        <img class="jss182" src={j2} alt=""/>
                    </div>
                    <div class="jss183">
                        <a href="#">Create QR code</a>
                    </div>
                </div>

                <div class="jss180 half">
                    <div class="jss181">
                        <img class="jss182" src={j3} alt=""/>
                    </div>
                    <div class="jss183">
                        <a href="#">Create QR code</a>
                    </div>
                </div>

                <div class="jss180">
                    <div class="jss181">
                        <img class="jss182" src={j4} alt=""/>
                    </div>
                    <div class="jss183">
                        <a href="#">Create QR code</a>
                    </div>
                </div>



                <div class="jss180 half">
                    <div class="jss181">
                        <img class="jss182" src={j5} alt=""/>
                    </div>
                    <div class="jss183">
                        <a href="#">Create QR code</a>
                    </div>
                </div>

                <div class="jss180 half">
                    <div class="jss181">
                        <img class="jss182" src={j6} alt=""/>
                    </div>
                    <div class="jss183">
                        <a href="#">Create QR code</a>
                    </div>
                </div>

                <div class="jss180">
                    <div class="jss181">
                        <img class="jss182" src={j7} alt=""/>
                    </div>
                    <div class="jss183">
                        <a href="#">Create QR code</a>
                    </div>
                </div>
                </div>
                </div>
                </div>


            <section className='hello-my-faq-code'>
            <div class="jss251">


                <div className="benefitsofusing">
                    <h2>The benefits of using QR codes in Flyers</h2>
                    <p>Easy to create and distribute, digital flyers have not gone out of style. Distributing them in your marketing campaigns appropriately will always allow you to reach a larger audience. The effectiveness of your digital flyer can be even greater by adding a QR code. A scan will make the difference with the traditional flyer: QRFY optimizes your marketing strategy, as it will allow your ad to contact people directly with your online platforms, offers, promotions, social networks and much more.</p>

                    <h3>Renew your traditional flyers with QRFY</h3>

                    <p>This combination of traditional and digital marketing can increase interaction with your audience and will attract new customers to your product or service. With a traditional, well-designed flyer and the inclusion of a QR code, you can catch people's attention and expand the reach of your business, increase popularity on your social networks and attract new customers.</p>


                    <p>Additionally, a dynamic QR code will allow you to record the reach of your flyer, by computing the number and location of scans and even what device the code was scanned with each time. Monitoring these statistics will also allow you to check the effectiveness of the campaign and make changes to the strategy, if necessary; for example, modifying the distribution area or changing the design.</p>
                </div>

                    <div className="Everything-faq-box more-faq more-2">

                        <Accordion allowZeroExpanded>

                            <AccordionItem>

                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                    Can a QR code on a flyer direct people to a website?
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none"><path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9"></path></svg>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                The answer is yes: it is one of the many advantages of adding a QR code to your flyers. Most of our QR codes contain a link to the home page of a website or any subpage within a given site. Simply access our QR code generator and create a dynamic <span>URL QR code    </span>.
                                </AccordionItemPanel>

                            </AccordionItem>

                            <AccordionItem>

                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                    How much information can a QR code on a flyer store?
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none"><path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9"></path></svg>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                A QR code can store up to 4,296 alphanumeric signs, which can be decoded by any type of smartphone or tablet. Their wide accessibility means that more and more people and companies incorporate them into their marketing campaigns.
                                </AccordionItemPanel>

                            </AccordionItem>

                            <AccordionItem>

                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                    What is the purpose of placing a QR code on flyers?
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none"><path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9"></path></svg>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                Today, QR codes are a vital tool for marketing, as they offer customers direct contact with companies and their online platforms, as well as allowing you to access your campaign statistics in real time and make adjustments whenever necessary. necessary. A QR code on a flyer allows your clients and potential clients access to all types of online content, so that your promotional campaign is a success.
                                </AccordionItemPanel>

                            </AccordionItem>


                            <AccordionItem>

                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                    What benefit would it bring me to place a QR code on my flyer?
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none"><path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9"></path></svg>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                First of all, it is an effective way to increase and accelerate the return on investment (ROI), since it improves the connection between customers and your companies: not only does it allow you to share more information without saturating the content of your flyer. Secondly, it improves user interaction and promotes “word of mouth”, by allowing your clients to share it digitally with their family and friends, attracting other potential clients. Thirdly, it allows you to collect scan statistics in real time, as well as allowing you to know where, when and from what type of device the scans were performed. This way, you can ensure that your brochures reach your target audience
                                </AccordionItemPanel>

                            </AccordionItem>



                        </Accordion>
                    </div>
         
                </div>
    
            </section>


      

            <div class="jss235" id="how-to">
        <div class="jss236">
            <h3 class="jss237">How to create a QR code for product packaging?</h3>
            <ul class="jss238">
                <li class="jss239">
                    <span class="jss240">1</span>
                    <p class="jss241">Sign up to enter the QR code generator and select the QR code you want to add to your packaging. You can start with a <a href="#">QR from URL</a> to get started.</p>
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
                    <p class="jss241">Click “Download” and receive your QRFY code in .jpeg format in seconds.</p>
                </li>
                <li class="jss239">
                    <span class="jss240">6</span>
                    <p class="jss241">Finally, integrate your new QRFY code into your packaging design.</p>
                </li>
            </ul>
           
        </div>
    </div>

    <div class="jss242" id="best-practices">
        <div class="jss243">
            <h3 class="jss244">Best practices for QR codes on <span class="blue">Packaging</span></h3>
            <p class="jss245">The QR code is no longer monochrome. Now you can choose from a wide variety of design options to capture the attention of your clients and future clients. If you are going to use QR codes on your product packaging, as part of your marketing strategy, here are some tips to create your design effectively.</p>
        <ul class="jss246">

            <li class="jss247">
                <h4 class="jss248">1. Add instructions</h4>
                <p class="jss249">QR code users often forget this essential detail for the success of their marketing campaign: adding a brief written explanation so that the consumer knows what they will find or gain when they scan their code. When creating your code with QRFY, don't forget to encourage consumers to scan your Code and not miss it. This way your marketing campaign will not be ignored: “join our networks”, “download our coupons”, “learn more about this product”. The number of scans will largely depend on this.</p>
            </li>

            <li class="jss247">
                <h4 class="jss248">2. Frame it</h4>
                <p class="jss249">Access our customizable frames so that your QRFY code matches the design of your packaging or adapts to the aesthetics of your brand or company. Once your QRFY code is generated, you can choose from a wide variety of customizable frames and colors, with different CTA messages to attract users' attention. Plus, if you want to add other details, you have the option to choose a different icon, customize the shape, and add completely custom text.</p>
            </li>

            <li class="jss247">
                <h4 class="jss248">3. Add a logo inside your QR code</h4>
                <p class="jss249">Once you have customized the frame, shape and color, you can also choose to include your own logo in the center of your QR code. While you can opt for one of the options offered by our QR code generator, you can also upload your own logo and even create your own CTA, such as "Visit our channel" or "Discover our offers." When including your logo, you don't have to worry about image size: our system automatically detects the best size, to ensure your logo remains scannable.</p>
            </li>

            <li class="jss247">
                <h4 class="jss248">4. Save your designs</h4>
                <p class="jss249">Sign up for QRFY and you'll be able to reuse your saved QR code designs without needing to manually recreate an old one. With QRFY you can save all your designs as templates and reuse them in new marketing campaigns: if you want to promote a new product from the same line or have included new services for clients, you can reuse a saved design, instead of starting another design from scratch.</p>
            </li>

            <li class="jss247">
                <h4 class="jss248">5. Test before printing</h4>
                <p class="jss249">When printing your QR code, you must keep in mind that the minimum recommended print size is 2 x 2 centimeters. It is not recommended to make it smaller, but you can always make it larger, so that your QR code is always readable and can be scanned without difficulty. To ensure that all users can access your QR code, you should test with various smartphone models and apps.</p>
            </li>

        </ul>



        <p class="jss249">Learn more about optimizing your QR codes by visiting our <a href="#">Help Center.</a></p>
        
    
    
    </div>
    </div>


    <div class="jss250" id="use-cases">
        <div class="jss251">
            <h3 class="jss252">Discover QR codes for Packaging in action</h3>
            <p class="jss253">QR codes offer much more in terms of improving the consumer experience with your product packaging. Inspire your packaging designs with the following fictional companies that have incorporated QR codes into their product packaging.</p>
        
            <ul class="jss254">
                <li class="jss255">
                    <h4 class="jss256">Consumer packaged goods</h4>
                    <p class="jss257">ZenYog ran a marketing campaign to offer its customers discount coupons on its dairy products. In order to make it easier for them to save and redeem their coupons, they decided to add a Coupon QR code on the packaging of their products. Customers who scanned the QR code were able to access more information about products, promotions, save their coupons and even share them instantly with friends. Thus, it is no longer necessary for customers to keep papers and worry about remembering to take them with them when shopping: if they have their mobile phone, they have their coupons. Additionally, having used a dynamic QR code, you were able to measure the success of your campaign with the tracking feature, which shows how often, where and when your codes are scanned.</p>
                </li>

                <li class="jss255">
                    <h4 class="jss256">Software and game developers</h4>
                    <p class="jss257">After the launch of its new game, Space Heroes wanted to know the opinion of its users about the new gaming experience, its design and the purchasing process in the new virtual store. Therefore, the company decided to include a Feedback QR code in their packages: this way, they were able to collect customer contact information and create mailing lists to send future offers and promotions, as well as make adjustments to improve upcoming releases, based on the comments sent to Space Heroes.</p>
                </li>

                <li class="jss255">
                    <h4 class="jss256">Electronic products</h4>
                    <p class="jss257">The fictitious company Siekens Electronics has proposed to renew the user manuals for its products. With the aim of facilitating the accessibility of users, at any time and place, they decided to add to the traditional printing and the online digital version, a Video QR Code on the packaging of their products, to access, through a simple scan, to a video playlist, where users will find instructions for use, care tips and the different functions of their electronic products. By only printing the QR codes directly on the package, with the link to the PDF manual and videos, they were able to save a lot of money on printing costs over time.</p>
                </li>

                <li class="jss255">
                    <h4 class="jss256">Retailers</h4>
                    <p class="jss257">Shop Local launched its new season with great success, becoming one of the most popular clothing stores in the city. With the intention of expanding its market and gaining fame nationally and internationally, it updated its online store and added our dynamic URL QR code to its packages. Thus, their current customers could access their online store and their social networks with a single scan. This increased the number of followers on their networks and traffic on their website, increasing their interactions and visibility to other users. The success of the campaign is largely due to the fact that the customers themselves are an active part of the dissemination, by interacting with the publications and joining raffles and promotions.</p>
                </li>

                <li class="jss255">
                    <h4 class="jss256">Hotels and Resorts</h4>
                    <p class="jss257">Sky Resort needed to increase its reservations and sales of its spa products. That is why it decided to add a Business QR code on the packaging of its products, with the resort's commercial information, address, opening hours and a link to its online store, to purchase products and make reservations. . In this way, many visitors who brought products from the physical store with them were able to buy online again, from any location and without problems, with a simple scan from their smart devices.</p>
                </li>
                </ul>

                <p class="jss257">Using QRFY, you can change and update all the information in your QR code at any time, even after it has been generated and printed. Sign up for QRFY to take advantage of all these benefits and try all the features for free for 7 days. Visit our Business QR Codes page and explore more business recommendations.</p>
            
        </div>
    </div>



            <section className='hello-my-faq-code'>
            <div class="jss251">
                <div className="your-faq-box">
                    <div className="Everything-faq-box more-faq">
<h3>FAQ</h3>
                        <Accordion allowZeroExpanded>

                            <AccordionItem>

                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                    Can a QR code on a flyer direct people to a website?
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none"><path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9"></path></svg>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                The answer is yes: it is one of the many advantages of adding a QR code to your flyers. Most of our QR codes contain a link to the home page of a website or any subpage within a given site. Simply access our QR code generator and create a dynamic <span>URL QR code    </span>.
                                </AccordionItemPanel>

                            </AccordionItem>

                            <AccordionItem>

                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                    How much information can a QR code on a flyer store?
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none"><path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9"></path></svg>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                A QR code can store up to 4,296 alphanumeric signs, which can be decoded by any type of smartphone or tablet. Their wide accessibility means that more and more people and companies incorporate them into their marketing campaigns.
                                </AccordionItemPanel>

                            </AccordionItem>

                            <AccordionItem>

                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                    What is the purpose of placing a QR code on flyers?
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none"><path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9"></path></svg>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                Today, QR codes are a vital tool for marketing, as they offer customers direct contact with companies and their online platforms, as well as allowing you to access your campaign statistics in real time and make adjustments whenever necessary. necessary. A QR code on a flyer allows your clients and potential clients access to all types of online content, so that your promotional campaign is a success.
                                </AccordionItemPanel>

                            </AccordionItem>


                            <AccordionItem>

                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                    What benefit would it bring me to place a QR code on my flyer?
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none"><path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9"></path></svg>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                First of all, it is an effective way to increase and accelerate the return on investment (ROI), since it improves the connection between customers and your companies: not only does it allow you to share more information without saturating the content of your flyer. Secondly, it improves user interaction and promotes “word of mouth”, by allowing your clients to share it digitally with their family and friends, attracting other potential clients. Thirdly, it allows you to collect scan statistics in real time, as well as allowing you to know where, when and from what type of device the scans were performed. This way, you can ensure that your brochures reach your target audience
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

export default Business4