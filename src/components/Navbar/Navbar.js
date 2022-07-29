/* eslint-disable jsx-a11y/anchor-is-valid */
import  './Navbar.css'

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-sm navbar-light bg-light nav_container">
        <div className="container-fluid">
          <h4 className="nav_header">Nexus News</h4>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mynavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="mx-4 collapse navbar-collapse" id="mynavbar">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
              <span>
                <a className="nav-link" href="#">
                <i className="fa fa-line-chart mx-1" aria-hidden="true"></i>
                  Top Headlines
                </a>
                </span>
             </li>
             <li className="nav-item">
                <a className="nav-link" href="#">
                <i className="fa fa-bookmark mx-1" aria-hidden="true"></i> Saved
                </a>
             </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="text"
                placeholder="Search for anything"
              />
              <span className="input-group-text border-0" id="search-addon">
                <i className="fa fa-search"></i>
              </span>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}
