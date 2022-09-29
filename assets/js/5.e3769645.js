(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{253:function(t,e,s){},254:function(t,e,s){},255:function(t,e,s){},256:function(t,e,s){},263:function(t,e,s){"use strict";s(97);var a=s(301),i=s(250),n={name:"NavLinks",components:{NavLink:s(266).a,DropdownLink:a.a},computed:{userNav(){return this.$themeLocaleConfig.nav||this.$site.themeConfig.nav||[]},nav(){const{locales:t}=this.$site;if(t&&Object.keys(t).length>1){const e=this.$page.path,s=this.$router.options.routes,a=this.$site.themeConfig.locales||{},i={text:this.$themeLocaleConfig.selectText||"Languages",ariaLabel:this.$themeLocaleConfig.ariaLabel||"Select language",items:Object.keys(t).map(i=>{const n=t[i],o=a[i]&&a[i].label||n.lang;let r;return n.lang===this.$lang?r=e:(r=e.replace(this.$localeConfig.path,i),s.some(t=>t.path===r)||(r=i)),{text:o,link:r}})};return[...this.userNav,i]}return this.userNav},help(){return{text:this.$themeLocaleConfig.helpText||this.$site.themeConfig.helpTextFallback,link:`${this.$root.$localeConfig.path}${this.$site.themeConfig.helpLink}`,type:"link"}},userLinks(){const t=(this.nav||[]).map(t=>Object.assign(Object(i.j)(t),{items:(t.items||[]).map(i.j)}));return t.push(this.help),t},repoLink(){const{repo:t}=this.$site.themeConfig;return t?/^https?:/.test(t)?t:"https://github.com/"+t:null},repoLabel(){if(!this.repoLink)return;if(this.$site.themeConfig.repoLabel)return this.$site.themeConfig.repoLabel;const t=this.repoLink.match(/^https?:\/\/[^/]+/)[0],e=["GitHub","GitLab","Bitbucket"];for(let s=0;s<e.length;s++){const a=e[s];if(new RegExp(a,"i").test(t))return a}return"Source"}}},o=(s(268),s(5)),r=Object(o.a)(n,(function(){var t=this,e=t._self._c;return t.userLinks.length||t.repoLink?e("nav",{staticClass:"nav-links"},[t._l(t.userLinks,(function(t){return e("div",{key:t.link,staticClass:"nav-item"},["links"===t.type?e("DropdownLink",{attrs:{item:t}}):e("NavLink",{attrs:{item:t}})],1)})),t._v(" "),t.repoLink?e("a",{staticClass:"repo-link",attrs:{href:t.repoLink,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n    "+t._s(t.repoLabel)+"\n    "),e("OutboundLink")],1):t._e()],2):t._e()}),[],!1,null,null,null);e.a=r.exports},264:function(t,e,s){"use strict";s(267);var a=s(5),i=Object(a.a)({},(function(){this._self._c;return this._m(0)}),[function(){var t=this._self._c;return t("footer",{staticClass:"page-footer"},[t("a",{attrs:{href:"https://github.com/sanic-org/sanic/blob/master/LICENSE"}},[this._v("\n    MIT Licensed\n  ")]),this._v(" "),t("br"),this._v("\n  Copyright © 2018-present Sanic Community Organization"),t("br"),this._v(" "),t("p",[this._v("~ Made with ❤️ and ☕️ ~")])])}],!1,null,null,null);e.a=i.exports},267:function(t,e,s){"use strict";s(253)},268:function(t,e,s){"use strict";s(254)},269:function(t,e,s){"use strict";s(255)},270:function(t,e,s){"use strict";s(256)},274:function(t,e,s){"use strict";var a=s(299),i=s(264),n={components:{Home:a.a,Footer:i.a}},o=s(5),r=Object(o.a)(n,(function(){var t=this._self._c;return t("div",[t("Home",this._b({},"Home",this.$attrs,!1)),this._v(" "),t("Footer")],1)}),[],!1,null,null,null);e.a=r.exports},275:function(t,e,s){"use strict";var a=s(300),i=s(296),n=s(303),o=s(263);function r(t,e){return t.ownerDocument.defaultView.getComputedStyle(t,null)[e]}var l={name:"Navbar",components:{SidebarButton:n.a,NavLinks:o.a,SearchBox:i.a,AlgoliaSearchBox:a.a},data:()=>({darkMode:!1,linksWrapMaxWidth:null}),computed:{algolia(){return this.$themeLocaleConfig.algolia||this.$site.themeConfig.algolia||{}},isAlgoliaSearch(){return this.algolia&&this.algolia.apiKey&&this.algolia.indexName},logo(){return this.darkMode?"https://raw.githubusercontent.com/huge-success/sanic-assets/master/png/sanic-framework-logo-simple-white-400x97.png":"https://raw.githubusercontent.com/huge-success/sanic-assets/master/png/sanic-framework-logo-simple-400x97.png"}},methods:{handleDarkMode(t){this.darkMode=t}},mounted(){const t=parseInt(r(this.$el,"paddingLeft"))+parseInt(r(this.$el,"paddingRight")),e=()=>{document.documentElement.clientWidth<719?this.linksWrapMaxWidth=null:this.linksWrapMaxWidth=this.$el.offsetWidth-t-(this.$refs.siteName&&this.$refs.siteName.offsetWidth||0)};this.handleDarkMode(!0),e(),window.addEventListener("resize",e,!1)}},h=(s(269),s(5)),c=Object(h.a)(l,(function(){var t=this,e=t._self._c;return e("header",{staticClass:"navbar"},[e("SidebarButton",{on:{"toggle-sidebar":function(e){return t.$emit("toggle-sidebar")}}}),t._v(" "),e("RouterLink",{staticClass:"home-link",attrs:{to:t.$localePath}},[t.$site.themeConfig.logo&&!1!==t.$page.frontmatter.logo?e("img",{staticClass:"logo",attrs:{src:t.logo,alt:t.$siteTitle}}):t._e(),t._v(" "),t.$siteTitle?e("span",{ref:"siteName",staticClass:"site-name",class:{"can-hide":t.$site.themeConfig.logo}},[t._v(t._s(t.$siteTitle))]):t._e()]),t._v(" "),e("div",{staticClass:"links",style:t.linksWrapMaxWidth?{"max-width":t.linksWrapMaxWidth+"px"}:{}},[t.isAlgoliaSearch?e("AlgoliaSearchBox",{attrs:{options:t.algolia}}):!1!==t.$site.themeConfig.search&&!1!==t.$page.frontmatter.search?e("SearchBox"):t._e(),t._v(" "),e("NavLinks",{staticClass:"can-hide"}),t._v(" "),e("ClientOnly",[e("ToggleDarkMode",{on:{darkmode:t.handleDarkMode}})],1)],1)],1)}),[],!1,null,null,null);e.a=c.exports},276:function(t,e,s){"use strict";var a=s(295),i=s(264),n={components:{Page:a.a,Footer:i.a}},o=s(5),r=Object(o.a)(n,(function(){var t=this._self._c;return t("div",[t("Page",this._b({},"Page",this.$attrs,!1)),this._v(" "),t("Footer")],1)}),[],!1,null,null,null);e.a=r.exports},277:function(t,e,s){"use strict";var a=s(273),i=s(263),n={name:"Sidebar",components:{SidebarLinks:a.default,NavLinks:i.a},props:["items"],computed:{current(){return this.$root.$localeConfig.current||""}}},o=(s(270),s(5)),r=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("aside",{staticClass:"sidebar"},[e("NavLinks"),t._v(" "),t._t("top"),t._v(" "),e("SidebarLinks",{attrs:{depth:0,items:t.items}}),t._v(" "),t._t("bottom"),t._v(" "),t.current?e("div",{staticClass:"current"},[t._v("\n    "+t._s(t.current)+"\n  ")]):t._e(),t._v(" "),e("div",{staticClass:"current"},[t._v("\n    Want more?\n    "),e("a",{attrs:{href:"https://sanicbook.com",target:"_blank"}},[t._v("\n      sanicbook.com\n      "),e("span",[e("svg",{staticClass:"icon outbound",attrs:{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",x:"0px",y:"0px",viewBox:"0 0 100 100",width:"15",height:"15"}},[e("path",{attrs:{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"}}),t._v(" "),e("polygon",{attrs:{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"}})]),t._v(" "),e("span",{staticClass:"sr-only"},[t._v("(opens new window)")])])]),t._v(" "),t._m(0)])],2)}),[function(){var t=this._self._c;return t("p",[this._v("\n      Check out our\n      "),t("a",{attrs:{href:"/en/org/feature_requests.html"}},[this._v("feature requests")])])}],!1,null,null,null);e.a=r.exports},330:function(t,e,s){"use strict";s.r(e);var a=s(274),i=s(275),n=s(276),o=s(277),r=s(250),l={name:"Layout",components:{Home:a.a,Page:n.a,Sidebar:o.a,Navbar:i.a},data:()=>({isSidebarOpen:!1}),computed:{shouldShowNavbar(){const{themeConfig:t}=this.$site,{frontmatter:e}=this.$page;return!1!==e.navbar&&!1!==t.navbar&&(this.$title||t.logo||t.repo||t.nav||this.$themeLocaleConfig.nav)},shouldShowSidebar(){const{frontmatter:t}=this.$page;return!t.home&&!1!==t.sidebar&&this.sidebarItems.length},sidebarItems(){return Object(r.l)(this.$page,this.$page.regularPath,this.$site,this.$localePath)},pageClasses(){const t=this.$page.frontmatter.pageClass;return[{"no-navbar":!this.shouldShowNavbar,"sidebar-open":this.isSidebarOpen,"no-sidebar":!this.shouldShowSidebar},t]}},mounted(){this.$router.afterEach(()=>{this.isSidebarOpen=!1})},methods:{toggleSidebar(t){this.isSidebarOpen="boolean"==typeof t?t:!this.isSidebarOpen,this.$emit("toggle-sidebar",this.isSidebarOpen)},onTouchStart(t){this.touchStart={x:t.changedTouches[0].clientX,y:t.changedTouches[0].clientY}},onTouchEnd(t){const e=t.changedTouches[0].clientX-this.touchStart.x,s=t.changedTouches[0].clientY-this.touchStart.y;Math.abs(e)>Math.abs(s)&&Math.abs(e)>40&&(e>0&&this.touchStart.x<=80?this.toggleSidebar(!0):this.toggleSidebar(!1))}}},h=s(5),c=Object(h.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"theme-container",class:t.pageClasses,on:{touchstart:t.onTouchStart,touchend:t.onTouchEnd}},[t.shouldShowNavbar?e("Navbar",{on:{"toggle-sidebar":t.toggleSidebar}}):t._e(),t._v(" "),e("div",{staticClass:"sidebar-mask",on:{click:function(e){return t.toggleSidebar(!1)}}}),t._v(" "),e("Sidebar",{attrs:{items:t.sidebarItems},on:{"toggle-sidebar":t.toggleSidebar},scopedSlots:t._u([{key:"top",fn:function(){return[t._t("sidebar-top")]},proxy:!0},{key:"bottom",fn:function(){return[t._t("sidebar-bottom")]},proxy:!0}],null,!0)}),t._v(" "),t.$page.frontmatter.home?e("Home"):e("Page",{attrs:{"sidebar-items":t.sidebarItems},scopedSlots:t._u([{key:"top",fn:function(){return[t._t("page-top")]},proxy:!0},{key:"bottom",fn:function(){return[t._t("page-bottom")]},proxy:!0}],null,!0)})],1)}),[],!1,null,null,null);e.default=c.exports}}]);