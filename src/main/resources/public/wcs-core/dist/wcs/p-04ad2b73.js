var t;function n(n,i){if(i===void 0){i=false}var e=n.CSS;var r=t;if(typeof t==="boolean"&&!i){return t}var u=e&&typeof e.supports==="function";if(!u){return false}var s=e.supports("--css-vars","yes");var o=e.supports("(--css-vars: yes)")&&e.supports("color","#00000000");r=s||o;if(!i){t=r}return r}function i(t,n,i){if(!t){return{x:0,y:0}}var e=n.x,r=n.y;var u=e+i.left;var s=r+i.top;var o;var f;if(t.type==="touchstart"){var a=t;o=a.changedTouches[0].pageX-u;f=a.changedTouches[0].pageY-s}else{var c=t;o=c.pageX-u;f=c.pageY-s}return{x:o,y:f}}var e=function(t,n){e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)if(Object.prototype.hasOwnProperty.call(n,i))t[i]=n[i]};return e(t,n)};function r(t,n){if(typeof n!=="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");e(t,n);function i(){this.constructor=t}t.prototype=n===null?Object.create(n):(i.prototype=n.prototype,new i)}var u=function(){u=Object.assign||function t(n){for(var i,e=1,r=arguments.length;e<r;e++){i=arguments[e];for(var u in i)if(Object.prototype.hasOwnProperty.call(i,u))n[u]=i[u]}return n};return u.apply(this,arguments)};function s(t){var n=typeof Symbol==="function"&&Symbol.iterator,i=n&&t[n],e=0;if(i)return i.call(t);if(t&&typeof t.length==="number")return{next:function(){if(t&&e>=t.length)t=void 0;return{value:t&&t[e++],done:!t}}};throw new TypeError(n?"Object is not iterable.":"Symbol.iterator is not defined.")}function o(t,n){var i=typeof Symbol==="function"&&t[Symbol.iterator];if(!i)return t;var e=i.call(t),r,u=[],s;try{while((n===void 0||n-- >0)&&!(r=e.next()).done)u.push(r.value)}catch(t){s={error:t}}finally{try{if(r&&!r.done&&(i=e["return"]))i.call(e)}finally{if(s)throw s.error}}return u}function f(t,n,i){if(i||arguments.length===2)for(var e=0,r=n.length,u;e<r;e++){if(u||!(e in n)){if(!u)u=Array.prototype.slice.call(n,0,e);u[e]=n[e]}}return t.concat(u||Array.prototype.slice.call(n))}
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var a=function(){function t(t){if(t===void 0){t={}}this.adapter=t}Object.defineProperty(t,"cssClasses",{get:function(){return{}},enumerable:false,configurable:true});Object.defineProperty(t,"strings",{get:function(){return{}},enumerable:false,configurable:true});Object.defineProperty(t,"numbers",{get:function(){return{}},enumerable:false,configurable:true});Object.defineProperty(t,"defaultAdapter",{get:function(){return{}},enumerable:false,configurable:true});t.prototype.init=function(){};t.prototype.destroy=function(){};return t}();
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var c=function(){function t(t,n){var i=[];for(var e=2;e<arguments.length;e++){i[e-2]=arguments[e]}this.root=t;this.initialize.apply(this,f([],o(i)));this.foundation=n===undefined?this.getDefaultFoundation():n;this.foundation.init();this.initialSyncWithDOM()}t.attachTo=function(n){return new t(n,new a({}))};t.prototype.initialize=function(){var t=[];for(var n=0;n<arguments.length;n++){t[n]=arguments[n]}};t.prototype.getDefaultFoundation=function(){throw new Error("Subclasses must override getDefaultFoundation to return a properly configured "+"foundation class")};t.prototype.initialSyncWithDOM=function(){};t.prototype.destroy=function(){this.foundation.destroy()};t.prototype.listen=function(t,n,i){this.root.addEventListener(t,n,i)};t.prototype.unlisten=function(t,n,i){this.root.removeEventListener(t,n,i)};t.prototype.emit=function(t,n,i){if(i===void 0){i=false}var e;if(typeof CustomEvent==="function"){e=new CustomEvent(t,{bubbles:i,detail:n})}else{e=document.createEvent("CustomEvent");e.initCustomEvent(t,i,false,n)}this.root.dispatchEvent(e)};return t}();
/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */function h(t){if(t===void 0){t=window}return d(t)?{passive:true}:false}function d(t){if(t===void 0){t=window}var n=false;try{var i={get passive(){n=true;return false}};var e=function(){};t.document.addEventListener("test",e,i);t.document.removeEventListener("test",e,i)}catch(t){n=false}return n}
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */function l(t,n){var i=t.matches||t.webkitMatchesSelector||t.msMatchesSelector;return i.call(t,n)}
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var v={BG_FOCUSED:"mdc-ripple-upgraded--background-focused",FG_ACTIVATION:"mdc-ripple-upgraded--foreground-activation",FG_DEACTIVATION:"mdc-ripple-upgraded--foreground-deactivation",ROOT:"mdc-ripple-upgraded",UNBOUNDED:"mdc-ripple-upgraded--unbounded"};var m={VAR_FG_SCALE:"--mdc-ripple-fg-scale",VAR_FG_SIZE:"--mdc-ripple-fg-size",VAR_FG_TRANSLATE_END:"--mdc-ripple-fg-translate-end",VAR_FG_TRANSLATE_START:"--mdc-ripple-fg-translate-start",VAR_LEFT:"--mdc-ripple-left",VAR_TOP:"--mdc-ripple-top"};var p={DEACTIVATION_TIMEOUT_MS:225,FG_DEACTIVATION_MS:150,INITIAL_ORIGIN_SCALE:.6,PADDING:10,TAP_DELAY_MS:300};
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var b=["touchstart","pointerdown","mousedown","keydown"];var g=["touchend","pointerup","mouseup","contextmenu"];var y=[];var w=function(t){r(n,t);function n(i){var e=t.call(this,u(u({},n.defaultAdapter),i))||this;e.activationAnimationHasEnded=false;e.activationTimer=0;e.fgDeactivationRemovalTimer=0;e.fgScale="0";e.frame={width:0,height:0};e.initialSize=0;e.layoutFrame=0;e.maxRadius=0;e.unboundedCoords={left:0,top:0};e.activationState=e.defaultActivationState();e.activationTimerCallback=function(){e.activationAnimationHasEnded=true;e.runDeactivationUXLogicIfReady()};e.activateHandler=function(t){e.activateImpl(t)};e.deactivateHandler=function(){e.deactivateImpl()};e.focusHandler=function(){e.handleFocus()};e.blurHandler=function(){e.handleBlur()};e.resizeHandler=function(){e.layout()};return e}Object.defineProperty(n,"cssClasses",{get:function(){return v},enumerable:false,configurable:true});Object.defineProperty(n,"strings",{get:function(){return m},enumerable:false,configurable:true});Object.defineProperty(n,"numbers",{get:function(){return p},enumerable:false,configurable:true});Object.defineProperty(n,"defaultAdapter",{get:function(){return{addClass:function(){return undefined},browserSupportsCssVars:function(){return true},computeBoundingRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},containsEventTarget:function(){return true},deregisterDocumentInteractionHandler:function(){return undefined},deregisterInteractionHandler:function(){return undefined},deregisterResizeHandler:function(){return undefined},getWindowPageOffset:function(){return{x:0,y:0}},isSurfaceActive:function(){return true},isSurfaceDisabled:function(){return true},isUnbounded:function(){return true},registerDocumentInteractionHandler:function(){return undefined},registerInteractionHandler:function(){return undefined},registerResizeHandler:function(){return undefined},removeClass:function(){return undefined},updateCssVariable:function(){return undefined}}},enumerable:false,configurable:true});n.prototype.init=function(){var t=this;var i=this.supportsPressRipple();this.registerRootHandlers(i);if(i){var e=n.cssClasses,r=e.ROOT,u=e.UNBOUNDED;requestAnimationFrame((function(){t.adapter.addClass(r);if(t.adapter.isUnbounded()){t.adapter.addClass(u);t.layoutInternal()}}))}};n.prototype.destroy=function(){var t=this;if(this.supportsPressRipple()){if(this.activationTimer){clearTimeout(this.activationTimer);this.activationTimer=0;this.adapter.removeClass(n.cssClasses.FG_ACTIVATION)}if(this.fgDeactivationRemovalTimer){clearTimeout(this.fgDeactivationRemovalTimer);this.fgDeactivationRemovalTimer=0;this.adapter.removeClass(n.cssClasses.FG_DEACTIVATION)}var i=n.cssClasses,e=i.ROOT,r=i.UNBOUNDED;requestAnimationFrame((function(){t.adapter.removeClass(e);t.adapter.removeClass(r);t.removeCssVars()}))}this.deregisterRootHandlers();this.deregisterDeactivationHandlers()};n.prototype.activate=function(t){this.activateImpl(t)};n.prototype.deactivate=function(){this.deactivateImpl()};n.prototype.layout=function(){var t=this;if(this.layoutFrame){cancelAnimationFrame(this.layoutFrame)}this.layoutFrame=requestAnimationFrame((function(){t.layoutInternal();t.layoutFrame=0}))};n.prototype.setUnbounded=function(t){var i=n.cssClasses.UNBOUNDED;if(t){this.adapter.addClass(i)}else{this.adapter.removeClass(i)}};n.prototype.handleFocus=function(){var t=this;requestAnimationFrame((function(){return t.adapter.addClass(n.cssClasses.BG_FOCUSED)}))};n.prototype.handleBlur=function(){var t=this;requestAnimationFrame((function(){return t.adapter.removeClass(n.cssClasses.BG_FOCUSED)}))};n.prototype.supportsPressRipple=function(){return this.adapter.browserSupportsCssVars()};n.prototype.defaultActivationState=function(){return{activationEvent:undefined,hasDeactivationUXRun:false,isActivated:false,isProgrammatic:false,wasActivatedByPointer:false,wasElementMadeActive:false}};n.prototype.registerRootHandlers=function(t){var n,i;if(t){try{for(var e=s(b),r=e.next();!r.done;r=e.next()){var u=r.value;this.adapter.registerInteractionHandler(u,this.activateHandler)}}catch(t){n={error:t}}finally{try{if(r&&!r.done&&(i=e.return))i.call(e)}finally{if(n)throw n.error}}if(this.adapter.isUnbounded()){this.adapter.registerResizeHandler(this.resizeHandler)}}this.adapter.registerInteractionHandler("focus",this.focusHandler);this.adapter.registerInteractionHandler("blur",this.blurHandler)};n.prototype.registerDeactivationHandlers=function(t){var n,i;if(t.type==="keydown"){this.adapter.registerInteractionHandler("keyup",this.deactivateHandler)}else{try{for(var e=s(g),r=e.next();!r.done;r=e.next()){var u=r.value;this.adapter.registerDocumentInteractionHandler(u,this.deactivateHandler)}}catch(t){n={error:t}}finally{try{if(r&&!r.done&&(i=e.return))i.call(e)}finally{if(n)throw n.error}}}};n.prototype.deregisterRootHandlers=function(){var t,n;try{for(var i=s(b),e=i.next();!e.done;e=i.next()){var r=e.value;this.adapter.deregisterInteractionHandler(r,this.activateHandler)}}catch(n){t={error:n}}finally{try{if(e&&!e.done&&(n=i.return))n.call(i)}finally{if(t)throw t.error}}this.adapter.deregisterInteractionHandler("focus",this.focusHandler);this.adapter.deregisterInteractionHandler("blur",this.blurHandler);if(this.adapter.isUnbounded()){this.adapter.deregisterResizeHandler(this.resizeHandler)}};n.prototype.deregisterDeactivationHandlers=function(){var t,n;this.adapter.deregisterInteractionHandler("keyup",this.deactivateHandler);try{for(var i=s(g),e=i.next();!e.done;e=i.next()){var r=e.value;this.adapter.deregisterDocumentInteractionHandler(r,this.deactivateHandler)}}catch(n){t={error:n}}finally{try{if(e&&!e.done&&(n=i.return))n.call(i)}finally{if(t)throw t.error}}};n.prototype.removeCssVars=function(){var t=this;var i=n.strings;var e=Object.keys(i);e.forEach((function(n){if(n.indexOf("VAR_")===0){t.adapter.updateCssVariable(i[n],null)}}))};n.prototype.activateImpl=function(t){var n=this;if(this.adapter.isSurfaceDisabled()){return}var i=this.activationState;if(i.isActivated){return}var e=this.previousActivationEvent;var r=e&&t!==undefined&&e.type!==t.type;if(r){return}i.isActivated=true;i.isProgrammatic=t===undefined;i.activationEvent=t;i.wasActivatedByPointer=i.isProgrammatic?false:t!==undefined&&(t.type==="mousedown"||t.type==="touchstart"||t.type==="pointerdown");var u=t!==undefined&&y.length>0&&y.some((function(t){return n.adapter.containsEventTarget(t)}));if(u){this.resetActivationState();return}if(t!==undefined){y.push(t.target);this.registerDeactivationHandlers(t)}i.wasElementMadeActive=this.checkElementMadeActive(t);if(i.wasElementMadeActive){this.animateActivation()}requestAnimationFrame((function(){y=[];if(!i.wasElementMadeActive&&t!==undefined&&(t.key===" "||t.keyCode===32)){i.wasElementMadeActive=n.checkElementMadeActive(t);if(i.wasElementMadeActive){n.animateActivation()}}if(!i.wasElementMadeActive){n.activationState=n.defaultActivationState()}}))};n.prototype.checkElementMadeActive=function(t){return t!==undefined&&t.type==="keydown"?this.adapter.isSurfaceActive():true};n.prototype.animateActivation=function(){var t=this;var i=n.strings,e=i.VAR_FG_TRANSLATE_START,r=i.VAR_FG_TRANSLATE_END;var u=n.cssClasses,s=u.FG_DEACTIVATION,o=u.FG_ACTIVATION;var f=n.numbers.DEACTIVATION_TIMEOUT_MS;this.layoutInternal();var a="";var c="";if(!this.adapter.isUnbounded()){var h=this.getFgTranslationCoordinates(),d=h.startPoint,l=h.endPoint;a=d.x+"px, "+d.y+"px";c=l.x+"px, "+l.y+"px"}this.adapter.updateCssVariable(e,a);this.adapter.updateCssVariable(r,c);clearTimeout(this.activationTimer);clearTimeout(this.fgDeactivationRemovalTimer);this.rmBoundedActivationClasses();this.adapter.removeClass(s);this.adapter.computeBoundingRect();this.adapter.addClass(o);this.activationTimer=setTimeout((function(){t.activationTimerCallback()}),f)};n.prototype.getFgTranslationCoordinates=function(){var t=this.activationState,n=t.activationEvent,e=t.wasActivatedByPointer;var r;if(e){r=i(n,this.adapter.getWindowPageOffset(),this.adapter.computeBoundingRect())}else{r={x:this.frame.width/2,y:this.frame.height/2}}r={x:r.x-this.initialSize/2,y:r.y-this.initialSize/2};var u={x:this.frame.width/2-this.initialSize/2,y:this.frame.height/2-this.initialSize/2};return{startPoint:r,endPoint:u}};n.prototype.runDeactivationUXLogicIfReady=function(){var t=this;var i=n.cssClasses.FG_DEACTIVATION;var e=this.activationState,r=e.hasDeactivationUXRun,u=e.isActivated;var s=r||!u;if(s&&this.activationAnimationHasEnded){this.rmBoundedActivationClasses();this.adapter.addClass(i);this.fgDeactivationRemovalTimer=setTimeout((function(){t.adapter.removeClass(i)}),p.FG_DEACTIVATION_MS)}};n.prototype.rmBoundedActivationClasses=function(){var t=n.cssClasses.FG_ACTIVATION;this.adapter.removeClass(t);this.activationAnimationHasEnded=false;this.adapter.computeBoundingRect()};n.prototype.resetActivationState=function(){var t=this;this.previousActivationEvent=this.activationState.activationEvent;this.activationState=this.defaultActivationState();setTimeout((function(){return t.previousActivationEvent=undefined}),n.numbers.TAP_DELAY_MS)};n.prototype.deactivateImpl=function(){var t=this;var n=this.activationState;if(!n.isActivated){return}var i=u({},n);if(n.isProgrammatic){requestAnimationFrame((function(){t.animateDeactivation(i)}));this.resetActivationState()}else{this.deregisterDeactivationHandlers();requestAnimationFrame((function(){t.activationState.hasDeactivationUXRun=true;t.animateDeactivation(i);t.resetActivationState()}))}};n.prototype.animateDeactivation=function(t){var n=t.wasActivatedByPointer,i=t.wasElementMadeActive;if(n||i){this.runDeactivationUXLogicIfReady()}};n.prototype.layoutInternal=function(){var t=this;this.frame=this.adapter.computeBoundingRect();var i=Math.max(this.frame.height,this.frame.width);var e=function(){var i=Math.sqrt(Math.pow(t.frame.width,2)+Math.pow(t.frame.height,2));return i+n.numbers.PADDING};this.maxRadius=this.adapter.isUnbounded()?i:e();var r=Math.floor(i*n.numbers.INITIAL_ORIGIN_SCALE);if(this.adapter.isUnbounded()&&r%2!==0){this.initialSize=r-1}else{this.initialSize=r}this.fgScale=""+this.maxRadius/this.initialSize;this.updateLayoutCssVars()};n.prototype.updateLayoutCssVars=function(){var t=n.strings,i=t.VAR_FG_SIZE,e=t.VAR_LEFT,r=t.VAR_TOP,u=t.VAR_FG_SCALE;this.adapter.updateCssVariable(i,this.initialSize+"px");this.adapter.updateCssVariable(u,this.fgScale);if(this.adapter.isUnbounded()){this.unboundedCoords={left:Math.round(this.frame.width/2-this.initialSize/2),top:Math.round(this.frame.height/2-this.initialSize/2)};this.adapter.updateCssVariable(e,this.unboundedCoords.left+"px");this.adapter.updateCssVariable(r,this.unboundedCoords.top+"px")}};return n}(a);
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var A=function(t){r(i,t);function i(){var n=t!==null&&t.apply(this,arguments)||this;n.disabled=false;return n}i.attachTo=function(t,n){if(n===void 0){n={isUnbounded:undefined}}var e=new i(t);if(n.isUnbounded!==undefined){e.unbounded=n.isUnbounded}return e};i.createAdapter=function(t){return{addClass:function(n){return t.root.classList.add(n)},browserSupportsCssVars:function(){return n(window)},computeBoundingRect:function(){return t.root.getBoundingClientRect()},containsEventTarget:function(n){return t.root.contains(n)},deregisterDocumentInteractionHandler:function(t,n){return document.documentElement.removeEventListener(t,n,h())},deregisterInteractionHandler:function(n,i){return t.root.removeEventListener(n,i,h())},deregisterResizeHandler:function(t){return window.removeEventListener("resize",t)},getWindowPageOffset:function(){return{x:window.pageXOffset,y:window.pageYOffset}},isSurfaceActive:function(){return l(t.root,":active")},isSurfaceDisabled:function(){return Boolean(t.disabled)},isUnbounded:function(){return Boolean(t.unbounded)},registerDocumentInteractionHandler:function(t,n){return document.documentElement.addEventListener(t,n,h())},registerInteractionHandler:function(n,i){return t.root.addEventListener(n,i,h())},registerResizeHandler:function(t){return window.addEventListener("resize",t)},removeClass:function(n){return t.root.classList.remove(n)},updateCssVariable:function(n,i){return t.root.style.setProperty(n,i)}}};Object.defineProperty(i.prototype,"unbounded",{get:function(){return Boolean(this.isUnbounded)},set:function(t){this.isUnbounded=Boolean(t);this.setUnbounded()},enumerable:false,configurable:true});i.prototype.activate=function(){this.foundation.activate()};i.prototype.deactivate=function(){this.foundation.deactivate()};i.prototype.layout=function(){this.foundation.layout()};i.prototype.getDefaultFoundation=function(){return new w(i.createAdapter(this))};i.prototype.initialSyncWithDOM=function(){var t=this.root;this.isUnbounded="mdcRippleIsUnbounded"in t.dataset};i.prototype.setUnbounded=function(){this.foundation.setUnbounded(Boolean(this.isUnbounded))};return i}(c);export{A as M};
//# sourceMappingURL=p-04ad2b73.js.map