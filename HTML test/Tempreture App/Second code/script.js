const heartContainer = document.getElementById('heart-container');
const romanticMessage = document.getElementById('romantic-message');

// Function to create floating hearts
function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  
  // Randomly position the heart
  const randomPositionX = Math.random() * window.innerWidth;
  const randomDelay = Math.random() * 3;  // Random delay to make the hearts float at different times
  heart.style.left = `${randomPositionX}px`;

  // Add random animation timing for each heart
  heart.style.animationDelay = `${randomDelay}s`;

  // Append the heart to the heart container
  heartContainer.appendChild(heart);

  // Set a timeout to remove the heart after the animation completes (3 seconds)
  setTimeout(() => {
    heart.remove();
  }, 3000);
}

// Create hearts every 0.3 seconds
setInterval(createHeart, 300);

// Heart interaction when mouse is over the page
document.body.addEventListener('mouseover', () => {
  romanticMessage.textContent = "I love you more than words can say!";
});

document.body.addEventListener('mouseout', () => {
  romanticMessage.textContent = "Will you marry me?";
});
