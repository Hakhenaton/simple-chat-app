'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-ca67a6dc.js');

/*
 Stencil Client Patch Esm v3.0.0 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return index.promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return index.bootstrapLazy([["wcs-editable-field.cjs",[[1,"wcs-editable-field",{"type":[1],"label":[1],"readonly":[4],"value":[1032],"validateFn":[16],"formatFn":[16],"errorMsg":[1,"error-msg"],"size":[513],"currentState":[32],"isError":[32]},[[8,"click","onWindowClickEvent"]]]]],["wcs-horizontal-stepper.cjs",[[1,"wcs-horizontal-stepper",{"currentStep":[1026,"current-step"],"steps":[16],"mode":[1],"checkOnComplete":[4,"check-on-complete"],"internalCurrentStep":[32],"previous":[64],"next":[64]}]]],["wcs-counter.cjs",[[1,"wcs-counter",{"size":[513],"label":[1],"min":[1026],"max":[1026],"step":[1026],"value":[1026],"displayedValue":[32]}]]],["wcs-grid.cjs",[[1,"wcs-grid",{"serverMode":[4,"server-mode"],"data":[16],"loading":[4],"selectionConfig":[1,"selection-config"],"selectedItems":[8,"selected-items"],"wcsGridPaginationId":[1,"wcs-grid-pagination-id"],"rowIdPath":[1,"row-id-path"],"columns":[32],"paginationEl":[32],"rows":[32]},[[0,"wcsHiddenChange","onHiddenColumnChange"],[0,"wcsSortChange","sortChangeEventHandler"],[0,"wcsGridPaginationChange","paginationChangeEventHandler"],[8,"wcsGridPaginationChange","paginationChangeEventHandlerOutside"]]]]],["wcs-grid-pagination.cjs",[[1,"wcs-grid-pagination",{"availablePageSizes":[16],"currentPage":[2,"current-page"],"pageSize":[2,"page-size"],"itemsCount":[2,"items-count"],"pageCount":[2,"page-count"]}]]],["wcs-modal.cjs",[[4,"wcs-modal",{"withoutBackdrop":[516,"without-backdrop"],"show":[516],"showCloseButton":[516,"show-close-button"],"size":[1],"hideActions":[516,"hide-actions"]},[[4,"keydown","onKeyDown"]]]]],["wcs-dropdown.cjs",[[1,"wcs-dropdown",{"noArrow":[4,"no-arrow"],"mode":[1],"shape":[1],"disabled":[4],"placement":[1],"expanded":[32]},[[8,"click","onWindowClickEvent"],[0,"wcsDropdownItemClick","dropdownItemClick"],[0,"keydown","onKeyDown"]]]]],["wcs-galactic-menu.cjs",[[1,"wcs-galactic-menu",{"text":[1],"showPopoverMenu":[32]},[[8,"click","onWindowClickEvent"]]]]],["wcs-input.cjs",[[17,"wcs-input",{"fireFocusEvents":[4,"fire-focus-events"],"accept":[1],"autocapitalize":[1],"autocomplete":[1],"autocorrect":[1],"autofocus":[4],"clearInput":[4,"clear-input"],"clearOnEdit":[4,"clear-on-edit"],"debounce":[2],"prefixLabel":[1,"prefix-label"],"suffixLabel":[1,"suffix-label"],"disabled":[4],"enterkeyhint":[1],"size":[513],"icon":[1],"inputmode":[1],"max":[1],"maxlength":[2],"min":[1],"minlength":[2],"multiple":[4],"name":[1],"pattern":[1],"placeholder":[1],"readonly":[4],"required":[4],"spellcheck":[4],"state":[513],"step":[1],"type":[1],"value":[1032],"hasFocus":[32],"passwordReveal":[32],"setFocus":[64],"setBlur":[64],"getInputElement":[64]}]]],["wcs-textarea.cjs",[[1,"wcs-textarea",{"fireFocusEvents":[4,"fire-focus-events"],"autocapitalize":[1],"autofocus":[4],"clearOnEdit":[1028,"clear-on-edit"],"debounce":[2],"disabled":[4],"icon":[1],"inputmode":[1],"enterkeyhint":[1],"maxlength":[2],"minlength":[2],"name":[1],"placeholder":[1],"readonly":[4],"required":[4],"spellcheck":[4],"state":[513],"cols":[2],"rows":[2],"wrap":[1],"autoGrow":[4,"auto-grow"],"value":[1025],"resize":[513],"hasFocus":[32],"fitContent":[64],"setFocus":[64],"setBlur":[64],"getInputElement":[64]}]]],["wcs-accordion.cjs",[[1,"wcs-accordion",{"hideActionText":[516,"hide-action-text"],"highlight":[516],"groupContentWithHeader":[516,"group-content-with-header"]},[[0,"wcsOpenChange","wcsOpenChangeHandler"]]]]],["wcs-accordion-content.cjs",[[1,"wcs-accordion-content"]]],["wcs-accordion-header.cjs",[[1,"wcs-accordion-header"]]],["wcs-accordion-panel.cjs",[[1,"wcs-accordion-panel",{"open":[1540],"hideActionText":[516,"hide-action-text"],"highlight":[516],"groupContentWithHeader":[516,"group-content-with-header"],"close":[64]}]]],["wcs-action-bar.cjs",[[1,"wcs-action-bar",{"gutter":[4],"hasTabs":[32]}]]],["wcs-app.cjs",[[1,"wcs-app"]]],["wcs-badge.cjs",[[1,"wcs-badge",{"shape":[1],"color":[1]}]]],["wcs-card.cjs",[[1,"wcs-card",{"mode":[1537]}]]],["wcs-card-body.cjs",[[1,"wcs-card-body"]]],["wcs-com-nav.cjs",[[1,"wcs-com-nav",{"appName":[1,"app-name"],"mobileMenuOpen":[32],"currentActiveSizing":[32]},[[0,"wcsClickOnFinalAction","onClickOnFinalAction"],[0,"wcsCategoryItemClicked","onClickOnFinalActionCat"],[8,"keydown","exitMobileMenuOnKeyDown"]]]]],["wcs-com-nav-category.cjs",[[1,"wcs-com-nav-category",{"label":[1],"categoryOpen":[32],"close":[64],"open":[64]},[[8,"click","onWindowClickEvent"],[8,"wcsCategoryOpened","onSubmenuOpened"]]]]],["wcs-com-nav-submenu.cjs",[[1,"wcs-com-nav-submenu",{"label":[1],"panelTitle":[1,"panel-title"],"panelDescription":[1,"panel-description"],"menuOpen":[32],"close":[64],"open":[64]},[[8,"click","onWindowClickEvent"],[8,"wcsSubmenuOpened","onSubmenuOpened"],[8,"keydown","onEscapeKeyDown"],[0,"wcsCategoryItemClicked","wcsCategoryItemClickedHandler"]]]]],["wcs-divider.cjs",[[1,"wcs-divider"]]],["wcs-dropdown-divider.cjs",[[1,"wcs-dropdown-divider"]]],["wcs-dropdown-header.cjs",[[1,"wcs-dropdown-header"]]],["wcs-dropdown-item.cjs",[[4,"wcs-dropdown-item",null,[[1,"mousedown","onMouseDown"],[0,"keydown","onKeyDown"]]]]],["wcs-field.cjs",[[1,"wcs-field"]]],["wcs-field-content.cjs",[[1,"wcs-field-content"]]],["wcs-field-label.cjs",[[1,"wcs-field-label"]]],["wcs-footer.cjs",[[1,"wcs-footer"]]],["wcs-galactic.cjs",[[1,"wcs-galactic",{"text":[1],"show":[32]}]]],["wcs-grid-column.cjs",[[1,"wcs-grid-column",{"path":[1],"name":[1],"sort":[4],"sortFn":[16],"formatter":[16],"sortOrder":[1025,"sort-order"],"width":[1],"customCells":[4,"custom-cells"],"hidden":[4]}]]],["wcs-grid-custom-cell.cjs",[[1,"wcs-grid-custom-cell",{"columnId":[1,"column-id"],"rowId":[8,"row-id"]}]]],["wcs-header.cjs",[[1,"wcs-header"]]],["wcs-hint.cjs",[[1,"wcs-hint",{"small":[1540]}]]],["wcs-icon.cjs",[[0,"wcs-icon",{"icon":[1],"size":[1]}]]],["wcs-label.cjs",[[1,"wcs-label",{"required":[516]}]]],["wcs-list-item.cjs",[[1,"wcs-list-item",{"activated":[1028]}]]],["wcs-list-item-properties.cjs",[[1,"wcs-list-item-properties"]]],["wcs-list-item-property.cjs",[[1,"wcs-list-item-property"]]],["wcs-native-select.cjs",[[1,"wcs-native-select",{"size":[513],"expanded":[32],"disabled":[32]}]]],["wcs-nav.cjs",[[1,"wcs-nav"]]],["wcs-nav-item.cjs",[[4,"wcs-nav-item",{"text":[513],"href":[513]},[[0,"keydown","onKeyDown"]]]]],["wcs-progress-radial.cjs",[[1,"wcs-progress-radial",{"size":[2],"showLabel":[4,"show-label"],"value":[2]}]]],["wcs-radio-group.cjs",[[1,"wcs-radio-group",{"value":[8],"name":[520],"mode":[513]},[[0,"wcsRadioClick","selectedOptionChanged"]]]]],["wcs-skeleton-circle.cjs",[[1,"wcs-skeleton-circle",{"animation":[513],"radius":[514]}]]],["wcs-skeleton-rectangle.cjs",[[1,"wcs-skeleton-rectangle",{"animation":[513],"rounded":[516],"height":[513],"width":[513]}]]],["wcs-skeleton-text.cjs",[[1,"wcs-skeleton-text",{"animation":[513],"height":[1]}]]],["wcs-switch.cjs",[[1,"wcs-switch",{"name":[1],"checked":[516],"labelAlignment":[513,"label-alignment"],"disabled":[4]}]]],["wcs-tab.cjs",[[1,"wcs-tab",{"header":[513],"itemKey":[8,"item-key"]}]]],["wcs-tabs.cjs",[[1,"wcs-tabs",{"align":[513],"selectedIndex":[2,"selected-index"],"selectedKey":[8,"selected-key"],"headersOnly":[4,"headers-only"],"gutter":[4],"headers":[32],"currentActiveTabIndex":[32]},[[0,"tabLoaded","onTabLoaded"]]]]],["wcs-tooltip.cjs",[[1,"wcs-tooltip",{"for":[1],"position":[513],"interactive":[4],"maxWidth":[8,"max-width"],"delay":[2],"duration":[2],"trigger":[1],"theme":[1],"content":[1],"appendTo":[1,"append-to"],"hide":[64],"show":[64],"disable":[64],"enable":[64]}]]],["wcs-progress-bar.cjs",[[1,"wcs-progress-bar",{"small":[4],"showLabel":[4,"show-label"],"value":[2]}]]],["wcs-radio.cjs",[[1,"wcs-radio",{"mode":[513],"value":[1544],"label":[1537],"checked":[1540],"disabled":[1028]},[[0,"keydown","onKeyDown"]]]]],["wcs-select_2.cjs",[[4,"wcs-select-option",{"disabled":[1540],"selected":[1540],"value":[8],"chipColor":[1,"chip-color"],"chipBackgroundColor":[1,"chip-background-color"],"multiple":[1540]},[[1,"mousedown","onMouseDown"],[0,"keydown","handleKeydown"]]],[1,"wcs-select",{"size":[513],"value":[1032],"placeholder":[1537],"disabled":[1028],"multiple":[516],"chips":[516],"name":[1],"compareWith":[16],"expanded":[32],"hasLoaded":[32],"displayText":[32],"focused":[32],"overlayDirection":[32],"open":[64],"close":[64]},[[1,"mousedown","onMouseDown"],[8,"click","onWindowClickEvent"],[0,"keydown","onKeyDown"],[0,"wcsSelectOptionClick","selectedOptionChanged"]]]]],["wcs-error_2.cjs",[[1,"wcs-error"],[1,"wcs-form-field",{"isError":[1540,"is-error"],"hasPrefix":[32],"hasSuffix":[32],"spiedElement":[32]}]]],["wcs-checkbox.cjs",[[1,"wcs-checkbox",{"name":[1],"indeterminate":[1540],"checked":[1540],"labelAlignment":[1537,"label-alignment"],"disabled":[4]}]]],["wcs-button.cjs",[[17,"wcs-button",{"type":[1025],"href":[1],"target":[1],"disabled":[516],"ripple":[4],"size":[513],"shape":[513],"mode":[513],"loading":[1028]},[[0,"click","onClick"]]]]],["wcs-mat-icon.cjs",[[1,"wcs-mat-icon",{"icon":[1],"size":[1],"family":[1]}]]],["wcs-spinner.cjs",[[1,"wcs-spinner",{"mode":[513]}]]]], options);
  });
};

exports.setNonce = index.setNonce;
exports.defineCustomElements = defineCustomElements;

//# sourceMappingURL=loader.cjs.js.map