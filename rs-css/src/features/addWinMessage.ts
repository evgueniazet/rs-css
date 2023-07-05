export const addWinMessage = (): void => {
  const winMessage: HTMLElement | null = document.querySelector('.win-message');
  const overlay: HTMLElement | null = document.querySelector('.overlay');

  winMessage?.classList.add('win-message-active');
  overlay?.classList.add('overlay-active');
};
