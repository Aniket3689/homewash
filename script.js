
  


















  const sliderImages = [
    { src: "./image/homw wash.jpg", description: "High-quality cleaning products for your home." },
    { src: "./image/2.png", description: "Efficient and eco-friendly solutions." },
  ];
  
  let currentIndex = 0;
  
  function changeSlide() {
    const imageElement = document.getElementById("slider-image");
    const descriptionElement = document.getElementById("slider-description");
  
    currentIndex = (currentIndex + 1) % sliderImages.length;
  
    imageElement.src = sliderImages[currentIndex].src;
    descriptionElement.textContent = sliderImages[currentIndex].description;
  }
  
  // Change slide every 3 seconds
  setInterval(changeSlide, 3000);




















  // Fetch and display products
fetch('products.json')
.then(response => response.json())
.then(products => {
  const productContainer = document.getElementById('productContainer');
  products.forEach(product => {
    const productCard = document.createElement('div');
    productCard.classList.add('product');
    productCard.onclick = () => openModal(product);

    productCard.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>Price: ${product.price}</p>
    `;
    productContainer.appendChild(productCard);
  });
})
.catch(error => console.error('Error loading products:', error));

// Open modal with product details
function openModal(product) {
document.getElementById('modalImage').src = product.image;
document.getElementById('productTitle').textContent = product.name;
document.getElementById('productPrice').textContent = product.price;
document.getElementById('productDetails').textContent = product.details;
document.getElementById('productBrand').textContent = product.brand;

const modal = document.getElementById('productModal');
modal.style.display = 'flex';
}

// Close modal
function closeModal() {
const modal = document.getElementById('productModal');
modal.style.display = 'none';
}

// Toggle action inside modal
function toggleAction() {
const toggleMessage = document.getElementById('toggleMessage');
toggleMessage.style.display = toggleMessage.style.display === 'none' ? 'block' : 'none';
}

 










document.getElementById("view-more-btn").addEventListener("click", function () {
  const moreReviews = document.querySelector(".more-reviews");
  moreReviews.classList.toggle("hidden");
  this.textContent = moreReviews.classList.contains("hidden")
    ? "View More Reviews"
    : "View Less Reviews";
});
