(this["webpackJsonpreact-automationstudio"]=this["webpackJsonpreact-automationstudio"]||[]).push([[26],{120:function(e,t,a){"use strict";var l=a(8),n=a(3),r=a.n(n),c=a(1),m=a.n(c);a(13);const o={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6","display-1":"h1","display-2":"h1","display-3":"h1","display-4":"h1",p:"p",lead:"p",blockquote:"blockquote"},u=e=>{let t=e.tag,a=e.className,n=e.type,c=Object(l.a)(e,["tag","className","type"]);const u=r()({[n]:!!n},a);let s;return s=t||(!t&&o[n]?o[n]:"p"),m.a.createElement(s,Object.assign({},c,{className:u}))};u.defaultProps={type:"p"},t.a=u},121:function(e,t,a){"use strict";var l=a(8),n=a(1),r=a.n(n),c=(a(13),a(18)),m=a(126),o=a(127),u=a(120);const s=c.a.create("page"),E=e=>{let t=e.title,a=e.breadcrumbs,n=e.tag,c=e.className,E=e.children,d=Object(l.a)(e,["title","breadcrumbs","tag","className","children"]);const i=s.b("px-3",c);return r.a.createElement(n,Object.assign({className:i},d),r.a.createElement("div",{className:s.e("header")},t&&"string"===typeof t?r.a.createElement(u.a,{type:"h1",className:s.e("title")},t):t,a&&r.a.createElement(m.a,{className:s.e("breadcrumb")},r.a.createElement(o.a,null,"Home"),a.length&&a.map(({name:e,active:t},a)=>r.a.createElement(o.a,{key:a,active:t},e)))),E)};E.defaultProps={tag:"div",title:""},t.a=E},126:function(e,t,a){"use strict";var l=a(4),n=a(5),r=a(1),c=a.n(r),m=a(0),o=a.n(m),u=a(3),s=a.n(u),E=a(2),d={tag:E.q,listTag:E.q,className:o.a.string,listClassName:o.a.string,cssModule:o.a.object,children:o.a.node,"aria-label":o.a.string},i=function(e){var t=e.className,a=e.listClassName,r=e.cssModule,m=e.children,o=e.tag,u=e.listTag,d=e["aria-label"],i=Object(n.a)(e,["className","listClassName","cssModule","children","tag","listTag","aria-label"]),h=Object(E.m)(s()(t),r),b=Object(E.m)(s()("breadcrumb",a),r);return c.a.createElement(o,Object(l.a)({},i,{className:h,"aria-label":d}),c.a.createElement(u,{className:b},m))};i.propTypes=d,i.defaultProps={tag:"nav",listTag:"ol","aria-label":"breadcrumb"},t.a=i},127:function(e,t,a){"use strict";var l=a(4),n=a(5),r=a(1),c=a.n(r),m=a(0),o=a.n(m),u=a(3),s=a.n(u),E=a(2),d={tag:E.q,active:o.a.bool,className:o.a.string,cssModule:o.a.object},i=function(e){var t=e.className,a=e.cssModule,r=e.active,m=e.tag,o=Object(n.a)(e,["className","cssModule","active","tag"]),u=Object(E.m)(s()(t,!!r&&"active","breadcrumb-item"),a);return c.a.createElement(m,Object(l.a)({},o,{className:u,"aria-current":r?"page":void 0}))};i.propTypes=d,i.defaultProps={tag:"li"},t.a=i},371:function(e,t,a){"use strict";var l=a(4),n=a(5),r=a(1),c=a.n(r),m=a(0),o=a.n(m),u=a(3),s=a.n(u),E=a(2),d={className:o.a.string,cssModule:o.a.object,size:o.a.string,bordered:o.a.bool,borderless:o.a.bool,striped:o.a.bool,inverse:Object(E.h)(o.a.bool,'Please use the prop "dark"'),dark:o.a.bool,hover:o.a.bool,responsive:o.a.oneOfType([o.a.bool,o.a.string]),tag:E.q,responsiveTag:E.q,innerRef:o.a.oneOfType([o.a.func,o.a.string,o.a.object])},i=function(e){var t=e.className,a=e.cssModule,r=e.size,m=e.bordered,o=e.borderless,u=e.striped,d=e.inverse,i=e.dark,h=e.hover,b=e.responsive,p=e.tag,C=e.responsiveTag,g=e.innerRef,N=Object(n.a)(e,["className","cssModule","size","bordered","borderless","striped","inverse","dark","hover","responsive","tag","responsiveTag","innerRef"]),w=Object(E.m)(s()(t,"table",!!r&&"table-"+r,!!m&&"table-bordered",!!o&&"table-borderless",!!u&&"table-striped",!(!i&&!d)&&"table-dark",!!h&&"table-hover"),a),v=c.a.createElement(p,Object(l.a)({},N,{ref:g,className:w}));if(b){var y=!0===b?"table-responsive":"table-responsive-"+b;return c.a.createElement(C,{className:y},v)}return v};i.propTypes=d,i.defaultProps={tag:"table",responsiveTag:"div"},t.a=i},511:function(e,t,a){"use strict";a.r(t);var l=a(121),n=a(1),r=a.n(n),c=a(113),m=a(114),o=a(97),u=a(102),s=a(98),E=a(371);const d=["","bordered","striped","hover"];t.default=()=>r.a.createElement(l.a,{title:"Tables",breadcrumbs:[{name:"tables",active:!0}],className:"TablePage"},d.map((e,t)=>r.a.createElement(c.a,{key:t},r.a.createElement(m.a,null,r.a.createElement(o.a,{className:"mb-3"},r.a.createElement(u.a,null,e||"default"),r.a.createElement(s.a,null,r.a.createElement(c.a,null,r.a.createElement(m.a,null,r.a.createElement(o.a,{body:!0},r.a.createElement(E.a,{[e||"default"]:!0},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"#"),r.a.createElement("th",null,"First Name"),r.a.createElement("th",null,"Last Name"),r.a.createElement("th",null,"Username"))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"row"},"1"),r.a.createElement("td",null,"Mark"),r.a.createElement("td",null,"Otto"),r.a.createElement("td",null,"@mdo")),r.a.createElement("tr",null,r.a.createElement("th",{scope:"row"},"2"),r.a.createElement("td",null,"Jacob"),r.a.createElement("td",null,"Thornton"),r.a.createElement("td",null,"@fat")),r.a.createElement("tr",null,r.a.createElement("th",{scope:"row"},"3"),r.a.createElement("td",null,"Larry"),r.a.createElement("td",null,"the Bird"),r.a.createElement("td",null,"@twitter")))))),r.a.createElement(m.a,null,r.a.createElement(o.a,{body:!0},r.a.createElement(E.a,{dark:!0},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"#"),r.a.createElement("th",null,"First Name"),r.a.createElement("th",null,"Last Name"),r.a.createElement("th",null,"Username"))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"row"},"1"),r.a.createElement("td",null,"Mark"),r.a.createElement("td",null,"Otto"),r.a.createElement("td",null,"@mdo")),r.a.createElement("tr",null,r.a.createElement("th",{scope:"row"},"2"),r.a.createElement("td",null,"Jacob"),r.a.createElement("td",null,"Thornton"),r.a.createElement("td",null,"@fat")),r.a.createElement("tr",null,r.a.createElement("th",{scope:"row"},"3"),r.a.createElement("td",null,"Larry"),r.a.createElement("td",null,"the Bird"),r.a.createElement("td",null,"@twitter")))))))))))),r.a.createElement(c.a,null,r.a.createElement(m.a,null,r.a.createElement(o.a,{className:"mb-3"},r.a.createElement(u.a,null,"Contextual"),r.a.createElement(s.a,null,r.a.createElement(E.a,null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},"Type"),r.a.createElement("th",{scope:"col"},"Column heading"),r.a.createElement("th",{scope:"col"},"Column heading"),r.a.createElement("th",{scope:"col"},"Column heading"))),r.a.createElement("tbody",null,r.a.createElement("tr",{className:"table-active"},r.a.createElement("th",{scope:"row"},"Active"),r.a.createElement("td",null,"Column content"),r.a.createElement("td",null,"Column content"),r.a.createElement("td",null,"Column content")),r.a.createElement("tr",null,r.a.createElement("th",{scope:"row"},"Default"),r.a.createElement("td",null,"Column content"),r.a.createElement("td",null,"Column content"),r.a.createElement("td",null,"Column content")),r.a.createElement("tr",{className:"table-primary"},r.a.createElement("th",{scope:"row"},"Primary"),r.a.createElement("td",null,"Column content"),r.a.createElement("td",null,"Column content"),r.a.createElement("td",null,"Column content")),r.a.createElement("tr",{className:"table-secondary"},r.a.createElement("th",{scope:"row"},"Secondary"),r.a.createElement("td",null,"Column content"),r.a.createElement("td",null,"Column content"),r.a.createElement("td",null,"Column content")),r.a.createElement("tr",{className:"table-success"},r.a.createElement("th",{scope:"row"},"Success"),r.a.createElement("td",null,"Column content"),r.a.createElement("td",null,"Column content"),r.a.createElement("td",null,"Column content")),r.a.createElement("tr",{className:"table-danger"},r.a.createElement("th",{scope:"row"},"Danger"),r.a.createElement("td",null,"Column content"),r.a.createElement("td",null,"Column content"),r.a.createElement("td",null,"Column content")),r.a.createElement("tr",{className:"table-warning"},r.a.createElement("th",{scope:"row"},"Warning"),r.a.createElement("td",null,"Column content"),r.a.createElement("td",null,"Column content"),r.a.createElement("td",null,"Column content")),r.a.createElement("tr",{className:"table-info"},r.a.createElement("th",{scope:"row"},"Info"),r.a.createElement("td",null,"Column content"),r.a.createElement("td",null,"Column content"),r.a.createElement("td",null,"Column content")),r.a.createElement("tr",{className:"table-light"},r.a.createElement("th",{scope:"row"},"Light"),r.a.createElement("td",null,"Column content"),r.a.createElement("td",null,"Column content"),r.a.createElement("td",null,"Column content")),r.a.createElement("tr",{className:"table-dark"},r.a.createElement("th",{scope:"row"},"Dark"),r.a.createElement("td",null,"Column content"),r.a.createElement("td",null,"Column content"),r.a.createElement("td",null,"Column content"))))))),r.a.createElement(m.a,null,r.a.createElement(o.a,{className:"mb-3"},r.a.createElement(u.a,null,"Contextual"),r.a.createElement(s.a,null,r.a.createElement(E.a,{dark:!0},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},"Type"),r.a.createElement("th",{scope:"col"},"Column heading"),r.a.createElement("th",{scope:"col"},"Column heading"),r.a.createElement("th",{scope:"col"},"Column heading"))),r.a.createElement("tbody",null,r.a.createElement("tr",{className:"table-active"},r.a.createElement("th",{scope:"row"},"Active"),r.a.createElement("td",null,"Column content"),r.a.createElement("td",null,"Column content"),r.a.createElement("td",null,"Column content")),r.a.createElement("tr",null,r.a.createElement("th",{scope:"row"},"Default"),r.a.createElement("td",null,"Column content"),r.a.createElement("td",null,"Column content"),r.a.createElement("td",null,"Column content")),r.a.createElement("tr",{className:"table-primary"},r.a.createElement("th",{scope:"row"},"Primary"),r.a.createElement("td",null,"Column content"),r.a.createElement("td",null,"Column content"),r.a.createElement("td",null,"Column content")),r.a.createElement("tr",{className:"table-secondary"},r.a.createElement("th",{scope:"row"},"Secondary"),r.a.createElement("td",null,"Column content"),r.a.createElement("td",null,"Column content"),r.a.createElement("td",null,"Column content")),r.a.createElement("tr",{className:"table-success"},r.a.createElement("th",{scope:"row"},"Success"),r.a.createElement("td",null,"Column content"),r.a.createElement("td",null,"Column content"),r.a.createElement("td",null,"Column content")),r.a.createElement("tr",{className:"table-danger"},r.a.createElement("th",{scope:"row"},"Danger"),r.a.createElement("td",null,"Column content"),r.a.createElement("td",null,"Column content"),r.a.createElement("td",null,"Column content")),r.a.createElement("tr",{className:"table-warning"},r.a.createElement("th",{scope:"row"},"Warning"),r.a.createElement("td",null,"Column content"),r.a.createElement("td",null,"Column content"),r.a.createElement("td",null,"Column content")),r.a.createElement("tr",{className:"table-info"},r.a.createElement("th",{scope:"row"},"Info"),r.a.createElement("td",null,"Column content"),r.a.createElement("td",null,"Column content"),r.a.createElement("td",null,"Column content")),r.a.createElement("tr",{className:"table-light"},r.a.createElement("th",{scope:"row"},"Light"),r.a.createElement("td",null,"Column content"),r.a.createElement("td",null,"Column content"),r.a.createElement("td",null,"Column content")),r.a.createElement("tr",{className:"table-dark"},r.a.createElement("th",{scope:"row"},"Dark"),r.a.createElement("td",null,"Column content"),r.a.createElement("td",null,"Column content"),r.a.createElement("td",null,"Column content")))))))),r.a.createElement(c.a,null,r.a.createElement(m.a,null,r.a.createElement(o.a,{className:"mb-3"},r.a.createElement(u.a,null,"Responsive"),r.a.createElement(s.a,null,r.a.createElement(E.a,{responsive:!0},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"#"),r.a.createElement("th",null,"First Name"),r.a.createElement("th",null,"Last Name"),r.a.createElement("th",null,"Username"))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"row"},"1"),r.a.createElement("td",null,"Mark"),r.a.createElement("td",null,"Otto"),r.a.createElement("td",null,"@mdo")),r.a.createElement("tr",null,r.a.createElement("th",{scope:"row"},"2"),r.a.createElement("td",null,"Jacob"),r.a.createElement("td",null,"Thornton"),r.a.createElement("td",null,"@fat")),r.a.createElement("tr",null,r.a.createElement("th",{scope:"row"},"3"),r.a.createElement("td",null,"Larry"),r.a.createElement("td",null,"the Bird"),r.a.createElement("td",null,"@twitter")))))))),r.a.createElement(c.a,null,r.a.createElement(m.a,null,r.a.createElement(o.a,{className:"mb-3"},r.a.createElement(u.a,null,"Size"),r.a.createElement(s.a,null,r.a.createElement(E.a,{size:"sm"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"#"),r.a.createElement("th",null,"First Name"),r.a.createElement("th",null,"Last Name"),r.a.createElement("th",null,"Username"))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"row"},"1"),r.a.createElement("td",null,"Mark"),r.a.createElement("td",null,"Otto"),r.a.createElement("td",null,"@mdo")),r.a.createElement("tr",null,r.a.createElement("th",{scope:"row"},"2"),r.a.createElement("td",null,"Jacob"),r.a.createElement("td",null,"Thornton"),r.a.createElement("td",null,"@fat")),r.a.createElement("tr",null,r.a.createElement("th",{scope:"row"},"3"),r.a.createElement("td",null,"Larry"),r.a.createElement("td",null,"the Bird"),r.a.createElement("td",null,"@twitter")),r.a.createElement("tr",null,r.a.createElement("th",{scope:"row"},"3"),r.a.createElement("td",null,"Larry"),r.a.createElement("td",null,"the Bird"),r.a.createElement("td",null,"@twitter")),r.a.createElement("tr",null,r.a.createElement("th",{scope:"row"},"3"),r.a.createElement("td",null,"Larry"),r.a.createElement("td",null,"the Bird"),r.a.createElement("td",null,"@twitter")),r.a.createElement("tr",null,r.a.createElement("th",{scope:"row"},"3"),r.a.createElement("td",null,"Larry"),r.a.createElement("td",null,"the Bird"),r.a.createElement("td",null,"@twitter")))))))))}}]);
//# sourceMappingURL=26.ebb9d7b6.chunk.js.map