(function(e){function t(t){for(var r,l,i=t[0],s=t[1],c=t[2],p=0,m=[];p<i.length;p++)l=i[p],Object.prototype.hasOwnProperty.call(n,l)&&n[l]&&m.push(n[l][0]),n[l]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);u&&u(t);while(m.length)m.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],r=!0,i=1;i<a.length;i++){var s=a[i];0!==n[s]&&(r=!1)}r&&(o.splice(t--,1),e=l(l.s=a[0]))}return e}var r={},n={increase:0},o=[];function l(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.m=e,l.c=r,l.d=function(e,t,a){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)l.d(a,r,function(t){return e[t]}.bind(null,r));return a},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="https://cdn.jsdelivr.net/gh/fescohebei/ssms/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var u=s;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("eb27")},"23d2":function(e,t,a){"use strict";var r=a("c45e"),n=a.n(r);n.a},4020:function(e,t,a){"use strict";a("d3b7");var r=a("bc3a"),n=a.n(r),o=a("5c96"),l=n.a.create();l.interceptors.request.use((function(e){var t=e.headers;return"application/octet-stream;charset=utf-8"===t["content-type"]?e.data:e}),(function(e){Promise.reject(e)})),l.interceptors.response.use((function(e){return e.data}),(function(e){return e.response,o["message"].error(e.message),Promise.reject(e)})),t["a"]=l},"8bbf":function(e,t){e.exports=Vue},c32d:function(e,t){e.exports=moment},c45e:function(e,t,a){},eb27:function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("8bbf"),n=a.n(r),o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"el-main",attrs:{id:"app"}},[a("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:e.formInline}},[a("el-form-item",{attrs:{label:"单位"}},[a("el-input",{attrs:{placeholder:"单位名称"},model:{value:e.formInline.ComName,callback:function(t){e.$set(e.formInline,"ComName",t)},expression:"formInline.ComName"}})],1),a("el-form-item",{attrs:{label:"身份证号"}},[a("el-input",{attrs:{placeholder:"身份证号"},model:{value:e.formInline.CardID,callback:function(t){e.$set(e.formInline,"CardID",t)},expression:"formInline.CardID"}})],1),a("el-form-item",{attrs:{label:"姓名"}},[a("el-input",{attrs:{placeholder:"姓名"},model:{value:e.formInline.PName,callback:function(t){e.$set(e.formInline,"PName",t)},expression:"formInline.PName"}})],1),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:e.searchList}},[e._v("查询")])],1)],1),a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,border:""}},[a("el-table-column",{attrs:{label:"状态"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(e.ShebaoOrderStatus[t.row.BOrderStatus])+" ")]}}])}),a("el-table-column",{attrs:{prop:"姓名",label:"姓名"}}),a("el-table-column",{attrs:{prop:"身份证号",label:"身份证号"}}),a("el-table-column",{attrs:{prop:"ComName",label:"单位"}}),a("el-table-column",{attrs:{prop:"PaiDanDate",label:"派单时间"}}),a("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"primary",plain:"",size:"small"},on:{click:function(a){return e.examineClick(t.row)}}},[e._v("审核")])]}}])})],1),a("div",{staticStyle:{"text-align":"right","margin-top":"20px"}},[a("el-pagination",{attrs:{background:"",layout:"prev, pager, next","page-size":e.formInline.PageSize,"current-page":e.formInline.Current,total:e.formInline.total},on:{"current-change":e.pagechange}})],1),a("el-dialog",{attrs:{title:"审核",visible:e.dialogTableVisible,width:"70%"},on:{"update:visible":function(t){e.dialogTableVisible=t},close:e.init}},[a("el-divider",{attrs:{"content-position":"left"}},[e._v("基本信息")]),a("el-form",{ref:"",staticClass:"textBox",attrs:{"label-width":"100px",inline:!0,"label-position":e.right}},[a("el-form-item",{attrs:{label:"姓名：",prop:"acceptance",span:4}},[e._v(" "+e._s(e.person["姓名"])+" ")]),a("el-form-item",{attrs:{label:"身份证号：",prop:"Remarks",span:4}},[e._v(" "+e._s(e.person["身份证号"])+" ")]),a("el-form-item",{attrs:{label:"参保城市：",prop:"acceptance",span:4}},[e._v(" "+e._s(e.city[e.person.CityCode])+" ")]),a("br"),a("el-form-item",{attrs:{label:"备注：",prop:"Remarks",span:4}},[e._v(" "+e._s(e.person.Remarks)+" ")])],1),a("el-divider",{attrs:{"content-position":"left"}},[e._v("参保信息")]),a("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:e.shebaoData,"tooltip-effect":"dark",border:""},on:{"selection-change":e.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection",width:"55",selectable:e.canChoose}}),a("el-table-column",{attrs:{label:"状态",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(e.ShebaoOrderItemStatus[t.row.BOrderItemStatus])+" ")]}}])}),a("el-table-column",{attrs:{label:"险种名称",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(e.sbType[t.row.sbType])+" ")]}}])}),a("el-table-column",{attrs:{prop:"Jishu",label:"基数",width:"100"}}),a("el-table-column",{attrs:{label:"开始日期",width:"200"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(e.moment(t.row.Startime).format("YYYY-MM-DD"))+" ")]}}])}),a("el-table-column",{attrs:{prop:"Bili",label:"比例"}})],1),a("el-form",{ref:"ruleForm",attrs:{model:e.ruleForm,rules:e.shenherRules,"label-width":"80px"}},[a("el-form-item",{attrs:{label:"审核结果",prop:"acceptance"}},[a("el-radio-group",{on:{change:e.acceptanceChange},model:{value:e.ruleForm.acceptance,callback:function(t){e.$set(e.ruleForm,"acceptance",t)},expression:"ruleForm.acceptance"}},[a("el-radio",{attrs:{label:0}},[e._v("受理")]),a("el-radio",{attrs:{label:1}},[e._v("拒绝")])],1)],1),a("el-form-item",{attrs:{label:"理由",prop:"Remarks"}},[a("el-input",{attrs:{type:"textarea"},model:{value:e.ruleForm.Remarks,callback:function(t){e.$set(e.ruleForm,"Remarks",t)},expression:"ruleForm.Remarks"}})],1)],1),a("el-row",{attrs:{gutter:20}},[a("el-col",{staticStyle:{"text-align":"center"},attrs:{span:24}},[a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.submit("ruleForm")}}},[e._v("提交")])],1)],1)],1)],1)},l=[],i=(a("4160"),a("d81d"),a("159b"),a("4020")),s=a("c32d"),c=a.n(s),u={name:"index",components:{moment:c.a},data:function(){return{moment:c.a,formInline:{ComName:"",CardID:"",PName:"",PageSize:10,Current:1,total:0},tableData:[],dialogTableVisible:!1,gridData:{},shebaoData:[],person:{},city:{},ShebaoOrderItemStatus:{},ShebaoOrderStatus:{},sbType:{},selectedIDs:[],ruleForm:{acceptance:0,Remarks:""},shenherRules:{acceptance:[{required:!1,message:"请输入",trigger:"blur"}],Remarks:[{required:!1,message:"请输入拒绝理由",trigger:"blur"}]}}},created:function(){this.init()},methods:{init:function(){var e=this;i["a"].post("/api/Dim/Enum/DimDecode",{Names:["city"]}).then((function(t){0===t.code&&(e.city=t.data.city)})).catch((function(e){console.log(e)})),i["a"].post("/api/Dim/Enum/GetEnum",{Names:["ShebaoOrderItemStatus","ShebaoOrderStatus","sbType"]}).then((function(t){0===t.code&&(t.data.ShebaoOrderStatus.forEach((function(t,a){e.ShebaoOrderStatus[t.key]=t.text})),t.data.sbType.forEach((function(t,a){e.sbType[t.key]=t.text})),t.data.ShebaoOrderItemStatus.forEach((function(t,a){e.ShebaoOrderItemStatus[t.key]=t.text})))})).catch((function(e){console.log(e)})),this.pagechange(1)},searchList:function(){this.pagechange(1)},pagechange:function(e){var t=this,a=t.formInline;a.Current=e,i["a"].post("/api/ClientSide/Order/InList",a).then((function(e){0===e.code&&(t.tableData=e.data.rows,t.formInline.total=e.data.count)})).catch((function(e){console.log(e)}))},examineClick:function(e){var t={RLZGUID:e.RLZGUID},a=this;i["a"].post("/api/ClientSide/Order/Detail",t).then((function(e){0===e.code&&(a.shebaoData=e.data.shebao,a.person=e.data.person,a.dialogTableVisible=!0)})).catch((function(e){console.log(e)}))},handleSelectionChange:function(e){var t=[];e.map((function(e){t.push(e.SBGUID)})),this.selectedIDs=t},submit:function(e){var t=this,a="",r={SBGUIDs:this.selectedIDs,RLZGUID:this.person.RLZGUID};a=this.ruleForm.acceptance?"/api/ClientSide/Order/RefuseIn":"/api/ClientSide/Order/AcceptIn",this.$refs[e].validate((function(e){if(!e)return!1;r.Remarks=t.ruleForm.Remarks,i["a"].post(a,r).then((function(e){0===e.code?(t.$message({message:e.msg,type:"success"}),t.examineClick(r)):t.$message.error(e.msg)})).catch((function(e){console.log(e)}))}))},canChoose:function(e,t){return"10"==e.BOrderItemStatus},acceptanceChange:function(e){this.shenherRules.Remarks[0].required=!!e}}},p=u,m=(a("23d2"),a("2877")),f=Object(m["a"])(p,o,l,!1,null,null,null),d=f.exports,b=a("5c96");n.a.config.productionTip=!1,n.a.prototype.$ELEMENT={size:"small"},n.a.use(b["Pagination"]),n.a.use(b["Form"]),n.a.use(b["Table"]),n.a.use(b["Dialog"]),n.a.use(b["Input"]),n.a.use(b["Radio"]),new n.a({render:function(e){return e(d)}}).$mount("#app")}});