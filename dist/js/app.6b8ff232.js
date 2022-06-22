(function(){"use strict";var e={9463:function(e,n,t){var o=t(9242),r=t(3396);const i=(0,r._)("h1",null,[(0,r._)("span",null,"Search"),(0,r.Uk)(" Movies ")],-1);function a(e,n){const t=(0,r.up)("router-link"),o=(0,r.up)("router-view");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("header",null,[(0,r.Wm)(t,{to:"/"},{default:(0,r.w5)((()=>[i])),_:1})]),(0,r._)("main",null,[(0,r.Wm)(o)])],64)}var s=t(89);const u={},l=(0,s.Z)(u,[["render",a]]);var c=l,v=t(678),f=t(7139);const h={class:"home"},d={class:"feature-card"},m=(0,r._)("img",{src:"https://cdn.europosters.eu/image/1300/posters/avengers-endgame-journey-s-end-i122136.jpg",alt:"Avengers Endgame",class:"featured-img"},null,-1),p=(0,r._)("div",{class:"detail"},[(0,r._)("h3",null,"Avengers: Endgame"),(0,r._)("p",null," After the devastating events of Avengers: Infinity War (2018), the universe is in ruins due to the efforts of the Mad Titan, Thanos. With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos's actions and undo the chaos to the universe, no matter what consequences may be in store, and no matter who they face... ")],-1),w=(0,r._)("input",{type:"submit",value:"search"},null,-1),g={class:"movies-list"},_={class:"product-img"},y=["src","alt"],b={class:"type"},k={class:"product-detail"},O={class:"year"};function j(e,n,t,i,a,s){const u=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)("div",h,[(0,r._)("div",d,[(0,r.Wm)(u,{to:"/movie/tt4154796"},{default:(0,r.w5)((()=>[m,p])),_:1})]),(0,r._)("form",{onSubmit:n[1]||(n[1]=(0,o.iM)((e=>i.SearchMovies()),["prevent"])),class:"search-box"},[(0,r.wy)((0,r._)("input",{type:"text",placeholder:"what are you looking for?","onUpdate:modelValue":n[0]||(n[0]=e=>i.search=e)},null,512),[[o.nr,i.search]]),w],32),(0,r._)("div",g,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(i.movies,(e=>((0,r.wg)(),(0,r.iD)("div",{class:"movie",key:e.imdbID},[(0,r.Wm)(u,{to:"/movie/"+e.imdbID,class:"movie-link"},{default:(0,r.w5)((()=>[(0,r._)("div",_,[(0,r._)("img",{src:e.Poster,alt:e.Title},null,8,y),(0,r._)("div",b,(0,f.zw)(e.Type),1)]),(0,r._)("div",k,[(0,r._)("p",O,(0,f.zw)(e.Year),1),(0,r._)("h3",null,(0,f.zw)(e.Title),1)])])),_:2},1032,["to"])])))),128))])])}var T=t(4870),D={setup(){const e=(0,T.iH)(""),n=(0,T.iH)([]),t=()=>{""!==e.value&&fetch(`http://www.omdbapi.com/?apikey=13374657&s=${e.value}`).then((e=>e.json())).then((t=>{"True"==t.Response?(n.value=t.Search,e.value=""):console.log("no data found")}))};return{search:e,movies:n,SearchMovies:t}}};const M=(0,s.Z)(D,[["render",j]]);var x=M;const z={class:"movie-detail"},P=["src","alt"];function W(e,n,t,o,i,a){return(0,r.wg)(),(0,r.iD)("div",z,[(0,r._)("h2",null,(0,f.zw)(o.movie.Title),1),(0,r._)("p",null,(0,f.zw)(o.movie.Year),1),(0,r._)("img",{src:o.movie.Poster,alt:o.movie.Title,class:"featured-img"},null,8,P),(0,r._)("p",null,(0,f.zw)(o.movie.Plot),1)])}var A={setup(){const e=(0,T.iH)({}),n=(0,v.yj)();return(0,r.wF)((()=>{fetch(`http://www.omdbapi.com/?i=${n.params.id}&apikey=13374657&plot=full`).then((e=>e.json())).then((n=>{e.value=n}))})),{movie:e}}};const H=(0,s.Z)(A,[["render",W]]);var S=H;const Y=[{path:"/",name:"home",component:x},{path:"/movie/:id",name:"Movie Detail",component:S}],E=(0,v.p7)({history:(0,v.PO)("/"),routes:Y});var I=E;(0,o.ri)(c).use(I).mount("#app")}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var i=n[o]={exports:{}};return e[o](i,i.exports,t),i.exports}t.m=e,function(){var e=[];t.O=function(n,o,r,i){if(!o){var a=1/0;for(c=0;c<e.length;c++){o=e[c][0],r=e[c][1],i=e[c][2];for(var s=!0,u=0;u<o.length;u++)(!1&i||a>=i)&&Object.keys(t.O).every((function(e){return t.O[e](o[u])}))?o.splice(u--,1):(s=!1,i<a&&(a=i));if(s){e.splice(c--,1);var l=r();void 0!==l&&(n=l)}}return n}i=i||0;for(var c=e.length;c>0&&e[c-1][2]>i;c--)e[c]=e[c-1];e[c]=[o,r,i]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={143:0};t.O.j=function(n){return 0===e[n]};var n=function(n,o){var r,i,a=o[0],s=o[1],u=o[2],l=0;if(a.some((function(n){return 0!==e[n]}))){for(r in s)t.o(s,r)&&(t.m[r]=s[r]);if(u)var c=u(t)}for(n&&n(o);l<a.length;l++)i=a[l],t.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return t.O(c)},o=self["webpackChunkmovie_search_vue"]=self["webpackChunkmovie_search_vue"]||[];o.forEach(n.bind(null,0)),o.push=n.bind(null,o.push.bind(o))}();var o=t.O(void 0,[998],(function(){return t(9463)}));o=t.O(o)})();
//# sourceMappingURL=app.6b8ff232.js.map