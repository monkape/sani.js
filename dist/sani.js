var Animator=function(){"use strict";function a(a,b,c,d){const{context:e}=a;const{canvas:f}=e;const g=a[u];b&&c&&d&&(g.innerWidth=b,g.innerHeight=c,g.catchHeight=d),f.width=f.clientWidth,f.height=f.clientHeight,g.multiplier=Z(0,k(f.width/(g.innerWidth+2*g.ballRadius),f.height/(g.innerHeight+2*g.ballRadius)));const h={x:Z(0,f.clientWidth-(g.innerWidth+2*g.ballRadius)*g.multiplier),y:Z(0,f.clientHeight-(g.innerHeight+2*g.ballRadius)*g.multiplier)};const i={x:.5*h.x+g.ballRadius*g.multiplier,y:.5*h.y+g.ballRadius*g.multiplier};e.translate(i.x,f.height-i.y-g.catchHeight*g.multiplier),e.scale(1,-1)}function b(c,a){const b=Z(c,a);const d=k(c,a);let e=b;for(;0!=e%d;)e+=b;return e}function c(a){if(2===a.degree)return a.throws;const c=[];const d=b(a.throws.length,2);for(let b=0;b<d;b++){const d=[[],[]];const e=a.throws[b%a.throws.length][0].map(a=>({value:a.value,handFrom:b%2,handTo:(b+a.value)%2}));d[b%2]=e,c.push(d)}return c}function d(a,b,c){return Z(b,k(c,a))}function e(e){var f=Math.abs;const{siteswap:g}=e;const i=e[v];const l=Array(g.props).fill().map(()=>new n(i.ballColor));e[w]=l;const m=i.beatDuration*g.degree;let q=0;let r=0;const u=250;const h=350-200*f(.5-i.dwell)+15*(g.greatestValue-3);const j=500+h;const y=3-g.degree;const z=.1*y;const A=Z(z,k(.9*y,i.dwell*y));const B=c(g);const C=b(B.length,g.strictStates.length);for(let a=0;a<C;a++){const b=B[a%B.length];const c=g.strictStates[a%g.strictStates.length];const e=b.map(a=>a.reduce((a,b)=>{const c=`${b.value}-${b.handTo}`;return a[c]=(a[c]||0)+1,a},{}));const n=Z(...e.map(a=>Z(...Object.keys(a).map(b=>a[b]))));let v=A;if(1<=A){const a=e.reduce((a,b)=>Z(a,b["1-0"]||0,b["1-1"]||0),0);0<a&&(v=1-z)}for(let a=0;2>a;a++){const h=b[a];const w=k(...h.map(({value:a})=>a));const y=o.s(0,-x.y,.5*(w-v)*m);for(let b=0;b<h.length;b++){const A=h[b];if(0===A.value)continue;const B=l[c[a%g.degree][0][b]-1];const C=1===n?0:k(z,(v-z)/(n-1));const D=--e[a][`${A.value}-${A.handTo}`];let E=v-(n-1)*C;let F=C*D;let G=A.value-(F+E);E*=m,F*=m,G*=m;const H=o.s(0,-x.y,G/2);const I=d(u-100*f(.5-i.dwell),150,u)-(2===w?50:0);const J=.5*i.ballRadius;const K=k(1e3,500+30*g.greatestValue);const L=d(.5*E+20*g.greatestValue,J,K);let M=.3*L+.7*L*w/g.greatestValue;M=k(3*E,M),M=k(2===w?100:.5*y,M),H>q&&(q=H),M>r&&(r=M);{let a=0===A.handFrom?0:j;let b=0===A.handFrom?I:j-I;i.reversed&&([a,b]=[b,a]),B.animations.push(new s(E,a,b,M))}{let a=0===A.handFrom?I:j-I;let b=0===A.handTo?0:j;i.reversed&&(A.handFrom===A.handTo?[a,b]=[b,a]:(a+=0===A.handFrom?-I:I,b+=0===A.handFrom?-I:I));const c={x:a,y:0};const d={x:(b-a)/G,y:o.v(0,-x.y,H)};B.animations.push(new p(G,c,d,x)),0<F&&B.animations.push(new t(F,b,0))}}}}const D=q+r;a(e,j,D,r);const[E]=g.strictStates;for(const a of E)for(let b=0;b<a.length;b++)for(const c of a[b])l[c-1].animations[-1]=new t(b*m)}function f(a){a.save(),a.setTransform(1,0,0,1,0,0),a.clearRect(0,0,a.canvas.width,a.canvas.height),a.restore()}function g(b,c){const{context:d}=b;const{canvas:e}=d;const g=b[y];const h=b[A];const i=b[z];if((e.width!==e.clientWidth||e.height!==e.clientHeight)&&(a(b),i))for(const a of h)a.draw(d,g);if(!i){f(d);for(const a of h)a.update(c/g.slowdown),a.draw(d,g)}}var h=Math.sqrt;var Z=Math.max;var k=Math.min;const i=Symbol.for("settings");var j="undefined"==typeof window?"undefined"==typeof global?"undefined"==typeof self?{}:self:global:window;var l=function(a,b){return b={exports:{}},a(b,b.exports),b.exports}(function(c){(function(d,a){c.exports=a()})(j,function(){function $(f){if(!_(f))throw new M("Invalid throws structure.");const a=f.map(b=>b.map(()=>0));for(let c=0;c<f.length;c++){const b=f[c];for(const g of b)for(const b of g)a[c][b.handFrom]++,a[(c+b.value)%f.length][b.handTo]--}if(a.some(b=>b.some(b=>0!==b)))throw new M("Invalid siteswap.")}function _(c){if(!Array.isArray(c)||!c.length)return!1;for(const e of c){if(!Array.isArray(e)||e.length!==c[0].length)return!1;if(e.some(b=>!Array.isArray(b)||!b.every(({value:b,handFrom:a,handTo:c})=>void 0!==b&&void 0!==a&&void 0!==c&&a<e.length&&c<e.length)))return!1}return!0}function aa(f,a){if(f.length!==a.length)return!1;for(let b=0;b<f.length;b++){const g=f[b],d=a[b];if(g.length!==d.length)return!1;for(let e=0;e<g.length;e++){const f=g[e],b=d[e];if(f.length!==b.length)return!1;for(let c=0;c<f.length;c++){const a=f[c],d=b[c];if(a.value!==d.value||a.handFrom!==d.handFrom||a.handTo!==d.handTo)return!1}}}return!0}function a(c){for(let a=1,b=L(c.length/2);a<=b;a++)if(0==c.length%a){const b=c.slice(0,a);for(let d=a;d<c.length;d+=a){const e=c.slice(d,d+a);if(!aa(b,e))break;if(a+d===c.length)return c.length=a,c}}return c}function ba(g){const a=[];for(let b=0;b<g.degree;b++)a.push(Array(g.greatestValue).fill(0));if(0===g.greatestValue)return new O(a);const b=g.throws;let h=0;for(let d=-1;;d--){const e=b[(d%b.length+b.length)%b.length];for(const b of e)for(const e of b){const b=d+e.value;if(!(0>b)&&(a[e.handTo][b]++,h++,h===g.props)){let b=g.greatestValue;for(;a.every(c=>0===c[b-1]);)b--;for(let c=0;c<g.degree;c++)a[c].length=b;return new O(a)}}}}function d(e){const a=[],b=ba(e);let f=b;do for(const b of e.throws)a.push(f.schedule),f=f.advance(b);while(b!==f);return a}function f(f){const a=[],b=e(f.states[0]);let i=b;do for(const b of f.throws)a.push(i),i=g(i,b);while(!h(b,i));return a}function e(c){let a=0;return c.map(b=>b.map(b=>Array(b).fill().map(()=>++a)))}function g(g,a){const h=g.map(b=>b.slice(1).map(b=>[...b]));for(let f=0;f<a.length;f++){const c=a[f];if(c.length||!c.every(({value:d,handTo:a,handFrom:b})=>0===d&&a===f&&b===f))for(let a=0;a<c.length;a++){const i=c[a];if(0>=i.value)continue;const b=g[i.handFrom][0][a];for(let a=0;a<h.length;a++)for(let b=g[0].length-1;b<i.value;b++)h[a][b]||(h[a][b]=[]);h[i.handTo][i.value-1].push(b)}}return h}function h(f,a){if(f.length!==a.length)return!1;for(let b=0;b<f.length;b++){const g=f[b],d=a[b];if(g.length!==d.length)return!1;for(let e=0;e<g.length;e++){const f=g[e],b=d[e];if(f.length!==b.length)return!1;for(let c=0;c<f.length;c++)if(f[c]!==b[c])return!1}}return!0}function i(h,a,b,c,d){const e=b[c][d];for(const f of e){if(0===f.value)continue;const d=(c+f.value)%b.length;a[d][f.handTo]===h||(a[d][f.handTo]=h,i(h,a,b,d,f.handTo))}}function j(f){const{throws:g,notation:b}=f,h=[],j=g.map(b=>b.map(()=>null));for(let b=0;b<g.length;b++){const c=g[b];for(let d=0;d<c.length;d++){const a=c[d];if(null===j[b][d]&&(1!==a.length||0!==a[0].value)){const c=[];i(c,j,g,b,d),h.push(c)}}}if(1===h.length)return[f];for(let e=0;e<g.length;e++){const c=g[e];for(const f of h)f.push(c.map((b,a)=>j[e][a]===f?b:[{value:0,handFrom:a,handTo:a}]))}return h.map(c=>new Siteswap(c,b))}function l(i){const a=[],b=[...i.throws],c=[...i.states],d=i.notation;let e=0;for(let f=1;f<=c.length;f++)for(let g=f-1;g>=e;g--)if(c[f%c.length]===c[g]){if(0==g&&f===c.length)return a.length?(m(a,new Siteswap(b.slice(g,f),d)),a):[i];e==g?(m(a,new Siteswap(b.slice(g,f),d)),e=f):(m(a,new Siteswap(b.splice(g,f-g),d)),c.splice(g,f-g),f=e);break}return a}function m(c,d){c.every(b=>!b.equals(d))&&c.push(d)}function c(b){return"A".repeat(L(b/26))+String.fromCharCode(65+b%26)}function b(c){let a=0;for(;"A"===c[a];)a++;return a<c.length-1?null:a===c.length?26*(a-1):26*a+c[a].charCodeAt(0)-65}function n([,a]){return a}function o(b){return+b}function p(b){return"a">b?b.charCodeAt(0)-65+36:b.charCodeAt(0)-97+10}function q(f,c){const a=K(f,c),b=k(f,c);let d=a;for(;0!=d%b;)d+=a;return d}function r(b){return b.concat(b.map(b=>b.map(b=>[...b]).reverse()))}function s(c){for(const d of c)for(const c of d)for(let a=0;a<c.length;a++)c[a]={value:c[a],handFrom:0,handTo:0};return c}function t(c){for(const d of c)for(let f=0;f<d.length;f++){const a=d[f];for(let c=0;c<a.length;c++){const{value:b,cross:d}=a[c];a[c]={value:b/2,handFrom:f,handTo:d?1-f:f}}}return c}function u(e){const a=e.map(({length:b})=>b).reduce(q),f=[];for(let b=0;b<a;b++){const a=e.map(c=>c[b%c.length]).map(function(c,f){return c.map(function({value:b,hand:a,offset:c}){const d=void 0===c?a:f+c;return{value:b,handFrom:f,handTo:d}})});f.push(a)}return f}function v(e){const a=e.map(({length:b})=>b).reduce(q),f=[];for(let b=0;b<a;b++){const a=e.map(c=>c[b%c.length][0]).map(function(c,e){return c.map(function({value:b,pass:a}){!0===a&&(a=2-e);const f=null===a?e:a-1;return{value:b,handFrom:e,handTo:f}})});f.push(a)}return f}function w(e){const a=e.map(({length:b})=>b).reduce(q),f=[];for(let b=0;b<a;b++){const a=Array.prototype.concat(...e.map(c=>c[b%c.length])).map(function(c,f){return c.map(function({value:b,pass:a,cross:g}){!0===a&&(a=2-L(f/2));const d=(null===a?f:2*(a-1)+f%2)+(g?f%2?-1:1:0);return{value:b/2,handFrom:f,handTo:d}})});f.push(a)}return f}function x(c,d=null){if(null===d){const a={};return a.immutables=[],a.terminals=new Set,c=x(c,a),c.immutables=a.immutables,c.terminals=[...a.terminals],c}if(null===c)return c;if("string"==typeof c){if(!T[c])throw new Error("Parsing error.");return x(T[c],d)}if(Array.isArray(c))return{symbols:c.map(b=>x(b,d))};if(c.fixed&&!c.value&&d.immutables.push(c),c.tokenType)return d.terminals.add(c),c;if("object"!=typeof c)throw new Error("Parsing error.");if(c.symbol)c.symbol=x(c.symbol,d);else if(c.symbols)c.symbols=c.symbols.map(b=>x(b,d));else if(c.repeat)c.repeat=c.repeat.map(b=>x(b,d));else if(c.either)c.either=c.either.map(b=>x(b,d));else if(c.allow)c.either=[x(c.allow,d),null],delete c.allow;else throw new Error("Parsing error.");return c}function y(g,a){const b=new RegExp(g.sort((b,c)=>b.index-c.index).map(({regex:b})=>`(${b})`).join("|"),"y"),c=[];for(;b.lastIndex<a.length;){const d=b.exec(a);if(null===d)return null;const e=d.findIndex((c,a)=>a&&c);c.push({type:g[e-1].tokenType,value:d[e]})}return c}function z(f){let e;if(null===f)return null;if(f.tokenType){const a=V[ca];if(!a||a.type!==f.tokenType)return U;if(f.fixed)if(!f.value)f.value=a.value;else if(a.value!==f.value)return U;e=a.value,ca++}else if(f.symbol){if(e=z(f.symbol),e===U)return U;}else if(f.symbols){e=[];for(const b of f.symbols){const c=z(b);if(c===U)return U;e.push(c)}}else if(f.repeat){for(e=[];e.length<f.max;){const a=ca,b=z({symbols:f.repeat});if(b===U){ca=a;break}e.push(b)}if(e.length<f.min||e.length>f.max)return U}else if(f.either){for(const a of f.either){const b=ca,c=z(a);if(c===U){ca=b;continue}const d=f.processor;if(f.fixed)if(void 0===f.value)f.value=a;else if(a!==f.value)return U;return d?d(c):c}return U}return f.processor?f.processor(e):e}function A(e,a){if(!e||!T[e])throw new Error("Parsing error.");"function"==typeof T[e]&&(T[e]=x(T[e]()));const b=T[e];for(const c of b.immutables)delete c.value;if(ca=0,V=y(b.terminals,a),!V||!V.length)return null;const c=z(b);return c===U||ca!==V.length?null:c}function B({value:d,handFrom:a,handTo:b}){return`${2*d}${a===b?"":"x"}`}function C({value:d,handFrom:a,handTo:b}){return`${2*d}${a===b?"":"x"}`}function D(c){const a=c.map(({value:d,handFrom:a,handTo:b})=>`${d}${a===b?"":`p${b+1}`}`).join(",");return 1===c.length?a:`[${a}]`}function E(c){const a=c.map(({value:d,handFrom:a,handTo:b})=>`${2*d}${a%2==b%2?"":"x"}${b===a||b===a+(a%2?-1:1)?"":"p"+(L(b/2)+1)}`).join(",");return 1===c.length?a:`[${a}]`}function F(d){const a=d.map(({value:d,handTo:a})=>`${c(a)}${d}`).join(",");return 1===d.length?a:`[${a}]`}function G(d,a){if(a=a.reduce((c,a)=>c.concat(Array.isArray(da[a])?da[a]:a),[]),"object"==typeof d){const b=a[0];if(("string"!=typeof b||!da[b])&&null!==b)throw new M("Unsupported notation.");return{notation:b,throws:d}}if(a.some(b=>"string"!=typeof b||!da[b]))throw new M("Unsupported notation.");for(const e of a){const a=da[e].parse(d);if(a)return{notation:e,throws:a}}throw new M("Invalid syntax.")}function H(b){return b.every(b=>b.every((d,a,{length:b})=>1===d||0===d&&a===b-1))}function I(i,a,b){for(let j=0;j<i.length;j++){const d=(j+b)%i.length;if(i[d].length!==a[j].length)return!1;for(let b=0;b<i[d].length;b++){if(i[d][b].length!==a[j][b].length)return!1;for(let c=0;c<i[d][b].length;c++){const e=i[d][b][c],f=a[j][b][c];if(e.value!==f.value||e.handFrom!==f.handFrom||e.handTo!==f.handTo)return!1}}}return!0}function J(c,d){return"string"!=typeof c&&(c=c.toString()),d++,c.length>=d?c:`${Array(d-c.length).join(" ")}${c}`}var K=Z,L=Math.floor;class M extends Error{constructor(b){super(b)}}M.prototype.name="SiteswapError";const N={schedules:new Map,strings:new Map};class O{constructor(d){if(!Array.isArray(d)||!d.every(Array.isArray))throw new Error("Invalid schedule.");let a=N.schedules.get(d);if(a)return a;const e=d.map(b=>b.join(",")).join("-");return a=N.strings.get(e),a?a:void(N.schedules.set(d,this),N.strings.set(e,this),this.schedule=d)}advance(e){const f=this.schedule.map(b=>b.slice(1));for(let a=0;a<e.length;a++){const b=e[a];if(b.filter(({value:b})=>b).length!==(this.schedule[a][0]||0))throw new Error("Invalid action.");if(b.length)for(const{value:g,handTo:a,handFrom:c}of b)if(!(0>=g)){f[a][g-1]=(f[a][g-1]||0)+1;for(let a=0;a<f.length;a++)for(let b=this.schedule[0].length-1;b<g;b++)f[a][b]||(f[a][b]=0)}}return new O(f)}}let P=!0;const Q={ws(){return{allow:" "}},trim(c){const a=Q.ws();return{symbols:[a,c,a],processor:([,b])=>b}},separator(){if(P){const b=Q.ws();return{either:[{symbols:[b,",",b]}," "],fixed:!0}}return{either:[","," "],fixed:!0}},separated(d,a,b){return{symbols:[b,{repeat:[d,b],min:a-1,max:1/0}],processor:([c,[...a]])=>[c,...a.map(n)]}},release(d,a){const b=Q.separated(a,2,d);return{either:[{symbols:[d]},{symbols:["[",P?Q.trim(b):b,"]"],processor:([,b])=>b}]}},asyncSiteswap(c,a){return Q.ws(),{symbol:Q.separated(a,1,Q.release(c,a)),processor:b=>b.map(b=>[b])}},syncSiteswap(f,a,b){const c=Q.ws(),d=Q.release(f,a);return P?{symbols:[Q.separated(c,1,{symbols:["(",c,d,b,d,c,")"],processor:([,,c,,a])=>[c,a]}),c,{allow:"*"}],processor:([c,,a])=>a?r(c):c}:{symbols:[Q.separated(null,1,{symbols:["(",d,b,d,")"],processor:([,c,,a])=>[c,a]}),{allow:"*"}],processor:([c,a])=>a?r(c):c}}},S=[{tokenType:"[",regex:"\\["},{tokenType:"]",regex:"\\]"},{tokenType:"(",regex:"\\("},{tokenType:")",regex:"\\)"},{tokenType:"<",regex:"<"},{tokenType:">",regex:">"},{tokenType:"\n",regex:"\n"},{tokenType:"|",regex:"\\|"},{tokenType:"-",regex:"-"},{tokenType:",",regex:","},{tokenType:" ",regex:" +"},{tokenType:"*",regex:"\\*"},{tokenType:"x",regex:"x",processor:()=>!0},{tokenType:"pN",regex:"p(?:[1-9][0-9]*|0)",processor:b=>o(b.slice(1))},{tokenType:"p",regex:"p",processor:()=>!0},{tokenType:"digit",regex:"[0-9]",processor:o},{tokenType:"digit_even",regex:"[02468]",processor:o},{tokenType:"letter",regex:"[a-zA-Z]",processor:p},{tokenType:"letter_even",regex:"[acegikmoqsuwyACEGIKMOQSUWY]",processor:p},{tokenType:"letter_capital",regex:"[A-Z]"},{tokenType:"integer",regex:"[1-9][0-9]*|[0-9]",processor:o},{tokenType:"integer_even",regex:"[1-9][0-9]*[02468]|[02468]",processor:o}],T={standard_async:function(){return P=!0,{symbol:Q.trim(Q.asyncSiteswap("integer",Q.separator())),processor:s}},compressed_async:function(){return P=!1,{symbol:Q.trim(Q.asyncSiteswap({either:["digit","letter"]},null)),processor:s}},standard_sync:function(){P=!0;const b=Q.separator();return{symbol:Q.trim(Q.syncSiteswap({symbols:["integer_even",{allow:"x"}],processor:([c,a])=>({value:c,cross:!!a})},b,b)),processor:t}},compressed_sync:function(){P=!1;const b={allow:Q.separator(),fixed:!0};return{symbol:Q.trim(Q.syncSiteswap({symbols:[{either:["digit_even","letter_even"]},{allow:"x"}],processor:([c,a])=>({value:c,cross:!!a})},null,b)),processor:t}},multihand:function(){P=!0;const e=Q.ws(),a=Q.trim(","),c=Q.trim("\n");return{symbol:Q.trim({either:[Q.separated(c,1,Q.separated(a,1,Q.release({symbols:[{either:[{symbols:[{repeat:[{symbol:"letter_capital",fixed:!0,value:"A"}],min:1,max:1/0},{allow:["letter_capital"]}],processor:([c,a])=>a?[...c,a].join(""):c.join("")},"letter_capital"],processor:b},"integer"],processor:([c,a])=>({value:a,hand:c})},a))),Q.separated(c,1,Q.separated(e,1,Q.release({symbols:["(",e,{allow:"-"},"integer",e,",",e,"integer",e,")"],processor:([,,d,a,,,,b])=>({value:b,offset:d?-a:a})},e)))]}),processor:u}},passing_async:function(){P=!0;const d=Q.ws(),a=Q.trim(Q.asyncSiteswap({symbols:["integer",{allow:"p"}],processor:([c,a])=>({value:c,pass:a})},Q.separator())),b=Q.trim(Q.asyncSiteswap({symbols:["integer",{allow:"pN"}],processor:([c,a])=>({value:c,pass:a})},Q.separator()));return{symbol:Q.trim({either:[{symbols:["<",a,"|",a,">"],processor:([,c,,a])=>[c,a]},{symbols:["<",Q.separated("|",2,b),">"],processor:([,b])=>b}]}),processor:v}},passing_sync:function(){P=!0;const h=Q.ws(),a=Q.separator(),b=Q.separator(),c=Q.separator(),d=Q.separator(),e=Q.trim({either:[Q.syncSiteswap({symbols:["integer_even",{allow:"x"},{allow:"p"}],processor:([d,a,b])=>({value:d,pass:b,cross:a})},a,a),Q.syncSiteswap({symbols:["integer_even",{allow:"p"},{allow:"x"}],processor:([d,a,b])=>({value:d,pass:a,cross:b})},b,b)]}),f=Q.trim({either:[Q.syncSiteswap({symbols:["integer_even",{allow:"x"},{allow:"pN"}],processor:([d,a,b])=>({value:d,pass:b,cross:a})},c,c),Q.syncSiteswap({symbols:["integer_even",{allow:"pN"},{allow:"x"}],processor:([d,a,b])=>({value:d,pass:a,cross:b})},d,d)]});return{symbol:Q.trim({either:[{symbols:["<",e,"|",e,">"],processor:([,c,,a])=>[c,a]},{symbols:["<",Q.separated("|",2,f),">"],processor:([,b])=>b}]}),processor:w}}};for(let c=0;c<S.length;c++){const a=S[c];a.index=c,T[a.tokenType]=a}const U={ERROR:!0};let V,ca=0;const da={"standard:async":{limits:{degree:{min:1,max:1}},hands:()=>["Hand"],parse:b=>A("standard_async",b),unparse:b=>b.map(([b])=>1===b.length?b[0].value:`[${b.map(({value:b})=>b).join(",")}]`).join(",")},"standard:sync":{limits:{degree:{min:2,max:2}},hands:()=>["Left","Right"],parse:b=>A("standard_sync",b),unparse:b=>b.map(b=>"("+b.map(b=>1===b.length?B(b[0]):`[${b.map(B).join(",")}]`)+")").join("")},standard:["standard:async","standard:sync"],"compressed:async":{limits:{degree:{min:1,max:1},greatestValue:{max:61}},hands:()=>["Hand"],parse:b=>A("compressed_async",b),unparse:b=>b.map(([b])=>1===b.length?b[0].value:`[${b.map(({value:b})=>b).join("")}]`).join("")},"compressed:sync":{limits:{degree:{min:2,max:2},greatestValue:{max:61}},hands:()=>["Left","Right"],parse:b=>A("compressed_sync",b),unparse:b=>b.map(b=>"("+b.map(b=>1===b.length?C(b[0]):`[${b.map(C).join("")}]`)+")").join("")},compressed:["compressed:async","compressed:sync"],"passing:async":{limits:{degree:{min:2}},hands:b=>Array(b).fill().map((c,a)=>`juggler ${a+1}`),parse:b=>A("passing_async",b),unparse:function(e){const a=e[0].length,b=[];for(let c=0;c<a;c++)b.push(e.map(b=>D(b[c])).join(","));return`<${b.join("|")}>`}},"passing:sync":{limits:{degree:{min:4,step:2}},hands:b=>Array(b).fill().map((c,a)=>`juggler ${L(a/2)+1}, hand ${a%2+1}`),parse:b=>A("passing_sync",b),unparse:function(e){const a=e[0].length,b=[];for(let c=0;c<a;c+=2)b.push(e.map(b=>`(${E(b[c])},${E(b[c+1])})`).join(""));return`<${b.join("|")}>`}},passing:["passing:async","passing:sync"],multihand:{hands:b=>Array(b).fill().map((d,a)=>c(a)),parse:b=>A("multihand",b),unparse:function(e){const a=e[0].length,f=[];for(let b=0;b<a;b++){const a=e.map(c=>F(c[b])).join(",");f.push(a)}return f.join("\n")}}};class Siteswap{constructor(g,b="compressed"){try{const{throws:c,notation:d}=G(g,[].concat(b));$(c),this.valid=!0,this.notation=d,this.throws=a(c)}catch(c){if(!(c instanceof M))throw c;return this.valid=!1,this.input=[g,b],this.error=c.message,this}const c=this.throws,e=c.reduce((c,a)=>c.concat(...a.map(b=>b.map(({value:b})=>b))),[]);this.degree=c[0].length,this.props=e.reduce((c,a)=>c+a)/c.length,this.multiplex=c.reduce((c,a)=>K(c,...a.map(({length:b})=>b)),0),this.greatestValue=K(...e),this.states=d(this),this.strictStates=f(this),this.orbits=j(this),this.composition=l(this),this.period=this.states.length,this.fullPeriod=this.strictStates.length,this.prime=1===this.composition.length,this.groundState=this.states.some(H)}}return Siteswap.prototype.equals=function(d){if(!this.valid)throw new M("Invalid siteswap.");if(!(d instanceof Siteswap)||!d.valid)return!1;const a=this.throws,b=d.throws;if(a.length!==b.length)return!1;for(let c=0;c<a.length;c++)if(I(a,b,c))return!0;return!1},Siteswap.prototype.rotate=function(e=1){if(!this.valid)throw new M("Invalid siteswap.");const f=this.throws;return 0>e&&(e=f.length+e%f.length),new Siteswap(f.map((a,b)=>f[(b+e)%f.length]),this.notation)},Siteswap.prototype.toString=function(e=this.notation){if(!this.valid)throw new M("Invalid siteswap.");if(null===e)return JSON.stringify(this.throws);if(!da[e]||Array.isArray(da[e]))throw new M("Unsupported notation.");if(this.notation!==e){const f=da[this.notation].limits||{},b=da[e].limits||{},a=Object.keys(b);if(a.some(c=>void 0!==b[c]&&void 0!==f[c]&&void 0!==b[c].min&&void 0!==f[c].max&&b[c].min>f[c].max||void 0!==b[c].max&&void 0!==f[c].min&&b[c].max<f[c].min))throw new M("Incompatible notations.");if(a.some(c=>b[c].max&&this[c]>b[c].max||b[c].min&&this[c]<b[c].min||0!=this[c]%(b[c].step||1)))throw new M("This siteswap can't be converted to the target notation.")}return da[e].unparse(this.throws)},Siteswap.prototype.log=function(){if(!this.valid)return void console.log("Invalid siteswap.");const i=[];let j;if(i.push(`siteswap\n ${this.toString().replace(/\n/g,"\n ")}`),i.push(`notation\n ${this.notation}`),i.push(`degree\n ${this.degree}`),i.push(`props\n ${this.props}`),i.push(`period\n ${this.period}`),i.push(`full period\n ${this.fullPeriod}`),i.push(`multiplex\n ${this.multiplex}`),i.push(`prime\n ${this.prime}`),i.push(`ground state\n ${this.groundState}`),2<this.degree){j=Array(this.degree).fill().map((d,a)=>c(a)),i.push("hand labels");const a=da[this.notation].hands(this.degree),b=[];b.push(this.degree.toString().length+1),b.push(K(...a.map(({length:b})=>b))),b.push(K(...j.map(({length:b})=>b)));for(let c=0;c<this.degree;c++){const d=J(c+1,b[0]),e=J(j[c],b[2]),f=J(a[c],b[1]);i.push(`${d}| ${e}${"multihand"===this.notation?"":` (${f})`}`)}}i.push("throw sequence");{const b=[];for(const[c,a]of this.throws.entries()){const d=a.map(b=>{let a;return a=2>=this.degree?b.map(({value:d,handFrom:a,handTo:b})=>`${d}${a===b?"":"x"}`).join(","):b.map(({value:b,handFrom:a,handTo:c})=>`${b}${j[c]}`).join(","),1===b.length?a:`[${a}]`});b.push([`${c+1}|`,...d])}const c=[];for(let d=0;d<b[0].length;d++)c.push(K(...b.map(a=>a[d].length+1)));i.push(...b.map(b=>b.map((d,a)=>J(d,c[a])).join("")))}i.push("states");{const a=this.period.toString().length+1;for(const[b,c]of this.states.entries())for(const[d,e]of c.entries())i.push(`${J(d?" ":b+1,a)}| [${e.join(",")}]`)}i.push("strict states");{const a=this.fullPeriod.toString().length+1;for(const[b,c]of this.strictStates.entries())for(const[d,e]of c.entries())i.push(`${J(d?"":b+1,a)}| [${e.map(b=>`[${b.length?b.join(","):"-"}]`).join(",")}]`)}i.push("orbits");{const e=this.orbits.length.toString().length+1;for(const[b,a]of this.orbits.entries())i.push(...a.toString().split("\n").map((c,a)=>`${J(a?"":b+1,e)}| ${c}`))}i.push("composition");{const e=this.composition.length.toString().length+1;for(const[b,a]of this.composition.entries())i.push(...a.toString().split("\n").map((c,a)=>`${J(a?"":b+1,e)}| ${c}`))}i.push(" "),console.log(i.join("\n"))},Siteswap})});class m{constructor(a){this.callback=a,this.update=this.update.bind(this),this.request=window.requestAnimationFrame(this.update),this.timestamp=null}update(a){const b=this.timestamp?a-this.timestamp:0;this.timestamp=a,this.request=window.requestAnimationFrame(this.update),this.callback(b)}kill(){window.cancelAnimationFrame(this.request)}}class n{constructor(a){this.position={x:NaN,y:NaN},this.color=a,this.animationAt=-1,this.animations=[],this.elapsed=0}update(a,b=!1){const{animations:c}=this;b&&(this.animationAt=-1,this.elapsed=0),this.elapsed+=a;let d=c[this.animationAt];for(;this.elapsed>=d.duration;)this.animationAt=(this.animationAt+1)%c.length,this.elapsed-=d.duration,d=c[this.animationAt];this.position=d.getPosition(this.elapsed)}draw(a,b){const c=b.ballRadius*b.multiplier;const d=this.position.x*b.multiplier;const e=this.position.y*b.multiplier;a.beginPath(),a.arc(d,e,c,0,2*Math.PI),a.fillStyle=this.color,a.globalAlpha=0<this.position.y?.9:.55,a.fill(),a.closePath()}}const o={s:(b,c,a)=>b*a+.5*c*a*a,v:(b,c,a)=>h(b*b+2*c*a)};class p{constructor(a,b,c,d){this.duration=a,this.position=b,this.velocity=c,this.acceleration=d}getPosition(a){const b={x:this.position.x+o.s(this.velocity.x,this.acceleration.x,a),y:this.position.y+o.s(this.velocity.y,this.acceleration.y,a)};return b}}class q{constructor(a){this.coefficients=a}at(a){return this.coefficients.reduce((b,c)=>c+a*b)}differentiate(){return new q(this.coefficients.slice(0,-1).map((a,b,{length:c})=>(c-b)*a))}}const r=new class{constructor(a,b=0,c=0){this.polynomials=[],this.xs=a.map(({x:a})=>a),this.ys=a.map(({y:a})=>a);const d=this.xs.length;const e=[];const f=[];const g=[];const h=[];const j=[];for(let g=0;g<d-1;g++)e[g]=this.xs[g+1]-this.xs[g],f[g]=(this.ys[g+1]-this.ys[g])/e[g];g[0]=2*(e[0]+e[1]),h[0]=6*(f[1]-f[0]);for(let j=1;j<d-1;j++)g[j]=2*(e[j]+e[j-1])-e[j-1]*e[j-1]/g[j-1],h[j]=6*(f[j]-f[j-1])-e[j-1]*h[j-1]/g[j-1];j[0]=b,j[d-1]=c;for(let f=d-2;0<f;f--)j[f]=(h[f]-e[f]*j[f+1])/g[f];for(let f=0;f<d-1;f++){const g=this.ys[f];const d=-(e[f]*j[f+1]/6)-e[f]*j[f]/3+(this.ys[f+1]-this.ys[f])/e[f];const c=j[f]/2;const b=(j[f+1]-j[f])/(6*e[f]);this.polynomials.push(new q([b,c,d,g]))}}at(a){const{xs:b}=this;const c=this.polynomials.length;const d=k(b[0],b[c]);const e=Z(b[0],b[c]);if(a<d||a>e)throw new Error("Out of bounds.");let f=0;if(b[0]<b[c])for(;f<c&&a>b[f+1];)f++;else for(;f<c&&a<b[f+1];)f++;return this.polynomials[f].at(a-b[f])}maximum(){const a={x:null,y:null};const{xs:d}=this;for(let e=0;e<this.polynomials.length;e++){const f=this.polynomials[e].differentiate();const[g,i,b]=f.coefficients;const c=h(i*i-4*g*b);const j=(-i+c)/(2*g)+d[e];const l=(-i-c)/(2*g)+d[e];const m=k(d[e],d[e+1]);const n=Z(d[e],d[e+1]);if(j>=m&&j<=n){const b=this.at(j);b>a.y&&(a.x=j,a.y=b)}if(l>=m&&l<=n){const b=this.at(l);b>a.y&&(a.x=l,a.y=b)}}return a}}([{x:0,y:0},{x:5,y:30},{x:30,y:100},{x:95,y:30},{x:100,y:0}]);class s{constructor(a,b,c,d){this.duration=a,this.width=c-b,this.yModifier=d/r.maximum().y,this.position={x:b,y:0}}getPosition(a){const b=a/this.duration;const c={x:this.position.x+b*this.width,y:this.position.y-r.at(100*b)*this.yModifier};return c}}class t{constructor(a,b,c){this.duration=a,this.position={x:b,y:c}}getPosition(){return this.position}}const u=Symbol.for("settings");const v=Symbol.for("settings");const w=Symbol.for("balls");const x={x:0,y:-9.81/1e3};const y=Symbol.for("settings");const z=Symbol.for("paused");const A=Symbol.for("balls");const B=Symbol.for("settings");const C=Symbol.for("paused");const D=Symbol.for("loop");const E=Symbol.for("balls");const F=Symbol.for("loop");const G=Symbol.for("paused");const H=Symbol.for("settings");const I=Symbol.for("paused");const J=Symbol.for("balls");const K=Symbol.for("balls");const L=Symbol.for("settings");const M=Symbol.for("paused");const N=Symbol.for("settings");const O=Symbol.for("paused");const P=Symbol.for("balls");const Q=Symbol.for("loop");class Animator{constructor(a,b={}){const c="string"==typeof a?document.getElementById(a):a;if(!c)throw new Error("Canvas element not supplied.");this.context=c.getContext("2d"),this.siteswap=null,this[Q]=null,this[O]=!1,this[P]=[],this[N]={dwell:.5,slowdown:1,reversed:!1,continuous:!0,ballColor:"#ff3636",beatDuration:300,ballRadius:70,catchWidth:400,innerHeight:0,innerWidth:0,catchHeight:0,multiplier:null},this.configure(b)}}return Animator.prototype.play=function(a){if(this[C]=!1,void 0!==a){if(this[D]&&this.stop(),"string"==typeof a&&(a=new l(a)),this.siteswap=a,!(a instanceof l))throw new Error("Invalid input.");if(!a.valid)throw new Error("Invalid siteswap.");if(2<a.degree)throw new Error(`Pattern requires ${a.degree} hands.`);0===a.greatestValue||(e(this),this[B].continuous&&this.seek(0,!0),this[D]=new m(a=>g(this,a)))}},Animator.prototype.stop=function(){const a=this[F];a&&(f(this.context),a.kill(),this[F]=null,this[E].length=0,this.siteswap=null)},Animator.prototype.pause=function(){this[G]=!0},Animator.prototype.configure=function(a){const b=this[i];void 0!==a.beatDuration&&(b.beatDuration=a.beatDuration),void 0!==a.slowdown&&(b.slowdown=a.slowdown),void 0!==a.dwell&&(b.dwell=a.dwell),void 0!==a.ballColor&&(b.ballColor=a.ballColor),void 0!==a.reversed&&(b.reversed=a.reversed),void 0!==a.continuous&&(b.continuous=a.continuous);const{beatDuration:c,dwell:d,slowdown:e,ballColor:f,reversed:g,continuous:h}=b;if("number"!=typeof c)throw new Error("Invalid configuration (`beatDuration` must be a number).");if(0>=c)throw new Error("Invalid configuration (`beatDuration` must be positive).");if("number"!=typeof e)throw new Error("Invalid configuration (`slowdown` must be a number).");if(0>=e)throw new Error("Invalid configuration (`slowdown` must be positive).");if("number"!=typeof d)throw new Error("Invalid configuration (`dwell` must be a number).");if(0>d||1<d)throw new Error("Invalid configuration (`dwell` must be in [0-1] range).");if("string"!=typeof f)throw new Error("Invalid configuration (`ballColor` must be a string).");if(!/^#[0-9a-f]{3}(?:[0-9a-f]{3})?/i.test(f))throw new Error("Invalid configuration (`ballColor` must be a valid css color).");if("boolean"!=typeof g)throw new Error("Invalid configuration (`reversed` must be a boolean).");if("boolean"!=typeof h)throw new Error("Invalid configuration (`continuous` must be a boolean).")},Animator.prototype.dye=function(a,b){const c=this[J];const d=this[H];const{context:e}=this;if(void 0===b)for(const b of c)b.color=a;else{if(!c[b])throw new Error("Ball doesn't exist.");c[b].color=a}if(this[I]){f(e);for(const a of c)a.draw(e,d)}},Animator.prototype.seek=function(a,b=!1){if("number"!=typeof a||0>a||100<a)throw new Error("Expected number in [0-100] range.");100===a&&(a=0),b&&(a+=100);const c=this[L];const d=this[K];const e=this[M];const g=this.siteswap.fullPeriod*(this.siteswap.fullPeriod%2?2:1)*c.beatDuration;const{context:h}=this;for(const c of d)c.update(a/100*g,!0);if(e){f(h);for(const a of d)a.draw(h,c)}},Animator}();