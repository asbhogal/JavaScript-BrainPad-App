export default class notesApi {
  static getAllNotes() {
    const notes = JSON.parse(localStorage.getItem("notesapp-notes") || "[]");
    notes.sort((a, b) => a.date - b.date);
    return notes;
  }

  static saveNotes(noteToSave) {}

  static deleteNotes(id) {}
}
