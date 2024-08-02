import {Link} from 'react-router-dom'
import CartContext from '../../context/CartContext';
import './index.css';

const Header = () => {
  const renderCartItemsCount = () => (
    <CartContext.Consumer>
      {value => {
        const {cartList} = value
        const cartItemsCount = cartList.length

        return (
          <>
            {cartItemsCount > 0 ? (
              <span className="cart-count-badge">{cartList.length}</span>
            ) : null}
          </>
        )
      }}
    </CartContext.Consumer>
  )

    return (
      <nav className="nav-header">
          <Link to="/">
            <img
              className="website-logo"
              src="https://i.postimg.cc/x1zdhcH8/Screenshot-2024-08-02-124450.png"
              alt="website logo"
            />
          </Link>

          <ul className="nav-menu">
            <li className="nav-menu-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>

            <li className="nav-menu-item">
              <Link to="/properties" className="nav-link">
                Rental Home
              </Link>

            </li>

            <li className="nav-menu-item">
              <Link to="/cart" className="nav-link">
                Cart
                {renderCartItemsCount()}
              </Link>
            </li>
          </ul>
    </nav>
  )
}

export default Header
