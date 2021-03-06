import React, {Component} from "react";
import { Container, Row, Col } from 'reactstrap';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

class Footer extends Component {
  render() {
    return (
      <div className="Footer" style={{
        // height: "30vh",
        // paddingTop: "40px"
      }}>
        <div className="middle flex-column" style={{ height: "25%", padding: "40px" }}>
          <h3>920 Seymour Street, Vancouver BC</h3>
          <h3>V6B 3L9 Canada</h3>
        </div>
        <Container> 
          <Row>
            <Col className="HorLogo middle">
                <img src={require('../images/LogoHorizantal.png')} alt="" style={{
                  width: "35vh"
                }}/>
            </Col>

            <Col className="Social display-4 middle color">
              <a target = "_blank" href = 'https://www.facebook.com/STMEDISPA/' rel="noopener noreferrer">
                <FontAwesomeIcon icon={['fab', 'facebook']} pull="right" href="www.facebook.com"/>
              </a>
              <a target = "_blank" href = 'https://www.instagram.com/stmedispa/' rel="noopener noreferrer">
                <FontAwesomeIcon icon={['fab', 'instagram']} pull="right"/>
              </a>
                <FontAwesomeIcon icon={['fab', 'google']} pull="right"/>
            </Col>

            <Col className= "middle color">
              <a href = 'mailto:info@stmedispa.com'>
                <h2>
                  <FontAwesomeIcon icon='envelope' className="Mail"/> &nbsp;
                  info@stmedispa.com
                </h2>
              </a>
            </Col>
          </Row>
        </Container>

        <div className="middle" style={{padding:"40px"}}>
          <h4>
            © 2018  |  PRIVACY POLICY
          </h4>
        </div>
        <div className = "display-4 middle flex-column" style={{paddingTop:"30px"}}>
          <img src={require('../images/google.png')} style={{height: "40vh", width:"90%"}} alt=""/>
        </div>
    </div>);
  }
};

export {
  Footer
};
