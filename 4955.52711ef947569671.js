"use strict";(self["webpackChunkinnolux"]=self["webpackChunkinnolux"]||[]).push([[4955],{4868:function(t,e,a){a.d(e,{Z:function(){return o}});var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"header1"},[e("nav",{staticClass:"nav"},[t._m(0),e("div",{staticClass:"logo-text"},[t._v("群創光電"),e("span",{staticClass:"ms-2 headerText"},[t._v(t._s(t.headerText))])]),t.showPrint?e("div",{staticClass:"print text-end ms-auto"},[e("form",[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[t._v("Print by :")]),e("span",[t._v(t._s(t.printBy))])]),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[t._v("Print Time：")]),e("span",[t._v(t._s(t.nowDate))])])])]):t._e()])])},_=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"logo"},[e("img",{attrs:{src:a(6086),alt:"logo"}})])}],i={name:"header1-component",props:{headerText:{type:String,default:"工程申請單"},showPrint:{type:Boolean,default:!1},printData:{type:Object},printBy:{type:String}},data(){return{nowDate:this.formatDate(new Date)}},methods:{formatDate(t){var e=new Date(t),a=""+(e.getMonth()+1),s=""+e.getDate(),_=e.getFullYear();return a.length<2&&(a="0"+a),s.length<2&&(s="0"+s),[_,a,s].join("-")}},mounted(){}},l=i,r=a(1001),n=(0,r.Z)(l,s,_,!1,null,"23cc3008",null),o=n.exports},4955:function(t,e,a){a.r(e),a.d(e,{default:function(){return d}});var s=function(){var t=this,e=t._self._c;return e("div",{directives:[{name:"loading",rawName:"v-loading.fullscreen.lock",value:this.$root.overlay,expression:"this.$root.overlay",modifiers:{fullscreen:!0,lock:!0}}],staticClass:"openOtherPage"},[e("HeaderComponent",{staticClass:"py-0",attrs:{headerText:"承攬商每日工作申請單",showApplication:!0}}),e("div",{staticClass:"table-view"},[e("div",{staticClass:"table-view-title"},[t._v("每日工作基本資料")]),e("div",{staticClass:"table-responsive"},[e("table",{staticClass:"table table-bordered"},[e("tbody",[e("tr",[e("th",[t._v("工程名稱 / 編號")]),e("td",{attrs:{colspan:"5"}},[t._v(t._s(t.detail.project_Name)+" / "+t._s(t.detail.project_No))])]),e("tr",[e("th",[t._v("工程說明")]),e("td",[t._v(t._s(t.detail.project_Name))]),e("th",[t._v("無塵室 (內/外)")]),e("td",[t._v(t._s(t.detail.location_Type_Description))]),e("th",[t._v("主要區域")]),e("td",[t._v(t._s(t.detail.floor))])]),e("tr",[e("th",[t._v("施工廠區")]),e("td",{attrs:{colspan:"3"}},[t._v(t._s(t.detail.location_Name))]),e("th",[t._v("申請單號")]),e("td",[t._v(t._s(t.detail.apply_Pk))])]),e("tr",[e("th",[t._v("施工區域")]),e("td",{attrs:{colspan:"3"}},[t._v(t._s(t.detail.area_Name))]),e("th",[t._v("Notes單號")]),e("td",[t._v(t._s(t.detail.notes_No))])]),e("tr",[e("th",[t._v("施工種類")]),e("td",{attrs:{colspan:"3"}},["0"===t.detail.work_Type_Normal?e("span",[t._v("一般作業")]):t._l(t.workType,(function(a,s){return e("span",[t._v(t._s(a.wtn)+"。")])}))],2),e("th",[t._v("施工結束時間")]),t.detail.end_Time?e("td",[t._v(t._s(t.detail.end_Time.split(" ")[1]))]):t._e()]),e("tr",[e("th",[t._v("施工日")]),e("td",[t._v(t._s(t.detail.work_Date))]),e("th",[t._v("施工開始時間")]),t.detail.begin_Time?e("td",{attrs:{colspan:"3"}},[t._v(t._s(t.detail.begin_Time.split(" ")[1]))]):t._e()]),e("tr",[e("th",[t._v("當前工作說明")]),e("td",{attrs:{colspan:"5"}},[t._v(t._s(t.detail.work_Content))])]),e("tr",[e("th",[t._v("施工負責人 / 安衛人員")]),e("td",[t._v(t._s(t.detail.duty_Name))]),e("th",[t._v("施工負責人/安衛人員代理")]),e("td",{attrs:{colspan:"3"}},[t._v(t._s(t.detail.safe_Name))])]),e("tr",[e("th",[t._v("群創負責工程師")]),e("td",[t._v(t._s(t.detail.eng_Name))]),e("th",[t._v("電話")]),e("td",{attrs:{colspan:"3"}},[t._v(t._s(t.detail.eng_Ext_No))])]),e("tr",[e("th",[t._v("部門")]),e("td",{attrs:{colspan:"5"}},[t._v(t._s(t.detail.real_Dept_Name))])]),e("tr",[e("th",[t._v("工程生效日")]),t.detail.begin_Time?e("td",[t._v(t._s(t.detail.project_Begin_Date))]):t._e(),e("th",[t._v("工程截止日")]),t.detail.end_Time?e("td",[t._v(t._s(t.detail.project_End_Date))]):t._e(),e("th",[t._v("工程建立日")]),e("td",[t._v(t._s(t.detail.project_Create_Date))])]),e("tr",[e("th",[t._v("工程前安全會議紀錄")]),e("td",{attrs:{colspan:"5"}},[t.files&&t.files.length?e("a",{staticClass:"text-danger",attrs:{href:"#"},on:{click:function(e){return t.dailyWorkApplyDownloadPdf(t.files[0].file_Id,t.files[0].file_Name)}}},[t._v(" "+t._s(t.files[0].file_Name)+" ")]):t._e()])])])])])]),e("div",{staticClass:"table-view"},[e("div",{staticClass:"table-view-title"},[t._v("當日施工人員資料 (統計： "+t._s(t.person.length)+" 人數，超出 200 人數，上限有 "+t._s(t.person.length-200)+" 人數)")]),e("div",{staticClass:"table-responsive"},[e("table",{staticClass:"table table-bordered"},[t._m(0),e("tbody",t._l(t.person,(function(a){return e("tr",{key:a.id},[e("td",[t._v(t._s(a.p_Name))]),e("td",[t._v(t._s(a.sex))]),e("td",[t._v(t._s(a.country))]),e("td",[t._v(t._s(a.tel2?a.tel2:a.tel1))]),e("td",[t._v(t._s(a.urgent_Contact))]),e("td",[t._v(t._s(a.urgent_Tel))]),e("td",[t._v(t._s(a.s_Name))])])})),0)])])]),e("div",{staticClass:"table-view"},[e("div",{staticClass:"table-view-title"},[t._v("承包商基本資料")]),e("div",{staticClass:"table-responsive"},[e("table",{staticClass:"table table-bordered"},[t._m(1),e("tbody",t._l(t.supplier,(function(a,s){return e("tr",{key:s},[e("td",[t._v(t._s(a.s_Name))]),e("td",[t._v("主包")]),e("td",[t._v(t._s(a.tel))]),e("td",[t._v(t._s(a.admin_Name))]),e("td",[t._v(t._s(a.email))])])})),0)])])]),e("div",{staticClass:"table-view"},[e("div",{staticClass:"table-view-title"},[t._v("簽核歷程")]),e("div",{staticClass:"table-responsive"},[e("table",{staticClass:"table table-bordered"},[e("tbody",[e("tr",[e("th",[t._v("待簽核人員 (工號/分機/Mail)")]),e("td",t._l(t.signOff_Head,(function(a,s){return e("p",{key:s},[t._v(" "+t._s(a.name)+"("+t._s(a.processor_Empno)+"/ "+t._s(a.ext_No)+"/ "+t._s(a.e_Mail)+") ")])})),0)]),e("tr",[e("th",[t._v("待簽核節點")]),e("td",[t.signOff_Head&&t.signOff_Head.length>0?e("span",[t._v(" "+t._s(t.signOff_Head[0].act_Desc)+" ")]):t._e()])])])]),e("table",{staticClass:"table table-bordered"},[t._m(2),e("tbody",t._l(t.signOff_Detail,(function(a,s){return e("tr",{key:s},[e("td",[t._v(t._s(s+1))]),e("td",[t._v(t._s(a.act_Desc))]),e("td",[t._v(t._s(a.name)+"("+t._s(a.sr_Emp)+"/ "+t._s(a.ext_No)+"/ "+t._s(a.e_Mail)+")")]),e("td",[t._v(t._s(a.participants))]),e("td",[t._v(t._s(a.sr_Comment))]),e("td",[t._v(t._s(a.sr_Date))])])})),0)])])])],1)},_=[function(){var t=this,e=t._self._c;return e("thead",[e("tr",[e("th",[t._v("姓名")]),e("th",[t._v("性別")]),e("th",[t._v("國別")]),e("th",[t._v("電話")]),e("th",[t._v("緊急聯絡人")]),e("th",[t._v("聯絡人電話")]),e("th",[t._v("所屬廠商")])])])},function(){var t=this,e=t._self._c;return e("thead",[e("tr",[e("th",[t._v("公司名稱")]),e("th",[t._v("廠商型態")]),e("th",[t._v("電話")]),e("th",[t._v("駐廠聯絡人")]),e("th",[t._v("聯絡人 Email")])])])},function(){var t=this,e=t._self._c;return e("thead",[e("tr",[e("th",[t._v("項次")]),e("th",[t._v("簽核點")]),e("th",[t._v("簽核人員姓名(工號/分機/Mail)")]),e("th",[t._v("參與人員")]),e("th",[t._v("意見")]),e("th",[t._v("簽核時間")])])])}],i=a(4868),l={name:"viewDetailComponent",components:{HeaderComponent:i.Z},data(){return{detail:{},files:[],person:[],signOff_Detail:[],signOff_Head:[],supplier:[],workType:[]}},methods:{async getSignOffDetail(t){try{const e=await this.$store.dispatch("getSignOffDetail",t);if(e.data.isOK){const t=e.data.data;this.detail=t.detail,this.person=t.person||[],this.supplier=t.supplier,this.files=t.files,this.signOff_Head=t.signOff_Head,this.signOff_Detail=t.signOff_Detail,this.workType=t.workType}}catch(e){console.log(e)}},async dailyWorkApplyDownloadPdf(t,e){console.log(e);try{const a=await this.$store.dispatch("dailyWorkApplyDownloadPdf",t),s=URL.createObjectURL(a.data),_=document.createElement("a");_.href=s,_.setAttribute("download",`${e}`),document.body.appendChild(_),_.click(),document.body.removeChild(_),URL.revokeObjectURL(s)}catch(a){console.log(a)}}},mounted(){const t=this.$route.params.apply_Pk;this.getSignOffDetail(t),this.$store.commit("HEADER_HANDLER",!1),this.$store.commit("BREADCRUMB_HANDLER",!1),this.$root.$children[0].sidebarSwitch=!1}},r=l,n=a(1001),o=(0,n.Z)(r,s,_,!1,null,null,null),d=o.exports}}]);
//# sourceMappingURL=4955.52711ef947569671.js.map