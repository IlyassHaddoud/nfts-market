import heroImage from "../assets/hero-image.svg";
import heroStats from "../assets/hero-stats.png";
import cloud from "../assets/cloud.svg";

const Hero = () => {
  return (
    <div className="hero">
      <img className="cloud" src={cloud} />
      <div className="nav-bar">
        <div className="nav-links">
          <ul>
            <li className="marketplace">Marketplace</li>
            <li>Artists</li>
            <li>Community</li>
            <li>Collections</li>
          </ul>
        </div>
        <div className="nav-button">
          <button>Contact</button>
        </div>
      </div>
      <div className="hero-content">
        <div className="content">
          <div className="text">
            <div className="title">
              Discover and Collect The Best NFTs{" "}
              <span className="digital-art">Digital Art.</span>
            </div>
            <div className="paragraph">
              Get started with the easiest and most secure platform to buy and
              trade digital ART and NFT’s. Start exploring the world of digital
              art and NFTs today and take control of your digital assets with
              confidence!
            </div>
          </div>
          <div className="links">
            <button>Explore Now</button>
            <a href="#">Learn More</a>
          </div>
          <div className="stats">
            <img src={heroStats} />
          </div>
        </div>
        <div className="hero-image">
          <img src={heroImage} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
