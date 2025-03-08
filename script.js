const show = document.getElementById("read-more");
const para = document.getElementById("para");

show.addEventListener("click", function () {
  if (para.style.display === "none" || para.style.display === "") {
    para.style.display = "block";
    show.textContent = "Read Less";
  } else {
    para.style.display = "none";
    show.textContent = "Read More";
  }
});

const images = document.querySelectorAll(".display");
let currentIndex = 0;

function openModal(index) {
  currentIndex = index;
  document.getElementById("modalImage").src = images[currentIndex].src;
  document.getElementById("imageModal").style.display = "flex";
}

function closeModal() {
  document.getElementById("imageModal").style.display = "none";
}

function changeImage(direction) {
  currentIndex += direction;
  if (currentIndex < 0) currentIndex = images.length - 1;
  if (currentIndex >= images.length) currentIndex = 0;
  document.getElementById("modalImage").src = images[currentIndex].src;
}
