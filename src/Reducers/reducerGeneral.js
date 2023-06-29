export const reducerGeneral = (state, action, link) => {
  switch (action.type) {
    case "guardar":
      console.log(state);
      fetch(link, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(state),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Guardado exitoso:", data);
        })
        .catch((error) => {
          console.error("Error al guardar:", error);
        });
      break;
    case "eliminar":
      fetch(`${link}/${state.id}`, { method: "DELETE" })
        .then((response) => response.json())
        .then((data) => {
          console.log("Eliminación exitosa:", data);
        })
        .catch((error) => {
          console.error("Error al eliminar:", error);
        });
      break;
    default:
      console.error(action.type);
      break;
  }
};
