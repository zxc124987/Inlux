"use strict";(self["webpackChunkinnolux"]=self["webpackChunkinnolux"]||[]).push([[5736],{4865:function(t,e,s){s.d(e,{Z:function(){return c}});var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"pagination"},[e("el-pagination",{attrs:{layout:"total, prev, pager, next, jumper",total:t.totalLength,"current-page":t.currentPage},on:{"current-change":t.changePage}})],1)},o=[],r={name:"pagination1-component",props:["totalLength"],computed:{currentPage(){return this.$store.state.currentPage}},methods:{changePage(t){this.$emit("changePageHandler",t)}},mounted(){}},n=r,l=s(1001),i=(0,l.Z)(n,a,o,!1,null,"86225bf4",null),c=i.exports},1919:function(t,e,s){s.d(e,{Z:function(){return c}});var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"table-responsive"},[e("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:t.data,"row-key":t.getRowKeys,"default-sort":{prop:"id",order:"ascending"},"empty-text":"查無資料","cell-class-name":t.rowStyleHandler,border:"","highlight-current-row":""},on:{"selection-change":t.selectChangeHandler}},[t._t("custom-selection"),t._t("custom-checkbox1"),t._t("custom-checkbox2"),t._l(t.tableColumns,(function(s,a){return e("el-table-column",{key:a,attrs:{prop:s.id,label:s.label,width:s.width,sortable:"date"===s.id},scopedSlots:t._u([{key:"default",fn:function(a){return["status"===s.id?e("el-tag",{attrs:{type:"簽核通過"===a.row.status||"審核通過"===a.row.status?"success":"拒絕申請"===a.row.status?"danger":"草稿"===a.row.status?"warning":"查無資料"}},[t._v(" "+t._s(a.row.status)+" ")]):"status_Id"===s.id?e("el-tag",{attrs:{type:"OPEN"===a.row.status_Id?"":"CLOSE"===a.row.status_Id?"danger":"FULL"===a.row.status_Id?"warning":"success"}},[t._v(" "+t._s(t.getCourseState(a.row.status_Id))+" ")]):"description2"===s.id?e("el-tag",{attrs:{type:"有效課程"===a.row.description?"":"danger"}},[t._v(" "+t._s(a.row.description)+" ")]):"approve_Status"===s.id?e("el-tag",{attrs:{type:"0"===a.row.approve_Status?"":"1"===a.row.approve_Status?"success":"danger"}},[t._v(" "+t._s(t.getApproveStatus(a.row.approve_Status))+" ")]):"approve_Status2"===s.id?e("el-tag",{attrs:{type:"審核中"===a.row.approve_Status2||"未審核"===a.row.approve_Status2?"":"審核完畢"===a.row.approve_Status2||"審核同意"===a.row.approve_Status2?"success":"danger"}},[t._v(" "+t._s(a.row.approve_Status2)+" ")]):"attend_Status"===s.id?e("el-tag",{attrs:{type:"0"===a.row.attend_Status?"":"1"===a.row.attend_Status?"success":"danger"}},[t._v(" "+t._s(t.getAttendStatus(a.row.attend_Status))+" ")]):"issue_Card"===s.id?e("el-tag",{attrs:{type:"0"===a.row.issue_Card?"":"1"===a.row.issue_Card?"success":"danger"}},[t._v(" "+t._s(t.getIssueCardStatus(a.row.issue_Card))+" ")]):"signUpStatus"===s.id?e("el-tag",{attrs:{type:"已結案"===t.signUpStatus(a.row.signUpStatus,a.row.approveStatus)?"success":"可取消報名"===t.signUpStatus(a.row.signUpStatus,a.row.approveStatus)?"danger":""}},[t._v(" "+t._s(t.signUpStatus(a.row.signUpStatus,a.row.approveStatus))+" ")]):"file_Name"===s.id||"d_File_Name"===s.id?e("a",{attrs:{href:"#"},on:{click:function(e){return t.downloadPdf(a.row)}}},[t._v(t._s(a.row[s.id]))]):"protocolInfo"===s.id?e("div",[e("div",[t._v(t._s(a.row.po_Name))]),t._l(a.row.files,(function(s){return e("div",[e("a",{attrs:{href:"#"},on:{click:function(e){return t.downloadPdf(s)}}},[t._v(t._s(s.file_Name))])])}))],2):"useable"===s.id&&"已刪除(廠商不可申請每日工單)"===a.row.useable?e("span",{staticStyle:{color:"red"}},[t._v(t._s(a.row.useable))]):"deleted"===s.id?e("span",{class:{"text-danger":"1"===a.row.deleted}},[t._v(" "+t._s(a.row.effect)+" ")]):"array_data"===s.id?e("span",t._l(a.row[s.id],(function(s,a){return e("p",{key:a,staticClass:"mb-0"},[t._v(t._s(s))])})),0):RegExp(/\n/).test(a.row[a.column.property])?e("span",{staticStyle:{"white-space":"pre-wrap"}},[t._v(" "+t._s(a.row[s.id])+" ")]):e("span",[t._v(t._s(a.row[s.id]))])]}}],null,!0)})})),t._t("custom-edit-select"),t._t("custom-switch"),t._t("custom-function"),t._t("slot-sheet-open")],2)],1)},o=[],r={name:"table-component",props:["data","tableColumns"],data(){return{api:this.apiUrl,loading:!0}},methods:{selectChangeHandler(t){this.$emit("selectionChange",t)},downloadPdf(t){const e=t.file_Id;this.$emit("downloadPdfHandler",e),this.$emit("downloadPdfHandler2",t)},getRowKeys(t){return t.index?t.index:t.id},rowStyleHandler(t){if("1"===t.row.isWeekend||"1"===t.row.isNight)return"fontColorBlue"}},mounted(){this.data&&(this.loading=!1)}},n=r,l=s(1001),i=(0,l.Z)(n,a,o,!1,null,"4a0f1604",null),c=i.exports},5736:function(t,e,s){s.r(e),s.d(e,{default:function(){return d}});var a=function(){var t=this,e=t._self._c;return e("div",{directives:[{name:"loading",rawName:"v-loading.fullscreen.lock",value:this.$root.overlay,expression:"this.$root.overlay",modifiers:{fullscreen:!0,lock:!0}}],staticClass:"wrapper"},[e("el-button",{staticClass:"goBack",attrs:{type:"text"},on:{click:function(e){return t.goBack()}}},[e("i",{staticClass:"el-icon-back me-1"}),t._v("回上頁 ")]),e("div",{staticClass:"px-3"},[e("h2",{staticClass:"form-title mt-2"},[t._v("狀態修改")]),e("div",{staticClass:"table-view"},[e("div",{staticClass:"table-responsive"},[e("table",{staticClass:"table table-bordered"},[e("tbody",[e("tr",[e("th",[t._v("課表編號")]),e("td",{staticStyle:{width:"40%"}},[t._v(t._s(t.form.schedule_No))]),e("th",[t._v("課程清單")]),e("td",[t._v(t._s(t.form.course_No))])]),e("tr",[e("th",[t._v("課程名稱")]),e("td",[t._v(t._s(t.form.course_Name))]),e("th",[t._v("教室地點")]),e("td",[t._v(t._s(t.form.room_No))])]),e("tr",[e("th",[t._v("課表日期")]),e("td",[t._v(t._s(t.form.available_Begin_Date)+" ~ "+t._s(t.form.available_End_Date))]),e("th",[t._v("最大開課人數上限")]),e("td",[t._v(t._s(t.form.min_Audience))])]),e("tr",[e("th",[t._v("上課時間")]),e("td",[t._v(t._s(t.form.begin_Time)+" ~ "+t._s(t.form.end_Time))]),e("th",[t._v("課程型態")]),e("td",[t._v(t._s(t.form.repeat_Code_Desc))])])])])])]),e("TableComponent",{staticClass:"w-75",attrs:{data:t.lectureList,tableColumns:t.lectureTableColumns},scopedSlots:t._u([{key:"custom-edit-select",fn:function(){return[e("el-table-column",{staticClass:"function-edit-select",attrs:{prop:"edit-select",label:"修改",fixed:"right"},scopedSlots:t._u([{key:"default",fn:function(s){return[e("el-select",{attrs:{placeholder:"請選擇"},model:{value:s.row.editSelect,callback:function(e){t.$set(s.row,"editSelect",e)},expression:"scope.row.editSelect"}},[e("el-option",{key:"OPEN",attrs:{label:"開放選課",value:"OPEN"}}),e("el-option",{key:"STOP",attrs:{label:"不開課",value:"STOP"}}),e("el-option",{key:"CLOSE",attrs:{label:"上課結束",value:"CLOSE"}})],1)]}}])})]},proxy:!0},{key:"custom-function",fn:function(){return[e("el-table-column",{staticClass:"function-column",attrs:{prop:"function",label:"儲存",fixed:"right",width:"150"},scopedSlots:t._u([{key:"default",fn:function(s){return[e("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"儲存",placement:"top-start"}},[e("el-button",{attrs:{type:"text"},on:{click:function(e){return t.saveList(s.row)}}},[e("i",{staticClass:"el-icon-document-checked"})])],1)]}}])})]},proxy:!0}])}),e("Pagination1",{attrs:{totalLength:t.lecture.length},on:{changePageHandler:t.changePageHandler}})],1)],1)},o=[],r=s(1919),n=s(4865),l={name:"scheduleStatusEdit-component",components:{TableComponent:r.Z,Pagination1:n.Z},data(){return{form:{},lectureTableColumns:[{id:"index",label:"項次",width:"75"},{id:"class_date",label:"上課日期"},{id:"status_Id",label:"目前課表狀態"}]}},computed:{lecture(){return this.$store.state.lecture},lectureList(){return this.$store.state.lecture_list}},methods:{goBack(){this.$router.go(-1)},async saveList(t){let e={schedule_No:t.schedule_No,status_Id:t.editSelect,class_Date:t.class_Date};try{const s=await this.$store.dispatch("updScheduleStatus",e);s.data.isOK&&(this.$message({type:"success",duration:5e3,showClose:!0,message:"儲存成功"}),t.status_Id=t.editSelect,t.editSelect="")}catch(s){console.log(s)}},changePageHandler(t){this.$store.commit("CHANGE_PAGE_HANDLER",{page:t,paramsDataName:"lecture",paramsListName:"lecture_list"})}},mounted(){this.$store.commit("HEADER_HANDLER",!0),this.$store.commit("BREADCRUMB_HANDLER",!0),this.$root.$children[0].sidebarSwitch=!0;let t=JSON.parse(this.$route.query.data);this.form=t,this.$store.commit("GET_STATUS_DATA",t)}},i=l,c=s(1001),u=(0,c.Z)(i,a,o,!1,null,null,null),d=u.exports}}]);
//# sourceMappingURL=5736.9417d270353a8b49.js.map