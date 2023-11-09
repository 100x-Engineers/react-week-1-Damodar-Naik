import Add from '../assets/add.svg'


function AddTweetButton() {
    return (
        <div className="fixed flex items-center justify-center bottom-[4.5rem] right-[1.31rem] bg-twitter—blue rounded-[2rem] w-16 h-16">
            <img src={Add} className="w-8 h-8" />
        </div>
    );
}

export default AddTweetButton