import front from "../Images/front.jpg";
import back from "../Images/back.jpg";
import { Container } from "react-bootstrap";

const Demo = () => {
  return (
    <>
      <Container>
        <div className="container main-header">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 box1">
              <img src={front} alt="koli" />
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 box2">
              <img src={back} alt="koli" />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Demo;
