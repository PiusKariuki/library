<script setup>
const emit = defineEmits(['close'])

function handleClose() {
  emit('close')
}
</script>

<template lang="">
  <div class="inset-0 fixed z-10 flex flex-col w-full pad bg-secondary">
    <div class="flex w-full justify-between items-center">
      <img src="/img/owl.svg" alt="logo" class="max-w-[50px]" />
      <font-awesome-icon icon="fa-solid fa-times" class="text-3xl" 
      @click='handleClose'
      />
    </div>
    <div class="flex flex-col mt-20 gap-6">
      <a href="" class="sidebar-item">Library</a>
      <a href="" class="sidebar-item">My Books</a>
      <a href="" class="sidebar-item">Support</a>
      <a href="" class="sidebar-item">Profile</a>
    </div>
  </div>
</template>

