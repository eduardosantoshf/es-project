"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[54],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),m=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=m(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},l=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),l=m(n),d=a,b=l["".concat(c,".").concat(d)]||l[d]||p[d]||o;return n?r.createElement(b,i(i({ref:t},u),{},{components:n})):r.createElement(b,i({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=l;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var m=2;m<o;m++)i[m]=n[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}l.displayName="MDXCreateElement"},1014:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>m});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:2},i="Management Web UI",s={unversionedId:"documentation/management-web-ui/management-web-ui",id:"documentation/management-web-ui/management-web-ui",title:"Management Web UI",description:"The React was the tool chosen to develop the Management Web UI.",source:"@site/docs/documentation/management-web-ui/management-web-ui.md",sourceDirName:"documentation/management-web-ui",slug:"/documentation/management-web-ui/",permalink:"/es-project/documentation/management-web-ui/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/documentation/management-web-ui/management-web-ui.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Deployment",permalink:"/es-project/documentation/human-detection-module/deployment"},next:{title:"Sites Managment API",permalink:"/es-project/category/sites-managment-api"}},c={},m=[],u={toc:m};function p(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"management-web-ui"},"Management Web UI"),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"https://reactjs.org/"},"React")," was the tool chosen to develop the Management Web UI."),(0,a.kt)("p",null,'First we create a page to list all users so that the admin can see all users on the system.\nFor this, we implement a "Users" component, where we develop code from a table, which contains information from all users .\n',(0,a.kt)("img",{src:n(4334).Z,width:"1852",height:"980"})),(0,a.kt)("p",null,'Still in the component created earlier, "Users", we perform the functionality of adding and removing a user.\nWe implemented a button at the top of the page with the label "Add". We create a Popup, which appears when we click on the "Add" button, with a suitable form for creating a user.',(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("img",{src:n(6396).Z,width:"1271",height:"609"})),(0,a.kt)("p",null,'In each row of the users table (in each user) we create an "Eliminate" button, and a Popup associated with the button that works as confirmation of the user\'s elimination.\n',(0,a.kt)("img",{src:n(7775).Z,width:"1266",height:"528"})))}p.isMDXComponent=!0},6396:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/addUser-e4f10c1eb5f15dde5e49a103314487bb.png"},7775:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/deleteUser-2387f2e2c7feac1e7b1e26d3347bec94.png"},4334:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/listUsers-63b246f5dde4033956fe5c35b989b109.png"}}]);