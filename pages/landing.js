import React, { Component } from 'react';
import Link from 'next/link'
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default function Landing() {
    return(
        <div class="flex w-[360px] sm:w-[1030px] h-[363px]">
            <div class="w-[358px] sm:w-[780px] h-full">
                <Carousel showStatus={false} showThumbs={false} autoPlay={true} infiniteLoop={true} dynamicHeight={true}>
                    <Link href="/premium">
                        <button class="h-[200px] w-[700px] sm:h-[357px] sm:w-[746px]">
                            <img src="/image/carouselbig1.jpg" />
                        </button>
                    </Link>
                    <Link href="/premium">
                        <button class="h-[200px] w-[700px] sm:h-[357px] sm:w-[746px]">
                            <img src="/image/carouselbig1.jpg" />
                        </button>
                    </Link>
                    <Link href="/premium">
                        <button class="h-[200px] w-[700px] sm:h-[357px] sm:w-[746px]">
                            <img src="/image/carouselbig1.jpg" />
                        </button>
                    </Link>
                    <Link href="/premium">
                        <button class="h-[200px] w-[700px] sm:h-[357px] sm:w-[746px]">
                            <img src="/image/carouselbig1.jpg" />
                        </button>
                    </Link>
                    <Link href="/premium">
                        <button class="h-[200px] w-[700px] sm:h-[357px] sm:w-[746px]">
                            <img src="/image/carouselbig1.jpg" />
                        </button>
                    </Link>
                    <Link href="/premium">
                        <button class="h-[200px] w-[700px] sm:h-[357px] sm:w-[746px]">
                            <img src="/image/carouselbig1.jpg" />
                        </button>
                    </Link>
                </Carousel>
            </div>
            <div class="flex-col w-[0px] sm:w-[280px] h-full space-y-[10px]">
                <Link href="/premium">
                    <img class="w-[0px] sm:w-[236px] h-[168px] bg-blue-200 mx-auto my-[10px]" src="/image/sideheader1.jpg" />
                </Link>
                <Link href="/premium">
                    <img class="w-[0px] sm:w-[236px] h-[168px] bg-blue-200 mx-auto my-[10px]" src="/image/sideheader1.jpg" />
                </Link>
            </div>
        </div>
    )
}