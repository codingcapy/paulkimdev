
import $ from 'jquery';
import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal'
import modules from "/web-frameworks.jpg"
import { NavLink } from 'react-router-dom';

export default function ArticlesPage() {

    useEffect(() => {
        document.title = 'Blog | Paul Kim';
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
        <main className="flex-1 px-1 overflow-x-hidden">
            <div className=" py-2 max-w-6xl mx-auto">
                <h1 className="text-4xl text-center py-10">Blog</h1>
                <section id="articles-section">
                    <article className="timeline-content js--fadeInLeft py-2">
                        <figure>
                            <NavLink to="/articles/1" className="md:flex">
                                <img src={modules} alt="ChatGPT"
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
                </section>
            </div>
        </main>
    )
}