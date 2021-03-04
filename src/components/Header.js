import logo from "../images/logo.svg";

const Header = () => {
  const header = document.createElement("header");
  header.classList.add("header");
  header.innerHTML = `
    <nav class="navbar">
      <img src=${logo} class="navbar__logo" />

      <i class="fas fa-bars fa-2x navbar__burger-icon" id="burgerMenu"></i>
      <ul class="navbar__nav navbar__nav--hidden" id="topnav">
        <li class="navbar__nav-item">About</li>
        <li class="navbar__nav-item">Discover</li>
        <li class="navbar__nav-item">Get Started</li>
        
      </ul>
    </nav>`;
  document.querySelector("#container").appendChild(header);

  document.querySelector("#burgerMenu").addEventListener("click", () => {
    document.querySelector("#topnav").classList.toggle("navbar__nav--hidden");
  });
};

export default Header;
