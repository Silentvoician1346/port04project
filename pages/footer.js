import Link from 'next/link'

export default function Footer() {
    return(
        <div class="w-full h-[95px]">
            <Link href="/">
                <button class="w-full text-white font-semibold h-[35px] text-center">
                    PANGYA ONLINE
                </button>
            </Link>
            <div class="w-full text-white text-center py-[20px]">
                @2021 ndrian
            </div>
        </div>
    )
}