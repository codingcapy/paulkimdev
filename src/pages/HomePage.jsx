
import $ from 'jquery';
import ScrollReveal from 'scrollreveal'
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import python from "/python.png"
import java from "/java.png"
import c from "/c.png"
import html from "/html5.png"
import css from "/css3.png"
import sql from "/sql.png"
import node from "/nodejs.png"
import javascript from "/javascript.png"
import reactjs from "/Reactjs.png"
import express from "/expressjs.jpg"
import next from "/nextjs.jpg"
import visioncoding from "/visioncoding.jpg"
import capychat from "/capychat.jpg"
import capyfinance from "/capyfinance.jpg"
import cocodogo from "/capysocial.jpg"
import capynext from "/capynext.jpg"
import redknight from "/red_knight.jpg"
import youtubeclone from "/react-project.jpg"
import modules from "/web-frameworks.jpg"

export default function HomePage() {

    useEffect(() => {
        document.title = 'Home | Paul Kim';
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
        <main className="flex-1 max-w-7xl px-1 mx-auto overflow-hidden">
            <div className="py-2 md:flex mx-auto">
                <div className="my-10 pr-10 flex-1">
                    <div className="md:fixed top-28 z-30 md:w-[250px] lg:w-fit">
                        <div className="flex">
                            <h1 className="js--fadeInLeft flex pr-0 mr-0 text-4xl md:text-6xl font-extrabold primary-font" id="paul">Hi,
                                I'm
                                <span className="pl-3 text-teal-300 font-extrabold primary-font">Paul</span>👨🏻‍💻
                            </h1>
                            <h1 className="intro flex pr-0 mr-0 text-4xl md:text-6xl font-extrabold primary-font"></h1>
                            <span
                                className="myName flex pr-0 mr-0 text-4xl md:text-6xl font-extrabold primary-font pl-3 text-teal-300 "></span>
                            <div className="flex-1"></div>
                        </div>
                        <h2 className="js--fadeInLeft text-2xl py-2">Full Stack Software Engineer</h2>
                        <p className="js--fadeInLeft pt-2 text-gray-400">I am a full stack developer based
                            in Vancouver, British Columbia,
                            Canada.</p>
                        <p className="js--fadeInLeft pb-2 text-gray-400">I build modern websites using React.js, Node.js,
                            Express.js and Next.js.</p>
                        <div className="js--fadeInLeft flex py-5">
                            <div className="rounded-md transition ease-in-out duration-300">
                                <a href="https://www.linkedin.com/in/paul-sunghun-kim/"
                                    target="_blank">
                                    <FaLinkedin size={50} className="glow" />
                                </a>
                            </div>
                            <div className="glow px-5 rounded-md transition ease-in-out duration-300">
                                <a href="https://github.com/codingcapy/" aria-label="Homepage" className="footer-octicon"
                                    title="GitHub" target="_blank">
                                    <FaGithub size={50} />
                                </a>
                            </div>
                            <div className="glow rounded-md transition ease-in-out duration-300">
                                <a href="https://www.instagram.com/capybara0921/" target="_blank">
                                    <FaInstagram size={50} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="py-10 flex-1">
                    <div className="md:border-l-2 md:pl-10">
                        <div
                            className="timeline-content js--fadeInBottom hidden md:block w-[10px] h-[10px] bg-white rounded-full relative top-[0px] left-[-46px]">
                        </div>
                        <div className="flex">
                            <p className="timeline-content js--fadeInRight py-2 text-gray-400">I have
                                completed the <strong className="text-white">Applied
                                    Software
                                    Development</strong>, <strong className="text-white">Applied
                                        Web Development</strong> and <strong className="text-white">Applied Computer Information Systems</strong> certificates at British
                                Columbia Institute
                                of Technology (BCIT), and I am currently working towards the Computer Systems Diploma.</p>
                        </div>
                        <div className="text-2xl py-2">
                            <div
                                className="timeline-content js--fadeInBottom hidden md:block w-[10px] h-[10px] bg-white rounded-full relative top-[22px] left-[-46px] ">
                            </div>
                            <h2 className="text-2xl">My tech stack</h2>
                        </div>
                        <div className="">
                            <div className="timeline-content js--fadeInRight grid grid-cols-3 py-10 ">
                                <a href="https://www.python.org/" target="_blank"><img src={python}
                                    alt="Python"
                                    className="mx-auto md:max-w-20 transition-transform ease-in-out duration-300 hover:scale-125" /></a>
                                <a href="https://www.java.com/en/" target="_blank"><img src={java}
                                    alt="Java"
                                    className="mx-auto md:max-w-20 transition-transform ease-in-out duration-300 hover:scale-125" /></a>
                                <a href="https://en.wikipedia.org/wiki/C_(programming_language)" target="_blank"><img
                                    src={c} alt="C"
                                    className="mx-auto md:max-w-20 transition-transform ease-in-out duration-300 hover:scale-125" /></a>

                                <a href="https://en.wikipedia.org/wiki/HTML" target="_blank"><img
                                    src={html} alt=""
                                    className="mx-auto md:max-w-20 transition-transform ease-in-out duration-300 hover:scale-125" /></a>
                                <a href="https://en.wikipedia.org/wiki/CSS" target="_blank"><img
                                    src={css} alt=""
                                    className="mx-auto md:max-w-20 transition-transform ease-in-out duration-300 hover:scale-125" /></a>
                                <a href="https://en.wikipedia.org/wiki/JavaScript" target="_blank"><img
                                    src={javascript} alt="JavaScript"
                                    className="mx-auto md:max-w-20 transition-transform ease-in-out duration-300 hover:scale-125" /></a>
                                <a href="https://en.wikipedia.org/wiki/SQL" target="_blank"><img src={sql}
                                    alt="SQL"
                                    className="mx-auto md:max-w-20 transition-transform ease-in-out duration-300 hover:scale-125" /></a>
                                <a href="https://nodejs.org/en" target="_blank"><img src={node}
                                    alt="Node.js"
                                    className="mx-auto md:max-w-20 transition-transform ease-in-out duration-300 hover:scale-125" /></a>
                                <a href="https://react.dev/" target="_blank"><img src={reactjs}
                                    alt="React.js"
                                    className="mx-auto md:max-w-20 transition-transform ease-in-out duration-300 hover:scale-125" /></a>
                                <a href="https://expressjs.com/" target="_blank" className="my-auto"><img
                                    src={express} alt="Express.js"
                                    className="mx-auto my-auto md:max-w-20 transition-transform ease-in-out duration-300 hover:scale-125" /></a>
                                <a href="https://nextjs.org/" target="_blank"><img src={next}
                                    alt="React.js"
                                    className="mx-auto md:max-w-20 transition-transform ease-in-out duration-300 hover:scale-125" /></a>
                            </div>
                        </div>
                        <div className="py-2">
                            <div
                                className="timeline-content js--fadeInBottom hidden md:block w-[10px] h-[10px] bg-white rounded-full relative top-[22px] left-[-46px] ">
                            </div>
                            <h2 className='text-2xl'>Some things I've built...</h2>
                            <article className="timeline-content js--fadeInLeft py-10">
                                <a href="https://www.visioncoding.ca/" target="_blank" className="md:flex">
                                    <figure>
                                        <img src={visioncoding} alt="Vision Coding Academy"
                                            className="md:max-w-60 transition-transform ease-in-out duration-300 md:hover:scale-110" />
                                    </figure>
                                    <figcaption className="md:pl-10">
                                        <div className="flex">
                                            <h3 className="text-xl text-teal-300 pr-1">Company Website</h3>
                                        </div>
                                        <p className="text-gray-400">Official Live Website for Vision Coding Academy in
                                            Vancouver, BC, Canada that my team and I have built, designed, tested, optimized, and deployed, currently continuously integrating and deploying new features and content.</p>
                                        <p className="tertiary-font pt-3">Stack: HTML, CSS, JS, React, Node Express, Vite,
                                            PostgreSQL, Bluehost,
                                            Railway</p>
                                    </figcaption>
                                </a>
                            </article>
                            <article className="timeline-content js--fadeInLeft py-10">
                                <a href="https://codingcapy.github.io/capychat/" target="_blank" className="md:flex">
                                    <figure>
                                        <img src={capychat} alt="CapyChat"
                                            className="md:max-w-60 transition-transform ease-in-out duration-300 md:hover:scale-110" />
                                    </figure>
                                    <figcaption className="md:pl-10">
                                        <div className="flex">
                                            <h3 className="text-xl text-teal-300 pr-1">Full Stack Chat App </h3>
                                        </div>
                                        <p className="text-gray-400">This project is a fully featured fully functional live chat
                                            application written in Node Express,
                                            React Vite and PostgreSQL
                                            that
                                            uses json web
                                            token user authentication and socket.io.</p>
                                        <p className="tertiary-font pt-3">Stack: Node, Express, React, socket.io, Vite,
                                            PostgreSQL,
                                            Railway</p>
                                    </figcaption>
                                </a>
                            </article>
                            <article className="timeline-content js--fadeInRight py-10">
                                <a href="https://codingcapy.github.io/capy-finance-client/" target="_blank" className="md:flex">
                                    <figure>
                                        <img src={capyfinance} alt="CapyFinance"
                                            className="md:max-w-60 transition-transform ease-in-out duration-300 md:hover:scale-110" />
                                    </figure>
                                    <figcaption className="md:pl-10">
                                        <div className="flex">
                                            <h3 className="text-xl text-teal-300 pr-1">Personal Finance Full Stack Web App </h3>
                                        </div>
                                        <p className="text-gray-400">This project is a full-stack financial plan generating web
                                            app written in Node Express,
                                            React Vite and MongoDB
                                            that
                                            uses json web
                                            token user authentication and chartJS.</p>
                                        <p className="tertiary-font pt-3">Stack: Node, Express, React, ChartJS, Vite, MongoDB,
                                            Render</p>
                                    </figcaption>
                                </a>
                            </article>
                            <article className="timeline-content js--fadeInLeft py-10">
                                <a href="https://codingcapy.github.io/cocodogo-client/" target="_blank" className="md:flex">
                                    <figure>
                                        <img src={cocodogo} alt="CocoDogo"
                                            className="md:max-w-60 transition-transform ease-in-out duration-300 md:hover:scale-110" />
                                    </figure>
                                    <figcaption className="md:pl-10">
                                        <div className="flex">
                                            <h3 className="text-xl text-teal-300 pr-1">Social Platform Full Stack Web App </h3>
                                        </div>
                                        <p className="text-gray-400">This project is a full-stack web app written in Node
                                            Express,
                                            React Vite and MongoDB
                                            that
                                            uses json web
                                            token user authentication and allows users to post, comment, reply, and vote
                                            similar
                                            to
                                            platforms like Reddit.</p>
                                        <p className="tertiary-font pt-3">Stack: Node, Express, React, Vite, MongoDB, Railway
                                        </p>
                                    </figcaption>
                                </a>
                            </article>
                            <article className="timeline-content js--fadeInRight py-10">
                                <a href="https://capynext.vercel.app/" target="_blank" className="md:flex">
                                    <figure>
                                        <img src={capynext} alt="CapyNext"
                                            className="md:max-w-60 transition-transform ease-in-out duration-300 md:hover:scale-110" />
                                    </figure>
                                    <figcaption className="md:pl-10">
                                        <div className="flex">
                                            <h3 className="text-xl text-teal-300 pr-1">NextJS Serverless Social Platform</h3>
                                        </div>
                                        <p className="text-gray-400">This project is a full-stack web app written in NextJS 14
                                            and MongoDB
                                            that
                                            uses next-auth user authentication and allows users to post, comment, reply, and
                                            vote similar
                                            to
                                            platforms like Reddit.</p>
                                        <p className="tertiary-font pt-3">Stack: NextJS 14, MongoDB, Vercel</p>
                                    </figcaption>
                                </a>
                            </article>
                            <article className="timeline-content js--fadeInLeft py-10">
                                <a href="https://codingcapy.github.io/capytech-react" target="_blank" className="md:flex">
                                    <figure>
                                        <img src={youtubeclone} alt="Capytech React Project"
                                            className="md:max-w-60 transition-transform ease-in-out duration-300 md:hover:scale-110" />
                                    </figure>
                                    <figcaption className="md:pl-10">
                                        <h3 className="text-xl text-teal-300">Youtube Clone Front End React</h3>
                                        <p className="text-gray-400">This project is a website written entirely in React that
                                            simulates the front end of
                                            Youtube.</p>
                                        <p className="tertiary-font pt-3">Stack: Node, Express, React, Vite, MongoDB, Render</p>
                                    </figcaption>
                                </a>
                            </article>
                            <article className="timeline-content js--fadeInRight py-5">
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
                        </div>
                        <div className="text-2xl py-2">
                            <div
                                className="timeline-content js--fadeInBottom hidden md:block w-[10px] h-[10px] bg-white rounded-full relative top-[22px] left-[-46px] ">
                            </div>
                            <h2>Some of my thoughts...</h2>
                        </div>
                        <article className="timeline-content js--fadeInLeft py-2">
                            <figure>
                                <NavLink to="/articles/1" className="md:flex">
                                    <img src={modules} alt="Web Frameworks"
                                        className="md:max-w-60 transition-transform ease-in-out duration-300 md:hover:scale-110" />
                                    <figcaption className="md:pl-10">
                                        <h2 className="text-xl text-teal-300">Frameworks, Modules and Packages</h2>
                                        <p>Posted on: January 10, 2024</p>
                                        <p className="text-gray-400">There's a lot of conflicting opinions among
                                            engineers out there about the use of web frameworks,
                                            modules
                                            and
                                            libraries.
                                        </p>
                                    </figcaption>
                                </NavLink>
                            </figure>
                        </article>
                    </div>
                </div>
            </div>
        </main >
    )
}