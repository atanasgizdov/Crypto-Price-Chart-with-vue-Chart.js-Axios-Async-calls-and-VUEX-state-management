<template>
  <div id="app">

    <nav>
        <ul>
            <li v-for='link in links' :key='link'>
                <router-link :to='names[link]' exact>{{ link }}</router-link>
            </li>
        </ul>
    </nav>

<router-view></router-view>

  </div>

</template>

<script>
//import ShowProducts from './components/ShowProducts.vue'
//import ShowFeatured from './components/ShowFeatured.vue'
//import ShowCategories from './components/ShowCategories.vue'

export default {
  name: 'app',
  components: {
    //ShowProducts,
    //ShowFeatured,
    //ShowCategories
  },
  data() {
    return {
      products: ["1"],
      links: ['Home', 'Favorites', 'Etherium', 'Litecoin', 'BitcoinCash', 'Bitcoin'],
      names: {
        Home: '/',
        Bitcoin: 'bitcoin',
        Etherium: 'etherium',
        Litecoin: 'litecoin',
        BitcoinCash: 'bitcoincash',
        Favorites: 'favorites'
        }
      }
  },
  methods: {
  }
}
</script>

<style lang='scss'>
@import '../node_modules/bootstrap/scss/bootstrap.scss'
</style>
