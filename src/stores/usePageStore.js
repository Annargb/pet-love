import { defineStore } from 'pinia'
import { computed } from 'vue'
import { useRoute } from 'vue-router'

export const usePageStore = defineStore('page', () => {
  const route = useRoute()
  const isHomePage = computed(() => route.path === '/')

  return { isHomePage }
})
