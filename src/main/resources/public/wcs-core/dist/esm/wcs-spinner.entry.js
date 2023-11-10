import { r as registerInstance, h } from './index-dc4d96d4.js';

const spinnerCss = "@keyframes wcs-spinner-grow{0%{opacity:0;transform:scale(0)}25%{opacity:1}75%{opacity:0;transform:scale(1)}}@keyframes wcs-spinner-rotate{0%{transform:rotate(0deg);transform-origin:center}100%{transform:rotate(360deg);transform-origin:center}}@keyframes wcs-spinner-dash{0%{stroke-dasharray:1, 150;stroke-dashoffset:0}50%{stroke-dasharray:90, 150;stroke-dashoffset:-35}100%{stroke-dasharray:90, 150;stroke-dashoffset:-131}}:host{display:inline-block;width:2rem;height:2rem;vertical-align:text-bottom;border-radius:50%}:host([mode=border]) svg .dashed-background-circle{stroke:#E4E3E2FF;stroke-width:7px;stroke-dasharray:3, 3;stroke-dashoffset:1;stroke-linecap:butt}:host([mode=border]) svg .infinite-rotation-container{animation:wcs-spinner-rotate 2s linear infinite}:host([mode=border]) svg .dash-rotating-circle{stroke:var(--wcs-base);stroke-width:8px;stroke-linecap:round;animation:wcs-spinner-dash 1.5s ease-in-out infinite}:host([mode=growing]){background-color:var(--wcs-base);opacity:0;animation:wcs-spinner-grow 1s ease-out infinite}";

const Spinner = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.mode = 'border';
  }
  render() {
    return (h("svg", { viewBox: "0 0 50 50" }, h("circle", { class: "dashed-background-circle", cx: "25", cy: "25", r: "21", fill: "none" }), h("g", { class: "infinite-rotation-container" }, h("circle", { class: "dash-rotating-circle", cx: "25", cy: "25", r: "21", fill: "none" }))));
  }
};
Spinner.style = spinnerCss;

export { Spinner as wcs_spinner };

//# sourceMappingURL=wcs-spinner.entry.js.map