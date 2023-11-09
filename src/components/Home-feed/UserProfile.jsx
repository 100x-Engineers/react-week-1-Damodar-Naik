import Avatar from '../../assets/user-avatar.svg'
import Avatar1 from '../../assets/avatar1.svg'
import Avatar2 from '../../assets/tweet-user-avatar.svg'
import UserAvatar from './userAvatar';
import ProfileCoverPicture from '../../assets/profile-cover-picture.svg'
import CalenderIcon from '../../assets/calendar-icon.svg'
import LinkIcon from '../../assets/link-icon.svg'
import TweetsComponent from './Tweet';
import { useState } from 'react';
import AddTweetButton from '../AddTweetButton';




export default function UserProfile() {

    const [followersCount, setFollowersCount] = useState(118);
    const [followingCount, setFollowingCount] = useState(217);

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

    return (
        <div className="bg-neutral-1000">
            <div className="flex flex-col w-screen h-screen">
                <div className="relative">
                    <img className="w-screen h-[9.375rem] shrink-0" src={ProfileCoverPicture} />
                    <div className="w-20 h-20 shrink-0 absolute left-5 -bottom-9 border-4 rounded-[12.5rem]
                                  border-neutral-1000">
                        <UserAvatar url={Avatar} />
                    </div>
                </div>
                <a href="./edit-profile.html" className="inline w-max py-2 px-5 items-center justify-center self-end mr-4 mt-2 gap-[0.625rem] rounded-follow border border-stroke">
                    <span className="text-base font-medium">Edit Profile</span>
                </a>
                <div className="flex flex-col justify-end items-start w-[22.125rem] mb-3 gap-4 self-center">
                    <div className="flex flex-col">
                        <p className="font-bold text-xl">aarushe reddy</p>
                        <p className="text-neutral-500 text-md font-normal">@aarushe_reddy</p>
                    </div>
                    <p className="text-base font-normal">Digital Goodies Team - Web &amp; Mobile UI/UX development; Graphics;
                        Illustrations</p>
                    <div className="flex items-center gap-5 text-base">
                        <div className="flex gap-1 items-center">
                            <img src={LinkIcon} className="w-[0.894rem] h-[0.91825rem]" />
                            <p className="text-twitter—blue">pixsellz.io</p>
                        </div>
                        <div className="flex gap-1 items-center">
                            <img src={CalenderIcon} className="w-[0.90625rem] h-[0.90625rem]" />
                            <p className="text-neutral-500">Joined September 2018</p>
                        </div>
                    </div>
                    <div className="flex gap-5 items-end text-base font-medium">
                        <p>
                            {followingCount} <span className="text-neutral-500 font-normal">Following</span>
                        </p>
                        <p>{followersCount} <span className="text-neutral-500 font-normal">Followers</span> </p>
                    </div>
                </div>

                {
                    tweets.map((tweet, index) => {
                        return (<TweetsComponent key={index} {...tweet} />)
                    })
                }
                <AddTweetButton />

            </div>

        </div>
    );
}

