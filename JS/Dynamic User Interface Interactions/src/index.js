const dropDownButton = document.querySelector('.drop-down-button');
dropDownButton.addEventListener("click", () => {
  const dropDownList = document.querySelector('.drop-down-list');
  if (dropDownList.classList.contains("hidden")) {
    dropDownList.classList.remove("hidden");
  } else {
    dropDownList.classList.add("hidden");
  }
});

let currentFrame = 0;
showFrame(currentFrame);

function showFrame(index) {
  const frames = document.querySelectorAll('.frame');

  for (let i = 0; i < frames.length; i++) {
    if (i === index) {
      frames[i].style.display = 'block';
    } else {
      frames[i].style.display = 'none';
    }
  }
}

const nextButton = document.querySelector('.next');
nextButton.addEventListener("click", () => {
  currentFrame++;
  const frames = document.querySelectorAll('.frame');
  if (currentFrame >= frames.length) {
    currentFrame = 0;
  }
  showFrame(currentFrame);
});

const prevButton = document.querySelector('.prev');
prevButton.addEventListener("click", () => {
  currentFrame--;
  const frames = document.querySelectorAll('.frame');
  if (currentFrame < 0) {
    currentFrame = frames.length - 1;
  }
  showFrame(currentFrame);
});
