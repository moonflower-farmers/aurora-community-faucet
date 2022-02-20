(this["webpackJsonpaurora-faucet-frontend"]=this["webpackJsonpaurora-faucet-frontend"]||[]).push([[0],{1030:function(e,t){},1033:function(e,t){},1178:function(e,t,n){"use strict";n.r(t);var a=n(3),o=n.n(a),c=n(195),r=n.n(c),i=(n(527),n(76)),s=(n(528),n(506)),u=(n(529),n(11));var l=function(e){var t=e.text,n=e.loadingText,o=e.color,c=e.disabled,r=e.hidden,s=e.onClick,l=Object(a.useState)(!1),h=Object(i.a)(l,2),f=h[0],d=h[1],g=Object(a.useCallback)((function(){d(!0),s().then((function(){d(!1)}))}),[s]);return Object(u.jsx)("button",{className:"BackupButton",disabled:f|c,onClick:f?null:g,style:{margin:"10px",backgroundColor:o,display:!r||"none"},children:f?n||"Loading\u2026":t})},h=n(42),f=n(197),d=n.n(f);n(638);function g(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),n=t[0],o=t[1];return Object(u.jsxs)(h.a,{allowZeroExpanded:!0,allowMultipleExpanded:!0,onChange:function(e){if(e.length>n.length){var t=e[e.length-1],a=document.getElementById("accordion__panel-".concat(t)).getBoundingClientRect().bottom;a>window.innerHeight&&window.scrollBy(0,a-window.innerHeight)}o(e)},children:[Object(u.jsxs)(h.b,{children:[Object(u.jsx)(h.d,{children:Object(u.jsx)(h.c,{children:"What is a Faucet ?"})}),Object(u.jsx)(h.e,{children:Object(u.jsx)(d.a,{className:"Explanations",children:"A `Faucet` is a tool that provides a small amount of funds to start using a cryptocurrency without having to buy some. \n    It's often a shity website with plenty of ads that will send you funds half the time, only after asking you to input your email to send you spam later.  \n    `Polygon` had none for its mainnet, so here's one, without the crap you usually get on typical faucets"})})]}),Object(u.jsxs)(h.b,{children:[Object(u.jsx)(h.d,{children:Object(u.jsx)(h.c,{children:"How much can I get ?"})}),Object(u.jsx)(h.e,{children:Object(u.jsx)(d.a,{className:"Explanations",children:"`Plenty enough!`  \n    Transactions on Polygon network are dirt cheap. Forget Ethereum, forget BSC, we're talking about fractions of a cent for most transactions.  \n    So this faucet will only send you `0.0005 MATIC` - which is enough to deposit some fund on Aave and [earn fresh MATIC](https://medium.com/stakingbits/guide-to-yield-farming-with-aave-on-polygon-matic-network-a03bd2154275), for instance  \n    With `0.001 MATIC`, you can do `100` basic transactions on Polygon network ! You can even deposit or withdraw funds on `Aave`, even though it is a pretty expensive transaction (`50$+` on Ethereum, `1$+` on Binance Smart Chain). \n    The goal of this faucet is not to make you rich but just to make the onboarding to Polygon smoother.  \n    You can use it up to `3 times a day`, for the most clumsy of us \ud83d\ude44  \n    Feel free to send some spare change at `0x8C5a6C767Ee7084a8C656Acd457Da9561163aE7E` to replenish the faucet once you're rich \ud83e\udd84"})})]}),Object(u.jsxs)(h.b,{children:[Object(u.jsx)(h.d,{children:Object(u.jsx)(h.c,{children:"How to earn (much) more MATIC ?"})}),Object(u.jsx)(h.e,{children:Object(u.jsx)(d.a,{className:"Explanations",children:"* First bring your assets from Ethereum to Polygon through [the bridge](https://wallet.matic.network/bridge/)  \n    Then there's a variety of things you can do:  \n    * Swapping assets on [QuickSwap](https://quickswap.exchange/) or [ComethSwap](https://swap.cometh.io/#/swap), the equivalents of `Uniswap` on Polygon  \n    [Paraswap](https://paraswap.io/#/?network=polygon) is also available and will route your swaps through the cheapest path.  \n    * Depositing your assets on [Aave](https://app.aave.com/dashboard) or [Curve](https://polygon.curve.fi/) to farm some fresh MATIC  \n    * Enjoy the same functionalities Ethereum has, only with less friction \ud83e\udd84  \n    "})})]})]})}var b=n(4),p=n(5),j=n(6),m=n(1),x=n.n(m),w=n(507),A=n.n(w),y=n(510),v=n.n(y),O=(n(1177),function(){function e(){Object(p.a)(this,e),this.connected=!1,this.busy=!1,this.web3Provider=null,this.web3=null,this.balance=0,this.network=0}return Object(j.a)(e,[{key:"connect",value:function(){var e=Object(b.a)(x.a.mark((function e(){var t,n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.connected){e.next=23;break}return t={injected:{display:{logo:"data:image/gif;base64,INSERT_BASE64_STRING",name:"Injected",description:"Connect with your wallet"},package:null}},n=new v.a({network:"mainnet",cacheProvider:!0,providerOptions:t}),e.next=5,n.connect();case 5:return this.web3Provider=e.sent,e.prev=6,e.next=9,this.web3Provider.request({method:"eth_requestAccounts",params:[]});case 9:this.account=e.sent,e.next=15;break;case 12:e.prev=12,e.t0=e.catch(6),console.error("User denied account access: ".concat(e.t0));case 15:return this.web3=new A.a(this.web3Provider),e.next=18,this.web3.eth.net.getId();case 18:if(this.network=e.sent,1313161554!=this.network){e.next=23;break}return this.connected=!0,console.log("connected: ".concat(this.account," ").concat(typeof this.account)),e.abrupt("return",this.account);case 23:case"end":return e.stop()}}),e,this,[[6,12]])})));return function(){return e.apply(this,arguments)}}()},{key:"getFormattedBalance",value:function(e,t){var n=this.web3.utils.toBN(e),a=this.web3.utils.toBN(Math.pow(10,t)),o=n.div(a).toString(),c=n.mod(a).toString();return o+"."+(c=c.padStart(t,"0"))+" ETH"}},{key:"getBalance",value:function(){var e=Object(b.a)(x.a.mark((function e(){var t,n,a=arguments;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=!(a.length>0&&void 0!==a[0])||a[0],n=18,e.next=4,this.web3.eth.getBalance(String(this.account));case 4:return this.balance=e.sent,this.formatted_balance=this.getFormattedBalance(this.balance,n),e.abrupt("return",t?this.formatted_balance:this.balance);case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()}]),e}()),B=O,q=n(518),P=n.n(q),Q=n(77),C=n.n(Q);function k(){return(k=Object(b.a)(x.a.mark((function e(t,n){var a;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(n),a=C.a.get("apiurl")+"/rpc-mainnet/matic/"+t+"/"+n,console.log("Sending request..."),e.next=5,P.a.get(a).then((function(e){if(200===e.status)return C.a.get("explorer")+"/tx/"+e.data.hash}));case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var E=function(e,t){return k.apply(this,arguments)},V=n(138),U=(n(1175),n(519)),T=n(520),W=n.n(T);C.a.set(U);var I=new B;var J=function(){var e=Object(a.useState)("Not connected"),t=Object(i.a)(e,2),n=t[0],o=t[1],c=Object(a.useState)(0),r=Object(i.a)(c,2),h=r[0],f=r[1],d=Object(a.useState)(""),b=Object(i.a)(d,2),p=b[0],j=b[1],m=Object(a.useState)(""),x=Object(i.a)(m,2),w=x[0],A=x[1];return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(V.a,{hideProgressBar:!0}),Object(u.jsxs)("div",{className:"App-banner",children:[Object(u.jsx)("img",{src:"data:image/png;base64,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",className:"App-logo",alt:"logo"}),Object(u.jsx)("p",{className:"App-title",children:"Aurora Faucet"})]}),Object(u.jsxs)("header",{className:"App-header",children:[Object(u.jsxs)("div",{className:"Commands",children:[Object(u.jsx)(l,{text:"Connect",loadingText:"Loading...",color:"#8248e5",hidden:"Not connected"!==n,onClick:function(){return I.connect().then((function(e){e?(o(e),I.getBalance().then((function(e){f(e)}))):V.b.error("Wrong network: Please select Aurora network first")}))}}),Object(u.jsx)(l,{text:Number(h)>=C.a.get("maxAmount")?"Balance too high":"Receive",loadingText:"Sending...",color:"#8248e5",disabled:Number(h)>=C.a.get("maxAmount")||""===w,hidden:"Not connected"===n,onClick:function(){return E(n,w).then((function(e){V.b.success("Transaction sent!"),j(e),f(I.getFormattedBalance(Number(I.balance+C.a.get("maxAmount")),18)),A("")})).catch((function(e){console.log(e),e.response&&e.response.data?V.b.error("".concat(e.response.data.err.message," \ud83d\ude45")):V.b.error(e.message)}))}})]}),Object(u.jsx)("form",{id:"receive",action:"",method:"POST",children:Object(u.jsx)(W.a,{theme:"dark",sitekey:C.a.get("hcaptchasitekey"),onVerify:function(e,t){A(e)}})}),Object(u.jsx)("p",{hidden:"Not connected"===n,children:n}),Object(u.jsx)("p",{hidden:"Not connected"===n,children:"Your balance: "+String(h)}),Object(u.jsx)("a",{hidden:""===p,target:"_blank",rel:"noopener noreferrer",href:p,children:p}),Object(u.jsx)("br",{}),Object(u.jsx)(g,{}),Object(u.jsxs)("div",{className:"App-footer",children:[Object(u.jsxs)("p",{children:["Built for Aurora by"," ",Object(u.jsx)("a",{href:"https://github.com/moonflower-farmers",target:"_blank",rel:"noopener noreferrer",children:"MoonFlower Farmers"})," ","with React, hosted on Github. v","".concat(s.version),"."," ",Object(u.jsx)("a",{href:"https://github.com/moonflower-farmers/aurora-community-faucet",children:"PRs welcomed and appreciated \u2728"})]}),Object(u.jsxs)("p",{children:["Ethereum donation:"," ",Object(u.jsx)("a",{h:!0,href:"https://explorer.mainnet.aurora.dev/address/0xB1cf78A3d8d77282435FB2a61Bb9a30384481d37/transactions",target:"_blanc",rel:"noopener noreferrer",children:"0xB1cf78A3d8d77282435FB2a61Bb9a30384481d37"})]})]})]})]})},N=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,1184)).then((function(t){var n=t.getCLS,a=t.getFID,o=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),a(e),o(e),c(e),r(e)}))};r.a.render(Object(u.jsx)(o.a.StrictMode,{children:Object(u.jsx)(J,{})}),document.getElementById("root")),N()},506:function(e){e.exports=JSON.parse('{"homepage":"https://faucet.moonflowerfarmers.com","name":"aurora-faucet-frontend","version":"0.1.1","private":true,"dependencies":{"@hcaptcha/react-hcaptcha":"^0.3.6","@testing-library/jest-dom":"^5.11.4","@testing-library/react":"^11.1.0","@testing-library/user-event":"^12.1.10","@walletconnect/web3-provider":"^1.7.1","axios":"^0.21.1","gh-pages":"^3.1.0","react":"^17.0.2","react-accessible-accordion":"^3.3.4","react-dom":"^17.0.2","react-global-configuration":"^1.4.1","react-hcaptcha":"^0.1.1","react-markdown":"^6.0.1","react-scripts":"4.0.3","react-toastify":"^7.0.4","use-wallet":"^0.8.1","web-vitals":"^1.0.1","web3":"^1.3.5","web3modal":"^1.9.3"},"scripts":{"start":"react-scripts start","build":"react-scripts build","test":"react-scripts test","eject":"react-scripts eject","predeploy":"yarn run build","deploy":"gh-pages -d build"},"eslintConfig":{"extends":["react-app","react-app/jest"]},"browserslist":{"production":[">0.2%","not dead","not op_mini all"],"development":["last 1 chrome version","last 1 firefox version","last 1 safari version"]}}')},519:function(e){e.exports=JSON.parse('{"apiurl":"http://faucet-backend.moonflowerfarmers.com","explorer":"https://aurorascan.dev","maxAmount":0,"hcaptchasitekey":"a5933bca-c838-4a2a-a580-b5f6d5ca870b"}')},527:function(e,t,n){},528:function(e,t,n){},529:function(e,t,n){},638:function(e,t,n){},652:function(e,t){},655:function(e,t){},657:function(e,t){},661:function(e,t){},662:function(e,t){},685:function(e,t){},687:function(e,t){},696:function(e,t){},698:function(e,t){},709:function(e,t){},711:function(e,t){},725:function(e,t){},728:function(e,t){},763:function(e,t){},766:function(e,t){},774:function(e,t){},775:function(e,t){},777:function(e,t){},780:function(e,t){},787:function(e,t){},790:function(e,t){},796:function(e,t){},799:function(e,t){},806:function(e,t){},809:function(e,t){},816:function(e,t){},819:function(e,t){},825:function(e,t){},828:function(e,t){},872:function(e,t){},875:function(e,t){},902:function(e,t){},907:function(e,t){},909:function(e,t){},916:function(e,t){},917:function(e,t){},941:function(e,t){},943:function(e,t){},950:function(e,t){},957:function(e,t){}},[[1178,1,2]]]);
//# sourceMappingURL=main.1c0383b3.chunk.js.map