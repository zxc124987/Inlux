"use strict";(self["webpackChunkinnolux"]=self["webpackChunkinnolux"]||[]).push([[7847],{4865:function(t,e,a){a.d(e,{Z:function(){return c}});var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"pagination"},[e("el-pagination",{attrs:{layout:"total, prev, pager, next, jumper",total:t.totalLength,"current-page":t.currentPage},on:{"current-change":t.changePage}})],1)},o=[],r={name:"pagination1-component",props:["totalLength"],computed:{currentPage(){return this.$store.state.currentPage}},methods:{changePage(t){this.$emit("changePageHandler",t)}},mounted(){}},i=r,n=a(1001),l=(0,n.Z)(i,s,o,!1,null,"86225bf4",null),c=l.exports},1919:function(t,e,a){a.d(e,{Z:function(){return c}});var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"table-responsive"},[e("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:t.data,"row-key":t.getRowKeys,"default-sort":{prop:"id",order:"ascending"},"empty-text":"查無資料","cell-class-name":t.rowStyleHandler,border:"","highlight-current-row":""},on:{"selection-change":t.selectChangeHandler}},[t._t("custom-selection"),t._t("custom-checkbox1"),t._t("custom-checkbox2"),t._l(t.tableColumns,(function(a,s){return e("el-table-column",{key:s,attrs:{prop:a.id,label:a.label,width:a.width,sortable:"date"===a.id},scopedSlots:t._u([{key:"default",fn:function(s){return["status"===a.id?e("el-tag",{attrs:{type:"簽核通過"===s.row.status||"審核通過"===s.row.status?"success":"拒絕申請"===s.row.status?"danger":"草稿"===s.row.status?"warning":"查無資料"}},[t._v(" "+t._s(s.row.status)+" ")]):"status_Id"===a.id?e("el-tag",{attrs:{type:"OPEN"===s.row.status_Id?"":"CLOSE"===s.row.status_Id?"danger":"FULL"===s.row.status_Id?"warning":"success"}},[t._v(" "+t._s(t.getCourseState(s.row.status_Id))+" ")]):"description2"===a.id?e("el-tag",{attrs:{type:"有效課程"===s.row.description?"":"danger"}},[t._v(" "+t._s(s.row.description)+" ")]):"approve_Status"===a.id?e("el-tag",{attrs:{type:"0"===s.row.approve_Status?"":"1"===s.row.approve_Status?"success":"danger"}},[t._v(" "+t._s(t.getApproveStatus(s.row.approve_Status))+" ")]):"approve_Status2"===a.id?e("el-tag",{attrs:{type:"審核中"===s.row.approve_Status2||"未審核"===s.row.approve_Status2?"":"審核完畢"===s.row.approve_Status2||"審核同意"===s.row.approve_Status2?"success":"danger"}},[t._v(" "+t._s(s.row.approve_Status2)+" ")]):"attend_Status"===a.id?e("el-tag",{attrs:{type:"0"===s.row.attend_Status?"":"1"===s.row.attend_Status?"success":"danger"}},[t._v(" "+t._s(t.getAttendStatus(s.row.attend_Status))+" ")]):"issue_Card"===a.id?e("el-tag",{attrs:{type:"0"===s.row.issue_Card?"":"1"===s.row.issue_Card?"success":"danger"}},[t._v(" "+t._s(t.getIssueCardStatus(s.row.issue_Card))+" ")]):"signUpStatus"===a.id?e("el-tag",{attrs:{type:"已結案"===t.signUpStatus(s.row.signUpStatus,s.row.approveStatus)?"success":"可取消報名"===t.signUpStatus(s.row.signUpStatus,s.row.approveStatus)?"danger":""}},[t._v(" "+t._s(t.signUpStatus(s.row.signUpStatus,s.row.approveStatus))+" ")]):"file_Name"===a.id||"d_File_Name"===a.id?e("a",{attrs:{href:"#"},on:{click:function(e){return t.downloadPdf(s.row)}}},[t._v(t._s(s.row[a.id]))]):"protocolInfo"===a.id?e("div",[e("div",[t._v(t._s(s.row.po_Name))]),t._l(s.row.files,(function(a){return e("div",[e("a",{attrs:{href:"#"},on:{click:function(e){return t.downloadPdf(a)}}},[t._v(t._s(a.file_Name))])])}))],2):"useable"===a.id&&"已刪除(廠商不可申請每日工單)"===s.row.useable?e("span",{staticStyle:{color:"red"}},[t._v(t._s(s.row.useable))]):"deleted"===a.id?e("span",{class:{"text-danger":"1"===s.row.deleted}},[t._v(" "+t._s(s.row.effect)+" ")]):"array_data"===a.id?e("span",t._l(s.row[a.id],(function(a,s){return e("p",{key:s,staticClass:"mb-0"},[t._v(t._s(a))])})),0):RegExp(/\n/).test(s.row[s.column.property])?e("span",{staticStyle:{"white-space":"pre-wrap"}},[t._v(" "+t._s(s.row[a.id])+" ")]):e("span",[t._v(t._s(s.row[a.id]))])]}}],null,!0)})})),t._t("custom-edit-select"),t._t("custom-switch"),t._t("custom-function"),t._t("slot-sheet-open")],2)],1)},o=[],r={name:"table-component",props:["data","tableColumns"],data(){return{api:this.apiUrl,loading:!0}},methods:{selectChangeHandler(t){this.$emit("selectionChange",t)},downloadPdf(t){const e=t.file_Id;this.$emit("downloadPdfHandler",e),this.$emit("downloadPdfHandler2",t)},getRowKeys(t){return t.index?t.index:t.id},rowStyleHandler(t){if("1"===t.row.isWeekend||"1"===t.row.isNight)return"fontColorBlue"}},mounted(){this.data&&(this.loading=!1)}},i=r,n=a(1001),l=(0,n.Z)(i,s,o,!1,null,"4a0f1604",null),c=l.exports},7847:function(t,e,a){a.r(e),a.d(e,{default:function(){return p}});var s=function(){var t=this,e=t._self._c;return e("div",{directives:[{name:"loading",rawName:"v-loading.fullscreen.lock",value:this.$root.overlay,expression:"this.$root.overlay",modifiers:{fullscreen:!0,lock:!0}}],staticClass:"wrapper"},[e("h2",{staticClass:"form-title"},[t._v("入退會申請審核")]),e("div",{staticClass:"mb-4",staticStyle:{"font-size":"16px"}},[t._v("協議組織申請待審核清單")]),e("TableComponent",{attrs:{data:t.tableList,tableColumns:t.tableColumns},on:{downloadPdfHandler2:t.downloadPdf},scopedSlots:t._u([{key:"custom-function",fn:function(){return[e("el-table-column",{staticClass:"function-column",attrs:{prop:"function",label:"操作",fixed:"right",width:"175"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("el-button",{attrs:{type:"success",size:"mini"},on:{click:function(e){return t.approveDialog(a.row)}}},[t._v("通過")]),e("el-button",{attrs:{type:"danger",size:"mini"},on:{click:function(e){return t.rejectDialog(a.row)}}},[t._v("退件")])]}}])})]},proxy:!0}])}),e("Pagination1",{attrs:{totalLength:t.tableData.length},on:{changePageHandler:t.changePage}}),e("el-dialog",{staticStyle:{top:"20vmin"},attrs:{title:"申請通過",visible:t.approveVisible,width:"30%","before-close":t.handleClose},on:{"update:visible":function(e){t.approveVisible=e}}},[e("p",[t._v("入退會申請通過")]),e("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[e("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(e){return t.approveCensor()}}},[t._v("確定")])],1)]),e("el-dialog",{staticStyle:{top:"15vmin"},attrs:{title:"退件說明",visible:t.rejectVisible,width:"40%","before-close":t.handleClose},on:{"update:visible":function(e){t.rejectVisible=e}}},[e("p",[t._v("確定將申請退件? 請填寫退件說明")]),e("el-input",{attrs:{type:"textarea",rows:4,placeholder:"請輸入內容"},model:{value:t.rejectReason,callback:function(e){t.rejectReason=e},expression:"rejectReason"}}),e("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[e("el-button",{attrs:{size:"small"},on:{click:function(e){t.rejectVisible=!1}}},[t._v("取消")]),e("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(e){return t.rejectCensor()}}},[t._v("確定")])],1)],1)],1)},o=[],r=(a(7658),a(1919)),i=a(4865),n=a(942),l={name:"joinQuitCensor-component",components:{TableComponent:r.Z,Pagination1:i.Z},data(){return{tableColumns:[{id:"index",label:"項次",width:"75"},{id:"period",label:"入會日期~退會日期",width:"150"},{id:"sInfo",label:"廠商統編",width:"150"},{id:"apply_Cateroy",label:"申請種類",width:"150"},{id:"protocolInfo",label:"組織名稱/附檔",width:"200"},{id:"apply_Date",label:"申請日期",width:"150"},{id:"authorization",label:"資格分類",width:"150"}],approveVisible:!1,approveItem:{},rejectVisible:!1,rejectItem:{},rejectReason:"",tableData:[],tableList:[]}},methods:{async getVertifyVendorList(){const t=await this.$store.dispatch("getOrgForCensor"),e=t.data.data;this.tableData=JSON.parse(JSON.stringify(e)),this.tableData.forEach(((t,e)=>{t.index=e+1,t.in_Date||t.out_Date?t.period=`${t.in_Date}~${t.out_Date}`:t.period="無",t.sInfo=`${t.s_Name} ${t.s_Id}`,t.protocolInfo="";let a=[];"Y"==t.f_Authorization&&a.push("主包"),"Y"==t.s_Authorization&&a.push("下包"),t.authorization=a.join(" ")})),this.tableList=this.tableData.slice(0,10)},async downloadPdf(t){console.log(t);const e=await this.$store.dispatch("commonDownloadPdf",{file_id:t.file_Id,router_Name:n.getProtocolArea}),a=URL.createObjectURL(e.data),s=document.createElement("a");s.href=a,s.setAttribute("download",`${t.file_Name}`),document.body.appendChild(s),s.click(),document.body.removeChild(s),URL.revokeObjectURL(a)},approveDialog(t){this.approveVisible=!0,this.approveItem=t},rejectDialog(t){this.rejectVisible=!0,this.rejectItem=t},handleClose(t){this.$confirm("確認關閉？").then((()=>{t()})).catch((()=>{}))},async approveCensor(){const t=await this.$store.dispatch("approveOrg",this.approveItem);t.data.isOK&&(this.$message({type:"success",duration:5e3,showClose:!0,message:"審核成功"}),this.getVertifyVendorList(),this.approveVisible=!1,this.$store.state.currentPage=1)},async rejectCensor(){if(this.rejectReason){this.rejectItem.remark=this.rejectReason;const t=await this.$store.dispatch("rejectOrg",this.rejectItem);t.data.isOK&&(this.$message({type:"success",duration:5e3,showClose:!0,message:"審核成功"}),this.getVertifyVendorList(),this.rejectVisible=!1,this.rejectReason="",this.$store.state.currentPage=1)}else this.$message({type:"error",showClose:!0,message:"請提供退件原因"})},changePage(t){this.$store.state.currentPage=t;const e=10*(t-1),a=10*t;this.tableList=this.tableData.slice(e,a)}},async mounted(){this.$store.commit("HEADER_HANDLER",!0),this.$store.commit("BREADCRUMB_HANDLER",!0),this.$root.$children[0].sidebarSwitch=!0,this.getVertifyVendorList(),this.$store.state.currentPage=1}},c=l,d=a(1001),u=(0,d.Z)(c,s,o,!1,null,null,null),p=u.exports}}]);
//# sourceMappingURL=7847.64c5c89f6d17b6cd.js.map