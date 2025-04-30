const images = [
    "../media/experience1.png",
    "../media/experience2.jpeg",
    "../media/experience3.jpeg",
    "../media/experience4.jpeg",
    "../media/experience5.jpeg",
    "../media/experience6.jpeg"
  ];
  
  let currentIndex = 0;
  const imageElement = document.getElementById("slideshow-image");
  
  function showImage(index) {
    imageElement.style.opacity = 0;
    setTimeout(() => {
      imageElement.src = images[index];
      imageElement.style.opacity = 1;
    }, 300);
  }
  
  document.getElementById("prevBtn").addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
  });
  
  document.getElementById("nextBtn").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
  });
  
  // Auto-advance every 5 seconds
  setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
  }, 5000);
  
  // Initial display
  showImage(currentIndex);
  
