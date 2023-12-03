import { computed as r, openBlock as s, createElementBlock as a, normalizeClass as p, renderSlot as u } from "vue";
import "./SButton.vue2.js";
import c from "../../_virtual/_plugin-vue_export-helper.js";
const l = {
  __name: "SButton",
  props: {
    type: {
      type: String,
      default: "default"
    }
  },
  setup(t) {
    const e = t, o = r(() => `button-${e.type}`);
    return (n, f) => (s(), a("button", {
      class: p(["button", o.value])
    }, [
      u(n.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}, i = /* @__PURE__ */ c(l, [["__scopeId", "data-v-affa9ee0"]]);
export {
  i as default
};
