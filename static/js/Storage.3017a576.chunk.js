(this.webpackJsonpbsc_admin_backeend=this.webpackJsonpbsc_admin_backeend||[]).push([[23],{1413:function(e,t,a){"use strict";a.r(t);a(504);var n=a(506),l=(a(496),a(499)),i=(a(778),a(776)),r=(a(70),a(6)),o=(a(86),a(28)),c=(a(485),a(484)),s=(a(237),a(69)),u=(a(238),a(142)),d=(a(98),a(41)),h=a(16),m=a(43),f=a(44),g=a(56),y=a(55),p=(a(239),a(177)),E=(a(502),a(503)),v=a(0),w=a.n(v),k=a(38);function b(e){return Object(k.a)({url:"/product/inventory",method:"POST",data:e})}var C=E.a.Panel,S=[{title:"Id",dataIndex:"id",key:"id",width:100,align:"center"},{title:"\u540d\u79f0",dataIndex:"name",key:"name",width:100,align:"center"},{title:"Sku",key:"sku",dataIndex:"sku",width:100,align:"center",render:function(e){return w.a.createElement(p.a,{key:e},e)}},{title:"\u5238\u53f7",dataIndex:"unique_code",key:"unique_code",width:195,align:"center"},{title:"\u5bc6\u7801",dataIndex:"unique_pass",key:"unique_pass",width:195,align:"center"},{title:"\u5151\u6362\u72b6\u6001",dataIndex:"status",key:"status",width:100,align:"center",render:function(e){var t=1==e?"green":2==e?"red":"";return w.a.createElement(p.a,{color:t,key:e},1==e?"\u5df2\u5151\u6362":"\u672a\u5151\u6362")}},{title:"\u5e93\u5b58\u72b6\u6001",dataIndex:"state",key:"state",width:100,align:"center",render:function(e){var t=1==e?"green":2==e?"red":"";return w.a.createElement(p.a,{color:t,key:e},1==e?"\u6709\u6548":"\u65e0\u6548")}}],x=function(e){Object(g.a)(p,e);var t=Object(y.a)(p);function p(){var e;Object(m.a)(this,p);for(var n=arguments.length,l=new Array(n),i=0;i<n;i++)l[i]=arguments[i];return(e=t.call.apply(t,[this].concat(l)))._isMounted=!1,e.state={listQuery:{page:1,limit:10,name:"",state:1,status:""},loading:!1,total:0,list:[],filename:"excel-file",autoWidth:!0,bookType:"xlsx",downloadLoading:!1,selectedRows:[],selectedRowKeys:[]},e.fetchData=function(){e.setState({loading:!0}),b(e.state.listQuery).then((function(t){e.setState({loading:!1});var a=t.data.data.list,n=t.data.data.total;e._isMounted&&e.setState({list:a,total:n})}))},e.filterNameChange=function(t){var a=t.target.value;e.setState((function(e){return{listQuery:Object(h.a)({},e.listQuery,{name:a})}}))},e.filterStatusChange=function(t){e.setState((function(e){return{listQuery:Object(h.a)({},e.listQuery,{status:t})}}))},e.filterStateChange=function(t){e.setState((function(e){return{listQuery:Object(h.a)({},e.listQuery,{state:t})}}))},e.onSelectChange=function(t,a){e.setState({selectedRows:a,selectedRowKeys:t})},e.handleDownload=function(t){"selected"!==t||0!==e.state.selectedRowKeys.length?(e.setState({downloadLoading:!0}),Promise.all([a.e(6),a.e(34),a.e(36)]).then(a.bind(null,1396)).then((function(a){var n="all"===t?e.state.list:e.state.selectedRows,l=e.formatJson(["id","name","sku","unique_code","unique_pass"],n);a.export_json_to_excel({header:["Id","\u540d\u79f0","sku","\u552f\u4e00\u7801","\u5151\u6362\u9762\u819c"],data:l,filename:e.state.filename,autoWidth:e.state.autoWidth,bookType:e.state.bookType}),e.setState({selectedRowKeys:[],downloadLoading:!1})}))):d.a.error("\u81f3\u5c11\u9009\u62e9\u4e00\u9879\u8fdb\u884c\u5bfc\u51fa")},e.filenameChange=function(t){e.setState({filename:t.target.value})},e.autoWidthChange=function(t){e.setState({autoWidth:t.target.value})},e.bookTypeChange=function(t){e.setState({bookType:t})},e}return Object(f.a)(p,[{key:"componentDidMount",value:function(){this._isMounted=!0,this.fetchData()}},{key:"componentWillUnmount",value:function(){this._isMounted=!1}},{key:"formatJson",value:function(e,t){return t.map((function(t){return e.map((function(e){return t[e]}))}))}},{key:"render",value:function(){var e={selectedRowKeys:this.state.selectedRowKeys,onChange:this.onSelectChange};return w.a.createElement("div",{className:"app-container"},w.a.createElement(E.a,{defaultActiveKey:["1"]},w.a.createElement(C,{header:"\u7b5b\u9009",key:"1"},w.a.createElement(s.a,{layout:"inline"},w.a.createElement(s.a.Item,{label:"\u540d\u79f0:"},w.a.createElement(u.a,{onChange:this.filterNameChange})),w.a.createElement(s.a.Item,{label:"\u5151\u6362\u72b6\u6001:"},w.a.createElement(c.a,{style:{width:120},onChange:this.filterStatusChange},w.a.createElement(c.a.Option,{value:""},"\u65e0"),w.a.createElement(c.a.Option,{value:"1"},"\u5df2\u5151\u6362"),w.a.createElement(c.a.Option,{value:"2"},"\u672a\u5151\u6362"))),w.a.createElement(s.a.Item,{label:"\u5546\u54c1\u72b6\u6001:"},w.a.createElement(c.a,{style:{width:120},onChange:this.filterStateChange},w.a.createElement(c.a.Option,{value:""},"\u65e0"),w.a.createElement(c.a.Option,{value:"1"},"\u6709\u6548"),w.a.createElement(c.a.Option,{value:"2"},"\u65e0\u6548"))),w.a.createElement(s.a.Item,null,w.a.createElement(o.a,{type:"primary",icon:"search",onClick:this.fetchData},"\u641c\u7d22"))))),w.a.createElement("br",null),w.a.createElement(E.a,{defaultActiveKey:["1"]},w.a.createElement(C,{header:"\u5bfc\u51fa\u9009\u9879",key:"1"},w.a.createElement(s.a,{layout:"inline"},w.a.createElement(s.a.Item,{label:"\u6587\u4ef6\u540d:"},w.a.createElement(u.a,{style:{width:"250px"},prefix:w.a.createElement(r.a,{type:"file",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"\u8bf7\u8f93\u5165\u6587\u4ef6\u540d(\u9ed8\u8ba4excel-file)",onChange:this.filenameChange})),w.a.createElement(s.a.Item,{label:"\u5355\u5143\u683c\u5bbd\u5ea6\u662f\u5426\u81ea\u9002\u5e94:"},w.a.createElement(i.a.Group,{onChange:this.autoWidthChange,value:this.state.autoWidth},w.a.createElement(i.a,{value:!0},"\u662f"),w.a.createElement(i.a,{value:!1},"\u5426"))),w.a.createElement(s.a.Item,{label:"\u6587\u4ef6\u7c7b\u578b:"},w.a.createElement(c.a,{defaultValue:"xlsx",style:{width:120},onChange:this.bookTypeChange},w.a.createElement(c.a.Option,{value:"xlsx"},"xlsx"),w.a.createElement(c.a.Option,{value:"csv"},"csv"),w.a.createElement(c.a.Option,{value:"txt"},"txt"))),w.a.createElement(s.a.Item,null,w.a.createElement(o.a,{type:"primary",icon:"file-excel",onClick:this.handleDownload.bind(null,"all")},"\u5168\u90e8\u5bfc\u51fa")),w.a.createElement(s.a.Item,null,w.a.createElement(o.a,{type:"primary",icon:"file-excel",onClick:this.handleDownload.bind(null,"selected")},"\u5bfc\u51fa\u5df2\u9009\u62e9\u9879"))))),w.a.createElement("br",null),w.a.createElement(l.a,{bordered:!0,columns:S,rowKey:function(e){return e.id},dataSource:this.state.list,pagination:!1,rowSelection:e,loading:this.state.downloadLoading}),w.a.createElement("br",null),w.a.createElement(n.a,{total:this.state.total,pageSizeOptions:["10","20","40"],showTotal:function(e){return"\u5171".concat(e,"\u6761\u6570\u636e")},onChange:this.changePage,current:this.state.listQuery.page,onShowSizeChange:this.changePageSize,showSizeChanger:!0,showQuickJumper:!0,hideOnSinglePage:!0}))}}]),p}(v.Component);t.default=x}}]);