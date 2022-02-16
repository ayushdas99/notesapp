import React from "react";
import { useState } from "react";

const AddNote = ({ handleAddNote }) => {
    const[noteText, setNoteText] = useState('');

    const handleChange = (event) => {
        setNoteText(event.target.value);
    };

    const handleSaveClick = () => {
        handleAddNote(noteText);

    }
    return(
        <div className="note new">
        <textarea
        rows='8'
        columns='10'
        placeholder='Type to add note!'
        value={noteText}
        onChange={handleChange}
        ></textarea>
        <button className="save" onClick={handleSaveClick}>Save</button>
        </div>
    )
};

export default AddNote;



