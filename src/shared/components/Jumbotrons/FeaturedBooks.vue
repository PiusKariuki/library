<script setup>
import BookCard from '../Cards/BookCard.vue'
import { useQuery } from '@vue/apollo-composable'
import getAllBooksQuery from '../../graphql/query_strings/getAllBooks'
import { watch, ref } from 'vue'

const { result } = useQuery(getAllBooksQuery)
const boxRefPos = ref({ isLeft: true, isRight: false })
const boxRef = document.getElementById('boxRef')

const handleScrollLeft = () => (document.getElementById('boxRef').scrollLeft -= 100)
const handleScrollRight = () => (document.getElementById('boxRef').scrollLeft += 100)

watch(boxRefPos, () => {
  const { scrollLeft, scrollWidth, clientWidth } = document.getElementById('boxRef')
  //end check
  if (scrollLeft + clientWidth === scrollWidth) boxRefPos.value = { ...boxRefPos.value, isRight: true }
  else boxRefPos.value = { ...boxRefPos.value, isRight: false }

  // start check
  if (scrollLeft === 0) boxRefPos.value = { ...boxRefPos.value, isLeft: true }
  else boxRef.value = { ...boxRefPos.value, isLeft: false }
})
</script>

<template>
  <div class="flex flex-col gap-6 pad mt-20">
    <div class="flex w-full justify-between">
      <p class="text-2xl text-left font-bold">Featured Books</p>
      <div class="flex gap-10">
        <font-awesome-icon
          @click="handleScrollLeft"
          icon="fa-chevron-circle-left"
          class="hidden md:flex text-5xl text-black cursor-pointer"
        />
        <font-awesome-icon
          @click="handleScrollRight"
          icon="fa-chevron-circle-right"
          class="hidden md:flex text-5xl text-black cursor-pointer"
        />
      </div>
    </div>

    <div id="boxRef" ref="boxRef" class="flex flex-row flex-nowrap gap-4 xl:gap-16 overflow-x-scroll py-10 lg:px-16">
      <div v-for="book of result?.books" :key="book.id" class="flex-shrink-0">
        <book-card :book="book" />
      </div>
    </div>
  </div>
</template>


