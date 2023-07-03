import nfts from "../assets/create-and-sell-image.svg";

const CreateAndSell = () => {
  return (
    <div className="createandsell">
      <div className="content">
        <div className="main-content">
          <div className="text">
            <div className="title">
              Create And Sell Your <span>Best NFTs</span>
            </div>
            <div className="paragraph">
              Start exploring the world of digital art and NFTs today and take
              control of your digital assets with confidence!
            </div>
          </div>
          <div className="links">
            <button>Create Now</button>
            <a href="#">Learn More</a>
          </div>
        </div>
        <div className="image">
          <img className="nfts" src={nfts} />
        </div>
      </div>
    </div>
  );
};

export default CreateAndSell;
