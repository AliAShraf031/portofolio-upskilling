import "./Experience.css";
export default function Experience() {
  return (
    <div className="experience">
      <p className="special-paragraph">my experience</p>
      <h2 className="special-heading">work experience</h2>
      <div className="experience-container">
        <div className="experience-item">
          <div className="icon bg-primary">
            <i className="fa-solid fa-pencil"></i>
          </div>
          <div className="info">
            <a href="#"> Full Stack Developer</a> <span>2019 - 2020</span>
            <p>
              Tolerably earnestly middleton extremely distrusts she boy now not.
              Add and offered prepare how cordial two promise. Greatly who
              affixed suppose but enquire compact prepare all put. Added forth
              chief trees but rooms think may.
            </p>
          </div>
        </div>
        <div className="experience-item">
          <div className="icon bg-danger">
            <i className="fa-solid fa-pencil"></i>
          </div>
          <div className="info">
            <a href="#"> Front End Developer at Google Company </a>
            <span>2019 - 2020</span>
            <p>
              Even the all-powerful Pointing has no control about the blind
              texts it is an almost unorthographic life One day however a small
              line of blind text by the name of Lorem Ipsum decided to leave for
              the far World of Grammar.
            </p>
          </div>
        </div>
        <div className="experience-item">
          <div className="icon bg-warning">
            <i className="fa-solid fa-pencil"></i>
          </div>
          <div className="info">
            <a href="#"> System Analyst</a> <span>2019 - 2020</span>
            <p>
              Even the all-powerful Pointing has no control about the blind
              texts it is an almost unorthographic life One day however a small
              line of blind text by the name of Lorem Ipsum decided to leave for
              the far World of Grammar.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
