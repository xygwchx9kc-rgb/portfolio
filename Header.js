function Header() {
  return (
    <header className="header">
      <div className="container header__inner">
        <div className="brand">
          <h1 className="brand__title">Personal Dashboard</h1>
          <p className="brand__subtitle">My profile and skills</p>
        </div>

        <nav className="nav" aria-label="Main navigation">
          <a className="nav__link" href="#about-me">About</a>
          <a className="nav__link" href="#skills">Skills</a>
          <a className="nav__link nav__link--cta" href="#projects">Projects</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
