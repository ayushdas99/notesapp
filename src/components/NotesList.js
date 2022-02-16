import React from "react";
import Note from "./Notes";
import AddNote from "./AddNote";

const  NotesList = ({ notes, handleAddNote, handleDeleteNode }) => {
    return(
        <div className="notes-list">
            {notes.map((note) => (
                <Note 
                id={note.id} 
                text={note.text} 
                date={note.date} 
                handleDeleteNode={handleDeleteNode}
                />
            ))}
            <AddNote handleAddNote = {handleAddNote} />
           
        </div>
    )
};

export default NotesList;