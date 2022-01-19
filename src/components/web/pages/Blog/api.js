import axios from 'axios';

export const getData = async () => {
    return await axios.get("http://localhost:8000/blogs");
}

export const createData = async ( title, body) => {
    return await axios.post("http://localhost:8000/blogs", {
        body:body,
        title:title
    })
}

export const getSingleData = async (id) => {
    return await axios.get(`http://localhost:8000/blogs/${id}`);
}

export const deleteData = async (id) => {
    return await axios.delete(`http://localhost:8000/blogs/${id}`);
}

export const updateData = async (id,title,body) => {
    return await axios.put(`http://localhost:8000/blogs/${id}`, {
        body:body,
        title:title
    });
}