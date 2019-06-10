<template>
  <div
    class="notification is-danger"
  >
    <button class="delete"></button>
    {{ message }}
  </div>
</template>

<script>
export default {
  name: "NotificationError",
  computed: {
    message() {
      return this.$store.state.notificationErrorMessage;
    },
  },
};
</script>

<style></style>
