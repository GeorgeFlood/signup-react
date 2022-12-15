import { useState } from "react";

import "./styles/main.css";
import SideBar from "./SideBar";
import InputPage from "./InputPage";
import SelectPlan from "./SelectPlan";
import Addons from "./Addons";
import Summary from "./Summary";

const App = function () {
  const [currentPage, setCurrentPage] = useState("YourInfo");

  return (
    <div className="container">
      <SideBar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {currentPage === "YourInfo" && <InputPage />}
      {currentPage === "SelectPlan" && <SelectPlan />}
      {currentPage === "AddOns" && <Addons />}
      {currentPage === "Summary" && <Summary />}
    </div>
  );
};

export default App;
