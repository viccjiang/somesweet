import{c as P}from"./UserCartStore-141e80cb.js";import{c as ct,m as rt,a as dt,_ as A,r as x,o as v,b,d as t,e as s,w as n,f as i,g as q,t as E,h as _t,F as $,i as ut,n as ft,j as ht,v as pt,p as B,k as H,R as mt,C as vt}from"./index-2a82ee32.js";import{r as bt,a as gt,b as kt,c as yt}from"./component-functions-029cdbbb.js";import{r as xt,a as Et,b as wt}from"./focustrap-d0ca7e37.js";import{r as Ct}from"./selector-engine-5db042ee.js";import{_ as M}from"./Vector-494b3e2b.js";var S={},$t={get exports(){return S},set exports(e){S=e}};/*!
  * Bootstrap offcanvas.js v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */(function(e,m){(function(c,y){e.exports=y(bt(),xt(),gt(),kt(),Ct(),Et(),wt(),yt())})(ct,function(c,y,w,g,l,a,f,K){const k=d=>d&&typeof d=="object"&&"default"in d?d:{default:d},T=k(y),u=k(w),W=k(g),C=k(l),U=k(a),Y=k(f),G="offcanvas",h=".bs.offcanvas",N=".data-api",Q=`load${h}${N}`,J="Escape",I="show",L="showing",D="hiding",Z="offcanvas-backdrop",O=".offcanvas.show",X=`show${h}`,tt=`shown${h}`,et=`hide${h}`,V=`hidePrevented${h}`,F=`hidden${h}`,st=`resize${h}`,ot=`click${h}${N}`,nt=`keydown.dismiss${h}`,at='[data-bs-toggle="offcanvas"]',it={backdrop:!0,keyboard:!0,scroll:!1},lt={backdrop:"(boolean|string)",keyboard:"boolean",scroll:"boolean"};class p extends W.default{constructor(o,r){super(o,r),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}static get Default(){return it}static get DefaultType(){return lt}static get NAME(){return G}toggle(o){return this._isShown?this.hide():this.show(o)}show(o){if(this._isShown||u.default.trigger(this._element,X,{relatedTarget:o}).defaultPrevented)return;this._isShown=!0,this._backdrop.show(),this._config.scroll||new T.default().hide(),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add(L);const j=()=>{(!this._config.scroll||this._config.backdrop)&&this._focustrap.activate(),this._element.classList.add(I),this._element.classList.remove(L),u.default.trigger(this._element,tt,{relatedTarget:o})};this._queueCallback(j,this._element,!0)}hide(){if(!this._isShown||u.default.trigger(this._element,et).defaultPrevented)return;this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.add(D),this._backdrop.hide();const r=()=>{this._element.classList.remove(I,D),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._config.scroll||new T.default().reset(),u.default.trigger(this._element,F)};this._queueCallback(r,this._element,!0)}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}_initializeBackDrop(){const o=()=>{if(this._config.backdrop==="static"){u.default.trigger(this._element,V);return}this.hide()},r=Boolean(this._config.backdrop);return new U.default({className:Z,isVisible:r,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:r?o:null})}_initializeFocusTrap(){return new Y.default({trapElement:this._element})}_addEventListeners(){u.default.on(this._element,nt,o=>{if(o.key===J){if(!this._config.keyboard){u.default.trigger(this._element,V);return}this.hide()}})}static jQueryInterface(o){return this.each(function(){const r=p.getOrCreateInstance(this,o);if(typeof o=="string"){if(r[o]===void 0||o.startsWith("_")||o==="constructor")throw new TypeError(`No method named "${o}"`);r[o](this)}})}}return u.default.on(document,ot,at,function(d){const o=c.getElementFromSelector(this);if(["A","AREA"].includes(this.tagName)&&d.preventDefault(),c.isDisabled(this))return;u.default.one(o,F,()=>{c.isVisible(this)&&this.focus()});const r=C.default.findOne(O);r&&r!==o&&p.getInstance(r).hide(),p.getOrCreateInstance(o).toggle(this)}),u.default.on(window,Q,()=>{for(const d of C.default.find(O))p.getOrCreateInstance(d).show()}),u.default.on(window,st,()=>{for(const d of C.default.find("[aria-modal][class*=show][class*=offcanvas-]"))getComputedStyle(d).position!=="fixed"&&p.getOrCreateInstance(d).hide()}),K.enableDismissTrigger(p),c.defineJQueryPlugin(p),p})})($t);const St=S;const At={data(){return{offcanvas:{}}},methods:{getProduct(e){this.$router.push(`/product/${e}`)},updateCartNum(){const e=`${{}.VUE_APP_API}/api/${{}.VUE_APP_PATH}/cart`;this.isLoading=!0,this.$http.get(e).then(m=>{this.cartsLength=m.data.data.carts.length,this.isLoading=!1})},...rt(P,["addToCart","getCarts","updateCartItem","deleteItem","deleteAllItem","createOrder","getOrders","setModal","toThousands"]),showOffcanvas(){this.offcanvas.show()},hideOffcanvas(){this.offcanvas.hide()}},computed:{...dt(P,["cartData","cartsLength","modal"])},watch:{$route(){window.location.reload()}},mounted(){this.offcanvas=new St(this.$refs.offcanvas,{backdrop:!0}),this.getCarts()}},_=e=>(B("data-v-2d3f4a3d"),e=e(),H(),e),Tt={class:"navbar navbar-expand-lg d-flex flex-wrap justify-content-center align-items-center mt-5"},Nt={class:"container-fluid d-flex flex-row flex-lg-column justify-content-center align-items-center"},It=_(()=>t("a",{class:"d-flex navbar-brand m-0",href:"#"},[t("img",{src:M,alt:"Logo",width:"",height:"",class:"d-inline-block align-text-top me-3"}),t("div",null,[t("p",{class:"fs-m fw-normal"},"清晨一點甜"),t("p",{class:"logoText fs-sm p-0 m-0"},[i("SOME SWEET "),t("span",{class:"fs-xs fw-lighter"},"/am")])])],-1)),Lt={class:"container-fluid navbarCollapse d-flex flex-lg-row"},Dt=_(()=>t("button",{class:"navbar-toggler border-0",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},[t("span",{class:"navbar-toggler-icon"})],-1)),Ot={class:"collapse navbar-collapse justify-content-center",id:"navbarSupportedContent"},Vt={class:"position-lg-relative d-flex flex-column justify-content-center align-items-center"},Ft={class:"navbar-nav mb-2 mb-lg-0 text-center"},jt={class:"navhover nav-item p-2"},Pt={class:"navhover nav-item p-2"},qt={class:"navhover nav-item p-2"},Rt={class:"navhover nav-item p-2"},Bt={class:"navhover nav-item p-2"},Ht={class:"navhover nav-item p-2"},Mt={class:"navhover nav-item p-2"},zt={class:"sticky-top bg-white position-lg-absolute top-lg-5 end-10 nav-icon"},Kt={class:"navbar-nav d-flex justify-content-center align-items-center"},Wt={class:"nav-icon-list d-inline-flex mb-2 mb-lg-0 text-center p-0"},Ut={class:"nav-item px-5"},Yt=_(()=>t("i",{class:"bi bi-heart"},null,-1)),Gt={class:"nav-item px-5"},Qt=_(()=>t("i",{class:"bi bi-cart2"},null,-1)),Jt={key:0,class:"translate-middle badge rounded-pill bg-danger text-light position-absolute top-10 start-100",style:{"font-size":"10px"}},Zt={class:"offcanvas offcanvas-end","data-bs-scroll":"true","data-bs-backdrop":"false",ref:"offcanvas",style:{overflow:"auto","z-index":"2040"},tabindex:"-1",id:"offcanvasRight","aria-labelledby":"offcanvasRightLabel"},Xt=_(()=>t("div",{class:"bg-bk-lighter offcanvas-header text-primary"},[t("h5",{id:"offcanvasRightLabel ",class:"text-center m-0"},"購物車"),t("button",{type:"button",class:"btn-close btn-close-primary text-reset","data-bs-dismiss":"offcanvas","aria-label":"Close"})],-1)),te={key:0},ee={class:"offcanvas-body d-flex flex-column justify-content-between"},se={class:"container"},oe={class:"d-flex p-0"},ne={class:"col-2 d-flex align-items-center justify-content-center"},ae=["onClick"],ie=_(()=>t("i",{class:"bi bi-trash3"},null,-1)),le=[ie],ce=["onClick"],re={class:"col fs-6 fw-normal text-start"},de={class:"border-top d-flex justify-content-center bg-light"},_e={class:"col d-flex flex-column ms-auto"},ue={class:"price d-flex justify-content-md-between flex-column flex-nowrap flex-md-row"},fe={class:"input-group product-num-group bg-light mt-1 mb-4 my-md-0"},he=["onClick"],pe=_(()=>t("i",{class:"bi bi-dash-lg"},null,-1)),me=[pe],ve=["onUpdate:modelValue"],be=["onClick"],ge=_(()=>t("i",{class:"bi bi-plus-lg"},null,-1)),ke=[ge],ye={class:"col d-flex flex-column ms-auto text-end fs-7 text-secondary align-items-end justify-content-center"},xe={class:"text-end m-0 fs-6 text-danger mb-3"},Ee={key:1,class:"offcanvas-body d-flex flex-column align-items-center justify-content-center"},we={class:"text-center d-flex flex-column align-items-center justify-content-center"},Ce=_(()=>t("p",{class:"m-0"},"你的購物車沒有商品",-1)),$e={class:"d-flex align-items-center justify-content-center"},Se=_(()=>t("button",{type:"button",class:"btn btn-outline-secondary m-2"}," 回首頁 ",-1)),Ae=_(()=>t("button",{type:"button",class:"btn btn-outline-secondary"}," 購物去 ",-1)),Te={class:"nav-item px-5"},Ne=_(()=>t("i",{class:"bi bi-person-circle"},null,-1));function Ie(e,m,c,y,w,g){const l=x("RouterLink");return v(),b($,null,[t("nav",Tt,[t("div",Nt,[s(l,{to:"/"},{default:n(()=>[It]),_:1})]),t("div",Lt,[Dt,t("div",Ot,[t("div",Vt,[t("ul",Ft,[t("li",jt,[s(l,{class:"nav-link p-5",to:"/home"},{default:n(()=>[i("首頁 ")]),_:1})]),t("li",Pt,[s(l,{class:"nav-link p-5",to:"/about"},{default:n(()=>[i("關於我們")]),_:1})]),t("li",qt,[s(l,{class:"nav-link p-5",to:"/products"},{default:n(()=>[i("清晨甜點")]),_:1})]),t("li",Rt,[s(l,{class:"nav-link p-5",to:"/cart"},{default:n(()=>[i("購物車")]),_:1})]),t("li",Bt,[s(l,{class:"nav-link p-5",to:"/blog"},{default:n(()=>[i("部落格")]),_:1})]),t("li",Ht,[s(l,{class:"nav-link p-5",to:"/faq"},{default:n(()=>[i("常見問題")]),_:1})]),t("li",Mt,[s(l,{class:"nav-link p-5",to:"/query_order"},{default:n(()=>[i("查詢訂單")]),_:1})])])])])])]),t("nav",zt,[t("div",Kt,[t("ul",Wt,[t("li",Ut,[s(l,{class:"nav-link",to:"/favorite"},{default:n(()=>[Yt]),_:1})]),t("li",Gt,[t("a",{href:"",class:"nav-link position-relative",onClick:m[0]||(m[0]=q((...a)=>g.showOffcanvas&&g.showOffcanvas(...a),["prevent"]))},[Qt,e.cartsLength!=0?(v(),b("div",Jt,E(e.cartsLength),1)):_t("",!0)])]),t("div",Zt,[Xt,e.cartsLength>0?(v(),b("div",te,[t("div",ee,[t("div",se,[(v(!0),b($,null,ut(e.cartData.carts,a=>(v(),b("div",{class:"row border-bottom mb-3 d-flex",key:a.id},[t("div",oe,[t("div",ne,[t("p",{type:"",class:"btn btn-sm text-secondary text-start m-0",onClick:f=>e.deleteItem(a.id)},le,8,ae)]),t("a",{href:"#",onClick:q(f=>g.getProduct(a.product_id),["prevent"]),class:"d-flex align-items-center justify-content-center link-soft"},[t("div",{class:"col-2 mb-2 me-2 rounded-3",style:ft([{height:"50px",width:"50px","background-size":"cover","background-position":"center"},{backgroundImage:`url(${a.product.imageUrl})`}])},null,4),t("div",re,E(a.product.title),1)],8,ce)]),t("div",de,[t("div",_e,[t("div",ue,[t("div",fe,[t("div",null,[t("button",{onClick:f=>e.updateCartItem(a,a.qty--),class:"btn border-0 bg-light",type:"button"},me,8,he)]),ht(t("input",{type:"text",class:"form-control border-0 text-center my-auto shadow-none bg-light border","aria-describedby":"button-addon1","onUpdate:modelValue":f=>a.qty=f},null,8,ve),[[pt,a.qty,void 0,{lazy:!0}]]),t("div",null,[t("button",{onClick:f=>e.updateCartItem(a,a.qty++),class:"btn border-0",type:"button"},ke,8,be)])])])]),t("div",ye," $"+E(e.toThousands(a.final_total)),1)])]))),128))]),t("p",xe," 總計 $ "+E(e.toThousands(e.cartData.final_total))+" 元 ",1),s(l,{class:"btn btn-primary text-center mt-auto text-white p-3 d-grid rounded-3",to:"/cart",onClick:g.hideOffcanvas},{default:n(()=>[i("結帳去")]),_:1},8,["onClick"])])])):(v(),b("div",Ee,[t("div",we,[Ce,t("div",$e,[s(l,{to:"/"},{default:n(()=>[Se]),_:1}),s(l,{to:"/products"},{default:n(()=>[Ae]),_:1})])])]))],512),t("li",Te,[s(l,{class:"nav-link",to:"/login"},{default:n(()=>[Ne]),_:1})])])])])],64)}const Le=A(At,[["render",Ie],["__scopeId","data-v-2d3f4a3d"]]);const De={},z=e=>(B("data-v-eb869ae8"),e=e(),H(),e),Oe={class:"bg-bk-lighter text-bk-gray"},Ve={class:"container row g-0 mx-auto fs-6 ls-2 text-center"},Fe={class:"nav-item mb-10 d-none d-md-inline-block"},je={class:"row justify-content-between list-unstyled m-0 mt-5"},Pe={class:"navhover col-md-2 p-1 col-lg-2"},qe={class:"navhover col-md-2 p-1 col-lg-2"},Re={class:"navhover col-md-2 p-1 col-lg-2"},Be={class:"navhover col-md-2 p-1 col-lg-2"},He={class:"navhover col-md-2 p-1 col-lg-2"},Me={class:"navhover col-md-2 p-1 col-lg-2"},ze={class:"pt-5 pt-md-0 my-5"},Ke=z(()=>t("a",{class:"d-flex navbar-brand justify-content-center align-items-center",href:"#"},[t("img",{src:M,alt:"Logo",width:"",height:"",class:"d-inline-block align-text-top me-3"}),t("div",null,[t("p",{class:"fs-m fw-bold text-start"},"清晨一點甜"),t("p",{class:"logoText fs-sm p-0 m-0"},[i("SOME SWEET "),t("span",{class:"fs-xs fw-lighter"},"/am")])])],-1)),We={class:"mt-5"},Ue={class:"d-none d-md-inline-block"},Ye=z(()=>t("div",{class:"mb-5"},"© 2022 re.HOUSE COPYRIGHT",-1));function Ge(e,m){const c=x("RouterLink");return v(),b("footer",Oe,[t("div",Ve,[t("nav",Fe,[t("ul",je,[t("li",Pe,[s(c,{to:"/",class:"nav-link px-2 py-5"},{default:n(()=>[i(" 首頁 ")]),_:1})]),t("li",qe,[s(c,{to:"/about",class:"nav-link px-2 py-5"},{default:n(()=>[i(" 關於我們 ")]),_:1})]),t("li",Re,[s(c,{to:"/products",class:"nav-link px-2 py-5"},{default:n(()=>[i(" 清晨甜點 ")]),_:1})]),t("li",Be,[s(c,{to:"/cart",class:"nav-link px-2 py-5"},{default:n(()=>[i(" 購物車 ")]),_:1})]),t("li",He,[s(c,{to:"/blog",class:"nav-link px-2 py-5"},{default:n(()=>[i(" 部落格 ")]),_:1})]),t("li",Me,[s(c,{to:"/faq",class:"nav-link px-2 py-5"},{default:n(()=>[i(" 常見問答 ")]),_:1})])])]),t("div",ze,[s(c,{to:"/"},{default:n(()=>[Ke]),_:1})]),t("div",We,[i(" 本網站僅供個人作品使用，不提供商業用途 "),t("span",Ue,[s(c,{class:"p-0 nav-link link-bk-gray text-bk-gray",to:"/login"},{default:n(()=>[i("｜登入後台")]),_:1})])]),Ye])])}const Qe=A(De,[["render",Ge],["__scopeId","data-v-eb869ae8"]]);let R=null;const Je={data(){return{}},components:{RouterView:mt,FrontNavbarComponent:Le,FrontFooterComponent:Qe},mounted(){R=new vt(document.getElementById("navbarSupportedContent"),{toggle:!1}),this.$router.beforeEach((e,m)=>{R.hide()})}};function Ze(e,m,c,y,w,g){const l=x("FrontNavbarComponent"),a=x("router-view"),f=x("FrontFooterComponent");return v(),b($,null,[s(l),s(a),s(f)],64)}const is=A(Je,[["render",Ze]]);export{is as default};
