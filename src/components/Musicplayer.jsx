import React, { useState, useRef } from "react";
import "./Musicplayer.css";

// import audio files
import brooklynBaby from "../Assets/clairo - brooklyn baby (spotify singles).mp3";
import loveSongs from "../Assets/Love Songs.mp3";
import onlyYouKnow from "../Assets/Only You Know.mp3";

// import icon images
import playIcon from "../Assets/play.svg";
import pauseIcon from "../Assets/pause.svg";
import skipIcon from "../Assets/next.svg";
import backIcon from "../Assets/back.svg";

const MusicPlayer = () => {
  const songs = [
    { title: "brooklyn baby (spotify singles)", artist: "Clairo", src: brooklynBaby },
    { title: "Love Songs", artist: "Margo Guryan", src: loveSongs },
    { title: "Only You Know", artist: "Dion", src: onlyYouKnow },
  ];

  const [current, setCurrent] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(() => {});
    }
    setIsPlaying(!isPlaying);
  };

  const nextSong = () => {
    const next = (current + 1) % songs.length;
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      audioRef.current.src = songs[next].src;
      audioRef.current.load();

      if (isPlaying) {
        audioRef.current.onloadeddata = () => {
          audioRef.current.play().catch(() => {});
        };
      }
    }
    setCurrent(next);
  };

  const prevSong = () => {
    const prev = (current - 1 + songs.length) % songs.length;
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      audioRef.current.src = songs[prev].src;
      audioRef.current.load();

      if (isPlaying) {
        audioRef.current.onloadeddata = () => {
          audioRef.current.play().catch(() => {});
        };
      }
    }
    setCurrent(prev);
  };

  return (
    <div className="music-player">
         <p className="song-text">
  <span className="scrolling-text" data-text={`${songs[current].title} - ${songs[current].artist}`}>
    {songs[current].title} - {songs[current].artist}
  </span>
</p>
      <audio ref={audioRef} src={songs[current].src} />
<button className="control-btn" onClick={prevSong}>
        <img src={backIcon} alt="Previous" className="icon" />
      </button>

      <button className="play-btn" onClick={togglePlay}>
        <img
          src={isPlaying ? pauseIcon : playIcon}
          alt={isPlaying ? "Pause" : "Play"}
          className="icon"
        />
      </button>

      <button className="control-btn" onClick={nextSong}>
        <img src={skipIcon} alt="Next" className="icon" />
      </button>
</div>


  );
};

export default MusicPlayer;
