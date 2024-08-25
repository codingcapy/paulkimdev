
import $ from 'jquery'
import capyness from "/capyness.png"
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {

    const [navVisible, setNavVisible] = useState(false);

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth > 700) {
                setNavVisible(true);
            } else {
                setNavVisible(false);
            }
        };

        handleResize(); // Initial check
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    function slideToggle() {
        setNavVisible(!navVisible);
    };

    return (
        <header className="md:flex bg-slate-800 py-2 sticky top-0 z-10">
            <div className="flex justify-between px-2">
                <NavLink to="./index.html"><img src={capyness} alt="Capytech Icon" className="max-w-10" /></NavLink>
                <button id="hamburger-menu" className="text-3xl md:hidden" onClick={slideToggle}>&#127828;</button>
            </div>
            <nav id="main-nav" className={`${navVisible ? 'visible' : ''} md:block`}>
                <ul className="md:flex">
                    <li className="glow px-5 py-3 text-center md:block rounded-md">
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li className="glow px-5 py-3 text-center md:block rounded-md">
                        <NavLink to="/portfolio">Portfolio</NavLink>
                    </li>
                    <li className="glow px-5 py-3 text-center md:block rounded-md">
                        <NavLink to="/articles">Articles</NavLink>
                    </li>
                    <li className="glow px-5 py-3 text-center md:block rounded-md">
                        <NavLink to="/about">About</NavLink>
                    </li>
                    <li className="glow px-5 py-3 text-center md:block rounded-md">
                        <NavLink to="/resume">Resume</NavLink>
                    </li>
                    <li className="glow px-5 py-3 text-center md:block rounded-md">
                        <NavLink to="/contact">Contact</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}