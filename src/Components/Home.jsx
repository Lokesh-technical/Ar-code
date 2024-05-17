import React, { useEffect, useState, useRef } from "react";
import ProfileInfo from "./ProfileInfo";
import Header from "./Header";
import Demo from "./Demo";
import Icons from "./Icons";
import { HashLoader } from "react-spinners";

const Home = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const videoRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      videoRef.current.srcObject = stream;
    } catch (err) {
      console.error("Error accessing camera:", err);
    }
  };
  startCamera();

  window.addEventListener("click", () => {
    setIsClicked(true);
  });

  return (
    <>
      {isClicked ? (
        <div>
          {isLoading ? (
            <div className="loading-spinner">
              <HashLoader color={"#3E3E3E"} size={50} />
            </div>
          ) : (
            <>
              <video
                ref={videoRef}
                autoPlay
                playsInline
                muted
                className="camera-background"
              />
              <Header />
              <ProfileInfo />
              <Demo />
              <Icons />
            </>
          )}
        </div>
      ) : (
        <>
          <video
            ref={videoRef}
            autoPlay
            playsInline
            muted
            className="camera-background"
          />
          <Header />
          <div className="home-container">
            <button
              className="home-btn"
              onClick={() => {
                setIsClicked(true);
              }}
            >
              Click
            </button>
          </div>
          <div className="footer">
            <h6>tap the screen</h6>
          </div>
        </>
      )}
    </>
  );
};

export default Home;
