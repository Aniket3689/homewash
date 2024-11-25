document.getElementById("view-more-btn").addEventListener("click", function () {
    const moreReviews = document.querySelector(".more-reviews");
    moreReviews.classList.toggle("hidden");
    this.textContent = moreReviews.classList.contains("hidden")
      ? "View More Reviews"
      : "View Less Reviews";
  });
  