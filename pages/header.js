import Link from 'next/link'

export default function Header() {
    return(
        <div class="w-full h-[190px] sm:h-[170px]">
            <div class="flex w-full h-[85px] pt-[10px] mb-[15px]">
                <Link href="/">
                    <img class="w-[140px] h-[60px] sm:h-[85px]" src="/image/logo1.png" />
                </Link>
                <div class="w-[380px] h-full ml-[5px] sm:ml-[440px]">
                    <form class="flex w-full h-[30px] sm:h-[30px]">
                        <input class="shadow appearance-none border rounded w-[90px] sm:w-[150px] mr-[10px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"/>
                        <input class="shadow appearance-none border rounded w-[90px] sm:w-[150px] mr-[10px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="text" placeholder="Password"/>
                        <Link href="/daftar">
                            <button class="w-[50px] sm:w-[70px] h-full bg-yellow-300 hover:bg-gradient-to-b from-yellow-400 to-yellow-600 font-bold text-xs text-center py-[5px]">
                                Sign In
                            </button>
                        </Link>
                    </form>
                    <form class="flex w-full h-[30px] mt-[15px]">
                        <input class="shadow appearance-none border rounded w-[55px] sm:w-[130px] mr-[5px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="captcha" type="text" placeholder="Captcha"/>
                        <div class="flex w-[135px] sm:w-[175px] h-full mr-[5px]">
                            <div class="w-[40px] sm:w-[55px] h-[23px] bg-gray-400 mr-[5px] rounded-md my-auto text-center font-extrabold">
                                8905
                            </div>
                            <Link href="/daftar">
                                <div class="w-[170px] h-[23px] mr-[10px] my-auto text-[10px] sm:text-sm text-gray-200">
                                    Lupa Password ?
                                </div>
                            </Link>
                        </div>
                        <Link href="/daftar">
                            <button class="w-[50px] sm:w-[70px] h-full bg-red-700 hover:bg-gradient-to-t from-red-900 to-red-600 font-bold text-[10px] text-white text-center py-[5px]">
                                Register
                            </button>
                        </Link>
                    </form>
                </div>
            </div>
            <div class="w-full h-[70px]">
                <div class="flex w-full h-[40px] rounded-2xl bg-gray-600">
                    <Link href="/">
                        <button class="flex-auto bg-gray-400 hover:bg-gradient-to-t from-gray-400 to-gray-500 text-white font-semibold p-auto mr-[1px] rounded-tl-2xl"> Home </button>
                    </Link>
                    <button class="flex-auto bg-gradient-to-b from-black to-blue-900 text-white p-auto mr-[1px]"> Games </button>
                    <Link href="/daftar">
                        <button class="flex-auto bg-gray-400 hover:bg-gradient-to-t from-gray-400 to-gray-500 text-white font-semibold p-auto mr-[1px]"> Daftar </button>
                    </Link>
                    <Link href="/daftar">
                        <button class="flex-none sm:flex-auto bg-gray-400 hover:bg-gradient-to-t from-gray-400 to-gray-500 text-white font-semibold p-0 sm:p-auto mr-[1px] w-0 h-0 sm:w-auto sm:h-auto opacity-0 sm:opacity-100"> Panduan </button>
                    </Link>
                    <Link href="/daftar">
                        <button class="flex-none sm:flex-auto bg-gray-400 hover:bg-gradient-to-t from-gray-400 to-gray-500 text-white font-semibold p-0 sm:p-auto mr-[1px] w-0 h-0 sm:w-auto sm:h-auto opacity-0 sm:opacity-100"> Referral </button>
                    </Link>
                    <Link href="/daftar">
                        <button class="flex-none sm:flex-auto bg-gray-400 hover:bg-gradient-to-t from-gray-400 to-gray-500 text-white font-semibold p-0 sm:p-auto mr-[1px] w-0 h-0 sm:w-auto sm:h-auto opacity-0 sm:opacity-100"> Promo </button>
                    </Link>
                    <Link href="/premium">
                        <button class="flex-auto bg-gray-400 hover:bg-gradient-to-t from-gray-400 to-gray-500 text-white font-semibold p-auto rounded-tr-2xl"> Premium </button>
                    </Link>
                </div>
                <div class="flex w-full h-[30px] pr-[120px] rounded-b-2xl bg-gray-600">
                    <Link href="/courses">
                        <button class="flex-auto bg-gradient-to-t from-black to-blue-900 hover:bg-gradient-to-b from-black to-blue-900 text-white font-extralight p-auto mr-[1px] rounded-bl-2xl"> Course 1 </button>
                    </Link>
                    <Link href="/courses">
                        <button class="flex-auto bg-gradient-to-t from-black to-blue-900 hover:bg-gradient-to-b from-black to-blue-900 text-white font-extralight p-auto mr-[1px]"> Course 2 </button>
                    </Link>
                    <Link href="/courses">
                        <button class="flex-auto bg-gradient-to-t from-black to-blue-900 hover:bg-gradient-to-b from-black to-blue-900 text-white font-extralight p-auto mr-[1px]"> Course 3 </button>
                    </Link>
                    <Link href="/courses">
                        <button class="flex-auto bg-gradient-to-t from-black to-blue-900 hover:bg-gradient-to-b from-black to-blue-900 text-white font-extralight p-auto mr-[1px] w-0 h-0 sm:w-auto sm:h-auto opacity-0 sm:opacity-100"> Course 4 </button>
                    </Link>
                    <Link href="/courses">
                        <button class="flex-auto bg-gradient-to-t from-black to-blue-900 hover:bg-gradient-to-b from-black to-blue-900 text-white font-extralight p-auto mr-[1px] w-0 h-0 sm:w-auto sm:h-auto opacity-0 sm:opacity-100"> Course 5 </button>
                    </Link>
                    <Link href="/courses">
                        <button class="flex-auto bg-gradient-to-t from-black to-blue-900 hover:bg-gradient-to-b from-black to-blue-900 text-white font-extralight p-auto mr-[1px] w-0 h-0 sm:w-auto sm:h-auto opacity-0 sm:opacity-100"> Course 6 </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}