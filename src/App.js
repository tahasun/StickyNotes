import { useState } from 'react'
// Components
import Note from './components/Note'
import AddNote from './components/AddNote'
import Filter from './components/Filter'
import Grid from '@mui/material/Grid'

// Styles
import { Wrapper, Header } from './App.styles.js'


function App() {
  const [notes, setNotes] = useState([
    {
      "id": 1,
      "title": "Doctors Appointment",
      "desc": "",
      "date": "5/2/2022",
      "category": "home"
    },
    {
      "id": 2,
      "title": "Meeting",
      "desc": "To discuss new project",
      "date": "7/2/2022",
      "category": "work"
    },
    {
      "id": 3,
      "title": "Weekend Grocery Shopping",
      "desc": "",
      "date": "7/2/2022",
      "category": "home"
    },
    {
      "id": 4,
      "title": "Morning Yoga",
      "desc": "",
      "date": "3/2/2022",
      "category": "personal"
    }
  ])

  const allCategories = ['work', 'home', 'personal']
  const [display, setDisplay] = useState({
    work: true,
    home: true,
    personal: true
  })

  // Add a Note
  const addNote = (note) => {
    const id = Math.floor(Math.random()*1000) + 1
    const newNote = { id, ...note }
    setNotes([...notes, newNote])
  }

  // Delete Note
  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id))
  }
  
  // Filter Notes
  const handleFilter = (category) => {
    const value = display[category]
    setDisplay({...display, [category] : !value})
  }


  return (
    <Wrapper>
      <Header direction="row" spacing={10}>
        <h1>My Notes</h1>
        {allCategories.map((category) => (
          <Filter key={allCategories.indexOf(category)} 
                  category={category}
                  status = {display[category]} 
                  onFilter={handleFilter}/>
        ))}
      </Header>
    
      <Grid container rowSpacing={12} columnSpacing={{xs:6, md:10}}>
        <Grid item xs={6} md={4}> 
          <AddNote onAdd={addNote}/>
        </Grid>
        {notes.filter(note => display[note.category]).map(filteredNote => (
          <Grid key={filteredNote.id} item xs={6} md={4}> 
            <Note note={filteredNote} onDelete={deleteNote} />
          </Grid> 
        ))}
      </Grid>
    </Wrapper>
  );
}

export default App;
