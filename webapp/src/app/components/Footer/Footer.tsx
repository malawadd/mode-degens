import {
  FooterLogo,
  Twitter,
  LinkedIn,
  Discard,
} from "../../../assets/images/imageAssets";
import { googleFormsLink, socialLinks } from "../../../utils/constants";

import "./index.scss";

const Footer = () => {
  const { discard, twitter, linkedIn } = socialLinks;

  return (
    <div className="footer">
      <div className="container1">
        <div className="foo-sec1">
          <img className="footer-logo" src={FooterLogo} alt="CurveX_Logo" />
          <div className="foo-content">
          "As a proud Degen, Dengentus gave me the tools to thrive. It's not just a platform; it's a movement." - Mia, Crypto Enthusiast          </div>
          <div className="social-icons">
            <a href={discard} target="_blank" rel="noopener noreferrer">
              <img src={Discard} alt="DiscardLogo" />
            </a>
            <a href={twitter} target="_blank" rel="noopener noreferrer">
              <img src={Twitter} alt="TwitterLogo" />
            </a>
            <a href={linkedIn} target="_blank" rel="noopener noreferrer">
              <img src={LinkedIn} alt="LinkedInLogo" />
            </a>
          </div>
          <div className="copy-right">
            Copyright © 2023 <span style={{ color: "#000000" }}>Degentus</span>
          </div>
        </div>
        <div className="d-flex foo-sec2">
          <ul>
            <li className="title">Degentus</li>
            <li>About Us</li>
            <li>Terms Of Use</li>
            <li>Privacy Policy</li>
            <li>
              <a rel="noreferrer" href={googleFormsLink} target="_blank">
                Contact us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
