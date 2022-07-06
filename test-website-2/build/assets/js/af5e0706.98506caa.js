"use strict";(self.webpackChunktest_website=self.webpackChunktest_website||[]).push([[9482],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),h=c(n),d=o,f=h["".concat(l,".").concat(d)]||h[d]||u[d]||a;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},4282:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_position:0,title:"Listening for Property Changes"},i="Listening for Property changes",s={unversionedId:"firebolt/docs/listening-for-property-changes",id:"version-0.7.0/firebolt/docs/listening-for-property-changes",title:"Listening for Property Changes",description:"With Firebolt\xae you can get and listen for property changes on the device. This includes both the hardware and system properties such as audio, current accessibility settings, and all the mutable properties of a device.",source:"@site/versioned_docs/version-0.7.0/firebolt/docs/listening-for-property-changes.md",sourceDirName:"firebolt/docs",slug:"/firebolt/docs/listening-for-property-changes",permalink:"/docs/0.7.0/firebolt/docs/listening-for-property-changes",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-0.7.0/firebolt/docs/listening-for-property-changes.md",tags:[],version:"0.7.0",sidebarPosition:0,frontMatter:{sidebar_position:0,title:"Listening for Property Changes"},sidebar:"tutorialSidebar",previous:{title:"Listening for Events",permalink:"/docs/0.7.0/firebolt/docs/listening-for-events"},next:{title:"Metadata Ingegration",permalink:"/docs/0.7.0/firebolt/docs/metadata-integration"}},l={},c=[{value:"Listening for a Property to Change",id:"listening-for-a-property-to-change",level:2},{value:"Listening for a change in the device&#39;s network connectivity status",id:"listening-for-a-change-in-the-devices-network-connectivity-status",level:3},{value:"Related Information",id:"related-information",level:2}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"listening-for-property-changes"},"Listening for Property changes"),(0,o.kt)("p",null,"With Firebolt\xae you can get and listen for property changes on the device. This includes both the hardware and system properties such as audio, current accessibility settings, and all the mutable properties of a device."),(0,o.kt)("p",null,"Each Firebolt\xae property comes with the following abilities:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Get the property at a specific time.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},'Listen for when that property changes, such as when a user changes their device name from \\"Living Room TV\\" to \\"Bedroom TV\\".'))),(0,o.kt)("p",null,"This is useful in instances where you want to:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Retrieve a specific device setting")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"You can retrieve the current state of a property. For instance, using the Accessibility module you can get back the user's closed captions settings.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Checking device property states")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"You can check the current state of a property. For instance, using ",(0,o.kt)("a",{parentName:"p",href:"/api/device/"},"the Device module")," you retrieve how the device is connected to the internet or if it's connected at all.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Receiving property state updates when they change")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"You can listen for when a property changes such as when a user changes a device setting or adjusts their profile."))),(0,o.kt)("h2",{id:"listening-for-a-property-to-change"},"Listening for a Property to Change"),(0,o.kt)("p",null,"You can receive property state updates when a change occurs in a specific property. To create a property listener for a specific property and have it do something or return something is the same syntax across each Firebolt\xae module. To listen for a property, change the syntax to:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"<Module>.<property>( value => {\n  // this code gets the new value when it changes\n})\n")),(0,o.kt)("h3",{id:"listening-for-a-change-in-the-devices-network-connectivity-status"},"Listening for a change in the device's network connectivity status"),(0,o.kt)("p",null,"If you wanted your app to receive a notification that the network value changed on the device, (e.g., react to when a user is no longer connected to the internet) it would look like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"Device.network( value => {\n  console.log(value)\n})\n")),(0,o.kt)("p",null,"In the above example, the new value is printed to a console log."),(0,o.kt)("p",null,"If you were to run the above, it would look something like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  {\n    "state":"connected",\n    "type":"WIFI"\n}\n')),(0,o.kt)("p",null,"To see the current list of return values for the network method based on the device go to ",(0,o.kt)("a",{parentName:"p",href:"/api/device/#network"},"Device.network")),(0,o.kt)("h2",{id:"related-information"},"Related Information"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Dependencies"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Firebolt\xae 0.6.0 and Higher")))))}u.isMDXComponent=!0}}]);