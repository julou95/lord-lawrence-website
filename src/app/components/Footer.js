import { useState } from "react";
import Link from "next/link";
import EmailIcon from "./EmailIcon";
import FilesIcon from "./FilesIcon";
import InstagramLogo from "./InstagramLogo";
import Mx3Logo from "./Mx3Logo";
import SpotifyLogo from "./SpotifyLogo";

export default function Footer() {
    const [counter, setCounter] = useState(0);

    return (
        <>
            <div className="flex flex-col">
                <Link href={'mailto:info@lordlawrenceband.ch'} className="flex justify-center items-center text-xl p-5 transition hover:bg-neutral-700">
                    <EmailIcon />
                    info@lordlawrenceband.ch
                </Link>
                <a href={'https://1drv.ms/f/c/2f1371dffe0b4a0b/EiPsqyW2F79MvsJpaMJ33ssBjLOeIMZ5QCZBuBVE-UUR7A?e=nl45LT'} target="_blank" className="flex justify-center items-center text-xl p-5 transition hover:bg-neutral-700">
                    <FilesIcon />
                    Media Material
                </a>
            </div>
            <div className="flex flex-row justify-center items-center mt-20">
                <a href={'https://mx3.ch/lordlawrencethelardguitar'} target="_blank" className="p-5 hover:bg-neutral-700"><Mx3Logo filled /></a>
                <a href={'https://open.spotify.com/artist/1k4FnGJS0FNsIGuN6uZE6Q?si=htultynnQDevw63bVi_QUA'} target="_blank" className="p-5 hover:bg-neutral-700"><SpotifyLogo filled /></a>
                <a href={'https://www.instagram.com/lordlawrenceband'} target="_blank" className="p-5 hover:bg-neutral-700"><InstagramLogo filled /></a>
            </div>
            <div className="flex justify-center mt-5 mb-2 border-t-2 border-neutral-700 pt-4">&copy; Lord Lawrence & The Lard Guitar | made with&nbsp;<span onClick={() => setCounter(counter+1)}>{counter === 10 ? '🍆' : '❤️'}</span></div>
        </>
    )
}