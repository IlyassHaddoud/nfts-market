import formImage from "../assets/form-image.png";
import cloud from "../assets/cloud.svg";

const Subscribtion = () => {
  return (
    <div className="subscribtion">
      <img className="cloud" src={cloud} />
      <div className="content">
        <div className="image">
          <img src={formImage} />
        </div>
        <div className="form">
          <div className="title">
            Subscribe And <span>get our Updates</span> Every Week
          </div>
          <div className="paragraph">
            We have a blog related to NFT so we can share thoughts and routines
            on our blog which is updated weekly
          </div>
          <div className="inputs">
            <input type="text" placeholder="Enter your e-mail" />
            <button>Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribtion;
