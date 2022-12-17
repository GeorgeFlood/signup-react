const Summary = function ({
  setCurrentPage,
  setActiveButton,
  plan,
  MonthOrYearBoolean,
}) {
  const handleClick = function (page) {
    setActiveButton(page);
    setCurrentPage(page);
  };

  let planString;
  switch (plan) {
    case 1:
      planString = "Arcade";
      break;
    case 2:
      planString = "Advanced";
      break;
    case 3:
      planString = "Pro";
      break;
    default:
      planString = "";
  }

  let price;
  if (MonthOrYearBoolean) {
    if (planString === "Arcade") {
      price = "£90/yr";
    } else if (planString === "Advanced") {
      price = "£120/yr";
    } else if (planString === "Pro") {
      price = "£150/yr";
    }
  } else {
    if (planString === "Arcade") {
      price = "£9/mo";
    } else if (planString === "Advanced") {
      price = "£12/mo";
    } else if (planString === "Pro") {
      price = "£15/mo";
    }
  }

  console.log(planString);

  return (
    <div className="page-container summary-container">
      <div className="header">
        <h1>Finishing up</h1>
        <p>Double-check everything looks OK before confirming.</p>
      </div>

      <div className="summary-box">
        <div className="top">
          <div className="custom-box">
            <h3>
              {`${planString}`} (
              {`${MonthOrYearBoolean ? "Yearly" : "Monthly"}`})
            </h3>{" "}
            {/*This needs to be dynmatic with JS */}
            <a href="#" onClick={() => handleClick("SelectPlan")}>
              Change
            </a>
          </div>
          <div className="custom-box__price">
            <h4>{`${price}`}</h4> {/*This needs to be dynmatic with JS */}
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
        <p>Total ({`${MonthOrYearBoolean ? "Yearly" : "Monthly"}`})</p>
        <h3>+£12/mo</h3>
      </div>

      <div className="btn-container">
        <button className="backBtn" onClick={() => handleClick("AddOns")}>
          Go Back
        </button>
        <button className="nextBtn">Confirm</button>
      </div>
    </div>
  );
};

export default Summary;
