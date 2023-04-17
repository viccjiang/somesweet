import{_ as T,V as E,m as V,a as j,r as u,o as r,b as d,e as m,d as t,g,f as n,F as _,i as f,j as F,v as B,K as I,u as L,s as y,t as p,w as S,h as O,p as N,k as $}from"./index-7af5062d.js";import{c as x}from"./UserCartStore-ffdf0521.js";import{s as w}from"./LocalStorage-934dfab6.js";import{G as U}from"./GoTop-93a1830c.js";const{VITE_APP_URL:v,VITE_APP_PATH:b}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/",VITE_APP_PATH:"jiangs2023",BASE_URL:"/somesweet/",MODE:"production",DEV:!1,PROD:!0},D={components:{GoTop:U,VueLoading:E},data(){return{productsAll:[],products:[],product:{},pagination:{},status:{loadingItem:""},isLoading:!1,categories:[],selectCategory:"",myFavorite:w.get()||[],searchValue:""}},methods:{getAllProducts(s){this.isLoading=!0,this.$http.get(`${v}api/${b}/products/all`).then(o=>{console.log(o),this.productsAll=o.data.products,console.log(this.productsAll),this.getCategories();const{selectCategory:i}=this.$route.params;console.log(i),this.isLoading=!1,i&&(this.selectCategory=i),this.selectCategory!==""?this.pagination={}:this.getProducts(s)})},getProducts(s=1){this.$http.get(`${v}api/${b}/products?page=${s}`).then(o=>{window.scrollTo(0,0);const{products:i,pagination:l}=o.data;this.products=i,this.pagination=l,console.log(this.products,this.pagination)})},getCategories(){const s=new Set;console.log(s),this.productsAll.forEach(o=>{s.add(o.category)}),this.categories=[...s],console.log(this.categories)},addMyFavorite(s){this.myFavorite.includes(s.id)?this.myFavorite.splice(this.myFavorite.indexOf(s.id),1):(this.myFavorite.push(s.id),this.favShowAlert())},searchProduct(){const s=`${v}api/${b}/products/all`;this.$http.get(s).then(o=>{this.productsAll=o.data.products,this.productsAll=this.productsAll.filter(i=>i.title.trim().match(this.searchValue)),console.log(this.productsAll),this.searchValue=""})},toThousands(s){return`${parseInt(s,10).toFixed(0).replace(/./g,(i,l,a)=>l&&i!=="."&&(a.length-l)%3===0?`, ${i}`.replace(/\s/g,""):i)}`},favShowAlert(){this.$swal.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:1500,timerProgressBar:!0,didOpen:o=>{o.addEventListener("mouseenter",this.$swal.stopTimer),o.addEventListener("mouseleave",this.$swal.resumeTimer)}}).fire({icon:"success",title:"已加入蒐藏清單"})},...V(x,["getCarts","addToCart","showAlert"])},computed:{...j(x,["cartData","cartsLength"]),filterProducts(){return this.productsAll.filter(s=>s.category.match(this.selectCategory))}},watch:{selectCategory(s,o){(s===""||o==="")&&(console.log(s,o),this.getAllProducts())},myFavorite:{handler(){w.save(this.myFavorite)},deep:!0}},mounted(){this.getAllProducts()}},h=s=>(N("data-v-d568f4d8"),s=s(),$(),s),K=L('<div class="container-fluid g-0" data-v-d568f4d8><div class="card border-0 rounded-0 bg-dark text-white mb-5" data-v-d568f4d8><div class="filters" style="height:200px;background-image:url(https://storage.googleapis.com/vue-course-api.appspot.com/jiangs2023/1677550181847.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&amp;Expires=1742169600&amp;Signature=qQpOKJlmAipjojZQ7imN6J6MiWWuxRYaXwXr6MdPijbdIRTjWFssPopTl5JN%2FjlUul1ccEWNcVdj2qhABmca1qXPqK9FnT1jz92lk4l7rOonpF8%2F7lVw8i%2BDI3KhGnoYIBBfmyQyRsPKI%2B8mHHakw9uegGVuY%2BXfxGLcBuYGsxhNU9UTy1fj4%2Fc07ANvqKpCrE66j9O2KJE%2B5VlGoCK8pKmBlmMjyLUXNSmESrPdR9696BuSHjvmYXdBWtAC6ODZLqXHs7P7vskYx3e23oggxpMBveQQCm8u3tqgCu6kjOE7EYtYucOEmah6Nsbuw6pUMfIhrj5xbebroqyayFKz8g%3D%3D);background-size:cover;background-position:center center;background-attachment:fixed;" data-v-d568f4d8></div><div class="card-img-overlay d-flex flex-column justify-content-center align-item-center" data-v-d568f4d8><h1 class="fs-3 card-title text-center fw-bold" data-v-d568f4d8><p class="fs-m fw-bold mb-2" data-v-d568f4d8>所有甜點</p><p class="logoText fs-sm p-0 m-0" data-v-d568f4d8>SOME SWEET <span class="fs-xs fw-lighter" data-v-d568f4d8>/am</span></p></h1></div></div></div>',1),M={class:"container mt-md-5 mt-3 mb-7"},G={class:"row"},z={class:"col-md-3"},q={class:"sticky-md-top position-md-sticky accordion border border-bottom border-top-0 border-start-0 border-end-0 mb-3",id:"accordionExample",style:{"z-index":"100"}},R={class:"card border-0 card-hover"},Y=h(()=>t("div",{class:"card-header px-0 py-4 bg-white border border-bottom-0 border-top border-start-0 border-end-0 rounded-0",id:"headingOne","data-bs-toggle":"collapse","data-bs-target":"#collapseOne"},[t("div",{class:"d-flex justify-content-between align-items-center pe-1"},[t("h4",{class:"mb-0"}," 產品類別 "),t("i",{class:"bi bi-chevron-down"})])],-1)),X={id:"collapseOne",class:"collapse show","aria-labelledby":"headingOne","data-bs-parent":"#accordionExample"},H={class:"card-body py-0 p-0"},W=h(()=>t("i",{class:"bi bi-dash-lg"},null,-1)),Q={class:"list-unstyled list-group b"},J=["onClick"],Z=h(()=>t("i",{class:"bi bi-dash-lg"},null,-1)),tt={class:"col-md-9"},st={class:"row justify-content-end"},et={class:"col-12 col-md-6"},ot={class:"input-group ms-auto mb-4"},it=h(()=>t("i",{class:"bi bi-search"},null,-1)),at=[it],rt={class:"row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4"},dt={class:"product card h-100 p-5 rounded-4 products-img"},ct={class:"overflow-hidden rounded-4"},lt=["src","alt"],nt=["onClick"],ht={key:0,style:{"z-index":"1"},class:"fs-1 bi bi-bookmark-heart-fill position-absolute top-0 start-15 text-warning"},pt={key:1,style:{"z-index":"1"},class:"fs-1 bi bi-bookmark position-absolute top-0 start-15 text-white"},ut={class:"card-body d-flex flex-column"},mt={class:"fs-6 fw-bold card-title mb-6"},gt={class:"d-flex mt-auto"},_t={class:"text-muted fs-xs me-auto"},vt={class:"card-text mb-0"},bt=h(()=>t("span",{class:"fs-xs d-flex align-items-end ms-1"},"NTD",-1)),ft={class:"text-center border-0"},yt=["disabled","onClick"],xt={key:0,class:"spinner-border text-light spinner-border-sm",role:"status"};function wt(s,o,i,l,a,c){const k=u("VueLoading"),C=u("GoTop"),P=u("router-link");return r(),d(_,null,[m(k,{active:a.isLoading,loader:"bars",color:"#034D83"},null,8,["active"]),m(C),K,t("div",M,[t("div",G,[t("div",z,[t("div",q,[t("div",R,[Y,t("div",X,[t("div",H,[t("a",{href:"#",class:"list-group-item list-group-item-action rounded-0 p-3",onClick:o[0]||(o[0]=g(e=>{a.selectCategory="",this.$route.params.selectCategory=""},["prevent"]))},[W,n(" 全部商品 ")]),t("div",Q,[(r(!0),d(_,null,f(a.categories,e=>(r(),d("a",{href:"#",key:e,class:y(["list-group-item list-group-item-action rounded-0 p-3 border-0",{active:a.selectCategory===e}]),onClick:g(A=>{a.selectCategory=e,this.$route.params.selectCategory=e},["prevent"])},[Z,n(" "+p(e),1)],10,J))),128))])])])])])]),t("div",tt,[t("div",st,[t("div",et,[t("div",ot,[F(t("input",{type:"search",class:"form-control border-primary p-2",onKeyup:o[1]||(o[1]=I((...e)=>c.searchProduct&&c.searchProduct(...e),["enter"])),placeholder:"請輸入商品名稱","onUpdate:modelValue":o[2]||(o[2]=e=>this.searchValue=e)},null,544),[[B,this.searchValue,void 0,{trim:!0}]]),t("button",{type:"button",class:"btn btn-primary px-5 px-lg-3",onClick:o[3]||(o[3]=(...e)=>c.searchProduct&&c.searchProduct(...e))},at)])])]),t("div",rt,[(r(!0),d(_,null,f(c.filterProducts,e=>(r(),d("div",{class:"col-md-4",key:e.id},[t("div",dt,[t("div",ct,[t("img",{src:e.imageUrl,class:"card-img-top object-fit rounded-4 position-relative card-imageUrl",alt:e.title},null,8,lt)]),t("a",{href:"#",onClick:g(A=>c.addMyFavorite(e),["prevent"]),class:y([{active:a.myFavorite.includes(e.id)},"link-secondary d-block rounded-0"])},[a.myFavorite.includes(e.id)?(r(),d("i",ht)):(r(),d("i",pt))],10,nt),t("div",ut,[t("h5",mt,p(e.title),1),t("div",gt,[t("span",_t,[t("del",null,"NT$"+p(c.toThousands(e.origin_price)),1)]),t("p",vt,"$"+p(e.price),1),n(),bt]),t("small",ft,[m(P,{class:"text-dark d-block",to:`/product/${e.id}`},{default:S(()=>[n("查 看 細 節")]),_:2},1032,["to"])])]),t("button",{type:"buttom",class:"btn btn-primary mt-5",disabled:this.status.loadingItem===e.id,onClick:()=>s.addToCart(e.id)},[this.status.loadingItem===e.id?(r(),d("div",xt)):O("",!0),n(" 加入購物車 ")],8,yt)])]))),128))])])])])],64)}const Tt=T(D,[["render",wt],["__scopeId","data-v-d568f4d8"]]);export{Tt as default};