"use strict";(self["webpackChunkinnolux"]=self["webpackChunkinnolux"]||[]).push([[6011],{6011:function(e,t,s){s.r(t),s.d(t,{default:function(){return c}});var r=function(){var e=this,t=e._self._c;return t("div",{directives:[{name:"loading",rawName:"v-loading.fullscreen.lock",value:this.$root.overlay,expression:"this.$root.overlay",modifiers:{fullscreen:!0,lock:!0}}],staticClass:"wrapper"},[t("el-tree",{attrs:{data:e.menu,props:e.defaultProps,"node-key":"id","expand-on-click-node":!1,"render-content":e.renderContent}}),t("el-dialog",{attrs:{title:e.isEdit?"編輯節點資訊":"新增節點資訊",visible:e.showDialog,width:"50%"},on:{"update:visible":function(t){e.showDialog=t}}},[t("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules}},[t("el-row",[t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{label:"節點名稱",prop:"menuName"}},[t("el-input",{attrs:{placeholder:"請輸入"},model:{value:e.form.menuName,callback:function(t){e.$set(e.form,"menuName",t)},expression:"form.menuName"}})],1)],1),t("el-col",{staticClass:"ms-3",attrs:{span:11}},[t("el-form-item",{attrs:{label:"節點描述",prop:"funcDesc"}},[t("el-input",{attrs:{placeholder:"請輸入"},model:{value:e.form.funcDesc,callback:function(t){e.$set(e.form,"funcDesc",t)},expression:"form.funcDesc"}})],1)],1)],1),t("el-row",{staticClass:"d-flex align-items-center"},[t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{label:"開啟方式",prop:"target"}},[t("el-select",{on:{change:function(t){return e.targetHandler()}},model:{value:e.form.target,callback:function(t){e.$set(e.form,"target",t)},expression:"form.target"}},[t("el-option",{attrs:{label:"請選擇",value:"",disabled:""}}),t("el-option",{attrs:{label:"rightFrame",value:"rightFrame"}}),t("el-option",{attrs:{label:"_blank",value:"_blank"}})],1)],1)],1),t("el-col",{staticClass:"ms-3",attrs:{span:11}},[t("el-form-item",{attrs:{label:"是否可見",prop:"visible"}},[t("el-checkbox",{model:{value:e.form.visible,callback:function(t){e.$set(e.form,"visible",t)},expression:"form.visible"}},[e._v("是否可見")])],1)],1)],1),t("el-row",[t("el-col",{attrs:{span:24}},[t("el-form-item",{staticClass:"mb-0",attrs:{label:"URL",prop:"url"}},[t("el-input",{attrs:{type:"textarea",rows:3,placeholder:"請輸入"},model:{value:e.form.url,callback:function(t){e.$set(e.form,"url",t)},expression:"form.url"}})],1)],1)],1)],1),t("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{attrs:{size:"small"},on:{click:function(t){return e.cancelDialog()}}},[e._v("取消")]),t("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(t){return e.submitForm("form")}}},[e._v("確定")])],1)],1)],1)},a=[],i={name:"nodeSettingComponent",components:{},data(){return{showDialog:!1,isEdit:!1,form:{id:"",parentfuncId:"",nSortIndex:"",sysId:"",sortIndex:0,auth_YN:"",menuName:"",funcDesc:"",target:"",visible:!0,url:""},rules:{menuName:[{required:!1,message:"必填",trigger:"blur"}],target:[{required:!1,message:"必填",trigger:"blur"}],visible:[{required:!1,message:"必填",trigger:"blur"}],url:[{required:!1,message:"必填",trigger:"blur"}]},defaultProps:{children:"children",label(e){return`${e.parent.menuName} - [可用狀態: ${e.parent.visible}]`}},menu:[],sidebar:[]}},computed:{},methods:{targetHandler(){this.$refs.form.clearValidate("target")},async qryMenu(){const e=await this.$store.dispatch("qryMenu"),t=e.data.data;this.menu=t.menu.children,this.sidebar=t.sidebar.children},async appendMenu(e){e.visible=e.visible?"Y":"N";const t=await this.$store.dispatch("appendMenu",e);t.data.isOK&&(this.$message({type:"success",duration:"5000",showClose:!0,message:"新增成功"}),this.showDialog=!1,this.qryMenu())},async editMenu(e){e.visible=e.visible?"Y":"N";const t=await this.$store.dispatch("editMenu",e);t.data.isOK&&(this.$message({type:"success",duration:"5000",showClose:!0,message:"修改成功"}),this.showDialog=!1,this.qryMenu())},renderContent(e,{node:t,data:s}){return e("span",{class:"custom-tree-node"},[e("span",[t.label]),e("span",{class:"function-box"},[e("el-button",{attrs:{type:"text"},on:{click:()=>this.append(t,s)}},[e("i",{class:"el-icon-document-add"})]),e("el-button",{class:"ms-2",attrs:{type:"text"},on:{click:()=>this.edit(t,s)}},[e("i",{class:"el-icon-edit"})]),e("el-button",{attrs:{type:"text"},slot:"reference",class:"ms-2",on:{click:()=>this.remove(t,s)}},[e("i",{class:"el-icon-delete"})])])])},append(e,t){this.isEdit=!1,this.showDialog=!0,this.form=JSON.parse(JSON.stringify(t.parent)),this.form.menuName="",this.form.funcDesc="",this.form.target="",this.form.visible=!0,this.form.url="",this.form.parentfuncId=this.form.id},edit(e,t){this.form=JSON.parse(JSON.stringify(t.parent)),this.isEdit=!0,this.showDialog=!0,this.form.menuName=t.parent.menuName,this.form.funcDesc=t.parent.funcDesc,this.form.target=t.parent.target,this.form.visible="Y"===this.form.visible,this.form.url=t.parent.url},remove(e,t){this.$confirm("確定要刪除嗎？",{confirmButtonText:"確定",cancelButtonText:"取消",type:"warning"}).then((async()=>{const e=await this.$store.dispatch("deleteMenu",t.parent);e.data.isOK&&(this.$message({type:"success",duration:5e3,showClose:!0,message:"刪除成功!"}),this.qryMenu())})).catch((()=>{}))},cancelDialog(){this.showDialog=!1,this.$refs.form.clearValidate()},submitForm(e){this.$refs[e].validate((async e=>{e?this.isEdit?this.editMenu(this.form):this.appendMenu(this.form):this.$message({type:"error",duration:"5000",showClose:!0,message:"資料填寫錯誤"})}))}},mounted(){this.qryMenu(),this.$store.commit("HEADER_HANDLER",!0),this.$store.commit("BREADCRUMB_HANDLER",!0),this.$root.$children[0].sidebarSwitch=!0}},o=i,l=s(1001),n=(0,l.Z)(o,r,a,!1,null,"0f272409",null),c=n.exports}}]);
//# sourceMappingURL=6011.83d9582a8004cf3c.js.map