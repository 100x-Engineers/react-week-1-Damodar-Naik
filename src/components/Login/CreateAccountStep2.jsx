


export default function CreateAccountStep2() {
    return <>
        <div className="bg-neutral-1000">
            <main className="flex flex-col px-[0.9375rem] pb-5 items-start gap-3  w-screen h-screen">
                <header className="flex py-3 items-center self-stretch gap-5">
                    <img src="../../public/images/close.svg" className="w-6 h-6" />
                    <h4 className="font-inter text-md font-bold text-neutral-50">Step 2 of 4</h4>
                </header>
                <div className="flex flex-col gap-5 self-stretch">
                    <h2 className="font-inter text-2xl font-bold text-neutral-50 self-stretch">Create your account</h2>
                    <div className="relative flex py-4 px-3 items-center justify-between gap-2.5 rounded border border-twitter—blue self-stretch">
                        <label htmlFor="inputText" className="text-neutral-500 absolute bg-neutral-1000 px-1 left-[1.21rem] -top-3">Name</label>
                        <input type="text" placeholder="Name" name="inputText" defaultValue="Damodar Naik" className="bg-black text-neutral-50 placeholder:text-neutral-500 focus:outline-none w-full font-inter text-lg font-normal" />
                        <img src="../../public/images/valid.svg" className="w-6 h-6" alt="valid" />
                    </div>
                    <div className="relative flex py-4 px-3 items-center justify-between gap-2.5 rounded border border-neutral-500 self-stretch">
                        <label htmlFor="inputText" className="text-neutral-500 absolute bg-neutral-1000 px-1 left-[1.21rem] -top-3">Email</label>
                        <input type="text" placeholder="Email" name="inputText" defaultValue="dnaik051999@gmail.com" className="bg-black text-neutral-50 placeholder:text-neutral-500 focus:outline-none w-full font-inter text-lg font-normal" />
                        <img src="../../public/images/valid.svg" className="w-6 h-6" alt="valid" />
                    </div>
                    <div className="relative flex py-4 px-3 items-center justify-between gap-2.5 rounded border border-neutral-500 self-stretch">
                        <label htmlFor="inputText" className="text-neutral-500 absolute bg-neutral-1000 px-1 left-[1.21rem] -top-3">Date
                            of birth</label>
                        <input type="text" placeholder="Date of birth" name="inputText" defaultValue="05 september 1999" className="bg-black text-neutral-50 placeholder:text-neutral-500 focus:outline-none w-full font-inter text-lg font-normal" />
                        <img src="../../public/images/valid.svg" className="w-6 h-6" alt="valid" />
                    </div>
                </div>
                <div className="flex flex-col self-stretch items-center justify-end flex-[1_1_0]">
                    <a href="./create-account-step-3.html" className="flex self-stretch">
                        <button className="py-2 px-5 flex justify-center grow items-center shadow-button rounded-create gap-2.5 bg-twitter—blue border border-stroke self-stretch">
                            <span className="font-inter text-base font-bold text-neutral-50"> Sign up </span>
                        </button>
                    </a>
                </div>
            </main>
        </div>
    </>;
}
