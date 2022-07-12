"use strict";(self.webpackChunkdeploy_test=self.webpackChunkdeploy_test||[]).push([[8154],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,p=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),u=s(n),m=l,h=u["".concat(p,".").concat(m)]||u[m]||c[m]||o;return n?a.createElement(h,i(i({ref:t},d),{},{components:n})):a.createElement(h,i({ref:t},d))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,i=new Array(o);i[0]=u;var r={};for(var p in t)hasOwnProperty.call(t,p)&&(r[p]=t[p]);r.originalType=e,r.mdxType="string"==typeof e?e:l,i[1]=r;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},37217:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>r,toc:()=>s});var a=n(87462),l=(n(67294),n(3905));const o={title:"Hello World Guide",sidebar_position:2},i="Welcome",r={unversionedId:"firebolt/getting-started/hello-world-guide",id:"firebolt/getting-started/hello-world-guide",title:"Hello World Guide",description:"In this practical guide, you'll learn how to get up and running so you can build a simple single-page app using Firebolt\xae. It will show you fundamentals like importing modules and how to use the Device and Lifecycle modules.",source:"@site/docs/firebolt/getting-started/hello-world-guide.md",sourceDirName:"firebolt/getting-started",slug:"/firebolt/getting-started/hello-world-guide",permalink:"/dousarus-demo/docs/next/firebolt/getting-started/hello-world-guide",draft:!1,editUrl:"https://github.com/Alexander-C-Carnes/dousarus-demo/tree/development-branch-RDK/my-website/docs/firebolt/getting-started/hello-world-guide.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Hello World Guide",sidebar_position:2},sidebar:"fireboltDocs",previous:{title:"Quickstart Guide",permalink:"/dousarus-demo/docs/next/firebolt/getting-started/quick-start-guide"},next:{title:"Accessibility",permalink:"/dousarus-demo/docs/next/category/accessibility"}},p={},s=[{value:"What you&#39;ll need",id:"what-youll-need",level:2},{value:"What you&#39;ll learn",id:"what-youll-learn",level:2},{value:"What you&#39;ll do",id:"what-youll-do",level:2},{value:"Installing for Windows",id:"installing-for-windows",level:2},{value:"Step 1:",id:"step-1",level:3},{value:"Step 2: Install Node.js and NPM from the browser:",id:"step-2-install-nodejs-and-npm-from-the-browser",level:3},{value:"Step 3: Verify Installation:",id:"step-3-verify-installation",level:3},{value:"Installing for Mac",id:"installing-for-mac",level:2},{value:"Step 1:",id:"step-1-1",level:3},{value:"Step 2:",id:"step-2",level:3},{value:"Step 3: Verify Installation:",id:"step-3-verify-installation-1",level:3},{value:"Installing for Linux",id:"installing-for-linux",level:2},{value:"Step 1 - Clone the Hello World Github repo",id:"step-1---clone-the-hello-world-github-repo",level:3},{value:"Step 2: Install the Firebolt\xae SDK",id:"step-2-install-the-firebolt-sdk",level:3},{value:"Step 3: Import the Device and Lifecycle Modules from Firebolt\xae",id:"step-3-import-the-device-and-lifecycle-modules-from-firebolt",level:3},{value:"Step 4: Add some functionality to your app",id:"step-4-add-some-functionality-to-your-app",level:3},{value:"Step 4 - Listening for events",id:"step-4---listening-for-events",level:3},{value:"Using the Firebolt\xae Mock Application",id:"using-the-firebolt-mock-application",level:2},{value:"Connect Hello World with Mock Firebolt",id:"connect-hello-world-with-mock-firebolt",level:3},{value:"Example: Changing the distributor from <em>Company</em> to <em>Videos R US</em>",id:"example-changing-the-distributor-from-company-to-videos-r-us",level:3},{value:"Hello World Examples - Let&#39;s play",id:"hello-world-examples---lets-play",level:2}],d={toc:s};function c(e){let{components:t,...o}=e;return(0,l.kt)("wrapper",(0,a.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"welcome"},"Welcome"),(0,l.kt)("p",null,"In this practical guide, you'll learn how to get up and running so you can build a simple single-page app using Firebolt\xae. It will show you fundamentals like importing modules and how to use the Device and Lifecycle modules."),(0,l.kt)("p",null,"The ",(0,l.kt)("em",{parentName:"p"},'\\"Hello World\\"')," guide is designed with the following assumptions:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"You have some experience with the basics of programming (building apps, working with APIs, etc) and have some experience working with the JavaScript programming language. This guide does not explain object-oriented programming or the JavaScript language.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},'You know what a "Single-Page App" is, and how they work.')),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"You understand JavaScript runtime tools like Node and NPM.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"You understand how to install and use JavaScript packages on your local machine."))),(0,l.kt)("h2",{id:"what-youll-need"},"What you'll need"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"A computer running Windows or Linux, or a Mac running macOS.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Internet access or an alternative way of loading the latest Firebolt\xae SDK and Lightning\u2122 JavaScript framework onto your computer.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Install Lightning\u2122. No prior knowledge of Lightning\u2122 is required, but it is a required dependency for this project."),(0,l.kt)("ol",{parentName:"li"},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Using your machine's command-line interface (CLI), input the command:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},"npm install -g @lightningjs/cli\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"For more detail on installing Lightning\u2122 go here:"),(0,l.kt)("blockquote",{parentName:"li"},(0,l.kt)("p",{parentName:"blockquote"}," ",(0,l.kt)("a",{parentName:"p",href:"https://lightningjs.io/docs/#/getting-started/index"},"https://lightningjs.io/docs/#/getting-started/index"))))))),(0,l.kt)("h2",{id:"what-youll-learn"},"What you'll learn"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"How to import Firebolt\xae modules.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"How to register your Firebolt\xae events for the Lifecycle & Device modules."))),(0,l.kt)("h2",{id:"what-youll-do"},"What you'll do"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Install the necessary dependencies for this tutorial.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Create a blank project using Lightning\u2122, which will allow you to use the Firebolt\xae SDK.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Install the Firebolt\xae SDK.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Install all the dependencies you'll need to use the Firebolt\xae SDK.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Generate and build your app in a browser.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Explore and view the app you've built."))),(0,l.kt)("h1",{id:"app-overview"},"App Overview"),(0,l.kt)("p",null,"After you successfully install Lighting Studio, get Firebolt\xae up and running, and create your app, at the end of all that your finished app should look something like this:"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Hello World - End State Video",src:n(50369).Z,width:"1280",height:"720"})),(0,l.kt)("h1",{id:"installing-node"},"Installing Node"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"This is not required if you already have Node.")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},'\\"',(0,l.kt)("strong",{parentName:"p"},"Node.js")," is an ",(0,l.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Open-source_software"},"open-source"),", ",(0,l.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Cross-platform"},"cross-platform"),", ",(0,l.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Front_end_and_back_end"},"back-end")," ",(0,l.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/JavaScript"},"JavaScript")," ",(0,l.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Runtime_system"},"runtime environment")," that runs on the ",(0,l.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/V8_(JavaScript_engine)"},"V8 engine")," and executes JavaScript code outside a ",(0,l.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Web_browser"},"web browser"),". Node.js lets developers use JavaScript to write command line tools and for ",(0,l.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Server-side_scripting"},"server-side scripting"),"---running scripts server-side to produce ",(0,l.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Dynamic_web_page"},"dynamic web page"),' content before the page is sent to the user\'s web browser. Consequently, Node.js represents a \\"JavaScript everywhere\\" paradigm, unifying ',(0,l.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Web_application"},"web-application"),' development around a single programming language, rather than different languages for server-side and client-side scripts.\\"\\\n',(0,l.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Node.js"},"https://en.wikipedia.org/wiki/Node.js"))),(0,l.kt)("h2",{id:"installing-for-windows"},"Installing for Windows"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Prerequisites")),(0,l.kt)("p",null,"It's assumed that you have the ability to download and install software on your machine as well as have access to a command-line interface (CLI) tool such as Windows' command line or PowerShell."),(0,l.kt)("h3",{id:"step-1"},"Step 1:"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Download Node.js Installer"),": In a web browser, put in the URL ",(0,l.kt)("a",{parentName:"p",href:"https://nodejs.org/en/download/"},"https://nodejs.org/en/download/"),". Select the ",(0,l.kt)("strong",{parentName:"p"},"Windows Installer")," button to download the latest default version. The Node.js installer includes the NPM package manager."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Windows Installer Option",src:n(54566).Z,width:"3584",height:"1688"})),(0,l.kt)("h3",{id:"step-2-install-nodejs-and-npm-from-the-browser"},"Step 2: Install Node.js and NPM from the browser:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Once the installer finishes downloading, launch it. Go to the location where you have saved the file and double-click it to launch.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"The system will ask if you want to run the software -- select ",(0,l.kt)("strong",{parentName:"p"},"Run"),".")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"You will be welcomed to the Node.js Setup Wizard -- select ",(0,l.kt)("strong",{parentName:"p"},"Next"),".")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"On the next screen, review the license agreement -- select ",(0,l.kt)("strong",{parentName:"p"},"Next")," if you agree to the terms and install the software.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"The installer will prompt you for the installation location. Leave the default location, unless you have a specific need to install it somewhere else -- then select ",(0,l.kt)("strong",{parentName:"p"},"Next"),".")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"The install wizard will let you select components to include or remove from the installation. Again, unless you have a specific need, accept the defaults by selecting ",(0,l.kt)("strong",{parentName:"p"},"Next"),".")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Finally, select the ",(0,l.kt)("strong",{parentName:"p"},"Install")," button to run the installer. When it finishes, select ",(0,l.kt)("strong",{parentName:"p"},"Finish"),"."))),(0,l.kt)("h3",{id:"step-3-verify-installation"},"Step 3: Verify Installation:"),(0,l.kt)("p",null,"Open PowerShell or your preferred command-line tool and enter the following:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"node -v\n")),(0,l.kt)("p",null,"The system should display the Node.js version installed on your system. You can do the same for NPM:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"npm -v\n")),(0,l.kt)("h2",{id:"installing-for-mac"},"Installing for Mac"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Prerequisites")),(0,l.kt)("p",null,"Node on Mac can be installed directly from Node.js or it can be installed with tools like ",(0,l.kt)("a",{parentName:"p",href:"https://brew.sh/"},"Homebrew"),". For this installation, we're going to keep it as simple as possible and go directly to Node.js. However, you may use a package manager tool such as Homebrew if you prefer."),(0,l.kt)("p",null,"It's assumed that you have the ability to download and install software on your machine as well as have access to a command-line interface (CLI) tool such as Mac's terminal tool."),(0,l.kt)("h3",{id:"step-1-1"},"Step 1:"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Download Node.js Installer"),": In a web browser, go to ",(0,l.kt)("a",{parentName:"p",href:"https://nodejs.org/en/download/"},"https://nodejs.org/en/download/"),". Select the ",(0,l.kt)("strong",{parentName:"p"},"Mac Installer")," button to download the latest default version. The Node.js installer includes the NPM package manager."),(0,l.kt)("h3",{id:"step-2"},"Step 2:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Once the installer finishes downloading, launch it. Open the location where you have saved the file and double-click it to launch.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"You will be introduced to the Node.js Setup Wizard -- select ",(0,l.kt)("strong",{parentName:"p"},"Continue"),".")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"On the next screen, review the license agreement - select ",(0,l.kt)("strong",{parentName:"p"},"Agree")," if you agree to the terms and install the software.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"The installer will prompt you for the installation location. Leave the default location, unless you have a specific need to install it somewhere else -- then select ",(0,l.kt)("strong",{parentName:"p"},"Install"),"."),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"At this point you can select ",(0,l.kt)("strong",{parentName:"li"},"Customize")," if you'd like to select components to include or remove from the installation. Again, unless you have a specific need, accept the defaults by selecting ",(0,l.kt)("strong",{parentName:"li"},"Install"),"."))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"When it finishes, select ",(0,l.kt)("strong",{parentName:"p"},"Finish"),"."))),(0,l.kt)("h3",{id:"step-3-verify-installation-1"},"Step 3: Verify Installation:"),(0,l.kt)("p",null,"Open Terminal or your preferred command-line tool and enter the following:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"node -v  \n")),(0,l.kt)("p",null,"The system should display the Node.js version installed on your system. You can do the same for NPM:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"npm -v\n")),(0,l.kt)("h2",{id:"installing-for-linux"},"Installing for Linux"),(0,l.kt)("p",null,'Linux has many options - here is our favorite "How-to guide" on installing Node.js for your Linux machine. ',(0,l.kt)("a",{parentName:"p",href:"https://upstack.co/knowledge/how-to-install-node-js-on-linux"},"https://upstack.co/knowledge/how-to-install-node-js-on-linux")),(0,l.kt)("h1",{id:"getting-started---install-lightning--firebolt"},"Getting Started - Install Lightning & Firebolt"),(0,l.kt)("h3",{id:"step-1---clone-the-hello-world-github-repo"},"Step 1 - Clone the Hello World Github repo"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Using any method you prefer, ",(0,l.kt)("inlineCode",{parentName:"p"},"git clone")," or the Github desktop client, or a third way use the URL ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/rdkcentral/firebolt-hello-world"},"https://github.com/rdkcentral/firebolt-hello-world")," and clone the ",(0,l.kt)("em",{parentName:"p"},"Hello World")," repo."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},"git clone https://github.com/rdkcentral/firebolt-hello-world.git\n")),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("img",{alt:"Cloning hello world",src:n(43965).Z,width:"3584",height:"1684"}))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Open your command-line interface (CLI) tool and change your directory to the repo you just cloned."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},"cd firebolt-hello-world/pt1-firebolt_hello_world-start\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},'With CLI in the \\"hello_world\\" directory run the command'),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},"npm install\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"This will install the ",(0,l.kt)("inlineCode",{parentName:"p"},"package.json")," file and any other dependencies."),(0,l.kt)("ol",{parentName:"li"},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"Optional:")," Depending on your machine you may need to install what is called ",(0,l.kt)("inlineCode",{parentName:"li"},"pug")," which is an HTML pre-processor. If you're curious and want to learn more go here ",(0,l.kt)("a",{parentName:"li",href:"https://www.sitepoint.com/a-beginners-guide-to-pug"},"https://www.sitepoint.com/a-beginners-guide-to-pug"),". In the meantime run the command ",(0,l.kt)("inlineCode",{parentName:"li"},"npm install pug"),". If step 4 continues to show up as an error or you see something like ",(0,l.kt)("inlineCode",{parentName:"li"},"Error: Cannot find module 'pug'")," then run the above command."))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"In your CLI use the commands"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},"npm run build & npm run dev\n")))),(0,l.kt)("p",null,"This will build the ",(0,l.kt)("inlineCode",{parentName:"p"},"package.json")," file in the directory and it will then compile it, with all the assets, including a source map. Ideally, making it easier to check for errors. After you've run ",(0,l.kt)("inlineCode",{parentName:"p"},"npm run build")," & ",(0,l.kt)("inlineCode",{parentName:"p"},"npm run dev")," your default browser should pop up and you should see,"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Step 1 of the project",src:n(65641).Z,width:"3578",height:"1820"})),(0,l.kt)("h3",{id:"step-2-install-the-firebolt-sdk"},"Step 2: Install the Firebolt\xae SDK"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"In the CLI use the command use the command"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},"npm install @firebolt-js/sdk\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Once that's done use the same commands as above"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},"npm run build & npm run dev\n")))),(0,l.kt)("h3",{id:"step-3-import-the-device-and-lifecycle-modules-from-firebolt"},"Step 3: Import the Device and Lifecycle Modules from Firebolt\xae"),(0,l.kt)("p",null,"In the file ",(0,l.kt)("inlineCode",{parentName:"p"},"src/App.js")," add the line"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="src/App.js"',title:'"src/App.js"'},"import { Lifecycle, Device } from '@firebolt-js/sdk';\n")),(0,l.kt)("p",null,"right below the other import(s)."),(0,l.kt)("p",null,"This will add the modules ",(0,l.kt)("strong",{parentName:"p"},"Device")," and ",(0,l.kt)("strong",{parentName:"p"},"Lifecycle")," to your app."),(0,l.kt)("h3",{id:"step-4-add-some-functionality-to-your-app"},"Step 4: Add some functionality to your app"),(0,l.kt)("p",null,"Within the ",(0,l.kt)("em",{parentName:"p"},"Hello World")," repo you downloaded, navigate to and open the ",(0,l.kt)("inlineCode",{parentName:"p"},"src/App.js")," file. Go to the following line within the file:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="src/App.js"',title:'"src/App.js"'},"{...\n  _active() {\n  }\n}\n")),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"Note that the ",(0,l.kt)("inlineCode",{parentName:"p"},"_active()")," method is how the Lightning\u2122 framework initiates your app and is not part of Firebolt\xae."),(0,l.kt)("p",{parentName:"admonition"},"After ",(0,l.kt)("inlineCode",{parentName:"p"},"_active() {")," here is where you put your Firebolt\xae code! Add the following Firebolt\xae code on a new line:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="src/App.js"',title:'"src/App.js"'},"Device.distributor()\n.then(distributor => {\n  const deviceDistributor = 'distributor:' + distributor;\n  this.tag('Device').text.text = deviceDistributor + ' :: ';\n});\n\nDevice.model()\n.then(model => {\n  const deviceModel = 'model:' + model;\n  this.tag('Device').text.text += deviceModel + ' :: ';\n});\n\nDevice.platform()\n.then(platform => {\n  const devicePlatform = 'platform:' + platform;\n  this.tag('Device').text.text += devicePlatform + ' :: ';\n});\n\nDevice.version()\n.then(version => {\n  const deviceVersion = 'version:' + version.sdk.readable + ' : v' + version.sdk.major + '.' + version.sdk.minor + '.' + version.sdk.patch;\n  this.tag('Device').text.text += deviceVersion;\n});  \n")),(0,l.kt)("p",null,"This will append the ",(0,l.kt)("inlineCode",{parentName:"p"},"Device")," text field with the appropriate ",(0,l.kt)("inlineCode",{parentName:"p"},"firebolt Device")," information and show it on your screen. This is the module you'd use to check things like device IDs and manufacturer makes and models."),(0,l.kt)("p",null,"Refresh your browser and you should now see\n",(0,l.kt)("img",{alt:"Adding device info",src:n(45294).Z,width:"3578",height:"1820"})),(0,l.kt)("h3",{id:"step-4---listening-for-events"},"Step 4 - Listening for events"),(0,l.kt)("p",null,"Let's add the Lifecycle event listeners to your app. This will allow it to respond to the various Lifecycle states an app may go through."),(0,l.kt)("p",null,"For more information on listening to events please reference the API documentation:"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",{parentName:"p",href:"https://developer.comcast.com/firebolt/core/sdk/latest/docs/listening-for-events/"},"https://developer.comcast.com/firebolt/core/sdk/latest/docs/listening-for-events/"))),(0,l.kt)("p",null,"In your ",(0,l.kt)("inlineCode",{parentName:"p"},"App.js")," file add the following code at the same level as ",(0,l.kt)("inlineCode",{parentName:"p"},"_active()")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"_init()")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="src/App.js"',title:'"src/App.js"'},"_registerLifecycleCallbacks() {\n  Lifecycle.listen((event, value) => {\n    console.log('Lifecycle.listen:', event, value);\n\n    if (value.state) {\n      console.log('Lifecycle: >> : previous state :' + value.previous, value);\n      console.log('Lifecycle: >> : current state :' + value.state, value);\n    }\n\n    if (value.state == 'foreground') {\n      console.log('Lifecycle : Foreground State');\n      this.tag('HelloWorld').color = LifecycleColors.FOREGROUND;\n      this.tag('Lifecycle').text.text = 'Lifecycle : Foreground State';\n      this.tag('Complete').visible = true;\n    }\n    if (value.state == 'inactive') {\n      console.log('Lifecycle : Inactive State');\n      this.tag('HelloWorld').color = LifecycleColors.INACTIVE;\n      this.tag('Lifecycle').text.text = 'Lifecycle : Inactive State';\n    }\n    if (value.state == 'background') {\n      console.log('Lifecycle : Background State');\n      this.tag('HelloWorld').color = LifecycleColors.BACKGROUND;\n      this.tag('Lifecycle').text.text = 'Lifecycle : Background State';\n    }\n  });\n}\n")),(0,l.kt)("p",null,"Using the functions you've added we're going to call ",(0,l.kt)("inlineCode",{parentName:"p"},"_registerLifecycleCallbacks")," in the ",(0,l.kt)("inlineCode",{parentName:"p"},"_active()")," function. By adding the following code within the ",(0,l.kt)("inlineCode",{parentName:"p"},"_active()")," your app will register Lifecycle events and inform Firebolt\xae when your app is ready to launch, also known as ",(0,l.kt)("inlineCode",{parentName:"p"},"'Lifecycle.ready'")),(0,l.kt)("p",null,"Next, add the following code to the ",(0,l.kt)("inlineCode",{parentName:"p"},"_active()")," function."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="src/App.js"',title:'"src/App.js"'},"this._registerLifecycleCallbacks();\nLifecycle.ready();\n")),(0,l.kt)("p",null,"Now refresh your browser and your app should display the following:"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The Lifecycle state and background color change to reflect the transitions to the 'Foreground' state")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Inactive state",src:n(45294).Z,width:"3578",height:"1820"})),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Lifecycle inactive State",src:n(85068).Z,width:"3432",height:"1914"})),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Foreground State",src:n(48909).Z,width:"1249",height:"698"})),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Hello World - End State Video",src:n(50369).Z,width:"1280",height:"720"})),(0,l.kt)("p",null,"The Lifecycle state and background color change to reflect the transitions to the ",(0,l.kt)("inlineCode",{parentName:"p"},"Foreground")," state."),(0,l.kt)("p",null,"You're almost finished! Right now your app is running in the mock transport layer provided by the Firebolt\xae SDK. That means that you can test your app and the Firebolt\xae API but what will be returned are static, pre-determined, values. They won't change based on your input. It's a good sanity check but not particularly robust. However, if you'd like to test your app and see dynamic values you can use Firebolts Mock application."),(0,l.kt)("h2",{id:"using-the-firebolt-mock-application"},"Using the Firebolt\xae Mock Application"),(0,l.kt)("p",null,"For a more in-depth overview of how to set up Mock Firebolt\xae read our setup guide here:"),(0,l.kt)("p",null,"To use Firebolt's mock application repeat all the steps above but make these changes."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"In ",(0,l.kt)("a",{parentName:"p",href:"#step-1---clone-the-hello-world-github-repo"},"Step 1"),". Clone the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/rdkcentral/mock-firebolt"},"https://github.com/rdkcentral/mock-firebolt")," repository instead of the one provided. This contains the dependencies that allow your app to connect to Mock Firebolt."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},"git clone https://github.com/rdkcentral/mock-firebolt\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"In Step 1.2 change the directory to reflect the newly cloned repo."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},"cd pt3-Firebolt_hello_world-mock\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Follow the rest of the steps as written above. With your browser open, append ",(0,l.kt)("inlineCode",{parentName:"p"},"?mf=true")," to the end of the URL above."))),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"localhost mf=true Closeup",src:n(52157).Z,width:"3584",height:"1922"})),(0,l.kt)("h3",{id:"connect-hello-world-with-mock-firebolt"},"Connect Hello World with Mock Firebolt"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Open a new window/tab in your command-line interface (CLI) tool and change the directory to ",(0,l.kt)("inlineCode",{parentName:"p"},"cd [filepath]\\mock-firebolt-os")," then run"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},"cd server\n")))),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"You should still have another CLI window open to the Hello World repo.")),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Run these commands, in the order below"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},"npm install\nnpm run clean\nnpm run build:core\nnpm run build:mf\n")))),(0,l.kt)("p",null,"In the same CLI window run the command"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"npm run dev\n")),(0,l.kt)("p",null,"Now mock OS is up and running."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Open a new CLI window and type in the command"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},"cd cli\nnpm install\n")))),(0,l.kt)("p",null,"Change the directory to"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"cd src\n")),(0,l.kt)("p",null,"Now you can modify the Hello World Firebolt\xae app using the CLI."),(0,l.kt)("h3",{id:"example-changing-the-distributor-from-company-to-videos-r-us"},"Example: Changing the distributor from ",(0,l.kt)("em",{parentName:"h3"},"Company")," to ",(0,l.kt)("em",{parentName:"h3"},"Videos R US")),(0,l.kt)("p",null,"In the CLI window where you're current directory is ",(0,l.kt)("inlineCode",{parentName:"p"},"$ src %")," use the command"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"node cli.mjs --upload ../examples/device-distributor-1.json\n")),(0,l.kt)("p",null,"Refresh your browser and you'll see the distributor go from ",(0,l.kt)("inlineCode",{parentName:"p"},"distributor: Company")," to ",(0,l.kt)("inlineCode",{parentName:"p"},"distrubutor: Videos R Us"),"."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"localhost mf=true",src:n(17334).Z,width:"3584",height:"1922"})),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"localhost change distributor",src:n(29398).Z,width:"3572",height:"1930"})),(0,l.kt)("h2",{id:"hello-world-examples---lets-play"},"Hello World Examples - Let's play"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Change the device model")),(0,l.kt)("p",null,"To change the model of the device from ",(0,l.kt)("inlineCode",{parentName:"p"},"model: xi6")," to say ",(0,l.kt)("inlineCode",{parentName:"p"},"xi3000")," use the command"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"node cli.mjs --upload\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Change your app's Lifecycle")),(0,l.kt)("p",null,"To send events such as methods, result keys, etc use the command"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"node cli.mjs --event\n")),(0,l.kt)("p",null,"To change the lifecycle use the command above along with an example file path and a lifecycle ",(0,l.kt)("inlineCode",{parentName:"p"},".json"),' file to change the state of the "Hello World App".'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"node cli.mjs --event ../examples/lifecycle-initializing-to-inactive.event.json\n")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"inatctive state",src:n(19873).Z,width:"3572",height:"1930"})),(0,l.kt)("p",null,"As an example going from inactive to the foreground state would be"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"node cli.mjs --event ../examples/../examples/lifecycle-inactive-to-foreground.event.json\n")),(0,l.kt)("h1",{id:"conclusion"},"Conclusion"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Congratulations"),", you did it! You made your very first Firebolt\xae app!"),(0,l.kt)("p",null,"Now you know how to:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Install Firebolt\xae onto your device")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Import Firebolt\xae modules")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Use the Device module to get the device information your app is running on")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Use the Lifecycle module to ensure that your app is ready to run."))),(0,l.kt)("p",null,"To continue learning more about Firebolt\xae check out our ",(0,l.kt)("a",{parentName:"p",href:"https://developer.comcast.com/firebolt/core/sdk/latest/api/"},"API")," docs and guides."))}c.isMDXComponent=!0},45294:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Adding-device-info-93b555e36db8dce512667f077067a044.png"},50369:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Hello-World-Video-e83ec83039976084e263c3d66974ae94.gif"},65641:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Step-1-of-the-project-cdd7970eae1593577aeba96a13d8f1c9.png"},54566:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/WindowsInstallerOption-5a750dfc76e0769b5946a38ed7229fab.png"},43965:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/cloning-hello-world-19b6cfffc59200426422a7714db02fe6.jpg"},19873:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/inatctive-state-d4bff3d78d39f2d80464f6597282c08b.jpg"},48909:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/lifecycle-foreground-517f3f8dc1edc0f50828390433c0c2d2.png"},85068:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/lifecycle-inactive-262715d274eba89c7d221ca97a6473bc.png"},29398:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/localhost-change-distributor-8c2979c43d17f92af597e1d84b26e912.jpg"},52157:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/localhost-mfistrue-Closeup-bec9a61b1993f96c80be97cc258e3f17.jpg"},17334:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/localhost-mfistrue-dfe14f1d0a121da723e5c0f83fc24f54.jpg"}}]);