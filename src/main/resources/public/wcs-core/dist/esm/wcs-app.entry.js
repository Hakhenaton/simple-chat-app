import { r as registerInstance, h } from './index-dc4d96d4.js';

const appCss = ":host{background-color:#f2f2f2;margin:0;display:grid;grid-template-areas:\"header header\" \"sidebar content\";grid-template-columns:min-content auto;overflow-y:hidden}::slotted(main){padding:8px;grid-area:content;overflow-y:scroll;height:calc(100vh - 64px)}::slotted(wcs-header){grid-area:header}@media screen and (max-width: 768px){:host{grid-template-areas:\"header\" \"sidebar\" \"content\";grid-template-columns:auto}::slotted(header){position:relative}::slotted(main){overflow-y:visible;height:initial}}";

const App = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return [
      h("slot", { name: "header" }),
      h("slot", { name: "sidebar" }),
      h("slot", { name: "content" })
    ];
  }
};
App.style = appCss;

export { App as wcs_app };

//# sourceMappingURL=wcs-app.entry.js.map