import "./App.scss";
import MainNav from "./Component/MainNav";
import HeroSection from "./Section/HeroSection/HeroSection";
import LastSection from "./Section/LastSection/LastSection";
import SocialBar from "./Section/SocialBar/SocialBar";

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
        <div className="socialSideBar">
          <SocialBar />
        </div>
      </div>
    </div>
  );
}

export default App;
