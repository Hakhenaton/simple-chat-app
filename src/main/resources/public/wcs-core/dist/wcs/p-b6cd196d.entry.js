import{r as t,c as e,h as s,H as o,g as i}from"./p-a2df3a49.js";import{b as n,i as a,a as r}from"./p-12ac2547.js";import{r as d}from"./p-1a170e8d.js";const l=':host{display:block;padding-bottom:var(--wcs-padding)}:host .menu-button{display:block;font-weight:500;padding-left:calc(3 * var(--wcs-base-margin))}:host .arrow-icon{display:none}:host .arrow-container{display:none}:host .label{text-transform:uppercase;font-size:16px;cursor:unset;font-weight:500;color:var(--wcs-gray);text-decoration:none}:host .drawer{display:contents}:host .drawer-container{display:contents}:host .drawer-description{display:none}:host .menu-items{}:host .menu-items ::slotted(a):after{font-family:icons;padding-left:var(--wcs-base-margin);font-size:0.6rem;content:"\\f107";line-height:1;box-sizing:border-box}:host .menu-items ::slotted(a){user-select:none;cursor:pointer;text-decoration:none;font-size:16px;color:var(--wcs-gray);font-weight:500;display:block;padding-top:calc(1.5 * var(--wcs-base-margin));padding-bottom:calc(1.5 * var(--wcs-base-margin));padding-left:calc(6 * var(--wcs-base-margin))}:host .menu-items ::slotted(a:focus-visible){outline:2px dashed var(--wcs-primary);outline-offset:0.1rem;border-radius:2px}@supports not selector(::slotted(a:focus-visible)){:host .menu-items ::slotted(a:focus-within){outline:2px dashed var(--wcs-primary);outline-offset:0.1rem;border-radius:2px}}@media screen and (min-width: 576px){:host{height:100%;padding-bottom:unset}:host .menu-button{display:flex;align-items:center;height:100%;cursor:pointer;user-select:none;font-weight:unset;padding-left:unset}:host .menu-button:focus-visible{outline:2px dashed var(--wcs-primary);outline-offset:0.1rem;border-radius:2px}@supports not selector(.menu-button:focus-visible){:host{outline:2px dashed var(--wcs-primary);outline-offset:0.1rem;border-radius:2px}}:host .label{text-transform:unset;cursor:pointer}:host .arrow-icon{display:inline-block;font-family:icons;font-size:0.6rem;line-height:1;box-sizing:border-box}:host .arrow-container{display:unset;margin-left:var(--wcs-base-margin)}:host .arrow-icon:not([data-open]){transform:rotate(90deg)}:host .arrow-icon[data-open]{transform:rotate(-90deg)}:host .drawer{display:none;position:absolute;top:75px;z-index:8888;left:0;width:100%;box-sizing:border-box;padding:50px;background-color:var(--wcs-primary);color:var(--wcs-white)}:host .drawer-content{display:flex;justify-content:space-between;max-width:62.5%;flex:1}:host .drawer-content div:first-child{flex:0.8}:host .drawer-content div{max-width:260px}:host .menu-items{padding:0 80px 0 50px;display:flex;flex-direction:column;align-items:flex-end}:host .menu-items ::slotted(*:not(:first-child)){margin-top:24px}:host .menu-items ::slotted(a){color:var(--wcs-white);font-weight:400;display:unset;padding-top:unset;padding-bottom:unset;padding-left:unset}:host .menu-items ::slotted(a:focus-visible){outline:2px dashed var(--wcs-white);outline-offset:0.1rem;border-radius:2px}@supports not selector(::slotted(a:focus-visible)){:host .menu-items ::slotted(a:focus-within){outline:2px dashed var(--wcs-white);outline-offset:0.1rem;border-radius:2px}}:host .drawer-container{display:flex;max-width:var(--wcs-com-content-max-width);margin:0 auto}:host .drawer-container h3{margin:0 0 24px 0;font-size:1.5rem;line-height:1.25;font-weight:400}:host .drawer-container p{margin-top:0;margin-bottom:1rem;font-weight:500;font-size:1rem;line-height:1.375}:host .drawer[data-open]{display:block}:host .drawer-description{display:block}}';const c="WCS-COM-NAV-CATEGORY";const h=class{constructor(s){t(this,s);this.wcsSubmenuOpened=e(this,"wcsSubmenuOpened",7);this.wcsClickOnFinalAction=e(this,"wcsClickOnFinalAction",7);this.label=undefined;this.panelTitle=undefined;this.panelDescription=undefined;this.menuOpen=false}componentWillLoad(){const t=this.el.querySelectorAll(":scope > wcs-com-nav-category:not([slot])");d(t,c)}onWindowClickEvent(t){if(this.menuOpen)this.menuOpen=false}onSubmenuOpened(t){if(t.detail.menuElement!==this.el){this.menuOpen=false}}onEscapeKeyDown(t){if(n(t)&&this.menuOpen){this.menuOpen=false}}async close(){this.menuOpen=false}async open(){this.menuOpen=true}onClick(t){t.stopPropagation();this.wcsSubmenuOpened.emit({menuElement:this.el})}handleMenuItemsKeyDown(t){if(a(t)||r(t)){this.handleMenuItemsClick(t)}}handleMenuKeyDown(t){if(a(t)||r(t)){this.menuOpen=!this.menuOpen}}handleMenuItemsClick(t){if(t.target.tagName==="A"){this.close();this.wcsClickOnFinalAction.emit()}}wcsCategoryItemClickedHandler(t){this.close()}render(){return s(o,{onClick:t=>this.onClick(t)},s("div",{tabindex:screen.width<576?"-1":"0",onClick:t=>this.menuOpen=!this.menuOpen,onKeyDown:t=>this.handleMenuKeyDown(t),class:"menu-button"},s("span",{class:"label"},this.label),s("span",{class:"arrow-container"},s("span",{class:"arrow-icon","data-open":this.menuOpen},""))),s("div",{class:"drawer","data-open":this.menuOpen,tabIndex:-1},s("div",{class:"drawer-container"},s("div",{class:"drawer-content"},s("div",{class:"drawer-description"},s("h3",null,this.panelTitle),s("p",null,this.panelDescription)),s("div",{class:"menu-items",onClick:t=>this.handleMenuItemsClick(t),onKeyDown:t=>this.handleMenuItemsKeyDown(t)},s("slot",null))))))}get el(){return i(this)}};h.style=l;export{h as wcs_com_nav_submenu};
//# sourceMappingURL=p-b6cd196d.entry.js.map