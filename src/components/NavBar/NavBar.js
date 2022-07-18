import "./NavBar.css"

const NavBar = () =>{
  return (
<div className="nav">
<nav class="navbar navbar-expand-md">
  <div class="container-fluid conteiner">
    <div class="logo d-flex justify-content-start">
      <img src="./assests/mate.png" width={60} alt=""></img>
      <h2 class="fs-1 text-white txtMate">Mundo Mate</h2>
    </div>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
      aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
      <div class="collapse navbar-collapse text-center" id="navbarNav">
          <ul class="navbar-nav ms-auto nav-bar">
              <li class="nav-item px-3 nav-li">
                  <a class="nav-link nav-active nav-color text-light" aria-current="page" href="">Inicio</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle text-light" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false"  >
                  Productos
                </a>
                <ul class="dropdown-menu bg-black dropdownMenu" aria-labelledby="navbarDropdown">
                  <li><a class="dropdown-item text-white fs-5" href="#">Mates</a></li>
                  <li><a class="dropdown-item text-white fs-5" href="#">Bombillas</a></li>
                  <li><a class="dropdown-item text-white fs-5" href="#">Yerbas</a></li>
                </ul>
              </li>
              <li class="nav-item px-3 nav-li">
                  <a class="nav-link nav-color text-light" href="">Quines Somos</a>
              </li>
              <li class="nav-item px-3 nav-li">
                  <a class="nav-link nav-color text-light" href="">Contacto</a>
              </li>
          </ul>
      </div>
  </div>
</nav>
</div>
);
}
  
export default NavBar;
