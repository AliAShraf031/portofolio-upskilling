import img1 from "../../assets/project-assets/Screenshot 2024-12-01 155200.png";
// import img1 from "../../../public/project-assets/Screenshot 2024-12-01 155200.png";
import img2 from "../../assets/project-assets/img_bg_2-DzCs5o-0.jpg";
export default function Home() {
  return (
    <div>
      <div
        id="carouselExampleDark"
        className="carousel carousel-dark slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="3000">
            <img
              src={img1}
              className="d-block w-100"
              alt="..."
              style={{
                height: "100vh",
                objectFit: "cover",
              }}
            />
            <div className="carousel-caption d-none d-md-block text-start">
              <h1 style={{ fontSize: "50px" }}>
                Hi ! <br />
                Im Jackson Ford
              </h1>
              <p>100% html5 bootstrap templates Made</p>
              <button
                style={{
                  margin: "20px 0 ",
                  padding: "10px 20px",
                  border: "1px solid ",
                  borderRadius: "5px",
                  transition: "0.3s",
                }}
              >
                Open CV
              </button>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="3000">
            <img
              src={img2}
              className="d-block w-100"
              alt="..."
              style={{
                height: "100vh",
                objectFit: "cover",
              }}
            />
            <div className="carousel-caption d-none d-md-block text-start">
              <h1 style={{ fontSize: "50px" }}>
                I Am <br />A Designer
              </h1>
              <p>100% html5 bootstrap templates Made</p>
              <button
                style={{
                  margin: "20px 0 ",
                  padding: "10px 20px",
                  border: "1px solid ",
                  borderRadius: "5px",
                  transition: "0.3s",
                }}
              >
                View Portfolio
              </button>
            </div>
          </div>
        </div>
        {/* <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button> */}
      </div>
    </div>
  );
}
