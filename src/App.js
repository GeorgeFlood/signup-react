import { useState } from "react";

import "./styles/main.css";
import SideBar from "./SideBar";
import InputPage from "./InputPage";
import SelectPlan from "./SelectPlan";
import Addons from "./Addons";
import Summary from "./Summary";

const App = function () {
  const [info, setInfo] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [currentPage, setCurrentPage] = useState("YourInfo");
  const [activeButton, setActiveButton] = useState("YourInfo");
  const [plan, setPlan] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [state, setState] = useState({
    input1Checked: false,
    input2Checked: false,
    input3Checked: false,
  });

  return (
    <div className="container">
      <SideBar
        setCurrentPage={setCurrentPage}
        activeButton={activeButton}
        setActiveButton={setActiveButton}
      />
      {currentPage === "YourInfo" && (
        <InputPage
          info={info}
          setInfo={setInfo}
          setCurrentPage={setCurrentPage}
          setActiveButton={setActiveButton}
        />
      )}
      {currentPage === "SelectPlan" && (
        <SelectPlan
          setCurrentPage={setCurrentPage}
          setActiveButton={setActiveButton}
          setPlan={setPlan}
          setIsChecked={setIsChecked}
          isChecked={isChecked}
        />
      )}
      {currentPage === "AddOns" && (
        <Addons
          setCurrentPage={setCurrentPage}
          setActiveButton={setActiveButton}
          isChecked={isChecked}
          state={state}
          setState={setState}
        />
      )}
      {currentPage === "Summary" && (
        <Summary
          setCurrentPage={setCurrentPage}
          setActiveButton={setActiveButton}
          plan={plan}
          MonthOrYearBoolean={isChecked}
          isChecked={isChecked}
          state={state}
        />
      )}
    </div>
  );
};

export default App;
