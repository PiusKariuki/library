<script setup>
import Navbar from '../shared/components/Navbars/Navbar.vue'
import Sidebar from '../shared/components/Sidebars/Sidebar.vue'
import { reactive } from 'vue';
const openSidebar = reactive({ isOpen: false })

function toggleSidebar() {
  openSidebar.isOpen = !openSidebar.isOpen
}

</script>

<template lang="">
  <div class="flex flex-col">
    <Navbar @open='toggleSidebar' />
    <div class="" v-if='openSidebar.isOpen' >
      <Sidebar @close='toggleSidebar' />
    </div>
    
  </div>
</template>
