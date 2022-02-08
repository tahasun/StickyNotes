import { useState } from 'react'
import styled from 'styled-components'

import TextField from "@mui/material/TextField"
import FormControl from "@mui/material/FormControl"
import Select from "@mui/material/Select"
import InputLabel from "@mui/material/InputLabel"
import MenuItem from "@mui/material/MenuItem"
import Button from "@mui/material/Button"

const FormContainer = styled.div`
    background-image: linear-gradient(to bottom right, #FFDD94, #D0E6A5);
    height: 100%;
    padding: 2rem;
    border-radius: 10px;

    form {
        display: flex;
        flex-direction: column;
        justify-content: baseline;
        align-items: space-between;
    }

    Button {
        margin-top: 20px;
    }
`;

const AddNote = ({ onAdd }) => {

    const emptyForm = {
        date: "",
        title: "",
        desc: "",
        category: ""
    }

    const [formValues, setFormValues] = useState(emptyForm)

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormValues({
            ...formValues,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        onAdd(formValues)
        setFormValues(emptyForm)
    }
    
    
    return (
    <FormContainer>
        <h1>Add a Note...</h1>
        <form onSubmit={handleSubmit}>
            <TextField
                fullWidth
                margin="normal"  
                variant="standard"
                id="date-input"
                name="date"
                label="Date"
                type="text"
                value={formValues.date}
                onChange={handleInputChange}
            />

            <TextField
                fullWidth 
                margin="normal" 
                variant="standard"
                id="title-input"
                name="title"
                label="Title"
                type="text"
                value={formValues.title}
                onChange={handleInputChange}
            />

            <TextField
                fullWidth 
                margin="normal" 
                variant="standard"
                id="desc-input"
                name="desc"
                label="Description"
                type="text"
                value={formValues.desc}
                onChange={handleInputChange}
            />

            <FormControl fullWidth  margin="normal" >
                <InputLabel id="">Category</InputLabel>
                <Select
                name="category"
                variant="standard"
                value={formValues.category}
                onChange={handleInputChange}
                >
                <MenuItem key="work" value="work">
                    Work
                </MenuItem>
                <MenuItem key="home" value="home">
                    Home
                </MenuItem>
                <MenuItem key="personal " value="personal">
                    Personal
                </MenuItem>
                </Select>
            </FormControl>

            <Button color="success" variant="contained" type="submit"> Submit </Button>
        </form>
    </FormContainer>
    
    );
};

export default AddNote
