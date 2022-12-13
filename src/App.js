import { useState } from "react";
import "./styles/main.css";
import SideBar from "./SideBar";
import InputPage from "./InputPage";
import SelectPlan from "./SelectPlan";
import Addons from "./Addons";
import Summary from "./Summary";

const App = function () {
  const [page, setPage] = useState("disabled");

  const handleClickPage = function (num) {
    setPage("active");
  };

  return (
    <div className="container">
      <SideBar />
      <InputPage pageSet={page} />
      {/* <SelectPlan pageSet={page} />
      <Addons pageSet={page} />
      <Summary pageSet={page} /> */}
    </div>
  );
};

export default App;
