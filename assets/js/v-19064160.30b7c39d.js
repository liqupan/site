(self.webpackChunksite=self.webpackChunksite||[]).push([[538],{4445:(s,n,a)=>{"use strict";a.r(n),a.d(n,{data:()=>e});const e={key:"v-19064160",path:"/plugin/list/css-assets-local.html",title:"css-assets-locale",lang:"zh-CN",frontmatter:{title:"css-assets-locale",order:4},excerpt:"",headers:[{level:2,title:"Install",slug:"install",children:[]},{level:2,title:"Options",slug:"options",children:[]},{level:2,title:"Usage",slug:"usage",children:[]},{level:2,title:"使用场景",slug:"使用场景",children:[{level:3,title:"场景 1：网站运行时请求不到 CDN 文件",slug:"场景-1-网站运行时请求不到-cdn-文件",children:[]},{level:3,title:"场景 2：构建部署和网站运行时都请求不到 CDN 文件",slug:"场景-2-构建部署和网站运行时都请求不到-cdn-文件",children:[]}]}],filePathRelative:"plugin/list/css-assets-local.md",git:{updatedTime:162142938e4,contributors:[]}}},8136:(s,n,a)=>{"use strict";a.r(n),a.d(n,{default:()=>h});var e=a(6252);const p=(0,e.uE)('<p><code>build-plugin-css-assets-local</code> 提供将 css 中的网络资源本地化能力，例如字体文件等。</p><h2 id="install"><a class="header-anchor" href="#install">#</a> Install</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">npm</span> i --save-dev build-plugin-css-assets-local\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="options"><a class="header-anchor" href="#options">#</a> Options</h2><ul><li><code>outputPath</code>: 默认值： <code>assets</code> 提取后的文件目录前缀</li><li><code>relativeCssPath</code>: 默认值： <code>../</code> 提取的文件后相对于 CSS 的路径</li></ul><h2 id="usage"><a class="header-anchor" href="#usage">#</a> Usage</h2><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;plugins&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token punctuation">[</span>\n      <span class="token string">&quot;build-plugin-css-assets-local&quot;</span><span class="token punctuation">,</span>\n      <span class="token punctuation">{</span>\n        <span class="token property">&quot;outputPath&quot;</span><span class="token operator">:</span> <span class="token string">&quot;assets&quot;</span><span class="token punctuation">,</span>\n        <span class="token property">&quot;relativeCssPath&quot;</span><span class="token operator">:</span> <span class="token string">&quot;../&quot;</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">]</span>\n  <span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="使用场景"><a class="header-anchor" href="#使用场景">#</a> 使用场景</h2><p>组件代码里有可能会依赖一些远程 CDN 的字体文件等，某些网络可能访问不了，出现这个问题有几种情况：</p><ol><li>构建部署时网络正常，网站运行时网络请求不到 CDN 文件</li><li>构建部署和网站运行时都请求不到 CDN 文件</li><li>构建部署时网络请求不到 CDN 地址，网站运行时可以请求到</li></ol><p>第 3 种情况一般不需要做什么事情就能正常工作，以下是主要针对 1/2 两种场景的方案。</p><h3 id="场景-1-网站运行时请求不到-cdn-文件"><a class="header-anchor" href="#场景-1-网站运行时请求不到-cdn-文件">#</a> 场景 1：网站运行时请求不到 CDN 文件</h3><p>通过插件 <code>build-plugin-css-assets-local</code> 在构建时将网络资源下载到源码里。</p><p>安装依赖：</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">npm</span> i --save-dev build-plugin-css-assets-local\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>插件参数:</p><ul><li><code>outputPath</code>: 默认值 <code>assets</code>，提取后的文件目录前缀</li><li><code>relativeCssPath</code>: 默认值 <code>../</code>，提取的文件后相对于 CSS 的路径</li><li><code>activeInDev</code>：默认值 <code>false</code>，本地调试时是否启用</li></ul><p>在 <code>build.json</code> 中引入：</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;plugins&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token punctuation">[</span>\n      <span class="token string">&quot;build-plugin-css-assets-local&quot;</span><span class="token punctuation">,</span>\n      <span class="token punctuation">{</span>\n        <span class="token property">&quot;outputPath&quot;</span><span class="token operator">:</span> <span class="token string">&quot;assets&quot;</span><span class="token punctuation">,</span>\n        <span class="token property">&quot;relativeCssPath&quot;</span><span class="token operator">:</span> <span class="token string">&quot;../&quot;</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">]</span>\n  <span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h3 id="场景-2-构建部署和网站运行时都请求不到-cdn-文件"><a class="header-anchor" href="#场景-2-构建部署和网站运行时都请求不到-cdn-文件">#</a> 场景 2：构建部署和网站运行时都请求不到 CDN 文件</h3><blockquote><p>手动将对应资源下载到源代码中，仅针对 <code>@alifd/next</code> 组件里的字体文件</p></blockquote><p>@alifd/next 组件库默认引用两类字体，包括图标字体和 robot 基础字体，因此分别需要把对应的文件下载到本地目录里：</p>',22),l={href:"https://alifd.oss-cn-hangzhou.aliyuncs.com/fonts/icon-font.zip",target:"_blank",rel:"noopener noreferrer"},t=(0,e.Uk)("图标字体文件"),o=(0,e.Uk)(" ，下载到 "),c=(0,e.Wm)("code",null,"public/",-1),u=(0,e.Uk)(" 目录下"),i={href:"https://files.alicdn.com/tpsservice/31b61ac0c41fac383a1bffd154674347.zip",target:"_blank",rel:"noopener noreferrer"},r=(0,e.Uk)("robot 字体文件"),d=(0,e.Uk)(" ，下载到 "),b=(0,e.Wm)("code",null,"public/",-1),k=(0,e.Uk)(" 目录"),m=(0,e.uE)('<p><img src="https://user-images.githubusercontent.com/2505411/76869396-35cff300-68a3-11ea-98eb-8a77d6703861.png" alt="image"></p><p>接着在 <code>build.json</code> 里加入以下配置：</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;plugins&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token punctuation">[</span>\n      <span class="token string">&quot;build-plugin-fusion&quot;</span><span class="token punctuation">,</span>\n      <span class="token punctuation">{</span>\n        <span class="token property">&quot;themeConfig&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n          <span class="token property">&quot;icon-font-path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&#39;/icon-font/icon&#39;&quot;</span><span class="token punctuation">,</span>\n          <span class="token property">&quot;font-custom-path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&#39;/font/&#39;&quot;</span>\n        <span class="token punctuation">}</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">]</span>\n  <span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div>',3),h={render:function(s,n){const a=(0,e.up)("OutboundLink");return(0,e.wg)(),(0,e.j4)(e.HY,null,[p,(0,e.Wm)("ul",null,[(0,e.Wm)("li",null,[(0,e.Wm)("a",l,[t,(0,e.Wm)(a)]),o,c,u]),(0,e.Wm)("li",null,[(0,e.Wm)("a",i,[r,(0,e.Wm)(a)]),d,b,k])]),m],64)}}}}]);