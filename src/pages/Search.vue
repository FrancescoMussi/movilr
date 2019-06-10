<template>
  <div class="page-container">
    <SearchInput />
    <div v-if="showsFiltered" class="cards-container">
      <span
        class="card-container"
        v-for="({ show }, index) in showsFiltered"
        :key="index"
      >
        <transition-group
          name="staggered-fade"
          appear
          v-on:before-enter="beforeEnter"
          v-on:enter="enter"
          v-on:leave="leave"
        >
          <Card :show="show" :key="index"></Card>
        </transition-group>
      </span>
    </div>
    <NotificationError v-if="showNotification"/>
  </div>
</template>

<script>
import SearchInput from "../components/SearchInput.vue";
import Card from "../components/Card.vue";
import NotificationError from "../components/NotificationError.vue";
import Velocity from 'velocity-animate'
export default {
  name: "Search",
  components: { SearchInput, Card, NotificationError },
  computed: {
    showsFiltered() {
      return this.$store.state.shows;
    },
    showNotification() {
      return this.$store.state.showNotificationError;
    }
  },
  methods: {
    beforeEnter: function(el) {
      el.style.opacity = 0;
    },
    enter: function(el, done) {
      var delay = 350;
      setTimeout(function() {
        Velocity(el, { opacity: 1 }, { complete: done });
      }, delay);
    },
    leave: function(el, done) {
      var delay = 350;
      setTimeout(function() {
        Velocity(el, { opacity: 0 }, { complete: done });
      }, delay);
    }
  }
};
</script>

<style scoped lang="scss">
.page-container {
  width: 100%;
}
.cards-container {
  display: flex;
  flex-wrap: wrap;
  width: 85%;
  margin: auto;
}
.card-container {
  margin-bottom: 25px;
}
.notification {
  width: 60%;
  margin: auto;
}
</style>
