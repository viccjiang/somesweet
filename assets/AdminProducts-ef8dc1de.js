import{P as x}from"./PaginationComponent-c98d04f8.js";import{M as w}from"./modal-247a5335.js";import{_ as U,o as i,b as n,d as t,G as u,J as m,F as v,E as M,N as V,f as y,t as h,r as g,e as P,D as k}from"./index-f2a5458d.js";import"./base-component-2b245970.js";import"./component-functions-8e3d5028.js";const{VITE_APP_URL:A,VITE_APP_PATH:E}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/",VITE_APP_PATH:"jiangs2023",BASE_URL:"/somesweet/",MODE:"production",DEV:!1,PROD:!0},C={props:["product","isNew"],data(){return{status:{},modal:{},tempProduct:{imagesUrl:[]}}},watch:{product(){this.tempProduct=this.product,this.tempProduct.imagesUrl||(this.tempProduct.imagesUrl=[]),this.tempProduct.imageUrl||(this.tempProduct.imageUrl="")}},methods:{uploadFile(){const l=this.$refs.fileInput.files[0],o=new FormData;o.append("file-to-upload",l);const d=`${A}api/${E}/admin/upload`;this.$http.post(d,o,{headers:{"Content-Type":"multipart/form-data"}}).then(a=>{a.data.success?(this.tempProduct.imageUrl=a.data.imageUrl,this.$refs.fileInput.value="",console.log(a.data.imageUrl)):this.$refs.fileInput.value=""}).catch(a=>{console.dir(a.data.message)})},showModal(){this.modal.show()},hideModal(){this.modal.hide()}},mounted(){this.modal=new w(this.$refs.modal)}},I={id:"productModal",ref:"modal",class:"modal fade",tabindex:"-1","aria-labelledby":"productModalLabel","aria-hidden":"true"},T={class:"modal-dialog modal-xl"},D={class:"modal-content border-0"},L={class:"modal-header bg-dark text-white"},N={id:"productModalLabel",class:"modal-title"},F={key:0},R={key:1},B=t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),H={class:"modal-body"},O={class:"row mb-3"},S={class:"col-sm-4"},j={class:"form-group mb-3"},q=t("label",{for:"imageUrl",class:"form-label"},"主要圖片",-1),z=["src"],G={class:"mb-3"},J=t("label",{for:"customFile",class:"form-label"},"或上傳圖片 ",-1),K={key:0},Q={class:"form-group"},W=["for"],X=["id","onUpdate:modelValue"],Y=["src"],Z={key:0},tt={key:1},ot={key:1},et={class:"col-sm-8"},st={class:"form-group mb-3"},lt=t("label",{for:"title",class:"form-label"},"標題",-1),dt={class:"row mb-3"},it={class:"form-group col-md-6"},nt=t("label",{for:"category",class:"form-label"},"分類",-1),rt={class:"form-group col-md-6"},at=t("label",{for:"price",class:"form-label"},"單位",-1),ct={class:"row mb-3"},ut={class:"form-group col-md-6"},mt=t("label",{for:"origin_price",class:"form-label"},"原價",-1),pt={class:"form-group col-md-6"},ht=t("label",{for:"price",class:"form-label"},"售價",-1),_t=t("hr",null,null,-1),bt={class:"form-group mb-3"},ft=t("label",{for:"description",class:"form-label"},"產品描述",-1),gt={class:"form-group mb-3"},Pt=t("label",{for:"content",class:"form-label"},"說明內容",-1),vt={class:"form-group mb-3"},Ut={class:"form-check"},yt=t("label",{class:"form-check-label",for:"is_enabled"},"是否啟用",-1),wt={class:"modal-footer"},Mt=t("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function $t(l,o,d,a,e,r){return i(),n("div",I,[t("div",T,[t("div",D,[t("div",L,[t("h5",N,[d.isNew?(i(),n("span",F,"新增產品")):(i(),n("span",R,"編輯產品"))]),B]),t("div",H,[t("div",O,[t("div",S,[t("div",j,[q,u(t("input",{"onUpdate:modelValue":o[0]||(o[0]=s=>e.tempProduct.imageUrl=s),type:"text",class:"form-control",placeholder:"請輸入圖片連結"},null,512),[[m,e.tempProduct.imageUrl]]),t("img",{class:"img-fluid",src:e.tempProduct.imageUrl},null,8,z)]),t("div",G,[J,t("input",{type:"file",id:"customFile",class:"form-control",ref:"fileInput",onChange:o[1]||(o[1]=(...s)=>r.uploadFile&&r.uploadFile(...s))},null,544)]),Array.isArray(e.tempProduct.imagesUrl)?(i(),n("div",K,[(i(!0),n(v,null,M(d.product.imagesUrl,(s,p)=>(i(),n("div",{class:"mb-1",key:p},[t("div",Q,[t("label",{for:e.tempProduct.imagesUrl[p],class:"form-label"},"圖片網址",8,W),u(t("input",{id:e.tempProduct.imagesUrl[p],"onUpdate:modelValue":f=>e.tempProduct.imagesUrl[p]=f,type:"text",class:"form-control",placeholder:"請輸入圖片連結"},null,8,X),[[m,e.tempProduct.imagesUrl[p]]])]),t("img",{class:"img-fluid",src:s},null,8,Y)]))),128)),!d.product.imagesUrl.length||d.product.imagesUrl[d.product.imagesUrl.length-1]?(i(),n("div",Z,[t("button",{class:"btn btn-outline-primary btn-sm d-block w-100",onClick:o[2]||(o[2]=s=>e.tempProduct.imagesUrl.push(""))}," 新增圖片 ")])):(i(),n("div",tt,[t("button",{class:"btn btn-outline-danger btn-sm d-block w-100",onClick:o[3]||(o[3]=s=>e.tempProduct.imagesUrl.pop())}," 刪除圖片 ")]))])):(i(),n("div",ot,[t("button",{class:"btn btn-outline-primary btn-sm d-block w-100",onClick:o[4]||(o[4]=s=>l.$emit("createImages"))}," 新增圖片 ")]))]),t("div",et,[t("div",st,[lt,u(t("input",{id:"title","onUpdate:modelValue":o[5]||(o[5]=s=>e.tempProduct.title=s),type:"text",class:"form-control",placeholder:"請輸入標題"},null,512),[[m,e.tempProduct.title]])]),t("div",dt,[t("div",it,[nt,u(t("input",{id:"category","onUpdate:modelValue":o[6]||(o[6]=s=>e.tempProduct.category=s),type:"text",class:"form-control",placeholder:"請輸入分類"},null,512),[[m,e.tempProduct.category]])]),t("div",rt,[at,u(t("input",{id:"unit","onUpdate:modelValue":o[7]||(o[7]=s=>e.tempProduct.unit=s),type:"text",class:"form-control",placeholder:"請輸入單位"},null,512),[[m,e.tempProduct.unit]])])]),t("div",ct,[t("div",ut,[mt,u(t("input",{id:"origin_price","onUpdate:modelValue":o[8]||(o[8]=s=>e.tempProduct.origin_price=s),type:"number",min:"0",class:"form-control",placeholder:"請輸入原價"},null,512),[[m,e.tempProduct.origin_price,void 0,{number:!0}]])]),t("div",pt,[ht,u(t("input",{id:"price","onUpdate:modelValue":o[9]||(o[9]=s=>e.tempProduct.price=s),type:"number",min:"0",class:"form-control",placeholder:"請輸入售價"},null,512),[[m,e.tempProduct.price,void 0,{number:!0}]])])]),_t,t("div",bt,[ft,u(t("textarea",{id:"description","onUpdate:modelValue":o[10]||(o[10]=s=>e.tempProduct.description=s),type:"text",class:"form-control",placeholder:"請輸入產品描述"},`\r
                  `,512),[[m,e.tempProduct.description]])]),t("div",gt,[Pt,u(t("textarea",{id:"description","onUpdate:modelValue":o[11]||(o[11]=s=>e.tempProduct.content=s),type:"text",class:"form-control",placeholder:"請輸入說明內容"},`\r
                  `,512),[[m,e.tempProduct.content]])]),t("div",vt,[t("div",Ut,[u(t("input",{id:"is_enabled","onUpdate:modelValue":o[12]||(o[12]=s=>e.tempProduct.is_enabled=s),class:"form-check-input",type:"checkbox","true-value":1,"false-value":0},null,512),[[V,e.tempProduct.is_enabled]]),yt])])])])]),t("div",wt,[Mt,t("button",{type:"button",class:"btn btn-primary",onClick:o[13]||(o[13]=s=>l.$emit("updateProduct"))}," 確認 ")])])])],512)}const xt=U(C,[["render",$t]]),Vt={props:["product"],data(){return{modal:{}}},methods:{showModal(){this.modal.show()},hideModal(){this.modal.hide()}},mounted(){this.modal=new w(this.$refs.delmodal)}},kt={id:"delProductModal",ref:"delmodal",class:"modal fade",tabindex:"-1","aria-labelledby":"delProductModalLabel","aria-hidden":"true"},At={class:"modal-dialog"},Et={class:"modal-content border-0"},Ct=t("div",{class:"modal-header bg-danger text-white"},[t("h5",{id:"delProductModalLabel",class:"modal-title"},[t("span",null,"刪除產品")]),t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),It={class:"modal-body"},Tt={class:"text-danger"},Dt={class:"modal-footer"},Lt=t("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function Nt(l,o,d,a,e,r){return i(),n("div",kt,[t("div",At,[t("div",Et,[Ct,t("div",It,[y(" 是否刪除 "),t("strong",Tt,h(d.product.title),1),y(" 商品(刪除後將無法恢復)。 ")]),t("div",Dt,[Lt,t("button",{type:"button",class:"btn btn-danger",onClick:o[0]||(o[0]=s=>l.$emit("delProduct"))}," 確認刪除 ")])])])],512)}const Ft=U(Vt,[["render",Nt]]),{VITE_APP_URL:_,VITE_APP_PATH:b}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/",VITE_APP_PATH:"jiangs2023",BASE_URL:"/somesweet/",MODE:"production",DEV:!1,PROD:!0},Rt={components:{pagination:x,productmodal:xt,delproductmodal:Ft},data(){return{products:[],tempProduct:{imagesUrl:[]},pagination:{},isNew:!1}},mounted(){this.getData()},methods:{getData(l=1){const o=`${_}api/${b}/admin/products?page=${l}`;window.scrollTo(0,0),this.$http.get(o).then(d=>{console.log(d);const{products:a,pagination:e}=d.data;this.products=a,this.pagination=e,console.log("後台產品: ",this.products),console.log("後台分頁: ",this.pagination)}).catch(()=>{this.$router.push("/login")})},openModal(l,o){l==="new"?(this.tempProduct={imagesUrl:[]},this.isNew=!0,this.$refs.productModal.showModal()):l==="edit"?(this.tempProduct={...o},this.isNew=!1,this.$refs.productModal.showModal()):l==="delete"&&(this.tempProduct={...o},this.$refs.delProductModal.showModal())},updateProduct(){let l=`${_}api/${b}/admin/product`,o="post";this.isNew||(l=`${_}api/${b}/admin/product/${this.tempProduct.id}`,o="put"),this.$http[o](l,{data:this.tempProduct}).then(d=>{alert(d.data.message),this.getData(),this.$refs.productModal.hideModal()}).catch(d=>{console.dir(d)})},delProduct(){this.$http.delete(`${_}api/${b}/admin/product/${this.tempProduct.id}`).then(l=>{this.getData(),this.$refs.delProductModal.hideModal()}).catch(l=>{alert(l.data.message)})},createImages(){this.tempProduct.imagesUrl=[],this.tempProduct.imagesUrl.push("")}}},Bt={class:""},Ht={class:"text-end mt-4"},Ot={class:"table table-hover mt-4"},St=t("thead",null,[t("tr",null,[t("th",{width:"120"}," 分類 "),t("th",null,"產品名稱"),t("th",{width:"120"}," 原價 "),t("th",{width:"120"}," 售價 "),t("th",{width:"100"}," 是否啟用 "),t("th",{width:"120"}," 編輯 ")])],-1),jt={class:"text-end"},qt={class:"text-end"},zt={class:""},Gt=["onClick"],Jt=t("i",{class:"bi bi-pencil-square"},null,-1),Kt=[Jt],Qt=["onClick"],Wt=t("i",{class:"bi bi-trash3-fill"},null,-1),Xt=[Wt];function Yt(l,o,d,a,e,r){const s=g("pagination"),p=g("productmodal"),f=g("delproductmodal");return i(),n(v,null,[t("div",Bt,[t("div",Ht,[t("button",{class:"btn btn-primary",onClick:o[0]||(o[0]=c=>r.openModal("new"))}," 建立新的產品 ")]),t("table",Ot,[St,t("tbody",null,[(i(!0),n(v,null,M(e.products,c=>(i(),n("tr",{key:c.id},[t("td",null,h(c.category),1),t("td",null,h(c.title),1),t("td",jt,h(c.origin_price),1),t("td",qt,h(c.price),1),t("td",null,[t("span",{class:k({"text-success":c.is_enabled})},h(c.is_enabled?"啟用":"未啟用"),3)]),t("td",null,[t("div",zt,[t("button",{type:"button",class:"btn btn-outline-primary btn-sm m-1",onClick:$=>r.openModal("edit",c)},Kt,8,Gt),t("button",{type:"button",class:"btn btn-outline-danger btn-sm m-1",onClick:$=>r.openModal("delete",c)},Xt,8,Qt)])])]))),128))])]),P(s,{pages:e.pagination,onEmitPages:r.getData},null,8,["pages","onEmitPages"])]),P(p,{ref:"productModal",product:e.tempProduct,"is-new":e.isNew,onUpdateProduct:r.updateProduct,onCreateImages:r.createImages},null,8,["product","is-new","onUpdateProduct","onCreateImages"]),P(f,{ref:"delProductModal",product:e.tempProduct,onDelProduct:r.delProduct},null,8,["product","onDelProduct"])],64)}const lo=U(Rt,[["render",Yt]]);export{lo as default};
