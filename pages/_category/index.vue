<template>
  <div class="container">
    <section class="section">
      <h1 class="title is-1">{{ $route.params.category }}</h1>
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul>
          <li>
            <nuxt-link to="/">Home</nuxt-link>
          </li>
          <li class="is-active">
            <a href="#" aria-current="page">{{ $route.params.category }}</a>
          </li>
        </ul>
      </nav>
      <div class="container">
        <section class="section">
          <div class="columns">
            <RestaurantCard
              :name="restaurant.name"
              :description="restaurant.description"
              :slug="restaurant.slug"
              :category="restaurant.category"
              :likes="restaurant.likes"
              :image="restaurant.image"
              class="restaurant-card"
              v-for="(restaurant, index) in restaurants"
              :key="index"
            />
          </div>
        </section>
      </div>
    </section>
  </div>
</template>

<script>
import RestaurantCard from '~/components/RestaurantCard'
//import api from '~/services/api'
import { db } from '~/plugins/firebase'

export default {
  components: {
    RestaurantCard
  },
  data() {
    return {
      restaurants: []
    }
  },
  // async asyncData({ params }) {
  //   try { Metodo api
  //     const payload = {
  //       category: params.category
  //     }
  //     const { data } = await api.getRestaurantsByCategory(payload)
  //     return { restaurants: data }
  //   } catch (error) {
  //     console.log({ statusCode: 404, message: 'Category not found' })
  //   }
  // }
  async created() {
    await db
      .collection('restaurants')
      .where('category', '==', this.$route.params.category)
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          this.restaurants.push(doc.data())
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }
}
</script>
<style>
.restaurant-card {
  margin: 10px 20px;
  min-width: 300px;
}
</style>
