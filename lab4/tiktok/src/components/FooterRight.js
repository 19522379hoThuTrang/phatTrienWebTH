import { faBookBookmark, faCircleCheck, faCirclePlus, faCommentDots, faHeart, faShare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import './FooterRight.css'

function FooterRight({ likes, comments, saves, shares, profilePic, videoUrl, }) {
    const [liked, setLiked] = useState(false);
    const [saved, setSaved] = useState(false);
    const [userAddicon, setUserAddIcon] = useState(faCirclePlus);
    const [showSharePopup, setShowSharePopup] = useState(false);

    const handleUserAddClick = () => {
        setUserAddIcon(faCircleCheck);
        setTimeout(() => {
            setUserAddIcon(null);
        }, 3000);
    };

    const parseLikesCount = (count) => {
        if (typeof count === 'string') {
            if (count.endsWith('K')) {
                return parseFloat(count) * 1000;
            }
            return parseInt(count);
        }
        return count;
    };

    const formatLikesCount = (count) => {
        if (count >= 10000) {
            return (count / 1000).toFixed(1) + 'K';
        }
        return count;
    };

    const handleLikeClick = () => {
        setLiked((prevLiked) => !prevLiked);
    };

    const handleShareClick = () => {
        setShowSharePopup(!showSharePopup);
    };

    return (
        <div className="footer-right">
            <div className="sidebar-icon">
                {profilePic ? (
                    <img src={profilePic} className="userprofile" alt="Profile" style={{ width: '45px', height: '45px', color: '#616161' }} />
                ) : null}
                <FontAwesomeIcon
                    icon={userAddicon}
                    className="useradd"
                    style={{ width: '15px', height: '15px', color: '#FF0000' }}
                    onClick={handleUserAddClick}
                />
            </div>

            <div className="sidebar-icon">
                <FontAwesomeIcon
                    icon={faHeart}
                    style={{ width: '35px', height: '35px', color: liked ? '#FF0000' : 'white' }}
                    onClick={handleLikeClick}
                />
                <p>{formatLikesCount(parseLikesCount(likes) + (liked ? 1 : 0))}</p>
            </div>

            <div className="sidebar-icon">
                <FontAwesomeIcon
                    icon={faCommentDots}
                    style={{ width: '35px', height: '35px', color: 'white' }}
                />
            </div>

            <div className="sidebar-icon">
                {saved ? (
                    <FontAwesomeIcon
                        icon={faBookBookmark}
                        style={{ width: '35px', height: '35px', color: '#ffc107' }}
                        onClick={() => setSaved(false)}
                    />
                ) : (
                    <FontAwesomeIcon
                        icon={faBookBookmark}
                        style={{ width: '35px', height: '35px', color: 'white' }}
                        onClick={() => setSaved(true)} />
                )}
                <p>{saved ? saves + 1 : saves}</p>
            </div>

            <div className="sidebar-icon" onClick={handleShareClick}>
                <FontAwesomeIcon icon={faShare} style={{ width: '35px', height: '35px', color: 'white' }} />
                <p>{shares}</p>
            </div>


            {showSharePopup && (
                <div className="share-popup">
                    <button className="close-btn" onClick={() => setShowSharePopup(false)}>
                        X
                    </button>
                    <p>Share to:</p>
                    <a href="https://www.facebook.com/sharer/sharer.php?u=YOUR_URL" target="_blank" rel="noopener noreferrer" > Facebook </a>
                    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" > Instagram </a>
                    <a href="https://www.threads.net/" target="_blank" rel="noopener noreferrer" > Threads </a>
                </div>
            )}

            <div className="sidebar-icon record">
                <img
                    src="https://static.thenounproject.com/png/934821-200.png"
                    alt="Record Icon"
                />
            </div>
        </div>
    )
}

export default FooterRight

