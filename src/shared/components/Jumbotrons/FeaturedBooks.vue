<script setup>
import BookCard from '../Cards/BookCard.vue'
import { useQuery } from '@vue/apollo-composable'
import getAllBooksQuery from '../../graphql/query_strings/getAllBooks'

const { result } = useQuery(getAllBooksQuery)
</script>

<template>
  <div class="flex flex-col gap-6 pad mt-20">
    <p class="text-2xl text-left font-bold">Featured Books</p>
    <div class="flex flex-row flex-nowrap gap-4 xl:gap-16 overflow-x-scroll py-10 lg:px-16">
      <div v-for="book of result?.books" :key="book.id" class="flex-shrink-0">
        <book-card :book="book" />
      </div>
    </div>
  </div>
</template>


