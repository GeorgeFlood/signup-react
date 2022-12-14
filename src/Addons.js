const Addons = function ({
  setCurrentPage,
  setActiveButton,
  state,
  setState,
  isChecked,
}) {
  const handleClick = function (page) {
    setActiveButton(page);
    setCurrentPage(page);
  };

  return (
    <div className="page-container addons-container">
      <div className="header">
        <h1>Pick Add-ons</h1>
        <p>Add-ons help enhance your gaming experience.</p>
      </div>

      <div className="option-container">
        <div
          className={`option ${state.input1Checked ? "option--checked" : ""}`}
        >
          <div className="option--col1">
            <input
              type="checkbox"
              onClick={() =>
                setState({ ...state, input1Checked: !state.input1Checked })
              }
            ></input>
            <div className="option--info">
              <h4>Online Service</h4>
              <p>Access to multiplayer games</p>
            </div>
          </div>
          <div className="option--col2">
            <p>{`${isChecked ? "£10/yr" : "£1/mo"}`}</p>
          </div>
        </div>

        <div
          className={`option ${state.input2Checked ? "option--checked" : ""}`}
        >
          <div className="option--col1">
            <input
              type="checkbox"
              onClick={() =>
                setState({ ...state, input2Checked: !state.input2Checked })
              }
            ></input>
            <div className="option--info">
              <h4>Larger storage</h4>
              <p>Extra 1TB of cloud save</p>
            </div>
          </div>
          <div className="option--col2">
            <p>{`${isChecked ? "£20/yr" : "£2/mo"}`}</p>
          </div>
        </div>

        <div
          className={`option ${state.input3Checked ? "option--checked" : ""}`}
        >
          <div className="option--col1">
            <input
              type="checkbox"
              onClick={() =>
                setState({ ...state, input3Checked: !state.input3Checked })
              }
            ></input>
            <div className="option--info">
              <h4>Customizable profile</h4>
              <p>Custom theme on your profile</p>
            </div>
          </div>
          <div className="option--col2">
            <p>{`${isChecked ? "£20/yr" : "£2/mo"}`}</p>
          </div>
        </div>
      </div>

      <div className="btn-container">
        <button className="backBtn" onClick={() => handleClick("SelectPlan")}>
          Go Back
        </button>
        <button className="nextBtn" onClick={() => handleClick("Summary")}>
          Next Step
        </button>
      </div>
    </div>
  );
};

export default Addons;
