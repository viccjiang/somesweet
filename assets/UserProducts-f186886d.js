import{c as u}from"./UserCartStore-a081d764.js";import{_ as w,m as C,a as k,r as P,o as i,b as a,d as t,g as h,f as d,F as p,E as _,j as A,t as l,D as F,e as E,w as S,h as j,p as B,i as I}from"./index-01e4c170.js";const T={save(e){const o=JSON.stringify(e);localStorage.setItem("myFavorite",o)},get(){return JSON.parse(localStorage.getItem("myFavorite"))}},f=T;const{VITE_APP_URL:v,VITE_APP_PATH:b}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/",VITE_APP_PATH:"jiangs2023",BASE_URL:"/somesweet/",MODE:"production",DEV:!1,PROD:!0},N={components:{},data(){return{productsAll:[],products:[],product:{},pagination:{},status:{loadingItem:""},categories:[],selectCategory:"",myFavorite:f.get()||[]}},methods:{getAllProducts(e){this.$http.get(`${v}api/${b}/products/all`).then(o=>{console.log(o),this.productsAll=o.data.products,console.log(this.productsAll),this.getCategories();const{selectCategory:r}=this.$route.params;console.log(r),r&&(this.selectCategory=r),this.selectCategory!==""?this.pagination={}:this.getProducts(e)})},getProducts(e=1){this.$http.get(`${v}api/${b}/products?page=${e}`).then(o=>{window.scrollTo(0,0);const{products:r,pagination:m}=o.data;this.products=r,this.pagination=m,console.log(this.products,this.pagination)})},getCategories(){const e=new Set;console.log(e),this.productsAll.forEach(o=>{e.add(o.category)}),this.categories=[...e],console.log(this.categories)},addMyFavorite(e){this.myFavorite.includes(e.id)?this.myFavorite.splice(this.myFavorite.indexOf(e.id),1):(this.myFavorite.push(e.id),this.favShowAlert())},showAlert(){this.$swal.fire({position:"center",icon:"success",title:"已加入購物車",showConfirmButton:!1,timer:2e3,iconColor:"#236F6B"})},favShowAlert(){this.$swal.fire({position:"center",icon:"success",title:"已加入收藏",showConfirmButton:!1,timer:2e3,iconColor:"#236F6B"})},...C(u,["getCarts","addToCart"])},computed:{...k(u,["cartData","cartsLength"]),filterProducts(){return this.productsAll.filter(e=>e.category.match(this.selectCategory))}},watch:{selectCategory(e,o){(e===""||o==="")&&(console.log(e,o),this.getAllProducts())},myFavorite:{handler(){f.save(this.myFavorite)},deep:!0}},mounted(){this.getAllProducts()}},n=e=>(B("data-v-04def3e5"),e=e(),I(),e),O=A('<div class="container-fluid g-0" data-v-04def3e5><div class="card border-0 rounded-0 bg-dark text-white mb-5" data-v-04def3e5><div class="filters" style="height:200px;background-image:url(https://storage.googleapis.com/vue-course-api.appspot.com/jiangs2023/1677550181847.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&amp;Expires=1742169600&amp;Signature=qQpOKJlmAipjojZQ7imN6J6MiWWuxRYaXwXr6MdPijbdIRTjWFssPopTl5JN%2FjlUul1ccEWNcVdj2qhABmca1qXPqK9FnT1jz92lk4l7rOonpF8%2F7lVw8i%2BDI3KhGnoYIBBfmyQyRsPKI%2B8mHHakw9uegGVuY%2BXfxGLcBuYGsxhNU9UTy1fj4%2Fc07ANvqKpCrE66j9O2KJE%2B5VlGoCK8pKmBlmMjyLUXNSmESrPdR9696BuSHjvmYXdBWtAC6ODZLqXHs7P7vskYx3e23oggxpMBveQQCm8u3tqgCu6kjOE7EYtYucOEmah6Nsbuw6pUMfIhrj5xbebroqyayFKz8g%3D%3D);background-size:cover;background-position:center center;background-attachment:fixed;" data-v-04def3e5></div><div class="card-img-overlay d-flex flex-column justify-content-center align-item-center" data-v-04def3e5><h1 class="fs-3 card-title text-center fw-bold" data-v-04def3e5><p class="fs-m fw-bold mb-2" data-v-04def3e5>所有甜點</p><p class="logoText fs-sm p-0 m-0" data-v-04def3e5>SOME SWEET <span class="fs-xs fw-lighter" data-v-04def3e5>/am</span></p></h1></div></div></div>',1),$={class:"container mt-md-5 mt-3 mb-7"},M={class:"row"},V={class:"col-md-3"},D={class:"accordion border border-bottom border-top-0 border-start-0 border-end-0 mb-3",id:"accordionExample"},U={class:"card border-0"},K=n(()=>t("div",{class:"card-header px-0 py-4 bg-white border border-bottom-0 border-top border-start-0 border-end-0 rounded-0",id:"headingOne","data-bs-toggle":"collapse","data-bs-target":"#collapseOne"},[t("div",{class:"d-flex justify-content-between align-items-center pe-1"},[t("h4",{class:"mb-0"}," 產品類別 "),t("i",{class:"bi bi-chevron-down"})])],-1)),q={id:"collapseOne",class:"collapse show","aria-labelledby":"headingOne","data-bs-parent":"#accordionExample"},z={class:"card-body py-0"},L=n(()=>t("i",{class:"bi bi-dash-lg"},null,-1)),R={class:"list-unstyled"},Y=["onClick"],X=n(()=>t("i",{class:"bi bi-dash-lg"},null,-1)),G={class:"col-md-9"},H={class:"row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4"},J={class:"product card h-100 p-5 rounded-4 products-img"},W=["src","alt"],Q=["onClick"],Z={key:0,style:{"z-index":"1"},class:"fs-3 bi bi-bookmark-heart-fill position-absolute top-5 start-15 me-2 mt-1 pt-1 text-white"},tt={key:1,style:{"z-index":"1"},class:"fs-3 bi bi-bookmark position-absolute top-5 start-15 me-2 mt-1 pt-1 text-white"},et={class:"card-body d-flex flex-column"},st={class:"fs-6 fw-bold card-title mb-6"},ot={class:"d-flex mt-auto"},it={class:"text-muted fs-xs me-auto"},at={class:"card-text mb-0"},rt=n(()=>t("span",{class:"fs-xs d-flex align-items-end ms-1"},"NTD",-1)),ct={class:"text-center border-0"},dt=["disabled","onClick"],lt={key:0,class:"spinner-border text-light spinner-border-sm",role:"status"};function nt(e,o,r,m,c,g){const y=P("router-link");return i(),a(p,null,[O,t("div",$,[t("div",M,[t("div",V,[t("div",D,[t("div",U,[K,t("div",q,[t("div",z,[t("a",{href:"#",class:"list-group-item list-group-item-action rounded-0 p-3",onClick:o[0]||(o[0]=h(s=>{c.selectCategory="",this.$route.params.selectCategory=""},["prevent"]))},[L,d(" 全部商品 ")]),t("ul",R,[t("li",null,[(i(!0),a(p,null,_(c.categories,s=>(i(),a("a",{href:"#",key:s,class:"list-group-item list-group-item-action rounded-0 p-3",onClick:h(x=>{c.selectCategory=s,this.$route.params.selectCategory=s},["prevent"])},[X,d(" "+l(s),1)],8,Y))),128))])])])])])])]),t("div",G,[t("div",H,[(i(!0),a(p,null,_(g.filterProducts,s=>(i(),a("div",{class:"col-md-4",key:s.id},[t("div",J,[t("img",{src:s.imageUrl,class:"card-img-top object-fit rounded-4 position-relative",alt:s.title},null,8,W),t("a",{href:"#",onClick:h(x=>g.addMyFavorite(s),["prevent"]),class:F([{active:c.myFavorite.includes(s.id)},"link-secondary d-block rounded-0"])},[c.myFavorite.includes(s.id)?(i(),a("i",Z)):(i(),a("i",tt))],10,Q),t("div",et,[t("h5",st,l(s.title),1),t("div",ot,[t("span",it,[t("del",null,"NT$"+l(s.origin_price),1)]),t("p",at,"$"+l(s.price),1),d(),rt]),t("small",ct,[E(y,{class:"text-dark d-block",to:`/product/${s.id}`},{default:S(()=>[d("查 看 細 節")]),_:2},1032,["to"])])]),t("button",{type:"buttom",class:"btn btn-primary mt-5",disabled:this.status.loadingItem===s.id,onClick:()=>e.addToCart(s.id)},[this.status.loadingItem===s.id?(i(),a("div",lt)):j("",!0),d(" 加入購物車 ")],8,dt)])]))),128))])])])])],64)}const mt=w(N,[["render",nt],["__scopeId","data-v-04def3e5"]]);export{mt as default};
