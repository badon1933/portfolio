import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <section id="navbar">
      <nav className="navbar navbar-expand-lg bg-body-transparent">
        <div className="container">

          <a className="navbar-brand" href="#">Firdaus</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">

            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to={'/'} className="nav-link active text-primary" aria-current="page" href="#">Home</Link>
              </li>
              <li className="nav-item">
                <Link to={'/skills'} className="nav-link" href="#">Skills</Link>
              </li>
              <li className="nav-item">
                <Link to={'/portfolio'} className="nav-link" href="#">Portfolio</Link>
              </li>
            </ul>

          </div>

        </div>
      </nav>
    </section >
  );
}
export default Navbar;