(this.webpackJsonpmovie_app_2020=this.webpackJsonpmovie_app_2020||[]).push([[0],{33:function(e,t,a){e.exports=a(66)},56:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(29),c=a.n(o),s=a(7),i=a(6),l=a(10),m=a(11),u=a(13),p=a(12),v=a(14),d=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.location,a=e.history;console.log(t),void 0===t.state&&a.push("/")}},{key:"render",value:function(){var e=this.props.location;return e.state?r.a.createElement("h1",null,e.state.title):null}}]),t}(r.a.Component),E=a(16),h=a.n(E),f=a(30),y=a.n(f);a(56);var _=function(e){e.id;var t=e.year,a=e.title,n=e.summary,o=e.poster,c=e.genres;return r.a.createElement(s.b,{to:{pathname:"/movie-detail",state:{year:t,title:a,summary:n,poster:o,genres:c}}},r.a.createElement("div",{className:"movie"},r.a.createElement("img",{src:o,alt:a,title:a}),r.a.createElement("div",{className:"movie__data"},r.a.createElement("h3",{className:"movie__title"},a),r.a.createElement("h5",{className:"movie__year"},t),r.a.createElement("ul",{className:"movie__genres"},c.map((function(e,t){return r.a.createElement("li",{key:t,className:"genres__genre"},e)}))),r.a.createElement("p",{className:"movie__summary"},n.slice(0,180),"..."))))},b=(a(62),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={isLoading:!0,movies:[]},a.getMovies=function(){var e,t;return h.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,h.a.awrap(y.a.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating"));case 2:e=n.sent,t=e.data.data.movies,a.setState({movies:t,isLoading:!1});case 5:case"end":return n.stop()}}))},a}return Object(v.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.movies;return r.a.createElement("section",{className:"container"},t?r.a.createElement("div",{className:"loader"},r.a.createElement("span",{className:"loader__text"},"Loading...")):r.a.createElement("div",{className:"movies"},a.map((function(e){return r.a.createElement(_,{key:e.id,id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres})}))))}}]),t}(r.a.Component));a(63);var g=function(){return r.a.createElement("div",{className:"about__container"},r.a.createElement("span",null,"\ub178\ub9c8\ub354 \ucf54\ub4dc \ub9ac\uc561\ud2b8\ub85c \uac04\ub2e8\ud55c \uc6f9 \uc11c\ube44\uc2a4 \ub9cc\ub4e4\uc5b4\ubcf4\uae30"),r.a.createElement("span",null,"- Auto: \ubc15\uc0c1\ubd90, 2020"))};a(64);var N=function(){return r.a.createElement("div",{className:"nav"},r.a.createElement(s.b,{to:"/"},"Home"),r.a.createElement(s.b,{to:"/about"},"about"))};a(65);var j=function(){return r.a.createElement(s.a,null,r.a.createElement(N,null),r.a.createElement(i.a,{path:"/",exact:!0,component:b}),r.a.createElement(i.a,{path:"/about",component:g}),r.a.createElement(i.a,{path:"/movie-detail",component:d}))};c.a.render(r.a.createElement(j,null),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.296a72fa.chunk.js.map