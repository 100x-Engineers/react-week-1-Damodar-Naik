
import Header from '../components/Login/Header100x'
export default function Login() {
    return <>
        <div className="bg-neutral-1000">
            <div className="flex flex-col gap-[12rem] w-screen h-screen">
                <Header />
                <div className="px-7 flex flex-col">
                    <h3 className="font-inter text-[1.9375rem] font-extrabold text-neutral-50 mb-3">Happening now</h3>
                    <h4 className="font-inter text-base font-medium text-neutral-50">Join today.</h4>
                    <a href="./create-account-step-1.html" className="flex self-stretch mt-10">
                        <button className="py-2 px-6 flex-grow bg-neutral-50 flex justify-center items-center self-stretch shadow-button backdrop-blur-button rounded-create gap-2.5
                hover:bg-neutral-200 disabled:bg-neutral-500">
                            <span className="font-inter text-base font-bold text-neutral-1000"> create account </span>
                        </button>
                    </a>
                    <div className="flex items-center justify-center gap-1 mt-10 mb-10 text-neutral-700">
                        <hr className="bg-neutral-700 text-neutral-700 h-[0.0625rem] block w-full border-0 self-center" />
                        <p className="font-normal text-base text-center text-neutral-50 block self-center">or</p>
                        <hr className="bg-neutral-700 text-neutral-700 h-[0.0625rem] block w-full border-0 self-center" />
                    </div>
                    <p className="font-inter font-medium text-xl text-neutral-50 mb-5">Already have an account?</p>
                    <button className="py-2 px-5 flex justify-center items-center self-stretch shadow-button backdrop-blur-button rounded-create gap-2.5 border border-stroke">
                        <span className="font-inter text-base font-bold text-twitter—blue"> Sign in </span>
                    </button>
                </div>
            </div>
        </div>
    </>;
}
