(self.webpackChunksite=self.webpackChunksite||[]).push([[974],{3009:(n,s,a)=>{"use strict";a.r(s),a.d(s,{data:()=>p});const p={key:"v-31c847c6",path:"/guide/advanced/test.html",title:"编写单元测试",lang:"zh-CN",frontmatter:{title:"编写单元测试",order:16},excerpt:"",headers:[{level:2,title:"测试文件名约定",slug:"测试文件名约定",children:[]},{level:2,title:"使用 jest.config.js",slug:"使用-jest-config-js",children:[]},{level:2,title:"使用 Jest 相关参数",slug:"使用-jest-相关参数",children:[]},{level:2,title:"编写测试用例",slug:"编写测试用例",children:[{level:3,title:"使用 Snapshot 进行 UI 测试",slug:"使用-snapshot-进行-ui-测试",children:[]},{level:3,title:"使用 Enzyme 测试组件",slug:"使用-enzyme-测试组件",children:[]}]}],filePathRelative:"guide/advanced/test.md",git:{updatedTime:1621402728e3,contributors:[]}}},6987:(n,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>d});var p=a(6252);const t=(0,p.uE)('<p>icejs 支持 <code>icejs test</code> 命令，内置 Jest 配置提供前端的单元测试解决方案。</p><h2 id="测试文件名约定"><a class="header-anchor" href="#测试文件名约定">#</a> 测试文件名约定</h2><p>默认的 <code>testMatch</code> 为 <code>**/?*.(spec|test).(j|t)s?(x)</code>，即 icejs 将查找项目目录下所有符合条件的文件来执行测试</p><ul><li>文件后缀为 <code>.spec.js</code>、<code>.spec.jsx</code>、<code>.spec.ts</code>、<code>.spec.tsx</code></li><li>文件后缀为 <code>.test.js</code>、<code>.test.jsx</code>、<code>.test.ts</code>、<code>.test.tsx</code></li></ul><h2 id="使用-jest-config-js"><a class="header-anchor" href="#使用-jest-config-js">#</a> 使用 jest.config.js</h2><p><code>icejs</code> 已经内置了 Jest 测试所需的配置，提供了开箱即用的测试能力，如果需要定制自己的 Jest 配置，可以在项目目录下添加 <code>jest.config.js</code> 文件。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// jest.config.js</span>\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  testMatch<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;**/?*.e2e.js&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div>',7),e=(0,p.Uk)("jest.config.js 中自定义配置最终将和默认配置进行合并，更多 Jest 相关配置，请参见"),o={href:"https://jestjs.io/docs/en/configuration",target:"_blank",rel:"noopener noreferrer"},c=(0,p.Uk)("官网"),l=(0,p.Uk)("。"),u=(0,p.uE)('<h2 id="使用-jest-相关参数"><a class="header-anchor" href="#使用-jest-相关参数">#</a> 使用 Jest 相关参数</h2><p><code>icejs</code> 通过约定的方式支持所有 Jest CLI 参数，相关参数增加 jest 前缀即可。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># Jest CLI 参数 --config=&lt;path&gt;</span>\n$ icejs <span class="token builtin class-name">test</span> --jest-config<span class="token operator">=</span><span class="token operator">&lt;</span>path<span class="token operator">&gt;</span>\n\n<span class="token comment"># Jest CLI 参数 --watchAll</span>\n$ icejs <span class="token builtin class-name">test</span> --jest-watchAll\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="编写测试用例"><a class="header-anchor" href="#编写测试用例">#</a> 编写测试用例</h2><p>使用 Jest 提供的内置函数可以快速创建相应的测试用例</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">sum</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> a <span class="token operator">+</span> b<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token function">it</span><span class="token punctuation">(</span><span class="token string">&#39;sum numbers&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  <span class="token function">expect</span><span class="token punctuation">(</span><span class="token function">sum</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toEqual</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token function">expect</span><span class="token punctuation">(</span><span class="token function">sum</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toEqual</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>在日常 React 项目开发中，上述简单的例子不足以满足测试需求，测试实践中的需求往往可以可以分为两类，根据相应的需求可以选择社区的工具来帮助完成测试。</p><ul><li>通过快照进行 UI 测试 - 可以通过 Jest SnapShot 能力进行测试</li><li>DOM 交互测试 - 推荐使用 Enzyme，它提供了强大的 API 能力支持 UI 交互测试</li></ul><h3 id="使用-snapshot-进行-ui-测试"><a class="header-anchor" href="#使用-snapshot-进行-ui-测试">#</a> 使用 Snapshot 进行 UI 测试</h3><p>Snapshot 测试是 Jest 提供的能力，可以自动生成组件 UI 输出的描述文件，确保你的 UI 不会发生意外的改变。</p><p>组件实现代码：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// ./src/test.js</span>\n<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Test</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">&quot;test-component&quot;</span><span class="token operator">&gt;</span>\n      test\n    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>组件测试代码：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// ./test/snapshot.test.js</span>\n<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> renderer <span class="token keyword">from</span> <span class="token string">&#39;react-test-renderer&#39;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> Test <span class="token keyword">from</span> <span class="token string">&#39;../src/test&#39;</span><span class="token punctuation">;</span>\n\n<span class="token function">it</span><span class="token punctuation">(</span><span class="token string">&#39;renders&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> tree <span class="token operator">=</span> renderer\n    <span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>Test <span class="token operator">/</span><span class="token operator">&gt;</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">toJSON</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token function">expect</span><span class="token punctuation">(</span>tree<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toMatchSnapshot</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>在第一次运行后，Jest Snapshot 将会生成对应的 <code>.snap</code> 文件，如果组件的输出内容发生变更，则会导致测试用例无法通过。</p><h3 id="使用-enzyme-测试组件"><a class="header-anchor" href="#使用-enzyme-测试组件">#</a> 使用 Enzyme 测试组件</h3><p>Enzyme 是 Airbnb 提供的测试类库，它提供了一套简洁强大的 API。能够灵活操作 DOM，是 React 社区推荐的测试方案。</p><h4 id="准备工作"><a class="header-anchor" href="#准备工作">#</a> 准备工作</h4><p>安装测试相关依赖包</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">npm</span> <span class="token function">install</span> --save-dev enzyme enzyme-adapter-react-16 react-test-renderer\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>基于 React 开发的测试，需要安装对应的 React Adapter 来保证 enzyme 渲染的版本和项目中使用的版本一致，以 react 16 版本为例，需要进行如下设置：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> configure <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;enzyme&#39;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> Adapter <span class="token keyword">from</span> <span class="token string">&#39;enzyme-adapter-react-16&#39;</span><span class="token punctuation">;</span>\n\n<span class="token function">configure</span><span class="token punctuation">(</span><span class="token punctuation">{</span> adapter<span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Adapter</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>如果不想每个测试用例都去定义一遍，可以将上述内容保存至 <code>src/setupTests.js</code> 文件中，并自定义 Jest 配置中的 <code>setupFilesAfterEnv</code> ：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// jest.config.js</span>\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  setupFilesAfterEnv<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;&lt;rootDir&gt;/src/setupTests.js&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h4 id="组件测试用例"><a class="header-anchor" href="#组件测试用例">#</a> 组件测试用例</h4><p>Enzyme 提供 shallow 方法对组件进行浅渲染，即它仅仅会渲染至虚拟 DOM，不会返回真实的 DOM 节点。多数情况下 shallow 方法就能满足测试需求。</p><p>组件实现代码：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Test</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> <span class="token punctuation">[</span>content<span class="token punctuation">,</span> setContent<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token string">&#39;default content&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">function</span> <span class="token function">onContentChanged</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token function">setContent</span><span class="token punctuation">(</span><span class="token string">&#39;test&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">&quot;test-component&quot;</span><span class="token operator">&gt;</span>\n      <span class="token operator">&lt;</span>span<span class="token operator">&gt;</span><span class="token punctuation">{</span>content<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">&gt;</span>\n      <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span>onContentChanged<span class="token punctuation">}</span><span class="token operator">&gt;</span>button<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>\n    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>使用 shallow 方法测试组件：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> Test <span class="token keyword">from</span> <span class="token string">&#39;../src/test&#39;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> shallow <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;enzyme&#39;</span><span class="token punctuation">;</span>\n\n<span class="token function">it</span><span class="token punctuation">(</span><span class="token string">&#39;renders&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> wrapper <span class="token operator">=</span> <span class="token function">shallow</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>Test <span class="token operator">/</span><span class="token operator">&gt;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">const</span> button <span class="token operator">=</span> wrapper<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token string">&#39;button&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">at</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token comment">// 模拟触发 点击 事件，来改变当前的 state</span>\n  button<span class="token punctuation">.</span><span class="token function">simulate</span><span class="token punctuation">(</span><span class="token string">&#39;click&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token function">expect</span><span class="token punctuation">(</span>wrapper<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token string">&#39;span&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">at</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBe</span><span class="token punctuation">(</span><span class="token string">&#39;test&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div>',30),r=(0,p.Uk)("更多测试用例编写，可以参考 "),i={href:"https://airbnb.io/enzyme/",target:"_blank",rel:"noopener noreferrer"},k=(0,p.Uk)("Enzyme 官网"),d={render:function(n,s){const a=(0,p.up)("OutboundLink");return(0,p.wg)(),(0,p.j4)(p.HY,null,[t,(0,p.Wm)("p",null,[e,(0,p.Wm)("a",o,[c,(0,p.Wm)(a)]),l]),u,(0,p.Wm)("p",null,[r,(0,p.Wm)("a",i,[k,(0,p.Wm)(a)])])],64)}}}}]);