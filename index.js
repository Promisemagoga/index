const heart = document.querySelector(".heart");

heart.addEventListener("mouseover", function() {
  heart.classList.add("animated");
});

heart.addEventListener("animationend", function() {
  heart.classList.remove("animated");
});
