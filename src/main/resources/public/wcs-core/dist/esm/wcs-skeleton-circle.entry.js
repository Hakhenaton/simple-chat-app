import { r as registerInstance, h, H as Host } from './index-dc4d96d4.js';

const skeletonCircleCss = ":host{display:block;position:relative;overflow:hidden}:host span{display:flex;flex:1 1 auto;height:100%;width:100%;min-height:1rem;background:#ededed;background:linear-gradient(90deg, rgba(0, 0, 0, 0.06) 25%, rgba(0, 0, 0, 0.15) 37%, rgba(0, 0, 0, 0.06) 63%);background-size:400% 100%}:host([animation=glide]) span{animation:glide 1.5s ease-in-out 0.5s infinite}:host([animation=pulse]){animation:pulse 1.5s ease-in-out 0.5s infinite}@keyframes glide{from{background-position:100% 50%}to{background-position:0 50%}}@keyframes pulse{0%{opacity:1}50%{opacity:0.4}100%{opacity:1}}:host{aspect-ratio:1/1;border-radius:999rem}";

const SkeletonCircle = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.animation = 'glide';
    this.radius = 50;
  }
  render() {
    return (h(Host, { style: { width: `${this.radius}px`, height: `${this.radius}px` } }, h("span", { "aria-hidden": "true" })));
  }
};
SkeletonCircle.style = skeletonCircleCss;

export { SkeletonCircle as wcs_skeleton_circle };

//# sourceMappingURL=wcs-skeleton-circle.entry.js.map