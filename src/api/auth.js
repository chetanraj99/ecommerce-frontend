import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL; // Your backend API

export const register = async (details) => {
	return await axios.post(`${API_URL}/home/signup`, { ...details });
};

export const login = ({ email, password }) => {
	return axios.post(`${API_URL}/auth/login`, { email, password });
};
