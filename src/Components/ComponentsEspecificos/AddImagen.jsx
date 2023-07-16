import React from 'react'

export const AddImagen = () => {
  return (
    <div>
        <h1>Subir Imagen</h1>
        <form action="/upload" method='POST' encType='multipart/form-data'>
            <input type="file" name="inputImagen"/>
            <input type="submit" value={"Subir"} />
        </form>
    </div>
  )
}
