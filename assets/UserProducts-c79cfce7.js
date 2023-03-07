import{_ as A,V as T,m as E,a as V,r as h,o as i,b as r,e as u,d as t,g as m,f as l,F as g,E as f,G as j,H as F,I as B,j as I,t as n,D as L,w as S,h as O,p as N,i as $}from"./index-9de5b8df.js";import{c as y}from"./UserCartStore-f1e720b9.js";import{s as x}from"./LocalStorage-934dfab6.js";import{G as D}from"./GoTop-fc636683.js";const{VITE_APP_URL:_,VITE_APP_PATH:b}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/",VITE_APP_PATH:"jiangs2023",BASE_URL:"/somesweet/",MODE:"production",DEV:!1,PROD:!0},M={components:{GoTop:D,VueLoading:T},data(){return{productsAll:[],products:[],product:{},pagination:{},status:{loadingItem:""},isLoading:!1,categories:[],selectCategory:"",myFavorite:x.get()||[],searchValue:""}},methods:{getAllProducts(s){this.isLoading=!0,this.$http.get(`${_}api/${b}/products/all`).then(o=>{console.log(o),this.productsAll=o.data.products,console.log(this.productsAll),this.getCategories();const{selectCategory:a}=this.$route.params;console.log(a),this.isLoading=!1,a&&(this.selectCategory=a),this.selectCategory!==""?this.pagination={}:this.getProducts(s)})},getProducts(s=1){this.$http.get(`${_}api/${b}/products?page=${s}`).then(o=>{window.scrollTo(0,0);const{products:a,pagination:v}=o.data;this.products=a,this.pagination=v,console.log(this.products,this.pagination)})},getCategories(){const s=new Set;console.log(s),this.productsAll.forEach(o=>{s.add(o.category)}),this.categories=[...s],console.log(this.categories)},addMyFavorite(s){this.myFavorite.includes(s.id)?this.myFavorite.splice(this.myFavorite.indexOf(s.id),1):(this.myFavorite.push(s.id),this.favShowAlert())},searchProduct(){const s=`${_}api/${b}/products/all`;this.$http.get(s).then(o=>{this.productsAll=o.data.products,this.productsAll=this.productsAll.filter(a=>a.title.trim().match(this.searchValue)),console.log(this.productsAll),this.searchValue=""})},favShowAlert(){this.$swal.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:1500,timerProgressBar:!0,didOpen:o=>{o.addEventListener("mouseenter",this.$swal.stopTimer),o.addEventListener("mouseleave",this.$swal.resumeTimer)}}).fire({icon:"success",title:"已加入蒐藏清單"})},...E(y,["getCarts","addToCart","showAlert"])},computed:{...V(y,["cartData","cartsLength"]),filterProducts(){return this.productsAll.filter(s=>s.category.match(this.selectCategory))}},watch:{selectCategory(s,o){(s===""||o==="")&&(console.log(s,o),this.getAllProducts())},myFavorite:{handler(){x.save(this.myFavorite)},deep:!0}},mounted(){this.getAllProducts()}},p=s=>(N("data-v-e62da1b7"),s=s(),$(),s),U=I('<div class="container-fluid g-0" data-v-e62da1b7><div class="card border-0 rounded-0 bg-dark text-white mb-5" data-v-e62da1b7><div class="filters" style="height:200px;background-image:url(https://storage.googleapis.com/vue-course-api.appspot.com/jiangs2023/1677550181847.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&amp;Expires=1742169600&amp;Signature=qQpOKJlmAipjojZQ7imN6J6MiWWuxRYaXwXr6MdPijbdIRTjWFssPopTl5JN%2FjlUul1ccEWNcVdj2qhABmca1qXPqK9FnT1jz92lk4l7rOonpF8%2F7lVw8i%2BDI3KhGnoYIBBfmyQyRsPKI%2B8mHHakw9uegGVuY%2BXfxGLcBuYGsxhNU9UTy1fj4%2Fc07ANvqKpCrE66j9O2KJE%2B5VlGoCK8pKmBlmMjyLUXNSmESrPdR9696BuSHjvmYXdBWtAC6ODZLqXHs7P7vskYx3e23oggxpMBveQQCm8u3tqgCu6kjOE7EYtYucOEmah6Nsbuw6pUMfIhrj5xbebroqyayFKz8g%3D%3D);background-size:cover;background-position:center center;background-attachment:fixed;" data-v-e62da1b7></div><div class="card-img-overlay d-flex flex-column justify-content-center align-item-center" data-v-e62da1b7><h1 class="fs-3 card-title text-center fw-bold" data-v-e62da1b7><p class="fs-m fw-bold mb-2" data-v-e62da1b7>所有甜點</p><p class="logoText fs-sm p-0 m-0" data-v-e62da1b7>SOME SWEET <span class="fs-xs fw-lighter" data-v-e62da1b7>/am</span></p></h1></div></div></div>',1),G={class:"container mt-md-5 mt-3 mb-7"},K={class:"row"},q={class:"col-md-3"},z={class:"sticky-md-top position-md-sticky accordion border border-bottom border-top-0 border-start-0 border-end-0 mb-3",id:"accordionExample"},R={class:"card border-0"},Y=p(()=>t("div",{class:"card-header px-0 py-4 bg-white border border-bottom-0 border-top border-start-0 border-end-0 rounded-0",id:"headingOne","data-bs-toggle":"collapse","data-bs-target":"#collapseOne"},[t("div",{class:"d-flex justify-content-between align-items-center pe-1"},[t("h4",{class:"mb-0"}," 產品類別 "),t("i",{class:"bi bi-chevron-down"})])],-1)),H={id:"collapseOne",class:"collapse show","aria-labelledby":"headingOne","data-bs-parent":"#accordionExample"},X={class:"card-body py-0"},W=p(()=>t("i",{class:"bi bi-dash-lg"},null,-1)),Q={class:"list-unstyled"},J=["onClick"],Z=p(()=>t("i",{class:"bi bi-dash-lg"},null,-1)),tt={class:"col-md-9"},st={class:"row justify-content-end"},et={class:"col-12 col-md-6"},ot={class:"input-group ms-auto mb-4"},at={class:"row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4"},it={class:"product card h-100 p-5 rounded-4 products-img"},rt=["src","alt"],dt=["onClick"],ct={key:0,style:{"z-index":"1"},class:"fs-1 bi bi-bookmark-heart-fill position-absolute top-0 start-15 text-warning"},lt={key:1,style:{"z-index":"1"},class:"fs-1 bi bi-bookmark position-absolute top-0 start-15 text-white"},nt={class:"card-body d-flex flex-column"},pt={class:"fs-6 fw-bold card-title mb-6"},ht={class:"d-flex mt-auto"},ut={class:"text-muted fs-xs me-auto"},mt={class:"card-text mb-0"},gt=p(()=>t("span",{class:"fs-xs d-flex align-items-end ms-1"},"NTD",-1)),_t={class:"text-center border-0"},bt=["disabled","onClick"],vt={key:0,class:"spinner-border text-light spinner-border-sm",role:"status"};function ft(s,o,a,v,d,c){const w=h("VueLoading"),k=h("GoTop"),C=h("router-link");return i(),r(g,null,[u(w,{active:d.isLoading,loader:"bars",color:"#034D83"},null,8,["active"]),u(k),U,t("div",G,[t("div",K,[t("div",q,[t("div",z,[t("div",R,[Y,t("div",H,[t("div",X,[t("a",{href:"#",class:"list-group-item list-group-item-action rounded-0 p-3",onClick:o[0]||(o[0]=m(e=>{d.selectCategory="",this.$route.params.selectCategory=""},["prevent"]))},[W,l(" 全部商品 ")]),t("ul",Q,[t("li",null,[(i(!0),r(g,null,f(d.categories,e=>(i(),r("a",{href:"#",key:e,class:"list-group-item list-group-item-action rounded-0 p-3",onClick:m(P=>{d.selectCategory=e,this.$route.params.selectCategory=e},["prevent"])},[Z,l(" "+n(e),1)],8,J))),128))])])])])])])]),t("div",tt,[t("div",st,[t("div",et,[t("div",ot,[j(t("input",{type:"search",class:"form-control border-primary p-2",onKeyup:o[1]||(o[1]=B((...e)=>c.searchProduct&&c.searchProduct(...e),["enter"])),placeholder:"請輸入商品名稱","onUpdate:modelValue":o[2]||(o[2]=e=>this.searchValue=e)},null,544),[[F,this.searchValue,void 0,{trim:!0}]]),t("button",{type:"button",class:"btn btn-primary px-5 px-lg-3",onClick:o[3]||(o[3]=(...e)=>c.searchProduct&&c.searchProduct(...e))},"搜尋")])])]),t("div",at,[(i(!0),r(g,null,f(c.filterProducts,e=>(i(),r("div",{class:"col-md-4",key:e.id},[t("div",it,[t("img",{src:e.imageUrl,class:"card-img-top object-fit rounded-4 position-relative",alt:e.title},null,8,rt),t("a",{href:"#",onClick:m(P=>c.addMyFavorite(e),["prevent"]),class:L([{active:d.myFavorite.includes(e.id)},"link-secondary d-block rounded-0"])},[d.myFavorite.includes(e.id)?(i(),r("i",ct)):(i(),r("i",lt))],10,dt),t("div",nt,[t("h5",pt,n(e.title),1),t("div",ht,[t("span",ut,[t("del",null,"NT$"+n(e.origin_price),1)]),t("p",mt,"$"+n(e.price),1),l(),gt]),t("small",_t,[u(C,{class:"text-dark d-block",to:`/product/${e.id}`},{default:S(()=>[l("查 看 細 節")]),_:2},1032,["to"])])]),t("button",{type:"buttom",class:"btn btn-primary mt-5",disabled:this.status.loadingItem===e.id,onClick:()=>s.addToCart(e.id)},[this.status.loadingItem===e.id?(i(),r("div",vt)):O("",!0),l(" 加入購物車 ")],8,bt)])]))),128))])])])])],64)}const Ct=A(M,[["render",ft],["__scopeId","data-v-e62da1b7"]]);export{Ct as default};
