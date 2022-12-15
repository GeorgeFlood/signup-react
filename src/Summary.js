const Summary = function ({ setCurrentPage }) {
  return (
    <div className="page-container summary-container">
      <div className="header">
        <h1>Finishing up</h1>
        <p>Double-check everything looks OK before confirming.</p>
      </div>

      <div className="summary-box">
        <div className="top">
          <div className="custom-box">
            <h3>Arcade (Monthly)</h3> {/*This needs to be dynmatic with JS */}
            <a href="#">Change</a>
          </div>
          <div className="custom-box__price">
            <h4>£9/mo</h4> {/*This needs to be dynmatic with JS */}
          </div>
        </div>

        <div className="border"></div>

        <div className="extra">
          <div className="extra--addons">
            <p>Online service</p>
            <p>Larger storage</p>
          </div>

          <div className="extra--prices">
            <h4>+£1/mo</h4>
            <h4>+£2/mo</h4>
          </div>
        </div>
      </div>

      <div className="total">
        <p>Total (per Month)</p>
        <h3>+£12/mo</h3>
      </div>

      <div className="btn-container">
        <button className="backBtn" onClick={() => setCurrentPage("AddOns")}>
          Go Back
        </button>
        <button className="nextBtn">Confirm</button>
      </div>
    </div>
  );
};

export default Summary;
