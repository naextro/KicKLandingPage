/* ===== MOBILE NAVIGATION FUNCTIONALITY ===== */

// Get mobile navigation elements
const hamburger = document.querySelector('.mobile-navbar .hamburger');
const mobileMenu = document.querySelector('.mobile-navbar-menu');

// Initialize mobile navigation if elements exist
if (hamburger && mobileMenu) {
    // Toggle mobile menu when hamburger is clicked
    hamburger.addEventListener('click', function (e) {
        hamburger.classList.toggle('open');
        mobileMenu.classList.toggle('open');
    });

    // Close mobile menu when a link is clicked
    mobileMenu.querySelectorAll('.mobile-navbar-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('open');
            mobileMenu.classList.remove('open');
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function (e) {
        if (!mobileMenu.contains(e.target) && !hamburger.contains(e.target)) {
            hamburger.classList.remove('open');
            mobileMenu.classList.remove('open');
        }
    });
}

/* ===== PRODUCT PAGE FUNCTIONALITY ===== */

// Wait for DOM to be fully loaded before initializing product features
document.addEventListener('DOMContentLoaded', function () {

    /* ===== COLOR SELECTION FUNCTIONALITY ===== */
    
    // Get all color swatches on the product page
    const colorSwatches = document.querySelectorAll('.color-swatch');
    
    // Add click event listeners to each color swatch
    colorSwatches.forEach(swatch => {
        swatch.addEventListener('click', function () {
            // Remove selected class from all swatches
            colorSwatches.forEach(s => s.classList.remove('selected'));
            
            // Add selected class to clicked swatch
            this.classList.add('selected');
        });
    });

    /* ===== SIZE SELECTION FUNCTIONALITY ===== */
    
    // Get all size buttons on the product page
    const sizeButtons = document.querySelectorAll('.size-btn');
    
    // Add click event listeners to each size button
    sizeButtons.forEach(button => {
        button.addEventListener('click', function () {
            // Remove selected class from all size buttons
            sizeButtons.forEach(btn => btn.classList.remove('selected'));
            
            // Add selected class to clicked button
            this.classList.add('selected');
        });
    });

    /* ===== ADD TO CART FUNCTIONALITY ===== */
    
    // Get the add to cart button
    const addToCartBtn = document.querySelector('.add-to-cart');
    
    if (addToCartBtn) {
        addToCartBtn.addEventListener('click', function () {
            // Get selected size and color
            const selectedSize = document.querySelector('.size-btn.selected');
            const selectedColor = document.querySelector('.color-swatch.selected');

            // Validate size selection
            if (!selectedSize) {
                alert('Please select a size');
                return;
            }

            // Validate color selection
            if (!selectedColor) {
                alert('Please select a color');
                return;
            }

            // Update cart count in navigation
            const cartBtn = document.querySelector('.cart-btn');
            if (cartBtn) {
                const currentCount = parseInt(cartBtn.textContent) || 0;
                cartBtn.textContent = currentCount + 1;
            }

            // Show success message
            alert('Product added to cart!');
        });
    }

    /* ===== BUY NOW FUNCTIONALITY ===== */
    
    // Get the buy now button
    const buyNowBtn = document.querySelector('.buy-now');
    
    if (buyNowBtn) {
        buyNowBtn.addEventListener('click', function () {
            // Get selected size and color
            const selectedSize = document.querySelector('.size-btn.selected');
            const selectedColor = document.querySelector('.color-swatch.selected');

            // Validate size selection
            if (!selectedSize) {
                alert('Please select a size');
                return;
            }

            // Validate color selection
            if (!selectedColor) {
                alert('Please select a color');
                return;
            }

            // Redirect to checkout (placeholder functionality)
            alert('Redirecting to checkout...');
        });
    }

    /* ===== WISHLIST FUNCTIONALITY ===== */
    
    // Get the wishlist button
    const wishlistBtn = document.querySelector('.wishlist-btn');
    
    if (wishlistBtn) {
        wishlistBtn.addEventListener('click', function () {
            // Toggle active state
            this.classList.toggle('active');
            
            // Update button appearance and show feedback
            if (this.classList.contains('active')) {
                this.style.color = '#ff4757'; // Red color for active state
                alert('Added to wishlist!');
            } else {
                this.style.color = '#232321'; // Default color
                alert('Removed from wishlist!');
            }
        });
    }

    /* ===== PRODUCT IMAGE SELECTION FUNCTIONALITY ===== */
    
    // Get all product images
    const productImages = document.querySelectorAll('.product-images img');
    
    // Add click event listeners to each product image
    productImages.forEach(img => {
        img.addEventListener('click', function () {
            // Remove active class from all image containers
            productImages.forEach(image => image.parentElement.classList.remove('active'));
            
            // Add active class to clicked image container
            this.parentElement.classList.add('active');
        });
    });
});
