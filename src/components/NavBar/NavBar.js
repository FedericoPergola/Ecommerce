import CartWidget from "./CartWidget";
import "./NavBar.css"
import { Link } from "react-router-dom";

const NavBar = () =>{
  return (
    <div className="nav">
      <nav class="navbar navbar-expand-md">
        <div class="container-fluid conteiner">
          <Link to='/'><div class="logo d-flex justify-content-start">
            <img src="../assests/mate.png" width={60} alt=""></img>
            <h2 class="fs-1 text-white txtMate">Mundo Mate</h2>
        </div></Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
            <div class="collapse navbar-collapse text-center" id="navbarNav">
                <ul class="navbar-nav ms-auto nav-bar">
                    <Link to='/'><li class="nav-item px-3 nav-li">
                      <a class="nav-link nav-active nav-color text-light" aria-current="page" href="">Inicio</a></li>
                    </Link>
                    <li class="nav-item dropdown">
                      <a class="nav-link dropdown-toggle text-light" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false"  >
                        Productos
                      </a>
                      <ul class="dropdown-menu bg-black dropdownMenu">
                        <li><Link to='/category/mates'><a class="dropdown-item text-white fs-5" href="#">Mates</a></Link></li>
                        <li><Link to='/category/bombillas'><a class="dropdown-item text-white fs-5" href="#">Bombillas</a></Link></li>
                      {/* <Link to='/category/yerbas'><li><a class="dropdown-item text-white fs-5" href="#">Yerbas</a></li></Link> */}
                        <li><Link to='/products'><a class="dropdown-item text-white fs-5" href="#">Ver todo</a></Link></li>
                      </ul>
                    </li>
                    <li class="nav-item px-3 nav-li">
                        <a class="nav-link nav-color text-light" href="">Quines Somos</a>
                    </li>
                    <Link to='/contact'><li class="nav-item px-3 nav-li">
                      <a class="nav-link nav-color text-light" href="">Contacto</a></li>
                    </Link>
                  <CartWidget />
                </ul>
            </div>
        </div>
      </nav>
    </div>
  );
}
  
export default NavBar;
