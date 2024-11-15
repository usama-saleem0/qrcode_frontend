import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { IoChevronForwardSharp } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa6";


import Header from '../header/header';
import Footer from '../Footer/Footer';

import zs1 from '../img/Vector.svg';
import zs2 from '../img/Street1.png';
import zs3 from '../img/Street2.png';
import zs4 from '../img/Street3.png';
import zs5 from '../img/Street5.png';
import zs6 from '../img/Street4.png';
import zs7 from '../img/Street6.png';

import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';




const Business34 = () => {
    return (
        <>


            <Header />

            <div class="busines-inner">
        <div class="inner-bussines">
            <h2>QR codes in <span>Street signs</span></h2>
            <button class="jss2570">
                <span class="jss2570-span">Select other examples
                    <img src={zs1} alt=""/>
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
                <p>Improve people's experience on the streets of your city or town, including QR codes on your street signs: these will allow them to connect with digital information, access locations, regulations, suggestion boxes and much more.</p>
            </div>


            <div class="jss163">
                <div class="jss180 half">
                    <div class="jss181">
                        <img class="jss182" src={zs2} alt=""/>
                    </div>
                    <div class="jss183">
                        <a href="#">Create QR code</a>
                    </div>
                </div>

                <div class="jss180 half">
                    <div class="jss181">
                        <img class="jss182" src={zs3} alt=""/>
                    </div>
                    <div class="jss183">
                        <a href="#">Create QR code</a>
                    </div>
                </div>

                <div class="jss180">
                    <div class="jss181">
                        <img class="jss182" src={zs4} alt=""/>
                    </div>
                    <div class="jss183">
                        <a href="#">Create QR code</a>
                    </div>
                </div>



                <div class="jss180 half">
                    <div class="jss181">
                        <img class="jss182" src={zs5} alt=""/>
                    </div>
                    <div class="jss183">
                        <a href="#">Create QR code</a>
                    </div>
                </div>

                <div class="jss180 half">
                    <div class="jss181">
                        <img class="jss182" src={zs6} alt=""/>
                    </div>
                    <div class="jss183">
                        <a href="#">Create QR code</a>
                    </div>
                </div>

                <div class="jss180">
                    <div class="jss181">
                        <img class="jss182" src={zs7} alt=""/>
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
                    <h2>Benefits of using QR codes on Street signs</h2>
                    <p>Urban centers usually use street signs as an information point. With the technology of QR codes, they can also connect people in a precise physical location with any element of the digital world. Thus, this type of signage expands to provide citizens and tourists with greater information, guidance and other services.
                    In Tokyo, for example, QR codes have been implemented on traffic signs to provide information in multiple languages to tourists and visitors: by scanning a QR code on a street sign in a tourist area, they can access information about local attractions, nearby restaurants, public transportation schedules and useful tips for exploring the area. This enhances tourists' experience by providing them with easily accessible and relevant information as they explore the city.</p>
                     
                </div>

                    <div className="Everything-faq-box more-faq more-2">

                        <Accordion allowZeroExpanded>

                            <AccordionItem>

                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                    Share information
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none"><path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9"></path></svg>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                A URL QR code or a Link Listing QR code on your city's welcome sign offers visitors an easy and convenient way to get updated information in real time , such as safety protocols, cultural news, information about events, city activities and much more. All people need to do is access your website or social media channels, with a simple scan.
                                </AccordionItemPanel>

                            </AccordionItem>

                            <AccordionItem>

                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                    Show your city
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none"><path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9"></path></svg>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                The variety of types of QR codes allows you to choose the most appropriate one to carry out your idea and, applying it to urban signage, improve the experience of tourists and visitors. With a QR you can share curious and fun facts about the city, offer an audio guide to accompany the tour, share the locations of tourist attractions and much more, at a much lower cost than printing thousands of brochures and posters overloaded with information.
                                </AccordionItemPanel>

                            </AccordionItem>

                             <AccordionItem>

                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                    Greater accessibility
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none"><path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9"></path></svg>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                According to recent estimates, it is estimated that there are around five billion smartphone users worldwide, a number that is constantly increasing. This means that the greater the number of smartphones with an internet connection, the greater the access to online content from mobile phones. At the same time, the use of QR codes is also growing, which has become widespread since the COVID-19 pandemic in 2020. Therefore, it is not surprising that current smartphones come already equipped with QR scanners, which facilitates the scanning directly from the device's camera; nor that more and more companies decide to include them in their marketing campaigns.
                                </AccordionItemPanel>

                            </AccordionItem>

                            <AccordionItem>

                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                    Improve your services
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none"><path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9"></path></svg>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                A Feedback QR code can be an excellent way to listen to the inhabitants and visitors of your city, to offer them better public services. You can create a personalized form with categories and subcategories and share them using a QR code on your street signs so that people, by scanning it, can express their opinions and suggestions. The results will be sent directly to your email.
                                </AccordionItemPanel>

                            </AccordionItem>


                            <AccordionItem>

                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                    Easily integrate it into your aesthetic
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none"><path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9"></path></svg>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                Our dynamic QR code generator has, among other benefits, the advantage of being able to adapt it to any original design: you can add custom colors, original frames and borders, a logo or an image in the center and even a custom CTA, so that Your QR code adapts both to the aesthetics of your campaign or the representative colors of your city, as well as to the design of your signage, by allowing you to adapt the size and type of image file, before printing it.
                                </AccordionItemPanel>

                            </AccordionItem>


                            <AccordionItem>

                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                    Monitoring and planning
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none"><path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9"></path></svg>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                One of the main drawbacks of printed marketing materials has always been the inability to record their effectiveness, or the extent to which they influenced people's actions and choices. QR codes have changed that: today, to know if your ad was effective, simply include a dynamic QR code in your campaigns, which allows you to access tracking data in real time; metrics such as the location and time of each scan, the device and operating system used, in addition to counting total scans. Monitoring this data allows you to know how well your QR code is performing, so you can plan and make necessary adjustments in future campaigns.
                                </AccordionItemPanel>

                            </AccordionItem>

                            

                            </Accordion>
                    </div>
         
                </div>
    
            </section>


            <div class="jss235" id="how-to">
        <div class="jss236">
            <h3 class="jss237">How to create a QR code for Street signs?</h3>
            <ul class="jss238">
                <li class="jss239">
                    <span class="jss240">1</span>
                    <p class="jss241">Register to enter our QR Code Generator and select the type of QR code you want to incorporate into your signage. You can start with a QR code from URL.</p>
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
                    <p class="jss241">Then, select colors that match your city's identity or the aesthetic of your campaign.</p>
                </li>
                <li class="jss239">
                    <span class="jss240">5</span>
                    <p class="jss241">Click “Download” and receive your QR code in .jpeg format in seconds.</p>
                </li>
                <li class="jss239">
                    <span class="jss240">6</span>
                    <p class="jss241">Finally, integrate your new QR code into the design of your street signage.</p>
                </li>
            </ul>
           
        </div>
    </div>

    <div class="jss242" id="best-practices">
        <div class="jss243">
            <h3 class="jss244">Best QR Code Practices for <span class="blue">Street Signs</span></h3>
            <p class="jss245">When undertaking the design of your QR codes for street signs, you should take into account the following tips, so that your marketing campaign obtains the best results.</p>
        <ul class="jss246">

            <li class="jss247">
                <h4 class="jss248">1. Customize your design</h4>
                <p class="jss249">By customizing your QR code, with all the options available, you can adapt it to the design of your street signs: once your QR code is generated, you can choose from a wide variety of frames and borders, add a logo of your city, select its representative colors and a CTA message, to attract the attention of visitors and citizens.</p>
            </li>

            <li class="jss247">
                <h4 class="jss248">2. Use the right size</h4>
                <p class="jss249">When creating your QR code, you must keep in mind that the minimum recommended size is 2 x 2 centimeters. It is not recommended to make it smaller, but you can always make it larger, so that your QR code is always readable and can be scanned without difficulty.</p>
            </li>

            <li class="jss247">
                <h4 class="jss248">3. Add a call to action (CTA)</h4>
                <p class="jss249">Many times QR code users forget this essential detail for the success of their campaign: adding a brief written explanation of what the user will earn by scanning their code. When creating your QRFY code, don't forget to encourage visitors to scan your Code and not miss it.</p>
            </li>
             </ul>



        <p class="jss249">Learn more about optimizing your QR codes by visiting our <a href="#">Help Center.</a></p>
        
    
    
    </div>
    </div>


    <div class="jss250" id="use-cases">
        <div class="jss251">
            <h3 class="jss252">Explore QR codes for Street signs in action</h3>
            <p class="jss253">If you still need inspiration to create your own creative campaign with QR codes, here are some ideas for using QR codes for street signs.</p>
        
            <ul class="jss254">
                <li class="jss255">
                    <h4 class="jss256">Parks and recreation centers</h4>
                    <p class="jss257">If you have opened an attraction in your city, it is always good to know the level of satisfaction of its visitors: if you want to know what people think about your public recreational spaces, you can add a Feedback QR code on the signage of the entry, to be able to receive valuable ratings and comments, directly in your email.</p>
                </li>

                <li class="jss255">
                    <h4 class="jss256">Guided visits</h4>
                    <p class="jss257">Tourists usually have to wait for a specific departure time to be able to take a certain tour with the accompaniment of a guide, which can cause delays in their plans and discomfort due to the wait, or they may even give up and embark on the tour alone. , without taking advantage of the benefit of doing it with an expert. However, you can offer visitors the opportunity to explore the streets of your city, while listening to a guide in audio format: by placing MP3 QR codes on street signs, people will be able to access tours hearing aids without extra costs. Or find out about upcoming events in the city and their location with an Event QR code. In addition, offering the connection with your Instagram, TikTok or X account, using a Link List QR code, will allow them to always stay informed about the city's activities.</p>
                </li>

                <li class="jss255">
                    <h4 class="jss256">Improve your community participation</h4>
                    <p class="jss257">It is not easy to get people engaged and involved in community activities. Invite citizens to actively participate by creating your street signs with QR codes that encourage citizens to participate in civic activities and connect with the improvement of the city. With a Video QR code, you can share with them cleaning campaigns, recycling workshops, solidarity collections and much more, to increase the level of commitment in your city.</p>
                </li>

                <li class="jss255">
                    <h4 class="jss256">Improve the tourist experience</h4>
                    <p class="jss257">If you have an interactive guide, so that tourists can personalize their tours and access information about attractions, services, transportation, gastronomic venues and more, you can facilitate its download by adding a Apps QR code on the signs of strategic points (airports, bus stations, shopping malls, etc.). In this way, you will allow them to directly access the download of your application, from any application store, so that those interested do not have to search for it manually.</p>
                </li>

                <li class="jss255">
                    <h4 class="jss256">Optimize your website</h4>
                    <p class="jss257">Many town councils have a website dedicated to keeping their citizens and tourists informed about services, activities, events and even the weather forecast. All your information can be useful at some point, so it is necessary to make it accessible to people at all times. By printing a QR code with dynamic URL on signs at bus stops or in shopping centers, your site will be, with just one scan, on every citizen's device.</p>
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
                                    What type of information can I include in a QR code?
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none"><path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9"></path></svg>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                QR codes are very versatile tools that can contain a lot of useful data. They can range from website links, phone numbers and email addresses, to text messages, details of events in your diary and much more. In short, if it can be digitized, it can be encoded into a QR code!
                                </AccordionItemPanel>

                            </AccordionItem>

                            
                             <AccordionItem>

                            <AccordionItemHeading>
                                    <AccordionItemButton>
                                    How can QR codes improve accessibility in cities?
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none"><path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9"></path></svg>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                QR codes can open up a world of useful information in the palm of your hand. In urban environments, they could direct you to interactive maps, public transportation schedules, detailed tourist guides, and even provide special directions for people with disabilities. Imagine having a digital tour guide always available, it's like having instant access to all the information you need to explore the city!
                                </AccordionItemPanel>

                            </AccordionItem>

                            <AccordionItem>

                            <AccordionItemHeading>
                                    <AccordionItemButton>
                                    Can a QR code continue to work even if it is damaged?
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none"><path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9"></path></svg>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                Yes, a QR code can still work even if it is damaged to some extent. QR codes are designed with redundancy so that they can remain readable even if damaged or partially covered. However, if the damage is very extensive and significantly affects essential elements of the code, such as locating corners or data patterns, the QR code may not be read correctly.
                                </AccordionItemPanel>

                            </AccordionItem>


                            <AccordionItem>

                            <AccordionItemHeading>
                                    <AccordionItemButton>
                                    Are QR codes on traffic signs not a risk to road safety?
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none"><path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9"></path></svg>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                QR codes on traffic signs can be a very useful tool to provide additional information to drivers and pedestrians. However, it is essential to ensure that they are used responsibly and safely. If placed in safe locations where they do not interfere with the driver's attention, such as in parking lots or rest areas, they can be beneficial. The key is to ensure appropriate and considered use of QR codes, taking road safety into account at all times.
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

export default Business34

