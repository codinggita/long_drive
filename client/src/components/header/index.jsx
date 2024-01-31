import "./style.css";
const Header = () => {
  return (
    <nav
      id="navbar_top"
      className="navbar navbar-expand-lg navbar-light bg-light navbar-fixed-top "
    >
      <a href className="navbar-brand ms-5">
        Long Drive
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto">
          <li id="nav-home" className="nav-item ms-2 me-2">
            <a href="/LongDrive" className="nav-link">
              Home
            </a>
          </li>
          <li id="nav-about" className="nav-item ms-2 me-2">
            <a href="/LongDrive/#/about" className="nav-link">
              About us
            </a>
          </li>
          <li id="nav-earn" className="nav-item ms-2 me-2">
            <a href="/LongDrive/#/addcar" className="nav-link">
              Earn with us
            </a>
          </li>
          <li className="nav-item ms-2 me-2">
            <a id="nav-book" href="/LongDrive/#/cars" className="nav-link">
              Book Now
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Header;
