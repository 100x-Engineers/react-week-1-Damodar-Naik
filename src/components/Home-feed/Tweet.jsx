import Logo from '../../assets/user-avatar.svg'
import Comment from '../../assets/comment.svg'
import ReTweet from '../../assets/re-tweet.svg'
import Heart from '../../assets/heart.svg'
import Reach from '../../assets/reach.svg'
import Share from '../../assets/share.svg'
import PropTypes from 'prop-types'
import UserAvatar from './userAvatar';


export default function Tweets({ avatar, userName, userHandle, tweetTime, commentsCount, reTweetCount, likesCount, reachCount, tweetText }) {

    return (
        <>
            <div className="bg-neutral-1000">
                <div className="flex py-2 px-4 items-start gap-4 border-b border-neutral-700 self-stretch">
                    <div className='w-12 h-12'>
                        <UserAvatar url={avatar} />
                    </div>
                    <div className="flex flex-col items-start gap-2 flex-[1_0_0] self-stretch">
                        <div className="flex flex-col items-start gap-1 self-stretch">
                            <div className="flex gap-2 items-center">
                                <p className="text-neutral-50 font-inter text-base font-medium">{userName}</p>
                                <p className="text-neutral-500 font-inter text-base font-normal">@{userHandle} • {tweetTime}</p>
                            </div>
                            <div className="text-neutral-50 font-inter text-base font-normal self-stretch">
                                {tweetText}
                            </div>
                        </div>
                        <div className="flex py-3 justify-between items-center self-stretch">
                            <div className="flex justify-center items-center gap-[0.3125rem]">
                                <img src={Comment} className="w-[0.91025rem] h-[0.91025rem]" />
                                <p className="stroke-[1.5px] stroke-neutral-500 text-neutral-500">{commentsCount}</p>
                            </div>
                            <div className="flex justify-center items-center gap-[0.3125rem]">
                                <img src={ReTweet} className="w-[0.91025rem] h-[0.91025rem]" />
                                <p className="stroke-[1.5px] stroke-neutral-500 text-neutral-500">{reTweetCount}</p>
                            </div>
                            <div className="flex justify-center items-center gap-[0.3125rem]">
                                <img src={Heart} className="w-[0.91025rem] h-[0.91025rem]" />
                                <p className="stroke-[1.5px] stroke-neutral-500 text-neutral-500">{likesCount}</p>
                            </div>
                            <div className="flex justify-center items-center gap-[0.3125rem]">
                                <img src={Reach} className="w-[0.91025rem] h-[0.91025rem]" />
                                <p className="stroke-[1.5px] stroke-neutral-500 text-neutral-500">{reachCount}</p>
                            </div>
                            <div className="flex justify-center items-center gap-[0.3125rem]">
                                <img src={Share} className="w-[0.91025rem] h-[0.91025rem]" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

Tweets.propTypes = {
    avatar: PropTypes.string.isRequired,
    userName: PropTypes.string.isRequired,
    userHandle: PropTypes.string.isRequired,
    tweetTime: PropTypes.string.isRequired,
    commentsCount: PropTypes.number.isRequired,
    reTweetCount: PropTypes.number.isRequired,
    likesCount: PropTypes.number.isRequired,
    reachCount: PropTypes.string.isRequired,
    tweetText: PropTypes.string.isRequired,
}