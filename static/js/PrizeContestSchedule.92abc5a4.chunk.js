(this.webpackJsonpbsc_admin_backeend=this.webpackJsonpbsc_admin_backeend||[]).push([[23],{1405:function(e,t,a){"use strict";a.r(t);a(506);var n=a(509),i=(a(240),a(102)),r=(a(239),a(177)),l=(a(86),a(28)),s=(a(238),a(142)),c=(a(237),a(69)),o=(a(488),a(487)),d=(a(98),a(41)),u=a(16),m=a(43),h=a(44),f=a(56),p=a(55),_=(a(502),a(505)),y=(a(497),a(501)),E=a(0),g=a.n(E),b=a(38);function w(e){return Object(b.a)({url:"/prizeContest/findSchedule",method:"POST",data:e})}function O(e){return Object(b.a)({url:"/prizeContest/deleteSchedule",method:"POST",data:e})}function C(e){return Object(b.a)({url:"/prizeContest/saveSchedule",method:"POST",data:e})}var v=a(772),k=(a(176),a(99)),S=a(141),D=a.n(S);a(491);D.a.locale("zh-cn");D()().format("YYYY-MM-DD"),o.a.Option;var L=function(e){Object(f.a)(a,e);var t=Object(p.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){var e=this.props,t=e.visible,a=e.onCancel,n=e.onOk,i=e.form,r=e.confirmLoading,l=e.currentRowData,d=i.getFieldDecorator,u=l.id,m=l.sort,h=l.is_asset_award,f=l.asset_num,p=l.state,_=l.prize_contest_id,y={labelCol:{sm:{span:6}},wrapperCol:{sm:{span:16}}};return g.a.createElement(k.a,{title:"\u7f16\u8f91",visible:t,onCancel:a,onOk:n,confirmLoading:r},g.a.createElement(c.a,y,u?g.a.createElement(c.a.Item,{label:"\u5e8f\u53f7:"},d("id",{initialValue:u||""})(g.a.createElement(s.a,{disabled:!0}))):"",g.a.createElement(c.a.Item,{label:"\u987a\u5e8f:"},d("sort",{rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u987a\u5e8f!"}],initialValue:m||""})(g.a.createElement(s.a,{placeholder:"\u987a\u5e8f"}))),_?g.a.createElement(c.a.Item,{label:"\u6d3b\u52a8\u7f16\u53f7:"},d("prize_contest_id",{initialValue:_||""})(g.a.createElement(s.a,{disabled:!0}))):g.a.createElement(c.a.Item,{label:"\u5173\u8054\u6d3b\u52a8:"},d("prize_contest_id",{initialValue:""})(g.a.createElement(o.a,{style:{width:200}},this.props.prizeContestList.map((function(e,t){return g.a.createElement(o.a.Option,{key:t,value:e.id},e.name)}))))),g.a.createElement(c.a.Item,{label:"\u662f\u5426\u5b58\u5728\u79ef\u5206\u5956\u52b1:"},d("is_asset_award",{initialValue:1==h?"\u5b58\u5728":"\u4e0d\u5b58\u5728"})(g.a.createElement(o.a,{style:{width:120}},g.a.createElement(o.a.Option,{value:"1"},"\u5b58\u5728"),g.a.createElement(o.a.Option,{value:"2"},"\u4e0d\u5b58\u5728")))),g.a.createElement(c.a.Item,{label:"\u79ef\u5206\u6570\u989d:"},d("asset_num",{rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u79ef\u5206\u6570\u989d!"}],initialValue:f||""})(g.a.createElement(s.a,{placeholder:"\u79ef\u5206\u6570\u989d"}))),g.a.createElement(c.a.Item,{label:"\u72b6\u6001:"},d("state",{initialValue:p||"1"})(g.a.createElement(o.a,{style:{width:120}},g.a.createElement(o.a.Option,{value:"1"},"\u5f00\u542f"),g.a.createElement(o.a.Option,{value:"2"},"\u5173\u95ed"))))))}}]),a}(E.Component),Y=c.a.create({name:"EditForm"})(L),z=y.a.Column,M=_.a.Panel,j=function(e){Object(f.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i)))._isMounted=!1,e.state={prizeContestList:[],prizeContestListQuery:{page:1,limit:10,name:"",state:1},prizeContestListTotal:0,isEdit:!1,list:[],loading:!1,total:0,listQuery:{page:1,limit:10,sort:0,is_asset_award:"",state:"",prize_contest_id:""},editModalVisible:!1,editModalLoading:!1,currentRowData:{id:0,sort:0,is_asset_award:0,asset_num:0,state:1,prize_contest_id:"",created_at:"",updated_at:""}},e.fetchData=function(){e.setState({loading:!0}),w(e.state.listQuery).then((function(t){e.setState({loading:!1});var a=t.data.data.list,n=t.data.data.total;e._isMounted&&e.setState({list:a,total:n})})),Object(v.c)(e.state.prizeContestListQuery).then((function(t){e.setState({loading:!1});var a=t.data.data.list,n=t.data.data.total;e._isMounted&&e.setState({prizeContestList:a,prizeContestListTotal:n})}))},e.filterPrizeSettingChange=function(t){e.setState((function(e){return{listQuery:Object(u.a)({},e.listQuery,{prize_contest_id:t})}}))},e.filterDayChange=function(t){e.setState((function(e){return{listQuery:Object(u.a)({},e.listQuery,{is_asset_award:t})}}))},e.filterIsAssetAwardChange=function(t){e.setState((function(e){return{listQuery:Object(u.a)({},e.listQuery,{is_asset_award:t})}}))},e.filterStateChange=function(t){e.setState((function(e){return{listQuery:Object(u.a)({},e.listQuery,{state:t})}}))},e.changePage=function(t,a){e.setState((function(e){return{listQuery:Object(u.a)({},e.listQuery,{page:t})}}),(function(){e.fetchData()}))},e.changePageSize=function(t,a){e.setState((function(e){return{listQuery:Object(u.a)({},e.listQuery,{page:1,limit:a})}}),(function(){e.fetchData()}))},e.handleDelete=function(t){O({id:t.id}).then((function(t){d.a.success("\u5220\u9664\u6210\u529f"),e.fetchData()}))},e.handleEdit=function(t){e.setState({currentRowData:Object.assign({},t),editModalVisible:!0})},e.handleAdd=function(){e.setState({currentRowData:Object.assign({}),editModalVisible:!0})},e.handleOk=function(t){var a=e.formRef.props.form;a.validateFields((function(t,n){if(!t){var i=Object(u.a)({},n);e.setState({editModalLoading:!0}),C(i).then((function(t){a.resetFields(),e.setState({editModalVisible:!1,editModalLoading:!1}),d.a.success("\u7f16\u8f91\u6210\u529f!"),e.fetchData()})).catch((function(e){d.a.success("\u7f16\u8f91\u5931\u8d25,\u8bf7\u91cd\u8bd5!")}))}}))},e.handleCancel=function(t){e.setState({editModalVisible:!1})},e}return Object(h.a)(a,[{key:"componentDidMount",value:function(){this._isMounted=!0,this.fetchData()}},{key:"componentWillUnmount",value:function(){this._isMounted=!1}},{key:"render",value:function(){var e=this;return g.a.createElement("div",{className:"app-container"},g.a.createElement(_.a,{defaultActiveKey:["1"]},g.a.createElement(M,{header:"\u7b5b\u9009",key:"1"},g.a.createElement(c.a,{layout:"inline"},g.a.createElement(c.a.Item,{label:"\u5173\u8054\u51b2\u9876\u89c4\u5219:"},g.a.createElement(o.a,{defaultValue:"",style:{width:200},onChange:this.filterPrizeSettingChange},this.state.prizeContestList.map((function(e,t){return g.a.createElement(o.a.Option,{key:t,value:e.id},e.name)})))),g.a.createElement(c.a.Item,{label:"\u5929\u6570:"},g.a.createElement(s.a,{onChange:this.filterDayChange})),g.a.createElement(c.a.Item,{label:"\u662f\u5426\u5b58\u5728\u79ef\u5206\u5956\u52b1:"},g.a.createElement(o.a,{style:{width:120},onChange:this.filterIsAssetAwardChange},g.a.createElement(o.a.Option,{value:"1"},"\u5f00\u542f"),g.a.createElement(o.a.Option,{value:"2"},"\u5173\u95ed"))),g.a.createElement(c.a.Item,{label:"\u72b6\u6001:"},g.a.createElement(o.a,{style:{width:120},onChange:this.filterStateChange},g.a.createElement(o.a.Option,{value:"1"},"\u5f00\u542f"),g.a.createElement(o.a.Option,{value:"2"},"\u5173\u95ed"))),g.a.createElement(c.a.Item,null,g.a.createElement(l.a,{type:"primary",icon:"search",onClick:this.fetchData},"\u641c\u7d22")),g.a.createElement(c.a.Item,null,g.a.createElement(l.a,{type:"primary",icon:"add",onClick:this.handleAdd},"\u6dfb\u52a0\u51b2\u9876\u6392\u671f"))))),g.a.createElement("br",null),g.a.createElement(y.a,{bordered:!0,rowKey:function(e){return e.id},dataSource:this.state.list,loading:this.state.loading,pagination:!1},g.a.createElement(z,{title:"\u5e8f\u53f7",dataIndex:"id",key:"id",width:100,align:"center",sorter:function(e,t){return e.id-t.id}}),g.a.createElement(z,{title:"\u5f53\u524d\u987a\u5e8f",dataIndex:"prize_contest_id",key:"prize_contest_id",width:120,align:"center"}),g.a.createElement(z,{title:"\u662f\u5426\u6709\u79ef\u5206\u5956\u52b1",dataIndex:"is_asset_award",key:"is_asset_award",width:120,align:"center",render:function(e){var t="1"==e?"green":"2"==e?"red":"";return g.a.createElement(r.a,{color:t,key:e},"1"==e?"\u6709\u5956\u52b1":"\u65e0\u5956\u52b1")}}),g.a.createElement(z,{title:"\u79ef\u5206\u989d\u5ea6",dataIndex:"asset_num",key:"asset_num",width:120,align:"center"}),g.a.createElement(z,{title:"\u72b6\u6001",dataIndex:"state",key:"state",width:120,align:"center",render:function(e){var t="1"==e?"green":"2"==e?"red":"";return g.a.createElement(r.a,{color:t,key:e},"1"==e?"\u5f00\u542f":"\u5173\u95ed")}}),g.a.createElement(z,{title:"\u521b\u5efa\u65f6\u95f4",dataIndex:"created_at",key:"created_at",width:195,align:"center"}),g.a.createElement(z,{title:"\u64cd\u4f5c",key:"action",width:195,align:"center",render:function(t,a){return g.a.createElement("span",null,g.a.createElement(l.a,{type:"primary",shape:"circle",icon:"edit",title:"\u7f16\u8f91",onClick:e.handleEdit.bind(null,a)}),g.a.createElement(i.a,{type:"vertical"}),g.a.createElement(l.a,{type:"primary",shape:"circle",icon:"delete",title:"\u5220\u9664",onClick:e.handleDelete.bind(null,a)}))}})),g.a.createElement("br",null),g.a.createElement(n.a,{total:this.state.total,pageSizeOptions:["10","20","40"],showTotal:function(e){return"\u5171".concat(e,"\u6761\u6570\u636e")},onChange:this.changePage,current:this.state.listQuery.page,onShowSizeChange:this.changePageSize,showSizeChanger:!0,showQuickJumper:!0,hideOnSinglePage:!0}),g.a.createElement(Y,{currentRowData:this.state.currentRowData,prizeContestList:this.state.prizeContestList,wrappedComponentRef:function(t){return e.formRef=t},visible:this.state.editModalVisible,confirmLoading:this.state.editModalLoading,onCancel:this.handleCancel,onOk:this.handleOk}))}}]),a}(E.Component);t.default=j},491:function(e,t,a){!function(e){"use strict";e.defineLocale("zh-cn",{months:"\u4e00\u6708_\u4e8c\u6708_\u4e09\u6708_\u56db\u6708_\u4e94\u6708_\u516d\u6708_\u4e03\u6708_\u516b\u6708_\u4e5d\u6708_\u5341\u6708_\u5341\u4e00\u6708_\u5341\u4e8c\u6708".split("_"),monthsShort:"1\u6708_2\u6708_3\u6708_4\u6708_5\u6708_6\u6708_7\u6708_8\u6708_9\u6708_10\u6708_11\u6708_12\u6708".split("_"),weekdays:"\u661f\u671f\u65e5_\u661f\u671f\u4e00_\u661f\u671f\u4e8c_\u661f\u671f\u4e09_\u661f\u671f\u56db_\u661f\u671f\u4e94_\u661f\u671f\u516d".split("_"),weekdaysShort:"\u5468\u65e5_\u5468\u4e00_\u5468\u4e8c_\u5468\u4e09_\u5468\u56db_\u5468\u4e94_\u5468\u516d".split("_"),weekdaysMin:"\u65e5_\u4e00_\u4e8c_\u4e09_\u56db_\u4e94_\u516d".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY/MM/DD",LL:"YYYY\u5e74M\u6708D\u65e5",LLL:"YYYY\u5e74M\u6708D\u65e5Ah\u70b9mm\u5206",LLLL:"YYYY\u5e74M\u6708D\u65e5ddddAh\u70b9mm\u5206",l:"YYYY/M/D",ll:"YYYY\u5e74M\u6708D\u65e5",lll:"YYYY\u5e74M\u6708D\u65e5 HH:mm",llll:"YYYY\u5e74M\u6708D\u65e5dddd HH:mm"},meridiemParse:/\u51cc\u6668|\u65e9\u4e0a|\u4e0a\u5348|\u4e2d\u5348|\u4e0b\u5348|\u665a\u4e0a/,meridiemHour:function(e,t){return 12===e&&(e=0),"\u51cc\u6668"===t||"\u65e9\u4e0a"===t||"\u4e0a\u5348"===t?e:"\u4e0b\u5348"===t||"\u665a\u4e0a"===t?e+12:e>=11?e:e+12},meridiem:function(e,t,a){var n=100*e+t;return n<600?"\u51cc\u6668":n<900?"\u65e9\u4e0a":n<1130?"\u4e0a\u5348":n<1230?"\u4e2d\u5348":n<1800?"\u4e0b\u5348":"\u665a\u4e0a"},calendar:{sameDay:"[\u4eca\u5929]LT",nextDay:"[\u660e\u5929]LT",nextWeek:function(e){return e.week()!==this.week()?"[\u4e0b]dddLT":"[\u672c]dddLT"},lastDay:"[\u6628\u5929]LT",lastWeek:function(e){return this.week()!==e.week()?"[\u4e0a]dddLT":"[\u672c]dddLT"},sameElse:"L"},dayOfMonthOrdinalParse:/\d{1,2}(\u65e5|\u6708|\u5468)/,ordinal:function(e,t){switch(t){case"d":case"D":case"DDD":return e+"\u65e5";case"M":return e+"\u6708";case"w":case"W":return e+"\u5468";default:return e}},relativeTime:{future:"%s\u540e",past:"%s\u524d",s:"\u51e0\u79d2",ss:"%d \u79d2",m:"1 \u5206\u949f",mm:"%d \u5206\u949f",h:"1 \u5c0f\u65f6",hh:"%d \u5c0f\u65f6",d:"1 \u5929",dd:"%d \u5929",w:"1 \u5468",ww:"%d \u5468",M:"1 \u4e2a\u6708",MM:"%d \u4e2a\u6708",y:"1 \u5e74",yy:"%d \u5e74"},week:{dow:1,doy:4}})}(a(141))},772:function(e,t,a){"use strict";a.d(t,"c",(function(){return i})),a.d(t,"a",(function(){return r})),a.d(t,"b",(function(){return l}));var n=a(38);function i(e){return Object(n.a)({url:"/prizeContest/find",method:"POST",data:e})}function r(e){return Object(n.a)({url:"/prizeContest/delete",method:"POST",data:e})}function l(e){return Object(n.a)({url:"/prizeContest/save",method:"POST",data:e})}}}]);