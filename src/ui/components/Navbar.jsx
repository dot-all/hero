import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { AuthContext } from '../../auth/context/';
import '../../styles.css';

export const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const onLogout = () => {
    logout();
    navigate('/login', { replace: true });
  }

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  return (
    <nav className="navbar navbar-expand-sm p-2 fixed-top navbar-light " style={{ backdropFilter: "blur(3px)", backgroundColor: "rgba(255, 255, 255, 0.85)" }}>
      <div className="container-fluid">
        <Link className="navbar-brand fs-2 comic" to="/">
          HERO
        </Link>
        <button 
          className="navbar-toggler" 
          type="button" 
          onClick={toggleMenu}
          aria-controls="navbarNav" 
          aria-expanded={isOpen} 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`} to="/marvel">
                Marvel
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`} to="/dc">
                DC
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`} to="/search">
                Buscar
                <svg xmlns="http://www.w3.org/2000/svg" style={{ height: "14px", marginBottom: "2px", marginLeft: "2px" }} viewBox="0 0 512 512"><path d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="32"/><path fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32" d="M338.29 338.29L448 448"/></svg>
              </NavLink>
            </li>
          </ul>
          <hr className="d-sm-none text-light" />
          <ul className="navbar-nav">
            <li className="nav-item">
              <span className="nav-link text-primary">
                {user?.name}
              </span>
            </li>
            <li className="nav-item">
              <button className="nav-link btn" onClick={onLogout}>
                Cerrar sesión
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
