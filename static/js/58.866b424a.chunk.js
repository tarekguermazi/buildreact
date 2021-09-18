(this["webpackJsonpapp-frontend"]=this["webpackJsonpapp-frontend"]||[]).push([[58],{607:function(e,t,n){"use strict";var r=n(11);n(5);t.a=function(e){return e.loading?Object(r.jsx)("span",{className:"spinner-border spinner-border-sm"}):e.iconClass?Object(r.jsx)("i",{className:e.iconClass}):null}},609:function(e,t,n){"use strict";var r=n(127);function a(){var e=Object(r.a)(["\n  margin-top: 16px;\n  padding: 24px;\n  background-color: white;\n  width: 100%;\n  border-radius: 5px;\n  border: 1px solid #dee2e6 !important;\n"]);return a=function(){return e},e}var c=n(128).a.div(a());t.a=c},610:function(e,t,n){"use strict";var r=n(127);function a(){var e=Object(r.a)(["\n  margin-bottom: 24px;\n"]);return a=function(){return e},e}var c=n(128).a.h1(a());t.a=c},611:function(e,t,n){"use strict";var r=n(127),a=n(11),c=(n(5),n(85));function s(){var e=Object(r.a)(["\n  .breadcrumb {\n    font-size: 13px;\n    margin: 0px;\n    padding: 0px;\n    background-color: transparent;\n  }\n\n  .breadcrumb-item:not(.active) a {\n    color: rgba(0, 0, 0, 0.45);\n  }\n"]);return s=function(){return e},e}var i=n(128).a.nav(s());t.a=function(e){var t=function(e){return e.length>1};return Object(a.jsx)(i,{children:Object(a.jsx)("ol",{className:"breadcrumb",children:e.items.map((function(n,r){return Object(a.jsx)("li",{className:"breadcrumb-item ".concat(e.items.length-1===r?"active":""),children:t(n)?Object(a.jsx)(c.a,{to:n[1],children:n[0]}):n[0]},n[0])}))})})}},612:function(e,t,n){"use strict";var r=n(11);n(5);t.a=function(){return Object(r.jsx)("div",{style:{width:"100%",marginTop:"24px",marginBottom:"24px",display:"flex",justifyContent:"center",alignContent:"center",alignItems:"center"},children:Object(r.jsx)("div",{className:"spinner-border text-primary"})})}},614:function(e,t,n){"use strict";var r=n(25),a=n(30),c=n(36),s=n.n(c),i=n(5),o=n.n(i),l=n(37),u=["bsPrefix","className","noGutters","as"],d=["xl","lg","md","sm","xs"],b=o.a.forwardRef((function(e,t){var n=e.bsPrefix,c=e.className,i=e.noGutters,b=e.as,m=void 0===b?"div":b,f=Object(a.a)(e,u),j=Object(l.a)(n,"row"),p=j+"-cols",v=[];return d.forEach((function(e){var t,n=f[e];delete f[e];var r="xs"!==e?"-"+e:"";null!=(t=null!=n&&"object"===typeof n?n.cols:n)&&v.push(""+p+r+"-"+t)})),o.a.createElement(m,Object(r.a)({ref:t},f,{className:s.a.apply(void 0,[c,j,i&&"no-gutters"].concat(v))}))}));b.displayName="Row",b.defaultProps={noGutters:!1},t.a=b},615:function(e,t,n){"use strict";var r=n(25),a=n(30),c=n(36),s=n.n(c),i=n(5),o=n.n(i),l=n(37),u=["bsPrefix","className","as"],d=["xl","lg","md","sm","xs"],b=o.a.forwardRef((function(e,t){var n=e.bsPrefix,c=e.className,i=e.as,b=void 0===i?"div":i,m=Object(a.a)(e,u),f=Object(l.a)(n,"col"),j=[],p=[];return d.forEach((function(e){var t,n,r,a=m[e];if(delete m[e],"object"===typeof a&&null!=a){var c=a.span;t=void 0===c||c,n=a.offset,r=a.order}else t=a;var s="xs"!==e?"-"+e:"";t&&j.push(!0===t?""+f+s:""+f+s+"-"+t),null!=r&&p.push("order"+s+"-"+r),null!=n&&p.push("offset"+s+"-"+n)})),j.length||j.push(f),o.a.createElement(b,Object(r.a)({},m,{ref:t,className:s.a.apply(void 0,[c].concat(j,p))}))}));b.displayName="Col",t.a=b},617:function(e,t,n){"use strict";var r=n(11),a=n(5),c=n(121),s=n.n(c);t.a=function(e){var t=Object(a.useRef)();Object(a.useEffect)((function(){window.$(t.current).modal("show"),window.$(t.current).on("hidden.bs.modal",e.onClose)}),[]);return s.a.createPortal(Object(r.jsx)("div",{ref:t,className:"modal",tabIndex:-1,children:Object(r.jsx)("div",{className:"modal-dialog modal-sm",children:Object(r.jsxs)("div",{className:"modal-content",children:[Object(r.jsxs)("div",{className:"modal-header",children:[Object(r.jsx)("h6",{className:"modal-title",style:{textAlign:"center"},children:e.title}),Object(r.jsx)("button",{type:"button",className:"close","data-dismiss":"modal",children:Object(r.jsx)("span",{children:"\xd7"})})]}),Object(r.jsxs)("div",{className:"modal-footer",children:[Object(r.jsx)("button",{type:"button",className:"btn btn-light btn-sm","data-dismiss":"modal",children:e.cancelText}),Object(r.jsx)("button",{type:"button",onClick:function(){return window.$(t.current).modal("hide"),e.onConfirm()},className:"btn btn-primary btn-sm",children:e.okText})]})]})})}),document.getElementById("modal-root"))}},621:function(e,t,n){"use strict";var r=n(127);function a(){var e=Object(r.a)(["\n  margin-bottom: 8px;\n\n  .btn {\n    margin-right: 8px;\n    margin-bottom: 8px;\n  }\n"]);return a=function(){return e},e}var c=n(128).a.div(a());t.a=c},622:function(e,t,n){"use strict";var r=n(4),a=n(29),c=n(57),s=n(129),i=Object(r.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new c.a(e,t).match(s.a.values.userRead)})),o=Object(r.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new c.a(e,t).match(s.a.values.userEdit)})),l=Object(r.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new c.a(e,t).match(s.a.values.userDestroy)})),u={selectPermissionToRead:i,selectPermissionToEdit:o,selectPermissionToCreate:Object(r.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new c.a(e,t).match(s.a.values.userCreate)})),selectPermissionToImport:Object(r.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new c.a(e,t).match(s.a.values.userImport)})),selectPermissionToDestroy:l};t.a=u},623:function(e,t,n){"use strict";n.d(t,"a",(function(){return v}));var r=n(145),a=n(1),c=n.n(a),s=n(3),i=n(15),o=n(16),l=n(625),u=n.n(l),d=n(2),b=n(9),m=n(664),f=n(8),j=n(262),p=n.n(j),v=function(){function e(){Object(i.a)(this,e)}return Object(o.a)(e,null,[{key:"validate",value:function(e,t){if(t){if(t.image&&!e.type.startsWith("image"))throw new Error(Object(d.c)("fileUploader.image"));if(t.storage.maxSizeInBytes&&e.size>t.storage.maxSizeInBytes)throw new Error(Object(d.c)("fileUploader.size",u()(t.storage.maxSizeInBytes)));var n=O(e.name);if(t.formats&&!t.formats.includes(n))throw new Error(Object(d.c)("fileUploader.formats",t.formats.join(", ")))}}},{key:"upload",value:function(){var e=Object(s.a)(c.a.mark((function e(t,n){var r,a,s,i,o,l,u;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.prev=0,this.validate(t,n),e.next=7;break;case 4:return e.prev=4,e.t0=e.catch(0),e.abrupt("return",Promise.reject(e.t0));case 7:return r=O(t.name),a=Object(m.a)(),s="".concat(a,".").concat(r),e.next=12,this.fetchFileCredentials(s,n);case 12:return i=e.sent,o=i.uploadCredentials,l=i.downloadUrl,u=i.privateUrl,e.next=18,this.uploadToServer(t,o);case 18:return e.abrupt("return",{id:a,name:t.name,sizeInBytes:t.size,publicUrl:o&&o.publicUrl?o.publicUrl:null,privateUrl:u,downloadUrl:l,new:!0});case 19:case"end":return e.stop()}}),e,this,[[0,4]])})));return function(t,n){return e.apply(this,arguments)}}()},{key:"fetchFileCredentials",value:function(){var e=Object(s.a)(c.a.mark((function e(t,n){var r,a,s;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=f.a.get(),e.next=3,b.a.get("/tenant/".concat(r,"/file/credentials"),{params:{filename:t,storageId:n.storage.id}});case 3:return a=e.sent,s=a.data,e.abrupt("return",s);case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"uploadToServer",value:function(){var e=Object(s.a)(c.a.mark((function e(t,n){var a,s,i,o,l,u,d;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(e.prev=0,a=n.url,s=new FormData,i=0,o=Object.entries(n.fields||{});i<o.length;i++)l=Object(r.a)(o[i],2),u=l[0],d=l[1],s.append(u,d);return s.append("file",t),e.abrupt("return",p.a.post(a,s,{headers:{"Content-Type":"multipart/form-data"}}));case 8:throw e.prev=8,e.t0=e.catch(0),console.error(e.t0),e.t0;case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,n){return e.apply(this,arguments)}}()}]),e}();function O(e){if(!e)return null;var t=/(?:\.([^.]+))?$/.exec(e);return t?t[1]:null}},625:function(e,t,n){"use strict";(function(t){!function(t){var n=/^(b|B)$/,r={iec:{bits:["b","Kib","Mib","Gib","Tib","Pib","Eib","Zib","Yib"],bytes:["B","KiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"]},jedec:{bits:["b","Kb","Mb","Gb","Tb","Pb","Eb","Zb","Yb"],bytes:["B","KB","MB","GB","TB","PB","EB","ZB","YB"]}},a={iec:["","kibi","mebi","gibi","tebi","pebi","exbi","zebi","yobi"],jedec:["","kilo","mega","giga","tera","peta","exa","zetta","yotta"]};function c(e){var t,c,s,i,o,l,u,d,b,m,f,j,p,v,O,h=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},x=[],g=0,y=void 0,C=void 0;if(isNaN(e))throw new TypeError("Invalid number");return c=!0===h.bits,f=!0===h.unix,t=h.base||2,m=void 0!==h.round?h.round:f?1:2,l=void 0!==h.locale?h.locale:"",u=h.localeOptions||{},j=void 0!==h.separator?h.separator:"",p=void 0!==h.spacer?h.spacer:f?"":" ",O=h.symbols||{},v=2===t&&h.standard||"jedec",b=h.output||"string",i=!0===h.fullform,o=h.fullforms instanceof Array?h.fullforms:[],y=void 0!==h.exponent?h.exponent:-1,s=2<t?1e3:1024,(d=(C=Number(e))<0)&&(C=-C),(-1===y||isNaN(y))&&(y=Math.floor(Math.log(C)/Math.log(s)))<0&&(y=0),8<y&&(y=8),"exponent"===b?y:(0===C?(x[0]=0,x[1]=f?"":r[v][c?"bits":"bytes"][y]):(g=C/(2===t?Math.pow(2,10*y):Math.pow(1e3,y)),c&&s<=(g*=8)&&y<8&&(g/=s,y++),x[0]=Number(g.toFixed(0<y?m:0)),x[0]===s&&y<8&&void 0===h.exponent&&(x[0]=1,y++),x[1]=10===t&&1===y?c?"kb":"kB":r[v][c?"bits":"bytes"][y],f&&(x[1]="jedec"===v?x[1].charAt(0):0<y?x[1].replace(/B$/,""):x[1],n.test(x[1])&&(x[0]=Math.floor(x[0]),x[1]=""))),d&&(x[0]=-x[0]),x[1]=O[x[1]]||x[1],!0===l?x[0]=x[0].toLocaleString():0<l.length?x[0]=x[0].toLocaleString(l,u):0<j.length&&(x[0]=x[0].toString().replace(".",j)),"array"===b?x:(i&&(x[1]=o[y]?o[y]:a[v][y]+(c?"bit":"byte")+(1===x[0]?"":"s")),"object"===b?{value:x[0],symbol:x[1],exponent:y}:x.join(p)))}c.partial=function(e){return function(t){return c(t,e)}},e.exports=c}("undefined"!=typeof window&&window)}).call(this,n(86))},627:function(e,t,n){"use strict";var r=n(127);function a(){var e=Object(r.a)(["\n  .btn.btn-link {\n    padding-left: 0;\n  }\n"]);return a=function(){return e},e}var c=n(128).a.div(a());t.a=c},645:function(e,t,n){"use strict";var r=n(1),a=n.n(r),c=n(19),s=n(3),i=n(145),o=n(11),l=n(5),u=n(623),d=n(6),b=n(2),m=n(607);t.a=function(e){var t=Object(l.useState)(!1),n=Object(i.a)(t,2),r=n[0],f=n[1],j=Object(l.useRef)(),p=function(){var t=e.value;return t?Array.isArray(t)?t:[t]:[]},v=function(){var t=Object(s.a)(a.a.mark((function t(n){var r,s;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,(r=n.target.files)&&r.length){t.next=4;break}return t.abrupt("return");case 4:return s=r[0],u.a.validate(s,{storage:e.storage,formats:e.formats}),f(!0),t.next=9,u.a.upload(s,{storage:e.storage,formats:e.formats});case 9:s=t.sent,j.current.value="",f(!1),e.onChange([].concat(Object(c.a)(p()),[s])),t.next=21;break;case 15:t.prev=15,t.t0=t.catch(0),j.current.value="",console.error(t.t0),f(!1),d.a.showMessage(t.t0);case 21:case"end":return t.stop()}}),t,null,[[0,15]])})));return function(e){return t.apply(this,arguments)}}(),O=e.max,h=e.readonly,x=Object(o.jsxs)("label",{className:"btn btn-outline-secondary px-4 mb-2",style:{cursor:"pointer"},children:[Object(o.jsx)(m.a,{loading:r,iconClass:"fas fa-plus"})," ",Object(b.c)("fileUploader.upload"),Object(o.jsx)("input",{style:{display:"none"},disabled:r||h,accept:function(){var t=e.schema;if(t&&t.formats)return t.formats.map((function(e){return".".concat(e)})).join(",")}(),type:"file",onChange:v,ref:j})]});return Object(o.jsxs)("div",{children:[h||O&&p().map((function(e){return{uid:e.id||void 0,name:e.name,status:"done",url:e.downloadUrl}})).length>=O?null:x,p()&&p().length?Object(o.jsx)("div",{children:p().map((function(t){return Object(o.jsxs)("div",{children:[Object(o.jsx)("i",{className:"fas fa-link text-muted mr-2"}),Object(o.jsx)("a",{href:t.downloadUrl,target:"_blank",rel:"noopener noreferrer",download:!0,children:t.name}),!h&&Object(o.jsx)("button",{className:"btn btn-link",type:"button",onClick:function(){return n=t.id,void e.onChange(p().filter((function(e){return e.id!==n})));var n},children:Object(o.jsx)("i",{className:"fas fa-times"})})]},t.id)}))}):null]})}},655:function(e,t,n){"use strict";var r=n(11);n(5);t.a=function(e){if(!e.value&&0!==e.value&&!1!==e.value)return null;var t="".concat(e.prefix?"".concat(e.prefix," "):"").concat(e.value);return Object(r.jsxs)("div",{className:"form-group",children:[Object(r.jsx)("label",{className:"col-form-label",children:e.label}),Object(r.jsx)("input",{type:"text",readOnly:!0,className:"form-control-plaintext",value:t})]})}},664:function(e,t,n){"use strict";var r,a=new Uint8Array(16);function c(){if(!r&&!(r="undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!==typeof msCrypto&&"function"===typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return r(a)}var s=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;for(var i=function(e){return"string"===typeof e&&s.test(e)},o=[],l=0;l<256;++l)o.push((l+256).toString(16).substr(1));var u=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=(o[e[t+0]]+o[e[t+1]]+o[e[t+2]]+o[e[t+3]]+"-"+o[e[t+4]]+o[e[t+5]]+"-"+o[e[t+6]]+o[e[t+7]]+"-"+o[e[t+8]]+o[e[t+9]]+"-"+o[e[t+10]]+o[e[t+11]]+o[e[t+12]]+o[e[t+13]]+o[e[t+14]]+o[e[t+15]]).toLowerCase();if(!i(n))throw TypeError("Stringified UUID is invalid");return n};t.a=function(e,t,n){var r=(e=e||{}).random||(e.rng||c)();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,t){n=n||0;for(var a=0;a<16;++a)t[n+a]=r[a];return t}return u(r)}},728:function(e,t,n){"use strict";var r=n(11),a=n(622),c=(n(5),n(35)),s=n(85);t.a=function(e){var t=Object(c.e)(a.a.selectPermissionToRead),n=function(){var t=e.value;return t?Array.isArray(t)?t:[t]:[]},i=function(e){return e?e.fullName?"".concat(e.fullName," <").concat(e.email,">"):e.email:null};return n().length?Object(r.jsxs)("div",{style:{marginBottom:"16px"},children:[Object(r.jsx)("label",{className:"col-form-label",children:e.label}),n().map((function(e){return n=e,t?Object(r.jsx)("div",{children:Object(r.jsx)(s.a,{className:"btn btn-link",to:"/user/".concat(n.id),children:i(n)})},n.id):Object(r.jsx)("div",{children:i(n)},n.id);var n}))]}):null}},729:function(e,t,n){"use strict";var r=n(11),a=(n(5),n(645));t.a=function(e){var t=function(){var t=e.value;return t?Array.isArray(t)?t:[t]:[]};return t().length?Object(r.jsxs)("div",{className:"form-group",children:[Object(r.jsx)("label",{className:"col-form-label",children:e.label}),Object(r.jsx)("br",{}),Object(r.jsx)(a.a,{readonly:!0,value:t()})]}):null}},740:function(e,t,n){"use strict";var r=n(4),a=n(29),c=n(57),s=n(129),i=Object(r.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new c.a(e,t).match(s.a.values.produitCommandeRead)})),o=Object(r.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new c.a(e,t).match(s.a.values.produitCommandeEdit)})),l=Object(r.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new c.a(e,t).match(s.a.values.produitCommandeCreate)})),u=Object(r.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new c.a(e,t).match(s.a.values.produitCommandeImport)})),d={selectPermissionToRead:i,selectPermissionToEdit:o,selectPermissionToCreate:l,selectPermissionToDestroy:Object(r.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new c.a(e,t).match(s.a.values.produitCommandeDestroy)})),selectPermissionToImport:u};t.a=d},741:function(e,t,n){"use strict";var r=n(4),a={selectLoading:Object(r.a)([function(e){return e.produitCommande.destroy}],(function(e){return Boolean(e.loading)}))};t.a=a},780:function(e,t,n){"use strict";var r=n(25),a=n(30),c=n(36),s=n.n(c),i=n(5),o=n.n(i),l=n(37),u=["bsPrefix","fluid","as","className"],d=o.a.forwardRef((function(e,t){var n=e.bsPrefix,c=e.fluid,i=e.as,d=void 0===i?"div":i,b=e.className,m=Object(a.a)(e,u),f=Object(l.a)(n,"container"),j="string"===typeof c?"-"+c:"-fluid";return o.a.createElement(d,Object(r.a)({ref:t},m,{className:s()(b,c?""+f+j:f)}))}));d.displayName="Container",d.defaultProps={fluid:!1},t.a=d},879:function(e,t,n){"use strict";n.r(t);var r=n(11),a=n(5),c=n(35),s=n(32),i=n(2),o=n(225),l=n(4),u=function(e){return e.produitCommande.view},d=Object(l.a)([u],(function(e){return e.record})),b={selectLoading:Object(l.a)([u],(function(e){return Boolean(e.loading)})),selectRecord:d,selectRaw:u},m=n(612),f=n(627),j=n(655),p=n(728),v=n(729),O=n(614),h=n(615),x=n(780),g=n(143);var y=function(e){var t=e.record;return e.loading||!t?Object(r.jsx)(m.a,{}):Object(r.jsx)(f.a,{children:Object(r.jsxs)(x.a,{children:[Object(r.jsxs)(O.a,{children:[Object(r.jsx)(h.a,{sm:6,children:Object(r.jsx)(p.a,{label:Object(i.c)("entities.produitCommande.fields.adherent"),value:t.adherent})}),Object(r.jsx)(h.a,{sm:4,children:Object(r.jsx)(v.a,{label:Object(i.c)("entities.produitCommande.fields.attachements"),value:t.attachements})}),Object(r.jsx)(h.a,{sm:2,children:Object(r.jsx)(j.a,{label:Object(i.c)("entities.produitCommande.fields.delivered"),value:t.delivered?Object(i.c)("common.yes"):Object(i.c)("common.no")})})]}),t.commandLine?Object(r.jsxs)("div",{children:[Object(r.jsxs)(O.a,{children:[Object(r.jsx)(h.a,{sm:4,children:Object(i.c)("entities.commandLine.fields.product")}),Object(r.jsx)(h.a,{sm:4,children:Object(i.c)("entities.commandLine.fields.quantity")}),Object(r.jsx)(h.a,{sm:4,children:Object(i.c)("entities.commandLine.fields.subTotal")})]}),Object(r.jsx)(g.a.Divider,{})]}):null,t.commandLine.map((function(e,t){return Object(r.jsxs)("div",{children:[Object(r.jsxs)(O.a,{children:[Object(r.jsx)(h.a,{sm:4,children:e.productTitle}),Object(r.jsx)(h.a,{sm:4,children:e.quantity}),Object(r.jsx)(h.a,{sm:4,children:e.subTotal})]}),Object(r.jsx)(g.a.Divider,{})]})})),Object(r.jsxs)(O.a,{children:[Object(r.jsx)(h.a,{sm:8}),Object(r.jsx)(h.a,{sm:4,children:Object(r.jsx)(j.a,{label:Object(i.c)("entities.produitCommande.fields.total"),value:t.total})})]})]})})},C=n(145),w=n(85),N=n(84),T=n(740),B=n(151),k=n(741),P=n(617),U=n(621),E=n(607);var R=function(e){var t=Object(a.useState)(!1),n=Object(C.a)(t,2),s=n[0],o=n[1],l=Object(c.d)(),u=e.match.params.id,d=Object(c.e)(N.a.selectPermissionToRead),b=Object(c.e)(T.a.selectPermissionToEdit),m=Object(c.e)(T.a.selectPermissionToDestroy),f=Object(c.e)(k.a.selectLoading),j=function(){o(!1)};return Object(r.jsxs)(U.a,{children:[b&&Object(r.jsx)(w.a,{to:"/produit-commande/".concat(u,"/edit"),children:Object(r.jsxs)("button",{className:"btn btn-primary",type:"button",children:[Object(r.jsx)(E.a,{iconClass:"fas fa-edit"})," ",Object(i.c)("common.edit")]})}),m&&Object(r.jsxs)("button",{className:"btn btn-primary",type:"button",disabled:f,onClick:function(){o(!0)},children:[Object(r.jsx)(E.a,{loading:f,iconClass:"fas fa-trash-alt"})," ",Object(i.c)("common.destroy")]}),d&&Object(r.jsx)(w.a,{to:"/audit-logs?entityId=".concat(encodeURIComponent(u)),children:Object(r.jsxs)("button",{className:"btn btn-light",type:"button",children:[Object(r.jsx)(E.a,{iconClass:"fas fa-history"})," ",Object(i.c)("auditLog.menu")]})}),s&&Object(r.jsx)(P.a,{title:"\xcates-vous s\xfbr de supprimer?\n          Les donn\xe9es relatives \xe0 la commande seront supprim\xe9es aussi,\n          cette action est irr\xe9versible.",onConfirm:function(){return j(),void l(B.a.doDestroy(u))},onClose:function(){return j()},okText:Object(i.c)("common.yes"),cancelText:Object(i.c)("common.no")})]})},I=n(609),L=n(611),S=n(610);t.default=function(){var e=Object(c.d)(),t=Object(s.h)(),n=Object(c.e)(b.selectLoading),l=Object(c.e)(b.selectRecord);return Object(a.useEffect)((function(){e(o.a.doFind(t.params.id))}),[e,t.params.id]),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(L.a,{items:[[Object(i.c)("dashboard.menu"),"/"],[Object(i.c)("entities.produitCommande.menu"),"/produit-commande"],[Object(i.c)("entities.produitCommande.view.title")]]}),Object(r.jsxs)(I.a,{children:[Object(r.jsx)(S.a,{children:Object(i.c)("entities.produitCommande.view.title")}),Object(r.jsx)(R,{match:t}),Object(r.jsx)(y,{loading:n,record:l})]})]})}}}]);