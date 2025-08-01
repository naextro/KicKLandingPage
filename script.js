
const hamburger = document.querySelector('.mobile-navbar .hamburger');
const mobileMenu = document.querySelector('.mobile-navbar-menu');

if (hamburger && mobileMenu) {
  hamburger.addEventListener('click', function (e) {
    hamburger.classList.toggle('open');
    mobileMenu.classList.toggle('open');
  });

  mobileMenu.querySelectorAll('.mobile-navbar-link').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      mobileMenu.classList.remove('open');
    });
  });

  document.addEventListener('click', function (e) {
    if (!mobileMenu.contains(e.target) && !hamburger.contains(e.target)) {
      hamburger.classList.remove('open');
      mobileMenu.classList.remove('open');
    }
  });
}


document.addEventListener('DOMContentLoaded', function () {

  const colorSwatches = document.querySelectorAll('.color-swatch');
  colorSwatches.forEach(swatch => {
    swatch.addEventListener('click', function () {

      colorSwatches.forEach(s => s.classList.remove('selected'));

      this.classList.add('selected');
    });
  });


  const sizeButtons = document.querySelectorAll('.size-btn');
  sizeButtons.forEach(button => {
    button.addEventListener('click', function () {

      sizeButtons.forEach(btn => btn.classList.remove('selected'));

      this.classList.add('selected');
    });
  });


  const addToCartBtn = document.querySelector('.add-to-cart');
  if (addToCartBtn) {
    addToCartBtn.addEventListener('click', function () {
      const selectedSize = document.querySelector('.size-btn.selected');
      const selectedColor = document.querySelector('.color-swatch.selected');

      if (!selectedSize) {
        alert('Please select a size');
        return;
      }

      if (!selectedColor) {
        alert('Please select a color');
        return;
      }


      const cartBtn = document.querySelector('.cart-btn');
      if (cartBtn) {
        const currentCount = parseInt(cartBtn.textContent) || 0;
        cartBtn.textContent = currentCount + 1;
      }

      alert('Product added to cart!');
    });
  }


  const buyNowBtn = document.querySelector('.buy-now');
  if (buyNowBtn) {
    buyNowBtn.addEventListener('click', function () {
      const selectedSize = document.querySelector('.size-btn.selected');
      const selectedColor = document.querySelector('.color-swatch.selected');

      if (!selectedSize) {
        alert('Please select a size');
        return;
      }

      if (!selectedColor) {
        alert('Please select a color');
        return;
      }

      alert('Redirecting to checkout...');
    });
  }


  const wishlistBtn = document.querySelector('.wishlist-btn');
  if (wishlistBtn) {
    wishlistBtn.addEventListener('click', function () {
      this.classList.toggle('active');
      if (this.classList.contains('active')) {
        this.style.color = '#ff4757';
        alert('Added to wishlist!');
      } else {
        this.style.color = '#232321';
        alert('Removed from wishlist!');
      }
    });
  }


  const productImages = document.querySelectorAll('.product-images img');
  productImages.forEach(img => {
    img.addEventListener('click', function () {

      productImages.forEach(image => image.parentElement.classList.remove('active'));

      this.parentElement.classList.add('active');
    });
  });
});
