import { resolveComponent as o, openBlock as a, createBlock as n, mergeProps as c, createSlots as p, renderList as s, withCtx as u, renderSlot as d } from "vue";
const h = {
  __name: "SInput",
  props: {
    clearable: {
      type: Boolean,
      default: !0
    },
    placeholder: {
      type: String,
      default: "请输入"
    }
  },
  setup(l) {
    return (e, i) => {
      const t = o("el-input");
      return a(), n(t, c(e.$attrs, {
        placeholder: l.placeholder,
        clearable: l.clearable
      }), p({ _: 2 }, [
        s(e.$slots, (m, r) => ({
          name: r,
          fn: u(() => [
            d(e.$slots, r)
          ])
        }))
      ]), 1040, ["placeholder", "clearable"]);
    };
  }
};
export {
  h as default
};
