(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-index"],{"157f":function(e,n,t){"use strict";t.r(n);var r=t("f068"),a=t.n(r);for(var o in r)"default"!==o&&function(e){t.d(n,e,function(){return r[e]})}(o);n["default"]=a.a},"469f":function(e,n,t){t("6c1c"),t("1654"),e.exports=t("7d7b")},"5d73":function(e,n,t){e.exports=t("469f")},"7d7b":function(e,n,t){var r=t("e4ae"),a=t("7cd6");e.exports=t("584a").getIterator=function(e){var n=a(e);if("function"!=typeof n)throw TypeError(e+" is not iterable!");return r(n.call(e))}},"8b72":function(e,n,t){"use strict";var r=t("c433"),a=t.n(r);a.a},"901f":function(e,n,t){n=e.exports=t("2350")(!1),n.push([e.i,".content[data-v-f59b9e6c]{text-align:center;height:%?400?%}.logo[data-v-f59b9e6c]{height:%?200?%;width:%?200?%;margin-top:%?200?%}.title[data-v-f59b9e6c]{font-size:%?36?%;color:#8f8f94}",""])},c382:function(e,n,t){"use strict";var r,a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("v-uni-view",{staticClass:"content"},[t("v-uni-view",[t("v-uni-text",{staticClass:"title"},[e._v(e._s(e.title))]),t("v-uni-view",[t("v-uni-view",{},[e._v(e._s(e.interactText))])],1),t("v-uni-view"),t("v-uni-view",[e._v("游戏状态"),t("v-uni-view",[e._v("能量:"+e._s(e.energy))]),t("v-uni-view",[e._v("回合:"+e._s(e.rounds))]),e._l(e.playerList,function(n){return t("v-uni-view",[e._v("玩家"+e._s(n.name)+"金钱:"+e._s(n.money))])})],2),t("v-uni-button",{on:{click:function(n){arguments[0]=n=e.$handleEvent(n),e.getMoney.apply(void 0,arguments)}}},[e._v("赚取金钱")]),t("v-uni-button",{on:{click:function(n){arguments[0]=n=e.$handleEvent(n),e.getEnergy.apply(void 0,arguments)}}},[e._v("产生能量")]),t("v-uni-button",{on:{click:function(n){arguments[0]=n=e.$handleEvent(n),e.restart.apply(void 0,arguments)}}},[e._v("重新开始游戏")]),t("v-uni-view",[e._v("游戏设置"),t("v-uni-view",{},[e._v("能量总数"),t("v-uni-input",{attrs:{type:"number"},model:{value:e.energySet,callback:function(n){e.energySet=n},expression:"energySet"}})],1),t("v-uni-view",{},[e._v("回合数"),t("v-uni-input",{attrs:{type:"number"},model:{value:e.roundsSet,callback:function(n){e.roundsSet=n},expression:"roundsSet"}})],1),t("v-uni-view",{},[e._v("玩家数"),t("v-uni-input",{attrs:{type:"number"},model:{value:e.playerNumSet,callback:function(n){e.playerNumSet=n},expression:"playerNumSet"}})],1)],1)],1)],1)},o=[];t.d(n,"b",function(){return a}),t.d(n,"c",function(){return o}),t.d(n,"a",function(){return r})},c433:function(e,n,t){var r=t("901f");"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var a=t("4f06").default;a("0ade1f40",r,!0,{sourceMap:!1,shadowMode:!1})},f068:function(e,n,t){"use strict";var r=t("288e");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=r(t("5d73")),o={data:function(){return{title:"Conflict",energy:100,rounds:20,playerList:[{name:1,money:0},{name:2,money:0},{name:3,money:0}],interactText:"游戏开始...",roundPlayers:"",roundsSet:20,energySet:100,playerNumSet:3,currentPlayer:""}},watch:{roundPlayers:function(e,n){},energy:function(e,n){e<=0&&uni.showModal({content:"游戏结束"})},rounds:function(e,n){0&&uni.showModal({content:"游戏结束"})},currentPlayer:function(e,n){console.log(this.currentPlayer.name),this.interactText="玩家".concat(this.currentPlayer.name," 行动...")}},onLoad:function(){this.roundPlayers=this.playerList.slice(),this.currentPlayer=this.roundPlayers[0]},methods:{getMoney:function(e){var n=this,t=0,r="获得金钱",a=Math.round(10*Math.random()),o=a;uni.showModal({content:"".concat(r," : ").concat(a),showCancel:!1,success:function(e){e.confirm&&(0==t?(n.interactText="".concat(n.currentPlayer.name," 获得金钱").concat(a,"...但能量消耗"),n.currentPlayer.money=n.currentPlayer.money+a,n.energy=n.energy-o):n.currentPlayer.money-o<0?uni.showToast({icon:"none",title:"余额不足"}):(n.interactText="".concat(n.currentPlayer.name," 产生能量").concat(a,"...但能量金钱"),n.energy=n.energy+a,n.currentPlayer.money=n.currentPlayer.money-o)),n.roundPlayers.shift(),0==n.roundPlayers.length&&(n.roundPlayers=n.playerList.slice(),n.rounds--),n.currentPlayer=n.roundPlayers[0]}})},getEnergy:function(e){var n=this,t=1,r="产生能量",a=Math.round(10*Math.random()),o=a;uni.showModal({content:"".concat(r," : ").concat(a),showCancel:!1,success:function(e){e.confirm&&(0==t?(n.interactText="".concat(n.currentPlayer.name," 获得金钱").concat(a,"...但能量消耗"),n.currentPlayer.money=n.currentPlayer.money+a,n.energy=n.energy-o):n.currentPlayer.money-o<0?uni.showToast({icon:"none",title:"余额不足"}):(n.interactText="".concat(n.currentPlayer.name," 产生能量").concat(a,"...但能量金钱"),n.energy=n.energy+a,n.currentPlayer.money=n.currentPlayer.money-o)),n.roundPlayers.shift(),0==n.roundPlayers.length&&(n.roundPlayers=n.playerList.slice(),n.rounds--),n.currentPlayer=n.roundPlayers[0]}})},restart:function(){this.rounds=this.roundsSet,this.energy=this.energySet;var e=!0,n=!1,t=void 0;try{for(var r,o=(0,a.default)(this.playerList);!(e=(r=o.next()).done);e=!0){var i=r.value;i.money=0}}catch(c){n=!0,t=c}finally{try{e||null==o.return||o.return()}finally{if(n)throw t}}this.playerList=new Array;for(var u=1;u<=this.playerNumSet;u++)this.playerList.push({name:u,money:0});this.roundPlayers=this.playerList.slice(),this.currentPlayer=this.roundPlayers[0]}}};n.default=o},f969:function(e,n,t){"use strict";t.r(n);var r=t("c382"),a=t("157f");for(var o in a)"default"!==o&&function(e){t.d(n,e,function(){return a[e]})}(o);t("8b72");var i,u=t("f0c5"),c=Object(u["a"])(a["default"],r["b"],r["c"],!1,null,"f59b9e6c",null,!1,r["a"],i);n["default"]=c.exports}}]);