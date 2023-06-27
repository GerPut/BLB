import "./styles.css"
import RangeSlider from './components/RangeSlider'

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
      <div><h5>RECENT ACTIVITY</h5>
        <div className="component-container">
          <div>
            <div>FIGHTER A</div>
            <div>Last Active</div>
            <RangeSlider min={0} max={100} value={50} step={0.1} />
          </div>
          <div>
            Importance
          </div>
          <div>
            <div>FIGHTER B</div>
            <div>Last Active</div>
            <RangeSlider min={0} max={100} value={50} step={0.1} />
          </div>
        </div>

      </div>
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
