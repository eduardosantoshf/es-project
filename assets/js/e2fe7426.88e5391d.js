"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7163],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(n),g=a,f=c["".concat(p,".").concat(g)]||c[g]||m[g]||i;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},4587:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const i={slug:"1st-sprint-planning",title:"1st Sprint Planning",authors:"joao"},o=void 0,l={permalink:"/es-project/blog/1st-sprint-planning",source:"@site/blog/2022-10-10-1st-sprint/2022-10-10-sprint-planning.md",title:"1st Sprint Planning",description:"Attendees: all",date:"2022-10-10T00:00:00.000Z",formattedDate:"October 10, 2022",tags:[],readingTime:.575,hasTruncateMarker:!1,authors:[{name:"Jo\xe3o Ferreira",url:"https://github.com/joaodiogo10",imageURL:"https://github.com/joaodiogo10.png",key:"joao"}],frontMatter:{slug:"1st-sprint-planning",title:"1st Sprint Planning",authors:"joao"},prevItem:{title:"1st Sprint Review",permalink:"/es-project/blog/1st-sprint-review"},nextItem:{title:"0 Sprint Planning",permalink:"/es-project/blog/0-sprint-planning"}},p={authorsImageUrls:[void 0]},s=[],u={toc:s};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Attendees"),": all "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Define team roles"),":"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Scrum Master - Jo\xe3o Diogo Ferreira"),(0,a.kt)("li",{parentName:"ul"},"Product Owner - Diogo Vicente "))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Unit Tests"),": Have unit tests for the microservices (at least in the beginning)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Git"),":"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"A pull request must be accepted by someone else who didn't"),(0,a.kt)("li",{parentName:"ul"},"Github Actions to run tests when doing a pull request"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Sprint Goal"),":"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Familiarize with jira, github workflows and project technologies."),(0,a.kt)("li",{parentName:"ul"},"Define the basic skeleton of the project."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"What can be done this sprint?")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Store video cameras video temporarily (HDMI)"),(0,a.kt)("li",{parentName:"ul"},"Add/remove/update users (site management API)"),(0,a.kt)("li",{parentName:"ul"},"Retrieve users (site management API)"),(0,a.kt)("li",{parentName:"ul"},"List all users (management UI)"),(0,a.kt)("li",{parentName:"ul"},"Add/remove users (management UI)")))))}m.isMDXComponent=!0}}]);