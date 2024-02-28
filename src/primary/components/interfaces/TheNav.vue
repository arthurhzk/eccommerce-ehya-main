<template>
  <section class="w-screen md:my-5 lg:my-5">
    <SideContainer>
      <nav>
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <router-link :to="{ name: RouteNameEnum.HOME }">
            <img src="/Logo.svg" class="h-8" />
          </router-link>

          <button
            @click="toggleBurguer"
            data-collapse-toggle="navbar-default"
            type="button"
            class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>

          <div :class="{ 'hidden md:block': !isOpen }" class="w-full md:w-auto" id="navbar-default">
            <ul
              class="font-medium flex flex-col p-4 md:p-0 mt-4 borderrounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
            >
              <li>
                <router-link
                  :to="{ name: RouteNameEnum.HOME }"
                  href="#"
                  class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                  aria-current="page"
                  >Home</router-link
                >
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >Sobre</a
                >
              </li>
              <li>
                <router-link
                  :to="{ name: RouteNameEnum.PRODUCTS }"
                  class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Produtos
                </router-link>
              </li>
              <li v-if="store.isLoggedIn">
                <router-link
                  :to="{ name: RouteNameEnum.PROFILE }"
                  class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Perfil
                </router-link>
              </li>

              <li v-if="!store.isLoggedIn">
                <router-link
                  :to="{ name: RouteNameEnum.LOGIN }"
                  href="#"
                  class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >Login</router-link
                >
              </li>
              <li v-if="!store.isLoggedIn">
                <router-link
                  :to="{ name: RouteNameEnum.REGISTER }"
                  href="#"
                  class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >Registrar</router-link
                >
              </li>
              <li>
                <router-link
                  :to="{ name: RouteNameEnum.CART }"
                  class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Carrinho
                </router-link>
              </li>
              <li>
                <InfoSheet v-if="store.isLoggedIn" />
              </li>
              <li>
                <TheDropDown @sign-out="signOut" v-if="store.isLoggedIn" />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </SideContainer>
  </section>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import SideContainer from '@/primary/components/container/SideContainer.vue'
import { RouteNameEnum } from '@/domain/enums/RouteEnum'
import { useRoute } from 'vue-router'
import useLoggedStore from '@/primary/infrastructure/store/logged'
import TheDropDown from '@/primary/components/interfaces/TheDropDown.vue'
import useUserStore from '@/primary/infrastructure/store/user'

const store = useLoggedStore()
const { signOut } = useUserStore()
const isOpen = ref(false)
const route = useRoute()
const toggleBurguer = () => {
  isOpen.value = !isOpen.value
}

watch(route, () => {
  isOpen.value = false
})
</script>

<style scoped></style>
