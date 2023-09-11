import React from 'react'

function OrderSummary({totlaBrice}) {
    
    return (
    <div className="cart-order-summary">
        <div className="order-summary-title">
            ORDER SUMMARY
        </div>
        <div className="order-summary-item">
            <span>subtotal</span>
            <span>
               ${totlaBrice.toFixed(2)}
            </span>
        </div>
        <div className="order-summary-item">
            <span>Shopping cost</span>
            <span>
               0
            </span>
        </div>
        <div className="order-summary-item">
            <span>Discount</span>
            <span>
               0
            </span>
        </div>
        <div className="order-summary-item">
            <span>Total</span>
            <span>
                ${totlaBrice.toFixed(2)}
            </span>
        </div>
    </div>
  )
}

export default OrderSummary