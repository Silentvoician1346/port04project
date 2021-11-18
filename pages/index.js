import Head from 'next/head'
import Link from 'next/link'
import Marquee from "react-fast-marquee";


import Contact from './contact';
import Content from './content';
import Footer from './footer';
import Header from './header';
import CarouselSmall from './carousel';
import Landing from './landing';


export default function Home() {
  return (
    <div class="container w-screen sm:max-w-full h-full bg-background1 bg-center bg-fixed">
      {/* MARQUEE */}
      <Marquee pauseOnHover='true' gradient={false}>
        <div class="w-full h-[75px] sm:h-[35px] bg-black text-yellow-300 text-2xl sm:text-xl pt-[22px] sm:pt-[0px]">
          PangYa was an online multiplayer casual golf simulation game designed by Korean development company Ntreev Soft and NCSoft. From 2005 until March 2009, the game was known as Albatross18 in North America.
        </div>
      </Marquee>
      <div ></div>
      <div class="w-screen sm:w-[1054px] mx-auto px-[2px] sm:px-[15px] h-full bg-gradient-to-r from-blue-900 via-blue-500 to-blue-900 relative z-10 justify-center">
      {/* HEADER */}
      <Header />
      {/* LANDING */}
      <Landing />
      {/* CONTENT */}
      <Content />
      {/* CAROUSEL */}
      <CarouselSmall />
      {/* CONTACT */}
      <Contact />
      {/* FOOTER */}
      <Footer />
      </div>
    </div>
  )
}
