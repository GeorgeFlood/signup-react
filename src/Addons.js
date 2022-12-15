const Addons = function ({ setCurrentPage }) {
  return (
    <div className="page-container addons-container">
      <div className="header">
        <h1>Pick Add-ons</h1>
        <p>Add-ons help enhance your gaming experience.</p>
      </div>

      <div className="option-container">
        <div className="option">
          <div className="option--col1">
            <input type="checkbox"></input>
            <div className="option--info">
              <h4>Online Service</h4>
              <p>Access to multiplayer games</p>
            </div>
          </div>
          <div className="option--col2">
            <p>+£1/mo</p>
          </div>
        </div>

        <div className="option">
          <div className="option--col1">
            <input type="checkbox"></input>
            <div className="option--info">
              <h4>Larger storage</h4>
              <p>Extra 1TB of cloud save</p>
            </div>
          </div>
          <div className="option--col2">
            <p>+£2/mo</p>
          </div>
        </div>

        <div className="option">
          <div className="option--col1">
            <input type="checkbox"></input>
            <div className="option--info">
              <h4>Customizable profile</h4>
              <p>Custom theme on your profile</p>
            </div>
          </div>
          <div className="option--col2">
            <p>+£2/mo</p>
          </div>
        </div>
      </div>

      <div className="btn-container">
        <button
          className="backBtn"
          onClick={() => setCurrentPage("SelectPlan")}
        >
          Go Back
        </button>
        <button className="nextBtn" onClick={() => setCurrentPage("Summary")}>
          Next Step
        </button>
      </div>
    </div>
  );
};

export default Addons;
