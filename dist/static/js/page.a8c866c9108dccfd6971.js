webpackJsonp([7],{102:function(e,t){},118:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{pageCount:{type:Number,required:!0},pageSize:{type:Number,default:10},current:{type:Number,twoWay:!0,default:1},pageChange:{type:Function,default:function(){return function(){}}}},methods:{clickNav:function(e){"···"!==e&&e!==this.current&&(this.changeCurrent(e),this.pageChange(e))},changeCurrent:function(e){this.$emit("change-current",e)},autoJump:function(){console.log("enter",this.jumpPage),this.$emit("change-current",Number(this.jumpPage))}},data:function(){return{thisActive:0,jumpPage:""}},computed:{pages:function(){var e=1,t=this.pageCount,n=[];for(this.pageCount>=7&&(this.current>3&&this.current<this.pageCount-3?(e=this.current-3,t=this.current+3):this.current<=3?(e=1,t=7):(t=this.pageCount,e=this.pageCount-5)),n.push(1),n.push("···");e+1<t;)n.push(e+1),e++;return n.push("···"),n.push(this.pageCount),n}}}},132:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(35),u=function(e){return e&&e.__esModule?e:{default:e}}(a);t.default={components:{Page:u.default},data:function(){return{pageCount:100,current:2,pageSize:10}},methods:{changeCurrent:function(e){this.current=e},pageChange:function(e){console.log("page changed",e)}}}},146:function(e,t,n){e.exports=n(20)},2:function(e,t,n){n(4);var a=n(0)(n(6),n(3),"data-v-12f6e127",null);e.exports=a.exports},20:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}var u=n(1),r=a(u),c=n(49),o=a(c),i=n(5),s=a(i);r.default.config.productionTip=!1,new r.default({el:"#page",router:s.default,template:"<Page/>",components:{Page:o.default}})},3:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("div")},staticRenderFns:[]}},35:function(e,t,n){n(98);var a=n(0)(n(118),n(69),"data-v-5e9e2b4a",null);e.exports=a.exports},4:function(e,t){},49:function(e,t,n){n(102);var a=n(0)(n(132),n(73),"data-v-892f2a70",null);e.exports=a.exports},5:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var u=n(1),r=a(u),c=n(7),o=a(c),i=n(2),s=a(i);r.default.use(o.default),t.default=new o.default({routes:[{path:"/",name:"Index",component:s.default}]})},6:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={}},69:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"page-nav"},[n("ul",[e._l(e.pages,function(t,a){return n("li",{directives:[{name:"show",rawName:"v-show",value:"···"!==t||1===a&&e.pages[a+1]>2||7===a&&e.pageCount-e.pages[a-1]>1,expression:"item !== '···' || idx === 1 && pages[idx + 1] > 2  || idx === 7 && pageCount - pages[idx - 1] > 1"}],class:{active:e.current==t,"no-border":"···"===t}},[n("a",{on:{click:function(n){e.clickNav(t)}}},[e._v(e._s(t))])])}),e._v(" "),n("li",[n("span",[e._v("前往")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.jumpPage,expression:"jumpPage"}],staticClass:"jump",attrs:{type:"number",value:""},domProps:{value:e.jumpPage},on:{keydown:function(t){if(!("button"in t)&&13!==t.keyCode)return null;e.autoJump()},input:function(t){t.target.composing||(e.jumpPage=t.target.value)}}}),e._v(" "),n("span",[e._v("页")])])],2)])},staticRenderFns:[]}},73:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"content"},[n("page",{attrs:{"page-count":e.pageCount,current:e.current,"page-size":e.pageSize,"page-change":e.pageChange},on:{"change-current":e.changeCurrent}}),e._v(" "),n("page",{attrs:{"page-count":7,current:e.current,"page-size":10,"page-change":e.pageChange},on:{"change-current":e.changeCurrent}}),e._v(" "),n("page",{attrs:{"page-count":10,current:e.current,"page-size":10,"page-change":e.pageChange},on:{"change-current":e.changeCurrent}}),e._v(" "),n("page",{attrs:{"page-count":5,current:e.current,"page-size":10,"page-change":e.pageChange},on:{"change-current":e.changeCurrent}})],1)},staticRenderFns:[]}},98:function(e,t){}},[146]);
//# sourceMappingURL=page.a8c866c9108dccfd6971.js.map