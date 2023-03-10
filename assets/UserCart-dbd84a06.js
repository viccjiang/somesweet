import{m as I,a as $,_ as L,o,b as d,d as t,f as l,t as h,V as S,r as g,e as m,J as D,h as u,w as b,F as y,i as C,j as w,v as T,u as U,g as x,L as j,p as R,k as E}from"./index-48c302ed.js";import{c as k}from"./UserCartStore-6bce90ef.js";import{M as F}from"./modal-f5a9ec94.js";import{U as O}from"./UserCartStepComponent-073cb7cc.js";import"./component-functions-26a79840.js";import"./selector-engine-33e732bd.js";import"./focustrap-972c0802.js";const q={props:["product"],data(){return{modal:""}},methods:{showModal(){this.modal.show()},hideModal(){this.modal.hide()},...I(k,["addToCart","getCarts","updateCartItem","deleteItem","deleteAllItem","createOrder","getOrders","setModal"])},computed:{...$(k,["cartData","cartsLength"])},mounted(){this.setModal(new F(this.$refs.delmodal))}},J={id:"delProductModal",ref:"delmodal",class:"modal fade",tabindex:"-1","aria-labelledby":"delProductModalLabel","aria-hidden":"true"},N={class:"modal-dialog modal-dialog-centered"},W={class:"modal-content border-0"},z={class:"modal-header bg-danger text-white"},G={key:0,id:"delProductModalLabel",class:"modal-title"},Z=t("span",null,"刪除商品",-1),H=[Z],X={key:1,id:"delProductModalLabel",class:"modal-title"},Q=t("span",null,"刪除全部商品",-1),Y=[Q],K=t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),tt={key:0,class:"modal-body"},et={class:"text-danger"},ot={key:1,class:"modal-body"},st={class:"modal-footer"},dt=t("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function nt(e,n,r,V,p,i){var v,f;return o(),d("div",J,[t("div",N,[t("div",W,[t("div",z,[r.product.id?(o(),d("h5",G,H)):(o(),d("h5",X,Y)),K]),r.product.id?(o(),d("div",tt,[l(" 是否刪除 "),t("strong",et,h((f=(v=r.product)==null?void 0:v.product)==null?void 0:f.title),1),l(" 商品 ")])):(o(),d("div",ot," 是否刪除全部商品 ")),t("div",st,[dt,r.product.id?(o(),d("button",{key:0,type:"button",class:"btn btn-danger text-white",onClick:n[0]||(n[0]=_=>e.deleteItem(r.product.id))}," 確認刪除 ")):(o(),d("button",{key:1,type:"button",class:"btn btn-danger text-white",onClick:n[1]||(n[1]=(..._)=>e.deleteAllItem&&e.deleteAllItem(..._))}," 確認刪除 "))])])])],512)}const at=L(q,[["render",nt]]);const{VITE_APP_URL:M,VITE_APP_PATH:B}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/",VITE_APP_PATH:"jiangs2023",BASE_URL:"/somesweet/",MODE:"production",DEV:!1,PROD:!0},lt={data(){return{products:[],tempProduct:{},tempCart:{},coupon_code:"",id:""}},components:{UserCartStepComponent:O,DelModal:at,VueLoading:S},methods:{getProducts(){this.$http.get(`${M}api/${B}/products/all`).then(e=>{console.log("產品列表:",e.data.products),this.products=e.data.products})},getProduct(e){this.$router.push(`/product/${e}`)},openDelProductModal(e){this.tempProduct={...e},console.log(this.tempProduct),this.modal.show()},openAllDelProductModal(e){this.tempProduct={},this.tempCart={...e},console.log(this.cartData),this.modal.show()},addCouponCode(){const e=`${M}api/${B}/coupon`,n={code:this.coupon_code};this.$http.post(e,{data:n}).then(r=>{console.log(r),this.coupon_code="",this.getCarts()})},...I(k,["addToCart","getCarts","updateCartItem","deleteItem","deleteAllItem","createOrder","getOrders","setModal","toThousands"])},computed:{...$(k,["cartData","cartsLength","modal","isLoading"])},mounted(){this.getProducts(),this.getCarts()}},c=e=>(R("data-v-fd83f903"),e=e(),E(),e),ct={key:1,class:"text-center"},rt={class:"card border-0 rounded-0 bg-dark text-white"},it=c(()=>t("img",{style:{height:"70vh","background-image":"url(https://storage.googleapis.com/vue-course-api.appspot.com/jiangs2023/1678158943058.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=Jn44%2B%2Bkd2gsFMtS91bnOaxSgmiZ1%2Byv%2B9wCGscJsTeCPU%2FnJc9ZMY5OM9AHec%2FYg0WQ%2BBMf2MqVBex%2Buondfr5cs8qgrLhRaqjzancMVsdSQh7%2Bt%2Bvve3ZpNoGtFIw29HggFVxqpBmJfWJU43sheDg966D5usj5PlkswQ7xutpIJwBZSAu4tuYZ%2BhVszThrE3rXRR9BRRfXvRxgiJpPlrlg3XxAbSE%2BvNgwq4iRl11eaE5fXuWGI8nRu4ORW%2FhG1SBtgGsYb0TAJ4jFPxNlDKjmI%2FBal2WrWD32jtOjvsSUbtxatHQ5OKx0vos6oW%2BIonUawlg6B%2FsNcChWBXVxDZw%3D%3D)","background-size":"cover","background-position":"center bottom","object-fit":"cover","background-attachment":"fixed","background-blend-mode":"multiply","background-color":"rgba(0, 0, 0, 0.6)"}},null,-1)),ut={class:"card-img-overlay d-flex flex-column justify-content-center align-item-center"},ht={class:"card-title text-center"},pt=c(()=>t("br",null,null,-1)),_t={class:"d-flex align-items-center justify-content-center mt-5"},mt={type:"button",class:"btn btn-outline-secondary me-5"},gt={type:"button",class:"btn btn-light"},bt={key:2,class:"container"},vt={class:"text-end mb-7"},ft=c(()=>t("i",{class:"bi bi-trash3 text-danger me-2"},null,-1)),yt={class:"table align-middle table-hover"},kt=c(()=>t("thead",null,[t("tr",null,[t("th"),t("th",null,"品名"),t("th",{style:{width:"100px"}},"數量"),t("th",{class:"text-end"},"單價"),t("th")])],-1)),Ct={style:{width:"15%"}},xt=["onClick"],Pt=["src"],Dt=["onClick"],wt={class:"input-group input-group-sm"},Mt=["onUpdate:modelValue","onChange"],Bt=["value"],It=["value"],$t={class:"text-end"},Lt={class:"text-end"},Vt=["onClick"],At=c(()=>t("i",{class:"bi bi-trash3 text-danger"},null,-1)),St=[At],Tt=c(()=>t("td",{colspan:"3",class:"text-end"},"總計",-1)),Ut={class:"text-end"},jt=c(()=>t("td",null,null,-1)),Rt=c(()=>t("td",{colspan:"3",class:"text-end text-success"},"折扣完總金額",-1)),Et={class:"text-end text-success"},Ft=c(()=>t("td",null,null,-1)),Ot={class:"row justify-content-end"},qt={class:"col-12 col-md-5"},Jt={class:"coupon input-group mb-3 input-group-sm"},Nt={class:"input-group-append"},Wt={key:3,class:"container mt-10 mb-10"},zt={class:"row"},Gt={class:"d-flex justify-content-between"};function Zt(e,n,r,V,p,i){const v=g("VueLoading"),f=g("UserCartStepComponent"),_=g("RouterLink"),P=g("router-link"),A=g("DelModal");return o(),d(y,null,[m(v,{active:e.isLoading,loader:"bars",color:"#034D83"},null,8,["active"]),e.cartsLength>0?(o(),D(f,{key:0})):u("",!0),e.cartsLength==0?(o(),d("div",ct,[t("div",rt,[it,t("div",ut,[t("h2",ht,[l(" 購物車是空的 "),pt,l("請至 "),m(_,{class:"text-light fw-bold",to:"/products"},{default:b(()=>[l("清晨甜點")]),_:1}),l(" 選購 ")]),t("div",_t,[t("button",mt,[m(_,{class:"text-light",to:"/"},{default:b(()=>[l("返回首頁")]),_:1})]),t("button",gt,[m(_,{class:"text-dark",to:"/products"},{default:b(()=>[l("繼續購物")]),_:1})])])])])])):u("",!0),e.cartsLength>0?(o(),d("div",bt,[t("div",vt,[e.cartsLength>0?(o(),d("a",{key:0,class:"border-bottom border-danger text-danger",type:"button",onClick:n[0]||(n[0]=s=>i.openAllDelProductModal(e.cartData))},[ft,l("清空所有商品")])):u("",!0)]),t("table",yt,[kt,t("tbody",null,[e.cartData.carts?(o(!0),d(y,{key:0},C(e.cartData.carts,s=>(o(),d("tr",{key:s.id},[t("td",Ct,[t("a",{href:"#",onClick:x(a=>i.getProduct(s.product.id),["prevent"])},[t("img",{src:s.product.imageUrl,alt:"",class:"object-fit d-none d-md-block rounded-4",style:{width:"100px",height:"100px"}},null,8,Pt)],8,xt)]),t("td",null,[t("a",{href:"#",class:"text-dark d-block",onClick:x(a=>i.getProduct(s.product.id),["prevent"])},h(s.product.title),9,Dt)]),t("td",null,[t("div",wt,[w(t("select",{name:"",id:"",class:"form-select","onUpdate:modelValue":a=>s.qty=a,onChange:a=>e.updateCartItem(s)},[s.qty<=20?(o(),d(y,{key:0},C(20,a=>t("option",{value:a,key:a+"1234578"},h(a),9,Bt)),64)):(o(!0),d(y,{key:1},C(s.qty,a=>(o(),d("option",{value:a,key:a+"1234578"},h(a),9,It))),128))],40,Mt),[[j,s.qty]])])]),t("td",$t,h(e.toThousands(s.total)),1),t("td",Lt,[t("a",{href:"",onClick:x(a=>i.openDelProductModal(s),["prevent"])},St,8,Vt)])]))),128)):u("",!0)]),t("tfoot",null,[t("tr",null,[Tt,t("td",Ut,h(e.toThousands(e.cartData.total)),1),jt]),t("tr",null,[Rt,t("td",Et,h(e.toThousands(e.cartData.final_total)),1),Ft])])]),t("div",Ot,[t("div",qt,[t("div",Jt,[w(t("input",{type:"text",class:"form-control border-0 border-bottom","onUpdate:modelValue":n[1]||(n[1]=s=>p.coupon_code=s),placeholder:"請輸入優惠碼"},null,512),[[T,p.coupon_code]]),t("div",Nt,[t("button",{class:U(["btn btn-primary rounded-0 border",{disabled:p.coupon_code===""}]),type:"button",onClick:n[2]||(n[2]=(...s)=>i.addCouponCode&&i.addCouponCode(...s))}," 套用優惠碼 ",2)])])])])])):u("",!0),e.cartsLength>0?(o(),d("div",Wt,[t("div",zt,[t("div",Gt,[m(P,{to:"/products",class:"btn btn-outline-primary px-5"},{default:b(()=>[l("繼續選購")]),_:1}),e.cartsLength>0?(o(),D(P,{key:0,to:"/checkout",class:"btn btn-danger px-5 text-white"},{default:b(()=>[l("下一步 ")]),_:1})):u("",!0)])])])):u("",!0),m(A,{product:p.tempProduct,cartData:p.tempCart,ref:"delModal",id:"delModal",onDelProduct:e.deleteItem},null,8,["product","cartData","onDelProduct"])],64)}const oe=L(lt,[["render",Zt],["__scopeId","data-v-fd83f903"]]);export{oe as default};
