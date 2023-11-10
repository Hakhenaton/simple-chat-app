import{r as c,c as e,h as r,H as s}from"./p-a2df3a49.js";const t=':host{--wcs-checkbox-border-color:var(--wcs-text-medium);--wcs-checkbox-text-color:var(--wcs-text-medium);display:flex}:host([disabled]){--wcs-checkbox-border-color:var(--wcs-light);--wcs-checkbox-text-color:var(--wcs-text-disabled)}:host([disabled]) .wcs-container{cursor:not-allowed}.wcs-checkmark{transition:background-color 225ms cubic-bezier(0.17, 0.84, 0.44, 1), color 225ms cubic-bezier(0.17, 0.84, 0.44, 1)}.wcs-container{position:relative;font-size:1rem;user-select:none;font-weight:500;display:flex}.wcs-container:not([aria-disabled]){cursor:pointer}:host([label-alignment=top]) .wcs-container{align-items:start}:host([label-alignment=center]) .wcs-container{align-items:center}:host([label-alignment=bottom]) .wcs-container{align-items:flex-end}.wcs-container input{position:absolute;opacity:0;height:1px;width:1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap}.wcs-container:hover:not([aria-disabled]),input:focus{--wcs-checkbox-border-color:var(--wcs-primary);--wcs-checkbox-text-color:var(--wcs-primary)}.wcs-container:has(input:focus-visible){outline:2px dashed var(--wcs-primary);outline-offset:4px;border-radius:calc(var(--wcs-border-radius) / 2)}@supports not selector(.wcs-container:has(input:focus-visible)){.wcs-container:focus-within{outline:2px dashed var(--wcs-primary);outline-offset:4px;border-radius:calc(var(--wcs-border-radius) / 2)}}.wcs-checkmark{flex:0 0 1.125rem;width:1.125rem;height:1.125rem;border:2px solid var(--wcs-checkbox-border-color);border-radius:3px}:host([indeterminate]) .wcs-checkmark{--wcs-checkbox-border-color:var(--wcs-primary);background:var(--wcs-primary)}.wcs-container:not([aria-disabled]) input:checked~.wcs-checkmark{background-color:var(--wcs-primary);--wcs-checkbox-border-color:var(--wcs-primary)}.wcs-container[aria-disabled] input:checked~.wcs-checkmark{background-color:var(--wcs-light);--wcs-checkbox-border-color:var(--wcs-light)}.wcs-checkmark:after{content:"";position:absolute;display:none}.wcs-container input:checked~.wcs-checkmark:after{display:flex}.wcs-container .wcs-checkmark:after{left:7px;width:5px;height:10px;border:solid var(--wcs-white, white);border-width:0 3px 3px 0;-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg)}.wcs-container:not([aria-disabled]) input:checked~.text{--wcs-checkbox-text-color:var(--wcs-primary)}.text{color:var(--wcs-checkbox-text-color);margin-left:6px;font-weight:500;line-height:1.375}';const o=class{constructor(r){c(this,r);this.wcsChange=e(this,"wcsChange",7);this.checkboxId=`wcs-checkbox-${a++}`;this.name=this.checkboxId;this.indeterminate=false;this.checked=false;this.labelAlignment="center";this.disabled=false}handleChange(c){this.indeterminate=false;this.checked=!this.checked;this.wcsChange.emit({checked:this.checked})}render(){return r(s,null,r("label",{htmlFor:this.name,class:"wcs-container","aria-disabled":this.disabled},r("input",{onChange:c=>this.handleChange(c),checked:this.checked,class:"wcs-checkbox",type:"checkbox",name:this.name,disabled:this.disabled,id:this.name}),r("span",{class:"wcs-checkmark"}),r("span",{class:"text"},r("slot",null))))}};let a=0;o.style=t;export{o as wcs_checkbox};
//# sourceMappingURL=p-6acbf38a.entry.js.map