(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{456:function(t,s,a){"use strict";a.r(s);var e=a(22),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"日志-logging"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#日志-logging"}},[t._v("#")]),t._v(" 日志(Logging)")]),t._v(" "),a("p",[t._v("Sanic 允许您根据请求进行不同类型的记录（访问日志、错误日志）"),a("a",{attrs:{href:"https://docs.python.org/3/howto/logging.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Python 日志 API"),a("OutboundLink")],1),t._v("。如果您想创建一个新的配置，您应该有一些关于Python logging 的基础知识。")]),t._v(" "),a("h2",{attrs:{id:"快速开始-quick-start"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#快速开始-quick-start"}},[t._v("#")]),t._v(" 快速开始(Quick Start)")]),t._v(" "),a("div",{staticClass:"multicolumn",staticStyle:{display:"flex","flex-direction":"row","align-items":"flex-start"}},[a("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[a("p",[t._v("使用默认配置的简单示例如下：")])]),t._v(" "),a("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" sanic "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Sanic\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" sanic"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("log "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" logger\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" sanic"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("response "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" text\n\napp "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Sanic"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'logging_example'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("route")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("test")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    logger"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("info"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Here is your log'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" text"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Hello World!'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" __name__ "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"__main__"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("run"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("debug"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" access_log"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])]),t._v(" "),a("p",[t._v("在服务器运行后，您应该看到以下的日志信息：")]),t._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("[2021-01-04 15:26:26 +0200] [1929659] [INFO] Goin' Fast @ http://127.0.0.1:8000\n[2021-01-04 15:26:26 +0200] [1929659] [INFO] Starting worker [1929659]\n")])])]),a("p",[t._v("您可以尝试向服务器发送请求，之后，您会看到输出如下的日志信息：")]),t._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("[2021-01-04 15:26:28 +0200] [1929659] [INFO] Here is your log\n[2021-01-04 15:26:28 +0200] - (sanic.access)[INFO][127.0.0.1:44228]: GET http://localhost:8000/  200 -1\n")])])]),a("h2",{attrs:{id:"自定义日志-changing-sanic-loggers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自定义日志-changing-sanic-loggers"}},[t._v("#")]),t._v(" 自定义日志(Changing Sanic loggers)")]),t._v(" "),a("p",[t._v("如果要使用自己的日志配置，只需使用"),a("code",[t._v("logging.config.dictConfig")]),t._v("，或者在初始化Sanic app时传递"),a("code",[t._v("log_config")]),t._v(" 即可。")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("app "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Sanic"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'logging_example'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" log_config"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("LOGGING_CONFIG"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" __name__ "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"__main__"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("run"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("access_log"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("False")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("FYI 小提示")]),t._v(" "),a("p",[t._v("在 Python 中处理日志是一个比较轻松的操作，但是如果您需要处理大量的请求，那么性能可能回成为一个瓶颈。添加访问日志的耗时将会增加，这将会增大您的系统开销。")]),t._v(" "),a("p",[t._v("使用 Nginx 记录访问日志是一个减轻系统开销的好办法，将 Sanic 部署在 Nginx 代理之后，并禁用 Sanic 的 "),a("code",[t._v("access_log")]),t._v("，您将能够看到性能的显著提升")]),t._v(" "),a("p",[t._v("为了在生产环境下获得最佳性能，建议在禁用 "),a("code",[t._v("debug")]),t._v(" 和 "),a("code",[t._v("access_log")]),t._v(" 的情况下运行Sanic："),a("code",[t._v("app.run(debug=False, access_log=False)")])])]),t._v(" "),a("h2",{attrs:{id:"配置-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置-configuration"}},[t._v("#")]),t._v(" 配置（Configuration）")]),t._v(" "),a("p",[t._v("Sanic 的默认认知配置为："),a("code",[t._v("sanic.log.LOGGING_CONFIG_DEFAULTS")]),t._v("。")]),t._v(" "),a("div",{staticClass:"multicolumn",staticStyle:{display:"flex","flex-direction":"row","align-items":"flex-start"}},[a("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[a("p",[t._v("Sanic 使用了三个日志器，如果您想要创建并使用自己的日志配置，则您需要自定义该配置：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[a("strong",[t._v("Logger Name")])]),t._v(" "),a("th",[a("strong",[t._v("Use Case")])])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("sanic.root")])]),t._v(" "),a("td",[t._v("Used to log inernal messages.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("sanic.error")])]),t._v(" "),a("td",[t._v("Used to log error logs.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("sanic.access")])]),t._v(" "),a("td",[t._v("Used to log access logs.")])])])])]),t._v(" "),a("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}})]),t._v(" "),a("h3",{attrs:{id:"日志格式-log-format"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#日志格式-log-format"}},[t._v("#")]),t._v(" 日志格式（Log format）")]),t._v(" "),a("p",[t._v("除了 Python 提供的默认参数("),a("code",[t._v("asctime")]),t._v("、"),a("code",[t._v("levelname")]),t._v("、"),a("code",[t._v("message")]),t._v(")之外，Sanic 还为日志器提供了附加参数：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("参数名称")]),t._v(" "),a("th",[t._v("参数值")]),t._v(" "),a("th",[t._v("参数类型")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("host")])]),t._v(" "),a("td",[a("code",[t._v("request.ip")])]),t._v(" "),a("td",[a("code",[t._v("str")])])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("request")])]),t._v(" "),a("td",[a("code",[t._v('request.method + " " + request.url')])]),t._v(" "),a("td",[a("code",[t._v("str")])])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("status")])]),t._v(" "),a("td",[a("code",[t._v("response")])]),t._v(" "),a("td",[a("code",[t._v("int")])])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("byte")])]),t._v(" "),a("td",[a("code",[t._v("len(response.body)")])]),t._v(" "),a("td",[a("code",[t._v("int")])])])])]),t._v(" "),a("p",[t._v("默认的访问日志格式为:")]),t._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("%(asctime)s - (%(name)s)[%(levelname)s][%(host)s]: %(request)s %(message)s %(status)d %(byte)d\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);