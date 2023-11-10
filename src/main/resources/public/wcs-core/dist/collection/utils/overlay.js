let overlayElement;
export function getOverlay() {
  if (!overlayElement) {
    createOverlay();
  }
  return overlayElement;
}
function createOverlay() {
  const existent = document.querySelector('.wcs-overlay');
  overlayElement = existent
    ? existent
    : document.createElement('div');
  overlayElement.classList.add('wcs-overlay');
  document.body.appendChild(overlayElement);
}
//# sourceMappingURL=overlay.js.map
