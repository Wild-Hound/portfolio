import "./App.scss";
import MainNav from "./Component/MainNav";
import CVSection from "./Section/AboutSection/CVSection";
import BlogSection from "./Section/BlogSection/BlogSection";
import HeroSection from "./Section/HeroSection/HeroSection";
import LastSection from "./Section/LastSection/LastSection";
import PortfolioSection from "./Section/PortfolioSection/PortfolioSection";
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
          <PortfolioSection />
          <CVSection />
          <BlogSection />
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
