(this["webpackJsonpnft-react"]=this["webpackJsonpnft-react"]||[]).push([[0],{1118:function(e,t){},1152:function(e,t){},1241:function(e,t){},1242:function(e,t){},1267:function(e,t){},1274:function(e,t){},1395:function(e,t){},1418:function(e,t){},1799:function(e,t){},1914:function(e,t){},1916:function(e,t){},1942:function(e,t){},1972:function(e,t){},2051:function(e,t){},2053:function(e,t){},2074:function(e,t){},2099:function(e,t){},2119:function(e,t,n){"use strict";n.r(t);var o=n(223),r=n.n(o),c=n(794),i=n.n(c),a=(n(824),n.p+"static/media/logo.6ce24c58.svg"),s=(n(825),n(9)),u=n(0),l=n.n(u),d=n(403),p=n(795),f=n(509),h=n(507),b=n(28),m=n(321),g=n(317),v=n.n(g),j=function(){var e=Object(s.a)(l.a.mark((function e(){var t,n,o,r,c,i,a,u,g,v=arguments;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=v.length>0&&void 0!==v[0]?v[0]:"",n=v.length>1&&void 0!==v[1]?v[1]:"Default name",o=v.length>2&&void 0!==v[2]?v[2]:"Default description",r=v.length>3&&void 0!==v[3]?v[3]:"1",c=v.length>4&&void 0!==v[4]?v[4]:function(){console.log("default console log")},i=!1,console.log("darova"),{1:"https://node-mainnet.rarible.com",3:"https://node-ropsten.rarible.com",4:"https://node-rinkeby.rarible.com",17:"https://node-e2e.rarible.com"},Object(f.mapEthereumWallet)(new d.InjectedWeb3ConnectionProvider),a=Object(f.mapEthereumWallet)(new p.WalletConnectConnectionProvider({bridge:"https://bridge.walletconnect.org",clientMeta:{description:"WalletConnect NodeJS Client",url:"https://nodejs.org/en/",icons:["https://nodejs.org/static/images/logo.svg"],name:"WalletConnect"},rpc:{1:"https://mainnet-nethermind.blockscout.com/",3:"https://node-ropsten.rarible.com",4:"https://node-rinkeby.rarible.com",137:"https://matic-mainnet.chainstacklabs.com"},chainId:1,qrcode:!0,qrcodeModal:{open:function(e,t,n){return Object(s.a)(l.a.mark((function t(){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:c(JSON.stringify({type:"LAUNCH",message:e})),console.log(e);case 2:case"end":return t.stop()}}),t)})))()},close:function(){return Object(s.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("closed method was called "),e.abrupt("return","darova");case 2:case"end":return e.stop()}}),e)})))()}},qrcodeModalOptions:{mobileLinks:["metamask","trust"]},signingMethods:["eth_signTypedData_v4","eth_sendTransaction","eth_signTransaction","eth_sign","eth_signTypedData","eth_signTypedData_v1","eth_signTypedData_v2","eth_signTypedData_v3","eth_signTypedData_v4","personal_sign"]})),(u=d.Connector.create(a)).connection.subscribe(function(){var e=Object(s.a)(l.a.mark((function e(a){var s,u,d,p,f,g,v;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log("connection: "+a.status),"connected"!==a.status||i){e.next=24;break}return i=!0,console.log("connection logic started"),s="ETHEREUM:0xc9154424B823b10579895cCBE442d41b9Abd96Ed",u=Object(h.createRaribleSdk)(a.connection.wallet,"prod"),e.next=8,u.nft.generateTokenId({collection:Object(b.toContractAddress)(s),minter:Object(m.toUnionAddress)("ETHEREUM:".concat(a.connection.address))});case 8:return d=e.sent,console.log(d),p={collectionId:Object(b.toContractAddress)(s),tokenId:d},e.next=13,u.nft.mintAndSell(p);case 13:return f=e.sent,e.next=16,w(t,null===d||void 0===d?void 0:d.tokenId,n,o);case 16:return g=e.sent,c(JSON.stringify({type:"LAUNCH",message:null})),console.log(g),console.log("the price is ".concat(parseFloat(r))),e.next=22,f.submit({uri:g,supply:1,lazyMint:!0,price:1,creators:[{account:Object(m.toUnionAddress)("ETHEREUM:".concat(a.connection.address)),value:1e4}],royalties:[{account:Object(m.toUnionAddress)("ETHEREUM:".concat(a.connection.address)),value:1e3}],currency:{"@type":"ETH"}});case 22:v=e.sent,console.log(v);case 24:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),e.next=14,u.getOptions();case 14:return g=e.sent[0],console.log(g),e.next=18,u.connect(g);case 18:e.sent,console.log("dkdkjd");case 20:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),w=function(){var e=Object(s.a)(l.a.mark((function e(t,n,o,r){var c,i,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c={name:o,description:r,image:t,external_url:"https://rarible.com/token/0xc9154424B823b10579895cCBE442d41b9Abd96Ed:".concat(n),attributes:[]},i=new FormData,"test.json",i.append("file",new Blob([JSON.stringify(c)],{type:"text/json"}),"test.json"),e.next=6,v()({method:"post",url:"https://pinata.rarible.com/upload",data:i,headers:{"Content-Type":"multipart/form-data"}});case 6:return a=e.sent,console.log("ended json upload on ipfs "),e.abrupt("return","ipfs://ipfs/".concat(a.data.IpfsHash));case 9:case"end":return e.stop()}}),e)})));return function(t,n,o,r){return e.apply(this,arguments)}}();window.raribleTest=j;var O={raribleTest:j},x=n(2),k=n(3),y=n(4),E=n(5),T=n(96),C=function(e){Object(y.a)(n,e);var t=Object(E.a)(n);function n(e){var o,r;return Object(x.a)(this,n),(r=t.call(this,e)).timerID=void 0,r.state={web3:window.web3,ethereum:window.ethereum,web3Provider:null===(o=window.web3)||void 0===o?void 0:o.currentProvider},r.timerID=setInterval((function(){return r.tick()}),1e3),r}return Object(k.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.timerID=setInterval((function(){return e.tick()}),1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerID)}},{key:"tick",value:function(){var e;this.setState({web3:window.web3,ethereum:window.ethereum,web3Provider:null===(e=window.web3)||void 0===e?void 0:e.currentProvider})}},{key:"render",value:function(){return Object(T.jsxs)("div",{children:[Object(T.jsxs)("h3",{children:["Web3 exists: ",this.state.web3?"true":"false"]}),Object(T.jsxs)("h3",{children:["Ethereum exists: ",this.state.ethereum?"true":"false"]}),Object(T.jsxs)("h3",{children:["Web3 provider exists : ",this.state.web3Provider?"true":"false"]})]})}}]),n}(r.a.Component);var _=function(){return Object(T.jsx)("div",{className:"App",children:Object(T.jsxs)("header",{className:"App-header",children:[Object(T.jsx)("img",{src:a,className:"App-logo",alt:"logo"}),Object(T.jsxs)("p",{children:["Edit ",Object(T.jsx)("code",{children:"src/App.tsx"})," and save to reload."]}),Object(T.jsx)(C,{}),Object(T.jsx)("button",{onClick:function(){return O.raribleTest()},children:" rarible"}),Object(T.jsx)("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer",children:"Learn React"})]})})},I=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,2126)).then((function(t){var n=t.getCLS,o=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),o(e),r(e),c(e),i(e)}))};i.a.createRoot(document.getElementById("root")).render(Object(T.jsx)(r.a.StrictMode,{children:Object(T.jsx)(_,{})})),I()},663:function(e,t){},683:function(e,t){},824:function(e,t,n){},825:function(e,t,n){},834:function(e,t){},872:function(e,t){},874:function(e,t){},893:function(e,t){},895:function(e,t){},907:function(e,t){},908:function(e,t){},930:function(e,t){},937:function(e,t){},939:function(e,t){}},[[2119,1,2]]]);
//# sourceMappingURL=main.8f06eeea.chunk.js.map