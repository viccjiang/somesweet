import{_ as m,R as b,M as g,C as f,r as l,o as d,b as k,d as e,e as o,w as i,I as v,h as x,F as w,f as c,p as V,i as $}from"./index-f2a5458d.js";let r=null;const{VITE_APP_URL:E}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/",VITE_APP_PATH:"jiangs2023",BASE_URL:"/somesweet/",MODE:"production",DEV:!1,PROD:!0},R={data(){return{check:!1}},components:{RouterView:b,RouterLink:g},methods:{signOut(){document.cookie=`jiangvue3=;expires=${new Date};`,this.$router.push("/login")},checkAdmin(){const t=`${E}api/user/check`;this.$http.post(t).then(n=>{n.data.success?this.check=!0:this.$router.push("/login")}).catch(n=>{console.dir(n.data.message),this.$router.push("/login")})}},mounted(){r=new f(document.getElementById("sidebarMenu"),{toggle:!1}),this.$router.beforeEach((n,_)=>{r.hide()});const t=document.cookie.replace(/(?:(?:^|.*;\s*)jiangvue3\s*=\s*([^;]*).*$)|^.*$/,"$1");this.$http.defaults.headers.common.Authorization=t,this.checkAdmin()}},s=t=>(V("data-v-3ca96cdc"),t=t(),$(),t),y={class:"navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0"},I=s(()=>e("p",{class:"logoText fs-xl p-0 m-0"},[c("SOME SWEET "),e("span",{class:"fs-xs fw-lighter"},"/am")],-1)),A=s(()=>e("button",{class:"navbar-toggler position-absolute d-md-none collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#sidebarMenu","aria-controls":"sidebarMenu","aria-expanded":"false","aria-label":"Toggle navigation"},[e("span",{class:"navbar-toggler-icon"})],-1)),P=s(()=>e("p",{class:"text-white me-5 d-none d-lg-block"},"管理者，您好",-1)),T={class:"container-fluid"},C={class:"row"},L={id:"sidebarMenu",class:"bg-dark col-md-3 col-lg-2 d-md-block sidebar collapse"},M={class:"position-sticky pt-3 sidebar-sticky"},B={class:"nav flex-column text-start"},D={class:"nav-item"},S=s(()=>e("i",{class:"bi bi-speedometer me-3"},null,-1)),O={class:"nav-item"},j=s(()=>e("i",{class:"bi bi-card-list me-3"},null,-1)),N={class:"nav-item"},U=s(()=>e("i",{class:"bi bi-basket me-3"},null,-1)),F={class:"nav-item"},z=s(()=>e("i",{class:"bi bi-ticket-perforated me-3"},null,-1)),H={class:"nav-item"},W=s(()=>e("i",{class:"bi bi-book me-3"},null,-1)),q={class:"nav-item"},G=s(()=>e("i",{class:"bi bi-box-arrow-left me-3"},null,-1)),J={class:"nav-item"},K=s(()=>e("i",{class:"bi bi-box-arrow-left me-3"},null,-1)),Q={class:"col-md-9 ms-sm-auto col-lg-10 px-md-4"},X=s(()=>e("div",{class:"d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom"},[e("h1",{class:"h2"},"管理者後台"),e("div",{class:"btn-toolbar mb-2 mb-md-0"},[e("div",{class:"btn-group me-2"})])],-1));function Y(t,n,_,Z,u,p){const a=l("RouterLink"),h=l("RouterView");return d(),k(w,null,[e("header",y,[o(a,{to:"/admin",class:"navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6"},{default:i(()=>[I]),_:1}),A,P]),e("div",T,[e("div",C,[e("nav",L,[e("div",M,[e("ul",B,[e("li",D,[o(a,{to:"/admin",class:"nav-link p-5","aria-current":"page"},{default:i(()=>[S,c(" 後台首頁 ")]),_:1})]),e("li",O,[o(a,{to:"/admin/products",class:"nav-link p-5 text-white","aria-current":"page"},{default:i(()=>[j,c(" 產品管理 ")]),_:1})]),e("li",N,[o(a,{to:"/admin/orders",class:"nav-link p-5 text-white","aria-current":"page"},{default:i(()=>[U,c(" 訂單管理 ")]),_:1})]),e("li",F,[o(a,{to:"/admin/coupons",class:"nav-link p-5 text-white","aria-current":"page"},{default:i(()=>[z,c(" 優惠券管理 ")]),_:1})]),e("li",H,[o(a,{to:"/admin/articles",class:"nav-link p-5 text-white","aria-current":"page"},{default:i(()=>[W,c(" 文章管理 ")]),_:1})]),e("li",q,[o(a,{to:"/",class:"nav-link p-5 text-white"},{default:i(()=>[G,c(" 回前台 ")]),_:1})]),e("li",J,[o(a,{to:"/admin/articles",class:"nav-link p-5 text-white",onClick:p.signOut,"aria-current":"page"},{default:i(()=>[K,c(" 登出 ")]),_:1},8,["onClick"])])])])]),e("main",Q,[X,u.check?(d(),v(h,{key:0})):x("",!0)])])])],64)}const se=m(R,[["render",Y],["__scopeId","data-v-3ca96cdc"]]);export{se as default};
