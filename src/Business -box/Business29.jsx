import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { IoChevronForwardSharp } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa6";


import Header from '../header/header';
import Footer from '../Footer/Footer';

import cb1 from '../img/Vector.svg';
import cb2 from '../img/Cans1.png';
import cb3 from '../img/Cans2.png';
import cb4 from '../img/Cans3.png';
import cb5 from '../img/Cans5.png';
import cb6 from '../img/Cans4.png';
import cb7 from '../img/Cans6.png';

import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';




const Business29 = () => {
    return (
        <>


            <Header />

            <div class="busines-inner">
        <div class="inner-bussines">
            <h2>QR Codes on <span>Bottles and Cans</span></h2>
            <button class="jss2570">
                <span class="jss2570-span">Select other examples
                    <img src={cb1} alt=""/>
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
                <p>Revitalize your beverage marketing by offering your loyal consumers a QR code on their labels, to provide them with more information, entertainment and much more in a simple scan.</p>
            </div>


            <div class="jss163">
                <div class="jss180 half">
                    <div class="jss181">
                        <img class="jss182" src={cb2} alt=""/>
                    </div>
                    <div class="jss183">
                        <a href="#">Create QR code</a>
                    </div>
                </div>

                <div class="jss180 half">
                    <div class="jss181">
                        <img class="jss182" src={cb3} alt=""/>
                    </div>
                    <div class="jss183">
                        <a href="#">Create QR code</a>
                    </div>
                </div>

                <div class="jss180">
                    <div class="jss181">
                        <img class="jss182" src={cb4} alt=""/>
                    </div>
                    <div class="jss183">
                        <a href="#">Create QR code</a>
                    </div>
                </div>



                <div class="jss180 half">
                    <div class="jss181">
                        <img class="jss182" src={cb5} alt=""/>
                    </div>
                    <div class="jss183">
                        <a href="#">Create QR code</a>
                    </div>
                </div>

                <div class="jss180 half">
                    <div class="jss181">
                        <img class="jss182" src={cb6} alt=""/>
                    </div>
                    <div class="jss183">
                        <a href="#">Create QR code</a>
                    </div>
                </div>

                <div class="jss180">
                    <div class="jss181">
                        <img class="jss182" src={cb7} alt=""/>
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
                    <h2>Benefits of using QR codes on Bottles and Cans</h2>
                    <p> QR codes are the perfect bridge between digital and print, an effective way to add originality and benefits to your traditional marketing. If you want to make your products and their ingredients more transparent, QR codes are the solution. This form of intelligent labeling helps link consumers with information about their production process: ingredients, the origin of their raw materials, the manufacturer and the supply chain. But that's just one of the many ways you can use QR codes to benefit your brand. Donald Kendall, president and CEO of PepsiCo from 1971 to 1986, understood the crucial importance of marketing strategy to a brand's success by defining the image you want to show to consumers. Today, a QRFY Code on your bottles can add added value to your products, allowing customers to get to know you and choose you based on what you have to offer them and the image you want them to have of your brand.</p>
                    
                </div>

                    <div className="Everything-faq-box more-faq more-2">

                        <Accordion allowZeroExpanded>

                            <AccordionItem>

                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                    Create desire in consumers
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none"><path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9"></path></svg>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                To improve brand appeal, a suitable QR code can help you design a marketing strategy, which includes active customer participation: the interactive experience will generate consumer interest and brand loyalty.
In 2012, Pepsi launched an innovative campaign that revolutionized the industry using QR codes on its products. By scanning these codes on Pepsi bottles, consumers accessed exclusive content, participated in contests and enjoyed special promotions. This strategy not only sparked strong interest among consumers, but also consolidated Pepsi's image as an innovative brand focused on the needs of its customers.
                                </AccordionItemPanel>

                            </AccordionItem>

                            <AccordionItem>

                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                    Smart label
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none"><path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9"></path></svg>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                Label space on bottles and cans is very limited. For this reason, QR codes allow consumers of different beverages to access information and benefits that, otherwise, would not be available or would be difficult to access. QR codes can be small enough to be included in an existing design, and can adapt their shape and colors to the aesthetic of the brand or campaign. This allows your consumers to access basic information about your drinks (ingredients, nutritional data, origin, etc.), as well as promotions and sites of interest, with just a scan from their smartphones.
Currently, more and more people are looking for transparency in what they consume and the lack of it can have a negative impact on sales. It is no longer enough to say that your drinks are “of good quality”; By using our Video QR code you can show buyers the production process, from the orchards to the factory and bottling plant, so they can check quality control, hear testimonials from your workers and much more, with just one scan. Consumers will no longer wonder where and how this was done, they will be able to see it with their own eyes. With just one of our QR codes, give consumers all the information they want, even before purchasing.
                                </AccordionItemPanel>

                            </AccordionItem>

                            <AccordionItem>

                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                    Smart comments
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none"><path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9"></path></svg>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                With a Feedback QR code, consumers will be able, in less than a minute, to scan the code, rate and comment on your new product or flavor. Once you complete that short survey, you will receive the ratings in the specified email, to analyze the data and celebrate success or redesign your product.
                                </AccordionItemPanel>

                            </AccordionItem>


                            <AccordionItem>

                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                    Smart tracking
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none"><path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9"></path></svg>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                With our dynamic QR codes you can obtain detailed information about how many users scanned your code, their location, date, time and what operating system and type of device they used for the scan. This way you can learn more about your customers, measure the reach of your products and improve your marketing campaigns.
                                </AccordionItemPanel>

                            </AccordionItem>

                            </Accordion>
                    </div>
         
                </div>
    
            </section>


            <div class="jss235" id="how-to">
        <div class="jss236">
            <h3 class="jss237">How to create a QR Code for Bottles and Cans?</h3>
            <ul class="jss238">
                <li class="jss239">
                    <span class="jss240">1</span>
                    <p class="jss241">Sign up to enter the QR code generator and select the QR code you want to add to your bottles or cans. You can start with a QRFY URL code.</p>
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
                    <p class="jss241">Click “Download” and receive your QR code in .jpg format in seconds.</p>
                </li>
                <li class="jss239">
                    <span class="jss240">6</span>
                    <p class="jss241">Finally, integrate your new QR code into the design of your bottle or can.</p>
                </li>
            </ul>
           
        </div>
    </div>

    <div class="jss242" id="best-practices">
        <div class="jss243">
            <h3 class="jss244">QR Code Best Practices on <span class="blue">Bottles and Cans</span></h3>
            <p class="jss245">The QR code is no longer monochrome and now has a variety of design options that you can use to grab your audience's attention. Here is a list of tips to keep in mind if you want to use QR codes on your bottles or cans.</p>
        <ul class="jss246">

            <li class="jss247">
                <h4 class="jss248">1. Add instructions</h4>
                <p class="jss249">Many times QR code users forget this essential detail for the success of their campaign: adding a brief written explanation of what the consumer will gain by scanning their code. When creating your QRFY code, don't forget to encourage readers to scan your Code, so they don't miss it and your marketing campaign isn't ignored.</p>
            </li>

            <li class="jss247">
                <h4 class="jss248">2. Frame it</h4>
                <p class="jss249">Access our customizable frames so that your QR code matches the design of your book, its illustrations or adapts to the aesthetics of the publisher. Once your QR code is generated, you can choose from a wide variety of customizable frames and colors, with different CTA messages to attract users' attention. Additionally, if you want to add other details, you have the option to choose a different icon, customize the shape, and add fully customized CTA text: “Enter here at your own risk,” “Read more about this story,” “Scan me if you want more.” mystery".</p>
            </li>

            <li class="jss247">
                <h4 class="jss248">3. Add a logo inside your QR code</h4>
                <p class="jss249">Once you have customized the frame, shape and color of your code, you can also choose to include your own icon or an illustration in the center of your QR code. Although you can select one of the options offered by our QR code generator, you can also upload your own logo and even create your own CTA, such as "Visit my networks" or "Discover more Horror literature." When including your logo, you don't have to worry about image size: our system automatically detects the best size, to ensure your logo remains scannable.</p>
            </li>

            <li class="jss247">
                <h4 class="jss248">4. Save your designs</h4>
                <p class="jss249">Sign up for QRFY and you'll be able to reuse your saved QR code designs without needing to manually recreate an old one. With QRFY you can save all your designs as templates and reuse them in new marketing campaigns: if you want to promote a new book in the same saga or series, you can reuse a saved design, instead of starting another design from scratch.</p>
            </li>

            <li class="jss247">
                <h4 class="jss248">5. Customizable URL</h4>
                <p class="jss249">Each dynamic QR code creates a short URL, randomly, that redirects the user to your page when scanning the QR code. This short URL can also be customized: you can include the title of the book or the name of the author, to generate more trust among users and stand out from the competition.</p>
            </li>

            <li class="jss247">
                <h4 class="jss248">6. Test before printing</h4>
                <p class="jss249">When printing your QR code, you must keep in mind that the minimum recommended print size is 2 x 2 centimeters. It is not recommended to make it smaller, but you can always make it larger, so that your QR code is legible and can be scanned without difficulty. To ensure that all users can access your QR code, you should test with various smartphone models and apps.    </p>
            </li>

            </ul>



        <p class="jss249">Learn more about optimizing your QR codes by visiting our <a href="#">Help Center.</a></p>
        
    
    
    </div>
    </div>


    <div class="jss250" id="use-cases">
        <div class="jss251">
            <h3 class="jss252">Discover QR codes on Bottles and Cans in action</h3>
            <p class="jss253">If you still can't imagine the scope and benefits of using a QR code on your bottles and cans, here are some fictional narratives to help your company stand out and generate desire among your consumers.</p>
        
            <ul class="jss254">
                <li class="jss255">
                    <h4 class="jss256">Restaurants</h4>
                    <p class="jss257">The restaurant Los Burgueses, seeing the popularity achieved by its natural cranberry juice, decided to sell it in local supermarkets. To encourage consumers to use it at parties and events, they decided to offer with a PDF QR code a series of recipes for drinks and cocktails, printed on the bottle label, which allowed them to have enough space to add as many recipes as they wanted and update them without having to reprint or generate a new code. In addition, it allowed consumers to share the recipes with their friends or on their own social networks.</p>
                </li>

                <li class="jss255">
                    <h4 class="jss256">Consumer packaged goods</h4>
                    <p class="jss257">ZenYog launched its new line of fortified drinkable fruit yogurts. The company wanted to verify the reception of their new product and to obtain feedback, they used our Feedback QR code on the bottles of their new products. People were thus able, with a simple scan and in a minute of their time, to send their opinion and comments directly to ZenYog's commercial email.</p>
                </li>

                <li class="jss255">
                    <h4 class="jss256">Tourism</h4>
                    <p class="jss257">For some time now, wine tours have become fashionable, increasing the number of tourists in different locations in the country. For this reason, the North City tourism agency began offering an excursion to the outskirts of the city, which included a guided tour of two wineries and their vineyards, as well as a wine tasting on their terraces. To make sure they caught consumers' attention, they printed a Event QR code on bottles at both wineries to promote these excursions, as well as including a custom button on the landing page to reserve your spot.</p>
                </li>

                <li class="jss255">
                    <h4 class="jss256">Event management</h4>
                    <p class="jss257">The fictitious events company Always Together, famous for organizing weddings and conferences, offered attendees at the last trauma congress individual bottles of champagne from its sponsor brand. These included our Coupon QR code to offer attendees a 25% discount on the purchase of their wines and sparkling wines. This allowed guests to save, share and redeem coupons easily and without generating extra waste, in addition to increasing the company's sales.</p>
                </li>

                <li class="jss255">
                    <h4 class="jss256">Gym and wellness studios.</h4>
                    <p class="jss257">The gym 4x4 Training launched its new brand of protein shakes, to encourage its clients and students to continue improving their physical condition and muscles. That's why they printed our URL QR code on the labels of their protein shake bottles, so that, when scanning the code, each consumer accesses the section of their page where they can find tips and a list of benefits of sustained training.</p>
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
                                    How can I use QR codes on bottles and cans?
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none"><path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9"></path></svg>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                Many times, companies used QR codes on bottles and cans to provide detailed product information, promote discounts and special offers, share access to videos, or collect customer reviews. But many others also gave free rein to their creativity: a whiskey brand offered to place personalized messages for Father's Day on its bottles, using a QR code; a rum brand linked the QR code to cocktail recipes and creative mixes, encouraging customers to experiment and create their own drinks at home; and a well-known beer brand organized an event in a bar to bring together its single customers. The possibilities are endless.
                                </AccordionItemPanel>

                            </AccordionItem>

                            
                             <AccordionItem>

                            <AccordionItemHeading>
                                    <AccordionItemButton>
                                    Is a QR code on bottles an effective way to share information?
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none"><path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9"></path></svg>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                Definitely. First, consider how much you could save on printing costs and how much more information you can offer your customers with a QR code. It is also a fact that consumers are more loyal when they trust the company. And that loyalty is achieved with transparency. That is why it is ideal that you share with them all the information you think is necessary.
                                </AccordionItemPanel>

                            </AccordionItem>

                            <AccordionItem>

                            <AccordionItemHeading>
                                    <AccordionItemButton>
                                    Can I get creative with QR codes on bottles and cans?
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none"><path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9"></path></svg>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                Definitely! You can be as creative as you want with QR codes. You can share an interactive video that shows the process of making your wines, cocktail recipes to use your rum, information about your sustainable and ecological practices in the production of your drinks, a trivia game for small consumers of your fruit juices, raffles and promotions of all kinds... If you already have an idea, start creating your own design.
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

export default Business29

