(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,function(e,t,a){e.exports={container:"wex2iqWOvaNG2U2arhwHc",starship:"_383UHJ7fKIEazZGfZcUYYw",modal:"_2d153TqYDOm_uZvfqz8as1",modalbox:"_1a-8jks5QKIPZDZDJyHJ3h"}},,,,function(e,t,a){e.exports={container:"_1YL4UAxvte0RJD14strIGN",movie:"_51ht1azB4aaF7zK-Xd-Cg"}},,,,,,function(e,t,a){e.exports=a.p+"static/media/1.0f3d0156.jpg"},function(e,t,a){e.exports=a.p+"static/media/2.19f2d33d.jpg"},function(e,t,a){e.exports=a.p+"static/media/3.32c99cf6.jpg"},function(e,t,a){e.exports=a.p+"static/media/4.f01b97ff.jpg"},function(e,t,a){e.exports=a.p+"static/media/5.0cbc0e3c.jpg"},function(e,t,a){e.exports=a.p+"static/media/6.c41d1fb5.jpg"},function(e,t,a){e.exports=a.p+"static/media/7.bc07c078.jpg"},function(e,t,a){e.exports=a.p+"static/media/124129.2404a29e.jpg"},function(e,t,a){e.exports={App:"_5q6kWXEv0s-M4iewf-hj"}},,function(e,t,a){e.exports=a(39)},,,,,,,,,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(14),s=a.n(o),i=a(43),r=a(42),l=a(41),p=a(15),m=a.n(p),u=a(5),d=a(40),f=a(10),h=a.n(f),E=a(16),v=a.n(E),j=a(17),b=a.n(j),w=a(18),g=a.n(w),x=a(19),k=a.n(x),N=a(20),O=a.n(N),y=a(21),I=a.n(y),_=a(22),J=a.n(_),S={1:v.a,2:b.a,3:g.a,4:k.a,5:O.a,6:I.a,7:J.a},W=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],o=t[1];return Object(n.useEffect)(function(){fetch("".concat("https://mysterious-wave-49856.herokuapp.com","/swapi/movie/list")).then(function(e){return e.json()}).then(o)},[]),c.a.createElement("div",{className:h.a.container},c.a.createElement("h1",null,"Star Wars Movies"),a.map(function(e){var t=e.id,a=e.episode;return c.a.createElement(d.a,{key:t,className:h.a.movie,to:"/starships/".concat(a),style:{backgroundImage:"url(".concat(S[a],")")}})}))},Z=a(6),q=a.n(Z),z=function(e){var t=e.match.params.episode,a=Object(n.useState)([]),o=Object(u.a)(a,2),s=o[0],i=o[1],r=Object(n.useState)(!1),l=Object(u.a)(r,2),p=l[0],m=l[1],f=Object(n.useState)({}),h=Object(u.a)(f,2),E=h[0],v=h[1];Object(n.useEffect)(function(){fetch("".concat("https://mysterious-wave-49856.herokuapp.com","/swapi/starship/list/").concat(t)).then(function(e){return e.json()}).then(i)},[]);var j=function(e){e?(v(e),m(!0)):m(!1)};return c.a.createElement("div",null,p&&c.a.createElement("div",{className:q.a.modal,onClick:function(){return j(null)}},c.a.createElement("div",{className:q.a.modalbox},c.a.createElement("h2",null,E.starshipName),c.a.createElement("p",null,"Model: ",E.model),c.a.createElement("p",null,"Passengers: ",E.passengers),c.a.createElement("p",null,"Pilot: ",E.pilot||"Need a pilot"))),c.a.createElement("h1",null,"Starships Episode ",t),c.a.createElement("h3",null,c.a.createElement(d.a,{to:"/"}," Back to the movies ")),c.a.createElement("ul",{className:q.a.container},s.map(function(e){return c.a.createElement("li",{key:e.starshipId,className:q.a.starship},e.starshipName,c.a.createElement("span",{onClick:function(){return j(e)}},"edit"))})))},B=a(23),D=a.n(B),U=a(24),Y=a.n(U),A=function(){return c.a.createElement("div",{className:Y.a.App,style:{backgroundImage:"url(".concat(D.a,")")}},c.a.createElement(i.a,{history:m()()},c.a.createElement(r.a,null,c.a.createElement(l.a,{exact:!0,path:"/",component:W}),c.a.createElement(l.a,{exact:!0,path:"/starships/:episode",component:z}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(38);s.a.render(c.a.createElement(A,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[26,1,2]]]);
//# sourceMappingURL=main.24b15b16.chunk.js.map