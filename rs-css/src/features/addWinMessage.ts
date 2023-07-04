export const addWinMessage = () => {
  const winMessage = document.querySelector(".win-message");
  const overlay = document.querySelector(".overlay");

  winMessage?.classList.add("win-message-active");
  overlay?.classList.add("overlay-active");
};
