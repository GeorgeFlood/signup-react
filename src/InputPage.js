import { useState } from "react";

const InputPage = function ({ setCurrentPage, setActiveButton }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  //if the name variable is empty, the class should be 'invalid'
  // otherwise the class should be as usual;
  const handleNameInput = function (e) {
    setName(e.target.value);
  };

  //if the email variable is empty, the class should be 'invalid'
  // otherwise the class should be as usual;
  const handleEmailInput = function (e) {
    setEmail(e.target.value);
  };

  const handleClick = (page) => {
    setCurrentPage(page);
    setActiveButton(page);
  };

  return (
    <div className={"page-container"}>
      <div className="header">
        <h1>Personal Info</h1>
        <p>Please provide your name, email address, and phone number.</p>
      </div>

      <form>
        <div className="form-col">
          <label for="name">Name</label>
          <input
            className={`${name !== "" && name.includes(" ") ? "" : "invalid"}`}
            type="text"
            name="name"
            placeholder="Vanessa Mint"
            required
            onChange={handleNameInput}
          ></input>
        </div>

        <div className="form-col">
          <label for="email">Email Address</label>
          <input
            className={`${email.includes("@") ? "" : "invalid"}`}
            type="email"
            name="email"
            placeholder="VanessaMint@gmail.com"
            required
            onChange={handleEmailInput}
          ></input>
        </div>

        <div className="form-col">
          <label for="phone">Phone Number</label>
          <input
            id="myInput"
            type="phone"
            name="phone"
            placeholder="eg. + 1 234 567 890"
          ></input>
        </div>

        <div className="btn-container">
          <button className="backBtn"></button>
          <button
            style={{ top: "7.2rem", left: "11.1rem" }}
            className="nextBtn"
            onClick={() => handleClick("SelectPlan")}
          >
            Next Step
          </button>
        </div>
      </form>
    </div>
  );
};

export default InputPage;
