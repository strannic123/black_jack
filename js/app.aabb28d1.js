(function(e){function t(t){for(var n,s,i=t[0],u=t[1],o=t[2],d=0,h=[];d<i.length;d++)s=i[d],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&h.push(a[s][0]),a[s]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);l&&l(t);while(h.length)h.shift()();return c.push.apply(c,o||[]),r()}function r(){for(var e,t=0;t<c.length;t++){for(var r=c[t],n=!0,i=1;i<r.length;i++){var u=r[i];0!==a[u]&&(n=!1)}n&&(c.splice(t--,1),e=s(s.s=r[0]))}return e}var n={},a={app:0},c=[];function s(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=e,s.c=n,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(r,n,function(t){return e[t]}.bind(null,n));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/black_jack/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var o=0;o<i.length;o++)t(i[o]);var l=u;c.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";r("85ec")},3960:function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("div",{staticClass:"wrapper"},[r("h1",{staticClass:"header"},[e._v("Black Jack")]),r("div",{staticClass:"gameField"},[r("div",{staticClass:"dealer"},[r("h3",{staticClass:"points"},[e._v("Очки дилера: "+e._s(e.dealerBlackJack?"Black JACK":e.checkNewCardDealer))]),r("Card",{attrs:{cards:e.getDealerCards}})],1),r("Message",["player"===e.winner?r("h3",{staticClass:"player_win"},[e._v("Вы выиграли "),r("span",[e._v(" $ "+e._s(e.winPayDollar))]),e._v(" - поздравляем ")]):e._e(),"dealer"===e.winner?r("h3",{staticClass:"dealer_win"},[e._v("Вы проиграли ")]):e._e(),"stay"===e.winner?r("h3",{staticClass:"stay_no-win"},[e._v("Ничья")]):e._e()]),e._m(0),r("div",{staticClass:"player"},[r("h3",{staticClass:"points"},[e._v("Очки игрока: "+e._s(e.playerBlackJack?"Black JACK":e.checkNewCardPlayer))]),r("Card",{attrs:{cards:e.getPlayerCards}})],1),r("div",{staticClass:"control"},[r("div",{staticClass:"bank"},[r("p",{staticClass:"bank_title"},[e._v("Деньги игрока")]),r("span",{staticClass:"bank_num"},[e._v("$ "+e._s(e.getPlayerBank))])]),r("div",{staticClass:"buttons"},[r("Button",{attrs:{title:"new game",disabled:e.disabledBtnNewGame()},on:{startNewGame:function(t){return e.startNewGame()}}}),r("Button",{attrs:{disabled:e.disabledBtnStay(),title:"STAY"},on:{dealerCardSet:e.setCardDealer,toggleGamer:e.changeGamer}}),r("Button",{attrs:{disabled:e.disabledBtnHit(),title:"HIT"},on:{checkingCardToAce:e.resetSumAce,nextCardPlayer:e.nextCardPlayer}})],1)])],1)])])},c=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"bet"},[r("span",{staticClass:"bet_title"},[e._v("Ставка")]),r("span",{staticClass:"bet_num"},[e._v(" $ 10")])])}],s=r("1da1"),i=r("5530"),u=(r("d3b7"),r("159b"),r("96cf"),function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"cards"},e._l(e.cards,(function(t){return r("div",{key:t.code+e.getRndInteger(),staticClass:"card"},[r("img",{attrs:{src:""+t.image,alt:t.value+" "+t.suit}})])})),0)}),o=[],l={name:"Card",props:["cards"],methods:{getRndInteger:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e7;return Math.floor(Math.random()*(t-e))+e}}},d=l,h=(r("a699"),r("2877")),p=Object(h["a"])(d,u,o,!1,null,"10788354",null),f=p.exports,m=r("2f62"),k=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("button",{key:e.title,staticClass:"btn",on:{click:function(t){return e.gameControl(e.title)}}},[e._v(e._s(e.title)+" ")])},y=[],v={name:"Button",props:["title"],computed:{},methods:{gameControl:function(e){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if("HIT"!==e){r.next=4;break}return r.next=3,t.$emit("nextCardPlayer");case 3:t.$emit("checkingCardToAce");case 4:"STAY"===e&&(t.$emit("toggleGamer","dealer"),t.$emit("dealerCardSet")),"new game"===e&&t.$emit("startNewGame");case 6:case"end":return r.stop()}}),r)})))()}}},w=v,_=(r("6f17"),Object(h["a"])(w,k,y,!1,null,"f222ef8e",null)),g=_.exports,P=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e._t("default")],2)},C=[],S={name:"Message"},b=S,D=(r("aa4c"),Object(h["a"])(b,P,C,!1,null,"58fc8f10",null)),E=D.exports,A={name:"App",data:function(){return{nameDeckValue:["JACK","QUEEN","KING","ACE"],playerSumPoints:0,dealerSumPoints:0,countAcePlayer:0,countAceDealer:0,playerBlackJack:!1,dealerBlackJack:!1,whoMoveGame:"player",winner:"no-winner",betPlayer:10,winPayDollar:0}},components:{Card:f,Button:g,Message:E},watch:{winner:function(e){this.checkBankPlayer(e)}},computed:Object(i["a"])(Object(i["a"])({},Object(m["b"])(["getFullDeck","getDeckIdForSet","getDeckId","getDealerCards","getPlayerCards","getPlayerBank"])),{},{checkNewCardPlayer:function(){return this.playerSumPoints=this.sumPoints(this.askBlackJack(this.getPlayerCards,"player"),"player"),this.playerSumPoints=this.checkingPoints(this.playerSumPoints,this.countAcePlayer),this.playerSumPoints},checkNewCardDealer:function(){return this.dealerSumPoints=this.sumPoints(this.askBlackJack(this.getDealerCards,"dealer"),"dealer"),this.dealerSumPoints=this.checkingPoints(this.dealerSumPoints,this.countAceDealer),this.dealerSumPoints}}),created:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("fullDeckCard");case 2:return t.next=4,e.$store.dispatch("saveIdDeck");case 4:return t.next=6,e.$store.dispatch("getFirstThreeCardForStart");case 6:case"end":return t.stop()}}),t)})))()},methods:{setCardDealer:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.playerBlackJack||!(e.countAceDealer>0||10===e.dealerSumPoints)){t.next=5;break}return t.next=3,e.$store.dispatch("getNextCard","STAY");case 3:return e.setWinner(),t.abrupt("return");case 5:return t.next=7,e.$store.dispatch("getNextCard","STAY");case 7:if(!(e.dealerSumPoints<17)||e.playerBlackJack){t.next=10;break}return t.next=10,e.setCardDealer();case 10:e.setWinner();case 11:case"end":return t.stop()}}),t)})))()},nextCardPlayer:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.playerBlackJack){t.next=5;break}return e.resetSumAce(),t.next=4,e.$store.dispatch("getNextCard","HIT");case 4:e.setWinner();case 5:case"end":return t.stop()}}),t)})))()},resetSumAce:function(){this.countAcePlayer=0,this.countAceDealer=0},checkingPoints:function(e,t){while(e>21&&t>0)e-=10,t-=1;return"player"===this.whoMoveGame?(this.playerSumPoints=e,this.resetSumAce(),e):"dealer"===this.whoMoveGame?(this.dealerSumPoints=e,this.resetSumAce(),e):void 0},setBlackJackData:function(e,t){"dealer"===t?this.dealerBlackJack=!0:this.playerBlackJack=!0,this.setWinner()},askBlackJack:function(e,t){var r=this;if(2===e.length){var n=0;e.forEach((function(e){n+=r.getValueCard(e)})),21===n&&this.setBlackJackData(n,t)}return e},sumPoints:function(e,t){var r=this,n=0;return e.forEach((function(e){n+=r.countAceCards(r.getValueCard(e),t)})),n},getValueCard:function(e){return isNaN(e.value)&&"ACE"!==e.value?10:"ACE"===e.value?11:+e.value},countAceCards:function(e,t){return 11===e&&("dealer"===t&&(this.countAceDealer+=1),"player"===t&&(this.countAcePlayer+=1)),e},changeGamer:function(e){this.whoMoveGame=e},checkDealerPointFromToAnd:function(){return this.dealerSumPoints>=17&&this.dealerSumPoints<=21},checkBankPlayer:function(e){var t=2*this.betPlayer,r=2.5*this.betPlayer;"player"===e&&(this.playerBlackJack?(this.$store.dispatch("setBankWinPlayer",r),this.winPayDollar=1.5*this.betPlayer):(this.$store.dispatch("setBankWinPlayer",t),this.winPayDollar=this.betPlayer)),"stay"===e&&this.$store.dispatch("setBankWinPlayer",this.betPlayer)},setWinner:function(){this.dealerBlackJack&&!this.playerBlackJack&&(this.winner="dealer"),this.playerBlackJack&&11!==this.dealerSumPoints&&10!==this.dealerSumPoints&&(this.winner="player"),"dealer"===this.whoMoveGame&&(!this.checkDealerPointFromToAnd()&&this.dealerSumPoints>this.playerSumPoints&&(this.winner="player"),this.checkDealerPointFromToAnd()&&this.dealerSumPoints>this.playerSumPoints&&(this.winner="dealer"),this.checkDealerPointFromToAnd()&&this.dealerSumPoints<this.playerSumPoints&&(this.winner="player"),this.checkDealerPointFromToAnd()&&this.dealerSumPoints===this.playerSumPoints&&(this.winner="stay")),"player"===this.whoMoveGame&&this.playerSumPoints>21&&(this.winner="dealer")},disabledBtnStay:function(){return"dealer"===this.whoMoveGame||this.playerSumPoints>21||this.playerBlackJack&&10!==this.dealerSumPoints&&11!==this.dealerSumPoints},disabledBtnHit:function(){return this.playerSumPoints>=21||"dealer"===this.whoMoveGame||this.playerBlackJack},disabledBtnNewGame:function(){return"no-winner"===this.winner},startNewGame:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.playerSumPoints=0,e.dealerSumPoints=0,e.countAcePlayer=0,e.countAceDealer=0,e.playerBlackJack=!1,e.dealerBlackJack=!1,e.whoMoveGame="player",e.winner="no-winner",e.betPlayer=10,e.winPayDollar=0,t.next=12,e.$store.dispatch("getFirstThreeCardForStart");case 12:case"end":return t.stop()}}),t)})))()}}},x=A,R=(r("034f"),Object(h["a"])(x,a,c,!1,null,null,null)),B=R.exports,T=(r("99af"),6),j="https://deckofcardsapi.com/api/deck",O="",J="/".concat(O,"/shuffle/?deck_count=").concat(T),I=function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=".concat(T));case 3:return t=e.sent,e.next=6,t.json();case 6:return r=e.sent,O=r["deck_id"],e.abrupt("return",!0);case 11:e.prev=11,e.t0=e["catch"](0),console.warn(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}(),N=function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(j).concat(J));case 3:return t=e.sent,e.next=6,t.json();case 6:return e.abrupt("return",e.sent);case 9:e.prev=9,e.t0=e["catch"](0),console.warn(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),$=function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(j,"/").concat(O,"/draw/?count=3"));case 3:return t=e.sent,e.next=6,t.json();case 6:return e.abrupt("return",e.sent);case 9:e.prev=9,e.t0=e["catch"](0),console.warn(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),F=function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(j,"/").concat(O,"/draw/?count=1"));case 3:return t=e.sent,e.next=6,t.json();case 6:return e.abrupt("return",e.sent);case 9:e.prev=9,e.t0=e["catch"](0),console.warn(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();n["a"].use(m["a"]);var G=new m["a"].Store({state:{fullDesc:[],deckId:"",dealerCards:[],playerCards:[],playerBank:1e3},getters:{getFullDeck:function(e){return e.fullDesc},getDeckIdForSet:function(e){return e.fullDesc[0].deck_id},getDeckId:function(e){return e.deckId},getDealerCards:function(e){return e.dealerCards},getPlayerCards:function(e){return e.playerCards},getPlayerBank:function(e){return e.playerBank}},mutations:{SET_FULL_DESK:function(e,t){e.fullDesc.push(t),e.deckId=e.fullDesc.deckId},SET_DESK_ID:function(e,t){e.deckId=t},SET_CARD_DEALER:function(e,t){e.dealerCards.push(t)},SET_CARD_PLAYER:function(e,t){e.playerCards.push(t)},SET_RESET_DEALER_CARD:function(e){e.dealerCards=[]},SET_RESET_PLAYER_CARD:function(e){e.playerCards=[]},SET_BANK_WIN_PLAYER:function(e,t){e.playerBank+=t},SET_BANK_WIN_DEALER:function(e,t){e.playerBank-=t},SET_BET_FOR_GAME:function(e,t){e.playerBank-=t}},actions:{fullDeckCard:function(e){return Object(s["a"])(regeneratorRuntime.mark((function t(){var r,n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.commit,t.next=3,I();case 3:if(n=t.sent,!n){t.next=9;break}return t.next=7,N();case 7:a=t.sent,r("SET_FULL_DESK",a);case 9:case"end":return t.stop()}}),t)})))()},saveIdDeck:function(e){return Object(s["a"])(regeneratorRuntime.mark((function t(){var r,n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(r=e.commit,n=e.getters,!n.getFullDeck.length){t.next=6;break}return t.next=4,n.getDeckIdForSet;case 4:a=t.sent,r("SET_DESK_ID",a);case 6:case"end":return t.stop()}}),t)})))()},getFirstThreeCardForStart:function(e){return Object(s["a"])(regeneratorRuntime.mark((function t(){var r,n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.commit,r("SET_RESET_DEALER_CARD"),r("SET_RESET_PLAYER_CARD"),t.next=5,$();case 5:n=t.sent,a=n.cards,r("SET_BET_FOR_GAME",10),r("SET_CARD_PLAYER",a[0]),r("SET_CARD_DEALER",a[1]),r("SET_CARD_PLAYER",a[2]);case 11:case"end":return t.stop()}}),t)})))()},getNextCard:function(e,t){return Object(s["a"])(regeneratorRuntime.mark((function r(){var n,a,c;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=e.commit,r.next=3,F();case 3:a=r.sent,c=a.cards,"STAY"===t&&n("SET_CARD_DEALER",c[0]),"HIT"===t&&n("SET_CARD_PLAYER",c[0]);case 7:case"end":return r.stop()}}),r)})))()},setBankWinPlayer:function(e,t){var r=e.commit;r("SET_BANK_WIN_PLAYER",t)}}});r("7371");n["a"].config.productionTip=!1,new n["a"]({store:G,render:function(e){return e(B)}}).$mount("#app")},"6f17":function(e,t,r){"use strict";r("9bce")},7371:function(e,t,r){},"85ec":function(e,t,r){},"9b8d":function(e,t,r){},"9bce":function(e,t,r){},a699:function(e,t,r){"use strict";r("9b8d")},aa4c:function(e,t,r){"use strict";r("3960")}});
//# sourceMappingURL=app.aabb28d1.js.map