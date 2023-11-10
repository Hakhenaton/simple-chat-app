import { r as registerInstance, h, H as Host } from './index-dc4d96d4.js';

const skeletonRectangleCss = ":host{display:block;position:relative;overflow:hidden}:host span{display:flex;flex:1 1 auto;height:100%;width:100%;min-height:1rem;background:#ededed;background:linear-gradient(90deg, rgba(0, 0, 0, 0.06) 25%, rgba(0, 0, 0, 0.15) 37%, rgba(0, 0, 0, 0.06) 63%);background-size:400% 100%}:host([animation=glide]) span{animation:glide 1.5s ease-in-out 0.5s infinite}:host([animation=pulse]){animation:pulse 1.5s ease-in-out 0.5s infinite}@keyframes glide{from{background-position:100% 50%}to{background-position:0 50%}}@keyframes pulse{0%{opacity:1}50%{opacity:0.4}100%{opacity:1}}:host{--wcs-skeleton-border-radius:0rem}:host span{border-radius:var(--wcs-skeleton-border-radius)}:host([rounded]){--wcs-skeleton-border-radius:0.5rem}";

const SkeletonRectangle = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.animation = 'glide';
    this.rounded = false;
    this.height = 'auto';
    this.width = 'auto';
  }
  render() {
    return (h(Host, { style: { height: this.height, width: this.width } }, h("span", null)));
  }
};
SkeletonRectangle.style = skeletonRectangleCss;

export { SkeletonRectangle as wcs_skeleton_rectangle };

//# sourceMappingURL=wcs-skeleton-rectangle.entry.js.map