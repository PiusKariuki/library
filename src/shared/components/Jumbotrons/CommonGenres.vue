<template>
  <div class="flex flex-col pad mt-20 gap-6">
    <p class="text-2xl text-left font-bold">Top Genres</p>
    <div class="flex flex-wrap gap-5" >
      <div v-for="genre of result?.genres" :key="genre.id" class="border-2 border-stopLinear rounded-[40px] px-6 py-1 cursor-pointer hover:border-startLinear">
        {{genre.name}}
      </div>
    </div>
  </div>
</template>

<script setup>
import { useQuery } from '@vue/apollo-composable'
import getGenresString from '../../graphql/query_strings/getGenres'

const { result } = useQuery(getGenresString)
</script>

