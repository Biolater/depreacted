(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{906:function(e,t,n){Promise.resolve().then(n.t.bind(n,8877,23)),Promise.resolve().then(n.bind(n,9388)),Promise.resolve().then(n.bind(n,5308)),Promise.resolve().then(n.bind(n,3464)),Promise.resolve().then(n.bind(n,5038)),Promise.resolve().then(n.t.bind(n,1352,23))},5038:function(e,t,n){"use strict";n.d(t,{ThemeProvider:function(){return y}});var c=n(7437),o=n(2265),a=["light","dark"],r="(prefers-color-scheme: dark)",l="undefined"==typeof window,s=o.createContext(void 0),i=e=>o.useContext(s)?e.children:o.createElement(d,{...e}),m=["light","dark"],d=e=>{let{forcedTheme:t,disableTransitionOnChange:n=!1,enableSystem:c=!0,enableColorScheme:l=!0,storageKey:i="theme",themes:d=m,defaultTheme:y=c?"system":"light",attribute:b="data-theme",value:g,children:p,nonce:S}=e,[w,_]=o.useState(()=>h(i,y)),[k,C]=o.useState(()=>h(i)),E=g?Object.values(g):d,T=o.useCallback(e=>{let t=e;if(!t)return;"system"===e&&c&&(t=v());let o=g?g[t]:t,r=n?f():null,s=document.documentElement;if("class"===b?(s.classList.remove(...E),o&&s.classList.add(o)):o?s.setAttribute(b,o):s.removeAttribute(b),l){let e=a.includes(y)?y:null,n=a.includes(t)?t:e;s.style.colorScheme=n}null==r||r()},[]),P=o.useCallback(e=>{let t="function"==typeof e?e(e):e;_(t);try{localStorage.setItem(i,t)}catch(e){}},[t]),x=o.useCallback(e=>{C(v(e)),"system"===w&&c&&!t&&T("system")},[w,t]);o.useEffect(()=>{let e=window.matchMedia(r);return e.addListener(x),x(e),()=>e.removeListener(x)},[x]),o.useEffect(()=>{let e=e=>{e.key===i&&P(e.newValue||y)};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)},[P]),o.useEffect(()=>{T(null!=t?t:w)},[t,w]);let L=o.useMemo(()=>({theme:w,setTheme:P,forcedTheme:t,resolvedTheme:"system"===w?k:w,themes:c?[...d,"system"]:d,systemTheme:c?k:void 0}),[w,P,t,k,c,d]);return o.createElement(s.Provider,{value:L},o.createElement(u,{forcedTheme:t,disableTransitionOnChange:n,enableSystem:c,enableColorScheme:l,storageKey:i,themes:d,defaultTheme:y,attribute:b,value:g,children:p,attrs:E,nonce:S}),p)},u=o.memo(e=>{let{forcedTheme:t,storageKey:n,attribute:c,enableSystem:l,enableColorScheme:s,defaultTheme:i,value:m,attrs:d,nonce:u}=e,h="system"===i,f="class"===c?"var d=document.documentElement,c=d.classList;".concat("c.remove(".concat(d.map(e=>"'".concat(e,"'")).join(","),")"),";"):"var d=document.documentElement,n='".concat(c,"',s='setAttribute';"),v=s?(a.includes(i)?i:null)?"if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'".concat(i,"'"):"if(e==='light'||e==='dark')d.style.colorScheme=e":"",y=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=!(arguments.length>2)||void 0===arguments[2]||arguments[2],o=m?m[e]:e,r=t?e+"|| ''":"'".concat(o,"'"),l="";return s&&n&&!t&&a.includes(e)&&(l+="d.style.colorScheme = '".concat(e,"';")),"class"===c?t||o?l+="c.add(".concat(r,")"):l+="null":o&&(l+="d[s](n,".concat(r,")")),l},b=t?"!function(){".concat(f).concat(y(t),"}()"):l?"!function(){try{".concat(f,"var e=localStorage.getItem('").concat(n,"');if('system'===e||(!e&&").concat(h,")){var t='").concat(r,"',m=window.matchMedia(t);if(m.media!==t||m.matches){").concat(y("dark"),"}else{").concat(y("light"),"}}else if(e){").concat(m?"var x=".concat(JSON.stringify(m),";"):"").concat(y(m?"x[e]":"e",!0),"}").concat(h?"":"else{"+y(i,!1,!1)+"}").concat(v,"}catch(e){}}()"):"!function(){try{".concat(f,"var e=localStorage.getItem('").concat(n,"');if(e){").concat(m?"var x=".concat(JSON.stringify(m),";"):"").concat(y(m?"x[e]":"e",!0),"}else{").concat(y(i,!1,!1),";}").concat(v,"}catch(t){}}();");return o.createElement("script",{nonce:u,dangerouslySetInnerHTML:{__html:b}})}),h=(e,t)=>{let n;if(!l){try{n=localStorage.getItem(e)||void 0}catch(e){}return n||t}},f=()=>{let e=document.createElement("style");return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(e),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(e)},1)}},v=e=>(e||(e=window.matchMedia(r)),e.matches?"dark":"light");function y(e){let{children:t,...n}=e;return(0,c.jsx)(i,{...n,children:t})}},8877:function(){},1352:function(e){e.exports={style:{fontFamily:"'__Poppins_d334c2', '__Poppins_Fallback_d334c2'",fontStyle:"normal"},className:"__className_d334c2"}}},function(e){e.O(0,[916,310,215,456,971,23,744],function(){return e(e.s=906)}),_N_E=e.O()}]);