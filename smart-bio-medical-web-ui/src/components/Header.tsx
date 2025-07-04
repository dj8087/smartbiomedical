import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header id="header" className="header d-flex align-items-center sticky-top">
      <div className="container-fluid position-relative d-flex align-items-center justify-content-between">
        
        <a href="index.html" className="logo d-flex align-items-center me-auto me-xl-0">
          {/* Uncomment the line below if you also wish to use an image logo */}
          {/* <img src="assets/img/logo.png" alt="" /> */}
          <h1 className="sitename">Smart Bio Medical</h1>
          <span>.</span>
        </a>

        <nav id="navmenu" className="navmenu">
          <ul>
            <li><a href="#hero" className="active">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#team">Team</a></li>
            <li><a href="blog.html">Blog</a></li>
            <li className="dropdown">
              <a href="#"><span>Products</span> <i className="bi bi-chevron-down toggle-dropdown"></i></a>
              <ul>
                <li><Link to="/pdf-viewer?url=/assets/pdf/CATALOGUE1.pdf&title=Connectors Catalog">Connectors</Link></li>
                <li className="dropdown">
                  <a href="#"><span>Analyser</span> <i className="bi bi-chevron-down toggle-dropdown"></i></a>
                  <ul>
                    <li><Link to="/pdf-viewer?url=/assets/pdf/electrolyte-analyzer.pdf&title=Electrolyte Analyzer">Electrolyte Analyzer</Link></li>
                    <li><Link to="/pdf-viewer?url=/assets/pdf/hematology-analyser.pdf&title=Hematology Analyser">Hematology analyser</Link></li>
                  </ul>
                </li>
              </ul>
            </li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
        </nav>

        <a className="btn-getstarted" href="index.html#about">Get Started</a>

      </div>
    </header>
  )
}

export default Header
