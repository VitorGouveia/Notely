(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[125],{4085:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/app/[slug]",function(){return r(9585)}])},9585:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return v}});var n=r(2322),o=r(2784),u=r(5632),a=r(1746),i=r(364),l=r(9097),c=r.n(l);var f=r(267);function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function d(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,u=[],a=!0,i=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(u.push(n.value),!t||u.length!==t);a=!0);}catch(l){i=!0,o=l}finally{try{a||null==r.return||r.return()}finally{if(i)throw o}}return u}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return s(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return s(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(e){return e.charAt(0).toUpperCase()+e.slice(1)}var v=function(){var e=(0,a.Sz)(f.Uj,(function(e){return e.notes})),t=(0,a.Sz)(f.Uj,(function(e){return e.editTitle})),r=(0,a.Sz)(f.Uj,(function(e){return e.editText})),l=(0,u.useRouter)(),s=(0,o.useState)(null),v=s[0],y=s[1],h=(0,o.useState)((null===v||void 0===v?void 0:v.title)||""),m=h[0],g=h[1],b=(0,o.useState)((null===v||void 0===v?void 0:v.text)||""),j=b[0],w=b[1],x=(0,o.useCallback)((function(e){v&&(g(e.target.value),t(v.id,e.target.value))}),[t,v]),A=(0,o.useCallback)((function(e){v&&(w(e.target.value),r(v.id,e.target.value))}),[r,v]);(0,o.useEffect)((function(){if(l.query.slug){var t=d(e.filter((function(e){return e.slug===l.query.slug||e.id===l.query.slug})),1)[0];t?(y(t),g((null===t||void 0===t?void 0:t.title)||""),w((null===t||void 0===t?void 0:t.text)||"")):l.push("/app/404")}}),[e,l,l.query.slug]);var S=(0,o.useMemo)((function(){if(v){var e=v.createdAt.toZonedDateTime({calendar:i.AT.Calendar.from("gregory"),timeZone:new i.AT.TimeZone("America/Sao_Paulo")}),t=function(t){return new i.RW.DateTimeFormat("pt-BR",t).format(e)},r=t({hour12:!0,hour:"2-digit",minute:"2-digit"}),n=t({day:"2-digit"}),o=function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];return r.reduce((function(e,t){return t(e)}),e)}(t({month:"short"}),p),u=t({year:"numeric"});return"".concat(n," ").concat(o," ").concat(u,", ").concat(r)}}),[v]);return(0,n.jsx)("div",{children:v&&(0,n.jsxs)(o.Fragment,{children:[(0,n.jsx)("div",{children:(0,n.jsx)("input",{type:"text",placeholder:"Enter a title",value:m,onChange:x})}),(0,n.jsx)("div",{children:(0,n.jsx)("small",{children:S&&S})}),(0,n.jsx)("div",{children:(0,n.jsx)("textarea",{value:j,onChange:A,children:j})}),(0,n.jsx)("div",{children:(0,n.jsx)(c(),{href:"/app",children:(0,n.jsx)("a",{children:"back arrow"})})})]})})}},1088:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,u=[],a=!0,i=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(u.push(n.value),!t||u.length!==t);a=!0);}catch(l){i=!0,o=l}finally{try{a||null==r.return||r.return()}finally{if(i)throw o}}return u}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u,a=(u=r(2784))&&u.__esModule?u:{default:u},i=r(4e3),l=r(2203),c=r(8599);var f={};function s(e,t,r,n){if(e&&i.isLocalURL(t)){e.prefetch(t,r,n).catch((function(e){0}));var o=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;f[t+"%"+r+(o?"%"+o:"")]=!0}}var d=function(e){var t,r=!1!==e.prefetch,n=l.useRouter(),u=a.default.useMemo((function(){var t=o(i.resolveHref(n,e.href,!0),2),r=t[0],u=t[1];return{href:r,as:e.as?i.resolveHref(n,e.as):u||r}}),[n,e.href,e.as]),d=u.href,p=u.as,v=a.default.useRef(d),y=a.default.useRef(p),h=e.children,m=e.replace,g=e.shallow,b=e.scroll,j=e.locale;"string"===typeof h&&(h=a.default.createElement("a",null,h));var w=(t=a.default.Children.only(h))&&"object"===typeof t&&t.ref,x=o(c.useIntersection({rootMargin:"200px"}),3),A=x[0],S=x[1],C=x[2],E=a.default.useCallback((function(e){y.current===p&&v.current===d||(C(),y.current=p,v.current=d),A(e),w&&("function"===typeof w?w(e):"object"===typeof w&&(w.current=e))}),[p,w,d,C,A]);a.default.useEffect((function(){var e=S&&r&&i.isLocalURL(d),t="undefined"!==typeof j?j:n&&n.locale,o=f[d+"%"+p+(t?"%"+t:"")];e&&!o&&s(n,d,p,{locale:t})}),[p,d,S,j,r,n]);var _={ref:E,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,r,n,o,u,a,l){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&i.isLocalURL(r))&&(e.preventDefault(),t[o?"replace":"push"](r,n,{shallow:u,locale:l,scroll:a}))}(e,n,d,p,m,g,b,j)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),i.isLocalURL(d)&&s(n,d,p,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var I="undefined"!==typeof j?j:n&&n.locale,M=n&&n.isLocaleDomain&&i.getDomainLocale(p,I,n&&n.locales,n&&n.domainLocales);_.href=M||i.addBasePath(i.addLocale(p,I,n&&n.defaultLocale))}return a.default.cloneElement(t,_)};t.default=d,("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},8599:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,u=[],a=!0,i=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(u.push(n.value),!t||u.length!==t);a=!0);}catch(l){i=!0,o=l}finally{try{a||null==r.return||r.return()}finally{if(i)throw o}}return u}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,r=e.rootMargin,n=e.disabled||!i,f=u.useRef(),s=o(u.useState(!1),2),d=s[0],p=s[1],v=o(u.useState(t?t.current:null),2),y=v[0],h=v[1],m=u.useCallback((function(e){f.current&&(f.current(),f.current=void 0),n||d||e&&e.tagName&&(f.current=function(e,t,r){var n=function(e){var t,r={root:e.root||null,margin:e.rootMargin||""},n=c.find((function(e){return e.root===r.root&&e.margin===r.margin}));n?t=l.get(n):(t=l.get(r),c.push(r));if(t)return t;var o=new Map,u=new IntersectionObserver((function(e){e.forEach((function(e){var t=o.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return l.set(r,t={id:r,observer:u,elements:o}),t}(r),o=n.id,u=n.observer,a=n.elements;return a.set(e,t),u.observe(e),function(){if(a.delete(e),u.unobserve(e),0===a.size){u.disconnect(),l.delete(o);var t=c.findIndex((function(e){return e.root===o.root&&e.margin===o.margin}));t>-1&&c.splice(t,1)}}}(e,(function(e){return e&&p(e)}),{root:y,rootMargin:r}))}),[n,y,r,d]),g=u.useCallback((function(){p(!1)}),[]);return u.useEffect((function(){if(!i&&!d){var e=a.requestIdleCallback((function(){return p(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[d]),u.useEffect((function(){t&&h(t.current)}),[t]),[m,d,g]};var u=r(2784),a=r(1424),i="undefined"!==typeof IntersectionObserver;var l=new Map,c=[];("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},9097:function(e,t,r){e.exports=r(1088)},5632:function(e,t,r){e.exports=r(2203)}},function(e){e.O(0,[774,888,179],(function(){return t=4085,e(e.s=t);var t}));var t=e.O();_N_E=t}]);