<template>
  <div class="vue-3-constellation" ref="vue3Constellation">
    <div class = "vue-3-constellation__content">
      <slot/>
    </div>
  </div>
</template>

<script>
import { defineComponent, nextTick, ref, onMounted } from 'vue'
import Constellation from './Constellation.js'
export default defineComponent({
  props:{
    width:{
      type: Number,
      required: false,
      default:document.documentElement.clientWidth
    },
    height:{
      type: Number,
      required: false,
      default:document.documentElement.clientHeight
    },
    starColor:{
      type: String,
      required: false,
      default:'rgba(255, 255, 255, .5)'
    },
    starWidth:{
      type: Number,
      required: false,
      default:3
    },
    starRandomWidth:{
      type: Boolean,
      required: false,
      default:true
    },
    lineColor:{
      type: String,
      required: false,
      default:'rgba(255, 255, 255, .5)'
    },
    lineWidth:{
      type: Number,
      required: false,
      default:0.2
    },
    positionX:{
      type: Number,
      required: false,
      default:0,
    },
    positionY:{
      type: Number,
      required: false,
      default:0,
    },
    velocity:{
      type: Number,
      required: false,
      default:0.1,
    },
    length:{
      type: Number,
      required: false,
      default:(document.documentElement.clientWidth / 6),
    },
    distance:{
      type: Number,
      required: false,
      default:120,
    },
    radius:{
      type: Number,
      required: false,
      default:(document.documentElement.clientHeight / 5),
    },
    stars: {
      type:Array,
      default: () => []
    }
  },
  setup(props) {

    const vue3Constellation = ref(null)

    onMounted(() => {
      nextTick(() => {

        const options = {}
        for(let key in props) {
          options[key] = props[key]
        }
        new Constellation(vue3Constellation.value, options);

      })
    })

    return {
      vue3Constellation
    }
  }
})
</script>
