"use strict";(self["webpackChunkinnolux"]=self["webpackChunkinnolux"]||[]).push([[47],{4865:function(t,e,a){a.d(e,{Z:function(){return d}});var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"pagination"},[e("el-pagination",{attrs:{layout:"total, prev, pager, next, jumper",total:t.totalLength,"current-page":t.currentPage},on:{"current-change":t.changePage}})],1)},o=[],r={name:"pagination1-component",props:["totalLength"],computed:{currentPage(){return this.$store.state.currentPage}},methods:{changePage(t){this.$emit("changePageHandler",t)}},mounted(){}},l=r,n=a(1001),i=(0,n.Z)(l,s,o,!1,null,"86225bf4",null),d=i.exports},1919:function(t,e,a){a.d(e,{Z:function(){return d}});var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"table-responsive"},[e("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:t.data,"row-key":t.getRowKeys,"default-sort":{prop:"id",order:"ascending"},"empty-text":"查無資料","cell-class-name":t.rowStyleHandler,border:"","highlight-current-row":""},on:{"selection-change":t.selectChangeHandler}},[t._t("custom-selection"),t._t("custom-checkbox1"),t._t("custom-checkbox2"),t._l(t.tableColumns,(function(a,s){return e("el-table-column",{key:s,attrs:{prop:a.id,label:a.label,width:a.width,sortable:"date"===a.id},scopedSlots:t._u([{key:"default",fn:function(s){return["status"===a.id?e("el-tag",{attrs:{type:"簽核通過"===s.row.status||"審核通過"===s.row.status?"success":"拒絕申請"===s.row.status?"danger":"草稿"===s.row.status?"warning":"查無資料"}},[t._v(" "+t._s(s.row.status)+" ")]):"status_Id"===a.id?e("el-tag",{attrs:{type:"OPEN"===s.row.status_Id?"":"CLOSE"===s.row.status_Id?"danger":"FULL"===s.row.status_Id?"warning":"success"}},[t._v(" "+t._s(t.getCourseState(s.row.status_Id))+" ")]):"description2"===a.id?e("el-tag",{attrs:{type:"有效課程"===s.row.description?"":"danger"}},[t._v(" "+t._s(s.row.description)+" ")]):"approve_Status"===a.id?e("el-tag",{attrs:{type:"0"===s.row.approve_Status?"":"1"===s.row.approve_Status?"success":"danger"}},[t._v(" "+t._s(t.getApproveStatus(s.row.approve_Status))+" ")]):"approve_Status2"===a.id?e("el-tag",{attrs:{type:"審核中"===s.row.approve_Status2||"未審核"===s.row.approve_Status2?"":"審核完畢"===s.row.approve_Status2||"審核同意"===s.row.approve_Status2?"success":"danger"}},[t._v(" "+t._s(s.row.approve_Status2)+" ")]):"attend_Status"===a.id?e("el-tag",{attrs:{type:"0"===s.row.attend_Status?"":"1"===s.row.attend_Status?"success":"danger"}},[t._v(" "+t._s(t.getAttendStatus(s.row.attend_Status))+" ")]):"issue_Card"===a.id?e("el-tag",{attrs:{type:"0"===s.row.issue_Card?"":"1"===s.row.issue_Card?"success":"danger"}},[t._v(" "+t._s(t.getIssueCardStatus(s.row.issue_Card))+" ")]):"signUpStatus"===a.id?e("el-tag",{attrs:{type:"已結案"===t.signUpStatus(s.row.signUpStatus,s.row.approveStatus)?"success":"可取消報名"===t.signUpStatus(s.row.signUpStatus,s.row.approveStatus)?"danger":""}},[t._v(" "+t._s(t.signUpStatus(s.row.signUpStatus,s.row.approveStatus))+" ")]):"file_Name"===a.id||"d_File_Name"===a.id?e("a",{attrs:{href:"#"},on:{click:function(e){return t.downloadPdf(s.row)}}},[t._v(t._s(s.row[a.id]))]):"protocolInfo"===a.id?e("div",[e("div",[t._v(t._s(s.row.po_Name))]),t._l(s.row.files,(function(a){return e("div",[e("a",{attrs:{href:"#"},on:{click:function(e){return t.downloadPdf(a)}}},[t._v(t._s(a.file_Name))])])}))],2):"useable"===a.id&&"已刪除(廠商不可申請每日工單)"===s.row.useable?e("span",{staticStyle:{color:"red"}},[t._v(t._s(s.row.useable))]):"deleted"===a.id?e("span",{class:{"text-danger":"1"===s.row.deleted}},[t._v(" "+t._s(s.row.effect)+" ")]):"array_data"===a.id?e("span",t._l(s.row[a.id],(function(a,s){return e("p",{key:s,staticClass:"mb-0"},[t._v(t._s(a))])})),0):RegExp(/\n/).test(s.row[s.column.property])?e("span",{staticStyle:{"white-space":"pre-wrap"}},[t._v(" "+t._s(s.row[a.id])+" ")]):e("span",[t._v(t._s(s.row[a.id]))])]}}],null,!0)})})),t._t("custom-edit-select"),t._t("custom-switch"),t._t("custom-function"),t._t("slot-sheet-open")],2)],1)},o=[],r={name:"table-component",props:["data","tableColumns"],data(){return{api:this.apiUrl,loading:!0}},methods:{selectChangeHandler(t){this.$emit("selectionChange",t)},downloadPdf(t){const e=t.file_Id;this.$emit("downloadPdfHandler",e),this.$emit("downloadPdfHandler2",t)},getRowKeys(t){return t.index?t.index:t.id},rowStyleHandler(t){if("1"===t.row.isWeekend||"1"===t.row.isNight)return"fontColorBlue"}},mounted(){this.data&&(this.loading=!1)}},l=r,n=a(1001),i=(0,n.Z)(l,s,o,!1,null,"4a0f1604",null),d=i.exports},7163:function(t,e,a){a.d(e,{Z:function(){return c}});var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"upload"},[e("el-upload",{ref:"Upload",staticClass:"upload-demo",attrs:{limit:t.limitNumber,action:t.uploadAction,"auto-upload":!1,"on-change":t.changeHandler,"on-remove":t.removeHandler}},[e("el-button",{attrs:{size:"small",type:"primary"}},[t._v("上傳檔案")]),e("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[t._v(t._s(t.uploadTipText))])],1)],1)},o=[],r=a(942),l={name:"upload-component",data(){return{}},props:{uploadTipText:{type:[String],default:"檔案格式為PDF，在2MB以內"},uploadAction:{type:[String],default:r.apiUrl},limitNumber:{type:Number,default:1}},methods:{changeHandler(t,e){this.$emit("fileChangeHandler",e)},removeHandler(t,e){this.$emit("fileRemoveHandler",e)}},mounted(){}},n=l,i=a(1001),d=(0,i.Z)(n,s,o,!1,null,"442b61f1",null),c=d.exports},47:function(t,e,a){a.r(e),a.d(e,{default:function(){return p}});var s=function(){var t=this,e=t._self._c;return e("div",{directives:[{name:"loading",rawName:"v-loading.fullscreen.lock",value:this.$root.overlay,expression:"this.$root.overlay",modifiers:{fullscreen:!0,lock:!0}}],staticClass:"wrapper"},[e("h2",{staticClass:"form-title"},[t._v("新公告發佈")]),e("el-card",{staticClass:"mb-3",attrs:{shadow:"never"}},[e("el-form",{ref:"form",attrs:{model:t.form,rules:t.rules}},[e("el-form-item",{attrs:{label:"訊息標題",prop:"Title"}},[e("el-input",{attrs:{type:"textarea",rows:3,placeholder:"請輸入訊息標題"},model:{value:t.form.Title,callback:function(e){t.$set(t.form,"Title",e)},expression:"form.Title"}})],1),e("el-form-item",{attrs:{label:"訊息內容",prop:"Content"}},[e("el-input",{attrs:{type:"textarea",rows:5,placeholder:"請輸入訊息內容"},model:{value:t.form.Content,callback:function(e){t.$set(t.form,"Content",e)},expression:"form.Content"}})],1),e("el-form-item",{attrs:{label:"發布開始 ~ 結束日期",prop:"validDate"}},[e("el-date-picker",{attrs:{type:"daterange","range-separator":"至","start-placeholder":"開始日期","end-placeholder":"結束日期","value-format":"yyyy/MM/dd"},model:{value:t.form.validDate,callback:function(e){t.$set(t.form,"validDate",e)},expression:"form.validDate"}})],1),e("el-form-item",{attrs:{label:"訊息分類",prop:"Bbs_Cat"}},[e("el-radio",{attrs:{label:"1"},model:{value:t.form.Bbs_Cat,callback:function(e){t.$set(t.form,"Bbs_Cat",e)},expression:"form.Bbs_Cat"}},[t._v("各廠區施工規範")]),e("el-radio",{attrs:{label:"0"},model:{value:t.form.Bbs_Cat,callback:function(e){t.$set(t.form,"Bbs_Cat",e)},expression:"form.Bbs_Cat"}},[t._v("一般公告")])],1),e("el-form-item",{attrs:{label:"所屬廠區",prop:"Location_Id"}},[e("el-select",{attrs:{placeholder:"請選擇"},model:{value:t.form.Location_Id,callback:function(e){t.$set(t.form,"Location_Id",e)},expression:"form.Location_Id"}},t._l(t.locations,(function(t,a){return e("el-option",{key:a,attrs:{value:t.location_Id,label:t.description}})})),1)],1),e("el-form-item",{attrs:{label:"上傳檔案",prop:"File"}},[e("UploadComponent",{ref:"uploadComponent",attrs:{uploadTipText:"檔案格式為 PDF、JPG、PNG ， 在 3MB 以內"},on:{fileChangeHandler:t.fileHandleChange,fileRemoveHandler:t.fileHandleRemove},model:{value:t.form.File,callback:function(e){t.$set(t.form,"File",e)},expression:"form.File"}})],1),e("el-form-item",{attrs:{label:"發信設定",prop:"IsEmail"}},[e("el-radio-group",{model:{value:t.form.IsEmail,callback:function(e){t.$set(t.form,"IsEmail",e)},expression:"form.IsEmail"}},[e("el-radio",{attrs:{label:"0"}},[t._v("不發信")]),e("el-radio",{attrs:{label:"1"}},[t._v("發信南廠區承攬商")]),e("el-radio",{attrs:{label:"2"}},[t._v("發信北廠區承攬商")])],1)],1),e("p",[t._v("建立日期 = "+t._s(t.getDay())+", 工作流水號 = 系統產生, 管理身份 = "+t._s(t.info.name)+", 建立者 = "+t._s(t.info.no))]),e("el-button",{attrs:{size:"small",type:"primary",plain:""},on:{click:function(e){return t.submitForm("form")}}},[t._v("新增公佈欄訊息")])],1)],1),e("h2",{staticClass:"form-title"},[t._v("現有權限使用者清單")]),e("TableComponent",{attrs:{tableColumns:t.tableColumns,data:t.tableList},scopedSlots:t._u([{key:"custom-function",fn:function(){return[e("el-table-column",{staticClass:"function-column",attrs:{prop:"function",label:"操作",width:"130"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"修改",placement:"top-start"}},[e("el-button",{attrs:{type:"text"},on:{click:function(e){return t.editHandler(a.row)}}},[e("i",{staticClass:"el-icon-edit-outline"})])],1),e("el-tooltip",{staticClass:"item ms-2",attrs:{effect:"dark",content:"刪除",placement:"top-start"}},[e("el-popconfirm",{attrs:{title:"確定要刪除嗎？"},on:{confirm:function(e){return t.deleteHandler(a.row)}}},[e("el-button",{attrs:{slot:"reference",type:"text"},slot:"reference"},[e("i",{staticClass:"el-icon-delete"})])],1)],1)]}}])})]},proxy:!0}])}),e("PaginationComponent",{attrs:{totalLength:t.dataList.length},on:{changePageHandler:t.changePage}})],1)},o=[],r=(a(7658),a(7163)),l=a(1919),n=a(4865),i={name:"newAnnouncementReleasedComponent",components:{UploadComponent:r.Z,TableComponent:l.Z,PaginationComponent:n.Z},data(){return{form:{Bbs_No:"",Title:"",Content:"",validDate:[],Vaild_Beg_Date:"",Vaild_End_Date:"",Bbs_Cat:"0",Location_Id:"",File:File,IsEmail:"0"},rules:{Title:[{required:!0,message:"必填",trigger:"blur"}],Content:[{required:!0,message:"必填",trigger:"blur"}],validDate:[{required:!0,message:"必填",trigger:"change"}],IsEmail:[{required:!0,message:"必填",trigger:"change"}],Location_Id:[{required:!0,message:"必填",trigger:"change"}]},tableColumns:[{id:"index",width:"70",label:"項次"},{id:"col1",width:"",label:"工作流水號/管理身份"},{id:"col2",width:"",label:"管理者工號/姓名/部門/分機"},{id:"col3",width:"",label:"建立日期(開始~結束日期)"},{id:"title",width:"",label:"訊息標題"},{id:"col4",width:"",label:"訊息分類/所屬廠區"}],data:[],bbsList:[],locations:[],tableList:[],info:{}}},computed:{dataList(){const t=this.data;return t.forEach(((t,e)=>{t.index=e+1,t.col1=`${t.bbs_No}/${t.userGroup}`,t.col2=`${t.emp_Name}(ext=${t.emp_Extension_No})\n/${t.emp_Dept_Full_Name}`,t.col3=`${t.issue_Date}/(${t.valid_Beg_Date}~${t.valid_End_Date})`,t.col4=`${"REGULAR"===t.bbs_Cat?"一般公告":"各廠區施工規範"}/${t.description||""}`})),t}},methods:{getBBS(){this.$store.dispatch("QryBBS").then((t=>{const e=t.data.data;this.locations=e.locations,this.data=e.bbs,this.tableList=this.dataList.slice(0,10),this.info=e.info,this.$store.state.currentPage=1})).catch((t=>console.log(t)))},addBBS(t){const e=this.changeFormData(t);this.$store.dispatch("InsBBS",e).then((t=>{t.data.isOK&&(this.getBBS(),this.$store.state.currentPage=1,this.resetForm("form"),this.$message({type:"success",duration:"5000",showClose:!0,message:"新增成功"}))})).catch((t=>console.log(t)))},fileHandleChange(t){const e=t[0].size>3145728,a=t[0].raw.type,s="application/pdf"===a,o="image/png"===a,r="image/jpeg"===a;return e||!s&&!o&&!r?(this.$message({type:"error",duration:5e3,showClose:!0,message:"檔案不可大於3MB且檔案格式必須為 PDF、JPG、PNG"}),this.$refs.uploadComponent.$refs.Upload.clearFiles(),!1):(this.form.File=t[0].raw,!0)},fileHandleRemove(t){this.form.File=t},changePage(t){this.$store.state.currentPage=t;const e=10*(t-1),a=10*t;this.tableList=this.dataList.slice(e,a)},resetForm(t){this.$refs[t].resetFields(),this.$refs.uploadComponent.$refs.Upload.clearFiles()},submitForm(t){this.$refs[t].validate((async t=>{t?(this.form.Vaild_Beg_Date=this.form.validDate[0],this.form.Vaild_End_Date=this.form.validDate[1],this.addBBS(this.form)):this.$message({type:"error",duration:"5000",showClose:!0,message:"資料填寫錯誤"})}))},editHandler(t){const e={locations:this.locations},a={...t,...this.info,...e};this.$router.push({name:"newAnnouncementReleasedEdit",query:{data:JSON.stringify(a)}})},deleteHandler(t){const e={Bbs_No:t.bbs_No,Title:t.title,Content:t.content,Vaild_Beg_Date:t.valid_Beg_Date,Vaild_End_Date:t.valid_End_Date,Bbs_Cat:"FAB"===t.bbs_Cat?"1":"0",IsEmail:0,Location_Id:t.location_Id,File:null};this.$store.dispatch("DeleteBbsNotify",e).then((t=>{t.data.isOK&&(this.$message({type:"success",duration:"5000",showClose:!0,message:"刪除成功"}),this.getBBS())})).catch((t=>console.log(t)))}},mounted(){this.$store.commit("HEADER_HANDLER",!0),this.$store.commit("BREADCRUMB_HANDLER",!0),this.$root.$children[0].sidebarSwitch=!0,this.getBBS(),this.$store.state.currentPage=1}},d=i,c=a(1001),u=(0,c.Z)(d,s,o,!1,null,null,null),p=u.exports}}]);
//# sourceMappingURL=47.5d75481c825dc46b.js.map