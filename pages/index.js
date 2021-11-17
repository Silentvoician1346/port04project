import Head from 'next/head'
import Marquee from "react-fast-marquee";

import CarouselSmall from './carousel'
import Contact from './contact'
import Content from './content'
import Footer from './footer'
import Header from './header'
import Landing from './landing'

export default function Home() {
  return (
    <div class="container max-w-full h-full bg-background1 bg-center bg-fixed">
      {/* MARQUEE */}
      <Marquee pauseOnHover='true'>
        <div class="w-full h-[35px] bg-black text-yellow-300">
          PangYa was an online multiplayer casual golf simulation game designed by Korean development company Ntreev Soft and NCSoft. From 2005 until March 2009, the game was known as Albatross18 in North America.
        </div>
      </Marquee>
      <div ></div>
      <div class="w-[1054px] mx-auto px-[15px] h-full bg-gradient-to-r from-blue-900 via-blue-500 to-blue-900 relative z-10 justify-center">
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
