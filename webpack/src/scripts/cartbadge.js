let cartCount = 0;
export const updateCartBadge = () => {
    const badge = document.querySelector('.cart-badge');
    if (cartCount > 0) {
      badge.classList.add('cart-badge_active');
      badge.textContent = cartCount;
    } else {
      badge.classList.remove('cart-badge_active');
    }
  };
  
export const addToCart = () => {
    const btn = event.target;
    if (btn.textContent === "buy now") {
      cartCount++;
      updateCartBadge();
    }else if(btn.textContent === "in the card") {
      cartCount--;
      updateCartBadge();
    }
};