webpackJsonp([0xa2b344c6ad6b],{641:function(e,t){e.exports={data:{markdownRemark:{html:'<p>The coming time I will be spending a lot of time developing in <a href="https://www.polymer-project.org/">Polymer 2.0</a>, so I\'ve done some research and made a small project to test some aspects of setting up a real-world application with it. It is in <a href="https://github.com/mdvanes/polygram/">this repo</a>. It contains two basic elements (<em>polygram-searchbox</em> and <em>polygram-details</em>) that share state via Redux and also I\'ve separated the UI from the API with a container element (<em>polygram-ui-details</em> vs <em>polygram-details</em>). This separation of concerns simplifies reuse (I reuse <em>polygram-ui-details</em> in <em>polygram-marvel-details</em>).</p>\n<p>Polymer CLI provides convenient utilities (project scaffolding, building), but the linter and WCT (web component tester) are lacking because they are too limited compared to e.g. ESLint and Karma and in fact it is <a href="https://www.polymer-project.org/2.0/docs/tools/polymer-cli-commands#lint">encouraged to use an separate linter</a>. For that reason, I would have preferred that the Polymer linter would have been provided as an ESLint plugin.</p>\n<p>In the examples I use ES6 syntax without a transpiler, but I will soon have to investigate if bundling can be enriched with transpilation because I would at least like to try to use TypeScript. Of course we\'re losing the module imports (<code class="language-text">import x from &#39;./x&#39;</code>) in favor of html imports of elements (<code class="language-text">&lt;link rel=&quot;import&quot; href=&quot;x.html&quot;&gt;</code>). I think it\'s a loss, we finally have a standard for imports, why not stick to it?</p>\n<p>I would also still like to look at the possibility of adding <a href="https://github.com/gaearon/redux-thunk">Redux Thunk</a> and/or <a href="http://reactivex.io/rxjs/">RxJS</a> for async event handling. It seems that at least certain features of RxJS are already available in Polymer, e.g. <em>observers</em> on properties and the <em>debounce</em> attribute on <a href="https://www.webcomponents.org/element/PolymerElements/iron-ajax">iron-ajax</a>.</p>\n<p>On a side track I\'ve also done a small comparative case between Polymer and <a href="https://html.spec.whatwg.org/multipage/custom-elements.html">native web components</a>, currently on version 1. This example is in the same repo, in the <a href="https://github.com/mdvanes/polygram/tree/master/demo/HelloWorld">HelloWorld demo</a>. Polymer builds on web components and implements of component driven development</p>\n<p>So far the syntax is very similar, but Polymer is opinionated on certain design decisions (the HTML format, for instance) and adds some convience functions, and more importantly polyfills for wider support (see <a href="https://www.webcomponents.org/polyfills/">webcomponents-lite</a>) and a <a href="https://www.webcomponents.org/">catalog</a> of reusable web components.</p>',htmlAst:{type:"root",children:[{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"The coming time I will be spending a lot of time developing in "},{type:"element",tagName:"a",properties:{href:"https://www.polymer-project.org/"},children:[{type:"text",value:"Polymer 2.0"}]},{type:"text",value:", so I've done some research and made a small project to test some aspects of setting up a real-world application with it. It is in "},{type:"element",tagName:"a",properties:{href:"https://github.com/mdvanes/polygram/"},children:[{type:"text",value:"this repo"}]},{type:"text",value:". It contains two basic elements ("},{type:"element",tagName:"em",properties:{},children:[{type:"text",value:"polygram-searchbox"}]},{type:"text",value:" and "},{type:"element",tagName:"em",properties:{},children:[{type:"text",value:"polygram-details"}]},{type:"text",value:") that share state via Redux and also I've separated the UI from the API with a container element ("},{type:"element",tagName:"em",properties:{},children:[{type:"text",value:"polygram-ui-details"}]},{type:"text",value:" vs "},{type:"element",tagName:"em",properties:{},children:[{type:"text",value:"polygram-details"}]},{type:"text",value:"). This separation of concerns simplifies reuse (I reuse "},{type:"element",tagName:"em",properties:{},children:[{type:"text",value:"polygram-ui-details"}]},{type:"text",value:" in "},{type:"element",tagName:"em",properties:{},children:[{type:"text",value:"polygram-marvel-details"}]},{type:"text",value:")."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Polymer CLI provides convenient utilities (project scaffolding, building), but the linter and WCT (web component tester) are lacking because they are too limited compared to e.g. ESLint and Karma and in fact it is "},{type:"element",tagName:"a",properties:{href:"https://www.polymer-project.org/2.0/docs/tools/polymer-cli-commands#lint"},children:[{type:"text",value:"encouraged to use an separate linter"}]},{type:"text",value:". For that reason, I would have preferred that the Polymer linter would have been provided as an ESLint plugin."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"In the examples I use ES6 syntax without a transpiler, but I will soon have to investigate if bundling can be enriched with transpilation because I would at least like to try to use TypeScript. Of course we're losing the module imports ("},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"import x from './x'"}]},{type:"text",value:") in favor of html imports of elements ("},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:'<link rel="import" href="x.html">'}]},{type:"text",value:"). I think it's a loss, we finally have a standard for imports, why not stick to it?"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"I would also still like to look at the possibility of adding "},{type:"element",tagName:"a",properties:{href:"https://github.com/gaearon/redux-thunk"},children:[{type:"text",value:"Redux Thunk"}]},{type:"text",value:" and/or "},{type:"element",tagName:"a",properties:{href:"http://reactivex.io/rxjs/"},children:[{type:"text",value:"RxJS"}]},{type:"text",value:" for async event handling. It seems that at least certain features of RxJS are already available in Polymer, e.g. "},{type:"element",tagName:"em",properties:{},children:[{type:"text",value:"observers"}]},{type:"text",value:" on properties and the "},{type:"element",tagName:"em",properties:{},children:[{type:"text",value:"debounce"}]},{type:"text",value:" attribute on "},{type:"element",tagName:"a",properties:{href:"https://www.webcomponents.org/element/PolymerElements/iron-ajax"},children:[{type:"text",value:"iron-ajax"}]},{type:"text",value:"."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"On a side track I've also done a small comparative case between Polymer and "},{type:"element",tagName:"a",properties:{href:"https://html.spec.whatwg.org/multipage/custom-elements.html"},children:[{type:"text",value:"native web components"}]},{type:"text",value:", currently on version 1. This example is in the same repo, in the "},{type:"element",tagName:"a",properties:{href:"https://github.com/mdvanes/polygram/tree/master/demo/HelloWorld"},children:[{type:"text",value:"HelloWorld demo"}]},{type:"text",value:". Polymer builds on web components and implements of component driven development"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"So far the syntax is very similar, but Polymer is opinionated on certain design decisions (the HTML format, for instance) and adds some convience functions, and more importantly polyfills for wider support (see "},{type:"element",tagName:"a",properties:{href:"https://www.webcomponents.org/polyfills/"},children:[{type:"text",value:"webcomponents-lite"}]},{type:"text",value:") and a "},{type:"element",tagName:"a",properties:{href:"https://www.webcomponents.org/"},children:[{type:"text",value:"catalog"}]},{type:"text",value:" of reusable web components."}]}],data:{quirksMode:!1}},timeToRead:2,excerpt:"The coming time I will be spending a lot of time developing in  Polymer 2.0 , so I've done some research and made a small project to test…",frontmatter:{title:"Polymer 2 and Redux",cover:"/cover/",hash:"1072dd3d18ed73cd438fdbe12159845ee03386cf",date:"30-07-2017",category:"webdevelopment",tags:["webdevelopment"]},fields:{nextTitle:"Reducing cyclomatic complexity with functional operators",nextSlug:"/reducing-cyclomatic-complexity-with-functional-operators",prevTitle:"KnockoutJS and ES6",prevSlug:"/knockout-js-and-es-6",slug:"/polymer-2-and-redux"}}},pathContext:{slug:"/polymer-2-and-redux"}}}});
//# sourceMappingURL=path---polymer-2-and-redux-c1e54ea5f7fb66037766.js.map