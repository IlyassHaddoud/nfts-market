import card1 from "../assets/card1.svg";
import card2 from "../assets/card2.svg";
import card3 from "../assets/card3.svg";
import cloud from "../assets/cloud.svg";

const WeekWork = () => {
  return (
    <div className="week-work">
      <img className="cloud" src={cloud} />
      <div className="content container">
        <div className="frame">
          <div className="title">
            <span>Amazing</span> and Super Unique Art of This <span>Week</span>
          </div>
          <div className="btn">
            <button>See All</button>
          </div>
        </div>
        <div className="cards">
          <img src={card1} />
          <img src={card2} />
          <img src={card3} />
        </div>
      </div>
    </div>
  );
};

export default WeekWork;
