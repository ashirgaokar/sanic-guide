(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{460:function(t,a,s){"use strict";s.r(a);var e=s(22),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"配置-configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置-configuration"}},[t._v("#")]),t._v(" 配置（Configuration）")]),t._v(" "),s("h2",{attrs:{id:"基础-basics"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基础-basics"}},[t._v("#")]),t._v(" 基础（Basics）")]),t._v(" "),s("div",{staticClass:"multicolumn",staticStyle:{display:"flex","flex-direction":"row","align-items":"flex-start"}},[s("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[s("p",[t._v("Sanic 会将配置保存在应用程序对象的Config属性中，它是一个可以通过字典的形式或者属性的形式进行操作的对象。")])]),t._v(" "),s("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[t._v("app "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Sanic"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"myapp"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\napp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("config"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("DB_NAME "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"appdb"')]),t._v("\napp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("config"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"DB_USER"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"appuser"')]),t._v("\n")])])])])]),t._v(" "),s("div",{staticClass:"multicolumn",staticStyle:{display:"flex","flex-direction":"row","align-items":"flex-start"}},[s("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[s("p",[t._v("因此，您也可以使用 "),s("code",[t._v("update()")]),t._v(" 方法来更新配置。")])]),t._v(" "),s("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[t._v("db_settings "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'DB_HOST'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'localhost'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'DB_NAME'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'appdb'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'DB_USER'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'appuser'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\napp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("config"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("update"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("db_settings"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("小提示")]),t._v(" "),s("p",[t._v("在 Sanic 中， 标准做法是使用 "),s("strong",[t._v("大写字母")]),t._v(" 来命名您的配置名称，如果您将大写名称和小写名称混合使用，可能会导致某些配置无法正常读取，遇到无法解释的状况。")])]),t._v(" "),s("h2",{attrs:{id:"配置加载-loading"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置加载-loading"}},[t._v("#")]),t._v(" 配置加载（Loading）")]),t._v(" "),s("h3",{attrs:{id:"环境变量-environment-variables"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#环境变量-environment-variables"}},[t._v("#")]),t._v(" 环境变量（Environment variables）")]),t._v(" "),s("div",{staticClass:"multicolumn",staticStyle:{display:"flex","flex-direction":"row","align-items":"flex-start"}},[s("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[s("p",[t._v("任何使用 "),s("code",[t._v("SANIC_")]),t._v(" 作为前缀的环境变量都会被加载并应用于 Sanic 配置。例如：在环境变量中设置 "),s("code",[t._v("SANIC_REQUEST_TIMEOUT")]),t._v(" 环境变量后，将会被应用程序自动加载，并传递到 "),s("code",[t._v("REQUEST_TIMEOUT")]),t._v(" 配置变量中。")])]),t._v(" "),s("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("SANIC_REQUEST_TIMEOUT")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("\n")])])]),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("config"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("REQUEST_TIMEOUT"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("\n")])])])])]),t._v(" "),s("div",{staticClass:"multicolumn",staticStyle:{display:"flex","flex-direction":"row","align-items":"flex-start"}},[s("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[s("p",[t._v("您可以自动选择启动时应用程序要读取的变量前缀。")])]),t._v(" "),s("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("MYAPP_REQUEST_TIMEOUT")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("\n")])])]),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" app "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Sanic"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__name__"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" load_env"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'MYAPP_'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("config"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("REQUEST_TIMEOUT"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("\n")])])])])]),t._v(" "),s("div",{staticClass:"multicolumn",staticStyle:{display:"flex","flex-direction":"row","align-items":"flex-start"}},[s("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[s("p",[t._v("同样，您可以完全禁用环境变量的加载。")])]),t._v(" "),s("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[t._v("app "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Sanic"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__name__"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" load_env"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("False")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])]),t._v(" "),s("h3",{attrs:{id:"使用通用方法加载-using-sanic-update-config"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用通用方法加载-using-sanic-update-config"}},[t._v("#")]),t._v(" 使用通用方法加载（Using Sanic.update_config）")]),t._v(" "),s("p",[s("code",[t._v("Sanic")]),t._v(" 中有一种通用的方法用于加载配置："),s("code",[t._v("app.update_config")]),t._v(" 。您可以通过向它提供文件路径，字典，类，或者几乎任何其他种类的对象的路径来更新配置。")]),t._v(" "),s("h4",{attrs:{id:"通过文件加载-from-a-file"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#通过文件加载-from-a-file"}},[t._v("#")]),t._v(" 通过文件加载（From a file）")]),t._v(" "),s("div",{staticClass:"multicolumn",staticStyle:{display:"flex","flex-direction":"row","align-items":"flex-start"}},[s("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[s("p",[t._v("假设您有一个名为 "),s("code",[t._v("my_config.py")]),t._v(" 的文件，它的内容如下：")])]),t._v(" "),s("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# my_config.py")]),t._v("\nA "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\nB "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n")])])])])]),t._v(" "),s("div",{staticClass:"multicolumn",staticStyle:{display:"flex","flex-direction":"row","align-items":"flex-start"}},[s("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[s("p",[t._v("您可以通过将文件路径传递给 "),s("code",[t._v("app.update_config")]),t._v(" 进行配置加载。")])]),t._v(" "),s("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("update_config"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/path/to/my_config.py"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("config"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("A"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n")])])])])]),t._v(" "),s("div",{staticClass:"multicolumn",staticStyle:{display:"flex","flex-direction":"row","align-items":"flex-start"}},[s("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[s("p",[t._v("它同样接受 bash 风格的环境变量。")])]),t._v(" "),s("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("my_path")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/path/to"')]),t._v("\n")])])]),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[t._v("app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("update_config"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"${my_path}/my_config.py"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("小提示")]),t._v(" "),s("p",[t._v("请记住，您必须以 "),s("code",[t._v("$environment_variable")]),t._v(" 的格式来提供环境变量。而且"),s("code",[t._v("${environment_variable}")]),t._v(" 被视作纯文本（没有使用字符串格式化）")])]),t._v(" "),s("h4",{attrs:{id:"通过字典加载-from-a-dict"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#通过字典加载-from-a-dict"}},[t._v("#")]),t._v(" 通过字典加载（From a dict）")]),t._v(" "),s("div",{staticClass:"multicolumn",staticStyle:{display:"flex","flex-direction":"row","align-items":"flex-start"}},[s("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[s("p",[s("code",[t._v("app.update_config")]),t._v(" 的方法同样适用于字典")])]),t._v(" "),s("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[t._v("app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("update_config"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"A"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"B"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])]),t._v(" "),s("h4",{attrs:{id:"通过类加载-from-a-class-or-object"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#通过类加载-from-a-class-or-object"}},[t._v("#")]),t._v(" 通过类加载（From a class or object）")]),t._v(" "),s("div",{staticClass:"multicolumn",staticStyle:{display:"flex","flex-direction":"row","align-items":"flex-start"}},[s("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[s("p",[t._v("您可以自定义配置类，并将该类传递给 "),s("code",[t._v("app.update_config")])])]),t._v(" "),s("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyConfig")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    A "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n    B "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n\napp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("update_config"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("MyConfig"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])]),t._v(" "),s("div",{staticClass:"multicolumn",staticStyle:{display:"flex","flex-direction":"row","align-items":"flex-start"}},[s("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[s("p",[t._v("甚至您可以向它传递一个实例化好的对象")])]),t._v(" "),s("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[t._v("app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("update_config"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("MyConfig"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])]),t._v(" "),s("h2",{attrs:{id:"内置配置-builtin-values"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#内置配置-builtin-values"}},[t._v("#")]),t._v(" 内置配置（Builtin values）")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[t._v("变量名称")]),t._v(" "),s("th",[t._v("默认值")]),t._v(" "),s("th",[t._v("说明")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("REQUEST_MAX_SIZE")]),t._v(" "),s("td",[t._v("100000000")]),t._v(" "),s("td",[t._v("Request 的最大字节数")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("REQUEST_BUFFER_QUEUE_SIZE")]),t._v(" "),s("td",[t._v("100")]),t._v(" "),s("td",[t._v("请求流缓冲区队列大小")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("REQUEST_TIMEOUT")]),t._v(" "),s("td",[t._v("60")]),t._v(" "),s("td",[t._v("请求超时时间")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("RESPONSE_TIMEOUT")]),t._v(" "),s("td",[t._v("60")]),t._v(" "),s("td",[t._v("响应超时时间")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("KEEP_ALIVE")]),t._v(" "),s("td",[t._v("True")]),t._v(" "),s("td",[t._v("是否启用长连接")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("KEEP_ALIVE_TIMEOUT")]),t._v(" "),s("td",[t._v("5")]),t._v(" "),s("td",[t._v("长连接超时时间")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("WEBSOCKET_MAX_SIZE")]),t._v(" "),s("td",[t._v("2^20")]),t._v(" "),s("td",[t._v("websocket 传入消息最大字节数")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("WEBSOCKET_MAX_QUEUE")]),t._v(" "),s("td",[t._v("32")]),t._v(" "),s("td",[t._v("websocket 传入消息最小字节数")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("WEBSOCKET_READ_LIMIT")]),t._v(" "),s("td",[t._v("2^16")]),t._v(" "),s("td",[t._v("websocket 传入字节的缓冲区上限")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("WEBSOCKET_WRITE_LIMIT")]),t._v(" "),s("td",[t._v("2^16")]),t._v(" "),s("td",[t._v("websocket 传出字节的缓冲区上限")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("WEBSOCKET_PING_INTERVAL")]),t._v(" "),s("td",[t._v("20")]),t._v(" "),s("td",[t._v("websocket ping 帧 发送间隔")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("WEBSOCKET_PING_TIMEOUT")]),t._v(" "),s("td",[t._v("20")]),t._v(" "),s("td",[t._v("websocket pong 帧 响应超时时间")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("GRACEFUL_SHUTDOWN_TIMEOUT")]),t._v(" "),s("td",[t._v("15.0")]),t._v(" "),s("td",[t._v("强制关闭非空闲连接超时时间")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("ACCESS_LOG")]),t._v(" "),s("td",[t._v("True")]),t._v(" "),s("td",[t._v("访问日志开关")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("FORWARDED_SECRET")]),t._v(" "),s("td",[t._v("None")]),t._v(" "),s("td",[t._v("用于安全地识别特定的代理服务器（见下文）")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("PROXIES_COUNT")]),t._v(" "),s("td",[t._v("None")]),t._v(" "),s("td",[t._v("应用程序钱代理服务器的数量（见下文）")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("FORWARDED_FOR_HEADER")]),t._v(" "),s("td",[t._v("X-Forwarded-For")]),t._v(" "),s("td",[t._v("客户端IP和代理IP：X-Forwarded-For")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("REAL_IP_HEADER")]),t._v(" "),s("td",[t._v("None")]),t._v(" "),s("td",[t._v("客户端真实IP： X-Real-IP")])])])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),s("p",[t._v("如果您处于 ASGI 模式， 那么 "),s("code",[t._v("WEBSOCKET_")]),t._v(" 的值将会被忽略")])]),t._v(" "),s("h2",{attrs:{id:"超时-timeouts"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#超时-timeouts"}},[t._v("#")]),t._v(" 超时（Timeouts）")]),t._v(" "),s("h3",{attrs:{id:"请求超时-request-timeout"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#请求超时-request-timeout"}},[t._v("#")]),t._v(" 请求超时（REQUEST_TIMEOUT）")]),t._v(" "),s("p",[t._v("请求时间用于衡量从建立 TCP 连接到整个 HTTP 请求接收完成所花费的时间。如果请求时间超过了设定的 "),s("code",[t._v("REQUEST_TIMEOUT")]),t._v(" ，Sanic 会将其视为客户端错误并将 HTTP 408 作为响应发送给客户端。如果您的客户端需要频繁传递大量的数据， 请您将此参数调至更高或减少传输数据。")]),t._v(" "),s("h3",{attrs:{id:"响应超时-response-timeout"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#响应超时-response-timeout"}},[t._v("#")]),t._v(" 响应超时（RESPONSE_TIMEOUT）")]),t._v(" "),s("p",[t._v("响应时间用于衡量从整个 HTTP 请求接收完成到 Sanic 将响应完整发送至客户端所花费的时间。如果响应时间超过了设定的 "),s("code",[t._v("RESONSE_TIMEOUT")]),t._v(" ，Sanic 会将其视为服务端错误并将 HTTP 503 作为响应发送给客户端。如果您的应用程序需要消耗大量的时间来进行响应，请尝试将此参数调至更高或优化响应效率。")]),t._v(" "),s("h3",{attrs:{id:"长连接超时-keep-alive-timeout"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#长连接超时-keep-alive-timeout"}},[t._v("#")]),t._v(" 长连接超时（KEEP_ALIVE_TIMEOUT）")]),t._v(" "),s("h4",{attrs:{id:"什么是长连接-长连接超时有什么作用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#什么是长连接-长连接超时有什么作用"}},[t._v("#")]),t._v(" 什么是长连接？长连接超时有什么作用？")]),t._v(" "),s("p",[s("code",[t._v("Keep-Alive")]),t._v(" 中文叫做长连接，它是 HTTP1.1 中引入的 HTTP 功能。当发送 HTTP 请求时，客户端（通常是浏览器）可以通过设置 "),s("code",[t._v("Keep-Alive")]),t._v(" 标头来指示 http 服务器（Sanic）在发送响应之后不关闭 TCP 连接。这将允许客户端重用现有的 TCP 连接来发送后续的 HTTP 请求，以提高客户端和服务端之间的通讯效率。")]),t._v(" "),s("p",[t._v("在默认情况下，Sanic 中的 "),s("code",[t._v("Keep-Alive")]),t._v(" 的值为 "),s("code",[t._v("True")]),t._v(" 。如果您的应用程序不需要此功能，可以将其设置为 False。不过此举将导致 Sanic 无视 "),s("code",[t._v("Keep_Alive")]),t._v(" 标头，且所有的客户端连接在响应发送完成之后被立即关闭。")]),t._v(" "),s("p",[t._v("TCP连接打开的时长本质上由服务器自身决定，在 Sanic 中，使用 "),s("code",[t._v("KEEP_ALIVE_TIMEOUT")]),t._v(" 作为该值。默认情况下它设置为 5 秒。这与 Apache 的默认值相同。该值足够客户端发送一个新的请求。如非必要请勿更改此项。如需更改，请勿超过 75 秒，除非您确认客户端支持TCP连接保持足够久。")]),t._v(" "),s("p",[t._v("仅供参考：")]),t._v(" "),s("ul",[s("li",[t._v("Apache httpd 服务器默认 KEEP_ALIVE_TIMEOUT = 5秒")]),t._v(" "),s("li",[t._v("Nginx 服务器默认 KEEP_ALIVE_TIMEOUT = 75秒")]),t._v(" "),s("li",[t._v("Nginx 性能调整准则使用 KEEP_ALIVE_TIMEOUT = 15秒")]),t._v(" "),s("li",[t._v("IE（5-9）客户端 KEEP_ALIVE_LIMIT = 60秒")]),t._v(" "),s("li",[t._v("Firefox 客户端 KEEP_ALIVE_LIMIT = 115秒")]),t._v(" "),s("li",[t._v("Opera 11 客户端 KEEP_ALIVE_LIMIT  = 120秒")]),t._v(" "),s("li",[t._v("Chrome 13+ 客户端 KEEP_ALIVE_LIMIT > 300+秒")])]),t._v(" "),s("h2",{attrs:{id:"代理配置-proxy-configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#代理配置-proxy-configuration"}},[t._v("#")]),t._v(" 代理配置（Proxy configuration）")]),t._v(" "),s("p",[t._v("请参照 "),s("RouterLink",{attrs:{to:"/advanced/proxy-headers.html"}},[t._v("代理配置")])],1)])}),[],!1,null,null,null);a.default=n.exports}}]);