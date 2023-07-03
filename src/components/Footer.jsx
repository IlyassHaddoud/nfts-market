import socialIcons from "../assets/social-icons.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="content">
        <div className="upper-footer">
          <div className="left">
            <div className="para">
              Discover NFTs by category, track the latest drop, and and follow
              the collections you love. Enjoy it!
            </div>
            <div className="social">
              <img src={socialIcons} />
            </div>
          </div>
          <div className="right">
            <div className="explore">
              <ul>
                <li>
                  <b>Explore</b>
                </li>
                <li>Art Sign In</li>
                <li>Collectibles</li>
                <li>Domain Name</li>
                <li>Utility</li>
              </ul>
            </div>
            <div className="statistic">
              <ul>
                <li>
                  <b>Statistic</b>
                </li>
                <li>Ranking</li>
                <li>Collectibles</li>
                <li>Activity</li>
              </ul>
            </div>
            <div className="Company">
              <ul>
                <li>
                  <b>company</b>
                </li>
                <li>About Us</li>
                <li>Career</li>
                <li>Support</li>
                <li>Partners</li>
              </ul>
            </div>
            <div className="Resources">
              <ul>
                <li>
                  <b>resources</b>
                </li>
                <li>Help Center</li>
                <li>Platform Status</li>
                <li>Blog</li>
              </ul>
            </div>
          </div>
        </div>
        <hr />
        <div className="bottom-footer">
          <div className="copyright">© Copyright 2023 - Ilyass Haddoud</div>
          <div className="policies">
            <div>Privacy Policy </div>
            <div>Terms & Conditions</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
