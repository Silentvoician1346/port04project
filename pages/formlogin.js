import Link from 'next/link'

export default function FormLogin() {
    return(
        <div class="overflow-hidden w-[360px] sm:w-[1024px] h-[1350px] sm:h-[437px] bg-white my-[20px] py-[5px] rounded-lg mb-[0px] sm:mb-[100px]">
            <div class="w-[335px] sm:w-full m-[10px] p-[5px] pl-[10px] mb-[15px] bg-black text-white font-bold rounded-lg">FORM PENDAFTARAN</div>
            <form class="grid grid-cols-1 sm:grid-cols-4 w-full h-[328px] place-items-center">
                {/* CARD 1 */}
                <div class="flex-auto w-[228px] h-[328px] bg-gray-200 mx-[10px] border-2 border-gray-400 rounded-lg">
                    <div class="flex w-[52px] h-[52px] bg-gray-400 rounded-full mx-auto my-[10px]">
                        <text class="font-extrabold text-3xl m-auto">1</text>
                    </div>
                    <text class="flex font-extralight text-gray-500 justify-center text-lg my-[10px]">User Login</text>
                    <text class="flex font-bold text-sm my-[5px] mx-[15px]">Username</text>
                    <input class="shadow appearance-none border rounded w-[170px] h-[30px] my-[5px] mx-[15px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"/>
                    <text class="flex font-bold text-sm my-[5px] mx-[15px]">Password</text>
                    <input class="shadow appearance-none border rounded w-[170px] h-[30px] my-[5px] mx-[15px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="text" placeholder="Password"/>
                    <text class="flex font-bold text-sm my-[5px] mx-[15px]">Confirmation Password</text>
                    <input class="shadow appearance-none border rounded w-[170px] h-[30px] my-[5px] mx-[15px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="confirmpassword" type="text" placeholder="Confirm Your Password"/>
                </div>
                {/* CARD 2 */}
                <div class="flex-auto w-[228px] h-[328px] bg-gray-200 mx-[10px] border-2 border-gray-400 rounded-lg">
                    <div class="flex w-[52px] h-[52px] bg-gray-400 rounded-full mx-auto my-[10px]">
                        <text class="font-extrabold text-3xl m-auto">2</text>
                    </div>
                    <text class="flex font-extralight text-gray-500 justify-center text-lg my-[10px]">Personal Information</text>
                    <text class="flex font-bold text-sm my-[5px] mx-[15px]">E-mail</text>
                    <input class="shadow appearance-none border rounded w-[170px] h-[30px] my-[5px] mx-[15px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="E-mail"/>
                    <text class="flex font-bold text-sm my-[5px] mx-[15px]">Phone Number</text>
                    <input class="shadow appearance-none border rounded w-[170px] h-[30px] my-[5px] mx-[15px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="phone" type="text" placeholder="Phone Number"/>
                    <text class="flex font-bold text-sm my-[5px] mx-[15px]">Referral</text>
                    <div class="shadow appearance-none border rounded w-[170px] h-[30px] my-[5px] mx-[15px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="-" type="text" placeholder="-">-</div>
                </div>
                {/* CARD 3 */}
                <div class="flex-auto w-[228px] h-[328px] bg-gray-200 mx-[10px] border-2 border-gray-400 rounded-lg">
                    <div class="flex w-[52px] h-[52px] bg-gray-400 rounded-full mx-auto my-[10px]">
                        <text class="font-extrabold text-3xl m-auto">3</text>
                    </div>
                    <text class="flex font-extralight text-gray-500 justify-center text-lg my-[10px]">Secret Question</text>
                    <text class="flex font-bold text-sm my-[5px] mx-[15px]">Username</text>
                    <input class="shadow appearance-none border rounded w-[170px] h-[30px] my-[5px] mx-[15px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="question" type="text" placeholder="Question"/>
                    <text class="flex font-bold text-sm my-[5px] mx-[15px]">Password</text>
                    <input class="shadow appearance-none border rounded w-[170px] h-[30px] my-[5px] mx-[15px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="firstanswer" type="text" placeholder="First Answer"/>
                    <text class="flex font-bold text-sm my-[5px] mx-[15px]">Confirmation Password</text>
                    <input class="shadow appearance-none border rounded w-[170px] h-[30px] my-[5px] mx-[15px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="secondanswer" type="text" placeholder="Second Answer"/>
                </div>
                {/* CARD 4 */}
                <div class="flex-auto w-[228px] h-[328px]s">
                    <text class="flex font-bold text-sm my-[5px] mx-[15px]">Select your gender:</text>
                    <div class="relative inline-flex">
                        <svg class="w-2 h-2 absolute top-0 right-0 m-4 pointer-events-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 412 232"><path d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z" fill="#648299" fill-rule="nonzero"/></svg>
                        <select class="border border-gray-300 text-gray-600 h-[30px] ml-[15px] pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none">    
                            <option>Choose One</option>
                            <option>Male</option>
                            <option>Female</option>
                            <option>Cannot Answer</option>
                        </select>
                        </div>
                    <text class="flex font-bold text-sm my-[5px] mx-[15px] mt-[30px]">Your Age:</text>
                    <input class="shadow appearance-none border rounded w-[170px] h-[30px] my-[5px] mx-[15px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="age" type="text" placeholder="Your Age"/>
                    <Link href="/">
                        <button class="w-[228px] sm:w-[228px] h-[46px] bg-yellow-300 hover:bg-gradient-to-b from-yellow-400 to-yellow-600 font-bold text-xs text-center py-[5px] mt-[50px] sm:mt-[125px]">
                            REGISTER
                        </button>
                    </Link>
                </div>

            </form>
        </div>
    )
}
