import { makeRequest } from "@/plugins/axios";

// Diplom CRUD
const getDiplomas = () => {
  return makeRequest("/diplomas");
};

const getDiploma = ({ id }) => {
  return makeRequest(`/diplomas/${id}`);
};

const createDiploma = (data) => {
  return makeRequest(`/diplomas`, {
    method: "POST",
    data,
  });
};

const updateDiploma = (id, data) => {
  return makeRequest(`/diplomas/${id}`, {
    method: "PUT",
    data,
  });
};

const deleteDiploma = (id) => {
  return makeRequest(`/diplomas/${id}`, {
    method: "DELETE",
  });
};

// Student CRUD
const getStudents = () => {
  return makeRequest("/students");
};

const getStudent = ({ id }) => {
  return makeRequest(`/students/himself/${id}`);
};

const createStudent = (data) => {
  return makeRequest(`/students`, {
    method: "POST",
    data,
  });
};

const updateStudent = (id, data) => {
  return makeRequest(`/students/${id}`, {
    method: "PUT",
    data,
  });
};

const deleteStudent = (id) => {
  return makeRequest(`/students/${id}`, {
    method: "DELETe",
  });
};
export {
  getDiplomas,
  getDiploma,
  createDiploma,
  updateDiploma,
  deleteDiploma,
  getStudents,
  getStudent,
  createStudent,
  updateStudent,
  deleteStudent,
};
