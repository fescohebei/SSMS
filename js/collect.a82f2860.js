(function(e){function t(t){for(var o,s,r=t[0],i=t[1],c=t[2],m=0,d=[];m<r.length;m++)s=r[m],Object.prototype.hasOwnProperty.call(l,s)&&l[s]&&d.push(l[s][0]),l[s]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e[o]=i[o]);u&&u(t);while(d.length)d.shift()();return n.push.apply(n,c||[]),a()}function a(){for(var e,t=0;t<n.length;t++){for(var a=n[t],o=!0,r=1;r<a.length;r++){var i=a[r];0!==l[i]&&(o=!1)}o&&(n.splice(t--,1),e=s(s.s=a[0]))}return e}var o={},l={collect:0},n=[];function s(t){if(o[t])return o[t].exports;var a=o[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=e,s.c=o,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)s.d(a,o,function(t){return e[t]}.bind(null,o));return a},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="https://cdn.jsdelivr.net/gh/fescohebei/ssms/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],i=r.push.bind(r);r.push=t,r=r.slice();for(var c=0;c<r.length;c++)t(r[c]);var u=i;n.push([3,"chunk-vendors"]),a()})({"0cb0":function(e,t,a){"use strict";var o=a("603e"),l=a.n(o);l.a},3:function(e,t,a){e.exports=a("c29c")},4020:function(e,t,a){"use strict";a("d3b7");var o=a("bc3a"),l=a.n(o),n=a("5c96"),s=l.a.create();s.interceptors.request.use((function(e){var t=e.headers;return"application/octet-stream;charset=utf-8"===t["content-type"]?e.data:e}),(function(e){Promise.reject(e)})),s.interceptors.response.use((function(e){return e.data}),(function(e){return e.response,n["message"].error(e.message),Promise.reject(e)})),t["a"]=s},"603e":function(e,t,a){},"8bbf":function(e,t){e.exports=Vue},c29c:function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var o=a("8bbf"),l=a.n(o),n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"el-main",attrs:{id:"app"}},[a("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:e.formInline}},[a("el-form-item",{attrs:{label:"身份证号"}},[a("el-input",{attrs:{placeholder:"身份证号"},model:{value:e.formInline.IDCard,callback:function(t){e.$set(e.formInline,"IDCard",t)},expression:"formInline.IDCard"}})],1),a("el-form-item",{attrs:{label:"状态"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.formInline.BXStatus,callback:function(t){e.$set(e.formInline,"BXStatus",t)},expression:"formInline.BXStatus"}},e._l(e.BXStatusList,(function(e){return a("el-option",{key:e.key,attrs:{label:e.text,value:e.key}})})),1)],1),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:e.init}},[e._v("查询")]),a("el-button",{attrs:{type:"primary"},on:{click:e.addBaoxiao}},[e._v("添加")])],1)],1),a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,border:""}},[a("el-table-column",{attrs:{label:"状态"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(e.BXStatus[t.row.BXStatus])+" ")]}}])}),a("el-table-column",{attrs:{prop:"姓名",label:"姓名"}}),a("el-table-column",{attrs:{prop:"身份证号",label:"身份证号"}}),a("el-table-column",{attrs:{label:"付款方向"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(e.PaymentTo[t.row.PaymentTo])+" ")]}}])}),a("el-table-column",{attrs:{prop:"LinkInfo",label:"联系方式"}}),a("el-table-column",{attrs:{label:"发生城市"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(e.city[t.row.EventCityCode])+" ")]}}])}),a("el-table-column",{attrs:{label:"社保报销类型"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(e.BXClass[t.row.BXClassCode])+" ")]}}])}),a("el-table-column",{attrs:{label:"报销类型子类"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(e.BXSubClass[t.row.BXSubClassCode])+" ")]}}])}),a("el-table-column",{attrs:{prop:"CreateDate",label:"创建时间"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(e.moment(t.row.CreateDate).format("YYYY-MM-DD"))+" ")]}}])}),a("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"text"},on:{click:function(a){return e.detail(t.row)}}},[e._v("详情")])]}}])})],1),a("div",{staticStyle:{"text-align":"right","margin-top":"20px"}},[a("el-pagination",{attrs:{background:"",layout:"prev, pager, next","page-size":e.formInline.PageSize,"current-page":e.formInline.Current,total:e.formInline.total},on:{"current-change":e.pagechange}})],1),a("el-dialog",{attrs:{title:"详情",visible:e.dialogTableVisible,width:"70%"},on:{"update:visible":function(t){e.dialogTableVisible=t},close:e.pageRefresh}},[a("el-tabs",{on:{"tab-click":e.handleClick},model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[a("el-tab-pane",{attrs:{label:"享受申请信息",name:"first"}},[a("el-row",{attrs:{gutter:10}},[a("el-col",{attrs:{xs:4,sm:4,md:3,lg:3,xl:2,align:"right"}},[e._v(" 姓名： ")]),a("el-col",{attrs:{xs:8,sm:6,md:4,lg:5,xl:4}},[e._v(" "+e._s(e.baoxiaoDetail.baoxiao["姓名"])+" ")]),a("el-col",{attrs:{xs:4,sm:4,md:3,lg:3,xl:2,align:"right"}},[e._v(" 身份证号： ")]),a("el-col",{attrs:{xs:8,sm:6,md:4,lg:5,xl:4}},[e._v(" "+e._s(e.baoxiaoDetail.baoxiao["身份证号"])+" ")]),a("el-col",{attrs:{xs:4,sm:4,md:3,lg:3,xl:2,align:"right"}},[e._v(" 手机号码： ")]),a("el-col",{attrs:{xs:8,sm:6,md:4,lg:5,xl:4}},[e._v(" "+e._s(e.baoxiaoDetail.baoxiao.LinkInfo)+" ")])],1),a("el-row",{attrs:{gutter:10}},[a("el-col",{attrs:{xs:4,sm:4,md:3,lg:3,xl:2,align:"right"}},[e._v(" 创建时间： ")]),a("el-col",{attrs:{xs:8,sm:6,md:4,lg:5,xl:4}},[e._v(" "+e._s(e.baoxiaoDetail.baoxiao.CreateDate)+" ")]),a("el-col",{attrs:{xs:4,sm:4,md:3,lg:3,xl:2,align:"right"}},[e._v(" 发生城市： ")]),a("el-col",{attrs:{xs:8,sm:6,md:4,lg:5,xl:4}},[e._v(" "+e._s(e.city[e.baoxiaoDetail.baoxiao.EventCityCode])+" ")]),a("el-col",{attrs:{xs:4,sm:4,md:3,lg:3,xl:2,align:"right"}},[e._v(" 付款方向： ")]),a("el-col",{attrs:{xs:8,sm:6,md:4,lg:5,xl:4}},[e._v(" "+e._s(e.PaymentTo[e.baoxiaoDetail.baoxiao.PaymentTo])+" ")])],1),a("el-row",{attrs:{gutter:10}},[a("el-col",{attrs:{xs:4,sm:4,md:3,lg:3,xl:2,align:"right"}},[e._v(" 社保报销类型： ")]),a("el-col",{attrs:{xs:8,sm:6,md:4,lg:5,xl:4}},[e._v(" "+e._s(e.BXClass[e.baoxiaoDetail.baoxiao.BXClassCode])+" ")]),a("el-col",{attrs:{xs:4,sm:4,md:3,lg:3,xl:2,align:"right"}},[e._v(" 报销类型子类： ")]),a("el-col",{attrs:{xs:8,sm:6,md:4,lg:5,xl:4}},[e._v(" "+e._s(e.BXSubClass[e.baoxiaoDetail.baoxiao.BXSubClassCode])+" ")])],1),a("el-row",{attrs:{gutter:10}},[a("el-col",{attrs:{xs:4,sm:4,md:3,lg:3,xl:2,align:"right"}},[e._v(" 备注： ")]),a("el-col",{attrs:{xs:20,sm:20,md:21,lg:21,xl:22}},[e._v(" "+e._s(e.baoxiaoDetail.baoxiao.Remarks)+" ")])],1)],1),a("el-tab-pane",{attrs:{label:"社保信息",name:"second"}},[a("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:e.baoxiaoDetail.shebao,"tooltip-effect":"dark",border:""}},[a("el-table-column",{attrs:{label:"状态",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(e.ShebaoOrderItemStatus[t.row.BOrderItemStatus])+" ")]}}])}),a("el-table-column",{attrs:{label:"险种名称",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(e.sbType[t.row.sbType])+" ")]}}])}),a("el-table-column",{attrs:{prop:"Jishu",label:"基数",width:"100"}}),a("el-table-column",{attrs:{label:"开始日期",width:"200"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(e.moment(t.row.Startime).format("YYYY-MM-DD"))+" ")]}}])}),a("el-table-column",{attrs:{label:"结束日期",width:"200"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(e.SBEndDate?e.moment(t.row.SBEndDate).format("YYYY-MM-DD"):"")+" ")]}}])}),a("el-table-column",{attrs:{prop:"Bili",label:"比例"}})],1)],1),a("el-tab-pane",{attrs:{label:"收款账号信息",name:"account"}},[a("div",{staticClass:"accountBox"},[a("el-row",{attrs:{gutter:10}},[a("el-col",{attrs:{xs:8,sm:6,md:3,lg:3,xl:2}},[e._v(" 银行名称： ")]),a("el-col",{attrs:{xs:4,sm:6,md:4,lg:5,xl:4}},[e._v(" "+e._s(e.baoxiaoDetail.bankAccountInfo.BankAccountName)+" ")]),a("el-col",{attrs:{xs:4,sm:6,md:3,lg:3,xl:2}},[e._v(" 银行账号： ")]),a("el-col",{attrs:{xs:8,sm:6,md:4,lg:5,xl:4}},[e._v(" "+e._s(e.baoxiaoDetail.bankAccountInfo.BankAccount)+" ")])],1),a("el-row",{attrs:{gutter:10}},[a("el-col",{attrs:{xs:8,sm:6,md:3,lg:3,xl:2}},[e._v(" 开户行： ")]),a("el-col",{attrs:{xs:4,sm:6,md:4,lg:5,xl:4}},[e._v(" "+e._s(e.baoxiaoDetail.bankAccountInfo.BankName)+" ")]),a("el-col",{attrs:{xs:4,sm:6,md:3,lg:3,xl:2}},[e._v(" 账号类型： ")]),a("el-col",{attrs:{xs:8,sm:6,md:4,lg:5,xl:4}},[e._v(" "+e._s(e.PaymentTo[e.baoxiaoDetail.bankAccountInfo.BankAccountType])+" ")])],1)],1)]),a("el-tab-pane",{attrs:{label:"申报记录",name:"list"}},[a("el-timeline",e._l(e.baoxiaoDetail.logs,(function(t){return a("el-timeline-item",{key:t.LogGuid,attrs:{timestamp:t.LogTime,placement:"top",color:"#009688"}},[a("div",[e._v(e._s(e.BXStatus[t.BXStatus])),a("br"),a("span",{staticClass:"remark"},[e._v("备注："+e._s(t.Remarks))])])])})),1)],1)],1),a("el-divider",{attrs:{"content-position":"left"}},[e._v("收材料")]),a("el-form",{ref:"chooseForm",attrs:{model:e.refuseAcceptForm,rules:e.shenherRules,"label-width":"100px","validate-on-rule-change":e.validateChange}},[e.baoxiaoCailiao&&!!e.baoxiaoCailiao.length>0?a("el-form-item",{attrs:{label:"应收材料:"}},[e._l(e.baoxiaoCailiao,(function(t){return a("span",{key:t.BXCLItemGuid},[e._v(e._s(t.OrderNo+"."+t.CailiaoName+";")+" ")])}))],2):e._e(),a("el-form-item",{attrs:{label:"已收材料:",prop:"Remarks"}},[20==e.baoxiaoDetail.baoxiao.BXStatus||30==e.baoxiaoDetail.baoxiao.BXStatus||38==e.baoxiaoDetail.baoxiao.BXStatus?[a("el-input",{attrs:{type:"textarea"},model:{value:e.refuseAcceptForm.Remarks,callback:function(t){e.$set(e.refuseAcceptForm,"Remarks",t)},expression:"refuseAcceptForm.Remarks"}})]:[e._v(" "+e._s(e.refuseAcceptForm.Remarks?e.refuseAcceptForm.Remarks:"无")+" ")]],2)],1),a("el-row",{staticStyle:{"margin-top":"20px"},attrs:{gutter:20}},[a("el-col",{staticStyle:{"text-align":"center"},attrs:{span:24}},[20==e.baoxiaoDetail.baoxiao.BXStatus||30==e.baoxiaoDetail.baoxiao.BXStatus||38==e.baoxiaoDetail.baoxiao.BXStatus?a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.submit("chooseForm","0")}}},[e._v("收集完成")]):e._e(),20==e.baoxiaoDetail.baoxiao.BXStatus||30==e.baoxiaoDetail.baoxiao.BXStatus||38==e.baoxiaoDetail.baoxiao.BXStatus?a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.submit("chooseForm","1")}}},[e._v("继续收材料")]):e._e(),20==e.baoxiaoDetail.baoxiao.BXStatus||30==e.baoxiaoDetail.baoxiao.BXStatus||32==e.baoxiaoDetail.baoxiao.BXStatus||38==e.baoxiaoDetail.baoxiao.BXStatus?a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.stopCollect()}}},[e._v("终止收材料")]):e._e(),32==e.baoxiaoDetail.baoxiao.BXStatus&&20==e.baoxiaoDetail.baoxiao.ServiceType&&2==e.Operator.roleID?a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.Apply()}}},[e._v("上报社保机构")]):e._e(),32==e.baoxiaoDetail.baoxiao.BXStatus&&20==e.baoxiaoDetail.baoxiao.ServiceType&&2==e.Operator.roleID?a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.replenish()}}},[e._v("材料不完整")]):e._e(),40==e.baoxiaoDetail.baoxiao.BXStatus&&20==e.baoxiaoDetail.baoxiao.ServiceType&&2==e.Operator.roleID?a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.allowance()}}},[e._v("认定结果录入")]):e._e()],1)],1)],1),a("el-dialog",{attrs:{title:e.dialogTitle,visible:e.stopCollectVisible,width:"25%"},on:{"update:visible":function(t){e.stopCollectVisible=t},close:e.pageRefresh}},[a("el-form",{ref:"stopForm",attrs:{model:e.stopForm,rules:e.stopRules,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"情况说明:",prop:"Remarks"}},[a("el-input",{attrs:{type:"textarea"},model:{value:e.stopForm.Remarks,callback:function(t){e.$set(e.stopForm,"Remarks",t)},expression:"stopForm.Remarks"}})],1)],1),a("el-row",{staticStyle:{"margin-top":"20px"},attrs:{gutter:20}},[a("el-col",{staticStyle:{"text-align":"center"},attrs:{span:24}},[a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.stopCollectSubmit("stopForm")}}},[e._v("提交")])],1)],1)],1),a("el-dialog",{attrs:{title:"认定结果录入",visible:e.resultVisible,width:"25%"},on:{"update:visible":function(t){e.resultVisible=t},close:e.closeResult}},[a("el-form",{ref:"resultForm",attrs:{model:e.resultForm,rules:e.resultRules,"label-width":"120px"}},[a("el-form-item",{attrs:{label:"享受津贴天数:",prop:"AllowanceDays"}},[a("el-input",{attrs:{placeholder:""},model:{value:e.resultForm.AllowanceDays,callback:function(t){e.$set(e.resultForm,"AllowanceDays",e._n(t))},expression:"resultForm.AllowanceDays"}},[a("template",{slot:"suffix"},[e._v("天")])],2)],1),a("el-form-item",{attrs:{label:"享受津贴额度:",prop:"AllowanceAmount"}},[a("el-input",{attrs:{placeholder:""},model:{value:e.resultForm.AllowanceAmount,callback:function(t){e.$set(e.resultForm,"AllowanceAmount",e._n(t))},expression:"resultForm.AllowanceAmount"}},[a("template",{slot:"suffix"},[e._v("元")])],2)],1)],1),a("el-row",{staticStyle:{"margin-top":"20px"},attrs:{gutter:20}},[a("el-col",{staticStyle:{"text-align":"center"},attrs:{span:24}},[a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.resultSubmit("resultForm")}}},[e._v("提交")])],1)],1)],1),a("el-dialog",{attrs:{title:"申请社保享受",visible:e.newBaoxiaoVisible,width:"50%","destroy-on-close":!0,"close-on-click-modal":!1},on:{"update:visible":function(t){e.newBaoxiaoVisible=t},close:e.newBxClose}},[a("el-form",{ref:"newBxForm",attrs:{model:e.newBxForm,rules:e.newBxRules,"label-width":"120px"}},[a("el-row",[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"身份证号:",prop:"IDCard"}},[a("el-autocomplete",{staticClass:"inline-input idCard",attrs:{autosize:"","fetch-suggestions":e.querySearch,placeholder:"请输入身份证号选择员工"},on:{select:e.handleSelect},scopedSlots:e._u([{key:"default",fn:function(t){var o=t.item;return[a("div",{staticClass:"people"},[a("span",{staticClass:"name"},[e._v(e._s(o.PName+"--"+o.CardID))]),a("br"),e._v(e._s(o.ComName))])]}}]),model:{value:e.newBxForm.IDCard,callback:function(t){e.$set(e.newBxForm,"IDCard",t)},expression:"newBxForm.IDCard"}})],1)],1),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"员工姓名:",prop:"PName"}},[a("el-input",{attrs:{placeholder:"系统自动回显",readonly:"true"},model:{value:e.newBxForm.PName,callback:function(t){e.$set(e.newBxForm,"PName",e._n(t))},expression:"newBxForm.PName"}})],1)],1),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"联系方式:",prop:"LinkInfo"}},[a("el-input",{attrs:{placeholder:"系统自动回显",readonly:"true"},model:{value:e.newBxForm.LinkInfo,callback:function(t){e.$set(e.newBxForm,"LinkInfo",e._n(t))},expression:"newBxForm.LinkInfo"}})],1)],1),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"公司名称:",prop:"ComName"}},[a("el-input",{attrs:{placeholder:"系统自动回显",readonly:"true"},model:{value:e.newBxForm.ComName,callback:function(t){e.$set(e.newBxForm,"ComName",e._n(t))},expression:"newBxForm.ComName"}})],1)],1),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"社保报销类型:",prop:"BXClassCode"}},[a("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择",disabled:!e.newBxForm.RLZGUID},on:{change:e.BXclassChange},model:{value:e.newBxForm.BXClassCode,callback:function(t){e.$set(e.newBxForm,"BXClassCode",t)},expression:"newBxForm.BXClassCode"}},e._l(e.BXClassList,(function(e){return a("el-option",{key:e.code,attrs:{label:e.name,value:e.code}})})),1)],1)],1),a("el-col",{attrs:{span:12}},[e.BXClassCode&&e.BXClassCode.length>0?a("el-form-item",{attrs:{label:"报销类型子类:",prop:"BXSubClassCode"}},[a("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择",disabled:!e.newBxForm.RLZGUID},on:{change:e.BXsubChange},model:{value:e.newBxForm.BXSubClassCode,callback:function(t){e.$set(e.newBxForm,"BXSubClassCode",t)},expression:"newBxForm.BXSubClassCode"}},e._l(e.BXClassCode,(function(e){return a("el-option",{key:e.code,attrs:{label:e.name,value:e.code}})})),1)],1):e._e()],1),a("el-col",{attrs:{span:12}},[11==e.newBxForm.BXClassCode||12==e.newBxForm.BXClassCode?a("el-form-item",{attrs:{prop:"AllIn"}},[a("el-checkbox-group",{model:{value:e.newBxForm.AllIn,callback:function(t){e.$set(e.newBxForm,"AllIn",t)},expression:"newBxForm.AllIn"}},[a("el-checkbox",{attrs:{label:e.allowSameTime,name:"type"},on:{change:e.allInChange}})],1)],1):e._e()],1),a("el-col",{attrs:{span:12}},[21!=e.newBxForm.BXClassCode&&22!=e.newBxForm.BXClassCode?a("el-form-item",{attrs:{label:"生育城市:",prop:"EventCityCode"}},[a("el-cascader",{staticClass:"idCard",attrs:{options:e.options,disabled:!e.newBxForm.RLZGUID},on:{change:e.onChange},model:{value:e.newBxForm.EventCityCode,callback:function(t){e.$set(e.newBxForm,"EventCityCode",t)},expression:"newBxForm.EventCityCode"}})],1):e._e()],1),a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"需要准备材料:",prop:"AllowanceAmount"}},[e.baoxiaoCailiao&&!!e.baoxiaoCailiao.length>0?[a("p",{staticClass:"cailiao"},e._l(e.baoxiaoCailiao,(function(t){return a("span",{key:t.BXCLItemGuid},[e._v(e._s(t.OrderNo+"."+t.CailiaoName))])})),0)]:[e._v(" "+e._s(e.baoxiaoMsg)+" ")]],2)],1),a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"银行账户信息:",prop:"BankAccountInfoGuid"}},[a("el-row",[a("el-col",{attrs:{span:19}},[a("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择",disabled:!e.newBxForm.RLZGUID},model:{value:e.newBxForm.BankAccountInfoGuid,callback:function(t){e.$set(e.newBxForm,"BankAccountInfoGuid",t)},expression:"newBxForm.BankAccountInfoGuid"}},e._l(e.bankAccountList,(function(e){return a("el-option",{key:e.BankAccountInfoGuid,attrs:{label:e.BankAccountName+"-"+e.BankName+"-"+e.BankAccount,value:e.BankAccountInfoGuid}})})),1)],1),a("el-col",{attrs:{span:4,offset:1}},[a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.newBank()}}},[e._v("新建账户")])],1)],1)],1)],1),a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"已收材料:",prop:"Cailiao"}},[a("el-input",{attrs:{type:"textarea",rows:2,placeholder:""},model:{value:e.newBxForm.Cailiao,callback:function(t){e.$set(e.newBxForm,"Cailiao",t)},expression:"newBxForm.Cailiao"}})],1)],1),a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"备注:",prop:"Remarks"}},[a("el-input",{attrs:{type:"textarea",rows:2,placeholder:""},model:{value:e.newBxForm.Remarks,callback:function(t){e.$set(e.newBxForm,"Remarks",t)},expression:"newBxForm.Remarks"}})],1)],1)],1)],1),a("el-row",{staticStyle:{"margin-top":"20px"},attrs:{gutter:20}},[a("el-col",{staticStyle:{"text-align":"center"},attrs:{span:24}},[a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.newBxSubmit("newBxForm","0")}}},[e._v("提交并继续收材料")]),a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.newBxSubmit("newBxForm")}}},[e._v("提交且收材料完成")])],1)],1)],1),a("newBank",{attrs:{show:e.drawer.newbank,refresh:e.getBankList}})],1)},s=[],r=(a("4160"),a("b0c0"),a("159b"),a("ade3")),i=a("4020"),c=a("c32d"),u=a.n(c);a("ac1f"),a("1276");function m(e){var t=!0;if((t&&!e||!/^\d{6}(18|19|20)?\d{2}(0[1-9]|1[012])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)$/i.test(e))&&(t=!1),t&&18==e.length){for(var a=e.split(""),o=[7,9,10,5,8,4,2,1,6,3,7,9,10,5,8,4,2],l=[1,0,"X",9,8,7,6,5,4,3,2],n=0,s=0,r=0,i=0;i<17;i++)s=a[i],r=o[i],n+=s*r;l[n%11]!=a[17]&&(t=!1)}return t}var d=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{attrs:{title:"新建银行账户",visible:e.visible.show,width:"25%","close-on-click-modal":!1},on:{"update:visible":function(t){return e.$set(e.visible,"show",t)},close:e.closeResult}},[a("el-form",{ref:"newbankForm",attrs:{model:e.newbankForm,rules:e.newbankRules,"label-width":"120px"}},[a("el-form-item",{attrs:{label:"银行名称:",prop:"BankAccountName"}},[a("el-input",{attrs:{placeholder:""},model:{value:e.newbankForm.BankAccountName,callback:function(t){e.$set(e.newbankForm,"BankAccountName",t)},expression:"newbankForm.BankAccountName"}})],1),a("el-form-item",{attrs:{label:"开户行:",prop:"BankName"}},[a("el-input",{attrs:{placeholder:""},model:{value:e.newbankForm.BankName,callback:function(t){e.$set(e.newbankForm,"BankName",t)},expression:"newbankForm.BankName"}})],1),a("el-form-item",{attrs:{label:"账号:",prop:"BankAccount"}},[a("el-input",{attrs:{placeholder:""},model:{value:e.newbankForm.BankAccount,callback:function(t){e.$set(e.newbankForm,"BankAccount",e._n(t))},expression:"newbankForm.BankAccount"}})],1),a("el-form-item",{attrs:{label:"备注:",prop:"Remarks"}},[a("el-input",{attrs:{type:"textarea",placeholder:""},model:{value:e.newbankForm.Remarks,callback:function(t){e.$set(e.newbankForm,"Remarks",t)},expression:"newbankForm.Remarks"}})],1)],1),a("el-row",{staticStyle:{"margin-top":"20px"},attrs:{gutter:20}},[a("el-col",{staticStyle:{"text-align":"center"},attrs:{span:24}},[a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.resultSubmit("newbankForm")}}},[e._v("提交")])],1)],1)],1)},b=[],p={name:"newBank",components:{},props:{show:{type:Object,default:{show:!1}},refresh:{type:Function,default:null}},data:function(){return{visible:{show:!1},newbankForm:{BankAccountName:"",BankName:"",BankAccount:"",Remarks:""},newbankRules:{BankAccountName:[{required:!0,message:"请输入",trigger:"blur"}],BankName:[{required:!0,message:"请输入",trigger:"blur"}],BankAccount:[{required:!0,message:"请输入",trigger:"blur"},{type:"number",message:"必须为数字值"}]}}},watch:{show:function(e,t){var a=this;e.show&&(a.visible=e)}},methods:{resultSubmit:function(e){var t=this;this.$refs[e].validate((function(a){if(a){var o=t.newbankForm;o.PGUID=t.visible.PGUID,o.BankAccountType="10",i["a"].post("/api/Other/BankAccountInfo/Add",o).then((function(a){var o=a;o.code>0?t.$message({message:o.msg,type:"error"}):(t.$refs[e].resetFields(),t.refresh(),t.onClose(),t.$message({message:o.msg,type:"success"}))})).catch((function(e){console.log(e)}))}}))},onClose:function(){this.visible.show=!1}}},f=p,x=a("2877"),g=Object(x["a"])(f,d,b,!1,null,null,null),h=g.exports,B={name:"index",components:{moment:u.a,newBank:h},data:function(){var e,t=function(e,t,a){!t||m(t)?a():a("身份证号不符合规则！")};return e={moment:u.a,formInline:{IDCard:"",BXStatus:20,PageSize:10,Current:1,total:0},tableData:[],dialogTableVisible:!1,city:{},ShebaoOrderItemStatus:{},ShebaoOrderStatus:{},sbType:{},selectedIDs:[],shenherRules:{Remarks:[{required:!0,message:"已收材料不能为空",trigger:"blur"}]},PaymentTo:{},BXStatus:{},BXStatusList:[],BXClass:{},BXSubClass:{}},Object(r["a"])(e,"city",{}),Object(r["a"])(e,"baoxiaoDetail",{bankAccountInfo:{},baoxiao:{"姓名":"","身份证号":"",LinkInfo:"",CreateDate:"",EventCityCode:"",PaymentTo:"",BXClassCode:"",BXSubClassCode:"",Cailiao:null,Remarks:""},log:[]}),Object(r["a"])(e,"activeName","first"),Object(r["a"])(e,"ShebaoOrderItemStatus",{}),Object(r["a"])(e,"ShebaoOrderStatus",{}),Object(r["a"])(e,"sbType",{}),Object(r["a"])(e,"acceptVisible",!1),Object(r["a"])(e,"acceptForm",{Remarks:""}),Object(r["a"])(e,"chooseAR",{}),Object(r["a"])(e,"refuseVisible",!1),Object(r["a"])(e,"refuseAcceptForm",{Remarks:""}),Object(r["a"])(e,"chooseRefuse",{}),Object(r["a"])(e,"validateChange",!0),Object(r["a"])(e,"baoxiaoCailiao",[]),Object(r["a"])(e,"baoxiaoMsg",""),Object(r["a"])(e,"stopForm",{Remarks:""}),Object(r["a"])(e,"stopRules",{Remarks:[{required:!0,message:"情况说明不能为空",trigger:"blur"}]}),Object(r["a"])(e,"stopCollectVisible",!1),Object(r["a"])(e,"dialogTitle",""),Object(r["a"])(e,"dialogType",""),Object(r["a"])(e,"Operator",{}),Object(r["a"])(e,"resultVisible",!1),Object(r["a"])(e,"resultForm",{AllowanceDays:"",AllowanceAmount:""}),Object(r["a"])(e,"resultRules",{AllowanceDays:[{required:!0,message:"请输入",trigger:"blur"},{type:"number",message:"必须为数字值"}],AllowanceAmount:[{required:!0,message:"请输入",trigger:"blur"},{type:"number",message:"必须为数字值"}]}),Object(r["a"])(e,"newBaoxiaoVisible",!1),Object(r["a"])(e,"newBxForm",{IDCard:"",PName:"",ComName:"",BXClassCode:"",BXSubClassCode:"",EventCityCode:"",Cailiao:"",Remarks:"",LinkInfo:"",AllIn:!1,BankAccountInfoGuid:""}),Object(r["a"])(e,"newBxRules",{IDCard:[{required:!0,validator:t,trigger:"change"}],BXClassCode:[{required:!0,message:"请选择",trigger:"change"}],BXSubClassCode:[{required:!0,message:"请选择",trigger:"change"}],EventCityCode:[{required:!0,message:"请输入",trigger:"change"}],Remarks:[{required:!1,message:"请输入",trigger:"blur"}],BankAccountInfoGuid:[{required:!1,message:"请输入",trigger:"change"}]}),Object(r["a"])(e,"BXClassCode",[]),Object(r["a"])(e,"BXClassList",[]),Object(r["a"])(e,"baoxiaoCailiao",[]),Object(r["a"])(e,"baoxiaoMsg",""),Object(r["a"])(e,"options",[]),Object(r["a"])(e,"allowSameTime",""),Object(r["a"])(e,"bankAccountList",[]),Object(r["a"])(e,"drawer",{newbank:{show:!1}}),Object(r["a"])(e,"PGUID",""),Object(r["a"])(e,"ServiceType",""),e},created:function(){this.init()},methods:{init:function(){var e=this;i["a"].post("/api/Dim/Enum/DimDecode",{Names:["city"]}).then((function(t){0===t.code&&(e.city=t.data.city)})).catch((function(e){console.log(e)})),i["a"].post("/api/Dim/Enum/GetEnum",{Names:["PaymentTo","BXStatus","ShebaoOrderItemStatus","ShebaoOrderStatus","sbType"]}).then((function(t){var a=t;0===a.code&&(a.data.PaymentTo.forEach((function(t,a){e.PaymentTo[t.key]=t.text})),e.BXStatusList=a.data.BXStatus,a.data.BXStatus.forEach((function(t,a){e.BXStatus[t.key]=t.text})),e.pagechange(1),a.data.ShebaoOrderStatus.forEach((function(t,a){e.ShebaoOrderStatus[t.key]=t.text})),a.data.sbType.forEach((function(t,a){e.sbType[t.key]=t.text})),a.data.ShebaoOrderItemStatus.forEach((function(t,a){e.ShebaoOrderItemStatus[t.key]=t.text})))})).catch((function(e){console.log(e)})),i["a"].post("/api/Dim/Enum/GetDim",{Names:["city","BXClass","BXSubClass"]}).then((function(t){0===t.code&&(e.BXClassList=t.data.BXClass,t.data.BXClass.forEach((function(t,a){e.BXClass[t.code]=t.name})),t.data.BXSubClass.forEach((function(t,a){e.BXSubClass[t.code]=t.name})),t.data.city.forEach((function(t,a){e.city[t.code]=t.name})))})).catch((function(e){console.log(e)})),i["a"].post("/api/Dim/Enum/ProvinceCityTree",{Names:["ProvinceCityTree"]}).then((function(t){0===t.code&&(e.options=t.data.tree)})).catch((function(e){console.log(e)}))},pageRefresh:function(){this.pagechange(this.formInline.Current)},pagechange:function(e){var t=this,a=t.formInline;a.Current=e,i["a"].post("/api/ClientSide/Baoxiao/List",a).then((function(e){0===e.code&&(t.tableData=e.data.rows,t.formInline.total=e.data.count,t.Operator=e.data.Operator)})).catch((function(e){console.log(e)}))},detail:function(e){var t={SBBXGuid:e.SBBXGuid},a=this;a.baoxiaoCailiao=[],i["a"].post("/api/ClientSide/Baoxiao/Detail ",t).then((function(t){0===t.code&&(a.baoxiaoDetail=t.data,a.dialogTableVisible=!0,a.chooseAR=e,a.searchCailiao(),a.refuseAcceptForm.Remarks=a.baoxiaoDetail.baoxiao.Cailiao)})).catch((function(e){console.log(e)}))},submit:function(e,t){var a=this,o={SBBXGuid:a.chooseAR.SBBXGuid,Cailiao:a.refuseAcceptForm.Remarks};o.Finished="1"!=t,this.$refs[e].validate((function(e){e&&i["a"].post("/api/ClientSide/Baoxiao/Receive",o).then((function(e){0===e.code?(a.$message({message:e.msg,type:"success"}),a.pageRefresh(),a.dialogTableVisible=!1):a.$message({message:e.msg,type:"error"})})).catch((function(e){console.log(e)}))}))},searchCailiao:function(){var e=this,t={RLZGUID:e.baoxiaoDetail.baoxiao.RLZGUID,BXClassCode:e.baoxiaoDetail.baoxiao.BXClassCode,BXSubClassCode:e.baoxiaoDetail.baoxiao.BXSubClassCode,EventCityCode:e.baoxiaoDetail.baoxiao.EventCityCode};i["a"].post("/api/Other/BaoxiaoCailiao/Find",t).then((function(t){var a=t;0===a.code?e.baoxiaoCailiao=a.data.rows:e.baoxiaoMsg=a.msg})).catch((function(e){console.log(e)}))},stopCollect:function(){this.stopCollectVisible=!0,this.dialogTitle="终止收集材料",this.dialogType="stop"},Apply:function(){this.stopCollectVisible=!0,this.dialogTitle="上报社保机构",this.dialogType="apply"},replenish:function(){this.stopCollectVisible=!0,this.dialogTitle="材料不完整",this.dialogType="replenish"},stopCollectSubmit:function(e){var t=this,a="",o={SBBXGuid:t.chooseAR.SBBXGuid,Remarks:t.stopForm.Remarks};"stop"==t.dialogType&&(a="/api/ClientSide/Baoxiao/Close"),"apply"==t.dialogType&&(a="/api/ClientSide/Baoxiao/Submit"),"replenish"==t.dialogType&&(a="/api/ClientSide/Baoxiao/Replenish"),this.$refs[e].validate((function(e){e&&i["a"].post(a,o).then((function(e){0===e.code?(t.$message({message:e.msg,type:"success"}),t.pageRefresh(),t.stopCollectVisible=!1,t.dialogTableVisible=!1):t.$message({message:e.msg,type:"error"})})).catch((function(e){console.log(e)}))}))},allowance:function(){this.resultVisible=!0},resultSubmit:function(e){var t=this,a=t.resultForm;a.SBBXGuid=t.chooseAR.SBBXGuid,this.$refs[e].validate((function(e){e&&i["a"].post("/api/ClientSide/Baoxiao/Allowance",a).then((function(e){0===e.code?(t.$message({message:e.msg,type:"success"}),t.pageRefresh(),t.resultVisible=!1):t.$message({message:e.msg,type:"error"})})).catch((function(e){console.log(e)}))}))},closeResult:function(){this.detail(this.chooseAR)},querySearch:function(e,t){var a=this;a.validateIDCard(e)?i["a"].post("/api/ClientSide/Order/List",{CardID:a.newBxForm.IDCard,Current:1,PageSize:50}).then((function(e){var o=e;0===o.code&&(o.data.rows.length>0?(o.data.rows.forEach((function(e,t){e.value=e.CardID})),t(o.data.rows)):(t([]),a.$message({message:"没有该员工信息，无法新增！",type:"error"})))})).catch((function(e){console.log(e)})):t([])},handleSelect:function(e){console.log(e);var t=this;this.newBxForm.PName=e.PName,this.newBxForm.ComName=e.ComName,this.newBxForm.RLZGUID=e.key,t.ServiceType=e.ServiceType,t.PGUID=e.PGUID,this.newBxForm.LinkInfo=e.rzMobile,t.getBankList()},getBankList:function(){var e=this;i["a"].post("/api/Other/BankAccountInfo/List",{BankAccountType:"10",PGUID:e.PGUID,pageSize:50,current:1}).then((function(t){var a=t;0===a.code&&(e.bankAccountList=a.data.rows)})).catch((function(e){console.log(e)}))},addBaoxiao:function(){this.newBaoxiaoVisible=!0,this.baoxiaoCailiao=[]},validateIDCard:function(e){return!(!e||!m(e))},BXclassChange:function(e){var t=this;"21"!=e&&"22"!=e||(t.newBxForm.EventCityCode=""),"20"==t.ServiceType||"11"!=e&&!t.newBxForm.AllIn?t.newBxRules.BankAccountInfoGuid[0].required=!1:t.newBxRules.BankAccountInfoGuid[0].required=!0,i["a"].post("/api/Dim/Enum/GetBXSubClass",{BXClassCode:e}).then((function(a){var o=a;0===o.code&&(t.BXClassCode=o.data.bxsubclass,t.newBxForm.BXSubClassCode="","11"==e&&(t.allowSameTime="是否同时申报生育津贴"),"12"==e&&(t.allowSameTime="是否同时申报生育定额"),t.searchCailiaoFun())})).catch((function(e){console.log(e)}))},searchCailiaoFun:function(){var e=this;console.log(e.newBxForm);var t={BXClassCode:e.newBxForm.BXClassCode,BXSubClassCode:e.newBxForm.BXSubClassCode,EventCityCode:e.newBxForm.EventCityCode&&e.newBxForm.EventCityCode.length>0?e.newBxForm.EventCityCode[e.newBxForm.EventCityCode.length-1]:""};e.newBxForm.RLZGUID?(t.RLZGUID=e.newBxForm.RLZGUID,i["a"].post("/api/Other/BaoxiaoCailiao/Find",t).then((function(t){var a=t;0===a.code?(e.baoxiaoCailiao=a.data.rows,a.data.rows&&0==a.data.rows.length?e.baoxiaoMsg="此享受项目未找到材料名录，请等待客户电话沟通":e.baoxiaoMsg=""):(e.baoxiaoCailiao="",e.baoxiaoMsg=a.msg)})).catch((function(e){console.log(e)}))):e.$message.error("请先输入身份证号选择员工")},BXsubChange:function(e){var t=this;t.searchCailiaoFun()},onChange:function(e){var t=this;t.searchCailiaoFun()},newBxSubmit:function(e,t){var a=this,o=a.newBxForm;o.EventCityCode=a.newBxForm.EventCityCode.length>0?a.newBxForm.EventCityCode[a.newBxForm.EventCityCode.length-1]:"",o.PaymentTo=10,o.CailiaoFinished="0"!=t,this.$refs[e].validate((function(e){e&&i["a"].post("/api/ClientSide/Baoxiao/Add",o).then((function(e){0===e.code?(a.$message({message:e.msg,type:"success"}),a.newBxClose(),a.pageRefresh()):a.$message({message:e.msg,type:"error"})})).catch((function(e){console.log(e)}))}))},newBxClose:function(){this.newBaoxiaoVisible=!1,this.baoxiaoCailiao=[],this.baoxiaoMsg="",this.newBxForm={IDCard:"",PName:"",ComName:"",BXClassCode:"",BXSubClassCode:"",EventCityCode:"",Cailiao:"",Remarks:"",LinkInfo:"",AllIn:!1,BankAccountInfoGuid:""}},newBank:function(){var e=this;e.newBxForm.RLZGUID?e.drawer.newbank={show:!0,PGUID:e.PGUID}:e.$message({message:"请先输入身份证号选择员工",type:"error"})},allInChange:function(e){"20"==this.ServiceType||!e&&11!=this.newBxForm.BXClassCode?this.newBxRules.BankAccountInfoGuid[0].required=!1:this.newBxRules.BankAccountInfoGuid[0].required=!0}}},C=B,v=(a("0cb0"),Object(x["a"])(C,n,s,!1,null,null,null)),w=v.exports,y=a("5c96");a("0fae");l.a.config.productionTip=!1,l.a.prototype.$ELEMENT={size:"small"},l.a.use(y["Pagination"]),l.a.use(y["Form"]),l.a.use(y["Table"]),l.a.use(y["Dialog"]),l.a.use(u.a),l.a.use(y["Input"]),l.a.use(y["Radio"]),new l.a({render:function(e){return e(w)}}).$mount("#app")},c32d:function(e,t){e.exports=moment}});