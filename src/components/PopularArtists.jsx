import artistImages from "../assets/artist-frame.png";

const PopularArtists = () => {
  return (
    <div className="popular-artists">
      <div className="content">
        <div className="main-content">
          <div className="title">
            Popular <span>Artists</span> On This Week
          </div>
          <div className="btn">
            <button>See All</button>
          </div>
        </div>
        <div className="frame">
          <img src={artistImages} />
        </div>
      </div>
    </div>
  );
};

export default PopularArtists;
