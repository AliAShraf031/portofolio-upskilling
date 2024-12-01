import "./Work.css";
import img1 from "../../assets/project-assets/img-1-C4nS0eD8.jpg";
import img2 from "../../assets/project-assets/img-2-D-4H1m4L.jpg";
import img3 from "../../assets/project-assets/img-3-pR2ZEVY9.jpg";
import img4 from "../../assets/project-assets/img-4-tHccITd-.jpg";
import img5 from "../../assets/project-assets/img-5-lAucr__a.jpg";
import img6 from "../../assets/project-assets/img-6-DFW03AZ3.jpg";
import { useState } from "react";
export default function Work() {
  let lists = document.querySelectorAll(".filter li a");
  lists.forEach((li) => {
    li.addEventListener("click", (e) => {
      lists.forEach((li) => {
        li.classList.remove("active");
      });
      e.target.classList.add("active");
    });
  });

  const [more, setMore] = useState(false);
  return (
    <div className="work">
      <p className="special-paragraph">my work</p>
      <h2 className="special-heading">recent work</h2>
      <ul className="filter">
        <li>
          <a to="#" className="active" href="#">
            graphic design
          </a>
        </li>
        <li>
          <a href="#">app</a>
        </li>
        <li>
          <a href="#">software</a>
        </li>
      </ul>
      <div className="img-container">
        <div className="image">
          <img src={img1} alt="" />
          <div className="overlay">
            <span>Work 2</span>
            <span>Animation</span>
            <ul>
              <li>
                <a href="#">
                  <i className="fa-solid fa-share-nodes"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa-regular fa-eye"></i> 100
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa-regular fa-heart"></i> 49
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="image">
          <img src={img2} alt="" />
          <div className="overlay">
            <span>Work 2</span>
            <span>Animation</span>
            <ul>
              <li>
                <a href="#">
                  <i className="fa-solid fa-share-nodes"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa-regular fa-eye"></i> 100
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa-regular fa-heart"></i> 49
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="image">
          <img src={img3} alt="" />
          <div className="overlay">
            <span>Work 2</span>
            <span>Animation</span>
            <ul>
              <li>
                <a href="#">
                  <i className="fa-solid fa-share-nodes"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa-regular fa-eye"></i> 100
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa-regular fa-heart"></i> 49
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="image">
          <img src={img4} alt="" />
          <div className="overlay">
            <span>Work 2</span>
            <span>Animation</span>
            <ul>
              <li>
                <a href="#">
                  <i className="fa-solid fa-share-nodes"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa-regular fa-eye"></i> 100
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa-regular fa-heart"></i> 49
                </a>
              </li>
            </ul>
          </div>
        </div>
        {more ? (
          ""
        ) : (
          <button className="btn btn-primary" onClick={() => setMore(!more)}>
            See More
          </button>
        )}
        {more && (
          <>
            <div className="image">
              <img src={img5} alt="" />
              <div className="overlay">
                <span>Work 2</span>
                <span>Animation</span>
                <ul>
                  <li>
                    <a href="#">
                      <i className="fa-solid fa-share-nodes"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-regular fa-eye"></i> 100
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-regular fa-heart"></i> 49
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="image">
              <img src={img6} alt="" />
              <div className="overlay">
                <span>Work 2</span>
                <span>Animation</span>
                <ul>
                  <li>
                    <a href="#">
                      <i className="fa-solid fa-share-nodes"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-regular fa-eye"></i> 100
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-regular fa-heart"></i> 49
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <button className="btn btn-primary" onClick={() => setMore(false)}>
              See Less
            </button>
          </>
        )}
      </div>
    </div>
  );
}
