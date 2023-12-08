import { Button, HeaderNav } from "../../assets";

const navLinks = ["Affiliate", "Pricing", "Testimonials", "Help Center"];

export const Header = () => {
  return (
    <HeaderNav className="flex-column navbar navbar-expand-md navbar-light fixed-top">
      <div className="container-fluid header">
        <span className="navbar-brand">
          <img
            src="https://afforai.com/img/graphics/logo-new-violet.webp"
            alt="Afforai Logo"
          />
          Afforai
        </span>

        <div className="d-block d-md-none">
          <AuthenticationButton />
        </div>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul className="navbar-nav">
            {navLinks.map((navLink) => (
              <li className="nav-item">
                <span key={navLink} className="nav-link">
                  {navLink}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="d-md-block d-none">
          <AuthenticationButton />
        </div>
      </div>
    </HeaderNav>
  );
};

const AuthenticationButton = () => (
  <>
    <Button className="btn-gray me-2">Login</Button>
    <Button className="btn-gradient">Try for free</Button>
  </>
);
