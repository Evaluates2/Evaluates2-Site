(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{T4Lz:function(e,t,r){"use strict";var n=r("wx14"),o=r("zLVn"),i=r("vOnD"),c=r("q1tI"),a=r.n(c),l=r("Wbzz"),u=r("vrFN"),d=r("Rnav"),s={blue:"#003e90",darkBlue:"#000032",lightBlue:"#00aaff",green:"#89ba17",darkGreen:"#008c65",lightGreen:"#00d69b",yellowgreen:"#a5dc70",yellow:"#f9ff00",darkYellow:"#ffca35",orange:"#FF7D00",lightYellow:"#fbff6c",gray:"#464849",lightGray:"#d8d8d8",lighterGray:"#efefef",lightestGray:"#f6f6f6",darkGray:"#2a2c30",maxWidth:"40em",smallBorder:"0.1em",mediumBorder:"0.15em",largeBorder:"0.2em",smallBorderRadius:"0.2em",mediumBorderRadius:"0.5em",largeBorderRadius:"1em",shortTrans:"0.3s",mediumTrans:"0.6s",longTrans:"1s"},m=r("mrSG"),h=r("crtd"),b=c.forwardRef((function(e,t){return c.createElement(h.a,Object(m.a)({iconAttrs:{fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"},iconVerticalAlign:"middle",iconViewBox:"0 0 24 24"},e,{ref:t}),c.createElement("circle",{cx:12,cy:12,r:10,key:"k0"}),c.createElement("polyline",{points:"8 12 12 16 16 12",key:"k1"}),c.createElement("line",{x1:12,x2:12,y1:8,y2:16,key:"k2"}))}));b.displayName="ArrowDownCircle";var p=c.forwardRef((function(e,t){return c.createElement(h.a,Object(m.a)({iconAttrs:{fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"},iconVerticalAlign:"middle",iconViewBox:"0 0 24 24"},e,{ref:t}),c.createElement("circle",{cx:12,cy:12,r:10,key:"k0"}),c.createElement("polyline",{points:"16 12 12 8 8 12",key:"k1"}),c.createElement("line",{x1:12,x2:12,y1:16,y2:8,key:"k2"}))}));p.displayName="ArrowUpCircle";var f=Object(i.d)(b).attrs((function(e){return{as:"up"===e.direction&&p}})).withConfig({displayName:"styles__Arrow",componentId:"sc-1avm3yh-0"})(["z-index:10;background:"," !important;border-radius:50% !important;padding:0 !important;color:white;transition:",";position:absolute;bottom:calc(70px + 0.5vw);margin-right:calc(10px + 1vw);opacity:",";visibility:",";width:calc(30px + 2vw);height:calc(30px + 2vw);cursor:pointer;:hover{transform:scale(1.15);background:",";}"],(function(e){return e.theme.lightBlue}),(function(e){return e.theme.shortTrans}),(function(e){return e.show?1:0}),(function(e){return e.show?"visible":"hidden"}),(function(e){return e.theme.orange})),w=r("qKvR"),g=["direction","by","to"];var y=r("bBPc");r("Yqwa");var v=y.a.screens,x=(v.phone,v.desktop,Object(i.b)(["a{text-decoration:none;color:",";:hover{color:",';}}div[role="group"][tabindex]{min-height:100vh;display:flex;flex-direction:column;}.btn{background:',";color:white !important;border-radius:",";padding:0.4em 0.6em;font-size:",";transition:",";margin:0 auto;:hover{background:",";}}"],(function(e){return e.theme.blue}),(function(e){return e.theme.lightBlue}),(function(e){return e.theme.darkBlue}),(function(e){return e.theme.smallBorderRadius}),(function(e){return e.size}),(function(e){return e.theme.shortTrans}),(function(e){return e.theme.lightBlue}))),k=["children","site","path"],j=function(e){var t=e.children,r=e.site,c=e.path,l=Object(o.a)(e,k);return Object(w.b)(i.a,{theme:s},Object(w.b)(a.a.Fragment,null,Object(w.b)(u.a,Object(n.a)({site:r.meta},l)),Object(w.b)(x,null),Object(w.b)(d.a,{site:r.meta,path:c}),t,Object(w.b)(O,{showBelow:1500})))},O=(t.a=function(e){return Object(w.b)(l.StaticQuery,{query:"366938907",render:function(t){return Object(w.b)(j,Object(n.a)({},t,e))}})},Object(i.d)((function(e){var t=e.direction,r=void 0===t?"up":t,i=e.by,a=e.to,l=Object(o.a)(e,g),u=l.showBelow,d=l.className,s=l.size,m=void 0===s?"calc(1em + 30px)":s;if(!["up","down"].includes(r))throw TypeError("Scroll 'direction' prop must be either 'up' or 'down'");if(a&&("number"!=typeof a||a<=0))throw TypeError("Scroll 'to' prop must be a positive number");if(i&&"number"!=typeof i)throw TypeError("Scroll 'by' prop must be a number");var h=Object(c.useState)(!u),b=h[0],p=h[1],y=function(e){var t=e.mode,r=e.to;return window["scroll"+t]({top:r,behavior:"smooth"})},v=function(){window.pageYOffset>u?b||p(!0):b&&p(!1)};Object(c.useEffect)((function(){if(u)return window.addEventListener("scroll",v),function(){return window.removeEventListener("scroll",v)}}));var x={show:b,direction:r,className:d,size:m};return Object(w.b)(f,Object(n.a)({onClick:function(){y(a?{mode:"To",to:a*window.innerHeight}:i?{mode:"By",to:i*window.innerHeight}:"up"===r?{mode:"To",to:0}:{mode:"To",to:document.body.scrollHeight})}},x))})).withConfig({displayName:"Global___StyledScroll",componentId:"sc-m4lkxp-0"})(["position:fixed;right:1em;"]))},Yqwa:function(e,t,r){},w2l6:function(e,t,r){"use strict";r.r(t);var n=r("wTIg"),o=(r("q1tI"),r("T4Lz")),i=r("Bl7J"),c=r("vrFN"),a=r("qKvR");var l=Object(n.a)("div",{target:"e1lc3qoy0"})({name:"odf2s2",styles:"background-color:#000032;width:100%;min-height:100vh;color:white;text-align:center;display:flex;flex-direction:column;justify-content:center;align-items:center;padding:calc(150px + 5vw) 0;h1#h404{font-size:calc(35px + 4vw);line-height:calc(50px + 4vw);margin:calc(15px + 4vw);}p#p404{font-size:calc(12px + 2.5vw);line-height:calc(40px + 2.5vw);margin:calc(15px + 4vw);opacity:0.7;}"});t.default=function(){return Object(a.b)(o.a,{pageTitle:"404",path:"/404",description:"404 - Page Not Found"},Object(a.b)(i.a,null,Object(a.b)(c.a,{title:"404: Not found"}),Object(a.b)(l,null,Object(a.b)("h1",{id:"h404"},"Page Not Found!"),Object(a.b)("p",{id:"p404"},"Uh oh, there doesn't seem to be any page here!"))))}}}]);
//# sourceMappingURL=component---src-pages-404-js-243d840be971b8fb1455.js.map