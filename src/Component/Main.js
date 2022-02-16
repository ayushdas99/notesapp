import { nanoid } from 'nanoid';
import React from 'react';
import { useState, useEffect } from 'react';
import '../App.css';
import NotesList from '../components/NotesList';
import Search from '../components/Search';
import Header from '../components/Header';



const Main = () => {
  return(
      <p>Heyyy</p>
  )
    const[notes, setNotes] = useState([
    {
    id: nanoid(),
    text: "My first note!",
    date: "14/02/2022",
  },
  {
    id: nanoid(),
    text: "The most important day of my life!",
    date: "14/02/2022",
  },
  {
    id: nanoid(),
    text: "When people thought coding was tough!",
    date: "14/02/2022",
  },
  {
    id: nanoid(),
    text: "Memories for a lifetime!",
    date: "14/02/2022",
  },
  {
    id: nanoid(),
    text: "Last but certainly not the least!",
    date: "14/02/2022",
  }]);

  const[searchText, setSearchText] = useState('')

  const[darkMode, setDarkMode] = useState(false); 

  useEffect(() => {
    localStorage.setItem('notes-app', JSON.stringify(notes));

  }, [notes])

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id )
    setNotes(newNotes);
  };


  return(

    
    <div className={`${darkMode && 'dark-mode'}`}>
    <div className='container'>
      <Header handleToggleDarkMode={setDarkMode} />
      <Search handleSearchNote={setSearchText} />
      <NotesList notes={notes.filter((note) =>
						note.text.toLowerCase().includes(searchText)
					)}
      handleAddnote={addNote}
      handleDeleteNote={deleteNote}
      
      />
    </div>
    </div>

   
    
    

  );
};

export default Main;
