import "./Skills.css";
export default function Skills() {
  return (
    <div className="skills">
      <p className="special-paragraph">my specialty</p>
      <h2 className="special-heading">my skills</h2>
      <p className="text">
        The Big Oxmox advised her not to do so, because there were thousands of
        bad Commas, wild Question Marks and devious Semikoli, but the Little
        Blind Text didn’t listen. She packed her seven versalia, put her initial
        into the belt and made herself on the way.
      </p>
      <div className="progress-container">
        <div className="progress-item">
          <span>photoshop</span>
          <div
            className="progress"
            role="progressbar"
            aria-label="Success example"
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div className="progress-bar bg-primary" style={{ width: "25%" }}>
              25%
            </div>
          </div>
        </div>
        <div className="progress-item">
          <span>jQuery</span>
          <div
            className="progress"
            role="progressbar"
            aria-label="Success example"
            aria-valuenow="70"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div className="progress-bar bg-secondary" style={{ width: "70%" }}>
              70%
            </div>
          </div>
        </div>
        <div className="progress-item">
          <span>html5</span>
          <div
            className="progress"
            role="progressbar"
            aria-label="Success example"
            aria-valuenow="50"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div className="progress-bar bg-danger" style={{ width: "50%" }}>
              50%
            </div>
          </div>
        </div>
        <div className="progress-item">
          <span>css3</span>
          <div
            className="progress"
            role="progressbar"
            aria-label="Success example"
            aria-valuenow="85"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div className="progress-bar bg-warning" style={{ width: "85%" }}>
              85%
            </div>
          </div>
        </div>
        <div className="progress-item">
          <span>wordpress</span>
          <div
            className="progress"
            role="progressbar"
            aria-label="Success example"
            aria-valuenow="100"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div className="progress-bar bg-success" style={{ width: "100%" }}>
              100%
            </div>
          </div>
        </div>
        <div className="progress-item">
          <span>SEO</span>
          <div
            className="progress"
            role="progressbar"
            aria-label="Success example"
            aria-valuenow="60"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div className="progress-bar bg-primary" style={{ width: "60%" }}>
              60%
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
