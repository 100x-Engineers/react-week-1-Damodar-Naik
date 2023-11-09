import Avatar from '../assets/user-avatar.svg'
import Avatar1 from '../assets/avatar1.svg'
import Avatar2 from '../assets/tweet-user-avatar.svg'
import HomeActive from '../assets/home-active.svg'
import ProfileInactive from '../assets/profile-inactive.svg'
import Logo from '../assets/100x.svg'


import UserAvatar from '../components/Home-feed/userAvatar';
import TweetsComponent from '../components/Home-feed/Tweet';
import { useState } from 'react';
import AddTweetButton from '../components/AddTweetButton';


export default function HomeFeed() {

    const [showCopyToast, setShowCopyToast] = useState(false);

    const [tweets, setTweets] = useState([{
        avatar: Avatar1,
        userName: 'one',
        userHandle: 'imOne',
        tweetTime: '10h',
        commentsCount: 11,
        reTweetCount: 270,
        likesCount: 11,
        reachCount: '99.6K',
        tweetText: "Don't wish for it, work for it. OK?",
    },
    {
        avatar: Avatar1,
        userName: 'two',
        userHandle: 'imTwo',
        tweetTime: '32m',
        commentsCount: 11,
        reTweetCount: 270,
        likesCount: 11,
        reachCount: '99.6K',
        tweetText: `i've seen people absolutely despise auto layout in figma but i think it's a lifesaver-
        1. tidies everything nice and compact 
        2. makes responsive design effortless
        3. no manual adjustments post any tweaks
        4. saves a tonnn of time
        sorry, but will stay an auto layout maxi all life.`,
    },
    {
        avatar: Avatar2,
        userName: 'two',
        userHandle: 'imTwo',
        tweetTime: '32m',
        commentsCount: 11,
        reTweetCount: 270,
        likesCount: 11,
        reachCount: '99.6K',
        tweetText: `Writing gets easier after the first sentence.
        Lifting gets easier after the first set.
        People think and think and think until they finally decide to act. Their attention shifts from
        internal
        to
        external, and the difficulty they created in their mind vanishes.`,
    },
    ]);

    return (<>
        <div className="h-screen bg-neutral-1000">

            <header className="flex py-3 px-4 items-center gap-32 border-b border-b-neutral-700">
                <div className='w-9 h-9'><UserAvatar url={Avatar} /></div>
                <img src={Logo} />
            </header>
            <div className="border-b border-neutral-700 px-20 pt-5 gap-40 flex justify-center items-center">
                <div className="text-neutral-400 font-inter flex flex-col justify-center gap-4">
                    <h4 className="w-max">For you</h4>
                    <div className="h-[0.1875rem] bg-twitter—blue" />
                </div>
                <div className="text-neutral-400 font-inter flex flex-col justify-between gap-4">
                    <h4 className="w-max">Following</h4>
                    <div className="h-[0.1875rem] w-14" />
                </div>
            </div>

            {
                tweets.map((tweet, index) => {
                    return (<TweetsComponent key={index} {...tweet} />)
                })
            }

            <AddTweetButton />

            {showCopyToast && <div className="fixed flex items-center justify-center bottom-20 w-screen">
                <div className="flex py-3 px-8 items-center justify-center gap-[0.625rem] bg-searchbar-fill rounded-[6.25rem]">
                    Copied to clipboard.
                </div>
            </div>}

            <footer className="flex fixed bottom-0 border-t border-b-neutral-1000 bg-neutral-1000 w-screen py-[1.125rem] px-6 justify-center items-center gap-10">
                <img src={HomeActive} className="w-6 h-6" />
                <img src={ProfileInactive} className="w-6 h-6" />
            </footer>

        </div>
    </>);
}
