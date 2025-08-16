export default function Nav(){
  return (
    <nav className="nav">
      <div className="nav-inner container">
        <div className="brand">Shahriyar Trading LLC</div>
        <div className="menu">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a className="btn btn-accent" href="#contact">Contact</a>
        </div>
      </div>
    </nav>
  );
}
