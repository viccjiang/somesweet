import{_,r as h,o,b as i,d as s,F as r,E as p,t as u,I as m,w as g,f as P,h as n}from"./index-f2a5458d.js";const{VITE_APP_URL:f,VITE_APP_PATH:A}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/",VITE_APP_PATH:"jiangs2023",BASE_URL:"/somesweet/",MODE:"production",DEV:!1,PROD:!0},v={data(){return{articles:[],isLoading:!1,isNew:!1,tempArticle:{}}},methods:{getArticles(c=1){const a=`${f}api/${A}/articles?page=${c}`;this.$http.get(a).then(e=>{this.articles=e.data.articles,this.pagination=e.data.pagination}).catch(e=>{console.log(e)})}},created(){this.getArticles()}},E={class:"container"},T={class:"row row-cols-1 row-cols-md-3 g-4"},k={key:0,class:"col"},V={class:"card h-100"},$=["src"],b={class:"card-body"},w={class:"card-title"},L=["innerHTML"],x={class:"card-footer"};function y(c,a,e,B,l,I){const d=h("router-link");return o(),i("div",E,[s("div",T,[(o(!0),i(r,null,p(l.articles,t=>(o(),i(r,{key:t.id},[t.isPublic?(o(),i("div",k,[s("div",V,[s("img",{src:t.imageUrl,class:"card-img-top"},null,8,$),s("div",b,[s("h5",w,u(t.title),1),s("div",{innerHTML:t.description},null,8,L)]),s("div",x,[t.isPublic?(o(),m(d,{key:0,to:`/blog/${t.id}`,class:"btn btn-outline-primary"},{default:g(()=>[P(" 文章頁面 ")]),_:2},1032,["to"])):n("",!0)])])])):n("",!0)],64))),128))])])}const D=_(v,[["render",y]]);export{D as default};
