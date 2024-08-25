
import $ from 'jquery';
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import ScrollReveal from 'scrollreveal'
import visioncoding from "/visioncoding.jpg"
import capychat from "/capychat.jpg"
import capyfinance from "/capyfinance.jpg"
import cocodogo from "/capysocial.jpg"
import redknight from "/red_knight.jpg"
import capynext from "/capynext.jpg"
import youtubeclone from "/react-project.jpg"
import smup from "/game-design1-1.jpg"

export default function PortfolioPage() {

    useEffect(() => {
        document.title = 'Portfolio | Paul Kim';
    }, []);

    $(function () {
        window.sr = ScrollReveal();
        if ($(window).width() < 768) {
            if ($('.timeline-content').hasClass('js--fadeInLeft')) {
                $('.timeline-content').removeClass('js--fadeInLeft').addClass('js--fadeInRight');
            }
            sr.reveal('.js--fadeInRight', {
                origin: 'right',
                distance: '300px',
                easing: 'ease-in-out',
                duration: 800,
            });
        }
        else {
            sr.reveal('.js--fadeInLeft', {
                origin: 'left',
                distance: '300px',
                easing: 'ease-in-out',
                duration: 800,
            });
            sr.reveal('.js--fadeInRight', {
                origin: 'right',
                distance: '300px',
                easing: 'ease-in-out',
                duration: 800,
            });
            sr.reveal('.js--fadeInBottom', {
                origin: 'bottom',
                distance: '300px',
                easing: 'ease-in-out',
                duration: 800,
            });
            sr.reveal('.js--fadeInTop', {
                origin: 'top',
                distance: '300px',
                easing: 'ease-in-out',
                duration: 800,
            });
        }
        sr.reveal('.js--fadeInLeft', {
            origin: 'left',
            distance: '300px',
            easing: 'ease-in-out',
            duration: 800,
        });
        sr.reveal('.js--fadeInRight', {
            origin: 'right',
            distance: '300px',
            easing: 'ease-in-out',
            duration: 800,
        });
    });

    return (
        <main className="flex-1 px-1">
            <div className=" py-2 max-w-6xl mx-auto">
                <h2 className="text-4xl text-center py-10">Current Projects</h2>
                <div id="current-projects-section">
                    <article className="timeline-content js--fadeInLeft py-2 pb-5">
                        <a href="https://www.visioncoding.ca/" target="_blank" className="md:flex">
                            <figure>
                                <img src={visioncoding} alt="Vision Coding Academy"
                                    className="md:max-w-60 transition-transform ease-in-out duration-300 md:hover:scale-110" />
                            </figure>
                            <figcaption className="md:pl-10">
                                <div className="flex">
                                    <h3 className="text-xl text-teal-300 pr-1">Company Website </h3>
                                </div>
                                <p className="text-gray-400">Official Live Website for Vision Coding Academy in Vancouver, BC, Canada that I have single-handedly built in collaboration with design references from UI/UX and graphic designers. UI/UX credits to: @stephology</p>
                                <p className="tertiary-font pt-3">Stack: HTML, CSS, JS, React, Node Express, Vite, Bluehost,
                                    PostgreSQL,
                                    Railway</p>
                            </figcaption>
                        </a>
                    </article>
                    <article className="timeline-content js--fadeInRight py-2 pb-5">
                        <a href="https://codingcapy.github.io/capychat/" target="_blank" className="md:flex">
                            <figure>
                                <img src={capychat} alt="CapyChat"
                                    className="md:max-w-60 transition-transform ease-in-out duration-300 md:hover:scale-110" />
                            </figure>
                            <figcaption className="md:pl-10">
                                <div className="flex">
                                    <h3 className="text-xl text-teal-300 pr-1">Full Stack Chat App </h3>
                                </div>
                                <p className="text-gray-400">This project is a fully functional live chat application
                                    written in Node Express,
                                    React Vite and PostgreSQL
                                    that
                                    uses json web
                                    token user authentication and socket.io.</p>
                                <p className="tertiary-font pt-3">Stack: Node, Express, React, socket.io, Vite, PostgreSQL,
                                    Railway</p>
                            </figcaption>
                        </a>
                    </article>
                    <article className="timeline-content js--fadeInLeft py-5">
                        <a href="https://codingcapy.github.io/capy-finance-client/" target="_blank" className="md:flex">
                            <figure>
                                <img src={capyfinance} alt="CapyFinance"
                                    className="md:max-w-60 transition-transform ease-in-out duration-300 md:hover:scale-110" />
                            </figure>
                            <figcaption className="md:pl-10">
                                <div className="flex">
                                    <h3 className="text-xl text-teal-300 pr-1">Personal Finance Full Stack Web App </h3>
                                </div>
                                <p className="text-gray-400">This project is a full-stack web app written in Node Express,
                                    React Vite and MongoDB
                                    that
                                    uses json web
                                    token user authentication and allows users to create financial plans.</p>
                                <p className="tertiary-font pt-3">Stack: Node, Express, React, ChartJS, Vite, MongoDB, Render</p>
                            </figcaption>
                        </a>
                    </article>
                    <article className="timeline-content js--fadeInRight py-5">
                        <a href="https://codingcapy.github.io/cocodogo-client/" target="_blank" className="md:flex">
                            <figure>
                                <img src={cocodogo} alt="Cocodogo" className="md:max-w-60" />
                            </figure>
                            <figcaption className="md:pl-10">
                                <h3 className="text-xl text-teal-300">Reddit Clone Full Stack Web App</h3>
                                <p className="text-gray-400">This project is a full-stack web app written in Node Express,
                                    React Vite and MongoDB
                                    that uses json web
                                    token user authentication and allows users to post, comment, reply, and vote similar
                                    to
                                    forums like Reddit.</p>
                                <p className="tertiary-font pt-3">Stack: Node, Express, React, Vite, MongoDB, Railway</p>
                            </figcaption>
                        </a>
                    </article>
                    <article className="timeline-content js--fadeInLeft py-5">
                        <a href="https://capynext.vercel.app/" target="_blank" className="md:flex">
                            <figure>
                                <img src={capynext} alt="CapyNext"
                                    className="md:max-w-60 transition-transform ease-in-out duration-300 md:hover:scale-110" />
                            </figure>
                            <figcaption className="md:pl-10">
                                <div className="flex">
                                    <h3 className="text-xl text-teal-300 pr-1">NextJS Serverless Social Platform</h3>
                                </div>
                                <p className="text-gray-400">This project is a full-stack web app written in NextJS 14 and
                                    MongoDB
                                    that
                                    uses next-auth user authentication and allows users to post, comment, reply, and
                                    vote similar
                                    to
                                    platforms like Reddit.</p>
                                <p className="tertiary-font pt-3">Stack: NextJS 14, MongoDB, Vercel</p>
                            </figcaption>
                        </a>
                    </article>
                    <article className="timeline-content js--fadeInRight py-5">
                        <a href="https://codingcapy.github.io/capytech-react" target="_blank" className="md:flex">
                            <figure>
                                <img src={youtubeclone} alt="Capytech React" className="md:max-w-60" />
                            </figure>
                            <figcaption className="md:pl-10">
                                <h3 className="text-xl text-teal-300">React Front End Web Project</h3>
                                <p className="text-gray-400">This project is a website written entirely in React that
                                    simulates the front end of
                                    Youtube.</p>
                                <p className="tertiary-font pt-3">Stack: Node, Express, React, Vite, MongoDB, Render</p>
                            </figcaption>
                        </a>
                    </article>
                    <article className="timeline-content js--fadeInLeft py-5">
                        <NavLink to="/portfolio/6" className="md:flex">
                            <figure>
                                <img src={redknight} alt="JavaScript RPG" className="md:max-w-60" />
                            </figure>
                            <figcaption className="md:pl-10">
                                <h3 className="text-xl text-teal-300">JavaScript RPG</h3>
                                <p className="text-gray-400">Click here to play! This project is a JavaScript RPG game I
                                    recently completed.</p>
                                <p className="tertiary-font pt-3">Stack: HTML5, CSS3, JavaScript ES06, JQuery</p>
                            </figcaption>
                        </NavLink>
                    </article>
                    <article className="timeline-content js--fadeInLeft py-5">
                        <NavLink to="/portfolio/7" className="md:flex">
                            <figure>
                                <img src={smup} alt="JavaScript smup" className="md:max-w-60" />
                            </figure>
                            <figcaption className="md:pl-10">
                                <h3 className="text-xl text-teal-300">JavaScript Smup</h3>
                                <p className="text-gray-400">Click here to play! This project is a JavaScript RPG game I
                                    recently completed.</p>
                                <p className="tertiary-font pt-3">Stack: HTML5, CSS3, JavaScript ES06, JQuery</p>
                            </figcaption>
                        </NavLink>
                    </article>
                </div>
            </div>
        </main>
    )
}