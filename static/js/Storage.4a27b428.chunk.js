(this.webpackJsonpbsc_admin_backeend=this.webpackJsonpbsc_admin_backeend||[]).push([[25],{1395:function(e,t,a){"use strict";a.r(t);a(506);var n=a(509),l=(a(497),a(501)),i=(a(915),a(913)),r=(a(70),a(6)),o=(a(86),a(28)),c=(a(488),a(487)),u=(a(237),a(69)),s=(a(238),a(142)),d=(a(98),a(41)),h=a(16),m=a(43),f=a(44),p=a(56),g=a(55),y=(a(239),a(177)),E=(a(502),a(505)),b=a(0),v=a.n(b),k=a(873),w=a(724),S=E.a.Panel,O=[{title:"Id",dataIndex:"id",key:"id",width:100,align:"center"},{title:"\u540d\u79f0",dataIndex:"name",key:"name",width:100,align:"center"},{title:"Sku",key:"sku",dataIndex:"sku",width:100,align:"center",render:function(e){return v.a.createElement(y.a,{key:e},e)}},{title:"\u5238\u53f7",dataIndex:"unique_code",key:"unique_code",width:195,align:"center"},{title:"\u5bc6\u7801",dataIndex:"unique_pass",key:"unique_pass",width:195,align:"center"},{title:"\u5151\u6362\u72b6\u6001",dataIndex:"status",key:"status",width:100,align:"center",render:function(e){var t=1==e?"green":2==e?"red":"";return v.a.createElement(y.a,{color:t,key:e},1==e?"\u5df2\u5151\u6362":"\u672a\u5151\u6362")}},{title:"\u5e93\u5b58\u72b6\u6001",dataIndex:"state",key:"state",width:100,align:"center",render:function(e){var t=1==e?"green":2==e?"red":"";return v.a.createElement(y.a,{color:t,key:e},1==e?"\u6709\u6548":"\u65e0\u6548")}}],C=function(e){Object(p.a)(y,e);var t=Object(g.a)(y);function y(){var e;Object(m.a)(this,y);for(var n=arguments.length,l=new Array(n),i=0;i<n;i++)l[i]=arguments[i];return(e=t.call.apply(t,[this].concat(l)))._isMounted=!1,e.state={loading:!1,total:0,list:[],listQuery:{page:1,limit:10,name:"",state:1,status:"",sku:""},filename:"excel-file",autoWidth:!0,bookType:"xlsx",downloadLoading:!1,selectedRows:[],selectedRowKeys:[],productList:[],productTotal:0,productListQuery:{page:1,limit:10,name:"",state:1,sku:""}},e.fetchData=function(){e.setState({loading:!0}),Object(k.b)(e.state.listQuery).then((function(t){e.setState({loading:!1});var a=t.data.data.list,n=t.data.data.total;e._isMounted&&e.setState({list:a,total:n})})),Object(w.c)(e.state.productListQuery).then((function(t){e.setState({loading:!1});var a=t.data.data.list,n=t.data.data.total;e._isMounted&&e.setState({productList:a,productTotal:n})}))},e.filterNameChange=function(t){var a=t.target.value;e.setState((function(e){return{listQuery:Object(h.a)({},e.listQuery,{name:a})}}))},e.filterStatusChange=function(t){e.setState((function(e){return{listQuery:Object(h.a)({},e.listQuery,{status:t})}}))},e.filterStateChange=function(t){e.setState((function(e){return{listQuery:Object(h.a)({},e.listQuery,{state:t})}}))},e.onSelectChange=function(t,a){e.setState({selectedRows:a,selectedRowKeys:t})},e.handleDownload=function(t){"selected"!==t||0!==e.state.selectedRowKeys.length?(e.setState({downloadLoading:!0}),Promise.all([a.e(6),a.e(38),a.e(36)]).then(a.bind(null,1390)).then((function(a){var n="all"===t?e.state.list:e.state.selectedRows,l=e.formatJson(["id","name","sku","unique_code","unique_pass"],n);a.export_json_to_excel({header:["Id","\u540d\u79f0","sku","\u552f\u4e00\u7801","\u5151\u6362\u9762\u819c"],data:l,filename:e.state.filename,autoWidth:e.state.autoWidth,bookType:e.state.bookType}),e.setState({selectedRowKeys:[],downloadLoading:!1})}))):d.a.error("\u81f3\u5c11\u9009\u62e9\u4e00\u9879\u8fdb\u884c\u5bfc\u51fa")},e.filenameChange=function(t){e.setState({filename:t.target.value})},e.autoWidthChange=function(t){e.setState({autoWidth:t.target.value})},e.bookTypeChange=function(t){e.setState({bookType:t})},e}return Object(f.a)(y,[{key:"componentDidMount",value:function(){this._isMounted=!0,this.fetchData()}},{key:"componentWillUnmount",value:function(){this._isMounted=!1}},{key:"formatJson",value:function(e,t){return t.map((function(t){return e.map((function(e){return t[e]}))}))}},{key:"render",value:function(){var e={selectedRowKeys:this.state.selectedRowKeys,onChange:this.onSelectChange};return v.a.createElement("div",{className:"app-container"},v.a.createElement(E.a,{defaultActiveKey:["1"]},v.a.createElement(S,{header:"\u7b5b\u9009",key:"1"},v.a.createElement(u.a,{layout:"inline"},v.a.createElement(u.a.Item,{label:"\u540d\u79f0:"},v.a.createElement(s.a,{onChange:this.filterNameChange})),v.a.createElement(u.a.Item,{label:"\u5151\u6362\u72b6\u6001:"},v.a.createElement(c.a,{style:{width:120},onChange:this.filterStatusChange},v.a.createElement(c.a.Option,{value:""},"\u65e0"),v.a.createElement(c.a.Option,{value:"1"},"\u5df2\u5151\u6362"),v.a.createElement(c.a.Option,{value:"2"},"\u672a\u5151\u6362"))),v.a.createElement(u.a.Item,{label:"\u5546\u54c1\u72b6\u6001:"},v.a.createElement(c.a,{style:{width:120},onChange:this.filterStateChange},v.a.createElement(c.a.Option,{value:""},"\u65e0"),v.a.createElement(c.a.Option,{value:"1"},"\u6709\u6548"),v.a.createElement(c.a.Option,{value:"2"},"\u65e0\u6548"))),v.a.createElement(u.a.Item,null,v.a.createElement(o.a,{type:"primary",icon:"search",onClick:this.fetchData},"\u641c\u7d22"))))),v.a.createElement("br",null),v.a.createElement(E.a,{defaultActiveKey:["1"]},v.a.createElement(S,{header:"\u5bfc\u51fa\u9009\u9879",key:"1"},v.a.createElement(u.a,{layout:"inline"},v.a.createElement(u.a.Item,{label:"\u6587\u4ef6\u540d:"},v.a.createElement(s.a,{style:{width:"250px"},prefix:v.a.createElement(r.a,{type:"file",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"\u8bf7\u8f93\u5165\u6587\u4ef6\u540d(\u9ed8\u8ba4excel-file)",onChange:this.filenameChange})),v.a.createElement(u.a.Item,{label:"\u5355\u5143\u683c\u5bbd\u5ea6\u662f\u5426\u81ea\u9002\u5e94:"},v.a.createElement(i.a.Group,{onChange:this.autoWidthChange,value:this.state.autoWidth},v.a.createElement(i.a,{value:!0},"\u662f"),v.a.createElement(i.a,{value:!1},"\u5426"))),v.a.createElement(u.a.Item,{label:"\u6587\u4ef6\u7c7b\u578b:"},v.a.createElement(c.a,{defaultValue:"xlsx",style:{width:120},onChange:this.bookTypeChange},v.a.createElement(c.a.Option,{value:"xlsx"},"xlsx"),v.a.createElement(c.a.Option,{value:"csv"},"csv"),v.a.createElement(c.a.Option,{value:"txt"},"txt"))),v.a.createElement(u.a.Item,null,v.a.createElement(o.a,{type:"primary",icon:"file-excel",onClick:this.handleDownload.bind(null,"all")},"\u5168\u90e8\u5bfc\u51fa")),v.a.createElement(u.a.Item,null,v.a.createElement(o.a,{type:"primary",icon:"file-excel",onClick:this.handleDownload.bind(null,"selected")},"\u5bfc\u51fa\u5df2\u9009\u62e9\u9879"))))),v.a.createElement("br",null),v.a.createElement(l.a,{bordered:!0,columns:O,rowKey:function(e){return e.id},dataSource:this.state.list,pagination:!1,rowSelection:e,loading:this.state.downloadLoading}),v.a.createElement("br",null),v.a.createElement(n.a,{total:this.state.total,pageSizeOptions:["10","20","40"],showTotal:function(e){return"\u5171".concat(e,"\u6761\u6570\u636e")},onChange:this.changePage,current:this.state.listQuery.page,onShowSizeChange:this.changePageSize,showSizeChanger:!0,showQuickJumper:!0,hideOnSinglePage:!0}))}}]),y}(b.Component);t.default=C},724:function(e,t,a){"use strict";a.d(t,"c",(function(){return l})),a.d(t,"a",(function(){return i})),a.d(t,"b",(function(){return r}));var n=a(38);function l(e){return Object(n.a)({url:"/product/find",method:"POST",data:e})}function i(e){return Object(n.a)({url:"/product/delete",method:"POST",data:e})}function r(e){return Object(n.a)({url:"/product/save",method:"POST",data:e})}},873:function(e,t,a){"use strict";a.d(t,"b",(function(){return l})),a.d(t,"a",(function(){return i}));var n=a(38);function l(e){return Object(n.a)({url:"/product/inventory",method:"POST",data:e})}function i(e){return Object(n.a)({url:"/product/storage",method:"POST",data:e})}}}]);