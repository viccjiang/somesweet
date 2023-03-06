import{c as w}from"./index-eae2ed97.js";import{c as M,e as R,r as O,a as W,f as V}from"./component-functions-040d2aca.js";var T={},F={get exports(){return T},set exports(o){T=o}};/*!
  * Bootstrap scrollbar.js v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var x;function I(){return x||(x=1,function(o,k){(function(f,s){o.exports=s(M(),R(),O())})(w,function(f,s,b){const u=l=>l&&typeof l=="object"&&"default"in l?l:{default:l},c=u(f),h=u(s),p=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",E=".sticky-top",d="padding-right",r="margin-right";class A{constructor(){this._element=document.body}getWidth(){const i=document.documentElement.clientWidth;return Math.abs(window.innerWidth-i)}hide(){const i=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,d,e=>e+i),this._setElementAttributes(p,d,e=>e+i),this._setElementAttributes(E,r,e=>e-i)}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,d),this._resetElementAttributes(p,d),this._resetElementAttributes(E,r)}isOverflowing(){return this.getWidth()>0}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(i,e,t){const a=this.getWidth(),g=m=>{if(m!==this._element&&window.innerWidth>m.clientWidth+a)return;this._saveInitialAttribute(m,e);const _=window.getComputedStyle(m).getPropertyValue(e);m.style.setProperty(e,`${t(Number.parseFloat(_))}px`)};this._applyManipulationCallback(i,g)}_saveInitialAttribute(i,e){const t=i.style.getPropertyValue(e);t&&h.default.setDataAttribute(i,e,t)}_resetElementAttributes(i,e){const t=a=>{const g=h.default.getDataAttribute(a,e);if(g===null){a.style.removeProperty(e);return}h.default.removeDataAttribute(a,e),a.style.setProperty(e,g)};this._applyManipulationCallback(i,t)}_applyManipulationCallback(i,e){if(b.isElement(i)){e(i);return}for(const t of c.default.find(i,this._element))e(t)}}return A})}(F)),T}var D={},q={get exports(){return D},set exports(o){D=o}};/*!
  * Bootstrap backdrop.js v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var y;function Y(){return y||(y=1,function(o,k){(function(f,s){o.exports=s(W(),O(),V())})(w,function(f,s,b){const u=e=>e&&typeof e=="object"&&"default"in e?e:{default:e},c=u(f),h=u(b),p="backdrop",E="fade",d="show",r=`mousedown.bs.${p}`,A={className:"modal-backdrop",clickCallback:null,isAnimated:!1,isVisible:!0,rootElement:"body"},l={className:"string",clickCallback:"(function|null)",isAnimated:"boolean",isVisible:"boolean",rootElement:"(element|string)"};class i extends h.default{constructor(t){super(),this._config=this._getConfig(t),this._isAppended=!1,this._element=null}static get Default(){return A}static get DefaultType(){return l}static get NAME(){return p}show(t){if(!this._config.isVisible){s.execute(t);return}this._append();const a=this._getElement();this._config.isAnimated&&s.reflow(a),a.classList.add(d),this._emulateAnimation(()=>{s.execute(t)})}hide(t){if(!this._config.isVisible){s.execute(t);return}this._getElement().classList.remove(d),this._emulateAnimation(()=>{this.dispose(),s.execute(t)})}dispose(){this._isAppended&&(c.default.off(this._element,r),this._element.remove(),this._isAppended=!1)}_getElement(){if(!this._element){const t=document.createElement("div");t.className=this._config.className,this._config.isAnimated&&t.classList.add(E),this._element=t}return this._element}_configAfterMerge(t){return t.rootElement=s.getElement(t.rootElement),t}_append(){if(this._isAppended)return;const t=this._getElement();this._config.rootElement.append(t),c.default.on(t,r,()=>{s.execute(this._config.clickCallback)}),this._isAppended=!0}_emulateAnimation(t){s.executeAfterTransition(t,this._getElement(),this._config.isAnimated)}}return i})}(q)),D}var C={},B={get exports(){return C},set exports(o){C=o}};/*!
  * Bootstrap focustrap.js v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var S;function H(){return S||(S=1,function(o,k){(function(f,s){o.exports=s(W(),M(),V())})(w,function(f,s,b){const u=_=>_&&typeof _=="object"&&"default"in _?_:{default:_},c=u(f),h=u(s),p=u(b),E="focustrap",r=".bs.focustrap",A=`focusin${r}`,l=`keydown.tab${r}`,i="Tab",e="forward",t="backward",a={autofocus:!0,trapElement:null},g={autofocus:"boolean",trapElement:"element"};class m extends p.default{constructor(n){super(),this._config=this._getConfig(n),this._isActive=!1,this._lastTabNavDirection=null}static get Default(){return a}static get DefaultType(){return g}static get NAME(){return E}activate(){this._isActive||(this._config.autofocus&&this._config.trapElement.focus(),c.default.off(document,r),c.default.on(document,A,n=>this._handleFocusin(n)),c.default.on(document,l,n=>this._handleKeydown(n)),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,c.default.off(document,r))}_handleFocusin(n){const{trapElement:v}=this._config;if(n.target===document||n.target===v||v.contains(n.target))return;const N=h.default.focusableChildren(v);N.length===0?v.focus():this._lastTabNavDirection===t?N[N.length-1].focus():N[0].focus()}_handleKeydown(n){n.key===i&&(this._lastTabNavDirection=n.shiftKey?t:e)}}return m})}(B)),C}export{Y as a,H as b,I as r};
