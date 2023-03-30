<template>

<div class="flex flex-col gap-5 items-center">
<header class="w-full">
<ContentSection>
  <h1 class="text-3xl font-bold tracking-tight text-gray-900">Denne uka</h1>
</ContentSection>
</header>

<main class="w-full text-2xl">
  <ContentSection>
    <ul>
      <li class="list-disc list-inside" v-for="i in cleaners">
      {{ i }}
      </li>
    </ul>
  </ContentSection>
</main>

<ContentSection>
  <div class="grid place-items-center gap-2">
    <img :src="url" alt="Ukas bilde" class="border-[15px] border-black">
    <h2>Ukas bilde</h2>
</div>
</ContentSection>


<NuxtLink :to="`/week/${week - 1}`" class="w-[200px] border rounded p-2 bg-white hover:bg-slate-200 focus:outline-none focus:ring-2">
  Se forrige uke
</NuxtLink>
<NuxtLink :to="`/week/${week + 1}`" class="w-[200px] border rounded p-2 bg-white hover:bg-slate-200 focus:outline-none focus:ring-2">
  Se neste uke
</NuxtLink>

</div>

</template>

<script setup lang="ts">
const week = getWeekNumber(new Date())
const cleaners = getCleanersFromWeek(week)
const url = `https://picsum.photos/seed/${week}/200/200`
</script>