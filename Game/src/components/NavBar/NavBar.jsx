import { Link, Navigate } from "react-router-dom";
import { UseUser } from "../../Provieder/UsuarioProvieder";
import "./Navbar.css";

export default function Navbar() {
  const { isLogin,LogoutUser } = UseUser();
  const CloseSesion=()=>{
    LogoutUser()
  }
  if (isLogin)
    return (
      <nav className="navbar">
        <div className="navbar-success">
          <Link to="/">Home</Link>
        </div>
        <div className="navbar-success">
          <Link to="/register">Carrito</Link>
        </div>
        <div className="navbar-success"> 
          <Link to="/profile">Perfil</Link>
        </div  >
        <div className="navbar-success"><Link onClick={CloseSesion}>Cerrar sesión</Link> </div>
        
      </nav>
    );
  else
    return (
      <nav className="navbar">
        <Link to="/">
          <div className="navbar-link">Home</div>
        </Link>

        <Link to="/login">
          <div className="navbar-link">Login</div>
        </Link>

        <Link to="/register">
          <div className="navbar-link"> Sign Up</div>
        </Link>
      </nav>
    );
}
