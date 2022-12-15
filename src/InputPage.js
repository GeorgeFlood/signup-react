const InputPage = function () {
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
            type="text"
            name="name"
            placeholder="Vanessa Mint"
            required
          ></input>
        </div>

        <div className="form-col">
          <label for="email">Email Address</label>
          <input
            type="email"
            name="email"
            placeholder="VanessaMint@gmail.com"
            required
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
          <button className="nextBtn">Next Step</button>
        </div>
      </form>
    </div>
  );
};

export default InputPage;
