(self.webpackChunksite=self.webpackChunksite||[]).push([[9322],{8356:(n,s,a)=>{"use strict";a.r(s),a.d(s,{data:()=>p});const p={key:"v-619a2720",path:"/guide/advanced/auth.html",title:"权限管理",lang:"zh-CN",frontmatter:{title:"权限管理",order:9},excerpt:"",headers:[{level:2,title:"初始化权限数据",slug:"初始化权限数据",children:[]},{level:2,title:"页面权限",slug:"页面权限",children:[]},{level:2,title:"操作权限",slug:"操作权限",children:[{level:3,title:"获取权限数据",slug:"获取权限数据",children:[]},{level:3,title:"设置权限数据",slug:"设置权限数据",children:[]},{level:3,title:"自定义权限组件",slug:"自定义权限组件",children:[]}]},{level:2,title:"接口鉴权",slug:"接口鉴权",children:[]},{level:2,title:"API",slug:"api",children:[{level:3,title:"useAuth",slug:"useauth",children:[]},{level:3,title:"withAuth",slug:"withauth",children:[]}]}],filePathRelative:"guide/advanced/auth.md",git:{updatedTime:162142938e4,contributors:[]}}},6069:(n,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>i});var p=a(6252);const t=(0,p.uE)('<p>对于一个 Web 应用，权限管理是经常会涉及的需求之一，通常包含以下几种常见的权限管理类型：</p><ul><li>页面权限：当用户访问某个没有权限的页面时跳转到无权限页面；</li><li>操作权限：页面中的某些按钮或组件针对无权限的用户直接隐藏；</li><li>接口权限：当用户通过操作调用没有权限的接口时跳转到无权限页面。</li></ul><blockquote><p>框架默认内置权限插件，开发者无需安装。如果 ice.js 版本低于 1.11.2，需要自行安装 <code>build-plugin-ice-auth</code> 依赖，并在 <code>build.json</code> 中引入该插件。</p></blockquote><h2 id="初始化权限数据"><a class="header-anchor" href="#初始化权限数据">#</a> 初始化权限数据</h2><p>大多数情况下权限管理通常需要从服务端获取权限数据，然后在前端通过权限对比以此控制页面、操作等等权限行为。在 icejs 框架中约定通过 <code>getInitialData</code> 从服务端异步获取初始化的权限数据，并且约定最终返回格式为 <code>{auth: {[key: string]: boolean }}</code> 的形式。</p><div class="language-tsx ext-tsx line-numbers-mode"><pre class="language-tsx"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> runApp<span class="token punctuation">,</span> request<span class="token punctuation">,</span> IAppConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;ice&#39;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> appConfig<span class="token operator">:</span> IAppConfig <span class="token operator">=</span> <span class="token punctuation">{</span>\n  app<span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token function-variable function">getInitialData</span><span class="token operator">:</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n      <span class="token comment">// 模拟服务端返回的数据</span>\n      <span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">request</span><span class="token punctuation">(</span><span class="token string">&#39;/api/auth&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token keyword">const</span> <span class="token punctuation">{</span> role<span class="token punctuation">,</span> starPermission<span class="token punctuation">,</span> followPermission <span class="token punctuation">}</span> <span class="token operator">=</span> data<span class="token punctuation">;</span>\n\n      <span class="token comment">// 约定权限必须返回一个 auth 对象</span>\n      <span class="token comment">// 返回的每个值对应一条权限</span>\n      <span class="token keyword">return</span> <span class="token punctuation">{</span>\n        auth<span class="token operator">:</span> <span class="token punctuation">{</span>\n          admin<span class="token operator">:</span> role <span class="token operator">===</span> <span class="token string">&#39;admin&#39;</span><span class="token punctuation">,</span>\n          guest<span class="token operator">:</span> role <span class="token operator">===</span> <span class="token string">&#39;guest&#39;</span><span class="token punctuation">,</span>\n          starRepo<span class="token operator">:</span> starPermission<span class="token punctuation">,</span>\n          followRepo<span class="token operator">:</span> followPermission\n        <span class="token punctuation">}</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  auth<span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token comment">// 可选的，设置无权限时的展示组件，默认为 null</span>\n    NoAuthFallback<span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">没有权限...</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">,</span>\n    <span class="token comment">// 或者传递一个函数组件</span>\n    <span class="token comment">// NoAuthFallback: () =&gt; &lt;div&gt;没有权限..&lt;/div&gt;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token function">runApp</span><span class="token punctuation">(</span>appConfig<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div><h2 id="页面权限"><a class="header-anchor" href="#页面权限">#</a> 页面权限</h2><p>页面权限通常也称之为路由权限，如需对某些页面进行权限控制只需在页面组件的 <code>pageConfig</code> 中配置准入权限即可。</p><div class="language-tsx ext-tsx line-numbers-mode"><pre class="language-tsx"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> <span class="token function-variable function">Home</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">Home Page</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">&gt;</span></span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\nHome<span class="token punctuation">.</span>pageConfig <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token comment">// 可选，配置准入权限，若不配置则代表所有角色都可以访问</span>\n  auth<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;admin&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><blockquote><p>除了 pageConfig.auth 的方式，页面级鉴权也可通过在 <code>src/routes.ts</code> 中配置 wrappers 字段实现，可参考 <a href="/docs/guide/basic/router#%E8%B7%AF%E7%94%B1%E9%AB%98%E9%98%B6%E7%BB%84%E4%BB%B6">wrappers 配置</a> 。</p></blockquote><h2 id="操作权限"><a class="header-anchor" href="#操作权限">#</a> 操作权限</h2><p>在某些场景下，如某个组件中要根据角色判断是否有操作权限，我们可以通过 <code>useAuth</code> Hooks 在组件中获取权限数据，同时也可以更新初始的权限数据。</p><h3 id="获取权限数据"><a class="header-anchor" href="#获取权限数据">#</a> 获取权限数据</h3><div class="language-tsx ext-tsx line-numbers-mode"><pre class="language-tsx"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> useAuth <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;ice&#39;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">function</span> <span class="token function">Foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> <span class="token punctuation">[</span>auth<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useAuth</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">\n      当前用户权限数据：\n      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>code</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">{</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>auth<span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>code</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">&gt;</span></span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h3 id="设置权限数据"><a class="header-anchor" href="#设置权限数据">#</a> 设置权限数据</h3><div class="language-tsx ext-tsx line-numbers-mode"><pre class="language-tsx"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> useAuth <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;ice&#39;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">function</span> <span class="token function">Foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> <span class="token punctuation">[</span>auth<span class="token punctuation">,</span> setAuth<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useAuth</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token comment">// 更新权限</span>\n  <span class="token keyword">function</span> <span class="token function">updateAuth</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token function">setAuth</span><span class="token punctuation">(</span><span class="token punctuation">{</span> starRepo<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> followRepo<span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">\n      当前用户角色：\n      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>code</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">{</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>auth<span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>code</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">\n      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>button<span class="token punctuation">&quot;</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>updateAuth<span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">更新权限</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">&gt;</span></span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h3 id="自定义权限组件"><a class="header-anchor" href="#自定义权限组件">#</a> 自定义权限组件</h3><p>对于操作类权限，通常我们可以自定义封装权限组件，以便更细粒度的控制权限和复用。</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> useAuth <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;ice&#39;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> NoAuth <span class="token keyword">from</span> <span class="token string">&#39;@/components/NoAuth&#39;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">function</span> <span class="token function">Auth</span><span class="token punctuation">(</span><span class="token punctuation">{</span> children<span class="token punctuation">,</span> authKey<span class="token punctuation">,</span> fallback <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> <span class="token punctuation">[</span>auth<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useAuth</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token comment">// 判断是否有权限</span>\n  <span class="token keyword">const</span> hasAuth <span class="token operator">=</span> auth<span class="token punctuation">[</span>authKey<span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n  <span class="token comment">// 有权限时直接渲染内容</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>hasAuth<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> children<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n    <span class="token comment">// 无权限时显示指定 UI</span>\n    <span class="token keyword">return</span> fallback <span class="token operator">||</span> NoAuth\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> Auth<span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><p>使用如下：</p><div class="language-tsx ext-tsx line-numbers-mode"><pre class="language-tsx"><code><span class="token keyword">function</span> <span class="token function">Foo</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Auth</span></span> <span class="token attr-name">authKey</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token string">&#39;starRepo&#39;</span><span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">\n      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>button<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">Star</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Auth</span></span><span class="token punctuation">&gt;</span></span>\n  <span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="接口鉴权"><a class="header-anchor" href="#接口鉴权">#</a> 接口鉴权</h2>',22),e=(0,p.Uk)("请参考文档 "),o={href:"https://ice.work/docs/guide/basic/request",target:"_blank",rel:"noopener noreferrer"},c=(0,p.Uk)("数据请求"),l=(0,p.Uk)("，业务上封装统一的请求方法，与服务端约定接口协议，前端根据状态码判断无权限、未登录等状态，然后跳转到指定页面。"),u=(0,p.uE)('<h2 id="api"><a class="header-anchor" href="#api">#</a> API</h2><h3 id="useauth"><a class="header-anchor" href="#useauth">#</a> useAuth</h3><p>用于在函数组件中获取和设置权限数据的 Hooks。</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">const</span> <span class="token punctuation">[</span>auth<span class="token punctuation">,</span> setAuth<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useAuth</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>示例：</p><div class="language-tsx ext-tsx line-numbers-mode"><pre class="language-tsx"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> useAuth <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;ice&#39;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">function</span> <span class="token function">Foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> <span class="token punctuation">[</span>auth<span class="token punctuation">,</span> setAuth<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useAuth</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token comment">// auth：当前权限列表数据</span>\n  <span class="token comment">// setAuth：设置当前权限列表数据</span>\n\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">Foo</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">&gt;</span></span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h3 id="withauth"><a class="header-anchor" href="#withauth">#</a> withAuth</h3><p>用于在 Class 组件中获取和设置权限数据的高阶函数。</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token function">withAuth</span><span class="token punctuation">(</span>Component<span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>示例：</p><div class="language-tsx ext-tsx line-numbers-mode"><pre class="language-tsx"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span>\n\nClass Foo <span class="token keyword">extends</span> <span class="token class-name">React</span><span class="token punctuation">.</span>Component <span class="token punctuation">{</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> <span class="token punctuation">{</span> auth<span class="token punctuation">,</span> setAuth <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">;</span>\n    <span class="token comment">// auth：当前权限列表数据</span>\n    <span class="token comment">// setAuth：设置当前权限列表数据</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">Foo</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">&gt;</span></span>\n    <span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">withAuth</span><span class="token punctuation">(</span>Foo<span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div>',11),i={render:function(n,s){const a=(0,p.up)("OutboundLink");return(0,p.wg)(),(0,p.j4)(p.HY,null,[t,(0,p.Wm)("p",null,[e,(0,p.Wm)("a",o,[c,(0,p.Wm)(a)]),l]),u],64)}}}}]);