<template>

    <div class="flex flex-col gap-5 items-center">
    <header class="w-full">
    <ContentSection>
      <h1 class="text-3xl font-bold tracking-tight text-gray-900">Uke {{ week }}</h1>
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
        <img :src="url" alt="Ukas bilde" class="border-[15px] h-[215px] w-[215px] border-black">
        <h2>Ukas bilde</h2>
    </div>
    </ContentSection>
    
    
    <NuxtLink v-if="week > 1" :to="`/week/${week - 1}`" class="w-[200px] border rounded p-2 bg-white hover:bg-slate-200 focus:outline-none focus:ring-2">
      Se forrige uke
    </NuxtLink>
    <NuxtLink v-if="week < 52" :to="`/week/${week + 1}`" class="w-[200px] border rounded p-2 bg-white hover:bg-slate-200 focus:outline-none focus:ring-2">
      Se neste uke
    </NuxtLink>
    
    </div>
    
    </template>
    
    <script setup lang="ts">
    const route = useRoute()
    const week = parseInt(route.params.id)
    const cleaners = getCleanersFromWeek(week)
    const url = `https://picsum.photos/seed/${week}/200/200`
    </script>