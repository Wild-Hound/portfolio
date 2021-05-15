import "./App.css";
import MainNav from "./Component/MainNav";
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
          <LastSection />
        </div>
        <div className="socialSideBar"></div>
      </div>
    </div>
  );
}

export default App;
