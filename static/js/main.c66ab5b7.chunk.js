(this.webpackJsonpbsc_admin_backeend=this.webpackJsonpbsc_admin_backeend||[]).push([[32],{107:function(e,t,n){"use strict";function a(e,t,n){var a,r,o,i,c,l=function l(){var u=+new Date-i;u<t&&u>0?a=setTimeout(l,t-u):(a=null,n||(c=e.apply(o,r),a||(o=r=null)))};return function(){for(var r=arguments.length,u=new Array(r),s=0;s<r;s++)u[s]=arguments[s];o=this,i=+new Date;var d=n&&!a;return a||(a=setTimeout(l,t)),d&&(c=e.apply(o,u),o=u=null),c}}function r(e,t,n){var a,r=[];for(r=r.concat(e);r.length;){var o=r.shift();o.children&&o.children.length>0&&(r=o.children.concat(r)),n===o[t]&&(a=o)}return a}function o(e){var t=new Date(e);return t.getFullYear()+"-"+((t.getMonth()+1<10?"0"+(t.getMonth()+1):t.getMonth()+1)+"-")+((t.getDate()<10?"0"+t.getDate():t.getDate())+" ")+((t.getHours()<10?"0"+t.getHours():t.getHours())+":")+((t.getMinutes()<10?"0"+t.getMinutes():t.getMinutes())+":")+(t.getSeconds()<10?"0"+t.getSeconds():t.getSeconds())}n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return o}))},13:function(e,t,n){"use strict";n.d(t,"k",(function(){return a})),n.d(t,"j",(function(){return r})),n.d(t,"i",(function(){return o})),n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return c})),n.d(t,"d",(function(){return l})),n.d(t,"e",(function(){return u})),n.d(t,"g",(function(){return s})),n.d(t,"h",(function(){return d})),n.d(t,"f",(function(){return m})),n.d(t,"c",(function(){return f}));var a="USER_SET_USER_TOKEN",r="USER_SET_USER_INFO",o="USER_RESET_USER",i="APP_TOGGLE_SIDEBAR",c="APP_TOGGLE_SETTINGPANEL",l="SETTINGS_CHANGE_SETTINGS",u="TAGSVIEW_ADD_TAG",s="TAGSVIEW_DELETE_TAG",d="TAGSVIEW_EMPTY_TAGLIST",m="TAGSVIEW_CLOSE_OTHER_TAGS",f="BUG_ADD_BUG"},181:function(e,t,n){"use strict";n.d(t,"e",(function(){return r})),n.d(t,"d",(function(){return o})),n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return c})),n.d(t,"a",(function(){return l})),n.d(t,"f",(function(){return u}));var a=n(38);function r(e){return Object(a.a)({url:"/adminUser/getCurrentUserInfo",method:"POST",data:e})}function o(){return Object(a.a)({url:"/adminUser/find",method:"POST"})}function i(e){return Object(a.a)({url:"/adminUser/delete",method:"POST",data:e})}function c(e){return Object(a.a)({url:"/adminUser/save",method:"POST",data:e})}function l(e){return Object(a.a)({url:"/adminUser/save",method:"POST",data:e})}function u(e){return Object(a.a)({url:"/adminUser/validateUserId",method:"POST",data:e})}},19:function(e,t,n){"use strict";n.d(t,"h",(function(){return s})),n.d(t,"i",(function(){return d})),n.d(t,"g",(function(){return i})),n.d(t,"k",(function(){return m})),n.d(t,"j",(function(){return f})),n.d(t,"c",(function(){return p})),n.d(t,"b",(function(){return h})),n.d(t,"f",(function(){return g})),n.d(t,"e",(function(){return b})),n.d(t,"d",(function(){return E})),n.d(t,"a",(function(){return v}));var a=n(16),r=n(13),o=n(181),i=function(e){return function(e){return new Promise((function(t,n){Object(o.e)({}).then((function(a){var r=a.data;if(1==r.state){var o=r.data;e(c(o)),t(r)}else{var i=r.msg;n(i)}})).catch((function(e){n(e)}))}))}},c=function(e){return Object(a.a)({type:r.j},e)},l=n(93),u=n(38);var s=function(e,t){return function(n){return new Promise((function(a,o){var i;(i={name:e.trim(),password:t},Object(u.a)({url:"/adminUser/login",method:"post",data:i})).then((function(e){var t=e.data;if(1==t.state){var i="Bearer "+t.data.token.access_token+")";n(function(e){return{type:r.k,token:e}}(i)),Object(l.c)(i),a(t)}else{var c=t.msg;o(c)}})).catch((function(e){o(e)}))}))}},d=function(e){return function(t){return new Promise((function(n,a){var o;(o={token:e},Object(u.a)({url:"/adminUser/logout",method:"post",data:o})).then((function(e){var o=e.data;if(1==o.state)t({type:r.i}),Object(l.b)(),n(o);else{var i=o.msg;a(i)}})).catch((function(e){a(e)}))}))}},m=function(){return{type:r.b}},f=function(){return{type:r.a}},p=function(e){return Object(a.a)({type:r.d},e)},h=function(e){return{type:r.e,tag:e}},g=function(){return{type:r.h}},b=function(e){return{type:r.g,tag:e}},E=function(e){return{type:r.f,tag:e}},v=function(e){return{type:r.c,bug:e}}},214:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));n(98);var a=n(39),r=n(227),o=n.n(r);function i(e,t){var n=new o.a(t.target,{text:function(){return e}});n.on("success",(function(){a.a.success("\u590d\u5236\u6210\u529f"),n.destroy()})),n.on("error",(function(){a.a.error("\u590d\u5236\u5931\u8d25"),n.destroy()})),n.onClick(t)}},230:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},265:function(e,t,n){e.exports=n(479)},362:function(e,t,n){},363:function(e,t,n){},364:function(e,t,n){},367:function(e,t,n){},376:function(e,t,n){},38:function(e,t,n){"use strict";n(176);var a=n(99),r=(n(98),n(39)),o=n(223),i=n.n(o),c=n(224),l=n.n(c),u=n(51),s=n(19),d=i.a.create({baseURL:"https://api.akiraxue.com",timeout:5e3,method:"POST",headers:{"Content-Type":"application/json"}});d.interceptors.request.use((function(e){return u.a.getState().user.token&&(e.headers.Authorization=u.a.getState().user.token),"object"===typeof e.data&&(e.data.is_admin=1),e.data="{}"===JSON.stringify(e.data)?l.a.stringify(e.data):e.data,e}),(function(e){console.log(e),Promise.reject(e)})),d.interceptors.response.use((function(e){return e}),(function(e){return console.log("err"+e),void 0==e.response?(r.a.error(e),Promise.reject(e)):1!==e.response.state?(r.a.error(e.response.msg),Promise.reject(e)):(403===e.response.status&&a.a.confirm({title:"\u786e\u5b9a\u767b\u51fa?",content:"\u7531\u4e8e\u957f\u65f6\u95f4\u672a\u64cd\u4f5c\uff0c\u60a8\u5df2\u88ab\u767b\u51fa\uff0c\u53ef\u4ee5\u53d6\u6d88\u7ee7\u7eed\u7559\u5728\u8be5\u9875\u9762\uff0c\u6216\u8005\u91cd\u65b0\u767b\u5f55",okText:"\u91cd\u65b0\u767b\u5f55",cancelText:"\u53d6\u6d88",onOk:function(){var e=u.a.getState().user.token;u.a.dispatch(Object(s.i)(e))},onCancel:function(){console.log("Cancel")}}),Promise.reject(e))})),t.a=d},390:function(e,t,n){},404:function(e,t,n){},406:function(e,t,n){},409:function(e,t,n){},477:function(e,t,n){},479:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(5),i=n.n(o),c=(n(270),n(11)),l=n(43),u=n(44),s=n(56),d=n(55),m=n(17),f=n(237),p=n(51),h=n(48),g=n(65),b=n(19),E=(n(115),n(52)),v=n(131),O=n.n(v),y=n(483),k=n(482),j=n(107),S=n(20),C=n.n(S),T=(n(183),n(124)),w=n(135),N=n.n(w);n(346);N.a.configure({showSpinner:!1});for(var P=function(){return Object(a.useEffect)((function(){return N.a.start(),function(){N.a.done()}}),[]),r.a.createElement("div",{className:"app-container"},r.a.createElement(T.a,null))},x=C()({loader:function(){return Promise.all([n.e(0),n.e(1),n.e(36),n.e(26)]).then(n.bind(null,1415))},loading:P}),I=C()({loader:function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(12)]).then(n.bind(null,1423))},loading:P}),_=C()({loader:function(){return Promise.all([n.e(0),n.e(1),n.e(11)]).then(n.bind(null,1416))},loading:P}),R=C()({loader:function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(10)]).then(n.bind(null,1424))},loading:P}),L=C()({loader:function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(21)]).then(n.bind(null,1425))},loading:P}),A=C()({loader:function(){return Promise.all([n.e(0),n.e(1),n.e(23)]).then(n.bind(null,1417))},loading:P}),D=C()({loader:function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(22)]).then(n.bind(null,1413))},loading:P}),M=C()({loader:function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(18)]).then(n.bind(null,1418))},loading:P}),U=C()({loader:function(){return Promise.all([n.e(0),n.e(1),n.e(3),n.e(4),n.e(19)]).then(n.bind(null,1419))},loading:P}),V=C()({loader:function(){return Promise.all([n.e(0),n.e(1),n.e(3),n.e(4),n.e(25)]).then(n.bind(null,1414))},loading:P}),G=C()({loader:function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(18)]).then(n.bind(null,1420))},loading:P}),H=C()({loader:function(){return Promise.all([n.e(0),n.e(1),n.e(13)]).then(n.bind(null,1426))},loading:P}),z=C()({loader:function(){return Promise.all([n.e(0),n.e(1),n.e(3),n.e(4),n.e(24)]).then(n.bind(null,1427))},loading:P}),B=C()({loader:function(){return Promise.all([n.e(0),n.e(1),n.e(27)]).then(n.bind(null,1405))},loading:P}),K=C()({loader:function(){return Promise.all([n.e(0),n.e(1),n.e(3),n.e(4),n.e(30)]).then(n.bind(null,1421))},loading:P}),W=C()({loader:function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(20)]).then(n.bind(null,1428))},loading:P}),F=C()({loader:function(){return Promise.all([n.e(0),n.e(3),n.e(5),n.e(34),n.e(16)]).then(n.bind(null,1411))},loading:P}),J=C()({loader:function(){return Promise.all([n.e(5),n.e(9)]).then(n.bind(null,1406))},loading:P}),q=[{path:"/rule",component:x,roles:["admin","editor"]},{path:"/activity/setting",component:I,roles:["admin","editor"]},{path:"/activity/schedule",component:_,roles:["admin","editor"]},{path:"/activity/record",component:R,roles:["admin","editor"]},{path:"/prize/setting",component:L,roles:["admin","editor"]},{path:"/prize/schedule",component:A,roles:["admin","editor"]},{path:"/prize/record",component:D,roles:["admin","editor"]},{path:"/material/tag",component:M,roles:["admin","editor"]},{path:"/material/knowledge",component:U,roles:["admin","editor"]},{path:"/material/questions",component:V,roles:["admin","editor"]},{path:"/item/user",component:G,roles:["admin","editor"]},{path:"/item/assetLog",component:H,roles:["admin","editor"]},{path:"/inventory/product",component:z,roles:["admin","editor"]},{path:"/inventory/storage",component:B,roles:["admin","editor"]},{path:"/inventory/warehousing",component:K,roles:["admin","editor"]},{path:"/order",component:W,roles:["admin","editor"]},{path:"/user",component:C()({loader:function(){return Promise.all([n.e(0),n.e(5),n.e(29)]).then(n.bind(null,1422))},loading:P}),roles:["admin"]},{path:"/dashboard",component:F,roles:["admin","editor","guest"]},{path:"/about",component:J,roles:["admin","editor","guest"]},{path:"/error/404",component:C()({loader:function(){return n.e(17).then(n.bind(null,1407))},loading:P})},{path:"/bug",component:C()({loader:function(){return Promise.all([n.e(0),n.e(1),n.e(5),n.e(14)]).then(n.bind(null,1408))},loading:P}),roles:["admin"]},{path:"/table",component:C()({loader:function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(28)]).then(n.bind(null,1412))},loading:P}),roles:["admin","editor"]},{path:"/zip",component:C()({loader:function(){return Promise.all([n.e(0),n.e(1),n.e(31)]).then(n.bind(null,1429))},loading:P}),roles:["admin","editor"]},{path:"/clipboard",component:C()({loader:function(){return n.e(15).then(n.bind(null,1409))},loading:P}),roles:["admin","editor"]}],Y=[{title:"\u9996\u9875",path:"/dashboard",icon:"home",roles:["admin","editor","guest"]},{title:"\u89c4\u5219\u914d\u7f6e",path:"/rule",icon:"book",roles:["admin","editor"]},{title:"\u6d3b\u52a8\u7ba1\u7406",path:"/activity",icon:"calculator",roles:["admin","editor"],children:[{title:"\u6d3b\u52a8\u914d\u7f6e",path:"/activity/setting",icon:"apartment",roles:["admin","editor"]},{title:"\u6d3b\u52a8\u6392\u671f",path:"/activity/schedule",icon:"schedule",roles:["admin","editor"]},{title:"\u6253\u5361\u8bb0\u5f55",path:"/activity/record",icon:"calendar",roles:["admin","editor"]}]},{title:"\u51b2\u9876\u7ba1\u7406",path:"/prize",icon:"rocket",roles:["admin","editor"],children:[{title:"\u51b2\u9876\u914d\u7f6e",path:"/prize/setting",icon:"rest",roles:["admin","editor"]},{title:"\u51b2\u9876\u6392\u671f",path:"/prize/schedule",icon:"schedule",roles:["admin","editor"]},{title:"\u51b2\u9876\u8bb0\u5f55",path:"/prize/record",icon:"calendar",roles:["admin","editor"]}]},{title:"\u7269\u6599\u7ba1\u7406",path:"/material",icon:"file",roles:["admin","editor"],children:[{title:"\u6807\u7b7e",path:"/material/tag",icon:"tag",roles:["admin","editor"]},{title:"\u77e5\u8bc6\u70b9",path:"/material/knowledge",icon:"profile",roles:["admin","editor"]},{title:"\u9898\u5e93",path:"/material/questions",icon:"project",roles:["admin","editor"]}]},{title:"\u6d3b\u52a8\u7528\u6237\u7ba1\u7406",path:"/item",icon:"solution",roles:["admin","editor"],children:[{title:"\u7528\u6237\u5217\u8868",path:"/item/user",icon:"user-add",roles:["admin","editor"]},{title:"\u79ef\u5206\u53d8\u52a8",path:"/item/assetLog",icon:"account-book",roles:["admin","editor"]}]},{title:"\u5546\u54c1\u7ba1\u7406",path:"/inventory",icon:"file-excel",roles:["admin","editor"],children:[{title:"\u5546\u54c1\u7ba1\u7406",path:"/inventory/product",icon:"gift",roles:["admin","editor"]},{title:"\u5e93\u5b58",path:"/inventory/storage",icon:"export",roles:["admin","editor"]},{title:"\u8865\u4ed3",path:"/inventory/warehousing",icon:"upload",roles:["admin","editor"]}]},{title:"\u8ba2\u5355\u7ba1\u7406",path:"/order",icon:"ordered-list",roles:["admin"]},{title:"\u7528\u6237\u7ba1\u7406",path:"/user",icon:"usergroup-add",roles:["admin"]}],X=E.a.Content,Q=function(e,t){var n="\u7ba1\u7406\u540e\u53f0",a=Object(j.b)(e,"path",t);return a&&(n="".concat(a.title," - \u7ba1\u7406\u540e\u53f0")),n},Z=Object(m.b)((function(e){return e.user}))(Object(g.g)((function(e){var t=e.role,n=e.location,a=n.pathname;return r.a.createElement(O.a,{title:Q(Y,a)},r.a.createElement(X,{style:{height:"calc(100% - 100px)"}},r.a.createElement(y.a,null,r.a.createElement(k.a,{key:n.pathname,timeout:500,classNames:"fade",exit:!1},r.a.createElement(g.d,{location:n},r.a.createElement(g.a,{exact:!0,from:"/",to:"/dashboard"}),q.map((function(e){return function(e){return"admin"===t||!e.roles||e.roles.includes(t)}(e)&&r.a.createElement(g.b,{component:e.component,key:e.path,path:e.path})})),r.a.createElement(g.a,{to:"/error/404"}))))))}))),$=n(16),ee=(n(184),n(185)),te=(n(68),n(6)),ne=(n(358),n(226)),ae=(n(166),n(36)),re=(n(176),n(99)),oe=(n(147),n(75)),ie=n(49),ce=(n(98),n(39)),le=n(67),ue=n.n(le),se=(n(362),function(){if(!ue.a.isEnabled)return ce.a.warning("you browser can not work"),!1;ue.a.toggle()}),de=function(){var e=Object(a.useState)(!1),t=Object(ie.a)(e,2),n=t[0],o=t[1],i=function(){o(ue.a.isFullscreen)};Object(a.useEffect)((function(){return ue.a.isEnabled&&ue.a.on("change",i),function(){ue.a.isEnabled&&ue.a.off("change",i)}}),[]);var c=n?"\u53d6\u6d88\u5168\u5c4f":"\u5168\u5c4f",l=n?"fullscreen-exit":"fullscreen";return r.a.createElement("div",{className:"fullScreen-container"},r.a.createElement(oe.a,{placement:"bottom",title:c},r.a.createElement(te.a,{type:l,onClick:se})))},me=(n(363),Object(m.b)(null,{toggleSettingPanel:b.j})((function(e){var t=e.toggleSettingPanel;return r.a.createElement("div",{className:"settings-container"},r.a.createElement(oe.a,{placement:"bottom",title:"\u7cfb\u7edf\u8bbe\u7f6e"},r.a.createElement(te.a,{type:"setting",onClick:t})))}))),fe=(n(364),Object(m.b)((function(e){return e.app}),{toggleSiderBar:b.k})((function(e){var t=e.sidebarCollapsed,n=e.toggleSiderBar;return r.a.createElement("div",{className:"hamburger-container"},r.a.createElement(te.a,{type:t?"menu-unfold":"menu-fold",onClick:n}))}))),pe=(n(365),n(139)),he=(n(367),Object(g.g)((function(e){var t=e.location.pathname,n=function(e,t){var n=[];try{for(var a=function e(a){if(n.push(a),a.path===t)throw new Error("GOT IT!");if(a.children&&a.children.length>0){for(var r=0;r<a.children.length;r++)e(a.children[r]);n.pop()}else n.pop()},r=0;r<e.length;r++)a(e[r])}catch(o){return n}}(Y,t),a=n&&n[0];return a&&"\u9996\u9875"!==a.title.trim()&&(n=[{title:"\u9996\u9875",path:"/dashboard"}].concat(n)),r.a.createElement("div",{className:"Breadcrumb-container"},r.a.createElement(pe.a,null,n&&n.map((function(e){return"\u9996\u9875"===e.title?r.a.createElement(pe.a.Item,{key:e.path},r.a.createElement("a",{href:"#".concat(e.path)},e.title)):r.a.createElement(pe.a.Item,{key:e.path},e.title)}))))}))),ge=(n(376),E.a.Header),be=Object(m.b)((function(e){return Object($.a)({},e.app,{},e.user,{},e.settings)}),{logout:b.i,getUserInfo:b.g})((function(e){var t=e.token,n=e.avatar,a=e.sidebarCollapsed,o=e.logout,i=e.getUserInfo,c=e.showSettings,l=e.fixedHeader;t&&i(t);var u=r.a.createElement(ae.a,{onClick:function(e){switch(e.key){case"logout":!function(e){re.a.confirm({title:"\u6ce8\u9500",content:"\u786e\u5b9a\u8981\u9000\u51fa\u7cfb\u7edf\u5417?",okText:"\u786e\u5b9a",cancelText:"\u53d6\u6d88",onOk:function(){o(e)}})}(t)}}},r.a.createElement(ae.a.Item,{key:"dashboard"},r.a.createElement(h.b,{to:"/dashboard"},"\u9996\u9875")),r.a.createElement(ae.a.Item,{key:"project"},r.a.createElement("a",{target:"_blank",href:"#",rel:"noopener noreferrer"},"\u9879\u76ee\u5730\u5740")),r.a.createElement(ae.a.Divider,null),r.a.createElement(ae.a.Item,{key:"logout"},"\u6ce8\u9500"));return r.a.createElement(r.a.Fragment,null,l?r.a.createElement(ge,null):null,r.a.createElement(ge,{style:l?a?{width:"calc(100% - 80px)"}:{width:"calc(100% - 200px)"}:{width:"100%"},className:l?"fix-header":""},r.a.createElement(fe,null),r.a.createElement(he,null),r.a.createElement("div",{className:"right-menu"},r.a.createElement(de,null),c?r.a.createElement(me,null):null,r.a.createElement("div",{className:"dropdown-wrap"},r.a.createElement(ee.a,{overlay:u},r.a.createElement("div",null,r.a.createElement(ne.a,{shape:"square",size:"medium",src:n}),r.a.createElement(te.a,{style:{color:"rgba(0,0,0,.3)"},type:"caret-down"})))))))})),Ee=(n(377),n(238)),ve=(n(85),n(27)),Oe=(n(379),n(229)),ye=(n(242),n(102)),ke=(n(244),n(87)),je=(n(383),n(137)),Se=(n(245),n(62)),Ce=n(214),Te=Object(m.b)((function(e){return Object($.a)({},e.app,{},e.settings)}),{toggleSettingPanel:b.j,changeSetting:b.c})((function(e){var t=e.settingPanelVisible,n=e.toggleSettingPanel,o=e.changeSetting,i=e.sidebarLogo,c=e.fixedHeader,l=e.tagsView,u=Object(a.useState)(i),s=Object(ie.a)(u,2),d=s[0],m=s[1],f=Object(a.useState)(c),p=Object(ie.a)(f,2),h=p[0],g=p[1],b=Object(a.useState)(l),E=Object(ie.a)(b,2),v=E[0],O=E[1];return r.a.createElement("div",{className:"rightSettings"},r.a.createElement(Ee.a,{title:"\u7cfb\u7edf\u8bbe\u7f6e",placement:"right",width:350,onClose:n,visible:t},r.a.createElement(ke.a,null,r.a.createElement(Se.a,{span:12},r.a.createElement("span",null,"\u4fa7\u8fb9\u680f Logo")),r.a.createElement(Se.a,{span:12},r.a.createElement(je.a,{checkedChildren:"\u5f00",unCheckedChildren:"\u5173",defaultChecked:d,onChange:function(e){m(e),o({key:"sidebarLogo",value:e})}}))),r.a.createElement(ye.a,{dashed:!0}),r.a.createElement(ke.a,null,r.a.createElement(Se.a,{span:12},r.a.createElement("span",null,"\u56fa\u5b9a Header")),r.a.createElement(Se.a,{span:12},r.a.createElement(je.a,{checkedChildren:"\u5f00",unCheckedChildren:"\u5173",defaultChecked:h,onChange:function(e){g(e),o({key:"fixedHeader",value:e})}}))),r.a.createElement(ye.a,{dashed:!0}),r.a.createElement(ke.a,null,r.a.createElement(Se.a,{span:12},r.a.createElement("span",null,"\u5f00\u542f Tags-View")),r.a.createElement(Se.a,{span:12},r.a.createElement(je.a,{checkedChildren:"\u5f00",unCheckedChildren:"\u5173",defaultChecked:v,onChange:function(e){O(e),o({key:"tagsView",value:e})}}))),r.a.createElement(ye.a,{dashed:!0}),r.a.createElement(ke.a,null,r.a.createElement(Se.a,{span:24},r.a.createElement(Oe.a,{message:"\u5f00\u53d1\u8005\u8bf7\u6ce8\u610f:",description:"\u914d\u7f6e\u680f\u53ea\u5728\u5f00\u53d1\u73af\u5883\u7528\u4e8e\u9884\u89c8\uff0c\u751f\u4ea7\u73af\u5883\u4e0d\u4f1a\u5c55\u73b0\uff0c\u8bf7\u62f7\u8d1d\u540e\u624b\u52a8\u4fee\u6539/src/defaultSettings.js\u914d\u7f6e\u6587\u4ef6",type:"warning",showIcon:!0,icon:r.a.createElement(te.a,{type:"notification"}),style:{marginBottom:"16px"}}),r.a.createElement(ve.a,{style:{width:"100%"},icon:"copy",onClick:function(e){var t="\n    export default {\n      showSettings: true,\n      sidebarLogo: ".concat(d,",\n      fixedHeader: ").concat(h,",\n      tagsView: ").concat(v,",\n    }\n    ");Object(Ce.a)(t,e)}},"\u62f7\u8d1d\u914d\u7f6e")))))})),we=n(230),Ne=n.n(we),Pe=(n(390),function(){return r.a.createElement("div",{className:"sidebar-logo-container"},r.a.createElement("img",{src:Ne.a,className:"sidebar-logo",alt:"logo"}),r.a.createElement("h1",{className:"sidebar-title"},"BSC\u7ba1\u7406\u540e\u53f0"))}),xe=n(53),Ie=n(133),_e=n(138),Re=(n(404),ae.a.SubMenu),Le=function(e,t,n){var a=Array.from(e),r=a.splice(t,1),o=Object(ie.a)(r,1)[0];return a.splice(n,0,o),a},Ae=function(e){Object(s.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).state={menuTreeNode:null,openKey:[]},e.filterMenuItem=function(t){var n=t.roles,a=e.props.role;return!("admin"!==a&&n&&!n.includes(a))||!!t.children&&!!t.children.find((function(e){return n.includes(e.role)}))},e.getMenuNodes=function(t){var n=e.props.location.pathname;return t.reduce((function(t,a){e.filterMenuItem(a)&&(a.children?(a.children.find((function(e){return 0===n.indexOf(e.path)}))&&e.setState((function(e){return{openKey:[].concat(Object(xe.a)(e.openKey),[a.path])}})),t.push(r.a.createElement(Re,{key:a.path,title:r.a.createElement("span",null,a.icon?r.a.createElement(te.a,{type:a.icon}):null,r.a.createElement("span",null,a.title))},e.getMenuNodes(a.children)))):t.push(r.a.createElement(ae.a.Item,{key:a.path},r.a.createElement(h.b,{to:a.path},a.icon?r.a.createElement(te.a,{type:a.icon}):null,r.a.createElement("span",null,a.title)))));return t}),[])},e.onDragEnd=function(t){if(t.destination){var n=Le(e.state.menuTreeNode,t.source.index,t.destination.index);e.setState({menuTreeNode:n})}},e.handleMenuSelect=function(t){var n=t.key,a=void 0===n?"/dashboard":n,r=Object(j.b)(Y,"path",a);e.props.addTag(r)},e}return Object(u.a)(n,[{key:"componentWillMount",value:function(){var e=this.getMenuNodes(Y);this.setState({menuTreeNode:e}),this.handleMenuSelect(this.state.openKey)}},{key:"render",value:function(){var e=this,t=this.props.location.pathname,n=this.state.openKey;return r.a.createElement("div",{className:"sidebar-menu-container"},r.a.createElement(Ie.Scrollbars,{autoHide:!0,autoHideTimeout:1e3,autoHideDuration:200},r.a.createElement(_e.a,{onDragEnd:this.onDragEnd},r.a.createElement(_e.c,{droppableId:"droppable"},(function(a,o){return r.a.createElement("div",Object.assign({},a.droppableProps,{ref:a.innerRef}),e.state.menuTreeNode.map((function(a,o){return r.a.createElement(_e.b,{key:a.key,draggableId:a.key,index:o},(function(o,i){return r.a.createElement("div",Object.assign({ref:o.innerRef},o.draggableProps,o.dragHandleProps),r.a.createElement(ae.a,{mode:"inline",theme:"dark",onSelect:e.handleMenuSelect,selectedKeys:[t],defaultOpenKeys:n},a))}))})))})))))}}]),n}(a.Component),De=Object(m.b)((function(e){return e.user}),{addTag:b.b})(Object(g.g)(Ae)),Me=E.a.Sider,Ue=Object(m.b)((function(e){return Object($.a)({},e.app,{},e.settings)}))((function(e){var t=e.sidebarCollapsed,n=e.sidebarLogo;return r.a.createElement(Me,{collapsible:!0,collapsed:t,trigger:null,style:{zIndex:"10"}},n?r.a.createElement(Pe,null):null,r.a.createElement(De,null))})),Ve=(n(241),n(177)),Ge=function(e){Object(s.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).tagListContainer=r.a.createRef(),e.contextMenuContainer=r.a.createRef(),e.state={left:0,top:0,menuVisible:!1},e.handleClose=function(t){var n=e.props,a=n.history,r=n.deleteTag,o=n.taglist,i=t.path,c=a.location.pathname,l=o.length;i===c&&a.push(o[l-1].path),i===o[l-1].path&&c===o[l-1].path&&(l-2>0?a.push(o[l-2].path):2===l&&a.push(o[0].path)),r(t)},e.handleClick=function(t){e.props.history.push(t)},e.openContextMenu=function(t,n){n.preventDefault();var a=n.clientX,r=n.clientY;a>e.tagListContainer.current.clientWidth-105?e.setState({left:a-105+15,top:r,menuVisible:!0,currentTag:t}):e.setState({left:a,top:r,menuVisible:!0,currentTag:t})},e.handleClickOutside=function(t){var n=e.state.menuVisible;!(e.contextMenuContainer.current&&e.contextMenuContainer.current.contains(t.target))&&n&&e.closeContextMenu()},e.handleCloseAllTags=function(){e.props.emptyTaglist(),e.props.history.push("/dashboard"),e.closeContextMenu()},e.handleCloseOtherTags=function(){var t=e.state.currentTag,n=t.path;e.props.closeOtherTags(t),e.props.history.push(n),e.closeContextMenu()},e}return Object(u.a)(n,[{key:"closeContextMenu",value:function(){this.setState({menuVisible:!1})}},{key:"componentDidMount",value:function(){document.body.addEventListener("click",this.handleClickOutside)}},{key:"componentWillUnmount",value:function(){document.body.removeEventListener("click",this.handleClickOutside)}},{key:"render",value:function(){var e=this,t=this.state,n=t.left,a=t.top,o=t.menuVisible,i=this.props,c=i.taglist,l=i.history.location.pathname;return r.a.createElement(r.a.Fragment,null,r.a.createElement(Ie.Scrollbars,{autoHide:!0,autoHideTimeout:1e3,autoHideDuration:200,hideTracksWhenNotNeeded:!0,renderView:function(e){return r.a.createElement("div",Object.assign({},e,{className:"scrollbar-container"}))},renderTrackVertical:function(e){return r.a.createElement("div",Object.assign({},e,{className:"scrollbar-track-vertical"}))}},r.a.createElement("ul",{className:"tags-wrap",ref:this.tagListContainer},c.map((function(t){return r.a.createElement("li",{key:t.path},r.a.createElement(Ve.a,{onClose:e.handleClose.bind(null,t),closable:"/dashboard"!==t.path,color:l===t.path?"geekblue":"gold",onClick:e.handleClick.bind(null,t.path),onContextMenu:e.openContextMenu.bind(null,t)},t.title))})))),o?r.a.createElement("ul",{className:"contextmenu",style:{left:"".concat(n,"px"),top:"".concat(a,"px")},ref:this.contextMenuContainer},r.a.createElement("li",{onClick:this.handleCloseOtherTags},"\u5173\u95ed\u5176\u4ed6"),r.a.createElement("li",{onClick:this.handleCloseAllTags},"\u5173\u95ed\u6240\u6709")):null)}}]),n}(a.Component),He=Object(g.g)(Object(m.b)((function(e){return e.tagsView}),{deleteTag:b.e,emptyTaglist:b.f,closeOtherTags:b.d})(Ge)),ze=(n(406),function(){return r.a.createElement("div",{className:"tagsView-container"},r.a.createElement(He,null))}),Be=Object(m.b)((function(e){return e.settings}))((function(e){var t=e.tagsView;return r.a.createElement(E.a,{style:{minHeight:"100vh"}},r.a.createElement(Ue,null),r.a.createElement(E.a,null,r.a.createElement(be,null),t?r.a.createElement(ze,null):null,r.a.createElement(Z,null),r.a.createElement(Te,null)))})),Ke=(n(239),n(74)),We=(n(240),n(141)),Fe=(n(409),Ke.a.create()((function(e){var t=e.form,n=e.token,o=e.login,i=e.getUserInfo,c=t.getFieldDecorator,l=Object(a.useState)(!1),u=Object(ie.a)(l,2),s=u[0],d=u[1],m=function(e){i(e).then((function(e){})).catch((function(e){ce.a.error(e)}))};return n?r.a.createElement(g.a,{to:"/dashboard"}):r.a.createElement(O.a,{title:"\u7528\u6237\u767b\u5f55"},r.a.createElement("div",{className:"login-container"},r.a.createElement(Ke.a,{onSubmit:function(e){e.preventDefault(),t.validateFields((function(e,t){e?console.log("\u68c0\u9a8c\u5931\u8d25!"):function(e,t){d(!0),o(e,t).then((function(e){ce.a.success("\u767b\u5f55\u6210\u529f"),m(e.token)})).catch((function(e){d(!1),ce.a.error(e)}))}(t.username,t.password)}))},className:"content"},r.a.createElement("div",{className:"title"},r.a.createElement("h2",null,"\u7528\u6237\u767b\u5f55")),r.a.createElement(T.a,{spinning:s,tip:"\u767b\u5f55\u4e2d..."},r.a.createElement(Ke.a.Item,null,c("username",{rules:[{required:!0,whitespace:!0,message:"\u8bf7\u8f93\u5165\u7528\u6237\u540d"}],initialValue:"admin"})(r.a.createElement(We.a,{prefix:r.a.createElement(te.a,{type:"user",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"\u7528\u6237\u540d"}))),r.a.createElement(Ke.a.Item,null,c("password",{rules:[{required:!0,whitespace:!0,message:"\u8bf7\u8f93\u5165\u5bc6\u7801"}],initialValue:"123456"})(r.a.createElement(We.a,{prefix:r.a.createElement(te.a,{type:"lock",style:{color:"rgba(0,0,0,.25)"}}),type:"password",placeholder:"\u5bc6\u7801"}))),r.a.createElement(Ke.a.Item,null,r.a.createElement(ve.a,{type:"primary",htmlType:"submit",className:"login-form-button"},"\u767b\u5f55"))))))}))),Je=Object(m.b)((function(e){return e.user}),{login:b.h,getUserInfo:b.g})(Fe),qe=function(e){Object(s.a)(n,e);var t=Object(d.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props,t=e.token,n=e.role,a=e.getUserInfo;return r.a.createElement(h.a,null,r.a.createElement(g.d,null,r.a.createElement(g.b,{exact:!0,path:"/login",component:Je}),r.a.createElement(g.b,{path:"/",render:function(){return t?n?r.a.createElement(Be,null):void a(t).then((function(){return r.a.createElement(Be,null)})):r.a.createElement(g.a,{to:"/login"})}})))}}]),n}(r.a.Component),Ye=Object(m.b)((function(e){return e.user}),{getUserInfo:b.g})(qe),Xe=function(e){Object(s.a)(n,e);var t=Object(d.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return r.a.createElement(c.a,{locale:f.a},r.a.createElement(m.a,{store:p.a},r.a.createElement(Ye,null)))}}]),n}(a.Component),Qe=(n(476),n(477),n(32)),Ze=n.n(Qe),$e=[],et=0;et<20;et++)$e.push(Ze.a.mock({key:"@increment",order_no:"@guid()",price:"@float(1000, 15000, 0, 2)","tag|1":["success","pending"]}));for(var tt=function(e){return{code:2e4,data:{items:$e}}},nt=[],at=0;at<20;at++)nt.push(Ze.a.mock({id:"@increment",title:"@ctitle(5, 10)",author:"@cname",readings:"@integer(300, 5000)",date:"@datetime"}));for(var rt=function(e){return{code:2e4,data:{items:nt}}},ot=[],it=0;it<100;it++)ot.push(Ze.a.mock({id:it,title:"@ctitle(5, 10)",author:"@cname",readings:"@integer(300, 5000)","star|1-3":"\u2605","status|1":["published","draft"],date:"@datetime"}));var ct=function(e){var t=JSON.parse(e.body),n=t.pageNumber,a=t.pageSize,r=t.title,o=t.status,i=t.star,c=(n-1)*a,l=n*a,u=ot.filter((function(e){return(!i||e.star.length===i)&&((!o||e.status===o)&&!(r&&e.title.indexOf(r)<0))})),s=u.slice(c,l);return{code:2e4,data:{total:u.length,items:s}}},lt=function(e){var t=JSON.parse(e.body).id,n=ot.filter((function(e){return e.id===t})),a=ot.indexOf(n[0]);return ot.splice(a,1),{code:2e4}},ut=function(e){var t=JSON.parse(e.body),n=t.id,a=ot.filter((function(e){return e.id===n})),r=ot.indexOf(a[0]);return ot.splice(r,1,t),{code:2e4}};Ze.a.mock(/\/transaction\/list/,"get",tt),Ze.a.mock(/\/excel\/list/,"get",rt),Ze.a.mock(/\/table\/list/,"post",ct),Ze.a.mock(/\/table\/delete/,"post",lt),Ze.a.mock(/\/table\/edit/,"post",ut),Ze.a.mock(/\/monitor/,"post",(function(e){return{status:1,message:"monitor"}}));var st;Ze.a;["click","touchstart","mousedown","keydown","mouseover"].forEach((function(e){document.addEventListener(e,(function(e){st=e}),{capture:!0,passive:!0})}));var dt=function(){return st};function mt(e){return e.reverse().filter((function(e){return e!==document&&e!==window})).map((function(e){return e.id?"".concat(e.nodeName.toLowerCase(),"#").concat(e.id):e.className&&"string"===typeof e.className?"".concat(e.nodeName.toLowerCase(),".").concat(e.className):e.nodeName.toLowerCase()})).join(" ")}var ft=function(e){if(Array.isArray(e))return mt(e);for(var t=[];e;)t.push(e),e=e.parentNode;return mt(t)},pt=n(38);function ht(e){return Object(pt.a)({url:"/monitor",method:"post",data:e})}var gt=n(236),bt=n.n(gt);function Et(){return{title:document.title,url:window.location.href,timestamp:Date.now(),userAgent:bt.a.parse(navigator.userAgent).name}}var vt=new(function(){function e(){Object(l.a)(this,e)}return Object(u.a)(e,[{key:"send",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Et(),n=Object($.a)({},t,{},e);ht(n),p.a.dispatch(Object(b.a)(n))}}]),e}()),Ot={SCRIPT:2,LINK:3,IMG:4,AUDIO:5,VIDEO:6},yt={1:"JS_RUNTIME_ERROR",2:"SCRIPT_LOAD_ERROR",3:"CSS_LOAD_ERROR",4:"IMAGE_LOAD_ERROR",5:"AUDIO_LOAD_ERROR",6:"VIDEO_LOAD_ERROR",7:"CONSOLE_ERROR",8:"TRY_CATCH_ERROR"};window.addEventListener("error",(function(e){var t=dt(),n=e.target;if(n!==window&&n.nodeName&&Ot[n.nodeName.toUpperCase()])vt.send({kind:"stability",errorType:yt[Ot[n.nodeName.toUpperCase()]],desc:n.baseURI+"@"+(n.src||n.href),stack:"no stack",selector:ft(n)});else{var a=e.message,r=e.filename,o=e.lineno,i=e.colno,c=e.error;vt.send({kind:"stability",errorType:yt[1],desc:"".concat(a," at ").concat(r,":").concat(o,":").concat(i),stack:c&&c.stack?c.stack:"no stack",selector:t?ft(t.path):""})}}),!0),window.addEventListener("unhandledrejection",(function(e){var t,n,a=dt(),r=0,o=0,i="",c=e.reason;if("string"===typeof c)t=c;else if("object"===typeof c){if(t=c.message,c.stack){var l=c.stack.match(/at\s+(.+):(\d+):(\d+)/);n=l[1],r=l[2],o=l[3]}i=c.stack}vt.send({kind:"stability",errorType:yt[1],desc:"".concat(t," at ").concat(n,":").concat(r,":").concat(o),stack:i,selector:a?ft(a.path):""})}),!0),i.a.render(r.a.createElement(Xe,null),document.getElementById("root"))},51:function(e,t,n){"use strict";var a=n(35),r=n(222),o=n(16),i=n(13),c=n(93),l={name:"",role:"",avatar:"",token:Object(c.a)()};var u={sidebarCollapsed:!1,settingPanelVisible:!1};var s=n(105),d={showSettings:!1,sidebarLogo:!0,fixedHeader:!1,tagsView:!0};var m=n(53),f={taglist:[]};var p={bugList:[]};var h=Object(a.c)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case i.k:return Object(o.a)({},e,{token:t.token});case i.j:return Object(o.a)({},e,{name:t.name,role:t.role,avatar:t.avatar});case i.i:return{};default:return e}},app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case i.b:return Object(o.a)({},e,{sidebarCollapsed:!e.sidebarCollapsed});case i.a:return Object(o.a)({},e,{settingPanelVisible:!e.settingPanelVisible});default:return e}},settings:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case i.d:var n=t.key,a=t.value;return e.hasOwnProperty(n)?Object(o.a)({},e,Object(s.a)({},n,a)):e;default:return e}},tagsView:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case i.e:var n=t.tag;return e.taglist.includes(n)?e:Object(o.a)({},e,{taglist:[].concat(Object(m.a)(e.taglist),[n])});case i.g:return Object(o.a)({},e,{taglist:Object(m.a)(e.taglist.filter((function(e){return e!==t.tag})))});case i.h:return Object(o.a)({},e,{taglist:Object(m.a)(e.taglist.filter((function(e){return"/dashboard"===e.path})))});case i.f:return Object(o.a)({},e,{taglist:Object(m.a)(e.taglist.filter((function(e){return"/dashboard"===e.path||e===t.tag})))});default:return e}},monitor:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case i.c:return{bugList:[].concat(Object(m.a)(e.bugList),[t.bug])};default:return e}}}),g=Object(a.e)(h,Object(a.a)(r.a));t.a=g},93:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"c",(function(){return r})),n.d(t,"b",(function(){return o}));n(278);function a(){return localStorage.getItem("Token")}function r(e){return localStorage.setItem("Token",e)}function o(){return localStorage.removeItem("Token")}}},[[265,33,35]]]);