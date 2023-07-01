import axios from "axios";

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
export const getData = async (ruta, data) => {
  try {
    const id = data[Object.keys(data)[0]];
    let total=`${primaryPath}${ruta}/${id}`
    console.log(total)
    const res = await axios.get(total);
    return res.data;
  } catch (err) {
    console.log(err);
    return err;
  }
};

export const addData = async (ruta) => {
  try {
    const data = ruta.formValues;
    const link = ruta.link;
    data[Object.keys(data)[0]] = 0;
    console.log(data);
    const res = await axios.post(`${primaryPath}${link}/`, data);
    return res.data;
  } catch (err) {
    console.log(err);
    return { error: err };
  }
};

export const deleteData = async (ruta, data) => {
  try {
    console.log(data);
    const dataId = data[Object.keys(data)[0]];
    const res = await axios.delete(`${primaryPath}${ruta}/` + dataId);
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
