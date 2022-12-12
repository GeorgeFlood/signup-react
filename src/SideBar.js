const SideBar = function () {
  return (
    <div className="sideBar">
      <div className="btnContainer">
        <button className="sideBarBtn">1</button>
        <div className="sideBarInfo">
          <p>step 1</p>
          <h3>your info</h3>
        </div>
      </div>

      <div className="btnContainer">
        <button className="sideBarBtn">2</button>
        <div className="sideBarInfo">
          <p>step 2</p>
          <h3>Select plan</h3>
        </div>
      </div>

      <div className="btnContainer">
        <button className="sideBarBtn">3</button>
        <div className="sideBarInfo">
          <p>step 3</p>
          <h3>Add-ons</h3>
        </div>
      </div>

      <div className="btnContainer">
        <button className="sideBarBtn">4</button>
        <div className="sideBarInfo">
          <p>step 4</p>
          <h3>Summary</h3>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
