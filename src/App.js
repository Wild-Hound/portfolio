import "./App.scss";
import MainNav from "./Component/MainNav";
import HeroSection from "./Section/HeroSection/HeroSection";
import LastSection from "./Section/LastSection/LastSection";

function App() {
  return (
    <div className="App">
      <MainNav />
      <div className="wrapper">
        <div className="heroImg">
          <div></div>
        </div>
        <div className="mainContent">
          <HeroSection />
          <LastSection />
        </div>
        <div className="socialSideBar"></div>
      </div>
    </div>
  );
}

export default App;
