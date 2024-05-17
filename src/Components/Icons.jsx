import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import XIcon from "@mui/icons-material/X";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Box } from "@mui/material";
import { Container } from "react-bootstrap";

const Icons = () => {
  return (
    <>
      <Container className="icons-wrapper">
        <a
          href="https://www.facebook.com/koli.infotech/"
          target="_blank"
          rel="noreferrer"
        >
          <Box className="icon rounded-pill">
            <FacebookIcon className="fbicon" />
          </Box>
        </a>
        <a href="https://wa.me/+916353131771" target="_blank" rel="noreferrer">
          <Box className="icon rounded-pill">
            <WhatsAppIcon className="fbicon" />
          </Box>
        </a>
        <a
          href="https://www.instagram.com/koli_infotech/"
          target="_blank"
          rel="noreferrer"
        >
          <Box className="icon rounded-pill">
            <InstagramIcon className="fbicon" />
          </Box>
        </a>
        <a
          href="https://www.youtube.com/@koliinfotech"
          target="_blank"
          rel="noreferrer"
        >
          <Box className="icon rounded-pill">
            <YouTubeIcon className="fbicon" />
          </Box>
        </a>
        <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
          <Box className="icon rounded-pill">
            <LinkedInIcon className="fbicon" />
          </Box>
        </a>
        <a href="mailto:info@koliinfotech.com" target="_blank" rel="noreferrer">
          <Box className="icon rounded-pill">
            <EmailIcon className="fbicon" />
          </Box>
        </a>
        <a
          href="https://twitter.com/Koli_Infotech"
          target="_blank"
          rel="noreferrer"
        >
          <Box className="icon rounded-pill">
            <XIcon className="fbicon" />
          </Box>
        </a>
        <a
          href="https://www.google.com/maps/place/KOLI+Infotech+Pvt.+Ltd./@21.1459561,72.8774092,17z/data=!3m1!4b1!4m6!3m5!1s0x3be051862e39c1e3:0xf0b3f8e98ab74dc4!8m2!3d21.1459561!4d72.8774092!16s%2Fg%2F11rn4lmhnc?entry=ttu"
          target="_blank"
          rel="noreferrer"
        >
          <Box className="icon rounded-pill">
            <LocationOnIcon className="fbicon" />
          </Box>
        </a>
      </Container>
    </>
  );
};

export default Icons;
