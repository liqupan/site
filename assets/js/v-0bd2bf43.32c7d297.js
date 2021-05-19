(self.webpackChunksite=self.webpackChunksite||[]).push([[8593],{4976:(n,s,a)=>{"use strict";a.r(s),a.d(s,{data:()=>e});const e={key:"v-0bd2bf43",path:"/plugin/list/webpack5.html",title:"webpack5",lang:"zh-CN",frontmatter:{title:"webpack5",order:4},excerpt:"",headers:[{level:2,title:"Install",slug:"install",children:[]},{level:2,title:"Usage",slug:"usage",children:[{level:3,title:"配置 Module Federation",slug:"配置-module-federation",children:[]}]}],filePathRelative:"plugin/list/webpack5.md",git:{updatedTime:162142938e4,contributors:[]}}},303:(n,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>p});const e=(0,a(6252).uE)('<p>用于 icejs 在使用 webpack 5 能力上的兼容处理</p><h2 id="install"><a class="header-anchor" href="#install">#</a> Install</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">npm</span> i --save-dev build-plugin-webpack5 webpack\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="usage"><a class="header-anchor" href="#usage">#</a> Usage</h2><p><code>build.json</code> 修改如下：</p><div class="language-diff ext-diff line-numbers-mode"><pre class="language-diff"><code>{\n<span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line">  &quot;customWebpack&quot;: true,\n</span></span><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line"> &quot;plugins&quot;: [\n</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line">    &quot;build-plugin-webpack5&quot;\n</span></span><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line"> ]\n</span></span>}\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="配置-module-federation"><a class="header-anchor" href="#配置-module-federation">#</a> 配置 Module Federation</h3><p>在上述开启 webpack 5 能力的基础上，通过配置 moduleFederation 可以配置 Module Federation 相关参数：</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;customWebpack&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;moduleFederation&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">&quot;remotes&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;remote&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;shared&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;react&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;react-dom&quot;</span><span class="token punctuation">]</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;plugins&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;build-plugin-webpack5&quot;</span><span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div>',9),p={render:function(n,s){return e}}}}]);