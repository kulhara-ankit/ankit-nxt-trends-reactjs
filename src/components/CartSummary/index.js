import CartContext from '../../context/CartContext'
import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      const totalItems = cartList.length
      let totalCost = 0
      cartList.forEach(each => {
        totalCost += each.quantity * each.price
      })

      return (
        <>
          <div className="cart-summary-container">
            <h1 className="order-total-value">
              <span className="order-total-label">Order Total:</span> Rs{' '}
              {totalCost}
              /-
            </h1>
            <p className="total-items">{totalItems} Items in cart</p>
            <button type="button" className="checkout-button d-sm-none">
              Checkout
            </button>
          </div>
          <button type="button" className="checkout-button d-lg-none">
            Checkout
          </button>
        </>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
