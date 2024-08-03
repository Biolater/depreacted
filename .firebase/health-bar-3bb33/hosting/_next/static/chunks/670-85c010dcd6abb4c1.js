"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[670],{9340:function(e,t,a){var s=a(7437),i=a(6463),n=a(2265);t.default=()=>{let e=(0,i.usePathname)(),[t,a]=(0,n.useState)(!1);return(0,n.useEffect)(()=>("/symptom-checker"===e&&a(!0),()=>a(!1)),[e]),!t&&(0,s.jsx)("footer",{className:"px-4 bg-primary py-8 sm:px-16 md:px-32",children:(0,s.jsx)("div",{className:"mx-auto max-w-7xl text-center",children:(0,s.jsx)("p",{className:"text-sm text-white/80",children:"\xa9 2024. All rights reserved."})})})}},9388:function(e,t,a){a.d(t,{default:function(){return o}});var s=a(7437),i=a(495),n=a(4635),r=a(7138);let l={initial:{opacity:0,y:20},animate:{opacity:1,y:0}};var o=()=>(0,s.jsx)("section",{id:"hero",style:{backgroundImage:"url(".concat("/_next/static/media/flat-lay-stethoscope-desk.fd47a5a3.jpg",")")},className:"p-4 flex items-center justify-center h-[calc(100svh-52px)] md:h-[calc(100vh-56px)]",children:(0,s.jsxs)("div",{className:"mx-auto flex items-center justify-center flex-col max-w-7xl z-10 text-center",children:[(0,s.jsx)(n.E.h1,{variants:l,initial:"initial",animate:"animate",transition:{delay:.4},className:"text-3xl text-primary md:text-5xl font-semibold",children:"Your Health, Simplified"}),(0,s.jsx)(n.E.p,{variants:l,initial:"initial",animate:"animate",transition:{delay:.6},className:"mt-2 md:mt-4 text-lg md:text-xl md:max-w-3xl mx-auto text-white",children:"Find answers, manage your health, and connect with a supportive community. Get expert health information, tools, and support to achieve your health goals."}),(0,s.jsx)(n.E.div,{variants:l,initial:"initial",animate:"animate",transition:{delay:.8},children:(0,s.jsx)(r.default,{href:"#news",children:(0,s.jsx)(i.z,{className:"mt-6 md:mt-8 text-white",children:"Start Now"})})})]})})},9782:function(e,t,a){var s=a(7437),i=a(2265),n=a(4887),r=a(7485);t.default=()=>{let[e,t]=(0,i.useState)(!1);return(0,i.useEffect)(()=>(t(!0),()=>t(!1)),[]),e&&(0,n.createPortal)((0,s.jsx)("div",{className:"loading inset-0 bg-black fixed z-50 w-[100vw] h-[100vh] flex items-center justify-center",children:(0,s.jsx)(r.Nx,{width:"200",color:"hsl(var(--primary))"})}),document.body)}},5308:function(e,t,a){a.d(t,{default:function(){return Q}});var s=a(7437),i=a(7138),n=a(6463),r=a(2265),l=a(7440);let o=r.forwardRef((e,t)=>{let{className:a,type:i,...n}=e;return(0,s.jsx)("input",{type:i,className:(0,l.cn)("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",a),ref:t,...n})});o.displayName="Input";var d=e=>{let{className:t}=e;return(0,s.jsxs)("svg",{strokeWidth:"1.5",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"size-7 scale-x-[-1] ".concat(t),children:[(0,s.jsx)("path",{d:"M3 5H11",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,s.jsx)("path",{d:"M3 12H16",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,s.jsx)("path",{d:"M3 19H21",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})},c=e=>{let{className:t}=e;return(0,s.jsx)("svg",{className:t,viewBox:"0 0 9 9",xmlns:"http://www.w3.org/2000/svg",children:(0,s.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M8.73155 0.981582C8.95615 0.757032 8.95615 0.392962 8.73155 0.168412C8.50705 -0.0561375 8.14295 -0.0561375 7.91845 0.168412L4.45 3.63683L0.981592 0.168412C0.757032 -0.0561375 0.392962 -0.0561375 0.168412 0.168412C-0.0561375 0.392962 -0.0561375 0.757032 0.168412 0.981582L3.63683 4.45L0.168412 7.91841C-0.0561375 8.14301 -0.0561375 8.50701 0.168412 8.73161C0.392962 8.95611 0.757032 8.95611 0.981592 8.73161L4.45 5.26317L7.91845 8.73161C8.14295 8.95611 8.50705 8.95611 8.73155 8.73161C8.95615 8.50701 8.95615 8.14301 8.73155 7.91841L5.26317 4.45L8.73155 0.981582Z"})})},m=a(4817),h=a(4887),u=a(3852),p=a(8948),f=a(6864),x=a(7583),w=a(4174),b=a(4258),g=a(4635),A=e=>{let{icon:t,label:a,href:n,isActive:r,onSelect:l}=e;return(0,s.jsxs)(i.default,{onClick:l,className:"flex ".concat(r?"bg-accent text-accent-foreground":""," font-medium text-foreground transition-all duration-300 p-2 hover:bg-accent hover:text-accent-foreground rounded-lg gap-1"),href:n,children:[(0,s.jsx)("span",{children:t}),(0,s.jsx)("span",{children:a})]})},N=e=>{let{onClose:t}=e,a=(0,n.usePathname)(),i=[{label:"Home",href:"/",icon:(0,s.jsx)(u.Z,{})},{label:"Diseases & Conditions",href:"/diseases-conditions",icon:(0,s.jsx)(p.Z,{})},{label:"Symptom Checker",href:"/symptom-checker",icon:(0,s.jsx)(m.Z,{})},{label:"News",href:"/news",icon:(0,s.jsx)(f.Z,{})},{label:"Community",href:"/community",icon:(0,s.jsx)(x.Z,{})}],l=[{label:"Profile",href:"/profile",icon:(0,s.jsx)(w.Z,{})},{label:"Settings",href:"/settings",icon:(0,s.jsx)(b.Z,{})}],[o,d]=(0,r.useState)(!1),N=(0,r.useRef)(null),v=e=>{"Escape"===e.key&&t()};return(0,r.useEffect)(()=>(d(!0),document.addEventListener("keydown",v),()=>{d(!1),document.removeEventListener("keydown",v)}),[]),o&&(0,h.createPortal)((0,s.jsx)(g.E.div,{onClick:e=>{N.current&&!N.current.contains(e.target)&&t()},transition:{duration:.3,ease:"easeInOut"},className:"sidebar z-[9999] w-full fixed left-0 right-0 top-0 bottom-0 h-full",children:(0,s.jsxs)(g.E.div,{ref:N,initial:{x:"-100%"},animate:{x:0},exit:{x:"-100%"},transition:{duration:.5,ease:"easeInOut"},className:"sidebar__content w-3/4 shadow-lg border-r border-border relative sm:max-w-sm  h-full bg-background",children:[(0,s.jsx)("button",{onClick:t,className:"absolute size-3 right-3 top-3",children:(0,s.jsx)(c,{className:"w-full h-full fill-foreground rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none"})}),(0,s.jsxs)("div",{className:"sidebar__content__body h-full flex flex-col justify-between p-5 overflow-y-auto",children:[(0,s.jsxs)("div",{className:"sidebar__content__body__top flex flex-col gap-1",children:[(0,s.jsx)("h1",{className:"p-2 font-semibold text-foreground text-xl",children:"Health Bar"}),i.map(e=>(0,s.jsx)(A,{onSelect:t,icon:e.icon,label:e.label,href:e.href,isActive:a===e.href},e.href))]}),(0,s.jsx)("div",{className:"sidebar__content__body__bottom flex flex-col gap-1",children:l.map(e=>(0,s.jsx)(A,{onSelect:t,icon:e.icon,label:e.label,href:e.href,isActive:a===e.href},e.href))})]})]})}),document.body)},v=()=>{let[e,t]=(0,r.useState)(!1);return(0,r.useEffect)(()=>(t(!0),()=>t(!1)),[]),e&&(0,h.createPortal)((0,s.jsx)(g.E.div,{transition:{duration:.3,ease:"easeInOut"},initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"sidebar__overlay fixed z-[9998] w-full h-screen top-0 left-0 right-0 bottom-0 bg-black/80"}),document.body)},C=a(4446),y=a(4458);let j=r.forwardRef((e,t)=>{let{className:a,...i}=e;return(0,s.jsx)(y.fC,{ref:t,className:(0,l.cn)("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",a),...i})});j.displayName=y.fC.displayName;let k=r.forwardRef((e,t)=>{let{className:a,...i}=e;return(0,s.jsx)(y.Ee,{ref:t,className:(0,l.cn)("aspect-square h-full w-full",a),...i})});k.displayName=y.Ee.displayName;let U=r.forwardRef((e,t)=>{let{className:a,...i}=e;return(0,s.jsx)(y.NY,{ref:t,className:(0,l.cn)("flex h-full w-full items-center justify-center rounded-full bg-muted",a),...i})});U.displayName=y.NY.displayName;var V=a(2395),F=a(4867);let W=V.fC,T=V.xz,J=V.ZA;V.Uv,V.Tr,V.Ee,r.forwardRef((e,t)=>{let{className:a,inset:i,children:n,...r}=e;return(0,s.jsxs)(V.fF,{ref:t,className:(0,l.cn)("flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",i&&"pl-8",a),...r,children:[n,(0,s.jsx)(F.XCv,{className:"ml-auto h-4 w-4"})]})}).displayName=V.fF.displayName,r.forwardRef((e,t)=>{let{className:a,...i}=e;return(0,s.jsx)(V.tu,{ref:t,className:(0,l.cn)("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",a),...i})}).displayName=V.tu.displayName;let R=r.forwardRef((e,t)=>{let{className:a,sideOffset:i=4,...n}=e;return(0,s.jsx)(V.Uv,{children:(0,s.jsx)(V.VY,{ref:t,sideOffset:i,className:(0,l.cn)("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md","data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",a),...n})})});R.displayName=V.VY.displayName;let E=r.forwardRef((e,t)=>{let{className:a,inset:i,...n}=e;return(0,s.jsx)(V.ck,{ref:t,className:(0,l.cn)("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",i&&"pl-8",a),...n})});E.displayName=V.ck.displayName,r.forwardRef((e,t)=>{let{className:a,children:i,checked:n,...r}=e;return(0,s.jsxs)(V.oC,{ref:t,className:(0,l.cn)("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",a),checked:n,...r,children:[(0,s.jsx)("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:(0,s.jsx)(V.wU,{children:(0,s.jsx)(F.nQG,{className:"h-4 w-4"})})}),i]})}).displayName=V.oC.displayName,r.forwardRef((e,t)=>{let{className:a,children:i,...n}=e;return(0,s.jsxs)(V.Rk,{ref:t,className:(0,l.cn)("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",a),...n,children:[(0,s.jsx)("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:(0,s.jsx)(V.wU,{children:(0,s.jsx)(F.jXb,{className:"h-4 w-4 fill-current"})})}),i]})}).displayName=V.Rk.displayName;let z=r.forwardRef((e,t)=>{let{className:a,inset:i,...n}=e;return(0,s.jsx)(V.__,{ref:t,className:(0,l.cn)("px-2 py-1.5 text-sm font-semibold",i&&"pl-8",a),...n})});z.displayName=V.__.displayName;let S=r.forwardRef((e,t)=>{let{className:a,...i}=e;return(0,s.jsx)(V.Z0,{ref:t,className:(0,l.cn)("-mx-1 my-1 h-px bg-muted",a),...i})});S.displayName=V.Z0.displayName;let Z=e=>{let{className:t,...a}=e;return(0,s.jsx)("span",{className:(0,l.cn)("ml-auto text-xs tracking-widest opacity-60",t),...a})};Z.displayName="DropdownMenuShortcut";var B=e=>{let{href:t,label:a,isActive:n}=e;return(0,s.jsx)(i.default,{className:"transition-colors duration-300 ".concat(n?"text-white":"hover:text-white text-white/70 "," font-medium"),href:t,children:a})},Q=()=>{let e=(0,n.usePathname)(),[t,a]=(0,r.useState)(!1);return(0,s.jsx)("header",{className:"main-header z-10 sticky top-0 py-2 px-4 bg-primary text-primary-foreground",children:(0,s.jsxs)("div",{className:"flex mx-auto max-w-7xl items-center justify-between",children:[(0,s.jsx)(C.M,{children:t&&(0,s.jsx)(N,{onClose:()=>{a(!1),document.body.style.overflow="auto"}})}),(0,s.jsx)(C.M,{children:t&&(0,s.jsx)(v,{})}),(0,s.jsx)(i.default,{href:"/",className:"text-3xl",children:"\uD83E\uDE7A"}),(0,s.jsx)("div",{className:"hidden lg:flex items-center gap-3",children:[{label:"Home",href:"/"},{label:"Diseases & Conditions",href:"/diseases-conditions"},{label:"Symptom Checker",href:"/symptom-checker"},{label:"News",href:"/news"},{label:"Community",href:"/community"}].map(t=>(0,s.jsx)(B,{isActive:e===t.href,label:t.label,href:t.href},t.href))}),(0,s.jsxs)("div",{className:"main-header__right flex items-center gap-1 sm:gap-2 md:gap-3",children:[(0,s.jsxs)("div",{className:"relative group/searchbar",children:[(0,s.jsx)("div",{className:"absolute z-10 left-[5px] size-4 top-1/2 -translate-y-1/2",children:(0,s.jsx)(m.Z,{className:"w-full h-full group-hover/searchbar:stroke-primary transition-all"})}),(0,s.jsx)(o,{className:"inline-flex items-center whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input hover:bg-accent hover:text-accent-foreground pe-4 ps-6 py-2 relative h-8 justify-start rounded-[0.5rem] bg-muted/50 text-sm font-normal text-muted-foreground shadow-none w-44 sm:w-32 lg:w-64",placeholder:"Search for diseases, symptoms, or articles",title:"Search for diseases, symptoms, or articles"})]}),(0,s.jsxs)(W,{children:[(0,s.jsx)(T,{asChild:!0,children:(0,s.jsx)("button",{children:(0,s.jsxs)(j,{className:"hidden lg:block text-foreground cursor-pointer",children:[(0,s.jsx)(k,{src:"https://github.com/shadcn.png",alt:"@shadcn"}),(0,s.jsx)(U,{children:"CN"})]})})}),(0,s.jsxs)(R,{className:"w-56 me-4",children:[(0,s.jsx)(z,{children:"My Account"}),(0,s.jsx)(S,{}),(0,s.jsxs)(J,{children:[(0,s.jsx)(i.default,{href:"/profile",children:(0,s.jsxs)(E,{children:["Profile",(0,s.jsx)(Z,{children:"⇧⌘P"})]})}),(0,s.jsxs)(E,{children:["Notifications",(0,s.jsx)(Z,{children:"⌘N"})]}),(0,s.jsx)(i.default,{href:"/settings",children:(0,s.jsxs)(E,{children:["Settings",(0,s.jsx)(Z,{children:"⌘S"})]})}),(0,s.jsx)(i.default,{href:"/messages",children:(0,s.jsxs)(E,{children:["Messages",(0,s.jsx)(Z,{children:"⌘M"})]})})]}),(0,s.jsx)(S,{}),(0,s.jsxs)(E,{children:["Log out",(0,s.jsx)(Z,{children:"⇧⌘Q"})]})]})]}),(0,s.jsx)("button",{className:"cursor-pointer lg:hidden",onClick:()=>{a(!0),document.body.style.overflow="hidden"},children:(0,s.jsx)(d,{})})]})]})})}},8231:function(e,t,a){a.d(t,{default:function(){return N}});var s=a(7437),i=a(6013),n=a(495),r=a(2265),l=a(4867),o=a(4300),d=a(7440);let c=r.createContext(null);function m(){let e=r.useContext(c);if(!e)throw Error("useCarousel must be used within a <Carousel />");return e}let h=r.forwardRef((e,t)=>{let{orientation:a="horizontal",opts:i,setApi:n,plugins:l,className:m,children:h,...u}=e,[p,f]=(0,o.Z)({...i,axis:"horizontal"===a?"x":"y"},l),[x,w]=r.useState(!1),[b,g]=r.useState(!1),A=r.useCallback(e=>{e&&(w(e.canScrollPrev()),g(e.canScrollNext()))},[]),N=r.useCallback(()=>{null==f||f.scrollPrev()},[f]),v=r.useCallback(()=>{null==f||f.scrollNext()},[f]),C=r.useCallback(e=>{"ArrowLeft"===e.key?(e.preventDefault(),N()):"ArrowRight"===e.key&&(e.preventDefault(),v())},[N,v]);return r.useEffect(()=>{f&&n&&n(f)},[f,n]),r.useEffect(()=>{if(f)return A(f),f.on("reInit",A),f.on("select",A),()=>{null==f||f.off("select",A)}},[f,A]),(0,s.jsx)(c.Provider,{value:{carouselRef:p,api:f,opts:i,orientation:a||((null==i?void 0:i.axis)==="y"?"vertical":"horizontal"),scrollPrev:N,scrollNext:v,canScrollPrev:x,canScrollNext:b},children:(0,s.jsx)("div",{ref:t,onKeyDownCapture:C,className:(0,d.cn)("relative",m),role:"region","aria-roledescription":"carousel",...u,children:h})})});h.displayName="Carousel";let u=r.forwardRef((e,t)=>{let{className:a,...i}=e,{carouselRef:n,orientation:r}=m();return(0,s.jsx)("div",{ref:n,className:"overflow-hidden",children:(0,s.jsx)("div",{ref:t,className:(0,d.cn)("flex","horizontal"===r?"-ml-4":"-mt-4 flex-col",a),...i})})});u.displayName="CarouselContent";let p=r.forwardRef((e,t)=>{let{className:a,...i}=e,{orientation:n}=m();return(0,s.jsx)("div",{ref:t,role:"group","aria-roledescription":"slide",className:(0,d.cn)("min-w-0 shrink-0 grow-0 basis-full","horizontal"===n?"pl-4":"pt-4",a),...i})});p.displayName="CarouselItem";let f=r.forwardRef((e,t)=>{let{className:a,variant:i="outline",size:r="icon",...o}=e,{orientation:c,scrollPrev:h,canScrollPrev:u}=m();return(0,s.jsxs)(n.z,{ref:t,variant:i,size:r,className:(0,d.cn)("absolute  h-8 w-8 rounded-full","horizontal"===c?"-left-12 top-1/2 -translate-y-1/2":"-top-12 left-1/2 -translate-x-1/2 rotate-90",a),disabled:!u,onClick:h,...o,children:[(0,s.jsx)(l.Y4O,{className:"h-4 w-4"}),(0,s.jsx)("span",{className:"sr-only",children:"Previous slide"})]})});f.displayName="CarouselPrevious";let x=r.forwardRef((e,t)=>{let{className:a,variant:i="outline",size:r="icon",...o}=e,{orientation:c,scrollNext:h,canScrollNext:u}=m();return(0,s.jsxs)(n.z,{ref:t,variant:i,size:r,className:(0,d.cn)("absolute h-8 w-8 rounded-full","horizontal"===c?"-right-12 top-1/2 -translate-y-1/2":"-bottom-12 left-1/2 -translate-x-1/2 rotate-90",a),disabled:!u,onClick:h,...o,children:[(0,s.jsx)(l.LZ3,{className:"h-4 w-4"}),(0,s.jsx)("span",{className:"sr-only",children:"Next slide"})]})});x.displayName="CarouselNext";var w=a(7059),b=a(6648),g=a(7138);function A(e){let{className:t,...a}=e;return(0,s.jsx)("div",{className:(0,d.cn)("animate-pulse rounded-md bg-primary/10",t),...a})}var N=()=>{let[e,t]=(0,r.useState)({status:"",items:[{title:"Listeria outbreak turns deadly",snippet:"A deadly outbreak of Listeria has US health officials advising people who are pregnant, elderly or have compromised immune systems to avoid eating sliced ...",publisher:"69News WFMZ-TV",timestamp:"1721561280000",newsUrl:"https://www.wfmz.com/news/area/newjersey/listeria-outbreak-turns-deadly/article_617403f4-4754-11ef-b3b7-73a38a13c804.html",images:{thumbnail:"https://news.google.com/api/attachments/CC8iL0NnNTJlWEJwYzFadmJUZDBkRzlhVFJEbUFSaTJBeWdLTWdtZEpJQ3FYU0ZqWlFJ=-w280-h168-p-df-rw",thumbnailProxied:"https://i.zedtranslate.com/newsimage/CC8iL0NnNTJlWEJwYzFadmJUZDBkRzlhVFJEbUFSaTJBeWdLTWdtZEpJQ3FYU0ZqWlFJ"},hasSubnews:!0,subnews:[{title:"Here’s what to do with deli meats as the CDC investigates a listeria outbreak across the U.S.",snippet:"An outbreak of listeria has U.S. health officials advising people who are pregnant, elderly or have compromised immune systems to avoid eating sliced deli ...",publisher:"The Associated Press",timestamp:"1721501220000",newsUrl:"https://apnews.com/article/listeria-outbreak-deli-meat-what-to-do-8d747960d6f7966138046047d00656ff",images:{thumbnail:"https://news.google.com/api/attachments/CC8iK0NnNDNTRTE0TUdVd2RGcG5XbGhwVFJEVkFSakFBaWdLTWdhaGxKVE9OUWM=-w280-h168-p-df-rw",thumbnailProxied:"https://i.zedtranslate.com/newsimage/CC8iK0NnNDNTRTE0TUdVd2RGcG5XbGhwVFJEVkFSakFBaWdLTWdhaGxKVE9OUWM"}},{title:"Mass. residents among those sick in deadly multi-state listeria outbreak",snippet:"Two Massachusetts residents are among those who have become sick as part of a deadly multi-state outbreak of listeria that has been linked to eating deli ...",publisher:"MassLive.com",timestamp:"1721567700000",newsUrl:"https://www.masslive.com/news/2024/07/mass-residents-among-those-sick-in-deadly-multi-state-listeria-outbreak.html",images:{thumbnail:"https://news.google.com/api/attachments/CC8iK0NnNXZiM1Y2VjBwUGQzTXdTWGRKVFJERUF4aW1CU2dLTWdhbGxKVE9PUWM=-w280-h168-p-df-rw",thumbnailProxied:"https://i.zedtranslate.com/newsimage/CC8iK0NnNXZiM1Y2VjBwUGQzTXdTWGRKVFJERUF4aW1CU2dLTWdhbGxKVE9PUWM"}},{title:"At Least 2 Dead in Listeria Outbreak Tied to Deli-Sliced Meat",snippet:"At least two people have died and more than two dozen others have been sickened in an outbreak of listeria that appears to be connected to meat sliced at ...",publisher:"The New York Times",timestamp:"1721498232000",newsUrl:"https://www.nytimes.com/2024/07/20/health/listeria-outbreak-deli-meats.html",images:{thumbnail:"https://news.google.com/api/attachments/CC8iK0NnNWthWFU0VFdKRWVGSnJZemx5VFJDUUF4allCQ2dLTWdZUkFJcnJFQVk=-w280-h168-p-df-rw",thumbnailProxied:"https://i.zedtranslate.com/newsimage/CC8iK0NnNWthWFU0VFdKRWVGSnJZemx5VFJDUUF4allCQ2dLTWdZUkFJcnJFQVk"}},{title:"Two deaths linked to nationwide listeria poisoning from over-the-counter deli meats; two illnesses reported in Missouri",snippet:"A listeria outbreak ...",publisher:"KY3",timestamp:"1721523660000",newsUrl:"https://www.ky3.com/2024/07/21/two-deaths-linked-nationwide-listeria-poisoning-over-the-counter-deli-meats-two-illnesses-reported-missouri/",images:{thumbnail:"https://news.google.com/api/attachments/CC8iK0NnNU9TSHBSYlZoUVdHWnVibTlUVFJDZkF4ampCU2dLTWdZUmNJWVVQUVk=-w280-h168-p-df-rw",thumbnailProxied:"https://i.zedtranslate.com/newsimage/CC8iK0NnNU9TSHBSYlZoUVdHWnVibTlUVFJDZkF4ampCU2dLTWdZUmNJWVVQUVk"}},{title:"Two Dead In Listeria Outbreak Linked To Deli Meats",snippet:"An outbreak of listeria related to deli meats has killed at least two people. The listeria outbreak started in late May and spread across at least a dozen ...",publisher:"The Weather Channel",timestamp:"1721574838000",newsUrl:"https://weather.com/health/video/listeria-outbreak-deli-meats",images:{thumbnail:"https://news.google.com/api/attachments/CC8iMkNnNHRWbXM1WkdFNVgzQjFkazExVFJDMEFSakFBaWdLTWdzTkFvUXJuYU9wd0xyaXlB=-w280-h168-p-df-rw",thumbnailProxied:"https://i.zedtranslate.com/newsimage/CC8iMkNnNHRWbXM1WkdFNVgzQjFkazExVFJDMEFSakFBaWdLTWdzTkFvUXJuYU9wd0xyaXlB"}},{title:"Two dead in multistate listeria outbreak linked with sliced deli meat, CDC says",snippet:"The US Centers for Disease Control and Prevention issued a warning Friday about a deadly multistate listeria outbreak connected to deli meat.",publisher:"CNN",timestamp:"1721425082000",newsUrl:"https://www.cnn.com/2024/07/19/health/deli-meat-listeria-outbreak/index.html",images:{thumbnail:"https://news.google.com/api/attachments/CC8iL0NnNWxNV2h5ZG5jeGJuTkhSM00wVFJDZkF4ampCU2dLTWdrQlFJYktvS1FtQ1FJ=-w280-h168-p-df-rw",thumbnailProxied:"https://i.zedtranslate.com/newsimage/CC8iL0NnNWxNV2h5ZG5jeGJuTkhSM00wVFJDZkF4ampCU2dLTWdrQlFJYktvS1FtQ1FJ"}}]},{title:"Covid-19 variants causing trouble in Minnesota",snippet:"The Minnesota Department of Health says that hospitalization data indicates an uptick in covid cases in the state. The variants currently circulating are ...",publisher:"WDIO",timestamp:"1721515182000",newsUrl:"https://www.wdio.com/front-page/top-stories/covid-19-variants-causing-trouble-in-minnesota/",images:{thumbnail:"https://news.google.com/api/attachments/CC8iK0NnNDNaMmRqYW5kdFdWVnJkVzlXVFJDZkF4ampCU2dLTWdZQkFJaXFIQVk=-w280-h168-p-df-rw",thumbnailProxied:"https://i.zedtranslate.com/newsimage/CC8iK0NnNDNaMmRqYW5kdFdWVnJkVzlXVFJDZkF4ampCU2dLTWdZQkFJaXFIQVk"},hasSubnews:!0,subnews:[{title:"What to Know About California’s Covid Surge",snippet:"There are only a few states where Covid is spreading more.",publisher:"The New York Times",timestamp:"1721307603000",newsUrl:"https://www.nytimes.com/2024/07/18/us/california-covid-surge.html",images:{thumbnail:"https://news.google.com/api/attachments/CC8iJ0NnNTJSR3BYYjJVMVF6RjFNVlJPVFJDcUJCaXFCQ2dLTWdNQllBUQ=-w280-h168-p-df-rw",thumbnailProxied:"https://i.zedtranslate.com/newsimage/CC8iJ0NnNTJSR3BYYjJVMVF6RjFNVlJPVFJDcUJCaXFCQ2dLTWdNQllBUQ"}},{title:"Caught by surprise: How covid summer is affecting the D.C. region",snippet:"An increase in covid cases in the D.C. region has upended summer plans yet again, catching residents by surprise and sending them scrambling for at-home ...",publisher:"The Washington Post",timestamp:"1721366724000",newsUrl:"https://www.washingtonpost.com/dc-md-va/2024/07/18/dmv-covid-summer/",images:{thumbnail:"https://news.google.com/api/attachments/CC8iK0NnNUZZblpZVWpSa2RtNUZabU14VFJERUF4aW1CU2dLTWdhZGxvRHN1UVk=-w280-h168-p-df-rw",thumbnailProxied:"https://i.zedtranslate.com/newsimage/CC8iK0NnNUZZblpZVWpSa2RtNUZabU14VFJERUF4aW1CU2dLTWdhZGxvRHN1UVk"}},{title:"Oregon one of seven states with ‘very high’ levels of COVID-19 in wastewater",snippet:"Oregon is one of seven states with “high levels” of COVID-19 detected in its wastewater, according to the Centers for Disease Control and Prevention.",publisher:"KOIN.com",timestamp:"1721228474000",newsUrl:"https://www.koin.com/news/health/oregon-one-of-seven-states-with-very-high-levels-of-covid-19-in-wastewater-07172024/",images:{thumbnail:"https://news.google.com/api/attachments/CC8iK0NnNXBhWE14U25CYVJsUnhSbTAyVFJDZkF4ampCU2dLTWdZVlE1QUtKZ2c=-w280-h168-p-df-rw",thumbnailProxied:"https://i.zedtranslate.com/newsimage/CC8iK0NnNXBhWE14U25CYVJsUnhSbTAyVFJDZkF4ampCU2dLTWdZVlE1QUtKZ2c"}},{title:"Why Covid is surging this summer — and what health experts say has changed",snippet:"President Biden's positive test for Covid-19 on Wednesday is a sign of a broader trend: Covid cases are on the rise this summer, gauged by rising wastewater ...",publisher:"STAT",timestamp:"1721339547000",newsUrl:"https://www.statnews.com/2024/07/18/latest-covid-spike-update-new-variants-fewer-novids/",images:{thumbnail:"https://news.google.com/api/attachments/CC8iK0NnNWhVRUU0UTBodU5sODRibFI1VFJDcUJCaXFCQ2dLTWdZQkVJWm9wUVU=-w280-h168-p-df-rw",thumbnailProxied:"https://i.zedtranslate.com/newsimage/CC8iK0NnNWhVRUU0UTBodU5sODRibFI1VFJDcUJCaXFCQ2dLTWdZQkVJWm9wUVU"}},{title:"Uptick in COVID-19 cases: What is public health saying about vaccines?",snippet:"A new COVID-19 variant is leading an increase in cases nationwide and President Joe Biden is among those who tested positive. Most of the cases being seen ...",publisher:"Deseret News",timestamp:"1721337218000",newsUrl:"https://www.deseret.com/lifestyle/2024/07/18/covid-cases-rise-new-variant-public-health/",images:{thumbnail:"https://news.google.com/api/attachments/CC8iJ0NnNUVVMjFuUkhWV01qRTFaV1Y0VFJDM0FSaVRBaWdCTWdNQmdBbw=-w280-h168-p-df-rw",thumbnailProxied:"https://i.zedtranslate.com/newsimage/CC8iJ0NnNUVVMjFuUkhWV01qRTFaV1Y0VFJDM0FSaVRBaWdCTWdNQmdBbw"}}]},{title:"Sixth human case of bird flu reported in Colorado, CDC says",snippet:"A new human case of highly pathogenic H5N1 avian flu has been identified in Colorado, the US Centers for Disease Control and Prevention said Friday.",publisher:"CNN",timestamp:"1721431140000",newsUrl:"https://www.cnn.com/2024/07/19/health/bird-flu-colorado/index.html",images:{thumbnail:"https://news.google.com/api/attachments/CC8iK0NnNVVZVjlVVW5ZMVYxQkxPV1JGVFJDZkF4amlCU2dLTWdZSklJYkZrZ28=-w280-h168-p-df-rw",thumbnailProxied:"https://i.zedtranslate.com/newsimage/CC8iK0NnNVVZVjlVVW5ZMVYxQkxPV1JGVFJDZkF4amlCU2dLTWdZSklJYkZrZ28"},hasSubnews:!0,subnews:[{title:"Bird Flu and Extreme Heat Are a Dangerous Combination",snippet:"A recent cluster of bird flu cases among poultry farm workers in Colorado is the latest example of an undeniable truth: Climate change is putting people at ...",publisher:"Bloomberg",timestamp:"1721476821000",newsUrl:"https://www.bloomberg.com/opinion/articles/2024-07-20/bird-flu-and-extreme-heat-are-a-dangerous-combination",images:{thumbnail:"https://news.google.com/api/attachments/CC8iK0NnNVFXbTh0TjJSdlVFWnNWRTlNVFJERUF4aW5CU2dLTWdhaFVvcE9KUWM=-w280-h168-p-df-rw",thumbnailProxied:"https://i.zedtranslate.com/newsimage/CC8iK0NnNVFXbTh0TjJSdlVFWnNWRTlNVFJERUF4aW5CU2dLTWdhaFVvcE9KUWM"}},{title:"H5N1 strikes another large layer farm in Colorado, dairy herd in Minnesota",snippet:"As Colorado continue its response to a highly pathogenic H5N1 avian flu outbreak at a massive egg-laying farm connected to five H5 illnesses in people ...",publisher:"University of Minnesota Twin Cities",timestamp:"1721420100000",newsUrl:"https://www.cidrap.umn.edu/avian-influenza-bird-flu/h5n1-strikes-another-large-layer-farm-colorado-dairy-herd-minnesota",images:{thumbnail:"https://news.google.com/api/attachments/CC8iNkNnNUhUbEJEV21GNk0ydDNXR3RTVFJESUFSajhBU2dCTWc0Qk1JUkxHS282dEZoc1RBYU9IZw=-w280-h168-p-df-rw",thumbnailProxied:"https://i.zedtranslate.com/newsimage/CC8iNkNnNUhUbEJEV21GNk0ydDNXR3RTVFJESUFSajhBU2dCTWc0Qk1JUkxHS282dEZoc1RBYU9IZw"}},{title:"Two more bird flu cases reported in Colorado, but elsewhere a study finds no asymptomatic infections",snippet:"U.S. health officials have announced two more bird flu cases among farmworkers. But here's some good news: A new study in Michigan suggests the virus is not ...",publisher:"The Associated Press",timestamp:"1721421240000",newsUrl:"https://apnews.com/article/bird-flu-cases-asymptomatic-cdc-colorado-2758cebffc125f954513a7ca6aeceb21",images:{thumbnail:"https://news.google.com/api/attachments/CC8iJ0NnNW1UblZ0YURRM056QTNRMGRHVFJEVkFSakFBaWdLTWdNVk5Bbw=-w280-h168-p-df-rw",thumbnailProxied:"https://i.zedtranslate.com/newsimage/CC8iJ0NnNW1UblZ0YURRM056QTNRMGRHVFJEVkFSakFBaWdLTWdNVk5Bbw"}},{title:"Chicken culling, disposal raise concern as bird flu spreads",snippet:"July 18 (Reuters) - The spread of bird flu among poultry and dairy farms has heightened some health experts' concerns that the process of killing and ...",publisher:"Reuters",timestamp:"1721297270000",newsUrl:"https://www.reuters.com/business/healthcare-pharmaceuticals/chicken-culling-disposal-raise-concern-bird-flu-spreads-2024-07-18/",images:{thumbnail:"https://news.google.com/api/attachments/CC8iK0NnNXBNMU0yVlVzM1VVd3pjWGhxVFJEYUF4aUdCU2dLTWdZcE01Q09yUVk=-w280-h168-p-df-rw",thumbnailProxied:"https://i.zedtranslate.com/newsimage/CC8iK0NnNXBNMU0yVlVzM1VVd3pjWGhxVFJEYUF4aUdCU2dLTWdZcE01Q09yUVk"}},{title:"Bird flu is widening its reach. Maps show US counties affected by outbreak.",snippet:"Four Colorado poultry farm employees are the latest confirmed cases of bird flu – also known as Avian influenza H5N1. The U.S. total stands at nine, ...",publisher:"USA TODAY",timestamp:"1721383979000",newsUrl:"https://www.usatoday.com/story/graphics/2024/07/19/bird-flu-map-us-counties-outbreak/74445661007/",images:{thumbnail:"https://news.google.com/api/attachments/CC8iK0NnNVlSa1J6UjFSNFpqSXdSbGRXVFJDUUF4aXNBaWdLTWdZQllvNkpNZ1k=-w280-h168-p-df-rw",thumbnailProxied:"https://i.zedtranslate.com/newsimage/CC8iK0NnNVlSa1J6UjFSNFpqSXdSbGRXVFJDUUF4aXNBaWdLTWdZQllvNkpNZ1k"}}]}]}),[a,l]=(0,r.useState)(!0);return(0,r.useEffect)(()=>{let e=setTimeout(()=>{l(!1)},5e3);return()=>clearTimeout(e)},[]),(0,s.jsx)("section",{id:"news",className:"px-4 py-8 relative",children:(0,s.jsxs)("div",{className:"mx-auto flex flex-col items-center justify-center max-w-7xl",children:[(0,s.jsx)("h1",{className:"text-3xl md:text-5xl mb-8 md:mb-12 text-primary font-bold text-center",children:"Health related news"}),(0,s.jsx)("div",{className:"w-full flex justify-center px-10",children:(0,s.jsxs)(h,{opts:{align:"start",loop:!0},plugins:[(0,w.Z)({delay:5e3})],className:"w-full max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-6xl",children:[(0,s.jsx)(u,{children:e.items.map((e,t)=>{var r;return(0,s.jsx)(p,{className:"md:basis-1/2 lg:basis-1/3",children:(0,s.jsx)("div",{className:"p-1",children:(0,s.jsxs)(i.Zb,{children:[(0,s.jsx)(i.Ol,{className:"p-0 max-w-full max-h-full",children:a?(0,s.jsx)(A,{className:"rounded-ss-xl h-[200px] w-full rounded-se-xl rounded-es-none rounded-ee-none "}):(0,s.jsx)(b.default,{quality:100,className:"rounded-ss-xl rounded-se-xl w-full",src:null==e?void 0:null===(r=e.images)||void 0===r?void 0:r.thumbnail,objectFit:"cover",width:280,height:200,alt:"news"})}),(0,s.jsx)(i.aY,{className:"flex flex-col text-center gap-4 items-center justify-center p-6",children:a?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(A,{className:"w-full h-[28px]"}),(0,s.jsx)(A,{className:"w-full h-32"}),(0,s.jsx)(A,{className:"w-[110px] h-[36px]"})]}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.ll,{className:"text-xl text-center",children:null==e?void 0:e.title}),(0,s.jsx)(i.SZ,{children:null==e?void 0:e.snippet}),(0,s.jsx)(g.default,{target:"_blank",href:null==e?void 0:e.newsUrl,children:(0,s.jsx)(n.z,{className:"text-white",children:"Read more"})})]})})]})})},t)})}),(0,s.jsx)(f,{}),(0,s.jsx)(x,{})]})})]})})}},2547:function(e,t,a){a.d(t,{Accordion:function(){return o},AccordionContent:function(){return m},AccordionItem:function(){return d},AccordionTrigger:function(){return c}});var s=a(7437),i=a(2265),n=a(4756),r=a(4867),l=a(7440);let o=n.fC,d=i.forwardRef((e,t)=>{let{className:a,...i}=e;return(0,s.jsx)(n.ck,{ref:t,className:(0,l.cn)("border-b",a),...i})});d.displayName="AccordionItem";let c=i.forwardRef((e,t)=>{let{className:a,children:i,...o}=e;return(0,s.jsx)(n.h4,{className:"flex",children:(0,s.jsxs)(n.xz,{ref:t,className:(0,l.cn)("flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",a),...o,children:[i,(0,s.jsx)(r.v4q,{className:"h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200"})]})})});c.displayName=n.xz.displayName;let m=i.forwardRef((e,t)=>{let{className:a,children:i,...r}=e;return(0,s.jsx)(n.VY,{ref:t,className:"overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",...r,children:(0,s.jsx)("div",{className:(0,l.cn)("pb-4 pt-0",a),children:i})})});m.displayName=n.VY.displayName},495:function(e,t,a){a.d(t,{z:function(){return d}});var s=a(7437),i=a(2265),n=a(1538),r=a(2218),l=a(7440);let o=(0,r.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),d=i.forwardRef((e,t)=>{let{className:a,variant:i,size:r,asChild:d=!1,...c}=e,m=d?n.g7:"button";return(0,s.jsx)(m,{className:(0,l.cn)(o({variant:i,size:r,className:a})),ref:t,...c})});d.displayName="Button"},6013:function(e,t,a){a.d(t,{Ol:function(){return l},SZ:function(){return d},Zb:function(){return r},aY:function(){return c},ll:function(){return o}});var s=a(7437),i=a(2265),n=a(7440);let r=i.forwardRef((e,t)=>{let{className:a,...i}=e;return(0,s.jsx)("div",{ref:t,className:(0,n.cn)("rounded-xl border bg-card text-card-foreground shadow",a),...i})});r.displayName="Card";let l=i.forwardRef((e,t)=>{let{className:a,...i}=e;return(0,s.jsx)("div",{ref:t,className:(0,n.cn)("flex flex-col space-y-1.5 p-6",a),...i})});l.displayName="CardHeader";let o=i.forwardRef((e,t)=>{let{className:a,...i}=e;return(0,s.jsx)("h3",{ref:t,className:(0,n.cn)("font-semibold leading-none tracking-tight",a),...i})});o.displayName="CardTitle";let d=i.forwardRef((e,t)=>{let{className:a,...i}=e;return(0,s.jsx)("p",{ref:t,className:(0,n.cn)("text-sm text-muted-foreground",a),...i})});d.displayName="CardDescription";let c=i.forwardRef((e,t)=>{let{className:a,...i}=e;return(0,s.jsx)("div",{ref:t,className:(0,n.cn)("p-6 pt-0",a),...i})});c.displayName="CardContent",i.forwardRef((e,t)=>{let{className:a,...i}=e;return(0,s.jsx)("div",{ref:t,className:(0,n.cn)("flex items-center p-6 pt-0",a),...i})}).displayName="CardFooter"},7440:function(e,t,a){a.d(t,{cn:function(){return n}});var s=a(4839),i=a(6164);function n(){for(var e=arguments.length,t=Array(e),a=0;a<e;a++)t[a]=arguments[a];return(0,i.m6)((0,s.W)(t))}},9969:function(e,t,a){a.r(t),t.default={src:"/_next/static/media/community.84c71c4d.jpg",height:2e3,width:3e3,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wgARCAAFAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAX/xAAUAQEAAAAAAAAAAAAAAAAAAAAC/9oADAMBAAIQAxAAAAG4C//EABcQAQADAAAAAAAAAAAAAAAAAAIBAwT/2gAIAQEAAQUCsbjR/8QAFREBAQAAAAAAAAAAAAAAAAAAAAH/2gAIAQMBAT8Br//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQIBAT8Bf//EABcQAQEBAQAAAAAAAAAAAAAAAAECABH/2gAIAQEABj8CkL4Nb//EABYQAQEBAAAAAAAAAAAAAAAAAAEAYf/aAAgBAQABPyFrwAmX/9oADAMBAAIAAwAAABD7/8QAGBEBAAMBAAAAAAAAAAAAAAAAAQARQfD/2gAIAQMBAT8QJR2E/8QAFREBAQAAAAAAAAAAAAAAAAAAAAH/2gAIAQIBAT8Qj//EABkQAQACAwAAAAAAAAAAAAAAABEBMQBBUf/aAAgBAQABPxAMNCiWxw1Tn//Z",blurWidth:8,blurHeight:5}}}]);