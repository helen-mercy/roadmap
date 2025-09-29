const levels = document.querySelectorAll("#level-map .level");

levels.forEach(level => {
  level.addEventListener("click", () => {
    if (level.classList.contains("unlocked")) {
      alert(`Starting Level ${level.dataset.level}! 🎉`);
      completeLevel(parseInt(level.dataset.level));
    }
  });
});

function completeLevel(levelNum) {
  const nextLevel = document.querySelector(`#level-map .level[data-level="${levelNum + 1}"]`);
  if (nextLevel && nextLevel.classList.contains("locked")) {
    nextLevel.classList.remove("locked");
    nextLevel.classList.add("unlocked");
  }
  localStorage.setItem("completedLevel", levelNum);
}

window.onload = () => {
  const completedLevel = parseInt(localStorage.getItem("completedLevel")) || 0;
  for (let i = 1; i <= completedLevel + 1; i++) {
    const level = document.querySelector(`#level-map .level[data-level="${i}"]`);
    if (level) {
      level.classList.remove("locked");
      level.classList.add("unlocked");
    }
  }
};
