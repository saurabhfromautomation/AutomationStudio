(this["webpackJsonpreact-automationstudio"]=this["webpackJsonpreact-automationstudio"]||[]).push([[16],{120:function(e,t,a){"use strict";var s=a(8),n=a(3),o=a.n(n),i=a(1),l=a.n(i);a(13);const r={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6","display-1":"h1","display-2":"h1","display-3":"h1","display-4":"h1",p:"p",lead:"p",blockquote:"blockquote"},c=e=>{let t=e.tag,a=e.className,n=e.type,i=Object(s.a)(e,["tag","className","type"]);const c=o()({[n]:!!n},a);let d;return d=t||(!t&&r[n]?r[n]:"p"),l.a.createElement(d,Object.assign({},i,{className:c}))};c.defaultProps={type:"p"},t.a=c},121:function(e,t,a){"use strict";var s=a(8),n=a(1),o=a.n(n),i=(a(13),a(18)),l=a(126),r=a(127),c=a(120);const d=i.a.create("page"),p=e=>{let t=e.title,a=e.breadcrumbs,n=e.tag,i=e.className,p=e.children,u=Object(s.a)(e,["title","breadcrumbs","tag","className","children"]);const h=d.b("px-3",i);return o.a.createElement(n,Object.assign({className:h},u),o.a.createElement("div",{className:d.e("header")},t&&"string"===typeof t?o.a.createElement(c.a,{type:"h1",className:d.e("title")},t):t,a&&o.a.createElement(l.a,{className:d.e("breadcrumb")},o.a.createElement(r.a,null,"Home"),a.length&&a.map(({name:e,active:t},a)=>o.a.createElement(r.a,{key:a,active:t},e)))),p)};p.defaultProps={tag:"div",title:""},t.a=p},124:function(e,t,a){"use strict";var s=a(4),n=a(5),o=a(19),i=a(1),l=a.n(i),r=a(0),c=a.n(r),d=a(3),p=a.n(d),u=a(22),h=a(2),m=Object(o.a)({},u.Transition.propTypes,{children:c.a.oneOfType([c.a.arrayOf(c.a.node),c.a.node]),tag:h.q,baseClass:c.a.string,baseClassActive:c.a.string,className:c.a.string,cssModule:c.a.object,innerRef:c.a.oneOfType([c.a.object,c.a.string,c.a.func])}),b=Object(o.a)({},u.Transition.defaultProps,{tag:"div",baseClass:"fade",baseClassActive:"show",timeout:h.e.Fade,appear:!0,enter:!0,exit:!0,in:!0});function g(e){var t=e.tag,a=e.baseClass,o=e.baseClassActive,i=e.className,r=e.cssModule,c=e.children,d=e.innerRef,m=Object(n.a)(e,["tag","baseClass","baseClassActive","className","cssModule","children","innerRef"]),b=Object(h.o)(m,h.c),g=Object(h.n)(m,h.c);return l.a.createElement(u.Transition,b,(function(e){var n="entered"===e,u=Object(h.m)(p()(i,a,n&&o),r);return l.a.createElement(t,Object(s.a)({className:u},g,{ref:d}),c)}))}g.propTypes=m,g.defaultProps=b,t.a=g},126:function(e,t,a){"use strict";var s=a(4),n=a(5),o=a(1),i=a.n(o),l=a(0),r=a.n(l),c=a(3),d=a.n(c),p=a(2),u={tag:p.q,listTag:p.q,className:r.a.string,listClassName:r.a.string,cssModule:r.a.object,children:r.a.node,"aria-label":r.a.string},h=function(e){var t=e.className,a=e.listClassName,o=e.cssModule,l=e.children,r=e.tag,c=e.listTag,u=e["aria-label"],h=Object(n.a)(e,["className","listClassName","cssModule","children","tag","listTag","aria-label"]),m=Object(p.m)(d()(t),o),b=Object(p.m)(d()("breadcrumb",a),o);return i.a.createElement(r,Object(s.a)({},h,{className:m,"aria-label":u}),i.a.createElement(c,{className:b},l))};h.propTypes=u,h.defaultProps={tag:"nav",listTag:"ol","aria-label":"breadcrumb"},t.a=h},127:function(e,t,a){"use strict";var s=a(4),n=a(5),o=a(1),i=a.n(o),l=a(0),r=a.n(l),c=a(3),d=a.n(c),p=a(2),u={tag:p.q,active:r.a.bool,className:r.a.string,cssModule:r.a.object},h=function(e){var t=e.className,a=e.cssModule,o=e.active,l=e.tag,r=Object(n.a)(e,["className","cssModule","active","tag"]),c=Object(p.m)(d()(t,!!o&&"active","breadcrumb-item"),a);return i.a.createElement(l,Object(s.a)({},r,{className:c,"aria-current":o?"page":void 0}))};h.propTypes=u,h.defaultProps={tag:"li"},t.a=h},145:function(e,t,a){"use strict";var s=a(4),n=a(5),o=a(1),i=a.n(o),l=a(0),r=a.n(l),c=a(3),d=a.n(c),p=a(2),u={tag:p.q,className:r.a.string,cssModule:r.a.object},h=function(e){var t=e.className,a=e.cssModule,o=e.tag,l=Object(n.a)(e,["className","cssModule","tag"]),r=Object(p.m)(d()(t,"modal-body"),a);return i.a.createElement(o,Object(s.a)({},l,{className:r}))};h.propTypes=u,h.defaultProps={tag:"div"},t.a=h},152:function(e,t,a){"use strict";var s=a(19),n=a(4),o=a(10),i=a(6),l=a(1),r=a.n(l),c=a(0),d=a.n(c),p=a(3),u=a.n(p),h=a(15),m=a.n(h),b=a(2),g={children:d.a.node.isRequired,node:d.a.any},f=function(e){function t(){return e.apply(this,arguments)||this}Object(o.a)(t,e);var a=t.prototype;return a.componentWillUnmount=function(){this.defaultNode&&document.body.removeChild(this.defaultNode),this.defaultNode=null},a.render=function(){return b.f?(this.props.node||this.defaultNode||(this.defaultNode=document.createElement("div"),document.body.appendChild(this.defaultNode)),m.a.createPortal(this.props.children,this.props.node||this.defaultNode)):null},t}(r.a.Component);f.propTypes=g;var O=f,y=a(124);function j(){}var N=d.a.shape(y.a.propTypes),C={isOpen:d.a.bool,autoFocus:d.a.bool,centered:d.a.bool,size:d.a.string,toggle:d.a.func,keyboard:d.a.bool,role:d.a.string,labelledBy:d.a.string,backdrop:d.a.oneOfType([d.a.bool,d.a.oneOf(["static"])]),onEnter:d.a.func,onExit:d.a.func,onOpened:d.a.func,onClosed:d.a.func,children:d.a.node,className:d.a.string,wrapClassName:d.a.string,modalClassName:d.a.string,backdropClassName:d.a.string,contentClassName:d.a.string,external:d.a.node,fade:d.a.bool,cssModule:d.a.object,zIndex:d.a.oneOfType([d.a.number,d.a.string]),backdropTransition:N,modalTransition:N,innerRef:d.a.oneOfType([d.a.object,d.a.string,d.a.func])},E=Object.keys(C),v={isOpen:!1,autoFocus:!0,centered:!1,role:"dialog",backdrop:!0,keyboard:!0,zIndex:1050,fade:!0,onOpened:j,onClosed:j,modalTransition:{timeout:b.e.Modal},backdropTransition:{mountOnEnter:!0,timeout:b.e.Fade}},k=function(e){function t(t){var a;return(a=e.call(this,t)||this)._element=null,a._originalBodyPadding=null,a.getFocusableChildren=a.getFocusableChildren.bind(Object(i.a)(Object(i.a)(a))),a.handleBackdropClick=a.handleBackdropClick.bind(Object(i.a)(Object(i.a)(a))),a.handleBackdropMouseDown=a.handleBackdropMouseDown.bind(Object(i.a)(Object(i.a)(a))),a.handleEscape=a.handleEscape.bind(Object(i.a)(Object(i.a)(a))),a.handleTab=a.handleTab.bind(Object(i.a)(Object(i.a)(a))),a.onOpened=a.onOpened.bind(Object(i.a)(Object(i.a)(a))),a.onClosed=a.onClosed.bind(Object(i.a)(Object(i.a)(a))),a.state={isOpen:t.isOpen},t.isOpen&&a.init(),a}Object(o.a)(t,e);var a=t.prototype;return a.componentDidMount=function(){this.props.onEnter&&this.props.onEnter(),this.state.isOpen&&this.props.autoFocus&&this.setFocus(),this._isMounted=!0},a.componentWillReceiveProps=function(e){e.isOpen&&!this.props.isOpen&&this.setState({isOpen:e.isOpen})},a.componentWillUpdate=function(e,t){t.isOpen&&!this.state.isOpen&&this.init()},a.componentDidUpdate=function(e,t){this.props.autoFocus&&this.state.isOpen&&!t.isOpen&&this.setFocus(),this._element&&e.zIndex!==this.props.zIndex&&(this._element.style.zIndex=this.props.zIndex)},a.componentWillUnmount=function(){this.props.onExit&&this.props.onExit(),this.state.isOpen&&this.destroy(),this._isMounted=!1},a.onOpened=function(e,t){this.props.onOpened(),(this.props.modalTransition.onEntered||j)(e,t)},a.onClosed=function(e){this.props.onClosed(),(this.props.modalTransition.onExited||j)(e),this.destroy(),this._isMounted&&this.setState({isOpen:!1})},a.setFocus=function(){this._dialog&&this._dialog.parentNode&&"function"===typeof this._dialog.parentNode.focus&&this._dialog.parentNode.focus()},a.getFocusableChildren=function(){return this._element.querySelectorAll(b.i.join(", "))},a.getFocusedChild=function(){var e,t=this.getFocusableChildren();try{e=document.activeElement}catch(a){e=t[0]}return e},a.handleBackdropClick=function(e){if(e.target===this._mouseDownElement){if(e.stopPropagation(),!this.props.isOpen||!0!==this.props.backdrop)return;var t=this._dialog?this._dialog.parentNode:null;t&&e.target===t&&this.props.toggle&&this.props.toggle(e)}},a.handleTab=function(e){if(9===e.which){for(var t=this.getFocusableChildren(),a=t.length,s=this.getFocusedChild(),n=0,o=0;o<a;o+=1)if(t[o]===s){n=o;break}e.shiftKey&&0===n?(e.preventDefault(),t[a-1].focus()):e.shiftKey||n!==a-1||(e.preventDefault(),t[0].focus())}},a.handleBackdropMouseDown=function(e){this._mouseDownElement=e.target},a.handleEscape=function(e){this.props.isOpen&&this.props.keyboard&&27===e.keyCode&&this.props.toggle&&(e.preventDefault(),e.stopPropagation(),this.props.toggle(e))},a.init=function(){try{this._triggeringElement=document.activeElement}catch(e){this._triggeringElement=null}this._element=document.createElement("div"),this._element.setAttribute("tabindex","-1"),this._element.style.position="relative",this._element.style.zIndex=this.props.zIndex,this._originalBodyPadding=Object(b.j)(),Object(b.g)(),document.body.appendChild(this._element),0===t.openCount&&(document.body.className=u()(document.body.className,Object(b.m)("modal-open",this.props.cssModule))),t.openCount+=1},a.destroy=function(){if(this._element&&(document.body.removeChild(this._element),this._element=null),this._triggeringElement&&(this._triggeringElement.focus&&this._triggeringElement.focus(),this._triggeringElement=null),t.openCount<=1){var e=Object(b.m)("modal-open",this.props.cssModule),a=new RegExp("(^| )"+e+"( |$)");document.body.className=document.body.className.replace(a," ").trim()}t.openCount-=1,Object(b.p)(this._originalBodyPadding)},a.renderModalDialog=function(){var e,t=this,a=Object(b.n)(this.props,E);return r.a.createElement("div",Object(n.a)({},a,{className:Object(b.m)(u()("modal-dialog",this.props.className,(e={},e["modal-"+this.props.size]=this.props.size,e["modal-dialog-centered"]=this.props.centered,e)),this.props.cssModule),role:"document",ref:function(e){t._dialog=e}}),r.a.createElement("div",{className:Object(b.m)(u()("modal-content",this.props.contentClassName),this.props.cssModule)},this.props.children))},a.render=function(){if(this.state.isOpen){var e=this.props,t=e.wrapClassName,a=e.modalClassName,o=e.backdropClassName,i=e.cssModule,l=e.isOpen,c=e.backdrop,d=e.role,p=e.labelledBy,h=e.external,m=e.innerRef,g={onClick:this.handleBackdropClick,onMouseDown:this.handleBackdropMouseDown,onKeyUp:this.handleEscape,onKeyDown:this.handleTab,style:{display:"block"},"aria-labelledby":p,role:d,tabIndex:"-1"},f=this.props.fade,j=Object(s.a)({},y.a.defaultProps,this.props.modalTransition,{baseClass:f?this.props.modalTransition.baseClass:"",timeout:f?this.props.modalTransition.timeout:0}),N=Object(s.a)({},y.a.defaultProps,this.props.backdropTransition,{baseClass:f?this.props.backdropTransition.baseClass:"",timeout:f?this.props.backdropTransition.timeout:0}),C=c&&(f?r.a.createElement(y.a,Object(n.a)({},N,{in:l&&!!c,cssModule:i,className:Object(b.m)(u()("modal-backdrop",o),i)})):r.a.createElement("div",{className:Object(b.m)(u()("modal-backdrop","show",o),i)}));return r.a.createElement(O,{node:this._element},r.a.createElement("div",{className:Object(b.m)(t)},r.a.createElement(y.a,Object(n.a)({},g,j,{in:l,onEntered:this.onOpened,onExited:this.onClosed,cssModule:i,className:Object(b.m)(u()("modal",a),i),innerRef:m}),h,this.renderModalDialog()),C))}return null},t}(r.a.Component);k.propTypes=C,k.defaultProps=v,k.openCount=0;t.a=k},502:function(e,t,a){"use strict";a.r(t);var s=a(20),n=a(121),o=a(1),i=a.n(o),l=a(113),r=a(114),c=a(97),d=a(102),p=a(98),u=a(50),h=a(152),m=a(145);class b extends i.a.Component{constructor(...e){super(...e),this.state={show:!1,authState:s.a},this.toggle=()=>{this.setState({show:!this.state.show})},this.handleAuthState=e=>{this.setState({authState:e})}}render(){const e=i.a.createElement("button",{className:"close",style:{position:"absolute",top:"15px",right:"20px",fontSize:"3rem"},onClick:this.toggle},"\xd7");return i.a.createElement(n.a,{title:"Login Modal",breadcrumbs:[{name:"login modal",active:!0}]},i.a.createElement(l.a,null,i.a.createElement(r.a,{md:"12",sm:"12",xs:"12"},i.a.createElement(c.a,null,i.a.createElement(d.a,null,"Login Modal Example"),i.a.createElement(p.a,null,i.a.createElement(u.a,{color:"danger",onClick:this.toggle},"Click to Login"),i.a.createElement(h.a,{isOpen:this.state.show,toggle:this.toggle,size:"sm",backdrop:"static",backdropClassName:"modal-backdrop-light",external:e,centered:!0},i.a.createElement(m.a,null,i.a.createElement(s.c,{authState:this.state.authState,onChangeAuthState:this.handleAuthState}))))))))}}t.default=b}}]);
//# sourceMappingURL=16.9d1a2228.chunk.js.map