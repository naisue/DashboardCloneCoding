import "./App.css";
import Sidebar from "./Components/Sidebar/Sidebar.jsx";
import MainDash from "./Components/MainDash/MainDash";
import RightSide from "./Components/RightSide/RightSide";
function App() {
  return (
    <div className="App">
      <div className="AppGlass">
        <Sidebar />
        <MainDash />
        <RightSide />
      </div>
    </div>
  );
}

export default App;
