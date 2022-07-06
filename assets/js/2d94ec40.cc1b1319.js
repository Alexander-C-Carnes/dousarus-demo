"use strict";(self.webpackChunktest_website=self.webpackChunktest_website||[]).push([[5251],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var r=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var i=r.createContext({}),l=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},c=function(e){var t=l(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(a),h=o,f=d["".concat(i,".").concat(h)]||d[h]||u[h]||n;return a?r.createElement(f,p(p({ref:t},c),{},{components:a})):r.createElement(f,p({ref:t},c))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,p=new Array(n);p[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,p[1]=s;for(var l=2;l<n;l++)p[l]=a[l];return r.createElement.apply(null,p)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},4643:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>p,default:()=>u,frontMatter:()=>n,metadata:()=>s,toc:()=>l});var r=a(7462),o=(a(7294),a(3905));const n={sidebar_position:0,title:"Parental Controls"},p="Parental Controls",s={unversionedId:"firebolt/docs/parental-controls",id:"version-0.7.0/firebolt/docs/parental-controls",title:"Parental Controls",description:"Parental controls are the settings that enable your users to block specific actions from being taken without first verifying that they are approved to do so. For example, this allows an account owner to lock content such as specific ratings, titles, channels, and even entire apps. Another core function of parental controls is the ability to lock purchases made on the device.",source:"@site/versioned_docs/version-0.7.0/firebolt/docs/parental-controls.md",sourceDirName:"firebolt/docs",slug:"/firebolt/docs/parental-controls",permalink:"/docs/0.7.0/firebolt/docs/parental-controls",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-0.7.0/firebolt/docs/parental-controls.md",tags:[],version:"0.7.0",sidebarPosition:0,frontMatter:{sidebar_position:0,title:"Parental Controls"},sidebar:"tutorialSidebar",previous:{title:"Open GMRSS Specification",permalink:"/docs/0.7.0/firebolt/docs/open-gmrss-format"},next:{title:"Profile Flags",permalink:"/docs/0.7.0/firebolt/docs/profile-flags"}},i={},l=[{value:"Use Cases",id:"use-cases",level:2},{value:"Content Ratings Approval",id:"content-ratings-approval",level:2},{value:"Platform-provided Content Ratings Approval",id:"platform-provided-content-ratings-approval",level:3},{value:"App-provided Content Ratings Approval",id:"app-provided-content-ratings-approval",level:3},{value:"Purchase Approval",id:"purchase-approval",level:2},{value:"Platform-provided Purchase Approval",id:"platform-provided-purchase-approval",level:3},{value:"App-provided Purchase Approval",id:"app-provided-purchase-approval",level:3},{value:"App-provided Approval Considerations",id:"app-provided-approval-considerations",level:2}],c={toc:l};function u(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"parental-controls"},"Parental Controls"),(0,o.kt)("p",null,"Parental controls are the settings that enable your users to block specific actions from being taken without first verifying that they are approved to do so. For example, this allows an account owner to lock content such as specific ratings, titles, channels, and even entire apps. Another core function of parental controls is the ability to lock purchases made on the device.\nImplementing parental controls within your app will create a sense of security for those sharing devices with children, roommates, or guests. Parents want to know their children are not in danger of watching mature content or making dozens of unauthorized in-app purchases. In addition to saving your users and your support team from dealing with unnecessary cancellations and refunds, parental controls create a safe, secure, and family-friendly experience which many households consider a modern-day requirement."),(0,o.kt)("p",null,"It's important that your app provides the ability only to allow authorized users to make purchases or watch mature content.."),(0,o.kt)("h2",{id:"use-cases"},"Use Cases"),(0,o.kt)("p",null,"There are two parental controls use cases that your app ",(0,o.kt)("strong",{parentName:"p"},"must")," provide:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#content-ratings-approval"},"Content Ratings Approval")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#purchase-approval"},"Purchase Approval"))),(0,o.kt)("p",null,"Each of these features is offered by the platform as an easy one-line API integration. Your app may also implement these features from scratch if you have the infrastructure to do so. Your app may mix and match its own approval features with the platform-provided features as needed to ensure that both types of approvals are available."),(0,o.kt)("p",null,"Your app ",(0,o.kt)("strong",{parentName:"p"},"must")," also ensure that a profile can't access content through a deep link. Deep-linking offers the user navigation that allows them to navigate an item and start playback immediately; your app should check what content rating privileges/purchasing privileges the user has available less you create a backdoor for precocious kids. See ",(0,o.kt)("a",{parentName:"p",href:"/docs/0.7.0/firebolt/docs/deep-linking"},"Deep Linking")," for more info."),(0,o.kt)("h2",{id:"content-ratings-approval"},"Content Ratings Approval"),(0,o.kt)("p",null,"See either the ",(0,o.kt)("a",{parentName:"p",href:"platform-provided-content-ratings-approval"},"Platform-provided")," or ",(0,o.kt)("a",{parentName:"p",href:"app-provided-content-ratings-approval"},"App-provided")," solutions below."),(0,o.kt)("h3",{id:"platform-provided-content-ratings-approval"},"Platform-provided Content Ratings Approval"),(0,o.kt)("p",null,"Integrating with the platform's Content Ratings Approval feature requires calling the ",(0,o.kt)("a",{parentName:"p",href:"/api/profile/#approvecontentrating"},"Profile.approveContentRating() API"),"."),(0,o.kt)("p",null,"Before initiating ",(0,o.kt)("a",{parentName:"p",href:"./app-rating-guideliens.md"},"mature content"),", your app ",(0,o.kt)("strong",{parentName:"p"},"must")," ensure that the current user has approval to view it."),(0,o.kt)("p",null,"To do this, simply call the ",(0,o.kt)("inlineCode",{parentName:"p"},"Profile.approveContentRating()")," method:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import { Profile } from '@firebolt-js/sdk'\nProfile.approveContentRating()\n    .then(allow => {\n        if (allow) {\n            // the user successfully passed the approval challenge\n            // and can now view whatever content they're trying to access\n        }\n        else {\n            // the user did not successfully pass the challenge\n            // and should not be allowed to view the selected content\n        }\n    }).catch(error => {\n        // something went wrong, for example a timeout on the challenge UX\n        // the user MUST NOT be allowed access in this case\n    })\n")),(0,o.kt)("p",null,"When called, the platform will present a UX to challenge the current user, for example a prompt for a secret PIN. The platform may also decide to cache a successful challenge for a short amount of time, and skip the UX. In either case, your app's call will resolve to a ",(0,o.kt)("inlineCode",{parentName:"p"},"boolean")," dictating whether or not the challenge was passed."),(0,o.kt)("h3",{id:"app-provided-content-ratings-approval"},"App-provided Content Ratings Approval"),(0,o.kt)("p",null,"If your app does not provide a way for your users to prevent access to mature content, then the entire app itself will be gated by the platform's aggregated content and app discovery UX. To avoid this, consider using the ",(0,o.kt)("a",{parentName:"p",href:"platform-provided-content-ratings-approval"},"Platform-provided Content Ratings Approval")," feature."),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"#app-provided-approval-considerations"},"App-provided Approval Considerations"),", for additional details on implementing your own purchase approval feature."),(0,o.kt)("h2",{id:"purchase-approval"},"Purchase Approval"),(0,o.kt)("p",null,"The news is rife with horror stories where parents find that their bills are astronomical because unauthorized users, usually their children, have been allowed to make purchases without restrictions."),(0,o.kt)("p",null,"It's important that your app implement a method where only authorized users are allowed to make purchases."),(0,o.kt)("p",null,"See either the ",(0,o.kt)("a",{parentName:"p",href:"platform-provided-purchase-approval"},"Platform-provided")," or ",(0,o.kt)("a",{parentName:"p",href:"app-provided-purchase-approval"},"App-provided")," solutions below."),(0,o.kt)("h3",{id:"platform-provided-purchase-approval"},"Platform-provided Purchase Approval"),(0,o.kt)("p",null,"Integrating with the platform's Purchase Approval feature requires calling the ",(0,o.kt)("a",{parentName:"p",href:"/api/profile/#approvepurchase"},"Profile.approvePurchase() API"),"."),(0,o.kt)("p",null,"Before initiating any sort of financial transaction, your app ",(0,o.kt)("strong",{parentName:"p"},"must")," ensure that the current user has approval to purchase."),(0,o.kt)("p",null,"To do this, simply call the ",(0,o.kt)("inlineCode",{parentName:"p"},"Profile.approveContentRating()")," method:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import { Profile } from '@firebolt-js/sdk'\n\nProfile.approvePurchase()\n    .then(allow => {\n        if (allow) {\n            // the user successfully passed the approval challenge\n            // and can now purchase whatever content they're trying to access\n        }\n        else {\n            // the user did not successfully pass the challenge\n            // and should not be allowed to purchase the selected content\n        }\n    }).catch(error => {\n        // something went wrong, for example a timeout on the challenge UX\n        // the user MUST NOT be allowed access in this case\n    })\n")),(0,o.kt)("p",null,"When called, the platform will present a UX to challenge the current user, for example a prompt for a secret PIN. The platform may also decide to cache a successful challenge for a short amount of time, and skip the UX. In either case, your app's call will resolve to a ",(0,o.kt)("inlineCode",{parentName:"p"},"boolean")," dictating whether or not the challenge was passed."),(0,o.kt)("h3",{id:"app-provided-purchase-approval"},"App-provided Purchase Approval"),(0,o.kt)("p",null,"If your app does not provide a way for your users to prevent unapproved purchases, then the entire app itself will be gated by the platform's aggregated content and app discovery UX. To avoid this, consider using the ",(0,o.kt)("a",{parentName:"p",href:"platform-provided-purchase-approval"},"Platform-provided Purchase Approval")," feature."),(0,o.kt)("p",null,"What constitutes a user who has purchasing authority can be flexible. When your app creates a profile, it can be for guests, roommates, or whatever your app dreams up."),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"#app-provided-approval-considerations"},"App-provided Approval Considerations"),", for additional details on implementing your own purchase approval feature."),(0,o.kt)("h2",{id:"app-provided-approval-considerations"},"App-provided Approval Considerations"),(0,o.kt)("p",null,'In order to provide approval features with your own infrastructure, your app will likely need to provide a profile management feature and establish, in some way, profile settings that indicate what a user can do. The way your app does this is up to you. It may be that a parent sets up a pin access code that\'s associated to their profile; it may be that the parent creates a "Kids Profile," in which your app then knows it has certain restrictions. The back-end method will be the same.'),(0,o.kt)("p",null,'One thing to consider is how these approvals "flow" through your app. If, for example, your app uses a pin to verify if a user can access content, then your app should consider how long that pin (or whatever process your app uses) is valid.'),(0,o.kt)("p",null,"For instance, if a parent logs in and starts to watch a mature program and gets bored and then goes to another piece of adult content, your app needs to decide if it re-accesses their eligibility or flow between content freely. In addition, if that parent steps away, maybe they go to bed or run an errand, then your app should also consider how a user should re-access their eligibility for making purchases and what content they can view."))}u.isMDXComponent=!0}}]);