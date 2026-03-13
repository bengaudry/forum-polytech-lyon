import { ref } from 'vue'

const isModalVisible = ref(false)

const showModal = () => {
  document.body.style.overflow = 'hidden'
  isModalVisible.value = true
}

const hideModal = () => {
  document.body.style.overflow = 'auto'
  isModalVisible.value = false
}

export function useModalVisibility() {
  return {
    isModalVisible,
    showModal,
    hideModal,
  }
}
