<template>
  <div class="flex flex-col gap-4 flex-shrink-0 p-3 pb-6 rounded-lg border-[2px] relative cursor-pointer">


    <img :src="book.photo" alt="cover" class="h-44 w-64 rounded-lg object-cover lg:absolute lg:-left-10 lg:top-1/2 lg:-translate-y-1/2 lg:z-10" />


    <div class="flex flex-col gap-2 w-full lg:w-96">
      <p class="text-sm text-[#0000008A] mb-4 uppercase lg:ml-auto">{{ book.primaryGenre.name }}</p>
      <p class="text-primary break-all font-semibold lg:ml-auto">{{ book.title }}</p>
      <p class="text-[#000000B3] text-[0.8rem] truncate overflow-hidden w-64 lg:w-32 h-10 whitespace-normal lg:ml-auto">
        {{ book.synopsis }}
      </p>
      <button class="primary-btn py-[6px] px-2 mt-8 w-36 lg:ml-auto">Read More</button>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(['book'])
</script>

