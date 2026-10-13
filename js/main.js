document.addEventListener("DOMContentLoaded", function () {
    // 1. Initialize Interactive Carousel / Slider
    initCarousel();

    // 2. Initialize Live Search Filtering
    initSearch();

    // 3. Initialize WhatsApp Dynamic Order Generator
    initWhatsAppInquiry();
});

/**
 * Handles the Next/Prev navigation for the product carousel slider
 */
function initCarousel() {
    const nextBtn = document.getElementById('next');
    const prevBtn = document.getElementById('prev');
    const listHTML = document.querySelector('.carousel .list');

    if (nextBtn && prevBtn && listHTML) {
        nextBtn.addEventListener('click', () => showSlider('next'));
        prevBtn.addEventListener('click', () => showSlider('prev'));

        function showSlider(type) {
            let items = document.querySelectorAll('.carousel .list .item');
            if (items.length === 0) return;

            if (type === 'next') {
                listHTML.appendChild(items[0]);
            } else if (type === 'prev') {
                listHTML.prepend(items[items.length - 1]);
            }
        }
    }
}

/**
 * Filter product cards dynamically based on search bar input
 */
function initSearch() {
    const searchInput = document.querySelector('.search-box input');
    const searchBtn = document.querySelector('.search-btn');

    if (searchInput) {
        // Trigger filter on live keyup
        searchInput.addEventListener('keyup', performSearch);
    }

    if (searchBtn) {
        searchBtn.addEventListener('click', performSearch);
    }

    function performSearch() {
        const query = searchInput.value.toLowerCase().trim();
        const productCards = document.querySelectorAll('.cat-card, .item-card');

        productCards.forEach(card => {
            const cardTitle = card.innerText.toLowerCase();
            if (cardTitle.includes(query)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }
}

/**
 * Pre-fills WhatsApp message when a customer clicks to inquire about a phone/item
 * @param {string} productName - Name of the mobile tech item
 */
function initWhatsAppInquiry() {
    const buyButtons = document.querySelectorAll('.buy-btn, .seeMore');

    buyButtons.forEach(button => {
        button.addEventListener('click', function (e) {
            const parentCard = this.closest('.item, .cat-card, .card');
            let productName = "a product";

            if (parentCard) {
                const titleElement = parentCard.querySelector('.topic, h3, .card-label');
                if (titleElement) {
                    productName = titleElement.innerText.trim();
                }
            }

            const phoneNumber = "94785416253"; // Matara Branch WhatsApp Number
            const message = encodeURIComponent(`Hi Mobile Tech, I am interested in buying/inquiring about: ${productName}. Is it available in stock?`);
            const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

            window.open(whatsappUrl, '_blank');
        });
    });
}