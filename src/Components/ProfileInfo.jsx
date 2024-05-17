import React, { useRef } from "react";
import video from "../Images/7e870c0f9d4f401194ae519a8aa5b1d4.webm";
import profile from "../Images/ajay-koli.jpeg";
import CallIcon from "@mui/icons-material/Call";
import { Container } from "react-bootstrap";

const ProfileInfo = () => {
  const downloadContact = () => {
    const vCardContent = `BEGIN:VCARD
VERSION:3.0
FN:Ajay Koli
EMAIL;TYPE=INTERNET:info@koliinfotech.com
TEL;TYPE=CELL:6353131771
URL:http://koliinfotech.com
ORG:Koli Infotech
TITLE:Owner
END:VCARD`;

    const blob = new Blob([vCardContent], { type: "text/vcard" });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "Ajay Koli.vcf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };

  const videoRef = useRef(null);

  const togglePlayPause = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  };

  return (
    <>
      <Container>
        <div className="main-header">
          <div className="row">
            <div className="col-lg-6 col-sm-12 video-container">
              <video
                ref={videoRef}
                src={video}
                autoPlay
                muted
                onClick={togglePlayPause}
              ></video>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 profile-container">
              <div className="profile">
                <div className="image">
                  <img src={profile} alt="Ajay Koli" />
                </div>
                <div className="text">
                  <h3>AJAY</h3>
                  <h3>KOLI</h3>
                </div>
              </div>
              <div className="save-contact-container">
                <div className="save-contact">
                  <div className="call-icon">
                    <CallIcon
                      style={{ fontSize: "2rem", cursor: "pointer" }}
                      onClick={downloadContact}
                    />
                  </div>
                  <div className="contact-btn">
                    <button onClick={downloadContact}>Save Contact</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default ProfileInfo;
