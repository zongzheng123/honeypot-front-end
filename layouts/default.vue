<template>
  <v-app id="layout" class="relative">
    <Alerts ref="alerts" />
    <ModalsConnect ref="connect" />
    <Navbar ref="navbar" />
    <ModalsSwapModal ref="swap" />

    <v-main :class="wrapperSpace?'with':'without'" class="parent">
      <!-- floating swap button -->
      <v-btn
        v-show="!$route.path.includes('/swap')" id="swap-floating-button" class="btn" @click="$refs.swap.modalSwap = true"
        @mousedown="customeDragOnly($event)" @touchstart="customeDragOnly($event)">
        <v-icon>mdi-chevron-up</v-icon>
        <span>Swap</span>
      </v-btn>

      <!-- connect button -->
      <v-menu top offset-y>
        <template #activator="{ on, attrs }">
          <v-btn
            id="account-floating-button" class="btn showmobile"
            v-bind="isLogged ? attrs : ''"
            v-on="isLogged ? on : ''"
            @mousedown="customeDragOnly($event, {dir: 'horizontal'})"
            @touchstart="customeDragOnly($event, {dir: 'horizontal'})"
            @click="!isLogged ? $store.dispatch('modalConnect') : ''">
            <template v-if="isLogged">
              {{user.accountId}}
              <v-icon>mdi-chevron-down</v-icon>
            </template>

            <template v-else>Connect wallet</template>
          </v-btn>
        </template>

        <v-list class="font2" color="var(--secondary)" style="--c:#fff">
          <v-list-item-group active-class="activeClass">
            <v-list-item
              v-for="(item,i) in dataMenuLogin" :key="i"
              @click="item.key==='logout' ? $store.commit('signOut') : $router.push(localePath(key))">
              <v-list-item-title>{{item.name}}</v-list-item-title>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-menu>

      <!-- routes -->
      <nuxt-child />
    </v-main>
    <!-- <Footer ref="footer"></Footer> -->
  </v-app>
</template>

<script>
import computeds from '~/mixins/computeds'
import customeDrag from '~/mixins/customeDrag'
import menuLogin from '~/mixins/menuLogin'

export default {
  name: "DefaultLayout",
  mixins: [computeds, customeDrag, menuLogin],
  // middleware: ['authenticated'],
  data() {
    return {
      wrapperSpace: true,
    }
  },
  beforeCreate () {
  },

  created() {
    // get data profile
    // this.$store.dispatch("getData");
  },
  mounted() {
    this.scrollX();
    // this.footerHeightListener();

    // resize listener
    // window.addEventListener("resize", this.footerHeightListener);
  },
  beforeDestroy() {
    // window.removeEventListener("resize", this.footerHeightListener);
  },
  methods: {
    scrollX() {
      const
        scrollableDesktop = document.querySelectorAll('.scrollx'),
        scrollableMobile = document.querySelectorAll('.scrollxmobile');
      if (scrollableDesktop) {
        for (const el of scrollableDesktop) {
          el.addEventListener("wheel", event => { event.preventDefault(); el.scrollLeft += event.deltaY })
        }
      }
      if (scrollableMobile) {
        for (const el of scrollableMobile) {
          el.addEventListener("wheel", event => {
            if (window.innerWidth <= 880) { event.preventDefault(); el.scrollLeft += event.deltaY }
          })
        }
      }
    },
    // footerHeightListener() {
    //   setTimeout(() => {
    //     const footer = document.querySelector('#footer');
    //     document.documentElement.style.setProperty(
    //       '--h-footer', `${footer.getBoundingClientRect().height}px`
    //     );
    //   }, 400);
    // },
  },
}
</script>

<style src="~/assets/styles/layouts/default.scss" lang="scss" />
