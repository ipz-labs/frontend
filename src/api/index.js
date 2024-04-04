import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: `http://localhost:8080/api/v1/`,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
});

export const setAuthToken = token => {
	if (token) {
		localStorage.setItem('jwt_token', token);
		axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
	} else {
		localStorage.clear();
	}
};

export function parseJwt (token) {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
}
