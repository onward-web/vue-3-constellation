"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const vue = require("vue");
class Star {
  constructor(parent) {
    this.parent = parent;
    this.x = Math.random() * this.parent.canvas.width;
    this.y = Math.random() * this.parent.canvas.height;
    this.vx = this.parent.options.velocity - Math.random() * 0.5;
    this.vy = this.parent.options.velocity - Math.random() * 0.5;
    this.radius = this.parent.options.starRandomWidth ? Math.random() * this.parent.options.starWidth : this.parent.options.star.width;
  }
  draw() {
    this.parent.ctx.beginPath();
    this.parent.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    this.parent.ctx.closePath();
    this.parent.ctx.fill();
  }
  updatePosition() {
    if (this.y < 0 || this.y > this.parent.canvas.height) {
      this.vx = this.vx;
      this.vy = -this.vy;
    } else if (this.x < 0 || this.x > this.parent.canvas.width) {
      this.vx = -this.vx;
      this.vy = this.vy;
    }
    this.x += this.vx;
    this.y += this.vy;
  }
}
class Constellation {
  constructor($wrap, options = {}) {
    this.$wrap = $wrap;
    this.options = options;
    this.init();
  }
  init() {
    this.canvas = document.createElement("canvas");
    this.canvas.className = "vue-constellation__canvas";
    this.canvas.style.display = "block";
    this.canvas.style.position = "absolute";
    this.canvas.style.left = 0;
    this.canvas.style.top = 0;
    this.canvas.style.pointerEvents = "none";
    this.$wrap.insertBefore(this.canvas, this.$wrap.firstChild);
    this.ctx = this.canvas.getContext("2d");
    this.styleCanvas();
    this.setInitialPosition();
    this.stars = [];
    this.createStars();
    this.loop();
    this.bind();
  }
  styleCanvas() {
    this.canvas.width = this.options.width;
    this.canvas.height = this.options.height;
    this.ctx.fillStyle = this.options.starColor;
    this.ctx.strokeStyle = this.options.lineColor;
    this.ctx.lineWidth = this.options.lineWidth;
  }
  setInitialPosition() {
    if (!this.options || !this.options.hasOwnProperty("positionX")) {
      this.options.positionX = this.canvas.width * 0.5;
    }
    if (!this.options || !this.options.hasOwnProperty("positionY")) {
      this.options.positionY = this.canvas.height * 0.5;
    }
  }
  createStars() {
    let length = this.options.length, star, i;
    for (i = 0; i < length; i++) {
      this.stars.push(new Star(this));
      star = this.stars[i];
      star.draw();
    }
  }
  loop() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.addLine();
    for (let i = 0; i < this.stars.length; i++) {
      this.stars[i].updatePosition();
      this.stars[i].draw();
    }
    window.requestAnimationFrame(this.loop.bind(this));
  }
  addLine() {
    let length = this.options.length, iStar, jStar, i, j;
    for (i = 0; i < length; i++) {
      for (j = 0; j < length; j++) {
        iStar = this.stars[i];
        jStar = this.stars[j];
        if (iStar.x - jStar.x < this.options.distance && iStar.y - jStar.y < this.options.distance && iStar.x - jStar.x > -this.options.distance && iStar.y - jStar.y > -this.options.distance) {
          if (iStar.x - this.options.positionX < this.options.radius && iStar.y - this.options.positionY < this.options.radius && iStar.x - this.options.positionX > -this.options.radius && iStar.y - this.options.positionY > -this.options.radius) {
            this.ctx.beginPath();
            this.ctx.moveTo(iStar.x, iStar.y);
            this.ctx.lineTo(jStar.x, jStar.y);
            this.ctx.stroke();
            this.ctx.closePath();
          }
        }
      }
    }
  }
  bind() {
    document.addEventListener("mousemove", (e) => {
      this.options.positionX = e.pageX - this.canvas.offsetLeft;
      this.options.positionY = e.pageY - this.canvas.offsetTop;
    }, false);
    window.addEventListener("resize", () => {
      window.cancelAnimationFrame(this.rAF);
    });
  }
  unbind() {
    console.log("unbind");
  }
}
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main = vue.defineComponent({
  props: {
    width: {
      type: Number,
      required: false,
      default: document.documentElement.clientWidth
    },
    height: {
      type: Number,
      required: false,
      default: document.documentElement.clientHeight
    },
    starColor: {
      type: String,
      required: false,
      default: "rgba(255, 255, 255, .5)"
    },
    starWidth: {
      type: Number,
      required: false,
      default: 3
    },
    starRandomWidth: {
      type: Boolean,
      required: false,
      default: true
    },
    lineColor: {
      type: String,
      required: false,
      default: "rgba(255, 255, 255, .5)"
    },
    lineWidth: {
      type: Number,
      required: false,
      default: 0.2
    },
    positionX: {
      type: Number,
      required: false,
      default: 0
    },
    positionY: {
      type: Number,
      required: false,
      default: 0
    },
    velocity: {
      type: Number,
      required: false,
      default: 0.1
    },
    length: {
      type: Number,
      required: false,
      default: document.documentElement.clientWidth / 6
    },
    distance: {
      type: Number,
      required: false,
      default: 120
    },
    radius: {
      type: Number,
      required: false,
      default: document.documentElement.clientHeight / 5
    },
    stars: {
      type: Array,
      default: () => []
    }
  },
  setup(props) {
    const vue3Constellation = vue.ref(null);
    vue.onMounted(() => {
      vue.nextTick(() => {
        const options = {};
        for (let key in props) {
          options[key] = props[key];
        }
        new Constellation(vue3Constellation.value, options);
      });
    });
    return {
      vue3Constellation
    };
  }
});
const _hoisted_1 = {
  class: "vue-3-constellation",
  ref: "vue3Constellation"
};
const _hoisted_2 = { class: "vue-3-constellation__content" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createElementBlock("div", _hoisted_1, [
    vue.createElementVNode("div", _hoisted_2, [
      vue.renderSlot(_ctx.$slots, "default")
    ])
  ], 512);
}
const Vue3Constellation = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
const index = "";
exports.Vue3Constellation = Vue3Constellation;
//# sourceMappingURL=vue-3-constellation.cjs.js.map
