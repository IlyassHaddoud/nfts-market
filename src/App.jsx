import Hero from "./components/Hero";
import WeekWork from "./components/WeekWork";
import CreateAndSell from "./components/CreateAndSell";
import PopularArtists from "./components/PopularArtists";
import Subsribtion from "./components/Subscribtion";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="app">
      <Hero />
      <WeekWork />
      <CreateAndSell />
      <PopularArtists />
      <Subsribtion />
      <Footer />
    </div>
  );
};

export default App;
