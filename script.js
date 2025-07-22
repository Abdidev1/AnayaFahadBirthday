document.addEventListener('DOMContentLoaded', function() {
    // --- Countdown Logic ---
    const birthday = new Date('July 24, 2025 00:00:00').getTime();
    const countdownElement = document.getElementById('countdown');
    const specialMessageElement = document.getElementById('specialMessage');

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = birthday - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        if (distance < 0) {
            clearInterval(countdownInterval);
            countdownElement.innerHTML = "It's Anaya's Birthday!";
            specialMessageElement.classList.remove('hidden'); // Show the birthday message
        } else {
            countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s until her Birthday!`;
            specialMessageElement.classList.add('hidden'); // Keep hidden until birthday
        }
    }

    const countdownInterval = setInterval(updateCountdown, 1000);
    updateCountdown(); // Initial call to display countdown immediately

    // --- Evolving Wishes Logic ---
    const wishes = [
        "May your day be filled with Laughter!",
        "Wishing you endless Happiness!",
        "Here's to a year of great Success!",
        "May all your dreams come true!",
        "Stay amazing and keep shining bright!",
        "Wishing you good health and joy!",
        "Cheers to more fun memories!",
        "You deserve all the best, Anaya!"
    ];
    const wishDisplay = document.getElementById('wishDisplay');
    let currentWishIndex = 0;

    function displayNextWish() {
        // Clear previous wish and its animation class
        wishDisplay.innerHTML = '';

        const wishSpan = document.createElement('span');
        wishSpan.textContent = wishes[currentWishIndex];
        wishDisplay.appendChild(wishSpan);

        // Trigger reflow to restart animation for the new element
        void wishSpan.offsetWidth;

        wishSpan.classList.add('active'); // Add active class to fade in

        currentWishIndex = (currentWishIndex + 1) % wishes.length; // Cycle through wishes
    }

    // Display the first wish immediately
    displayNextWish();

    // Change wish every 3.5 seconds (allowing for 1s transition + 2.5s display)
    setInterval(displayNextWish, 3500);
});