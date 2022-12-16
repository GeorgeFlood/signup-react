import { useState } from "react";

import "./styles/main.css";
import SideBar from "./SideBar";
import InputPage from "./InputPage";
import SelectPlan from "./SelectPlan";
import Addons from "./Addons";
import Summary from "./Summary";

const App = function () {
  const [currentPage, setCurrentPage] = useState("YourInfo");
  const [activeButton, setActiveButton] = useState("YourInfo");

  return (
    <div className="container">
      <SideBar
        setCurrentPage={setCurrentPage}
        activeButton={activeButton}
        setActiveButton={setActiveButton}
      />
      {currentPage === "YourInfo" && (
        <InputPage
          setCurrentPage={setCurrentPage}
          setActiveButton={setActiveButton}
        />
      )}
      {currentPage === "SelectPlan" && (
        <SelectPlan
          setCurrentPage={setCurrentPage}
          setActiveButton={setActiveButton}
        />
      )}
      {currentPage === "AddOns" && (
        <Addons
          setCurrentPage={setCurrentPage}
          setActiveButton={setActiveButton}
        />
      )}
      {currentPage === "Summary" && (
        <Summary
          setCurrentPage={setCurrentPage}
          setActiveButton={setActiveButton}
        />
      )}
    </div>
  );
};

export default App;
