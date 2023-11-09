


export default function CreateAccountStep3() {
    return <>
        <div className="bg-neutral-1000">
            <main className="flex flex-col px-[0.9375rem] pb-5 items-start gap-3  w-screen h-screen">
                <header className="flex py-3 items-center self-stretch gap-5">
                    <img src="../../public/images/close.svg" className="w-6 h-6" />
                    <h4 className="font-inter text-md font-bold text-neutral-50">Step 3 of 4</h4>
                </header>
                <div className="flex flex-col gap-10 self-stretch">
                    <div>
                        <h2 className="font-inter text-2xl font-bold text-neutral-50 self-stretch">You’ll need a password</h2>
                        <h3 className="text-[0.874rem] font-normal text-neutral-500">
                            Make sure it’s 8 characters or more
                        </h3>
                    </div>
                    <div className="flex flex-col gap-3">
                        <div className="relative flex py-4 px-3 items-center justify-between gap-2.5 rounded border border-twitter—blue self-stretch">
                            <label htmlFor="inputText" className="text-twitter—blue absolute bg-neutral-1000 px-1 left-[1.21rem] -top-3">Password</label>
                            <input type="text" placeholder="Password" name="inputText" className="bg-black text-neutral-50 placeholder:text-neutral-500 focus:outline-none w-full font-inter text-lg font-normal" />
                            <img src="../../public/images/eye.svg" className="w-6 h-6" alt="eye" />
                        </div>
                        <p className="text-twitter—blue text-sm self-end">Didn’t receive a code?</p>
                    </div>
                </div>
                <div className="flex flex-col pt-20 justify-end items-center gap-2.5 flex-[1_1_0] self-stretch">
                    <button className="py-3 px-6 bg-neutral-50 flex justify-center items-center self-stretch shadow-button backdrop-blur-button rounded-create gap-2.5
          hover:bg-neutral-200 disabled:bg-neutral-500">
                        <span className="font-inter text-base font-bold text-neutral-1000"> Next </span>
                    </button>
                </div>
            </main>
        </div>
    </>;
}
