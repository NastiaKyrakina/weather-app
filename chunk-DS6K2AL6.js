import{R as u,T as d,V as c,W as l,i as D}from"./chunk-MNMWNFLP.js";var F=null;function f(){return F}function ze(t){F??=t}var p=class{};var E=new d(""),w=(()=>{class t{historyGo(e){throw new Error("")}static \u0275fac=function(i){return new(i||t)};static \u0275prov=u({token:t,factory:()=>l(T),providedIn:"platform"})}return t})();var T=(()=>{class t extends w{_location;_history;_doc=l(E);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return f().getBaseHref(this._doc)}onPopState(e){let i=f().getGlobalEventTarget(this._doc,"window");return i.addEventListener("popstate",e,!1),()=>i.removeEventListener("popstate",e)}onHashChange(e){let i=f().getGlobalEventTarget(this._doc,"window");return i.addEventListener("hashchange",e,!1),()=>i.removeEventListener("hashchange",e)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(e){this._location.pathname=e}pushState(e,i,r){this._history.pushState(e,i,r)}replaceState(e,i,r){this._history.replaceState(e,i,r)}forward(){this._history.forward()}back(){this._history.back()}historyGo(e=0){this._history.go(e)}getState(){return this._history.state}static \u0275fac=function(i){return new(i||t)};static \u0275prov=u({token:t,factory:()=>new t,providedIn:"platform"})}return t})();function _(t,n){if(t.length==0)return n;if(n.length==0)return t;let e=0;return t.endsWith("/")&&e++,n.startsWith("/")&&e++,e==2?t+n.substring(1):e==1?t+n:t+"/"+n}function m(t){let n=t.match(/#|\?|$/),e=n&&n.index||t.length,i=e-(t[e-1]==="/"?1:0);return t.slice(0,i)+t.slice(e)}function a(t){return t&&t[0]!=="?"?"?"+t:t}var h=(()=>{class t{historyGo(e){throw new Error("")}static \u0275fac=function(i){return new(i||t)};static \u0275prov=u({token:t,factory:()=>l(B),providedIn:"root"})}return t})(),R=new d(""),B=(()=>{class t extends h{_platformLocation;_baseHref;_removeListenerFns=[];constructor(e,i){super(),this._platformLocation=e,this._baseHref=i??this._platformLocation.getBaseHrefFromDOM()??l(E).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}prepareExternalUrl(e){return _(this._baseHref,e)}path(e=!1){let i=this._platformLocation.pathname+a(this._platformLocation.search),r=this._platformLocation.hash;return r&&e?`${i}${r}`:i}pushState(e,i,r,s){let o=this.prepareExternalUrl(r+a(s));this._platformLocation.pushState(e,i,o)}replaceState(e,i,r,s){let o=this.prepareExternalUrl(r+a(s));this._platformLocation.replaceState(e,i,o)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}static \u0275fac=function(i){return new(i||t)(c(w),c(R,8))};static \u0275prov=u({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var O=(()=>{class t{_subject=new D;_basePath;_locationStrategy;_urlChangeListeners=[];_urlChangeSubscription=null;constructor(e){this._locationStrategy=e;let i=this._locationStrategy.getBaseHref();this._basePath=N(m(C(i))),this._locationStrategy.onPopState(r=>{this._subject.next({url:this.path(!0),pop:!0,state:r.state,type:r.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(e=!1){return this.normalize(this._locationStrategy.path(e))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(e,i=""){return this.path()==this.normalize(e+a(i))}normalize(e){return t.stripTrailingSlash(P(this._basePath,C(e)))}prepareExternalUrl(e){return e&&e[0]!=="/"&&(e="/"+e),this._locationStrategy.prepareExternalUrl(e)}go(e,i="",r=null){this._locationStrategy.pushState(r,"",e,i),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+a(i)),r)}replaceState(e,i="",r=null){this._locationStrategy.replaceState(r,"",e,i),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+a(i)),r)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(e=0){this._locationStrategy.historyGo?.(e)}onUrlChange(e){return this._urlChangeListeners.push(e),this._urlChangeSubscription??=this.subscribe(i=>{this._notifyUrlChangeListeners(i.url,i.state)}),()=>{let i=this._urlChangeListeners.indexOf(e);this._urlChangeListeners.splice(i,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(e="",i){this._urlChangeListeners.forEach(r=>r(e,i))}subscribe(e,i,r){return this._subject.subscribe({next:e,error:i??void 0,complete:r??void 0})}static normalizeQueryParams=a;static joinWithSlash=_;static stripTrailingSlash=m;static \u0275fac=function(i){return new(i||t)(c(h))};static \u0275prov=u({token:t,factory:()=>M(),providedIn:"root"})}return t})();function M(){return new O(c(h))}function P(t,n){if(!t||!n.startsWith(t))return n;let e=n.substring(t.length);return e===""||["/",";","?","#"].includes(e[0])?e:n}function C(t){return t.replace(/\/index.html$/,"")}function N(t){if(new RegExp("^(https?:)?//").test(t)){let[,e]=t.split(/\/\/[^\/]+/);return e}return t}function Ve(t,n){n=encodeURIComponent(n);for(let e of t.split(";")){let i=e.indexOf("="),[r,s]=i==-1?[e,""]:[e.slice(0,i),e.slice(i+1)];if(r.trim()===n)return decodeURIComponent(s)}return null}var k="browser",$="server";function je(t){return t===k}function Ge(t){return t===$}var y=class{};var g=function(t){return t[t.State=0]="State",t[t.Transition=1]="Transition",t[t.Sequence=2]="Sequence",t[t.Group=3]="Group",t[t.Animate=4]="Animate",t[t.Keyframes=5]="Keyframes",t[t.Style=6]="Style",t[t.Trigger=7]="Trigger",t[t.Reference=8]="Reference",t[t.AnimateChild=9]="AnimateChild",t[t.AnimateRef=10]="AnimateRef",t[t.Query=11]="Query",t[t.Stagger=12]="Stagger",t}(g||{}),Ze="*";function We(t,n=null){return{type:g.Sequence,steps:t,options:n}}function Ke(t){return{type:g.Style,styles:t,offset:null}}var S=class{_onDoneFns=[];_onStartFns=[];_onDestroyFns=[];_originalOnDoneFns=[];_originalOnStartFns=[];_started=!1;_destroyed=!1;_finished=!1;_position=0;parentPlayer=null;totalTime;constructor(n=0,e=0){this.totalTime=n+e}_onFinish(){this._finished||(this._finished=!0,this._onDoneFns.forEach(n=>n()),this._onDoneFns=[])}onStart(n){this._originalOnStartFns.push(n),this._onStartFns.push(n)}onDone(n){this._originalOnDoneFns.push(n),this._onDoneFns.push(n)}onDestroy(n){this._onDestroyFns.push(n)}hasStarted(){return this._started}init(){}play(){this.hasStarted()||(this._onStart(),this.triggerMicrotask()),this._started=!0}triggerMicrotask(){queueMicrotask(()=>this._onFinish())}_onStart(){this._onStartFns.forEach(n=>n()),this._onStartFns=[]}pause(){}restart(){}finish(){this._onFinish()}destroy(){this._destroyed||(this._destroyed=!0,this.hasStarted()||this._onStart(),this.finish(),this._onDestroyFns.forEach(n=>n()),this._onDestroyFns=[])}reset(){this._started=!1,this._finished=!1,this._onStartFns=this._originalOnStartFns,this._onDoneFns=this._originalOnDoneFns}setPosition(n){this._position=this.totalTime?n*this.totalTime:1}getPosition(){return this.totalTime?this._position/this.totalTime:1}triggerCallback(n){let e=n=="start"?this._onStartFns:this._onDoneFns;e.forEach(i=>i()),e.length=0}},A=class{_onDoneFns=[];_onStartFns=[];_finished=!1;_started=!1;_destroyed=!1;_onDestroyFns=[];parentPlayer=null;totalTime=0;players;constructor(n){this.players=n;let e=0,i=0,r=0,s=this.players.length;s==0?queueMicrotask(()=>this._onFinish()):this.players.forEach(o=>{o.onDone(()=>{++e==s&&this._onFinish()}),o.onDestroy(()=>{++i==s&&this._onDestroy()}),o.onStart(()=>{++r==s&&this._onStart()})}),this.totalTime=this.players.reduce((o,b)=>Math.max(o,b.totalTime),0)}_onFinish(){this._finished||(this._finished=!0,this._onDoneFns.forEach(n=>n()),this._onDoneFns=[])}init(){this.players.forEach(n=>n.init())}onStart(n){this._onStartFns.push(n)}_onStart(){this.hasStarted()||(this._started=!0,this._onStartFns.forEach(n=>n()),this._onStartFns=[])}onDone(n){this._onDoneFns.push(n)}onDestroy(n){this._onDestroyFns.push(n)}hasStarted(){return this._started}play(){this.parentPlayer||this.init(),this._onStart(),this.players.forEach(n=>n.play())}pause(){this.players.forEach(n=>n.pause())}restart(){this.players.forEach(n=>n.restart())}finish(){this._onFinish(),this.players.forEach(n=>n.finish())}destroy(){this._onDestroy()}_onDestroy(){this._destroyed||(this._destroyed=!0,this._onFinish(),this.players.forEach(n=>n.destroy()),this._onDestroyFns.forEach(n=>n()),this._onDestroyFns=[])}reset(){this.players.forEach(n=>n.reset()),this._destroyed=!1,this._finished=!1,this._started=!1}setPosition(n){let e=n*this.totalTime;this.players.forEach(i=>{let r=i.totalTime?Math.min(1,e/i.totalTime):1;i.setPosition(r)})}getPosition(){let n=this.players.reduce((e,i)=>e===null||i.totalTime>e.totalTime?i:e,null);return n!=null?n.getPosition():0}beforeDestroy(){this.players.forEach(n=>{n.beforeDestroy&&n.beforeDestroy()})}triggerCallback(n){let e=n=="start"?this._onStartFns:this._onDoneFns;e.forEach(i=>i()),e.length=0}},qe="!";export{f as a,ze as b,p as c,E as d,O as e,Ve as f,k as g,je as h,Ge as i,y as j,g as k,Ze as l,We as m,Ke as n,S as o,A as p,qe as q};
