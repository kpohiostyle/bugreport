<template>
  <div class="card-custom col-12 col-md-11 shadow mt-1 bg-light">
    <div class="border-custom d-flex flex-direction justify-content-between inline">
      <router-link :to="{name: 'BugDetails', params: {id: bug.id}}">
        <p class="py-3 pl-2">
          {{ bug.title }}
        </p>
      </router-link>
      <p class="py-3 pl-2">
        <img class="rounded-circle small-image" :src="bug.creator.picture" alt="Creator Picture">
        {{ bug.creator.name }}
      </p>
      <p class="py-3 pl-2 text-danger" v-if="bug.closed===true">
        Closed
      </p>
      <p class="py-3 pl-2 text-success" v-if="bug.closed===false">
        Open
      </p>
      <p class="py-3 pl-2">
        {{ new Date (bug.updatedAt).toLocaleString('en', 'time') }}
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'BugComponent',
  props: {
    bug: {
      type: Object,
      required: true
    }
  },
  setup() {
    return {
      time: {
        year: '2-digit',
        month: '2-digit',
        day: '2-digit'
      }
    }
  },
  components: {}
}
</script>
<style scoped>
.small-image{
  height: 50px;
  width: 50px;
}
</style>
