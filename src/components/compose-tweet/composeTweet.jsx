

export default function Header100x() {
    return (
        <div className="bg-neutral-1000">
            <div className="flex flex-col w-screen h-screen">
                <header className="flex w-full py-3 px-4 items-center justify-center">
                    <img src="../../public/images/100x.svg" className="w-14 block" />
                </header>
                <div className="flex w-full py-3 px-4 items-center justify-between">
                    <img src="../../public/images/close.svg" className="w-6 h-6 shrink-0" />
                    <button className="py-2 px-6 bg-twitter—blue inline-flex justify-center items-center shadow-button backdrop-blur-button rounded-post gap-[0.625rem]
          hover:bg-twitter—blue-hover disabled:bg-twitter—blue-disabled">
                        <span className="font-inter text-sm font-bold text-neutral-50"> Post </span>
                    </button>
                </div>
                <div className="flex py-2 px-4 items-center justify-center gap-3">
                    <img src="../../public/images/user-avatar.svg" className="w-9 h-9 shrink-0" />
                    <input type="text" placeholder="What’s happening?!" className="flex-[1_0_0] focus:outline-none border-l-[0.0625rem] text-neutral-50 border-l-twitter—blue bg-neutral-1000 placeholder:text-neutral-600" />
                </div>
                <footer className="fixed bottom-0 flex w-screen py-3 px-4 items-center gap-5 border-t border-neutral-800 ">
                    <span className="font-inter text-sm text-neutral-500 font-normal">31/280</span>
                </footer>
            </div>

        </div>
    );
}

