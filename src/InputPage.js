const InputPage = function ({ pageSet }) {
  console.log(pageSet);
  return (
    <div className={`page-container ${pageSet}`}>
      <div className="header">
        <h1>Personal Info</h1>
        <p>Please provide your name, email address, and phone number.</p>
      </div>

      <form>
        <div className="form-col">
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Vanessa Mint"
            required
          ></input>
        </div>

        <div className="form-col">
          <label>Email Address</label>
          <input
            type="email"
            name="email"
            placeholder="VanessaMint@gmail.com"
            required
          ></input>
        </div>

        <div className="form-col">
          <label>Phone Number</label>
          <input
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
