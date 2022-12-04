import logo from "../assets/images/Logo.png";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <ul
      className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion"
      id="accordionSidebar"
    >
      {/* <!-- Sidebar - Brand --> */}
      <Link
        className="sidebar-brand d-flex align-items-center justify-content-center"
        to={"/"}
      >
        <div className="sidebar-brand-icon">
          <img className="w-100" src={logo} alt="LadoA Logo" />
        </div>
      </Link>

      {/* <!-- Divider --> */}
      <hr className="sidebar-divider my-0" />

      {/* <!-- Nav Item - Dashboard --> */}
      <li className="nav-item active">
        <Link className="nav-link" to={"/"}>
          <i className="fas fa-fw fa-tachometer-alt"></i>
          <span>Dashboard - Lado A</span>
        </Link>
      </li>

      {/* <!-- Divider --> */}
      <hr className="sidebar-divider" />

      {/* <!-- Heading --> */}
      <div className="sidebar-heading">Opciones</div>

      {/* <!-- Nav Item - Pages --> */}
      <li className="nav-item">
        <Link className="nav-link collapsed" to={"/discos"}>
          <i className="fas fa-fw fa-folder"></i>
          <span>Discos</span>
        </Link>
      </li>

      {/* <!-- Nav Item - Charts --> */}
      <li className="nav-item">
        <Link className="nav-link" to={"/ultimo"}>
          <i className="fas fa-fw fa-chart-area"></i>
          <span>Ultimo disco</span>
        </Link>
      </li>

      {/* <!-- Nav Item - Tables --> */}
      <li className="nav-item">
        <Link className="nav-link" to={"/generos"}>
          <i className="fas fa-fw fa-table"></i>
          <span>Generos</span>
        </Link>
      </li>

      {/* <!-- Divider --> */}
      <hr className="sidebar-divider d-none d-md-block" />
    </ul>
  );
}

export default Sidebar;
