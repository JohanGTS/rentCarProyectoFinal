import React from "react";
import FormDinamico from "../Components/FormDinamico";
export const AdminHome = ({campos,link}) => {
  const fields = [
    {
      id: "name",
      label: "Name",
      type: "text",
      placeholder: "Enter your name",
      fullWidth: false,
    },
    {
      id: "apellido",
      label: "Apellido",
      type: "text",
      placeholder: "Enter your last name",
      fullWidth: false,
    },
    {
      id: "country",
      label: "Country",
      busca: true,
      options: ["USA", "Canada", "Mexico"],
      fullWidth: true,
    },
    {
      id: "email",
      label: "Email",
      type: "email",
      placeholder: "Enter your email",
      fullWidth: false,
    },
  ];

  const Color = [
    {
      id: "id_Color_col",
      label: "Id del color",
      type: "text",
      placeholder: "Digite el id del color",
      fullWidth: true,
    },
    {
      id: "Descripcion_col",
      label: "Nombre del color",
      type: "text",
      placeholder: "Digite el color",
      fullWidth: true,
    },
  ];
  const Combustible = [
    {
      id: "id_Combustible_com",
      label: "Id del combustible",
      type: "text",
      placeholder: "Digite el id del combustible",
      fullWidth: true,
    },
    {
      id: "Descripcion_com",
      label: "Nombre del combustible",
      type: "text",
      placeholder: "Digite el combustible",
      fullWidth: true,
    },
  ];
  const Ciudad = [
    {
      id: "id_Combustible_com",
      label: "Id del combustible",
      type: "text",
      placeholder: "Digite el id del combustible",
      fullWidth: true,
    },
    {
      id: "Descripcion_com",
      label: "Nombre del combustible",
      type: "text",
      placeholder: "Digite el combustible",
      fullWidth: true,
    },
  ];


  return (
    <>
      <FormDinamico fields={campos} link={link}/>
    </>
  );
};
