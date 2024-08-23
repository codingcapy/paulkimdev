import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import {ScrollToTop} from "./ScrollToTop"
import $ from "jquery"


export default function Layout() {

    $(document).on('mousemove', (event) => {
        $('.ghost').css({
            left: event.clientX,
            top: event.clientY,
        },);

    });

    return (
        <div className="flex flex-col min-h-screen bg-slate-800 text-white">
            <div id='speedcapture'>
                <div className='ghost face'>
                    <div className='arms'>
                        <div className='arm'></div>
                        <div className='arm'></div>
                    </div>
                    <div className='inner'>
                        <div className='mouth'></div>
                    </div>
                </div>
                <div className='ghost'></div>
                <div className='ghost'></div>
                <div className='ghost'></div>
                <div className='ghost'></div>
                <div className='ghost'></div>
                <div className='ghost'></div>
                <div className='ghost'></div>
                <div className='ghost'></div>
                <div className='ghost'></div>
                <div className='ghost'></div>
                <div className='ghost'></div>
                <div className='ghost'></div>
                <div className='ghost'></div>
                <div className='ghost'></div>
                <div className='ghost'></div>
                <div className='ghost'></div>
                <div className='ghost'></div>
                <div className='ghost'></div>
                <div className='ghost'></div>
            </div>
            <ScrollToTop />
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}