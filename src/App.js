import "./styles/main.css";
import SideBar from "./SideBar";
import InputPage from "./InputPage";
import SelectPlan from "./SelectPlan";
import Addons from "./Addons";
import Summary from "./Summary";

const App = function () {
  return (
    <div className="container">
      <SideBar />
      {/* <InputPage /> */}
      {/* <SelectPlan /> */}
      {/* <Addons /> */}
      <Summary />
    </div>
  );
};

export default App;
