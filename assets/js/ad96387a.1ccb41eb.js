(self.webpackChunksite=self.webpackChunksite||[]).push([[6194],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},i={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(n),d=o,k=m["".concat(p,".").concat(d)]||m[d]||i[d]||a;return n?r.createElement(k,l(l({ref:t},u),{},{components:n})):r.createElement(k,l({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,l[1]=s;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7024:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return i}});var r=n(2122),o=n(9756),a=(n(7294),n(3905)),l=["components"],s={title:"\u7f16\u5199\u7ec4\u4ef6",order:6},p={unversionedId:"guide/basic/component",id:"guide/basic/component",isDocsHomePage:!1,title:"\u7f16\u5199\u7ec4\u4ef6",description:"\u5728 React \u4e2d\u7ec4\u4ef6\u662f\u975e\u5e38\u91cd\u8981\u7684\u6982\u5ff5\uff0c\u56e0\u6b64\u6211\u4eec\u9700\u8981\u4e86\u89e3\u7f16\u5199\u7ec4\u4ef6\u7684\u4e00\u4e9b\u57fa\u7840\u77e5\u8bc6\u3002",source:"@site/docs/guide/basic/component.md",sourceDirName:"guide/basic",slug:"/guide/basic/component",permalink:"/docs/guide/basic/component",editUrl:"https://github.com/ice-lab/site/edit/master/docs/guide/basic/component.md",version:"current",frontMatter:{title:"\u7f16\u5199\u7ec4\u4ef6",order:6},sidebar:"docs",previous:{title:"\u8def\u7531\u914d\u7f6e",permalink:"/docs/guide/basic/router"},next:{title:"\u6837\u5f0f\u65b9\u6848",permalink:"/docs/guide/basic/style"}},c=[{value:"\u7f16\u5199\u7ec4\u4ef6",id:"\u7f16\u5199\u7ec4\u4ef6",children:[{value:"Function or Class Component",id:"function-or-class-component",children:[]},{value:"\u7ec4\u4ef6\u7ec4\u5408",id:"\u7ec4\u4ef6\u7ec4\u5408",children:[]},{value:"Props",id:"props",children:[]},{value:"JSX \u8bed\u6cd5",id:"jsx-\u8bed\u6cd5",children:[]}]},{value:"React Hooks",id:"react-hooks",children:[]}],u={toc:c};function i(e){var t=e.components,n=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u5728 React \u4e2d\u7ec4\u4ef6\u662f\u975e\u5e38\u91cd\u8981\u7684\u6982\u5ff5\uff0c\u56e0\u6b64\u6211\u4eec\u9700\u8981\u4e86\u89e3\u7f16\u5199\u7ec4\u4ef6\u7684\u4e00\u4e9b\u57fa\u7840\u77e5\u8bc6\u3002"),(0,a.kt)("h2",{id:"\u7f16\u5199\u7ec4\u4ef6"},"\u7f16\u5199\u7ec4\u4ef6"),(0,a.kt)("h3",{id:"function-or-class-component"},"Function or Class Component"),(0,a.kt)("p",null,"\u63a8\u8350\u4f7f\u7528 Function Component\uff0c\u5373\u4e00\u4e2a\u666e\u901a\u7684 JavaScript \u51fd\u6570\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\n\nfunction Welcome(props) {\n  return <h1>Hello, {props.name}</h1>;\n}\n")),(0,a.kt)("h3",{id:"\u7ec4\u4ef6\u7ec4\u5408"},"\u7ec4\u4ef6\u7ec4\u5408"),(0,a.kt)("p",null,"\u7ec4\u4ef6\u53ef\u4ee5\u88ab\u4efb\u610f\u7ec4\u5408\uff0c\u6bd4\u5982\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'import React from \'react\';\n\nfunction Welcome(props) {\n  return <h1>Hello, {props.name}</h1>;\n}\n\nfunction Home() {\n  return (\n    <>\n      <Welcome name="foo" />\n      <div>\n        <Welcome name="bar" />\n      </div>\n    </>\n  );\n}\n')),(0,a.kt)("h3",{id:"props"},"Props"),(0,a.kt)("p",null,"Props \u53ef\u4ee5\u7406\u89e3\u4e3a\u51fd\u6570\u53c2\u6570\uff0c\u8c03\u7528\u7ec4\u4ef6\u7684\u5730\u65b9\u53ef\u4ee5\u6307\u5b9a\u8fd9\u4e2a\u7ec4\u4ef6\u7684 Props\u3002"),(0,a.kt)("p",null,"Props \u662f\u53ea\u8bfb\u7684\uff0c\u4e0d\u5141\u8bb8\u7ec4\u4ef6\u5185\u90e8\u4fee\u6539\u4f20\u5165\u7684 props \u53c2\u6570\u3002"),(0,a.kt)("h3",{id:"jsx-\u8bed\u6cd5"},"JSX \u8bed\u6cd5"),(0,a.kt)("p",null,"\u5728\u51fd\u6570\u7ec4\u4ef6\u4e2d return \u7684\u5373 jsx \u7684\u8bed\u6cd5\uff0c\u6bd4\u5982\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"const element = <p>Hello, world!</p>;\n")),(0,a.kt)("h4",{id:"jsx-\u58f0\u660e"},"JSX \u58f0\u660e"),(0,a.kt)("p",null,"JSX \u7684\u58f0\u660e\u65b9\u5f0f\u548c\u666e\u901a HTML \u6807\u7b7e\u4e00\u6837\uff0c\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"<>")," \u6807\u7b7e\u5305\u88f9\uff0c\u4e5f\u53ef\u4ee5\u5d4c\u5957:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"const element = (\n  <div>\n    <h1>Hello!</h1>\n    <h2>Good to see you here.</h2>\n  </div>\n);\n")),(0,a.kt)("p",null,"\u5047\u5982\u6807\u7b7e\u5185\u6ca1\u6709\u5b50\u5143\u7d20\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"/>")," \u6765\u95ed\u5408\u6807\u7b7e\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'const element = <img src="url" />;\n')),(0,a.kt)("h4",{id:"\u5728-jsx-\u4e2d\u4f7f\u7528\u8868\u8fbe\u5f0f"},"\u5728 JSX \u4e2d\u4f7f\u7528\u8868\u8fbe\u5f0f"),(0,a.kt)("p",null,"JSX \u4e2d\u53ef\u4ee5\u63d2\u5165\u4efb\u610f JavaScript \u8868\u8fbe\u5f0f\u3002JSX \u4e2d\u7684\u8868\u8fbe\u5f0f\u5fc5\u987b\u5199\u5728\u5927\u62ec\u53f7 ",(0,a.kt)("inlineCode",{parentName:"p"},"{}")," \u4e2d\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"const element = <h1>{'Hello' + ',' + 'world!'}</h1>;\n")),(0,a.kt)("p",null,"\u8868\u8fbe\u5f0f\u4e2d\u4e0d\u80fd\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"if else")," \u8bed\u53e5\uff0c\u4f46\u53ef\u4ee5\u4f7f\u7528\u4e09\u5143\u8fd0\u7b97\u7b26 ",(0,a.kt)("inlineCode",{parentName:"p"},"a ? b : c")," \u6765\u5b9e\u73b0\u6761\u4ef6\u9009\u62e9\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"const element = <h1>{true ? 'True!' : 'False!'}</h1>;\n")),(0,a.kt)("h4",{id:"\u4f7f\u7528-jsx-\u6570\u7ec4"},"\u4f7f\u7528 JSX \u6570\u7ec4"),(0,a.kt)("p",null,"\u53ef\u4ee5\u5728\u4e00\u4e2a JSX \u5143\u7d20\u4e2d\u76f4\u63a5\u5d4c\u5957\u5305\u542b\u591a\u4e2a\u5143\u7d20\u7684\u6570\u7ec4\uff0c\u6570\u7ec4\u5185\u7684 JSX \u5143\u7d20\u4f1a\u88ab\u9010\u4e2a\u6e32\u67d3\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"const arr = [<span>Hello, world!</span>, <span>Hello, Rax\uff01</span>];\nconst element = <p>{arr}</p>;\n")),(0,a.kt)("h4",{id:"\u5728-jsx-\u4e2d\u6ce8\u91ca"},"\u5728 JSX \u4e2d\u6ce8\u91ca"),(0,a.kt)("p",null,"JSX \u6ce8\u91ca\u548c\u8868\u8fbe\u5f0f\u4e00\u6837\uff0c\u5fc5\u987b\u5199\u5728\u5927\u62ec\u53f7 ",(0,a.kt)("inlineCode",{parentName:"p"},"{}")," \u4e2d\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"const element = <p>{/*\u6ce8\u91ca...*/} Hello, world!</p>;\n")),(0,a.kt)("h5",{id:"\u5c5e\u6027\u5dee\u5f02"},"\u5c5e\u6027\u5dee\u5f02"),(0,a.kt)("p",null,"JSX \u4e0e HTML \u4e4b\u95f4\u6709\u5f88\u591a\u5c5e\u6027\u5b58\u5728\u5dee\u5f02\uff1a"),(0,a.kt)("h5",{id:"classname"},"className"),(0,a.kt)("p",null,"className \u5c5e\u6027\u7528\u4e8e\u6307\u5b9a CSS \u7684 class\uff0c\u6b64\u7279\u6027\u9002\u7528\u4e8e\u6240\u6709\u5e38\u89c4 DOM \u8282\u70b9\u548c SVG \u5143\u7d20\uff0c\u5982 ",(0,a.kt)("inlineCode",{parentName:"p"},"<div>"),"\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"<a>")," \u53ca\u5176\u5b83\u6807\u7b7e\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u4f60\u5728 JSX \u4e2d\u4f7f\u7528 Web Components\uff0c\u8bf7\u4f7f\u7528 class \u5c5e\u6027\u4ee3\u66ff\u3002"),(0,a.kt)("h5",{id:"dangerouslysetinnerhtml"},"dangerouslySetInnerHTML"),(0,a.kt)("p",null,"dangerouslySetInnerHTML \u662f\u6d4f\u89c8\u5668 DOM \u63d0\u4f9b innerHTML \u7684\u66ff\u6362\u65b9\u6848\u3002\u901a\u5e38\u6765\u8bb2\uff0c\u4f7f\u7528\u4ee3\u7801\u76f4\u63a5\u8bbe\u7f6e HTML \u5b58\u5728\u98ce\u9669\uff0c\u56e0\u4e3a\u5f88\u5bb9\u6613\u65e0\u610f\u4e2d\u4f7f\u7528\u6237\u66b4\u9732\u4e8e\u8de8\u7ad9\u811a\u672c\uff08XSS\uff09\u7684\u653b\u51fb\u3002\u56e0\u6b64\uff0c\u4f60\u53ef\u4ee5\u76f4\u63a5\u5728 JSX \u4e2d\u8bbe\u7f6e HTML\uff0c\u4f46\u5f53\u4f60\u60f3\u8bbe\u7f6e dangerouslySetInnerHTML \u65f6\uff0c\u9700\u8981\u5411\u5176\u4f20\u9012\u5305\u542b key \u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"__html")," \u7684\u5bf9\u8c61\uff0c\u4ee5\u6b64\u6765\u8b66\u793a\u4f60\u3002\u4f8b\u5982\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"function createMarkup() {\n  return { __html: 'First &middot; Second' };\n}\n\nfunction MyComponent() {\n  return <div dangerouslySetInnerHTML={createMarkup()} />;\n}\n")),(0,a.kt)("h5",{id:"htmlfor"},"htmlFor"),(0,a.kt)("p",null,"\u7531\u4e8e for \u5728 JavaScript \u4e2d\u662f\u4fdd\u7559\u5b57\uff0c\u6240\u4ee5 JSX \u5143\u7d20\u4e2d\u4f7f\u7528\u4e86 htmlFor \u6765\u4ee3\u66ff\u3002"),(0,a.kt)("p",null,"\u5173\u4e8e\u7ec4\u4ef6\u7f16\u5199\u7684\u66f4\u591a\u7ec6\u8282\u8bf7\u53c2\u8003 ",(0,a.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/state-and-lifecycle.html"},"React \u5b98\u65b9\u6587\u6863"),"\u3002"),(0,a.kt)("h2",{id:"react-hooks"},"React Hooks"),(0,a.kt)("p",null,"\u5728\u7f16\u5199\u7ec4\u4ef6\u8fc7\u7a0b\u4e2d\uff0c\u6211\u4eec\u4f1a\u7ecf\u5e38\u7528\u5230 React Hooks\uff0c\u9664\u4e86 React \u5185\u7f6e\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"useState"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"useMemo")," \u7b49 Hooks\uff0c\u6211\u4eec\u7ed3\u5408\u5927\u91cf\u5b9e\u8df5\u6c89\u6dc0\u4e86\u4e00\u5957 ahooks \u7684\u89e3\u51b3\u65b9\u6848\uff0c\u53ef\u4ee5\u51cf\u5c11\u5f88\u591a\u91cd\u590d\u7f16\u7801\u5de5\u4f5c\u3002"),(0,a.kt)("p",null,"\u6bd4\u5982\u5f53\u6211\u4eec\u9700\u8981\u76d1\u542c\u5e76\u64cd\u4f5c url query\uff0c\u5c31\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"useUrlState")," \u8fd9\u4e2a hooks\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport { useUrlState } from 'ahooks';\n\nexport default () => {\n  const [urlQuery, setUrlQuery] = useUrlState({ count: '1' });\n  return (\n    <>\n      <button type=\"button\" onClick={() => setUrlQuery({ count: Number(urlQuery.count || 0) + 1 })}>\n        add\n      </button>\n      <button type=\"button\" onClick={() => setUrlQuery({ count: undefined })}>\n        clear\n      </button>\n      <div>urlQuery.count: {urlQuery?.count}</div>\n    </>\n  );\n};\n")),(0,a.kt)("p",null,"\u901a\u8fc7\u7c7b\u4f3c ",(0,a.kt)("inlineCode",{parentName:"p"},"useUrlState")," \u7684\u5c01\u88c5\uff0c\u53ef\u4ee5\u6781\u5927\u7684\u51cf\u5c11\u6211\u4eec\u7684\u7f16\u7801\u91cf\u3002ahooks \u4e3b\u8981\u63d0\u4f9b\u4e86\u4ee5\u4e0b\u51e0\u7c7b Hooks\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://ahooks.js.org/zh-CN/hooks/table/use-fusion-table"},"Table")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://ahooks.js.org/zh-CN/hooks/ui/use-drop"},"UI")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://ahooks.js.org/zh-CN/hooks/state/use-boolean"},"State")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://ahooks.js.org/zh-CN/hooks/life-cycle/use-debounce-effect"},"SideEffect")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://ahooks.js.org/zh-CN/hooks/life-cycle/use-debounce-effect"},"LifeCycle")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://ahooks.js.org/zh-CN/hooks/dom/use-click-away"},"DOM")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://ahooks.js.org/zh-CN/hooks/advanced/use-creation"},"Advanced"))),(0,a.kt)("p",null,"\u5177\u4f53\u4f7f\u7528\u8be6\u89c1 ",(0,a.kt)("a",{parentName:"p",href:"https://ahooks.js.org"},"ahooks"),"\u3002"))}i.isMDXComponent=!0}}]);