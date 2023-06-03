import "/src/styles/index.scss";
import notesAPI from "./src/js/notesAPI";

notesAPI.saveNotes({
  title: "New note",
  body: "New note text",
});

console.log(notesAPI.getAllNotes());
