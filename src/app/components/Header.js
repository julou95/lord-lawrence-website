'use client'

import Image from "next/image";
import Mx3Logo from "./Mx3Logo";
import SpotifyLogo from "./SpotifyLogo";
import InstagramLogo from "./InstagramLogo";

function Header({ scrolled = false }) {

    const clickMain = () => {
        window.scrollTo({top: 0, behavior: 'smooth'})
    }

    return (
        <div className={`sticky top-0 left-0 right-0 transition-colors duration-300 shadow-md p-4 sm:p-5 md:p-6 lg:p-8 ${scrolled ? 'bg-neutral-950 text-white' : 'bg-slate-50 text-neutral-950'}`}>
            <div className={`container mx-auto flex justify-between items-center`}>
                <div className={'flex items-center'} onClick={clickMain}>
                    <Image src={'/logo.png'} width={75} height={750} alt="Bandlogo" />
                    <h2 className="ml-5 hidden lg:inline">Lord Lawrence & The Lard Guitar</h2>
                </div>
                <div className={'flex items-center'}>
                    <a href={'https://mx3.ch/lordlawrencethelardguitar'} target="_blank" className="mr-4">
                        <Mx3Logo filled={scrolled} />
                    </a>
                    <a href={'https://open.spotify.com/artist/1k4FnGJS0FNsIGuN6uZE6Q?si=htultynnQDevw63bVi_QUA'} target="_blank" className="mr-4">
                        <SpotifyLogo filled={scrolled} />
                    </a>
                    <a href={'https://www.instagram.com/lordlawrenceband'} target="_blank">
                        <InstagramLogo filled={scrolled} />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Header;