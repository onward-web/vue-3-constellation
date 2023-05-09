"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const vue = require("vue");
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main = vue.defineComponent({
  props: {
    menuCount: {
      type: Number,
      required: true,
      default: 4
    },
    linkIconClassList: {
      type: Array,
      required: true
    },
    itemTitleList: {
      type: Array,
      required: true
    },
    tooltipData: {
      type: Array,
      required: true
    },
    iconNameList: {
      type: Array,
      required: true
    },
    urlsData: {
      type: Array,
      required: true
    },
    backgroundColor: {
      type: String,
      default: "#20babb"
    },
    color: {
      type: String,
      default: "#fff"
    },
    position: {
      type: String,
      default: "top-left"
    }
  },
  setup(props) {
    const isTop = vue.computed(() => {
      return props.position.includes("top");
    });
    const isLeft = vue.computed(() => {
      return props.position.includes("left");
    });
    const quickMenuStyle = vue.computed(() => {
      const topPosition = { top: "30px" }, bottomPosition = { bottom: "30px" }, leftPosition = { left: "30px" }, rightPosition = { right: "30px" };
      let style = isTop.value ? topPosition : bottomPosition;
      Object.assign(style, isLeft.value ? leftPosition : rightPosition);
      Object.assign(style, { transform: isLeft.value ? "rotate(-180deg)" : "rotate(180deg)" });
      return style;
    });
    const buttonStyle = vue.computed(() => {
      return {
        backgroundColor: props.backgroundColor,
        color: props.color
      };
    });
    const itemMenuStyle = vue.computed(() => {
      const style = {
        backgroundColor: props.backgroundColor,
        color: props.color
      };
      return style;
    });
    const menuSize = 60;
    const subMenu4 = [[["0", "-160"], ["-80", "-138.6"], ["-138.6", "-80"], ["-160", "0"]], [["0", "-160"], ["80", "-138.6"], ["138.6", "-80"], ["160", "0"]], [["0", "160"], ["138.6", "80"], ["80", "138.6"], ["160", "0"]], [["-160", "0"], ["-138.6", "80"], ["-80", "138.6"], ["0", "160"]]];
    const subMenu3 = [[["-160", "0"], ["-113", "-113"], ["0", "-160"]], [["0", "-160"], ["113", "-113"], ["160", "0"]], [["0", "160"], ["113", "113"], ["160", "0"]], [["-160", "0"], ["-113", "113"], ["0", "160"]]];
    const subMenu2 = [[["-160", "0"], ["0", "-160"]], [["0", "-160"], ["160", "0"]], [["0", "160"], ["160", "0"]], [["-160", "0"], ["0", "160"]]];
    return {
      isTop: isTop.value,
      isLeft: isLeft.value,
      quickMenuStyle: quickMenuStyle.value,
      buttonStyle: buttonStyle.value,
      itemMenuStyle: itemMenuStyle.value,
      menuCount: props.menuCount,
      linkIconClassList: props.linkIconClassList,
      itemTitleList: props.itemTitleList,
      tooltipData: props.tooltipData,
      iconNameList: props.iconNameList,
      urlsData: props.urlsData,
      backgroundColor: props.backgroundColor,
      color: props.color,
      menuSize,
      subMenu4,
      subMenu3,
      subMenu2
    };
  },
  methods: {
    getSubMenuStyle(n) {
      let menuPosition = this.menuCount === 4 ? this.subMenu4 : this.menuCount === 3 ? this.subMenu3 : this.subMenu2;
      menuPosition = this.isTop && this.isLeft ? menuPosition[2] : this.isTop && !this.isLeft ? menuPosition[1] : !this.isTop && this.isLeft ? menuPosition[3] : menuPosition[0];
      return { top: menuPosition[n][0] + "px", left: menuPosition[n][1] + "px" };
    },
    toggleMenu(e) {
      let menuEl = this.$refs.quickMenu;
      let menuIconEl = this.$refs.link;
      if (!~menuEl.className.indexOf(" active")) {
        menuEl.className += " active";
        menuIconEl.forEach(function(element, index2) {
          element.className += " menu-animate";
        });
      } else {
        menuEl.className = menuEl.className.replace(" active", "");
        menuIconEl.forEach(function(element, index2) {
          element.className = element.className.replace(" menu-animate", "");
        });
      }
    },
    processCallback(key) {
      this.$emit("process", key);
    },
    mouseEnterSubMenu(e) {
      if (e.target.tagName === "A") {
        e.target.style.backgroundColor = this.lightenColor(this.backgroundColor, 20);
      } else if (e.target.tagName === "I") {
        e.target.parentElement.style.backgroundColor = this.lightenColor(this.backgroundColor, 20);
      }
    },
    mouseOutSubMenu(e) {
      if (e.target.tagName === "A") {
        e.target.style.backgroundColor = this.backgroundColor;
      } else if (e.target.tagName === "I") {
        e.target.parentElement.style.backgroundColor = this.backgroundColor;
      }
    },
    lightenColor(hex, amt) {
      var usePound = false;
      if (hex[0] === "#") {
        hex = hex.slice(1);
        usePound = true;
      }
      var num = parseInt(hex, 16);
      var r = (num >> 16) + amt;
      if (r > 255)
        r = 255;
      else if (r < 0)
        r = 0;
      var b = (num >> 8 & 255) + amt;
      if (b > 255)
        b = 255;
      else if (b < 0)
        b = 0;
      var g = (num & 255) + amt;
      if (g > 255)
        g = 255;
      else if (g < 0)
        g = 0;
      return (usePound ? "#" : "") + (g | b << 8 | r << 16).toString(16);
    }
  }
});
const _hoisted_1 = ["id"];
const _hoisted_2 = ["target", "href", "title"];
const _hoisted_3 = ["target", "onClick", "title"];
const _hoisted_4 = /* @__PURE__ */ vue.createElementVNode("div", { class: "bar" }, null, -1);
const _hoisted_5 = [
  _hoisted_4
];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_svg_icon = vue.resolveComponent("svg-icon");
  const _component_router_link = vue.resolveComponent("router-link");
  const _directive_tooltip = vue.resolveDirective("tooltip");
  return vue.openBlock(), vue.createElementBlock("div", {
    class: "quick-menu",
    ref: "quickMenu",
    style: vue.normalizeStyle(_ctx.quickMenuStyle)
  }, [
    (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.menuCount, (n, key) => {
      return vue.openBlock(), vue.createElementBlock("div", {
        key,
        class: "menu-item",
        style: vue.normalizeStyle(_ctx.getSubMenuStyle(n - 1)),
        ref_for: true,
        ref: "quickMenuItem_" + key,
        id: "quickMenuItem_" + key
      }, [
        _ctx.urlsData[n - 1].type === "routeLink" ? vue.withDirectives((vue.openBlock(), vue.createBlock(_component_router_link, {
          key: 0,
          to: _ctx.urlsData[n - 1].type,
          target: _ctx.urlsData[n - 1].target,
          style: vue.normalizeStyle(_ctx.itemMenuStyle),
          onMouseover: vue.withModifiers(_ctx.mouseEnterSubMenu, ["stop"]),
          onMouseout: vue.withModifiers(_ctx.mouseOutSubMenu, ["stop"]),
          class: vue.normalizeClass(_ctx.linkIconClassList[n - 1]),
          ref_for: true,
          ref: "link",
          title: _ctx.itemTitleList[n - 1]
        }, {
          default: vue.withCtx(() => [
            vue.createVNode(_component_svg_icon, {
              name: _ctx.iconNameList[n - 1]
            }, null, 8, ["name"])
          ]),
          _: 2
        }, 1032, ["to", "target", "style", "onMouseover", "onMouseout", "class", "title"])), [
          [_directive_tooltip, _ctx.tooltipData[n - 1]]
        ]) : _ctx.urlsData[n - 1].type === "external" ? vue.withDirectives((vue.openBlock(), vue.createElementBlock("a", {
          key: 1,
          target: _ctx.urlsData[n - 1].target,
          href: _ctx.urlsData[n - 1].url,
          style: vue.normalizeStyle(_ctx.itemMenuStyle),
          onMouseover: _cache[0] || (_cache[0] = vue.withModifiers((...args) => _ctx.mouseEnterSubMenu && _ctx.mouseEnterSubMenu(...args), ["stop"])),
          onMouseout: _cache[1] || (_cache[1] = vue.withModifiers((...args) => _ctx.mouseOutSubMenu && _ctx.mouseOutSubMenu(...args), ["stop"])),
          class: vue.normalizeClass(_ctx.linkIconClassList[n - 1]),
          ref_for: true,
          ref: "link",
          title: _ctx.itemTitleList[n - 1]
        }, [
          vue.createVNode(_component_svg_icon, {
            name: _ctx.iconNameList[n - 1]
          }, null, 8, ["name"])
        ], 46, _hoisted_2)), [
          [_directive_tooltip, _ctx.tooltipData[n - 1]]
        ]) : vue.withDirectives((vue.openBlock(), vue.createElementBlock("a", {
          key: 2,
          target: _ctx.urlsData[n - 1].target,
          style: vue.normalizeStyle(_ctx.itemMenuStyle),
          onMouseover: _cache[2] || (_cache[2] = vue.withModifiers((...args) => _ctx.mouseEnterSubMenu && _ctx.mouseEnterSubMenu(...args), ["stop"])),
          onMouseout: _cache[3] || (_cache[3] = vue.withModifiers((...args) => _ctx.mouseOutSubMenu && _ctx.mouseOutSubMenu(...args), ["stop"])),
          onClick: ($event) => _ctx.processCallback(key),
          class: vue.normalizeClass(_ctx.linkIconClassList[n - 1]),
          ref_for: true,
          ref: "link",
          title: _ctx.itemTitleList[n - 1]
        }, [
          vue.createVNode(_component_svg_icon, {
            name: _ctx.iconNameList[n - 1]
          }, null, 8, ["name"])
        ], 46, _hoisted_3)), [
          [_directive_tooltip, _ctx.tooltipData[n - 1]]
        ])
      ], 12, _hoisted_1);
    }), 128)),
    vue.createElementVNode("div", {
      class: "menu",
      style: vue.normalizeStyle(_ctx.buttonStyle)
    }, [
      vue.createElementVNode("div", {
        class: "core-menu",
        onClick: _cache[4] || (_cache[4] = (...args) => _ctx.toggleMenu && _ctx.toggleMenu(...args))
      }, _hoisted_5)
    ], 4)
  ], 4);
}
const Vue3QuickMenu = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
const index = "";
exports.Vue3QuickMenu = Vue3QuickMenu;
//# sourceMappingURL=vue-3-constellation.cjs.js.map
