"use strict";(self["webpackChunkinnolux"]=self["webpackChunkinnolux"]||[]).push([[7202],{4865:function(t,e,a){a.d(e,{Z:function(){return c}});var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"pagination"},[e("el-pagination",{attrs:{layout:"total, prev, pager, next, jumper",total:t.totalLength,"current-page":t.currentPage},on:{"current-change":t.changePage}})],1)},r=[],o={name:"pagination1-component",props:["totalLength"],computed:{currentPage(){return this.$store.state.currentPage}},methods:{changePage(t){this.$emit("changePageHandler",t)}},mounted(){}},n=o,i=a(1001),l=(0,i.Z)(n,s,r,!1,null,"86225bf4",null),c=l.exports},1919:function(t,e,a){a.d(e,{Z:function(){return c}});var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"table-responsive"},[e("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:t.data,"row-key":t.getRowKeys,"default-sort":{prop:"id",order:"ascending"},"empty-text":"查無資料","cell-class-name":t.rowStyleHandler,border:"","highlight-current-row":""},on:{"selection-change":t.selectChangeHandler}},[t._t("custom-selection"),t._t("custom-checkbox1"),t._t("custom-checkbox2"),t._l(t.tableColumns,(function(a,s){return e("el-table-column",{key:s,attrs:{prop:a.id,label:a.label,width:a.width,sortable:"date"===a.id},scopedSlots:t._u([{key:"default",fn:function(s){return["status"===a.id?e("el-tag",{attrs:{type:"簽核通過"===s.row.status||"審核通過"===s.row.status?"success":"拒絕申請"===s.row.status?"danger":"草稿"===s.row.status?"warning":"查無資料"}},[t._v(" "+t._s(s.row.status)+" ")]):"status_Id"===a.id?e("el-tag",{attrs:{type:"OPEN"===s.row.status_Id?"":"CLOSE"===s.row.status_Id?"danger":"FULL"===s.row.status_Id?"warning":"success"}},[t._v(" "+t._s(t.getCourseState(s.row.status_Id))+" ")]):"description2"===a.id?e("el-tag",{attrs:{type:"有效課程"===s.row.description?"":"danger"}},[t._v(" "+t._s(s.row.description)+" ")]):"approve_Status"===a.id?e("el-tag",{attrs:{type:"0"===s.row.approve_Status?"":"1"===s.row.approve_Status?"success":"danger"}},[t._v(" "+t._s(t.getApproveStatus(s.row.approve_Status))+" ")]):"approve_Status2"===a.id?e("el-tag",{attrs:{type:"審核中"===s.row.approve_Status2||"未審核"===s.row.approve_Status2?"":"審核完畢"===s.row.approve_Status2||"審核同意"===s.row.approve_Status2?"success":"danger"}},[t._v(" "+t._s(s.row.approve_Status2)+" ")]):"attend_Status"===a.id?e("el-tag",{attrs:{type:"0"===s.row.attend_Status?"":"1"===s.row.attend_Status?"success":"danger"}},[t._v(" "+t._s(t.getAttendStatus(s.row.attend_Status))+" ")]):"issue_Card"===a.id?e("el-tag",{attrs:{type:"0"===s.row.issue_Card?"":"1"===s.row.issue_Card?"success":"danger"}},[t._v(" "+t._s(t.getIssueCardStatus(s.row.issue_Card))+" ")]):"signUpStatus"===a.id?e("el-tag",{attrs:{type:"已結案"===t.signUpStatus(s.row.signUpStatus,s.row.approveStatus)?"success":"可取消報名"===t.signUpStatus(s.row.signUpStatus,s.row.approveStatus)?"danger":""}},[t._v(" "+t._s(t.signUpStatus(s.row.signUpStatus,s.row.approveStatus))+" ")]):"file_Name"===a.id||"d_File_Name"===a.id?e("a",{attrs:{href:"#"},on:{click:function(e){return t.downloadPdf(s.row)}}},[t._v(t._s(s.row[a.id]))]):"protocolInfo"===a.id?e("div",[e("div",[t._v(t._s(s.row.po_Name))]),t._l(s.row.files,(function(a){return e("div",[e("a",{attrs:{href:"#"},on:{click:function(e){return t.downloadPdf(a)}}},[t._v(t._s(a.file_Name))])])}))],2):"useable"===a.id&&"已刪除(廠商不可申請每日工單)"===s.row.useable?e("span",{staticStyle:{color:"red"}},[t._v(t._s(s.row.useable))]):"deleted"===a.id?e("span",{class:{"text-danger":"1"===s.row.deleted}},[t._v(" "+t._s(s.row.effect)+" ")]):"array_data"===a.id?e("span",t._l(s.row[a.id],(function(a,s){return e("p",{key:s,staticClass:"mb-0"},[t._v(t._s(a))])})),0):RegExp(/\n/).test(s.row[s.column.property])?e("span",{staticStyle:{"white-space":"pre-wrap"}},[t._v(" "+t._s(s.row[a.id])+" ")]):e("span",[t._v(t._s(s.row[a.id]))])]}}],null,!0)})})),t._t("custom-edit-select"),t._t("custom-switch"),t._t("custom-function"),t._t("slot-sheet-open")],2)],1)},r=[],o={name:"table-component",props:["data","tableColumns"],data(){return{api:this.apiUrl,loading:!0}},methods:{selectChangeHandler(t){this.$emit("selectionChange",t)},downloadPdf(t){const e=t.file_Id;this.$emit("downloadPdfHandler",e),this.$emit("downloadPdfHandler2",t)},getRowKeys(t){return t.index?t.index:t.id},rowStyleHandler(t){if("1"===t.row.isWeekend||"1"===t.row.isNight)return"fontColorBlue"}},mounted(){this.data&&(this.loading=!1)}},n=o,i=a(1001),l=(0,i.Z)(n,s,r,!1,null,"4a0f1604",null),c=l.exports},7202:function(t,e,a){a.r(e),a.d(e,{default:function(){return u}});var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"wrapper"},[e("el-button",{staticClass:"goBack",attrs:{type:"text"},on:{click:function(e){return t.goBack()}}},[e("i",{staticClass:"el-icon-back me-1"}),t._v("回上頁 ")]),e("h2",{staticClass:"form-title"},[t._v(t._s(t.$route.meta.breadcrumb[1].name))]),t.locationImg?e("div",{staticClass:"pic-container"},[e("img",{staticClass:"pic",attrs:{src:t.locationImg,alt:""}})]):t._e(),e("h2",{staticClass:"form-title mt-4"},[t._v("區域作業明細")]),e("el-form",{ref:"form",staticClass:"mb-4",attrs:{rules:t.rules,model:t.form}},[e("el-form-item",{staticClass:"mb-2",attrs:{label:"主區域/報到張數"}},[e("el-select",{attrs:{placeholder:"請選擇主區域",multiple:""},model:{value:t.form.area,callback:function(e){t.$set(t.form,"area",e)},expression:"form.area"}},t._l(t.options,(function(t,a){return e("el-option",{key:a,attrs:{label:t.floor+"/"+t.qty+"張",value:t.floor_Id}})})),1)],1),e("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(e){return t.searchDetail()}}},[t._v("查詢")])],1),e("div",{staticClass:"table-view"},[e("div",{staticClass:"table-responsive"},[e("table",{staticClass:"table table-bordered"},[t._m(0),e("tbody",t._l(t.mainAreaDetail,(function(a,s){return e("tr",{key:s},[e("td",[t._v(t._s(a.floor))]),e("td",t._l(a.detail,(function(a,s){return e("el-tag",{key:s,ref:"tag",refInFor:!0,staticClass:"me-2",on:{click:function(e){return t.tagHandleClick(e,a)}}},[t._v(t._s(a.work_Type_Name)+" "+t._s(a.qty))])})),1)])})),0)])])]),e("TableComponent",{attrs:{data:t.tableList,tableColumns:t.tableColumns}}),e("PaginationComponent",{attrs:{totalLength:t.tableData.length},on:{changePageHandler:t.changePage}})],1)},r=[function(){var t=this,e=t._self._c;return e("thead",[e("tr",[e("th",[t._v("主區域")]),e("th",[t._v("工種/數量")])])])}],o=a(1919),n=a(4865),i={name:"constructionAreaComponent",components:{TableComponent:o.Z,PaginationComponent:n.Z},data(){return{form:{area:[]},imgs:[],rules:{},tableColumns:[{id:"index",label:"項次",width:"70"},{id:"apply_Pk",label:"施工單號",width:"130"},{id:"supplier_Short_Name",label:"承攬商名稱",width:"130"},{id:"floor",label:"主區域",width:"130"},{id:"area_Name",label:"次區域",width:"130"},{id:"work_Type",label:"工種",width:"150"},{id:"work_Content",label:"施工內容",width:"130"},{id:"reg_Num",label:"施工人數",width:"130"}],data:{},options:[],mainAreaDetail:[],tableData:[],tableList:[]}},computed:{locationImg(){return this.$store.state.locationImg}},methods:{goBack(){this.$router.go(-1)},changePage(t){this.$store.state.currentPage=t;const e=10*(t-1),a=10*t;this.tableList=this.tableData.slice(e,a)},async tagHandleClick(t,e){const a={Work_Type_Pk:[e.work_Type_Pk],FloorId:[e.floor_Id],Location_Id:this.data.Location_Id,NorthOrSouth:this.data.NorthOrSouth},s=await this.$store.dispatch("constructionMgmQryMainCheckInWorkType",a);s.forEach(((t,e)=>{t.index=e+1,t.work_Type=`${t.work_Type_Pk}${t.work_Type_Name}`})),this.tableData=JSON.parse(JSON.stringify(s)),this.tableList=this.tableData.slice(0,10);const r=document.querySelectorAll(".el-tag");r.forEach((t=>t.classList.remove("active"))),t.target.classList.add("active")},async searchDetail(){const t={FloorId:this.form.area,Location_Id:this.data.Location_Id,NorthOrSouth:this.data.NorthOrSouth},e=await this.$store.dispatch("constructionMgmQryMainCheckInCountDetail",t);this.mainAreaDetail=e.data.data}},async mounted(){this.$store.commit("HEADER_HANDLER",!0),this.$store.commit("BREADCRUMB_HANDLER",!0),this.$root.$children[0].sidebarSwitch=!0,this.data=JSON.parse(this.$route.params.params),this.$route.meta.breadcrumb[1].name=this.data.description;const t=this.getURLNewParams(this.data),e=await this.$store.dispatch("constructionMgmQryMainCheckInCount",t);this.options=e.data.data}},l=i,c=a(1001),d=(0,c.Z)(l,s,r,!1,null,"e21608e4",null),u=d.exports}}]);
//# sourceMappingURL=7202.e072cedb94f352c8.js.map