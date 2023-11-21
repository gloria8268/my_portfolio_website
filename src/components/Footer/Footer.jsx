import { Container, Row, Col } from "react-bootstrap";
// import { MailchimpForm } from "./MailchimpForm";
// import logo from "../../assets/img/logo.JPG";
import navIcon1 from "../../assets/img/nav-icon1.svg";
// import navIcon2 from "../../assets/img/github.svg";
import navIcon3 from "../../assets/img/nav-icon3.svg";

function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          {/* <MailchimpForm /> */}
          <Col size={12} sm={6}>
            {/* <img src={logo} alt="Logo" /> */}
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="www.google.com">
                <img src={navIcon1} alt="Icon" />
              </a>
              <a href="www.google.com">
                {/* <img src={navIcon2} alt="Icon" /> */}
              </a>
              <a href="www.google.com">
                <img src={navIcon3} alt="Icon" />
              </a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
