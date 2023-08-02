import React, { useEffect, useState, useRef } from "react";
import { Modal } from "react-bootstrap";
import { UserContext } from "../Contexts/UserContext";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
// import { updateData } from "../Features/apiCalls";
import axios, { formToJSON } from 'axios';
const PopUpImagen = ({
  campos,
  titulo,
  valorInicial,
  actualiza,
  link,
  id,
  ...props
}) => {
  const [file, setFile] = useState();
  const [selectedRow,setSelectedRow]= useState(false)

    const handleFile = (e) =>{
        setFile(e.target.files[0])
    }

    useEffect(() => {
      axios.get('http://localhost:3000/vehiculo/image')
      .then(res => console.log(res))
      .catch(err => console.log(err));
    }, []) 
    
    const handleUpload = () => {
         const formdata = new FormData();
        formdata.append('vehiculo', id)
         formdata.append('image', file)
         axios.post('http://localhost:3000/vehiculo/upload', formdata)
         .then(res =>{ console.log(formToJSON(formdata))
          if(res.data.status === "Success"){
            console.log("Succeded")
          } else {
            console.log("Failed")
          }
         })
         .catch(err => console.log(err));
    }
  return (
    <Modal
      {...props}
      size="ls"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">{titulo}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
      <Box>
        <input  type='file' onChange={handleFile}/>
        <button onClick={handleUpload}> Guardar</button>
    </Box>
        </div>
      </Modal.Body>
      <Modal.Footer></Modal.Footer>
    </Modal>
  );
};

export default PopUpImagen;
