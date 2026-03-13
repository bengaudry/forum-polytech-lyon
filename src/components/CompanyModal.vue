<script setup lang="ts">
import CompanyModalContent from './CompanyModalContent.vue'
import { useModalVisibility } from '@/composables/useModalVisibility'

const { isModalVisible, hideModal } = useModalVisibility()
</script>

<template>
  <div :class="`modal ${isModalVisible ? 'modal-visible' : ''}`" @click.self="hideModal">
    <div class="modal-body">
      <span class="close" @click="hideModal">&times;</span>
      <CompanyModalContent />
    </div>
  </div>
</template>

<style scoped>
/* Modale */
.modal {
  display: flex;
  position: fixed;
  flex-direction: column;
  justify-content: flex-end;
  z-index: 30;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  opacity: 0;
  background-color: rgba(0, 0, 0, 0.5);
  transition: opacity 200ms ease;
  pointer-events: none;
}

.modal-visible {
  opacity: 1;
  pointer-events: auto;
}

.modal-body {
  background-color: #fafafa;
  margin: 0 auto;
  width: calc(100% - 40px);
  padding: 20px;
  overflow-y: auto;
  max-width: 700px;
  max-height: 80vh;
  border-radius: 16px 16px 0 0;
  transform: translateY(100%);
  transition: transform 300ms ease;
}

.modal-visible > .modal-body {
  transform: translateY(0);
}

.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}
</style>
