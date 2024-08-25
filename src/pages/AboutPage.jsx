
import $ from 'jquery';
import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal'
import paul from "/paul_kim.jpg"

export default function AboutPage(){

    useEffect(() => {
        document.title = 'About | Paul Kim';
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
        <main className="flex-1 px-1 overflow-x-hidden">
            <div className="timeline-content js--fadeInLeft py-2 max-w-6xl mx-auto">
                <h1 className="text-4xl text-center py-10">About Me</h1>
                <div className="md:flex">
                    <img src={paul} alt="Paul Kim" className="max-w-30 md:max-w-xs rounded-full"/>
                    <div>
                        <p className="pt-10 pb-4 px-10">I was born in Belgium, grew up in Switzerland, and I am a
                            permanent
                            resident of Canada. My
                            hobbies
                            and passion include fitness, outdoor sports and activities, travelling, playing (and
                            developing)
                            video games, developing websites, anime, music, art, go-karting, skiing and
                            snowboarding,
                            cooking,
                            and dogs and cats.</p>
                        <p className="py-2 px-10">My goal in life is to develop apps and websites that are useful for
                            users, as well as
                            games that are fun to play and watch.</p>
                    </div>
                </div>
            </div>
        </main>
    )
}