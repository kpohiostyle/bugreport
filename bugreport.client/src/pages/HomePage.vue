<template>
  <div class="container-fluid">
    <div class="home flex-grow-1 d-flex flex-column">
      <div class="row">
        <div class="col-md-6">
          <div class="d-flex flex-direction inline ml-2 mt-3">
            <h1 class="mr-2">
              Current Bugs
            </h1>
            <button title="Open Create Bug Form" type="button" class="btn" data-toggle="modal" data-target="#exampleModal">
              <i class="fas fa-plus" aria-hidden="true">Bug</i>
            </button>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col">
          <BugComponent v-for="bug in state.bugs" :key="bug.id" :bug="bug" />
        </div>
      </div>
    </div>
  </div>

  <!-- BEGINNING OF MODAL -->
  <div class="modal fade" id="new-bug-form" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">
            Add A Bug To List
          </h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="createBug">
            <div class="form-group">
              <label for="title">Title</label>
              <input type="text"
                     class="form-control"
                     id="title"
                     aria-describedby="title"
                     placeholder="Bug Title"
                     v-model="state.newBug.title"
                     required
              >
            </div>
            <div class="form-group">
              <label for="comment">Comment</label>
              <input type="text"
                     class="form-control"
                     id="comment"
                     aria-describedby="comment"
                     placeholder="Bug Comment"
                     v-model="state.newBug.description"
                     required
              >
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">
            Close
          </button>
          <router-link :to="{name: 'BugDetails', params:{id: bug.id}}">
            <button type="submit" class="btn btn-primary">
              Add
            </button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue'
import { bugsService } from '../services/BugsService'
import $ from 'jquery'
export default {
  name: 'Home',
  setup() {
    const state = reactive({
      newBug: {}
    })
    return {
      state,
      async createBug() {
        try {
          await bugsService.createBug(state.newBug)
          state.newBug = {}
          $('new-bug-form').modal('hide')
          Notification.toast('Added Bugt', 'success')
        } catch (error) {
          Notification.toast('Error:' + error, 'error')
        }
      }
    }
  }
}
</script>

<style scoped lang="scss">
.home{
  text-align: center;
  user-select: none;
  > img{
    height: 200px;
    width: 200px;
  }
}
.btn{
  color: aquamarine;
}
.btn:hover{
  background-color: aquamarine;
  color:white;
}
</style>
