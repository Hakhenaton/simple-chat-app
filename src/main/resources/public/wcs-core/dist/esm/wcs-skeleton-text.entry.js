import { r as registerInstance, h } from './index-dc4d96d4.js';

const skeletonTextCss = ":host{display:block;position:relative;overflow:hidden}:host span{display:flex;flex:1 1 auto;height:100%;width:100%;min-height:1rem;background:#ededed;background:linear-gradient(90deg, rgba(0, 0, 0, 0.06) 25%, rgba(0, 0, 0, 0.15) 37%, rgba(0, 0, 0, 0.06) 63%);background-size:400% 100%}:host([animation=glide]) span{animation:glide 1.5s ease-in-out 0.5s infinite}:host([animation=pulse]){animation:pulse 1.5s ease-in-out 0.5s infinite}@keyframes glide{from{background-position:100% 50%}to{background-position:0 50%}}@keyframes pulse{0%{opacity:1}50%{opacity:0.4}100%{opacity:1}}:host([height=h1]){height:42px}:host([height=h2]){height:36px}:host([height=h3]){height:30px}:host([height=caption]){height:24px}:host([height=body]){height:16px}";

const SkeletonText = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.animation = 'glide';
    this.height = 'body';
  }
  render() {
    return h("span", { "aria-hidden": "true" });
  }
};
SkeletonText.style = skeletonTextCss;

export { SkeletonText as wcs_skeleton_text };

//# sourceMappingURL=wcs-skeleton-text.entry.js.map