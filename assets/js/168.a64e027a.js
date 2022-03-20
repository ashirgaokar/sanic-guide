(window.webpackJsonp=window.webpackJsonp||[]).push([[168],{624:function(t,s,a){"use strict";a.r(s);var n=a(19),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"httpメソッド"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#httpメソッド"}},[t._v("#")]),t._v(" HTTPメソッド")]),t._v(" "),a("h2",{attrs:{id:"自動エンドポイント"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自動エンドポイント"}},[t._v("#")]),t._v(" 自動エンドポイント")]),t._v(" "),a("p",[t._v("デフォルトの動作は、すべての"),a("code",[t._v("GET")]),t._v("ルートに"),a("code",[t._v("HEAD")]),t._v("エンドポイントを、そして全ルートに"),a("code",[t._v("OPTIONS")]),t._v("エンドポイントを自動的に生成することです。\nさらに、"),a("code",[t._v("TRACE")]),t._v("エンドポイントを自動的に生成するオプションもあります。しかし、これらは初期状態では有効ではありません。")]),t._v(" "),a("tabs",[a("tab",{attrs:{name:"HEAD"}},[a("ul",[a("li",[a("strong",[t._v("Configuration")]),t._v(": "),a("code",[t._v("AUTO_HEAD")]),t._v(" (default "),a("code",[t._v("True")]),t._v(")")]),t._v(" "),a("li",[a("strong",[t._v("MDN")]),t._v(": "),a("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/HEAD",target:"_blank",rel:"noopener noreferrer"}},[t._v("Read more"),a("OutboundLink")],1)])]),t._v(" "),a("p",[a("code",[t._v("HEAD")]),t._v(" リクエストはヘッダーを提供し、それ以外は "),a("code",[t._v("GET")]),t._v(" リクエストが提供するものと同じレスポンスを提供します。\nしかし、実際にはボディを返しません。")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("hello_world")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" text"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello, world."')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("上記のルート定義があれば、Sanic Extensionsはここで見られるように"),a("code",[t._v("HEAD")]),t._v("レスポンスを有効にします。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("$ curl localhost:8000 --head\nHTTP/1.1 200 OK\naccess-control-allow-origin: *\ncontent-length: 13\nconnection: keep-alive\ncontent-type: text/plain; charset=utf-8\n")])])])]),t._v(" "),a("tab",{attrs:{name:"OPTIONS"}},[a("ul",[a("li",[a("strong",[t._v("Configuration")]),t._v(": "),a("code",[t._v("AUTO_OPTIONS")]),t._v(" (default "),a("code",[t._v("True")]),t._v(")")]),t._v(" "),a("li",[a("strong",[t._v("MDN")]),t._v(": "),a("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/OPTIONS",target:"_blank",rel:"noopener noreferrer"}},[t._v("Read more"),a("OutboundLink")],1)])]),t._v(" "),a("p",[a("code",[t._v("OPTIONS")]),t._v(" リクエストは、クライアントが与えられたエンドポイントとの通信をどのように許可されるかの詳細を受信者に提供します。")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("hello_world")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" text"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello, world."')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("上記のルート定義があれば、Sanic Extensionsはここで見られるように"),a("code",[t._v("HEAD")]),t._v("レスポンスを有効にします。")]),t._v(" "),a("p",[t._v("この例では、"),a("code",[t._v("access-control-allow-origins")]),t._v("も表示されていることに注意することが重要です。\nこれは、"),a("RouterLink",{attrs:{to:"/ja/plugins/sanic-ext/http/cors.html"}},[t._v("CORS保護")]),t._v("がデフォルトで有効になっているためです。")],1),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("$ curl localhost:8000 -X OPTIONS -i\nHTTP/1.1 204 No Content\nallow: GET,HEAD,OPTIONS\naccess-control-allow-origin: *\nconnection: keep-alive\n")])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("Sanic Extensionsがこれらのルートを自動的にセットアップしてくれるとしても、手動で `@app.options` ルートを作成することにした場合、それは オーバーライド**されません**。")])])]),t._v(" "),a("tab",{attrs:{name:"TRACE"}},[a("ul",[a("li",[a("strong",[t._v("Configuration")]),t._v(": "),a("code",[t._v("AUTO_TRACE")]),t._v(" (default "),a("code",[t._v("False")]),t._v(")")]),t._v(" "),a("li",[a("strong",[t._v("MDN")]),t._v(": "),a("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/TRACE",target:"_blank",rel:"noopener noreferrer"}},[t._v("Read more"),a("OutboundLink")],1)])]),t._v(" "),a("p",[t._v("デフォルトでは、"),a("code",[t._v("TRACE")]),t._v("エンドポイントは自動的に作成"),a("strong",[t._v("されません")]),t._v("。しかし、Sanic Extensions では、必要であれば作成することができます。これはバニラSanicでは許可されていないことである。")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("route")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" methods"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"trace"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("handler")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n")])])]),a("p",[t._v("これらのエンドポイントの自動作成を有効にするには、まずSanicを拡張する際に有効にする必要があります。")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" sanic_ext "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Extend"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Config\n\nExtend"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" config"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("Config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("auto_trace"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("さて、いくつかのエンドポイントが設定されていると仮定して、以下のようにトレースすることができます。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("$ curl localhost:8000 -X TRACE\nTRACE / HTTP/1.1\nHost: localhost:9999\nUser-Agent: curl/7.76.1\nAccept: */*\n")])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("`AUTO_TRACE` を設定すると、特にアプリケーションがプロキシの後ろに配置されている場合、非常に便利です。")]),t._v(" "),a("p",[t._v("は、プロキシがどのように動作しているかを判断するのに役立ちます。")])])])],1),t._v(" "),a("h2",{attrs:{id:"メソッドの追加サポート"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#メソッドの追加サポート"}},[t._v("#")]),t._v(" メソッドの追加サポート")]),t._v(" "),a("p",[t._v("バニラSanicでは、以下のHTTPメソッドでエンドポイントを構築することができます。")]),t._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/en/guide/basics/routing.html#get"}},[t._v("GET")])],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/en/guide/basics/routing.html#post"}},[t._v("POST")])],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/en/guide/basics/routing.html#put"}},[t._v("PUT")])],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/en/guide/basics/routing.html#head"}},[t._v("HEAD")])],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/en/guide/basics/routing.html#options"}},[t._v("OPTIONS")])],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/en/guide/basics/routing.html#patch"}},[t._v("PATCH")])],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/en/guide/basics/routing.html#delete"}},[t._v("DELETE")])],1)]),t._v(" "),a("p",[t._v("もっと見たい場合は"),a("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods",target:"_blank",rel:"noopener noreferrer"}},[t._v("MDN Web Docs"),a("OutboundLink")],1),t._v(" を見てください。")]),t._v(" "),a("div",{staticClass:"multicolumn",staticStyle:{display:"flex","flex-direction":"row","align-items":"flex-start"}},[a("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[a("p",[t._v("しかし、さらに2つの「標準的な」HTTPメソッドがあります: "),a("code",[t._v("TRACE")]),t._v(" と "),a("code",[t._v("CONNECT")]),t._v(" です。\nSanic Extensions は、これらのメソッドを使用したエンドポイントの構築を可能にするもので、他の方法では許可されません。")]),t._v(" "),a("p",[t._v("これは便利なメソッドである "),a("code",[t._v("@app.trace")]),t._v(" や "),a("code",[t._v("@app.connect")]),t._v(" を有効にするものではないことに注意してください。\nこの例で示されているように、"),a("code",[t._v("@app.route")]),t._v("を使用する必要があります。")])]),t._v(" "),a("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("route")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" methods"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"trace"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"connect"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("handler")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("_"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" empty"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])])],1)}),[],!1,null,null,null);s.default=e.exports}}]);