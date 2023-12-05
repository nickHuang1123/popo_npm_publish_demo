import { ref as _, resolveComponent as o, openBlock as i, createElementBlock as x, createVNode as e, normalizeClass as V, withCtx as n, unref as k, createElementVNode as w, toDisplayString as z, withDirectives as C, createTextVNode as d, vShow as b, createBlock as y, createCommentVNode as N } from "vue";
import B from "../assets/img/logo.jpg.js";
import "./UnKnown.vue2.js";
const U = { class: "unknown-area" }, K = {
  __name: "UnKnown",
  setup(g) {
    const a = _({
      size: 250,
      text: "真不敢相信你竟然裝了這個東西！"
    }), t = _(!1);
    return (D, l) => {
      const c = o("el-avatar"), u = o("el-button"), r = o("el-col"), p = o("el-slider"), m = o("el-form-item"), v = o("el-input"), f = o("el-form");
      return i(), x("div", U, [
        e(r, {
          span: 6,
          class: V(["unknown-style", {
            close: t.value
          }])
        }, {
          default: n(() => [
            e(c, {
              size: a.value.size,
              src: k(B)
            }, null, 8, ["size", "src"]),
            w("h3", null, "- " + z(a.value.text) + " -", 1),
            C(e(u, {
              round: "",
              onClick: l[0] || (l[0] = (s) => t.value = !t.value)
            }, {
              default: n(() => [
                d(" 編輯 ")
              ]),
              _: 1
            }, 512), [
              [b, !t.value]
            ])
          ]),
          _: 1
        }, 8, ["class"]),
        t.value ? (i(), y(r, {
          key: 0,
          span: 4,
          style: { width: "200px" }
        }, {
          default: n(() => [
            e(f, null, {
              default: n(() => [
                e(m, { label: "修改圖片大小：" }, {
                  default: n(() => [
                    e(p, {
                      modelValue: a.value.size,
                      "onUpdate:modelValue": l[1] || (l[1] = (s) => a.value.size = s),
                      min: 100,
                      max: 500,
                      marks: [100, 200, 300, 400, 500],
                      step: 10
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                e(m, { label: "修改文字：" }, {
                  default: n(() => [
                    e(v, {
                      modelValue: a.value.text,
                      "onUpdate:modelValue": l[2] || (l[2] = (s) => a.value.text = s),
                      placeholder: "請輸入文字"
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            e(u, {
              round: "",
              onClick: l[3] || (l[3] = (s) => t.value = !t.value)
            }, {
              default: n(() => [
                d(" 確定 ")
              ]),
              _: 1
            })
          ]),
          _: 1
        })) : N("", !0)
      ]);
    };
  }
};
export {
  K as default
};
