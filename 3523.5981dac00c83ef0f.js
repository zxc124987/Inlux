"use strict";(self["webpackChunkinnolux"]=self["webpackChunkinnolux"]||[]).push([[3523],{7777:function(t,e,a){a.d(e,{Z:function(){return c}});var r=function(){var t=this;t._self._c;return t._m(0)},l=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"footer"},[e("div",{staticClass:"container"},[e("nav",{staticClass:"nav"},[e("ul",[e("li",[e("i",{staticClass:"el-icon-map-location"}),t._v("地圖 ")]),e("li",[e("a",{attrs:{href:"mailto:evendor_support@innolux.com"}},[e("i",{staticClass:"el-icon-message"}),t._v("寄信給管理員 ")])]),e("li",[e("i",{staticClass:"el-icon-phone-outline"}),t._v(" 承攬商服務中心電話 06-5889998# 61181-61182")])]),e("ul",[e("li",[e("a",{attrs:{href:"https://hiosha.osha.gov.tw/content/info/heat1.aspx",target:"_blank"}},[e("i",{staticClass:"el-icon-message"}),t._v("高氣溫戶外作業熱危害預防行動資訊網 ")])]),e("li",[e("a",{attrs:{href:"https://www.cwa.gov.tw/V8/C/P/Warning/W28.html",target:"_blank"}},[e("i",{staticClass:"el-icon-message"}),t._v("氣象署低溫特報查詢 ")])])])])])])}],s={name:"footer-component"},o=s,i=a(1001),n=(0,i.Z)(o,r,l,!1,null,"95e1bcf8",null),c=n.exports},2283:function(t,e,a){a.d(e,{Z:function(){return c}});var r=function(){var t=this,e=t._self._c;return e("div",{staticClass:"header"},[e("nav",{staticClass:"nav"},[e("div",{staticClass:"logo"},[e("router-link",{attrs:{to:{name:"index"}}},[e("img",{attrs:{src:a(6086),alt:"logo"}})])],1),e("div",{staticClass:"text"},[t._v("承攬商網站(台灣地區)")]),t._m(0)])])},l=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"goBack mb-0"},[e("a",{staticClass:"text-decoration-none",attrs:{href:"https://www.innolux.com/tw/"}},[e("img",{attrs:{src:a(5001),alt:"earth picture"}}),t._v(" 回到官網 ")])])}],s={name:"header2-component"},o=s,i=a(1001),n=(0,i.Z)(o,r,l,!1,null,"265a6e82",null),c=n.exports},7163:function(t,e,a){a.d(e,{Z:function(){return m}});var r=function(){var t=this,e=t._self._c;return e("div",{staticClass:"upload"},[e("el-upload",{ref:"Upload",staticClass:"upload-demo",attrs:{limit:t.limitNumber,action:t.uploadAction,"auto-upload":!1,"on-change":t.changeHandler,"on-remove":t.removeHandler}},[e("el-button",{attrs:{size:"small",type:"primary"}},[t._v("上傳檔案")]),e("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[t._v(t._s(t.uploadTipText))])],1)],1)},l=[],s=a(942),o={name:"upload-component",data(){return{}},props:{uploadTipText:{type:[String],default:"檔案格式為PDF，在2MB以內"},uploadAction:{type:[String],default:s.apiUrl},limitNumber:{type:Number,default:1}},methods:{changeHandler(t,e){this.$emit("fileChangeHandler",e)},removeHandler(t,e){this.$emit("fileRemoveHandler",e)}},mounted(){}},i=o,n=a(1001),c=(0,n.Z)(i,r,l,!1,null,"442b61f1",null),m=c.exports},3523:function(t,e,a){a.r(e),a.d(e,{default:function(){return A}});var r=function(){var t=this,e=t._self._c;return e("div",{directives:[{name:"loading",rawName:"v-loading.fullscreen.lock",value:this.$root.overlay,expression:"this.$root.overlay",modifiers:{fullscreen:!0,lock:!0}}],staticClass:"companyApplyAccount",style:{marginBottom:t.footerHeight+t.fixedBtnGroupHeight+10+"px"}},[e("Header"),e("div",{staticClass:"container"},[e("el-steps",{attrs:{active:t.active,"finish-status":"success"}},[e("el-step",{attrs:{title:"同意約定條款"}}),e("el-step",{attrs:{title:"填寫資料，送出申請"}})],1)],1),e("div",{staticClass:"container"},[e("el-form",{ref:"form",attrs:{rules:t.rules,model:t.formData}},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-2 text-end"},[e("div",{staticClass:"row-title"},[t._v("公司基本資料")])]),e("div",{staticClass:"col"},[e("el-form-item",{attrs:{label:"網站帳號(廠商統一編號)",prop:"S_ID"}},[e("el-input",{attrs:{placeholder:"請輸入統一編號"},model:{value:t.formData.S_ID,callback:function(e){t.$set(t.formData,"S_ID",e)},expression:"formData.S_ID"}})],1),e("el-form-item",{attrs:{label:"網站密碼",prop:"PASSWORD"}},[e("p",{staticClass:"directions"},[t._v("至少8碼、包含英文大寫&小寫&數字&符號，不得和統編相同")]),e("el-input",{attrs:{placeholder:"請輸入密碼"},model:{value:t.formData.PASSWORD,callback:function(e){t.$set(t.formData,"PASSWORD",e)},expression:"formData.PASSWORD"}})],1),e("el-form-item",{attrs:{label:"公司全稱(字數限制≦30)",prop:"S_NAME"}},[e("el-input",{attrs:{placeholder:"請輸入公司全稱"},model:{value:t.formData.S_NAME,callback:function(e){t.$set(t.formData,"S_NAME",e)},expression:"formData.S_NAME"}})],1),e("div",{staticClass:"row"},[e("div",{staticClass:"col"},[e("el-form-item",{attrs:{label:"公司簡稱(字數限制≦4)",prop:"SHORT_NAME"}},[e("el-input",{attrs:{placeholder:"請輸入","公司簡稱":""},model:{value:t.formData.SHORT_NAME,callback:function(e){t.$set(t.formData,"SHORT_NAME",e)},expression:"formData.SHORT_NAME"}})],1)],1),e("div",{staticClass:"col"},[e("el-form-item",{attrs:{label:"公司負責人姓名",prop:"COMPANY_HEAD_NAME"}},[e("el-input",{attrs:{placeholder:"請輸入姓名"},model:{value:t.formData.COMPANY_HEAD_NAME,callback:function(e){t.$set(t.formData,"COMPANY_HEAD_NAME",e)},expression:"formData.COMPANY_HEAD_NAME"}})],1)],1)]),e("div",{staticClass:"row"},[e("div",{staticClass:"col"},[e("el-form-item",{attrs:{label:"公司聯絡電話",prop:"TEL"}},[e("el-input",{attrs:{placeholder:"請輸入電話"},model:{value:t.formData.TEL,callback:function(e){t.$set(t.formData,"TEL",e)},expression:"formData.TEL"}})],1)],1),e("div",{staticClass:"col"},[e("el-form-item",{attrs:{label:"公司國籍",prop:"COUNTRY"}},[e("el-select",{staticClass:"w-100",attrs:{placeholder:"請選擇"},model:{value:t.formData.COUNTRY,callback:function(e){t.$set(t.formData,"COUNTRY",e)},expression:"formData.COUNTRY"}},t._l(t.newVendorInfo,(function(t){return e("el-option",{key:t.id,attrs:{label:t.label,value:t.name}})})),1)],1)],1)]),e("el-form-item",{attrs:{label:"通訊地址(發票地址)",prop:"ADDRESS1"}},[e("el-input",{attrs:{placeholder:"請輸入地址"},model:{value:t.formData.ADDRESS1,callback:function(e){t.$set(t.formData,"ADDRESS1",e)},expression:"formData.ADDRESS1"}})],1),e("el-form-item",{attrs:{label:"公司聯絡信箱(E-mail)",prop:"EMAIL"}},[e("el-input",{attrs:{type:"email",placeholder:"請輸入E-mail"},model:{value:t.formData.EMAIL,callback:function(e){t.$set(t.formData,"EMAIL",e)},expression:"formData.EMAIL"}})],1),e("el-form-item",{attrs:{label:"上傳認證文件",prop:"file"}},[e("el-upload",{ref:"file",staticClass:"upload-demo",attrs:{action:"","auto-upload":!1,limit:1,"on-change":t.fileChangeHandler,"on-remove":t.fileRemoveHandler}},[e("el-button",{attrs:{size:"small",type:"primary"}},[t._v("上傳檔案")]),e("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[t._v("請將文件合併成 PDF 檔案容量限制為 2MB 以內")]),e("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[t._v("1. 群創光電承攬商約定條款 "),e("a",{staticClass:"primary text-primary",attrs:{href:"#"},on:{click:function(e){return t.downloadHandler()}}},[t._v("(點選下載電子檔)")])]),e("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[t._v("2. 營利事業登記證(影本) 或至財政部稅務入口網站，營業登記資料公示列印查詢資料畫面。")]),e("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[t._v("3. 公司勞保證或三個月內之勞保繳費證明(影本)")])],1)],1)],1)]),e("div",{staticClass:"row"},[e("div",{staticClass:"col-2 text-end"},[e("div",{staticClass:"row-title"},[t._v("帳號管理員資料")])]),e("div",{staticClass:"col"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col"},[e("el-form-item",{attrs:{label:"姓名",prop:"P_NAME"}},[e("el-input",{attrs:{placeholder:"請輸入姓名"},model:{value:t.formData.P_NAME,callback:function(e){t.$set(t.formData,"P_NAME",e)},expression:"formData.P_NAME"}})],1)],1),e("div",{staticClass:"col"},[e("el-form-item",{attrs:{label:"性別",prop:"SEX"}},[e("el-select",{staticClass:"w-100",attrs:{placeholder:"請選擇"},model:{value:t.formData.SEX,callback:function(e){t.$set(t.formData,"SEX",e)},expression:"formData.SEX"}},[e("el-option",{attrs:{label:"男",value:"m"}},[t._v("男")]),e("el-option",{attrs:{label:"女",value:"f"}},[t._v("女")])],1)],1)],1)]),e("div",{staticClass:"row"},[e("div",{staticClass:"col"},[e("el-form-item",{attrs:{label:"身份證字號",prop:"ADMIN_ID"}},[e("el-input",{attrs:{placeholder:"請輸入身分證字號"},model:{value:t.formData.ADMIN_ID,callback:function(e){t.$set(t.formData,"ADMIN_ID",e)},expression:"formData.ADMIN_ID"}})],1)],1),e("div",{staticClass:"col"},[e("el-form-item",{attrs:{label:"部門",prop:"DEPT_NAME"}},[e("el-input",{attrs:{placeholder:"請輸入部門名稱"},model:{value:t.formData.DEPT_NAME,callback:function(e){t.$set(t.formData,"DEPT_NAME",e)},expression:"formData.DEPT_NAME"}})],1)],1)]),e("div",{staticClass:"row"},[e("div",{staticClass:"col"},[e("el-form-item",{attrs:{label:"職稱",prop:"JOB_TITLE"}},[e("el-input",{attrs:{placeholder:"請輸入職稱"},model:{value:t.formData.JOB_TITLE,callback:function(e){t.$set(t.formData,"JOB_TITLE",e)},expression:"formData.JOB_TITLE"}})],1)],1),e("div",{staticClass:"col"},[e("el-form-item",{attrs:{label:"聯絡電話",prop:"URGENT_TEL"}},[e("el-input",{attrs:{placeholder:"請輸入電話"},model:{value:t.formData.URGENT_TEL,callback:function(e){t.$set(t.formData,"URGENT_TEL",e)},expression:"formData.URGENT_TEL"}})],1)],1)]),e("el-form-item",{attrs:{label:"電子郵件",prop:"PEMAIL"}},[e("p",{staticClass:"directions mb-0"},[t._v("1. 公司事務聯絡用，未免檔信，影響權益，除企業信箱外，免費電子郵件建議 Gmail 為主。")]),e("p",{staticClass:"directions mb-1"},[t._v("2. 可輸入多組 E-mail ，各組 Mail 請以「分號」隔開，字數以 100 字元為限。")]),e("el-input",{attrs:{type:"textarea",rows:4,placeholder:"請輸入E-mail",maxlength:"100","show-word-limit":""},model:{value:t.formData.PEMAIL,callback:function(e){t.$set(t.formData,"PEMAIL",e)},expression:"formData.PEMAIL"}})],1)],1)])])],1),e("div",{staticClass:"fixed-btn-group"},[e("div",{staticClass:"container my-0"},[e("router-link",{staticClass:"el-button el-button--primary el-button--small is-plain fw-normal text-decoration-none",attrs:{to:{name:"index"}}},[t._v("返回")]),e("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(e){return t.submitForm("form")}}},[t._v("送出申請")])],1)]),e("Footer")],1)},l=[],s=a(2283),o=a(7777),i=a(7163),n=a(942),c={name:"companyApplyAccount-component",components:{Header:s.Z,Footer:o.Z,UploadComponent:i.Z},data(){return{active:0,footerHeight:0,fixedBtnGroupHeight:0,formData:{S_ID:"",S_NAME:"",PASSWORD:"",SHORT_NAME:"",COMPANY_HEAD_NAME:"",TEL:"",ADDRESS1:"",ADDRESS2:null,EMAIL:"",COUNTRY:"",P_NAME:"",SEX:"",ADMIN_ID:"",DEPT_NAME:"",JOB_TITLE:"",URGENT_TEL:"",PEMAIL:"",file:{}},rules:{S_ID:[{required:!0,message:"必填",trigger:"blur"}],PASSWORD:[{required:!0,message:"必填",trigger:"blur"},{min:8,message:"至少8碼",trigger:"blur"},{validator:this.validateRule,trigger:"blur"}],S_NAME:[{required:!0,message:"必填",trigger:"blur"},{max:30,message:"不可超過30個字",trigger:"blur"}],SHORT_NAME:[{required:!0,message:"必填",trigger:"blur"},{max:4,message:"不可超過4個字",trigger:"blur"}],COMPANY_HEAD_NAME:[{required:!0,message:"必填",trigger:"blur"}],TEL:[{required:!0,message:"必填",trigger:"blur"}],COUNTRY:[{required:!0,message:"必填",trigger:"change"}],ADDRESS1:[{required:!0,message:"必填",trigger:"blur"}],EMAIL:[{required:!0,message:"必填",trigger:"blur"},{type:"email",message:"信箱格式錯誤",trigger:["blur","change"]}],file:[{required:!0,message:"必填",trigger:"change"}],P_NAME:[{required:!0,message:"必填",trigger:"blur"}],SEX:[{required:!0,message:"必填",trigger:"change"}],ADMIN_ID:[{required:!0,message:"必填",trigger:"blur"}],DEPT_NAME:[{required:!0,message:"必填",trigger:"blur"}],JOB_TITLE:[{required:!0,message:"必填",trigger:"blur"}],URGENT_TEL:[{required:!0,message:"必填",trigger:"blur"}],PEMAIL:[{required:!0,message:"必填",trigger:"blur"}]}}},computed:{newVendorInfo(){return this.$store.state.newVendorInfo.forEach((t=>{t.label=`${t.name} ${t.e_Name}`})),this.$store.state.newVendorInfo}},methods:{getInitToken(){return new Promise(((t,e)=>{localStorage.clear();let a={},r="account",l="12800225;evendor_support@innolux.com",s="password",o="1QaX2WsX",i="app_id",c=n.APP_ID;a[r]=l,a[s]=o,a[i]=c;let m=a;this.axios({url:n.APIM_GATEWAY+n.TWOFALOGIN_METHOD,method:"POST",data:m,headers:{"content-type":"application/json"}}).then((e=>{t(e)})).catch((t=>{e(t)}))}))},fileChangeHandler(t){this.formData.file=t.raw,this.$refs.form.clearValidate("file")},fileRemoveHandler(t){this.formData.file=t,this.$refs.form.validateField("file")},submitForm(t){this.$refs[t].validate((async t=>{if(!t)return this.$message({type:"error",showClose:!0,message:"資料輸入錯誤"}),!1;{localStorage.clear();let t={},e="account",a="12800225;evendor_support@innolux.com",r="password",l="1QaX2WsX",s="app_id",o=n.APP_ID;t[e]=a,t[r]=l,t[s]=o;let i=t;this.axios({url:n.APIM_GATEWAY+n.TWOFALOGIN_METHOD,method:"POST",data:i,headers:{"content-type":"application/json"}}).then((()=>{this.addRegister()}))}}))},resetForm(t){this.$refs[t].resetFields()},validateRule(t,e,a){const r=/^(?=.*\d)(?=.*[a-zA-Z])(?=.*[~!@#$%^&*])[\da-zA-Z~!@#$%^&*]/;r.test(e)?a():a(new Error("必須包含數字/符號/英文大小寫混合"))},async addRegister(){try{await this.$store.dispatch("addRegister",this.formData),this.$message({type:"success",duration:5e3,showClose:!0,message:"註冊成功"}),this.$router.replace({name:"index"})}catch(t){console.log(t)}},async getNewVendorInfo(){try{await this.$store.dispatch("getNewVendorInfo")}catch(t){console.log(t)}},async downloadHandler(){try{await this.getInitToken();const t=await this.$store.dispatch("getDownloadTerms"),e=URL.createObjectURL(t.data),a=document.createElement("a");a.href=e,a.setAttribute("download","群創光電承攬商約定條款.docx"),document.body.appendChild(a),a.click(),document.body.removeChild(a),URL.revokeObjectURL(e)}catch(t){console.log(t)}}},async mounted(){try{await this.getInitToken()}catch(a){console.log(a)}this.getNewVendorInfo(),this.$root.$children[0].sidebarSwitch=!1,this.$store.commit("HEADER_HANDLER",!1),this.$store.commit("BREADCRUMB_HANDLER",!1);const t=document.querySelector(".footer"),e=document.querySelector(".fixed-btn-group");t&&e&&(this.footerHeight=t.offsetHeight,this.fixedBtnGroupHeight=e.offsetHeight)},beforeDestroy(){localStorage.clear()}},m=c,d=a(1001),u=(0,d.Z)(m,r,l,!1,null,"6b0927c0",null),A=u.exports},5001:function(t){t.exports="data:image/jpeg;base64,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"}}]);
//# sourceMappingURL=3523.5981dac00c83ef0f.js.map