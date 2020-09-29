let orderSummary = {
  itemsPrice: 0,
  shippingFee: 0,
  freeShipping: null, // true or false
  totalPayment: 0,
}

// Set itemsPrice
orderSummary.itemsPrice = Number(prompt('How much is your items total?'))

if (orderSummary.itemsPrice <= 0) {
  console.log('Your order is invalid')
} else {
  if (orderSummary.itemsPrice >= 100) {
    // Set shipping details
    orderSummary.freeShipping = true
    orderSummary.shippingFee = 0
  } else {
    orderSummary.freeShipping = false
    orderSummary.shippingFee = 10
  }

  orderSummary.totalPayment = orderSummary.itemsPrice + orderSummary.shippingFee

  console.log('Your order summary:')
  console.log(`
  Items Price   = $${orderSummary.itemsPrice}
  ${orderSummary.freeShipping ? 'Free Shipping!' : ''}
  ${
    !orderSummary.freeShipping
      ? `Shipping Fee  = $${orderSummary.shippingFee}`
      : ''
  }
  -------------------------------
  Total Payment = $${orderSummary.totalPayment}
`)
}
