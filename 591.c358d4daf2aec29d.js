"use strict";(self["webpackChunkinnolux"]=self["webpackChunkinnolux"]||[]).push([[591],{4865:function(e,t,a){a.d(t,{Z:function(){return u}});var s=function(){var e=this,t=e._self._c;return t("div",{staticClass:"pagination"},[t("el-pagination",{attrs:{layout:"total, prev, pager, next, jumper",total:e.totalLength,"current-page":e.currentPage},on:{"current-change":e.changePage}})],1)},r=[],o={name:"pagination1-component",props:["totalLength"],computed:{currentPage(){return this.$store.state.currentPage}},methods:{changePage(e){this.$emit("changePageHandler",e)}},mounted(){}},i=o,n=a(1001),l=(0,n.Z)(i,s,r,!1,null,"86225bf4",null),u=l.exports},1919:function(e,t,a){a.d(t,{Z:function(){return u}});var s=function(){var e=this,t=e._self._c;return t("div",{staticClass:"table-responsive"},[t("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:e.data,"row-key":e.getRowKeys,"default-sort":{prop:"id",order:"ascending"},"empty-text":"查無資料","cell-class-name":e.rowStyleHandler,border:"","highlight-current-row":""},on:{"selection-change":e.selectChangeHandler}},[e._t("custom-selection"),e._t("custom-checkbox1"),e._t("custom-checkbox2"),e._l(e.tableColumns,(function(a,s){return t("el-table-column",{key:s,attrs:{prop:a.id,label:a.label,width:a.width,sortable:"date"===a.id},scopedSlots:e._u([{key:"default",fn:function(s){return["status"===a.id?t("el-tag",{attrs:{type:"簽核通過"===s.row.status||"審核通過"===s.row.status?"success":"拒絕申請"===s.row.status?"danger":"草稿"===s.row.status?"warning":"查無資料"}},[e._v(" "+e._s(s.row.status)+" ")]):"status_Id"===a.id?t("el-tag",{attrs:{type:"OPEN"===s.row.status_Id?"":"CLOSE"===s.row.status_Id?"danger":"FULL"===s.row.status_Id?"warning":"success"}},[e._v(" "+e._s(e.getCourseState(s.row.status_Id))+" ")]):"description2"===a.id?t("el-tag",{attrs:{type:"有效課程"===s.row.description?"":"danger"}},[e._v(" "+e._s(s.row.description)+" ")]):"approve_Status"===a.id?t("el-tag",{attrs:{type:"0"===s.row.approve_Status?"":"1"===s.row.approve_Status?"success":"danger"}},[e._v(" "+e._s(e.getApproveStatus(s.row.approve_Status))+" ")]):"approve_Status2"===a.id?t("el-tag",{attrs:{type:"審核中"===s.row.approve_Status2||"未審核"===s.row.approve_Status2?"":"審核完畢"===s.row.approve_Status2||"審核同意"===s.row.approve_Status2?"success":"danger"}},[e._v(" "+e._s(s.row.approve_Status2)+" ")]):"attend_Status"===a.id?t("el-tag",{attrs:{type:"0"===s.row.attend_Status?"":"1"===s.row.attend_Status?"success":"danger"}},[e._v(" "+e._s(e.getAttendStatus(s.row.attend_Status))+" ")]):"issue_Card"===a.id?t("el-tag",{attrs:{type:"0"===s.row.issue_Card?"":"1"===s.row.issue_Card?"success":"danger"}},[e._v(" "+e._s(e.getIssueCardStatus(s.row.issue_Card))+" ")]):"signUpStatus"===a.id?t("el-tag",{attrs:{type:"已結案"===e.signUpStatus(s.row.signUpStatus,s.row.approveStatus)?"success":"可取消報名"===e.signUpStatus(s.row.signUpStatus,s.row.approveStatus)?"danger":""}},[e._v(" "+e._s(e.signUpStatus(s.row.signUpStatus,s.row.approveStatus))+" ")]):"file_Name"===a.id||"d_File_Name"===a.id?t("a",{attrs:{href:"#"},on:{click:function(t){return e.downloadPdf(s.row)}}},[e._v(e._s(s.row[a.id]))]):"protocolInfo"===a.id?t("div",[t("div",[e._v(e._s(s.row.po_Name))]),e._l(s.row.files,(function(a){return t("div",[t("a",{attrs:{href:"#"},on:{click:function(t){return e.downloadPdf(a)}}},[e._v(e._s(a.file_Name))])])}))],2):"useable"===a.id&&"已刪除(廠商不可申請每日工單)"===s.row.useable?t("span",{staticStyle:{color:"red"}},[e._v(e._s(s.row.useable))]):"deleted"===a.id?t("span",{class:{"text-danger":"1"===s.row.deleted}},[e._v(" "+e._s(s.row.effect)+" ")]):"array_data"===a.id?t("span",e._l(s.row[a.id],(function(a,s){return t("p",{key:s,staticClass:"mb-0"},[e._v(e._s(a))])})),0):RegExp(/\n/).test(s.row[s.column.property])?t("span",{staticStyle:{"white-space":"pre-wrap"}},[e._v(" "+e._s(s.row[a.id])+" ")]):t("span",[e._v(e._s(s.row[a.id]))])]}}],null,!0)})})),e._t("custom-edit-select"),e._t("custom-switch"),e._t("custom-function"),e._t("slot-sheet-open")],2)],1)},r=[],o={name:"table-component",props:["data","tableColumns"],data(){return{api:this.apiUrl,loading:!0}},methods:{selectChangeHandler(e){this.$emit("selectionChange",e)},downloadPdf(e){const t=e.file_Id;this.$emit("downloadPdfHandler",t),this.$emit("downloadPdfHandler2",e)},getRowKeys(e){return e.index?e.index:e.id},rowStyleHandler(e){if("1"===e.row.isWeekend||"1"===e.row.isNight)return"fontColorBlue"}},mounted(){this.data&&(this.loading=!1)}},i=o,n=a(1001),l=(0,n.Z)(i,s,r,!1,null,"4a0f1604",null),u=l.exports},591:function(e,t,a){a.r(t),a.d(t,{default:function(){return c}});var s=function(){var e=this,t=e._self._c;return t("div",{directives:[{name:"loading",rawName:"v-loading.fullscreen.lock",value:this.$root.overlay,expression:"this.$root.overlay",modifiers:{fullscreen:!0,lock:!0}}],staticClass:"wrapper"},[t("el-button",{staticClass:"goBack",attrs:{type:"text"},on:{click:function(t){return e.goBack()}}},[t("i",{staticClass:"el-icon-back me-1"}),e._v("回上頁 ")]),t("h2",{staticClass:"form-title"},[e._v("查詢會員")]),t("el-card",{staticClass:"mb-4",attrs:{shadow:"never"}},[t("el-form",{ref:"queryForm",attrs:{model:e.queryForm}},[t("div",{staticClass:"form-group mb-3"},[t("label",{attrs:{for:""}},[e._v("當前協議組織：")]),t("span",[e._v(e._s(e.poName))])]),t("el-form-item",{attrs:{label:"承攬商編號",prop:"s_Id"}},[t("el-input",{model:{value:e.queryForm.s_Id,callback:function(t){e.$set(e.queryForm,"s_Id",t)},expression:"queryForm.s_Id"}})],1),t("el-form-item",{attrs:{label:"承攬商名稱",prop:"s_Name"}},[t("el-input",{model:{value:e.queryForm.s_Name,callback:function(t){e.$set(e.queryForm,"s_Name",t)},expression:"queryForm.s_Name"}})],1),t("div",{staticClass:"mt-4"},[t("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(t){return e.queryNotMember()}}},[e._v("查詢未加入會員")])],1)],1)],1),t("h2",{staticClass:"form-title"},[e._v("未加入會員清單")]),t("TableComponent",{ref:"TableComponent",attrs:{data:e.tableList,tableColumns:e.notYetMemberTableColumns},on:{selectionChange:e.changeSelection},scopedSlots:e._u([{key:"custom-selection",fn:function(){return[t("el-table-column",{attrs:{type:"selection",width:"100","reserve-selection":!0}})]},proxy:!0}])}),t("Pagination1",{staticClass:"mb-4",attrs:{totalLength:e.tableData.length},on:{changePageHandler:e.changePage}}),t("h2",{staticClass:"form-title"},[e._v("新增會員")]),t("el-card",{attrs:{shadow:"never"}},[t("el-form",{ref:"addForm",attrs:{model:e.addForm,rules:e.addRules}},[t("div",{staticClass:"form-group mb-3"},[t("label",{attrs:{for:""}},[e._v("已選承攬商：")]),e._l(e.selectedItem,(function(a,s){return e.selectedItem.length?t("span",{key:s},[e._v(e._s(e.selectedItemNames))]):e._e()}))],2),t("el-form-item",{attrs:{label:"資格",prop:"authorization"}},[t("el-checkbox-group",{model:{value:e.addForm.authorization,callback:function(t){e.$set(e.addForm,"authorization",t)},expression:"addForm.authorization"}},[t("el-checkbox",{attrs:{label:"F",value:"F"}},[e._v("主包")]),t("el-checkbox",{attrs:{label:"S",value:"S"}},[e._v("下包")])],1)],1),t("el-form-item",{attrs:{label:"組別",prop:"group"}},[t("el-checkbox",{attrs:{label:"1",value:"1",checked:"checked",disabled:""},model:{value:e.addForm.group,callback:function(t){e.$set(e.addForm,"group",t)},expression:"addForm.group"}},[e._v("一般承攬商")])],1),t("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(t){return e.addMember("addForm")}}},[e._v("新增會員")])],1)],1)],1)},r=[],o=a(1919),i=a(4865),n={name:"createMemberComponent",components:{TableComponent:o.Z,Pagination1:i.Z},data(){return{poId:"",poName:"",obj:{},selectedItem:[],selectedItemNames:[],rules:{group:[{required:!0,message:"必填",trigger:"change"}],qualifications:[{required:!0,message:"必填",trigger:"change"}]},queryForm:{s_Id:"",s_Name:""},notYetMemberTableColumns:[{id:"index",label:"項次",width:"70"},{id:"s_Id",label:"承攬商編號"},{id:"s_Name",label:"承攬商名稱"},{id:"tel",label:"電話"},{id:"key_Man",label:"公司負責人"}],addForm:{authorization:[],group:[]},addRules:{authorization:[{required:!0,message:"必填",trigger:"change"}],group:[{required:!0,message:"必填",trigger:"change"}]},tableData:[],tableList:[],work_Group:{}}},computed:{},methods:{goBack(){this.$router.go(-1)},async queryNotMember(){const e={PO_ID:this.poId,S_ID:this.queryForm.s_Id,S_NAME:this.queryForm.s_Name,IN_DATE1:null,IN_DATE2:null,OUT_DATE1:null,OUT_DATE2:null,F_AUTHORIZATION:null,S_AUTHORIZATION:null,ISWORK:null,ISNOTWORK:null};this.queryMember(e)},changeSelection(e){this.selectedItem=e,this.selectedItemNames=this.selectedItem.map((e=>e.s_Name)).join(", ")},changePage(e){this.$store.state.currentPage=e;const t=10*(e-1),a=10*e;this.tableList=this.tableData.slice(t,a)},async addMember(e){this.$refs[e].validate((async e=>{if(e){this.addForm.authorization.includes("F")?this.selectedItem.forEach((e=>e.f_Authorization="Y")):this.selectedItem.forEach((e=>e.f_Authorization=null)),this.addForm.authorization.includes("S")?this.selectedItem.forEach((e=>e.s_Authorization="Y")):this.selectedItem.forEach((e=>e.s_Authorization=null)),this.selectedItem.forEach((e=>{e.po_Id=this.poId,e.workGroup_Id=this.work_Group.workgroup_Id}));const e=await this.$store.dispatch("insMember",this.selectedItem);e.data.isOK&&(this.$message({type:"success",duration:5e3,showClose:!0,message:"新增成功"}),this.queryMember(this.obj),this.$refs.addForm.resetFields(),this.$store.commit("CURRENT_PAGE_INIT"),this.$refs.TableComponent.$refs.multipleTable.clearSelection())}else this.$message({type:"error",duration:5e3,showClose:!0,message:"資料填寫錯誤"})}))},async queryMember(e){const t=this.getURLNewParams(e),a=await this.$store.dispatch("queryMember",t),s=a.data.data;this.tableData=JSON.parse(JSON.stringify(s.notMembers)),this.tableData.forEach(((e,t)=>e.index=t+1)),this.tableList=this.tableData.slice(0,10),this.work_Group=s.work_Group}},async mounted(){this.$store.state.currentPage=1,this.poId=this.$route.params.po_Id,this.poName=this.$route.query.po_Name,this.obj={PO_ID:this.poId},this.queryMember(this.obj),this.$store.commit("HEADER_HANDLER",!0),this.$store.commit("BREADCRUMB_HANDLER",!0),this.$root.$children[0].sidebarSwitch=!0}},l=n,u=a(1001),d=(0,u.Z)(l,s,r,!1,null,null,null),c=d.exports}}]);
//# sourceMappingURL=591.c358d4daf2aec29d.js.map