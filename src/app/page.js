'use client'

import { useEffect, useCallback, useState } from "react";
import Image from "next/image";
import Header from "./components/Header";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";

export default function Home() {
  const [scrolled, setScrolled] = useState(true);
  const [showHiddenGem, setShowHiddenGem] = useState(false)

  const onScroll = useCallback(event => {
      const { scrollY, innerHeight } = window;
      setScrolled(scrollY >= innerHeight)
  }, []);

  function handleShowHiddenGem() {
    let timer;

    setShowHiddenGem(true);
    timer = setTimeout(() => {
      timer = null;
      cancel();
    }, 5000);

    function cancel() {
      setShowHiddenGem(false);
      clearTimeout(timer);
    }
  }

  function onLongPress(element) {
    let timer;
    window.addEventListener('touchstart', () => { 
      timer = setTimeout(() => {
        timer = null;
        handleShowHiddenGem()
      }, 2500);
    });
    window.addEventListener('mousedown', () => { 
      timer = setTimeout(() => {
        timer = null;
        handleShowHiddenGem()
      }, 2500);
    });
  
    function cancel() {
      clearTimeout(timer);
    }
  
    window.addEventListener('mouseup', cancel);
    window.addEventListener('touchend', cancel);
    window.addEventListener('touchmove', cancel);
  }

  useEffect(() => {
      window.addEventListener("scroll", onScroll, { passive: true });
      return () => {
          window.removeEventListener("scroll", onScroll, { passive: true })
      }
  }, [onScroll])

  return (
    <>
      <div className="min-w-screen sm:min-w-100 min-h-screen overflow-y-hidden overflow-x-hidden bg-black flex justify-center items-center">
        <div className="absolute container text-7xl sm:text-8xl md:text-9xl lg:text-[150px] text-shadow-lg/60 font-(family-name:--font-anton-sc) p-9">Lord Lawrence & The Lard Guitar</div>
        <video className="min-h-screen xxl:min-h-max object-cover" autoPlay muted loop playsInline>
          <source src="/money-promo.mp4" type="video/mp4"></source>
        </video>
      </div>
      <Header scrolled={scrolled} />
      <div className="min-w-screen sm:min-w-100 bg-slate-50 text-slate-900">
        <div className="container flex flex-col lg:flex-row mx-auto p-4 pt-15">
            <div className="lg:mr-10 basis-1/2">
              <Image src={'/group.jpg'} width={0} height={0} sizes="100vw" className="mb-10 w-[100%] h-auto rounded-lg" alt="group picture" />
            </div>
            <span className="text-lg lg:text-xl basis-1/2 mb-20">
              <h1 className="text-center lg:text-left">About</h1>
              Since their formation in 2023, the four enthusiastic musicians have been transporting audiences into a world in which the D-standard guitars and hard drum beats invite you to headbang along. The band feels at home in stoner rock, although other musical genres can also be heard in the songs. The gripping melodies are guaranteed to reverberate in your ears even after the concert. Look forward to an exciting, varied concert that you won&apos;t forget in a hurry.</span>
        </div>
      </div>
      <div className="min-w-screen sm:min-w-100">
        <div className="container mx-auto p-4 py-15">
          <h1 className="text-center">Music</h1>
          <iframe src="https://open.spotify.com/embed/artist/1k4FnGJS0FNsIGuN6uZE6Q?utm_source=generator" width="100%" height="352" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </div>
      </div>
      <div className="min-w-screen sm:min-w-100 bg-slate-50 text-slate-900">
        <div className="container mx-auto p-4 py-15">
          <h1 className="text-center">Gallery</h1>
          <Gallery />
        </div>
      </div>
      <div className="min-w-screen sm:min-w-100 shadow-md">
        <div className="container mx-auto p-4 pt-15">
          <h1 className="text-center select-none">Get In <span onTouchStart={(e) => onLongPress(e)} onMouseDown={(e) => onLongPress(e)}>Touch</span></h1>
          <Footer />
        </div>
      </div>
      {
        showHiddenGem &&
          <div className="fixed flex top-0 left-0 right-0 bottom-0 justify-center items-center bg-(--opac-black)">
            <Image width={0} height={0} sizes="100vw" className="w-[100%] h-auto" src="/images/hug.gif" alt="hidden gem" />
          </div>
      }
    </>
  );
}
