export const reducerGeneral = (state, action, link) => {
  console.log("link: " + link);
  console.log("action: " + action);
  console.log("state: " + JSON.stringify(state));
  switch (action.type) {
    case "guardar":
      fetch(action.link, {
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
