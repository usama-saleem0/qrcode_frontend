import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { IoChevronForwardSharp } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa6";


import Header from '../header/header';
import Footer from '../Footer/Footer';

import cx1 from '../img/Vector.svg';
import cx2 from '../img/Books1.png';
import cx3 from '../img/Books2.png';
import cx4 from '../img/Books3.png';
import cx5 from '../img/Books5.png';
import cx6 from '../img/Books4.png';
import cx7 from '../img/Books6.png';

import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';




const Business28 = () => {
    return (
        <>


            <Header />

            <div class="busines-inner">
        <div class="inner-bussines">
            <h2>QR Codes in <span>Books</span></h2>
            <button class="jss2570">
                <span class="jss2570-span">Select other examples
                    <img src={cx1} alt=""/>
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
                <p>Add a QRFY code to your books and improve the experience of your readers or students, connecting them with articles, videos, download platforms, virtual bookstores and much more. With QRFY in your books, give readers a new way to read and learn.</p>
            </div>


            <div class="jss163">
                <div class="jss180 half">
                    <div class="jss181">
                        <img class="jss182" src={cx2} alt=""/>
                    </div>
                    <div class="jss183">
                        <a href="#">Create QR code</a>
                    </div>
                </div>

                <div class="jss180 half">
                    <div class="jss181">
                        <img class="jss182" src={cx3} alt=""/>
                    </div>
                    <div class="jss183">
                        <a href="#">Create QR code</a>
                    </div>
                </div>

                <div class="jss180">
                    <div class="jss181">
                        <img class="jss182" src={cx4} alt=""/>
                    </div>
                    <div class="jss183">
                        <a href="#">Create QR code</a>
                    </div>
                </div>



                <div class="jss180 half">
                    <div class="jss181">
                        <img class="jss182" src={cx5} alt=""/>
                    </div>
                    <div class="jss183">
                        <a href="#">Create QR code</a>
                    </div>
                </div>

                <div class="jss180 half">
                    <div class="jss181">
                        <img class="jss182" src={cx6} alt=""/>
                    </div>
                    <div class="jss183">
                        <a href="#">Create QR code</a>
                    </div>
                </div>

                <div class="jss180">
                    <div class="jss181">
                        <img class="jss182" src={cx7} alt=""/>
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
                    <h2>The benefits of using QR codes in Books</h2>
                    <p>Perhaps for many the design is not the essential thing in a book, but the content itself and the idea of making a book more attractive may seem absurd: words are enough. However, just as reading circles are organized, where readers come together to read and comment on works, today online forums have a similar function, while other readers undertake renewed literary adventures, by including in the books a connection with virtuality and its audiovisual media. Imagine that you wrote a chapter of your book, inspired by a song from your adolescence, wouldn't you like your readers to be able to hear that track when they get there? Even by including an entire musical playlist you can give your readers the feeling of being part of the story or the writing process itself.
                    Connecting your books to digital platforms, thanks to the technology of QR codes, can change the way we connect, not only with books, but also with other readers and with the author.</p>
                    
                </div>

                    <div className="Everything-faq-box more-faq more-2">

                        <Accordion allowZeroExpanded>

                            <AccordionItem>

                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                    Beyond the text
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none"><path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9"></path></svg>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                QR codes can connect the physical world with the web. This desire to understand writing beyond the text has always existed: good examples of this are reading circles, graphic novels, books that came with a cassette to set the reading to music, and the most recent audiobooks. QR codes take advantage of this curiosity and revolutionize the way their readers can go beyond the text, from fiction to academic books.
                                </AccordionItemPanel>

                            </AccordionItem>

                            <AccordionItem>

                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                    Attracts students
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none"><path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9"></path></svg>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                You can make study materials more interesting for your students by including attractive multimedia tools. With a MP3 QR code next to the vocabulary you can help your students correct their pronunciation in your language classes; or you can add a dynamic URL QR code with the link to an interactive worksheet, to apply the knowledge acquired after you have finished studying each topic. With a PDF QR code you can provide them with additional study materials, such as historical documents or video explanations, without additional printing costs. You can even reduce printing costs by sharing reading book illustrations, with our Image Gallery QR code. In addition, our dynamic QR codes will allow you to keep the information updated and modify it at any time without having to reprint the code or create a new one.
                                </AccordionItemPanel>

                            </AccordionItem>

                            <AccordionItem>

                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                    Connect readers
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none"><path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9"></path></svg>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                Finishing reading a book is sometimes a struggle. A good way to navigate this is to talk to other readers or look for other works by the same author or genre. With a QR code on the book jacket or on the flap, you can include additional material: reading recommendations, links to forums, discussion questions or a link to the virtual library, to purchase books by the same author. With our Video QR code, you can connect readers with exclusive author interviews and audiovisual productions inspired by their works or a blog site.
Many authors, YouTubers and Instagrammers first gained popularity on the networks and then launched themselves into the publishing world. There are currently radio programs that went from being podcasts to becoming books. Bridging literature and the web is important to improve the reader's experience.
You can connect fans of your books, with our Link List QR code, which will allow them to always be aware of the news of your literary works, ask questions live on Instagram or YouTube, communicate with other readers and much more. Immerse readers in your books with a playlist of the songs that inspired each chapter, with our MP3 QR code, or show the places that inspired certain scenes in your books with a Image Gallery QR code.
                                </AccordionItemPanel>

                            </AccordionItem>


                            <AccordionItem>

                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                    Interactive narratives
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none"><path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9"></path></svg>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                Augmented reality (AR) means that a story doesn't have to end after reading the last page, but you can keep readers spellbound by redirecting them via a QR code to an interactive experience: a scavenger hunt, an alternate ending, a online game that connects readers. Connect your books with a virtual library of adventure stories, to encourage children and young people to read and to inspire other adults to add creativity to their publications.
                                </AccordionItemPanel>

                            </AccordionItem>

                            </Accordion>
                    </div>
         
                </div>
    
            </section>


            <div class="jss235" id="how-to">
        <div class="jss236">
            <h3 class="jss237">How to create a QR code for your Book?</h3>
            <ul class="jss238">
                <li class="jss239">
                    <span class="jss240">1</span>
                    <p class="jss241">Sign up to access the QR code generator and select the type of QR code you want to add to your book. You can start with a QR code from URL.</p>
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
                    <p class="jss241">Finally, integrate your new QR code into your book design.</p>
                </li>
            </ul>
           
        </div>
    </div>

    <div class="jss242" id="best-practices">
        <div class="jss243">
            <h3 class="jss244">Best practices when including QR Codes in <span class="blue">Books</span></h3>
            <p class="jss245">The QR code is no longer monochromatic – you now have a variety of design options you can use to capture your audience's attention. For your book promotional campaign to be a success, it must not only contain clear information, but also capture the attention of readers and potential readers, with attractive images, an effective CTA message and well-designed code. Here are some tips.</p>
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
            <h3 class="jss252">Discover QR codes in action in Books</h3>
            <p class="jss253">If you still can't imagine the scope and benefits of using a QRFY code in your books, here are some fictional narratives, so you can visualize how you can be creative with QR codes and improve the experience of your books. readers and your students' learning.</p>
        
            <ul class="jss254">
                <li class="jss255">
                    <h4 class="jss256">Editors</h4>
                    <p class="jss257">The Editorial Q began the campaign to promote the book by Maria Ines Cortes. To do this, he set out to organize a series of events aimed at the general reading public and his fans. On the flap of the book's dust jacket, a Event QR code was printed that redirected users to the tour schedule, which included the list of bookstores where the book reading would take place, the interview with its author and the signing of copies.</p>
                </li>

                <li class="jss255">
                    <h4 class="jss256">Educational institutions</h4>
                    <p class="jss257">The creative writing and illustration department of the Higher School of Art SC School decided, as the closing of the school year, to print a series of children's books, written and illustrated by its fourth-year students, and present them in the city's children's book fair. To captivate children with literature, they printed a QR code from the App on the cover of the book, to connect them with a treasure hunt, which took the children to visit different stands at the fair, collecting clues: to obtain them, they had to read short stories and solve riddles.</p>
                </li>

                <li class="jss255">
                    <h4 class="jss256">Photographers and videographers</h4>
                    <p class="jss257">After a tour of different National Parks in Europe, one of the photographers from the studio JHP Photographer published, together with a tourism agency, a book of photographs that explores the panoramic points and fauna of the parks visited . Below his biography, at the end of the book, he printed a Business QR code, to make it easier for clients to contact his studio and hire his services, by linking directly to his website, detailing address , opening hours, contact information and a button that links to the photo galleries of each of the photographers who work for the company.</p>
                </li>

                <li class="jss255">
                    <h4 class="jss256">Software and game developers</h4>
                    <p class="jss257">In its latest release, Space Heroes created a game that features a radical overhaul in creative design and gameplay mechanics. To allow fans to learn more about these innovations, they included, in the magazine that was distributed during the presentation event, our Video QR Code, to offer readers the opportunity to witness behind the scenes of the storyboards, exclusive interviews with the filmmakers, historical events that inspired the plot and game tutorials, through a series of videos, accessible with just a scan.</p>
                </li>

                <li class="jss255">
                    <h4 class="jss256">Tourism</h4>
                    <p class="jss257">The tourist office of North City recently published a book about the places in the city that are scenes of historical events and urban legends. Having a limited budget, it was necessary to reduce printing costs to a minimum: for this they integrated an Image Gallery QR Code at the beginning of each chapter. Thus, with a simple scan, readers were able to access an album of images dedicated to each specific place. By tapping on an image, readers can zoom, share images on social media, and even download them to their devices. With a personalized button with the CTA “Visit this site,” readers were able to learn more about the different locations, guided tours, and their hours.</p>
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
                                    Can a QR code printed on a book improve reader engagement?
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none"><path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9"></path></svg>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                QR codes can improve the reading experience and optimize book marketing strategies. As? Well, by offering a renewed experience to the reader, with an amplified construction of the fictional world: audios, videos, images, recipes, games... they can turn reading into a multisensory experience that actively involves readers beyond simple reading. Therefore, a QR code can be a door to challenge your creativity, expand the reading experience and optimize the marketing of your books.
                                </AccordionItemPanel>

                            </AccordionItem>

                            
                             <AccordionItem>

                            <AccordionItemHeading>
                                    <AccordionItemButton>
                                    Do QR codes work on books?
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none"><path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9"></path></svg>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                Of course! QR codes offer writers the opportunity to enhance their narratives and readers to enjoy amplified reading experiences. But they can also help create community and connect authors with their readers, through the dissemination of social networks, reading clubs or debate spaces. In education, many teachers have even seen the benefits of offering their students innovative readings, with multimedia tools and even online quizzes and games, which they access through a QR Code printed on the book.
                                </AccordionItemPanel>

                            </AccordionItem>

                            <AccordionItem>

                            <AccordionItemHeading>
                                    <AccordionItemButton>
                                    Can QR codes on books be adapted for visually impaired students?
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none"><path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9"></path></svg>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                Yes, QR codes on books can provide accessibility and support for students with visual impairments, allowing them to access information and resources in a more inclusive and accessible way. In the first instance, an adjustment is made to the design of the QR code, adding a brief message in Braille so that visually impaired people can identify their book and the location of the QR code. When scanned, the QR code can direct them to the audiobook of your work, an audio file with detailed descriptions of the images, graphs or diagrams present in the book, link to digital braille versions or other additional content, such as interactive activities or other resources that are designed specifically for students with visual impairments. This will make your books more accessible and attractive to children and adults with visual disabilities.
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

export default Business28

