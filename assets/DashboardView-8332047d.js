import{_ as b,R as g,A as v,C as f,r as d,o as r,c as k,a as s,b as n,w as i,B as x,x as w,F as V,d as c,p as E,e as $}from"./index-5a0b13e1.js";let _=null;const{VITE_APP_URL:R}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/",VITE_APP_PATH:"jiangs2023",BASE_URL:"/vue_week_07/",MODE:"production",DEV:!1,PROD:!0},y={data(){return{check:!1}},components:{RouterView:g,RouterLink:v},methods:{signOut(){document.cookie=`jiangvue3=;expires=${new Date};`,this.$router.push("/login")},checkAdmin(){const t=`${R}api/user/check`;this.$http.post(t).then(a=>{a.data.success?this.check=!0:this.$router.push("/login")}).catch(a=>{console.dir(a.data.message),this.$router.push("/login")})}},mounted(){_=new f(document.getElementById("sidebarMenu"),{toggle:!1}),this.$router.beforeEach((a,u)=>{_.hide()});const t=document.cookie.replace(/(?:(?:^|.*;\s*)jiangvue3\s*=\s*([^;]*).*$)|^.*$/,"$1");this.$http.defaults.headers.common.Authorization=t,this.checkAdmin()}},e=t=>(E("data-v-dab18baf"),t=t(),$(),t),A={class:"navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow"},S=e(()=>s("p",{class:"logoText fs-xl p-0 m-0"},[c("SOME SWEET "),s("span",{class:"fs-xs fw-lighter"},"/am")],-1)),I=e(()=>s("button",{class:"navbar-toggler position-absolute d-md-none collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#sidebarMenu","aria-controls":"sidebarMenu","aria-expanded":"false","aria-label":"Toggle navigation"},[s("span",{class:"navbar-toggler-icon"})],-1)),P=e(()=>s("input",{class:"form-control form-control-dark w-100 rounded-0 border-0",type:"text",placeholder:"Search","aria-label":"Search"},null,-1)),T={class:"navbar-nav"},B={class:"nav-item text-nowrap"},L={class:"container-fluid"},C={class:"row"},D={id:"sidebarMenu",class:"bg-dark col-md-3 col-lg-2 d-md-block sidebar collapse"},M={class:"position-sticky pt-3 sidebar-sticky"},O={class:"nav flex-column"},j={class:"nav-item"},N=e(()=>s("i",{class:"bi bi-sliders2"},null,-1)),U={class:"nav-item"},F=e(()=>s("i",{class:"bi bi-sliders2"},null,-1)),z={class:"nav-item"},H=e(()=>s("i",{class:"bi bi-sliders2"},null,-1)),W={class:"nav-item"},q=e(()=>s("i",{class:"bi bi-sliders2"},null,-1)),G={class:"nav-item"},J=e(()=>s("i",{class:"bi bi-sliders2"},null,-1)),K={class:"col-md-9 ms-sm-auto col-lg-10 px-md-4"},Q=e(()=>s("div",{class:"d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom"},[s("h1",{class:"h2"},"管理者後台"),s("div",{class:"btn-toolbar mb-2 mb-md-0"},[s("div",{class:"btn-group me-2"})])],-1));function X(t,a,u,Y,p,l){const o=d("RouterLink"),h=d("RouterView");return r(),k(V,null,[s("header",A,[n(o,{to:"/admin",class:"navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6"},{default:i(()=>[S]),_:1}),I,P,s("div",T,[s("div",B,[s("a",{class:"nav-link px-3",href:"#",onClick:a[0]||(a[0]=(...m)=>l.signOut&&l.signOut(...m))},"Sign out")])])]),s("div",L,[s("div",C,[s("nav",D,[s("div",M,[s("ul",O,[s("li",j,[n(o,{to:"/admin",class:"nav-link p-5","aria-current":"page"},{default:i(()=>[N,c(" 後台首頁 ")]),_:1})]),s("li",U,[n(o,{to:"/admin/products",class:"nav-link p-5 text-white","aria-current":"page"},{default:i(()=>[F,c(" 產品管理 ")]),_:1})]),s("li",z,[n(o,{to:"/admin/orders",class:"nav-link p-5 text-white","aria-current":"page"},{default:i(()=>[H,c(" 訂單管理 ")]),_:1})]),s("li",W,[n(o,{to:"/admin/coupons",class:"nav-link p-5 text-white","aria-current":"page"},{default:i(()=>[q,c(" 優惠券管理 ")]),_:1})]),s("li",G,[n(o,{to:"/admin/articles",class:"nav-link p-5 text-white","aria-current":"page"},{default:i(()=>[J,c(" 文章管理 ")]),_:1})])])])]),s("main",K,[Q,p.check?(r(),x(h,{key:0})):w("",!0)])])])],64)}const ss=b(y,[["render",X],["__scopeId","data-v-dab18baf"]]);export{ss as default};
