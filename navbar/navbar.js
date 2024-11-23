// Mobile menu toggle functionality
const menuToggle = document.getElementById('mobile-menu');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Search button functionality
const searchButton = document.getElementById('search-btn');
const searchInput = document.getElementById('search-input');

searchButton.addEventListener('click', () => {
  const query = searchInput.value.trim();
  if (query) {
    alert(`Searching for: ${query}`);
    // You can add actual search logic here
  } else {
    alert('Please enter a search term!');
  }
});

























// JavaScript to handle the popup toggle
document.addEventListener("DOMContentLoaded", () => {
    const enquireButton = document.getElementById("enquireButton");
    const popupForm = document.getElementById("popupForm");
    const closeButton = document.getElementById("closeButton");
  
    enquireButton.addEventListener("click", () => {
      popupForm.classList.remove("hidden");
    });
  
    closeButton.addEventListener("click", () => {
      popupForm.classList.add("hidden");
    });
  
    window.addEventListener("click", (e) => {
      if (e.target === popupForm) {
        popupForm.classList.add("hidden");
      }
    });
  });