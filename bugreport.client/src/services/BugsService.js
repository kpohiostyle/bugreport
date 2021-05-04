import { AppState } from '../AppState.js'
import { api } from './AxiosService.js'

class BugsService {
  async getBugs() {
    const res = await api.get('api/bugs')
    AppState.bugs = res.data
  }

  async getBugById(id) {
    const res = await api.get(`api/bugs/${id}`)
    AppState.activeBug = res.data
  }

  async createBug(newBug) {
    const res = await api.post('api/bugs', newBug)
    this.getBugs(res.data)
  }

  // TODO finish editBug
  async editBug(body) {
    await api.get('api/bugs')
    if (document.getElementById('hideBugs').checked) {
      AppState.bugs = AppState.bugs.filter(b => b.closed !== true)
    } else {
      this.getBugs()
    }
  }

  async deleteBug(activeBug, id) {
    await api.delete(`api/bugs/${id}`)
    if (activeBug.closed === false) {
      AppState.activeBug.closed = true
    }
    // this.getBugs()
    // this.getBugById(id)
  }

  async hideBugs() {
    await api.get('api/bugs')
    if (document.getElementById('hideBugs').checked) {
      AppState.bugs = AppState.bugs.filter(b => b.closed !== true)
    } else {
      this.getBugs()
    }
  }
}

export const bugsService = new BugsService()
