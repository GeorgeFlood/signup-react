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
      <SideBar setCurrentPage={setCurrentPage} />
      {currentPage === "YourInfo" && (
        <InputPage setCurrentPage={setCurrentPage} />
      )}
      {currentPage === "SelectPlan" && (
        <SelectPlan setCurrentPage={setCurrentPage} />
      )}
      {currentPage === "AddOns" && <Addons setCurrentPage={setCurrentPage} />}
      {currentPage === "Summary" && <Summary setCurrentPage={setCurrentPage} />}
    </div>
  );
};

export default App;
