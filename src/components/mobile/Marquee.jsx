import React, { useEffect, useRef } from "react";
import { BsVolumeUp } from "react-icons/bs";
import { FaPauseCircle, FaPlayCircle } from "react-icons/fa";
import bg from "../../assets/bg.mp3";
import useFetch from "../../hooks/useFetch";
import BASE_URL from "../../hooks/baseURL";

const Marquee = ({ isSiteBgPlay, setIsSiteBgPlay }) => {
  const { data: bannerText } = useFetch(BASE_URL + "/bannerText");

  const audioRef = useRef(null);
  useEffect(() => {
    if (isSiteBgPlay) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isSiteBgPlay]);
  return (
    <div className="d-flex align-items-center gap-2 flex-nowrap w-100">
      <audio hidden ref={audioRef} controls>
        <source
          src={
            "https://onlinetestcase.com/wp-content/uploads/2023/06/2-MB-MP3.mp3"
          }
        />
      </audio>
      <div
        style={{ width: "50px" }}
        className="cursor-pointer d-flex align-items-center justify-content-center"
      >
        {isSiteBgPlay ? (
          <FaPauseCircle
            onClick={() => setIsSiteBgPlay(false)}
            size={25}
            className="ms-2 soundIcon marqueeText"
          />
        ) : (
          <FaPlayCircle
            onClick={() => setIsSiteBgPlay(true)}
            size={25}
            className="ms-2 soundIcon marqueeText"
          />
        )}
      </div>
      <div className="shadow-lg homeMarquee bg-black2  p-1  m-sm-2 w-100">
        {bannerText && (
          <marquee className="marqueeText" behavior="" direction="left">
            {bannerText.text}
          </marquee>
        )}
      </div>
    </div>
  );
};

export default Marquee;
