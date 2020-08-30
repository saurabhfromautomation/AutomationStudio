(this["webpackJsonpreact-automationstudio"]=this["webpackJsonpreact-automationstudio"]||[]).push([[5],{13:function(e,t,a){"use strict";var n=a(14),o=a(0),r=a.n(o);t.a=Object(n.a)(Object(n.a)({},r.a),{},{ID:r.a.oneOfType([r.a.string,r.a.number]).isRequired,component:r.a.oneOfType([r.a.string,r.a.func]),date:r.a.oneOfType([r.a.instanceOf(Date),r.a.string])})},17:function(e,t,a){e.exports=a.p+"static/media/100_4.851fe893.jpg"},18:function(e,t,a){"use strict";var n=a(3),o=a.n(n);const r=(s="cr",{create:e=>{let t=e;return"string"===typeof s&&(t="".concat(s,"-").concat(e)),{b:(...e)=>o()(t,e),e:(e,...a)=>o()("".concat(t,"__").concat(e),a),m:(e,...a)=>o()("".concat(t,"--").concat(e),a)}}});var s;t.a=r},20:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return h}));var n=a(43),o=a.n(n),r=a(1),s=a.n(r),c=a(91),l=a(27),i=a(28),m=a(29),p=a(50);class d extends s.a.Component{constructor(...e){super(...e),this.changeAuthState=e=>t=>{t.preventDefault(),this.props.onChangeAuthState(e)},this.handleSubmit=e=>{e.preventDefault()}}get isLogin(){return this.props.authState===u}get isSignup(){return this.props.authState===h}renderButtonText(){const e=this.props.buttonText;return!e&&this.isLogin?"Login":!e&&this.isSignup?"Signup":e}render(){const e=this.props,t=e.showLogo,a=e.usernameLabel,n=e.usernameInputProps,r=e.passwordLabel,d=e.passwordInputProps,g=e.confirmPasswordLabel,b=e.confirmPasswordInputProps,f=e.children,E=e.onLogoClick;return s.a.createElement(c.a,{onSubmit:this.handleSubmit},t&&s.a.createElement("div",{className:"text-center pb-4"},s.a.createElement("img",{src:o.a,className:"rounded",style:{width:60,height:60,cursor:"pointer"},alt:"logo",onClick:E})),s.a.createElement(l.a,null,s.a.createElement(i.a,{for:a},a),s.a.createElement(m.a,n)),s.a.createElement(l.a,null,s.a.createElement(i.a,{for:r},r),s.a.createElement(m.a,d)),this.isSignup&&s.a.createElement(l.a,null,s.a.createElement(i.a,{for:g},g),s.a.createElement(m.a,b)),s.a.createElement(l.a,{check:!0},s.a.createElement(i.a,{check:!0},s.a.createElement(m.a,{type:"checkbox"})," ",this.isSignup?"Agree the terms and policy":"Remember me")),s.a.createElement("hr",null),s.a.createElement(p.a,{size:"lg",className:"bg-gradient-theme-left border-0",block:!0,onClick:this.handleSubmit},this.renderButtonText()),s.a.createElement("div",{className:"text-center pt-1"},s.a.createElement("h6",null,"or"),s.a.createElement("h6",null,this.isSignup?s.a.createElement("a",{href:"#login",onClick:this.changeAuthState(u)},"Login"):s.a.createElement("a",{href:"#signup",onClick:this.changeAuthState(h)},"Signup"))),f)}}const u="LOGIN",h="SIGNUP";d.defaultProps={authState:"LOGIN",showLogo:!0,usernameLabel:"Email",usernameInputProps:{type:"email",placeholder:"your@email.com"},passwordLabel:"Password",passwordInputProps:{type:"password",placeholder:"your password"},confirmPasswordLabel:"Confirm Password",confirmPasswordInputProps:{type:"password",placeholder:"confirm your password"},onLogoClick:()=>{}},t.c=d},34:function(e,t,a){e.exports=a.p+"static/media/sidebar-4.80d4a4e5.jpg"},43:function(e,t,a){e.exports=a.p+"static/media/logo_200.5faf4221.png"},45:function(e,t,a){e.exports=a.p+"static/media/background_1920-2.c54eef50.jpg"},51:function(e,t,a){e.exports=a(90)},89:function(e,t,a){},90:function(e,t,a){"use strict";a.r(t);var n=a(1),o=a.n(n),r=a(15),s=a.n(r),c=(a(56),a(57),a(58),a(20)),l=a(0),i=a.n(l),m=a(26);m.a.initialize("UA-110410381-1");class p extends o.a.Component{componentDidMount(){this.sendPageView(this.context.router.history.location),this.context.router.history.listen(this.sendPageView)}sendPageView(e){m.a.set({page:e.pathname}),m.a.pageview(e.pathname)}render(){return this.props.children}}p.contextTypes={router:i.a.object};var d=p,u=a(8),h=a(18),g=a(93);const b=h.a.create("content"),f=e=>{let t=e.tag,a=e.className,n=Object(u.a)(e,["tag","className"]);const r=b.b(a);return o.a.createElement(t,Object.assign({className:r},n))};f.defaultProps={tag:g.a};var E=f;var x=e=>{let t=e.children,a=Object(u.a)(e,["children"]);return o.a.createElement("main",Object.assign({className:"cr-app bg-light"},a),o.a.createElement(E,{fluid:!0},t))},y=a(94),v=a(95),N=a(96);var k=()=>o.a.createElement(y.a,null,o.a.createElement(v.a,{navbar:!0},o.a.createElement(N.a,null,"Copyright \xa9 2020 by Automation Studio (Pravesh Jha)"))),S=a(14),C=a(13),P=a(3),w=a.n(P),O=a(17),z=a.n(O);const j=e=>{let t=e.rounded,a=e.circle,n=e.src,r=e.size,s=e.tag,c=e.className,l=e.style,i=Object(u.a)(e,["rounded","circle","src","size","tag","className","style"]);const m=w()({"rounded-circle":a,rounded:t},c);return o.a.createElement(s,Object.assign({src:n,style:Object(S.a)({width:r,height:r},l),className:m},i))};j.defaultProps={tag:"img",rounded:!1,circle:!0,size:40,src:z.a,style:{}};var I=j,L=a(97),D=a(98),A=a(99),T=a(100),B=a(101);const U=e=>{let t=e.avatar,a=e.avatarSize,n=e.title,r=e.subtitle,s=e.text,c=e.children,l=e.className,i=Object(u.a)(e,["avatar","avatarSize","title","subtitle","text","children","className"]);const m=w()("bg-gradient-theme",l);return o.a.createElement(L.a,Object.assign({inverse:!0,className:m},i),o.a.createElement(D.a,{className:"d-flex justify-content-center align-items-center flex-column"},o.a.createElement(I,{src:t,size:a,className:"mb-2"}),o.a.createElement(A.a,null,n),o.a.createElement(T.a,null,r),o.a.createElement(B.a,null,o.a.createElement("small",null,s))),c)};U.defaultProps={avatarSize:80};var W=U,R=a(102),_=a(50);const M=e=>{let t=e.color,a=e.header,n=e.avatar,r=e.avatarSize,s=e.name,c=e.date,l=e.text,i=e.className,m=e.buttonProps,p=Object(u.a)(e,["color","header","avatar","avatarSize","name","date","text","className","buttonProps"]);const d="bg-".concat(t),h=w()(d,i);return o.a.createElement(L.a,Object.assign({inverse:!0,className:h},p),a&&"string"===typeof a?o.a.createElement(R.a,{className:d},a):a,o.a.createElement(D.a,{className:"d-flex flex-wrap flex-column align-items-center justify-content-center"},o.a.createElement(I,{size:r,src:n}),o.a.createElement(B.a,{className:"text-center"},o.a.createElement("strong",{className:"d-block"},s),o.a.createElement("small",{className:"text-muted"},c)),o.a.createElement(B.a,{className:"text-center"},l),o.a.createElement(_.a,Object.assign({color:"primary"},m))))};M.defaultProps={color:"gradient-secondary",avatarSize:60};var q=a(105),G=a(106),J=a(103),V=a(104),F=a(27),H=a(28),Q=a(29);C.a.arrayOf(C.a.shape({id:C.a.ID,title:C.a.string,done:C.a.bool}));const K=e=>{let t=e.todos,a=Object(u.a)(e,["todos"]);return o.a.createElement(J.a,Object.assign({flush:!0},a),t.map(({id:e,title:t,done:a}={})=>o.a.createElement(V.a,{key:e,className:"border-0"},o.a.createElement(F.a,{check:!0},o.a.createElement(H.a,{check:!0},o.a.createElement(Q.a,{type:"checkbox",checked:a,readOnly:!0}),a?o.a.createElement("strike",null,t):o.a.createElement("span",null,t))))),o.a.createElement(_.a,{block:!0},"Add"))};K.defaultProps={todos:[]};var X=K,Y=a(45);const Z=e=>{let t=e.image,a=e.title,n=e.subtitle,r=e.todos,s=Object(u.a)(e,["image","title","subtitle","todos"]);return o.a.createElement(L.a,s,o.a.createElement("div",{className:"position-relative"},o.a.createElement(q.a,{src:t}),o.a.createElement(G.a,{className:"bg-dark",style:{opacity:.2}},o.a.createElement(A.a,{className:"text-white"},a),o.a.createElement(B.a,{className:"text-white"},n))),o.a.createElement(X,{todos:r}))};Z.defaultProps={image:a.n(Y).a,title:"Tasks",subtitle:"Due soon..."};var $=a(107);const ee=({notificationsData:e})=>e&&e.length&&e.map(({id:e,avatar:t,message:a,date:n})=>o.a.createElement($.a,{key:e,className:"pb-2"},o.a.createElement($.a,{left:!0,className:"align-self-center pr-3"},o.a.createElement(I,{tag:$.a,object:!0,src:t,alt:"Avatar"})),o.a.createElement($.a,{body:!0,middle:!0,className:"align-self-center"},a),o.a.createElement($.a,{right:!0,className:"align-self-center"},o.a.createElement("small",{className:"text-muted"},n))));ee.defaultProps={notificationsData:[]};var te=ee,ae=a(7),ne=a(91);var oe=()=>o.a.createElement(ne.a,{inline:!0,className:"cr-search-form",onSubmit:e=>e.preventDefault()},o.a.createElement(ae.j,{size:"20",className:"cr-search-form__icon-search text-secondary"}),o.a.createElement(Q.a,{type:"search",className:"cr-search-form__input",placeholder:"Search..."}));const re=[{id:1,avatar:z.a,message:"Upcoming feature : Artificial Intelligence "},{id:2,avatar:z.a,message:"Upcoming feature : Run time Debugging"},{id:3,avatar:z.a,message:"Upcoming feature : Build Compare/Execution Time Graph"},{id:4,avatar:z.a,message:"Upcoming feature : Continuous Integration Support"},{id:5,avatar:z.a,message:"Upcoming feature : Bug fixes"}];var se=a(108);const ce={"top-right":{top:-3,right:-3},"top-left":{top:-3,left:-3},"bottom-left":{bottom:-3,left:-3},"bottom-right":{bottom:-3,right:-3}},le={xs:{width:10,height:10},sm:{width:15,height:15},md:{width:20,height:20},lg:{width:25,height:25},xl:{width:30,height:30}};var ie=(e={})=>{let t=e.position,a=void 0===t?"bottom-right":t,n=e.size,r=void 0===n?"sm":n,s=e.style,c=void 0===s?{}:s,l=e.className,i=Object(u.a)(e,["position","size","style","className"]);return e=>t=>{let n=t.tag,s=void 0===n?"div":n,m=Object(u.a)(t,["tag"]);return o.a.createElement(s,{className:"d-inline-block position-relative"},o.a.createElement(e,m),o.a.createElement(se.a,Object.assign({className:w()("position-absolute",l),style:Object(S.a)(Object(S.a)(Object(S.a)({},ce[a]),le[r]),{},{borderRadius:"50%",border:"2px solid #fff"},c)},i)))}},me=a(109),pe=a(117),de=a(110);const ue=h.a.create("header"),he=ie({size:"md",color:"primary",style:{top:-10,right:-10,display:"inline-flex",justifyContent:"center",alignItems:"center"},children:o.a.createElement("small",null,"5")})(ae.h);class ge extends o.a.Component{constructor(...e){super(...e),this.state={isOpenNotificationPopover:!1,isNotificationConfirmed:!1,isOpenUserCardPopover:!1},this.toggleNotificationPopover=()=>{this.setState({isOpenNotificationPopover:!this.state.isOpenNotificationPopover}),this.state.isNotificationConfirmed||this.setState({isNotificationConfirmed:!0})},this.toggleUserCardPopover=()=>{this.setState({isOpenUserCardPopover:!this.state.isOpenUserCardPopover})},this.handleSidebarControlButton=e=>{e.preventDefault(),e.stopPropagation(),document.querySelector(".cr-sidebar").classList.toggle("cr-sidebar--open")}}render(){const e=this.state.isNotificationConfirmed;return o.a.createElement(y.a,{light:!0,expand:!0,className:ue.b("bg-white")},o.a.createElement(v.a,{navbar:!0,className:"mr-2"},o.a.createElement(_.a,{outline:!0,onClick:this.handleSidebarControlButton},o.a.createElement(ae.a,{size:25}))),o.a.createElement(v.a,{navbar:!0},o.a.createElement(oe,null)),o.a.createElement(v.a,{navbar:!0,className:ue.e("nav-right")},o.a.createElement(N.a,{className:"d-inline-flex"},o.a.createElement(me.a,{id:"Popover1",className:"position-relative"},e?o.a.createElement(ae.i,{size:25,className:"text-secondary can-click",onClick:this.toggleNotificationPopover}):o.a.createElement(he,{size:25,className:"text-secondary can-click animated swing infinite",onClick:this.toggleNotificationPopover})),o.a.createElement(pe.a,{placement:"bottom",isOpen:this.state.isOpenNotificationPopover,toggle:this.toggleNotificationPopover,target:"Popover1"},o.a.createElement(de.a,null,o.a.createElement(te,{notificationsData:re})))),o.a.createElement(N.a,null,o.a.createElement(me.a,{id:"Popover2"},o.a.createElement(I,{onClick:this.toggleUserCardPopover,className:"can-click"})),o.a.createElement(pe.a,{placement:"bottom-end",isOpen:this.state.isOpenUserCardPopover,toggle:this.toggleUserCardPopover,target:"Popover2",className:"p-0 border-0",style:{minWidth:250}},o.a.createElement(de.a,{className:"p-0 border-light"},o.a.createElement(W,{title:"Pravesh Jha",subtitle:"pravesh28@gmail.com",className:"border-light"}))))))}}var be=ge,fe=a(48);var Ee=e=>{let t=e.component,a=e.layout,n=Object(u.a)(e,["component","layout"]);return o.a.createElement(fe.a,Object.assign({},n,{render:e=>o.a.createElement(a,null,o.a.createElement(t,e))}))},xe=a(46),ye=a.n(xe);const ve={NotificationItem:{DefaultStyle:{display:"flex",justifyContent:"space-between",alignItems:"center",borderRadius:"4px",fontSize:"14px"},success:{borderTop:0,backgroundColor:"#45b649",WebkitBoxShadow:0,MozBoxShadow:0,boxShadow:0},error:{borderTop:0,backgroundColor:"#f85032",WebkitBoxShadow:0,MozBoxShadow:0,boxShadow:0},warning:{borderTop:0,backgroundColor:"#ffd700",WebkitBoxShadow:0,MozBoxShadow:0,boxShadow:0},info:{borderTop:0,background:"linear-gradient(to right, #6a82fb, #fc5c7d)",WebkitBoxShadow:0,MozBoxShadow:0,boxShadow:0}},Title:{DefaultStyle:{margin:0,padding:0,paddingRight:5,color:"#fff",display:"inline-flex",fontSize:20,fontWeight:"bold"}},MessageWrapper:{DefaultStyle:{display:"block",color:"#fff",width:"100%"}},Dismiss:{DefaultStyle:{display:"inline-flex",justifyContent:"center",alignItems:"center",fontFamily:"inherit",fontSize:20,color:"#f2f2f2",position:"relative",margin:0,padding:0,background:"none",borderRadius:0,opacity:1,width:20,height:20,textAlign:"initial",float:"none",top:"unset",right:"unset",lineHeight:"inherit"}},Action:{DefaultStyle:{background:"#fff",borderRadius:"2px",padding:"6px 20px",fontWeight:"bold",margin:"10px 0 0 0",border:0},success:{backgroundColor:"#45b649",color:"#fff"},error:{backgroundColor:"#f85032",color:"#fff"},warning:{backgroundColor:"#ffd700",color:"#fff"},info:{backgroundColor:"#00c9ff",color:"#fff"}},ActionWrapper:{DefaultStyle:{margin:0,padding:0}}};class Ne extends o.a.Component{constructor(...e){super(...e),this.handleContentClick=e=>{!Ne.isSidebarOpen()||"xs"!==this.props.breakpoint&&"sm"!==this.props.breakpoint&&"md"!==this.props.breakpoint||this.openSidebar("close")}}static isSidebarOpen(){return document.querySelector(".cr-sidebar").classList.contains("cr-sidebar--open")}componentWillReceiveProps({breakpoint:e}){e!==this.props.breakpoint&&this.checkBreakpoint(e)}componentDidMount(){this.checkBreakpoint(this.props.breakpoint),setTimeout(()=>{this.notificationSystem&&this.notificationSystem.addNotification({title:o.a.createElement(ae.d,null),message:"Welome to Automation Studio!",level:"info"})},1500),setTimeout(()=>{this.notificationSystem&&this.notificationSystem.addNotification({title:o.a.createElement(ae.g,null),message:"Automation Studio is complete QA Automation Solution",level:"info"})},2500)}checkBreakpoint(e){switch(e){case"xs":case"sm":case"md":return this.openSidebar("close");case"lg":case"xl":default:return this.openSidebar("open")}}openSidebar(e){if("open"===e)return document.querySelector(".cr-sidebar").classList.add("cr-sidebar--open");document.querySelector(".cr-sidebar").classList.remove("cr-sidebar--open")}render(){const e=this.props.children;return o.a.createElement("main",{className:"cr-app bg-light"},o.a.createElement(Ae,null),o.a.createElement(E,{fluid:!0,onClick:this.handleContentClick},o.a.createElement(be,null),e,o.a.createElement(k,null)),o.a.createElement(ye.a,{dismissible:!1,ref:e=>this.notificationSystem=e,style:ve}))}}var ke=Ne,Se=a(34),Ce=a.n(Se);var Pe=e=>o.a.createElement("a",Object.assign({href:"",target:"_blank",rel:"noopener noreferrer"},e)),we=a(118),Oe=a(111);const ze={backgroundImage:'url("'.concat(Ce.a,'")'),backgroundSize:"cover",backgroundRepeat:"no-repeat"},je=[{to:"/testattribute",name:"Test Attribute",exact:!1,Icon:ae.k},{to:"/locatorproperty",name:"Locator Property",exact:!1,Icon:ae.k},{to:"/testdata",name:"Test Data",exact:!1,Icon:ae.k},{to:"/updatetestscript",name:"Update Test Script",exact:!1,Icon:ae.k},{to:"/customfunction",name:"Custom Function",exact:!1,Icon:ae.k},{to:"/seleniumgrid",name:"Selenium Grid",exact:!1,Icon:ae.k},{to:"/configuration",name:"Configuration Setup",exact:!1,Icon:ae.k}],Ie=[{to:"/",name:"dashboard",exact:!0,Icon:ae.b},{to:"/executionlabpage",name:"Execution Lab",exact:!1,Icon:ae.e},{to:"/testscripts",name:"Test Scripts",exact:!1,Icon:ae.l}],Le=h.a.create("sidebar");class De extends o.a.Component{constructor(...e){super(...e),this.state={isOpenComponents:!1,isOpenContents:!1,isOpenPages:!1},this.handleClick=e=>()=>{this.setState(t=>{const a=t["isOpen".concat(e)];return{["isOpen".concat(e)]:!a}})}}render(){return o.a.createElement("aside",{className:Le.b(),"data-image":Ce.a},o.a.createElement("div",{className:Le.e("background"),style:ze}),o.a.createElement("div",{className:Le.e("content")},o.a.createElement(y.a,null,o.a.createElement(Pe,{className:"navbar-brand d-flex"},o.a.createElement("span",{className:"text-white"},"Automation Studio"))),o.a.createElement(v.a,{vertical:!0},Ie.map(({to:e,name:t,exact:a,Icon:n},r)=>o.a.createElement(N.a,{key:r,className:Le.e("nav-item")},o.a.createElement(me.a,{id:"navItem-".concat(t,"-").concat(r),className:"text-uppercase",tag:we.a,to:e,activeClassName:"active",exact:a},o.a.createElement(n,{className:Le.e("nav-item-icon")}),o.a.createElement("span",{className:""},t)))),o.a.createElement(N.a,{className:Le.e("nav-item"),onClick:this.handleClick("Components")},o.a.createElement(me.a,{className:Le.e("nav-item-collapse")},o.a.createElement("div",{className:"d-flex"},o.a.createElement(ae.c,{className:Le.e("nav-item-icon")}),o.a.createElement("span",{className:" align-self-start"},"Maintenance")),o.a.createElement(ae.f,{className:Le.e("nav-item-icon"),style:{padding:0,transform:this.state.isOpenComponents?"rotate(0deg)":"rotate(-90deg)",transitionDuration:"0.3s",transitionProperty:"transform"}}))),o.a.createElement(Oe.a,{isOpen:this.state.isOpenComponents},je.map(({to:e,name:t,exact:a,Icon:n},r)=>o.a.createElement(N.a,{key:r,className:Le.e("nav-item")},o.a.createElement(me.a,{id:"navItem-".concat(t,"-").concat(r),className:"text-uppercase",tag:we.a,to:e,activeClassName:"active",exact:a},o.a.createElement(n,{className:Le.e("nav-item-icon")}),o.a.createElement("span",{className:""},t))))))))}}var Ae=De,Te=a(112);var Be=({color:e="primary"})=>o.a.createElement("div",{className:"cr-page-spinner"},o.a.createElement(Te.a,{color:e})),Ue=a(113),We=a(114);class Re extends o.a.Component{constructor(...e){super(...e),this.handleAuthState=e=>{e===c.a?this.props.history.push("/login"):this.props.history.push("/signup")},this.handleLogoClick=()=>{this.props.history.push("/")}}render(){return o.a.createElement(Ue.a,{style:{height:"100vh",justifyContent:"center",alignItems:"center"}},o.a.createElement(We.a,{md:6,lg:4},o.a.createElement(L.a,{body:!0},o.a.createElement(c.c,{authState:this.props.authState,onChangeAuthState:this.handleAuthState,onLogoClick:this.handleLogoClick}))))}}var _e=Re,Me=a(47),qe=a.n(Me),Ge=a(115),Je=a(119),Ve=a(116);a(89);const Fe=o.a.lazy(()=>a.e(22).then(a.bind(null,523))),He=o.a.lazy(()=>a.e(16).then(a.bind(null,502))),Qe=o.a.lazy(()=>a.e(28).then(a.bind(null,503))),Ke=o.a.lazy(()=>a.e(10).then(a.bind(null,524))),Xe=o.a.lazy(()=>a.e(24).then(a.bind(null,504))),Ye=o.a.lazy(()=>Promise.all([a.e(2),a.e(21),a.e(29)]).then(a.bind(null,505))),Ze=o.a.lazy(()=>Promise.all([a.e(2),a.e(11)]).then(a.bind(null,506))),$e=o.a.lazy(()=>Promise.all([a.e(0),a.e(1),a.e(2),a.e(27)]).then(a.bind(null,507))),et=o.a.lazy(()=>a.e(12).then(a.bind(null,508))),tt=o.a.lazy(()=>a.e(25).then(a.bind(null,525))),at=o.a.lazy(()=>a.e(14).then(a.bind(null,522))),nt=o.a.lazy(()=>a.e(9).then(a.bind(null,509))),ot=o.a.lazy(()=>a.e(18).then(a.bind(null,510))),rt=o.a.lazy(()=>a.e(26).then(a.bind(null,511))),st=o.a.lazy(()=>a.e(33).then(a.bind(null,512))),ct=o.a.lazy(()=>a.e(23).then(a.bind(null,526))),lt=o.a.lazy(()=>Promise.all([a.e(0),a.e(1),a.e(2),a.e(8)]).then(a.bind(null,521))),it=o.a.lazy(()=>Promise.all([a.e(0),a.e(1),a.e(3),a.e(4),a.e(32)]).then(a.bind(null,513))),mt=o.a.lazy(()=>Promise.all([a.e(0),a.e(19)]).then(a.bind(null,514))),pt=o.a.lazy(()=>Promise.all([a.e(0),a.e(17)]).then(a.bind(null,515))),dt=o.a.lazy(()=>Promise.all([a.e(0),a.e(1),a.e(3),a.e(31)]).then(a.bind(null,516))),ut=o.a.lazy(()=>Promise.all([a.e(0),a.e(1),a.e(3),a.e(20)]).then(a.bind(null,517))),ht=o.a.lazy(()=>Promise.all([a.e(0),a.e(1),a.e(3),a.e(4),a.e(30)]).then(a.bind(null,518))),gt=o.a.lazy(()=>Promise.all([a.e(0),a.e(15)]).then(a.bind(null,519))),bt=o.a.lazy(()=>Promise.all([a.e(0),a.e(13)]).then(a.bind(null,520)));class ft extends o.a.Component{render(){return o.a.createElement(Ge.a,{basename:"/".concat(".".split("/").pop())},o.a.createElement(d,null,o.a.createElement(Je.a,null,o.a.createElement(Ee,{exact:!0,path:"/login",layout:x,component:e=>o.a.createElement(_e,Object.assign({},e,{authState:c.a}))}),o.a.createElement(Ee,{exact:!0,path:"/signup",layout:x,component:e=>o.a.createElement(_e,Object.assign({},e,{authState:c.b}))}),o.a.createElement(ke,{breakpoint:this.props.breakpoint},o.a.createElement(o.a.Suspense,{fallback:o.a.createElement(Be,null)},o.a.createElement(fe.a,{exact:!0,path:"/",component:$e}),o.a.createElement(fe.a,{exact:!0,path:"/login-modal",component:He}),o.a.createElement(fe.a,{exact:!0,path:"/buttons",component:Xe}),o.a.createElement(fe.a,{exact:!0,path:"/cards",component:Ye}),o.a.createElement(fe.a,{exact:!0,path:"/widgets",component:ct}),o.a.createElement(fe.a,{exact:!0,path:"/typography",component:st}),o.a.createElement(fe.a,{exact:!0,path:"/alerts",component:Fe}),o.a.createElement(fe.a,{exact:!0,path:"/tables",component:rt}),o.a.createElement(fe.a,{exact:!0,path:"/badges",component:Qe}),o.a.createElement(fe.a,{exact:!0,path:"/executionlabpage",component:lt}),o.a.createElement(fe.a,{exact:!0,path:"/testscripts",component:it}),o.a.createElement(fe.a,{exact:!0,path:"/button-groups",component:Ke}),o.a.createElement(fe.a,{exact:!0,path:"/dropdowns",component:et}),o.a.createElement(fe.a,{exact:!0,path:"/progress",component:ot}),o.a.createElement(fe.a,{exact:!0,path:"/modals",component:nt}),o.a.createElement(fe.a,{exact:!0,path:"/forms",component:tt}),o.a.createElement(fe.a,{exact:!0,path:"/input-groups",component:at}),o.a.createElement(fe.a,{exact:!0,path:"/charts",component:Ze}),o.a.createElement(fe.a,{exact:!0,path:"/testattribute",component:mt}),o.a.createElement(fe.a,{exact:!0,path:"/locatorproperty",component:pt}),o.a.createElement(fe.a,{exact:!0,path:"/testdata",component:dt}),o.a.createElement(fe.a,{exact:!0,path:"/updatetestscript",component:ut}),o.a.createElement(fe.a,{exact:!0,path:"/customfunction",component:ht}),o.a.createElement(fe.a,{exact:!0,path:"/seleniumgrid",component:gt}),o.a.createElement(fe.a,{exact:!0,path:"/configuration",component:bt}))),o.a.createElement(Ve.a,{to:"/"}))))}}var Et=qe()(({width:e})=>e<575?{breakpoint:"xs"}:576<e&&e<767?{breakpoint:"sm"}:768<e&&e<991?{breakpoint:"md"}:992<e&&e<1199?{breakpoint:"lg"}:e>1200?{breakpoint:"xl"}:{breakpoint:"xs"})(ft);s.a.render(o.a.createElement(Et,null),document.getElementById("root"))}},[[51,6,7]]]);
//# sourceMappingURL=main.d57f8157.chunk.js.map