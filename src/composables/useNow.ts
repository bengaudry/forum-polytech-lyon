import { onBeforeUnmount, ref } from 'vue'

const now = ref(new Date())
const timerId = window.setInterval(() => {
  now.value = new Date()
}, 30000)

onBeforeUnmount(() => {
  window.clearInterval(timerId)
})

export const useNow = () => now