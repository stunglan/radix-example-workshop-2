(window.webpackJsonpwww=window.webpackJsonpwww||[]).push([[0],[,,,,,,function(e,n,t){e.exports=t.p+"static/media/logo.2d32cfee.svg"},,,function(e,n,t){e.exports=t(16)},,,,,function(e,n,t){},function(e,n,t){},function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),l=t(2),o=t.n(l),c=(t(14),t(3)),s=t(4),i=t(7),u=t(5),m=t(8),p=function(e){var n=e.result,t=e.refreshInterval,a=e.nrRefresh;return r.a.createElement("div",null,r.a.createElement("p",null,"Response from the Grand Echo service (page refreshed every ",t," milliseconds)"),r.a.createElement("p",null,"Number of refresh: ",r.a.createElement("b",null,a)),r.a.createElement("p",null,"Generated password: ",r.a.createElement("b",null,n.PASSWORD)),r.a.createElement("p",null,"Generated passphrase: ",r.a.createElement("b",null,n.PASSPHRASE)),r.a.createElement("p",null,"Radix Application: ",r.a.createElement("b",null,n.RADIX_APP)),r.a.createElement("p",null,"Radix Component: ",r.a.createElement("b",null,n.RADIX_COMPONENT)),r.a.createElement("p",null,"Radix Environment: ",r.a.createElement("b",null,n.RADIX_ENVIRONMENT)),r.a.createElement("p",null,"Radix Host name: ",r.a.createElement("b",null,n.HOSTNAME)),r.a.createElement("p",null,"Radix Host platform: ",r.a.createElement("b",null,n.HOSTPLATFORM)))},h=t(6),d=t.n(h),E=function(){return r.a.createElement("header",{className:"App-header"},r.a.createElement("img",{src:d.a,className:"App-logo",alt:"logo"}),r.a.createElement("p",null,"Radix a PaaS built on Kubernetes"),r.a.createElement("div",{className:"App-description"},r.a.createElement("br",null),"Radix is an application platform built to increase development speed by providing",r.a.createElement("br",null),"the best possible tools to develop and run your applications."),r.a.createElement("a",{className:"App-link",href:"https://www.radix.equinor.com",target:"_blank",rel:"noopener noreferrer"},"Learn more"))},f=function(){return new Promise(function(e){e({RADIX_APP:"app_name",RADIX_CLUSTERNAME:"dev-1",RADIX_COMPONENT:"echo",RADIX_ENVIRONMENT:"development",HOSTNAME:"my-computer",HOSTPLATFORM:"mac",PASSWORD:"random_password",PASSPHRASE:"random_passphrase"})})},R=function(e){return fetch(e,v()).then(function(e){return e.json()})},v=function(){var e=new Headers;return e.append("pragma","no-cache"),e.append("cache-control","no-cache"),{method:"GET",headers:e}},A=function(e){var n=R;return e&&(n=f),{fetch:n}},b=(t(15),function(e){function n(){var e;return Object(c.a)(this,n),(e=Object(i.a)(this,Object(u.a)(n).call(this))).loadData=function(){var n=A(e.useMockData),t=e.state.nrRefresh+1;n.fetch("/api/echo").then(function(n){return e.setState({echoResult:n,nrRefresh:t})})},e.refreshInterval=1e3,e.useMockData=!0,e.state={echoResult:{},nrRefresh:0},e}return Object(m.a)(n,e),Object(s.a)(n,[{key:"componentDidMount",value:function(){setInterval(this.loadData,this.refreshInterval)}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(E,null),r.a.createElement(p,{result:this.state.echoResult,refreshInterval:this.refreshInterval,nrRefresh:this.state.nrRefresh}))}}]),n}(r.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[9,1,2]]]);
//# sourceMappingURL=main.4d595b3d.chunk.js.map