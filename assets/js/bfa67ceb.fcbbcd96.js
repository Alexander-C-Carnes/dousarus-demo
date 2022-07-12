"use strict";(self.webpackChunkdeploy_test=self.webpackChunkdeploy_test||[]).push([[4708],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=s(n),d=r,k=m["".concat(p,".").concat(d)]||m[d]||u[d]||i;return n?a.createElement(k,l(l({ref:t},c),{},{components:n})):a.createElement(k,l({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},20146:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const i={title:"Parameters"},l="Parameters Module",o={unversionedId:"fireboltAPI/Parameters",id:"fireboltAPI/Parameters",title:"Parameters",description:"---",source:"@site/docs/fireboltAPI/Parameters.md",sourceDirName:"fireboltAPI",slug:"/fireboltAPI/Parameters",permalink:"/dousarus-demo/docs/next/fireboltAPI/Parameters",draft:!1,editUrl:"https://github.com/Alexander-C-Carnes/dousarus-demo/tree/development-branch-RDK/my-website/docs/fireboltAPI/Parameters.md",tags:[],version:"current",frontMatter:{title:"Parameters"},sidebar:"api",previous:{title:"Metrics",permalink:"/dousarus-demo/docs/next/fireboltAPI/Metrics"},next:{title:"Profile",permalink:"/dousarus-demo/docs/next/fireboltAPI/Profile"}},p={},s=[{value:"Overview",id:"overview",level:2},{value:"OpenRPC",id:"openrpc",level:2},{value:"Table of Contents",id:"table-of-contents",level:2},{value:"Usage",id:"usage",level:2},{value:"Methods",id:"methods",level:2},{value:"initialization",id:"initialization",level:3},{value:"Schemas",id:"schemas",level:2},{value:"AppInitialization",id:"appinitialization",level:3}],c={toc:s};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"parameters-module"},"Parameters Module"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Version 0.7.0"),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null," Methods for getting initialization parameters for an app cold launch."),(0,r.kt)("h2",{id:"openrpc"},"OpenRPC"),(0,r.kt)("p",null,"Firebolt APIs are maintained in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/rdkcentral/firebolt-core-sdk"},"rdkcentral/firebolt-core-sdk")," GitHub repository."),(0,r.kt)("p",null,"You can see this API in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/rdkcentral/firebolt-core-sdk/blob/main/src/modules/parameters.json"},"parameters.json")," OpenRPC JSON-Schema document. "),(0,r.kt)("h2",{id:"table-of-contents"},"Table of Contents"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#overview"},"Overview")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#openrpc"},"OpenRPC")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#usage"},"Usage")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#methods"},"Methods"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#initialization"},"initialization"))))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#schemas"},"Schemas"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#appinitialization"},"AppInitialization"))))),(0,r.kt)("span",null),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"To use the Parameters module, you can import it into your project from the Firebolt SDK:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import { Parameters } from '@firebolt-js/sdk'\n")),(0,r.kt)("h2",{id:"methods"},"Methods"),(0,r.kt)("h3",{id:"initialization"},"initialization"),(0,r.kt)("p",null,"Returns any initialization parameters for the app, e.g. initialial ",(0,r.kt)("inlineCode",{parentName:"p"},"NavigationIntent"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"function initialization(): Promise<AppInitialization>\n")),(0,r.kt)("p",null,"Promise resolution:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#appinitialization"},(0,r.kt)("inlineCode",{parentName:"a"},"AppInitialization"))),(0,r.kt)("td",{parentName:"tr",align:null},"The initialization parameters.")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Examples")),(0,r.kt)("p",null,"Default Example"),(0,r.kt)("p",null,"JavaScript:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import { Parameters } from '@firebolt-js/sdk'\n\nParameters.initialization()\n    .then(init => {\n        console.log(init)\n    })\n")),(0,r.kt)("p",null,"Value of ",(0,r.kt)("inlineCode",{parentName:"p"},"init"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "lmt": 0,\n  "us_privacy": "1-Y-",\n  "discovery": {\n    "navigateTo": {\n      "action": "entity",\n      "data": {\n        "entityId": "abc",\n        "entityType": "program",\n        "programType": "movie"\n      },\n      "context": {\n        "source": "voice"\n      }\n    }\n  }\n}\n')),(0,r.kt)("details",null,(0,r.kt)("summary",null,"JSON-RPC:"),(0,r.kt)("p",null,"Request:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "id": 1,\n  "method": "parameters.initialization",\n  "params": {}\n}\n')),(0,r.kt)("p",null,"Response:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "id": 1,\n  "result": {\n    "lmt": 0,\n    "us_privacy": "1-Y-",\n    "discovery": {\n      "navigateTo": {\n        "action": "entity",\n        "data": {\n          "entityId": "abc",\n          "entityType": "program",\n          "programType": "movie"\n        },\n        "context": {\n          "source": "voice"\n        }\n      }\n    }\n  }\n}\n'))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"schemas"},"Schemas"),(0,r.kt)("h3",{id:"appinitialization"},"AppInitialization"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"type AppInitialization = {\n  us_privacy?: string                  // The IAB US Privacy string.\n  lmt?: number                         // The IAB limit ad tracking opt out value.\n  discovery?: {\n    navigateTo?: NavigationIntent      // A Firebolt compliant representation of a user intention to navigate to a specific place in an app.\n  }\n  secondScreen?: {\n    launchRequest?: SecondScreenEvent  // An a message notification from a second screen device\n  }\n}\n")),(0,r.kt)("p",null,"See also: "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../schemas/intents#navigationintent"},"NavigationIntent")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../schemas/secondscreen#secondscreenevent"},"SecondScreenEvent"))),(0,r.kt)("hr",null))}u.isMDXComponent=!0}}]);