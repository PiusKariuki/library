<script setup>
import Navbar from '../shared/components/Navbars/Navbar.vue'
import Sidebar from '../shared/components/Sidebars/Sidebar.vue'
import Hero from '../shared/components/Hero/Hero.vue'
import FeaturedBooks from '../shared/components/Jumbotrons/FeaturedBooks.vue'
import CommonGenres from '../shared/components/Jumbotrons/CommonGenres.vue'
import { reactive } from 'vue'

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
    <Hero />
    <FeaturedBooks />
    <CommonGenres />
  </div>
</template>
