import React, {useState } from 'react'
import { Box } from '@mui/material'
import axios from 'axios';

const SubirImagen = () =>{
const [file, setFile] = useState();

    const handleFile = (e) =>{
        setFile(e.target.files[0])
    }
    const handleUpload = () => {
         const formdata = new FormData();
         formdata.append('image', file)
         axios.post('http://localhost:3000/vehiculo/upload', formdata)
         .then(res => console.log(res))
         .catch(err => console.log(err));
    }
return(
    <Box>
        <input  type='file' onChange={handleFile}/>
        <button onClick={handleUpload}> Guardar</button>
    </Box>
)
}

export default SubirImagen