(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[125],{6058:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return p}});var r=n(7211);function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,u=[],a=!0,i=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(u.push(r.value),!t||u.length!==t);a=!0);}catch(l){i=!0,o=l}finally{try{a||null==n.return||n.return()}finally{if(i)throw o}}return u}}(e,t)||(0,r.Z)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var u=n(2784),a=n(5632),i=n(1746),l=n(364),c=n(9097),f=n.n(c);var s=n(1676),d=n(2322);function v(e){return e.charAt(0).toUpperCase()+e.slice(1)}var p=function(){var e=(0,i.Sz)(s.Uj,(function(e){return e.notes})),t=(0,i.Sz)(s.Uj,(function(e){return e.editTitle})),n=(0,i.Sz)(s.Uj,(function(e){return e.editText})),r=(0,a.useRouter)(),c=(0,u.useState)(null),p=c[0],h=c[1],y=(0,u.useState)((null===p||void 0===p?void 0:p.title)||""),g=y[0],m=y[1],b=(0,u.useState)((null===p||void 0===p?void 0:p.text)||""),j=b[0],x=b[1],_=(0,u.useCallback)((function(e){p&&(m(e.target.value),t(p.id,e.target.value))}),[t,p]),w=(0,u.useCallback)((function(e){p&&(x(e.target.value),n(p.id,e.target.value))}),[n,p]);(0,u.useEffect)((function(){var t,n;if(r.query.slug){var u=e.filter((function(e){return e.slug===r.query.slug||e.id===r.query.slug})),a=o(u,1)[0];a?(h(a),m(null!==(t=a.title)&&void 0!==t?t:""),x(null!==(n=null===a||void 0===a?void 0:a.text)&&void 0!==n?n:"")):r.push("/app/404")}}),[r.query.slug,r]);var E=(0,u.useMemo)((function(){if(p){var e=p.createdAt.toZonedDateTime({calendar:l.AT.Calendar.from("gregory"),timeZone:new l.AT.TimeZone("America/Sao_Paulo")}),t=function(t){return new l.RW.DateTimeFormat("pt-BR",t).format(e)},n=t({hour12:!0,hour:"2-digit",minute:"2-digit"}),r=t({day:"2-digit"}),o=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return n.reduce((function(e,t){return t(e)}),e)}(t({month:"short"}),v),u=t({year:"numeric"});return"".concat(r," ").concat(o," ").concat(u,", ").concat(n)}}),[p]);return(0,d.jsx)("div",{children:p&&(0,d.jsxs)(u.Fragment,{children:[(0,d.jsx)("div",{children:(0,d.jsx)("input",{type:"text",placeholder:"Enter a title",value:g,onChange:_})}),(0,d.jsx)("div",{children:(0,d.jsx)("small",{children:E&&E})}),(0,d.jsx)("div",{children:(0,d.jsx)("textarea",{value:j,onChange:w,children:j})}),(0,d.jsx)("div",{children:(0,d.jsx)(f(),{href:"/app",children:(0,d.jsx)("a",{children:"back arrow"})})})]})})}},2817:function(e,t,n){"use strict";var r=n(4429);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,u=(o=n(2784))&&o.__esModule?o:{default:o},a=n(7744),i=n(5876),l=n(1514);var c={};function f(e,t,n,r){if(e&&a.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;c[t+"%"+n+(o?"%"+o:"")]=!0}}var s=function(e){var t,n=!1!==e.prefetch,o=i.useRouter(),s=u.default.useMemo((function(){var t=a.resolveHref(o,e.href,!0),n=r(t,2),u=n[0],i=n[1];return{href:u,as:e.as?a.resolveHref(o,e.as):i||u}}),[o,e.href,e.as]),d=s.href,v=s.as,p=u.default.useRef(d),h=u.default.useRef(v),y=e.children,g=e.replace,m=e.shallow,b=e.scroll,j=e.locale;"string"===typeof y&&(y=u.default.createElement("a",null,y));var x=(t=u.default.Children.only(y))&&"object"===typeof t&&t.ref,_=l.useIntersection({rootMargin:"200px"}),w=r(_,3),E=w[0],C=w[1],k=w[2],M=u.default.useCallback((function(e){h.current===v&&p.current===d||(k(),h.current=v,p.current=d),E(e),x&&("function"===typeof x?x(e):"object"===typeof x&&(x.current=e))}),[v,x,d,k,E]);u.default.useEffect((function(){var e=C&&n&&a.isLocalURL(d),t="undefined"!==typeof j?j:o&&o.locale,r=c[d+"%"+v+(t?"%"+t:"")];e&&!r&&f(o,d,v,{locale:t})}),[v,d,C,j,n,o]);var L={ref:M,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,u,i,l){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&a.isLocalURL(n))&&(e.preventDefault(),t[o?"replace":"push"](n,r,{shallow:u,locale:l,scroll:i}))}(e,o,d,v,g,m,b,j)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),a.isLocalURL(d)&&f(o,d,v,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var R="undefined"!==typeof j?j:o&&o.locale,S=o&&o.isLocaleDomain&&a.getDomainLocale(v,R,o&&o.locales,o&&o.domainLocales);L.href=S||a.addBasePath(a.addLocale(v,R,o&&o.defaultLocale))}return u.default.cloneElement(t,L)};t.default=s,("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},1514:function(e,t,n){"use strict";var r=n(4429);Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,c=e.disabled||!a,f=o.useRef(),s=o.useState(!1),d=r(s,2),v=d[0],p=d[1],h=o.useState(t?t.current:null),y=r(h,2),g=y[0],m=y[1],b=o.useCallback((function(e){f.current&&(f.current(),f.current=void 0),c||v||e&&e.tagName&&(f.current=function(e,t,n){var r=function(e){var t,n={root:e.root||null,margin:e.rootMargin||""},r=l.find((function(e){return e.root===n.root&&e.margin===n.margin}));r?t=i.get(r):(t=i.get(n),l.push(n));if(t)return t;var o=new Map,u=new IntersectionObserver((function(e){e.forEach((function(e){var t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return i.set(n,t={id:n,observer:u,elements:o}),t}(n),o=r.id,u=r.observer,a=r.elements;return a.set(e,t),u.observe(e),function(){if(a.delete(e),u.unobserve(e),0===a.size){u.disconnect(),i.delete(o);var t=l.findIndex((function(e){return e.root===o.root&&e.margin===o.margin}));t>-1&&l.splice(t,1)}}}(e,(function(e){return e&&p(e)}),{root:g,rootMargin:n}))}),[c,g,n,v]),j=o.useCallback((function(){p(!1)}),[]);return o.useEffect((function(){if(!a&&!v){var e=u.requestIdleCallback((function(){return p(!0)}));return function(){return u.cancelIdleCallback(e)}}}),[v]),o.useEffect((function(){t&&m(t.current)}),[t]),[b,v,j]};var o=n(2784),u=n(1859),a="undefined"!==typeof IntersectionObserver;var i=new Map,l=[];("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},4085:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/app/[slug]",function(){return n(6058)}])},9097:function(e,t,n){e.exports=n(2817)},5632:function(e,t,n){e.exports=n(5876)}},function(e){e.O(0,[774,888,179],(function(){return t=4085,e(e.s=t);var t}));var t=e.O();_N_E=t}]);