<template>
    <div class="min-h-full">
      <Disclosure as="nav" class="bg-gray-800" v-slot="{ open }">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="flex h-16 items-center justify-between">
            <div class="flex items-center">
              <NuxtLink to="/" active-class="bg-gray-900 hover:bg-gray-900 text-white" class="flex-shrink-0 p-2 rounded-md text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                <HomeIcon class="block h-6 w-6" aria-hidden="true" />  
              </NuxtLink>
              <div class="hidden md:block">
                <div class="ml-10 flex items-baseline space-x-4">
                  <NuxtLink v-for="item in navigation" :key="item.name" :to="item.to" active-class="bg-gray-900 hover:bg-gray-900 text-white" class="text-gray-300 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 hover:text-white rounded-md px-3 py-2 text-sm font-medium">{{ item.name }}</NuxtLink>
                </div>
              </div>
            </div>
            <div class="-mr-2 flex md:hidden">
              <!-- Mobile menu button -->
              <DisclosureButton class="inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                <span class="sr-only">Open main menu</span>
                <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
                <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
              </DisclosureButton>
            </div>
          </div>
        </div>
  
        <DisclosurePanel class="md:hidden">
          <div class="space-y-1 px-2 pt-2 pb-3 sm:px-3">
            <DisclosureButton v-for="item in navigation" :key="item.name" as="template">
                <NuxtLink :to="item.to" active-class="bg-gray-900 text-white hover:bg-gray-900" class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">{{ item.name }}</NuxtLink>
            </DisclosureButton>
          </div>
        </DisclosurePanel>
      </Disclosure>
  
      
      <main>
        <div class="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
          <NuxtPage />
        </div>
      </main>
    </div>
  </template>
  
  <script setup lang="ts">
  import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
  import { Bars3Icon, HomeIcon, XMarkIcon } from '@heroicons/vue/24/outline'

  const navigation = [
    { name: 'Denne uka', to: '/current'},
    { name: 'Alle uker', to: '/weeks'},
  ]
  </script>