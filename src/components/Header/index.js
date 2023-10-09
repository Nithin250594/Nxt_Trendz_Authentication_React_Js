// Write your JS code here

import './index.css'

const Header = () => (
  <nav className="nav-content">
    <>
      <div className="navbar-mobile-bg">
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
            className="header-mobile-logo"
          />
        </div>

        <button type="button" className="nav-logout-btn-image">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png "
            alt="nav logout"
            className="icons-image"
          />
        </button>
      </div>

      <div className="navbar-desktop-bg">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          alt="website logo"
          className="header-logo"
        />
        <ul className="header-options-list">
          <li className="each-list-option">Home</li>
          <li className="each-list-option">Products</li>
          <li className="each-list-option">Cart</li>
          <li>
            <button type="button" className="logout-btn">
              Logout
            </button>
          </li>
        </ul>
      </div>
    </>

    <div className="header-option-icons">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png "
        alt="nav home"
        className="icons-image"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png  "
        alt="nav products"
        className="icons-image"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
        alt="nav cart"
        className="icons-image"
      />
    </div>
  </nav>
)

export default Header
