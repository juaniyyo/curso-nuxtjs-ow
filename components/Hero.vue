<template>
  <section class="hero is-info">
    <div class="hero-body">
      <button @click="$emit('onShowBanner')" class="button is-danger">Show Banner</button>
      <slot class="container" name="header"></slot>
    </div>
  </section>
</template>
