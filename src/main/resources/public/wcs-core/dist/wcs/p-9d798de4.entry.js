import{r,h as s}from"./p-a2df3a49.js";const e=":host{--wcs-internal-progress-bar-border-radius:var(--wcs-progress-bar-border-radius,0.3125rem);--wcs-internal-progress-bar-border-radius-small:var(--wcs-progress-bar-border-radius-small,0.15625rem);--wcs-internal-progress-bar-animation-duration:var(--wcs-progress-bar-animation-duration,0.375s)}.progress{display:flex;height:0.625rem;font-size:0.75rem;color:#4d4f53;background-color:#fff;background-image:linear-gradient(90deg, #e1ded9 50%, transparent 50%);background-size:0.25rem 0.625rem;border-radius:var(--wcs-internal-progress-bar-border-radius)}.progress.has-label{margin-top:2.375rem}.progress.small{height:0.3125rem;overflow:hidden;background-color:#fff;background-image:none;background-size:auto;border-radius:var(--wcs-internal-progress-bar-border-radius-small)}.progress.value-zero>.progress-bar>.progress-label{right:unset}.progress-bar{position:relative;display:flex;flex-direction:column;justify-content:center;color:#4d4f53;text-align:center;background-color:var(--wcs-primary);border-radius:var(--wcs-internal-progress-bar-border-radius);transition:width var(--wcs-internal-progress-bar-animation-duration) ease-out}.progress-label{position:absolute;right:0;bottom:calc(100% + 0.5rem);font-size:1.5rem;font-weight:500}.progress-label sup{font-size:0.875rem;top:-0.5em;position:relative;line-height:0;vertical-align:baseline}";const a=class{constructor(s){r(this,s);this.small=false;this.showLabel=false;this.value=0}render(){const r={width:this.value+"%"};return s("div",{class:this.rootClasses()},s("div",{class:"progress-bar",style:r},this.showLabel&&s("span",{class:"progress-label"},this.value,s("sup",null,"%"))))}rootClasses(){let r="progress";if(this.small)r+=" small";if(this.showLabel)r+=" has-label";if(this.value===0)r+=" value-zero";return r}};a.style=e;export{a as wcs_progress_bar};
//# sourceMappingURL=p-9d798de4.entry.js.map