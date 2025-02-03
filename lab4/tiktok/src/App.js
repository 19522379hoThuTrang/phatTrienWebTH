import './App.css';
import VideoCard from './components/VideoCard';
import TopNavbar from './components/TopNavbar';
import BottomNavbar from './components/BottomNavbar';
import { useEffect, useRef, useState } from 'react';

const videoUrls = [
  {
    url: require('./videos/video1.mp4'),
    profilePic: 'https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/9d429ac49d6d18de6ebd2a3fb1f39269~c5_100x100.jpeg?x-expires=1688479200&x-signature=pjH5pwSS8Sg1dJqbB1GdCLXH6ew%3D',
    username: 'csjackie',
    description: 'Lol nvm #compsci #chatgpt #ai #openai #techtok',
    song: 'Original sound - Famed Flames',
    likes: 430,
    comments: 13,
    saves: 23,
    shares: 1,
  },
  {
    url: require('./videos/video2.mp4'),
    profilePic: 'https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/eace3ee69abac57c39178451800db9d5~c5_100x100.jpeg?x-expires=1688479200&x-signature=wAkVmwL7lej15%2B16ypSWQOqTP8s%3D',
    username: 'dailydotdev',
    description: 'Every developer brain @francesco.ciulla #developerjokes #programming #programminghumor #programmingmemes',
    song: 'tarawarolin wants you to know this isnt my sound - Chaplain J Rob',
    likes: '13.4K',
    comments: 3121,
    saves: 254,
    shares: 420,
  }
];

function App() {
  const [videos, setVideos] = useState([]);
  const [isMuted, setIsMuted] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const videoRefs = useRef([]);

  useEffect(() => {
    setVideos(videoUrls);
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.8,
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const videoElement = entry.target;
          videoElement.play();
        } else {
          const videoElement = entry.target;
          videoElement.pause();
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    videoRefs.current.forEach((videoRef) => {
      observer.observe(videoRef);
    });

    return () => {
      observer.disconnect();
    };
  }, [videos]);

  const handleVideoRef = (index) => (ref) => {
    videoRefs.current[index] = ref;
  };

  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      setVideos(videoUrls.filter(video => video.description.includes(`#${searchTerm}`)));
    }
  };

  return (
    <div className="app">
      <div className='container'>
        <TopNavbar className="top-navbar" />
        <input
          type="text"
          placeholder="Search by hashtag..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={handleSearch}
        />
        {videos.map((video, index) => (
          <VideoCard
            key={index}
            username={video.username}
            description={video.description}
            song={video.song}
            likes={video.likes}
            saves={video.saves}
            comments={video.comments}
            shares={video.shares}
            url={video.url}
            profilePic={video.profilePic}
            setVideoRef={handleVideoRef(index)}
            autoplay={index === 0}
            isMuted={isMuted}
            setIsMuted={setIsMuted}
          />
        ))}
        <BottomNavbar className="bottom-navbar" />
      </div>
    </div>
  );
}

export default App;

