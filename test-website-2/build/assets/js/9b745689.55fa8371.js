"use strict";(self.webpackChunktest_website=self.webpackChunktest_website||[]).push([[1764],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=i.createContext({}),l=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return i.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),g=r,y=d["".concat(c,".").concat(g)]||d[g]||p[g]||a;return n?i.createElement(y,o(o({ref:t},u),{},{components:n})):i.createElement(y,o({ref:t},u))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<a;l++)o[l]=n[l];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2392:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var i=n(7462),r=(n(7294),n(3905));const a={title:"Voice Guidance"},o="Voice Guidance",s={unversionedId:"firebolt/docs/voice-guidance",id:"firebolt/docs/voice-guidance",title:"Voice Guidance",description:"With accessibility settings, it\u2019s important that your app follows your user\u2019s device settings. When an app starts up it should grab your user\u2019s current device accessibility settings and adapt to system accessibility changes that your user makes.",source:"@site/docs/firebolt/docs/voice-guidance.md",sourceDirName:"firebolt/docs",slug:"/firebolt/docs/voice-guidance",permalink:"/docs/next/firebolt/docs/voice-guidance",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/firebolt/docs/voice-guidance.md",tags:[],version:"current",frontMatter:{title:"Voice Guidance"},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/docs/next/firebolt/docs/quick-start-guide"},next:{title:"XVP Docs",permalink:"/docs/next/category/xvp-docs"}},c={},l=[{value:"Reading device settings",id:"reading-device-settings",level:2},{value:"Adapting to real-time changes",id:"adapting-to-real-time-changes",level:2}],u={toc:l};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"voice-guidance"},"Voice Guidance"),(0,r.kt)("p",null,"With accessibility settings, it\u2019s important that your app follows your user\u2019s device settings. When an app starts up it should grab your user\u2019s current device accessibility settings and adapt to system accessibility changes that your user makes."),(0,r.kt)("h2",{id:"reading-device-settings"},"Reading device settings"),(0,r.kt)("p",null,"In order to access your user's voice guidance settings, your app can call the ",(0,r.kt)("inlineCode",{parentName:"p"},"Accessibility.voiceGuidance()")," method from the ",(0,r.kt)("a",{parentName:"p",href:"/api/accessibility/"},"Accessibility")," API:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import { Accessibility } from '@firebolt-js/sdk'\n\nconst vgSettings = await Accessibility.voiceGuidance()\n\nif (vgSettings.enabled) {\n  // the user has voice guidance enabled\n}\n")),(0,r.kt)("p",null,"Additionally, your app should respect your user's current voice guidance speed preference. The voice guidance speed determines how quickly or slowly the voice reads the on-screen elements. Continuing from the previous example, you can access the ",(0,r.kt)("inlineCode",{parentName:"p"},"speed")," property:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"console.log(vgSettings.speed)\n")),(0,r.kt)("p",null,"See the ",(0,r.kt)("a",{parentName:"p",href:"/api/accessibility/#voiceguidance"},"Voice Guidance")," API for more info on voice guidance properties."),(0,r.kt)("h2",{id:"adapting-to-real-time-changes"},"Adapting to real-time changes"),(0,r.kt)("p",null,"While your app is running, or even while your app is playing content, your user may change the voice guidance settings on their device. Your app should promptly respond to this change by listening to all ",(0,r.kt)("inlineCode",{parentName:"p"},"voiceGuidanceSettingsChanged")," events:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import { Accessibility } from '@firebolt-js/sdk'\n\nAccessibility.listen(`voiceGuidanceSettingsChanged`, vgSettings => {\n  // vgSettings is the same structure returned from `voiceGuidance()`\n  if (vgSettings.enabled) {\n    // update your app's voice guidance speed\n    console.log(vgSettings.speed)\n  }\n  else {\n    // turn off your app's voice guidance\n  }\n})\n")))}p.isMDXComponent=!0}}]);