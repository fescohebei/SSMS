(function(e){function t(t){for(var o,r,s=t[0],i=t[1],c=t[2],m=0,f=[];m<s.length;m++)r=s[m],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&f.push(n[r][0]),n[r]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e[o]=i[o]);u&&u(t);while(f.length)f.shift()();return l.push.apply(l,c||[]),a()}function a(){for(var e,t=0;t<l.length;t++){for(var a=l[t],o=!0,s=1;s<a.length;s++){var i=a[s];0!==n[i]&&(o=!1)}o&&(l.splice(t--,1),e=r(r.s=a[0]))}return e}var o={},n={accept:0},l=[];function r(t){if(o[t])return o[t].exports;var a=o[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=o,r.d=function(e,t,a){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(a,o,function(t){return e[t]}.bind(null,o));return a},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="https://cdn.jsdelivr.net/gh/fescohebei/ssms/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],i=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var u=i;l.push([2,"chunk-vendors"]),a()})({2:function(e,t,a){e.exports=a("d601")},"264c":function(e,t,a){},4020:function(e,t,a){"use strict";a("d3b7");var o=a("bc3a"),n=a.n(o),l=a("5c96"),r=n.a.create();r.interceptors.request.use((function(e){var t=e.headers;return"application/octet-stream;charset=utf-8"===t["content-type"]?e.data:e}),(function(e){Promise.reject(e)})),r.interceptors.response.use((function(e){return e.data}),(function(e){return e.response,l["message"].error(e.message),Promise.reject(e)})),t["a"]=r},"8bbf":function(e,t){e.exports=Vue},c32d:function(e,t){e.exports=moment},d601:function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var o=a("8bbf"),n=a.n(o),l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"el-main",attrs:{id:"app"}},[a("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:e.formInline}},[a("el-form-item",{attrs:{label:"身份证号"}},[a("el-input",{attrs:{placeholder:"身份证号"},model:{value:e.formInline.IDCard,callback:function(t){e.$set(e.formInline,"IDCard",t)},expression:"formInline.IDCard"}})],1),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:e.init}},[e._v("查询")])],1)],1),a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,border:""}},[a("el-table-column",{attrs:{label:"状态"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(e.BXStatus[t.row.BXStatus])+" ")]}}])}),a("el-table-column",{attrs:{prop:"姓名",label:"姓名"}}),a("el-table-column",{attrs:{prop:"身份证号",label:"身份证号"}}),a("el-table-column",{attrs:{label:"付款方向"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(e.PaymentTo[t.row.PaymentTo])+" ")]}}])}),a("el-table-column",{attrs:{prop:"LinkInfo",label:"联系方式"}}),a("el-table-column",{attrs:{label:"发生城市"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(e.city[t.row.EventCityCode])+" ")]}}])}),a("el-table-column",{attrs:{label:"社保报销类型"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(e.BXClass[t.row.BXClassCode])+" ")]}}])}),a("el-table-column",{attrs:{label:"报销类型子类"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(e.BXSubClass[t.row.BXSubClassCode])+" ")]}}])}),a("el-table-column",{attrs:{prop:"CreateDate",label:"创建时间"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(e.moment(t.row.CreateDate).format("YYYY-MM-DD"))+" ")]}}])}),a("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"text"},on:{click:function(a){return e.detail(t.row)}}},[e._v("详情")])]}}])})],1),a("div",{staticStyle:{"text-align":"right","margin-top":"20px"}},[a("el-pagination",{attrs:{background:"",layout:"prev, pager, next","page-size":e.formInline.PageSize,"current-page":e.formInline.Current,total:e.formInline.total},on:{"current-change":e.pagechange}})],1),a("el-dialog",{attrs:{title:"详情",visible:e.dialogTableVisible,width:"70%"},on:{"update:visible":function(t){e.dialogTableVisible=t},close:e.pageRefresh}},[a("el-divider",{attrs:{"content-position":"left"}},[e._v("享受申请信息")]),a("el-form",{ref:"",staticClass:"textBox",attrs:{"label-width":"120px",inline:!0,"label-position":e.right}},[a("el-form-item",{attrs:{label:"姓名：",span:4}},[e._v(" "+e._s(e.baoxiaoDetail.baoxiao["姓名"])+" ")]),a("el-form-item",{attrs:{label:"身份证号：",span:4}},[e._v(" "+e._s(e.baoxiaoDetail.baoxiao["身份证号"])+" ")]),a("el-form-item",{attrs:{label:"手机号码：",span:4}},[e._v(" "+e._s(e.baoxiaoDetail.baoxiao.LinkInfo)+" ")]),a("el-form-item",{attrs:{label:"创建时间:",span:4}},[e._v(" "+e._s(e.baoxiaoDetail.baoxiao.CreateDate)+" ")]),a("el-form-item",{attrs:{label:"发生城市：",span:4}},[e._v(" "+e._s(e.city[e.baoxiaoDetail.baoxiao.EventCityCode])+" ")]),a("el-form-item",{attrs:{label:"付款方向：",span:4}},[e._v(" "+e._s(e.PaymentTo[e.baoxiaoDetail.baoxiao.PaymentTo])+" ")]),a("el-form-item",{attrs:{label:"社保报销类型：",span:4}},[e._v(" "+e._s(e.BXClass[e.baoxiaoDetail.baoxiao.BXClassCode])+" ")]),a("el-form-item",{attrs:{label:"报销类型子类:",span:4}},[e._v(" "+e._s(e.BXSubClass[e.baoxiaoDetail.baoxiao.BXSubClassCode])+" ")]),a("el-form-item",{attrs:{label:"备注:",span:4}},[e._v(" "+e._s(e.baoxiaoDetail.baoxiao.Remarks)+" ")])],1),a("el-tabs",{staticClass:"mt20",on:{"tab-click":e.handleClick},model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[a("el-tab-pane",{attrs:{label:"社保信息",name:"first"}},[a("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:e.baoxiaoDetail.shebao,"tooltip-effect":"dark",border:""}},[a("el-table-column",{attrs:{label:"状态",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(e.ShebaoOrderItemStatus[t.row.BOrderItemStatus])+" ")]}}])}),a("el-table-column",{attrs:{label:"险种名称",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(e.sbType[t.row.sbType])+" ")]}}])}),a("el-table-column",{attrs:{prop:"Jishu",label:"基数",width:"100"}}),a("el-table-column",{attrs:{label:"开始日期",width:"200"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(e.moment(t.row.Startime).format("YYYY-MM-DD"))+" ")]}}])}),a("el-table-column",{attrs:{label:"结束日期",width:"200"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(e.SBEndDate?e.moment(t.row.SBEndDate).format("YYYY-MM-DD"):"")+" ")]}}])}),a("el-table-column",{attrs:{prop:"Bili",label:"比例"}})],1)],1),a("el-tab-pane",{attrs:{label:"收款账号信息",name:"second"}},[a("div",{staticClass:"accountBox"},[a("el-row",{attrs:{gutter:10}},[a("el-col",{attrs:{xs:8,sm:6,md:3,lg:3,xl:2}},[e._v(" 银行名称： ")]),a("el-col",{attrs:{xs:4,sm:6,md:4,lg:5,xl:4}},[e._v(" "+e._s(e.baoxiaoDetail.bankAccountInfo.BankAccountName)+" ")]),a("el-col",{attrs:{xs:4,sm:6,md:3,lg:3,xl:2}},[e._v(" 银行账号： ")]),a("el-col",{attrs:{xs:8,sm:6,md:4,lg:5,xl:4}},[e._v(" "+e._s(e.baoxiaoDetail.bankAccountInfo.BankAccount)+" ")])],1),a("el-row",{attrs:{gutter:10}},[a("el-col",{attrs:{xs:8,sm:6,md:3,lg:3,xl:2}},[e._v(" 开户行： ")]),a("el-col",{attrs:{xs:4,sm:6,md:4,lg:5,xl:4}},[e._v(" "+e._s(e.baoxiaoDetail.bankAccountInfo.BankName)+" ")]),a("el-col",{attrs:{xs:4,sm:6,md:3,lg:3,xl:2}},[e._v(" 账号类型： ")]),a("el-col",{attrs:{xs:8,sm:6,md:4,lg:5,xl:4}},[e._v(" "+e._s(e.PaymentTo[e.baoxiaoDetail.bankAccountInfo.BankAccountType])+" ")])],1)],1)]),a("el-tab-pane",{attrs:{label:"申报记录",name:"list"}},[a("el-timeline",e._l(e.baoxiaoDetail.logs,(function(t){return a("el-timeline-item",{key:t.LogGuid,attrs:{timestamp:t.LogTime,placement:"top",color:"#009688"}},[a("div",[e._v(e._s(e.BXStatus[t.BXStatus])),a("br"),a("span",{staticClass:"remark"},[e._v("备注："+e._s(t.Remarks))])])])})),1)],1)],1),a("el-divider",{attrs:{"content-position":"left"}},[e._v("审核")]),a("el-form",{ref:"chooseForm",attrs:{model:e.refuseAcceptForm,rules:e.shenherRules,"label-width":"80px","validate-on-rule-change":e.validateChange}},[a("el-form-item",{attrs:{label:"审核结果",prop:"acceptance"}},[a("el-radio-group",{on:{change:e.acceptanceChange},model:{value:e.refuseAcceptForm.acceptance,callback:function(t){e.$set(e.refuseAcceptForm,"acceptance",t)},expression:"refuseAcceptForm.acceptance"}},[a("el-radio",{attrs:{label:0}},[e._v("受理")]),a("el-radio",{attrs:{label:1}},[e._v("拒绝")])],1)],1),a("el-form-item",{attrs:{label:"理由",prop:"Remarks"}},[a("el-input",{attrs:{type:"textarea"},model:{value:e.refuseAcceptForm.Remarks,callback:function(t){e.$set(e.refuseAcceptForm,"Remarks",t)},expression:"refuseAcceptForm.Remarks"}})],1)],1),a("el-row",{staticStyle:{"margin-top":"20px"},attrs:{gutter:20}},[a("el-col",{staticStyle:{"text-align":"center"},attrs:{span:24}},[a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.submit("chooseForm")}}},[e._v("提交")])],1)],1)],1)],1)},r=[],s=(a("4160"),a("b0c0"),a("159b"),a("ade3")),i=a("4020"),c=a("c32d"),u=a.n(c),m={name:"index",components:{moment:u.a},data:function(){var e;return e={moment:u.a,formInline:{IDCard:"",PageSize:10,Current:1,total:0},tableData:[],dialogTableVisible:!1,city:{},ShebaoOrderItemStatus:{},ShebaoOrderStatus:{},sbType:{},selectedIDs:[],shenherRules:{Remarks:[{required:!1,message:"请输入拒绝理由",trigger:"blur"}]},PaymentTo:{},BXStatus:{},BXClass:{},BXSubClass:{}},Object(s["a"])(e,"city",{}),Object(s["a"])(e,"baoxiaoDetail",{bankAccountInfo:{},baoxiao:{"姓名":"","身份证号":"",LinkInfo:"",CreateDate:"",EventCityCode:"",PaymentTo:"",BXClassCode:"",BXSubClassCode:"",Cailiao:null,Remarks:""},log:[]}),Object(s["a"])(e,"activeName","first"),Object(s["a"])(e,"ShebaoOrderItemStatus",{}),Object(s["a"])(e,"ShebaoOrderStatus",{}),Object(s["a"])(e,"sbType",{}),Object(s["a"])(e,"acceptVisible",!1),Object(s["a"])(e,"acceptForm",{Remarks:""}),Object(s["a"])(e,"chooseAR",{}),Object(s["a"])(e,"refuseVisible",!1),Object(s["a"])(e,"refuseAcceptForm",{acceptance:0,Remarks:""}),Object(s["a"])(e,"chooseRefuse",{}),Object(s["a"])(e,"validateChange",!0),e},created:function(){this.init()},methods:{init:function(){var e=this;i["a"].post("/api/Dim/Enum/DimDecode",{Names:["city"]}).then((function(t){0===t.code&&(e.city=t.data.city)})).catch((function(e){console.log(e)})),i["a"].post("/api/Dim/Enum/GetEnum",{Names:["PaymentTo","BXStatus","ShebaoOrderItemStatus","ShebaoOrderStatus","sbType"]}).then((function(t){var a=t;0===a.code&&(a.data.PaymentTo.forEach((function(t,a){e.PaymentTo[t.key]=t.text})),a.data.BXStatus.forEach((function(t,a){e.BXStatus[t.key]=t.text})),e.pagechange(1),a.data.ShebaoOrderStatus.forEach((function(t,a){e.ShebaoOrderStatus[t.key]=t.text})),a.data.sbType.forEach((function(t,a){e.sbType[t.key]=t.text})),a.data.ShebaoOrderItemStatus.forEach((function(t,a){e.ShebaoOrderItemStatus[t.key]=t.text})))})).catch((function(e){console.log(e)})),i["a"].post("/api/Dim/Enum/GetDim",{Names:["city","BXClass","BXSubClass"]}).then((function(t){0===t.code&&(t.data.BXClass.forEach((function(t,a){e.BXClass[t.code]=t.name})),t.data.BXSubClass.forEach((function(t,a){e.BXSubClass[t.code]=t.name})),t.data.city.forEach((function(t,a){e.city[t.code]=t.name})))})).catch((function(e){console.log(e)}))},pageRefresh:function(){this.pagechange(this.formInline.Current)},pagechange:function(e){var t=this,a=t.formInline;a.Current=e,a.BXStatus=10,i["a"].post("/api/ClientSide/Baoxiao/List",a).then((function(e){0===e.code&&(t.tableData=e.data.rows,t.formInline.total=e.data.count)})).catch((function(e){console.log(e)}))},detail:function(e){var t={SBBXGuid:e.SBBXGuid},a=this;i["a"].post("/api/ClientSide/Baoxiao/Detail ",t).then((function(t){0===t.code&&(a.baoxiaoDetail=t.data,a.dialogTableVisible=!0,a.chooseAR=e)})).catch((function(e){console.log(e)}))},acceptanceChange:function(e){this.shenherRules.Remarks[0].required=!!e},submit:function(e){var t=this,a="",o={SBBXGuid:t.chooseAR.SBBXGuid,Remarks:t.refuseAcceptForm.Remarks};a=t.refuseAcceptForm.acceptance?"/api/ClientSide/Baoxiao/Refuse":"/api/ClientSide/Baoxiao/Accept",this.$refs[e].validate((function(e){e&&i["a"].post(a,o).then((function(e){0===e.code?(t.$message({message:e.msg,type:"success"}),t.pageRefresh(),t.dialogTableVisible=!1):t.$message({message:e.msg,type:"error"})})).catch((function(e){console.log(e)}))}))},canChoose:function(e,t){return"30"==e.BOrderItemStatus}}},f=m,b=(a("e8fe"),a("2877")),p=Object(b["a"])(f,l,r,!1,null,null,null),d=p.exports,h=a("5c96");a("0fae");n.a.config.productionTip=!1,n.a.prototype.$ELEMENT={size:"small"},n.a.use(h["Pagination"]),n.a.use(h["Form"]),n.a.use(h["Table"]),n.a.use(h["Dialog"]),n.a.use(u.a),n.a.use(h["Input"]),n.a.use(h["Radio"]),new n.a({render:function(e){return e(d)}}).$mount("#app")},e8fe:function(e,t,a){"use strict";var o=a("264c"),n=a.n(o);n.a}});