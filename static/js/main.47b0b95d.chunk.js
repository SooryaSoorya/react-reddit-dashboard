(this["webpackJsonpreact-reddit-dashboard"]=this["webpackJsonpreact-reddit-dashboard"]||[]).push([[0],[,,,,,,,function(e,t,a){e.exports=a.p+"static/media/comment.fdd056a7.svg"},function(e,t,a){e.exports=a.p+"static/media/delete.82862f89.svg"},,function(e,t,a){e.exports=a(22)},,,,,function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(5),o=a.n(r),s=(a(15),a(16),a(3)),m=a(1),i=a.n(m),l=a(9),u=a(6),d=a(2),f=Object(n.createContext)([]),p=function(){return Object(n.useContext)(f)},h=function(e){var t=e.children,a=Object(n.useState)([]),r=Object(d.a)(a,2),o=r[0],m=r[1],p=Object(n.useState)([]),h=Object(d.a)(p,2),v=h[0],E=h[1];Object(n.useEffect)((function(){g()}),[]);var g=function(){var e=Object(u.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://gist.githubusercontent.com/mkg0/6a4dca9067ad7a296204e7c9ecd977b0/raw/0b1ec16580ea1e970a73f5c85563c22631be7ad7/unpopularopinion-dataset.json").then((function(e){return e.json()})).then((function(e){var t=e.comments,a=Object(l.a)(e,["comments"]);m(t),E(a)})).catch((function(e){return console.log("catch error",e)}));case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.log("error",e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(){return e.apply(this,arguments)}}();return c.a.createElement(f.Provider,{value:{post:v,comments:o,deleteComment:function(e){return m(o.map((function(t){return t.id===e?Object(s.a)(Object(s.a)({},t),{},{isDeleted:!0,body:"[This comment has been deleted]",author:"[deleted]",created_utc:(new Date).getTime()}):t})))}}},t)},v=(a(18),function(e){return e>999?"".concat(Math.floor(e/100)/10,"k"):e}),E=function(e){var t=e.subreddit,a=e.upvote,n=e.title;return c.a.createElement("header",{className:"post-header"},c.a.createElement("a",{href:"https://reddit.com/".concat(t),className:"sub-reddit"},t),c.a.createElement("div",{className:"post-info"},c.a.createElement("span",{className:"upvotes"},v(a)),c.a.createElement("h1",{className:"head-title"},n)))},g=(a(19),function(e){var t=document.createElement("div");return e&&"string"===typeof e&&(e=(e=e.replace(/<script[^>]*>([\S\s]*?)<\/script>/gim,"")).replace(/<\/?\w(?:[^"'>]|"[^"]*"|'[^']*')*>/gim,""),t.innerHTML=e,e=t.textContent,t.textContent=""),e}),b=a(7),N=a.n(b),w=function(e){var t=e.commentCount,a=e.bodyHTML;return c.a.createElement("div",{className:"post-content"},c.a.createElement("div",{className:"post-text",dangerouslySetInnerHTML:{__html:g(a)}}),c.a.createElement("div",{className:"comment-info"},c.a.createElement("img",{className:"comment-img",src:N.a,alt:"comment"}),c.a.createElement("span",{className:"comment-count"},t," ",c.a.createElement("span",null,"Comments"))))},j=(a(20),a(8)),x=a.n(j),y=(a(21),function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new Date,a=t.getTime()-e.getTime(),n=Math.floor(a/31536e6);if(n>0)return"".concat(n," years ago");var c=Math.floor(a/2592e6);if(c>0)return"".concat(c," months ago");var r=Math.floor(a/864e5);if(r>0)return"".concat(r," days ago");var o=Math.floor(a/36e5);if(o>0)return"".concat(o," hours ago");var s=Math.floor(a/6e4);return s>0?"".concat(s," minutes ago"):"< 1 minute ago"}),O=function(e){var t=e.id,a=e.author,n=e.ups,r=e.downs,o=e.created_utc,s=e.isDeleted,m=e.body,i=p(),l=i.comments,u=i.deleteComment,d=l.filter((function(e){return e.parent_id===t})),f=new Date(1e3*o),h=y(f);return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"comment-content",id:t},c.a.createElement("div",{className:"author-details"},s?c.a.createElement("a",{target:"#",className:"author removed"},a):c.a.createElement("a",{href:"https://reddit.com/user/".concat(a),className:"author"},a),c.a.createElement("span",{className:"upvotes"},v(n-r)," points")," -"," ",c.a.createElement("span",{className:"time-ago"},h),s?null:c.a.createElement("span",{className:"delete",onClick:function(){return u(t)}},c.a.createElement("img",{className:"icon",src:x.a,alt:"delete"}))),c.a.createElement("div",{className:"comment-content-details"},c.a.createElement("span",null,m))),c.a.createElement(M,{comments:d,className:"tree"}))},M=function(e){var t=e.comments,a=void 0===t?[]:t,n=e.className;return c.a.createElement("div",{className:"comment-group ".concat(n||"")},a.map((function(e,t){return c.a.createElement(O,Object.assign({key:t},e))})))};var k=function(){var e=p(),t=e.comments,a=e.post,n=t.filter((function(e){return!e.parent_id}));return c.a.createElement("div",{className:"body"},c.a.createElement(E,{subreddit:a.subreddit_name_prefixed,title:a.title,upvote:a.ups}),c.a.createElement("div",{className:"post-container"},c.a.createElement("section",null,c.a.createElement(w,{bodyHTML:a.selftext_html,commentCount:t.length})),c.a.createElement("section",{className:"comments-container"},c.a.createElement(M,{comments:n}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(h,null,c.a.createElement(k,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[10,1,2]]]);
//# sourceMappingURL=main.47b0b95d.chunk.js.map