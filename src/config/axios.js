import axios from "axios"
import history from './history';


let axiosInstance = axios.create({
  baseURL: "http://192.168.0.46:4000",
  timeout: 10000
})

// request inceptors for taking token
axiosInstance.interceptors.request.use(
  config => {
    config.headers.authorization = `bearer ${localStorage.getItem(
      "user"
    )}`
    return config
  },
  error => Promise.reject(error)
)

// response inceptors for handling response
axiosInstance.interceptors.response.use(
  response => {
    return response
  },
  error => {
    if (401 === error.response.status) {
      localStorage.removeItem("user")
      history.replace("/signin")
    } else {
      return Promise.reject(error)
    }
  }
)

export default axiosInstance;
