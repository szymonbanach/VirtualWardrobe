const imageSets = [
  [
    { src: "img1-1.jpg", colors: ["#F5F5DC", "#808080", "#FFFFFF"] },
    { src: "img1-2.jpg", colors: ["#8B4513", "#808000", "#FFFFFF"] },
    { src: "img1-3.jpg", colors: ["#FFC0CB", "#98FF98", "#ADD8E6"] },
    { src: "img1-4.jpg", colors: ["#ADD8E6", "#98FF98", "#E6E6FA"] },
  ],
  [
    { src: "img2-1.jpg", colors: ["#40E0D0", "#8A2BE2", "#A9A9A9"] },
    { src: "img2-2.jpg", colors: ["#F5F5DC", "#808080", "#FFFFFF"] },
    { src: "img2-3.jpg", colors: ["#2C3E50", "#F5F5DC", "#808000"] },
    { src: "img2-4.jpg", colors: ["#F5F5DC", "#808080", "#000000"] },
  ],
  [
    { src: "img3-1.jpg", colors: ["#FFFFFF", "#8A2BE2", "#FFC0CB"] },
    { src: "img3-2.jpg", colors: ["#F5F5DC", "#808080", "#FFFFFF"] },
    { src: "img3-3.jpg", colors: ["#4682B4", "#FFC0CB", "#E6E6FA"] },
    { src: "img3-4.jpg", colors: ["#8B4513", "#4682B4", "#FFFFFF"] },
  ],
  [
    { src: "img4-1.jpg", colors: ["#ADD8E6", "#98FF98", "#E6E6FA"] },
    { src: "img4-2.jpg", colors: ["#FFC0CB", "#98FF98", "#ADD8E6"] },
    { src: "img4-3.jpg", colors: ["#F5F5DC", "#808080", "#FFFFFF"] },
    { src: "img4-4.jpg", colors: ["#E6E6FA", "#4682B4", "#191970"] },
  ],
];

const sliders = document.querySelectorAll(".slider");

sliders.forEach((slider) => {
  const index = slider.getAttribute("data-slider");

  let currentIndex = 0;
  const imgElement = slider.querySelector("img");
  const prevButton = slider.querySelector(".prev");
  const nextButton = slider.querySelector(".next");
  const colorContainer = slider.querySelector(".color-suggestions");

  function updateImage() {
    const currentImage = imageSets[index][currentIndex];
    imgElement.src = currentImage.src;

    colorContainer.innerHTML = "";
    currentImage.colors.forEach((color) => {
      const colorElement = document.createElement("div");
      colorElement.style.backgroundColor = color;
      colorElement.style.width = "30px";
      colorElement.style.height = "30px";
      colorElement.style.borderRadius = "50%";
      colorElement.style.margin = "5px";
      colorContainer.appendChild(colorElement);
    });
  }

  prevButton.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + imageSets[index].length) % imageSets[index].length;
    updateImage();
  });

  nextButton.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % imageSets[index].length;
    updateImage();
  });

  updateImage();
});