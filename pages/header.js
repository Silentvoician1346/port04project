

export default function Header() {
    return(
        <div class="w-full h-[170px]">
            <div class="flex w-full h-[85px] pt-[10px] mb-[15px]">
                <img class="h-[85px]" src="/image/logo1.png" />
                <div class="w-[380px] h-full ml-[440px]">
                    <div class="flex w-full h-[30px]">
                        <div class="w-[150px] h-full bg-white drop-shadow-lg rounded-sm mr-[5px] pl-[10px] text-gray-400">
                            Username
                        </div>
                        <div class="w-[150px] h-full bg-white drop-shadow-lg rounded-sm mr-[5px] pl-[10px] text-gray-400">
                            Password
                        </div>
                        <div class="w-[70px] h-full bg-yellow-300 font-bold text-xs text-center py-[5px]">
                            Sign In
                        </div>
                    </div>
                    <div class="flex w-full h-[30px] mt-[15px]">
                        <div class="w-[130px] h-full bg-white drop-shadow-lg rounded-sm mr-[5px] pl-[10px] text-gray-400">
                            Captcha
                        </div>
                        <div class="flex w-[170px] h-full mr-[5px]">
                            <div class="w-[55px] h-[23px] bg-gray-400 mr-[5px] rounded-md my-auto text-center font-extrabold">
                                8905
                            </div>
                            <div class="w-[110px] h-[23px] mr-[5px] my-auto text-sm text-yellow-500">
                                Lupa Password ?
                            </div>
                        </div>
                        <div class="w-[70px] h-full bg-red-700 text-white font-bold text-xs text-center py-[5px]">
                            Register
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-full h-[70px]">
                <div class="flex w-full h-[40px] rounded-2xl bg-gray-600">
                    <button class="flex-auto bg-gray-400 hover:bg-gradient-to-t from-gray-400 to-gray-500 text-white font-semibold p-auto mr-[1px] rounded-tl-2xl"> Home </button>
                    <button class="flex-auto bg-gradient-to-b from-black to-blue-900 text-white p-auto mr-[1px]"> Games </button>
                    <button class="flex-auto bg-gray-400 hover:bg-gradient-to-t from-gray-400 to-gray-500 text-white font-semibold p-auto mr-[1px]"> Daftar </button>
                    <button class="flex-auto bg-gray-400 hover:bg-gradient-to-t from-gray-400 to-gray-500 text-white font-semibold p-auto mr-[1px]"> Panduan </button>
                    <button class="flex-auto bg-gray-400 hover:bg-gradient-to-t from-gray-400 to-gray-500 text-white font-semibold p-auto mr-[1px]"> Referral </button>
                    <button class="flex-auto bg-gray-400 hover:bg-gradient-to-t from-gray-400 to-gray-500 text-white font-semibold p-auto mr-[1px]"> Promo </button>
                    <button class="flex-auto bg-gray-400 hover:bg-gradient-to-t from-gray-400 to-gray-500 text-white font-semibold p-auto rounded-tr-2xl"> Contact </button>
                </div>
                <div class="flex w-full h-[30px] pr-[120px] rounded-b-2xl bg-gray-600">
                    <button class="flex-auto bg-gradient-to-t from-black to-blue-900 hover:bg-gradient-to-b from-black to-blue-900 text-white font-extralight p-auto mr-[1px] rounded-bl-2xl"> Course 1 </button>
                    <button class="flex-auto bg-gradient-to-t from-black to-blue-900 hover:bg-gradient-to-b from-black to-blue-900 text-white font-extralight p-auto mr-[1px]"> Course 2 </button>
                    <button class="flex-auto bg-gradient-to-t from-black to-blue-900 hover:bg-gradient-to-b from-black to-blue-900 text-white font-extralight p-auto mr-[1px]"> Course 3 </button>
                    <button class="flex-auto bg-gradient-to-t from-black to-blue-900 hover:bg-gradient-to-b from-black to-blue-900 text-white font-extralight p-auto mr-[1px]"> Course 4 </button>
                    <button class="flex-auto bg-gradient-to-t from-black to-blue-900 hover:bg-gradient-to-b from-black to-blue-900 text-white font-extralight p-auto mr-[1px]"> Course 5 </button>
                    <button class="flex-auto bg-gradient-to-t from-black to-blue-900 hover:bg-gradient-to-b from-black to-blue-900 text-white font-extralight p-auto mr-[1px]"> Course 6 </button>
                </div>
            </div>
        </div>
    )
}