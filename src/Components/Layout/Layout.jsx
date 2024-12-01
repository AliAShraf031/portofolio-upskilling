import { Outlet } from "react-router";
import Sidebar, { Details } from "../Sidebar/Sidebar";

export default function Layout() {
  return (
    <>
      <div className="layout">
        <div className="left">
          <Sidebar />
        </div>
        <div className="menu">
          <button
            style={{
              fontSize: "1.5rem",
              border: "1px solid",
              padding: "5px 10px",
              marginLeft: "10px",
            }}
            className="btn "
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasWithBothOptions"
            aria-controls="offcanvasWithBothOptions"
          >
            <i className="fa-solid fa-bars"></i>
          </button>

          <div
            className="offcanvas offcanvas-start"
            data-bs-scroll="true"
            tabIndex="-1"
            id="offcanvasWithBothOptions"
            aria-labelledby="offcanvasWithBothOptionsLabel"
          >
            <Details />
          </div>
        </div>

        <div className="right">
          <Outlet />
        </div>
      </div>
    </>
  );
}
