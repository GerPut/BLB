import "./styles.css"

export default function App() {
  const options = Array.from({ length: 10 }, (_, index) => `Option ${index + 1}`);
  return <div>
    <h1>BETLINEBEAST</h1>
    <form action="" className="form-container">
      <div className="form-row">
        <label htmlFor="item">Select Your Criteria</label>
        <select id="item">
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <button className="btn">ADD</button>
      <div>Component goes here</div>
      <h5>ODDS RESULT</h5>
      <div className="result-container">
        <div>
          <div>FIGHTER A</div>
          <div className="result-box">result</div>
        </div>
        <div>
          VS
        </div>
        <div>
          <div>FIGHTER B</div>
          <div className="result-box">result</div>
        </div>
      </div>
      <div>
        <button className="btn">CALCULATE</button>
      </div>
    </form>
    <div></div>
  </div>
}
