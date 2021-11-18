import Link from 'next/link'

export default function Contact() {
    return(
        <div class="w-full h-full">
            <div class=" flex w-full h-[full] justify-center mt-[10px]">
                <Link href="/daftar">
                    <img class="w-[70px] h-[20px] sm:w-[155px] sm:h-[40px] m-[1px] sm:m-[7px]" src="/image/contact1.jpg"/>
                </Link>
                <Link href="/daftar">
                    <img class="w-[70px] h-[20px] sm:w-[155px] sm:h-[40px] m-[1px] sm:m-[7px]" src="/image/contact2.jpg"/>
                </Link>
                <Link href="/daftar">
                    <img class="w-[70px] h-[20px] sm:w-[155px] sm:h-[40px] m-[1px] sm:m-[7px]" src="/image/contact3.jpg"/>
                </Link>
                <Link href="/daftar">
                    <img class="w-[70px] h-[20px] sm:w-[155px] sm:h-[40px] m-[1px] sm:m-[7px]" src="/image/contact4.jpg"/>
                </Link>
                <Link href="/daftar">
                    <img class="w-[70px] h-[20px] sm:w-[155px] sm:h-[40px] m-[1px] sm:m-[7px]" src="/image/contact5.jpg"/>
                </Link>
            </div>
            <div class="flex flex-1 w-full h-[100px] bg-[#07121e] mx-[0px] sm:mx-[10px] my-[20px] justify-center">
                <div class="w-[84px] h-[48px] px-[10px] my-auto">
                    <text class="flex text-white font-bold text-xs justify-center pb-[2px]">BCA</text>
                    <img src="/image/online1.gif" />
                </div>r
                <div class="w-[84px] h-[48px] px-[10px] my-auto">
                    <text class="flex text-white font-bold text-[10px] justify-center pb-[2px]">MANDIRI</text>
                    <img class="w-[100px]" src="/image/online1.gif" />
                </div>
                <div class="w-[84px] h-[48px] px-[10px] my-auto">
                    <text class="flex text-white font-bold text-xs justify-center pb-[2px]">BNI</text>
                    <img src="/image/online1.gif" />
                </div>
                <div class="w-[84px] h-[48px] px-[10px] my-auto">
                    <text class="flex text-white font-bold text-xs justify-center pb-[2px]">BRI</text>
                    <img src="/image/online1.gif" />
                </div>
                <div class="w-[84px] h-[48px] px-[10px] my-auto">
                    <text class="flex text-white font-bold text-[10px] justify-center pb-[2px]">DANAMON</text>
                    <img src="/image/online1.gif" />
                </div>
                <div class="w-0 sm:w-[1px] h-[48px] mx-[0px] sm:mx-[10px] my-auto bg-blue-200 "/>
                <img class="w-0 sm:w-[84px] h-[48px] mx-[0px] sm:mx-[10px] my-auto" src="/image/logo1.png"/>
                <img class="w-0 sm:w-[84px] h-[48px] mx-[0px] sm:mx-[10px] my-auto" src="/image/logo1.png"/>
                <img class="w-0 sm:w-[84px] h-[48px] mx-[0px] sm:mx-[10px] my-auto" src="/image/logo1.png"/>
                <img class="w-0 sm:w-[84px] h-[48px] mx-[0px] sm:mx-[10px] my-auto" src="/image/logo1.png"/>      
            </div>
        </div>
    )
}