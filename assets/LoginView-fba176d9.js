import{_ as h}from"./Vector-494b3e2b.js";import{_ as b,r as n,o as w,b as v,d as s,e as i,w as p,s as x,p as V,k,f as B}from"./index-7af5062d.js";const{VITE_APP_URL:y}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/",VITE_APP_PATH:"jiangs2023",BASE_URL:"/somesweet/",MODE:"production",DEV:!1,PROD:!0},E={data(){return{user:{username:"",password:""}}},methods:{login(){const o=this.user;this.$http.post(`${y}admin/signin`,o).then(e=>{if(e.data.success){const{token:r,expired:d}=e.data;document.cookie=`jiangvue3=${r};expires=${new Date(d)};`,this.$router.push("/admin")}else this.user.username="",this.user.password=""}).catch(()=>{})},goBack(){this.$router.push("/")}}},l=o=>(V("data-v-5f1d3f86"),o=o(),k(),o),F={class:"container py-5 vh-100"},P={class:"row d-flex justify-content-center align-items-center h-100"},I={class:"col col-xl-10"},L={class:"card",style:{"border-radius":"1rem"}},z={class:"row g-0"},R=l(()=>s("div",{class:"col-md-6 col-lg-5 d-none d-md-block"},[s("img",{src:"https://storage.googleapis.com/vue-course-api.appspot.com/jiangs2023/1673936209323.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=XKARezhpB%2BB4ydZYqOXEGO20Y84ZhUsdDDlSY2gSmws2bpL6XJ2Fb7bHCLQfejWFsuOxeBiMer4Vky8Q5FVqk3z%2FckqpgqNQb4OHOlnxahugf4uk6lW2FnhNOKhCbfj%2FUZ44%2BFA7FbkzS2Za3RVzNzHzzwo5kViMvdfZJR0vij0zd%2B8fIJoG0O3QJ%2B3X2lqD853pDZF2d5kxh6sJI7gH%2FRrwtLXWNjwINuKKuh5ugmNeLPLerFwqZDNG9UbB5vnjCamhTfrEbgMER%2B2FPU1ifmHAEUB1FQGgTgrBS2B2UK8XoLceVnINRUzqbZzc2AFoCbgwuNe9P9CBVwRcwHHaoQ%3D%3D",alt:"login form",class:"img-fluid h-100",style:{"border-radius":"1rem 0 0 1rem"}})],-1)),S={class:"col-md-6 col-lg-7 d-flex align-items-center"},N={class:"card-body p-4 p-lg-5 text-black"},U={class:"align-items-center"},j=l(()=>s("div",{class:"d-flex justify-content-center",href:"#"},[s("img",{src:h,alt:"Logo",width:"60",height:"60",class:"d-inline-block align-text-top me-3"}),s("div",{class:"mb-5"},[s("p",{class:"fs-xl fw-bold"},"清晨一點甜"),s("p",{class:"logoText fs-lg p-0 m-0"},[B("SOME SWEET "),s("span",{class:"fs-xs fw-lighter"},"/am")])])],-1)),D=l(()=>s("h6",{class:"fw-normal my-5",style:{"letter-spacing":"1px"}},"管理者請先登入",-1)),A={class:"form-floating mb-3"},O=l(()=>s("label",{for:"floatingInput",class:"text-muted"},"輸入 Email 帳號",-1)),q={class:"form-floating"},C=l(()=>s("label",{for:"floatingPassword",class:"text-muted"}," 輸入 Password 密碼",-1)),T={class:"d-flex d-grid gap-2"},H=["disabled"];function Z(o,e,r,d,t,c){const _=n("RouterLink"),m=n("FieldView"),g=n("ErrorMessage"),f=n("FormView");return w(),v("div",F,[s("div",P,[s("div",I,[s("div",L,[s("div",z,[R,s("div",S,[s("div",N,[s("div",U,[i(_,{to:"/",class:""},{default:p(()=>[j]),_:1})]),i(f,{class:"form-signin p-0 mt-5",onSubmit:c.login},{default:p(({errors:u})=>[D,s("div",A,[i(m,{type:"email",name:"email",class:x(["form-control",{"is-invalid":u.email,"is-valid":t.user.username&&!u.email}]),modelValue:t.user.username,"onUpdate:modelValue":e[0]||(e[0]=a=>t.user.username=a),id:"floatingInput",rules:"email",placeholder:"name@example.com",required:"",autofocus:""},null,8,["modelValue","class"]),O,i(g,{name:"email",class:"invalid-feedback"})]),s("div",q,[i(m,{type:"password",name:"password",class:"form-control",modelValue:t.user.password,"onUpdate:modelValue":e[1]||(e[1]=a=>t.user.password=a),id:"floatingPassword",placeholder:"Password",required:""},null,8,["modelValue"]),C]),s("div",T,[s("button",{class:"btn btn-lg btn-outline-primary w-100 mt-3 mb-3",type:"button",onClick:e[2]||(e[2]=(...a)=>c.goBack&&c.goBack(...a))}," 回到首頁 "),s("button",{class:"btn btn-lg btn-primary w-100 mt-3 mb-3",disabled:t.user.username===""}," 立即登入 ",8,H)])]),_:1},8,["onSubmit"])])])])])])])])}const X=b(E,[["render",Z],["__scopeId","data-v-5f1d3f86"]]);export{X as default};
