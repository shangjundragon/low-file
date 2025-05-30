<template>
  <div ref="target" class="lazy-container">
    <slot v-if="isVisible"></slot>
  </div>
</template>

<script setup>
import {onMounted, onUnmounted, ref, useTemplateRef} from 'vue'

const props = defineProps({
  threshold: {
    type: Number,
    default: 0.1
  }
})

const emits = defineEmits(['loaded'])
const modelLoaded = defineModel('loaded');


const target = useTemplateRef('target')
const isVisible = ref(false)
let observer = null

// 创建Intersection Observer
const createObserver = () => {
  observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !isVisible.value) {
            isVisible.value = true;
            emits('loaded');
            modelLoaded.value = true;
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: props.threshold,
        rootMargin: '0px'
      }
  )
}


// 初始化观察
onMounted(() => {
  if (target.value) {
    createObserver()
    observer.observe(target.value)
  }
})

// 清理观察
onUnmounted(() => {
  if (observer && target.value) {
    observer.unobserve(target.value)
  }
})
</script>

<style scoped>
.lazy-container {
  position: relative;
  min-height: 1px; /* 确保容器有高度 */
}

</style>
