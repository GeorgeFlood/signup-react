import React, { useMemo } from "react";

const planNames = {
  1: "Arcade",
  2: "Advanced",
  3: "Pro",
};

const Summary = ({
  setCurrentPage,
  setActiveButton,
  plan,
  MonthOrYearBoolean,
  state,
  isChecked,
}) => {
  const handleClick = (page) => {
    setActiveButton(page);
    setCurrentPage(page);
  };

  const planString = useMemo(() => planNames[plan] || "", [plan]);
  const price = useMemo(() => {
    if (MonthOrYearBoolean) {
      if (planString === "Arcade") {
        return "£90/yr";
      } else if (planString === "Advanced") {
        return "£120/yr";
      } else if (planString === "Pro") {
        return "£150/yr";
      }
    } else {
      if (planString === "Arcade") {
        return "£9/mo";
      } else if (planString === "Advanced") {
        return "£12/mo";
      } else if (planString === "Pro") {
        return "£15/mo";
      }
    }
  }, [MonthOrYearBoolean, planString]);

  let total = 0;

  if (state.input1Checked) {
    total += isChecked ? 10 : 1;
  }
  if (state.input2Checked) {
    total += isChecked ? 20 : 2;
  }
  if (state.input3Checked) {
    total += isChecked ? 20 : 2;
  }

  if (plan === 1) {
    total += isChecked ? 90 : 9;
  }
  if (plan === 2) {
    total += isChecked ? 120 : 12;
  }
  if (plan === 3) {
    total += isChecked ? 150 : 15;
  }

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
              {planString} ({MonthOrYearBoolean ? "Yearly" : "Monthly"})
            </h3>{" "}
            <a href="#" onClick={() => handleClick("SelectPlan")}>
              Change
            </a>
          </div>
          <div className="custom-box__price">
            <h4>{price || ""}</h4>{" "}
          </div>
        </div>

        <div className="border"></div>

        <div className="extra">
          <div className="extra--addons">
            <p style={{ display: state.input1Checked ? "" : "none" }}>
              Online service
            </p>
            <p style={{ display: state.input2Checked ? "" : "none" }}>
              Larger storage
            </p>
            <p style={{ display: state.input3Checked ? "" : "none" }}>
              Customizable profile
            </p>
          </div>

          <div className="extra--prices">
            <h4 style={{ display: state.input1Checked ? "" : "none" }}>
              {`${isChecked ? "£10/yr" : "£1/mo"}`}
            </h4>
            <h4 style={{ display: state.input2Checked ? "" : "none" }}>
              {`${isChecked ? "£20/yr" : "£2/mo"}`}
            </h4>
            <h4 style={{ display: state.input3Checked ? "" : "none" }}>
              {`${isChecked ? "£20/yr" : "£2/mo"}`}
            </h4>
          </div>
        </div>
      </div>

      <div className="total">
        <p>Total ({`${MonthOrYearBoolean ? "Yearly" : "Monthly"}`})</p>
        <h3>
          £{total}
          {isChecked ? "/yr" : "/mo"}
        </h3>
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
