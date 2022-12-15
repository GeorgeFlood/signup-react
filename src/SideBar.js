import { useState } from "react";

const SideBar = function ({ currentPage, setCurrentPage }) {
  console.log(currentPage);

  return (
    <div className="sideBar">
      <div className="btnContainer">
        <button
          className="sideBarBtn"
          onClick={() => setCurrentPage("YourInfo")}
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
          className="sideBarBtn"
          onClick={() => setCurrentPage("SelectPlan")}
        >
          2
        </button>
        <div className="sideBarInfo">
          <p>step 2</p>
          <h3>Select plan</h3>
        </div>
      </div>

      <div className="btnContainer">
        <button className="sideBarBtn" onClick={() => setCurrentPage("AddOns")}>
          3
        </button>
        <div className="sideBarInfo">
          <p>step 3</p>
          <h3>Add-ons</h3>
        </div>
      </div>

      <div className="btnContainer">
        <button
          className="sideBarBtn"
          onClick={() => setCurrentPage("Summary")}
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
