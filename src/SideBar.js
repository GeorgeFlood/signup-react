import { useState } from "react";

const SideBar = function ({ setCurrentPage }) {
  const [activeButton, setActiveButton] = useState("YourInfo");
  const handleClick = (page) => {
    setCurrentPage(page);
    setActiveButton(page);
  };

  return (
    <div className="sideBar">
      <div className="btnContainer">
        <button
          className={`sideBarBtn ${
            activeButton === "YourInfo" ? "active" : ""
          }`}
          onClick={() => handleClick("YourInfo")}
        >
          1
        </button>
        <div className="sideBarInfo">
          <p>step 1</p>
          <h3>your info</h3>
        </div>
      </div>

      <div className="btnContainer">
        <button
          className={`sideBarBtn ${
            activeButton === "SelectPlan" ? "active" : ""
          }`}
          onClick={() => handleClick("SelectPlan")}
        >
          2
        </button>
        <div className="sideBarInfo">
          <p>step 2</p>
          <h3>Select plan</h3>
        </div>
      </div>

      <div className="btnContainer">
        <button
          className={`sideBarBtn ${activeButton === "AddOns" ? "active" : ""}`}
          onClick={() => handleClick("AddOns")}
        >
          3
        </button>
        <div className="sideBarInfo">
          <p>step 3</p>
          <h3>Add-ons</h3>
        </div>
      </div>

      <div className="btnContainer">
        <button
          className={`sideBarBtn ${activeButton === "Summary" ? "active" : ""}`}
          onClick={() => handleClick("Summary")}
        >
          4
        </button>
        <div className="sideBarInfo">
          <p>step 2</p>
          <h3>Select plan</h3>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
