<template>
  <div id="pools-create" class="divcol" style="gap: 30px">
    <ModalsTokens :tokens="$wallet.currentNetwork.tokens" ref="tokens0" :token="$liquidity.token0" @select="(t) => $liquidity.token0=t" @switch="$liquidity.switchTokens()" :oppositeToken="$liquidity.token1" ></ModalsTokens>
    <ModalsTokens :tokens="$wallet.currentNetwork.tokens" ref="tokens1" :token="$liquidity.token1" @select="(t) => $liquidity.token1=t" @switch="$liquidity.switchTokens()" :oppositeToken="$liquidity.token0"></ModalsTokens>
    <section id="pools-create-header" class="divcol" style="gap: 10px">
      <label class="maxsize_w hover_arrowback pointer" style="--fs: 21px" @click="$router.push(localePath('/pools'))">
        <v-icon size="1.5em">mdi-chevron-left</v-icon>
        Back To Pools
      </label>

      <v-card class="card space gap2" style="--br: 20px">
        <span v-if="!(firstToken.img && secondToken.img)" class="acenter" style="gap: 5px">Create a pool</span>

        <span v-else class="acenter tup" style="gap: 5px">
          <img :src="firstToken.img" alt="token" style="--w: 1.72em; --of: cover">
          usdc /
          <img :src="secondToken.img" alt="token" style="--w: 1.72em; --of: cover">
          btc
        </span>

        <!-- <img
          src="~/assets/sources/miscellaneous/locked-pools-test-img.jpg" alt="test image"
          style="--h: 123px; --ar: 1.75 / 1; border-radius: 0 !important"
        > -->
      </v-card>
    </section>


    <section id="pools-create-content" class="fwrap">
      <!-- section left -->
      <v-sheet v-if="!isLiquidityAdded" color="transparent" class="divcol">
        <span class="hspan mb-2" style="--fs: 28px; --fw: 700">
          {{!(firstToken.img && secondToken.img) ? 'Create a pool' : 'Add Liquidity'}}
        </span>

        <p class="mb-8" style="max-width: 500px">
          {{
            !(firstToken.img && secondToken.img)
            ? 'You are the first liquidity provider. The ratio of tokens you add will set the price of this pool. Once you are happy with the rate click supply to review.'
            : 'There is currently no liquidity'
          }}
        </p>

        <!-- <img
          src="~/assets/sources/miscellaneous/locked-pools-test-img.jpg" alt="test image"
          style="--h: 123px; --ar: 1.75 / 1; border-radius: 0 !important; max-width: 201px !important"
        > -->
      </v-sheet>

      <v-card v-else id="container-chart" class="card divcol jcenter" style="--br: 20px">
        <ChartsPoolsChart ref="chart" height="280px"></ChartsPoolsChart>

        <aside class="fwrap font2" style="gap: 30px; --fb: 190px">
          <v-card class="card divcol center">
            <label>TVL</label>
            <span class="hspan">$1.2M</span>
          </v-card>

          <v-card class="card divcol center">
            <label>Pool APR</label>
            <span class="hspan">32%</span>
          </v-card>

          <v-card class="card divcol center">
            <label>Fees</label>
            <span class="hspan">$1290</span>
          </v-card>
        </aside>
      </v-card>


      <!-- section right -->
      <v-sheet id="container-right" class="card divcol acenter" style="--br: 20px; gap: 20px">
        <v-tabs
          v-model="currentTab" hide-slider
          style="
            height: 54px !important; max-height: 54px !important; min-height: 54px !important; --bg-active: hsl(43 100% 65% / .15);
            --w-tab: 82px; --g: 5px; --fw: 500; --c: var(--accent); margin-bottom: auto
          "
        >
          <v-tab v-for="item in dataControls" :key="item" class="tcap font3">
            {{item}}
          </v-tab>
        </v-tabs>


        <!-- create tab -->
        <v-form
          v-if="currentTab === 0" id="container-liquidity" ref="form-pool" class="divcol jspace font1 fill_w" style="gap: 12px"
          @submit.prevent="addLiquiidty()">
          <div class="fnowrap space" style="gap: inherit">
            <!-- card pools left -->
            <aside
              class="divcol" style="gap: inherit">
              <div class="container-options">
                <label>input</label>
                <div class="fnowrap" style="gap: 10px; --fb: max-content">
                  <v-chip
                    close close-icon="mdi-chevron-down" class="btn2 center" @click="$refs.tokens0.openModalTokens()"
                    @click:close="$refs.tokens0.openModalTokens()">
                    <v-img
                      :src="$liquidity.token0.logoURI" :alt="`${$liquidity.token0.name} token`"
                      class="aspect mr-2" style="--w: 20px; --of: cover"
                    > <template #placeholder>
                      <v-skeleton-loader type="avatar" />
                    </template></v-img>
                    <!-- <div v-else class="card aspect mr-2" style="--w: 20px; --br: 50%; --bg: #fff; --p: 0" /> -->

                    <span class="tup">{{$liquidity.token0.name}}</span>
                  </v-chip>

                  <v-btn @click="() => $liquidity.token0Amount = $liquidity.token0.balance.toFixed(2)" class="btn2">
                    <span>max</span>
                  </v-btn>
                </div>
              </div>

              <v-card class="card divcol" style="--bg: #292724">
                <div class="divcol">
                  <v-text-field
                    v-model="$liquidity.token0Amount"
                    solo
                    placeholder="0.00"
                    type="number"
                    hide-spin-buttons
                    class="custome"
                    @keyup="$event => $event.key === 'Enter' ? addLiquiidty() : ''"
                  >
                    <!-- <template #counter>
                      <label class="font1" style="--fs: max(18px, 1em)">~${{($liquidity.token0Amount / 2).formatter(true) || 0}} USD</label>
                    </template> -->
                  </v-text-field>
                </div>
                <label class="font1">Balance {{ $liquidity.token0.balance.toFormat(2) }}</label>
              </v-card>
            </aside>

            <center>
              <v-btn icon style="--p: 7px" class="nopevents">
                <v-icon>mdi-plus</v-icon>
              </v-btn>
            </center>

            <!-- card pools right -->
            <aside class="divcol" style="gap: inherit">
              <div class="container-options">
                <label>input</label>
                <div class="fnowrap" style="gap: 10px; --fb: max-content">
                  <v-chip
                    close close-icon="mdi-chevron-down" class="btn2 center" @click="$refs.tokens1.openModalTokens()"
                    @click:close="$refs.tokens1.openModalTokens()">
                    <v-img
                     :src="$liquidity.token1.logoURI" :alt="`${$liquidity.token1.name} token`"
                      class="aspect mr-2" style="--w: 20px; --of: cover">
                      <template #placeholder>
                      <v-skeleton-loader type="avatar" />
                    </template></v-img>
                    <!-- <div v-else class="card aspect mr-2" style="--w: 20px; --br: 50%; --bg: #fff; --p: 0" /> -->

                    <span class="tup">{{$liquidity.token1.name}}</span>
                  </v-chip>

                  <v-btn @click="() => $liquidity.token1Amount = $liquidity.token1.balance.toFixed(2)" class="btn2">
                    <span>max</span>
                  </v-btn>
                </div>
              </div>

              <v-card class="card divcol" style="--bg: #292724">
                <div class="divcol">
                  <v-text-field
                    v-model="$liquidity.token1Amount"
                    solo
                    hide-spin-buttons
                    placeholder="0.00"
                    type="number"
                    class="custome"
                    @keyup="$event => $event.key === 'Enter' ? addLiquiidty() : ''"
                  >
                    <!-- <template #counter>
                      <label class="font1" style="--fs: max(18px, 1em)">~${{($liquidity.token1AMount / 2).formatter(true) || 0}} USD</label>
                    </template> -->
                  </v-text-field>
                </div>
                <label class="font1">Balance {{ $liquidity.token1.balance.toFormat(2) }}</label>
              </v-card>
            </aside>
          </div>

          <!-- <v-card class="card space my-5 deletemobile" style="--bg: #292724; --br: 20px; --fs: 14px; gap: 10px">
            <div class="divcol" style="gap: 5px">
              <span class="hspan" style="--fw: 700">1306.67</span>
              <span class="hspan" style="--fw: 400">BERA per HONEY</span>
            </div>

            <div class="divcol" style="gap: 5px">
              <span class="hspan" style="--fw: 700">1306.67</span>
              <span class="hspan" style="--fw: 400">BERA per HONEY</span>
            </div>

            <div class="divcol" style="gap: 5px">
              <span class="hspan" style="--fw: 700">0%</span>
              <span class="hspan" style="--fw: 400">Share of Pool</span>
            </div>
          </v-card> -->

          <v-btn
            :disabled="!($liquidity.token0 && $liquidity.token1 && $liquidity.token0Amount && $liquidity.token1Amount)"
            :loading="addLiquidityLoading"
            class="btn mb-3" style="--bg: #FFCD4D; --fs: 21px; --h: 51px"
            @click="addLiquidity($refs['form-pool'])"
          >Add Liquidity</v-btn>

          <a class="hspan align" style="--c: var(--accent); --fs: 13px">
            <span class="tdeco">Get Tokens</span><v-icon size="1.5em">mdi-arrow-right-thin</v-icon>
          </a>
        </v-form>


        <!-- remove tab -->
        <v-sheet v-else id="container-remove" class="divcol fill_w" color="transparent" style="gap: 20px">
          <template v-if="!($liquidity.currentRemovePair)">
            <v-card :loading="$liquidity.liquidityLoading" v-for="(item, i) in $liquidity.myPairs" :key="i" class="card space" style="--b: 3px solid #292724; --br: 20px; --p: 20px; --h: 85px">
              <div class="center font2" style="gap: 10px">
                <!-- <v-sheet class="dual-tokens" color="transparent">
                  <img :src="require(`~/assets/sources/tokens/${item.tokenA}.svg`)" :alt="`${item.tokenA} token`" class="aspect">
                  <img :src="require(`~/assets/sources/tokens/${item.tokenB}.svg`)" :alt="`${item.tokenB} token`" class="aspect">
                </v-sheet> -->

                <span class="hspan tup" style="--fs: 21px; --fw: 700">{{item.poolName}}</span>
              </div>

              <v-btn
                class="btn2 font3" style="--b: 1px solid #292724; --br: 30px; --p: 11px 12px"
                @click="$liquidity.setCurrentRemovePair(item)"
              >
                <span style="--c: var(--accent); --fw: 500: --fs: 14">Remove</span>
              </v-btn>
            </v-card>
          </template>


          <template v-else>
            <h3 class="font2 tcenter mb-10" style="--fs: 36px; --fw: 700">{{withdrawSelected}}%</h3>

            <aside id="withdraw-buttons" class="spacea fwrap align" style="gap: 10px">
              <v-btn
                v-for="item in dataWithdrawPercent" :key="item"
                class="btn" :class="{active: item === withdrawSelected}"
                @click="withdrawSelected = item"
              >
                {{item}}%
              </v-btn>
            </aside>

            <v-sheet class="card divcol align my-3" style="--br: 10px; --bg: #292724; --p: 1.1em; gap: 15px; --max-w: 362px; --w: 100%">
              <div class="space" style="gap: 20px">
                <div class="center font2" style="gap: 10px">
                  <!-- <img
                    :src="require(`~/assets/sources/tokens/${removeSelected.tokenA}.svg`)" :alt="`${removeSelected.tokenA} token`"
                    style="--w: 27.79px; --of: cover"
                  > -->
                  <span class="hspan tup" style="--fs: 21px; --fw: 700">{{$liquidity.currentRemovePair.token0.name}}</span>
                </div>

                <span class="hspan" style="--fs: 14px">{{ $liquidity.currentRemovePair.token0LpBalance.toFixed(2) }}</span>
              </div>

              <div class="space" style="gap: 20px">
                <div class="center font2" style="gap: 10px">
                  <!-- <img
                    :src="require(`~/assets/sources/tokens/${removeSelected.tokenB}.svg`)" :alt="`${removeSelected.tokenB} token`"
                    style="--w: 27.79px; --of: cover"
                  > -->
                  <span class="hspan tup" style="--fs: 21px; --fw: 700">{{$liquidity.currentRemovePair.token1.name}}</span>
                </div>

                <span class="hspan" style="--fs: 14px">{{ $liquidity.currentRemovePair.token1LpBalance.toFixed(2) }}</span>
              </div>
            </v-sheet>

            <v-btn @click="removeLiquidity()"  :loading="removeLiquidityLoading" class="btn" style="--w: 100%; --h: 51px; --fs: 21px">
              Withdraw
            </v-btn>
          </template>
        </v-sheet>
      </v-sheet>
    </section>
  </div>
</template>

<script>
import computeds from '~/mixins/computeds'

export default {
  name: "PoolsCreatePage",
  mixins: [computeds],

  data() {
    return {
      addLiquidityLoading: false,
      removeLiquidityLoading: false,
      dataControls: ["create", "remove"],
      currentTab: 0,
      firstToken: {
        img: undefined,
        name: "select",
        amount: undefined,
      },
      secondToken: {
        img: undefined,
        name: "select",
        amount: undefined,
      },
      isLiquidityAdded: false,
      // poolList: [
      //   {
      //     tokenA: "btc",
      //     tokenB: "usdc",
      //     poolName: "btc-usdc",
      //   },
      //   {
      //     tokenA: "hny",
      //     tokenB: "database",
      //     poolName: "hny-bear",
      //   },
      //   {
      //     tokenA: "btc",
      //     tokenB: "usdc",
      //     poolName: "btc-usdc",
      //   },
      // ],
      removeSelected: undefined,
      dataWithdrawPercent: [25, 50, 75, 100],
      withdrawSelected: 50,
    }
  },

  head() {
    const title = 'Create Pools';
    return {
      title,
    }
  },

  watch: {
    currentTab() {
      this.removeSelected = undefined
    }
  },
  methods: {
    async addLiquidity() {
      if (!this.$liquidity.token0 || !this.$liquidity.token1 || !this.$liquidity.token0Amount || !this.$liquidity.token1Amount) {
        this.$alert("cancel", "Please fill all fields")
        return
      }
      this.addLiquidityLoading = true
      await this.$liquidity.addLiquidity(this.$liquidity.token0, this.$liquidity.token1, this.$liquidity.token0Amount, this.$liquidity.token1Amount)
      this.addLiquidityLoading = false
      this.$alert("success", "Liquidity added successfuly")
      // await this.$liquidity.getPools()
    },
    async removeLiquidity() {
      // if (!this.$liquidity.currentPair) {
      //   this.$alert("cancel", "There are no pairs for this token")
      //   return
      // }
      this.removeLiquidityLoading = true
      console.dir(this.$liquidity.currentRemovePair)
      await this.$liquidity.currentRemovePair.removeLiquidity(this.withdrawSelected)
      this.removeLiquidityLoading = false
      this.$alert("success", "Liquidity removed successfuly")
      // await this.$liquidity.getPools()
    },
  },

};
</script>

<style src="~/assets/styles/pages/pools-create.scss" lang="scss" />
