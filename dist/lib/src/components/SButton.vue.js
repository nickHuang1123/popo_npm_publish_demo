"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const e=require("vue");require("./SButton.vue2.js");const r=require("../../_virtual/_plugin-vue_export-helper.js"),s={__name:"SButton",props:{type:{type:String,default:"default"}},setup(t){const u=t,o=e.computed(()=>`button-${u.type}`);return(n,a)=>(e.openBlock(),e.createElementBlock("button",{class:e.normalizeClass(["button",o.value])},[e.renderSlot(n.$slots,"default",{},void 0,!0)],2))}},l=r.default(s,[["__scopeId","data-v-affa9ee0"]]);exports.default=l;