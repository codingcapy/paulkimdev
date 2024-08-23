
import $ from 'jquery';
import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal'

export default function ContactPage(){

    useEffect(() => {
        document.title = 'Contact | Paul Kim';
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

    return(
        <main className="flex-1 px-1">
            <div className="py-2 max-w-6xl mx-auto">
                <h1 className="text-4xl text-center py-10">Contact Me</h1>
                <p className="text-center">You can contact me at the following:</p>
                <div className="py-4">
                    <h2 className="text-xl text-teal-300 text-center">Cellphone</h2>
                    <p className="text-center">(+1) 778-994-4939</p>
                </div>
                <div className="py-4">
                    <h2 className="text-xl text-teal-300 text-center">Email</h2>
                    <p className="text-center">Email: spkim0921@gmail.com</p>
                </div>
            </div>
        </main>
    )
}