(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{6450:function(e,n,i){Promise.resolve().then(i.bind(i,7034)),Promise.resolve().then(i.bind(i,1819)),Promise.resolve().then(i.t.bind(i,1232,23)),Promise.resolve().then(i.t.bind(i,54,23))},3976:function(e,n,i){"use strict";i.d(n,{H:function(){return l}});var s=i(9268),r=i(4214),t=i(6006);let a=(0,t.createContext)();function l(e){let[n,i]=(0,t.useState)(null);async function l(){try{let e=await r.Z.get("/auth/isauthentic");i(e.data)}catch(e){i(null)}}(0,t.useEffect)(()=>{l()},[]);let[c,o]=(0,t.useState)(!1);return(0,t.useEffect)(()=>{l()},[c]),(0,s.jsx)(a.Provider,{value:{UserDetails:n,setUserDetails:i,call_again_getuser:c,setcall_again_getuser:o},children:e.children})}n.Z=a},7034:function(e,n,i){"use strict";i.r(n),i.d(n,{Provider:function(){return t}});var s=i(9268),r=i(3976);function t(e){let{children:n}=e;return(0,s.jsx)(r.H,{children:n})}},1819:function(e,n,i){"use strict";i.r(n),i.d(n,{default:function(){return h}});var s=i(9268),r=i(6006);i(9594);var t=i(3976),a=i(4214),l=i(6394),c=i.n(l),o=i(5846),d=i.n(o);function h(){let{UserDetails:e}=(0,r.useContext)(t.Z),[n,i]=(0,r.useState)(!1),l=async()=>{await a.Z.get("/auth/logout").then(()=>{window.location.reload()})};return(0,s.jsx)("div",{className:"header-main",children:(0,s.jsx)("div",{className:"navbar-container",children:(0,s.jsxs)("div",{className:"nav-items-container",children:[(0,s.jsxs)("div",{className:"navbar-left-items",children:[(0,s.jsx)("div",{className:"nav-left-single-item",children:(0,s.jsx)(d(),{href:"/jobopening",children:"Job Openings"})}),(0,s.jsx)("div",{className:"nav-left-single-item",children:(0,s.jsx)(d(),{href:"/practice",children:"Practice"})}),(0,s.jsx)("div",{className:"nav-left-single-item",children:(0,s.jsx)(d(),{href:"/discussion",children:"Discussion"})}),(0,s.jsx)("div",{className:"nav-left-single-item",children:(0,s.jsx)(d(),{href:"/roadmap",children:"Roadmap"})}),(0,s.jsx)("div",{className:"nav-left-single-item",children:(0,s.jsx)(d(),{href:"/achievers",children:"Achievers"})})]}),(0,s.jsx)("div",{className:"navbar-logo",children:(0,s.jsx)(d(),{href:"/home",children:(0,s.jsx)("img",{src:"https://icon-library.com/images/icon-logo-png/icon-logo-png-11.jpg",alt:"Loading Error"})})}),(0,s.jsxs)("div",{className:"navbar-right-items",children:[(0,s.jsx)("div",{className:"nav-right-developer",children:(0,s.jsx)(d(),{href:"/developers",children:"Developers"})}),(0,s.jsx)("div",{className:"nav-right-signin",children:e?(0,s.jsxs)("div",{children:[(0,s.jsx)("div",{children:(0,s.jsx)(c(),{width:"40",height:"40",src:null==e?void 0:e.profilePic,alt:"profile Photo",onClick:()=>{i(!n)}})}),n?(0,s.jsxs)("div",{className:"avatar-dropdown",children:[(0,s.jsx)("a",{href:"/userprofile/".concat(e.username),children:"Profile"}),(0,s.jsx)("a",{onClick:()=>{l()},children:"LogOut"})]}):null]}):(0,s.jsx)("a",{href:"/signin",children:"Sign In"})})]})]})})})}},54:function(){},9594:function(){},1232:function(e){e.exports={style:{fontFamily:"'__Inter_20951f', '__Inter_Fallback_20951f'",fontStyle:"normal"},className:"__className_20951f"}}},function(e){e.O(0,[348,846,394,253,961,744],function(){return e(e.s=6450)}),_N_E=e.O()}]);