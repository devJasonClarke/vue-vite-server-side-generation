"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports[Symbol.toStringTag] = "Module";
var viteSsg = require("vite-ssg");
var vue = require("vue");
var serverRenderer = require("vue/server-renderer");
var vueRouter = require("vue-router");
var head = require("@vueuse/head");
var vuex = require("vuex");
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$4 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_router_view = vue.resolveComponent("router-view");
  _push(serverRenderer.ssrRenderComponent(_component_router_view, _attrs, null, _parent));
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("src/App.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
var App = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$3 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${serverRenderer.ssrRenderAttrs(_attrs)}><h1>Auto Imported Component</h1></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/AutoImport.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
var __unplugin_components_0 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$2 = {
  __ssrInlineRender: true,
  setup(__props) {
    head.useHead({
      title: "Index",
      meta: [
        {
          name: `description`,
          content: `Website description`
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AutoImport = __unplugin_components_0;
      const _component_router_link = vue.resolveComponent("router-link");
      _push(`<div${serverRenderer.ssrRenderAttrs(_attrs)}>`);
      _push(serverRenderer.ssrRenderComponent(_component_AutoImport, null, null, _parent));
      _push(`<h1>Index</h1><div></div>`);
      _push(serverRenderer.ssrRenderComponent(_component_router_link, { to: "/about" }, {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`About`);
          } else {
            return [
              vue.createTextVNode("About")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("src/pages/index.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const routes = [{ "name": "hope", "path": "/hope", "component": () => Promise.resolve().then(function() {
  return hope;
}), "props": true }, { "name": "about", "path": "/about", "component": () => Promise.resolve().then(function() {
  return about;
}), "props": true }, { "name": "index", "path": "/", "component": _sfc_main$2, "props": true }];
console.log(routes);
vueRouter.createRouter({
  history: vueRouter.createWebHistory(),
  routes
});
const state = {
  todos: ["Eat Breakfast", "Eat Lunch", "Eat Dinner"]
};
const getters = {
  todos: (state2) => state2.todos
};
var todos = {
  state,
  getters
};
var store = vuex.createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    todos
  }
});
const createApp = viteSsg.ViteSSG(App, { routes }, ({ app, router, routes: routes2, isClient, initialState }) => {
  app.use(store);
  {
    initialState.store = store.state;
  }
});
const _sfc_main$1 = {
  __ssrInlineRender: true,
  setup(__props) {
    head.useHead({
      title: "Hope",
      meta: [
        {
          name: `description`,
          content: `Website description`
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer.ssrRenderAttrs(_attrs)}><h1>Hope</h1></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("src/pages/hope.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
var hope = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$1
});
const _sfc_main = {
  __ssrInlineRender: true,
  setup(__props) {
    head.useHead({
      title: "About",
      meta: [
        {
          name: `description`,
          content: `Website description`
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_link = vue.resolveComponent("router-link");
      _push(`<div${serverRenderer.ssrRenderAttrs(_attrs)}><h2>about</h2>`);
      _push(serverRenderer.ssrRenderComponent(_component_router_link, { to: "/hope" }, {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Hope`);
          } else {
            return [
              vue.createTextVNode("Hope")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("src/pages/about.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var about = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main
});
exports.createApp = createApp;
