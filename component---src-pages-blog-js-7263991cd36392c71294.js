(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{PBHM:function(e,t){e.exports=function(e){return e&&e.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g).map((function(e){return e.toLowerCase()})).join("-")}},cgSC:function(e,t,a){"use strict";a.d(t,"a",(function(){return p}));var r=a("q1tI"),n=a.n(r),o=a("+ZDr"),l=a.n(o),i=a("vOnD"),c=a("IP2g"),u=a("kByy"),d=a("PBHM"),m=a.n(d),s=i.d.article.withConfig({displayName:"BlogCard__PostWrapper",componentId:"i9qr3b-0"})(["overflow:auto;margin-bottom:70px;padding:30px 30px;border-top:5px solid ",";border-radius:10px;box-shadow:",";background-color:",";&:hover{box-shadow:0 5px 10px rgba(0,0,0,0.1);}span{font-size:13px;color:gray;}"],(function(e){return e.theme.dark?e.theme.accentColor:e.theme.primaryColor}),(function(e){return e.theme.shadowSmall}),(function(e){return e.theme.secondaryColor})),p=function(e){var t=e.date,a=e.readtime;return n.a.createElement("span",{style:{fontSize:13,color:"gray"}},n.a.createElement("span",{"aria-label":"publish date "+t},n.a.createElement(c.a,{color:"gray",icon:"calendar-alt"}),"  ",t),"   ",n.a.createElement("span",{"aria-label":a+" minutes read"},n.a.createElement(c.a,{color:"gray",icon:"clock"}),"  ",a,"min read"))};t.b=function(e){var t=e.date,a=e.readtime,r=e.title,o=e.excerpt,i=e.slug,c=e.tags;return n.a.createElement(l.a,{to:i,"aria-label":r+" - read time "+a+" minutes"},n.a.createElement(s,null,n.a.createElement(p,{date:t,readtime:a}),n.a.createElement("h2",null,r),n.a.createElement("p",null,o),n.a.createElement("div",{style:{marginTop:20}},c.map((function(e){return n.a.createElement(u.a,{key:e,"aria-label":e+" tag",to:"/blog/tags/"+m()(e)+"/"},e)})))))}},kByy:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var r=a("q1tI"),n=a.n(r),o=a("vOnD"),l=a("Wbzz"),i=a("PBHM"),c=a.n(i),u=Object(o.d)(l.Link).withConfig({displayName:"Tags__TagBreadcrumb",componentId:"sc-1u2ku2g-0"})(["float:left;border:1px solid ",";border-radius:50px;padding:8px 13px;line-height:10px;margin:5px;font-size:12px;&:hover{background:",";color:",";}"],(function(e){return e.theme.dark?e.theme.primaryColor:"#E4E6EB"}),(function(e){return e.theme.dark?e.theme.primaryColor:"#E4E6EB"}),(function(e){return e.theme.dark?"#E4E6EB":"#383838"}));t.b=function(){var e=Object(l.useStaticQuery)("550521386");return n.a.createElement("section",{style:{overflow:"auto"}},e.allMarkdownRemark.group.map((function(e){return n.a.createElement(u,{key:e.fieldValue,to:"/blog/tags/"+c()(e.fieldValue)+"/","aria-label":e.totalCount+" posts tagged with "+e.fieldValue},e.fieldValue,", ",e.totalCount)})))}},u2mt:function(e,t,a){"use strict";var r=a("q1tI"),n=a.n(r),o=a("+ZDr"),l=a.n(o),i=a("kByy"),c=a("vOnD").d.section.withConfig({displayName:"SplitLayout__SplitLayoutWrapper",componentId:"sc-1y2rhxj-0"})(["",";& article:first-of-type{margin-top:15px;}display:grid;grid-template-columns:minmax(750px,1fr) 1fr;grid-column-gap:30px;grid-template-areas:'post side';.layout__content{grid-area:post;}.layout__aside{grid-area:side;}@media ","{grid-template-columns:1fr 1fr;grid-column-gap:0px;grid-row-gap:30px;grid-template-areas:'post post' 'side side';}.sticky__aside{position:sticky;top:100px;}"],(function(e){return e.theme.spacing.sectionBottom}),(function(e){return e.theme.media.fablet})),u=function(e){var t=e.content,a=e.aside;return n.a.createElement(c,null,n.a.createElement("section",{className:"layout__content"},t&&t),n.a.createElement("section",{className:"layout__aside"},n.a.createElement("aside",{className:"sticky__aside"},a&&a)))},d=a("Wbzz"),m=function(e,t){return Math.floor(Math.random()*(t-e+1))+e},s=function(){var e=Object(d.useStaticQuery)("3435786681"),t=e.allMarkdownRemark.edges[m(0,e.allMarkdownRemark.totalCount-1)];if("undefined"!=typeof window)for(;t.node.fields.slug===window.location.pathname;){t=e.allMarkdownRemark.edges[m(0,e.allMarkdownRemark.totalCount-1)];break}return{randomSlug:t.node.fields.slug,randomTitle:t.node.frontmatter.title}};t.a=function(e){var t=e.children,a=e.sharerSection,r=s(),o=r.randomSlug,c=r.randomTitle;return n.a.createElement(u,{content:t,aside:n.a.createElement(n.a.Fragment,null,n.a.createElement("section",null,n.a.createElement("h4",null,"Random post"),n.a.createElement(l.a,{style:{fontSize:"16px"},to:o},c),n.a.createElement("br",null),n.a.createElement("br",null)),n.a.createElement("section",null,n.a.createElement("h4",null,"Tags"),n.a.createElement(i.b,null),n.a.createElement("br",null)),a&&a)})}},vx99:function(e,t,a){"use strict";a.r(t);var r=a("q1tI"),n=a.n(r),o=a("Wbzz"),l=a("yBb5"),i=a("vrFN"),c=a("cgSC"),u=a("u2mt");t.default=function(){var e=Object(o.useStaticQuery)("1048528189");return n.a.createElement(l.a,null,n.a.createElement(i.a,{title:"Blog | ED"}),n.a.createElement(u.a,null,e.allMarkdownRemark.edges.map((function(e){var t=e.node;return n.a.createElement(c.b,{key:t.id,slug:t.fields.slug,title:t.frontmatter.title,date:t.frontmatter.date,tags:t.frontmatter.tags,readtime:t.timeToRead,excerpt:t.excerpt})}))))}}}]);
//# sourceMappingURL=component---src-pages-blog-js-7263991cd36392c71294.js.map