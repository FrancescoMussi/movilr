<template>
  <div class="field has-addons">
    <div class="control is-expanded">
      <input
        class="input has-text-centered"
        type="search"
        placeholder="Search..."
        v-model="query"
        @input="resetNotification"
      />
      <span class="icon is-small is-left">
        <font-awesome-icon icon="search" class="input__icon" />
      </span>
    </div>
  </div>
</template>

<script>
import debounce from "../plugins/debounce";
export default {
  name: "SearchInput",
  data() {
    return {
      query: ""
    };
  },
  watch: {
    query: debounce(function(newVal) {
      this.$store.commit("updateShows", []);
      this.$store
        .dispatch("getFilteredShows", newVal)
        .then(response => {
          if (response.data.length === 0 && newVal !== '') {
            this.$store.commit("updateShowNotificationError", true);
            this.$store.commit(
              "updateNotificationErrorMessage",
              "We didn't have any TV show matching your search. Please try again with a different keyword!"
            );
          }
        })
        .catch(error => {
          this.$store.commit("updateShowNotificationError", true);
            this.$store.commit(
              "updateNotificationErrorMessage",
              "Something went wrong while retrieving the data. Please try again!"
            );
        });
    }, 500)
  },
  methods: {
    resetNotification() {
      this.$store.commit("updateShowNotificationError", false);
    }
  }
};
</script>

<style lang="scss" scoped>
.field {
  width: 40%;
  margin: auto;
  margin-top: 5%;
}
.input {
  background-color: #f5f7f9;
}
.input__icon {
  color: grey;
  height: 2.25em;
  position: absolute;
  top: 0;
  width: 0.9rem;
  right: 15px;
}
</style>
