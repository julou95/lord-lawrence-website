import Image from "next/image";
import Header from "./components/Header";
import Gallery from "./components/Gallery";

export default function Home() {
  return (
    <>
      <div className="min-w-screen min-h-screen overflow-y-hidden bg-black flex justify-center items-center">
        <div className="absolute container text-8xl lg:text-[150px] text-shadow-lg/60 font-(family-name:--font-anton-sc) p-9">Lord Lawrence & The Lard Guitar</div>
        <video className="min-h-screen object-cover" autoPlay muted loop>
          <source src="/money-promo.mp4" type="video/mp4"></source>
          your browser does
        </video>
        
      </div>
      <Header />
      <div className="min-w-screen min-h-120 bg-slate-50 text-slate-900">
        <div className="container flex flex-col lg:flex-row mx-auto p-4 pt-15">
            <div className="lg:mr-10 basis-1/2">
              <Image src={'/group.jpg'} width={0} height={0} sizes="100vw" className="mb-10 w-[100%] h-auto rounded-lg" alt="group picture" />
            </div>
            <span className="text-lg lg:text-xl basis-1/2 mb-20">
              <h1 className="text-center lg:text-left">About</h1>
              Since their formation in 2023, the four enthusiastic musicians have been transporting audiences into a world in which the D-standard guitars and hard drum beats invite you to headbang along. The band feels at home in stoner rock, although other musical genres can also be heard in the songs. The gripping melodies are guaranteed to reverberate in your ears even after the concert. Look forward to an exciting, varied concert that you won&apos;t forget in a hurry.</span>
        </div>
      </div>
      <div className="min-w-screen min-h-120">
        <div className="container mx-auto p-4 py-15">
          <h1 className="text-center">Music</h1>
          <iframe src="https://open.spotify.com/embed/artist/1k4FnGJS0FNsIGuN6uZE6Q?utm_source=generator" width="100%" height="352" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </div>
      </div>
      <div className="min-w-screen min-h-120 bg-slate-50 text-slate-900">
        <div className="container mx-auto p-4 py-15">
          <h1 className="text-center">Gallery</h1>
          <Gallery />
        </div>
      </div>
      <div className="min-w-screen min-h-120">
        <div className="container mx-auto p-4 pt-15">
          <h1 className="text-center">Contact</h1>
        </div>
      </div>
    </>
  );
}
