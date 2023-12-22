import { Link } from "react-router-dom";
import { Button, Tag } from "antd";
import Graph from "../../components/Graphs/Graph";
import { CurveTypes } from "../../components/Graphs/constants";
import {
  Settings,
  Puzzle,
  Unlock,
  Greek,
  Price,
  HeroImage,
  ConnectorDiv,
  Hand,
} from "../../../assets/images/imageAssets";
import Footer from "../../components/Footer/Footer";
import { routes } from "../../../utils/routes";

import "./index.scss";

const HomePage = () => {
  return (
    <div style={{ backgroundColor: '#1b1d0c' }}>
      <section id="hero" className="hero-section">
        <div className="hero-grid-sections d-flex">
          <div className="hero-section-left">
            <p className="hero-heading">

             {" "} Where {" "}
            <span
                style={{ color: "#7f901d", fontFamily: "Barriecito" }}
              >
                Risk-Takers 
              </span>
             , {" "} 
             <span
                style={{ color: "#7f901d", fontFamily: "Barriecito" }}
              >
                Elegance Seekers 
              </span>
              , and {" "} 
              <span
                style={{ color: "#7f901d", fontFamily: "Barriecito" }}
              >
                Growth Cultivators
              </span>
             
               {" "} Ignite Their DeFi Dreams
             <span
                style={{ color: "#7f901d", fontFamily: "Barriecito" }}
              >
                
              </span>
             
          
            </p>
            <p className="hero-sub-heading">
            Embark on a DeFi adventure tailored to your style. Dengentus is not just a platform; it's a revolution in token creation            </p>
            <p className="hero-description" style={{color: "#30d67a"}}>
            For the daring Degens craving high-risk, high-reward opportunities, for the graceful Miladys seeking sophistication in their crypto endeavors, and for the diligent Humble Farmers looking for steady growth – Dengentus is your gateway to a world where your crypto aspirations come to life, effortlessly and distinctively.
            </p>
            <Link style={{ textDecoration: "none" }} to={routes.dashboard}>
              <Button className="launch-app-btn">Launch App</Button>
            </Link>
          </div>
          <div className="hero-section-right">
            <img className="hero-image" src={HeroImage} alt="hero" />
          </div>
        </div>
      </section>
      
      <section className="why-section">
        <p className="title-2">
          Why <span className="curve">Degentus?</span>
        </p>
        <div className="row-1">
          <div className="feature">
            <img src={Settings} alt="settings"></img>
            <p className="feature-title">Graceful Token Customization</p>
            <p className="sub-content">
            Craft your token with elegance. Dengentus offers Miladys a platform where sophistication meets DeFi, enabling you to design tokens that are as refined as your crypto taste.            </p>
          </div>
          <div className="feature">
            <img src={Puzzle} alt="puzzle"></img>
            <p className="feature-title">
            Dynamic Bonding Curves
            </p>
            <p className="sub-content">
            Choose from an array of bonding curve models that match your high-risk, high-reward style. With Dengentus, experience the adrenaline of DeFi innovation at your fingertips            </p>
          </div>
        </div>
        <div className="row-2">
          <div className="feature">
            <img src={Unlock} alt="token"></img>
            <p className="feature-title">Steady Growth Tokenomics</p>
            <p className="sub-content">
            Embrace the stable side of crypto with Dengentus. We provide Humble Farmers with tools for sustainable token development, ensuring long-term growth and steady returns.            </p>
          </div>
          <div className="feature-last">
            <img src={Price} alt="price"></img>
            <p className="feature-title">Sophisticated  Price Discovery</p>
            <p className="sub-content">
            Elevate transparency with a bonding curve algorithm that accurately reflects the token's current value, guiding more informed trading decisions.

            </p>
          </div>
        </div>
      </section>
      <section id="section-3">
        <div className="graph-section d-flex">
          <div className="sticky-column">
            <div className="sticky-contents">
              <p className="sticky-heading">
                Unleash the Power of Curves: Discover the Range of Options at
                Your Fingertips!
              </p>
              <p className="sticky-description">
                Find the Perfect Curve, Fit for Your Token Economics and Project
                Goals
              </p>
            </div>
            <img className="hand-illustration" src={Hand} alt="hand" />
          </div>
          <div className=" graph-column">
            <p className="graph-heading">Linear Curve</p>
            <p className="graph-description">
            Designed for Humble Farmers who prefer stability and predictability. With a straightforward increase or decrease in price corresponding to supply changes, this curve provides a consistent and reliable growth trajectory for long-term planning.
            </p>
            <div className="graph">
              <Graph
                previewOnly={true}
                cap={100}
                increment={10}
                type={CurveTypes.linear}
                slope={15}
                intercept={15}
              />
            </div>
            <p className="graph-heading">Polynomial Curve</p>
            <p className="graph-description">
            Ideal for Degens who thrive on high stakes and rapid growth. This curve offers a thrilling journey with prices that skyrocket as supply diminishes, perfect for those looking for a fast-paced DeFi experience.
            </p>
            <div className="graph">
              <Graph
                type={CurveTypes.polynomial}
                a={1}
                n={2}
                previewOnly={true}
                cap={100}
                increment={10}
              />
            </div>
            <div className="d-flex">
              <p className="graph-heading">Sub-Linear Curve</p>{" "}
              <Tag className="coming-soon-tag" color="green">
                Coming Soon
              </Tag>
            </div>
            <p className="graph-description">
              Harness the power of logarithmic growth, where the token price
              increases at a decreasing rate as the token supply grows. This
              unique formula ensures a balanced and gradual rise{" "}
            </p>
            <div className="graph">
              <Graph
                type={CurveTypes.subLinear}
                n={0.7}
                previewOnly={true}
                cap={100}
                increment={10}
              />
            </div>
            <div className="d-flex">
              <p className="graph-heading">S-Curve</p>
              <Tag className="coming-soon-tag" color="green">
                Coming Soon
              </Tag>
            </div>
            <p className="graph-description">
            Suited for Miladys seeking a balance of elegance and excitement. The S-Curve starts off gently, accelerates, and then flattens out, mirroring the graceful yet impactful approach favored in your investments
            </p>
            <div className="graph">
              <Graph
                type={CurveTypes.sCurve}
                c1={0.2}
                c2={10}
                previewOnly={true}
                cap={100}
                increment={10}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="fantom-section">
        <div className="fantom-section-left">
          <p className="title">Are You Prepared to Forge Your Unique Path in DeFi?</p>
          <p className="sub-content">
          Seize this opportunity with Dengentus. Embark on a journey where your DeFi identity – whether you're a fearless Degen, a graceful Milady, or a steadfast Humble Farmer – shapes your token creation experience. Your path to distinctive and tailored token management starts now
          </p>
        </div>
        <div className="fantom-section-right">
          <img src={Greek} className="greek" alt="gods-greek"></img>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default HomePage;
