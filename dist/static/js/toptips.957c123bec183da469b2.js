webpackJsonp([18],{104:function(t,o){t.exports={render:function(){var t=this,o=t.$createElement,s=t._self._c||o;return s("div",{staticClass:"toptips",class:t.type+" "+t.toastShow},[s("div",{staticClass:"toptips-text",class:t.iconType[t.type]+" "+(t.iconType[t.type]?"iconfont":"")},[t._v(t._s(t.msg))])])},staticRenderFns:[]}},145:function(t,o){},153:function(t,o){},2:function(t,o,s){s(4);var e=s(0)(s(6),s(3),"data-v-12f6e127",null);t.exports=e.exports},213:function(t,o,s){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.default={props:{msg:{type:String,twoWay:!0,default:""},type:{type:String,twoWay:!0,default:""},show:{type:Boolean,twoWay:!0,default:!1}},data:function(){return{iconType:{success:"icon-success-circle",error:"icon-close-circle",warn:"icon-warning"},toastShow:this.show,timeout:""}},watch:{show:function(t){var o=this;console.log("show components",t),this.toastShow=t,clearTimeout(this.timeout),t&&(this.timeout=setTimeout(function(){o.toastShow=!1,o.$emit("toast-end",o.toastShow)},3e3))}},methods:{showToast:function(t){this.msg=t.msg,this.type=t.type,console.log("options",t)}},mounted:function(){console.log(this.show,this.type,this.msg)}}},238:function(t,o,s){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var e=s(69),n=function(t){return t&&t.__esModule?t:{default:t}}(e);o.default={components:{toptips:n.default},data:function(){return{show0:!1,show1:!1,show2:!1,show3:!1}},methods:{showToast:function(t){this["show"+t]=!0},toastEnd:function(){console.log("toast end"),this.show0=!1,this.show1=!1,this.show2=!1,this.show3=!1}},mounted:function(){console.log(this)}}},263:function(t,o,s){t.exports=s(45)},3:function(t,o){t.exports={render:function(){var t=this,o=t.$createElement;return(t._self._c||o)("div")},staticRenderFns:[]}},4:function(t,o){},45:function(t,o,s){"use strict";function e(t){return t&&t.__esModule?t:{default:t}}var n=s(1),i=e(n),c=s(94),u=e(c),a=s(5),r=e(a);i.default.config.productionTip=!1,new i.default({el:"#toptips",router:r.default,template:"<Toptips/>",components:{Toptips:u.default}})},5:function(t,o,s){"use strict";function e(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(o,"__esModule",{value:!0});var n=s(1),i=e(n),c=s(11),u=e(c),a=s(2),r=e(a);i.default.use(u.default),o.default=new u.default({routes:[{path:"/",name:"Index",component:r.default}]})},6:function(t,o,s){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.default={}},69:function(t,o,s){s(153);var e=s(0)(s(213),s(104),"data-v-29c16cbc",null);t.exports=e.exports},94:function(t,o,s){s(145);var e=s(0)(s(238),s(96),null,null);t.exports=e.exports},96:function(t,o){t.exports={render:function(){var t=this,o=t.$createElement,s=t._self._c||o;return s("div",{staticClass:"content"},[s("button",{staticClass:"btn mgb10",on:{click:function(o){t.showToast(0)}}},[t._v("普通")]),t._v(" "),s("button",{staticClass:"btn mgb10",on:{click:function(o){t.showToast(1)}}},[t._v("错误")]),t._v(" "),s("button",{staticClass:"btn mgb10",on:{click:function(o){t.showToast(2)}}},[t._v("警告")]),t._v(" "),s("button",{staticClass:"btn mgb10",on:{click:function(o){t.showToast(3)}}},[t._v("成功")]),t._v(" "),s("toptips",{attrs:{show:t.show0,msg:"这是一个普通的提示条"},on:{"update:show":function(o){t.show0=o},"toast-end":t.toastEnd}}),t._v(" "),s("toptips",{attrs:{type:"error",show:t.show1,msg:"这是一个错误信息提示条"},on:{"update:show":function(o){t.show1=o},"toast-end":t.toastEnd}}),t._v(" "),s("toptips",{attrs:{type:"warn",show:t.show2,msg:"这是一个警告信息提示条"},on:{"update:show":function(o){t.show2=o},"toast-end":t.toastEnd}}),t._v(" "),s("toptips",{attrs:{type:"success",show:t.show3,msg:"这是一个成功信息提示条"},on:{"update:show":function(o){t.show3=o},"toast-end":t.toastEnd}})],1)},staticRenderFns:[]}}},[263]);
//# sourceMappingURL=toptips.957c123bec183da469b2.js.map