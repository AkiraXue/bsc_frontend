(this.webpackJsonpbsc_admin_backeend=this.webpackJsonpbsc_admin_backeend||[]).push([[23],{106:function(e,t,n){"use strict";function a(e,t,n){var a,r,o,i,c,l=function l(){var u=+new Date-i;u<t&&u>0?a=setTimeout(l,t-u):(a=null,n||(c=e.apply(o,r),a||(o=r=null)))};return function(){for(var r=arguments.length,u=new Array(r),s=0;s<r;s++)u[s]=arguments[s];o=this,i=+new Date;var d=n&&!a;return a||(a=setTimeout(l,t)),d&&(c=e.apply(o,u),o=u=null),c}}function r(e,t,n){var a,r=[];for(r=r.concat(e);r.length;){var o=r.shift();o.children&&o.children.length>0&&(r=o.children.concat(r)),n===o[t]&&(a=o)}return a}function o(e){var t=new Date(e);return t.getFullYear()+"-"+((t.getMonth()+1<10?"0"+(t.getMonth()+1):t.getMonth()+1)+"-")+((t.getDate()<10?"0"+t.getDate():t.getDate())+" ")+((t.getHours()<10?"0"+t.getHours():t.getHours())+":")+((t.getMinutes()<10?"0"+t.getMinutes():t.getMinutes())+":")+(t.getSeconds()<10?"0"+t.getSeconds():t.getSeconds())}n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return o}))},13:function(e,t,n){"use strict";n.d(t,"k",(function(){return a})),n.d(t,"j",(function(){return r})),n.d(t,"i",(function(){return o})),n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return c})),n.d(t,"d",(function(){return l})),n.d(t,"e",(function(){return u})),n.d(t,"g",(function(){return s})),n.d(t,"h",(function(){return d})),n.d(t,"f",(function(){return m})),n.d(t,"c",(function(){return p}));var a="USER_SET_USER_TOKEN",r="USER_SET_USER_INFO",o="USER_RESET_USER",i="APP_TOGGLE_SIDEBAR",c="APP_TOGGLE_SETTINGPANEL",l="SETTINGS_CHANGE_SETTINGS",u="TAGSVIEW_ADD_TAG",s="TAGSVIEW_DELETE_TAG",d="TAGSVIEW_EMPTY_TAGLIST",m="TAGSVIEW_CLOSE_OTHER_TAGS",p="BUG_ADD_BUG"},182:function(e,t,n){"use strict";n.d(t,"e",(function(){return r})),n.d(t,"d",(function(){return o})),n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return c})),n.d(t,"f",(function(){return l})),n.d(t,"a",(function(){return u}));var a=n(38);function r(e){return Object(a.a)({url:"/user/get",method:"post",data:e})}function o(){return Object(a.a)({url:"/user/list",method:"get"})}function i(e){return Object(a.a)({url:"/user/delete",method:"post",data:e})}function c(e){return Object(a.a)({url:"/user/edit",method:"post",data:e})}function l(e){return Object(a.a)({url:"/user/validatUserID",method:"post",data:e})}function u(e){return Object(a.a)({url:"/user/add",method:"post",data:e})}},19:function(e,t,n){"use strict";n.d(t,"h",(function(){return s})),n.d(t,"i",(function(){return d})),n.d(t,"g",(function(){return i})),n.d(t,"k",(function(){return m})),n.d(t,"j",(function(){return p})),n.d(t,"c",(function(){return f})),n.d(t,"b",(function(){return h})),n.d(t,"f",(function(){return g})),n.d(t,"e",(function(){return b})),n.d(t,"d",(function(){return E})),n.d(t,"a",(function(){return v}));var a=n(16),r=n(13),o=n(182),i=function(e){return function(t){return new Promise((function(n,a){Object(o.e)(e).then((function(e){var r=e.data;if(0===r.status){var o=r.userInfo;t(c(o)),n(r)}else{var i=r.message;a(i)}})).catch((function(e){a(e)}))}))}},c=function(e){return Object(a.a)({type:r.j},e)},l=n(38);var u=n(94),s=function(e,t){return function(n){return new Promise((function(a,o){var i;(i={username:e.trim(),password:t},Object(l.a)({url:"/login",method:"post",data:i})).then((function(e){var t=e.data;if(0===t.status){var i=t.token;n(function(e){return{type:r.k,token:e}}(i)),Object(u.c)(i),a(t)}else{var c=t.message;o(c)}})).catch((function(e){o(e)}))}))}},d=function(e){return function(t){return new Promise((function(n,a){var o;(o=e,Object(l.a)({url:"/logout",method:"post",data:o})).then((function(e){var o=e.data;if(0===o.status)t({type:r.i}),Object(u.b)(),n(o);else{var i=o.message;a(i)}})).catch((function(e){a(e)}))}))}},m=function(){return{type:r.b}},p=function(){return{type:r.a}},f=function(e){return Object(a.a)({type:r.d},e)},h=function(e){return{type:r.e,tag:e}},g=function(){return{type:r.h}},b=function(e){return{type:r.g,tag:e}},E=function(e){return{type:r.f,tag:e}},v=function(e){return{type:r.c,bug:e}}},215:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));n(98);var a=n(41),r=n(226),o=n.n(r);function i(e,t){var n=new o.a(t.target,{text:function(){return e}});n.on("success",(function(){a.a.success("\u590d\u5236\u6210\u529f"),n.destroy()})),n.on("error",(function(){a.a.error("\u590d\u5236\u5931\u8d25"),n.destroy()})),n.onClick(t)}},229:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},263:function(e,t,n){e.exports=n(470)},355:function(e,t,n){},356:function(e,t,n){},357:function(e,t,n){},360:function(e,t,n){},368:function(e,t,n){},38:function(e,t,n){"use strict";n(176);var a=n(99),r=(n(98),n(41)),o=n(222),i=n.n(o),c=n(223),l=n.n(c),u=n(65),s=n(19),d=i.a.create({baseURL:"https://api.akiraxue.com",timeout:5e3,method:"POST",headers:{"Content-Type":"application/json"}});d.interceptors.request.use((function(e){return u.a.getState().user.token&&(e.headers.Authorization="Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJKV1RfVE9LRU4iLCJpYXQiOjE2MjE2NzAzMzYsIm5iZiI6MTYyMTY3MDMzNiwiZXhwIjoxNjI0MjYyMzM2LCJhY2NvdW50X2lkIjoiZmY4NWI1YWEwM2EwNDFjZWE5MzFkMTNlMWQ3NGYyNDQiLCJvcGVuaWQiOiJvcGVuaWQgMjIyMiIsInNlc3Npb25fa2V5Ijoic2Vzc2lvbl9rZXkgMzMzMyJ9.c-yXs7Sj6S4enyq3bgLOjMzSIF-mPn8OXeuUtYOzFys)"),"{}"===JSON.stringify(e.data)&&(e.data.is_admin=1),e.data="{}"===JSON.stringify(e.data)?l.a.stringify(e.data):e.data,e}),(function(e){console.log(e),Promise.reject(e)})),d.interceptors.response.use((function(e){return e}),(function(e){if(console.log("err"+e),1===e.response.state)return 403===e.response.status&&a.a.confirm({title:"\u786e\u5b9a\u767b\u51fa?",content:"\u7531\u4e8e\u957f\u65f6\u95f4\u672a\u64cd\u4f5c\uff0c\u60a8\u5df2\u88ab\u767b\u51fa\uff0c\u53ef\u4ee5\u53d6\u6d88\u7ee7\u7eed\u7559\u5728\u8be5\u9875\u9762\uff0c\u6216\u8005\u91cd\u65b0\u767b\u5f55",okText:"\u91cd\u65b0\u767b\u5f55",cancelText:"\u53d6\u6d88",onOk:function(){var e=u.a.getState().user.token;u.a.dispatch(Object(s.i)(e))},onCancel:function(){console.log("Cancel")}}),Promise.reject(e);r.a.error(e.response.msg)})),t.a=d},382:function(e,t,n){},396:function(e,t,n){},398:function(e,t,n){},401:function(e,t,n){},468:function(e,t,n){},470:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(5),i=n.n(o),c=(n(268),n(12)),l=n(43),u=n(44),s=n(56),d=n(55),m=n(17),p=n(235),f=n(65),h=n(48),g=n(66),b=n(19),E=(n(117),n(52)),v=n(131),O=n.n(v),y=n(474),k=n(473),j=n(106),C=n(22),S=n.n(C),w=(n(184),n(123)),T=n(136),N=n.n(T);n(341);N.a.configure({showSpinner:!1});for(var I=function(){return Object(a.useEffect)((function(){return N.a.start(),function(){N.a.done()}}),[]),r.a.createElement("div",{className:"app-container"},r.a.createElement(w.a,null))},x=S()({loader:function(){return Promise.all([n.e(0),n.e(1),n.e(27),n.e(18)]).then(n.bind(null,1403))},loading:I}),M=S()({loader:function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(7)]).then(n.bind(null,1412))},loading:I}),P=S()({loader:function(){return Promise.all([n.e(0),n.e(1),n.e(8)]).then(n.bind(null,1404))},loading:I}),_=S()({loader:function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(7)]).then(n.bind(null,1413))},loading:I}),R=S()({loader:function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(7)]).then(n.bind(null,1405))},loading:I}),D=S()({loader:function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(14)]).then(n.bind(null,1406))},loading:I}),L=S()({loader:function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(15)]).then(n.bind(null,1407))},loading:I}),A=S()({loader:function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(17)]).then(n.bind(null,1402))},loading:I}),V=S()({loader:function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(14)]).then(n.bind(null,1408))},loading:I}),U=S()({loader:function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(16)]).then(n.bind(null,1409))},loading:I}),G=S()({loader:function(){return Promise.all([n.e(0),n.e(1),n.e(13)]).then(n.bind(null,1395))},loading:I}),J=S()({loader:function(){return Promise.all([n.e(0),n.e(2),n.e(3),n.e(5),n.e(20)]).then(n.bind(null,1414))},loading:I}),z=S()({loader:function(){return Promise.all([n.e(0),n.e(2),n.e(4),n.e(25),n.e(11)]).then(n.bind(null,1401))},loading:I}),H=S()({loader:function(){return Promise.all([n.e(4),n.e(6)]).then(n.bind(null,1396))},loading:I}),Y=[{path:"/rule",component:x,roles:["admin","editor"]},{path:"/activity",component:M,roles:["admin","editor"]},{path:"/activitySchedule",component:P,roles:["admin","editor"]},{path:"/prizeContest",component:_,roles:["admin","editor"]},{path:"/prizeContestSchedule",component:R,roles:["admin","editor"]},{path:"/tag",component:D,roles:["admin","editor"]},{path:"/knowledge",component:L,roles:["admin","editor"]},{path:"/questions",component:A,roles:["admin","editor"]},{path:"/item",component:V,roles:["admin","editor"]},{path:"/product",component:U,roles:["admin","editor"]},{path:"/inventory/export",component:G,roles:["admin","editor"]},{path:"/inventory/upload",component:J,roles:["admin","editor"]},{path:"/user",component:S()({loader:function(){return Promise.all([n.e(0),n.e(4),n.e(21)]).then(n.bind(null,1410))},loading:I}),roles:["admin"]},{path:"/dashboard",component:z,roles:["admin","editor","guest"]},{path:"/about",component:H,roles:["admin","editor","guest"]},{path:"/error/404",component:S()({loader:function(){return n.e(12).then(n.bind(null,1397))},loading:I})},{path:"/bug",component:S()({loader:function(){return Promise.all([n.e(0),n.e(1),n.e(4),n.e(9)]).then(n.bind(null,1398))},loading:I}),roles:["admin"]},{path:"/table",component:S()({loader:function(){return Promise.all([n.e(0),n.e(1),n.e(28),n.e(19)]).then(n.bind(null,1411))},loading:I}),roles:["admin","editor"]},{path:"/zip",component:S()({loader:function(){return Promise.all([n.e(0),n.e(1),n.e(22)]).then(n.bind(null,1399))},loading:I}),roles:["admin","editor"]},{path:"/clipboard",component:S()({loader:function(){return n.e(10).then(n.bind(null,1400))},loading:I}),roles:["admin","editor"]}],W=[{title:"\u9996\u9875",path:"/dashboard",icon:"home",roles:["admin","editor","guest"]},{title:"\u89c4\u5219\u914d\u7f6e",path:"/rule",icon:"book",roles:["admin","editor"]},{title:"\u6d3b\u52a8",path:"/activity",icon:"apartment",roles:["admin","editor"]},{title:"\u6d3b\u52a8\u6392\u671f",path:"/activitySchedule",icon:"schedule",roles:["admin","editor"]},{title:"\u51b2\u9876",path:"/prizeContest",icon:"rest",roles:["admin","editor"]},{title:"\u51b2\u9876\u6392\u671f",path:"/prizeContestSchedule",icon:"audit",roles:["admin","editor"]},{title:"\u6807\u7b7e",path:"/tag",icon:"tag",roles:["admin","editor"]},{title:"\u77e5\u8bc6\u70b9",path:"/knowledge",icon:"profile",roles:["admin","editor"]},{title:"\u9898\u5e93",path:"/questions",icon:"project",roles:["admin","editor"]},{title:"\u6d3b\u52a8\u7528\u6237\u7ba1\u7406",path:"/item",icon:"solution",roles:["admin","editor"]},{title:"\u5546\u54c1\u7ba1\u7406",path:"/product",icon:"gift",roles:["admin","editor"]},{title:"\u865a\u62df\u5546\u54c1\u7ba1\u7406",path:"/inventory",icon:"file-excel",roles:["admin","editor"],children:[{title:"\u5e93\u5b58",path:"/inventory/export",roles:["admin","editor"]},{title:"\u8865\u4ed3",path:"/inventory/upload",roles:["admin","editor"]}]},{title:"\u7528\u6237\u7ba1\u7406",path:"/user",icon:"usergroup-add",roles:["admin"]}],X=E.a.Content,F=function(e,t){var n="Ant Design Pro",a=Object(j.b)(e,"path",t);return a&&(n="".concat(a.title," - Ant Design Pro")),n},K=Object(m.b)((function(e){return e.user}))(Object(g.g)((function(e){var t=e.role,n=e.location,a=n.pathname;return r.a.createElement(O.a,{title:F(W,a)},r.a.createElement(X,{style:{height:"calc(100% - 100px)"}},r.a.createElement(y.a,null,r.a.createElement(k.a,{key:n.pathname,timeout:500,classNames:"fade",exit:!1},r.a.createElement(g.d,{location:n},r.a.createElement(g.a,{exact:!0,from:"/",to:"/dashboard"}),Y.map((function(e){return function(e){return"admin"===t||!e.roles||e.roles.includes(t)}(e)&&r.a.createElement(g.b,{component:e.component,key:e.path,path:e.path})})),r.a.createElement(g.a,{to:"/error/404"}))))))}))),B=n(16),q=(n(185),n(187)),Q=(n(70),n(6)),Z=(n(351),n(225)),$=(n(167),n(36)),ee=(n(176),n(99)),te=(n(148),n(81)),ne=n(49),ae=(n(98),n(41)),re=n(68),oe=n.n(re),ie=(n(355),function(){if(!oe.a.isEnabled)return ae.a.warning("you browser can not work"),!1;oe.a.toggle()}),ce=function(){var e=Object(a.useState)(!1),t=Object(ne.a)(e,2),n=t[0],o=t[1],i=function(){o(oe.a.isFullscreen)};Object(a.useEffect)((function(){return oe.a.isEnabled&&oe.a.on("change",i),function(){oe.a.isEnabled&&oe.a.off("change",i)}}),[]);var c=n?"\u53d6\u6d88\u5168\u5c4f":"\u5168\u5c4f",l=n?"fullscreen-exit":"fullscreen";return r.a.createElement("div",{className:"fullScreen-container"},r.a.createElement(te.a,{placement:"bottom",title:c},r.a.createElement(Q.a,{type:l,onClick:ie})))},le=(n(356),Object(m.b)(null,{toggleSettingPanel:b.j})((function(e){var t=e.toggleSettingPanel;return r.a.createElement("div",{className:"settings-container"},r.a.createElement(te.a,{placement:"bottom",title:"\u7cfb\u7edf\u8bbe\u7f6e"},r.a.createElement(Q.a,{type:"setting",onClick:t})))}))),ue=(n(357),Object(m.b)((function(e){return e.app}),{toggleSiderBar:b.k})((function(e){var t=e.sidebarCollapsed,n=e.toggleSiderBar;return r.a.createElement("div",{className:"hamburger-container"},r.a.createElement(Q.a,{type:t?"menu-unfold":"menu-fold",onClick:n}))}))),se=(n(358),n(140)),de=(n(360),Object(g.g)((function(e){var t=e.location.pathname,n=function(e,t){var n=[];try{for(var a=function e(a){if(n.push(a),a.path===t)throw new Error("GOT IT!");if(a.children&&a.children.length>0){for(var r=0;r<a.children.length;r++)e(a.children[r]);n.pop()}else n.pop()},r=0;r<e.length;r++)a(e[r])}catch(o){return n}}(W,t),a=n&&n[0];return a&&"\u9996\u9875"!==a.title.trim()&&(n=[{title:"\u9996\u9875",path:"/dashboard"}].concat(n)),r.a.createElement("div",{className:"Breadcrumb-container"},r.a.createElement(se.a,null,n&&n.map((function(e){return"\u9996\u9875"===e.title?r.a.createElement(se.a.Item,{key:e.path},r.a.createElement("a",{href:"#".concat(e.path)},e.title)):r.a.createElement(se.a.Item,{key:e.path},e.title)}))))}))),me=(n(368),E.a.Header),pe=Object(m.b)((function(e){return Object(B.a)({},e.app,{},e.user,{},e.settings)}),{logout:b.i,getUserInfo:b.g})((function(e){var t=e.token,n=e.avatar,a=e.sidebarCollapsed,o=e.logout,i=e.getUserInfo,c=e.showSettings,l=e.fixedHeader;t&&i(t);var u=r.a.createElement($.a,{onClick:function(e){switch(e.key){case"logout":!function(e){ee.a.confirm({title:"\u6ce8\u9500",content:"\u786e\u5b9a\u8981\u9000\u51fa\u7cfb\u7edf\u5417?",okText:"\u786e\u5b9a",cancelText:"\u53d6\u6d88",onOk:function(){o(e)}})}(t)}}},r.a.createElement($.a.Item,{key:"dashboard"},r.a.createElement(h.b,{to:"/dashboard"},"\u9996\u9875")),r.a.createElement($.a.Item,{key:"project"},r.a.createElement("a",{target:"_blank",href:"#",rel:"noopener noreferrer"},"\u9879\u76ee\u5730\u5740")),r.a.createElement($.a.Divider,null),r.a.createElement($.a.Item,{key:"logout"},"\u6ce8\u9500"));return r.a.createElement(r.a.Fragment,null,l?r.a.createElement(me,null):null,r.a.createElement(me,{style:l?a?{width:"calc(100% - 80px)"}:{width:"calc(100% - 200px)"}:{width:"100%"},className:l?"fix-header":""},r.a.createElement(ue,null),r.a.createElement(de,null),r.a.createElement("div",{className:"right-menu"},r.a.createElement(ce,null),c?r.a.createElement(le,null):null,r.a.createElement("div",{className:"dropdown-wrap"},r.a.createElement(q.a,{overlay:u},r.a.createElement("div",null,r.a.createElement(Z.a,{shape:"square",size:"medium",src:n}),r.a.createElement(Q.a,{style:{color:"rgba(0,0,0,.3)"},type:"caret-down"})))))))})),fe=(n(369),n(236)),he=(n(86),n(28)),ge=(n(371),n(228)),be=(n(240),n(101)),Ee=(n(242),n(88)),ve=(n(375),n(138)),Oe=(n(243),n(62)),ye=n(215),ke=Object(m.b)((function(e){return Object(B.a)({},e.app,{},e.settings)}),{toggleSettingPanel:b.j,changeSetting:b.c})((function(e){var t=e.settingPanelVisible,n=e.toggleSettingPanel,o=e.changeSetting,i=e.sidebarLogo,c=e.fixedHeader,l=e.tagsView,u=Object(a.useState)(i),s=Object(ne.a)(u,2),d=s[0],m=s[1],p=Object(a.useState)(c),f=Object(ne.a)(p,2),h=f[0],g=f[1],b=Object(a.useState)(l),E=Object(ne.a)(b,2),v=E[0],O=E[1];return r.a.createElement("div",{className:"rightSettings"},r.a.createElement(fe.a,{title:"\u7cfb\u7edf\u8bbe\u7f6e",placement:"right",width:350,onClose:n,visible:t},r.a.createElement(Ee.a,null,r.a.createElement(Oe.a,{span:12},r.a.createElement("span",null,"\u4fa7\u8fb9\u680f Logo")),r.a.createElement(Oe.a,{span:12},r.a.createElement(ve.a,{checkedChildren:"\u5f00",unCheckedChildren:"\u5173",defaultChecked:d,onChange:function(e){m(e),o({key:"sidebarLogo",value:e})}}))),r.a.createElement(be.a,{dashed:!0}),r.a.createElement(Ee.a,null,r.a.createElement(Oe.a,{span:12},r.a.createElement("span",null,"\u56fa\u5b9a Header")),r.a.createElement(Oe.a,{span:12},r.a.createElement(ve.a,{checkedChildren:"\u5f00",unCheckedChildren:"\u5173",defaultChecked:h,onChange:function(e){g(e),o({key:"fixedHeader",value:e})}}))),r.a.createElement(be.a,{dashed:!0}),r.a.createElement(Ee.a,null,r.a.createElement(Oe.a,{span:12},r.a.createElement("span",null,"\u5f00\u542f Tags-View")),r.a.createElement(Oe.a,{span:12},r.a.createElement(ve.a,{checkedChildren:"\u5f00",unCheckedChildren:"\u5173",defaultChecked:v,onChange:function(e){O(e),o({key:"tagsView",value:e})}}))),r.a.createElement(be.a,{dashed:!0}),r.a.createElement(Ee.a,null,r.a.createElement(Oe.a,{span:24},r.a.createElement(ge.a,{message:"\u5f00\u53d1\u8005\u8bf7\u6ce8\u610f:",description:"\u914d\u7f6e\u680f\u53ea\u5728\u5f00\u53d1\u73af\u5883\u7528\u4e8e\u9884\u89c8\uff0c\u751f\u4ea7\u73af\u5883\u4e0d\u4f1a\u5c55\u73b0\uff0c\u8bf7\u62f7\u8d1d\u540e\u624b\u52a8\u4fee\u6539/src/defaultSettings.js\u914d\u7f6e\u6587\u4ef6",type:"warning",showIcon:!0,icon:r.a.createElement(Q.a,{type:"notification"}),style:{marginBottom:"16px"}}),r.a.createElement(he.a,{style:{width:"100%"},icon:"copy",onClick:function(e){var t="\n    export default {\n      showSettings: true,\n      sidebarLogo: ".concat(d,",\n      fixedHeader: ").concat(h,",\n      tagsView: ").concat(v,",\n    }\n    ");Object(ye.a)(t,e)}},"\u62f7\u8d1d\u914d\u7f6e")))))})),je=n(229),Ce=n.n(je),Se=(n(382),function(){return r.a.createElement("div",{className:"sidebar-logo-container"},r.a.createElement("img",{src:Ce.a,className:"sidebar-logo",alt:"logo"}),r.a.createElement("h1",{className:"sidebar-title"},"BSC\u7ba1\u7406\u540e\u53f0"))}),we=n(53),Te=n(133),Ne=n(139),Ie=(n(396),$.a.SubMenu),xe=function(e,t,n){var a=Array.from(e),r=a.splice(t,1),o=Object(ne.a)(r,1)[0];return a.splice(n,0,o),a},Me=function(e){Object(s.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).state={menuTreeNode:null,openKey:[]},e.filterMenuItem=function(t){var n=t.roles,a=e.props.role;return!("admin"!==a&&n&&!n.includes(a))||!!t.children&&!!t.children.find((function(e){return n.includes(e.role)}))},e.getMenuNodes=function(t){var n=e.props.location.pathname;return t.reduce((function(t,a){e.filterMenuItem(a)&&(a.children?(a.children.find((function(e){return 0===n.indexOf(e.path)}))&&e.setState((function(e){return{openKey:[].concat(Object(we.a)(e.openKey),[a.path])}})),t.push(r.a.createElement(Ie,{key:a.path,title:r.a.createElement("span",null,a.icon?r.a.createElement(Q.a,{type:a.icon}):null,r.a.createElement("span",null,a.title))},e.getMenuNodes(a.children)))):t.push(r.a.createElement($.a.Item,{key:a.path},r.a.createElement(h.b,{to:a.path},a.icon?r.a.createElement(Q.a,{type:a.icon}):null,r.a.createElement("span",null,a.title)))));return t}),[])},e.onDragEnd=function(t){if(t.destination){var n=xe(e.state.menuTreeNode,t.source.index,t.destination.index);e.setState({menuTreeNode:n})}},e.handleMenuSelect=function(t){var n=t.key,a=void 0===n?"/dashboard":n,r=Object(j.b)(W,"path",a);e.props.addTag(r)},e}return Object(u.a)(n,[{key:"componentWillMount",value:function(){var e=this.getMenuNodes(W);this.setState({menuTreeNode:e}),this.handleMenuSelect(this.state.openKey)}},{key:"render",value:function(){var e=this,t=this.props.location.pathname,n=this.state.openKey;return r.a.createElement("div",{className:"sidebar-menu-container"},r.a.createElement(Te.Scrollbars,{autoHide:!0,autoHideTimeout:1e3,autoHideDuration:200},r.a.createElement(Ne.a,{onDragEnd:this.onDragEnd},r.a.createElement(Ne.c,{droppableId:"droppable"},(function(a,o){return r.a.createElement("div",Object.assign({},a.droppableProps,{ref:a.innerRef}),e.state.menuTreeNode.map((function(a,o){return r.a.createElement(Ne.b,{key:a.key,draggableId:a.key,index:o},(function(o,i){return r.a.createElement("div",Object.assign({ref:o.innerRef},o.draggableProps,o.dragHandleProps),r.a.createElement($.a,{mode:"inline",theme:"dark",onSelect:e.handleMenuSelect,selectedKeys:[t],defaultOpenKeys:n},a))}))})))})))))}}]),n}(a.Component),Pe=Object(m.b)((function(e){return e.user}),{addTag:b.b})(Object(g.g)(Me)),_e=E.a.Sider,Re=Object(m.b)((function(e){return Object(B.a)({},e.app,{},e.settings)}))((function(e){var t=e.sidebarCollapsed,n=e.sidebarLogo;return r.a.createElement(_e,{collapsible:!0,collapsed:t,trigger:null,style:{zIndex:"10"}},n?r.a.createElement(Se,null):null,r.a.createElement(Pe,null))})),De=(n(239),n(177)),Le=function(e){Object(s.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).tagListContainer=r.a.createRef(),e.contextMenuContainer=r.a.createRef(),e.state={left:0,top:0,menuVisible:!1},e.handleClose=function(t){var n=e.props,a=n.history,r=n.deleteTag,o=n.taglist,i=t.path,c=a.location.pathname,l=o.length;i===c&&a.push(o[l-1].path),i===o[l-1].path&&c===o[l-1].path&&(l-2>0?a.push(o[l-2].path):2===l&&a.push(o[0].path)),r(t)},e.handleClick=function(t){e.props.history.push(t)},e.openContextMenu=function(t,n){n.preventDefault();var a=n.clientX,r=n.clientY;a>e.tagListContainer.current.clientWidth-105?e.setState({left:a-105+15,top:r,menuVisible:!0,currentTag:t}):e.setState({left:a,top:r,menuVisible:!0,currentTag:t})},e.handleClickOutside=function(t){var n=e.state.menuVisible;!(e.contextMenuContainer.current&&e.contextMenuContainer.current.contains(t.target))&&n&&e.closeContextMenu()},e.handleCloseAllTags=function(){e.props.emptyTaglist(),e.props.history.push("/dashboard"),e.closeContextMenu()},e.handleCloseOtherTags=function(){var t=e.state.currentTag,n=t.path;e.props.closeOtherTags(t),e.props.history.push(n),e.closeContextMenu()},e}return Object(u.a)(n,[{key:"closeContextMenu",value:function(){this.setState({menuVisible:!1})}},{key:"componentDidMount",value:function(){document.body.addEventListener("click",this.handleClickOutside)}},{key:"componentWillUnmount",value:function(){document.body.removeEventListener("click",this.handleClickOutside)}},{key:"render",value:function(){var e=this,t=this.state,n=t.left,a=t.top,o=t.menuVisible,i=this.props,c=i.taglist,l=i.history.location.pathname;return r.a.createElement(r.a.Fragment,null,r.a.createElement(Te.Scrollbars,{autoHide:!0,autoHideTimeout:1e3,autoHideDuration:200,hideTracksWhenNotNeeded:!0,renderView:function(e){return r.a.createElement("div",Object.assign({},e,{className:"scrollbar-container"}))},renderTrackVertical:function(e){return r.a.createElement("div",Object.assign({},e,{className:"scrollbar-track-vertical"}))}},r.a.createElement("ul",{className:"tags-wrap",ref:this.tagListContainer},c.map((function(t){return r.a.createElement("li",{key:t.path},r.a.createElement(De.a,{onClose:e.handleClose.bind(null,t),closable:"/dashboard"!==t.path,color:l===t.path?"geekblue":"gold",onClick:e.handleClick.bind(null,t.path),onContextMenu:e.openContextMenu.bind(null,t)},t.title))})))),o?r.a.createElement("ul",{className:"contextmenu",style:{left:"".concat(n,"px"),top:"".concat(a,"px")},ref:this.contextMenuContainer},r.a.createElement("li",{onClick:this.handleCloseOtherTags},"\u5173\u95ed\u5176\u4ed6"),r.a.createElement("li",{onClick:this.handleCloseAllTags},"\u5173\u95ed\u6240\u6709")):null)}}]),n}(a.Component),Ae=Object(g.g)(Object(m.b)((function(e){return e.tagsView}),{deleteTag:b.e,emptyTaglist:b.f,closeOtherTags:b.d})(Le)),Ve=(n(398),function(){return r.a.createElement("div",{className:"tagsView-container"},r.a.createElement(Ae,null))}),Ue=Object(m.b)((function(e){return e.settings}))((function(e){var t=e.tagsView;return r.a.createElement(E.a,{style:{minHeight:"100vh"}},r.a.createElement(Re,null),r.a.createElement(E.a,null,r.a.createElement(pe,null),t?r.a.createElement(Ve,null):null,r.a.createElement(K,null),r.a.createElement(ke,null)))})),Ge=(n(238),n(69)),Je=(n(237),n(142)),ze=(n(401),Ge.a.create()((function(e){var t=e.form,n=e.token,o=e.login,i=e.getUserInfo,c=t.getFieldDecorator,l=Object(a.useState)(!1),u=Object(ne.a)(l,2),s=u[0],d=u[1],m=function(e){i(e).then((function(e){})).catch((function(e){ae.a.error(e)}))};return n?r.a.createElement(g.a,{to:"/dashboard"}):r.a.createElement(O.a,{title:"\u7528\u6237\u767b\u5f55"},r.a.createElement("div",{className:"login-container"},r.a.createElement(Ge.a,{onSubmit:function(e){e.preventDefault(),t.validateFields((function(e,t){e?console.log("\u68c0\u9a8c\u5931\u8d25!"):function(e,t){d(!0),o(e,t).then((function(e){ae.a.success("\u767b\u5f55\u6210\u529f"),m(e.token)})).catch((function(e){d(!1),ae.a.error(e)}))}(t.username,t.password)}))},className:"content"},r.a.createElement("div",{className:"title"},r.a.createElement("h2",null,"\u7528\u6237\u767b\u5f55")),r.a.createElement(w.a,{spinning:s,tip:"\u767b\u5f55\u4e2d..."},r.a.createElement(Ge.a.Item,null,c("username",{rules:[{required:!0,whitespace:!0,message:"\u8bf7\u8f93\u5165\u7528\u6237\u540d"}],initialValue:"admin"})(r.a.createElement(Je.a,{prefix:r.a.createElement(Q.a,{type:"user",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"\u7528\u6237\u540d"}))),r.a.createElement(Ge.a.Item,null,c("password",{rules:[{required:!0,whitespace:!0,message:"\u8bf7\u8f93\u5165\u5bc6\u7801"}],initialValue:"123456"})(r.a.createElement(Je.a,{prefix:r.a.createElement(Q.a,{type:"lock",style:{color:"rgba(0,0,0,.25)"}}),type:"password",placeholder:"\u5bc6\u7801"}))),r.a.createElement(Ge.a.Item,null,r.a.createElement(he.a,{type:"primary",htmlType:"submit",className:"login-form-button"},"\u767b\u5f55")),r.a.createElement(Ge.a.Item,null,r.a.createElement("span",null,"\u8d26\u53f7 : admin \u5bc6\u7801 : \u968f\u4fbf\u586b"),r.a.createElement("br",null),r.a.createElement("span",null,"\u8d26\u53f7 : editor \u5bc6\u7801 : \u968f\u4fbf\u586b"),r.a.createElement("br",null),r.a.createElement("span",null,"\u8d26\u53f7 : guest \u5bc6\u7801 : \u968f\u4fbf\u586b"))))))}))),He=Object(m.b)((function(e){return e.user}),{login:b.h,getUserInfo:b.g})(ze),Ye=function(e){Object(s.a)(n,e);var t=Object(d.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props,t=e.token,n=e.role,a=e.getUserInfo;return r.a.createElement(h.a,null,r.a.createElement(g.d,null,r.a.createElement(g.b,{exact:!0,path:"/login",component:He}),r.a.createElement(g.b,{path:"/",render:function(){return t?n?r.a.createElement(Ue,null):void a(t).then((function(){return r.a.createElement(Ue,null)})):r.a.createElement(g.a,{to:"/login"})}})))}}]),n}(r.a.Component),We=Object(m.b)((function(e){return e.user}),{getUserInfo:b.g})(Ye),Xe=function(e){Object(s.a)(n,e);var t=Object(d.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return r.a.createElement(c.a,{locale:p.a},r.a.createElement(m.a,{store:f.a},r.a.createElement(We,null)))}}]),n}(a.Component),Fe=(n(467),n(468),n(20)),Ke=n.n(Fe),Be={admin:"admin-token",guest:"guest-token",editor:"editor-token"},qe={"admin-token":{id:"admin",role:"admin",name:"\u96be\u51c9\u70ed\u8840",avatar:"https://s1.ax1x.com/2020/04/28/J5hUaT.jpg",description:"\u62e5\u6709\u7cfb\u7edf\u5185\u6240\u6709\u83dc\u5355\u548c\u8def\u7531\u6743\u9650"},"editor-token":{id:"editor",role:"editor",name:"\u7f16\u8f91\u5458",avatar:"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",description:"\u53ef\u4ee5\u770b\u5230\u9664\u6237\u7ba1\u7406\u9875\u9762\u4e4b\u5916\u7684\u6240\u6709\u9875\u9762"},"guest-token":{id:"guest",role:"guest",name:"\u6e38\u5ba2",avatar:"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",description:"\u4ec5\u80fd\u770b\u5230Dashboard\u3001\u5f00\u53d1\u6587\u6863\u3001\u6743\u9650\u6d4b\u8bd5\u548c\u5173\u4e8e\u4f5c\u8005\u56db\u4e2a\u9875\u9762"}},Qe=function(e){var t=JSON.parse(e.body).username,n=Be[t];return n?{status:0,token:n}:{status:1,message:"\u7528\u6237\u540d\u6216\u5bc6\u7801\u9519\u8bef"}},Ze=function(e){var t=e.body,n=qe[t];return n?{status:0,userInfo:n}:{status:1,message:"\u83b7\u53d6\u7528\u6237\u4fe1\u606f\u5931\u8d25"}},$e=function(){return{status:0,users:Object.values(qe)}},et=function(e){var t=JSON.parse(e.body).id,n=Be[t];return n&&(delete Be[t],delete qe[n]),{status:0}},tt=function(e){var t=JSON.parse(e.body),n=t.id,a=Be[n];return a&&(qe[a]=Object(B.a)({},qe[a],{},t)),{status:0}},nt=function(e){var t=e.body;return Be[t]?{status:1}:{status:0}},at=function(e){var t=JSON.parse(e.body),n=t.id;return Be[n]="".concat(n,"-token"),qe["".concat(n,"-token")]=Object(B.a)({},qe["guest-token"],{},t),{status:0}},rt=function(e){return{status:0,data:"success"}},ot=[],it=0;it<20;it++)ot.push(Ke.a.mock({key:"@increment",order_no:"@guid()",price:"@float(1000, 15000, 0, 2)","tag|1":["success","pending"]}));for(var ct=function(e){return{code:2e4,data:{items:ot}}},lt=[],ut=0;ut<20;ut++)lt.push(Ke.a.mock({id:"@increment",title:"@ctitle(5, 10)",author:"@cname",readings:"@integer(300, 5000)",date:"@datetime"}));for(var st=function(e){return{code:2e4,data:{items:lt}}},dt=[],mt=0;mt<100;mt++)dt.push(Ke.a.mock({id:mt,title:"@ctitle(5, 10)",author:"@cname",readings:"@integer(300, 5000)","star|1-3":"\u2605","status|1":["published","draft"],date:"@datetime"}));var pt=function(e){var t=JSON.parse(e.body),n=t.pageNumber,a=t.pageSize,r=t.title,o=t.status,i=t.star,c=(n-1)*a,l=n*a,u=dt.filter((function(e){return(!i||e.star.length===i)&&((!o||e.status===o)&&!(r&&e.title.indexOf(r)<0))})),s=u.slice(c,l);return{code:2e4,data:{total:u.length,items:s}}},ft=function(e){var t=JSON.parse(e.body).id,n=dt.filter((function(e){return e.id===t})),a=dt.indexOf(n[0]);return dt.splice(a,1),{code:2e4}},ht=function(e){var t=JSON.parse(e.body),n=t.id,a=dt.filter((function(e){return e.id===n})),r=dt.indexOf(a[0]);return dt.splice(r,1,t),{code:2e4}};Ke.a.mock(/\/login/,"post",Qe),Ke.a.mock(/\/logout/,"post",rt),Ke.a.mock(/\/user\/get/,"post",Ze),Ke.a.mock(/\/user\/list/,"get",$e),Ke.a.mock(/\/user\/delete/,"post",et),Ke.a.mock(/\/user\/edit/,"post",tt),Ke.a.mock(/\/user\/validatUserID/,"post",nt),Ke.a.mock(/\/user\/add/,"post",at),Ke.a.mock(/\/transaction\/list/,"get",ct),Ke.a.mock(/\/excel\/list/,"get",st),Ke.a.mock(/\/table\/list/,"post",pt),Ke.a.mock(/\/table\/delete/,"post",ft),Ke.a.mock(/\/table\/edit/,"post",ht),Ke.a.mock(/\/monitor/,"post",(function(e){return{status:1,message:"monitor"}}));var gt;Ke.a;["click","touchstart","mousedown","keydown","mouseover"].forEach((function(e){document.addEventListener(e,(function(e){gt=e}),{capture:!0,passive:!0})}));var bt=function(){return gt};function Et(e){return e.reverse().filter((function(e){return e!==document&&e!==window})).map((function(e){return e.id?"".concat(e.nodeName.toLowerCase(),"#").concat(e.id):e.className&&"string"===typeof e.className?"".concat(e.nodeName.toLowerCase(),".").concat(e.className):e.nodeName.toLowerCase()})).join(" ")}var vt=function(e){if(Array.isArray(e))return Et(e);for(var t=[];e;)t.push(e),e=e.parentNode;return Et(t)},Ot=n(38);function yt(e){return Object(Ot.a)({url:"/monitor",method:"post",data:e})}var kt=n(234),jt=n.n(kt);function Ct(){return{title:document.title,url:window.location.href,timestamp:Date.now(),userAgent:jt.a.parse(navigator.userAgent).name}}var St=new(function(){function e(){Object(l.a)(this,e)}return Object(u.a)(e,[{key:"send",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Ct(),n=Object(B.a)({},t,{},e);yt(n),f.a.dispatch(Object(b.a)(n))}}]),e}()),wt={SCRIPT:2,LINK:3,IMG:4,AUDIO:5,VIDEO:6},Tt={1:"JS_RUNTIME_ERROR",2:"SCRIPT_LOAD_ERROR",3:"CSS_LOAD_ERROR",4:"IMAGE_LOAD_ERROR",5:"AUDIO_LOAD_ERROR",6:"VIDEO_LOAD_ERROR",7:"CONSOLE_ERROR",8:"TRY_CATCH_ERROR"};window.addEventListener("error",(function(e){var t=bt(),n=e.target;if(n!==window&&n.nodeName&&wt[n.nodeName.toUpperCase()])St.send({kind:"stability",errorType:Tt[wt[n.nodeName.toUpperCase()]],desc:n.baseURI+"@"+(n.src||n.href),stack:"no stack",selector:vt(n)});else{var a=e.message,r=e.filename,o=e.lineno,i=e.colno,c=e.error;St.send({kind:"stability",errorType:Tt[1],desc:"".concat(a," at ").concat(r,":").concat(o,":").concat(i),stack:c&&c.stack?c.stack:"no stack",selector:t?vt(t.path):""})}}),!0),window.addEventListener("unhandledrejection",(function(e){var t,n,a=bt(),r=0,o=0,i="",c=e.reason;if("string"===typeof c)t=c;else if("object"===typeof c){if(t=c.message,c.stack){var l=c.stack.match(/at\s+(.+):(\d+):(\d+)/);n=l[1],r=l[2],o=l[3]}i=c.stack}St.send({kind:"stability",errorType:Tt[1],desc:"".concat(t," at ").concat(n,":").concat(r,":").concat(o),stack:i,selector:a?vt(a.path):""})}),!0),i.a.render(r.a.createElement(Xe,null),document.getElementById("root"))},65:function(e,t,n){"use strict";var a=n(35),r=n(221),o=n(16),i=n(13),c=n(94),l={name:"",role:"",avatar:"",token:Object(c.a)()};var u={sidebarCollapsed:!1,settingPanelVisible:!1};var s=n(104),d={showSettings:!1,sidebarLogo:!0,fixedHeader:!1,tagsView:!0};var m=n(53),p={taglist:[]};var f={bugList:[]};var h=Object(a.c)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case i.k:return Object(o.a)({},e,{token:t.token});case i.j:return Object(o.a)({},e,{name:t.name,role:t.role,avatar:t.avatar});case i.i:return{};default:return e}},app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case i.b:return Object(o.a)({},e,{sidebarCollapsed:!e.sidebarCollapsed});case i.a:return Object(o.a)({},e,{settingPanelVisible:!e.settingPanelVisible});default:return e}},settings:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case i.d:var n=t.key,a=t.value;return e.hasOwnProperty(n)?Object(o.a)({},e,Object(s.a)({},n,a)):e;default:return e}},tagsView:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case i.e:var n=t.tag;return e.taglist.includes(n)?e:Object(o.a)({},e,{taglist:[].concat(Object(m.a)(e.taglist),[n])});case i.g:return Object(o.a)({},e,{taglist:Object(m.a)(e.taglist.filter((function(e){return e!==t.tag})))});case i.h:return Object(o.a)({},e,{taglist:Object(m.a)(e.taglist.filter((function(e){return"/dashboard"===e.path})))});case i.f:return Object(o.a)({},e,{taglist:Object(m.a)(e.taglist.filter((function(e){return"/dashboard"===e.path||e===t.tag})))});default:return e}},monitor:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case i.c:return{bugList:[].concat(Object(m.a)(e.bugList),[t.bug])};default:return e}}}),g=Object(a.e)(h,Object(a.a)(r.a));t.a=g},94:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"c",(function(){return i})),n.d(t,"b",(function(){return c}));var a=n(135),r=n.n(a);function o(){return r.a.get("Token")}function i(e){return r.a.set("Token",e)}function c(){return r.a.remove("Token")}}},[[263,24,26]]]);