(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{74:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return b}));var a=n(2),r=n(6),i=(n(0),n(97)),o={id:"server",title:"@build-tracker/server",sidebar_label:"@build-tracker/server"},l={unversionedId:"packages/server",id:"packages/server",isDocsHomePage:!1,title:"@build-tracker/server",description:"Adding the @build-tracker/server package will install a binary available as bt-server. It can be run with yarn bt-server or npx bt-server",source:"@site/docs/packages/server.md",slug:"/packages/server",permalink:"/docs/packages/server",editUrl:"https://github.com/paularmstrong/build-tracker/edit/main/docs/docs/packages/server.md",version:"current",sidebar_label:"@build-tracker/server",sidebar:"docs",previous:{title:"@build-tracker/formatting",permalink:"/docs/packages/formatting"},next:{title:"@build-tracker/types",permalink:"/docs/packages/types"}},c=[{value:"Install",id:"install",children:[]},{value:"Configuration",id:"configuration",children:[{value:"Basic configuration",id:"basic-configuration",children:[]}]},{value:"Server &amp; application options",id:"server--application-options",children:[{value:"Database integration",id:"database-integration",children:[]},{value:"Securing your API",id:"securing-your-api",children:[]}]},{value:"Commands",id:"commands",children:[{value:"<code>run</code>",id:"run",children:[]},{value:"<code>setup</code>",id:"setup",children:[]},{value:"<code>seed</code> <em>dev-only</em>",id:"seed-dev-only",children:[]},{value:"<code>version</code>",id:"version",children:[]}]}],s={rightToc:c};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Adding the ",Object(i.b)("inlineCode",{parentName:"p"},"@build-tracker/server")," package will install a binary available as ",Object(i.b)("inlineCode",{parentName:"p"},"bt-server"),". It can be run with ",Object(i.b)("inlineCode",{parentName:"p"},"yarn bt-server")," or ",Object(i.b)("inlineCode",{parentName:"p"},"npx bt-server")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("strong",{parentName:"p"},"Important note:")," It is recommended to do set up your Build Tracker server & application either in a new repository or in an isolated workspace away from the code that you wish to track. This will help you avoid configuration conflicts as well as build-time issues between your app and Build Tracker itself.")),Object(i.b)("h2",{id:"install"},"Install"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"yarn add @build-tracker/server@latest\n# or\nnpm install --save @build-tracker/server@latest\n")),Object(i.b)("p",null,"To list all commands and help, run ",Object(i.b)("inlineCode",{parentName:"p"},"yarn bt-server --help")),Object(i.b)("h2",{id:"configuration"},"Configuration"),Object(i.b)("p",null,"The Build Tracker application is easily configured using a ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/davidtheclark/cosmiconfig"}),"cosmiconfig")," compatible file."),Object(i.b)("p",null,"Starting from the current working directory, it will look for the following possible sources, in this order:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"a ",Object(i.b)("inlineCode",{parentName:"li"},"build-tracker")," property in your ",Object(i.b)("inlineCode",{parentName:"li"},"package.json")),Object(i.b)("li",{parentName:"ol"},"a ",Object(i.b)("inlineCode",{parentName:"li"},".build-tracerrc")," file"),Object(i.b)("li",{parentName:"ol"},"a ",Object(i.b)("inlineCode",{parentName:"li"},"build-tracker.config.js")," file exporting a JS object")),Object(i.b)("p",null,"The .",Object(i.b)("inlineCode",{parentName:"p"},".build-trackerrc")," file (without extension) can be in JSON or YAML format."),Object(i.b)("p",null,"Alternately, you can add a filename extension to designate JSON, YAML, or JS format: ",Object(i.b)("inlineCode",{parentName:"p"},".build-trackerrc.json"),", ",Object(i.b)("inlineCode",{parentName:"p"},".build-trackerrc.yaml"),", ",Object(i.b)("inlineCode",{parentName:"p"},".build-trackerrc.yml"),", ",Object(i.b)("inlineCode",{parentName:"p"},".build-trackerrc.js"),". You may want to use an extension so that your text editor can better interpret the file, and help with syntax checking and highlighting."),Object(i.b)("p",null,"Once one of these is found and parsed, the search will stop and that object will be used."),Object(i.b)("p",null,"The configuration search can also be short-circuited by passing a ",Object(i.b)("inlineCode",{parentName:"p"},"--config")," argument with a path to your configuration file."),Object(i.b)("h3",{id:"basic-configuration"},"Basic configuration"),Object(i.b)("p",null,"Please note that options not denoted with a ",Object(i.b)("inlineCode",{parentName:"p"},"?")," are required and ",Object(i.b)("em",{parentName:"p"},"must")," be provided."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"module.exports = {\n  url: 'https://my-url', // required\n};\n")),Object(i.b)("h4",{id:"artifacts-"},Object(i.b)("inlineCode",{parentName:"h4"},"artifacts?: {}")),Object(i.b)("p",null,"Allows setting budgets for single or groups of artifacts, as well as filtering out and hiding artifacts from viewers."),Object(i.b)("h5",{id:"artifactsbudgets-artifactbudgets"},Object(i.b)("inlineCode",{parentName:"h5"},"artifacts.budgets?: ArtifactBudgets")),Object(i.b)("p",null,"An object map of artifact names to arrays of budgets for each artifacts."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"module.exports = {\n  artifacts: {\n    budgets: {\n      main: [{ level: 'error', sizeKey: 'gzip', type: 'size', maximum: 150000 }],\n    },\n  },\n};\n")),Object(i.b)("p",null,"Artifact budgets can also be given a special key, ",Object(i.b)("inlineCode",{parentName:"p"},"'*'"),", that will apply to all artifacts in every build and be merged with any specific budgets:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"module.exports = {\n  artifacts: {\n    budgets: {\n      main: [{ level: 'error', sizeKey: 'gzip', type: 'size', maximum: 150000 }],\n      // Warn on any artifact that grows more than 50%\n      '*': [{ level: 'warn', sizeKey: 'gzip', type: 'percent_delta', maximum: 0.5 }],\n    },\n  },\n};\n")),Object(i.b)("h5",{id:"artifactsfilters-arrayregexp"},Object(i.b)("inlineCode",{parentName:"h5"},"artifacts.filters?: Array<RegExp>")),Object(i.b)("p",null,"An array of regular expressions used to hide artifacts from display. This is typically not needed, unless you have artifacts generated by systems that really don't need to be checked."),Object(i.b)("p",null,"For example, filter out all translation bundles except for the default:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"module.exports = {\n  artifacts: {\n    // Hide all packages matching 'i18n/.*', except for 'i18n/en'\n    filters: [/^i18n\\/(?!en$).*$/],\n  },\n};\n")),Object(i.b)("h5",{id:"artifactsgroups-arraygroup"},Object(i.b)("inlineCode",{parentName:"h5"},"artifacts.groups?: Array<Group>")),Object(i.b)("p",null,"Have Build Tracker group specific artifacts together so you can track and budget on the sum of the artifacts. This is a great option when you have synchronous and asynchronous artifacts, allowing you to determine the byte-size required for initial page loads."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"interface Group {\n  artifactNames: Array<string>;\n  artifactMatch?: RegExp;\n  budgets?: Array<Budget>;\n  name: string;\n}\n")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"module.exports = {\n  artifacts: {\n    groups: [\n      {\n        // An array of strings that match your artifacts\n        artifactNames: ['main', 'shared', 'vendor'],\n        // Optional, a regular expression to match artifact names\n        artifactMatch: /^i18n/,\n        // An array of budgets\n        budgets: [{ level: 'error', sizeKey: 'gzip', type: 'size', maximum: 150000 }],\n        // A name for the group\n        name: 'Initial',\n      },\n    ],\n  },\n};\n")),Object(i.b)("h4",{id:"budgets-arraybudget"},Object(i.b)("inlineCode",{parentName:"h4"},"budgets?: Array<Budget>")),Object(i.b)("p",null,"Separate from individual artifacts, budgets can be set across the sum of all artifacts."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"enum BudgetLevel {\n  WARN = 'warn',\n  ERROR = 'error',\n}\n\nenum BudgetType {\n  DELTA = 'delta',\n  PERCENT_DELTA = 'percentDelta',\n  SIZE = 'size',\n}\n\ninterface Budget {\n  level: BudgetLevel;\n  sizeKey: string;\n  type: BudgetType;\n  maximum: number;\n}\n")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"module.exports = {\n  budgets: [{ level: 'error', sizeKey: 'brotli', type: 'size', maximum: 1000000 }],\n};\n")),Object(i.b)("h4",{id:"hideattribution-boolean--false"},Object(i.b)("inlineCode",{parentName:"h4"},"hideAttribution?: boolean = false")),Object(i.b)("p",null,"Set to ",Object(i.b)("inlineCode",{parentName:"p"},"true")," to hide the attribution and link in the Drawer."),Object(i.b)("h4",{id:"name-string--build-tracker"},Object(i.b)("inlineCode",{parentName:"h4"},"name?: string = 'Build Tracker'")),Object(i.b)("p",null,"If provided, replaces the title ",Object(i.b)("em",{parentName:"p"},"Build Tracker")," in the top application bar."),Object(i.b)("h4",{id:"url-string"},Object(i.b)("inlineCode",{parentName:"h4"},"url: string")),Object(i.b)("p",null,"The URL that your server is running at. Please set this to ensure the application is able to fetch from your database correctly."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"module.exports = {\n  url: 'https://build-tracker-demo.herokuapp.com',\n};\n")),Object(i.b)("h2",{id:"server--application-options"},"Server & application options"),Object(i.b)("h4",{id:"defaultbranch-string--main"},Object(i.b)("inlineCode",{parentName:"h4"},"defaultBranch?: string = 'main'")),Object(i.b)("p",null,"Your application will graph this branch by default and ignore builds from other branches."),Object(i.b)("p",null,"This is a useful setting if you use and track a branch that is not ",Object(i.b)("inlineCode",{parentName:"p"},"main")," in your git repository."),Object(i.b)("h4",{id:"dev-boolean--false"},Object(i.b)("inlineCode",{parentName:"h4"},"dev?: boolean = false")),Object(i.b)("p",null,"Set the server into development mode. This is only recommended if you are ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"../guides/contributing"}),"contributing")," to Build Tracker."),Object(i.b)("h4",{id:"handlers-handlers"},Object(i.b)("inlineCode",{parentName:"h4"},"handlers?: Handlers")),Object(i.b)("p",null,"Run any custom code after a build has been inserted into the database. The comparator object you receive will compare the new build against the build associated with its own ",Object(i.b)("inlineCode",{parentName:"p"},"parentRevision"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"interface Handlers {\n  onBuildInsert?: (comparator: Comparator) => Promise<void>;\n}\n")),Object(i.b)("h4",{id:"port-number"},Object(i.b)("inlineCode",{parentName:"h4"},"port?: number")),Object(i.b)("h4",{id:"defaultsizekey-string"},Object(i.b)("inlineCode",{parentName:"h4"},"defaultSizeKey?: string")),Object(i.b)("p",null,"The default size type used to represent files. For example, ",Object(i.b)("inlineCode",{parentName:"p"},"gzip")," or ",Object(i.b)("inlineCode",{parentName:"p"},"brotli"),"."),Object(i.b)("h3",{id:"database-integration"},"Database integration"),Object(i.b)("p",null,"The following options should generally be handled by a ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"../plugins/plugins"}),"Build Tracker plugin"),". You can always override them or write your own custom queries and DB setup if you like."),Object(i.b)("h4",{id:"setup---promiseboolean"},Object(i.b)("inlineCode",{parentName:"h4"},"setup?: () => Promise<boolean>")),Object(i.b)("p",null,"If provided, this function is run before the application starts running. Most plugins will do database creation or upgrades during this phase."),Object(i.b)("h4",{id:"queries-queries"},Object(i.b)("inlineCode",{parentName:"h4"},"queries: Queries")),Object(i.b)("p",null,"The Build Tracker server API uses these methods to fetch and insert builds in the database."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"interface Queries {\n  build: {\n    byRevision: (revision: string) => Promise<Build>;\n    insert: (build: Build) => Promise<string>;\n  };\n  builds: {\n    byRevisions: (revisions: Array<string>) => Promise<Array<Build>>;\n    byRevisionRange: (startRevision: string, endRevision: string) => Promise<Array<Build>>;\n    byTimeRange: (startTimestamp: number, endTimestamp: number, branch: string) => Promise<Array<Build>>;\n    recent: (limit: number, branch: string) => Promise<Array<Build>>;\n  };\n}\n")),Object(i.b)("h3",{id:"securing-your-api"},"Securing your API"),Object(i.b)("p",null,"It's easy to see that the API POST endpoint ",Object(i.b)("inlineCode",{parentName:"p"},"/api/builds")," is left completely open. To secure this and ensure that bad actors don't have an easy way to write random data to your database, you can do the following:"),Object(i.b)("p",null,"When running your server, ensure you have an environment variable set, ",Object(i.b)("inlineCode",{parentName:"p"},"BT_API_AUTH_TOKEN=my-super-secret-token"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"BT_API_AUTH_TOKEN=my-secret-token bt-server run\n")),Object(i.b)("p",null,"When your CI system uploads new builds using the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"./cli#upload-build"}),Object(i.b)("inlineCode",{parentName:"a"},"bt-cli upload-build"))," command, ensure the token is set in that environment as well."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"BT_API_AUTH_TOKEN=my-secret-token bt-cli upload-build\n")),Object(i.b)("h2",{id:"commands"},"Commands"),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"bt-server")," command has a few commands available. For the most part, you should only ever need ",Object(i.b)("inlineCode",{parentName:"p"},"run"),"."),Object(i.b)("h3",{id:"run"},Object(i.b)("inlineCode",{parentName:"h3"},"run")),Object(i.b)("p",null,"Run the server application. Remember to ensure that an API token environment variable is set to add a layer of security to the API."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"BT_API_AUTH_TOKEN=my-secret-token bt-server run\n")),Object(i.b)("h3",{id:"setup"},Object(i.b)("inlineCode",{parentName:"h3"},"setup")),Object(i.b)("p",null,"Run initial database setup. This method runs only the ",Object(i.b)("inlineCode",{parentName:"p"},"setup")," function provided by the Database Integration section of this document."),Object(i.b)("p",null,"This is typically unnecessary to run individually, as ",Object(i.b)("inlineCode",{parentName:"p"},"run")," will also execute this command before starting the application."),Object(i.b)("h3",{id:"seed-dev-only"},Object(i.b)("inlineCode",{parentName:"h3"},"seed")," ",Object(i.b)("em",{parentName:"h3"},"dev-only")),Object(i.b)("p",null,"For development purposes only! This function will seed your database with fake data so that it's easier to build and test new plugins. This command also requires the package ",Object(i.b)("inlineCode",{parentName:"p"},"@build-tracker/fixtures"),", which is not installed by default. You will need to install it manually."),Object(i.b)("h3",{id:"version"},Object(i.b)("inlineCode",{parentName:"h3"},"version")),Object(i.b)("p",null,"Output the version number of the ",Object(i.b)("inlineCode",{parentName:"p"},"bt-server"),"."))}b.isMDXComponent=!0},97:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),b=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=b(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=b(n),d=a,m=u["".concat(o,".").concat(d)]||u[d]||p[d]||i;return n?r.a.createElement(m,l(l({ref:t},s),{},{components:n})):r.a.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);