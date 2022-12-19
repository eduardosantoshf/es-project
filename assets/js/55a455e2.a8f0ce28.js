"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9797],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>p});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),u=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},l=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),l=u(n),p=r,f=l["".concat(s,".").concat(p)]||l[p]||m[p]||i;return n?o.createElement(f,a(a({ref:t},d),{},{components:n})):o.createElement(f,a({ref:t},d))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=l;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var u=2;u<i;u++)a[u]=n[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}l.displayName="MDXCreateElement"},5252:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var o=n(7462),r=(n(7294),n(3905));const i={sidebar_position:1},a="Introduction",c={unversionedId:"documentation/human-detection-module/intrusion-detection",id:"documentation/human-detection-module/intrusion-detection",title:"Introduction",description:"This module is where all the image processing is done. The main function of HDM is to process each video frame sent by the cameras and detect if there is an intrusion.",source:"@site/docs/documentation/human-detection-module/intrusion-detection.md",sourceDirName:"documentation/human-detection-module",slug:"/documentation/human-detection-module/intrusion-detection",permalink:"/es-project/documentation/human-detection-module/intrusion-detection",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/documentation/human-detection-module/intrusion-detection.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Human Detection Module",permalink:"/es-project/category/human-detection-module"},next:{title:"Deployment",permalink:"/es-project/documentation/human-detection-module/deployment"}},s={},u=[],d={toc:u};function m(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,o.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"This module is where all the image processing is done. The main function of HDM is to process each video frame sent by the ",(0,r.kt)("inlineCode",{parentName:"p"},"cameras")," and detect if there is an intrusion."),(0,r.kt)("p",null,"When the HDM detects a human in 3 consecutive frames, a notification is sent to the Intrusion Management API. "),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Frame check",src:n(3388).Z,width:"1414",height:"482"})),(0,r.kt)("p",null,"Each frame with an intrusion is saved in the Amazon Elastic Cache. Then, as it is shown above, the module checks if the previous frames also had an intrusion and notifies the Intrusion Management API, if needed."))}m.isMDXComponent=!0},3388:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/check_frames-7f34c31866fd74e0a7eaec7b5fccab6a.png"}}]);