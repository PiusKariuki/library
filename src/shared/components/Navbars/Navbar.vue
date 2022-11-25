<script setup>
const emit = defineEmits(['open'])

</script>

<template lang="">
  <nav class="flex w-full justify-between pad items-center">
    <img src="/img/owl.svg" alt="logo" class="max-w-[50px]" />
    <font-awesome-icon icon="fa-solid fa-bars" class="text-lg lg:hidden"
    @click='emit("open")'
    />
    <div class="hidden lg:flex w-8/12 justify-between items-center">
      <a href="#" class="nav-item">Home</a>
      <a href="#" class="nav-item">Library</a>
      <a href="#" class="nav-item">My Books</a>
      <a href="#" class="nav-item">support</a>
      <font-awesome-icon icon="fa-solid fa-user" />
    </div>
  </nav>
</template>

