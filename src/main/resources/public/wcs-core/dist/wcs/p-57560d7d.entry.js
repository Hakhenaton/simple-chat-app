import{r as s,h as t,H as r,g as e}from"./p-a2df3a49.js";const i=":host{margin-top:0.25rem;color:var(--wcs-red)}";const o=class{constructor(t){s(this,t)}render(){return t(r,{slot:"error"},t("slot",null))}};o.style=i;const a=":host{--wcs-form-field-border-radius-left:var(--wcs-border-radius);--wcs-form-field-border-radius-right:var(--wcs-border-radius);display:flex;flex-direction:column}.input-container{display:flex}::slotted(wcs-radio-group){margin-left:var(--wcs-base-margin)}::slotted(wcs-radio-group[mode=option]){margin-left:0}::slotted(wcs-select:not([slot=prefix])){width:100%}::slotted(label){font-weight:500;margin-bottom:8px}:host(.has-prefix){--wcs-input-border-radius-left:0}:host(.has-suffix){--wcs-input-border-radius-right:0}::slotted([slot=prefix]){--wcs-select-border-radius:var(--wcs-border-radius) 0 0 var(--wcs-border-radius);--wcs-select-background-color:var(--wcs-gray-light);--wcs-select-value-color:var(--wcs-white);--wcs-select-placeholder-color:var(--wcs-white);--wcs-select-border-color:var(--wcs-gray-light)}::slotted([slot=suffix]){--wcs-button-border-radius:0 var(--wcs-border-radius) var(--wcs-border-radius) 0;--wcs-select-border-radius:0 var(--wcs-border-radius) var(--wcs-border-radius) 0}";const l=class{constructor(t){s(this,t);this.isError=false;this.hasPrefix=false;this.hasSuffix=false;this.spiedElement=undefined}componentWillLoad(){this.hasSuffix=this.el.querySelector("wcs-button")!==null;this.hasPrefix=this.el.querySelector("wcs-select")!==null}componentDidLoad(){this.initSpiedElement();this.addRequiredMarkerToLabel();this.updateErrorStateOnInput(this.isError)}isErrorChange(s){this.updateErrorStateOnInput(s)}updateErrorStateOnInput(s){if(this.spiedElementIsOfType("wcs-input","wcs-textarea")){if(s){this.spiedElement.setAttribute("state","error")}else{this.spiedElement.setAttribute("state","initial")}}}spiedElementIsOfType(...s){var t;for(const r of s){if(((t=this.spiedElement)===null||t===void 0?void 0:t.tagName)===r.toUpperCase())return true}return false}addRequiredMarkerToLabel(){var s;const t=this.el.querySelector("wcs-label");this.observer=new MutationObserver((s=>{var r;const e=s.filter((s=>s.attributeName==="required"))[0];if(e){this.updateLabelRequiredFlag((r=this.spiedElement)===null||r===void 0?void 0:r.hasAttribute("required"),t)}}));if(this.spiedElement){this.observer.observe(this.spiedElement,{attributes:true})}const r=(s=this.spiedElement)===null||s===void 0?void 0:s.hasAttribute("required");this.updateLabelRequiredFlag(r,t)}initSpiedElement(){var s,t;const r=["wcs-input","wcs-select","wcs-textarea","wcs-radio-group","wcs-switch","wcs-checkbox","wcs-native-select","wcs-counter"];this.spiedElement=(s=this.el.shadowRoot.querySelector("slot:not([name])"))===null||s===void 0?void 0:s.assignedElements().filter((s=>[...r,"SLOT"].map((s=>s.toUpperCase())).indexOf(s.nodeName)!==-1))[0];if(((t=this.spiedElement)===null||t===void 0?void 0:t.tagName)==="SLOT"){this.spiedElement=this.spiedElement.assignedElements().filter((s=>r.map((s=>s.toUpperCase())).indexOf(s.nodeName)!==-1))[0]}if(!this.spiedElement){console.warn("Form-field component support only "+r.toString()+". Some features may not work with the provided component.");return}}updateLabelRequiredFlag(s,t){if(s&&t){t.setAttribute("required","true")}else if(!s&&t){t.removeAttribute("required")}}disconnectedCallback(){var s;(s=this.observer)===null||s===void 0?void 0:s.disconnect()}render(){let s="";const e=this.isError;if(this.hasSuffix){s+=" has-suffix"}if(this.hasPrefix){s+=" has-prefix"}return t(r,{class:s},t("slot",{name:"label"}),t("div",{class:"input-container"},t("slot",{name:"prefix"}),t("slot",{onSlotchange:()=>this.onFormInputSlotChange()}),t("slot",{name:"suffix"})),e?t("slot",{name:"error"}):"",t("slot",{name:"messages"}))}onFormInputSlotChange(){this.initSpiedElement();this.addRequiredMarkerToLabel();this.updateErrorStateOnInput(this.isError)}get el(){return e(this)}static get watchers(){return{isError:["isErrorChange"]}}};l.style=a;export{o as wcs_error,l as wcs_form_field};
//# sourceMappingURL=p-57560d7d.entry.js.map