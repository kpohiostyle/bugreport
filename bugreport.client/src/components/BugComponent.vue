<template>
  <div class="card-custom col-12 shadow">
    <div class="border-custom d-flex flex-direction justify-content-between inline">
      <router-link :to="{name: 'BugDetails', params: {id: bug.id}}">
        <p class="py-3 pl-2">
          title
        </p>
      </router-link>
      <p class="py-3 pl-2">
        Reported By
      </p>
      <p class="py-3 pl-2">
        Status
      </p>
      <p class="py-3 pl-2">
        Last Modified
      </p>
    </div>
  </div>
</template>
<script>

export default {
  name: 'BugComponent',
  props: {
    list: {
      type: Object,
      required: true
    }
  },
  setup() {
    return {}
  },
  components: {}
}
</script>
<style lang="">

</style>
