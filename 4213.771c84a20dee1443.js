"use strict";(self["webpackChunkinnolux"]=self["webpackChunkinnolux"]||[]).push([[4213],{4865:function(t,e,s){s.d(e,{Z:function(){return c}});var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"pagination"},[e("el-pagination",{attrs:{layout:"total, prev, pager, next, jumper",total:t.totalLength,"current-page":t.currentPage},on:{"current-change":t.changePage}})],1)},r=[],o={name:"pagination1-component",props:["totalLength"],computed:{currentPage(){return this.$store.state.currentPage}},methods:{changePage(t){this.$emit("changePageHandler",t)}},mounted(){}},l=o,n=s(1001),i=(0,n.Z)(l,a,r,!1,null,"86225bf4",null),c=i.exports},1919:function(t,e,s){s.d(e,{Z:function(){return c}});var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"table-responsive"},[e("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:t.data,"row-key":t.getRowKeys,"default-sort":{prop:"id",order:"ascending"},"empty-text":"查無資料","cell-class-name":t.rowStyleHandler,border:"","highlight-current-row":""},on:{"selection-change":t.selectChangeHandler}},[t._t("custom-selection"),t._t("custom-checkbox1"),t._t("custom-checkbox2"),t._l(t.tableColumns,(function(s,a){return e("el-table-column",{key:a,attrs:{prop:s.id,label:s.label,width:s.width,sortable:"date"===s.id},scopedSlots:t._u([{key:"default",fn:function(a){return["status"===s.id?e("el-tag",{attrs:{type:"簽核通過"===a.row.status||"審核通過"===a.row.status?"success":"拒絕申請"===a.row.status?"danger":"草稿"===a.row.status?"warning":"查無資料"}},[t._v(" "+t._s(a.row.status)+" ")]):"status_Id"===s.id?e("el-tag",{attrs:{type:"OPEN"===a.row.status_Id?"":"CLOSE"===a.row.status_Id?"danger":"FULL"===a.row.status_Id?"warning":"success"}},[t._v(" "+t._s(t.getCourseState(a.row.status_Id))+" ")]):"description2"===s.id?e("el-tag",{attrs:{type:"有效課程"===a.row.description?"":"danger"}},[t._v(" "+t._s(a.row.description)+" ")]):"approve_Status"===s.id?e("el-tag",{attrs:{type:"0"===a.row.approve_Status?"":"1"===a.row.approve_Status?"success":"danger"}},[t._v(" "+t._s(t.getApproveStatus(a.row.approve_Status))+" ")]):"approve_Status2"===s.id?e("el-tag",{attrs:{type:"審核中"===a.row.approve_Status2||"未審核"===a.row.approve_Status2?"":"審核完畢"===a.row.approve_Status2||"審核同意"===a.row.approve_Status2?"success":"danger"}},[t._v(" "+t._s(a.row.approve_Status2)+" ")]):"attend_Status"===s.id?e("el-tag",{attrs:{type:"0"===a.row.attend_Status?"":"1"===a.row.attend_Status?"success":"danger"}},[t._v(" "+t._s(t.getAttendStatus(a.row.attend_Status))+" ")]):"issue_Card"===s.id?e("el-tag",{attrs:{type:"0"===a.row.issue_Card?"":"1"===a.row.issue_Card?"success":"danger"}},[t._v(" "+t._s(t.getIssueCardStatus(a.row.issue_Card))+" ")]):"signUpStatus"===s.id?e("el-tag",{attrs:{type:"已結案"===t.signUpStatus(a.row.signUpStatus,a.row.approveStatus)?"success":"可取消報名"===t.signUpStatus(a.row.signUpStatus,a.row.approveStatus)?"danger":""}},[t._v(" "+t._s(t.signUpStatus(a.row.signUpStatus,a.row.approveStatus))+" ")]):"file_Name"===s.id||"d_File_Name"===s.id?e("a",{attrs:{href:"#"},on:{click:function(e){return t.downloadPdf(a.row)}}},[t._v(t._s(a.row[s.id]))]):"protocolInfo"===s.id?e("div",[e("div",[t._v(t._s(a.row.po_Name))]),t._l(a.row.files,(function(s){return e("div",[e("a",{attrs:{href:"#"},on:{click:function(e){return t.downloadPdf(s)}}},[t._v(t._s(s.file_Name))])])}))],2):"useable"===s.id&&"已刪除(廠商不可申請每日工單)"===a.row.useable?e("span",{staticStyle:{color:"red"}},[t._v(t._s(a.row.useable))]):"deleted"===s.id?e("span",{class:{"text-danger":"1"===a.row.deleted}},[t._v(" "+t._s(a.row.effect)+" ")]):"array_data"===s.id?e("span",t._l(a.row[s.id],(function(s,a){return e("p",{key:a,staticClass:"mb-0"},[t._v(t._s(s))])})),0):RegExp(/\n/).test(a.row[a.column.property])?e("span",{staticStyle:{"white-space":"pre-wrap"}},[t._v(" "+t._s(a.row[s.id])+" ")]):e("span",[t._v(t._s(a.row[s.id]))])]}}],null,!0)})})),t._t("custom-edit-select"),t._t("custom-switch"),t._t("custom-function"),t._t("slot-sheet-open")],2)],1)},r=[],o={name:"table-component",props:["data","tableColumns"],data(){return{api:this.apiUrl,loading:!0}},methods:{selectChangeHandler(t){this.$emit("selectionChange",t)},downloadPdf(t){const e=t.file_Id;this.$emit("downloadPdfHandler",e),this.$emit("downloadPdfHandler2",t)},getRowKeys(t){return t.index?t.index:t.id},rowStyleHandler(t){if("1"===t.row.isWeekend||"1"===t.row.isNight)return"fontColorBlue"}},mounted(){this.data&&(this.loading=!1)}},l=o,n=s(1001),i=(0,n.Z)(l,a,r,!1,null,"4a0f1604",null),c=i.exports},4213:function(t,e,s){s.r(e),s.d(e,{default:function(){return u}});var a=function(){var t=this,e=t._self._c;return e("div",{directives:[{name:"loading",rawName:"v-loading.fullscreen.lock",value:this.$root.overlay,expression:"this.$root.overlay",modifiers:{fullscreen:!0,lock:!0}}],staticClass:"wrapper"},[e("h2",{staticClass:"form-title"},[t._v("新增 Blacklist")]),e("el-card",{staticClass:"mb-4",attrs:{shadow:"never"}},[e("el-form",{ref:"form",attrs:{model:t.form,rules:t.rules}},[e("el-row",[e("el-col",{attrs:{span:8}},[e("el-form-item",{attrs:{label:"身分證字號",prop:"blacklist_Id"}},[e("el-input",{attrs:{placeholder:"請輸入身分證字號"},model:{value:t.form.blacklist_Id,callback:function(e){t.$set(t.form,"blacklist_Id",e)},expression:"form.blacklist_Id"}})],1)],1)],1),e("el-row",[e("el-col",{attrs:{span:8}},[e("el-form-item",{attrs:{label:"姓名",prop:"name"}},[e("el-input",{attrs:{placeholder:"請輸入姓名"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1)],1)],1),e("el-row",[e("el-col",{attrs:{span:12}},[e("el-form-item",{attrs:{label:"原因",prop:"blacklist_Note"}},[e("el-input",{attrs:{type:"textarea",rows:3,placeholder:"請說明原因"},model:{value:t.form.blacklist_Note,callback:function(e){t.$set(t.form,"blacklist_Note",e)},expression:"form.blacklist_Note"}})],1)],1)],1),e("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(e){return t.addBlacklist("form")}}},[t._v("新增")])],1)],1),e("h2",{staticClass:"form-title"},[t._v("黑名單清單")]),e("TableComponent",{staticClass:"w-75",attrs:{data:t.blacklistList,tableColumns:t.blacklistTableColumns},scopedSlots:t._u([{key:"custom-function",fn:function(){return[e("el-table-column",{attrs:{prop:"function",label:"操作",fixed:"right",width:"150"},scopedSlots:t._u([{key:"default",fn:function(s){return[e("button",{staticClass:"btn btn-sm btn-secondary",on:{click:function(e){return t.delBlacklist(s.row)}}},[t._v("恢復")])]}}])})]},proxy:!0}])}),e("Pagination1",{attrs:{totalLength:t.blacklist.length},on:{changePageHandler:t.changePageHandler}})],1)},r=[],o=s(1919),l=s(4865),n={name:"blacklist-component",components:{TableComponent:o.Z,Pagination1:l.Z},data(){return{form:{blacklist_Id:"",name:"",blacklist_Note:"",create_Date:"",create_User:"",create_Name:""},rules:{blacklist_Id:[{required:!0,message:"必填",blur:"blur"},{len:10,message:"身分證長度應為10碼",blur:"blur"}],name:[{required:!0,message:"必填",blur:"blur"}]},blacklistTableColumns:[{id:"index",label:"項次",width:"75"},{id:"name",label:"姓名",width:"150"},{id:"blacklist_Id",label:"身份證字號",width:"200"},{id:"blacklist_Note",label:"原因",width:""}]}},computed:{blacklist(){return this.$store.state.blacklist},blacklistList(){return this.$store.state.blacklist_list}},methods:{addBlacklist(t){this.$refs[t].validate((async e=>{if(e)try{const e=await this.$store.dispatch("addBlacklist",this.form);e.data.isOK&&(this.$message({type:"success",duration:5e3,showClose:!0,message:"送出成功"}),this.$refs[t].resetFields(),this.$store.commit("CURRENT_PAGE_INIT"))}catch(s){console.log(s)}else this.$message({type:"error",showClose:!0,message:"資料填寫錯誤"})}))},async delBlacklist(t){try{const e=await this.$store.dispatch("delBlacklist",t);e.data.isOK&&(this.$message({type:"success",duration:5e3,showClose:!0,message:"修改成功"}),this.$store.commit("CURRENT_PAGE_INIT"))}catch(e){console.log(e)}},changePageHandler(t){this.$store.commit("CHANGE_PAGE_HANDLER",{page:t,paramsDataName:"blacklist",paramsListName:"blacklist_list"})}},async mounted(){this.$store.commit("HEADER_HANDLER",!0),this.$store.commit("BREADCRUMB_HANDLER",!0),this.$root.$children[0].sidebarSwitch=!0;try{await this.$store.dispatch("getBlacklist")}catch(t){console.log(t)}this.$store.commit("CURRENT_PAGE_INIT")}},i=n,c=s(1001),d=(0,c.Z)(i,a,r,!1,null,null,null),u=d.exports}}]);
//# sourceMappingURL=4213.771c84a20dee1443.js.map