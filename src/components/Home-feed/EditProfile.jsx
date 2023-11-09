

export default function Header100x() {
    return (
        <div className="bg-neutral-1000">
            <div className="flex flex-col px-4 w-screen h-screen gap-3">
                <div className="flex w-full py-3 items-center justify-between self-stretch">
                    <div className=" flex items-center gap-5">
                        <a href="./index.html"><img src="../../public/images/arrow-left.svg" className="w-6 h-6 shrink-0" /></a>
                        <span className="text-base font-bold">Edit Prifile</span>
                    </div>
                    <button className="py-2 px-5 bg-neutral-50 flex justify-center items-center shadow-button backdrop-blur-button rounded-follow gap-2.5
      hover:bg-neutral-200 disabled:bg-neutral-500">
                        <span className="font-inter text-sm font-bold text-neutral-1000">Save</span>
                    </button>
                </div>
                <div className="flex flex-col items-start gap-3 self-stretch relative">
                    <div className="w-full h-[12.5rem] shrink-0 flex items-center justify-center
      bg-[url('../../public/images/profile-cover-2.svg')] bg-no-repeat bg-cover">
                        <div className="flex gap-2">
                            <img src="../../public/images/upload-image.svg" className="w-8 h-8" />
                            <img src="../../public/images/close-edit.svg" className="w-8 h-8" />
                        </div>
                    </div>
                    <div className="w-20 h-20 inline-flex shrink-0 items-center justify-center border-4 absolute left-5 -bottom-4 rounded-[12.5rem]
          border-neutral-1000 bg-[url('../../public/images/user-avatar.svg')] bg-no-repeat bg-cover">
                        <img src="../../public/images/upload-image.svg" className="w-8 h-8" />
                    </div>
                </div>
                <div className="relative flex py-4 px-3 mt-4 items-center gap-2.5 rounded border border-neutral-700 focus-within:border-twitter—blue">
                    <label htmlFor="inputText" className="text-neutral-500 text-xs absolute bg-neutral-1000 px-1 left-3 -top-2">Name</label>
                    <input type="text" placeholder="Name" name="inputText" defaultValue="aarushe reddy" className="bg-black placeholder:text-neutral-500 text-md font-normal focus:outline-none w-full" />
                </div>
                <div className="relative flex py-4 px-3 mt-4 items-start gap-2.5 rounded border border-neutral-500 focus-within:border-twitter—blue">
                    <label htmlFor="inputText" className="text-neutral-500 text-xs absolute bg-neutral-1000 px-1 left-3 -top-2">Bio</label>
                    <textarea className="bg-black resize-none text-neutral-50 text-md font-normal placeholder:text-neutral-500 focus:outline-none 
          w-full" defaultValue={"Digital Goodies Team - Web & Mobile UI/UX development; Graphics; Illustrations\n            "} />
                </div>
                <div className="relative flex py-4 px-3 mt-4 items-center gap-2.5 rounded border border-neutral-700 focus-within:border-twitter—blue">
                    <label htmlFor="inputText" className="text-neutral-500 text-xs absolute bg-neutral-1000 px-1 left-3 -top-2">Location</label>
                    <input type="text" placeholder="Location" name="inputText" className="bg-black placeholder:text-neutral-500 text-md font-normal focus:outline-none w-full" />
                </div>
                <div className="relative flex py-4 px-3 mt-4 items-center gap-2.5 rounded border border-neutral-700 focus-within:border-twitter—blue">
                    <label htmlFor="inputText" className="text-neutral-500 text-xs absolute bg-neutral-1000 px-1 left-3 -top-2">Website</label>
                    <input type="text" placeholder="Website" name="inputText" className="bg-black placeholder:text-neutral-500 text-md font-normal focus:outline-none w-full" />
                </div>
            </div>

        </div>

    );
}

