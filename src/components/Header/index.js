// Write your JS code here
import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <div className="navbar">
    <div className="nav-logo-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        alt="wave"
        className="nav-logo-image"
      />
      <p className="nav-logo-name">Wave</p>
    </div>
    <ul className="nav-links-container">
      <Link to="/" className="nav-link">
        <li>Home</li>
      </Link>
      <Link to="/about" className="nav-link">
        <li>About</li>
      </Link>
      <Link to="/contact" className="nav-link">
        <li>Contact</li>
      </Link>
    </ul>
  </div>
)

export default Header
