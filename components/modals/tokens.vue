import { liquidity } from '../../services/liquidity';

<template>
  <!-- modal token -->
  <v-dialog v-model="modalTokensOpen" width="447px" content-class="modalTokens">
    <section class="modalTokens-header">
      <div class="wrapper-header">
        <h3 style="--fw: 700">Select a token</h3>
        <v-btn icon style="top: -10px" @click="modalTokensOpen = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </div>

      <v-text-field v-model="searchToken" prepend-icon="mdi-magnify" placeholder="search name or paste address"
        hide-details solo
        style="--fs: 18px;  --fw: 400; --p: 0 12px 0 0; --c-place: var(--accent); --tt: lowercase"></v-text-field>

      <aside class="container-popular" style="gap: 10px">
        <label class="plain tup" style="--fw: 600">popular</label>
        <div class="wrap" :class="{ space: dataPopularTokens.length > 4 }" style="gap: inherit">
          <v-chip v-for="(item, i) in dataPopularTokens.slice(0, 8)" :key="i" class="tup" color="#292724"
            style="border-radius: 10px; min-width: 82px" :disabled="isDisable(item)" @click="selectToken(item)">
            <v-img :src="item.logoURI" class="aspect mr-2" :alt="item.name" style="--w: 20px">
              <template #placeholder>
                <v-skeleton-loader type="avatar" />
              </template>
            </v-img>
            {{ item.name }}
          </v-chip>
        </div>
      </aside>
    </section>

    <v-virtual-scroll v-if="!isLoading" :items="filterDataTokens" height="400" item-height="60"
      class="modalTokens-content">
      <template #default="{ item }">
        <v-card class="space" style="gap: 10px" :disabled="isDisable(item)" @click="selectToken(item)">
          <div class="acenter tcap" style="gap: 10px">
            <v-img :src="item.logoURI" :alt="`${item.name} token`" class="aspect" style="--w: 35.5px">
              <template #placeholder>
                <v-skeleton-loader type="avatar" />
              </template>
            </v-img>

            <div class="divcol" style="gap: inherit">
              <span class="tup">{{ item.name }}</span>
              <!-- <span>{{item.fullname}}</span> -->
            </div>
          </div>

          <label>{{ item.balance }}</label>
        </v-card>
      </template>
    </v-virtual-scroll>
    <div v-else>
      <v-skeleton-loader class="w-[100%]" type="list-item"></v-skeleton-loader>
      <v-skeleton-loader class="w-[100%]" type="list-item"></v-skeleton-loader>
      <v-skeleton-loader class="w-[100%]" type="list-item"></v-skeleton-loader>
      <v-skeleton-loader class="w-[100%]" type="list-item"></v-skeleton-loader>
      <v-skeleton-loader class="w-[100%]" type="list-item"></v-skeleton-loader>
      <v-skeleton-loader class="w-[100%]" type="list-item"></v-skeleton-loader>
    </div>

  </v-dialog>
</template>

<script>
import {Token} from '~/services/contract/token'
export default {
  name: "TokenModalComponent",
  props: {
    token: {
      type: Object,
      default: undefined
    },
    oppositeToken: {
      type: Object,
      default: undefined
    },
    tokens: {
      type: Array,
      default: () => []
    },
  },
  data() {
    return {
      // modal token
      currentToken: undefined,
      modalTokensOpen: false,
      searchToken: undefined,
      filterDataTokens: [],
      isLoading: false,
    };
  },
  computed: {
    dataPopularTokens() {
      return this.tokens.slice(0, 3)
    },
  },
  watch: {
    async searchToken() {
      this.filterData()
    },
    tokens() {
      this.filterData()
    }
  },
  methods: {
    async filterData () {
      if (!this.searchToken && this.searchToken !== 0) {
        this.filterDataTokens = this.tokens
        return
      }
      this.isLoading = true
      try {
        if (/^(0x)?[0-9a-fA-F]{40}$/.test(this.searchToken)) {
        const findToken = this.$liquidity.pairsTokensMap[this.searchToken.toLowerCase()]
        if (findToken) {
          this.filterDataTokens = [findToken]
        } else {
          this.filterDataTokens = [new Token({
            address: this.searchToken.toLowerCase()
          })]
        }

      } else {
        this.filterDataTokens = this.tokens.filter(data => {
          return data.name.toLowerCase().includes(this.searchToken.toLowerCase())
        })
      }
      } catch (error) {
         console.error(error, 'search filter')
      }
      this.isLoading = false
    },
    isDisable(item) {
      return item === this.token
    },
    selectToken(item) {
      if (item === this.oppositeToken) {
        this.$emit('switch', item)
      } else {
        this.$emit('select', item)
      }

      this.modalTokensOpen = false
    },
    openModalTokens() {
      this.modalTokensOpen = true
    },
  }
};
</script>

<style src="~/assets/styles/components/modals.scss" lang="scss" />
