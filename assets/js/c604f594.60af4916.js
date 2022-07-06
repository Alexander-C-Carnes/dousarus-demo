"use strict";(self.webpackChunktest_website=self.webpackChunktest_website||[]).push([[4292],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>u});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=p(a),u=o,h=m["".concat(s,".").concat(u)]||m[u]||c[u]||r;return a?n.createElement(h,i(i({ref:t},d),{},{components:a})):n.createElement(h,i({ref:t},d))}));function u(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},4662:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var n=a(7462),o=(a(7294),a(3905));const r={sidebar_position:0,title:"Voice Commands"},i="Voice Commands",l={unversionedId:"firebolt/docs/voice-commands",id:"version-1.0.0/firebolt/docs/voice-commands",title:"Voice Commands",description:"Voice commands allow your users to press a button and speak to their remotes and go directly to an experience they want to find. Our platform includes built-in voice functions which enable your users to launch apps and control media playback. Additionally, there are a wide range of other voice commands that give more flexibility to your users. These require a level of integration if you wish to take advantage of their benefits.",source:"@site/versioned_docs/version-1.0.0/firebolt/docs/voice-commands.md",sourceDirName:"firebolt/docs",slug:"/firebolt/docs/voice-commands",permalink:"/docs/firebolt/docs/voice-commands",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-1.0.0/firebolt/docs/voice-commands.md",tags:[],version:"1.0.0",sidebarPosition:0,frontMatter:{sidebar_position:0,title:"Voice Commands"},sidebar:"tutorialSidebar",previous:{title:"Sign in and sign up",permalink:"/docs/firebolt/docs/sign-in-and-sign-up"},next:{title:"Ad Content Standards",permalink:"/docs/firebolt/docs/ad-content-standards"}},s={},p=[{value:"Use cases",id:"use-cases",level:2},{value:"How to implement",id:"how-to-implement",level:2}],d={toc:p};function c(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"voice-commands"},"Voice Commands"),(0,o.kt)("p",null,"Voice commands allow your users to press a button and speak to their remotes and go directly to an experience they want to find. Our platform includes built-in voice functions which enable your users to launch apps and control media playback. Additionally, there are a wide range of other voice commands that give more flexibility to your users. These require a level of integration if you wish to take advantage of their benefits."),(0,o.kt)("h2",{id:"use-cases"},"Use cases"),(0,o.kt)("p",null,"The voice remote provides a new level of independence to your users. This benefits all users, and is especially valuable to those which have limited mobility, dexterity, or a visual disability. By using simple voice commands, customers can change channels, search for shows, enable closed captioning and more."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Launching the App with voice")),(0,o.kt)("p",null,"As the world of smart devices grows, allowing your user to open your App with their voice provides an easy way for them to begin engaging with your content. It also offers an option for those who don't have immediate or direct access to their device - maybe they're dealing with a gaggle of kids at a birthday, or they're unable to handle the device physically due to an injury. Whatever the reason providing another option offers needed flexibility in how users get to your content."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Start playing a title within your app")),(0,o.kt)("p",null,'Allowing your user to start playing a title with their voice removes a layer of navigation, streamlining the experience. It also improves overall accessibility. For example, someone who is visually impaired or a child learning to read can say, "Watch Pup Patrol on ',(0,o.kt)("inlineCode",{parentName:"p"},"<Your App Name>"),'" and begin their experience with ease.'),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Control Media Playback with voice")),(0,o.kt)("p",null,"Controlling media playback using voice adds an additional flexibility to your app allowing users who may be pre-disposed or unable to reach the device an easy way to stop, pause, play, rewind, and fast forward the content."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Go to series/movie page within your app")),(0,o.kt)("p",null,'Another example is an over-worked couple desiring an in-home date night. By including voice capabilities, the couple can simply say "Go to Love Island on ',(0,o.kt)("inlineCode",{parentName:"p"},"<Your App Name>"),'" and skip numerous navigational steps. This allows them to get home, press a single button, say a command, and then start watching instantly. Integrating voice commands allow you to reach a larger demographic and serve users faster and more efficiently than before.'),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Search for ",(0,o.kt)("inlineCode",{parentName:"strong"},"<search query>")," within your app")),(0,o.kt)("p",null,"Adding a search voice command is a great way to allow users to take advantage of your content catalog. It adds a layer of accessibility and delight. A fun example might be saying \u201cComedies on ",(0,o.kt)("inlineCode",{parentName:"p"},"<Your App Name>"),"\u201d and providing a list of all comedy-related content."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Go to a specific navigation page within your app")),(0,o.kt)("p",null,'Another useful reason to use voice is to make it easy to navigate the pages of your app. "',(0,o.kt)("inlineCode",{parentName:"p"},"<Your App Name>"),' settings" or \u201c',(0,o.kt)("inlineCode",{parentName:"p"},"<Your App Name>")," my account\u201d as an example. It provides a valuable depth to what the user can do using the voice functionality. It isn't just for playing movies; it's for so much more."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Voice Feature"),(0,o.kt)("th",{parentName:"tr",align:null},"Voice Command Example"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Launch App"),(0,o.kt)("td",{parentName:"tr",align:null},'"Launch ',(0,o.kt)("inlineCode",{parentName:"td"},"<Your App Name>"),'"')),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Control media playback"),(0,o.kt)("td",{parentName:"tr",align:null},'\u201cPause\u201d\u201cPlay\u201d\u201cRewind\u201d\u201cFast forward"')),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Go to series/movie page within your app"),(0,o.kt)("td",{parentName:"tr",align:null},"\u201cGo to ",(0,o.kt)("inlineCode",{parentName:"td"},"<series>"),"\u201d\u201cShow me ",(0,o.kt)("inlineCode",{parentName:"td"},"<movie>"),"\u201d")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Start playing a title within your app"),(0,o.kt)("td",{parentName:"tr",align:null},"\u201cPlay ",(0,o.kt)("inlineCode",{parentName:"td"},"<movie>"),'"\u201cPlay the pilot episode of ',(0,o.kt)("inlineCode",{parentName:"td"},"<series>"),"\u201d")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Search for ",(0,o.kt)("inlineCode",{parentName:"td"},"<search query>")," within your app"),(0,o.kt)("td",{parentName:"tr",align:null},"\u201cComedies on ",(0,o.kt)("inlineCode",{parentName:"td"},"<Your App Name>"),"\u201d\u201cDrake on ",(0,o.kt)("inlineCode",{parentName:"td"},"<Your App Name>"),"\u201d")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Go to a specific navigation page within your app"),(0,o.kt)("td",{parentName:"tr",align:null},"\u201c",(0,o.kt)("inlineCode",{parentName:"td"},"<Your App Name>")," settings\u201d")))),(0,o.kt)("h2",{id:"how-to-implement"},"How to implement"),(0,o.kt)("p",null,"Voice commands will is presented to your app via three different platform features."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Lifecycle management"),(0,o.kt)("li",{parentName:"ul"},"Responding to remote keys"),(0,o.kt)("li",{parentName:"ul"},"Deep linking")),(0,o.kt)("p",null,"To see how each platform feature enables which functionality can be seen in the table below."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Voice Feature"),(0,o.kt)("th",{parentName:"tr",align:null},"Platform Feature"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Launch App"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/firebolt/docs/lifecycle-management"},"Lifecycle Management"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Control media playback"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/firebolt/docs/remote-specifications#responding-to-keys"},"Responding to Remote Keys"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Go to series/movie page within your app"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/firebolt/docs/deep-linking"},"Deep Linking"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Start playing a title within your app"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/firebolt/docs/deep-linking"},"Deep Linking"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Search for ",(0,o.kt)("inlineCode",{parentName:"td"},"<search query>")," within your app"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/firebolt/docs/deep-linking"},"Deep Linking"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Go to a specific navigation page within your app"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/firebolt/docs/deep-linking"},"Deep Linking"))))),(0,o.kt)("p",null,"The platform will map these various types of Voice Commands to existing platform APIs to make integration more seamless, e.g. media playback Voice Commands are mapped to the corresponding remote key press values."),(0,o.kt)("p",null,"Your app will need to have a working ",(0,o.kt)("a",{parentName:"p",href:"/docs/firebolt/docs/metadata-integration"},"Metadata Integration")," in order for many Voice Commands to work."))}c.isMDXComponent=!0}}]);