import{_ as m,R as b,A as g,C as k,r as l,o as d,c as v,a as e,b as o,w as i,B as f,x,F as w,d as n,p as V,e as $}from"./index-3345db9d.js";let r=null;const{VITE_APP_URL:E}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/",VITE_APP_PATH:"jiangs2023",BASE_URL:"/vue_week_07/",MODE:"production",DEV:!1,PROD:!0},R={data(){return{check:!1}},components:{RouterView:b,RouterLink:g},methods:{signOut(){document.cookie=`jiangvue3=;expires=${new Date};`,this.$router.push("/login")},checkAdmin(){const t=`${E}api/user/check`;this.$http.post(t).then(c=>{c.data.success?this.check=!0:this.$router.push("/login")}).catch(c=>{console.dir(c.data.message),this.$router.push("/login")})}},mounted(){r=new k(document.getElementById("sidebarMenu"),{toggle:!1}),this.$router.beforeEach((c,_)=>{r.hide()});const t=document.cookie.replace(/(?:(?:^|.*;\s*)jiangvue3\s*=\s*([^;]*).*$)|^.*$/,"$1");this.$http.defaults.headers.common.Authorization=t,this.checkAdmin()}},s=t=>(V("data-v-644a2e64"),t=t(),$(),t),y={class:"navbar navbar-dark position-relative sticky-top bg-dark flex-md-nowrap p-0 shadow"},A=s(()=>e("p",{class:"logoText fs-xl p-0 m-0"},[n("SOME SWEET "),e("span",{class:"fs-xs fw-lighter"},"/am")],-1)),I=s(()=>e("button",{class:"navbar-toggler position-absolute d-md-none collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#sidebarMenu","aria-controls":"sidebarMenu","aria-expanded":"false","aria-label":"Toggle navigation"},[e("span",{class:"navbar-toggler-icon"})],-1)),P=s(()=>e("p",{class:"text-white me-5 d-none d-lg-block"},"管理者，您好",-1)),T={class:"container-fluid"},B={class:"row"},C={id:"sidebarMenu",class:"bg-dark col-md-3 col-lg-2 d-md-block sidebar collapse"},L={class:"position-sticky pt-3 sidebar-sticky"},D={class:"nav flex-column text-start"},M={class:"nav-item"},S=s(()=>e("i",{class:"bi bi-speedometer me-3"},null,-1)),O={class:"nav-item"},j=s(()=>e("i",{class:"bi bi-card-list me-3"},null,-1)),N={class:"nav-item"},U=s(()=>e("i",{class:"bi bi-basket me-3"},null,-1)),F={class:"nav-item"},z=s(()=>e("i",{class:"bi bi-ticket-perforated me-3"},null,-1)),H={class:"nav-item"},W=s(()=>e("i",{class:"bi bi-book me-3"},null,-1)),q={class:"nav-item"},G=s(()=>e("i",{class:"bi bi-box-arrow-left me-3"},null,-1)),J={class:"col-md-9 ms-sm-auto col-lg-10 px-md-4"},K=s(()=>e("div",{class:"d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom"},[e("h1",{class:"h2"},"管理者後台"),e("div",{class:"btn-toolbar mb-2 mb-md-0"},[e("div",{class:"btn-group me-2"})])],-1));function Q(t,c,_,X,p,u){const a=l("RouterLink"),h=l("RouterView");return d(),v(w,null,[e("header",y,[o(a,{to:"/admin",class:"navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6"},{default:i(()=>[A]),_:1}),I,P]),e("div",T,[e("div",B,[e("nav",C,[e("div",L,[e("ul",D,[e("li",M,[o(a,{to:"/admin",class:"nav-link p-5","aria-current":"page"},{default:i(()=>[S,n(" 後台首頁 ")]),_:1})]),e("li",O,[o(a,{to:"/admin/products",class:"nav-link p-5 text-white","aria-current":"page"},{default:i(()=>[j,n(" 產品管理 ")]),_:1})]),e("li",N,[o(a,{to:"/admin/orders",class:"nav-link p-5 text-white","aria-current":"page"},{default:i(()=>[U,n(" 訂單管理 ")]),_:1})]),e("li",F,[o(a,{to:"/admin/coupons",class:"nav-link p-5 text-white","aria-current":"page"},{default:i(()=>[z,n(" 優惠券管理 ")]),_:1})]),e("li",H,[o(a,{to:"/admin/articles",class:"nav-link p-5 text-white","aria-current":"page"},{default:i(()=>[W,n(" 文章管理 ")]),_:1})]),e("li",q,[o(a,{to:"/admin/articles",class:"nav-link p-5 text-white",onClick:u.signOut,"aria-current":"page"},{default:i(()=>[G,n(" 登出 ")]),_:1},8,["onClick"])])])])]),e("main",J,[K,p.check?(d(),f(h,{key:0})):x("",!0)])])])],64)}const Z=m(R,[["render",Q],["__scopeId","data-v-644a2e64"]]);export{Z as default};
