"use strict";(self["webpackChunkinnolux"]=self["webpackChunkinnolux"]||[]).push([[9851],{4865:function(e,t,a){a.d(t,{Z:function(){return i}});var r=function(){var e=this,t=e._self._c;return t("div",{staticClass:"pagination"},[t("el-pagination",{attrs:{layout:"total, prev, pager, next, jumper",total:e.totalLength,"current-page":e.currentPage},on:{"current-change":e.changePage}})],1)},s=[],o={name:"pagination1-component",props:["totalLength"],computed:{currentPage(){return this.$store.state.currentPage}},methods:{changePage(e){this.$emit("changePageHandler",e)}},mounted(){}},l=o,n=a(1001),u=(0,n.Z)(l,r,s,!1,null,"86225bf4",null),i=u.exports},1919:function(e,t,a){a.d(t,{Z:function(){return i}});var r=function(){var e=this,t=e._self._c;return t("div",{staticClass:"table-responsive"},[t("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:e.data,"row-key":e.getRowKeys,"default-sort":{prop:"id",order:"ascending"},"empty-text":"查無資料","cell-class-name":e.rowStyleHandler,border:"","highlight-current-row":""},on:{"selection-change":e.selectChangeHandler}},[e._t("custom-selection"),e._t("custom-checkbox1"),e._t("custom-checkbox2"),e._l(e.tableColumns,(function(a,r){return t("el-table-column",{key:r,attrs:{prop:a.id,label:a.label,width:a.width,sortable:"date"===a.id},scopedSlots:e._u([{key:"default",fn:function(r){return["status"===a.id?t("el-tag",{attrs:{type:"簽核通過"===r.row.status||"審核通過"===r.row.status?"success":"拒絕申請"===r.row.status?"danger":"草稿"===r.row.status?"warning":"查無資料"}},[e._v(" "+e._s(r.row.status)+" ")]):"status_Id"===a.id?t("el-tag",{attrs:{type:"OPEN"===r.row.status_Id?"":"CLOSE"===r.row.status_Id?"danger":"FULL"===r.row.status_Id?"warning":"success"}},[e._v(" "+e._s(e.getCourseState(r.row.status_Id))+" ")]):"description2"===a.id?t("el-tag",{attrs:{type:"有效課程"===r.row.description?"":"danger"}},[e._v(" "+e._s(r.row.description)+" ")]):"approve_Status"===a.id?t("el-tag",{attrs:{type:"0"===r.row.approve_Status?"":"1"===r.row.approve_Status?"success":"danger"}},[e._v(" "+e._s(e.getApproveStatus(r.row.approve_Status))+" ")]):"approve_Status2"===a.id?t("el-tag",{attrs:{type:"審核中"===r.row.approve_Status2||"未審核"===r.row.approve_Status2?"":"審核完畢"===r.row.approve_Status2||"審核同意"===r.row.approve_Status2?"success":"danger"}},[e._v(" "+e._s(r.row.approve_Status2)+" ")]):"attend_Status"===a.id?t("el-tag",{attrs:{type:"0"===r.row.attend_Status?"":"1"===r.row.attend_Status?"success":"danger"}},[e._v(" "+e._s(e.getAttendStatus(r.row.attend_Status))+" ")]):"issue_Card"===a.id?t("el-tag",{attrs:{type:"0"===r.row.issue_Card?"":"1"===r.row.issue_Card?"success":"danger"}},[e._v(" "+e._s(e.getIssueCardStatus(r.row.issue_Card))+" ")]):"signUpStatus"===a.id?t("el-tag",{attrs:{type:"已結案"===e.signUpStatus(r.row.signUpStatus,r.row.approveStatus)?"success":"可取消報名"===e.signUpStatus(r.row.signUpStatus,r.row.approveStatus)?"danger":""}},[e._v(" "+e._s(e.signUpStatus(r.row.signUpStatus,r.row.approveStatus))+" ")]):"file_Name"===a.id||"d_File_Name"===a.id?t("a",{attrs:{href:"#"},on:{click:function(t){return e.downloadPdf(r.row)}}},[e._v(e._s(r.row[a.id]))]):"protocolInfo"===a.id?t("div",[t("div",[e._v(e._s(r.row.po_Name))]),e._l(r.row.files,(function(a){return t("div",[t("a",{attrs:{href:"#"},on:{click:function(t){return e.downloadPdf(a)}}},[e._v(e._s(a.file_Name))])])}))],2):"useable"===a.id&&"已刪除(廠商不可申請每日工單)"===r.row.useable?t("span",{staticStyle:{color:"red"}},[e._v(e._s(r.row.useable))]):"deleted"===a.id?t("span",{class:{"text-danger":"1"===r.row.deleted}},[e._v(" "+e._s(r.row.effect)+" ")]):"array_data"===a.id?t("span",e._l(r.row[a.id],(function(a,r){return t("p",{key:r,staticClass:"mb-0"},[e._v(e._s(a))])})),0):RegExp(/\n/).test(r.row[r.column.property])?t("span",{staticStyle:{"white-space":"pre-wrap"}},[e._v(" "+e._s(r.row[a.id])+" ")]):t("span",[e._v(e._s(r.row[a.id]))])]}}],null,!0)})})),e._t("custom-edit-select"),e._t("custom-switch"),e._t("custom-function"),e._t("slot-sheet-open")],2)],1)},s=[],o={name:"table-component",props:["data","tableColumns"],data(){return{api:this.apiUrl,loading:!0}},methods:{selectChangeHandler(e){this.$emit("selectionChange",e)},downloadPdf(e){const t=e.file_Id;this.$emit("downloadPdfHandler",t),this.$emit("downloadPdfHandler2",e)},getRowKeys(e){return e.index?e.index:e.id},rowStyleHandler(e){if("1"===e.row.isWeekend||"1"===e.row.isNight)return"fontColorBlue"}},mounted(){this.data&&(this.loading=!1)}},l=o,n=a(1001),u=(0,n.Z)(l,r,s,!1,null,"4a0f1604",null),i=u.exports},9851:function(e,t,a){a.r(t),a.d(t,{default:function(){return p}});var r=function(){var e=this,t=e._self._c;return t("div",[t("div",{staticClass:"wrapper"},[e._m(0),t("el-card",{staticClass:"mb-2",attrs:{shadow:"never"}},[t("el-form",{ref:"formQuery",attrs:{model:e.formQuery,rules:e.rulesQuery}},[t("el-row",{attrs:{gutter:20}},[t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{label:"承攬商入場施工群組",prop:"course"}},[t("el-select",{attrs:{"value-key":"courseID",placeholder:"請選擇"},model:{value:e.formQuery.course,callback:function(t){e.$set(e.formQuery,"course",t)},expression:"formQuery.course"}},e._l(e.courseList,(function(e,a){return t("el-option",{key:e.courseID,attrs:{label:e.courseName,value:e}})})),1)],1)],1),t("el-col",{attrs:{span:8}},[t("el-form-item",{attrs:{label:"申請單號",prop:"applyNumber"}},[t("el-input",{attrs:{placeholder:"請輸入"},model:{value:e.formQuery.applyNumber,callback:function(t){e.$set(e.formQuery,"applyNumber",t)},expression:"formQuery.applyNumber"}})],1)],1)],1),t("el-row",[t("el-col",{attrs:{span:12}},[t("el-button",{attrs:{size:"small",type:"primary"},on:{click:e.onQueryClick}},[e._v("查詢")])],1)],1)],1)],1),e.queryData&&0!=e.queryData.length?t("el-card",{staticClass:"mb-2",attrs:{shadow:"never"}},[t("div",{staticClass:"form form-container wrapper"},[e.selectedData&&e.selectedData.length?t("div",{staticClass:"d-flex align-items-center my-2 selected-box"},[t("span",[e._v("已選 "+e._s(e.selectedData.length)+" 項")])]):e._e(),t("TableComponent",{ref:"multipleTable",attrs:{data:e.queryData,tableColumns:e.tableColumns},on:{selectionChange:e.changeSelection},scopedSlots:e._u([{key:"custom-selection",fn:function(){return[t("el-table-column",{attrs:{type:"selection",width:"100","reserve-selection":!0}})]},proxy:!0}],null,!1,2350938447)}),t("PaginationComponent",{attrs:{totalLength:e.queryData.length},on:{changePageHandler:e.changePage}})],1)]):e._e(),e.selectedData&&0!=e.selectedData.length?t("el-card",{staticClass:"mb-1",attrs:{shadow:"never"}},[t("el-form",{ref:"formSend",attrs:{model:e.formSend,rules:e.rulesSend}},[t("el-row",[t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{label:"廠商施工負責人/安衛人員",prop:"course"}},[t("el-select",{attrs:{"value-key":"id",placeholder:"請選擇"},model:{value:e.formSend.changeSupervisor,callback:function(t){e.$set(e.formSend,"changeSupervisor",t)},expression:"formSend.changeSupervisor"}},e._l(e.supervisorList,(function(e,a){return t("el-option",{key:a,attrs:{label:e.pName+"("+e.pID+")",value:e}})})),1)],1)],1)],1)],1)],1):e._e(),e.selectedData&&0!=e.selectedData.length?t("el-card",{staticClass:"mb-1",attrs:{shadow:"never"}},[t("div",{staticClass:"mt-4"},[t("el-button",{attrs:{size:"small",type:"primary"},on:{click:e.submitForm}},[e._v("送出")])],1)]):e._e()],1)])},s=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"container mw-100 px-0"},[t("div",{staticClass:"d-flex align-items-center mb-4"},[t("div",{staticClass:"col"},[t("h2",{staticClass:"form-title mb-0"},[e._v("變更安衛與監工人員")])])])])}],o=(a(7658),a(1919)),l=a(4865),n={name:"change-component",components:{TableComponent:o.Z,PaginationComponent:l.Z},data(){return{selectedData:null,courseList:[{courseName:"台灣廠區承攬商入場危害告知課程/南科廠次",courseID:"0"},{courseName:"台灣廠區承攬商入場危害告知課程/新竹廠次",courseID:"1"},{courseName:"台灣廠區承攬商入場危害告知課程/台中廠次",courseID:"2"}],queryDataList:[{index:0,courseID:"0",applyNumber:"00003456789",project:{projectNo:"000000585423",projectName:"111年群創光電消防檢修工程",applyDate:"2022/01/19",workDate:"2022/02/01",workEndDate:"2023/01/31"},projectName:"000000585423/111年群創光電消防檢修工程",date:"2022/01/19 (2022/02/01 ~ 2023/01/31)",supervisor:{pName:"安全人員姓名",pID:"A1234567890"},supervisorName:"安全人員姓名(A1234567890)"},{index:1,courseID:"0",applyNumber:"00003456789",project:{projectNo:"000000585423",projectName:"111年群創光電消防檢修工程",applyDate:"2022/01/19",workDate:"2022/02/01",workEndDate:"2023/01/31"},projectName:"000000585423/111年群創光電消防檢修工程",date:"2022/01/19 (2022/02/01 ~ 2023/01/31)",supervisor:{pName:"安全人員姓名",pID:"A1234567890"},supervisorName:"安全人員姓名(A1234567890)"},{index:2,courseID:"0",applyNumber:"00003456789",project:{projectNo:"000000585423",projectName:"111年群創光電消防檢修工程",applyDate:"2022/01/19",workDate:"2022/02/01",workEndDate:"2023/01/31"},projectName:"000000585423/111年群創光電消防檢修工程",date:"2022/01/19 (2022/02/01 ~ 2023/01/31)",supervisor:{pName:"安全人員姓名",pID:"A1234567890"},supervisorName:"安全人員姓名(A1234567890)"},{index:3,courseID:"0",applyNumber:"00003456789",project:{projectNo:"000000585423",projectName:"111年群創光電消防檢修工程",applyDate:"2022/01/19",workDate:"2022/02/01",workEndDate:"2023/01/31"},projectName:"000000585423/111年群創光電消防檢修工程",date:"2022/01/19 (2022/02/01 ~ 2023/01/31)",supervisor:{pName:"安全人員姓名",pID:"A1234567890"},supervisorName:"安全人員姓名(A1234567890)"}],queryData:[],supervisorList:[{id:0,pName:"安全人員姓名",urgentTel:"0912345678",pID:"A1234567890"},{id:1,pName:"安全人員姓名",urgentTel:"0912345678",pID:"A1234567890"},{id:2,pName:"安全人員姓名",urgentTel:"0912345678",pID:"A1234567890"},{id:3,pName:"安全人員姓名",urgentTel:"0912345678",pID:"A1234567890"}],formQuery:{course:{},applyNumber:""},formSend:{selectedData:{},changeSupervisor:{}},rulesQuery:{course:[{required:!0,message:"必填",trigger:"change"}],applyNumber:[{required:!0,message:"必填",trigger:"change"}]},rulesSend:{changeSupervisor:[{required:!0,message:"必填",trigger:"change"}]},tableColumns:[{id:"applyNumber",label:"申請單號"},{id:"projectName",label:"工程編號/工程名稱",width:"250"},{id:"date",label:"建立日期(開始~結束日)"},{id:"supervisorName",label:"廠商施工負責人"}]}},computed:{dataList:{get(){var e=this;return e.queryDataList.filter((t=>t.courseID==e.formQuery.course.courseID&&""!=e.formQuery.applyNumber&&t.applyNumber.indexOf(e.formQuery.applyNumber)>=0))}}},methods:{changeSelection(e){var t=this;const a={selected:[]};a.selected.push(e),a.selected=a.selected.flat(),t.selectedData=a.selected},changePage(e){var t=this;t.$store.commit("CHANGE_PAGE_HANDLER",{page:e,paramsListName:"projectList",paramsDataName:"projectListData"})},onQueryClick(){var e=this;e.queryData=[],null!=e.formQuery.course.courseID?null!=e.formQuery.applyNumber&&""!=e.formQuery.applyNumber?(e.queryData=JSON.parse(JSON.stringify(e.dataList)),0!=e.queryData.length||e.$message({type:"warning",showClose:!0,message:"此條件查無資料!"})):e.$message({type:"warning",showClose:!0,message:"請輸入申請單號條件!"}):e.$message({type:"warning",showClose:!0,message:"請先選取承攬商入廠施工群組!"})},submitForm(){var e=this;null!=e.formSend.changeSupervisor.pID?(e.formSend.selectedData=e.selectedData,console.log("預計將發送的資料"),console.log(e.formSend),e.$message({type:"success",showClose:!0,message:"檢查完成，資料可以發送"})):e.$message({type:"warning",showClose:!0,message:"所選人員空白,請選擇人員!"})}},async mounted(){var e=this;e.$store.commit("HEADER_HANDLER",!0),e.$store.commit("BREADCRUMB_HANDLER",!0),e.$root.$children[0].sidebarSwitch=!0}},u=n,i=a(1001),c=(0,i.Z)(u,r,s,!1,null,"5706bd0a",null),p=c.exports}}]);
//# sourceMappingURL=9851.57f3db025e9fb9f0.js.map