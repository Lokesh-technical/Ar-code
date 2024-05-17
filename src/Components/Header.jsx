import React, { useState } from "react";
import LoopIcon from "@mui/icons-material/Loop";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

// Example images, replace these with your actual image imports
import first from "../Images/first.png";
import second from "../Images/second.png";
import third from "../Images/third.png";
import fourth from "../Images/fourth.png";
import fifth from "../Images/fifth.png";
import sixth from "../Images/sixth.png";
import seventh from "../Images/seventh.png";

const images = [first, second, third, fourth, fifth, sixth, seventh];
const descriptions = [
  "1. Start the Experience: Scan the target image or tap on the screen to view the experience created using Immarsify.",
  "2. Adjust the View: The AR experience will appear above the target image. If the content does not appear, move the camera or check your internet connection.",
  "3. Re-position the Scene: Tap empty area to re-position the scene to the center of the screen.",
  "4. Interact with Icons/Buttons: Tap icons/buttons to open their links.",
  "5. Control Videos: Tap videos to play/pause them.",
  "6. Zoom in or Out: Pinch to Zoom",
  "7. Keep the Scene Available: If the scanning image/target is removed from the camera feed, the scene still remains available.",
];

const Header = () => {
  const [showMainModal, setShowMainModal] = useState(false);
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const refreshData = () => {
    window.location.reload(true);
  };

  const handleMainModalClose = () => {
    setShowMainModal(false);
  };

  const handleDetailModalClose = () => {
    setShowDetailModal(false);
    setShowMainModal(true); 
  };

  const handleShowDetailModal = (index) => {
    setSelectedIndex(index);
    setShowMainModal(false); 
    setShowDetailModal(true);
  };

  return (
    <>
      <div className="header-container">
        <h5>
          <span className="refresh-button" onClick={refreshData}>
            <LoopIcon style={{ fontSize: "25px" }} />
          </span>
        </h5>
        <div className="help-section">
          <Modal
            size="sm"
            show={showMainModal}
            onHide={handleMainModalClose}
            aria-labelledby="example-modal-sizes-title-sm"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title id="example-modal-sizes-title-sm">
                How To Use?
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="mobile-modal">
                {images.map((image, index) => (
                  <div
                    key={index}
                    className="modal-content-section"
                    onClick={() => handleShowDetailModal(index)}
                    style={{ cursor: "pointer" }}
                  >
                    <img src={image} alt="img" />
                    <p className="description">{descriptions[index]}</p>
                  </div>
                ))}
              </div>
            </Modal.Body>
          </Modal>

          <Modal
            size="sm"
            show={showDetailModal}
            onHide={handleDetailModalClose}
            aria-labelledby="example-modal-sizes-title-sm"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title id="example-modal-sizes-title-sm">
                Detail View
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {selectedIndex !== null && (
                <div className="detail-modal-content-section">
                  <img
                    src={images[selectedIndex]}
                    alt="img"
                    className="detail-modal-image"
                  />
                  <p className="detail-description">
                    {descriptions[selectedIndex]}
                  </p>
                </div>
              )}
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleDetailModalClose}>
                Back
              </Button>
            </Modal.Footer>
          </Modal>

          <button
            onClick={() => setShowMainModal(true)}
            className="help-button"
          >
            Help
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
