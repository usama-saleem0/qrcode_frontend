import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { IoChevronForwardSharp } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa6";


import Header from '../header/header';
import Footer from '../Footer/Footer';

import cl1 from '../img/Vector.svg';
import cl2 from '../img/Works1.png';
import cl3 from '../img/Works2.png';
import cl4 from '../img/Works3.png';
import cl5 from '../img/Works5.png';
import cl6 from '../img/Works4.png';
import cl7 from '../img/Works6.png';

import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';




const Business26 = () => {
    return (
        <>


            <Header />

            <div class="busines-inner">
        <div class="inner-bussines">
            <h2>QR Codes in <span>Works of Art</span></h2>
            <button class="jss2570">
                <span class="jss2570-span">Select other examples
                    <img src={cl1} alt=""/>
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
                <p>Share your portfolio or business card, promote new exhibitions, offer a guide to your exhibition or museum, share videos and much more, with a simple scan. The QR codes integrated into your art exhibition or any artistic medium will improve the experience of your visitors.</p>
            </div>


            <div class="jss163">
                <div class="jss180 half">
                    <div class="jss181">
                        <img class="jss182" src={cl2} alt=""/>
                    </div>
                    <div class="jss183">
                        <a href="#">Create QR code</a>
                    </div>
                </div>

                <div class="jss180 half">
                    <div class="jss181">
                        <img class="jss182" src={cl3} alt=""/>
                    </div>
                    <div class="jss183">
                        <a href="#">Create QR code</a>
                    </div>
                </div>

                <div class="jss180">
                    <div class="jss181">
                        <img class="jss182" src={cl4} alt=""/>
                    </div>
                    <div class="jss183">
                        <a href="#">Create QR code</a>
                    </div>
                </div>



                <div class="jss180 half">
                    <div class="jss181">
                        <img class="jss182" src={cl5} alt=""/>
                    </div>
                    <div class="jss183">
                        <a href="#">Create QR code</a>
                    </div>
                </div>

                <div class="jss180 half">
                    <div class="jss181">
                        <img class="jss182" src={cl6} alt=""/>
                    </div>
                    <div class="jss183">
                        <a href="#">Create QR code</a>
                    </div>
                </div>

                <div class="jss180">
                    <div class="jss181">
                        <img class="jss182" src={cl7} alt=""/>
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
                    <h2>Benefits of using QR codes in Works of Art</h2>
                    <p>You may think that the only function of QR codes is their contribution to advertising and information exchange, or as another marketing tool. But its ability to connect the physical world and the online world makes it an excellent tool for artists to help audiences explore new forms of multimedia expression and a variety of perspectives that exceed the physical space of the work.
                    The Japanese Takashi Murakami incorporated a QR code in the center of his work "Enso: Blue" (2013): in a circle (enso) made in acrylic paint and platinum on canvas, the code QR took viewers to a website where they could witness Murakami's creative process. For his part, French artist Invader, known for his urban art inspired by video games, included QR codes in his "Rubik Cubism" series: Invader created pixelated portraits using Rubik's cubes and added codes QR that direct viewers to videos related to the creation process and the inspiration behind each work. These are just two examples that highlight how fine artists have used QR codes creatively in their works, to provide additional layers of meaning and an interactive experience for viewers.</p>
                    
                </div>

                    <div className="Everything-faq-box more-faq more-2">

                        <Accordion allowZeroExpanded>

                            <AccordionItem>

                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                    Creating a more inclusive art world
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none"><path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9"></path></svg>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                QR codes are an excellent opportunity to explore new ways of creating art and increase accessibility to virtual spaces, which are not normally available to the general public.
In his "Pulse" series, Spanish artist Daniel Canogar uses LED screens recycled from electronic waste to create installations depicting moving images. These installations are found in public places such as squares and buildings, and some of them include QR codes that take viewers to additional content related to the work and its message. In this way, Canogar offers a unique experience in public space, fusing digital art with interactivity.
QR codes create an even more fluid scenario, in which artists can illuminate the dark components of their work or even invite their audience to explore the creation process. Imagine how much you can add to your creation with a video or MP3 QR code that complements the interactive experience of your work!
                                </AccordionItemPanel>

                            </AccordionItem>

                            <AccordionItem>

                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                    Amplify your art
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none"><path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9"></path></svg>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                During the COVID-19 pandemic, the Metropolitan Museum of Art in New York began using QR codes to complement its exhibitions: each work of art displayed in its galleries had a QR code so that visitors could access additional information about it, directly from your mobile devices. This initiative allowed visitors to delve deeper into the historical context, artistic style and details of the works while touring the museum's galleries.
But QR codes don't have to be just doors to digital information. They can offer different perspectives and points of view on a topic, with a playlist shared through a Video QR code or you can use our MP3 QR code to accompany the experience with a sound or musical track designed to produce a certain feeling. This way you can offer your art in an amplified and multimedia way.
                                </AccordionItemPanel>

                            </AccordionItem>

                            <AccordionItem>

                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                    Integrate it into your design
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none"><path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9"></path></svg>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                Our dynamic QR code generator gives you the possibility to create QR codes in a flexible and creative way: you can add your brand colors, use custom frames and borders, decorate it with an image or logo and include the most important thing: a call to the unique action (CTA), so that users clearly know why they should scan it. QR codes can adapt their size and image file type, to be inserted into any artistic medium you choose.
                                </AccordionItemPanel>

                            </AccordionItem>


                            <AccordionItem>

                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                    Measure to plane
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none"><path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9"></path></svg>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                How can you tell if people are looking at your art? The inability to track any type of action or reaction that the art produces in the viewer was one of the biggest drawbacks when it came to physical objects or printed works. QR codes have changed that: by using a dynamic QR code you can see real-time tracking data, the number of scans, their duration and even what device and operating system was used in each case. This way you can monitor how well your QR code is working and make adjustments in the future, if necessary, so that your creative output reaches more people.
                                </AccordionItemPanel>

                            </AccordionItem>

                            </Accordion>
                    </div>
         
                </div>
    
            </section>


            <div class="jss235" id="how-to">
        <div class="jss236">
            <h3 class="jss237">How to create a QR code for your Artworks?</h3>
            <ul class="jss238">
                <li class="jss239">
                    <span class="jss240">1</span>
                    <p class="jss241">Sign up to access our QR Code Generator and select the type of QR code you want to incorporate into your artwork. You can start with a QR code from URL.</p>
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
                    <p class="jss241">Then, select colors that match the aesthetics of your work.</p>
                </li>
                <li class="jss239">
                    <span class="jss240">5</span>
                    <p class="jss241">Click “Download” and receive your QR code in .jpeg format in seconds.</p>
                </li>
                <li class="jss239">
                    <span class="jss240">6</span>
                    <p class="jss241">Finally, integrate your new QR code into the design of your artwork.</p>
                </li>
            </ul>
           
        </div>
    </div>

    <div class="jss242" id="best-practices">
        <div class="jss243">
            <h3 class="jss244">Best Practices in QR Codes for <span class="blue">Works of Art</span></h3>
            <p class="jss245">When designing the QR code for your work of art, there are some tips that you should keep in mind so that it obtains better results.</p>
        <ul class="jss246">

            <li class="jss247">
                <h4 class="jss248">1. Customize your design</h4>
                <p class="jss249">By customizing your QR code, with all the options available, you can adapt it to your aesthetics and, consequently, increase awareness of your brand. Once your QR code is generated, you can choose from a wide variety of frames, pre-designed CTA messages and customizable colors to attract viewers' attention. Additionally, if you want to add other details, you have the option to choose a different icon or logo, customize the shape, and add completely custom text.</p>
            </li>

            <li class="jss247">
                <h4 class="jss248">2. Use the right size</h4>
                <p class="jss249">When creating your QR code, you must keep in mind that the minimum recommended size is 2 x 2 centimeters. It is not recommended to make it smaller, but you can always make it larger, so that your QR code is always readable and can be scanned without difficulty. To ensure that all cinema viewers can access your QR code, from any seat, you must carry out tests with various smartphone models and applications.</p>
            </li>

            <li class="jss247">
                <h4 class="jss248">3. Add a call to action (CTA)</h4>
                <p class="jss249">Many times QR code users forget this essential detail for the success of their campaign: adding a brief written explanation of what the consumer will gain by scanning their code. When creating your code with QRFY, don't forget to incentivize consumers to scan your code, so they don't miss it and your marketing campaign is not in vain.</p>
            </li>

            </ul>



        <p class="jss249">Learn more about optimizing your QR codes by visiting our <a href="#">Help Center.</a></p>
        
    
    
    </div>
    </div>


    <div class="jss250" id="use-cases">
        <div class="jss251">
            <h3 class="jss252">Discover QR codes for Works of Art in action</h3>
            <p class="jss253">If you still haven't decided how to use our QR codes to expand or improve your work, here we bring you some use cases to inspire you and kick-start your creativity.</p>
        
            <ul class="jss254">
                <li class="jss255">
                    <h4 class="jss256">Connect viewers with a charity campaign</h4>
                    <p class="jss257">Spanish artist Eugenio Ampudia's "Please Scan Me" project created an interactive installation consisting of a series of trees suspended from the ceiling, each with a unique QR code. By scanning the QR code of a tree, the viewer could make a monetary donation, which was allocated to environmental conservation or social projects related to nature. In this way, the artwork was not only visually striking, but also had a practical impact, allowing viewers to contribute to this charitable cause.</p>
                </li>

                <li class="jss255">
                    <h4 class="jss256">Promote your work</h4>
                    <p class="jss257">Imagine all the possibilities of amplifying the arrival of your work with QR codes: 1) Social networks have increased knowledge about artists and their works; Using Link Listing QR codes in your art exhibitions could become a springboard to promote and boost your social media accounts. 2) If you want to increase attendance at your next art gallery exhibition, place a small sample of your work in a public space with a Event QR code, so that interested people can save to their mobile devices all the information about the event and schedule it on their calendars. 3) With a dynamic URL QR code, you can connect each work in your exhibition directly to your virtual store, so that visitors interested in a work can scan it, find out its price and request a print or the same original.</p>
                </li>

                <li class="jss255">
                    <h4 class="jss256">More information about your art</h4>
                    <p class="jss257">With a PDF QR code, visitors can easily access more information about a work of art, including its history and creation process. This code allows you to upload one or more PDF files that complement the viewer's experience. Whether in an art gallery or museum, this technology facilitates access to additional details that enrich the appreciation of the work and its context.</p>
                </li>

                <li class="jss255">
                    <h4 class="jss256">Connect communities through augmented reality</h4>
                    <p class="jss257">Many plastic artists seek to generate interactive experiences in their works. If you have an augmented reality application that allows visitors to observe the work with other nuances, through the camera of their smartphones, you can add a Apps QR code so that they can download it and experience your experience. art on a different level. The device scanners can instantly connect with any app store, be it Google Play, Amazon Appstore, and more.</p>
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
                                    What variety of art-related data can be encoded in a QR?
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none"><path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9"></path></svg>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                With the wide variety of QR codes that QRFY has to offer, you can share a wide range of art-related information, such as links to websites with details about the artwork, artist biographies, gallery or artist contact information, videos related to the creation of the art, details of exhibition events, prices and availability of the work, among other relevant information. In addition, it is also possible to create QR codes that lead to image galleries, allowing users to explore a complete collection of related works of art.
                                </AccordionItemPanel>

                            </AccordionItem>

                            
                             <AccordionItem>

                            <AccordionItemHeading>
                                    <AccordionItemButton>
                                    How can QR codes facilitate the sale of works of art?
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none"><path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9"></path></svg>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                QR codes can be a powerful tool to facilitate the sale of artwork by providing customers with quick and easy access to relevant information. By scanning a QR code associated with a work of art, customers can instantly access details about the piece, such as its history, dimensions, price, and purchasing options. This creates a smoother and more convenient shopping experience for potential buyers, which can increase sales and customer satisfaction.
                                </AccordionItemPanel>

                            </AccordionItem>

                            <AccordionItem>

                            <AccordionItemHeading>
                                    <AccordionItemButton>
                                    Is it possible to manually create a properly working QR code?
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none"><path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9"></path></svg>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                Yes, it can be done, although it may take some practice. The important thing is that the design of the code is clear and easy to read. Make sure there is enough contrast between the colors for it to work well. And don't forget that the content you put inside is correct and well organized. With a little attention and the right tools, you can make a working QR code even by drawing it by hand!
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

export default Business26

