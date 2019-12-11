<template>

<div id="app">

  <!-- Add and remove favorites -->

  <h1>Favorites</h1>
  <div v-for="(coin,n) in this.$store.state.favorite_coins" :key='n'>
    <p>
    <span class="coin">{{coin}}</span>
    <router-link :to='coin' tag="button" class = 'button'>See Asset</router-link>
    <button @click="removeCoin(n)" class = 'button'> Remove</button>
    </p>
  </div>

  <p>
    <select v-model="newCoin">
      <option disabled value="">Please select</option>
      <option v-for='(coin,n) in coins_library' v-bind:value='coin' :key = 'n'>
        {{coin}}
      </option>
    </select>
    <button @click="addCoin" class = ' button' >Add to favorites</button>
  </p>

  <!-- Vuelidate form section -->

  <br>

  <h1> Vuelidate Form verification </h1>
  <h5> Please enter your name below and click Submit </h5>

  <form @submit.prevent="submit">
    <div class="form-group" :class="{ 'form-group--error': $v.name.$error }">
      <label class="form__label">Name:</label>
      <input class="form__input" v-model.trim="$v.name.$model"/>
    </div>
    <div class="error" v-if="!$v.name.required">Name is required</div>
    <div class="error" v-if="!$v.name.minLength">Name must have at least {{$v.name.$params.minLength.min}} letters.</div>
    <button class="button" type="submit" :disabled="submitStatus === 'PENDING'">Submit!</button>
    <p class="typo__p" v-if="submitStatus === 'OK'">Thanks for your submission!</p>
    <p class="typo__p" v-if="submitStatus === 'ERROR'">Please fill the form correctly.</p>
    <p class="typo__p" v-if="submitStatus === 'PENDING'">Sending...</p>
</form>


</div>

</template>

<script>

import { required, minLength } from 'vuelidate/lib/validators'

export default {
  name: 'favorites',
  data() {
    return {
      //favorites data
      //refactored to use VUEX state manager instead of local component date
      //favorite_coins:[],
      newCoin: null,
      coins_library: ['etherium', 'litecoin', 'bitcoincash', 'bitcoin'],
      //form data
      name: '',
      submitStatus: null
      }
  },

  validations: {
    name: {
      required,
      minLength: minLength(4)
    }
  },

  mounted() {

    if(localStorage.getItem('favorite_coins')) {
      try {
        //refactored to use VUEX state manager instead of local component date
        //this.favorite_coins = JSON.parse(localStorage.getItem('favorite_coins'));
        this.$store.commit('setFavoriteCoins', JSON.parse(localStorage.getItem('favorite_coins')));
        console.log(this.$store.state.favorite_coins)
      } catch(e) {
        localStorage.removeItem('favorite_coins');
        //console.log(this.$store.state.favorite_coins)
      }
    }
  },

  methods: {
    //favorites methods
    addCoin() {
      // ensure they actually typed something
      if(!this.newCoin) return;
      //refactored to use VUEX state manager instead of local component date
      this.$store.commit('addCoin', this.newCoin)
      //this.favorite_coins.push(this.newCoin);
      this.newCoin = '';
      this.saveCoin();
      console.log(this.$store.state.favorite_coins)
    },
    removeCoin(x) {
      //refactored to use VUEX state manager instead of local component date
      this.$store.commit('removeCoin', x)
      //this.favorite_coins.splice(x,1);
      this.saveCoin();
    },
    saveCoin() {
      //refactored to use VUEX state manager instead of local component date
      let parsed = JSON.stringify(this.$store.state.favorite_coins)
      //let parsed = JSON.stringify(this.favorite_coins);
      localStorage.setItem('favorite_coins', parsed);
    },
    //form validation methods
    submit() {

      this.$v.$touch()
      if (this.$v.$invalid) {
        this.submitStatus = 'ERROR'
      } else {
        // do your submit logic here
        this.submitStatus = 'PENDING'
        setTimeout(() => {
          this.submitStatus = 'OK'
        }, 1000)
      }
    }
  }

}

</script>

<style>
.coin, .form__label  {
  padding-right: 10px
}

.button, .error {
  border-radius: 10px;
  margin-left: 10px;
  padding: 2px
}
</style>
