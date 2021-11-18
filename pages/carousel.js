import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Link from 'next/link'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


export default class CarouselSmall extends Component{
    render() {
        return (
            <Carousel showStatus={false} showThumbs={false} autoPlay={true} infiniteLoop={true} dynamicHeight={true} centerMode={true} centerSlidePercentage='34'>
                <Link href="/premium">
                    <button class="h-[75px] sm:h-[162px] w-[150px] sm:w-[293px]">
                        <img src="/image/carouselsmall1.jpg" />
                    </button>
                </Link>
                <Link href="/premium">
                    <button class="h-[75px] sm:h-[162px] w-[150px] sm:w-[293px]">
                        <img src="/image/carouselsmall1.jpg" />
                    </button>
                </Link>
                <Link href="/premium">
                    <button class="h-[75px] sm:h-[162px] w-[150px] sm:w-[293px]">
                        <img src="/image/carouselsmall1.jpg" />
                    </button>
                </Link>
                <Link href="/premium">
                    <button class="h-[75px] sm:h-[162px] w-[150px] sm:w-[293px]">
                        <img src="/image/carouselsmall1.jpg" />
                    </button>
                </Link>
                <Link href="/premium">
                    <button class="h-[75px] sm:h-[162px] w-[150px] sm:w-[293px]">
                        <img src="/image/carouselsmall1.jpg" />
                    </button>
                </Link>
            </Carousel>
        );
    }
};