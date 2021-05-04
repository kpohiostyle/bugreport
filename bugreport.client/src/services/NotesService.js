import { AppState } from '../AppState.js'
import { api } from './AxiosService.js'
class NotesService {
  async createNote(newNote, id) {
    await api.post('api/notes', newNote)
    this.getNotesByBug(id)
  }

  async getNotesByBug(bug) {
    const res = await api.get(`api/bugs/${bug}/notes`)
    AppState.notes = res.data
  }

  async deleteNote(id, bugId) {
    await api.delete(`api/notes/${id}`)
    this.getNotesByBug(bugId)
  }
}

export const notesService = new NotesService()
