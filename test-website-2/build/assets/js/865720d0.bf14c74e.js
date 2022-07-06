"use strict";(self.webpackChunktest_website=self.webpackChunktest_website||[]).push([[2668],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var a=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=a.createContext({}),u=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):n(n({},t),e)),r},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(r),m=o,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return r?a.createElement(f,n(n({ref:t},c),{},{components:r})):a.createElement(f,n({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,n=new Array(i);n[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,n[1]=l;for(var u=2;u<i;u++)n[u]=r[u];return a.createElement.apply(null,n)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2440:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>n,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var a=r(7462),o=(r(7294),r(3905));const i={sidebar_position:0,title:"Email Prefill",tags:["Email Prefill"]},n="Email Prefill",l={unversionedId:"firebolt/docs/email-prefill",id:"version-0.6.0/firebolt/docs/email-prefill",title:"Email Prefill",description:"Your users have the ability to save email addresses to their account on the platform. The Email Prefill feature enables your app to request an email address from the user without requiring them to type it out using a remote.",source:"@site/versioned_docs/version-0.6.0/firebolt/docs/email-prefill.md",sourceDirName:"firebolt/docs",slug:"/firebolt/docs/email-prefill",permalink:"/docs/0.6.0/firebolt/docs/email-prefill",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-0.6.0/firebolt/docs/email-prefill.md",tags:[{label:"Email Prefill",permalink:"/docs/0.6.0/tags/email-prefill"}],version:"0.6.0",sidebarPosition:0,frontMatter:{sidebar_position:0,title:"Email Prefill",tags:["Email Prefill"]},sidebar:"tutorialSidebar",previous:{title:"Deep Linking",permalink:"/docs/0.6.0/firebolt/docs/deep-linking"},next:{title:"Listening for Events",permalink:"/docs/0.6.0/firebolt/docs/listening-for-events"}},s={},u=[{value:"Use cases",id:"use-cases",level:2},{value:"How to implement",id:"how-to-implement",level:2}],c={toc:u};function p(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"email-prefill"},"Email Prefill"),(0,o.kt)("p",null,"Your users have the ability to save email addresses to their account on the platform. The Email Prefill feature enables your app to request an email address from the user without requiring them to type it out using a remote."),(0,o.kt)("p",null,"While the UI may differ between distributors, the basic flow is that your app asks for the API to present email addresses to the user, then the user selects an email address, and then the API sends the selection back to the app to be used as demonstrated below:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Call Flow",src:r(132).Z,width:"601",height:"328"})),(0,o.kt)("h2",{id:"use-cases"},"Use cases"),(0,o.kt)("p",null,"Entering email addresses manually using an on-screen keyboard takes a lot of time and can be a frustrating process for many users. With Email Prefill, your users can sign in or register with ease and start enjoying your app almost instantly."),(0,o.kt)("h2",{id:"how-to-implement"},"How to implement"),(0,o.kt)("p",null,"When using the Email Prefill, your user may be prompted to allow your app access to their email address to sign-in or sign-up with your app. This prompt may also allow your user to select an email address from a dropdown or some other interface of saved emails. Once your user makes a selection, your user's selection will return the email address to your app so you can populate the email field for them."),(0,o.kt)("p",null,"When using the Email Prefill, your app must display the selected email to the user and require the user to confirm that they want to use that email to sign in/ sign up."),(0,o.kt)("p",null,"Your user may also choose to manually enter their email address which may be the case if they have not saved the desired address to their account."),(0,o.kt)("p",null,"You can integrate with the Email Prefill API as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import { Keyboard } from '@firebolt-js/sdk'\n\nKeyboard.email('signUp').then( emailAddress => {\n    // at this point your app has access to the email address the user selected\n    console.log('The user entered the following email address: ' + emailAddress)\n}).catch( error => {\n    // The user canceled, or an error occurred, fall back to some other plan, e.g. dismiss the sign up UI\n    console.error('The user decided not to provide an email address')\n})\n")),(0,o.kt)("p",null,"See the ",(0,o.kt)("a",{parentName:"p",href:"/api/keyboard#email"},"Keyboard API")," for more info."))}p.isMDXComponent=!0},132:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/email-prefill-callflow-e4d4ebdaa9661db7fc2d2bdcaace5817.png"}}]);