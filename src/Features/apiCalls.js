import axios from "axios";
//http://d0878ff6b82c-18129876520898750185.ngrok-free.app/
const primaryPath = "http://localhost:3000/";

export const getAllData = async (ruta) => {
  try {
    const res = await axios.get(`${primaryPath}${ruta}/`);
    return res.data;
  } catch (err) {
    console.log(err);
    return err;
  }
};

export const getAllDataUsuario = async (ruta, data) => {
  try {
    const res = await axios.post(`${primaryPath}${ruta}`, data);
    return res.data;
  } catch (err) {
    console.log(err);
    return { error: err };
  }
};

export const getData = async (ruta, data) => {
  try {
    const id = data[Object.keys(data)[0]];
    console.log(ruta)
    console.log(id)
    let total = `${primaryPath}${ruta}/${id}`;
    const res = await axios.get(total);
    return res.data;
  } catch (err) {
    console.log(err);
    return err;
  }
};

export const addData = async (ruta, data) => {
  try {
    data[Object.keys(data)[0]] = 0;
    const res = await axios.post(`${primaryPath}${ruta}/`, data);
    console.log("Agregado");
    return res.data;
  } catch (err) {
    console.log(err);
    return { error: err };
  }
};

export const deleteData = async (ruta, data) => {
  try {
    const dataId = data[Object.keys(data)[0]];
    clg;
    const res = await axios.delete(`${primaryPath}${ruta}/` + dataId);
    console.log(dataId);
    return res.data;
  } catch (err) {
    return { error: err };
  }
};

export const updateData = async (ruta, data) => {
  try {
    const dataId = data[Object.keys(data)[0]];
    const res = await axios.put(`${primaryPath}${ruta}/` + dataId, data);
    return res.data;
  } catch (err) {
    return {
      error: err,
    };
  }
};

export const pagoTarjeta = async (ruta, data) => {
  try {
    const res = await axios.post(`${primaryPath}${ruta}/`, data);
    return res.data;
  } catch (err) {
    return {
      error: err,
    };
  }
};
