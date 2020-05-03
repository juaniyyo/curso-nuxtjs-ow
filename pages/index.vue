<template>
  <div>
    <Hero @onShowBanner="changeShowBanneValue">
      <Banner slot="header" style="width: 790px" v-if="showBanner" />
      <Slogan slot="header" style="width: 790px" v-else />
    </Hero>
    <div class="container">
      <section class="section">
        <h1 class="title is-1">FoodAvisor</h1>
        <div class="columns is-multiline">
          <RestaurantCard
            class="restaurant-card"
            :image="restaurant.image"
            :name="restaurant.name"
            :description="restaurant.description"
            :category="restaurant.category"
            :slug="restaurant.slug"
            :likes="restaurant.likes"
            v-on:onLikeButton="sumLikes(restaurant)"
            v-for="(restaurant, i) in restaurants"
            :key="i"
          />
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import RestaurantCard from '~/components/RestaurantCard'
import Hero from '~/components/Hero'
import Banner from '~/components/Banner'
import Slogan from '~/components/Slogan'
//import api from '~/services/api'
import { db } from '~/plugins/firebase'

export default {
  components: {
    RestaurantCard,
    Hero,
    Banner,
    Slogan
  },
  created() {
    this.getData()
  },
  // async asyncData() { // Metodo con la api creada por nosotros
  //   try {
  //     const { data } = await api.getRestaurants()
  //     return { restaurants: data }
  //   } catch (error) {
  //     return { restaurants: [] }
  //   }
  // },
  // async created() { // metodo desde api pero en created()
  //   const response = await api.getRestaurants()
  //   if (response.status == 200) {
  //     this.restaurants = response.data
  //   }
  // },
  data() {
    return {
      likes: 0,
      showBanner: true,
      restaurants: []
    }
  },
  methods: {
    // async sumLikes(restaurant) {
    //   const payload = {
    //     id: restaurant.id,
    //     data: {
    //       likes: restaurant.likes + 1
    //     }
    //   }
    //   const response = await api.putSumRestaurantLikes(payload)
    //   if (response.status == 200) {
    //     restaurant.likes++
    //   }
    // },
    getData() {
      // Metodo con la api de firebase
      const data = db.collection('restaurants').get()
      data
        .then((snapshot) => {
          snapshot.forEach((doc) => {
            const restaurant = {
              id: doc.id,
              ...doc.data()
            }
            this.restaurants.push(restaurant)
          })
        })
        .catch((error) => {
          console.log(error)
        })
    },
    sumLikes(restaurant) {
      const ref = db.collection('restaurants').doc(restaurant.id)
      const response = ref.update({ likes: restaurant.likes + 1 })
      response
        .then(() => {
          restaurant.likes++
        })
        .catch((error) => {
          console.log(error)
        })
    },
    changeShowBanneValue() {
      this.showBanner = !this.showBanner
    }
  }
}
</script>

<style scoped>
.restaurant-card {
  margin: 10px 10px;
  max-width: 300px;
}
</style>
