import "/src/styles/index.scss";
import NotesAPI from "./src/js/notesAPI";

NotesAPI.saveNote({
  title: "New note",
  body: "New note text",
});

console.log(NotesAPI.getAllNotes());
