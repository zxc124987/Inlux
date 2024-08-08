"use strict";(self["webpackChunkinnolux"]=self["webpackChunkinnolux"]||[]).push([[221],{4868:function(t,e,a){a.d(e,{Z:function(){return o}});var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"header1"},[e("nav",{staticClass:"nav"},[t._m(0),e("div",{staticClass:"logo-text"},[t._v("群創光電"),e("span",{staticClass:"ms-2 headerText"},[t._v(t._s(t.headerText))])]),t.showPrint?e("div",{staticClass:"print text-end ms-auto"},[e("form",[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[t._v("Print by :")]),e("span",[t._v(t._s(t.printBy))])]),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[t._v("Print Time：")]),e("span",[t._v(t._s(t.nowDate))])])])]):t._e()])])},i=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"logo"},[e("img",{attrs:{src:a(6086),alt:"logo"}})])}],l={name:"header1-component",props:{headerText:{type:String,default:"工程申請單"},showPrint:{type:Boolean,default:!1},printData:{type:Object},printBy:{type:String}},data(){return{nowDate:this.formatDate(new Date)}},methods:{formatDate(t){var e=new Date(t),a=""+(e.getMonth()+1),s=""+e.getDate(),i=e.getFullYear();return a.length<2&&(a="0"+a),s.length<2&&(s="0"+s),[i,a,s].join("-")}},mounted(){}},r=l,_=a(1001),d=(0,_.Z)(r,s,i,!1,null,"23cc3008",null),o=d.exports},221:function(t,e,a){a.r(e),a.d(e,{default:function(){return n}});var s=function(){var t=this,e=t._self._c;return e("div",{directives:[{name:"loading",rawName:"v-loading.fullscreen.lock",value:this.$root.overlay,expression:"this.$root.overlay",modifiers:{fullscreen:!0,lock:!0}}],staticClass:"openOtherPage"},[e("HeaderComponent",{staticClass:"pt-0",attrs:{headerText:"",showPrint:!0,printBy:t.detail.empName}}),e("div",{staticClass:"view-title text-center mb-4"},[t._v("群創光電 每日工作許可單 "),e("span",{staticClass:"approved",class:{"el-text-success":"DONE"===t.detail.status,"el-text-danger":"DONE"!==t.detail.status},staticStyle:{"font-size":"24px","font-weight":"500"}},[t._v("("+t._s("APPROVE"===t.detail.status||"CLOSE"===t.detail.status||"DONE"===t.detail.status?"已核准":"未核准")+")")])]),e("el-row",{staticClass:"my-2"},[e("el-col",{staticClass:"text-start",attrs:{span:8}},[e("div",{staticClass:"factory"},[e("form",[e("div",{staticClass:"form-group"},[e("label",[t._v("廠商名稱：")]),e("span",[t._v(t._s(t.detail.s_Name))])]),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[t._v("施工負責人 / 安衛人員：")]),e("span",[t._v(t._s(t.detail.duty_Name)+"("+t._s(t.detail.duty_Supplier_Name)+")")])])])])]),e("el-col",{staticClass:"text-center",attrs:{span:8}},[e("div",{staticClass:"urgent-phone"},[e("form",[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[t._v("緊急聯絡電話：")]),e("span",[t._v(t._s(t.detail.tel))])]),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[t._v("施工負責人 / 安衛人員代理：")]),e("span",[t._v(t._s(t.detail.safe_Name)+"("+t._s(t.detail.safe_Supplier_Name)+")")])])])])]),e("el-col",{staticClass:"text-end",attrs:{span:8}},[e("div",{staticClass:"engineering"},[e("form",{attrs:{action:""}},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[t._v("工程單編號：")]),e("span",[t._v(t._s(t.detail.project_No))])])]),e("form",{attrs:{action:""}},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[t._v("施工單編號：")]),e("span",[t._v(t._s(t.detail.apply_Pk))])])])])])],1),e("div",{staticClass:"table-view mb-0"},[e("div",{staticClass:"table-responsive mb-0"},[e("table",{staticClass:"table table-bordered"},[t._m(0),e("tbody",[e("tr",[t.detail.begin_Time&&t.detail.end_Time?e("td",{attrs:{rowspan:"3"}},[t._v(t._s(t.detail.work_Date)+"("+t._s(t.detail.begin_Time.split(" ")[0])+" ~ "+t._s(t.detail.end_Time.split(" ")[0])+")")]):t._e(),e("td",{attrs:{rowspan:"3"}},[t._v(" "+t._s(t.detail.ld2)+"/"+t._s(t.detail.ld2e)+"/"+t._s(t.detail.ld4)+"/ "+t._s(t.detail.ld3)+"/"+t._s(t.detail.floor)+"/"+t._s(t.detail.area_Name)+" "),""!==(t.detail.fab_Entrance_Id??"")?e("p",{staticClass:"mt-3 mb-0"},[t._v("管制口：["+t._s(t.detail.fab_Entrance_Id)+"]")]):t._e()]),e("td",{attrs:{colspan:"3"}},[t._v("工程師簽名")]),e("td",{attrs:{rowspan:"2"}},[t._v("直屬主管核准")]),e("td",{attrs:{rowspan:"2"}},[t._v("作業區域負責主管")]),e("td",{attrs:{rowspan:"2"}},[t._v("區域工安/工安幹事")]),e("td",{attrs:{rowspan:"2"}},[t._v("環安單位人員")]),e("td",{attrs:{rowspan:"2"}},[t._v("防災中心/廠務")]),e("td",{attrs:{rowspan:"2"}},[t._v("廠(處)長")])]),t._m(1),e("tr",[e("td",[t._v(t._s(t.detail.t100))]),e("td"),e("td",[t._v(t._s(t.detail.retired_Date))]),e("td",[t._v(t._s(t.detail.t101))]),e("td",[t._v(t._s(t.detail.t103))]),e("td"),e("td",[t._v(t._s(t.detail.t102))]),e("td",[t._v(t._s(t.detail.t104))]),e("td",[t._v("("+t._s(0===t.workTime.isWeekend?"非假":"假日")+"/"+t._s(0===t.workTime.isNight?"日":"夜")+")"),e("br"),t._v(" "+t._s(t.detail.t105))])])])])])]),e("div",{staticClass:"table-view pt-0"},[e("div",{staticClass:"table-responsive"},[e("table",{staticClass:"table table-bordered"},[e("tbody",[e("tr",[e("th",[t._v("相關知會")]),e("td",[t._v(t._s(t.aboutPeople))])]),e("tr",[e("th",[t._v("施工內容")]),e("td",[t._v(t._s(t.detail.work_Content))])]),e("tr",[e("th",[t._v("工作人員(含下包，共 "+t._s(t.people.length)+" 人)")]),e("td",[""!==(t.detail.fab_Entrance_Id??"")?e("p",{staticClass:"mb-2"},[t._v(" 姓名(公司名/無塵室工作證) ")]):e("p",[t._v("姓名(公司名)")]),e("span",[t._v(t._s(t.workPeople))])])]),e("tr",[e("th",[t._v("※高風險作業種類")]),e("td",{staticClass:"text-danger"},[t._v(t._s(t.workType))])])])])])]),"NEW"!==t.detail.statue||"APPROVE"!==t.detail.statue||"CLOSE"!==t.detail.statue?e("div",{staticClass:"table-view"},[e("div",{staticClass:"table-view-title"},[t._v("Detail")]),e("div",{staticClass:"table-responsive"},[e("table",{staticClass:"table table-bordered"},[e("tbody",[e("tr",[e("th",[t._v("工程狀態(Notes No/Commemt/Date)")]),e("td",[t._v(t._s(t.convertStatus(t.detail.status)))])]),e("tr",[e("th",[t._v("工程編號/工程名稱")]),e("td",[t._v(t._s(t.detail.project_No)+"/"+t._s(t.detail.project_Name))])]),e("tr",[e("th",[t._v("詳述區域")]),e("td",[t._v(t._s(t.detail.ld2)+"/"+t._s(t.detail.ld2e)+"/"+t._s(t.detail.ld4)+"/"+t._s(t.detail.ld3)+"/"+t._s(t.detail.floor))])]),e("tr",[e("th",[t._v("工作區域")]),e("td",[t._v(t._s(t.detail.area_Name))])]),e("tr",[e("th",[t._v("施工負責人/安衛人員")]),e("td",[t._v(t._s(t.detail.duty_Name)+"("+t._s(t.detail.duty_Supplier_Name)+")")])]),e("tr",[e("th",[t._v("施工負責人代理")]),e("td",[t._v(t._s(t.detail.safe_Name)+"("+t._s(t.detail.safe_Supplier_Name)+")")])]),e("tr",[e("th",[t._v("施工日期")]),e("td",[t._v(t._s(t.detail.work_Date))])]),e("tr",[e("th",[t._v("施工開始時間(from:)")]),e("td",[t._v(t._s(t.detail.begin_Work_Time))])]),e("tr",[e("th",[t._v("施工結束時間(to:)")]),e("td",[t._v(t._s(t.detail.end_Work_Time))])]),e("tr",[e("th",[t._v("工作內容")]),e("td",[t._v(t._s(t.detail.work_Content))])]),e("tr",[e("th",[t._v("特殊工種名稱")]),e("td",[t._v(t._s("0"===t.detail.work_Type_Normal?"一般作業":"高風險作業"))])]),e("tr",[e("th",[t._v("施工人員")]),e("td",[t._v(t._s(t.workPeople))])])])])])]):t._e()],1)},i=[function(){var t=this,e=t._self._c;return e("thead",[e("tr",[e("th",[t._v("施工日期時間")]),e("th",[t._v("詳述工作地點")]),e("th",{attrs:{colspan:"4"}},[t._v("施工單位")]),e("th",{attrs:{colspan:"2"}},[t._v("施工區域")]),e("th",{attrs:{colspan:"2"}},[t._v("環安與安全系統負責單位")]),e("th",[t._v("假日 / 夜間")])])])},function(){var t=this,e=t._self._c;return e("tr",[e("td",[t._v("核准簽名")]),e("td",[t._v("巡檢簽名")]),e("td",[t._v("完工簽名")])])}],l=a(4868),r={name:"viewComponent",components:{HeaderComponent:l.Z},data(){return{listData:{},detail:{},insurance:null,pdfs:null,people:[],workPeople:"",workTime:{},workType:[],aboutPeople:[]}},computed:{},methods:{async getEveryDayDetail(t){try{const e=await this.$store.dispatch("getEveryDayDetail",t);if(e.data.isOK){const t=e.data.data;this.detail=t.detail,this.detail.aboutPeople&&(this.aboutPeople=this.detail.aboutPeople.map((t=>t.name)).join()),this.detail.begin_Work_Time=t.detail.begin_Time.split(" ")[1],this.detail.end_Work_Time=t.detail.end_Time.split(" ")[1],this.insurance=t.insurance,this.pdfs=t.pdfs,this.people=t.people||[],""!==(this.detail.fab_Entrance_Id??"")?this.workPeople=t.people.map((t=>`${t.p_Name}(${t.short_Name}/ ${null===t.card_Id?"無":t.card_Id})`)).join():this.workPeople=t.people.map((t=>`${t.p_Name}(${t.short_Name})`)).join(),this.workTime=t.workTime,this.workType=t.workType.map((t=>t.wtn)).join(", "),console.log(t)}}catch(e){console.log(e)}}},mounted(){this.listData=JSON.parse(this.$route.query.data),this.getEveryDayDetail(this.listData.apply_Pk),this.$store.commit("HEADER_HANDLER",!1),this.$store.commit("BREADCRUMB_HANDLER",!1),this.$root.$children[0].sidebarSwitch=!1}},_=r,d=a(1001),o=(0,d.Z)(_,s,i,!1,null,null,null),n=o.exports}}]);
//# sourceMappingURL=221.28ec059bc644d4c8.js.map