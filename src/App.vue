<template>
  <div>
    Name: <input
      v-model="name"
      class="hello-form"
      type="text" >
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      name: 'World!',
    };
  },
});
</script>

<style scoped>
.hello-form {
  background-color: aqua;
}
</style>
