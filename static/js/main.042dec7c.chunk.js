(this["webpackJsonpnft-react"]=this["webpackJsonpnft-react"]||[]).push([[0],{1018:function(n,e){},1140:function(n,e){},1141:function(n,e){},1165:function(n,e){},1172:function(n,e){},1294:function(n,e){},1382:function(n,e){},1825:function(n,e){},1975:function(n,e,t){"use strict";t.r(e);var c=t(262),o=t.n(c),r=t(691),a=t.n(r),s=(t(719),t.p+"static/media/logo.6ce24c58.svg"),i=(t(720),t(17)),l=t(0),u=t.n(l),d=t(344),p=t(692),f=t(435),b=t(433),h=t(16),j=t(270),g=t(709),m=t.n(g),v=function(){var n=Object(i.a)(u.a.mark((function n(){var e,t,c,o,r,a=arguments;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=a.length>0&&void 0!==a[0]?a[0]:function(){console.log("kek param")},console.log("darova"),{1:"https://node-mainnet.rarible.com",3:"https://node-ropsten.rarible.com",4:"https://node-rinkeby.rarible.com",17:"https://node-e2e.rarible.com"},t=Object(f.mapEthereumWallet)(new d.InjectedWeb3ConnectionProvider),c=Object(f.mapEthereumWallet)(new p.WalletConnectConnectionProvider({bridge:"https://bridge.walletconnect.org",clientMeta:{description:"WalletConnect NodeJS Client",url:"https://nodejs.org/en/",icons:["https://nodejs.org/static/images/logo.svg"],name:"WalletConnect"},rpc:{1:"https://node-mainnet.rarible.com",3:"https://node-ropsten.rarible.com",4:"https://node-rinkeby.rarible.com"},chainId:1,qrcode:!0,qrcodeModal:{open:function(n,t,c){return Object(i.a)(u.a.mark((function t(){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e(JSON.stringify({type:"LAUNCH",message:n})),window.location.replace("intent://".concat(n)),console.log(n);case 3:case"end":return t.stop()}}),t)})))()},close:function(){return Object(i.a)(u.a.mark((function n(){return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return console.log("skdfjksdjf"),n.abrupt("return","darova");case 2:case"end":return n.stop()}}),n)})))()}}})),(o=d.Connector.create(t).add(c)).connection.subscribe(function(){var n=Object(i.a)(u.a.mark((function n(e){var t,c,o,r,a,s,i;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(console.log("connection: "+e.status),"connected"!==e.status){n.next=21;break}return console.log("ccccccccccccccccon"),t="ETHEREUM:0xc9154424B823b10579895cCBE442d41b9Abd96Ed",c=Object(b.createRaribleSdk)(e.connection.wallet,"prod"),n.next=7,c.nft.generateTokenId({collection:Object(h.toContractAddress)(t),minter:Object(j.toUnionAddress)("ETHEREUM:".concat(e.connection.address))});case 7:return o=n.sent,console.log(o),r={collectionId:Object(h.toContractAddress)(t),tokenId:o},n.next=12,c.nft.mintAndSell(r);case 12:return a=n.sent,n.next=15,k(null===o||void 0===o?void 0:o.tokenId);case 15:return s=n.sent,console.log(s),n.next=19,a.submit({uri:s,supply:1,lazyMint:!0,price:1,creators:[{account:Object(j.toUnionAddress)("ETHEREUM:".concat(e.connection.address)),value:1e4}],royalties:[{account:Object(j.toUnionAddress)("ETHEREUM:".concat(e.connection.address)),value:1e3}],currency:{"@type":"ETH"}});case 19:i=n.sent,console.log(i);case 21:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()),n.next=9,o.getOptions();case 9:return r=n.sent[0],console.log(r),n.next=13,o.connect(r);case 13:n.sent,console.log("dkdkjd");case 15:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),k=function(){var n=Object(i.a)(u.a.mark((function n(e){var t,c,o;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t={name:"112",description:"123",image:"ipfs://ipfs/QmdFFGs19hry4NjWMgZj2XTxGFEhywRsvD41bpR68uHCCq/image.png",external_url:"https://rarible.com/token/0xc9154424B823b10579895cCBE442d41b9Abd96Ed:".concat(e),attributes:[]},c=new FormData,"test.json",c.append("file",new Blob([JSON.stringify(t)],{type:"text/json"}),"test.json"),n.next=6,m()({method:"post",url:"https://pinata.rarible.com/upload",data:c,headers:{"Content-Type":"multipart/form-data"}});case 6:return o=n.sent,console.log(o),console.log(2432452352345),n.abrupt("return","ipfs://ipfs/".concat(o.data.IpfsHash));case 10:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();window.darova=v;var x=v,O=t(115);var w=function(){return Object(O.jsx)("div",{className:"App",children:Object(O.jsxs)("header",{className:"App-header",children:[Object(O.jsx)("img",{src:s,className:"App-logo",alt:"logo"}),Object(O.jsxs)("p",{children:["Edit ",Object(O.jsx)("code",{children:"src/App.tsx"})," and save to reload."]}),Object(O.jsx)("button",{onClick:function(){return x()},children:" sdkjahfkjhsdfkjhakjfhjkh"}),Object(O.jsx)("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer",children:"Learn React"})]})})},E=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,1982)).then((function(e){var t=e.getCLS,c=e.getFID,o=e.getFCP,r=e.getLCP,a=e.getTTFB;t(n),c(n),o(n),r(n),a(n)}))};a.a.createRoot(document.getElementById("root")).render(Object(O.jsx)(o.a.StrictMode,{children:Object(O.jsx)(w,{})})),E()},586:function(n,e){},719:function(n,e,t){},720:function(n,e,t){},729:function(n,e){},769:function(n,e){},771:function(n,e){},792:function(n,e){},794:function(n,e){},806:function(n,e){},807:function(n,e){},829:function(n,e){},836:function(n,e){},838:function(n,e){}},[[1975,1,2]]]);
//# sourceMappingURL=main.042dec7c.chunk.js.map