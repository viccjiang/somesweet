import{_,r as h,o,c,a as s,F as r,u,t as p,D as g,w as m,d as P,x as n}from"./index-8ceee891.js";const{VITE_APP_URL:f,VITE_APP_PATH:A}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/",VITE_APP_PATH:"jiangs2023",BASE_URL:"/vue_week_07/",MODE:"production",DEV:!1,PROD:!0},v={data(){return{articles:[],isLoading:!1,isNew:!1,tempArticle:{}}},methods:{getArticles(i=1){const a=`${f}api/${A}/articles?page=${i}`;this.$http.get(a).then(e=>{this.articles=e.data.articles,this.pagination=e.data.pagination}).catch(e=>{console.log(e)})}},created(){this.getArticles()}},k={class:"container"},T={class:"row row-cols-1 row-cols-md-3 g-4"},E={key:0,class:"col"},V={class:"card h-100"},$=["src"],w={class:"card-body"},x={class:"card-title"},L=["innerHTML"],b={class:"card-footer"};function y(i,a,e,B,l,D){const d=h("router-link");return o(),c("div",k,[s("div",T,[(o(!0),c(r,null,u(l.articles,t=>(o(),c(r,{key:t.id},[t.isPublic?(o(),c("div",E,[s("div",V,[s("img",{src:t.imageUrl,class:"card-img-top"},null,8,$),s("div",w,[s("h5",x,p(t.title),1),s("div",{innerHTML:t.description},null,8,L)]),s("div",b,[t.isPublic?(o(),g(d,{key:0,to:`/blog/${t.id}`,class:"btn btn-outline-primary"},{default:m(()=>[P(" 文章頁面 ")]),_:2},1032,["to"])):n("",!0)])])])):n("",!0)],64))),128))])])}const H=_(v,[["render",y]]);export{H as default};
