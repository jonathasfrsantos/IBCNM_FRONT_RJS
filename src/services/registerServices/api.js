import axios from "axios";

const baseUrl = "http://localhost:3000/lancamentos";

export const api = {
    async getAll() {
      try {
        const response = await axios.get(`${baseUrl}`);
        return response.data;
      } catch (error) {
        console.error(error);
      }
    },
  
    async create(data) {
      try {
        const response = await axios.post(`${baseUrl}`, data);
        return response.data;
      } catch (error) {
        console.error(error);
      }
    },
  };