import Logo from "../assets/logo.png";

const Header = () => (
  <header className="header">
    <section className="logo">
      <span className="crop">
        <img src={Logo} alt="Chat Logo" />
      </span>
      <span className="app-name">Chat App</span>
    </section>
  </header>
);

export default Header;
