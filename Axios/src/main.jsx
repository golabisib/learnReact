import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import axios from "axios";

axios.interceptors.request.use(
    (request) => {
        request.headers.Authorization = "token"
        console.log(request)
        return request
    },
    (error) => {
        console.log(error)
        return Promise.reject(error)
    }
)

axios.interceptors.response.use(
    (response) => {
        console.log(response)
        return response.data
    },
    (error) => {
        console.log(error)
        return Promise.reject(error)
    }
)

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
);
