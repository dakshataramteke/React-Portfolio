import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <>
        <header className="header_wrapper">
        <nav className="navbar navbar-expand-lg bg-white fixed-top">
            <div className="container">
              <a className='navbar-brand' to='/'>Dakshata</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul className="navbar-nav menu_navbar_nav">
                  <li className="nav-item">
                    <Link aria-current='page' className='nav-link active' to='/'>Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link className='nav-link' to='/about'>About</Link>
                  </li>
                  <li className="nav-item">
                    <Link className='nav-link' to='/resume'>Resume</Link>
                  </li>
                  <li className="nav-item">
                    <Link className='nav-link' to='/project'>Projects</Link>
                  </li>
                  <li className="nav-item">
                    <Link className='nav-link' to='/contact'>Contact</Link>
                  </li> 
                </ul>
              </div>
            </div>
          </nav>
     </header>
     
    </>
  )
}

export default Header
